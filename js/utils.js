/**
 * utils.js — Funções utilitárias compartilhadas entre módulos.
 */

/**
 * Converte uma string em slug: minúsculas, sem acentos, sem espaços.
 * Usado para comparar disciplinas sem depender de digitação exata.
 * @param {string} texto
 * @returns {string}
 */
export function slugify(texto) {
  if (!texto) return '';
  return texto
    .normalize('NFD')                      // decompõe acentos
    .replace(/[\u0300-\u036f]/g, '')       // remove marcas diacríticas
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')          // não-alfanumérico → hífen
    .replace(/^-+|-+$/g, '');             // remove hífens no início/fim
}

/**
 * Escapa caracteres HTML para evitar XSS ao inserir texto puro no DOM.
 * Não use em strings que já contenham HTML intencional.
 * @param {string} texto
 * @returns {string}
 */
export function escaparHtml(texto) {
  const div = document.createElement('div');
  div.textContent = texto;
  return div.innerHTML;
}

/**
 * Pluraliza uma palavra de forma simples.
 * @param {number} n
 * @param {string} singular
 * @param {string} plural
 * @returns {string}
 */
export function pluralizar(n, singular, plural) {
  return `${n} ${n === 1 ? singular : plural}`;
}

