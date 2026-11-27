/**
 * planos.js — Tela TEMPORÁRIA de planos (#/planos), com preços FICTÍCIOS.
 *
 * Serve só para os sócios verem o formato: planos Básico, Pro e Ultra, durações em meses
 * e o bloqueio de um plano com duração maior que o tempo até a prova. Não tem pagamento,
 * não grava nada e não bloqueia nada no site. Os preços e o que cada plano inclui são
 * exemplos para discutir. Quando o pagamento for feito, esta tela é substituída.
 */

import { icone } from './icones.js';
import { PROVA } from './contagem.js';

/** O que cada plano inclui (exemplo para discussão). */
export const PLANOS = [
  { id: 'basico', nome: 'Básico', resumo: 'Para treinar com as provas da ACAFE.', recursos: [
    'Simulados com as provas anteriores da ACAFE',
    'Questões de estudo de outros vestibulares',
    'Histórico de simulados',
  ] },
  { id: 'pro', nome: 'Pro', resumo: 'Para estudar com um plano diário.', destaque: true, recursos: [
    'Tudo do Básico',
    'Guia de Estudos com cronograma diário',
    'Correção de erros (as questões erradas voltam)',
    'Diagnóstico de erros com dicas',
  ] },
  { id: 'ultra', nome: 'Ultra', resumo: 'Para a reta final completa.', recursos: [
    'Tudo do Pro',
    'Livro das obras literárias',
    'Mini-simulados diários e simuladões',
    'Chat do Guia para mudar o cronograma',
  ] },
];

/** Preço mensal (R$) de cada plano por duração — FICTÍCIO. Quanto mais longo, mais barato o mês. */
export const DURACOES = [
  { meses: 1,  precos: { basico: 39.9, pro: 59.9, ultra: 89.9 } },
  { meses: 3,  precos: { basico: 34.9, pro: 52.9, ultra: 79.9 } },
  { meses: 6,  precos: { basico: 29.9, pro: 44.9, ultra: 69.9 } },
  { meses: 12, precos: { basico: 24.9, pro: 37.9, ultra: 59.9 } },
];

export const reais = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

/** Meses inteiros que faltam para a prova (0 se faltar menos de um mês). */
function mesesAteAProva(agora = new Date()) {
  const dias = (PROVA.inicio - agora) / 86400000;
  return dias > 0 ? Math.floor(dias / 30) : null;   // null = a prova já passou
}

export function renderizarPlanos(container) {
  const meses = mesesAteAProva();
  let simulado = meses ?? 4;        // a data da prova já passou: começa com 4 meses na simulação
  let duracao = DURACOES[1].meses;

  container.innerHTML = `
    <div class="tela-planos">
      <div class="container">
        <a href="#/" class="btn-voltar">${icone('arrow-left', 18)} Voltar ao início</a>
        <p class="planos-aviso" role="note"><strong>Tela temporária.</strong> Os preços são fictícios e não há
          pagamento: é só para ver o formato dos planos.</p>
        <h2 class="planos-titulo">Planos</h2>

        <div class="planos-controles">
          <div class="planos-duracoes" role="radiogroup" aria-label="Duração do plano" id="planos-duracoes"></div>
          <label class="planos-simulacao">
            Meses até a prova (simulação)
            <input type="number" id="planos-meses" min="0" max="24" value="${simulado}" class="guia-texto guia-numero">
          </label>
        </div>
        <p class="planos-tempo" id="planos-tempo"></p>

        <div class="planos-grade" id="planos-grade"></div>
      </div>
    </div>`;

  const elDuracoes = container.querySelector('#planos-duracoes');
  const elGrade = container.querySelector('#planos-grade');
  const elTempo = container.querySelector('#planos-tempo');

  const desenhar = () => {
    const bloqueado = duracao > Math.max(simulado, 1);
    elDuracoes.innerHTML = DURACOES.map(d => `
      <button type="button" role="radio" aria-checked="${d.meses === duracao}" data-meses="${d.meses}"
        class="planos-duracao${d.meses === duracao ? ' planos-duracao--ativa' : ''}${d.meses > Math.max(simulado, 1) ? ' planos-duracao--longa' : ''}">
        ${d.meses === 1 ? '1 mês' : `${d.meses} meses`}
      </button>`).join('');

    elTempo.innerHTML = meses === null
      ? `A data da prova cadastrada (${PROVA.dataExtenso}) já passou. Use o campo acima para simular.`
      : `Faltam cerca de ${meses === 1 ? '1 mês' : `${meses} meses`} para a prova (${PROVA.dataExtenso}).`;

    const d = DURACOES.find(x => x.meses === duracao);
    elGrade.innerHTML = PLANOS.map(p => {
      const mensal = d.precos[p.id];
      const economia = DURACOES[0].precos[p.id] - mensal;
      return `
        <article class="plano${p.destaque ? ' plano--destaque' : ''}">
          ${p.destaque ? '<span class="plano__selo">Mais escolhido</span>' : ''}
          <h3 class="plano__nome">${p.nome}</h3>
          <p class="plano__resumo">${p.resumo}</p>
          <p class="plano__preco"><span class="plano__valor">${reais(mensal)}</span> /mês</p>
          <p class="plano__total">${duracao === 1 ? 'Cobrado todo mês' : `${reais(mensal * duracao)} por ${duracao} meses`}${economia > 0 ? ` · economia de ${reais(economia * duracao)}` : ''}</p>
          <ul class="plano__recursos">
            ${p.recursos.map(r => `<li>${icone('check', 16)} ${r}</li>`).join('')}
          </ul>
          ${bloqueado
            ? `<p class="plano__bloqueio" role="alert">${icone('alert-circle', 16)} Este plano dura mais que o tempo até a prova.
                 Escolha ${simulado <= 1 ? 'o plano de 1 mês' : 'uma duração menor'}.</p>
               <button type="button" class="btn btn-primario" disabled>Assinar</button>`
            : `<button type="button" class="btn ${p.destaque ? 'btn-primario' : 'btn-secundario'}" data-assinar>Assinar</button>`}
        </article>`;
    }).join('');
  };

  elDuracoes.addEventListener('click', e => {
    const b = e.target.closest('[data-meses]');
    if (b) { duracao = Number(b.dataset.meses); desenhar(); }
  });
  container.querySelector('#planos-meses').addEventListener('input', e => {
    simulado = Math.max(0, Math.min(24, Number(e.target.value) || 0));
    desenhar();
  });
  elGrade.addEventListener('click', e => {
    const b = e.target.closest('[data-assinar]');
    if (b) b.outerHTML = '<p class="plano__teste">Pagamento ainda não disponível (tela de teste).</p>';
  });
  desenhar();
}
