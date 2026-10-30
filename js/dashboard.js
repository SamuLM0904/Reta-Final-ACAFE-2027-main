/**
 * dashboard.js — Renderiza o grid de módulos na tela inicial.
 *
 * Lê os módulos de js/modulos.js, cruza com as questões em dados/questoes.js
 * e o progresso salvo (localStorage) para montar os cards.
 */

import { MODULOS } from './modulos.js';
import { icone }   from './icones.js';
import { estatisticasModulo } from './armazenamento.js';
import { slugify }  from './utils.js';
import { htmlContagem, iniciarContagem } from './contagem.js';
import { resumoSimulados } from './simulado.js';

/**
 * Filtra as questões pertencentes a uma disciplina,
 * comparando por slug para tolerância a acentos/maiúsculas.
 * @param {Object[]} todasQuestoes
 * @param {string}   disciplina
 * @returns {Object[]}
 */
function questoesDaDisciplina(todasQuestoes, disciplina) {
  const alvo = slugify(disciplina);
  return todasQuestoes.filter(q => slugify(q.disciplina) === alvo);
}

/**
 * Gera o HTML da linha de informações secundárias do card.
 * @param {Object}   modulo
 * @param {Object[]} todasQuestoes
 * @returns {string}
 */
function htmlInfoCard(modulo, todasQuestoes, questoesProvas) {
  if (modulo.status === 'em-breve') {
    return `<span class="selo-em-breve">Em breve</span>`;
  }

  if (modulo.tipo === 'simulados') {
    return `<span class="card-modulo__info">${resumoSimulados(questoesProvas)}</span>`;
  }

  const questoes = questoesDaDisciplina(todasQuestoes, modulo.disciplina);
  const { total, respondidas } = estatisticasModulo(questoes);

  if (total === 0) {
    return `<span class="card-modulo__info">Nenhuma questão ainda</span>`;
  }

  const pct = total > 0 ? Math.round((respondidas / total) * 100) : 0;

  return `
    <span class="card-modulo__info">${total} questão${total !== 1 ? 's' : ''} • ${respondidas} respondida${respondidas !== 1 ? 's' : ''}</span>
    <div class="card-progresso" aria-hidden="true">
      <div class="card-progresso__barra">
        <div class="card-progresso__preenchimento" style="width: ${pct}%"></div>
      </div>
    </div>
  `;
}

/**
 * Gera o HTML de um card de módulo.
 * @param {Object}   modulo
 * @param {Object[]} todasQuestoes
 * @returns {string}
 */
function htmlCard(modulo, todasQuestoes, questoesProvas) {
  const estaAtivo = modulo.status === 'ativo';
  const eSimulados = modulo.tipo === 'simulados';

  // Destino do link
  const href = !estaAtivo ? `#/em-breve/${modulo.id}`
    : eSimulados ? '#/simulados'
    : `#/questoes/${modulo.id}`;

  const classeExtra = estaAtivo ? '' : ' card-modulo--em-breve';

  // Label de acessibilidade
  const questoes = estaAtivo && !eSimulados
    ? questoesDaDisciplina(todasQuestoes, modulo.disciplina)
    : [];
  const { total, respondidas } = estaAtivo && !eSimulados
    ? estatisticasModulo(questoes)
    : { total: 0, respondidas: 0 };

  const ariaLabel = eSimulados
    ? `${modulo.titulo}: ${resumoSimulados(questoesProvas)}`
    : estaAtivo
    ? `${modulo.titulo}: ${total} questões, ${respondidas} respondidas`
    : `${modulo.titulo}: em breve`;

  return `
    <a
      href="${href}"
      class="card-modulo${classeExtra}"
      aria-label="${ariaLabel}"
    >
      <div class="card-modulo__icone" aria-hidden="true">
        ${icone(modulo.icone, 22)}
      </div>
      <div class="card-modulo__corpo">
        <span class="card-modulo__titulo">${modulo.titulo}</span>
        ${htmlInfoCard(modulo, todasQuestoes, questoesProvas)}
      </div>
    </a>
  `;
}

/**
 * Renderiza o dashboard completo no elemento fornecido.
 * @param {HTMLElement} container   - elemento onde o HTML será inserido
 * @param {Object[]}    todasQuestoes  - questões de estudo (por matéria)
 * @param {Object[]}    questoesProvas - questões das provas anteriores (simulados)
 */
export function renderizarDashboard(container, todasQuestoes, questoesProvas = []) {
  const cardsHtml = MODULOS.map(m => htmlCard(m, todasQuestoes, questoesProvas)).join('\n');

  container.innerHTML = `
    <section class="dashboard" aria-label="Módulos de estudo">
      <div class="container">
        ${htmlContagem()}
        <div class="dashboard__intro">
          <p class="dashboard__saudacao">Selecione um módulo</p>
          <h2 class="dashboard__titulo-secao">O que vamos estudar hoje?</h2>
          <p class="dashboard__subtitulo-secao">
            Faça simulados com as provas anteriores da ACAFE ou estude cada matéria.
          </p>
        </div>
        <div class="grid-modulos" role="list">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;

  iniciarContagem(container);

  // Torna cada card acessível como item de lista (role já herdado)
  container.querySelectorAll('.card-modulo').forEach(card => {
    card.setAttribute('role', 'listitem');
  });
}

