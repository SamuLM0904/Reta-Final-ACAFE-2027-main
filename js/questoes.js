/**
 * questoes.js (módulo UI) — Motor de questões da plataforma.
 *
 * Controla toda a experiência de responder uma questão:
 * seleção, conferência de gabarito, feedback visual,
 * navegação entre questões, progresso, resultado final e recomeço.
 *
 * O botão "Avançar" funciona em dois tempos:
 *   1º clique (com alternativa marcada) → confere e mostra as explicações;
 *   2º clique → vai para a próxima questão.
 * Sem alternativa marcada, "Avançar" apenas pula a questão.
 */

import { icone }          from './icones.js';
import { confirmar } from './confirmar.js';
import { slugify }        from './utils.js';
import { htmlImagens, htmlAlternativa, vincularImagens, aplicarFeedback } from './render-questao.js';
import { salvarResposta, lerRespostas, recomecarModulo, apagarRespostas, registrarNaMemoria } from './armazenamento.js';

/* ================================================================
   Estado interno da sessão de questões
   ================================================================ */
let estado = {
  questoes: [],           // lista filtrada para este módulo
  indiceAtual: 0,         // qual questão está visível
  selecionada: null,      // letra marcada (ainda não conferida) na questão atual
  respostasSession: {},   // { [id]: { acertou, alternativaSelecionada } }
  modoRefazer: false,     // true quando refazendo só as erradas
  navegadorAberto: true,  // painel de questões numeradas expandido
};

/** A questão atual já foi conferida? */
function questaoAtualConferida() {
  const questao = estado.questoes[estado.indiceAtual];
  return Boolean(estado.respostasSession[questao.id]);
}

/* ================================================================
   Filtragem das questões
   ================================================================ */

/**
 * Filtra todas as questões pela disciplina do módulo.
 * @param {Object[]} todasQuestoes
 * @param {string}   disciplina
 * @returns {Object[]}
 */
function filtrarPorDisciplina(todasQuestoes, disciplina) {
  const alvo = slugify(disciplina);
  return todasQuestoes.filter(q => slugify(q.disciplina) === alvo);
}

/* ================================================================
   Ponto de entrada
   ================================================================ */

/**
 * Inicia a sessão de questões para um módulo.
 * Respostas já gravadas no navegador são recuperadas, e a sessão
 * abre na primeira questão ainda não respondida.
 * @param {HTMLElement} container
 * @param {Object[]}    todasQuestoes
 * @param {Object}      modulo           - objeto do módulo (de modulos.js)
 * @param {string[]}    [idsParaRefazer] - quando "refazer só as erradas"
 */
export function iniciarSessaoQuestoes(container, todasQuestoes, modulo, idsParaRefazer = null) {
  let questoesFiltradas = filtrarPorDisciplina(todasQuestoes, modulo.disciplina);

  // Modo "refazer só as erradas"
  if (idsParaRefazer && idsParaRefazer.length > 0) {
    const conjunto = new Set(idsParaRefazer);
    questoesFiltradas = questoesFiltradas.filter(q => conjunto.has(q.id));
  }

  if (questoesFiltradas.length === 0) {
    container.innerHTML = `
      <div class="container">
        <div class="estado-vazio">
          ${icone('alert-circle', 40)}
          <p>Nenhuma questão encontrada para <strong>${modulo.titulo}</strong>.</p>
          <a href="#/" class="btn btn-primario">${icone('arrow-left', 18)} Voltar ao início</a>
        </div>
      </div>
    `;
    return;
  }

  // Recupera respostas gravadas anteriormente
  const gravadas = lerRespostas();
  const respostasSession = {};
  questoesFiltradas.forEach(q => {
    const r = gravadas[q.id];
    if (r && r.respondida) {
      respostasSession[q.id] = { acertou: r.acertou, alternativaSelecionada: r.alternativaSelecionada };
    }
  });

  const primeiraPendente = questoesFiltradas.findIndex(q => !respostasSession[q.id]);

  estado = {
    questoes: questoesFiltradas,
    indiceAtual: primeiraPendente === -1 ? 0 : primeiraPendente,
    selecionada: null,
    respostasSession,
    modoRefazer: idsParaRefazer !== null,
    navegadorAberto: estado.navegadorAberto,
  };

  renderizarQuestaoAtual(container, modulo);
}

/* ================================================================
   Navegação
   ================================================================ */

/**
 * Vai para a questão de índice `indice` (ou para o resultado, se passar do fim).
 */
function irParaQuestao(container, modulo, indice) {
  if (indice >= estado.questoes.length) {
    renderizarResultado(container, modulo);
    return;
  }
  estado.indiceAtual = Math.max(0, indice);
  estado.selecionada = null;
  renderizarQuestaoAtual(container, modulo);
  container.querySelector('.questoes-cabecalho')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ================================================================
   Renderização
   ================================================================ */

/**
 * Re-renderiza a questão atual no container.
 */
function renderizarQuestaoAtual(container, modulo) {
  const { questoes, indiceAtual, respostasSession } = estado;
  const questao     = questoes[indiceAtual];
  const total       = questoes.length;
  const numero      = indiceAtual + 1;
  const respondidas = questoes.filter(q => respostasSession[q.id]).length;
  const pct         = Math.round((respondidas / total) * 100);

  container.innerHTML = `
    <div class="tela-questoes">
      <div class="container">

        <!-- Cabeçalho da sessão -->
        <header class="questoes-cabecalho">
          <div class="questoes-nav-linha">
            <a href="#/" class="btn-voltar" aria-label="Voltar ao início">
              ${icone('arrow-left', 18)} Voltar ao início
            </a>
            <span class="questoes-contador">
              Questão <strong>${numero}</strong> de <strong>${total}</strong>
              <span class="questoes-contador__respondidas">· ${respondidas} respondida${respondidas === 1 ? '' : 's'}</span>
            </span>
          </div>

          <!-- Meta: disciplina / subtópico / prova -->
          <div class="questoes-meta" aria-label="Sobre esta questão">
            <span class="questoes-meta__disciplina">${questao.disciplina}</span>
            <span class="questoes-meta__separador" aria-hidden="true">•</span>
            <span>${questao.subtopico}</span>
            <span class="questoes-meta__separador" aria-hidden="true">•</span>
            <span>${questao.prova}</span>
          </div>

          <!-- Barra de progresso (questões respondidas) -->
          <div
            class="barra-progresso-container"
            role="progressbar"
            aria-valuenow="${pct}"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Progresso: ${respondidas} de ${total} questões respondidas"
          >
            <div class="barra-progresso-preenchimento" style="width: ${pct}%"></div>
          </div>

          <!-- Navegador: todas as questões numeradas -->
          <details class="navegador-questoes" id="navegador-questoes" ${estado.navegadorAberto ? 'open' : ''}>
            <summary>Ir para a questão</summary>
            <ol class="navegador-questoes__lista">
              ${questoes.map((q, i) => htmlBotaoNavegador(q, i)).join('')}
            </ol>
          </details>
        </header>

        <!-- Card da questão -->
        <article class="questao-card" id="questao-card">

          <!-- Imagem(ns) — sempre acima do texto -->
          ${htmlImagens(questao)}

          <!-- Texto de apoio compartilhado por várias questões (se houver) -->
          ${questao.textoApoio ? `
            <div class="questao-texto-apoio">${questao.textoApoio}</div>
          ` : ''}

          <!-- Enunciado -->
          <div class="questao-enunciado" id="enunciado">
            ${questao.enunciado}
          </div>

          <!-- Alternativas -->
          <ul class="alternativas-lista" id="alternativas-lista" role="list">
            ${questao.alternativas.map(alt => htmlAlternativa(alt)).join('\n')}
          </ul>

          <!-- Área de feedback -->
          <div class="feedback-area" id="feedback-area" role="alert" aria-live="polite"></div>

          <!-- Ações -->
          <div class="questao-acoes">
            <button
              class="btn btn-secundario"
              id="btn-recomecar"
              type="button"
              aria-label="Recomeçar este módulo do início"
            >
              ${icone('refresh-cw', 16)} Recomeçar
            </button>
            <div class="questao-acoes__direita">
              <button
                class="btn btn-secundario"
                id="btn-anterior"
                type="button"
                ${indiceAtual === 0 ? 'disabled' : ''}
                aria-label="Questão anterior"
              >
                ${icone('arrow-left', 16)} Voltar
              </button>
              <button
                class="btn btn-primario"
                id="btn-avancar"
                type="button"
              ></button>
            </div>
          </div>

        </article>
      </div>
    </div>
  `;

  // Adiciona estilo para ícone rotacionado (seta direita)
  const styleId = 'style-icone-rot';
  if (!document.getElementById(styleId)) {
    const st = document.createElement('style');
    st.id = styleId;
    st.textContent = '.icone-rotacionado { transform: rotate(180deg); }';
    document.head.appendChild(st);
  }

  // Questão já respondida: mostra direto o resultado e as explicações
  const resposta = respostasSession[questao.id];
  if (resposta) aplicarFeedback(container, questao, resposta.alternativaSelecionada);

  atualizarBotaoAvancar(container);
  vincularEventosQuestao(container, modulo);
}

/**
 * Gera o botão de uma questão no navegador numerado.
 */
function htmlBotaoNavegador(questao, indice) {
  const r = estado.respostasSession[questao.id];
  const situacao = r ? (r.acertou ? 'certa' : 'errada') : 'pendente';
  const rotulo = { certa: 'acertada', errada: 'errada', pendente: 'não respondida' }[situacao];
  const atual = indice === estado.indiceAtual;
  return `
    <li>
      <button
        type="button"
        class="navegador-questoes__btn navegador-questoes__btn--${situacao}${atual ? ' navegador-questoes__btn--atual' : ''}"
        data-indice="${indice}"
        ${atual ? 'aria-current="true"' : ''}
        aria-label="Questão ${indice + 1} (${rotulo})"
        title="${questao.prova} — Q.${questao.numeroOriginal}"
      >${indice + 1}</button>
    </li>
  `;
}

/**
 * Ajusta o rótulo do botão "Avançar" ao momento atual:
 * conferir (1º tempo) ou seguir para a próxima (2º tempo).
 */
function atualizarBotaoAvancar(container) {
  const btn    = container.querySelector('#btn-avancar');
  const ultima = estado.indiceAtual === estado.questoes.length - 1;
  const seta   = icone('arrow-left', 16, 'icone-rotacionado');

  if (!questaoAtualConferida() && estado.selecionada) {
    btn.innerHTML = `Avançar ${seta}`;
    btn.setAttribute('aria-label', 'Conferir a resposta e ver as explicações');
    btn.title = 'Confere a resposta marcada e mostra as explicações';
  } else if (ultima) {
    btn.innerHTML = `Ver resultado ${seta}`;
    btn.setAttribute('aria-label', 'Ver resultado final');
    btn.title = '';
  } else {
    btn.innerHTML = `Avançar ${seta}`;
    btn.setAttribute('aria-label', questaoAtualConferida() ? 'Próxima questão' : 'Pular para a próxima questão');
    btn.title = questaoAtualConferida() ? '' : 'Nenhuma alternativa marcada: pula para a próxima questão';
  }
}

/* ================================================================
   Eventos
   ================================================================ */

function vincularEventosQuestao(container, modulo) {
  const lista        = container.querySelector('#alternativas-lista');
  const btnAvancar   = container.querySelector('#btn-avancar');
  const btnAnterior  = container.querySelector('#btn-anterior');
  const btnRecomecar = container.querySelector('#btn-recomecar');
  const navegador    = container.querySelector('#navegador-questoes');

  // Clique numa imagem: abre ampliada na própria página
  vincularImagens(container);

  // Clique nas alternativas
  lista.addEventListener('click', (e) => {
    const btn = e.target.closest('.alternativa-btn');
    if (!btn || questaoAtualConferida()) return;
    selecionarAlternativa(lista, btn.dataset.letra);
    atualizarBotaoAvancar(container);
  });

  // Avançar em dois tempos: 1º confere, 2º segue para a próxima
  btnAvancar.addEventListener('click', () => {
    if (!questaoAtualConferida() && estado.selecionada) {
      conferirResposta(container);
      atualizarBotaoAvancar(container);
      return;
    }
    irParaQuestao(container, modulo, estado.indiceAtual + 1);
  });

  // Voltar para a questão anterior
  btnAnterior.addEventListener('click', () => {
    irParaQuestao(container, modulo, estado.indiceAtual - 1);
  });

  // Navegador numerado
  navegador.addEventListener('toggle', () => {
    estado.navegadorAberto = navegador.open;
  });
  navegador.addEventListener('click', (e) => {
    const btn = e.target.closest('.navegador-questoes__btn');
    if (!btn) return;
    irParaQuestao(container, modulo, Number(btn.dataset.indice));
  });

  // Recomeçar
  btnRecomecar.addEventListener('click', async () => {
    if (!(await confirmar({
      titulo: 'Recomeçar este módulo?',
      mensagem: 'As questões voltam a ficar sem resposta para você refazer. Sua memória de erros e acertos é mantida.',
      textoConfirmar: 'Recomeçar',
    }))) return;
    recomecarModulo(estado.questoes);
    estado.respostasSession = {};
    irParaQuestao(container, modulo, 0);
  });
}

/**
 * Marca visualmente a alternativa selecionada.
 */
function selecionarAlternativa(lista, letra) {
  estado.selecionada = letra;

  lista.querySelectorAll('.alternativa-btn').forEach(btn => {
    const eSelecionada = btn.dataset.letra === letra;
    btn.classList.toggle('alternativa-btn--selecionada', eSelecionada);
    btn.setAttribute('aria-pressed', String(eSelecionada));
  });
}

/**
 * Confere a resposta marcada, salva no storage e mostra o feedback.
 */
function conferirResposta(container) {
  const questao = estado.questoes[estado.indiceAtual];
  const acertou = estado.selecionada === questao.gabarito;
  const resposta = { acertou, alternativaSelecionada: estado.selecionada };

  // Salva no localStorage e no estado da sessão
  salvarResposta(questao.id, resposta);
  registrarNaMemoria({ questaoId: questao.id, letra: resposta.alternativaSelecionada, acertou, origem: 'estudo' });
  estado.respostasSession[questao.id] = resposta;
  estado.selecionada = null;

  aplicarFeedback(container, questao, resposta.alternativaSelecionada);
  atualizarBotaoNavegador(container, estado.indiceAtual);

  // Rola suavemente para o feedback
  container.querySelector('#feedback-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Atualiza a cor de um botão do navegador numerado após conferir.
 */
function atualizarBotaoNavegador(container, indice) {
  const antigo = container.querySelector(`.navegador-questoes__btn[data-indice="${indice}"]`);
  if (!antigo) return;
  const temp = document.createElement('ol');
  temp.innerHTML = htmlBotaoNavegador(estado.questoes[indice], indice);
  antigo.replaceWith(temp.querySelector('button'));
}

/* ================================================================
   Tela de resultado
   ================================================================ */

/**
 * Renderiza a tela de resultado ao final das questões.
 */
function renderizarResultado(container, modulo) {
  const { questoes, respostasSession } = estado;
  const total      = questoes.length;
  const acertos    = questoes.filter(q => respostasSession[q.id]?.acertou).length;
  const pct        = Math.round((acertos / total) * 100);
  const erradas    = questoes.filter(q => respostasSession[q.id] && !respostasSession[q.id].acertou);
  const pendentes  = questoes.filter(q => !respostasSession[q.id]).length;
  const erradasIds = erradas.map(q => q.id);
  const temErradas = erradas.length > 0;

  container.innerHTML = `
    <div class="tela-questoes">
      <div class="container">

        <!-- Cabeçalho simplificado -->
        <header class="questoes-cabecalho">
          <div class="questoes-nav-linha">
            <a href="#/" class="btn-voltar">
              ${icone('arrow-left', 18)} Voltar ao início
            </a>
          </div>
        </header>

        <div class="resultado-tela">

          <!-- Resumo de pontuação -->
          <div class="resultado-resumo">
            ${icone('trophy', 48)}
            <p class="resultado-pontuacao">
              ${acertos}<span>/${total}</span>
            </p>
            <p class="resultado-descricao">
              ${acertos === total
                ? '🎉 Parabéns! Você acertou todas!'
                : acertos === 0
                  ? 'Não desanime — tente de novo!'
                  : 'Continue praticando!'}
            </p>
            <p class="resultado-percentual">${pct}% de aproveitamento</p>
            ${pendentes > 0 ? `
              <p class="resultado-percentual">${pendentes} questão${pendentes === 1 ? '' : 'ões'} sem resposta</p>
            ` : ''}
          </div>

          <!-- Lista das erradas (clique para revisar) -->
          ${temErradas ? `
            <div>
              <h3 class="resultado-erradas-titulo">
                ${icone('x', 16)} Questões que você errou (${erradas.length})
              </h3>
              <ul class="resultado-erradas-lista">
                ${erradas.map(q => `
                  <li class="resultado-errada-item">
                    <button type="button" class="resultado-errada-link" data-indice="${questoes.indexOf(q)}">
                      <strong>${q.prova} — Q.${q.numeroOriginal}</strong><br>
                      ${q.subtopico}
                    </button>
                  </li>
                `).join('')}
              </ul>
            </div>
          ` : ''}

          <!-- Ações -->
          <div class="resultado-acoes">
            <a href="#/" class="btn btn-secundario">
              ${icone('arrow-left', 16)} Início
            </a>
            <button class="btn btn-secundario" id="btn-revisar" type="button">
              ${icone('arrow-left', 16)} Voltar às questões
            </button>
            <button class="btn btn-secundario" id="btn-refazer-tudo" type="button">
              ${icone('refresh-cw', 16)} Refazer tudo
            </button>
            ${temErradas ? `
              <button class="btn btn-primario" id="btn-refazer-erradas" type="button">
                ${icone('redo', 16)} Refazer só as que errei (${erradas.length})
              </button>
            ` : ''}
          </div>

        </div>
      </div>
    </div>
  `;

  // Voltar às questões (última questão)
  container.querySelector('#btn-revisar').addEventListener('click', () => {
    irParaQuestao(container, modulo, total - 1);
  });

  // Revisar uma questão errada específica
  container.querySelectorAll('.resultado-errada-link').forEach(btn => {
    btn.addEventListener('click', () => irParaQuestao(container, modulo, Number(btn.dataset.indice)));
  });

  // Refazer tudo (apaga progresso e reinicia do zero)
  container.querySelector('#btn-refazer-tudo').addEventListener('click', () => {
    recomecarModulo(questoes);
    iniciarSessaoQuestoes(container, questoes, modulo);
  });

  // Refazer só as erradas
  if (temErradas) {
    container.querySelector('#btn-refazer-erradas').addEventListener('click', () => {
      apagarRespostas(erradasIds);
      iniciarSessaoQuestoes(container, questoes, modulo, erradasIds);
    });
  }
}
