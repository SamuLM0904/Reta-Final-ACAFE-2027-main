/**
 * efeitos.js — Efeitos visuais que podem ser usados em qualquer parte do site.
 *
 * INCLINAÇÃO 3D ("tilt"): o elemento gira de leve na direção do mouse (mouse em cima à
 * esquerda → inclina para cima à esquerda; embaixo à direita → para baixo à direita) e
 * volta ao lugar quando o mouse sai. Só no computador (no celular não há mouse) e nunca
 * para quem pediu ao aparelho para reduzir movimento.
 *
 * COMO USAR: coloque o atributo  data-inclinar  no elemento. Opcionalmente, o ângulo
 * máximo em graus: data-inclinar="12" (padrão: 8). Ex.:
 *     <article class="janela-plano" data-inclinar>...</article>
 * Elementos novos que entram na página com o atributo já ganham o efeito sozinhos.
 * O elemento pode ter a própria escala em CSS com --escala (ex.: o plano em destaque).
 */

const podeInclinar = () =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches
  && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Liga a inclinação 3D num elemento (normalmente basta o atributo data-inclinar). */
export function inclinarAoPassarMouse(el) {
  if (el.dataset.inclinacaoLigada) return;
  el.dataset.inclinacaoLigada = '1';
  const maximo = Number(el.dataset.inclinar) || 8;
  el.classList.add('inclinavel');
  el.addEventListener('pointermove', e => {
    if (!podeInclinar()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;    // -0,5 (esquerda) a 0,5 (direita)
    const y = (e.clientY - r.top) / r.height - 0.5;    // -0,5 (em cima) a 0,5 (embaixo)
    el.style.setProperty('--inclinar-y', `${(x * 2 * maximo).toFixed(2)}deg`);
    el.style.setProperty('--inclinar-x', `${(-y * 2 * maximo).toFixed(2)}deg`);
    el.style.setProperty('--luz-x', `${((x + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty('--luz-y', `${((y + 0.5) * 100).toFixed(1)}%`);
    el.classList.add('inclinavel--ativo');
  });
  el.addEventListener('pointerleave', () => {
    el.style.setProperty('--inclinar-x', '0deg');
    el.style.setProperty('--inclinar-y', '0deg');
    el.classList.remove('inclinavel--ativo');
  });
}

/** Liga a inclinação em todos os [data-inclinar] de `raiz` (e nos que aparecerem depois). */
export function ativarInclinacao(raiz = document) {
  raiz.querySelectorAll('[data-inclinar]').forEach(inclinarAoPassarMouse);
}

if (typeof document !== 'undefined' && typeof MutationObserver !== 'undefined') {
  const iniciar = () => {
    ativarInclinacao();
    new MutationObserver(mudancas => mudancas.forEach(m => m.addedNodes.forEach(n => {
      if (n.nodeType !== 1) return;
      if (n.matches?.('[data-inclinar]')) inclinarAoPassarMouse(n);
      n.querySelectorAll?.('[data-inclinar]').forEach(inclinarAoPassarMouse);
    }))).observe(document.body, { childList: true, subtree: true });
  };
  if (document.body) iniciar(); else document.addEventListener('DOMContentLoaded', iniciar);
}
