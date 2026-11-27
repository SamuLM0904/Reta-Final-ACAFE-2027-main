/**
 * conteudos.js — Conteúdos de cada questão.
 *
 * O campo `conteudo` da questão é o id de um capítulo de dados/conteudos.js, ou uma lista
 * de ids quando a questão cobra mais de um conteúdo (ela entra em todos eles). Capítulos que
 * o material divide em partes contam como um conteúdo só (JUNCOES). Onde não há capítulo
 * (Literatura, Língua Estrangeira), o conteúdo é o subtópico.
 */

const JUNCOES = globalThis.JUNCOES || {};

/** Conteúdos, por id, com a posição de cada um na lista (globalThis: também roda no node). */
export const CAPITULOS = new Map((globalThis.CONTEUDOS || [])
  .filter(c => !JUNCOES[c.id])
  .map((c, i) => [c.id, { ...c, ordem: i }]));

/** Conteúdos de uma questão: os capítulos dela (sem repetir) ou, se não houver, o subtópico. */
export function conteudosDa(q) {
  const ids = [...new Set([].concat(q.conteudo || []).map(id => JUNCOES[id] || id))].filter(id => CAPITULOS.has(id));
  return ids.length ? ids : [(q.subtopico || 'Geral').trim()];
}

/** Nome de um conteúdo para a tela, e a posição dele na lista. */
export function descreverConteudo(chave) {
  const c = CAPITULOS.get(chave);
  return c ? { nome: c.nome, ordem: c.ordem } : { nome: chave, ordem: Infinity };
}

/** Nome de um conteúdo (o nome do capítulo ou o subtópico). */
export const nomeConteudo = chave => CAPITULOS.get(chave)?.nome || chave;
