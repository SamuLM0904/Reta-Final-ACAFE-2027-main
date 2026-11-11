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
 *     compartilham um texto-base ou imagem ficam juntas. Tamanhos: Completo (63),
 *     Metade (31), Terço (21) ou Mini (14), na proporção da prova (ver TAMANHOS).
 *   - Prova completa de um ano: a prova escolhida, na ordem original.
 *
 * Funciona como a prova real: marca-se (e troca-se) a resposta, navega-se
 * livremente, e gabarito e explicações só aparecem ao finalizar. O cronômetro é
 * regressivo (5 horas, a duração da ACAFE) e pausa quando se sai da tela.
 */

import { icone } from './icones.js';
import { confirmar } from './confirmar.js';
import { escaparHtml } from './utils.js';
import { MOTIVOS, htmlDiagnostico, vincularDiagnostico } from './diagnostico.js';
import { obrasDasQuestoes, avisarObras } from './obras.js';
import { conteudosDa, descreverConteudo } from './conteudos.js';
import { htmlImagens, htmlAlternativa, vincularImagens, aplicarFeedback } from './render-questao.js';
import {
  lerSimulado, salvarSimuladoAtual, descartarSimuladoAtual, registrarTentativaSimulado,
  excluirTentativaSimulado, registrarMotivoErro, idDoSimulado, registrarNaMemoria, removerDaMemoria, lerMemoria,
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

/**
 * Tamanhos do simulado aleatório. As questões são repartidas entre as matérias na
 * proporção da prova (ver quantidadesPorBloco); o tempo de prova é proporcional (5h para 63).
 */
export const TAMANHOS = [
  { id: 'completo', nome: 'Completo', total: 63 },
  { id: 'metade',   nome: 'Metade',   total: 31 },
  { id: 'terco',    nome: 'Terço',    total: 21 },
  { id: 'mini',     nome: 'Mini',     total: 14 },
];

const tamanhoPorId = id => TAMANHOS.find(t => t.id === id) || TAMANHOS[0];

/**
 * Quantas questões de cada bloco entram num simulado de `total` questões: a parte
 * proporcional (maiores restos), com pelo menos 1 por matéria. Os empates mudam de
 * matéria a cada simulado (`rodizio`), para nenhuma ficar sempre com a sobra.
 * Com filtros, só os blocos com peso entram, e nenhum passa da sua `capacidade`
 * (questões disponíveis): o que não cabe num bloco vai para os outros.
 * @param {{ pesos?: number[], capacidades?: number[] }} [opcoes] - na ordem de BLOCOS
 * @returns {number[]} na ordem de BLOCOS
 */
export function quantidadesPorBloco(total, rodizio = 0, { pesos = BLOCOS.map(b => b.quantidade), capacidades = null } = {}) {
  const cap = capacidades || pesos.map(() => Infinity);
  const usado = pesos.map((p, i) => p > 0 && cap[i] > 0);
  const soma = pesos.reduce((s, p, i) => s + (usado[i] ? p : 0), 0);
  if (!soma) return pesos.map(() => 0);
  const exato = pesos.map((p, i) => (usado[i] ? p * total / soma : 0));
  const qtd = exato.map((x, i) => (usado[i] ? Math.min(cap[i], Math.max(1, Math.floor(x))) : 0));
  const n = BLOCOS.length, inicio = (rodizio * 3) % n;   // de 3 em 3: cada simulado começa as sobras num terço diferente
  const ordem = BLOCOS.map((_, i) => i).filter(i => usado[i])
    .sort((a, b) => (exato[b] - qtd[b]) - (exato[a] - qtd[a])
      || (a - inicio + n) % n - (b - inicio + n) % n);
  const somar = () => qtd.reduce((s, x) => s + x, 0);
  for (let k = 0; somar() < total && ordem.some(i => qtd[i] < cap[i]); k++) {
    const i = ordem[k % ordem.length];
    if (qtd[i] < cap[i]) qtd[i]++;
  }
  return qtd;
}

/** Níveis de dificuldade das questões (campo `dificuldade`; classificação inicial feita à mão). */
export const DIFICULDADES = [
  { id: 'facil',   nome: 'Fácil' },
  { id: 'media',   nome: 'Média' },
  { id: 'dificil', nome: 'Difícil' },
];

/**
 * A questão passa nos filtros em árvore (matéria → conteúdo → dificuldade)?
 * @param {{ materias: Set<string>, conteudos?: Set<string>|null, dificuldades?: Object<string, string> } | null} filtro
 *   conteudos: chaves "<bloco>|<conteúdo>" (null = todos); dificuldades: bloco → 'aleatorio' | id de DIFICULDADES
 */
function passaNoFiltro(q, bloco, filtro) {
  if (!filtro) return true;
  if (!filtro.materias.has(bloco.id)) return false;
  if (filtro.conteudos && !conteudosDa(q).some(c => filtro.conteudos.has(`${bloco.id}|${c}`))) return false;
  const dif = filtro.dificuldades?.[bloco.id] || 'aleatorio';
  return dif === 'aleatorio' || q.dificuldade === dif;
}

/** Tempo de prova de um simulado com `n` questões (proporcional às 5h da prova completa). */
const duracaoPara = n => Math.round(DURACAO_MS * Math.min(n, 63) / 63);

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
 * Para cada bloco, quantas questões do banco (já com os filtros) o aluno NÃO fez nos últimos 30 dias.
 * @returns {{ bloco: Object, banco: number, novas: number }[]}
 */
function disponibilidade(questoesProvas, idioma, filtro = null) {
  const limite = Date.now() - DIAS_SEM_REPETIR * 86400000;
  const ultima = ultimaVezFeita();
  return BLOCOS.map(bloco => {
    const banco = bancoDoBloco(questoesProvas, bloco, idioma).filter(q => passaNoFiltro(q, bloco, filtro));
    return { bloco, banco: banco.length, novas: banco.filter(q => !(ultima[q.id] > limite)).length };
  });
}

/**
 * Sorteia um simulado aleatório.
 * Questões feitas nos últimos 30 dias não entram; se o banco não tiver questões
 * novas suficientes num bloco, completa com as feitas há mais tempo.
 * @param {Object[]} questoesProvas
 * @param {string}   idioma      - 'Espanhol' | 'Inglês'
 * @param {number[]} [quantidades] - questões por bloco (ver quantidadesPorBloco); padrão: prova completa
 * @param {Object|null} [filtro] - filtros em árvore (ver passaNoFiltro)
 * @returns {{ ids: string[], repetidas: number }} ids na ordem da prova
 */
export function sortearSimulado(questoesProvas, idioma, quantidades = BLOCOS.map(b => b.quantidade), filtro = null) {
  const limite = Date.now() - DIAS_SEM_REPETIR * 86400000;
  const ultima = ultimaVezFeita();

  const ids = [];
  let repetidas = 0;
  BLOCOS.forEach((bloco, i) => {
    const banco = embaralhar(bancoDoBloco(questoesProvas, bloco, idioma).filter(q => passaNoFiltro(q, bloco, filtro)));
    const novas  = banco.filter(q => !(ultima[q.id] > limite));
    const feitas = banco.filter(q => ultima[q.id] > limite)
      .sort((a, b) => ultima[a.id] - ultima[b.id]);           // feitas há mais tempo primeiro
    const escolhidas = [...novas, ...feitas].slice(0, quantidades[i]);
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

/** Título de um simulado/tentativa: a prova escolhida ou "Simulado aleatório" (com o tamanho, se não for completo). */
const tituloSimulado = s => s.nome || (s.modo === 'prova' ? s.prova
  : `Simulado aleatório${s.tamanho && s.tamanho !== 'completo' ? ` — ${tamanhoPorId(s.tamanho).nome}` : ''}`);

/** Troca o "QUESTÃO nn" do enunciado (número da prova original) pelo número da questão no simulado. */
const enunciadoNumerado = (questao, numero) =>
  questao.enunciado.replace(/<b>QUESTÃO\s*\d+<\/b>/, `<b>QUESTÃO ${String(numero).padStart(2, '0')}</b>`);

/** Converte ids em questões (ignora ids que não existam mais no banco). */
function questoesPorIds(questoesProvas, ids) {
  const mapa = new Map(questoesProvas.map(q => [q.id, q]));
  return ids.map(id => mapa.get(id)).filter(Boolean);
}

/**
 * Cria um simulado aleatório e o deixa em andamento (usado pelo Guia de Estudos:
 * simulado da semana e mini-simulado do dia). Descarta o que estiver em andamento.
 * @param {Object[]} questoesProvas
 * @param {{ idioma: string, total: number, nome: string, materias?: string[] }} opcoes
 *   materias: ids de BLOCOS a usar (padrão: todas, na proporção da prova)
 * @returns {boolean} false se não houver questões
 */
export function criarSimuladoAleatorio(questoesProvas, { idioma, total, nome, materias = null }) {
  const filtro = materias ? { materias: new Set(materias), conteudos: null, dificuldades: {} } : null;
  const disp = disponibilidade(questoesProvas, idioma, filtro);
  const rodizio = lerSimulado().tentativas.length;
  const quantidades = quantidadesPorBloco(total, rodizio, {
    pesos: BLOCOS.map(b => (!filtro || filtro.materias.has(b.id) ? b.quantidade : 0)),
    capacidades: disp.map(d => d.banco),
  });
  const { ids } = sortearSimulado(questoesProvas, idioma, quantidades, filtro);
  if (!ids.length) return false;
  if (lerSimulado().atual) descartarSimuladoAtual();
  salvarSimuladoAtual({
    id: `sim-${Date.now()}`,
    modo: 'aleatorio',
    tamanho: TAMANHOS.find(t => t.total === total)?.id || 'personalizado',
    nome,
    idioma,
    ids,
    duracaoMs: duracaoPara(ids.length),
    respostas: {},
    tempoMs: 0,
    indice: 0,
    criadoEm: new Date().toISOString(),
  });
  return true;
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
  const tamanhoPadrao = atual?.tamanho || ultimaTentativa?.tamanho || 'completo';
  const rodizio = tentativas.length;   // muda a matéria que leva as sobras a cada simulado

  /** Tabela de composição + avisos, conforme o tipo, a prova, o idioma e o tamanho escolhidos. */
  function htmlComposicao(modo, prova, idioma, tamanho, filtro = null) {
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

    const disp = disponibilidade(questoesProvas, idioma, filtro);
    const qtd = quantidades(tamanho, filtro, disp);
    const pedidas = tamanhoPorId(tamanho).total;
    const linhas = disp.map(({ bloco, banco, novas }, i) => `
      <tr>
        <td>${nomeBloco(bloco, idioma)}</td>
        <td class="simulado-tabela__num">${qtd[i]}</td>
        <td class="simulado-tabela__num">${banco}</td>
        <td class="simulado-tabela__num${novas < qtd[i] ? ' simulado-tabela__falta' : ''}">${novas}</td>
      </tr>`).join('');
    const repetir = disp.reduce((s, d, i) => s + Math.max(0, Math.min(qtd[i], d.banco) - d.novas), 0);
    const total = qtd.reduce((s, n) => s + n, 0);
    return `
      ${filtro && total < pedidas ? `<p class="simulado-aviso">${total
        ? `Com esses filtros, o banco tem só <strong>${plural(total, 'questão', 'questões')}</strong>: o simulado vai ter ${total}, e não ${pedidas}.`
        : 'Nenhuma questão do banco passa nesses filtros. Marque mais matérias, conteúdos ou outra dificuldade.'}</p>` : ''}
      <table class="simulado-tabela">
        <caption>Composição do simulado: ${total} questões${total < 63 ? `, na proporção da prova ACAFE • tempo: ${formatarTempo(duracaoPara(total)).slice(0, -3)}` : ' (formato da prova ACAFE)'}</caption>
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

  /** Ramo da árvore de filtros: matéria (com a dificuldade) e, dentro dela, os conteúdos. */
  function htmlRamo(bloco, idioma) {
    const nome = escaparHtml(nomeBloco(bloco, idioma));
    return `
      <li class="arvore__ramo">
        <div class="arvore__linha">
          <button type="button" class="arvore__expandir" data-expandir="${bloco.id}" aria-expanded="false"
            aria-controls="folhas-${bloco.id}" aria-label="Ver os conteúdos de ${nome}">▸</button>
          <label class="arvore__materia"><input type="checkbox" data-materia="${bloco.id}" checked> <span>${nome}</span></label>
          <select class="simulado-prova__select arvore__dificuldade" data-dificuldade="${bloco.id}" aria-label="Dificuldade em ${nome}">
            <option value="aleatorio">Dificuldade: aleatória</option>
            ${DIFICULDADES.map(d => `<option value="${d.id}">${d.nome}</option>`).join('')}
          </select>
        </div>
        <ul class="arvore__folhas" id="folhas-${bloco.id}" hidden>${htmlFolhas(bloco, idioma)}</ul>
      </li>`;
  }

  /** Conteúdos de uma matéria (capítulos do material ou subtópicos), com quantas questões cada um tem no banco. */
  function htmlFolhas(bloco, idioma) {
    const contagem = new Map();
    bancoDoBloco(questoesProvas, bloco, idioma).forEach(q => conteudosDa(q).forEach(c => contagem.set(c, (contagem.get(c) || 0) + 1)));
    return [...contagem].map(([c, n]) => ({ chave: c, n, ...descreverConteudo(c) }))
      .sort((a, b) => a.ordem - b.ordem || a.nome.localeCompare(b.nome, 'pt-BR'))
      .map(({ chave, n, nome }) => `
        <li><label><input type="checkbox" data-conteudo="${bloco.id}|${escaparHtml(chave)}" checked> ${escaparHtml(nome)}
          <span class="arvore__n">(${n})</span></label></li>`).join('');
  }

  /** Filtros marcados na árvore, ou null se está tudo marcado e sem dificuldade escolhida. */
  function lerFiltro() {
    // lê a propriedade .checked (o seletor :checked não pega a matéria marcada "em parte")
    const todos = sel => [...container.querySelectorAll(sel)];
    const materias = todos('[data-materia]'), conteudos = todos('[data-conteudo]');
    const filtro = {
      materias: new Set(materias.filter(c => c.checked || c.indeterminate).map(c => c.dataset.materia)),
      conteudos: new Set(conteudos.filter(c => c.checked).map(c => c.dataset.conteudo)),
      dificuldades: Object.fromEntries(todos('[data-dificuldade]').map(el => [el.dataset.dificuldade, el.value])),
    };
    const tudo = [...materias, ...conteudos].every(c => c.checked && !c.indeterminate)
      && Object.values(filtro.dificuldades).every(v => v === 'aleatorio');
    return tudo ? null : filtro;
  }

  /** Questões por bloco para o tamanho e os filtros escolhidos (ver quantidadesPorBloco). */
  function quantidades(tamanho, filtro, disp = disponibilidade(questoesProvas, escolha().idioma, filtro)) {
    const total = tamanhoPorId(tamanho).total;
    if (!filtro) return quantidadesPorBloco(total, rodizio);
    return quantidadesPorBloco(total, rodizio, {
      pesos: BLOCOS.map(b => (filtro.materias.has(b.id) ? b.quantidade : 0)),
      capacidades: disp.map(d => d.banco),
    });
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

  const temAleatorio = tentativas.some(t => (t.modo || 'aleatorio') === 'aleatorio');
  const historico = tentativas.length ? `
    <section aria-label="Histórico de simulados">
      <div class="simulado-historico__topo">
        <h3 class="resultado-erradas-titulo">Simulados realizados</h3>
        ${temAleatorio ? `<a href="#/simulados/feitas" class="btn btn-secundario btn-pequeno">${icone('clipboard-list', 16)} Questões feitas, por prova</a>` : ''}
      </div>
      <ul class="simulado-historico">
        ${tentativas.map((t, i) => ({ t, i })).reverse().map(({ t, i }) => `
          <li>
            <span>${formatarData(t.data)} • ${tituloSimulado(t)} • ${t.idioma} • <strong>${t.acertos}/${t.total}</strong>
              (${Math.round(t.acertos / t.total * 100)}%) em ${formatarTempo(t.tempoMs)}</span>
            <span class="simulado-historico__acoes">
              <a href="#/simulado/resultado/${i}" class="btn btn-secundario btn-pequeno">Ver resultado</a>
              <button type="button" class="btn btn-perigo-contorno btn-pequeno" data-excluir="${i}"
                aria-label="Excluir o simulado de ${formatarData(t.data)}">${icone('trash', 16)} Excluir</button>
            </span>
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

              <fieldset class="simulado-idioma" id="simulado-escolha-tamanho">
                <legend>Tamanho</legend>
                ${TAMANHOS.map(t => `
                  <label class="simulado-idioma__opcao">
                    <input type="radio" name="tamanho" value="${t.id}" ${t.id === tamanhoPadrao ? 'checked' : ''}>
                    <span>${t.nome} (${t.total})</span>
                  </label>`).join('')}
              </fieldset>

              <fieldset class="simulado-idioma">
                <legend>Língua estrangeira</legend>
                ${IDIOMAS.map(idioma => `
                  <label class="simulado-idioma__opcao">
                    <input type="radio" name="idioma" value="${idioma}" ${idioma === idiomaPadrao ? 'checked' : ''}>
                    <span>${idioma}</span>
                  </label>`).join('')}
              </fieldset>

              <div class="simulado-filtros" id="simulado-filtros">
                <button type="button" class="btn btn-secundario btn-pequeno" id="filtros-abrir" aria-expanded="false" aria-controls="simulado-arvore">
                  ${icone('clipboard-list', 16)} Filtrar por matéria, conteúdo e dificuldade (opcional)
                </button>
                <div id="simulado-arvore" hidden>
                  <p class="simulado-card__info">Desmarque as matérias ou os conteúdos que não quer e escolha a dificuldade de cada matéria.
                    O tamanho escolhido é repartido entre as matérias marcadas.</p>
                  <ul class="arvore">${BLOCOS.map(b => htmlRamo(b, idiomaPadrao)).join('')}</ul>
                  <button type="button" class="btn btn-secundario btn-pequeno" id="filtros-limpar">Limpar filtros</button>
                </div>
              </div>

              <div id="simulado-composicao"></div>

              <p class="simulado-card__info">
                Banco atual: ${plural(provas.length, 'prova', 'provas')} (${provas.join(', ') || '—'}).
                Tempo de prova: 5 horas para 63 questões, proporcional nos simulados menores (o cronômetro pausa quando você sai da tela).
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
    tamanho: container.querySelector('input[name="tamanho"]:checked').value,
  });

  function atualizarEscolha() {
    const { modo, prova, idioma, tamanho } = escolha();
    container.querySelector('#simulado-escolha-prova').hidden = modo !== 'prova';
    container.querySelector('#simulado-escolha-tamanho').hidden = modo === 'prova';
    container.querySelector('#simulado-filtros').hidden = modo === 'prova';
    const filtro = modo === 'prova' ? null : lerFiltro();
    container.querySelector('#simulado-composicao').innerHTML = htmlComposicao(modo, prova, idioma, tamanho, filtro);
    container.querySelector('#btn-gerar').disabled = !questoesProvas.length
      || (modo !== 'prova' && !quantidades(tamanho, filtro).some(n => n > 0));
    container.querySelector('#btn-gerar-texto').textContent = modo === 'prova' ? 'Começar prova' : 'Gerar simulado';
  }
  container.querySelectorAll('input[name="modo"], input[name="idioma"], input[name="tamanho"], select[name="prova"]')
    .forEach(el => el.addEventListener('change', atualizarEscolha));

  // Árvore de filtros
  const arvore = container.querySelector('#simulado-arvore');
  container.querySelector('#filtros-abrir').addEventListener('click', (e) => {
    arvore.hidden = !arvore.hidden;
    e.currentTarget.setAttribute('aria-expanded', String(!arvore.hidden));
  });
  arvore.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-expandir]');
    if (!btn) return;
    const folhas = container.querySelector(`#folhas-${btn.dataset.expandir}`);
    folhas.hidden = !folhas.hidden;
    btn.setAttribute('aria-expanded', String(!folhas.hidden));
    btn.textContent = folhas.hidden ? '▸' : '▾';
  });
  /** Marca a matéria conforme os conteúdos dela (marcada, desmarcada ou "em parte"). */
  const sincronizarMateria = (id) => {
    const filhos = [...container.querySelectorAll(`#folhas-${id} [data-conteudo]`)];
    const pai = container.querySelector(`[data-materia="${id}"]`);
    const n = filhos.filter(c => c.checked).length;
    pai.checked = n > 0;
    pai.indeterminate = n > 0 && n < filhos.length;
  };
  arvore.addEventListener('change', (e) => {
    const materia = e.target.dataset.materia;
    if (materia) container.querySelectorAll(`#folhas-${materia} [data-conteudo]`).forEach(c => { c.checked = e.target.checked; });
    if (e.target.dataset.conteudo) sincronizarMateria(e.target.dataset.conteudo.split('|')[0]);
    atualizarEscolha();
  });
  container.querySelector('#filtros-limpar').addEventListener('click', () => {
    arvore.querySelectorAll('input[type="checkbox"]').forEach(c => { c.checked = true; c.indeterminate = false; });
    arvore.querySelectorAll('[data-dificuldade]').forEach(el => { el.value = 'aleatorio'; });
    atualizarEscolha();
  });
  // os conteúdos de língua estrangeira mudam com o idioma
  container.querySelectorAll('input[name="idioma"]').forEach(r => r.addEventListener('change', () => {
    const bloco = BLOCOS.find(b => b.id === 'lingua');
    const marcada = container.querySelector('[data-materia="lingua"]').checked;
    container.querySelector('#folhas-lingua').innerHTML = htmlFolhas(bloco, escolha().idioma);
    container.querySelectorAll('#folhas-lingua [data-conteudo]').forEach(c => { c.checked = marcada; });
    container.querySelector('[data-materia="lingua"] + span').textContent = nomeBloco(bloco, escolha().idioma);
    sincronizarMateria('lingua');
    atualizarEscolha();
  }));
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

  container.querySelectorAll('[data-excluir]').forEach(btn => btn.addEventListener('click', async () => {
    const t = tentativas[Number(btn.dataset.excluir)];
    if (!(await confirmar({
      titulo: 'Excluir este simulado?',
      mensagem: `${tituloSimulado(t)} de ${formatarData(t.data)} (<strong>${t.acertos}/${t.total}</strong>). `
        + 'O simulado e o resultado saem do seu histórico, e as respostas dele saem da sua memória de erros e acertos. Não dá para desfazer.',
      textoConfirmar: 'Excluir',
      perigo: true,
    }))) return;
    excluirTentativaSimulado(Number(btn.dataset.excluir));
    renderizarTelaSimulados(container, questoesProvas);
  }));

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
    const { modo, prova, idioma, tamanho } = escolha();
    const filtro = modo === 'prova' ? null : lerFiltro();
    const ids = modo === 'prova'
      ? montarProva(questoesProvas, prova, idioma)
      : sortearSimulado(questoesProvas, idioma, quantidades(tamanho, filtro), filtro).ids;
    if (!ids.length) return;
    salvarSimuladoAtual({
      id: `sim-${Date.now()}`,
      modo,
      ...(modo === 'prova' ? { prova } : { tamanho }),
      ...(filtro ? { filtrado: true } : {}),
      idioma,
      ids,
      duracaoMs: modo === 'prova' ? DURACAO_MS : duracaoPara(ids.length),
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
  else if (sim && !sim.inicioTrecho && !sim.aguardandoObras && document.getElementById('simulado-cronometro')) iniciarCronometro();
});

function iniciarCronometro() {
  sim.inicioTrecho = Date.now();
  clearInterval(sim.timer);
  let ticks = 0;
  const atualizar = () => {
    const el = document.getElementById('simulado-cronometro');
    if (!el) { pausarCronometro(); return; }       // saiu da tela do simulado
    const restante = (sim.atual.duracaoMs || DURACAO_MS) - tempoDecorrido();
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

  // Antes da 1ª questão: aviso das obras literárias cobradas (o cronômetro espera a resposta)
  const obras = obrasDasQuestoes(questoes);
  if (!atual.obrasVistas && !atual.tempoMs && obras.length) {
    const deste = sim;
    deste.aguardandoObras = true;
    avisarObras(obras).then(() => {
      deste.aguardandoObras = false;
      deste.atual.obrasVistas = true;
      if (sim !== deste || !document.getElementById('simulado-cronometro')) return;   // saiu da tela
      salvarProgresso();
      iniciarCronometro();
    });
    return;
  }
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
            ${sim.atual.modo === 'prova' ? '' : `
              <span class="questoes-meta__separador" aria-hidden="true">•</span>
              <span>${questao.prova} — questão ${questao.numeroOriginal}</span>`}
          </div>
          ${htmlImagens(questao)}
          ${questao.textoApoio ? `<div class="questao-texto-apoio">${questao.textoApoio}</div>` : ''}
          <div class="questao-enunciado">${sim.atual.modo === 'prova' ? questao.enunciado : enunciadoNumerado(questao, indice + 1)}</div>
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
function htmlNavegador(questoes, atual, situacao, idioma, numeroOriginal = false) {
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
                    aria-label="Questão ${numeroOriginal ? questoes[i].numeroOriginal : i + 1}">${numeroOriginal ? questoes[i].numeroOriginal : i + 1}</button>
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
    ...(sim.atual.tamanho ? { tamanho: sim.atual.tamanho } : {}),
    ...(sim.atual.nome ? { nome: sim.atual.nome } : {}),
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

  // Diagnóstico dos erros: quantos o aluno já disse por que errou, e os motivos mais comuns
  const motivos = tentativa.motivos || {};
  const erradas = questoes.map((q, i) => ({ q, i })).filter(({ q }) => r[q.id] && r[q.id] !== q.gabarito);
  const semMotivo = erradas.filter(({ q }) => !motivos[q.id]);
  const contagemMotivos = MOTIVOS.map(m => ({ ...m, n: erradas.filter(({ q }) => motivos[q.id] === m.id).length })).filter(m => m.n);
  const diagnostico = erradas.length ? `
    <section class="simulado-card" aria-label="Por que você errou">
      <div class="simulado-card__corpo">
        <h3 class="simulado-card__titulo">Por que você errou?</h3>
        <p class="simulado-card__info">${semMotivo.length
          ? `Diga o motivo de cada erro (${erradas.length - semMotivo.length} de ${erradas.length} feitos): você recebe uma dica, e o Guia de Estudos passa a separar o que é falta de conteúdo do que é falta de atenção.`
          : 'Você já disse o motivo de todos os erros.'}</p>
        ${contagemMotivos.length ? `<p class="simulado-card__info">${contagemMotivos.map(m => `${m.nome}: <strong>${m.n}</strong>`).join(' • ')}</p>` : ''}
      </div>
      ${semMotivo.length ? `<div class="simulado-card__acoes">
        <button type="button" class="btn btn-primario" id="btn-diagnosticar" data-indice="${semMotivo[0].i}">Dizer por que errei</button>
      </div>` : ''}
    </section>` : '';

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

          ${diagnostico}

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
    () => renderizarResultadoSimulado(container, questoesProvas, n), { indiceTentativa: n });
  container.querySelector('#btn-revisar').addEventListener('click', () => revisar(0));
  container.querySelector('#btn-diagnosticar')?.addEventListener('click', (e) => revisar(Number(e.currentTarget.dataset.indice)));
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
function renderizarRevisao(container, questoes, tentativa, indice, voltarAoResultado, opcoes = {}) {
  const { textoVoltar = 'Voltar ao resultado', numeroOriginal = false, indiceTentativa } = opcoes;
  const r = tentativa.respostas;
  const questao = questoes[indice];
  // só nas questões erradas, e quando se sabe de qual tentativa é (para gravar o motivo)
  const diagnosticar = indiceTentativa !== undefined && r[questao.id] && r[questao.id] !== questao.gabarito;
  const situacao = i => {
    const q = questoes[i];
    return !r[q.id] ? 'branco' : r[q.id] === q.gabarito ? 'certa' : 'errada';
  };

  container.innerHTML = `
    <div class="tela-questoes">
      <div class="container">
        <header class="questoes-cabecalho">
          <div class="questoes-nav-linha">
            <button type="button" class="btn-voltar" id="btn-voltar-resultado">${icone('arrow-left', 18)} ${textoVoltar}</button>
            <span class="questoes-contador">Revisão • Questão <strong>${indice + 1}</strong> de <strong>${questoes.length}</strong></span>
          </div>
          <div class="questoes-meta">
            <span class="questoes-meta__disciplina">${questao.disciplina}</span>
            <span class="questoes-meta__separador" aria-hidden="true">•</span>
            <span>${questao.subtopico}</span>
            <span class="questoes-meta__separador" aria-hidden="true">•</span>
            <span>${questao.prova} — questão ${questao.numeroOriginal}</span>
          </div>
          ${htmlNavegador(questoes, indice, situacao, tentativa.idioma, numeroOriginal)}
        </header>

        <article class="questao-card">
          ${htmlImagens(questao)}
          ${questao.textoApoio ? `<div class="questao-texto-apoio">${questao.textoApoio}</div>` : ''}
          <div class="questao-enunciado">${numeroOriginal || tentativa.modo === 'prova' ? questao.enunciado : enunciadoNumerado(questao, indice + 1)}</div>
          <ul class="alternativas-lista" id="alternativas-lista" role="list">
            ${questao.alternativas.map(htmlAlternativa).join('')}
          </ul>
          <div class="feedback-area" id="feedback-area" role="status"></div>
          ${diagnosticar ? htmlDiagnostico(tentativa.motivos?.[questao.id], questao) : ''}
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
    renderizarRevisao(container, questoes, tentativa, i, voltarAoResultado, opcoes);
    container.querySelector('.questoes-cabecalho')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  container.querySelector('#btn-voltar-resultado').addEventListener('click', voltarAoResultado);
  if (diagnosticar) vincularDiagnostico(container, (motivo) => {
    registrarMotivoErro(indiceTentativa, questao.id, motivo);
    tentativa.motivos = { ...(tentativa.motivos || {}), [questao.id]: motivo };
    renderizarRevisao(container, questoes, tentativa, indice, voltarAoResultado, opcoes);
    container.querySelector('.diagnostico')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  container.querySelector('#btn-anterior').addEventListener('click', () => ir(indice - 1));
  container.querySelector('#btn-proxima')?.addEventListener('click', () => ir(indice + 1));
  container.querySelector('#navegador-questoes').addEventListener('click', (e) => {
    const btn = e.target.closest('.navegador-questoes__btn');
    if (btn) ir(Number(btn.dataset.indice));
  });
}

/* ================================================================
   Tela: questões feitas nos simulados aleatórios, por prova de origem
   ================================================================ */

/**
 * Questões das provas anteriores que o aluno já fez em simulados ALEATÓRIOS finalizados.
 * Se fez a mesma questão mais de uma vez, vale a última resposta.
 * @returns {Map<string, { letra: string|null, data: string, vezes: number }>} id da questão → última resposta
 */
function questoesFeitasNosAleatorios() {
  const feitas = new Map();
  lerSimulado().tentativas
    .filter(t => (t.modo || 'aleatorio') === 'aleatorio')
    .forEach(t => t.ids.forEach(id => {
      const antes = feitas.get(id);
      feitas.set(id, { letra: t.respostas[id] || null, data: t.data, vezes: (antes?.vezes || 0) + 1 });
    }));
  return feitas;
}

/**
 * Mostra, para cada prova anterior, quais questões o aluno já fez nos simulados aleatórios
 * (acerto, erro, em branco ou ainda não feita). Clicar numa questão feita abre a revisão.
 */
export function renderizarQuestoesFeitas(container, questoesProvas) {
  const feitas = questoesFeitasNosAleatorios();
  const situacaoDe = q => {
    const f = feitas.get(q.id);
    return !f ? 'nao-feita' : !f.letra ? 'branco' : f.letra === q.gabarito ? 'certa' : 'errada';
  };
  const ordem = q => q.numeroOriginal + (q.disciplina === 'Inglês' ? 0.5 : 0);   // Inglês logo após o Espanhol de mesmo número

  const provas = provasNoBanco(questoesProvas).map(prova => {
    const qs = questoesProvas.filter(q => q.prova === prova).sort((a, b) => ordem(a) - ordem(b));
    const feitasDaProva = qs.filter(q => feitas.has(q.id));
    return {
      prova, qs, feitas: feitasDaProva,
      acertos: feitasDaProva.filter(q => situacaoDe(q) === 'certa').length,
    };
  });
  const totalFeitas = provas.reduce((s, p) => s + p.feitas.length, 0);

  const htmlProva = (p, indiceProva) => {
    const grupos = [];
    p.qs.forEach(q => {
      const nome = q.disciplina === 'Inglês' ? 'Língua Estrangeira (Inglês)'
        : q.disciplina === 'Espanhol' ? 'Língua Estrangeira (Espanhol)' : nomeBloco(blocoDa(q), 'Espanhol');
      let g = grupos.find(x => x.nome === nome);
      if (!g) { g = { nome, qs: [] }; grupos.push(g); }
      g.qs.push(q);
    });
    return `
      <details class="simulado-card simulado-feitas__prova" ${p.feitas.length ? 'open' : ''}>
        <summary class="simulado-feitas__resumo">
          <span class="simulado-card__titulo">${p.prova}</span>
          <span class="simulado-card__info">${p.feitas.length
            ? `${plural(p.feitas.length, 'questão feita', 'questões feitas')} de ${p.qs.length} • ${plural(p.acertos, 'acerto', 'acertos')} (${Math.round(p.acertos / p.feitas.length * 100)}%)`
            : `nenhuma das ${p.qs.length} questões feita ainda`}</span>
        </summary>
        <div class="simulado-navegador">
          ${grupos.map(g => `
            <div class="simulado-navegador__grupo">
              <span class="simulado-navegador__materia">${g.nome}</span>
              <ol class="navegador-questoes__lista">
                ${g.qs.map(q => {
                  const s = situacaoDe(q);
                  const f = feitas.get(q.id);
                  const rotulo = s === 'nao-feita' ? 'ainda não feita'
                    : `${s === 'certa' ? 'acerto' : s === 'errada' ? 'erro' : 'em branco'}${f.vezes > 1 ? `, feita ${f.vezes} vezes` : ''}`;
                  return `
                  <li>
                    <button type="button" class="navegador-questoes__btn navegador-questoes__btn--${s}"
                      data-prova="${indiceProva}" data-id="${q.id}" ${s === 'nao-feita' ? 'disabled' : ''}
                      title="Questão ${q.numeroOriginal}: ${rotulo}" aria-label="Questão ${q.numeroOriginal}: ${rotulo}">${q.numeroOriginal}</button>
                  </li>`;
                }).join('')}
              </ol>
            </div>`).join('')}
        </div>
      </details>`;
  };

  container.innerHTML = `
    <div class="tela-questoes">
      <div class="container">
        <header class="questoes-cabecalho">
          <div class="questoes-nav-linha">
            <a href="#/simulados" class="btn-voltar">${icone('arrow-left', 18)} Voltar aos simulados</a>
          </div>
          <h2 class="simulados-titulo">Questões feitas nos simulados aleatórios</h2>
          <p class="simulados-descricao">
            Cada prova anterior com os números originais das questões: veja quais você já fez nos simulados
            aleatórios e como foi. Clique numa questão feita para revisar com o gabarito e as explicações.
            ${totalFeitas ? `Ao todo: <strong>${plural(totalFeitas, 'questão feita', 'questões feitas')}</strong>.` : ''}
          </p>
          <p class="simulado-legenda">
            <span class="simulado-legenda__item simulado-legenda__item--certa">Acerto</span>
            <span class="simulado-legenda__item simulado-legenda__item--errada">Erro</span>
            <span class="simulado-legenda__item">Em branco</span>
            <span class="simulado-legenda__item simulado-legenda__item--nao-feita">Ainda não feita</span>
          </p>
        </header>
        <div class="simulados-conteudo">
          ${totalFeitas ? '' : '<p class="simulado-aviso">Você ainda não finalizou nenhum simulado aleatório. Quando finalizar, as questões aparecem aqui.</p>'}
          ${provas.map(htmlProva).join('')}
        </div>
      </div>
    </div>`;

  container.querySelector('.simulados-conteudo').addEventListener('click', (e) => {
    const btn = e.target.closest('.navegador-questoes__btn[data-id]');
    if (!btn || btn.disabled) return;
    const p = provas[Number(btn.dataset.prova)];
    // revisão das questões feitas dessa prova, com a última resposta de cada uma
    const respostas = Object.fromEntries(p.feitas.map(q => [q.id, feitas.get(q.id).letra]).filter(([, l]) => l));
    const revisao = { respostas, idioma: p.feitas.some(q => q.disciplina === 'Inglês') && !p.feitas.some(q => q.disciplina === 'Espanhol') ? 'Inglês' : 'Espanhol' };
    renderizarRevisao(container, p.feitas, revisao, p.feitas.findIndex(q => q.id === btn.dataset.id),
      () => renderizarQuestoesFeitas(container, questoesProvas),
      { textoVoltar: 'Voltar às questões feitas', numeroOriginal: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
