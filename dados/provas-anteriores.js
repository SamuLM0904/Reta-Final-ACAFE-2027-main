/**
 * provas-anteriores.js (dados) — Banco das questões das provas anteriores da ACAFE.
 *
 * USADAS APENAS NOS SIMULADOS. Cada prova fica no SEU PRÓPRIO arquivo, em
 * dados/provas/<ano>-<inverno|verao>.js (ex.: dados/provas/2026-inverno.js),
 * que apenas acrescenta as suas questões a este banco com QUESTOES_PROVAS.push(...).
 *
 * COMO ADICIONAR UMA PROVA:
 * 1. Crie dados/provas/<ano>-<inverno|verao>.js copiando a estrutura de um arquivo existente.
 * 2. Acrescente uma linha <script src="dados/provas/<arquivo>.js"></script> no index.html,
 *    logo abaixo das outras provas.
 * 3. Imagens: só o print da imagem real do PDF (ferramentas/print-imagem.py), em imagens/.
 * 4. Questões anuladas não entram. Cadastre as questões 15–21 em Espanhol E em Inglês.
 */

var QUESTOES_PROVAS = [];
