/**
 * contagem.js — Box de contagem regressiva para a prova da ACAFE.
 *
 * Para mudar a data (ex.: novo edital), edite PROVA abaixo.
 * A contagem vai até o início do dia da prova (00:00, horário local).
 */

import { icone } from './icones.js';

export const PROVA = {
  nome: 'Vestibular de Medicina ACAFE Verão 2027',
  data: new Date(2026, 10, 22),   // 22/11/2026 — mês começa em 0 (10 = novembro)
  dataExtenso: '22 de novembro de 2026',
};

/** Divide um intervalo em milissegundos em dias, horas, minutos e segundos. */
function decompor(ms) {
  const s = Math.floor(ms / 1000);
  return {
    dias:     Math.floor(s / 86400),
    horas:    Math.floor((s % 86400) / 3600),
    minutos:  Math.floor((s % 3600) / 60),
    segundos: s % 60,
  };
}

const doisDigitos = n => String(n).padStart(2, '0');

/**
 * Gera o HTML do box (os números são preenchidos por iniciarContagem).
 * @returns {string}
 */
export function htmlContagem() {
  return `
    <section class="contagem" id="contagem" aria-label="Contagem regressiva para a prova">
      <div class="contagem__cabecalho">
        <span class="contagem__icone" aria-hidden="true">${icone('clock', 20)}</span>
        <div>
          <p class="contagem__titulo">${PROVA.nome}</p>
          <p class="contagem__data">Prova em ${PROVA.dataExtenso}</p>
        </div>
      </div>
      <div class="contagem__numeros" id="contagem-numeros"></div>
    </section>
  `;
}

/**
 * Atualiza a contagem a cada segundo. O intervalo se encerra sozinho
 * quando o box sai da tela (troca de rota).
 * @param {HTMLElement} container - elemento que contém o box
 */
export function iniciarContagem(container) {
  const box     = container.querySelector('#contagem');
  const numeros = container.querySelector('#contagem-numeros');
  if (!box || !numeros) return;

  const unidade = (valor, rotulo) => `
    <div class="contagem__unidade">
      <span class="contagem__valor">${valor}</span>
      <span class="contagem__rotulo">${rotulo}</span>
    </div>
  `;

  function atualizar() {
    const restante = PROVA.data.getTime() - Date.now();

    if (restante <= 0) {
      const diaDaProva = Date.now() - PROVA.data.getTime() < 86400000;
      numeros.innerHTML = `<p class="contagem__fim">${diaDaProva ? 'É hoje! Boa prova! 🍀' : 'A prova já aconteceu.'}</p>`;
      return false;
    }

    const { dias, horas, minutos, segundos } = decompor(restante);
    numeros.innerHTML =
      unidade(dias, dias === 1 ? 'dia' : 'dias') +
      unidade(doisDigitos(horas), 'horas') +
      unidade(doisDigitos(minutos), 'min') +
      unidade(doisDigitos(segundos), 'seg');
    numeros.setAttribute('aria-label', `Faltam ${dias} dias, ${horas} horas e ${minutos} minutos`);
    return true;
  }

  if (!atualizar()) return;
  const timer = setInterval(() => {
    if (!box.isConnected || !atualizar()) clearInterval(timer);
  }, 1000);
}
