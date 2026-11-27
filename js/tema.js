/**
 * tema.js — Temas de cores do site e o botão de sol/lua que troca o tema.
 *
 * O tema escolhido vai no atributo data-tema do <html>; as cores de cada tema
 * ficam em css/variaveis.css, num bloco :root[data-tema="<id>"].
 * A escolha vale para este navegador. O <head> do index.html aplica o tema
 * salvo antes de desenhar a página (para não piscar o tema errado).
 *
 * O botão (htmlBotaoTema) fica só em Configurações → Aparência. Ele mostra
 * o ícone do PRÓXIMO tema (no escuro, um sol; no claro, uma lua) e, a cada clique,
 * passa para o tema seguinte da lista — com mais temas, ele percorre todos em ordem.
 *
 * COMO ADICIONAR UM TEMA:
 * 1. Acrescente um item em TEMAS (id, nome, ícone de js/icones.js e a cor da barra do
 *    navegador no celular) e a mesma cor em `barras`, no script do <head> do index.html.
 * 2. Crie o bloco :root[data-tema="<id>"] em css/variaveis.css redefinindo as
 *    variáveis de cor (use o bloco do tema "claro" como modelo).
 */

import { icone } from './icones.js';

/** Temas disponíveis, na ordem do botão. O primeiro é o padrão. */
export const TEMAS = [
  { id: 'escuro', nome: 'Escuro', icone: 'moon', corBarra: '#0a1118' },
  { id: 'claro',  nome: 'Claro',  icone: 'sun',  corBarra: '#f4f6f8' },
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

function conteudoDoBotao(comTexto) {
  const proximo = proximoTema();
  return `${icone(proximo.icone, 20)}${comTexto ? `<span>Tema ${proximo.nome.toLowerCase()}</span>` : ''}`;
}

function atualizarBotao(btn) {
  const proximo = proximoTema();
  btn.innerHTML = conteudoDoBotao(btn.dataset.botaoTema === 'texto');
  btn.setAttribute('aria-label', `Mudar para o tema ${proximo.nome.toLowerCase()}`);
  btn.title = `Mudar para o tema ${proximo.nome.toLowerCase()}`;
}

/**
 * Botão de sol/lua que troca o tema (ligue-o com vincularBotoesTema).
 * @param {{ texto?: boolean, classe?: string }} [opcoes] - texto: mostra também o nome do próximo tema
 */
export function htmlBotaoTema({ texto = false, classe = '' } = {}) {
  const proximo = proximoTema();
  return `<button type="button" class="botao-tema ${classe}" data-botao-tema="${texto ? 'texto' : 'icone'}"
    aria-label="Mudar para o tema ${proximo.nome.toLowerCase()}" title="Mudar para o tema ${proximo.nome.toLowerCase()}">${conteudoDoBotao(texto)}</button>`;
}

/** Faz os botões de tema dentro de `raiz` trocarem o tema ao clicar. */
export function vincularBotoesTema(raiz) {
  raiz.querySelectorAll('[data-botao-tema]').forEach(btn =>
    btn.addEventListener('click', () => aplicarTema(proximoTema().id)));
}
