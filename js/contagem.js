/**
 * contagem.js — Box de contagem regressiva para a prova da ACAFE.
 *
 * Horários do Edital do Vestibular de Medicina ACAFE Verão 2027
 * (itens 8.1.1, 10.3.1 e 10.4.1.1), no horário de Brasília (UTC−3):
 *   portões fecham às 13h; prova das 13h20 às 18h20 de 22/11/2026.
 * Para outra edição, edite PROVA abaixo.
 *
 * O box mostra só o título e a contagem. Data, horários e avisos ficam num
 * balão que aparece ao passar o mouse (ou tocar/focar) no "?" do canto.
 *
 * Fases:
 *   antes do fechamento dos portões → contagem até o início da prova (13h20)
 *   portões fechados (13h–13h20)    → contagem até o início
 *   prova em andamento              → contagem até o término (18h20)
 *   depois da prova                 → aviso do gabarito preliminar
 */

import { icone } from './icones.js';

export const PROVA = {
  nome: 'Vestibular de Medicina ACAFE Verão 2027',
  dataExtenso: '22 de novembro de 2026',
  // Datas com fuso explícito (−03:00 = Brasília), corretas em qualquer fuso do aparelho
  portoesFecham: new Date('2026-11-22T13:00:00-03:00'),
  inicio:        new Date('2026-11-22T13:20:00-03:00'),
  termino:       new Date('2026-11-22T18:20:00-03:00'),
  gabarito:      'O gabarito preliminar sai em 23/11, a partir das 10h, em acafe.org.br/vestibular.',
};

/** Divide um intervalo em milissegundos em dias, horas, minutos e segundos. */
function decompor(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    dias:     Math.floor(s / 86400),
    horas:    Math.floor((s % 86400) / 3600),
    minutos:  Math.floor((s % 3600) / 60),
    segundos: s % 60,
  };
}

const doisDigitos = n => String(n).padStart(2, '0');

/** "2h05min" / "35min" a partir de milissegundos. */
function duracaoCurta(ms) {
  const { dias, horas, minutos } = decompor(ms);
  const h = dias * 24 + horas;
  return h ? `${h}h${doisDigitos(minutos)}min` : `${minutos}min`;
}

/**
 * Gera o HTML do box (os números são preenchidos por iniciarContagem).
 * @returns {string}
 */
export function htmlContagem() {
  return `
    <section class="contagem" id="contagem" aria-label="Contagem regressiva para a prova">
      <div class="contagem__ajuda">
        <button type="button" class="contagem__ajuda-botao" aria-label="Informações sobre a prova"
          aria-describedby="contagem-info">?</button>
        <div class="contagem__ajuda-balao" id="contagem-info" role="tooltip">
          <p><strong>Data:</strong> ${PROVA.dataExtenso}</p>
          <p><strong>Portões fecham:</strong> 13h (chegue 30 minutos antes)</p>
          <p><strong>Prova:</strong> das 13h20 às 18h20 (horário de Brasília)</p>
          <p class="contagem__aviso" id="contagem-aviso"></p>
        </div>
      </div>
      <div class="contagem__cabecalho">
        <span class="contagem__icone" aria-hidden="true">${icone('clock', 26)}</span>
        <p class="contagem__titulo">${PROVA.nome}</p>
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
  const aviso   = container.querySelector('#contagem-aviso');
  if (!box || !numeros) return;

  // Toque (celular): abre/fecha o balão
  const ajuda = box.querySelector('.contagem__ajuda');
  box.querySelector('.contagem__ajuda-botao').addEventListener('click', () => ajuda.classList.toggle('contagem__ajuda--aberta'));

  const unidade = (valor, rotulo) => `
    <div class="contagem__unidade">
      <span class="contagem__valor">${valor}</span>
      <span class="contagem__rotulo">${rotulo}</span>
    </div>
  `;

  function mostrarContagem(ms, descricao) {
    const { dias, horas, minutos, segundos } = decompor(ms);
    numeros.innerHTML =
      (dias ? unidade(dias, dias === 1 ? 'dia' : 'dias') : '') +
      unidade(doisDigitos(horas), 'horas') +
      unidade(doisDigitos(minutos), 'min') +
      unidade(doisDigitos(segundos), 'seg');
    numeros.setAttribute('aria-label', `${descricao}: ${dias} dias, ${horas} horas e ${minutos} minutos`);
  }

  function atualizar() {
    const agora = Date.now();
    const { portoesFecham, inicio, termino } = PROVA;
    const dia = d => new Date(d).toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });

    if (agora < portoesFecham) {
      mostrarContagem(inicio - agora, 'Faltam para o início da prova');
      aviso.textContent = dia(agora) === dia(inicio)
        ? `É hoje! Os portões fecham em ${duracaoCurta(portoesFecham - agora)}. Boa prova! 🍀`
        : 'A contagem vai até o início da prova (13h20).';
      return true;
    }
    if (agora < inicio) {
      mostrarContagem(inicio - agora, 'Faltam para o início da prova');
      aviso.textContent = 'Portões fechados. A prova começa às 13h20. Boa prova! 🍀';
      return true;
    }
    if (agora < termino) {
      mostrarContagem(termino - agora, 'Faltam para o término da prova');
      aviso.textContent = 'Prova em andamento — a contagem vai até o término (18h20). Boa prova! 🍀';
      return true;
    }
    numeros.innerHTML = `<p class="contagem__fim">A prova já aconteceu.</p>`;
    aviso.textContent = PROVA.gabarito;
    return false;
  }

  if (!atualizar()) return;
  const timer = setInterval(() => {
    if (!box.isConnected || !atualizar()) clearInterval(timer);
  }, 1000);
}
