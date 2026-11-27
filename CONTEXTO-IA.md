# Contexto do projeto para outra IA

Cole este arquivo no início da conversa com outra IA para ela entender o projeto.

## O que é

**Reta Final ACAFE 2027**: site de estudos para o vestibular de Medicina da ACAFE (Santa Catarina).
Feito por um aluno, em português do Brasil. Publicado na Vercel a partir da branch `main` do GitHub.

- **Simulados** montados com as questões das provas anteriores da ACAFE (63 questões, com Espanhol ou Inglês).
- **Módulos de estudo por matéria**, com questões de outros vestibulares (ENEM, Fuvest, Unesp, Unicamp,
  UFPR, UDESC, PUCPR), separadas por conteúdo. Essas questões não entram nos simulados.
- **Guia de Estudos**: plano diário em blocos de tempo, ajustes pelo chat ("vou viajar sexta"),
  simulado semanal e correção de erros (a questão errada volta em 1, 2, 4 e 7 dias).
- **Login e dados na nuvem** com Firebase (Auth + Firestore). Admins são definidos em `admins/<UID>`.

## Como é feito

- HTML, CSS e JavaScript puro (módulos ES), sem framework e sem build. Roda local com `node servidor.js`.
- As questões ficam em arquivos JS: `dados/provas/` (ACAFE) e `dados/estudo/` (outros vestibulares).
- Os conteúdos ficam em `dados/conteudos.js`. Cada questão tem o campo `conteudo` com o id dele.
  Capítulos que o material divide em partes contam como um conteúdo só (`JUNCOES`).
- O chat do Guia usa um interpretador interno por regras (`js/guia-chat.js`), sem IA externa.
- Mais detalhes no [README.md](README.md).

## Regras que o dono do projeto pediu

- Imagens das questões: só recorte da imagem original do PDF. Nunca redesenhar ou criar imagens.
- Confirmações na tela: nunca `window.confirm` ou `alert`. Usar `confirmar()` de `js/confirmar.js`.
- Gabarito: sempre o oficial. Se o conteúdo contradiz o gabarito, seguir o conteúdo e avisar.
- Questões anuladas pela ACAFE não são cadastradas. O simulado avisa quantas ficaram de fora.
- Na tela, os conteúdos aparecem só pelo nome (sem livro, frente ou "Cap.").
- Não mexer em pagamentos nem nos planos Básico, Pro e Ultra sem pedido.
- Dúvidas e perguntas sem resposta vão para [PENDENCIAS.md](PENDENCIAS.md) e [DUVIDAS.md](DUVIDAS.md).
- Escrever em português simples e direto.
