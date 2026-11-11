# Dúvidas do cadastro das provas

Registro das dúvidas que surgem ao cadastrar as questões das provas da ACAFE
(`dados/provas/<ano>-<inverno|verao>.js`) e de como cada uma foi resolvida.

**Como funciona**

- Dúvida real (gabarito ambíguo, questão com erro, figura ou texto pouco claro):
  o Claude pergunta antes de decidir e anota aqui em **Em aberto**. Quando você
  responder, ela passa para **Resolvidas**, com a decisão.
- Conflito claro, quando a letra do gabarito contradiz a própria justificativa da
  prova: segue-se o conteúdo, a decisão é anotada aqui e você é avisado.
- Erros da prova que não mudam a resposta (digitação, justificativa com letra
  trocada etc.) ficam só no **Registro por prova**, no fim do arquivo.

## Em aberto

Perguntas feitas nas conversas anteriores que ficaram sem resposta. Enquanto isso,
vale o que está na coluna "Como está hoje".

| Prova | Questão | Dúvida | Como está hoje |
|---|---|---|---|
| 2026/Inverno | 41 | A tabela de combustão é uma imagem dentro do PDF. Transcrever os valores numa tabela de texto no site? | Print da imagem original. |
| 2025/Inverno | 31 | A tabela de risco é texto no PDF. Quando ela foi cadastrada o site ainda não tinha tabelas; hoje tem (`tabela-prova`). Transcrever? | Recorte da página. |
| 2025/Inverno | 05 | O enunciado diz "racionalização (linha 20)", mas na numeração do Texto 1 a palavra está na linha 21. | Mantidos o "linha 20" do enunciado e a numeração do PDF. |
| 2025/Verão | 33 | A resolução oficial divide 4500 J por 9000 cal sem converter joule em caloria. Convertendo, dá cerca de 120–125 mg, valor que não está entre as alternativas. A questão é inconsistente. | Gabarito oficial **D** (500 mg), com um aviso na explicação. |
| Todas | Anuladas | Questões anuladas pela ACAFE: deixar de fora ou cadastrar com o aviso "anulada"? (2021/Inv 14, 35, 48, 49 • 2021/Ver 12 • 2022/Ver 31, 32, 33 • 2023/Ver 04, 08, 53) | Ficam de fora. |

### Conteúdos do material ("TODOS OS CONTEÚDOS POR LIVRO.pdf")

As questões de Português, Matemática, Física, Química, Biologia, História e Geografia estão ligadas ao capítulo
que cobram (campo `conteudo`, lista em `dados/conteudos.js`).

**Pendente — aguardando você:** Literatura, Espanhol e Inglês não estão no PDF. Quando você mandar a lista de
conteúdos dessas matérias, as questões delas passam a usar os capítulos. Até lá, usam o subtópico antigo.

**Para você conferir — capítulos complementares que eu criei** (não estão no material; aparecem no filtro como
"Complementar: …", no fim da lista da matéria):

| Capítulo criado | Questões | Antes |
|---|---|---|
| Física — Grandezas, Unidades e Análise Dimensional | 2024/Ver Q30 | Cinemática (aproximação) |
| Química — Bioquímica (Carboidratos, Proteínas e Enzimas) | 2024/Inv Q37 • 2025/Inv Q40 | Polímeros (aproximação) |
| Biologia — Saúde Pública, Saneamento e Epidemiologia | 2024/Ver Q46 | Influência Antrópica (aproximação) |
| Geografia — Geografia de Santa Catarina | 2025/Ver Q59 • 2026/Inv Q60 • 2026/Ver Q62 | sem capítulo / Transportes |
| Geografia — Regionalização do Brasil | 2025/Ver Q58 | sem capítulo |
| Geografia — Geopolítica e Regiões do Mundo | 2024/Inv Q58 (Oriente Médio) • 2026/Inv Q62 (América do Sul) | sem capítulo |
| História — História da Medicina, da Saúde e da Ciência | 2025/Inv Q56 • 2025/Ver Q53 e Q56 • 2026/Inv Q54 • 2026/Ver Q53 | sem capítulo / Segundo Reinado |
| História — Primeira Revolução Industrial | 2026/Ver Q55 | Segunda Revolução Industrial (aproximação) |

**Capítulos repetidos da Química — juntados em um só** (o outro lugar do livro aparece como "também em"):
- "Interações Intermoleculares" (Livro 1, Frente B, Cap. 5) e "Forças Intermoleculares" (Livro 2, Frente A, Cap. 1):
  é o mesmo assunto → um conteúdo só, "Forças Intermoleculares".
- "Teorias Modernas Ácido-Base" (Livro 2, Frente A, Cap. 6 e Livro 3, Frente B, Cap. 1): mesmas teorias
  (Arrhenius, Brønsted-Lowry, Lewis); no Livro 3 elas aparecem na frente de Orgânica, aplicadas aos compostos
  orgânicos → um conteúdo só. Nenhuma questão do banco estava no capítulo do Livro 3.

## Resolvidas

| Prova | Questão | Dúvida | Decisão | Data |
|---|---|---|---|---|
| 2024/Inverno | 09 | Pede a conclusão INCORRETA. O PDF dá a letra A, mas a alternativa marcada em vermelho e a justificativa da própria banca apontam a D ("bolhas de filtro"). | **D** (aprovado por você) | 30/10/2026 |
| 2024/Verão | 21 (Inglês) | Pede a frase INCORRETA. O PDF dá a letra A, mas a justificativa aponta a D ("I'll graduate" deveria ser "I'll have graduated"). | **D** (aprovado por você) | 30/10/2026 |
| 2026/Inverno | 04 | A questão cita a "linha 5" da crônica, que estava sem numeração. | Numerar as linhas do Texto 1 como no PDF (feito). | 30/10/2026 |
| Sem comentário | — | 2021/Inv, 2021/Ver, 2022/Ver e 2023/Ver não trazem justificativa. Como fazer as explicações? | Procurar antes versões comentadas na internet; só escrever as explicações se não achar, sempre pelo gabarito oficial (`Provas/Gabaritos/`). | 30/10/2026 |

## Registro por prova

Erros e imprecisões do PDF encontrados no cadastro. Nenhum muda o gabarito, a não
ser os já listados acima.

### 2026/Inverno
- **Q35:** a justificativa oficial diz que 10 dB equivalem a "100 vezes" a intensidade; o certo é 10 vezes. A explicação usa a conta correta (gabarito B mantido).

### 2026/Verão
- **Q30 e Q36:** as fórmulas são imagens pequenas no meio do enunciado. Foram digitadas, idênticas ao PDF.
- **Q59:** a linha de fonte vem colada no mapa; foi recortada e passou para a legenda.
- **Justificativas com erro** (explicações corrigidas): Q33 diz que a velocidade "cai para 1 m/s" (é 0,1 m/s); Q26 C escreve g⁻¹(x) = (x−8)/2 (é /4); Q51 A diz "a Inglaterra não participou", mas a alternativa fala da França; Q07 chama a alternativa A de "D"; Q12 tem o campo "Correta:" vazio.
- **Erros de digitação mantidos**, como no PDF: "comfirmados", "confictuosa", "informacioes", "esse contexto", "Dalas", "Ela Descobriu".

### 2025/Inverno
- **Q22 e Q26:** as figuras não têm rótulo na prova e ficaram sem legenda.
- **Justificativas com erro** (explicações corrigidas): Inglês Q18 rotula como "Em D" a explicação da alternativa A; Inglês Q19 troca as traduções de A e B; Q38 só explica a certa.
- **Q63 B:** a justificativa do PDF está cortada; foi completada.

### 2025/Verão
- **Q07:** a justificativa fala em "linha 3", mas a pergunta é sobre a linha 4. Ela também cita uma opção "às – a" que não existe e não comenta a D.
- **Q51:** a justificativa diz que o Japão lutou ao lado da "Tríplice Aliança"; foi do lado vencedor (Entente). Corrigido na explicação.
- **Q53 C:** a justificativa diz "século XV" em vez de XIX. **Q61 A:** diz "apenas circulação de mercadorias", mas a alternativa fala em "informação". Explicações ajustadas.
- **Erros de digitação mantidos:** "Vendededor" (Q14), "Tocantis" (Q58 A), "medicamente" (Q23).

### 2024/Inverno
- **Q35:** os "Dados" da justificativa não batem com o enunciado, mas o cálculo usa os valores do enunciado e chega aos mesmos 18 cm. Foram usados os do enunciado.
- **Justificativas com erro** (não repetidos): Q43 fala em "proteína com ação no estômago" para a catalase; Q08 traz "diretor do VICE / Secretária de Educação"; Q09 diz "chá de inhame" quando a imagem mostra suco.
- **Erros de digitação mantidos:** "UTM -3" (Q60), "Automatic Emergrncy Braking" (Q30), "Robert Brow" (Q44).

### 2024/Verão
- **Q07:** o enunciado diz "Com base no texto 4", mas a questão é sobre a tabela, que é o Texto 3. Mantido o texto do PDF.
- **Q27:** as letras da justificativa estão trocadas (o "A)" explica a D e vice-versa). Cada explicação foi para a alternativa certa.
- **Q58 e Q48:** justificativas confusas; as explicações foram reescritas de forma correta.
- **Q55:** o item II aparece duplicado no PDF ("II. II."); transcrito uma vez só.

## Questões de estudo — outros vestibulares (cadastro de 07–08/11/2026)

1.238 questões em `dados/estudo/` (ENEM 313, UDESC 201, Unesp 166, UFPR 164, Fuvest 155, Unicamp 126,
PUCPR 113). Todas conferidas pelo `ferramentas/verificar-estudo.js` contra o gabarito oficial
(JSONs em `Provas/Outros/<VESTIBULAR>/`). Regra usada: **gabarito oficial manda**; os casos abaixo
ficaram com a letra oficial e estão aqui para você decidir.

### Gabaritos oficiais discutíveis (mantidos)

| Questão | Oficial | Por que é discutível |
|---|---|---|
| UDESC 2026 vespertino Q28 | D | A E (fissão espontânea) também parece correta. |
| UDESC 2026 vespertino Q26 | E | Atribui ao modelo de Bohr a organização em subníveis. |
| UDESC 2026 vespertino Q36 | D | O item IV (Custódio de Melo e a Revolta da Armada) parece verdadeiro. |
| UDESC 2025 vespertino Q28 | E | Entalpia × temperatura, discutível no nível do ensino médio. |
| UDESC 2025 vespertino Q37 | C | A D também parece verdadeira. |
| UDESC 2025 vespertino Q46 | E | A A é defensável. |
| UDESC 2025 vespertino Q50 | B | A afirmação IV é praticamente verdadeira em números. |
| UDESC 2025 matutino Q03 | B | Só fecha supondo 0 ∉ ℕ. |
| UDESC 2025 matutino Q43 | — | O gabarito toma "animais" no sentido literal (na crônica são os pobres). |
| UDESC 2026 matutino Ing Q35 | A | Usa "explored" (falso cognato) no sentido de "exploited". |
| UDESC 2026 matutino Q18 | A | "Exclusivamente pela picada de carrapatos". |
| UFPR 2025 Esp Q85 | C | A D também é defensável pelo texto. |
| PUCPR 2027/1 Q57 | A | "Redução significativa" × texto que fala em melhora "slow" e "fragile". |
| Unesp 2026 Q64 | B | Não deu para confirmar a contagem da teia pela figura. |
| Unesp 2026 Q54 | E | Alternativa com redação estranha sobre radar. |
| Unesp 2025 Q27 | E | Tirinha um pouco ambígua. |
| Unicamp 2026 Q3 | C | A D também é plausível. |

### Classificação para conferir

- **Tiradas por dependerem de ter lido a obra** (além das que os agentes já tinham excluído):
  Fuvest 2026 Q90 (romance de Conceição Evaristo), UFPR 2025 Q70 (*Quarto de despejo*, "integralidade
  da leitura"), UDESC 2026 Q46 (*São Bernardo*) e Q48 (*Laços de família*).
- **Excluídas como Filosofia/Sociologia, mas que poderiam ser História/Geografia:** ENEM 2025 Q51 e Q88;
  Fuvest 2026 Q17. **Excluídas como Ed. Física, mas que se resolvem como Português:** ENEM 2024 Q07 e Q09.
- **Incluídas, mas com pé em Filosofia/Sociologia:** ENEM 2024 Q47, 66, 69, 74, 80, 81; ENEM 2025 Q57, 67;
  Fuvest 2025 Q9, 10, 12 (como Português), Q8; Fuvest 2026 Q47; Unesp 2026 Q42, 49; Unesp 2026 Q12
  (meme da água, cadastrada como Química).
- **Literatura mantida por se resolver pelo trecho, embora cite obra de outra lista:** UFPR 2026 Q70 e Q71,
  Unicamp 2026 Q60, UDESC 2026 Q44, PUCPR 2026/2 Q10.
- **Capítulos sem encaixe bom:** faltam no material capítulos de África (antiga/pré-colonial),
  ditaduras e populismo latino-americanos, descolonização, patrimônio cultural, crase, foco narrativo,
  função modular e "operações básicas". Essas questões foram para o capítulo mais próximo
  (ex.: Guerra Fria `his-4a5` para apartheid, Panteras Negras, Zapatistas).

### Transcrição

- Erros que estão nas próprias provas foram mantidos (ex.: "corno a uma relíquia" na Unesp 2025, "eduzem" e
  "SO₂Cl" na PUCPR 2026/2, título cortado na UFPR 2025 Ing 89).
- Fuvest 2025 Q60: acrescentei ao enunciado "(Em cada alternativa: à esquerda, Ferro; à direita, Aço
  inoxidável.)", porque na prova isso vem de um cabeçalho de tabela que não aparece nos prints.
- UDESC 2025 (as duas provas) é escaneada: foi transcrita das páginas e depois revisada questão por questão
  por um segundo agente; nenhuma diferença encontrada.
