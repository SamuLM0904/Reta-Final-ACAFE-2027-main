/**
 * render-questao.js — Peças de exibição de uma questão, compartilhadas
 * pelo módulo de estudo (questoes.js) e pelo simulado (simulado.js):
 * imagens com legendas, alternativas, visualizador de imagem e feedback.
 */

import { icone } from './icones.js';

/**
 * Gera o HTML das imagens da questão, reproduzindo a disposição da prova.
 *   imagem       : caminho ou lista de caminhos
 *   legendaAcima : (opcional) texto acima de cada imagem — ex.: "FIGURA 1", "Tipo I: ..."
 *   legenda      : (opcional) texto abaixo de cada imagem — ex.: "FIGURA 3", fonte
 *   legendaGeral : (opcional) texto abaixo do conjunto — ex.: "Fonte: ... FIGURA 7"
 * As legendas são texto (nunca print) e seguem a mesma posição da prova.
 * Clicar na imagem abre ela ampliada.
 */
export function htmlImagens(questao) {
  if (!questao.imagem) return '';
  const lista   = [].concat(questao.imagem);
  const acima   = [].concat(questao.legendaAcima || []);
  const abaixo  = [].concat(questao.legenda || []);
  const semTags = s => s.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;');
  const geral   = questao.legendaGeral
    ? `<p class="questao-imagem__legenda questao-imagens__legenda-geral">${questao.legendaGeral}</p>`
    : '';
  return `<div class="questao-imagens">${lista.map((src, i) => {
    const alt = [acima[i], abaixo[i]].filter(Boolean).map(semTags).join(' — ')
      || `Imagem ${lista.length > 1 ? i + 1 + ' ' : ''}da questão ${questao.numeroOriginal}`;
    return `
    <figure class="questao-imagem">
      ${acima[i] ? `<p class="questao-imagem__legenda questao-imagem__legenda--acima">${acima[i]}</p>` : ''}
      <a href="${src}" target="_blank" rel="noopener" title="Ampliar imagem">
        <img src="${src}" alt="${alt}" loading="lazy">
      </a>
      ${abaixo[i] ? `<figcaption class="questao-imagem__legenda">${abaixo[i]}</figcaption>` : ''}
    </figure>
  `;
  }).join('')}${geral}</div>`;
}

/**
 * Abre a imagem ampliada num visualizador sobre a página.
 * A imagem é escalada (para mais ou para menos) até caber em 80% da tela,
 * mantendo a proporção. Fecha com o botão ×, a tecla Esc ou clicando fora.
 */
function abrirImagemAmpliada(src, alt) {
  const dialogo = document.createElement('dialog');
  dialogo.className = 'visualizador-imagem';
  dialogo.setAttribute('aria-label', alt);
  dialogo.innerHTML = `
    <button type="button" class="visualizador-imagem__fechar" aria-label="Fechar imagem">
      ${icone('x', 22)}
    </button>
    <img class="visualizador-imagem__img" src="${src}" alt="${alt}">
  `;
  document.body.appendChild(dialogo);

  const img = dialogo.querySelector('img');
  function ajustarTamanho() {
    if (!img.naturalWidth) return;
    const escala = Math.min(
      (window.innerWidth  * 0.8) / img.naturalWidth,
      (window.innerHeight * 0.8) / img.naturalHeight
    );
    img.style.width  = `${Math.round(img.naturalWidth  * escala)}px`;
    img.style.height = `${Math.round(img.naturalHeight * escala)}px`;
  }
  if (img.complete) ajustarTamanho(); else img.addEventListener('load', ajustarTamanho);
  window.addEventListener('resize', ajustarTamanho);

  const fechar = () => dialogo.close();
  dialogo.querySelector('.visualizador-imagem__fechar').addEventListener('click', fechar);
  // Clique fora da imagem (no fundo escurecido) fecha
  dialogo.addEventListener('click', (e) => { if (e.target === dialogo) fechar(); });
  dialogo.addEventListener('close', () => {
    window.removeEventListener('resize', ajustarTamanho);
    dialogo.remove();
  });

  dialogo.showModal();
}

/**
 * Gera o HTML de uma alternativa.
 */
export function htmlAlternativa(alt) {
  return `
    <li role="listitem">
      <button
        class="alternativa-btn"
        data-letra="${alt.letra}"
        type="button"
        aria-pressed="false"
      >
        <span class="alternativa-letra" aria-hidden="true">${alt.letra}</span>
        <span class="alternativa-conteudo">
          <span class="alternativa-texto">${alt.texto}</span>
          <span class="alternativa-explicacao">
            ${alt.explicacao}
          </span>
        </span>
        <span class="alternativa-icone-resultado" aria-hidden="true"></span>
      </button>
    </li>
  `;
}

/**
 * Faz as imagens da questão abrirem ampliadas na própria página.
 * @param {HTMLElement} container
 */
export function vincularImagens(container) {
  container.querySelectorAll('.questao-imagem a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const img = link.querySelector('img');
      abrirImagemAmpliada(img.src, img.alt);
    });
  });
}

/**
 * Aplica os estilos de certo/errado, mostra as explicações e a mensagem de feedback.
 */
export function aplicarFeedback(container, questao, selecionada) {
  const acertou = selecionada === questao.gabarito;

  const lista = container.querySelector('#alternativas-lista');
  lista.querySelectorAll('.alternativa-btn').forEach(btn => {
    const letra = btn.dataset.letra;
    btn.disabled = true;
    btn.classList.remove('alternativa-btn--selecionada');

    const iconeEl = btn.querySelector('.alternativa-icone-resultado');

    if (letra === questao.gabarito) {
      btn.classList.add('alternativa-btn--certa');
      btn.classList.add('com-resultado');
      if (iconeEl) {
        iconeEl.innerHTML = icone('check', 18);
        iconeEl.style.color = 'var(--cor-certa)';
      }
    } else if (letra === selecionada) {
      btn.classList.add('alternativa-btn--errada');
      btn.classList.add('com-resultado');
      if (iconeEl) {
        iconeEl.innerHTML = icone('x', 18);
        iconeEl.style.color = 'var(--cor-errada)';
      }
    } else {
      btn.classList.add('alternativa-btn--neutra');
    }

    // Exibe explicações
    const explicacao = btn.querySelector('.alternativa-explicacao');
    if (explicacao) explicacao.style.display = 'block';
  });

  // Mensagem de feedback
  const feedbackEl = container.querySelector('#feedback-area');
  if (acertou) {
    feedbackEl.className = 'feedback-area feedback-area--acerto';
    feedbackEl.innerHTML = `${icone('check', 18)} <span>Você acertou! Muito bem.</span>`;
  } else if (!selecionada) {
    feedbackEl.className = 'feedback-area feedback-area--erro';
    feedbackEl.innerHTML = `
      ${icone('x', 18)}
      <span>Questão em branco. A alternativa correta é <strong>${questao.gabarito}</strong>.</span>
    `;
  } else {
    feedbackEl.className = 'feedback-area feedback-area--erro';
    feedbackEl.innerHTML = `
      ${icone('x', 18)}
      <span>Você marcou <strong>${selecionada}</strong>. A alternativa correta é <strong>${questao.gabarito}</strong>.</span>
    `;
  }
}
