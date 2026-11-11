/**
 * questoes.js (dados) — Questões de ESTUDO por conteúdo (módulos de cada matéria).
 *
 * Aqui só é criado o banco QUESTOES. As questões ficam em dados/estudo/, um arquivo por
 * prova de outro vestibular (ex.: dados/estudo/enem-2025.js), cada um com QUESTOES.push(...)
 * e uma linha <script> no index.html. As questões das provas anteriores da ACAFE NÃO ficam
 * aqui: elas estão em dados/provas/ e são usadas apenas nos simulados.
 *
 * COMO ADICIONAR UMA QUESTÃO: veja README.md ("Como adicionar uma questão nova"). O campo
 * `disciplina` deve casar (sem diferença de maiúsculas/acentos) com o `disciplina` do módulo
 * em js/modulos.js, e o campo `conteudo` diz em qual capítulo (ou capítulos) ela aparece.
 */

var QUESTOES = [
];
