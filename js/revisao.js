/**
 * revisao.js — Correção de erros (#/revisao): refazer as questões que o aluno errou.
 *
 * As questões vêm da memória de erros e acertos (simulados finalizados, questões de
 * estudo e esta própria tela): entra toda questão cuja última resposta foi errada e que
 * já chegou ao dia de voltar (ver errosPendentes em guia-plano.js). Acertou: sai da lista.
 * Errou de novo: volta mais tarde (1, 2, 4 e depois 7 dias), e o aluno segue em frente —
 * nada trava o cronograma. Pular deixa a questão para a próxima vez.
 * O bloco "Correção de erros" do Guia de Estudos traz para cá.
 */

import { icone } from './icones.js';
import { htmlImagens, htmlAlternativa, vincularImagens, aplicarFeedback } from './render-questao.js';
import { lerMemoria, lerSimulado, registrarNaMemoria, registrarMotivoNaMemoria } from './armazenamento.js';
import { errosPendentes } from './guia-plano.js';
import { htmlDiagnostico, vincularDiagnostico } from './diagnostico.js';

const plural = (n, um, varios) => `${n} ${n === 1 ? um : varios}`;

/**
 * @param {HTMLElement} container
 * @param {Object[]} questoesProvas
 * @param {Object[]} questoesEstudo
 */
export function renderizarRevisao(container, questoesProvas, questoesEstudo) {
  const mapa = new Map([...questoesProvas, ...questoesEstudo].map(q => [q.id, q]));
  const pendentes = errosPendentes(lerMemoria(), { ignorarSimulado: lerSimulado().atual?.id })
    .filter(p => mapa.has(p.q));
  const fila = pendentes.filter(p => p.devida).map(p => mapa.get(p.q));
  const depois = pendentes.length - fila.length;
  const placar = { acertos: 0, erros: 0, pulos: 0 };
  mostrar(0);

  function mostrar(i) {
    if (i >= fila.length) return renderizarFim(container, fila.length, placar, depois);
    const questao = fila[i];
    container.innerHTML = `
      <div class="tela-questoes">
        <div class="container">
          <header class="questoes-cabecalho">
            <div class="questoes-nav-linha">
              <a href="#/guia" class="btn-voltar">${icone('arrow-left', 18)} Voltar ao guia</a>
              <span class="questoes-contador">Correção de erros • Questão <strong>${i + 1}</strong> de <strong>${fila.length}</strong></span>
            </div>
            <div class="questoes-meta">
              <span class="questoes-meta__disciplina">${questao.disciplina}</span>
              <span class="questoes-meta__separador" aria-hidden="true">•</span>
              <span>${questao.subtopico || ''}</span>
              ${questao.prova ? `<span class="questoes-meta__separador" aria-hidden="true">•</span>
              <span>${questao.prova} — questão ${questao.numeroOriginal}</span>` : ''}
            </div>
          </header>
          <article class="questao-card">
            ${htmlImagens(questao)}
            ${questao.textoApoio ? `<div class="questao-texto-apoio">${questao.textoApoio}</div>` : ''}
            <div class="questao-enunciado">${questao.enunciado}</div>
            <ul class="alternativas-lista" id="alternativas-lista" role="list">
              ${questao.alternativas.map(htmlAlternativa).join('')}
            </ul>
            <div class="feedback-area" id="feedback-area" role="status"></div>
            <div id="revisao-diagnostico"></div>
            <div class="questao-acoes">
              <button type="button" class="btn btn-secundario" id="btn-pular">Pular por agora</button>
              <div class="questao-acoes__direita">
                <button type="button" class="btn btn-primario" id="btn-proxima" hidden>
                  ${i < fila.length - 1 ? 'Próxima' : 'Ver resumo'} ${icone('arrow-left', 16, 'icone-rotacionado')}
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>`;
    vincularImagens(container);

    const proxima = container.querySelector('#btn-proxima');
    const pular = container.querySelector('#btn-pular');
    container.querySelector('#alternativas-lista').addEventListener('click', (e) => {
      const btn = e.target.closest('.alternativa-btn');
      if (!btn || btn.disabled) return;
      const letra = btn.dataset.letra;
      const acertou = letra === questao.gabarito;
      registrarNaMemoria({ questaoId: questao.id, letra, acertou, origem: 'revisao' });
      placar[acertou ? 'acertos' : 'erros']++;
      aplicarFeedback(container, questao, letra);
      if (!acertou) desenharDiagnostico();
      pular.hidden = true;
      proxima.hidden = false;
      proxima.focus();
    });

    function desenharDiagnostico(motivo) {
      const area = container.querySelector('#revisao-diagnostico');
      area.innerHTML = htmlDiagnostico(motivo, questao);
      vincularDiagnostico(area, (m) => { registrarMotivoNaMemoria(questao.id, m); desenharDiagnostico(m); });
    }

    pular.addEventListener('click', () => { placar.pulos++; mostrar(i + 1); });
    proxima.addEventListener('click', () => {
      mostrar(i + 1);
      container.querySelector('.questoes-cabecalho')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

function renderizarFim(container, total, placar, depois) {
  const respondidas = placar.acertos + placar.erros;
  container.innerHTML = `
    <div class="tela-questoes">
      <div class="container">
        <header class="questoes-cabecalho">
          <div class="questoes-nav-linha">
            <a href="#/guia" class="btn-voltar">${icone('arrow-left', 18)} Voltar ao guia</a>
          </div>
          <h2 class="simulados-titulo">Correção de erros</h2>
        </header>
        <section class="simulado-card">
          <div class="simulado-card__corpo">
            ${total ? `
              <h3 class="simulado-card__titulo">Pronto por hoje!</h3>
              <p class="simulado-card__info">${respondidas
                ? `Você refez ${plural(respondidas, 'questão', 'questões')} e acertou <strong>${placar.acertos}</strong>.`
                : 'Você não refez nenhuma questão agora.'}
                ${placar.erros ? `${placar.erros === 1 ? 'A questão que você errou de novo volta' : `As ${placar.erros} questões que você errou de novo voltam`}
                  daqui a alguns dias — siga o cronograma normalmente.` : ''}
                ${placar.pulos ? `${plural(placar.pulos, 'questão pulada continua', 'questões puladas continuam')} na lista.` : ''}</p>`
            : `
              <h3 class="simulado-card__titulo">Nenhuma questão para refazer agora</h3>
              <p class="simulado-card__info">Quando você errar uma questão (num simulado ou nos módulos), ela aparece aqui
                no dia seguinte para você refazer.</p>`}
            ${depois ? `<p class="simulado-card__info">${plural(depois, 'outra questão errada volta', 'outras questões erradas voltam')} nos próximos dias.</p>` : ''}
          </div>
          <div class="simulado-card__acoes">
            <a href="#/guia" class="btn btn-primario">Voltar ao guia</a>
          </div>
        </section>
      </div>
    </div>`;
}
