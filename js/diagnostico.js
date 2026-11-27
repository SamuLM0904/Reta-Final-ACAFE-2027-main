/**
 * diagnostico.js — Autoavaliação dos erros: o aluno diz POR QUE errou a questão
 * (falta de conteúdo, atenção ou interpretação) e recebe uma dica rápida.
 *
 * O motivo fica gravado junto da marcação na memória de erros e acertos (campo `m`,
 * ver armazenamento.js). O Guia usa isso: erro por falta de atenção pesa menos na
 * prioridade da matéria do que erro por falta de conteúdo (ver guia-plano.js).
 */

import { escaparHtml } from './utils.js';

export const MOTIVOS = [
  { id: 'conteudo',      nome: 'Não sabia o conteúdo' },
  { id: 'atencao',       nome: 'Falta de atenção' },
  { id: 'interpretacao', nome: 'Não entendi o que pedia' },
];

/** Dica rápida para o motivo escolhido, usando a matéria e o conteúdo da questão. */
export function dicaDoMotivo(motivo, questao) {
  const conteudo = `<strong>${escaparHtml(questao.subtopico || questao.disciplina)}</strong> (${escaparHtml(questao.disciplina)})`;
  switch (motivo) {
    case 'conteudo':
      return `Revise a teoria de ${conteudo}: leia a explicação de todas as alternativas acima e anote o que faltava.
        Depois faça outras questões desse conteúdo. O Guia de Estudos vai dar mais tempo a ele.`;
    case 'atencao':
      return `Antes de marcar, sublinhe as palavras do comando (INCORRETA, EXCETO, NÃO, "a única") e os dados do enunciado.
        Nas contas, confira unidades e sinais. Leia todas as alternativas antes de escolher, mesmo se a primeira parecer certa.`;
    case 'interpretacao':
      return `Leia o comando da questão antes do texto, para saber o que procurar. Volte ao texto para confirmar cada alternativa
        e desconfie das que generalizam ("sempre", "nunca", "apenas") ou dizem mais do que o texto diz.`;
    default:
      return '';
  }
}

/**
 * Caixa "Por que você errou?" com os motivos e a dica do motivo marcado.
 * @param {string|undefined} motivo - motivo já escolhido
 */
export function htmlDiagnostico(motivo, questao) {
  return `
    <section class="diagnostico" aria-label="Por que você errou">
      <p class="diagnostico__titulo">Por que você errou esta questão?</p>
      <div class="diagnostico__opcoes" role="group" aria-label="Motivo do erro">
        ${MOTIVOS.map(m => `
          <button type="button" class="btn btn-secundario btn-pequeno diagnostico__opcao${m.id === motivo ? ' diagnostico__opcao--marcada' : ''}"
            data-motivo="${m.id}" aria-pressed="${m.id === motivo}">${m.nome}</button>`).join('')}
      </div>
      ${motivo ? `<p class="diagnostico__dica">${dicaDoMotivo(motivo, questao)}</p>` : ''}
    </section>`;
}

/** Liga os botões da caixa de diagnóstico; `aoEscolher(motivo)` grava e redesenha. */
export function vincularDiagnostico(container, aoEscolher) {
  container.querySelector('.diagnostico')?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-motivo]');
    if (btn) aoEscolher(btn.dataset.motivo);
  });
}
