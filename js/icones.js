/**
 * icones.js — Biblioteca de ícones SVG inline (estilo traço / Lucide).
 *
 * Cada ícone é uma string SVG com viewBox="0 0 24 24".
 * Para usar: icone('nome', tamanho_opcional)
 * Para adicionar um novo ícone: inclua uma entrada no objeto ICONES.
 */

/** Mapa de nome → paths SVG internos */
const ICONES = {
  // Módulos
  'clipboard-list': `
    <line x1="8" y1="6" x2="21" y2="6"/>
    <line x1="8" y1="12" x2="21" y2="12"/>
    <line x1="8" y1="18" x2="21" y2="18"/>
    <polyline points="3 6 4 7 6 5"/>
    <polyline points="3 12 4 13 6 11"/>
    <polyline points="3 18 4 19 6 17"/>`,

  'dna': `
    <path d="M2 15c6.667-6 13.333 0 20-6"/>
    <path d="M2 9c6.667 6 13.333 0 20 6"/>
    <path d="M2 12h1"/>
    <path d="M21 12h1"/>
    <path d="M6 19c0-2 1-3 2-4"/>
    <path d="M16 5c0 2-1 3-2 4"/>
    <path d="M6 5c0 2 1 3 2 4"/>
    <path d="M16 19c0-2-1-3-2-4"/>`,

  'flask': `
    <path d="M10 2v7.31"/>
    <path d="M14 9.3V2"/>
    <path d="M8.5 2h7"/>
    <path d="M14 9.3a6.5 6.5 0 1 1-4 0"/>
    <path d="M5.58 16.5h12.85"/>`,

  'atom': `
    <circle cx="12" cy="12" r="1"/>
    <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/>
    <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/>`,

  'calculator': `
    <rect x="4" y="2" width="16" height="20" rx="2"/>
    <line x1="8" y1="6" x2="16" y2="6"/>
    <line x1="8" y1="10" x2="8" y2="10"/>
    <line x1="12" y1="10" x2="12" y2="10"/>
    <line x1="16" y1="10" x2="16" y2="10"/>
    <line x1="8" y1="14" x2="8" y2="14"/>
    <line x1="12" y1="14" x2="12" y2="14"/>
    <line x1="16" y1="14" x2="16" y2="14"/>
    <line x1="8" y1="18" x2="12" y2="18"/>
    <line x1="16" y1="18" x2="16" y2="18"/>`,

  'book-open': `
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>`,

  'feather': `
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
    <line x1="16" y1="8" x2="2" y2="22"/>
    <line x1="17.5" y1="15" x2="9" y2="15"/>`,

  'landmark': `
    <line x1="3" y1="22" x2="21" y2="22"/>
    <line x1="6" y1="18" x2="6" y2="11"/>
    <line x1="10" y1="18" x2="10" y2="11"/>
    <line x1="14" y1="18" x2="14" y2="11"/>
    <line x1="18" y1="18" x2="18" y2="11"/>
    <polygon points="12 2 20 7 4 7 12 2"/>`,

  'globe': `
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,

  'languages': `
    <path d="m5 8 6 6"/>
    <path d="m4 14 6-6 2-3"/>
    <path d="M2 5h12"/>
    <path d="M7 2h1"/>
    <path d="m22 22-5-10-5 10"/>
    <path d="M14 18h6"/>`,

  'map': `
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
    <line x1="9" y1="3" x2="9" y2="18"/>
    <line x1="15" y1="6" x2="15" y2="21"/>`,

  'library': `
    <path d="m16 6 4 14"/>
    <path d="M12 6v14"/>
    <path d="M8 8v12"/>
    <path d="M4 4v16"/>`,

  // Navegação / UI
  'arrow-left': `
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>`,

  'check': `
    <polyline points="20 6 9 17 4 12"/>`,

  'x': `
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>`,

  'clock': `
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>`,

  'refresh-cw': `
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>`,

  'trophy': `
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>`,

  'alert-circle': `
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>`,

  'redo': `
    <polyline points="21 7 21 3 17 3"/>
    <path d="M21 3 15 9a5 5 0 0 1-7.07 0L3 4"/>
    <path d="M3 20a9 9 0 0 0 9-9"/>`,

  'settings': `
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>`,

  'eye': `
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/>
    <circle cx="12" cy="12" r="3"/>`,

  'eye-off': `
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c6.5 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
    <path d="M6.61 6.61A13.53 13.53 0 0 0 2 12s3.5 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
    <line x1="2" y1="2" x2="22" y2="22"/>`,

  'pencil': `
    <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
    <path d="m15 5 4 4"/>`,

  'log-out': `
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>`,
};

/**
 * Retorna uma string SVG inline para o ícone solicitado.
 * @param {string} nome   - chave do ícone em ICONES
 * @param {number} [tam]  - tamanho em px (padrão 20)
 * @param {string} [cls]  - classe CSS extra
 * @returns {string} SVG HTML
 */
export function icone(nome, tam = 20, cls = '') {
  const paths = ICONES[nome];
  if (!paths) {
    console.warn(`[Icones] Ícone "${nome}" não encontrado.`);
    return '';
  }
  return `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${tam}" height="${tam}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    class="icone${cls ? ' ' + cls : ''}"
  >${paths}</svg>`;
}

