/**
 * obras.js (dados) — Obras literárias cobradas nas provas da ACAFE.
 *
 * Cada questão de Literatura que cobra uma obra tem o campo `obra` com o id dela
 * (ver dados/provas/*.js). Antes de um simulado com essas questões, o aluno diz se
 * conhece as obras; se não conhece, abre o "livro das obras" (js/obras.js): um
 * sumário e um capítulo por obra.
 *
 * `capitulo`: texto do capítulo (HTML simples: <p>, <b>, <i>, <h4>, <ul>/<li>).
 * Enquanto estiver null, o livro mostra só a ficha da obra e o aviso de que o
 * resumo está em preparação.
 */

var OBRAS = [
  { id: 'memorias-postumas',  titulo: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis',     genero: 'Romance',  capitulo: null },
  { id: 'pauliceia',          titulo: 'Pauliceia Desvairada',            autor: 'Mário de Andrade',     genero: 'Poesia',   capitulo: null },
  { id: 'memorial-maria-moura', titulo: 'Memorial de Maria Moura',       autor: 'Rachel de Queiroz',    genero: 'Romance',  capitulo: null },
  { id: 'fazenda-modelo',     titulo: 'Fazenda Modelo',                  autor: 'Chico Buarque',        genero: 'Novela',   capitulo: null },
  { id: 'insubmissas',        titulo: 'Insubmissas Lágrimas de Mulheres', autor: 'Conceição Evaristo',  genero: 'Contos',   capitulo: null },
  { id: 'vendedor-passados',  titulo: 'O Vendedor de Passados',          autor: 'José Eduardo Agualusa', genero: 'Romance', capitulo: null },
  { id: 'exercicio-incerteza', titulo: 'O Exercício da Incerteza',       autor: 'Drauzio Varella',      genero: 'Memórias', capitulo: null },
  { id: 'codigo-aguas',       titulo: 'O Código das Águas',              autor: 'Lindolf Bell',         genero: 'Poesia',   capitulo: null },
  { id: 'tristeza-infinita',  titulo: 'Uma Tristeza Infinita',           autor: 'Antônio Xerxenesky',   genero: 'Romance',  capitulo: null },
];
