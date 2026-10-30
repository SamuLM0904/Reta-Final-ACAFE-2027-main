/**
 * guia.js — Tela do Guia de Estudos (rota #/guia).
 *
 * Partes da tela:
 *   - Questionário inicial (uma vez; pode ser editado depois em "Editar minhas respostas").
 *   - Plano de HOJE: blocos de estudo com pausas, para marcar como feitos, e botões
 *     de "hoje vou estudar mais/menos". O plano do dia fica fixo durante o dia
 *     (só é refeito se o tempo do dia ou as respostas mudarem); o de amanhã já
 *     considera o que o aluno acertou e errou hoje.
 *   - Próximos dias.
 *   - Chat: o aluno escreve (ou fala) o que quer mudar ("vou viajar sexta"); o guia
 *     mostra se a mudança faz sentido e as consequências até a prova, e só aplica
 *     depois da confirmação.
 *   - Desempenho (memória de erros e acertos). O reset da memória de um aluno fica no
 *     painel de configurações (engrenagem no cabeçalho), só para administradores.
 *
 * Cálculos: guia-plano.js. Interpretação do chat: guia-chat.js. Dados: armazenamento.js (guia).
 */

import { icone } from './icones.js';
import { confirmar } from './confirmar.js';
import { escaparHtml } from './utils.js';
import { PROVA } from './contagem.js';
import { lerGuia, salvarGuia, lerMemoria, lerSimulado } from './armazenamento.js';
import {
  MATERIAS, nomeMateria, moduloMateria, materiaDaDisciplina, chaveDia, somarDias, diasEntre,
  inicioDaSemana, minutosDoDia, simuladoDoDia, indexarQuestoes, analisarMemoria, calcularPrioridades,
  conteudosFracos, taxaErro, planejarPeriodo, aplicarMudancas, avaliarMudancas, projetarAcertos,
  formatarHoras, dataCurta,
} from './guia-plano.js';
import { interpretarPedido } from './guia-chat.js';

const DIA_PROVA = chaveDia(PROVA.inicio);
const PASSO_AJUSTE = 30;              // minutos por clique em "mais/menos"
const DIAS_GUARDADOS = 14;            // planos de dias passados mantidos (base do rodízio de matérias)

const BLOCOS_PRONTOS = [
  { valor: '25-5',  estudo: 25, pausa: 5,  rotulo: '25 min + 5 de pausa' },
  { valor: '50-10', estudo: 50, pausa: 10, rotulo: '50 min + 10 de pausa' },
  { valor: '90-15', estudo: 90, pausa: 15, rotulo: '90 min + 15 de pausa' },
];

let conversa = [];   // mensagens do chat nesta visita: { autor: 'aluno'|'guia', html }

/* ================================================================
   Contexto (dados do aluno + cálculos)
   ================================================================ */

function montarContexto(questoesProvas, questoesEstudo) {
  const guia = lerGuia();
  const hoje = chaveDia();
  const agora = Date.now();
  const indice = indexarQuestoes(questoesProvas, questoesEstudo);
  const analise = analisarMemoria(lerMemoria(), indice, agora);
  const { tentativas, atual } = lerSimulado();
  const ctx = {
    guia, hoje, agora, analise, atual, tentativas,
    diaProva: DIA_PROVA,
    prioridades: guia?.perfil ? calcularPrioridades(guia.perfil, analise, agora) : [],
    materiasComQuestoes: new Set(questoesEstudo.map(q => materiaDaDisciplina(q.disciplina)?.id).filter(Boolean)),
    semanasComSimuladoFeito: new Set(tentativas.map(t => inicioDaSemana(chaveDia(new Date(t.data))))),
    simuladoFeitoHoje: tentativas.some(t => chaveDia(new Date(t.data)) === hoje),
  };
  ctx.planosFixos = guia ? Object.fromEntries(Object.entries(guia.planos || {}).filter(([d]) => d < hoje)) : {};
  return ctx;
}

/** Identifica de que "versão" do dia é o plano fixado (muda se o tempo ou as respostas mudarem). */
function baseDoPlano(guia, ctx) {
  const sim = simuladoDoDia(guia, ctx.hoje, ctx.semanasComSimuladoFeito.has(inicioDaSemana(ctx.hoje)), ctx.diaProva);
  return `${guia.perfil.atualizadoEm}|${minutosDoDia(guia, ctx.hoje, ctx.diaProva)}|${sim ? sim.tipo + sim.minutos : '-'}`;
}

/** Plano de hoje: o já fixado, se ainda vale; senão, um novo (que passa a ficar fixo). */
function planoDeHoje(ctx) {
  const { guia, hoje } = ctx;
  const base = baseDoPlano(guia, ctx);
  const salvo = guia.planos?.[hoje];
  // um simulado finalizado hoje não deve sumir do plano já fixado
  if (salvo && (salvo.base === base || (ctx.simuladoFeitoHoje && salvo.base?.split('|')[1] === base.split('|')[1]))) return salvo;
  const [plano] = planejarPeriodo(guia, { ...ctx, de: hoje, ate: hoje });
  const novo = { ...plano, base, feitos: [] };
  const limite = somarDias(hoje, -DIAS_GUARDADOS);
  const planos = Object.fromEntries(Object.entries(guia.planos || {}).filter(([d]) => d >= limite && d < hoje));
  planos[hoje] = novo;
  salvarGuia({ ...guia, planos });
  ctx.guia = lerGuia();
  return novo;
}

/* ================================================================
   Ponto de entrada
   ================================================================ */

/**
 * @param {HTMLElement} container
 * @param {Object[]} questoesProvas - provas anteriores (simulados)
 * @param {Object[]} questoesEstudo - questões de estudo por matéria
 */
export function renderizarGuia(container, questoesProvas, questoesEstudo) {
  const guia = lerGuia();
  if (!guia?.perfil) {
    renderizarQuestionario(container, null, () => renderizarGuia(container, questoesProvas, questoesEstudo));
    return;
  }
  renderizarPainel(container, questoesProvas, questoesEstudo);
}

/** Texto do card do guia na tela inicial. */
export function resumoGuia() {
  const guia = lerGuia();
  if (!guia?.perfil) return 'Responda 8 perguntas e receba seu cronograma diário';
  const hoje = chaveDia();
  if (hoje >= DIA_PROVA) return hoje === DIA_PROVA ? 'Hoje é o dia da prova. Boa prova! 🍀' : 'A prova já aconteceu';
  const minutos = minutosDoDia(guia, hoje, DIA_PROVA);
  const plano = guia.planos?.[hoje];
  const feitos = plano ? `${(plano.feitos || []).length}/${plano.blocos.length} blocos feitos` : 'veja o plano de hoje';
  return minutos ? `Hoje: ${formatarHoras(minutos)} de estudo • ${feitos}` : 'Hoje está livre no seu cronograma';
}

/* ================================================================
   Questionário
   ================================================================ */

function opcoesHoras(selecionado, max = 14) {
  return Array.from({ length: max + 1 }, (_, h) => `<option value="${h}"${h === selecionado ? ' selected' : ''}>${h}h</option>`).join('');
}
function opcoesMinutos(selecionado) {
  return [0, 15, 30, 45].map(m => `<option value="${m}"${m === selecionado ? ' selected' : ''}>${String(m).padStart(2, '0')}min</option>`).join('');
}
const radio = (nome, valor, rotulo, marcado) => `
  <label class="simulado-idioma__opcao"><input type="radio" name="${nome}" value="${valor}"${marcado ? ' checked' : ''}> ${rotulo}</label>`;

function renderizarQuestionario(container, perfil, aoSalvar) {
  const p = perfil || {};
  const blocoAtual = p.bloco ? `${p.bloco.estudo}-${p.bloco.pausa}` : '50-10';
  const blocoPronto = BLOCOS_PRONTOS.some(b => b.valor === blocoAtual);
  const dificeis = new Set(p.dificeis || []);
  const diasParaProva = diasEntre(chaveDia(), DIA_PROVA);

  container.innerHTML = `
    <div class="tela-questoes">
      <div class="container">
        <header class="questoes-cabecalho">
          <div class="questoes-nav-linha">
            <a href="#/" class="btn-voltar">${icone('arrow-left', 18)} Voltar ao início</a>
          </div>
          <h2 class="simulados-titulo">${perfil ? 'Editar minhas respostas' : 'Guia de Estudos'}</h2>
          <p class="simulados-descricao">
            ${perfil ? 'Mude o que quiser; o plano de hoje e dos próximos dias é refeito com as novas respostas.'
              : `Faltam <strong>${diasParaProva} dias</strong> para a prova da ACAFE. Responda às perguntas abaixo
                 e o guia monta o seu cronograma diário, que se ajusta conforme você acerta e erra as questões.`}
          </p>
        </header>

        <form class="guia-form simulado-card" id="guia-form" novalidate>
          <fieldset class="guia-pergunta">
            <legend>1. Quanto tempo você consegue estudar por dia (segunda a sexta)?</legend>
            <div class="guia-linha">
              <select name="horasDia" class="guia-select" aria-label="Horas por dia">${opcoesHoras(p.minutosDia !== undefined ? Math.floor(p.minutosDia / 60) : 4)}</select>
              <select name="minDia" class="guia-select" aria-label="Minutos por dia">${opcoesMinutos(p.minutosDia !== undefined ? p.minutosDia % 60 : 0)}</select>
            </div>
            <p class="guia-dica">Conte o tempo total, já com as pausas entre os blocos.</p>
          </fieldset>

          <fieldset class="guia-pergunta">
            <legend>2. No fim de semana você consegue estudar mais?</legend>
            <div class="guia-linha">
              ${radio('fds', 'sim', 'Sim', p.fimDeSemanaMais)}
              ${radio('fds', 'nao', 'Não, o mesmo tempo', !p.fimDeSemanaMais)}
            </div>
            <div class="guia-linha" id="guia-fds-tempo" ${p.fimDeSemanaMais ? '' : 'hidden'}>
              <span>Quanto por dia, no sábado e no domingo?</span>
              <select name="horasFds" class="guia-select" aria-label="Horas no fim de semana">${opcoesHoras(p.minutosFimDeSemana !== undefined ? Math.floor(p.minutosFimDeSemana / 60) : 6, 16)}</select>
              <select name="minFds" class="guia-select" aria-label="Minutos no fim de semana">${opcoesMinutos(p.minutosFimDeSemana !== undefined ? p.minutosFimDeSemana % 60 : 0)}</select>
            </div>
          </fieldset>

          <fieldset class="guia-pergunta">
            <legend>3. Como você prefere dividir o estudo?</legend>
            <div class="guia-linha">
              ${BLOCOS_PRONTOS.map(b => radio('bloco', b.valor, b.rotulo, blocoAtual === b.valor)).join('')}
              ${radio('bloco', 'outro', 'Outro', !blocoPronto)}
            </div>
            <div class="guia-linha" id="guia-bloco-outro" ${blocoPronto ? 'hidden' : ''}>
              <label>Estudo <input type="number" name="estudo" min="15" max="180" step="5" class="guia-numero" value="${p.bloco?.estudo || 50}"> min</label>
              <label>Pausa <input type="number" name="pausa" min="0" max="60" step="5" class="guia-numero" value="${p.bloco?.pausa ?? 10}"> min</label>
            </div>
          </fieldset>

          <fieldset class="guia-pergunta">
            <legend>4. Em quais matérias você tem mais dificuldade?</legend>
            <div class="guia-linha">
              ${MATERIAS.map(m => `<label class="simulado-idioma__opcao"><input type="checkbox" name="dificeis" value="${m.id}"${dificeis.has(m.id) ? ' checked' : ''}> ${m.nome || 'Língua estrangeira'}</label>`).join('')}
            </div>
          </fieldset>

          <fieldset class="guia-pergunta">
            <legend>5. Qual língua estrangeira você vai fazer na prova?</legend>
            <div class="guia-linha">
              ${radio('idioma', 'Espanhol', 'Espanhol', (p.idioma || 'Espanhol') === 'Espanhol')}
              ${radio('idioma', 'Inglês', 'Inglês', p.idioma === 'Inglês')}
            </div>
          </fieldset>

          <fieldset class="guia-pergunta">
            <legend>6. Quantas questões (de 63) você quer acertar na prova?</legend>
            <div class="guia-linha">
              <input type="number" name="meta" min="1" max="63" class="guia-numero" value="${p.meta || 45}"> questões
            </div>
          </fieldset>

          <fieldset class="guia-pergunta">
            <legend>7. Você já fez as provas anteriores da ACAFE?</legend>
            <div class="guia-linha">
              ${radio('provas', 'todas', 'Sim, várias', p.provasAnteriores === 'todas')}
              ${radio('provas', 'algumas', 'Algumas', p.provasAnteriores === 'algumas')}
              ${radio('provas', 'nenhuma', 'Nenhuma', !p.provasAnteriores || p.provasAnteriores === 'nenhuma')}
            </div>
          </fieldset>

          <fieldset class="guia-pergunta">
            <legend>8. Você faz cursinho?</legend>
            <div class="guia-linha">
              ${radio('cursinho', 'sim', 'Sim', p.cursinho)}
              ${radio('cursinho', 'nao', 'Não', !p.cursinho)}
            </div>
          </fieldset>

          <p class="login-erro" id="guia-erro" role="alert" hidden></p>
          <div class="guia-acoes">
            ${perfil ? '<button type="button" class="btn btn-secundario" id="guia-cancelar">Cancelar</button>' : ''}
            <button type="submit" class="btn btn-primario">${perfil ? 'Salvar e refazer o plano' : 'Montar meu cronograma'}</button>
          </div>
        </form>
      </div>
    </div>`;

  const form = container.querySelector('#guia-form');
  form.addEventListener('change', () => {
    container.querySelector('#guia-fds-tempo').hidden = form.fds.value !== 'sim';
    container.querySelector('#guia-bloco-outro').hidden = form.bloco.value !== 'outro';
  });
  container.querySelector('#guia-cancelar')?.addEventListener('click', aoSalvar);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const erro = container.querySelector('#guia-erro');
    const minutosDia = Number(form.horasDia.value) * 60 + Number(form.minDia.value);
    const fimDeSemanaMais = form.fds.value === 'sim';
    const minutosFimDeSemana = fimDeSemanaMais ? Number(form.horasFds.value) * 60 + Number(form.minFds.value) : minutosDia;
    const pronto = BLOCOS_PRONTOS.find(b => b.valor === form.bloco.value);
    const bloco = pronto ? { estudo: pronto.estudo, pausa: pronto.pausa }
      : { estudo: Number(form.estudo.value), pausa: Number(form.pausa.value) };
    const meta = Number(form.meta.value);
    const problema =
      minutosDia < 15 && minutosFimDeSemana < 15 ? 'Informe pelo menos 15 minutos de estudo por dia.'
      : !(bloco.estudo >= 15 && bloco.estudo <= 180) ? 'O bloco de estudo deve ter entre 15 e 180 minutos.'
      : !(bloco.pausa >= 0 && bloco.pausa <= 60) ? 'A pausa deve ter entre 0 e 60 minutos.'
      : !(meta >= 1 && meta <= 63) ? 'A meta deve ser um número de 1 a 63.'
      : null;
    if (problema) { erro.textContent = problema; erro.hidden = false; return; }

    const novoPerfil = {
      minutosDia, fimDeSemanaMais, minutosFimDeSemana, bloco,
      dificeis: [...form.querySelectorAll('[name="dificeis"]:checked')].map(c => c.value),
      idioma: form.idioma.value,
      meta,
      provasAnteriores: form.provas.value,
      cursinho: form.cursinho.value === 'sim',
      atualizadoEm: Date.now(),
    };
    const atual = lerGuia() || {};
    salvarGuia({ ajustes: {}, fixos: {}, simuladosExternos: {}, simuladoNoDia: {}, planos: {}, ...atual, perfil: novoPerfil });
    aoSalvar();
  });
}

/* ================================================================
   Painel do guia
   ================================================================ */

function renderizarPainel(container, questoesProvas, questoesEstudo) {
  const redesenhar = () => renderizarPainel(container, questoesProvas, questoesEstudo);
  const ctx = montarContexto(questoesProvas, questoesEstudo);
  const plano = planoDeHoje(ctx);
  const { guia, hoje } = ctx;
  const diasParaProva = diasEntre(hoje, DIA_PROVA);

  container.innerHTML = `
    <div class="tela-questoes">
      <div class="container">
        <header class="questoes-cabecalho">
          <div class="questoes-nav-linha">
            <a href="#/" class="btn-voltar">${icone('arrow-left', 18)} Voltar ao início</a>
            <button type="button" class="btn btn-secundario btn-pequeno" id="guia-editar">Editar minhas respostas</button>
          </div>
        </header>
        <div class="simulados-conteudo">
          <p class="agenda-dica">${icone('alert-circle', 22)}
            <span>Este é o seu cronograma até a prova. Ele se ajusta sozinho conforme você acerta e erra as questões
            dos simulados e dos módulos. Precisa mudar algo (viagem, simulado do cursinho)? Use a conversa abaixo.</span></p>
          <h2 class="agenda-faixa">Cronograma até a prova<span>${diasParaProva > 0
            ? `faltam ${diasParaProva} dia${diasParaProva > 1 ? 's' : ''} • ${PROVA.dataExtenso}`
            : diasParaProva === 0 ? 'hoje é o dia da prova • boa prova! 🍀' : 'a prova já aconteceu'}</span></h2>
          ${htmlChat()}
          ${htmlMudancasAtivas(ctx)}
          ${htmlLinhaDoTempo(ctx, plano)}
          ${htmlDesempenho(ctx)}
        </div>
      </div>
    </div>`;

  container.querySelector('#guia-editar').addEventListener('click', () =>
    renderizarQuestionario(container, guia.perfil, redesenhar));

  // Blocos feitos
  container.querySelectorAll('[data-bloco-feito]').forEach(caixa => caixa.addEventListener('change', () => {
    const g = lerGuia();
    const p = g.planos[hoje];
    const i = Number(caixa.dataset.blocoFeito);
    p.feitos = caixa.checked ? [...new Set([...(p.feitos || []), i])] : (p.feitos || []).filter(x => x !== i);
    salvarGuia(g);
    caixa.closest('.guia-bloco').classList.toggle('guia-bloco--feito', caixa.checked);
    atualizarResumoFeitos(container);
  }));

  // Mais / menos tempo em um dia
  container.querySelectorAll('[data-ajuste]').forEach(btn => btn.addEventListener('click', () => {
    const g = lerGuia();
    const dia = btn.dataset.dia;
    if (btn.dataset.ajuste === '0') { delete g.ajustes[dia]; delete g.fixos[dia]; }
    else {
      const atual = minutosDoDia(g, dia, DIA_PROVA);
      const delta = Number(btn.dataset.ajuste);
      if (atual + delta < 0) return;
      if (g.fixos?.[dia] !== undefined) g.fixos[dia] = Math.max(0, g.fixos[dia] + delta);
      else g.ajustes = { ...g.ajustes, [dia]: (g.ajustes?.[dia] || 0) + delta };
    }
    salvarGuia(g);
    redesenhar();
  }));

  // Desfazer mudanças pedidas pelo chat
  container.querySelectorAll('[data-desfazer]').forEach(btn => btn.addEventListener('click', () => {
    const g = lerGuia();
    const [tipo, chave] = btn.dataset.desfazer.split(':');
    if (tipo === 'dias') chave.split(',').forEach(d => { delete g.fixos[d]; delete g.ajustes[d]; });
    if (tipo === 'externo') delete g.simuladosExternos[chave];
    if (tipo === 'movido') delete g.simuladoNoDia[chave];
    if (tipo === 'edicoes') {
      delete g.edicoes?.[chave];
      if (chave === hoje && g.planos) delete g.planos[hoje];   // hoje é refeito sem as edições
    }
    salvarGuia(g);
    redesenhar();
  }));

  // Refazer o plano de hoje com o desempenho atual
  container.querySelector('#guia-refazer-hoje')?.addEventListener('click', async () => {
    if (!(await confirmar({
      titulo: 'Refazer o plano de hoje?',
      mensagem: 'O plano é montado de novo com o seu desempenho atual. Os blocos marcados como feitos voltam a ficar desmarcados.',
      textoConfirmar: 'Refazer',
    }))) return;
    const g = lerGuia();
    delete g.planos[hoje];
    salvarGuia(g);
    redesenhar();
  });

  vincularChat(container, ctx, redesenhar);
  atualizarResumoFeitos(container);
}

/* ---------------- Blocos do dia de hoje ---------------- */

function htmlBloco(bloco, i, ctx, feito) {
  const materia = MATERIAS.find(m => m.id === bloco.materia);
  let titulo, acao = '';
  if (bloco.tipo === 'simulado') {
    titulo = 'Simulado completo';
    const finalizado = ctx.simuladoFeitoHoje;
    acao = finalizado ? `<span class="guia-selo guia-selo--ok">${icone('check', 14)} Simulado finalizado hoje</span>`
      : `<a href="${ctx.atual ? '#/simulado' : '#/simulados'}" class="btn btn-primario btn-pequeno">${ctx.atual ? 'Continuar simulado' : 'Ir para os simulados'}</a>`;
  } else if (bloco.tipo === 'externo') {
    titulo = 'Simulado externo';
  } else {
    titulo = nomeMateria(materia, ctx.guia.perfil);
    const modulo = moduloMateria(materia, ctx.guia.perfil);
    if (modulo && ctx.materiasComQuestoes.has(materia.id)) acao = `<a href="#/questoes/${modulo}" class="btn btn-secundario btn-pequeno">Praticar questões</a>`;
  }
  return `
    <li class="guia-bloco${feito ? ' guia-bloco--feito' : ''}${bloco.tipo !== 'materia' ? ' guia-bloco--simulado' : ''}">
      <label class="guia-bloco__marcar" title="Marcar como feito">
        <input type="checkbox" data-bloco-feito="${i}"${feito ? ' checked' : ''} aria-label="Bloco ${i + 1} feito">
      </label>
      <div class="guia-bloco__corpo">
        <p class="guia-bloco__titulo"><span class="guia-bloco__tempo">${formatarHoras(bloco.minutos)}</span> ${titulo}${bloco.editado ? ' <span class="guia-selo">alterado por você</span>' : ''}</p>
        ${bloco.foco?.length ? `<p class="guia-bloco__foco">Foco: ${bloco.foco.map(f => `<span class="guia-chip">${escaparHtml(f)}</span>`).join(' ')}</p>` : ''}
        <p class="guia-bloco__atividade">${bloco.atividade}</p>
        ${acao}
      </div>
    </li>`;
}

function atualizarResumoFeitos(container) {
  const caixas = [...container.querySelectorAll('[data-bloco-feito]')];
  const el = container.querySelector('#guia-progresso');
  if (!el || !caixas.length) return;
  const feitos = caixas.filter(c => c.checked).length;
  el.textContent = feitos === caixas.length ? `Tudo feito! 🎉` : `${feitos} de ${caixas.length} blocos feitos`;
}

/* ---------------- Linha do tempo (modelo da agenda da UFSC) ---------------- */

const MESES_NOMES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto',
  'setembro', 'outubro', 'novembro', 'dezembro'];
const DIAS_NOMES = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

/** "30 de outubro de 2026 · sexta-feira" */
function dataLonga(chave) {
  const [ano, mes, dia] = chave.split('-').map(Number);
  return `${String(dia).padStart(2, '0')} de ${MESES_NOMES[mes - 1]} de ${ano} · ${DIAS_NOMES[new Date(`${chave}T12:00:00-03:00`).getUTCDay()]}`;
}

/** Tipo visual do dia: cor do marcador e da borda do cartão. */
function tipoDoDia(plano, chave, hoje) {
  if (chave === DIA_PROVA) return 'prova';
  if (chave > DIA_PROVA) return 'gabarito';
  if (chave < hoje) return 'passado';
  if (plano.blocos.some(b => b.tipo === 'simulado')) return 'simulado';
  if (plano.blocos.some(b => b.tipo === 'externo')) return 'externo';
  if (!plano.blocos.length) return 'livre';
  if (somarDias(chave, 1) === DIA_PROVA) return 'vespera';
  return 'estudo';
}

/** Título do cartão de um dia de estudo. */
function tituloDoDia(plano, chave, hoje) {
  const prefixo = chave === hoje ? 'Hoje · ' : '';
  if (somarDias(chave, 1) === DIA_PROVA) return `${prefixo}Véspera: revisão leve`;
  if (!plano.blocos.length) return `${prefixo}Dia livre`;
  const sim = plano.blocos.find(b => b.tipo === 'simulado' || b.tipo === 'externo');
  const materias = plano.blocos.filter(b => b.tipo === 'materia').length;
  const blocos = n => `${n} bloco${n > 1 ? 's' : ''}`;
  if (sim) {
    const nome = sim.tipo === 'externo' ? 'Simulado externo' : sim.minutos < 300 ? 'Simulado (parte)' : 'Simulado completo';
    return `${prefixo}${nome}${materias ? ` + ${blocos(materias)}` : ''}`;
  }
  return `${prefixo}${formatarHoras(plano.minutos)} de estudo · ${blocos(materias)}`;
}

/** Linha compacta de um bloco (dias futuros e passados). */
function htmlBlocoCompacto(b, guia, feito) {
  const nome = b.tipo === 'simulado' ? 'Simulado completo (site)' : b.tipo === 'externo' ? 'Simulado externo'
    : nomeMateria(MATERIAS.find(m => m.id === b.materia), guia.perfil);
  return `
    <li class="agenda-bloco${feito ? ' agenda-bloco--feito' : ''}">
      <span class="agenda-bloco__tempo">${formatarHoras(b.minutos)}${b.editado ? ' ✏️' : ''}</span>
      <span><strong>${nome}</strong>${b.foco?.length ? ` <span class="agenda-bloco__foco">— ${b.foco.map(escaparHtml).join(', ')}</span>` : ''}</span>
    </li>`;
}

function htmlAjusteDoDia(guia, chave, ehHoje) {
  const mudado = guia.fixos?.[chave] !== undefined || guia.ajustes?.[chave];
  return `
    <div class="guia-ajuste" role="group" aria-label="Ajustar o tempo de ${dataCurta(chave)}">
      <span>${ehHoje ? 'Hoje vou estudar' : 'Neste dia'}:</span>
      <button type="button" class="btn btn-secundario btn-pequeno" data-ajuste="-${PASSO_AJUSTE}" data-dia="${chave}" aria-label="${PASSO_AJUSTE} minutos a menos em ${dataCurta(chave)}">− ${PASSO_AJUSTE} min</button>
      <button type="button" class="btn btn-secundario btn-pequeno" data-ajuste="${PASSO_AJUSTE}" data-dia="${chave}" aria-label="${PASSO_AJUSTE} minutos a mais em ${dataCurta(chave)}">+ ${PASSO_AJUSTE} min</button>
      ${mudado ? `<button type="button" class="btn btn-secundario btn-pequeno" data-ajuste="0" data-dia="${chave}">Tempo normal</button>` : ''}
    </div>`;
}

/** Conteúdo do cartão de um dia. */
function htmlCartaoDia(ctx, plano, tipo) {
  const { guia, hoje } = ctx;
  const chave = plano.chave;
  const ehHoje = chave === hoje;
  const mudado = guia.fixos?.[chave] !== undefined || guia.ajustes?.[chave];
  const selo = mudado ? ' <span class="guia-selo">ajustado</span>' : '';

  if (tipo === 'prova') {
    const idioma = guia.perfil.idioma || 'Espanhol';
    return `
      <p class="agenda-cartao__data">${dataLonga(chave)}</p>
      <h3 class="agenda-cartao__titulo">PROVA · ${PROVA.nome}</h3>
      <p>🚪 Portões fecham às <mark>13h00</mark> (chegue 30 minutos antes).</p>
      <p>📝 Prova das <mark>13h20 às 18h20</mark> (horário de Brasília): redação e 63 questões objetivas.</p>
      <ul class="agenda-lista">
        <li><strong>Língua Portuguesa</strong>: 10 questões</li>
        <li><strong>Literatura</strong>: 4 questões</li>
        <li><strong>Língua Estrangeira (${idioma})</strong>: 7 questões</li>
        <li><strong>Matemática, Física, Química, Biologia, História e Geografia</strong>: 7 questões cada</li>
      </ul>
      <p>🍀 Nada de estudar neste dia. Leve documento com foto e caneta preta. Você se preparou para isso!</p>`;
  }
  if (tipo === 'gabarito') {
    return `
      <p class="agenda-cartao__data">${dataLonga(chave)}</p>
      <h3 class="agenda-cartao__titulo">Gabarito preliminar</h3>
      <p>✅ ${PROVA.gabarito}</p>`;
  }

  if (tipo === 'passado') {
    const feitos = new Set(plano.feitos || []);
    return `
      <p class="agenda-cartao__data agenda-cartao__data--passado">${dataLonga(chave)}</p>
      <h3 class="agenda-cartao__titulo">${tituloDoDia(plano, chave, hoje)}</h3>
      ${plano.blocos.length ? `<p class="agenda-cartao__resumo">${icone('check', 14)} ${feitos.size} de ${plano.blocos.length} blocos feitos</p>
      <ul class="agenda-blocos">${plano.blocos.map((b, i) => htmlBlocoCompacto(b, guia, feitos.has(i))).join('')}</ul>` : ''}`;
  }

  if (ehHoje) {
    const pausa = guia.perfil.bloco.pausa;
    const feitos = new Set(plano.feitos || []);
    const corpo = plano.blocos.length
      ? `<ol class="guia-blocos">${plano.blocos.map((b, i) =>
          htmlBloco(b, i, ctx, feitos.has(i)) + (i < plano.blocos.length - 1 && pausa ? `<li class="guia-pausa">pausa de ${pausa} min</li>` : '')).join('')}</ol>`
      : `<p>${plano.minutos === 0 ? 'Hoje está livre no seu cronograma. Descanse!' : 'O tempo de hoje é curto demais para um bloco (mínimo de 15 minutos).'}</p>`;
    return `
      <div class="guia-hoje__topo">
        <p class="agenda-cartao__data">${dataLonga(chave)}</p>
        <span class="guia-hoje__progresso" id="guia-progresso" aria-live="polite"></span>
      </div>
      <h3 class="agenda-cartao__titulo">${tituloDoDia(plano, chave, hoje)}${selo}</h3>
      ${htmlAjusteDoDia(guia, chave, true)}
      ${corpo}
      ${plano.blocos.length ? `<p class="guia-dica">O plano de hoje fica fixo durante o dia; o de amanhã já leva em conta o que você acertou e errou hoje.
        <button type="button" class="guia-link" id="guia-refazer-hoje">Refazer o plano de hoje com meu desempenho atual</button></p>` : ''}`;
  }

  // Dia futuro (prévia)
  return `
    <p class="agenda-cartao__data">${dataLonga(chave)}</p>
    <h3 class="agenda-cartao__titulo">${tituloDoDia(plano, chave, hoje)}${selo}</h3>
    ${plano.blocos.length ? `<ul class="agenda-blocos">${plano.blocos.map(b => htmlBlocoCompacto(b, guia, false)).join('')}</ul>` : ''}
    ${tipo === 'vespera' ? '<p class="agenda-cartao__resumo">Releia resumos e anotações, sem conteúdo novo. Separe documento e caneta e durma cedo.</p>' : ''}
    ${htmlAjusteDoDia(guia, chave, false)}`;
}

/**
 * Linha do tempo do cronograma: dias recentes (cinza, riscados), hoje (destaque, interativo),
 * os próximos dias até a véspera (prévia), a prova e o gabarito. Um cabeçalho por mês.
 */
function htmlLinhaDoTempo(ctx, planoHoje) {
  const { guia, hoje } = ctx;
  const vespera = somarDias(DIA_PROVA, -1);
  const passados = Object.keys(ctx.planosFixos).filter(d => d >= somarDias(hoje, -3)).sort()
    .map(d => ({ ...ctx.planosFixos[d], chave: d }));
  const futuros = hoje < vespera
    ? planejarPeriodo(guia, { ...ctx, planosFixos: { ...ctx.planosFixos, [hoje]: planoHoje }, de: hoje, ate: vespera }).slice(1)
    : [];
  const dias = [
    ...passados,
    ...(hoje < DIA_PROVA ? [planoHoje] : []),
    ...futuros,
    ...(hoje <= DIA_PROVA ? [{ chave: DIA_PROVA, blocos: [] }] : []),
    { chave: somarDias(DIA_PROVA, 1), blocos: [] },
  ];

  let mesAtual = '';
  let lado = 0;
  const itens = dias.map(plano => {
    const mes = plano.chave.slice(0, 7);
    let cabecalho = '';
    if (mes !== mesAtual) {
      mesAtual = mes;
      const [ano, m] = mes.split('-').map(Number);
      cabecalho = `
        <li class="agenda-item agenda-item--mes agenda-item--${lado++ % 2 ? 'esquerda' : 'direita'}">
          <span class="agenda-marcador agenda-marcador--mes" aria-hidden="true">${icone('clock', 16)}</span>
          <h3 class="agenda-mes">${MESES_NOMES[m - 1]} ${ano}</h3>
        </li>`;
    }
    const tipo = tipoDoDia(plano, plano.chave, hoje);
    const ehHoje = plano.chave === hoje;
    return cabecalho + `
      <li class="agenda-item agenda-item--${lado++ % 2 ? 'esquerda' : 'direita'}${ehHoje ? ' agenda-item--hoje' : ''}"${ehHoje ? ' id="agenda-hoje"' : ''}>
        <span class="agenda-marcador agenda-marcador--${tipo}" aria-hidden="true">${icone(tipo === 'passado' ? 'check' : 'clock', 16)}</span>
        <article class="agenda-cartao agenda-cartao--${tipo}${ehHoje ? ' agenda-cartao--hoje' : ''}" aria-label="${dataLonga(plano.chave)}">
          ${htmlCartaoDia(ctx, plano, tipo)}
        </article>
      </li>`;
  }).join('');

  return `
    <section aria-label="Cronograma dia a dia">
      <ol class="agenda">${itens}</ol>
      <p class="guia-dica agenda-legenda">
        <span class="agenda-cor agenda-cor--estudo"></span> estudo
        <span class="agenda-cor agenda-cor--simulado"></span> simulado
        <span class="agenda-cor agenda-cor--externo"></span> simulado externo
        <span class="agenda-cor agenda-cor--livre"></span> dia livre
        <span class="agenda-cor agenda-cor--prova"></span> prova
        — os dias seguintes são uma prévia: as matérias de cada dia são definidas no próprio dia, com o seu desempenho mais recente.
      </p>
    </section>`;
}

/* ---------------- Mudanças ativas ---------------- */

function htmlMudancasAtivas(ctx) {
  const { guia, hoje } = ctx;
  const itens = [];
  // Dias com tempo mudado; dias seguidos com a mesma mudança viram uma linha só
  const dias = new Set([...Object.keys(guia.fixos || {}), ...Object.keys(guia.ajustes || {})]);
  const grupos = [];
  [...dias].filter(d => d >= hoje && d < DIA_PROVA).sort().forEach(d => {
    if (guia.fixos?.[d] === undefined && !guia.ajustes?.[d]) return;
    const texto = guia.fixos?.[d] !== undefined
      ? (guia.fixos[d] === 0 ? 'sem estudo' : `só ${formatarHoras(guia.fixos[d])}`)
      : `${guia.ajustes[d] > 0 ? '+' : '−'}${formatarHoras(guia.ajustes[d])}`;
    const ultimo = grupos[grupos.length - 1];
    if (ultimo && ultimo.texto === texto && somarDias(ultimo.dias[ultimo.dias.length - 1], 1) === d) ultimo.dias.push(d);
    else grupos.push({ texto, dias: [d] });
  });
  grupos.forEach(({ texto, dias: ds }) => itens.push({
    texto: `${dataCurta(ds[0])}${ds.length > 1 ? ` a ${dataCurta(ds[ds.length - 1])}` : ''}: ${texto}`,
    chave: `dias:${ds.join(',')}`,
  }));
  Object.entries(guia.simuladosExternos || {}).filter(([d]) => d >= hoje).forEach(([d, min]) =>
    itens.push({ texto: `${dataCurta(d)}: simulado externo (${formatarHoras(min)})`, chave: `externo:${d}` }));
  const nomeM = id => nomeMateria(MATERIAS.find(m => m.id === id), guia.perfil);
  Object.entries(guia.edicoes || {}).filter(([d, ops]) => d >= hoje && d < DIA_PROVA && ops.length).sort().forEach(([d, ops]) => {
    const partes = ops.map(e =>
      e.op === 'tempo' ? `${nomeM(e.materia)} com ${formatarHoras(e.minutos)}`
      : e.op === 'delta' ? `${nomeM(e.materia)} ${e.minutos > 0 ? '+' : '−'}${formatarHoras(e.minutos)}`
      : e.op === 'remover' ? `sem ${nomeM(e.materia)}`
      : `+${nomeM(e.materia)} (${formatarHoras(e.minutos)})`);
    itens.push({ texto: `${dataCurta(d)}: ${partes.join('; ')}`, chave: `edicoes:${d}` });
  });
  Object.entries(guia.simuladoNoDia || {}).filter(([, d]) => d >= hoje).forEach(([semana, d]) =>
    itens.push({ texto: `Simulado da semana em ${dataCurta(d)}`, chave: `movido:${semana}` }));
  if (!itens.length) return '';
  return `
    <section class="simulado-card" aria-label="Mudanças no cronograma">
      <div class="simulado-card__corpo">
        <h3 class="simulado-card__titulo">Mudanças no seu cronograma</h3>
        <ul class="guia-mudancas">
          ${itens.map(i => `<li><span>${i.texto}</span>
            <button type="button" class="btn btn-secundario btn-pequeno" data-desfazer="${i.chave}">Desfazer</button></li>`).join('')}
        </ul>
      </div>
    </section>`;
}

/* ---------------- Chat ---------------- */

const Reconhecimento = typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);

function htmlChat() {
  return `
    <section class="simulado-card guia-chat" aria-label="Converse com o guia">
      <div class="simulado-card__corpo">
        <h3 class="simulado-card__titulo">Precisa mudar algo no cronograma?</h3>
        <p class="simulado-card__info">Escreva${Reconhecimento ? ' ou fale' : ''} o que mudou. Ex.: "vou viajar de sexta a domingo",
          "dia 14 só consigo 2h", "tenho simulado do cursinho no sábado", "passa o simulado para domingo".
          Antes de mudar, o guia mostra se faz sentido e as consequências até a prova.</p>
        <div class="guia-chat__mensagens" id="guia-chat-mensagens" aria-live="polite">
          ${conversa.map(htmlMensagem).join('')}
        </div>
        <form class="guia-chat__envio" id="guia-chat-form">
          <textarea id="guia-chat-texto" rows="2" placeholder="O que você quer mudar?" aria-label="Mensagem para o guia"></textarea>
          ${Reconhecimento ? `<button type="button" class="btn btn-secundario guia-chat__mic" id="guia-chat-mic" aria-label="Falar" title="Falar">🎤</button>` : ''}
          <button type="submit" class="btn btn-primario">Enviar</button>
        </form>
      </div>
    </section>`;
}

const htmlMensagem = m => `<div class="guia-msg guia-msg--${m.autor}">${m.html}</div>`;

function htmlAvaliacao(interpretacao, avaliacao, idx) {
  const { veredito, erros, avisos, consequencias, compensacao } = avaliacao;
  const selo = veredito === 'invalida' ? '<span class="guia-selo guia-selo--erro">Não dá para aplicar</span>'
    : veredito === 'atencao' ? '<span class="guia-selo guia-selo--atencao">Pode, mas atenção</span>'
    : '<span class="guia-selo guia-selo--ok">Faz sentido</span>';
  return `
    <p><strong>Entendi:</strong> ${interpretacao.entendido.join(' ')} ${selo}</p>
    ${erros.length ? `<ul class="guia-lista guia-lista--erro">${erros.map(e => `<li>${e}</li>`).join('')}</ul>` : ''}
    ${avisos.length ? `<ul class="guia-lista guia-lista--atencao">${avisos.map(e => `<li>${e}</li>`).join('')}</ul>` : ''}
    ${consequencias.length ? `<p class="guia-msg__sub">O que muda no seu plano:</p><ul class="guia-lista">${consequencias.map(e => `<li>${e}</li>`).join('')}</ul>` : ''}
    ${veredito !== 'invalida' ? `
      <div class="guia-msg__acoes" data-pedido="${idx}">
        ${compensacao
          ? `<button type="button" class="btn btn-primario btn-pequeno" data-aplicar="compensar">Aplicar e compensar</button>
             <button type="button" class="btn btn-secundario btn-pequeno" data-aplicar="simples">Aplicar sem compensar</button>`
          : '<button type="button" class="btn btn-primario btn-pequeno" data-aplicar="simples">Aplicar</button>'}
        <button type="button" class="btn btn-secundario btn-pequeno" data-aplicar="cancelar">Cancelar</button>
      </div>` : ''}`;
}

const pedidos = [];   // pedidos avaliados nesta visita (índice usado nos botões)

/**
 * Plano de hoje depois de uma mudança: mantém marcados como feitos os blocos que
 * continuam no plano (mesma matéria/tipo, na ordem).
 */
function manterFeitos(antes, depois) {
  const feitosAntes = (antes?.feitos || []).map(i => antes.blocos[i]).filter(Boolean);
  const feitos = [];
  depois.blocos.forEach((b, j) => {
    const k = feitosAntes.findIndex(f => f.tipo === b.tipo && f.materia === b.materia);
    if (k >= 0) { feitos.push(j); feitosAntes.splice(k, 1); }
  });
  return feitos;
}

function vincularChat(container, ctx, redesenhar) {
  // avaliação sempre com o guia e o plano de hoje atuais (o aluno pode ter mudado algo antes)
  const contextoAtual = () => ({ ...ctx, planoHoje: lerGuia()?.planos?.[ctx.hoje] || null });
  const form = container.querySelector('#guia-chat-form');
  const texto = container.querySelector('#guia-chat-texto');
  const caixa = container.querySelector('#guia-chat-mensagens');
  const rolar = () => { caixa.scrollTop = caixa.scrollHeight; };
  rolar();

  const adicionar = (autor, html) => {
    conversa.push({ autor, html });
    caixa.insertAdjacentHTML('beforeend', htmlMensagem({ autor, html }));
    rolar();
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const pedido = texto.value.trim();
    if (!pedido) return;
    texto.value = '';
    adicionar('aluno', escaparHtml(pedido));
    const interpretacao = interpretarPedido(pedido, ctx.hoje);
    if (interpretacao.duvida) { adicionar('guia', interpretacao.duvida); return; }
    const avaliacao = avaliarMudancas(lerGuia(), interpretacao.mudancas, contextoAtual());
    pedidos.push({ texto: pedido, interpretacao, avaliacao });
    adicionar('guia', htmlAvaliacao(interpretacao, avaliacao, pedidos.length - 1));
  });
  texto.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); }
  });

  caixa.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-aplicar]');
    if (!btn) return;
    const acoes = btn.closest('[data-pedido]');
    const p = pedidos[Number(acoes.dataset.pedido)];
    acoes.remove();
    // a mensagem fica registrada sem os botões
    const i = conversa.findIndex(m => m.html.includes(`data-pedido="${acoes.dataset.pedido}"`));
    if (i >= 0) conversa[i].html = conversa[i].html.replace(/<div class="guia-msg__acoes"[\s\S]*?<\/div>/, '');
    if (!p || btn.dataset.aplicar === 'cancelar') { adicionar('guia', 'Tudo bem, nada foi alterado.'); return; }
    // reavalia agora, com o estado atual, e aplica as mudanças já conferidas
    const atual = lerGuia();
    const av = avaliarMudancas(atual, p.interpretacao.mudancas, contextoAtual());
    if (av.veredito === 'invalida') { adicionar('guia', `Não deu para aplicar: ${av.erros.join(' ')}`); return; }
    const compensar = btn.dataset.aplicar === 'compensar' && av.compensacao;
    const mudancas = compensar ? [...av.mudancas, ...av.compensacao] : av.mudancas;
    const g = aplicarMudancas(atual, mudancas);
    // plano de hoje: recebe as edições pedidas (sem refazer o resto); se o tempo do dia mudou, é refeito
    const hojeAntes = atual.planos?.[ctx.hoje];
    if (hojeAntes && av.planoHojeDepois && !av.tempoDeHojeMuda) {
      g.planos[ctx.hoje] = { ...av.planoHojeDepois, base: hojeAntes.base, feitos: manterFeitos(hojeAntes, av.planoHojeDepois) };
    } else if (av.tempoDeHojeMuda && g.planos) delete g.planos[ctx.hoje];
    g.historico = [...(g.historico || []).slice(-29), { em: Date.now(), pedido: p.texto, mudancas }];
    salvarGuia(g);
    conversa.push({ autor: 'guia', html: `Pronto! Cronograma atualizado${compensar ? ', com a compensação' : ''}.` });
    redesenhar();
  });

  // Microfone (reconhecimento de voz do navegador)
  const mic = container.querySelector('#guia-chat-mic');
  if (mic && Reconhecimento) {
    let rec = null;
    mic.addEventListener('click', () => {
      if (rec) { rec.stop(); return; }
      rec = new Reconhecimento();
      rec.lang = 'pt-BR';
      rec.interimResults = true;
      const antes = texto.value ? texto.value + ' ' : '';
      rec.onresult = (ev) => { texto.value = antes + [...ev.results].map(r => r[0].transcript).join(''); };
      rec.onerror = (ev) => {
        if (ev.error === 'not-allowed') adicionar('guia', 'O navegador não liberou o microfone. Permita o acesso ao microfone ou escreva sua mensagem.');
      };
      rec.onend = () => { rec = null; mic.classList.remove('guia-chat__mic--gravando'); mic.setAttribute('aria-label', 'Falar'); };
      mic.classList.add('guia-chat__mic--gravando');
      mic.setAttribute('aria-label', 'Parar de gravar');
      rec.start();
    });
  }
}

/* ---------------- Desempenho ---------------- */

function htmlDesempenho(ctx) {
  const { guia, analise, prioridades, tentativas } = ctx;
  const perfil = guia.perfil;
  const total = Object.values(analise.materias).reduce((s, a) => s + a.n, 0);
  const dicaDiagnostico = !tentativas.length
    ? `<p class="simulado-aviso">${perfil.provasAnteriores === 'nenhuma'
      ? 'Você ainda não fez nenhuma prova anterior: comece com um simulado para o guia conhecer seus pontos fortes e fracos.'
      : 'Faça um simulado aqui no site para o guia conhecer seus pontos fortes e fracos.'}
      <a href="#/simulados">Ir para os simulados</a></p>` : '';

  if (!total) {
    return `
      <section class="simulado-card" aria-label="Seu desempenho">
        <div class="simulado-card__corpo">
          <h3 class="simulado-card__titulo">Seu desempenho</h3>
          <p class="simulado-card__info">Ainda não há respostas registradas. Por enquanto, o plano usa o peso de cada matéria
            na prova e as matérias que você marcou como difíceis; conforme você responder questões, ele se ajusta sozinho.</p>
          ${dicaDiagnostico}
        </div>
      </section>`;
  }

  const projecao = projetarAcertos(analise);
  const linhas = prioridades.map(p => {
    const acc = analise.materias[p.id];
    const pct = acc ? Math.round(acc.acertos / acc.n * 100) : null;
    const pct14 = acc?.n14 ? Math.round(acc.acertos14 / acc.n14 * 100) : null;
    return `
      <tr>
        <td>${nomeMateria(p.materia, perfil)}${(perfil.dificeis || []).includes(p.id) ? ' <span class="guia-selo">difícil</span>' : ''}</td>
        <td class="simulado-tabela__num">${acc ? acc.n : 0}</td>
        <td class="simulado-tabela__num">${pct === null ? '—' : pct + '%'}</td>
        <td class="simulado-tabela__num">${pct14 === null ? '—' : pct14 + '%'}</td>
        <td class="simulado-tabela__num">${Math.round(p.fatia * 100)}%</td>
      </tr>`;
  }).join('');

  const fracos = MATERIAS.flatMap(m => conteudosFracos(analise, m.id).filter(c => c.n >= 2).map(c => ({ ...c, m })))
    .sort((a, b) => taxaErro(b) - taxaErro(a)).slice(0, 8);

  return `
    <section class="simulado-card" aria-label="Seu desempenho">
      <div class="simulado-card__corpo">
        <h3 class="simulado-card__titulo">Seu desempenho</h3>
        ${projecao ? `<p class="guia-projecao">
          Pelo seu desempenho${projecao.questoesConsideradas < 63 ? ` (nas matérias com respostas suficientes, ${projecao.questoesConsideradas} das 63 questões)` : ''},
          você acertaria cerca de <strong>${Math.round(projecao.acertos * 63 / projecao.questoesConsideradas)} de 63</strong> questões.
          Sua meta é <strong>${perfil.meta}</strong>${Math.round(projecao.acertos * 63 / projecao.questoesConsideradas) >= perfil.meta ? ' — no caminho certo! 💪' : '.'}
        </p>` : ''}
        <table class="simulado-tabela">
          <caption>Respostas registradas (simulados e questões de estudo) e fatia de cada matéria no seu plano</caption>
          <thead><tr><th>Matéria</th><th>Respostas</th><th>Acertos</th><th>Últimos 14 dias</th><th>No plano</th></tr></thead>
          <tbody>${linhas}</tbody>
        </table>
        ${fracos.length ? `
          <p class="guia-msg__sub">Conteúdos para reforçar (mais erros):</p>
          <ul class="guia-lista">${fracos.map(c => `<li>${nomeMateria(c.m, perfil)}: ${escaparHtml(c.subtopico)} — ${c.n - c.acertos} erro${c.n - c.acertos > 1 ? 's' : ''} em ${c.n}</li>`).join('')}</ul>` : ''}
        ${dicaDiagnostico}
      </div>
    </section>`;
}
