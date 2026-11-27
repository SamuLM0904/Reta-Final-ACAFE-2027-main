# Identidade visual — Direção B "Plantão"

Especificação para reestilizar o Sapiens Med. Escolhida em 26/11/2026 entre três propostas.
Conceito: tema escuro para estudar à noite, **um único destaque** (âmbar), azul só para informação e links.
Sai o trio marinho + verde militar + dourado.

---

## 0. Regras para quem implementar (Claude Code)

1. **Trabalhar só no branch `samuel`.** Nada direto no `main`.
2. **Não mexer em lógica nem em dados.** Nada em `dados/`, `js/nuvem.js`, `js/armazenamento.js` ou `js/firebase-config.js`, nem nas regras de simulado e guia. Mudanças só em `css/`, nos trechos de HTML gerados pelos `js/*.js` que montam telas, em `index.html` (fontes e cor da barra) e em `js/tema.js` (cor da barra).
3. **Manter os nomes das variáveis CSS existentes.** Trocar só os valores (seção 2). Renomear (por exemplo `--cor-verde-militar` → `--cor-neutra-elevada`) fica para depois, num commit separado.
4. **Fazer em 3 fases, com um commit por fase** (seção 7). Testar no Laragon antes de cada push.
5. **Acessibilidade:** texto com contraste ≥ 4,5:1, alvos de toque ≥ 44 px, foco visível. Certo e errado nunca diferenciados só pela cor: sempre com ícone ✓ / ✕.

---

## 1. Tipografia

| Uso | Fonte | Pesos | Variável |
| --- | --- | --- | --- |
| Títulos, nome do site, cabeçalhos de seção | **Space Grotesk** | 500, 700 | `--fonte-titulo` (nova) |
| Todo o texto, inclusive enunciados e alternativas | **Inter** | 400, 500, 600, 700 | `--fonte-base` (existente) |
| Números: contagem, cronômetro, "Q.27", placares "0/42" | **JetBrains Mono** | 500, 700 | `--fonte-numero` (nova) |

No `<head>` do `index.html`, antes dos CSS:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
```

Em `css/variaveis.css` (bloco `:root`):

```css
--fonte-base:   'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
--fonte-titulo: 'Space Grotesk', 'Inter', system-ui, sans-serif;
--fonte-numero: 'JetBrains Mono', ui-monospace, 'Cascadia Mono', Consolas, monospace;
```

Aplicar `--fonte-titulo` em `h1`, `h2`, `h3` e no nome do site, e `--fonte-numero` com `font-variant-numeric: tabular-nums` em todo número que muda (contagem, cronômetro, placar). Escala de tamanhos e espaçamentos: manter a atual.

---

## 2. Cores — valores novos para as variáveis existentes

### 2.1 Tema escuro (padrão) — bloco `:root`

```css
/* Superfícies (antes: "marinho") */
--cor-marinho-base:        #0E1116;
--cor-marinho-card:        #161B22;
--cor-marinho-elevado:     #1D242E;
--cor-marinho-borda:       #2A323D;
--cor-marinho-borda-leve:  rgba(242, 177, 62, 0.18);

/* Neutros elevados (antes: "verde militar" — sai o verde) */
--cor-verde-militar:       #1D242E;
--cor-verde-militar-hover: #252D38;
--cor-verde-militar-suave: rgba(124, 196, 255, 0.10);
--cor-verde-militar-borda: #3A4450;

/* Destaque único: âmbar (antes: dourado fosco) */
--cor-dourado-fosco:       #F2B13E;
--cor-dourado-hover:       #F6C463;
--cor-dourado-suave:       rgba(242, 177, 62, 0.12);
--cor-dourado-borda:       rgba(242, 177, 62, 0.35);
--cor-dourado-brilho:      rgba(242, 177, 62, 0.25);

--cor-primaria:            #F2B13E;
--cor-primaria-hover:      #F6C463;
--cor-primaria-suave:      rgba(242, 177, 62, 0.12);
--cor-acento:              #7CC4FF;   /* azul: só informação e links */
--cor-acento-hover:        #A9D8FF;

--cor-fundo:               #0E1116;
--cor-fundo-card:          #161B22;
--cor-borda:               #2A323D;

--cor-texto:               #ECEFF3;
--cor-texto-suave:         #C9D1DA;
--cor-texto-fraco:         #9AA5B1;

--cor-certa:               #57D18B;
--cor-certa-fundo:         #13261C;
--cor-certa-borda:         #57D18B;
--cor-errada:              #FF8A7A;
--cor-errada-fundo:        #2D1715;
--cor-errada-borda:        #FF8A7A;
--cor-progresso:           #F2B13E;

--sombra-sm:               0 1px 2px rgba(0, 0, 0, 0.40);
--sombra-md:               0 4px 12px rgba(0, 0, 0, 0.35);
--sombra-lg:               0 10px 24px rgba(0, 0, 0, 0.45);
--sombra-hover:            0 0 0 1px #3A4450, 0 8px 20px rgba(0, 0, 0, 0.40);

--cor-texto-sobre-primaria: #1A1300;
--cor-card-hover:          #1D242E;
--cor-alternativa-marcada: #2A2416;
--gradiente-destaque:      #161B22;   /* sem gradiente: fundo liso */
--sombra-destaque:         0 0 0 1px #2A323D;
--sombra-cabecalho:        none;
--cor-caixa-numero:        #0E1116;
--cor-ajuda:               #2A323D;
--cor-ajuda-texto:         #C9D1DA;
--cor-ajuda-hover:         #3A4450;
--cor-ajuda-texto-hover:   #ECEFF3;
--cor-info:                #7CC4FF;
```

Raios: `--raio-sm: 8px`, `--raio-md: 12px`, `--raio-lg: 20px` (cards grandes), `--raio-pill` sem mudança.

### 2.2 Tema claro — bloco `:root[data-tema="claro"]`

O âmbar claro some no fundo branco, por isso no tema claro o destaque vira âmbar escuro.

```css
--cor-marinho-base:        #F5F6F8;
--cor-marinho-card:        #FFFFFF;
--cor-marinho-elevado:     #FFFFFF;
--cor-marinho-borda:       #D8DDE3;
--cor-marinho-borda-leve:  rgba(138, 90, 0, 0.18);

--cor-verde-militar:       #EEF1F4;
--cor-verde-militar-hover: #E4E8ED;
--cor-verde-militar-suave: rgba(31, 111, 184, 0.08);
--cor-verde-militar-borda: #C3CBD4;

--cor-dourado-fosco:       #8A5A00;
--cor-dourado-hover:       #704900;
--cor-dourado-suave:       rgba(138, 90, 0, 0.10);
--cor-dourado-borda:       rgba(138, 90, 0, 0.35);
--cor-dourado-brilho:      rgba(138, 90, 0, 0.20);

--cor-primaria:            #8A5A00;
--cor-primaria-hover:      #704900;
--cor-primaria-suave:      rgba(138, 90, 0, 0.10);
--cor-acento:              #1F6FB8;
--cor-acento-hover:        #185A96;

--cor-fundo:               #F5F6F8;
--cor-fundo-card:          #FFFFFF;
--cor-borda:               #D8DDE3;

--cor-texto:               #14181F;
--cor-texto-suave:         #333B46;
--cor-texto-fraco:         #5B6470;

--cor-certa:               #1E7F4F;
--cor-certa-fundo:         #E7F5EC;
--cor-certa-borda:         #1E7F4F;
--cor-errada:              #C0392B;
--cor-errada-fundo:        #FCECEA;
--cor-errada-borda:        #C0392B;
--cor-progresso:           #8A5A00;

--cor-texto-sobre-primaria: #FFFFFF;
--cor-card-hover:          #F0F2F5;
--cor-alternativa-marcada: #FBF1DC;
--gradiente-destaque:      #FFFFFF;
--sombra-destaque:         0 0 0 1px #D8DDE3;
--cor-caixa-numero:        #FFFFFF;
--cor-info:                #1F6FB8;
```

Sombras e cores de ajuda do tema claro: manter as atuais.

### 2.3 Cor da barra do navegador (celular)

- Em `js/tema.js`, `TEMAS`: escuro `corBarra: '#0E1116'`; claro continua `#F4F6F8` → trocar para `'#F5F6F8'`.
- No `<head>` do `index.html`: os mesmos valores no objeto `barras` e no `<meta name="theme-color">`.

### 2.4 Contrastes conferidos

| Texto | Fundo | Contraste |
| --- | --- | --- |
| #ECEFF3 (texto) | #161B22 (card) | 15,0 : 1 |
| #9AA5B1 (texto fraco) | #161B22 | 6,9 : 1 |
| #F2B13E (âmbar) | #161B22 | 9,2 : 1 |
| #1A1300 (texto no botão) | #F2B13E | 9,8 : 1 |
| #7CC4FF (link) | #161B22 | 9,2 : 1 |
| #8A5A00 (âmbar, tema claro) | #FFFFFF | 5,9 : 1 |
| #5B6470 (texto fraco, claro) | #FFFFFF | 6,0 : 1 |

---

## 3. Logo

Círculo com traçado de batimento cardíaco (ECG), em âmbar, com o nome ao lado em Space Grotesk 700, caixa alta: **SAPIENS MED**. Subtítulo em Inter 500, texto fraco: "ACAFE 2027 · Medicina".

```html
<svg width="36" height="36" viewBox="0 0 56 56" aria-hidden="true">
  <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" stroke-width="3"/>
  <path d="M10 30 H20 L24 19 L30 39 L34 27 H46" fill="none" stroke="currentColor"
        stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

Usar com `color: var(--cor-primaria)`, para o logo seguir o tema. Tamanhos: 36 px no menu, 56 px na tela de login.

---

## 4. Componentes

| Componente | Especificação |
| --- | --- |
| **Botão principal** | Fundo `--cor-primaria`, texto `--cor-texto-sobre-primaria`, Inter 700 15–16 px, altura mínima 48 px, padding horizontal 24 px, raio 12 px. Hover: `--cor-primaria-hover`. Um só por tela. |
| **Botão secundário** | Fundo transparente, borda 1 px `--cor-verde-militar-borda`, texto `--cor-texto`, Inter 600. |
| **Card** | Fundo `--cor-fundo-card`, borda 1 px `--cor-borda`, raio 20 px (cards grandes) ou 12–14 px (itens de lista), sem gradiente, sombra no máximo `--sombra-sm`. |
| **Chip / etiqueta** | Raio pill, 6×12 px, 13 px Inter 600. "Cai muito": fundo `--cor-dourado-suave` e texto `--cor-primaria`. Matéria: fundo `--cor-verde-militar-suave` e texto `--cor-acento`. |
| **Alternativa — neutra** | Fundo `--cor-fundo-card`, borda 1 px `--cor-borda`, raio 12 px, altura mínima 52 px. Letra numa caixa 28×28 px, raio 8, fundo `--cor-marinho-elevado`, Inter 700. |
| **Alternativa — marcada** | Borda 2 px `--cor-primaria`, fundo `--cor-alternativa-marcada`. Caixa da letra com fundo `--cor-primaria` e letra `--cor-texto-sobre-primaria`. |
| **Alternativa — correta** | Borda 2 px `--cor-certa-borda`, fundo `--cor-certa-fundo`. A caixa da letra vira ícone ✓ sobre `--cor-certa`. |
| **Alternativa — errada** | Borda 2 px `--cor-errada-borda`, fundo `--cor-errada-fundo`. A caixa da letra vira ícone ✕ sobre `--cor-errada`. |
| **Contagem regressiva** | Formato compacto (ex.: "15d 12h") em `--fonte-numero` 700, cor `--cor-primaria`, com uma linha com a data da prova e o horário dos portões em texto fraco (os valores vêm de `js/contagem.js`). Sem as quatro caixinhas separadas. |
| **Barra de progresso** | Altura 6 px, raio 3, trilho `--cor-marinho-borda`, preenchimento `--cor-progresso`. |
| **Foco** | `outline: 2px solid var(--cor-acento); outline-offset: 2px` em todo elemento clicável. |

---

## 5. Layout (fase 3)

### 5.1 Navegação

- **Desktop (≥ 1024 px):** menu lateral fixo à esquerda, com 248 px de largura, fundo `#12161C` no escuro (`--cor-marinho-card` no claro) e borda direita. De cima para baixo: logo; links Início, Guia de estudos, Simulados, Correção de erros, Leituras obrigatórias e Configurações (altura mínima 44 px, raio 10, item ativo com fundo `--cor-marinho-elevado`); no rodapé do menu, a contagem regressiva compacta.
- **Celular (< 1024 px):** o menu lateral vira barra superior com logo e botão de menu. A contagem vai para o topo da tela inicial.
- As rotas (`#/`, `#/guia`, `#/simulados`, `#/revisao`…) continuam iguais. Só muda onde os links ficam.

### 5.2 Tela inicial (`#/`)

Hoje são 12 cards do mesmo tamanho. A nova ordem é:

1. **Saudação + data:** ex.: "Sábado, 7 de novembro · bloco 3 de 5" e, embaixo, "Boa noite, {nome}" em Space Grotesk 34 px.
2. **Card "Próximo bloco"** (o maior da tela): etiqueta em âmbar "PRÓXIMO BLOCO · 75 MIN", matéria e assunto em Space Grotesk 28 px, uma linha de descrição, botão principal "Começar bloco" e botão secundário "Ver o dia todo". Os dados vêm do guia já existente.
   - **Sem guia criado ainda:** o mesmo card mostra "Monte seu guia de estudos" com botão para `#/guia`.
3. **Dois cards lado a lado:**
   - **Simulados:** atalhos para prova completa (63 questões, 5h), mini simulado (14) e por matéria, com link "Ver resultados".
   - **Matérias:** lista compacta com uma linha por matéria (nome, barra de progresso, "feitas/total" em fonte mono). Clicar abre a matéria.
4. Leituras obrigatórias e o restante entram pelo menu lateral, não como cards.

---

## 6. O que NÃO fazer

- Gradientes de fundo, brilho dourado, sombras com cor
- Verde como cor de marca (verde agora significa só "acertou")
- Mais de um botão principal âmbar por tela
- Emoji como ícone (manter os SVG de `js/icones.js`)
- Mudar textos, rotas, regras de simulado ou dados

---

## 7. Ordem de implementação

| Fase | O que muda | Arquivos | Risco |
| --- | --- | --- | --- |
| 1 | Fontes + valores das variáveis (seções 1 e 2) | `index.html`, `css/variaveis.css`, `js/tema.js` | Baixo: só valores |
| 2 | Componentes: botões, cards, alternativas, chips, contagem, logo (seções 3 e 4) | `css/*.css`, trechos de HTML dos `js/*.js` que montam essas peças | Médio |
| 3 | Menu lateral + nova tela inicial (seção 5) | `js/app.js` (cabeçalho), `js/dashboard.js`, `css/base.css`, `css/dashboard.css` | Maior: mexe na estrutura |

Depois de cada fase: testar no Laragon (tema escuro e claro, celular com 390 px de largura, uma questão marcada, uma certa e uma errada), commit e push no `samuel`, e conferir no preview `samuel--acafe-reta-final.netlify.app`.
