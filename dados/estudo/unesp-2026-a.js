/**
 * Unesp 2026 — 1ª fase (Prova de Conhecimentos Gerais, 02/11/2025, Versão 1), questões 01 a 45.
 *
 * Fonte: Provas/Outros/UNESP/2026 - Prova V1.pdf; gabarito oficial: 2026 - Gabarito V1.pdf (Versão 1).
 * Questões de ESTUDO — nunca entram nos simulados. Aparecem no módulo da matéria, dentro do
 * capítulo do campo `conteudo` (Literatura e línguas: pelo `subtopico`).
 * Ficou de fora: 16 (Artes — identificar uma obra de Courbet). Nenhuma questão anulada.
 * Formato das questões: veja README.md ("Como adicionar uma questão nova").
 */

/* Questões 01 a 05 — romance ilustrado As aventuras de Nhô Quim (introdução e 1º parágrafo;
   os quadros com as legendas vão como print, na ordem da prova) */
var TEXTO_UNESP_2026_A_NHOQUIM_INTRO = `Para responder às questões de <b>01</b> a <b>05</b>, leia um trecho do romance ilustrado <i>As aventuras de Nhô Quim: ou impressões de uma viagem à Corte</i>, de Angelo Agostini (1843-1910) e Cândido Aragonez de Faria (1849-1911), publicado originalmente entre 30 de janeiro de 1869 e 12 de outubro de 1872. O Dia do Quadrinho Nacional é celebrado em 30 de janeiro em razão justamente da data de publicação do primeiro capítulo desse romance ilustrado.<br><br>Nhô<sup>1</sup> Quim, jovem de vinte anos, filho único de gente rica porém honrada, namorara-se de sinhá Rosa, moça virtuosa, mas que... de louça nem um pires. O velho Quim, tendo só em vista a felicidade do <i>pequeno</i>, entende que mulher sem dinheiro é asneira; e por isso em lugar de mandar o filho plantar batatas, (o que seria muito proveitoso na roça), resolve-o a dar um passeio à Corte para distraí-lo.`;

var TEXTO_UNESP_2026_A_NHOQUIM_FONTE = `<small>(Angelo Agostini e Cândido Aragonez de Faria. <i>As aventuras do Nhô Quim: ou impressões de uma viagem à Corte</i>, 2024. Adaptado.)</small><br><small><sup>1</sup> nhô: tratamento reverente dispensado originalmente aos brancos, especialmente aos patrões ou proprietários, pelos escravizados.<br><sup>2</sup> ruço: pelo castanho-claro.<br><sup>3</sup> selim: sela para montaria.<br><sup>4</sup> ratão: indivíduo excêntrico, extravagante.<br><sup>5</sup> caiporismo: estado, condição ou qualidade de quem é caipora, infeliz ou azarado em tudo ou quase tudo que faz ou que lhe sucede.</small>`;

var IMAGENS_UNESP_2026_A_NHOQUIM = [
  'imagens/estudo/unesp-2026-001-1.webp',
  'imagens/estudo/unesp-2026-001-2.webp',
  'imagens/estudo/unesp-2026-001-3.webp',
  'imagens/estudo/unesp-2026-001-4.webp',
  'imagens/estudo/unesp-2026-001-5.webp',
];

/* Questões 07 a 11 — poema de Sophia de Mello Breyner Andresen */
var TEXTO_UNESP_2026_A_SOPHIA = `
      <p>Para responder às questões de <b>07</b> a <b>11</b>, leia o primeiro poema da seção intitulada “Homenagem a Ricardo Reis”, da poeta portuguesa Sophia de Mello Breyner Andresen (1919-2004), publicado originalmente em 1972 no livro <i>Dual</i>.</p>
      <p>Não creias, Lídia, que nenhum estio<sup>1</sup><br>
      Por nós perdido possa regressar<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Oferecendo a flor<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Que adiamos colher.</p>
      <p>Cada dia te é dado uma só vez<br>
      E no redondo círculo da noite<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Não existe piedade<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para aquele que hesita.</p>
      <p>Mais tarde será tarde e já é tarde.<br>
      O tempo apaga tudo menos esse<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Longo indelével rasto<sup>2</sup><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Que o não-vivido deixa.</p>
      <p>Não creias na demora em que te medes.<br>
      Jamais se detém Kronos<sup>3</sup> cujo passo<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vai sempre mais à frente<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do que o teu próprio passo.</p>
      <p><small>(Sophia de Mello Breyner Andresen. <i>Coral e outros poemas</i>, 2018.)</small></p>
      <p><small><sup>1</sup> estio: verão.<br><sup>2</sup> rasto: rastro.<br><sup>3</sup> Kronos: do grego khrónos, “tempo”. Na mitologia grega, titã do tempo.</small></p>
`;

/* Questões 13 a 17 — ensaio de Jorge Coli sobre Courbet (a 16, de Artes, ficou de fora) */
var TEXTO_UNESP_2026_A_COLI = `
      <p>Para responder às questões de <b>13</b> a <b>17</b>, leia o início do ensaio “Bom dia, senhor Courbet!” do crítico de arte Jorge Coli (1947-&nbsp;&nbsp;&nbsp;&nbsp;).</p>
      <p>Gustave Courbet (1819-1877) e sua obra revelam uma relação intrincada entre aquilo que é subjetivo e aquilo que é coletivo; entre aquilo que é biografia individual e aquilo que é pintura propriamente dita. Não se trata de uma obra, à primeira vista, sedutora. Ao contrário, ela elimina o fascínio mais imediato — o fascínio das belas cores, por exemplo; o fascínio dos temas, torturados ou felizes. Contraditória com o modo de ser do artista — que era truculento, tagarela, escandaloso, barulhento —, essa obra é grave e silenciosa. Ela exige recolhimento, meditação, ela exige a frequentação persistente, ela exige o olhar prolongado. Os quadros de Courbet dão a impressão de conterem elementos destinados a afugentar o olhar superficial e mesmo, algumas vezes, a horrorizá-lo.</p>
      <p>Mas essa obra e seu autor, de modo cúmplice, promoveram o desgarramento dos vínculos que submetiam os artistas a valores que estavam constituídos fora deles. Até Courbet, os artistas dependiam de um universo ético que estavam encarregados de veicular — por exemplo, Jacques-Louis David (1748-1825) celebra a Revolução Francesa, ou celebra o Império napoleônico; Eugène Delacroix (1798-1863) tratará de temas que envolvem a liberdade política. O que nós assistimos com a arte de Courbet é ao seu afastamento desses critérios externos que possuem <i>valores</i> já constituídos, e ao estabelecimento, para o artista, de um lugar que é independente e que lhe é próprio: este lugar é o da <i>marginalidade</i>. Courbet circunscreve pela primeira vez o campo da marginalidade, e o define como um território de eleição, um território privilegiado em relação ao dos outros homens.</p>
      <p>O artista <i>marginal</i> é aquele que não deve mais nada nem ao mundo, nem a ninguém — a não ser a si próprio. Ao mesmo tempo independente e consciente da elevação de sua tarefa artística, é obrigado, para manter-se à altura de si mesmo, a estabelecer os seus próprios valores. Isto é, ele é obrigado a construir uma ética para si.</p>
      <p><small>(https://artepensamento.ims.com.br, 1992. Adaptado.)</small></p>
`;

/* Questões 18 e 19 — desenho de Dedé Laurentino sobre “No meio do caminho” (print) */
var TEXTO_UNESP_2026_A_DEDE = `Para responder às questões <b>18</b> e <b>19</b>, examine o desenho de Dedé Laurentino, concebido a partir do poema “No meio do caminho”, de Carlos Drummond de Andrade (1902-1987).`;
var FONTE_UNESP_2026_A_DEDE = `(Dedé Laurentino. <i>Você está aqui</i>, 2023. Adaptado.)`;

/* Questões 21 e 22 — cartaz (print) */
var TEXTO_UNESP_2026_A_CARTAZ = `Examine o cartaz para responder às questões <b>21</b> e <b>22</b>.`;
var FONTE_UNESP_2026_A_CARTAZ = `(https://commons.wikimedia.org. Adaptado.)`;

/* Questões 23 a 28 — texto sobre a Dra. Mariangela Hungria */
var TEXTO_UNESP_2026_A_HUNGRIA = `
      <p>Leia o texto para responder às questões de <b>23</b> a <b>28</b>.</p>
      <p>Dr. Mariangela Hungria will receive the $500,000 award for her work to utilize biological processes to sustainably improve crop<sup>1</sup> nutrition, yields<sup>2</sup> and productivity. The scientist whose discoveries helped Brazil become a global agricultural powerhouse has been named the 2025 World Food Prize Laureate.</p>
      <p>Dr. Mariangela Hungria, a microbiologist from São Paulo, has developed dozens of biological seed and soil treatments that help crops source nutrients through soil bacteria, significantly increasing yields of major crops while also reducing the need for synthetic fertilizer. Her products are estimated to have been used across more than 40 million hectares in Brazil, saving farmers up to US$40 billion a year in costs while avoiding more than 180 million metric tons of CO<sub>2</sub> equivalent emissions per year.</p>
      <p>Dr. Hungria’s work has helped improve yields of wheat, corn, rice, common beans, and other major crops, including soybean, which is now Brazil’s top agricultural export. Over her 40-year career with the Brazilian Agricultural Research Corporation (Embrapa), national soybean production increased from 15 million tons in 1979 to an anticipated 173 million tons in the next harvest<sup>3</sup> in 2025.</p>
      <p>Dr. Hungria, who overcame prejudices against women and young mothers in academia to be named one of the 100 most powerful women in agriculture in Brazil by Forbes magazine in 2021, said she was inspired by Dr. Norman Borlaug, the father of the Green Revolution and founder of the World Food Prize. “I like to say that he made the Green Revolution possible, and we had this great opportunity to start a ‘micro green revolution’ — a green revolution, but with microorganisms,” she added. “I can’t quite believe I am now receiving the World Food Prize. Many people questioned me and my abilities throughout my career but I believed in what I was doing and persevered. The role of women in agriculture, from farming to science, deserves more recognition. I hope my achievement inspires others to pursue their passions in science.”</p>
      <p><small>(www.worldfoodprize.org, 13.05.2025. Adaptado.)</small></p>
      <p><small><sup>1</sup> crop: cultivated plant that is grown as food, especially grain, fruit or vegetable.<br><sup>2</sup> yields: the full amounts of an agricultural product.<br><sup>3</sup> harvest: the crops that are cut and collected.</small></p>
`;

/* Questões 33 e 34 — excerto de Alberto da Costa e Silva */
var TEXTO_UNESP_2026_A_COSTA_E_SILVA = `
      <p>Leia o excerto para responder às questões <b>33</b> e <b>34</b>.</p>
      <p>Os africanos não foram somente os pioneiros da metalurgia de ferro no Brasil. Desde muito acostumados à cata do ouro [...] trouxeram com eles as técnicas da bateia e de escavação de minas. Alguns eram bons ourives, que criavam, na África, joias de grande beleza, como as dos axantes, e passaram a fazê-las no Brasil. [...]</p>
      <p>Aos africanos deve-se também que se tenha produzido, sobretudo nas grandes propriedades rurais, e ao arrepio das proibições régias, tecidos para uso dos escravos, em teares extremamente simples, horizontais ou verticais [...].</p>
      <p>[...] as crianças ouviam os relatos fantásticos de diferentes nações africanas, cujos personagens e enredos se mesclavam entre si e com os ameríndios e europeus, de tal modo que se tornava difícil separar o Curupira dos tupis do <i>moatia</i> dos axantes, pois ambos, do tamanho de anões, tinham os pés virados para trás e eram os senhores dos animais selvagens. Vindos da África, bichos-papões, jogos e brinquedos desembarcaram no Brasil. E lembranças de desfiles de reis, com seus enormes guarda-sóis coloridos, que reproduziram, no Brasil, nos maracatus, congadas e reisados.</p>
      <p><small>(Alberto da Costa e Silva. <i>A África e os africanos na história e nos mitos</i>, 2021.)</small></p>
`;

QUESTOES.push(
  // ───────────────────────── Nhô Quim (01–05) ─────────────────────────
  {
    id: 'unesp-2026-001',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 1,
    disciplina: 'Literatura',
    subtopico: 'Interpretação de Texto Literário',
    dificuldade: 'facil',
    imagem: IMAGENS_UNESP_2026_A_NHOQUIM,
    legendaAcima: [TEXTO_UNESP_2026_A_NHOQUIM_INTRO],
    legendaGeral: TEXTO_UNESP_2026_A_NHOQUIM_FONTE,
    enunciado: `<p>Depreende-se do início do romance ilustrado que a viagem de Nhô Quim à Corte se deve</p>`,
    alternativas: [
      { letra: 'A', texto: 'ao seu receio de ter que se casar com uma mulher de índole duvidosa.' },
      { letra: 'B', texto: 'à sua falta de habilidade com as atividades agrícolas.' },
      { letra: 'C', texto: 'à sua falta de interesse pelos negócios do pai na roça.' },
      { letra: 'D', texto: 'à sua desconfiança de que a namorada estaria interessada apenas em ascender socialmente.' },
      { letra: 'E', texto: 'ao seu envolvimento com uma mulher pertencente a um estrato social inferior.', explicacao: 'Correta! Sinhá Rosa era virtuosa, “mas que... de louça nem um pires”, isto é, pobre; o pai, achando que “mulher sem dinheiro é asneira”, manda o filho à Corte para afastá-lo dela.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'unesp-2026-002',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 2,
    disciplina: 'Português',
    conteudo: 'por-1a5',
    subtopico: 'Sentido literal e sentido figurado',
    dificuldade: 'media',
    imagem: IMAGENS_UNESP_2026_A_NHOQUIM,
    legendaAcima: [TEXTO_UNESP_2026_A_NHOQUIM_INTRO],
    legendaGeral: TEXTO_UNESP_2026_A_NHOQUIM_FONTE,
    enunciado: `<p>Com finalidade humorística, o narrador explora abertamente a contraposição do sentido figurado e do sentido literal de uma expressão no trecho:</p>`,
    alternativas: [
      { letra: 'A', texto: '“por isso em lugar de mandar o filho plantar batatas, (o que seria muito proveitoso na roça), resolve-o a dar um passeio à Corte para distraí-lo”.', explicacao: 'Correta! “Mandar plantar batatas” significa, em sentido figurado, mandar alguém embora; o narrador brinca com o sentido literal ao comentar que plantar batatas “seria muito proveitoso na roça”.' },
      { letra: 'B', texto: '“oferecendo um pedaço de queijo de Minas, que traz bem guardadinho na bota, e que pelo aroma parece queijo suíço”.' },
      { letra: 'C', texto: '“Logo que sofre o primeiro encontrão, Nhô Quim acha que esta gente da Corte é bem malcriada e que nem sequer pede licença para passar”.' },
      { letra: 'D', texto: '“Nhô Quim, jovem de vinte anos, filho único de gente rica porém honrada, namorara-se de sinhá Rosa, moça virtuosa, mas que... de louça nem um pires”.' },
      { letra: 'E', texto: '“Pelo sim pelo não o nosso homem benze-se três vezes antes de entrar no trem”.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unesp-2026-003',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 3,
    disciplina: 'História',
    conteudo: 'his-2b6',
    subtopico: 'Rio de Janeiro, a Corte imperial',
    dificuldade: 'facil',
    imagem: IMAGENS_UNESP_2026_A_NHOQUIM,
    legendaAcima: [TEXTO_UNESP_2026_A_NHOQUIM_INTRO],
    legendaGeral: TEXTO_UNESP_2026_A_NHOQUIM_FONTE,
    enunciado: `<p>Considerando o contexto histórico-social de produção do romance ilustrado, depreende-se que Nhô Quim viajou para a seguinte cidade:</p>`,
    alternativas: [
      { letra: 'A', texto: 'Paraty.' },
      { letra: 'B', texto: 'São Paulo.' },
      { letra: 'C', texto: 'Rio de Janeiro.', explicacao: 'Correta! O romance foi publicado entre 1869 e 1872, no Segundo Reinado, quando a “Corte” era o Rio de Janeiro, capital do Império (o texto cita ainda a estação do Campo de Santana).' },
      { letra: 'D', texto: 'Salvador.' },
      { letra: 'E', texto: 'Ouro Preto.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unesp-2026-004',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 4,
    disciplina: 'Literatura',
    subtopico: 'Escolas Literárias',
    dificuldade: 'media',
    imagem: IMAGENS_UNESP_2026_A_NHOQUIM,
    legendaAcima: [TEXTO_UNESP_2026_A_NHOQUIM_INTRO],
    legendaGeral: TEXTO_UNESP_2026_A_NHOQUIM_FONTE,
    enunciado: `<p>O estilo cômico e satírico observado em <i>As aventuras de Nhô Quim</i> caracteriza também a seguinte obra do Romantismo brasileiro:</p>`,
    alternativas: [
      { letra: 'A', texto: '<i>O cortiço</i>, de Aluísio Azevedo.' },
      { letra: 'B', texto: '<i>Memórias de um sargento de milícias</i>, de Manuel Antônio de Almeida.', explicacao: 'Correta! É o romance romântico de tom cômico e satírico, com a crônica de costumes do Rio de Janeiro do tempo do rei. <i>O cortiço</i> é naturalista, <i>Memórias póstumas</i> é realista, <i>Iracema</i> é romântica, mas indianista e lírica, e <i>Macunaíma</i> é modernista.' },
      { letra: 'C', texto: '<i>Memórias póstumas de Brás Cubas</i>, de Machado de Assis.' },
      { letra: 'D', texto: '<i>Iracema</i>, de José de Alencar.' },
      { letra: 'E', texto: '<i>Macunaíma</i>, de Mário de Andrade.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unesp-2026-005',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 5,
    disciplina: 'Português',
    conteudo: ['por-3b5', 'por-3b2'],
    subtopico: 'Oração reduzida de gerúndio',
    dificuldade: 'media',
    imagem: IMAGENS_UNESP_2026_A_NHOQUIM,
    legendaAcima: [TEXTO_UNESP_2026_A_NHOQUIM_INTRO],
    legendaGeral: TEXTO_UNESP_2026_A_NHOQUIM_FONTE,
    enunciado: `<p>“<u>Encostando-se à vidraça do Grande Mágico</u>, Nhô Quim sentiu uma coisa!...”</p>
      <p>Em relação à oração que a sucede, a oração sublinhada expressa ideia de</p>`,
    alternativas: [
      { letra: 'A', texto: 'conclusão.' },
      { letra: 'B', texto: 'finalidade.' },
      { letra: 'C', texto: 'consequência.' },
      { letra: 'D', texto: 'tempo.', explicacao: 'Correta! É uma oração subordinada adverbial temporal reduzida de gerúndio: equivale a “Quando se encostou à vidraça do Grande Mágico”.' },
      { letra: 'E', texto: 'condição.' },
    ],
    gabarito: 'D',
  },

  // ───────────────────────── Tirinha de Laerte (06) ─────────────────────────
  {
    id: 'unesp-2026-006',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 6,
    disciplina: 'Português',
    conteudo: 'por-1a5',
    subtopico: 'Figuras de linguagem (antítese)',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unesp-2026-006.webp',
    legendaAcima: 'Examine a tirinha da cartunista Laerte, publicada em sua conta @laerteminotaura no Instagram em 29.12.2022.',
    enunciado: `<p>Na construção do sentido de sua tirinha, Laerte explora basicamente</p>`,
    alternativas: [
      { letra: 'A', texto: 'uma hipérbole que, por sua vez, se desdobra em outras hipérboles numa progressão aritmética de razão 1.' },
      { letra: 'B', texto: 'uma hipérbole que, por sua vez, se desdobra em outras hipérboles numa progressão aritmética de razão 2.' },
      { letra: 'C', texto: 'um paradoxo que, por sua vez, se desdobra em outros paradoxos numa progressão geométrica de razão 2.' },
      { letra: 'D', texto: 'uma antítese que, por sua vez, se desdobra em outras antíteses numa progressão geométrica de razão 1.' },
      { letra: 'E', texto: 'uma antítese que, por sua vez, se desdobra em outras antíteses numa progressão geométrica de razão 2.', explicacao: 'Correta! Cada quadro opõe dois termos (agradáveis × desagradáveis, pagas × grátis, curtas × longas…): antíteses. Cada termo gera uma nova antítese, então o número de balões dobra a cada etapa (1, 2, 4, 8…): PG de razão 2.' },
    ],
    gabarito: 'E',
  },

  // ───────────────────────── Sophia de Mello Breyner (07–11) ─────────────────────────
  {
    id: 'unesp-2026-007',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 7,
    disciplina: 'Literatura',
    subtopico: 'Interpretação de Texto Literário',
    dificuldade: 'facil',
    textoApoio: TEXTO_UNESP_2026_A_SOPHIA,
    enunciado: `<p>Logo na estrofe inicial do poema, o eu lírico ressalta o caráter</p>`,
    alternativas: [
      { letra: 'A', texto: 'desumano do mundo.' },
      { letra: 'B', texto: 'insondável da vida.' },
      { letra: 'C', texto: 'irreversível do tempo.', explicacao: 'Correta! O eu lírico avisa Lídia de que nenhum verão perdido pode “regressar”: o tempo que passa não volta.' },
      { letra: 'D', texto: 'enigmático do mundo.' },
      { letra: 'E', texto: 'imprevisível do tempo.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unesp-2026-008',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 8,
    disciplina: 'Literatura',
    subtopico: 'Interpretação de Texto Literário',
    dificuldade: 'media',
    textoApoio: TEXTO_UNESP_2026_A_SOPHIA,
    enunciado: `<p>“O tempo apaga tudo menos esse<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Longo indelével rasto<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Que o não-vivido deixa.” (3<sup>a</sup> estrofe)</p>
      <p>Depreende-se desses versos que</p>`,
    alternativas: [
      { letra: 'A', texto: 'o que entendemos por tempo é uma construção subjetiva.' },
      { letra: 'B', texto: 'o tempo é incapaz de apagar nossas vivências mais íntimas.' },
      { letra: 'C', texto: 'o que não foi vivido está sujeito a se perder com o tempo.' },
      { letra: 'D', texto: 'o que entendemos por tempo é uma construção social.' },
      { letra: 'E', texto: 'o que não foi vivido não pode ser apagado pelo tempo.', explicacao: 'Correta! O tempo apaga tudo, “menos” o rastro “indelével” (que não se apaga) deixado pelo que não se viveu: a marca do que se deixou de viver permanece.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'unesp-2026-009',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 9,
    disciplina: 'Literatura',
    subtopico: 'Escolas Literárias',
    dificuldade: 'facil',
    textoApoio: TEXTO_UNESP_2026_A_SOPHIA,
    enunciado: `<p>Conforme sugerido pelo próprio título da seção, trata-se de um poema escrito à maneira de Ricardo Reis, o heterônimo neoclássico do poeta Fernando Pessoa (1888-1935). A exemplo do que ocorre com frequência na poética de Ricardo Reis, o eu lírico configura aqui o seguinte tópico clássico:</p>`,
    alternativas: [
      { letra: 'A', texto: '<i>locus horrendus</i> (“lugar horrível”).' },
      { letra: 'B', texto: '<i>inutilia truncat</i> (“corta o inútil”).' },
      { letra: 'C', texto: '<i>carpe diem</i> (“aproveita o momento”).', explicacao: 'Correta! O poema insiste em não adiar (“a flor / Que adiamos colher”, “Cada dia te é dado uma só vez”, “Mais tarde será tarde”): é o convite a aproveitar o presente, o <i>carpe diem</i>.' },
      { letra: 'D', texto: '<i>locus amoenus</i> (“lugar aprazível”).' },
      { letra: 'E', texto: '<i>fugere urbem</i> (“fugir da cidade”).' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unesp-2026-010',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 10,
    disciplina: 'Literatura',
    subtopico: 'Escolas Literárias',
    dificuldade: 'media',
    textoApoio: TEXTO_UNESP_2026_A_SOPHIA,
    enunciado: `<p>Depreende-se das reflexões do eu lírico uma visão de mundo influenciada, sobretudo, pela</p>`,
    alternativas: [
      { letra: 'A', texto: 'filosofia iluminista.' },
      { letra: 'B', texto: 'teoria de Marx.' },
      { letra: 'C', texto: 'teoria de Darwin.' },
      { letra: 'D', texto: 'filosofia de Epicuro.', explicacao: 'Correta! Como em Ricardo Reis, o poema segue o epicurismo: consciência da brevidade da vida e busca do prazer sereno no presente, antes que o tempo (Kronos) o leve.' },
      { letra: 'E', texto: 'filosofia de Platão.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unesp-2026-011',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 11,
    disciplina: 'Português',
    conteudo: 'por-1a5',
    subtopico: 'Figuras de linguagem (pleonasmo)',
    dificuldade: 'facil',
    textoApoio: TEXTO_UNESP_2026_A_SOPHIA,
    enunciado: `<p>Com a intenção de obter maior expressividade, o eu lírico lança mão de uma construção pleonástica no seguinte verso:</p>`,
    alternativas: [
      { letra: 'A', texto: '“E no redondo círculo da noite” (2<sup>a</sup> estrofe)', explicacao: 'Correta! Todo círculo é redondo: “redondo círculo” repete a ideia de propósito, um pleonasmo expressivo (estilístico).' },
      { letra: 'B', texto: '“Por nós perdido possa regressar” (1<sup>a</sup> estrofe)' },
      { letra: 'C', texto: '“Para aquele que hesita.” (2<sup>a</sup> estrofe)' },
      { letra: 'D', texto: '“O tempo apaga tudo menos esse” (3<sup>a</sup> estrofe)' },
      { letra: 'E', texto: '“Não creias na demora em que te medes.” (4<sup>a</sup> estrofe)' },
    ],
    gabarito: 'A',
  },

  // ───────────────────────── Post “The Language Nerds” (12) ─────────────────────────
  {
    id: 'unesp-2026-012',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 12,
    disciplina: 'Química',
    conteudo: 'qui-1a5',
    subtopico: 'Molécula de água (geometria angular)',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/unesp-2026-012.webp',
    legendaAcima: 'Examine o post publicado pela comunidade “The Language Nerds” em sua conta no Facebook em 01.09.2019.<br><br>IF YOU LAUGH, YOU PROBABLY HAVE NO FRIENDS',
    enunciado: `<p>Estereótipo é uma generalização simplificada e preconcebida, que reduz a complexidade de indivíduos a características padronizadas, com base em ideias repetidas sobre determinado grupo. O post explora o estereótipo de que</p>`,
    alternativas: [
      { letra: 'A', texto: 'pessoas muito arrogantes não têm amigos, já que são capazes de usar materiais químico-físicos fora do contexto laboratorial para demonstrar superioridade intelectual.' },
      { letra: 'B', texto: 'pessoas muito inteligentes não têm amigos, já que são capazes de compreender um tipo de humor restrito a quem domina o conhecimento físico de reflexão luminosa.' },
      { letra: 'C', texto: 'pessoas ardilosas não têm amigos, já que são capazes de construir armadilhas no ambiente escolar a partir de seu conhecimento químico de composto orgânico.' },
      { letra: 'D', texto: 'pessoas muito inteligentes não têm amigos, já que são capazes de compreender um tipo de humor restrito a quem domina o conhecimento químico de estrutura molecular.', explicacao: 'Correta! Os modelos espalhados no chão são moléculas de H<sub>2</sub>O (um O vermelho e dois H brancos, geometria angular): o piso está literalmente “molhado” (“wet floor”). Só ri quem reconhece a estrutura da água — daí o estereótipo de que os “inteligentes” não têm amigos.' },
      { letra: 'E', texto: 'pessoas ardilosas não têm amigos, já que são capazes de construir armadilhas no ambiente escolar a partir de seu conhecimento físico de comportamento dos fluidos.' },
    ],
    gabarito: 'D',
  },

  // ───────────────────────── Jorge Coli (13–17; 16 fora) ─────────────────────────
  {
    id: 'unesp-2026-013',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 13,
    disciplina: 'Português',
    conteudo: 'por-2a5',
    subtopico: 'Interpretação de texto',
    dificuldade: 'facil',
    textoApoio: TEXTO_UNESP_2026_A_COLI,
    enunciado: `<p>De acordo com Jorge Coli, a obra de Courbet, em contradição com o modo de ser do artista, caracteriza-se</p>`,
    alternativas: [
      { letra: 'A', texto: 'pela eloquência.' },
      { letra: 'B', texto: 'pela discrição.', explicacao: 'Correta! O artista era “truculento, tagarela, escandaloso, barulhento”, mas a obra é “grave e silenciosa” e exige “recolhimento”: discreta.' },
      { letra: 'C', texto: 'pelo escárnio.' },
      { letra: 'D', texto: 'pelo rebuscamento.' },
      { letra: 'E', texto: 'pela combatividade.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unesp-2026-014',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 14,
    disciplina: 'Português',
    conteudo: 'por-1a4',
    subtopico: 'Impessoalidade e marcas de pessoa',
    dificuldade: 'media',
    textoApoio: TEXTO_UNESP_2026_A_COLI,
    enunciado: `<p>Caracteriza-se por uma menor impessoalidade o seguinte trecho do ensaio:</p>`,
    alternativas: [
      { letra: 'A', texto: '“Ao mesmo tempo independente e consciente da elevação de sua tarefa artística, é obrigado, para manter-se à altura de si mesmo, a estabelecer os seus próprios valores. Isto é, ele é obrigado a construir uma ética para si.” (3<sup>o</sup> parágrafo)' },
      { letra: 'B', texto: '“Courbet circunscreve pela primeira vez o campo da marginalidade, e o define como um território de eleição, um território privilegiado em relação ao dos outros homens.” (2<sup>o</sup> parágrafo)' },
      { letra: 'C', texto: '“Os quadros de Courbet dão a impressão de conterem elementos destinados a afugentar o olhar superficial e mesmo, algumas vezes, a horrorizá-lo.” (1<sup>o</sup> parágrafo)' },
      { letra: 'D', texto: '“Não se trata de uma obra, à primeira vista, sedutora. Ao contrário, ela elimina o fascínio mais imediato — o fascínio das belas cores, por exemplo; o fascínio dos temas, torturados ou felizes.” (1<sup>o</sup> parágrafo)' },
      { letra: 'E', texto: '“O que nós assistimos com a arte de Courbet é ao seu afastamento desses critérios externos que possuem valores já constituídos, e ao estabelecimento, para o artista, de um lugar que é independente e que lhe é próprio: este lugar é o da marginalidade.” (2<sup>o</sup> parágrafo)', explicacao: 'Correta! É o único trecho com marca explícita de pessoa do discurso: “nós assistimos” (1ª pessoa do plural), que inclui o autor e o leitor e reduz a impessoalidade. Os demais estão todos em 3ª pessoa.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'unesp-2026-015',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 15,
    disciplina: 'Português',
    conteudo: 'por-2a5',
    subtopico: 'Interpretação de texto',
    dificuldade: 'facil',
    textoApoio: TEXTO_UNESP_2026_A_COLI,
    enunciado: `<p>Para Jorge Coli, “artista marginal” seria sinônimo de</p>`,
    alternativas: [
      { letra: 'A', texto: 'artista obsessivo.' },
      { letra: 'B', texto: 'artista inconstante.' },
      { letra: 'C', texto: 'artista autônomo.', explicacao: 'Correta! O artista marginal “não deve mais nada nem ao mundo, nem a ninguém — a não ser a si próprio”, é “independente” e estabelece “os seus próprios valores”: é autônomo.' },
      { letra: 'D', texto: 'artista abstrato.' },
      { letra: 'E', texto: 'artista mesquinho.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unesp-2026-017',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 17,
    disciplina: 'Português',
    conteudo: ['por-2a3', 'por-2b4'],
    subtopico: 'Coesão referencial (pronomes)',
    dificuldade: 'media',
    textoApoio: TEXTO_UNESP_2026_A_COLI,
    enunciado: `<p>“O que nós assistimos com a arte de Courbet é ao seu afastamento desses critérios externos que possuem valores já constituídos, e ao estabelecimento, para o artista, de um lugar que é independente e <u>que</u> <u>lhe</u> é próprio: este lugar é o da marginalidade. Courbet circunscreve pela primeira vez o campo da marginalidade, e <u>o</u> define como um território de eleição, um território privilegiado em relação ao dos outros homens.” (2<sup>o</sup> parágrafo)</p>
      <p>Os termos sublinhados referem-se, respectivamente, a</p>`,
    alternativas: [
      { letra: 'A', texto: '“artista”, “lugar” e “campo da marginalidade”.' },
      { letra: 'B', texto: '“artista”, “lugar” e “Courbet”.' },
      { letra: 'C', texto: '“lugar”, “artista” e “território de eleição”.' },
      { letra: 'D', texto: '“lugar”, “artista” e “campo da marginalidade”.', explicacao: 'Correta! O relativo “que” retoma “lugar” (um lugar que é próprio), o pronome “lhe” retoma “artista” (é próprio ao artista) e o pronome “o” retoma “o campo da marginalidade” (Courbet define o campo).' },
      { letra: 'E', texto: '“artista”, “lugar” e “território de eleição”.' },
    ],
    gabarito: 'D',
  },

  // ───────────────────────── Drummond / Dedé Laurentino (18–19) ─────────────────────────
  {
    id: 'unesp-2026-018',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 18,
    disciplina: 'Literatura',
    subtopico: 'Escolas Literárias',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/unesp-2026-018.webp',
    legendaAcima: TEXTO_UNESP_2026_A_DEDE,
    legenda: FONTE_UNESP_2026_A_DEDE,
    enunciado: `<p>Poucos poemas causaram tanta polêmica na história da literatura brasileira quanto “No meio do caminho”, publicado originalmente em 1928 na <i>Revista de Antropofagia</i>. São características desse poema de Drummond, que o afastam da estética parnasiana, ainda em voga no Brasil no início do século XX:</p>`,
    alternativas: [
      { letra: 'A', texto: 'o emprego do verso livre e o recurso à coloquialidade.', explicacao: 'Correta! Contra a métrica rígida e a linguagem rebuscada do Parnasianismo, o poema modernista usa versos livres, sem rima, e linguagem coloquial (“tinha uma pedra” no lugar de “havia uma pedra”).' },
      { letra: 'B', texto: 'a rigorosa contenção lírica e o recurso à coloquialidade.' },
      { letra: 'C', texto: 'a busca pela perfeição formal e o recurso à impessoalidade.' },
      { letra: 'D', texto: 'a rigorosa contenção lírica e o discurso socialmente engajado.' },
      { letra: 'E', texto: 'o emprego do verso livre e o discurso socialmente engajado.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unesp-2026-019',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 19,
    disciplina: 'Literatura',
    subtopico: 'Interpretação de Texto Literário',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unesp-2026-018.webp',
    legendaAcima: TEXTO_UNESP_2026_A_DEDE,
    legenda: FONTE_UNESP_2026_A_DEDE,
    enunciado: `<p>Em 1968, o próprio Drummond reuniu, no livro intitulado <i>Uma pedra no meio do caminho: biografia de um poema</i>, centenas de comentários — tanto de enaltecimento quanto de repúdio — sobre o seu poema. Na apresentação desse livro, o crítico literário Arnaldo Saraiva anotou:</p>
      <p>Trata-se de um poema de apenas dez versos. Mas alguns dos versos são exatamente iguais: versos 1, 4 e 10; versos 2 e 9; versos 3 e 8, o que praticamente reduz a seis o número de versos “válidos”. Se bem atentarmos, porém, verificaremos que os versos 2, 3, 7, 8 e 9 não são mais do que a repetição em ordem inversa do verso 1, ou a repetição de “metade” desse mesmo verso (o que, aliás, também ocorre no verso 7 em relação ao verso 5), pelo que o valor lógico do poema caberia todo em apenas três versos.</p>
      <p><small>(Arnaldo Saraiva <i>apud</i> Carlos Drummond de Andrade. <i>Uma pedra no meio do caminho: biografia de um poema</i>, 2010. Adaptado.)</small></p>
      <p>A se considerar apenas seu “valor lógico”, o poema assumiria a seguinte configuração:</p>`,
    alternativas: [
      { letra: 'A', texto: '<img src="imagens/estudo/unesp-2026-019-a.webp" alt="Alternativa A: no meio | do caminho | tinha uma | pedra; nunca me esquecerei | que | no meio | do caminho; tinha uma | pedra">' },
      { letra: 'B', texto: '<img src="imagens/estudo/unesp-2026-019-b.webp" alt="Alternativa B: na vida de minhas retinas | tão fatigadas; tinha uma | pedra; nunca me esquecerei | desse acontecimento">' },
      { letra: 'C', texto: '<img src="imagens/estudo/unesp-2026-019-c.webp" alt="Alternativa C: nunca me esquecerei | que | no meio | do caminho; tinha uma | pedra; tinha uma | pedra | no meio | do caminho">' },
      { letra: 'D', texto: '<img src="imagens/estudo/unesp-2026-019-d.webp" alt="Alternativa D: no meio | do caminho | tinha uma | pedra; nunca me esquecerei | desse acontecimento; na vida de minhas retinas | tão fatigadas">', explicacao: 'Correta! Os três versos “válidos” são o 1 (“No meio do caminho tinha uma pedra”), o 5 (“Nunca me esquecerei desse acontecimento”) e o 6 (“Na vida de minhas retinas tão fatigadas”); os demais repetem o verso 1 (inteiro, invertido ou pela metade) ou o verso 5 (o 7, “Nunca me esquecerei que…”).' },
      { letra: 'E', texto: '<img src="imagens/estudo/unesp-2026-019-e.webp" alt="Alternativa E: nunca me esquecerei | desse acontecimento; na vida de minhas retinas | tão fatigadas; nunca me esquecerei | que | no meio | do caminho">' },
    ],
    gabarito: 'D',
  },

  // ───────────────────────── Calvin e Haroldo (20) ─────────────────────────
  {
    id: 'unesp-2026-020',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 20,
    disciplina: 'Português',
    conteudo: 'por-1a5',
    subtopico: 'Homonímia',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/unesp-2026-020.webp',
    legendaAcima: 'Examine a tirinha do cartunista americano Bill Watterson (1958-&nbsp;&nbsp;&nbsp;&nbsp;).',
    legenda: '(Bill Watterson. <i>Calvin e Haroldo: e foi assim que tudo começou</i>, 2007.)',
    enunciado: `<p>Para obter seu efeito de humor, a tirinha explora o fenômeno linguístico denominado</p>`,
    alternativas: [
      { letra: 'A', texto: 'sinonímia: duas palavras que têm significados muito próximos.' },
      { letra: 'B', texto: 'homonímia: duas palavras idênticas na grafia e na sonoridade que têm significados diferentes.', explicacao: 'Correta! “Nós” (unidade de velocidade das embarcações, no problema de matemática) e “nós” (pronome) têm a mesma grafia e o mesmo som, mas sentidos diferentes; Calvin pergunta o que é “nós” e Haroldo responde com o pronome: “eu e você”.' },
      { letra: 'C', texto: 'onomatopeia: palavra ou conjunto de palavras que representa um ruído ou som natural.' },
      { letra: 'D', texto: 'antonímia: duas palavras que têm significados opostos.' },
      { letra: 'E', texto: 'paronímia: duas palavras parecidas na grafia e na sonoridade que têm significados diferentes.' },
    ],
    gabarito: 'B',
  },

  // ───────────────────────── Inglês (21–30) ─────────────────────────
  {
    id: 'unesp-2026-021',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 21,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/unesp-2026-021.webp',
    legendaAcima: TEXTO_UNESP_2026_A_CARTAZ,
    legenda: FONTE_UNESP_2026_A_CARTAZ,
    enunciado: `<p>The main purpose of the poster is to</p>`,
    alternativas: [
      { letra: 'A', texto: 'point out that the pest is out of control.' },
      { letra: 'B', texto: 'prevent people from being scared.' },
      { letra: 'C', texto: 'warn that the insect bite might hurt.' },
      { letra: 'D', texto: 'inform people that driving is prohibited in the area.' },
      { letra: 'E', texto: 'avoid risks for crops and the environment.', explicacao: 'Correta! O cartaz pede que se verifique o carro para não levar o besouro (<i>Popillia japonica</i>) a outras áreas, pois ele “poses a serious threat to agriculture and to the environment”.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'unesp-2026-022',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 22,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unesp-2026-021.webp',
    legendaAcima: TEXTO_UNESP_2026_A_CARTAZ,
    legenda: FONTE_UNESP_2026_A_CARTAZ,
    enunciado: `<p>In the excerpt from the poster “Do not bring this pest <u>home</u>”, the underlined word refers to</p>`,
    alternativas: [
      { letra: 'A', texto: 'Regione Piemonte, Italy.' },
      { letra: 'B', texto: 'Japan.' },
      { letra: 'C', texto: 'the surroundings of the poster.' },
      { letra: 'D', texto: 'the vehicle itself.' },
      { letra: 'E', texto: 'the final destination of the car traveler.', explicacao: 'Correta! O cartaz se dirige a quem está de carro numa área infestada: “home” é o lugar para onde o viajante vai voltar, o destino final da viagem, que não deve receber a praga.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'unesp-2026-023',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 23,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'facil',
    textoApoio: TEXTO_UNESP_2026_A_HUNGRIA,
    enunciado: `<p>According to the text, Dr. Hungria’s research showed positive results in</p>`,
    alternativas: [
      { letra: 'A', texto: 'Green Revolution petrochemical development.' },
      { letra: 'B', texto: 'agricultural production improvement.', explicacao: 'Correta! Os tratamentos biológicos dela aumentaram “yields of major crops” e reduziram o uso de fertilizantes sintéticos: melhoraram a produção agrícola.' },
      { letra: 'C', texto: 'genetically modified soybean seeds.' },
      { letra: 'D', texto: 'effective synthetic fertilizers.' },
      { letra: 'E', texto: 'elimination of soil bacteria.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unesp-2026-024',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 24,
    disciplina: 'Inglês',
    subtopico: 'Gramática',
    dificuldade: 'media',
    textoApoio: TEXTO_UNESP_2026_A_HUNGRIA,
    enunciado: `<p>No trecho do segundo parágrafo “saving farmers up to US$40 billion a year in costs <u>while</u> avoiding more than 180 million metric tons of CO<sub>2</sub> equivalent emissions per year”, o termo sublinhado indica</p>`,
    alternativas: [
      { letra: 'A', texto: 'sequência.' },
      { letra: 'B', texto: 'contraste.' },
      { letra: 'C', texto: 'simultaneidade.', explicacao: 'Correta! Aqui “while” significa “ao mesmo tempo em que, enquanto”: a economia de custos e a redução de emissões acontecem juntas.' },
      { letra: 'D', texto: 'causa.' },
      { letra: 'E', texto: 'alternância.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unesp-2026-025',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 25,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'facil',
    textoApoio: TEXTO_UNESP_2026_A_HUNGRIA,
    enunciado: `<p>De acordo com o texto, a cultura agrícola que foi mais impactada pela pesquisa da Dra. Mariangela Hungria é a</p>`,
    alternativas: [
      { letra: 'A', texto: 'do milho.' },
      { letra: 'B', texto: 'do feijão.' },
      { letra: 'C', texto: 'do arroz.' },
      { letra: 'D', texto: 'da soja.', explicacao: 'Correta! O texto destaca a soja, hoje a principal exportação agrícola do Brasil, cuja produção passou de 15 milhões de toneladas (1979) para 173 milhões previstos em 2025 durante a carreira dela.' },
      { letra: 'E', texto: 'do trigo.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unesp-2026-026',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 26,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'facil',
    textoApoio: TEXTO_UNESP_2026_A_HUNGRIA,
    enunciado: `<p>According to the fourth paragraph, Dr. Hungria partly attributes her success to</p>`,
    alternativas: [
      { letra: 'A', texto: 'prejudice.' },
      { letra: 'B', texto: 'fame.' },
      { letra: 'C', texto: 'recognition.' },
      { letra: 'D', texto: 'perseverance.', explicacao: 'Correta! Ela diz: “I believed in what I was doing and persevered” — atribui o sucesso à perseverança.' },
      { letra: 'E', texto: 'religion.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unesp-2026-027',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 27,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'media',
    textoApoio: TEXTO_UNESP_2026_A_HUNGRIA,
    enunciado: `<p>In the excerpt from the fourth paragraph “this great opportunity to start a ‘micro green revolution’ — <u>a green revolution, but with microorganisms</u>”, the underlined phrase</p>`,
    alternativas: [
      { letra: 'A', texto: 'explains a concept.', explicacao: 'Correta! Depois do travessão, o trecho define o que seria a “micro green revolution”: uma revolução verde feita com microrganismos.' },
      { letra: 'B', texto: 'provides an example.' },
      { letra: 'C', texto: 'adds a needless remark.' },
      { letra: 'D', texto: 'presents a consequence.' },
      { letra: 'E', texto: 'highlights a contrast.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unesp-2026-028',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 28,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'facil',
    textoApoio: TEXTO_UNESP_2026_A_HUNGRIA,
    enunciado: `<p>According to the fourth paragraph, during her career, Dr. Hungria had to face</p>`,
    alternativas: [
      { letra: 'A', texto: 'excessive supervision by Dr. Norman Borlaug.' },
      { letra: 'B', texto: 'problems with young mothers in her team.' },
      { letra: 'C', texto: 'strange questions posed by her friends.' },
      { letra: 'D', texto: 'pressure to please Forbes magazine editors.' },
      { letra: 'E', texto: 'gender bias against women in science.', explicacao: 'Correta! O texto diz que ela “overcame prejudices against women and young mothers in academia”: enfrentou preconceito de gênero na ciência.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'unesp-2026-029',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 29,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unesp-2026-029.webp',
    legenda: '(www.farmprogress.com, 25.03.2025. Adaptado.)<br><sup>1</sup> acreage: an area of land measured in acres.<br><sup>2</sup> bushel: a measure internationally used for grains; for soybean, it is equivalent to 27,216 kg.',
    enunciado: `<p>According to the information presented in the chart,</p>`,
    alternativas: [
      { letra: 'A', texto: 'the 2016-17 production fell, despite an increase in planted area.' },
      { letra: 'B', texto: 'the planted area is proportional to the soybean production in all the periods of time.' },
      { letra: 'C', texto: 'the increase in planted area not necessarily results in a greater production.', explicacao: 'Correta! Em 2018-19 a área subiu (87 → 89 milhões de acres) e a produção caiu (4,529 → 4,399); o mesmo ocorre em 2021-22 e 2023-24. Mais área plantada não garante mais produção.' },
      { letra: 'D', texto: 'the planted area has been increasing at a constant acreage from 2015 to 2025.' },
      { letra: 'E', texto: 'from 2020 onwards, there has been a steady decrease in soybean production.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unesp-2026-030',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 30,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/unesp-2026-030.webp',
    legendaAcima: 'Examine a tira de Bill Watterson.',
    legenda: '(www.facebook.com)',
    enunciado: `<p>In the comic strip, Calvin, the boy,</p>`,
    alternativas: [
      { letra: 'A', texto: 'tried to make up excuses for what he had done wrong.', explicacao: 'Correta! Diante do banheiro alagado, Calvin inventa uma desculpa após a outra (a torneira explodiu sozinha, foi o Haroldo, foram alienígenas) para não assumir a culpa.' },
      { letra: 'B', texto: 'believed there were aliens that wanted to snatch him and the tiger.' },
      { letra: 'C', texto: 'assured the tiger helped him break the faucet with his father’s tools.' },
      { letra: 'D', texto: 'convinced his father that the faucet suddenly broke by itself.' },
      { letra: 'E', texto: 'was pleased because his father did not believe his explanations.' },
    ],
    gabarito: 'A',
  },

  // ───────────────────────── História (31–41) ─────────────────────────
  {
    id: 'unesp-2026-031',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 31,
    disciplina: 'História',
    conteudo: 'his-1a6',
    subtopico: 'Cristianismo no Império Romano',
    dificuldade: 'media',
    enunciado: `<p>A absoluta incompatibilidade entre Jesus e Dioniso — ou, de modo mais geral, entre o cristianismo e as velhas religiões extáticas — tornou-se um princípio da teologia cristã posterior, senão do pensamento “ocidental” como um todo. Porém, para um habitante de Roma que vivesse no século I ou II, quando o cristianismo surgiu, a nova religião não deve ter parecido tão hostil a Dioniso [...]. A partir de uma perspectiva romana, o cristianismo era, a princípio, apenas mais uma religião “oriental”, vindo do leste, e, como outras de origem semelhante, atraente para as mulheres e os pobres.</p>
      <p><small>(Barbara Ehrenreich. <i>Dançando nas ruas</i>, 2010.)</small></p>
      <p>Ao tratar do surgimento do cristianismo, o excerto</p>`,
    alternativas: [
      { letra: 'A', texto: 'afirma que, para os romanos dos séculos I ou II, os cultos a Dioniso e ao êxtase eram considerados heréticos.' },
      { letra: 'B', texto: 'sustenta que, para os romanos dos séculos I ou II, a perseguição aos cristãos representava uma forma de opressão contra mulheres e pobres.' },
      { letra: 'C', texto: 'enfatiza as oposições entre os rituais pagãos romanos e as religiosidades populares procedentes da Palestina.' },
      { letra: 'D', texto: 'caracteriza o cristianismo como uma derivação direta dos antigos ritos pagãos dedicados à celebração de Dioniso e do êxtase.' },
      { letra: 'E', texto: 'defende que, para os romanos dos séculos I ou II, o cristianismo assemelhava-se a outras expressões religiosas existentes na época.', explicacao: 'Correta! Segundo a autora, para um romano o cristianismo era “apenas mais uma religião ‘oriental’”, parecida com outras de mesma origem e não tão hostil a Dioniso.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'unesp-2026-032',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 32,
    disciplina: 'História',
    conteudo: 'his-2a1',
    subtopico: 'Mentalidade medieval',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/unesp-2026-032.webp',
    legendaAcima: 'Analise o meme criado a partir de uma imagem da obra <i>Memorable deeds and sayings</i>, produzida em Paris por volta de 1413.',
    legenda: '(www.medievalmemes.org)',
    enunciado: `<p>O meme mostra uma roda da fortuna, sendo girada pela senhora Fortuna, e expõe uma característica da mentalidade do Período Medieval:</p>`,
    alternativas: [
      { letra: 'A', texto: 'a ganância na busca pela riqueza e por privilégios sociais.' },
      { letra: 'B', texto: 'a paixão humana por jogos de azar e por duelos pessoais.' },
      { letra: 'C', texto: 'a contínua separação entre o poder político e o poder religioso.' },
      { letra: 'D', texto: 'a crença de que ninguém consegue controlar o próprio destino.', explicacao: 'Correta! A roda da Fortuna, que sobe e derruba as pessoas ao acaso, simboliza a ideia medieval de que o destino humano está fora do controle de cada um.' },
      { letra: 'E', texto: 'a suposição de que todos dispõem do livre-arbítrio.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unesp-2026-033',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 33,
    disciplina: 'História',
    conteudo: 'his-1b7',
    subtopico: 'Contribuição africana na economia colonial',
    dificuldade: 'media',
    textoApoio: TEXTO_UNESP_2026_A_COSTA_E_SILVA,
    enunciado: `<p>Considerando o excerto, a contribuição econômica dos escravizados africanos para o aumento da acumulação de capitais na metrópole portuguesa também derivou</p>`,
    alternativas: [
      { letra: 'A', texto: 'da prática habitual do uso do trabalho de escravizados na Europa.' },
      { letra: 'B', texto: 'dos conhecimentos produtivos aportados à colônia pelos africanos.', explicacao: 'Correta! O excerto mostra que os africanos trouxeram técnicas de metalurgia do ferro, de mineração do ouro (bateia, escavação), de ourivesaria e de tecelagem, que alimentaram a produção colonial e, portanto, os lucros da metrópole.' },
      { letra: 'C', texto: 'do monopólio do Estado português no comércio de escravizados.' },
      { letra: 'D', texto: 'da convivência e do aprendizado dos africanos com os indígenas da América.' },
      { letra: 'E', texto: 'da preservação do patrimônio cultural africano pelos missionários cristãos.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unesp-2026-034',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 34,
    disciplina: 'História',
    conteudo: 'his-1b4',
    subtopico: 'Cultura africana no Brasil colonial',
    dificuldade: 'facil',
    textoApoio: TEXTO_UNESP_2026_A_COSTA_E_SILVA,
    enunciado: `<p>Segundo o excerto, os africanos trazidos ao Brasil na condição de escravizados</p>`,
    alternativas: [
      { letra: 'A', texto: 'defenderam valores culturais que estimulavam o uso da imaginação e afastavam o pensamento lógico e racional.' },
      { letra: 'B', texto: 'mantiveram respeito estrito às determinações metropolitanas de proibição da produção de manufaturados.' },
      { letra: 'C', texto: 'aderiram às oposições das elites coloniais contra a exploração mercantilista de origem metropolitana.' },
      { letra: 'D', texto: 'permitiram a descoberta e a exploração sistemática de fontes de minérios pelos colonizadores portugueses.' },
      { letra: 'E', texto: 'trouxeram repertório cultural que se combinou com tradições e mitos de origens indígena e europeia.', explicacao: 'Correta! O texto mostra relatos africanos que se mesclavam com os ameríndios e europeus (o Curupira e o <i>moatia</i>), além de jogos, brinquedos e festas (maracatus, congadas, reisados).' },
    ],
    gabarito: 'E',
  },
  {
    id: 'unesp-2026-035',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 35,
    disciplina: 'História',
    conteudo: ['his-2b6', 'his-1b2'],
    subtopico: 'Pintura histórica e identidade nacional no Império',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unesp-2026-035.webp',
    legendaAcima: 'Analise a tela “Primeira missa no Brasil”, pintada por Victor Meirelles em 1860.',
    enunciado: `<p>Ao representar, no século XIX, a primeira missa realizada no Brasil, a tela</p>`,
    alternativas: [
      { letra: 'A', texto: 'sugere a existência de harmonia entre os grupos étnicos e sociais que habitavam o território da colonização portuguesa.', explicacao: 'Correta! A pintura, encomendada no Segundo Reinado para construir uma identidade nacional, mostra indígenas observando a missa de forma pacífica e curiosa, idealizando um encontro harmonioso entre colonizadores e nativos.' },
      { letra: 'B', texto: 'valoriza a liberdade de culto religioso e a tolerância das lideranças católicas em relação às religiosidades dos povos indígenas.' },
      { letra: 'C', texto: 'critica o caráter tardio e insuficiente da ação missionária católica, responsável pela catequização dos povos indígenas.' },
      { letra: 'D', texto: 'critica a imposição do catolicismo aos povos indígenas, forçados a assistir à cerimônia religiosa organizada pelos colonizadores.' },
      { letra: 'E', texto: 'questiona a ausência de separação entre Estado e Igreja, determinada pelos governos gerais impostos pelos colonizadores.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unesp-2026-036',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 36,
    disciplina: 'História',
    conteudo: ['his-2b6-2', 'his-3b1'],
    subtopico: 'Proclamação da República',
    dificuldade: 'facil',
    enunciado: `<p>Analise o excerto do romance <i>Esaú e Jacó</i>, de Machado de Assis, publicado originalmente em 1904.</p>
      <p>— Mas o que é que há? perguntou Aires.<br>
      — A república está proclamada.<br>
      — Já há governo?<br>
      — Penso que já; mas diga-me V. Ex.<sup>a</sup>: ouviu alguém acusar-me jamais de atacar o governo? Ninguém. Entretanto... Uma fatalidade! Venha em meu socorro. Excelentíssimo. Ajude-me a sair deste embaraço. A tabuleta está pronta, o nome todo pintado. — <i>“Confeitaria do Império”</i>, a tinta é viva e bonita. O pintor teima em que lhe pague o trabalho, para então fazer outro. Eu, se a obra não estivesse acabada, mudava de título, por mais que me custasse, mas hei de perder o dinheiro que gastei? V. Ex.<sup>a</sup> crê que, se ficar <i>“Império”</i>, venham quebrar-me as vidraças?<br>
      — Isso não sei.<br>
      — Realmente, não há motivo; é o nome da casa, nome de trinta anos, ninguém a conhece de outro modo.<br>
      — Mas pode por <i>“Confeitaria da República”</i>...<br>
      — Lembrou-me isso, em caminho, mas também me lembrou que, se daqui a um ou dous meses, houver nova reviravolta, fico no ponto em que estou hoje, e perco outra vez o dinheiro.</p>
      <p><small>(Machado de Assis. <i>Obra completa</i>, 1986.)</small></p>
      <p>O excerto mostra um diálogo do proprietário de uma confeitaria com outro personagem, o Conselheiro Aires. No diálogo, o dono da confeitaria expressa</p>`,
    alternativas: [
      { letra: 'A', texto: 'sua oposição à alta dos preços, resultante da inflação e da desvalorização da moeda dos últimos anos do Império.' },
      { letra: 'B', texto: 'sua preocupação com as reações políticas do povo, derivada das violentas rebeliões populares republicanas.' },
      { letra: 'C', texto: 'seu desconforto com a mudança de regime político, apresentada como prejudicial às suas preocupações monetárias.', explicacao: 'Correta! O confeiteiro não discute a República em si: preocupa-se com o dinheiro gasto na tabuleta “Confeitaria do Império” e com o risco de perdê-lo de novo se houver outra “reviravolta”.' },
      { letra: 'D', texto: 'seu alheamento em relação ao debate político, restrito à época aos partidos políticos e aos membros do parlamento nacional.' },
      { letra: 'E', texto: 'sua insatisfação com a Proclamação da República, justificada por sua histórica adesão política ao modelo monárquico.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unesp-2026-037',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 37,
    disciplina: 'História',
    conteudo: 'his-3a4',
    subtopico: 'Expansão territorial dos Estados Unidos',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unesp-2026-037.webp',
    legendaAcima: 'Analise o mapa que apresenta o crescimento do território dos Estados Unidos.',
    legenda: '(<i>Atlas of the North American Indian</i>, 2000. Adaptado.)',
    enunciado: `<p>O mapa mostra que</p>`,
    alternativas: [
      { letra: 'A', texto: 'as guerras internas e externas e a compra de terras junto a outras potências europeias definiram os limites do território estadunidense.', explicacao: 'Correta! O mapa mostra compras (Louisiana da França, Flórida da Espanha, Alasca da Rússia, Gadsden do México) e conquistas por guerra (Cessão Mexicana após a Guerra contra o México), além da anexação do Texas.' },
      { letra: 'B', texto: 'a ocupação territorial estadunidense iniciou-se no Leste, durante a colonização inglesa, e avançou para o Oeste após a vitória nortista na Guerra de Secessão.' },
      { letra: 'C', texto: 'as anexações das terras indígenas ao território estadunidense ocorreram por meio de acordos e negociações pacíficas ao longo dos séculos XVIII e XIX.' },
      { letra: 'D', texto: 'as anexações, por meio da compra, de terras antes pertencentes ao México completaram o processo de expansão do território estadunidense.' },
      { letra: 'E', texto: 'a diversidade da colonização europeia na América do Norte, entre os séculos XVII e XIX, impediu a completa unificação territorial estadunidense.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unesp-2026-038',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 38,
    disciplina: 'História',
    conteudo: 'his-2b6-2',
    subtopico: 'População do Brasil em 1872',
    dificuldade: 'dificil',
    enunciado: `<p>Analise a tabela que mostra a distribuição da população brasileira total por região, segundo grupos populacionais, em 1872.</p>
      <table class="tabela-prova">
        <tr><th>Região</th><th>População total</th><th>População de escravizados</th><th>População de brasileiros livres</th><th>População de imigrantes estrangeiros</th></tr>
        <tr><td>Extremo Norte</td><td>691 887</td><td>103 376</td><td>576 851</td><td>11 660</td></tr>
        <tr><td>Nordeste</td><td>4 272 295</td><td>404 003</td><td>3 840 632</td><td>27 660</td></tr>
        <tr><td>Oeste</td><td>212 140</td><td>16 546</td><td>194 189</td><td>1 405</td></tr>
        <tr><td>Sul</td><td>721 337</td><td>93 335</td><td>573 809</td><td>54 193</td></tr>
        <tr><td>Centro-Sul</td><td>4 016 922</td><td>891 306</td><td>2 977 410</td><td>148 706</td></tr>
      </table>
      <p><small>(Alexandre de Freitas Barbosa. <i>A formação do mercado de trabalho no Brasil</i>, 2008. Adaptado.)</small></p>
      <p>Os dados da tabela evidenciam que, no Brasil de 1872,</p>`,
    alternativas: [
      { letra: 'A', texto: 'as regiões Nordeste e Centro-Sul reuniam populações maiores de escravizados e de imigrantes estrangeiros devido às exigências de mão de obra nas lavouras de cacau e de algodão.' },
      { letra: 'B', texto: 'as regiões Extremo Norte e Nordeste reuniam as menores populações de escravizados devido à forte presença indígena.' },
      { letra: 'C', texto: 'a população de imigrantes estrangeiros na região Sul era, aproximadamente, o dobro da população de imigrantes estrangeiros na região Centro-Sul, proporcionalmente às respectivas populações totais.', explicacao: 'Correta! Sul: 54 193 ÷ 721 337 ≈ 7,5% de imigrantes; Centro-Sul: 148 706 ÷ 4 016 922 ≈ 3,7%. Proporcionalmente, o Sul tinha cerca do dobro.' },
      { letra: 'D', texto: 'a população de pessoas livres, em termos absolutos e proporcionais, era maior na região Extremo Norte do que na região Sul.' },
      { letra: 'E', texto: 'as regiões Oeste e Sul reuniam as menores populações de escravizados e de imigrantes estrangeiros em função da exigência de mão de obra especializada na indústria local.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unesp-2026-039',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 39,
    disciplina: 'História',
    conteudo: 'his-3a7',
    subtopico: 'Diáspora africana e independências africanas',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unesp-2026-039.webp',
    legendaAcima: 'Analise a capa do álbum <i>Survival</i>, da banda jamaicana Bob Marley &amp; The Wailers, lançado em 1979.',
    legenda: '(Regina Claro. <i>Olhar a África: fontes visuais para sala de aula</i>, 2012.)',
    enunciado: `<p>A composição da capa</p>`,
    alternativas: [
      { letra: 'A', texto: 'relembra a violência da conquista ibérica dos litorais africanos e o início da exploração do centro do continente nos séculos XV e XVI.' },
      { letra: 'B', texto: 'estabelece, por meio de bandeiras de países africanos independentes e de imagem estilizada de uma embarcação, um vínculo entre África e América.', explicacao: 'Correta! A capa reúne bandeiras de países africanos já independentes e, na faixa do título, a planta estilizada de um navio negreiro com os cativos enfileirados, ligando a África à diáspora africana na América (a Jamaica de Bob Marley).' },
      { letra: 'C', texto: 'revela, por meio das bandeiras dos países islâmicos e de imagem alusiva às religiosidades africanas, a diversidade e a tolerância religiosa na África.' },
      { letra: 'D', texto: 'celebra a resistência dos africanos às ações imperialistas dos Estados Unidos e dos países do Ocidente europeu nos séculos XV e XVI.' },
      { letra: 'E', texto: 'critica, por meio das bandeiras das colônias africanas e do título do álbum, a divisão do continente africano realizada pelos colonizadores europeus.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unesp-2026-040',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 40,
    disciplina: 'História',
    conteudo: 'his-3b2',
    subtopico: 'Trabalho feminino na Primeira República',
    dificuldade: 'media',
    enunciado: `<p>A norma oficial ditava que a mulher devia ser resguardada em casa, ocupando-se dos afazeres domésticos, enquanto os homens asseguravam o sustento da família trabalhando no espaço da rua. Longe de retratar a realidade, tratava-se de um estereótipo calcado nos valores da elite colonial [...]. Com a industrialização, [as mulheres] chegaram, junto com as crianças, a compor mais da metade da força de trabalho em certas indústrias, notadamente nas de tecidos. As estatísticas sobre o Rio Grande do Sul em 1900 mostram que cerca de 42% da população economicamente ativa era feminina [...]. No censo de 1920 [...], ainda 49,4% da população economicamente ativa (PEA) do estado e 50,8% da PEA em Porto Alegre constavam como feminina. Na indústria, as mulheres ocupavam 28,4% das vagas no estado, e 29,95% na capital.</p>
      <p><small>(Cláudia Fonseca. “Ser mulher, mãe e pobre”. <i>In</i>: Mary Del Priore (org.). <i>História das mulheres no Brasil</i>, 2015.)</small></p>
      <p>Os dados apresentados no excerto mostram que</p>`,
    alternativas: [
      { letra: 'A', texto: 'os papéis dos gêneros no Brasil, da passagem do século XIX para o XX, reproduziam padrões de comportamento de origem europeia, impostos ao Brasil durante o Período Republicano.' },
      { letra: 'B', texto: 'havia uma contradição entre a participação das populações masculina e feminina no mercado de trabalho e as convenções sociais predominantes no Brasil das décadas iniciais do século XX.', explicacao: 'Correta! A norma dizia que a mulher devia ficar em casa, mas os dados mostram quase metade da PEA feminina: a realidade do trabalho contradizia as convenções sociais.' },
      { letra: 'C', texto: 'existia um contraste entre as leis trabalhistas que proibiam a presença feminina nas indústrias e as necessidades das famílias pobres que precisavam dos rendimentos das mulheres trabalhadoras.' },
      { letra: 'D', texto: 'a industrialização transformou o mercado de trabalho brasileiro do início do Período Republicano e alterou radicalmente a percepção acerca do papel e do lugar das mulheres na sociedade.' },
      { letra: 'E', texto: 'predominava o emprego de mão de obra feminina na indústria têxtil brasileira do princípio do século XX, devido à maior especialização e facilidade das mulheres no manejo de tecidos.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unesp-2026-041',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 41,
    disciplina: 'História',
    conteudo: 'his-4b4',
    subtopico: 'Marginalização social no Brasil contemporâneo',
    dificuldade: 'media',
    enunciado: `<p>Analise parte da letra da música “Tô ouvindo alguém me chamar”, de Mano Brown, faixa de <i>Sobrevivendo no inferno</i>, álbum lançado em 1997 pelos Racionais MC’s.</p>
      <p>Nunca mais vi meu irmão<br>
      Diz que ele pergunta de mim (não sei não)<br>
      A gente nunca teve muito a ver<br>
      Outra ideia, outro rolê<br>
      Os maluco lá do bairro<br>
      Já falava de revólver, droga, carro<br>
      Pela janela da classe, eu olhava lá fora<br>
      A rua me atraía mais do que a escola<br>
      Fiz dezessete, tinha que sobreviver<br>
      Agora eu era um homem, tinha que correr<br>
      No mundão você vale o que tem<br>
      Eu não podia contar com ninguém<br>
      [...] fica você com seu sonho de doutô<br>
      Quando acordar cê me avisa, morô?<br>
      Eu e meu irmão era como óleo e água<br>
      Quando eu saí de casa trouxe muita mágoa<br>
      Isso há mais ou menos seis anos atrás [...]<br>
      Meu sobrinho nasceu<br>
      Diz que o rosto dele é parecido com o meu<br>
      É, diz...<br>
      Um pivete eu sempre quis<br>
      Meu irmão merece ser feliz<br>
      Deve estar a essa altura<br>
      Bem perto de fazer a formatura<br>
      Acho que é direito, advocacia<br>
      Acho que era isso que ele queria<br>
      Sinceramente, eu me sinto feliz<br>
      Graças a Deus, não fez o que eu fiz<br>
      Minha finada mãe, proteja o seu menino<br>
      O diabo agora guia o meu destino<br>
      Se o júri for generoso comigo<br>
      Quinze anos pra cada latrocínio<br>
      Sem dinheiro pra me defender [...]</p>
      <p><small>(<i>Sobrevivendo no inferno</i>, 2018.)</small></p>
      <p>O excerto da letra identifica</p>`,
    alternativas: [
      { letra: 'A', texto: 'o reconhecimento da criminalidade como problema de caráter moral nas áreas de grande concentração populacional no Brasil republicano.' },
      { letra: 'B', texto: 'a denúncia da inexistência de políticas públicas, durante o regime militar brasileiro, voltadas ao acolhimento de jovens negros das periferias das grandes cidades.' },
      { letra: 'C', texto: 'a constatação dos efeitos do racismo estrutural, surgido na sociedade brasileira após a abolição da escravidão nos anos finais do Segundo Reinado.' },
      { letra: 'D', texto: 'o contraste entre os padrões normatizados de conduta na sociedade brasileira contemporânea e a marginalização social de parte da população pobre.', explicacao: 'Correta! A letra contrapõe o irmão que seguiu o caminho socialmente valorizado (escola, faculdade de direito) ao narrador atraído pela rua, que acaba no crime e na prisão, sem dinheiro para se defender: a marginalização de parte da população pobre.' },
      { letra: 'E', texto: 'a supressão, após o fim do regime militar brasileiro, das políticas educacionais e do estímulo ao emprego para a população negra das grandes metrópoles.' },
    ],
    gabarito: 'D',
  },

  // ───────────────────────── Geografia (42–45) ─────────────────────────
  {
    id: 'unesp-2026-042',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 42,
    disciplina: 'Geografia',
    conteudo: 'geo-c3',
    subtopico: 'Movimentos sociais em rede',
    dificuldade: 'facil',
    enunciado: `<p>Os movimentos sociais em rede, como todos os movimentos sociais da história, trazem a marca de sua sociedade. São amplamente constituídos de indivíduos que convivem confortavelmente com as tecnologias digitais no mundo híbrido da realidade virtual. Seus valores, objetivos e estilo organizacional referem-se diretamente à cultura da autonomia que caracteriza as novas gerações de um novo século. Não poderiam existir sem a internet. Mas seu significado é muito mais profundo. Eles são talhados para o papel de agentes da mudança na sociedade em rede, num contraste agudo com as instituições políticas obsoletas herdadas de uma estrutura social historicamente superada.</p>
      <p><small>(Manuel Castells. <i>Redes de indignação e esperança: movimentos sociais na era da internet</i>, 2013.)</small></p>
      <p>O tipo de movimento social caracterizado no excerto é exemplificado</p>`,
    alternativas: [
      { letra: 'A', texto: 'na invasão russa da Ucrânia, que se concentrou na desmontagem das bases de comunicação digital ucranianas.' },
      { letra: 'B', texto: 'nos ataques do Hamas, que capturou pessoas em meio a um festival de música e impediu que elas se comunicassem com parentes.' },
      { letra: 'C', texto: 'na recente lei brasileira que proibiu o uso de celulares por estudantes nas escolas de educação básica e ensino superior.' },
      { letra: 'D', texto: 'no <i>Occupy Wall Street</i>, que reuniu investidores do mercado financeiro numa campanha de arrecadação de fundos pela internet.' },
      { letra: 'E', texto: 'na Primavera Árabe, que ocorreu em diversos países e recorreu à circulação ágil de mensagens por redes sociais.', explicacao: 'Correta! A Primavera Árabe (2010-2012) foi uma onda de protestos contra governos autoritários, organizada e divulgada pelas redes sociais — exatamente o movimento social em rede descrito por Castells.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'unesp-2026-043',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 43,
    disciplina: 'Geografia',
    conteudo: ['geo-4u5', 'geo-c3'],
    subtopico: 'Sul Global',
    dificuldade: 'facil',
    enunciado: `<p>No cenário geopolítico contemporâneo, marcado por mudanças e desafios significativos, o conceito de “Sul Global” vem ganhando destaque como um vetor crucial para o debate sobre desenvolvimento inclusivo e equitativo. Esse termo transcende as fronteiras geográficas tradicionais, reunindo países que compartilham desafios socioeconômicos similares e uma história de marginalização nas relações internacionais. A presidência brasileira do G20, entre 2023 e 2024, seguida pela da África do Sul, simboliza a emergência das nações do “Sul Global” no cenário mundial, redefinindo as dinâmicas de cooperação internacional.</p>
      <p><small>(https://relacoesexteriores.com.br. Adaptado.)</small></p>
      <p>A construção geopolítica do termo “Sul Global” evidencia uma</p>`,
    alternativas: [
      { letra: 'A', texto: 'maior representatividade e relevância para os países periféricos no cenário internacional.', explicacao: 'Correta! O termo reúne países com histórico de marginalização nas relações internacionais e simboliza sua emergência e maior voz em fóruns como o G20.' },
      { letra: 'B', texto: 'autonomia ao mundo oriental para o crescimento econômico sustentável.' },
      { letra: 'C', texto: 'participação político-militar dos países emergentes em decisões de âmbito global.' },
      { letra: 'D', texto: 'transferência do centro do poder mundial para os países subdesenvolvidos do hemisfério Sul.' },
      { letra: 'E', texto: 'menor dependência política e econômica dos países ocidentais perante os organismos internacionais.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unesp-2026-044',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 44,
    disciplina: 'Geografia',
    conteudo: 'geo-4u5',
    subtopico: 'Divisão Internacional do Trabalho',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/unesp-2026-044.webp',
    legendaAcima: 'Examine a charge do cartunista Adão Iturrusgarai.',
    legenda: '(https://umbrasil.com)',
    enunciado: `<p>A charge ironiza</p>`,
    alternativas: [
      { letra: 'A', texto: 'o cálculo do Índice de Desenvolvimento Humano Ajustado à Desigualdade, revelador do grau de concentração de renda entre as pessoas de um país.' },
      { letra: 'B', texto: 'o neocolonialismo como expressão de dominação econômica, sujeitando países agroexportadores à importação de bens industrializados.' },
      { letra: 'C', texto: 'a desigual Divisão Internacional do Trabalho, enfatizando a especialização produtiva dos países por meio do valor agregado dos produtos.', explicacao: 'Correta! No “comércio de trocas”, uma montanha de soja e minério (produtos primários, de baixo valor agregado) é trocada por um único chip (alto valor agregado): a charge ironiza a desigual Divisão Internacional do Trabalho.' },
      { letra: 'D', texto: 'a ordem mundial bipolar entre distintos modelos de produção, reforçando desigualdades entre países desenvolvidos e países subdesenvolvidos.' },
      { letra: 'E', texto: 'o monopólio industrial como indutor de novos mercados, condição para que países subdesenvolvidos tenham acesso a bens de consumo duráveis.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unesp-2026-045',
    prova: 'Unesp 2026', vestibular: 'Unesp', ano: 2026,
    numeroOriginal: 45,
    disciplina: 'Geografia',
    conteudo: 'geo-3u5',
    subtopico: 'Moedas sociais e economia local',
    dificuldade: 'facil',
    enunciado: `<p>Leia a transcrição de uma reportagem publicada no canal “Jornalismo TV Cultura”, no YouTube.</p>
      <p>Uma prática que movimenta cinco milhões de reais por mês em todo o país: os bancos comunitários, regulamentados pelo Banco Central, que funcionam principalmente em pequenas comunidades. Um exemplo dessa prática ocorre no Açougue do Silvestre, na Zona Sul de São Paulo, que aceita várias formas de pagamento. “Pode pagar com dinheiro real, com moeda Sampaio ou com cartões”. Não, você não ouviu errado, aqui se aceita o Sampaio, uma moeda social. Ela foi criada no bairro Jardim Maria Sampaio e só pode ser usada por aqui. “Para o comerciante, troca um por um. Dá um real, recebe um Sampaio. Dá um Sampaio, recebe um real. Então, para a gente, é dinheiro vivo. Mesma coisa do que fosse o real”, diz o dono do açougue.</p>
      <p><small>(www.youtube.com, 03.08.2024. Adaptado.)</small></p>
      <p>A alternativa ao uso do real para pagamentos, apresentada na reportagem, demonstra uma estratégia de</p>`,
    alternativas: [
      { letra: 'A', texto: 'problematização da reprodução do capital, já que, emitindo sua própria moeda, as instituições financeiras adotam políticas socialistas de mercado.' },
      { letra: 'B', texto: 'fomento ao comércio local, já que, mantendo a paridade com o real, a moeda social estimula a circulação da economia entre os moradores do próprio bairro.', explicacao: 'Correta! O Sampaio vale exatamente um real, mas só circula no bairro: o dinheiro gasto fica no comércio local e fortalece a economia da própria comunidade.' },
      { letra: 'C', texto: 'resistência ao sistema bancário privado, considerando que, ao se desvincular da moeda corrente no país, as pessoas passam a controlar a economia.' },
      { letra: 'D', texto: 'incentivo ao consumo consciente, considerando que as pessoas, ao utilizarem moedas de menor circulação, enfrentam maior burocracia para comprar novos produtos.' },
      { letra: 'E', texto: 'rearranjo de centralidades financeiras, já que, ao emitir uma moeda própria, os bairros são obrigados a estabelecer novas instituições especulativas.' },
    ],
    gabarito: 'B',
  },
);
