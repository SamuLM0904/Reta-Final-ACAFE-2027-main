/**
 * modulos.js — Lista editável dos 12 módulos da plataforma.
 *
 * Para adicionar ou editar um módulo, basta alterar este array.
 * Campos:
 *   id        : slug único sem acento (usado na URL e para cruzar com questões)
 *   titulo    : nome exibido no card
 *   tipo      : "disciplina" (questões de estudo da matéria) | "simulados" (provas anteriores)
 *               | "em-breve" (tela de aviso)
 *   disciplina: nome da disciplina tal como aparece em dados/questoes.js
 *               (só obrigatório quando tipo === "disciplina")
 *   icone     : nome do ícone SVG definido em js/icones.js
 *   status    : "ativo" | "em-breve"
 */

export const MODULOS = [
  {
    id: 'simulados',
    titulo: 'Simulados — Provas Anteriores',
    tipo: 'simulados',
    disciplina: null,
    icone: 'clipboard-list',
    status: 'ativo',
  },
  {
    id: 'biologia',
    titulo: 'Questões de Biologia',
    tipo: 'disciplina',
    disciplina: 'Biologia',
    icone: 'dna',
    status: 'ativo',
  },
  {
    id: 'quimica',
    titulo: 'Questões de Química',
    tipo: 'disciplina',
    disciplina: 'Química',
    icone: 'flask',
    status: 'ativo',
  },
  {
    id: 'fisica',
    titulo: 'Questões de Física',
    tipo: 'disciplina',
    disciplina: 'Física',
    icone: 'atom',
    status: 'ativo',
  },
  {
    id: 'matematica',
    titulo: 'Questões de Matemática',
    tipo: 'disciplina',
    disciplina: 'Matemática',
    icone: 'calculator',
    status: 'ativo',
  },
  {
    id: 'portugues',
    titulo: 'Questões de Português',
    tipo: 'disciplina',
    disciplina: 'Português',
    icone: 'book-open',
    status: 'ativo',
  },
  {
    id: 'literatura',
    titulo: 'Questões de Literatura',
    tipo: 'disciplina',
    disciplina: 'Literatura',
    icone: 'feather',
    status: 'ativo',
  },
  {
    id: 'historia',
    titulo: 'Questões de História',
    tipo: 'disciplina',
    disciplina: 'História',
    icone: 'landmark',
    status: 'ativo',
  },
  {
    id: 'geografia',
    titulo: 'Questões de Geografia',
    tipo: 'disciplina',
    disciplina: 'Geografia',
    icone: 'globe',
    status: 'ativo',
  },
  {
    id: 'espanhol',
    titulo: 'Questões de Espanhol',
    tipo: 'disciplina',
    disciplina: 'Espanhol',
    icone: 'languages',
    status: 'ativo',
  },
  {
    id: 'guia-de-estudos',
    titulo: 'Guia de Estudos',
    tipo: 'em-breve',
    disciplina: null,
    icone: 'map',
    status: 'em-breve',
  },
  {
    id: 'leituras-obrigatorias',
    titulo: 'Leituras Obrigatórias',
    tipo: 'em-breve',
    disciplina: null,
    icone: 'library',
    status: 'em-breve',
  },
];

