/**
 * tema.js — Temas de cores do site e o botão de sol/lua que troca o tema.
 *
 * O tema escolhido vai no atributo data-tema do <html>; as cores de cada tema
 * ficam em css/variaveis.css, num bloco :root[data-tema="<id>"].
 * A escolha vale para este navegador. O <head> do index.html aplica o tema
 * salvo antes de desenhar a página (para não piscar o tema errado).
 *
 * O interruptor (htmlBotaoTema) fica só em Configurações → Aparência: um slider que
 * alterna entre claro (sol) e escuro (lua). Com mais temas, cada clique passa para o
 * tema seguinte da lista.
 *
 * COMO ADICIONAR UM TEMA:
 * 1. Acrescente um item em TEMAS (id, nome, ícone de js/icones.js e a cor da barra do
 *    navegador no celular) e a mesma cor em `barras`, no script do <head> do index.html.
 * 2. Crie o bloco :root[data-tema="<id>"] em css/variaveis.css redefinindo as
 *    variáveis de cor (use o bloco do tema "claro" como modelo).
 */

/** Temas disponíveis, na ordem do interruptor. O primeiro é o padrão. */
export const TEMAS = [
  { id: 'escuro', nome: 'Escuro', icone: 'moon', corBarra: '#0E1116' },
  { id: 'claro',  nome: 'Claro',  icone: 'sun',  corBarra: '#F6F7F9' },
];

const CHAVE = 'acafe2027:tema';   // mesma chave lida pelo <head> do index.html

/** Id do tema em uso. */
export function temaAtual() {
  let id = null;
  try { id = localStorage.getItem(CHAVE); } catch { /* ignora */ }
  return TEMAS.some(t => t.id === id) ? id : TEMAS[0].id;
}

/**
 * Aplica um tema na página inteira, guarda a escolha e atualiza os botões de tema.
 * @param {string} id - id de um item de TEMAS
 */
export function aplicarTema(id) {
  const tema = TEMAS.find(t => t.id === id) || TEMAS[0];
  document.documentElement.dataset.tema = tema.id;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', tema.corBarra);
  try { localStorage.setItem(CHAVE, tema.id); } catch { /* ignora */ }
  document.querySelectorAll('[data-botao-tema]').forEach(atualizarBotao);
}

/** Tema que o botão aplica no próximo clique. */
const proximoTema = () => TEMAS[(TEMAS.findIndex(t => t.id === temaAtual()) + 1) % TEMAS.length];

/* Interruptor deslizante: claro = sol à esquerda e bolinha à direita;
   escuro = bolinha à esquerda e lua com estrela à direita. Com mais de dois temas,
   cada clique passa para o próximo da lista. */
const SOL = `<svg class="interruptor-tema__icone interruptor-tema__sol" viewBox="0 0 24 24" aria-hidden="true">${'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' + '<circle cx="12" cy="12" r="4.2" fill="currentColor"/>' +
  [0, 45, 90, 135, 180, 225, 270, 315].map(a => `<line x1="12" y1="2.5" x2="12" y2="4.8" transform="rotate(${a} 12 12)"/>`).join('') + '</g>'}</svg>`;
const LUA = `<svg class="interruptor-tema__icone interruptor-tema__lua" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M19 14.6A8 8 0 0 1 9.4 5a8 8 0 1 0 9.6 9.6z" fill="currentColor"/>
  <path d="M17.5 2.5l.8 1.7 1.8.3-1.3 1.3.3 1.8-1.6-.9-1.6.9.3-1.8-1.3-1.3 1.8-.3z" fill="currentColor"/></svg>`;

function rotuloDoTema() {
  return `Tema ${(TEMAS.find(t => t.id === temaAtual()) || TEMAS[0]).nome.toLowerCase()}`;
}

function atualizarBotao(btn) {
  const escuro = temaAtual() === 'escuro';
  btn.setAttribute('aria-checked', String(escuro));
  btn.title = `Mudar para o tema ${proximoTema().nome.toLowerCase()}`;
  const texto = btn.parentElement?.querySelector('[data-rotulo-tema]');
  if (texto) texto.textContent = rotuloDoTema();
}

/**
 * Interruptor de tema claro/escuro (ligue-o com vincularBotoesTema).
 * @param {{ texto?: boolean, classe?: string }} [opcoes] - texto: mostra ao lado o nome do tema em uso
 */
export function htmlBotaoTema({ texto = false, classe = '' } = {}) {
  const escuro = temaAtual() === 'escuro';
  const botao = `<button type="button" role="switch" aria-checked="${escuro}" aria-label="Tema escuro"
    class="interruptor-tema ${classe}" data-botao-tema title="Mudar para o tema ${proximoTema().nome.toLowerCase()}">
      <span class="interruptor-tema__trilho" aria-hidden="true">${SOL}${LUA}<span class="interruptor-tema__bolinha"></span></span>
    </button>`;
  return texto
    ? `<span class="interruptor-tema__grupo">${botao}<span class="interruptor-tema__texto" data-rotulo-tema>${rotuloDoTema()}</span></span>`
    : botao;
}

/** Faz os botões de tema dentro de `raiz` trocarem o tema ao clicar. */
export function vincularBotoesTema(raiz) {
  raiz.querySelectorAll('[data-botao-tema]').forEach(btn =>
    btn.addEventListener('click', () => aplicarTema(proximoTema().id)));
}
