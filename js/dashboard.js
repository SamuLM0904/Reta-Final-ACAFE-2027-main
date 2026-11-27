/**
 * dashboard.js — Tela inicial (#/), no formato da identidade visual B (IDENTIDADE-VISUAL.md, 5.2).
 *
 * De cima para baixo:
 *   1. Saudação e data ("Sábado, 7 de novembro · bloco 3 de 5" / "Boa noite, Samuel").
 *   2. Card "Próximo bloco": o próximo bloco de HOJE do Guia de Estudos (o mesmo plano do
 *      #/guia). Sem guia montado, o card convida a montar o guia.
 *   3. Dois cards lado a lado:
 *      - Simulados: atalhos (prova completa, mini, por matéria), os simulados já feitos e um
 *        gráfico das questões feitas nos últimos 14 dias.
 *      - Matérias: uma linha por matéria com as questões das provas da ACAFE já feitas.
 * As outras telas (guia, correção de erros, leituras) ficam no menu lateral.
 */

import { escaparHtml } from './utils.js';
import { lerMemoria, lerSimulado, lerGuia } from './armazenamento.js';
import { htmlContagemCompacta, iniciarContagemCompacta } from './contagem.js';
import { proximoBlocoDeHoje } from './guia.js';
import { TAMANHOS, duracaoDoSimulado } from './simulado.js';
import { MATERIAS, nomeMateria, moduloMateria, materiaDaDisciplina, chaveDia, somarDias, formatarHoras } from './guia-plano.js';
import { nomeDoAluno } from './nuvem.js';

const DIA_MS = 86400000;
const DIAS_GRAFICO = 14;

/* ================================================================
   Saudação
   ================================================================ */

function saudacao(agora = new Date()) {
  const hora = Number(agora.toLocaleString('pt-BR', { hour: 'numeric', hour12: false, timeZone: 'America/Sao_Paulo' }));
  return hora < 5 ? 'Boa noite' : hora < 12 ? 'Bom dia' : hora < 18 ? 'Boa tarde' : 'Boa noite';
}

function dataPorExtenso(agora = new Date()) {
  const t = agora.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'America/Sao_Paulo' })
    .replace('-feira', '');
  return t.charAt(0).toUpperCase() + t.slice(1).replace(/,/, ',');
}

/** Primeiro nome do aluno, do nome digitado ao criar a conta. */
function primeiroNome() {
  const nome = (nomeDoAluno() || '').split(/\s+/)[0];
  return nome ? nome.charAt(0).toUpperCase() + nome.slice(1) : null;
}

/* ================================================================
   Card "Próximo bloco"
   ================================================================ */

function htmlProximoBloco(prox) {
  if (!prox) {
    return `
      <section class="inicio-bloco" aria-labelledby="inicio-bloco-titulo">
        <div class="inicio-bloco__texto">
          <p class="inicio-bloco__rotulo">Comece por aqui</p>
          <h2 class="inicio-bloco__titulo" id="inicio-bloco-titulo">Monte seu guia de estudos</h2>
          <p class="inicio-bloco__descricao">Responda 8 perguntas e receba um cronograma diário com os blocos de estudo, simulados e correção de erros.</p>
        </div>
        <div class="inicio-bloco__acoes">
          <a href="#/guia" class="btn btn-primario inicio-bloco__principal">Montar meu guia</a>
        </div>
      </section>`;
  }
  if (prox.vazio) {
    return `
      <section class="inicio-bloco" aria-labelledby="inicio-bloco-titulo">
        <div class="inicio-bloco__texto">
          <p class="inicio-bloco__rotulo">Hoje</p>
          <h2 class="inicio-bloco__titulo" id="inicio-bloco-titulo">${prox.vazio}</h2>
          ${prox.total ? `<p class="inicio-bloco__descricao">${prox.feitos} de ${prox.total} blocos feitos.</p>` : ''}
        </div>
        <div class="inicio-bloco__acoes">
          <a href="#/guia" class="btn btn-secundario">Ver o guia</a>
        </div>
      </section>`;
  }
  const titulo = prox.assunto ? `${escaparHtml(prox.titulo)} — ${escaparHtml(prox.assunto)}` : escaparHtml(prox.titulo);
  return `
    <section class="inicio-bloco" aria-labelledby="inicio-bloco-titulo">
      <div class="inicio-bloco__texto">
        <p class="inicio-bloco__rotulo">Próximo bloco · ${formatarHoras(prox.bloco.minutos).toUpperCase()}</p>
        <h2 class="inicio-bloco__titulo" id="inicio-bloco-titulo">${titulo}</h2>
        <p class="inicio-bloco__descricao">${prox.atividade}</p>
      </div>
      <div class="inicio-bloco__acoes">
        <a href="${prox.href}" class="btn btn-primario inicio-bloco__principal">${prox.rotuloAcao}</a>
        <a href="#/guia" class="btn btn-secundario">Ver o dia todo</a>
      </div>
    </section>`;
}

/* ================================================================
   Card "Simulados"
   ================================================================ */

/** "1h06" — mesmo arredondamento da tela de simulados (minutos para baixo). */
function tempoDoSimulado(total) {
  const min = Math.floor(duracaoDoSimulado(total) / 60000);
  return `${Math.floor(min / 60)}h${String(min % 60).padStart(2, '0')}`;
}

/** As mesmas opções da tela de simulados: os tamanhos do simulado aleatório e a prova de um ano inteira. */
const ATALHOS = [
  ...TAMANHOS.map(t => ({ nome: `${t.nome} · ${t.total} questões`, info: tempoDoSimulado(t.total) })),
  { nome: 'Prova de um ano inteira', info: tempoDoSimulado(63) },
];

function htmlSimulados(memoria) {
  const { atual, tentativas } = lerSimulado();
  const ultimo = tentativas.at(-1);
  const feitos = tentativas.length
    ? `${tentativas.length} ${tentativas.length === 1 ? 'simulado feito' : 'simulados feitos'} · último: ${ultimo.acertos}/${ultimo.total} acertos`
    : 'Nenhum simulado feito ainda.';
  return `
    <section class="inicio-card" aria-labelledby="inicio-simulados-titulo">
      <header class="inicio-card__cabecalho">
        <h2 class="inicio-card__titulo" id="inicio-simulados-titulo">Simulados</h2>
        <a href="#/simulados" class="inicio-card__link">Ver resultados</a>
      </header>
      ${atual ? `<a href="#/simulado" class="inicio-atalho inicio-atalho--andamento">
          <span>Continuar simulado em andamento</span><span class="inicio-atalho__info">${Object.keys(atual.respostas || {}).length}/${atual.ids.length}</span></a>` : ''}
      <ul class="inicio-atalhos" role="list">
        ${ATALHOS.map(a => `<li><a href="#/simulados" class="inicio-atalho"><span>${a.nome}</span><span class="inicio-atalho__info">${a.info}</span></a></li>`).join('')}
      </ul>
      <p class="inicio-card__nota">${feitos}</p>
      ${htmlGraficoQuestoes(memoria)}
    </section>`;
}

/** Barras: questões respondidas por dia nos últimos 14 dias (uma série, sem legenda). */
function htmlGraficoQuestoes(memoria) {
  const hoje = chaveDia();
  const dias = Array.from({ length: DIAS_GRAFICO }, (_, i) => somarDias(hoje, i - DIAS_GRAFICO + 1));
  const porDia = new Map(dias.map(d => [d, { n: 0, ok: 0 }]));
  const limite = Date.now() - (DIAS_GRAFICO + 1) * DIA_MS;
  memoria.forEach(m => {
    if (m.t < limite) return;
    const d = porDia.get(chaveDia(new Date(m.t)));
    if (d) { d.n++; if (m.ok) d.ok++; }
  });
  const valores = dias.map(d => porDia.get(d));
  const total = valores.reduce((s, v) => s + v.n, 0);
  const max = Math.max(...valores.map(v => v.n), 1);
  const topo = Math.max(5, Math.ceil(max / 5) * 5);

  const L = 280, A = 104, base = 88, colunas = DIAS_GRAFICO;
  const larg = L / colunas, barra = larg - 4;
  const rotulo = d => { const [, mes, dia] = d.split('-'); return `${dia}/${mes}`; };
  const barras = valores.map((v, i) => {
    const h = v.n ? Math.max(4, (v.n / topo) * (base - 8)) : 0;
    const x = i * larg + 2, y = base - h;
    const dica = `${rotulo(dias[i])}: ${v.n} ${v.n === 1 ? 'questão' : 'questões'}${v.n ? `, ${v.ok} certa${v.ok === 1 ? '' : 's'}` : ''}`;
    return `<g class="inicio-grafico__coluna"><title>${dica}</title>
      <rect x="${i * larg}" y="0" width="${larg}" height="${A}" fill="transparent"/>
      ${h ? `<path class="inicio-grafico__barra" d="M${x},${base} V${y + 4} Q${x},${y} ${x + 4},${y} H${x + barra - 4} Q${x + barra},${y} ${x + barra},${y + 4} V${base} Z"/>` : ''}</g>`;
  }).join('');

  return `
    <figure class="inicio-grafico">
      <figcaption class="inicio-grafico__titulo">Questões feitas nos últimos 14 dias <span class="inicio-grafico__total">${total} no total</span></figcaption>
      <svg viewBox="0 0 ${L} ${A}" class="inicio-grafico__svg" role="img"
        aria-label="Questões feitas por dia nos últimos 14 dias: ${total} no total">
        <line x1="0" y1="${base - (base - 8)}" x2="${L}" y2="${base - (base - 8)}" class="inicio-grafico__grade"/>
        <text x="0" y="${base - (base - 8) - 3}" class="inicio-grafico__eixo">${topo} por dia</text>
        <line x1="0" y1="${base}" x2="${L}" y2="${base}" class="inicio-grafico__base"/>
        ${barras}
        <text x="0" y="${A - 2}" class="inicio-grafico__eixo">${rotulo(dias[0])}</text>
        <text x="${L}" y="${A - 2}" text-anchor="end" class="inicio-grafico__eixo">hoje</text>
      </svg>
    </figure>`;
}

/* ================================================================
   Card "Matérias"
   ================================================================ */

function htmlMaterias(questoesProvas, memoria) {
  const perfil = lerGuia()?.perfil;
  const idioma = perfil?.idioma || 'Espanhol';
  const feitas = new Set(memoria.map(m => m.q));
  const linhas = MATERIAS.map(materia => {
    const doBanco = questoesProvas.filter(q => materiaDaDisciplina(q.disciplina)?.id === materia.id
      && (materia.id !== 'lingua' || q.disciplina === idioma));
    const total = doBanco.length;
    const n = doBanco.filter(q => feitas.has(q.id)).length;
    const nome = materia.id === 'lingua' ? idioma : nomeMateria(materia, perfil);
    const modulo = materia.id === 'lingua' ? (idioma === 'Inglês' ? 'ingles' : 'espanhol') : moduloMateria(materia, perfil);
    const pct = total ? Math.round((n / total) * 100) : 0;
    return `
      <li>
        <a href="${modulo ? `#/questoes/${modulo}` : '#/simulados'}" class="inicio-materia" aria-label="${nome}: ${n} de ${total} questões feitas">
          <span class="inicio-materia__nome">${nome}</span>
          <span class="inicio-materia__barra" aria-hidden="true"><span style="width: ${pct}%"></span></span>
          <span class="inicio-materia__n">${n}/${total}</span>
        </a>
      </li>`;
  }).join('');
  return `
    <section class="inicio-card" aria-labelledby="inicio-materias-titulo">
      <header class="inicio-card__cabecalho">
        <h2 class="inicio-card__titulo" id="inicio-materias-titulo">Matérias</h2>
        <span class="inicio-card__legenda">questões feitas</span>
      </header>
      <ul class="inicio-materias" role="list">${linhas}</ul>
    </section>`;
}

/* ================================================================
   Tela
   ================================================================ */

/**
 * @param {HTMLElement} container
 * @param {Object[]} todasQuestoes  - questões de estudo (por matéria)
 * @param {Object[]} questoesProvas - questões das provas anteriores (simulados)
 */
export function renderizarDashboard(container, todasQuestoes, questoesProvas = []) {
  const prox = proximoBlocoDeHoje(questoesProvas, todasQuestoes);
  const memoria = lerMemoria();
  const nome = primeiroNome();
  const linhaData = `${dataPorExtenso()}${prox?.posicao ? ` · bloco ${prox.posicao} de ${prox.total}` : ''}`;

  container.innerHTML = `
    <div class="inicio">
      <div class="inicio__contagem">${htmlContagemCompacta()}</div>
      <header class="inicio__saudacao">
        <p class="inicio__data">${linhaData}</p>
        <h1 class="inicio__titulo">${saudacao()}${nome ? `, ${escaparHtml(nome)}` : ''}</h1>
      </header>
      ${htmlProximoBloco(prox)}
      <div class="inicio__grade">
        ${htmlSimulados(memoria)}
        ${htmlMaterias(questoesProvas, memoria)}
      </div>
    </div>`;
  iniciarContagemCompacta(container);
}
