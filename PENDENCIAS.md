# Pendências

Pontas soltas para resolver depois: perguntas que ficaram sem resposta, coisas que dependem de você e
decisões que eu tomei sozinho e vale você conferir. Quando um item for respondido, ele passa para
**Resolvidas**, com a decisão.

Dúvidas do cadastro das provas (gabaritos, questões com erro) ficam no [DUVIDAS.md](DUVIDAS.md).

## Esperando resposta sua

| Desde | Pergunta | Como está hoje |
|---|---|---|
| 27/11/2026 | Publicar o `firestore.rules` novo no Console do Firebase (coleção `planos`: a conta cria o próprio registro só como gratuito; só administradores mudam o plano) e depois clicar em "Criar os registros que faltam no Firebase" (Configurações › Administração › Contas e planos). | Até publicar, todas as contas que não são de administrador ficam no plano Gratuito. |
| 27/11/2026 | O plano Gratuito libera só a tela inicial, as Configurações e a tela de Planos (o resto aparece com cadeado). Quer liberar algo a mais no gratuito (ex.: algumas questões do banco)? | Como descrito; muda em `RECURSOS`, em `js/acesso.js`. |
| 26/11/2026 | Gemini Flash no chat do Guia: criar a chave em aistudio.google.com, restringir ao endereço do site no Google Cloud Console e colocar em `js/ia-config.js` (ou me passar para eu colocar). | Código pronto; sem chave, o chat usa só as regras. |
| 26/11/2026 | Data oficial da ACAFE Inverno 2027 (quando sair o edital). | **Data de teste:** 20/06/2027, 13h20 (portões 13h), em `js/contagem.js`, para o Guia funcionar. |

## Depende de você (fora do código)


- **Requisitos:** agora ficam na planilha [REQUISITOS.xlsx](REQUISITOS.xlsx), que eu atualizo.
- **Dificuldade × respostas reais:** em Configurações (administrador), "Conferir dificuldade". Mande o print da lista para eu ajustar.

## Para fazer depois (já combinado)

- **Dificuldade das questões em 5 níveis, 2ª etapa (27/11/2026):** a 1ª etapa já está feita (o tempo de cada resposta é gravado só com a tela à vista, e o botão "Mostrar dificuldade" mostra o nível depois de responder). Falta o cálculo coletivo, combinado assim: (1) cortar os tempos de menos de 10 s e de mais de 3× o tempo estimado para o nível da questão (`tempoValidoParaDificuldade` em `js/cronometro-questao.js`); (2) tirar 10% de cada ponta e usar a mediana; (3) comparar o tempo de cada aluno com o ritmo normal dele (tempo relativo), somando todos os alunos; (4) só mudar o nível com pelo menos 5 alunos diferentes (primeira resposta de cada); (5) nota = taxa de erro (~60%) + tempo relativo (~25%) + erros por falta de conteúdo (~15%) → muito fácil a muito difícil, com aprovação do administrador em "Conferir dificuldade". O cálculo roda na conta de administrador e grava uma tabela de níveis; **os dados técnicos (tempos, contagens) são só para administradores**. A etiqueta passa a mostrar o nível calculado, e o tempo por questão do Guia segue a dificuldade (`MINUTOS_POR_DIFICULDADE`).

- **Celular, no sistema todo (27/11/2026):** analisar e resolver a visualização de todas as telas no celular (menu, tela inicial, Guia e calendário, simulados, banco de questões, janelas). Pendência geral, para fazer principalmente quando estivermos finalizando o projeto.

- **Perguntas iniciais do Guia (27/11/2026):** revisar o questionário do Guia (as 9 perguntas, inclusive a nova sobre o horário de começo dos estudos, e o visual, que ainda é o antigo). Você pediu para resolver em outro momento.

- **Chat do Guia (27/11/2026):** melhorar o que ele entende e ligar o Gemini Flash (a chave está na tabela acima). Você pediu para deixar para depois.

- Escrever os resumos das obras literárias (capítulos do livro das obras). Hoje cada capítulo mostra "em preparação". Adiado por você em 26/11/2026.
- Cadastrar as provas de 2023 a 2021 (você adiou).
- Questões de estudo de edições mais novas (ENEM 2026, Fuvest 2027, Unesp 2027, UDESC 2027, UFPR 2027 com gabarito definitivo) quando saírem.
- Questões de somatória (UFSC/UEM) no estudo: criar o formato na tela de questões (várias afirmativas, nota parcial) e cadastrar essas provas (adiado em 07/11 e de novo em 26/11/2026).
- Pagamentos, planos Básico/Pro/Ultra e bloqueio de plano maior que o tempo até a prova: **não mexer** até você pedir.

## Decisões que eu tomei — confira se quiser

- **Fim de semana:** o total de horas digitado é dividido igualmente entre sábado e domingo.
- **Nota de corte:** convertida em acertos por `escore ≈ 4234 + 8,17 × acertos` (classificados do Verão 2024; erro de ±1 a 2 questões).
- **Tamanhos do simulado:** Mini = 14 questões; mini-simulado do dia = 10 questões das matérias estudadas no dia.
- **Fases do Guia:** base (mais de 120 dias), intensiva (36 a 120), reta final (até 5 semanas), com os simulados de cada fase descritos no README.
- **Correção de erros:** a questão errada volta em 1 dia; se errar de novo, em 2, 4 e depois 7 dias.
- **Erro por falta de atenção** conta como meio erro na prioridade das matérias.
- **Engrenagem de Configurações** aparece mesmo sem login, para dar acesso ao tema.

## Resolvidas

| Data | Item | Decisão |
|---|---|---|
| 26/11/2026 | 2025/Verão Q33 | Fica como está: gabarito D, com o aviso na explicação. |
| 26/11/2026 | Conteúdos de Literatura, Espanhol e Inglês | Ficam com os subtópicos atuais. |
| 26/11/2026 | Checklist dos sócios | Passou do Google Docs para a planilha REQUISITOS.xlsx. |
| 26/11/2026 | Tela de planos | Tela temporária em #/planos (preços fictícios, sem pagamento), com link só para administradores em Configurações. |
| 26/11/2026 | Reset da memória do aluno | Agora zera o perfil inteiro: questões feitas, simulados (com histórico), erros e acertos e o Guia. A conta fica. Se o aluno estiver com o site aberto, a página dele recomeça sozinha. |
| 26/11/2026 | Lista de conteúdos | Busca por nome (lupa) e ordem: A–Z, Z–A, mais feitas e menos feitas. |
| 26/11/2026 | Gabaritos discutíveis (questões de estudo) | Vale sempre o gabarito definitivo da banca. |
| 26/11/2026 | Tabelas da 2026/Inv Q41 e 2025/Inv Q31 | Ficam como imagem do original. |
| 26/11/2026 | 2025/Inv Q05 ("linha 20") | O site segue a prova linha por linha, e as linhas não quebram mais na tela (letra proporcional, Arial). No original a palavra também está na linha 21: o erro é do enunciado da ACAFE, mantido como na prova. |
| 26/11/2026 | IA do chat do Guia | Sem IA externa por enquanto: o chat usa só o interpretador interno (regras). |
| 26/11/2026 | Divisão por livros e frentes | Não usar mais. Os conteúdos aparecem só pelo nome (sem "Livro", "Frente" e "Cap."), e os divididos em partes (Genética I e II, Óptica, Reações Orgânicas I a IV etc.) viraram um só (`JUNCOES` em dados/conteudos.js). |
| 26/11/2026 | 8 capítulos complementares | Aprovados ("pode deixar"). |
| 26/11/2026 | Junção dos capítulos repetidos de Química | Fica junto (com o fim da divisão por livros, a pergunta perdeu o sentido). |
| 26/11/2026 | Questões anuladas | Não cadastrar. O simulado de prova antiga avisa quantas ficaram de fora. |
| 26/11/2026 | Stash `stash@{0}` | Apagado. |
| 26/11/2026 | Contexto para outra IA | Salvo em [CONTEXTO-IA.md](CONTEXTO-IA.md). |
| 26/11/2026 | `* text=auto eol=lf` no .gitattributes | Já estava lá; nada a fazer. |
| 26/11/2026 | Firebase (rules e admin) | Rules atualizadas; admin "parcialmente resolvido", segundo você. |
| 11/11/2026 | Commit das mudanças | Feito: 550ed8b (seu) + 75c45ed (os 664 arquivos novos que tinham ficado no stash), enviados ao GitHub. |
| 07/11/2026 | Onde fica o botão de tema | Só em Configurações (botão de sol/lua). |
| 06/11/2026 | Dificuldade das questões | Eu classifico agora; validar com alunos só quando você disser. |
| 06/11/2026 | Resumos das obras | Eu escrevo; por enquanto só a janela/livro, sem download. |
| 06/11/2026 | Pagamentos e planos | Não mexer. |
