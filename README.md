# Reta Final ACAFE 2027

Plataforma de estudos para o vestibular de **Medicina da ACAFE 2027**.  
**Simulados** gerados a partir das provas anteriores da ACAFE (formato da prova real, Espanhol ou Inglês) e **módulos de estudo por matéria** (com questões de outras provas, a cadastrar).

---

## Como abrir o site

1. Abra um terminal na pasta do projeto e rode `node servidor.js`.
2. Abra http://localhost:3000 no navegador.
3. Para parar o servidor: `Ctrl + C`.

> Abrir o `index.html` com duplo clique não funciona no Chrome/Edge: eles bloqueiam módulos JavaScript em arquivos `file://`.

---

## Estrutura de arquivos

```
Reta Final ACAFE 2027/
├── index.html              ← Ponto de entrada (abra este)
│
├── css/
│   ├── variaveis.css       ← Cores, espaçamentos, raios, sombras (tokens de design)
│   ├── base.css            ← Reset, tipografia e componentes globais
│   ├── dashboard.css       ← Estilos da tela inicial (grid de cards)
│   ├── questoes.css        ← Estilos do motor de questões
│   ├── simulado.css        ← Estilos dos simulados
│   └── guia.css            ← Estilos do Guia de Estudos
│
├── js/
│   ├── app.js              ← Roteador por hash (#/) — ponto de entrada JS
│   ├── modulos.js          ← Lista editável dos 12 módulos
│   ├── dashboard.js        ← Renderiza o grid de cards
│   ├── questoes.js         ← Módulos de estudo por matéria (UI + lógica)
│   ├── simulado.js         ← Simulados: sorteio no formato ACAFE, prova, resultado e revisão
│   ├── guia.js             ← Guia de Estudos: questionário, plano do dia, chat, desempenho, reset (admin)
│   ├── guia-plano.js       ← Cálculos do guia (prioridades, blocos, simulado semanal, impacto das mudanças)
│   ├── guia-chat.js        ← Entende os pedidos do chat ("vou viajar sexta") e os transforma em mudanças
│   ├── confirmar.js        ← Janela de confirmação no visual do site (no lugar do confirm do navegador)
│   ├── render-questao.js   ← Peças de exibição de questão (imagens, alternativas, feedback)
│   ├── contagem.js         ← Contagem regressiva para a prova
│   ├── firebase-config.js  ← Chaves do projeto Firebase (null = modo local)
│   ├── nuvem.js            ← Login e banco de dados (Firebase Auth + Firestore)
│   ├── login.js            ← Tela de entrada (usuário e senha)
│   ├── armazenamento.js    ← Leitura/gravação no localStorage
│   ├── icones.js           ← Biblioteca de ícones SVG inline
│   └── utils.js            ← Funções utilitárias (slugify, escape, etc.)
│
├── dados/
│   ├── provas-anteriores.js ← Cria o banco das provas anteriores (QUESTOES_PROVAS) — usado SÓ nos simulados
│   ├── provas/              ← UM ARQUIVO POR PROVA (ex.: 2026-inverno.js), cada um acrescenta as suas questões
│   └── questoes.js          ← Questões de estudo por matéria (de outras provas — a cadastrar)
│
├── imagens/                ← Prints (.webp) das imagens reais das provas
│
├── ferramentas/
│   └── print-imagem.py     ← Gera o print .webp de uma imagem do PDF
│
├── Provas/                 ← PDFs das provas (e Gabaritos/ oficiais)
│
├── firestore.rules         ← Regras de segurança do banco (cole no Console do Firebase)
├── firebase.json           ← Configuração do Firebase CLI (opcional)
│
└── README.md               ← Este arquivo
```

---

## Banco de dados (Firebase)

Com o Firebase ligado, cada aluno entra com **usuário e senha** e todo o progresso (respostas, simulados, histórico) fica salvo na nuvem — o aluno continua de onde parou em qualquer computador ou celular. O banco de questões também passa a ficar no Firestore. **Enquanto `js/firebase-config.js` estiver com `null`, o site funciona no modo local**, sem login (dados só neste navegador).

**Login:** o aluno se cadastra com **usuário e senha** (ex.: "João da Silva" → usuário `joao_silva`) e entra com o **usuário ou com o e-mail de recuperação**. O **e-mail é opcional** e serve para **recuperar a senha** ("Esqueci minha senha") e o **usuário** ("Esqueci meu usuário", que mostra o usuário ligado ao e-mail). Em ⚙️ Configurações, o lápis ✏️ ao lado de cada dado altera o nome completo, o usuário (os dados do aluno passam para o novo nome) e o e-mail de recuperação. Quem não cadastra e-mail é avisado, no cadastro e em Configurações, de que **não conseguirá recuperar a senha sozinho**; pode cadastrar o e-mail depois em ⚙️ Configurações (com confirmação por link).
Por dentro, o Firebase exige que toda conta tenha um identificador no formato de e-mail: com e-mail de recuperação, é o próprio e-mail do aluno; sem ele, é um identificador interno (`usuario@alunos.retafinal.app`) que fica invisível e nunca recebe mensagens.

### Passo a passo (uma vez só)

1. Acesse https://console.firebase.google.com → **Adicionar projeto** (ex.: `reta-final-acafe`). O Google Analytics é opcional.
2. **Authentication** → *Vamos começar* → aba *Método de login* → ative **E-mail/senha**.
3. **Firestore Database** → *Criar banco de dados* → *modo de produção* → local **southamerica-east1 (São Paulo)**.
4. Firestore → aba **Regras** → apague o conteúdo, cole o do arquivo `firestore.rules` deste projeto → **Publicar**.
5. ⚙️ **Configurações do projeto** → *Seus apps* → ícone **Web `</>`** → registre o app → copie o objeto `firebaseConfig` e cole em `js/firebase-config.js` (no lugar de `null`, como no exemplo do próprio arquivo).
6. Rode `node servidor.js`, abra http://localhost:3000 e **crie a sua conta**.
7. Torne-se administrador (veja **Administradores** abaixo).
8. (Opcional) http://localhost:3000/#/admin → **Enviar questões para o banco** guarda uma cópia das questões no Firestore. O site não depende dela: as questões sempre vêm dos arquivos de `dados/`.

### Administradores

Administradores veem, no botão de **engrenagem** (⚙️ Configurações, no canto superior direito), a opção **Resetar a memória de um aluno**. Alunos comuns veem ali só **Sair da conta**.

**Para tornar alguém administrador** (vale para você e para quantos quiser):

1. A pessoa **cria a conta normalmente** no site (com nome e sobrenome ou e-mail). Faça sempre nesta ordem: primeiro a conta, depois o admin.
2. No Console do Firebase → **Authentication → Usuários**: ache a conta e copie o **UID do usuário** (código como `aB3dE5...`). Dica: o UID de cada usuário também está em **Firestore → `usuarios` → documento com o nome de usuário → campo `uid`**.
3. **Firestore Database → coleção `admins`** → *Adicionar documento*:
   - **ID do documento** = o **UID** copiado no passo 2;
   - campos para organizar (recomendado): `usuario` (ex.: "maria_souza"), `nome` (ex.: "Maria Souza"), `funcao` (ex.: "professora"), `adicionadoEm` (data).
4. A pessoa recarrega o site: a opção de administração aparece na engrenagem.

**Para tirar o acesso:** apague o documento dela na coleção `admins`. **Para ver quem é admin:** a coleção `admins` lista todos.

**Por que ninguém consegue se tornar admin sozinho:**
- A coleção `admins` **não pode ser alterada pelo site** (regra `allow write: if false`): só pelo Console do Firebase, que só quem tem acesso ao projeto abre. Mantenha o Console restrito à sua conta Google (⚙️ Configurações do projeto → **Usuários e permissões**: não adicione outras pessoas, ou dê só "Leitor").
- O documento do admin usa o **UID** da conta, que é gerado pelo Firebase e não se repete: mesmo que alguém crie uma conta com o mesmo nome de um admin, essa conta tem outro UID e **não** vira admin.
- Se apagar e recriar a conta de um admin, crie de novo o documento em `admins` com o UID novo (e apague o antigo).

### Como os dados ficam no banco

| Coleção | Conteúdo | Quem acessa |
|---|---|---|
| `alunos/{usuario}` | perfil, respostas, simulados, memória de erros e acertos, guia de estudos (ex.: `alunos/joao_silva`) | o próprio aluno • administradores leem e podem resetar a memória |
| `questoes/{id}` | banco de questões (`banco: 'provas'` ou `'estudo'`) | leitura: alunos logados • escrita: administradores |
| `usuarios/{usuario}` | liga o usuário à conta: `{ uid, email, temEmail }` (usado para entrar pelo usuário) | lido por nome exato antes do login; cada um cria o seu |
| `contas/{uid}` | liga a conta ao usuário: `{ usuario }` | só o dono |
| `emails/{email}` | índice para "Esqueci meu usuário": `{ usuario, uid }` (só e-mails de recuperação) | lido por e-mail exato; cada um grava o seu |
| `admins/{uid}` | administradores (ID = UID da conta): `{ usuario, nome, funcao }` | criado só pelo Console |

- O navegador mantém uma cópia local: o site continua funcionando sem internet e sincroniza quando a conexão volta (gravações agrupadas a cada 2 s).
- Na primeira vez que um aluno entra num navegador onde já estudava sem login, esse progresso é levado para a conta dele.
- **As questões vêm sempre dos arquivos de `dados/`.** A coleção `questoes` no Firestore é só uma cópia opcional (enviada pelo `#/admin`) e não é lida pelo site.
- **Senhas não podem ser vistas** — nem pelo administrador: o Firebase guarda só uma versão embaralhada (por segurança).
- **Esqueci a senha:** quem tem e-mail de recuperação usa "Esqueci minha senha" (na tela de entrada ou em Configurações) e recebe um link. **Sem e-mail de recuperação** não há como recuperar sozinho: o administrador, no Console, apaga a conta em **Authentication → Usuários** (menu ⋮ → Excluir conta) e o documento em **Firestore → `usuarios` → nome de usuário**; o aluno cria a conta de novo com o **mesmo usuário** e uma senha nova — o progresso continua, porque fica em `alunos/nome_de_usuario`.
- O plano gratuito (Spark) do Firebase é suficiente para uma turma.
- **Depois de atualizar o `firestore.rules`** (ex.: a regra que deixa o administrador resetar a memória de um aluno no Guia), cole o arquivo de novo no Console → Firestore → **Regras** → **Publicar**.

---

## Como adicionar uma questão nova

- **Questão de prova anterior da ACAFE** → no arquivo da prova, `dados/provas/<ano>-<inverno|verao>.js` (ex.: `dados/provas/2026-inverno.js`), dentro de `QUESTOES_PROVAS.push(...)`. **Prova nova = arquivo novo** (copie a estrutura de um existente) **+ uma linha `<script src="dados/provas/<arquivo>.js">` no `index.html`**. Ela passa a entrar automaticamente no sorteio dos simulados. Cadastre também as questões de **Inglês** (15 a 21, `disciplina: 'Inglês'`, id com `-ing-`) além das de Espanhol. Questões anuladas não entram.
- **Questão de estudo (outras provas)** → `dados/questoes.js`, array `QUESTOES`. Ela aparece no módulo da matéria (campo `disciplina`).

O formato do objeto é o mesmo nos dois arquivos:

### Formato completo

```js
{
  id: "2024-1-bio-002",          // ID único. Convenção: "ano-semestre-disciplina-numero"
  prova: "ACAFE 2024/1",         // Rótulo da prova (exibido no cabeçalho da questão)
  disciplina: "Biologia",        // DEVE casar com o campo "disciplina" em js/modulos.js
  subtopico: "Genética",         // Assunto específico (exibido no cabeçalho)
  numeroOriginal: 5,             // Número da questão na prova original
  enunciado: `
    Texto do enunciado aqui.
    Pode conter HTML simples: <b>, <i>, <br>, <sup>, <sub>.
  `,
  imagem: null,                  // null = sem imagem. Uma: "imagens/arquivo.webp". Várias: ["imagens/a.webp", "imagens/b.webp"]
  legendaAcima: "FIGURA 1",      // (opcional) texto ACIMA de cada imagem, como na prova (lista, se houver várias imagens)
  legenda: "FIGURA 3",           // (opcional) texto ABAIXO de cada imagem — rótulo/fonte, como na prova (lista, se houver várias)
  legendaGeral: "Fonte: ... FIGURA 7", // (opcional) texto abaixo do conjunto de imagens
  textoApoio: TEXTO_X,           // (opcional) texto-base compartilhado por várias questões, definido como `var` no topo do arquivo de dados
  alternativas: [
    {
      letra: "A",
      texto: "Primeira alternativa.",
      explicacao: "Explicação de por que esta alternativa está correta ou incorreta."
    },
    {
      letra: "B",
      texto: "Segunda alternativa.",
      explicacao: "Explicação da alternativa B."
    },
    // ... até 5 alternativas (A a E)
  ],
  gabarito: "A",                 // Letra da alternativa correta (maiúscula)
}
```

### Regras importantes

| Regra | Detalhe |
|-------|---------|
| **`id` único** | Nunca repita um `id`. Se dois objetos tiverem o mesmo `id`, o progresso será compartilhado entre eles. |
| **`disciplina` correta** | O valor deve ser idêntico ao campo `disciplina` do módulo em `js/modulos.js`. A comparação ignora acentos e maiúsculas, mas evite erros de digitação. |
| **`gabarito` em maiúscula** | Use `"A"`, `"B"`, `"C"`, `"D"` ou `"E"`. |
| **Alternativas em ordem** | Não embaralhe — as alternativas são exibidas na ordem do array. |
| **HTML no enunciado** | Use apenas tags simples: `<b>`, `<i>`, `<br>`, `<sup>`, `<sub>`. Evite `<script>` ou atributos `onclick`. |
| **Imagem** | Salve o arquivo em `imagens/` e coloque o caminho relativo em `imagem` (ou uma lista de caminhos). A imagem é sempre exibida **acima** do texto. Use sempre **WebP** e **apenas o print da imagem real do PDF** — nunca redesenhe nem crie imagens. Gere com `ferramentas/print-imagem.py` (recorta justo na imagem, na resolução nativa, e só amplia/aumenta a nitidez se ela for pequena). Textos que acompanham a imagem (textos-base, rótulo "FIGURA N", fonte) vão como **texto** em `textoApoio`/`legendaAcima`/`legenda`/`legendaGeral`, nunca como print — **com o texto exato e na mesma posição (acima/abaixo) da prova**. |

### Exemplo mínimo (sem imagem, duas alternativas)

```js
{
  id: "2023-2-qui-001",
  prova: "ACAFE 2023/2",
  disciplina: "Química",
  subtopico: "Tabela Periódica",
  numeroOriginal: 3,
  enunciado: "Qual elemento possui número atômico 8?",
  imagem: null,
  alternativas: [
    { letra: "A", texto: "Nitrogênio (N)", explicacao: "Nitrogênio tem Z = 7." },
    { letra: "B", texto: "Oxigênio (O)",   explicacao: "Correto! Oxigênio tem Z = 8." },
  ],
  gabarito: "B",
}
```

---

## Como adicionar um módulo novo

Edite `js/modulos.js` e adicione um objeto ao array `MODULOS`:

```js
{
  id: 'filosofia',             // slug único sem acento (usado na URL)
  titulo: 'Questões de Filosofia',
  tipo: 'disciplina',          // "disciplina" (questões de estudo da matéria) | "simulados" | "em-breve"
  disciplina: 'Filosofia',     // deve casar com o campo disciplina nas questões
  icone: 'book-open',          // nome do ícone em js/icones.js
  status: 'ativo',             // "ativo" | "em-breve"
}
```

Para ver os ícones disponíveis, abra `js/icones.js` e consulte as chaves do objeto `ICONES`.

---

## Funcionalidades

- ✅ **Guia de Estudos** (`#/guia`): 8 perguntas na primeira vez (tempo por dia e no fim de semana, tamanho do bloco, matérias difíceis, idioma, meta de acertos, provas anteriores, cursinho) e um **cronograma diário em blocos com pausas**. Cada bloco recebe uma matéria pela prioridade: peso na prova × dificuldade marcada × taxa de erro recente (memória de erros e acertos dos simulados e das questões de estudo) × tempo sem praticar, com o **foco nos conteúdos com mais erros**. Um simulado completo por semana no fim de semana. O plano do dia fica fixo durante o dia; botões de "hoje vou estudar mais/menos" em cada dia; blocos marcados como feitos. **Chat** (texto ou voz, pelo reconhecimento de voz do navegador): o aluno pede mudanças ("vou viajar de sexta a domingo", "simulado do cursinho no sábado") e o guia mostra se faz sentido e as consequências até a prova (tempo perdido, matérias afetadas, simulados, sugestão de compensação) antes de aplicar. O reset da memória de erros e acertos de um aluno fica na engrenagem (⚙️ Configurações), só para administradores, com confirmação dupla

- ✅ **Simulados das provas anteriores**: sorteia 63 questões misturando as edições, no formato da ACAFE (Português 10, Literatura 4, Língua Estrangeira 7 e 7 de cada uma das demais matérias), escolha de Espanhol ou Inglês, cronômetro de 5h, gabarito só ao finalizar, desempenho por matéria, revisão com explicações e histórico. Questões ainda não vistas têm prioridade. **Questões feitas, por prova** (`#/simulados/feitas`): cada prova anterior com os números originais, mostrando o que o aluno já fez nos simulados aleatórios (acerto, erro, em branco, não feita) e abrindo a revisão de cada questão
- ✅ **Dashboard** com 12 cards, progresso salvo automaticamente
- ✅ **Motor de questões** com feedback visual (acerto/erro + explicações)
- ✅ **Resultado final** com lista das questões erradas
- ✅ **"Refazer só as que errei"**
- ✅ **Progresso no localStorage** (persiste ao fechar e reabrir o navegador)
- ✅ **100% responsivo** — Mobile-First (2 / 3 / 4 colunas)
- ✅ **Tema claro e escuro** (segue `prefers-color-scheme` do sistema)
- ✅ **Acessível** — alvos de toque ≥ 44px, `:focus-visible`, ARIA, contraste
- ✅ **`prefers-reduced-motion`** respeitado

---

## Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Marcação | HTML5 semântico |
| Estilos | CSS puro com variáveis CSS (Custom Properties) |
| Scripts | JavaScript puro em módulos ES (`type="module"`) |
| Persistência | `localStorage` (sem backend) |
| Ícones | SVG inline desenhados à mão (estilo Lucide/Feather) |

---

## Licença

Uso educacional pessoal. Os textos das questões pertencem à ACAFE e são reproduzidos para fins de estudo.

