/**
 * simulado.js — Simulados gerados a partir das provas anteriores da ACAFE.
 *
 * Telas:
 *   #/simulados                     → montar um novo simulado / continuar / histórico
 *   #/simulado                      → fazendo o simulado em andamento
 *   #/simulado/resultado/<n>        → resultado da tentativa n + revisão com explicações
 *
 * Dois tipos de simulado, ambos com a língua estrangeira escolhida (Espanhol ou Inglês):
 *   - Aleatório: SORTEIA questões do banco de todas as provas anteriores
 *     (dados/provas-anteriores.js), no formato da prova ACAFE: 63 questões, com a
 *     mesma quantidade por bloco/matéria (ver BLOCOS). Questões feitas nos últimos
 *     30 dias (simulados finalizados e respostas marcadas) não entram; se faltarem
 *     questões novas, completa com as feitas há mais tempo. Questões que
 *     compartilham um texto-base ou imagem ficam juntas.
 *   - Prova completa de um ano: a prova escolhida, na ordem original.
 *
 * Funciona como a prova real: marca-se (e troca-se) a resposta, navega-se
 * livremente, e gabarito e explicações só aparecem ao finalizar. O cronômetro é
 * regressivo (5 horas, a duração da ACAFE) e pausa quando se sai da tela.
 */

import { icone } from './icones.js';
import { confirmar } from './confirmar.js';
import { htmlImagens, htmlAlternativa, vincularImagens, aplicarFeedback } from './render-questao.js';
import {
  lerSimulado, salvarSimuladoAtual, descartarSimuladoAtual, registrarTentativaSimulado,
  idDoSimulado, registrarNaMemoria, removerDaMemoria, lerMemoria,
} from './armazenamento.js';

/** Duração da prova ACAFE (redação + 63 questões objetivas). */
const DURACAO_MS = 5 * 60 * 60 * 1000;

/**
 * Formato da prova ACAFE (igual em todas as edições de 2021 a 2026):
 * faixa de numeração de cada bloco na prova original e quantas questões o
 * simulado sorteia dele. O bloco de língua estrangeira usa o idioma escolhido.
 */
export const BLOCOS = [
  { id: 'portugues',  nome: 'Língua Portuguesa',  de: 1,  ate: 10, quantidade: 10 },
  { id: 'literatura', nome: 'Literatura',         de: 11, ate: 14, quantidade: 4 },
  { id: 'lingua',     nome: null,                 de: 15, ate: 21, quantidade: 7 },  // Espanhol ou Inglês
  { id: 'matematica', nome: 'Matemática',         de: 22, ate: 28, quantidade: 7 },
  { id: 'fisica',     nome: 'Física',             de: 29, ate: 35, quantidade: 7 },
  { id: 'quimica',    nome: 'Química',            de: 36, ate: 42, quantidade: 7 },
  { id: 'biologia',   nome: 'Biologia',           de: 43, ate: 49, quantidade: 7 },
  { id: 'historia',   nome: 'História',           de: 50, ate: 56, quantidade: 7 },
  { id: 'geografia',  nome: 'Geografia',          de: 57, ate: 63, quantidade: 7 },
];

const IDIOMAS = ['Espanhol', 'Inglês'];

/* ================================================================
   Banco de questões e sorteio
   ================================================================ */

const nomeBloco = (bloco, idioma) => bloco.nome || `Língua Estrangeira (${idioma})`;

/** Bloco ao qual uma questão pertence (pela numeração na prova original). */
function blocoDa(questao) {
  return BLOCOS.find(b => questao.numeroOriginal >= b.de && questao.numeroOriginal <= b.ate);
}

/** Questões disponíveis para um bloco, no idioma escolhido. */
function bancoDoBloco(questoesProvas, bloco, idioma) {
  return questoesProvas.filter(q => {
    if (blocoDa(q) !== bloco) return false;
    if (bloco.id === 'lingua') return q.disciplina === idioma;
    return !IDIOMAS.includes(q.disciplina);
  });
}

function embaralhar(lista) {
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Chave que agrupa questões que usam o mesmo texto-base ou a mesma imagem. */
function chaveDeGrupo(q) {
  if (q.textoApoio) return 'texto:' + q.textoApoio;
  if (q.imagem) return 'imagem:' + [].concat(q.imagem)[0];
  return 'questao:' + q.id;
}

/** Janela em que questões já feitas não voltam a cair no simulado aleatório. */
const DIAS_SEM_REPETIR = 30;

/**
 * Quando cada questão foi feita pela última vez (ms): questões de simulados
 * finalizados e respostas marcadas (memória de erros e acertos).
 * @returns {Object<string, number>}
 */
function ultimaVezFeita() {
  const ultima = {};
  const anotar = (id, t) => { if (t > (ultima[id] || 0)) ultima[id] = t; };
  lerSimulado().tentativas.forEach(t => (t.ids || []).forEach(id => anotar(id, new Date(t.data).getTime())));
  lerMemoria().forEach(m => anotar(m.q, m.t));
  return ultima;
}

/**
 * Para cada bloco, quantas questões do banco o aluno NÃO fez nos últimos 30 dias.
 * @returns {{ bloco: Object, banco: number, novas: number }[]}
 */
function disponibilidade(questoesProvas, idioma) {
  const limite = Date.now() - DIAS_SEM_REPETIR * 86400000;
  const ultima = ultimaVezFeita();
  return BLOCOS.map(bloco => {
    const banco = bancoDoBloco(questoesProvas, bloco, idioma);
    return { bloco, banco: banco.length, novas: banco.filter(q => !(ultima[q.id] > limite)).length };
  });
}

/**
 * Sorteia um simulado aleatório completo.
 * Questões feitas nos últimos 30 dias não entram; se o banco não tiver questões
 * novas suficientes num bloco, completa com as feitas há mais tempo.
 * @param {Object[]} questoesProvas
 * @param {string}   idioma - 'Espanhol' | 'Inglês'
 * @returns {{ ids: string[], repetidas: number }} ids na ordem da prova
 */
export function sortearSimulado(questoesProvas, idioma) {
  const limite = Date.now() - DIAS_SEM_REPETIR * 86400000;
  const ultima = ultimaVezFeita();

  const ids = [];
  let repetidas = 0;
  BLOCOS.forEach(bloco => {
    const banco = embaralhar(bancoDoBloco(questoesProvas, bloco, idioma));
    const novas  = banco.filter(q => !(ultima[q.id] > limite));
    const feitas = banco.filter(q => ultima[q.id] > limite)
      .sort((a, b) => ultima[a.id] - ultima[b.id]);           // feitas há mais tempo primeiro
    const escolhidas = [...novas, ...feitas].slice(0, bloco.quantidade);
    repetidas += escolhidas.filter(q => ultima[q.id] > limite).length;

    // Agrupa as que compartilham texto/imagem; embaralha os grupos; dentro do grupo, ordem original
    const grupos = new Map();
    escolhidas.forEach(q => {
      const k = chaveDeGrupo(q);
      if (!grupos.has(k)) grupos.set(k, []);
      grupos.get(k).push(q);
    });
    embaralhar([...grupos.values()]).forEach(g =>
      g.sort((a, b) => a.prova.localeCompare(b.prova) || a.numeroOriginal - b.numeroOriginal)
       .forEach(q => ids.push(q.id)));
  });
  return { ids, repetidas };
}

/**
 * Monta a prova completa de uma edição, na ordem original, com o idioma escolhido.
 * @returns {string[]} ids
 */
function montarProva(questoesProvas, prova, idioma) {
  return questoesProvas
    .filter(q => q.prova === prova && (!IDIOMAS.includes(q.disciplina) || q.disciplina === idioma))
    .sort((a, b) => a.numeroOriginal - b.numeroOriginal)
    .map(q => q.id);
}

/** Título de um simulado/tentativa: a prova escolhida ou "Simulado aleatório". */
const tituloSimulado = s => (s.modo === 'prova' ? s.prova : 'Simulado aleatório');

/** Converte ids em questões (ignora ids que não existam mais no banco). */
function questoesPorIds(questoesProvas, ids) {
  const mapa = new Map(questoesProvas.map(q => [q.id, q]));
  return ids.map(id => mapa.get(id)).filter(Boolean);
}

/* ================================================================
   Utilidades
   ================================================================ */

function formatarTempo(ms) {
  const negativo = ms < 0;
  const s = Math.floor(Math.abs(ms) / 1000);
  const h = Math.floor(s / 3600);
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
  const seg = String(s % 60).padStart(2, '0');
  return `${negativo ? '+' : ''}${h}:${m}:${seg}`;
}

function formatarData(iso) {
  return new Date(iso).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

const plural = (n, um, varios) => `${n} ${n === 1 ? um : varios}`;

/** Lista das provas presentes no banco, da mais recente para a mais antiga. */
function provasNoBanco(questoesProvas) {
  const chave = nome => Number((nome.match(/\d{4}/) || [0])[0]) * 10 + (/inverno/i.test(nome) ? 1 : 0);
  return [...new Set(questoesProvas.map(q => q.prova))].sort((a, b) => chave(b) - chave(a));
}

/* ================================================================
   Tela: montar / continuar / histórico
   ================================================================ */

/**
 * @param {HTMLElement} container
 * @param {Object[]}    questoesProvas - window.QUESTOES_PROVAS
 */
export function renderizarTelaSimulados(container, questoesProvas) {
  const { atual, tentativas } = lerSimulado();
  const provas = provasNoBanco(questoesProvas);
  const ultimaTentativa = tentativas[tentativas.length - 1];
  const idiomaPadrao = atual?.idioma || ultimaTentativa?.idioma || 'Espanhol';
  const modoPadrao   = atual?.modo || ultimaTentativa?.modo || 'aleatorio';
  const provaPadrao  = atual?.prova || ultimaTentativa?.prova || provas[0];

  /** Tabela de composição + avisos, conforme o tipo, a prova e o idioma escolhidos. */
  function htmlComposicao(modo, prova, idioma) {
    if (modo === 'prova') {
      const qs = questoesPorIds(questoesProvas, montarProva(questoesProvas, prova, idioma));
      const linhas = BLOCOS.map(b => {
        const n = qs.filter(q => blocoDa(q) === b).length;
        return `<tr><td>${nomeBloco(b, idioma)}</td><td class="simulado-tabela__num">${n}</td></tr>`;
      }).join('');
      const feitas = tentativas.filter(t => t.modo === 'prova' && t.prova === prova && t.idioma === idioma);
      return `
        <table class="simulado-tabela">
          <caption>${prova} — ${plural(qs.length, 'questão', 'questões')}, na ordem original</caption>
          <thead><tr><th>Matéria</th><th>Questões</th></tr></thead>
          <tbody>${linhas}</tbody>
        </table>
        ${qs.length < 63 ? '<p class="simulado-card__info">Questões anuladas pela ACAFE não entram na prova.</p>' : ''}
        ${feitas.length ? `<p class="simulado-aviso">Você já fez esta prova ${plural(feitas.length, 'vez', 'vezes')} (última em ${formatarData(feitas[feitas.length - 1].data)}).</p>` : ''}`;
    }

    const disp = disponibilidade(questoesProvas, idioma);
    const linhas = disp.map(({ bloco, banco, novas }) => `
      <tr>
        <td>${nomeBloco(bloco, idioma)}</td>
        <td class="simulado-tabela__num">${bloco.quantidade}</td>
        <td class="simulado-tabela__num">${banco}</td>
        <td class="simulado-tabela__num${novas < bloco.quantidade ? ' simulado-tabela__falta' : ''}">${novas}</td>
      </tr>`).join('');
    const repetir = disp.reduce((s, d) => s + Math.max(0, Math.min(d.bloco.quantidade, d.banco) - d.novas), 0);
    return `
      <table class="simulado-tabela">
        <caption>Composição do simulado (formato da prova ACAFE)</caption>
        <thead><tr><th>Matéria</th><th>Questões</th><th>No banco</th><th>Novas para você</th></tr></thead>
        <tbody>${linhas}</tbody>
      </table>
      <p class="simulado-card__info">
        "Novas para você" são as questões que você não fez nos últimos ${DIAS_SEM_REPETIR} dias: só elas entram no sorteio.
      </p>
      ${repetir ? `<p class="simulado-aviso">
        O banco ainda não tem questões novas suficientes: <strong>${plural(repetir, 'questão vai se repetir', 'questões vão se repetir')}</strong>
        (as que você fez há mais tempo). Isso diminui conforme novas provas forem cadastradas.
      </p>` : ''}`;
  }

  const emAndamento = atual ? (() => {
    const respondidas = Object.keys(atual.respostas).length;
    return `
      <section class="simulado-card simulado-card--destaque" aria-label="Simulado em andamento">
        <div class="simulado-card__icone" aria-hidden="true">${icone('clock', 22)}</div>
        <div class="simulado-card__corpo">
          <h3 class="simulado-card__titulo">Em andamento: ${tituloSimulado(atual)}</h3>
          <p class="simulado-card__info">
            ${atual.idioma} • ${respondidas}/${atual.ids.length} respondidas •
            ${formatarTempo(atual.tempoMs)} de prova • iniciado em ${formatarData(atual.criadoEm)}
          </p>
        </div>
        <div class="simulado-card__acoes">
          <button type="button" class="btn btn-secundario" id="btn-descartar">${icone('x', 16)} Descartar</button>
          <a href="#/simulado" class="btn btn-primario">Continuar</a>
        </div>
      </section>`;
  })() : '';

  const historico = tentativas.length ? `
    <section aria-label="Histórico de simulados">
      <h3 class="resultado-erradas-titulo">Simulados realizados</h3>
      <ul class="simulado-historico">
        ${tentativas.map((t, i) => ({ t, i })).reverse().map(({ t, i }) => `
          <li>
            <span>${formatarData(t.data)} • ${tituloSimulado(t)} • ${t.idioma} • <strong>${t.acertos}/${t.total}</strong>
              (${Math.round(t.acertos / t.total * 100)}%) em ${formatarTempo(t.tempoMs)}</span>
            <a href="#/simulado/resultado/${i}" class="btn btn-secundario btn-pequeno">Ver resultado</a>
          </li>`).join('')}
      </ul>
    </section>` : '';

  container.innerHTML = `
    <div class="tela-questoes">
      <div class="container">
        <header class="questoes-cabecalho">
          <div class="questoes-nav-linha">
            <a href="#/" class="btn-voltar">${icone('arrow-left', 18)} Voltar ao início</a>
          </div>
          <h2 class="simulados-titulo">Simulados — Provas Anteriores</h2>
          <p class="simulados-descricao">
            Faça um simulado com questões sorteadas das provas anteriores da ACAFE, no mesmo formato
            da prova, ou escolha a prova completa de um ano. Responda como no dia do vestibular:
            o gabarito e as explicações aparecem só quando você finalizar.
          </p>
        </header>

        <div class="simulados-conteudo">
          ${emAndamento}

          <section class="simulado-card simulado-card--novo" aria-label="Novo simulado">
            <div class="simulado-card__corpo">
              <fieldset class="simulado-modo">
                <legend>Tipo de simulado</legend>
                <label class="simulado-modo__opcao">
                  <input type="radio" name="modo" value="aleatorio" ${modoPadrao === 'aleatorio' ? 'checked' : ''}>
                  <span class="simulado-modo__icone" aria-hidden="true">${icone('refresh-cw', 26)}</span>
                  <span class="simulado-modo__texto">
                    <span class="simulado-modo__titulo">Aleatório</span>
                    <span class="simulado-modo__descricao">Questões sorteadas e misturadas das provas anteriores, no formato da ACAFE</span>
                  </span>
                </label>
                <label class="simulado-modo__opcao">
                  <input type="radio" name="modo" value="prova" ${modoPadrao === 'prova' ? 'checked' : ''}>
                  <span class="simulado-modo__icone" aria-hidden="true">${icone('clipboard-list', 26)}</span>
                  <span class="simulado-modo__texto">
                    <span class="simulado-modo__titulo">Prova completa de um ano</span>
                    <span class="simulado-modo__descricao">Escolha uma prova anterior e faça ela inteira, na ordem original</span>
                  </span>
                </label>
              </fieldset>

              <label class="simulado-prova" id="simulado-escolha-prova">
                <span>Prova</span>
                <select name="prova" class="simulado-prova__select">
                  ${provas.map(p => `<option value="${p}" ${p === provaPadrao ? 'selected' : ''}>${p}</option>`).join('')}
                </select>
              </label>

              <fieldset class="simulado-idioma">
                <legend>Língua estrangeira</legend>
                ${IDIOMAS.map(idioma => `
                  <label class="simulado-idioma__opcao">
                    <input type="radio" name="idioma" value="${idioma}" ${idioma === idiomaPadrao ? 'checked' : ''}>
                    <span>${idioma}</span>
                  </label>`).join('')}
              </fieldset>

              <div id="simulado-composicao"></div>

              <p class="simulado-card__info">
                Banco atual: ${plural(provas.length, 'prova', 'provas')} (${provas.join(', ') || '—'}).
                Tempo de prova: 5 horas (o cronômetro pausa quando você sai da tela).
              </p>
            </div>
            <div class="simulado-card__acoes">
              <button type="button" class="btn btn-primario" id="btn-gerar" ${questoesProvas.length ? '' : 'disabled'}>
                ${icone('clipboard-list', 16)} <span id="btn-gerar-texto">Gerar simulado</span>
              </button>
            </div>
          </section>

          ${historico}
        </div>
      </div>
    </div>
  `;

  const escolha = () => ({
    modo:   container.querySelector('input[name="modo"]:checked').value,
    prova:  container.querySelector('select[name="prova"]').value,
    idioma: container.querySelector('input[name="idioma"]:checked').value,
  });

  function atualizarEscolha() {
    const { modo, prova, idioma } = escolha();
    container.querySelector('#simulado-escolha-prova').hidden = modo !== 'prova';
    container.querySelector('#simulado-composicao').innerHTML = htmlComposicao(modo, prova, idioma);
    container.querySelector('#btn-gerar-texto').textContent = modo === 'prova' ? 'Começar prova' : 'Gerar simulado';
  }
  container.querySelectorAll('input[name="modo"], input[name="idioma"], select[name="prova"]')
    .forEach(el => el.addEventListener('change', atualizarEscolha));
  atualizarEscolha();

  container.querySelector('#btn-descartar')?.addEventListener('click', async () => {
    if (!(await confirmar({
      titulo: 'Descartar o simulado em andamento?',
      mensagem: 'As respostas marcadas e o tempo serão apagados, e as marcações deste simulado saem da sua memória de erros e acertos.',
      textoConfirmar: 'Descartar',
      perigo: true,
    }))) return;
    descartarSimuladoAtual();
    renderizarTelaSimulados(container, questoesProvas);
  });

  container.querySelector('#btn-gerar').addEventListener('click', async () => {
    if (lerSimulado().atual) {
      if (!(await confirmar({
        titulo: 'Começar um novo simulado?',
        mensagem: 'Já existe um simulado em andamento. Começar um novo vai descartá-lo e apagar as marcações dele da sua memória de erros e acertos.',
        textoConfirmar: 'Descartar e começar novo',
        perigo: true,
      }))) return;
      descartarSimuladoAtual();
    }
    const { modo, prova, idioma } = escolha();
    const ids = modo === 'prova'
      ? montarProva(questoesProvas, prova, idioma)
      : sortearSimulado(questoesProvas, idioma).ids;
    salvarSimuladoAtual({
      id: `sim-${Date.now()}`,
      modo,
      ...(modo === 'prova' ? { prova } : {}),
      idioma,
      ids,
      respostas: {},
      tempoMs: 0,
      indice: 0,
      criadoEm: new Date().toISOString(),
    });
    window.location.hash = '#/simulado';
  });
}

/* ================================================================
   Estado do simulado em andamento
   ================================================================ */

let sim = null;   // { atual, questoes, inicioTrecho, timer }

function tempoDecorrido() {
  if (!sim) return 0;
  return sim.atual.tempoMs + (sim.inicioTrecho ? Date.now() - sim.inicioTrecho : 0);
}

function salvarProgresso() {
  if (!sim) return;
  salvarSimuladoAtual({ ...sim.atual, tempoMs: tempoDecorrido() });
}

/** Pausa o cronômetro (ao sair da tela) e grava o tempo acumulado. */
function pausarCronometro() {
  if (!sim || !sim.inicioTrecho) return;
  sim.atual.tempoMs = tempoDecorrido();
  sim.inicioTrecho = null;
  clearInterval(sim.timer);
  salvarProgresso();
}

// Garante que o tempo é salvo se a aba for fechada ou escondida
window.addEventListener('pagehide', pausarCronometro);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) pausarCronometro();
  else if (sim && !sim.inicioTrecho && document.getElementById('simulado-cronometro')) iniciarCronometro();
});

function iniciarCronometro() {
  sim.inicioTrecho = Date.now();
  clearInterval(sim.timer);
  let ticks = 0;
  const atualizar = () => {
    const el = document.getElementById('simulado-cronometro');
    if (!el) { pausarCronometro(); return; }       // saiu da tela do simulado
    const restante = DURACAO_MS - tempoDecorrido();
    el.textContent = restante >= 0 ? formatarTempo(restante) : `Tempo esgotado ${formatarTempo(restante)}`;
    el.classList.toggle('simulado-cronometro--alerta', restante < 30 * 60 * 1000);
    if (++ticks % 10 === 0) salvarProgresso();      // grava a cada 10 s
  };
  atualizar();
  sim.timer = setInterval(atualizar, 1000);
}

/* ================================================================
   Tela: fazendo o simulado
   ================================================================ */

/**
 * Abre o simulado em andamento. Sem simulado em andamento, volta para #/simulados.
 * @param {HTMLElement} container
 * @param {Object[]}    questoesProvas
 */
export function iniciarSimulado(container, questoesProvas) {
  if (sim) pausarCronometro();
  const atual = lerSimulado().atual;
  if (!atual) { window.location.hash = '#/simulados'; return; }

  const questoes = questoesPorIds(questoesProvas, atual.ids);
  sim = {
    atual: { ...atual, ids: questoes.map(q => q.id), indice: Math.min(atual.indice || 0, questoes.length - 1) },
    questoes,
    inicioTrecho: null,
    timer: null,
  };
  renderizarQuestaoSimulado(container);
  iniciarCronometro();
}

function renderizarQuestaoSimulado(container) {
  const { questoes } = sim;
  const { indice, respostas, idioma } = sim.atual;
  const questao = questoes[indice];
  const total = questoes.length;
  const respondidas = questoes.filter(q => respostas[q.id]).length;
  const ultima = indice === total - 1;

  container.innerHTML = `
    <div class="tela-questoes">
      <div class="container">
        <header class="questoes-cabecalho">
          <div class="questoes-nav-linha">
            <a href="#/simulados" class="btn-voltar">${icone('arrow-left', 18)} Sair (o progresso fica salvo)</a>
            <span class="simulado-cronometro-caixa" title="Tempo restante de prova">
              ${icone('clock', 16)} <span id="simulado-cronometro" class="simulado-cronometro">--:--:--</span>
            </span>
          </div>
          <div class="questoes-meta" id="simulado-meta">
            <span class="questoes-meta__disciplina">${tituloSimulado(sim.atual)} • ${idioma}</span>
            <span class="questoes-meta__separador" aria-hidden="true">•</span>
            <span>Questão <strong>${indice + 1}</strong> de <strong>${total}</strong></span>
            <span class="questoes-meta__separador" aria-hidden="true">•</span>
            <span>${respondidas} respondida${respondidas === 1 ? '' : 's'}</span>
          </div>
          <div class="barra-progresso-container" role="progressbar" aria-valuenow="${Math.round(respondidas / total * 100)}" aria-valuemin="0" aria-valuemax="100" aria-label="${respondidas} de ${total} questões respondidas">
            <div class="barra-progresso-preenchimento" style="width: ${respondidas / total * 100}%"></div>
          </div>
          ${htmlNavegador(questoes, indice, i => respostas[questoes[i].id] ? 'respondida' : 'pendente', idioma)}
        </header>

        <article class="questao-card">
          <div class="questoes-meta simulado-questao-meta">
            <span class="questoes-meta__disciplina">${nomeBloco(blocoDa(questao), idioma)}</span>
          </div>
          ${htmlImagens(questao)}
          ${questao.textoApoio ? `<div class="questao-texto-apoio">${questao.textoApoio}</div>` : ''}
          <div class="questao-enunciado">${questao.enunciado}</div>
          <ul class="alternativas-lista" id="alternativas-lista" role="list">
            ${questao.alternativas.map(htmlAlternativa).join('')}
          </ul>
          <p class="simulado-dica">Clique numa alternativa para marcar; clique de novo para desmarcar.</p>

          <div class="questao-acoes">
            <button type="button" class="btn btn-secundario" id="btn-finalizar">${icone('check', 16)} Finalizar simulado</button>
            <div class="questao-acoes__direita">
              <button type="button" class="btn btn-secundario" id="btn-anterior" ${indice === 0 ? 'disabled' : ''}>
                ${icone('arrow-left', 16)} Anterior
              </button>
              ${ultima ? '' : `
                <button type="button" class="btn btn-primario" id="btn-proxima">
                  Próxima ${icone('arrow-left', 16, 'icone-rotacionado')}
                </button>`}
            </div>
          </div>
        </article>
      </div>
    </div>
  `;

  const lista = container.querySelector('#alternativas-lista');
  marcarAlternativa(lista, respostas[questao.id]);
  vincularImagens(container);

  lista.addEventListener('click', (e) => {
    const btn = e.target.closest('.alternativa-btn');
    if (!btn) return;
    const letra = btn.dataset.letra;
    const simuladoId = idDoSimulado(sim.atual);
    if (respostas[questao.id] === letra) {
      delete respostas[questao.id];
      removerDaMemoria(simuladoId, questao.id);
    } else {
      respostas[questao.id] = letra;
      registrarNaMemoria({ questaoId: questao.id, letra, acertou: letra === questao.gabarito, origem: 'simulado', simuladoId });
    }
    marcarAlternativa(lista, respostas[questao.id]);
    atualizarRespondidas(container);
    salvarProgresso();
  });

  container.querySelector('#btn-anterior').addEventListener('click', () => irPara(container, indice - 1));
  container.querySelector('#btn-proxima')?.addEventListener('click', () => irPara(container, indice + 1));
  container.querySelector('#navegador-questoes').addEventListener('click', (e) => {
    const btn = e.target.closest('.navegador-questoes__btn');
    if (btn) irPara(container, Number(btn.dataset.indice));
  });
  container.querySelector('#btn-finalizar').addEventListener('click', finalizar);
}

function marcarAlternativa(lista, letra) {
  lista.querySelectorAll('.alternativa-btn').forEach(btn => {
    const marcada = btn.dataset.letra === letra;
    btn.classList.toggle('alternativa-btn--selecionada', marcada);
    btn.setAttribute('aria-pressed', String(marcada));
  });
}

/** Atualiza contador, barra e navegador sem redesenhar a questão. */
function atualizarRespondidas(container) {
  const { questoes } = sim;
  const { respostas, indice } = sim.atual;
  const respondidas = questoes.filter(q => respostas[q.id]).length;
  container.querySelector('#simulado-meta').lastElementChild.textContent =
    `${respondidas} respondida${respondidas === 1 ? '' : 's'}`;
  container.querySelector('.barra-progresso-preenchimento').style.width = `${respondidas / questoes.length * 100}%`;
  container.querySelector(`.navegador-questoes__btn[data-indice="${indice}"]`)
    .classList.toggle('navegador-questoes__btn--respondida', Boolean(respostas[questoes[indice].id]));
}

function irPara(container, indice) {
  sim.atual.indice = Math.max(0, Math.min(indice, sim.questoes.length - 1));
  salvarProgresso();
  renderizarQuestaoSimulado(container);
  container.querySelector('.questoes-cabecalho')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Navegador numerado, separado por matéria.
 * `situacao(i)` devolve: respondida | pendente | certa | errada | branco.
 */
function htmlNavegador(questoes, atual, situacao, idioma) {
  const grupos = [];
  questoes.forEach((q, i) => {
    const nome = nomeBloco(blocoDa(q), idioma);
    if (!grupos.length || grupos[grupos.length - 1].nome !== nome) grupos.push({ nome, itens: [] });
    grupos[grupos.length - 1].itens.push(i);
  });
  return `
    <details class="navegador-questoes" id="navegador-questoes" open>
      <summary>Ir para a questão</summary>
      <div class="simulado-navegador">
        ${grupos.map(g => `
          <div class="simulado-navegador__grupo">
            <span class="simulado-navegador__materia">${g.nome}</span>
            <ol class="navegador-questoes__lista">
              ${g.itens.map(i => `
                <li>
                  <button type="button"
                    class="navegador-questoes__btn navegador-questoes__btn--${situacao(i)}${i === atual ? ' navegador-questoes__btn--atual' : ''}"
                    data-indice="${i}" ${i === atual ? 'aria-current="true"' : ''}
                    aria-label="Questão ${i + 1}">${i + 1}</button>
                </li>`).join('')}
            </ol>
          </div>`).join('')}
      </div>
    </details>
  `;
}

async function finalizar() {
  const { questoes } = sim;
  const { respostas } = sim.atual;
  const emBranco = questoes.filter(q => !respostas[q.id]).length;
  const confirmado = await confirmar(emBranco
    ? {
        titulo: 'Finalizar o simulado?',
        mensagem: `Você deixou <strong>${plural(emBranco, 'questão', 'questões')} em branco</strong>. Questões em branco não pontuam.`,
        textoConfirmar: 'Finalizar mesmo assim',
        textoCancelar: 'Continuar respondendo',
      }
    : {
        titulo: 'Finalizar o simulado?',
        mensagem: 'Você vai ver sua nota, o gabarito e as explicações.',
        textoConfirmar: 'Finalizar',
        textoCancelar: 'Continuar respondendo',
      });
  if (!confirmado || !sim) return;

  pausarCronometro();
  const acertos = questoes.filter(q => respostas[q.id] === q.gabarito).length;
  registrarTentativaSimulado({
    id: idDoSimulado(sim.atual),
    modo: sim.atual.modo || 'aleatorio',
    ...(sim.atual.prova ? { prova: sim.atual.prova } : {}),
    data: new Date().toISOString(),
    idioma: sim.atual.idioma,
    ids: questoes.map(q => q.id),
    respostas: { ...respostas },
    acertos,
    total: questoes.length,
    tempoMs: sim.atual.tempoMs,
  });
  sim = null;
  window.location.hash = `#/simulado/resultado/${lerSimulado().tentativas.length - 1}`;
}

/* ================================================================
   Tela: resultado + revisão
   ================================================================ */

/**
 * Mostra o resultado de uma tentativa.
 * @returns {boolean} false se a tentativa não existir
 */
export function renderizarResultadoSimulado(container, questoesProvas, n) {
  const { tentativas } = lerSimulado();
  const tentativa = tentativas[n];
  if (!tentativa) return false;

  const questoes = questoesPorIds(questoesProvas, tentativa.ids);
  const r = tentativa.respostas;
  const total = questoes.length;
  const acertos = questoes.filter(q => r[q.id] === q.gabarito).length;
  const emBranco = questoes.filter(q => !r[q.id]).length;
  const pct = total ? Math.round((acertos / total) * 100) : 0;

  // Desempenho por matéria (blocos da prova)
  const materias = BLOCOS.map(b => {
    const qs = questoes.filter(q => blocoDa(q) === b);
    return { nome: nomeBloco(b, tentativa.idioma), acertos: qs.filter(q => r[q.id] === q.gabarito).length, total: qs.length };
  }).filter(m => m.total);

  const situacao = i => {
    const q = questoes[i];
    return !r[q.id] ? 'branco' : r[q.id] === q.gabarito ? 'certa' : 'errada';
  };

  container.innerHTML = `
    <div class="tela-questoes">
      <div class="container">
        <header class="questoes-cabecalho">
          <div class="questoes-nav-linha">
            <a href="#/simulados" class="btn-voltar">${icone('arrow-left', 18)} Voltar aos simulados</a>
          </div>
        </header>

        <div class="resultado-tela">
          <div class="resultado-resumo">
            ${icone('trophy', 48)}
            <p class="simulado-resultado-prova">${tituloSimulado(tentativa)} • ${tentativa.idioma} • ${formatarData(tentativa.data)}</p>
            <p class="resultado-pontuacao">${acertos}<span>/${total}</span></p>
            <p class="resultado-percentual">${pct}% de acertos • ${plural(total - acertos - emBranco, 'erro', 'erros')} • ${emBranco} em branco</p>
            <p class="resultado-percentual">Tempo de prova: ${formatarTempo(tentativa.tempoMs)}</p>
          </div>

          <section aria-label="Desempenho por matéria">
            <h3 class="resultado-erradas-titulo">Desempenho por matéria</h3>
            <div class="simulado-materias">
              ${materias.map(m => {
                const p = Math.round((m.acertos / m.total) * 100);
                return `
                  <div class="simulado-materia">
                    <span class="simulado-materia__nome">${m.nome}</span>
                    <span class="simulado-materia__barra" aria-hidden="true"><span style="width:${p}%"></span></span>
                    <span class="simulado-materia__nota">${m.acertos}/${m.total}</span>
                  </div>`;
              }).join('')}
            </div>
          </section>

          <section aria-label="Gabarito">
            <h3 class="resultado-erradas-titulo">Gabarito — clique numa questão para revisar com as explicações</h3>
            <div id="simulado-gabarito">
              ${htmlNavegador(questoes, -1, situacao, tentativa.idioma)}
            </div>
            <p class="simulado-legenda">
              <span class="simulado-legenda__item simulado-legenda__item--certa">Acerto</span>
              <span class="simulado-legenda__item simulado-legenda__item--errada">Erro</span>
              <span class="simulado-legenda__item">Em branco</span>
            </p>
          </section>

          <div class="resultado-acoes">
            <a href="#/simulados" class="btn btn-secundario">${icone('arrow-left', 16)} Simulados</a>
            <button type="button" class="btn btn-primario" id="btn-revisar">Revisar questões</button>
          </div>
        </div>
      </div>
    </div>
  `;

  const revisar = i => renderizarRevisao(container, questoes, tentativa, i,
    () => renderizarResultadoSimulado(container, questoesProvas, n));
  container.querySelector('#btn-revisar').addEventListener('click', () => revisar(0));
  container.querySelector('#simulado-gabarito').addEventListener('click', (e) => {
    const btn = e.target.closest('.navegador-questoes__btn');
    if (btn) revisar(Number(btn.dataset.indice));
  });
  return true;
}

/**
 * Revisão de uma questão finalizada: resposta marcada, gabarito, explicações
 * e de qual prova a questão veio.
 */
function renderizarRevisao(container, questoes, tentativa, indice, voltarAoResultado) {
  const r = tentativa.respostas;
  const questao = questoes[indice];
  const situacao = i => {
    const q = questoes[i];
    return !r[q.id] ? 'branco' : r[q.id] === q.gabarito ? 'certa' : 'errada';
  };

  container.innerHTML = `
    <div class="tela-questoes">
      <div class="container">
        <header class="questoes-cabecalho">
          <div class="questoes-nav-linha">
            <button type="button" class="btn-voltar" id="btn-voltar-resultado">${icone('arrow-left', 18)} Voltar ao resultado</button>
            <span class="questoes-contador">Revisão • Questão <strong>${indice + 1}</strong> de <strong>${questoes.length}</strong></span>
          </div>
          <div class="questoes-meta">
            <span class="questoes-meta__disciplina">${questao.disciplina}</span>
            <span class="questoes-meta__separador" aria-hidden="true">•</span>
            <span>${questao.subtopico}</span>
            <span class="questoes-meta__separador" aria-hidden="true">•</span>
            <span>${questao.prova} — questão ${questao.numeroOriginal}</span>
          </div>
          ${htmlNavegador(questoes, indice, situacao, tentativa.idioma)}
        </header>

        <article class="questao-card">
          ${htmlImagens(questao)}
          ${questao.textoApoio ? `<div class="questao-texto-apoio">${questao.textoApoio}</div>` : ''}
          <div class="questao-enunciado">${questao.enunciado}</div>
          <ul class="alternativas-lista" id="alternativas-lista" role="list">
            ${questao.alternativas.map(htmlAlternativa).join('')}
          </ul>
          <div class="feedback-area" id="feedback-area" role="status"></div>
          <div class="questao-acoes">
            <span></span>
            <div class="questao-acoes__direita">
              <button type="button" class="btn btn-secundario" id="btn-anterior" ${indice === 0 ? 'disabled' : ''}>
                ${icone('arrow-left', 16)} Anterior
              </button>
              ${indice < questoes.length - 1 ? `
                <button type="button" class="btn btn-primario" id="btn-proxima">
                  Próxima ${icone('arrow-left', 16, 'icone-rotacionado')}
                </button>` : ''}
            </div>
          </div>
        </article>
      </div>
    </div>
  `;

  aplicarFeedback(container, questao, r[questao.id] || null);
  vincularImagens(container);

  const ir = i => {
    renderizarRevisao(container, questoes, tentativa, i, voltarAoResultado);
    container.querySelector('.questoes-cabecalho')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  container.querySelector('#btn-voltar-resultado').addEventListener('click', voltarAoResultado);
  container.querySelector('#btn-anterior').addEventListener('click', () => ir(indice - 1));
  container.querySelector('#btn-proxima')?.addEventListener('click', () => ir(indice + 1));
  container.querySelector('#navegador-questoes').addEventListener('click', (e) => {
    const btn = e.target.closest('.navegador-questoes__btn');
    if (btn) ir(Number(btn.dataset.indice));
  });
}

/* ================================================================
   Resumo para o card da tela inicial
   ================================================================ */

/**
 * @param {Object[]} questoesProvas
 * @returns {string} ex.: "1 prova no banco • simulado em andamento"
 */
export function resumoSimulados(questoesProvas) {
  const provas = provasNoBanco(questoesProvas).length;
  const { atual, tentativas } = lerSimulado();
  const partes = [plural(provas, 'prova no banco', 'provas no banco')];
  if (atual) partes.push('simulado em andamento');
  else if (tentativas.length) partes.push(plural(tentativas.length, 'simulado feito', 'simulados feitos'));
  return partes.join(' • ');
}
