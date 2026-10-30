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
│   └── simulado.css        ← Estilos dos simulados
│
├── js/
│   ├── app.js              ← Roteador por hash (#/) — ponto de entrada JS
│   ├── modulos.js          ← Lista editável dos 12 módulos
│   ├── dashboard.js        ← Renderiza o grid de cards
│   ├── questoes.js         ← Módulos de estudo por matéria (UI + lógica)
│   ├── simulado.js         ← Simulados: sorteio no formato ACAFE, prova, resultado e revisão
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

**Usuário:** o aluno digita um e-mail **ou** nome e sobrenome. Com nome, o usuário vira `primeironome_sobrenome` (ex.: "João da Silva" → `joao_silva`).

### Passo a passo (uma vez só)

1. Acesse https://console.firebase.google.com → **Adicionar projeto** (ex.: `reta-final-acafe`). O Google Analytics é opcional.
2. **Authentication** → *Vamos começar* → aba *Método de login* → ative **E-mail/senha**.
3. **Firestore Database** → *Criar banco de dados* → *modo de produção* → local **southamerica-east1 (São Paulo)**.
4. Firestore → aba **Regras** → apague o conteúdo, cole o do arquivo `firestore.rules` deste projeto → **Publicar**.
5. ⚙️ **Configurações do projeto** → *Seus apps* → ícone **Web `</>`** → registre o app → copie o objeto `firebaseConfig` e cole em `js/firebase-config.js` (no lugar de `null`, como no exemplo do próprio arquivo).
6. Rode `node servidor.js`, abra http://localhost:3000 e **crie a sua conta**.
7. Torne-se administrador: **Firestore → Iniciar coleção** → ID da coleção `admins` → ID do documento = **o seu nome de usuário** (ex.: `admin_acafe`, ou o seu e-mail se você se cadastrou com e-mail) → adicione um campo qualquer (ex.: `nome` = seu nome) → Salvar.
8. (Opcional) http://localhost:3000/#/admin → **Enviar questões para o banco** guarda uma cópia das questões no Firestore. O site não depende dela: as questões sempre vêm dos arquivos de `dados/`.

### Como os dados ficam no banco

| Coleção | Conteúdo | Quem acessa |
|---|---|---|
| `alunos/{usuario}` | perfil, respostas, simulados e histórico de cada aluno (ex.: `alunos/joao_silva`) | só o próprio aluno |
| `questoes/{id}` | banco de questões (`banco: 'provas'` ou `'estudo'`) | leitura: alunos logados • escrita: administradores |
| `admins/{usuario}` | quem pode enviar questões (ex.: `admins/admin_acafe`) | criado só pelo Console |

- O navegador mantém uma cópia local: o site continua funcionando sem internet e sincroniza quando a conexão volta (gravações agrupadas a cada 2 s).
- Na primeira vez que um aluno entra num navegador onde já estudava sem login, esse progresso é levado para a conta dele.
- **As questões vêm sempre dos arquivos de `dados/`.** A coleção `questoes` no Firestore é só uma cópia opcional (enviada pelo `#/admin`) e não é lida pelo site.
- **Senhas não podem ser vistas** — nem pelo administrador: o Firebase guarda só uma versão embaralhada (por segurança).
- **Esqueci a senha:** quem se cadastrou com e-mail usa "Esqueci minha senha" na tela de login. Para contas `nome_sobrenome`: no Console, **Authentication → Usuários** → menu ⋮ da conta → **Excluir conta**; o aluno cria a conta de novo com o **mesmo nome** e uma senha nova — o progresso continua, porque fica em `alunos/nome_sobrenome`.
- O plano gratuito (Spark) do Firebase é suficiente para uma turma.

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

- ✅ **Simulados das provas anteriores**: sorteia 63 questões misturando as edições, no formato da ACAFE (Português 10, Literatura 4, Língua Estrangeira 7 e 7 de cada uma das demais matérias), escolha de Espanhol ou Inglês, cronômetro de 5h, gabarito só ao finalizar, desempenho por matéria, revisão com explicações e histórico. Questões ainda não vistas têm prioridade
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

