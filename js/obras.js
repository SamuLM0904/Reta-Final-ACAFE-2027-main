/**
 * obras.js — Aviso de obras literárias e "livro das obras".
 *
 * Antes de começar um simulado (aleatório ou prova completa) que tenha questões de
 * Literatura sobre obras obrigatórias, o aluno vê quais obras são cobradas e diz se
 * as conhece. Se não conhece, abre o livro: um sumário com uma obra por capítulo;
 * clicar num capítulo mostra a obra, com "Voltar ao sumário" e "Próximo capítulo".
 * O cronômetro do simulado só começa depois que o aluno fecha o aviso ou o livro.
 * As obras ficam em dados/obras.js (window.OBRAS); não há download: tudo na tela.
 */

import { icone } from './icones.js';
import { escaparHtml } from './utils.js';

/** Obras cobradas por uma lista de questões, na ordem do cadastro (sem repetir). */
export function obrasDasQuestoes(questoes) {
  const ids = new Set(questoes.map(q => q.obra).filter(Boolean));
  return (window.OBRAS || []).filter(o => ids.has(o.id));
}

/**
 * Mostra o aviso das obras e, se o aluno não as conhece, o livro.
 * @param {Object[]} obras - de obrasDasQuestoes
 * @returns {Promise<void>} resolve quando o aluno pode começar o simulado
 */
export function avisarObras(obras) {
  return new Promise(resolver => {
    const dialogo = document.createElement('dialog');
    dialogo.className = 'confirmacao obras';
    dialogo.setAttribute('aria-labelledby', 'obras-titulo');
    document.body.appendChild(dialogo);
    dialogo.addEventListener('close', () => { dialogo.remove(); resolver(); });
    dialogo.addEventListener('cancel', (e) => e.preventDefault());   // Esc não pula o aviso

    const lista = obras.map(o => `<li><strong>${escaparHtml(o.titulo)}</strong>, de ${escaparHtml(o.autor)}</li>`).join('');

    function aviso() {
      dialogo.innerHTML = `
        <div class="confirmacao__caixa obras__caixa">
          <div class="confirmacao__icone" aria-hidden="true">${icone('book-open', 24)}</div>
          <h2 class="confirmacao__titulo" id="obras-titulo">Obras literárias cobradas neste simulado</h2>
          <ul class="obras__lista">${lista}</ul>
          <p class="confirmacao__mensagem">Você conhece ${obras.length > 1 ? 'essas obras' : 'essa obra'}?
            O cronômetro só começa depois que você responder.</p>
          <div class="confirmacao__acoes">
            <button type="button" class="btn btn-secundario" data-acao="livro">Não conheço: ver as obras</button>
            <button type="button" class="btn btn-primario" data-acao="comecar">Conheço: começar</button>
          </div>
        </div>`;
      dialogo.querySelector('[data-acao="comecar"]').focus();
    }

    function sumario() {
      dialogo.innerHTML = `
        <div class="confirmacao__caixa obras__caixa obras__livro">
          <p class="obras__sobretitulo">Livro das obras</p>
          <h2 class="confirmacao__titulo" id="obras-titulo">Sumário</h2>
          <ol class="obras__sumario">
            ${obras.map((o, i) => `
              <li><button type="button" class="obras__capitulo-link" data-capitulo="${i}">
                <span class="obras__numero">Capítulo ${i + 1}</span>
                <span><strong>${escaparHtml(o.titulo)}</strong> — ${escaparHtml(o.autor)}</span>
              </button></li>`).join('')}
          </ol>
          <div class="confirmacao__acoes">
            <button type="button" class="btn btn-primario" data-acao="comecar">Li, começar o simulado</button>
          </div>
        </div>`;
      dialogo.querySelector('[data-capitulo]')?.focus();
    }

    function capitulo(i) {
      const o = obras[i];
      dialogo.innerHTML = `
        <div class="confirmacao__caixa obras__caixa obras__livro">
          <p class="obras__sobretitulo">Capítulo ${i + 1} de ${obras.length}</p>
          <h2 class="confirmacao__titulo" id="obras-titulo">${escaparHtml(o.titulo)}</h2>
          <p class="obras__ficha">${escaparHtml(o.autor)} • ${escaparHtml(o.genero)}</p>
          <div class="obras__texto">${o.capitulo
            || '<p class="obras__em-preparacao">O resumo desta obra está em preparação e vai aparecer aqui em breve.</p>'}</div>
          <div class="confirmacao__acoes obras__navegacao">
            <button type="button" class="btn btn-secundario" data-acao="sumario">${icone('arrow-left', 16)} Sumário</button>
            ${i < obras.length - 1
              ? `<button type="button" class="btn btn-primario" data-capitulo="${i + 1}">Próximo capítulo ${icone('arrow-left', 16, 'icone-rotacionado')}</button>`
              : '<button type="button" class="btn btn-primario" data-acao="comecar">Li, começar o simulado</button>'}
          </div>
        </div>`;
      dialogo.querySelector('.obras__texto').scrollTop = 0;
    }

    dialogo.addEventListener('click', (e) => {
      const alvo = e.target.closest('[data-acao], [data-capitulo]');
      if (!alvo) return;
      if (alvo.dataset.capitulo !== undefined) return capitulo(Number(alvo.dataset.capitulo));
      if (alvo.dataset.acao === 'livro' || alvo.dataset.acao === 'sumario') return sumario();
      if (alvo.dataset.acao === 'comecar') dialogo.close();
    });

    aviso();
    dialogo.showModal();
  });
}
