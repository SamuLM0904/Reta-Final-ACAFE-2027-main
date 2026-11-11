/**
 * conteudos.js — Conteúdos (capítulos do material de estudo) de cada questão.
 *
 * O campo `conteudo` da questão é o id de um capítulo de dados/conteudos.js, ou uma lista
 * de ids quando a questão cobra mais de um capítulo (ela entra em todos eles). Onde não há
 * capítulo (Literatura, Língua Estrangeira), o conteúdo é o subtópico.
 */

/** Capítulos do material, por id, com a posição de cada um na lista (globalThis: também roda no node). */
export const CAPITULOS = new Map((globalThis.CONTEUDOS || []).map((c, i) => [c.id, { ...c, ordem: i }]));

/** Conteúdos de uma questão: os capítulos dela ou, se não houver, o subtópico. */
export function conteudosDa(q) {
  const ids = [].concat(q.conteudo || []).filter(id => CAPITULOS.has(id));
  return ids.length ? ids : [(q.subtopico || 'Geral').trim()];
}

/** Nome completo de um conteúdo para a tela, e a posição dele na lista (capítulos na ordem do material). */
export function descreverConteudo(chave) {
  const c = CAPITULOS.get(chave);
  if (!c) return { nome: chave, ordem: Infinity };
  if (c.extra) return { nome: `Complementar: ${c.nome}`, ordem: c.ordem };
  return { nome: `Livro ${c.livro} · ${c.frente} · Cap. ${c.capitulo}: ${c.nome}${c.tambem ? ` (também em ${c.tambem})` : ''}`, ordem: c.ordem };
}

/** Nome curto de um conteúdo (só o nome do capítulo ou o subtópico). */
export const nomeConteudo = chave => CAPITULOS.get(chave)?.nome || chave;
