/**
 * confirmar.js — Janela de confirmação na própria página (substitui o
 * window.confirm do navegador), no visual do site.
 *
 * Uso:
 *   if (!(await confirmar({ titulo: 'Finalizar simulado?', mensagem: '...', textoConfirmar: 'Finalizar' }))) return;
 *
 * Fecha com os botões, com Esc (= cancelar) ou clicando fora da janela (= cancelar).
 */

import { icone } from './icones.js';

/**
 * @param {Object}  opcoes
 * @param {string}  opcoes.titulo
 * @param {string}  [opcoes.mensagem]       - pode conter HTML simples (<strong>, <br>)
 * @param {string}  [opcoes.textoConfirmar] - rótulo do botão principal
 * @param {string}  [opcoes.textoCancelar]
 * @param {boolean} [opcoes.perigo]         - ação destrutiva: botão principal em vermelho
 * @returns {Promise<boolean>} true se confirmou
 */
export function confirmar({ titulo, mensagem = '', textoConfirmar = 'Confirmar', textoCancelar = 'Cancelar', perigo = false }) {
  return new Promise(resolver => {
    const dialogo = document.createElement('dialog');
    dialogo.className = 'confirmacao';
    dialogo.setAttribute('aria-labelledby', 'confirmacao-titulo');
    dialogo.innerHTML = `
      <div class="confirmacao__caixa">
        <div class="confirmacao__icone${perigo ? ' confirmacao__icone--perigo' : ''}" aria-hidden="true">
          ${icone('alert-circle', 24)}
        </div>
        <h2 class="confirmacao__titulo" id="confirmacao-titulo">${titulo}</h2>
        ${mensagem ? `<p class="confirmacao__mensagem">${mensagem}</p>` : ''}
        <div class="confirmacao__acoes">
          <button type="button" class="btn btn-secundario" data-resposta="nao">${textoCancelar}</button>
          <button type="button" class="btn btn-primario${perigo ? ' btn-perigo' : ''}" data-resposta="sim">${textoConfirmar}</button>
        </div>
      </div>
    `;
    document.body.appendChild(dialogo);

    let resposta = false;
    dialogo.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-resposta]');
      if (btn) { resposta = btn.dataset.resposta === 'sim'; dialogo.close(); }
      else if (e.target === dialogo) dialogo.close();          // clique fora da caixa
    });
    dialogo.addEventListener('close', () => { dialogo.remove(); resolver(resposta); });

    dialogo.showModal();
    // Foco no botão seguro (cancelar) quando a ação é destrutiva; senão, no principal
    dialogo.querySelector(`[data-resposta="${perigo ? 'nao' : 'sim'}"]`).focus();
  });
}
