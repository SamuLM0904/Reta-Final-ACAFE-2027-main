/**
 * Unicamp 2026 — 1ª fase (Conhecimentos Gerais), provas Q e X — questões 1 a 72 (4 alternativas).
 *
 * Fonte: Provas/Outros/UNICAMP/2026 - Prova Q-X.pdf; gabarito oficial: Provas/Outros/UNICAMP/2026 - Gabarito Q-X.pdf
 * (JSON: Provas/Outros/UNICAMP/2026_gabarito.json).
 * Questões de ESTUDO — nunca entram nos simulados. Aparecem no módulo da matéria, dentro do capítulo
 * indicado em `conteudo` (dados/conteudos.js).
 * Fora: 22 e 24 (Sociologia); 23, 25, 26 e 27 (Filosofia/Sociologia); 62 (conto "Réplica", de Chimamanda
 * Adichie) e 64 (Casa Velha, de Machado de Assis) — dependem da leitura das obras obrigatórias da Unicamp.
 * Formato das questões: veja README.md ("Como adicionar uma questão nova").
 */

/* Texto das questões 9, 10 e 11 */
var TEXTO_UNICAMP_2026_9_11 = `<p>As baterias são fundamentais no mundo moderno, sendo a fonte de energia portátil que alimenta dispositivos como celulares e <i>laptops</i>, veículos elétricos e sistemas de armazenamento de energia renovável. Duas grandezas que caracterizam uma bateria é a sua capacidade de carga elétrica, expressa em miliampère-hora (mAh) e a energia que ela armazena, usualmente dada em watts-hora (Wh).</p>`;

/* Texto das questões 13 e 14 */
var TEXTO_UNICAMP_2026_13_14 = `<p>Recentemente, grandes cidades iniciaram a implantação de faixas exclusivas para motocicletas como, por exemplo, a faixa azul na cidade de São Paulo. Um motociclista adentra, em <i>t</i> = 0, um percurso retilíneo de uma faixa azul com velocidade constante <i>v</i><sub>0</sub> = 36 km/h e mantém essa velocidade até o tempo <i>t</i> = 30 s (trecho I). Em seguida, continua o percurso com <u>desaceleração constante</u> (<i>a</i> &lt; 0) até parar completamente diante de um semáforo em <i>t</i> = 50 s (trecho II). Após mais 30 s, ele retoma o movimento e mantém uma <u>aceleração constante e positiva</u> <i>a</i> = 0,8 m/s<sup>2</sup> desde <i>t</i> = 80 s até <i>t</i> = 95 s (trecho III). Posteriormente, o motociclista segue com velocidade constante até <i>t</i> = 120 s (trecho IV).</p>`;

/* Texto das questões 55 e 56 */
var TEXTO_UNICAMP_2026_55_56 = `<p>A rua é nóix! Sempre com letra minúscula, porque não é o Nós da totalidade, uma vez que não sabemos exatamente quem ou quantos somos, quem faz parte ou não, quem está dentro ou fora. Mas, se pegar para um, vai pegar pra geral. O nóix é sempre mais que um. Mesmo sozinho, na missão, existe algo para além da presença física do eu e do outro. Assumindo nossas ancestralidades, convivemos com os espíritos daqueles que já se foram. O nóix opera pela lógica dos bondes de galera, do lado A ou lado B. Quem é amigo fecha com a gente, quem é alemão rala. Porque o fechamento é o fundamento ético das ruas. Recebe-se quem chega de boa, na paz, mas, se vacila, vai. Com i e x, o nóix demarca um sotaque, um registro local, um lugar, o Pretuguês de Lélia Gonzalez. Desobedecendo à instituída norma culta, o nóix – escrito ou falado – revela sua potência operando à margem da obediência à linguagem fonética dominante. O nóix é a potência da contaminação diferencial das diversidades de um povo em tempos e espaços múltiplos, que se repete numa atmosfera espectral que ultrapassa a lógica temporal predominante.</p>
<p><small>(Adaptado de MORAES, M. J. D. A rua é nóix, Revista Cult, ed. 271, 1 jul. de 2021.)</small></p>`;

QUESTOES.push(
  // ───────────────────────────── Inglês (1 a 7) ─────────────────────────────
  {
    id: 'unicamp-2026-001',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 1,
    disciplina: 'Inglês',
    subtopico: 'Vocabulário',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2026-001.webp',
    legendaAcima: '<b>Texto 1</b>',
    legenda: '<small>(Disponível em https://www.latimes.com/entertainment-arts/awards/story/2025-01-05/fernanda-torres-golden-globes-2025-im-still-here. Acesso em 22/05/2025.)</small>',
    textoApoio: `<p>Leia o texto 1 e as informações do texto 2.</p>
<p><b>Texto 2</b></p>
<p><b>UPSET</b><br><b><i>1. noun [C]</i></b><br>− an outcome that goes against what was considered to be the most likely result.<br><b><i>2. adjective</i></b><br>− unhappy, worried, angry, or disappointed because something unpleasant has happened.</p>
<p><small>(Adaptado de https://www.collinsdictionary.com/dictionary/english/upset. Acesso em 22/05/2025.)</small></p>`,
    enunciado: `<p>O texto 1 causou indignação nas redes sociais. Algumas pessoas comentaram: “Se eles estão <i>upset</i>, a gente tá <i>happy</i>!”. O mal-entendido se deve à polissemia, em inglês, da palavra "<i>upset</i>". É correto afirmar que, no texto 1, “<i>upset</i>” é usada com o sentido da</p>`,
    alternativas: [
      { letra: 'A', texto: 'primeira definição mostrada no texto 2 e, por isso, tem conotação sarcástica ao comparar as atrizes citadas.' },
      { letra: 'B', texto: 'segunda definição mostrada no texto 2 e, por isso, não assume conotação crítica.' },
      { letra: 'C', texto: 'primeira definição mostrada no texto 2 e, por isso, não desqualifica a vitória da atriz.', explicacao: 'Correta! Em “pulls off Golden Globes’ biggest upset”, upset é substantivo: um resultado contrário ao mais provável (uma “zebra”), já que Fernanda Torres venceu atrizes mais cotadas. Não significa “chateado”, nem desqualifica a vitória.' },
      { letra: 'D', texto: 'segunda definição mostrada no texto 2 e, por isso, estabelece uma hierarquia entre as atrizes citadas.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2026-002',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 2,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'media',
    imagem: ['imagens/estudo/unicamp-2026-002-1.webp', 'imagens/estudo/unicamp-2026-002-2.webp', 'imagens/estudo/unicamp-2026-002-3.webp'],
    legendaAcima: ['Quadro A', 'Quadro B', 'Quadro C'],
    legendaGeral: '<small>(Imagens e texto adaptados de https://www.youtube.com/watch?v=mtXCWXkgCFg. Acesso em 01/05/2025.)</small>',
    textoApoio: `<p>Em um vídeo publicado no canal do Youtube do <i>The New York Times</i>, o diretor de “Ainda Estou Aqui” descreve cenas do filme. Apresenta-se, a seguir, a transcrição da fala do diretor.</p>
<p><i>30 minutes into the film, before any of these scenes, everything in the movie conveys a sense of normalcy. From this point onward, though, this frame revolves around subtraction: of light, as the drapes are shut, of sounds from the outside, of music. In this other one, we see the last intimacy moment between the couple, framed by the military officers, emphasizing a sense of suffocation in what was once a safe place: the family house. Then, we see the first of the only two close-ups in the entire film. We saved it for Eunice’s last glance at Rubens. From here on, we are with her. “I'm Still Here” becomes her film.</i></p>
<p>Observe três quadros extraídos do filme (acima).</p>`,
    enunciado: `<p>Assinale a alternativa que apresenta os quadros na ordem em que foram descritos no texto.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Quadro A, Quadro C, Quadro B.' },
      { letra: 'B', texto: 'Quadro B, Quadro C, Quadro A.', explicacao: 'Correta! Primeiro, o quadro da “subtração” de luz, com as cortinas fechadas (B); depois, o último momento íntimo do casal, enquadrado pelos militares (C); por fim, o close-up do último olhar de Eunice para Rubens (A).' },
      { letra: 'C', texto: 'Quadro C, Quadro B, Quadro A.' },
      { letra: 'D', texto: 'Quadro B, Quadro A, Quadro C.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2026-003',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 3,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/unicamp-2026-003.webp',
    legendaAcima: 'Leia a tirinha a seguir.',
    legenda: '<small>(Adaptado de https://toonut.com. Acesso em 15/05/2025.)</small>',
    enunciado: `<p>A tirinha, em seu sentido geral, faz uma crítica à</p>`,
    alternativas: [
      { letra: 'A', texto: 'injustiça de um personagem receber menos moedas do que o outro, na Wall St.' },
      { letra: 'B', texto: 'diferença de <i>status</i> financeiro entre as pessoas que transitam pela Wall St.' },
      { letra: 'C', texto: 'atitude das pessoas que circulam na Wall St. para as quais lidar com dinheiro é um jogo.', explicacao: 'Correta! A explicação dada ao pedinte é que ele tem “the wrong paradigm”: “in this place money is for playing games” — as moedas vão para o “Coin toss game”, não para quem precisa. O sentido geral da tirinha é criticar quem, em Wall St., trata o dinheiro como jogo.' },
      { letra: 'D', texto: 'postura das pessoas que circulam na Wall St. que ignoram problemas e necessidades sociais.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2026-004',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 4,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'facil',
    textoApoio: `<p><b><i>U.S. Inflation Mild Ahead of Expected Jump From Tariffs</i></b><br>Economists and policymakers are bracing for inflation to reaccelerate as companies adapt to the trade war.</p>
<p><small>(Adaptado de https://www.nytimes.com/2025/05/13/business/inflation-prices-tariffs.html. Acesso em 15/05/2025.)</small></p>`,
    enunciado: `<p>Segundo o texto,</p>`,
    alternativas: [
      { letra: 'A', texto: 'o governo dos EUA está se preparando para um salto na inflação diante da guerra comercial de tarifas.' },
      { letra: 'B', texto: 'a inflação nos EUA se mantém moderada, mas economistas e legisladores estão se preparando diante da expectativa de alta das tarifas.', explicacao: 'Correta! “Inflation mild ahead of expected jump” = a inflação está moderada antes do salto esperado; “economists and policymakers are bracing for inflation to reaccelerate” = economistas e formuladores de políticas se preparam para a nova aceleração, por causa das tarifas.' },
      { letra: 'C', texto: 'a inflação nos EUA deve se manter moderada, pois as empresas estão se adaptando ao aumento das tarifas.' },
      { letra: 'D', texto: 'as empresas dos EUA estão se adaptando à aceleração da inflação diante da guerra de tarifas estabelecida pelo governo.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2026-005',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 5,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2026-005.webp',
    legendaAcima: '<b>Texto 2</b>',
    legenda: '<small>(Disponível em https://whitney.org/artists/3425. Acesso em 29/04/2025.)</small>',
    textoApoio: `<p>Apresenta-se, a seguir, uma citação (texto 1) que originou uma obra de arte (texto 2, acima). Há também um parágrafo (texto 3) que descreve e explica essa obra.</p>
<p><b>Texto 1</b><br>“I do not always feel colored (…). I feel most colored when I am thrown against a sharp white background.”<br><small>(Adaptado de HURSTON, Z. N. <i>How it feels to be colored me</i>. 1928.)</small></p>
<p><b>Texto 3</b><br>The artist Glenn Ligon has stenciled the sentences over and over until the words dissolve into abstract patterns. He built on a text by Zora Neale Hurston, who describes leaving the protective black community of her childhood and suddenly confronting the issue of race. The smearing in the painting’s illegible words embody her confusion about this, something Ligon builds on: “Oil paint wants to spread out and smudge. After trying to make perfect letters, I realized that the smudging and disappearance of the letters was more interesting than trying to make perfect letters.”<br><small>(Adaptado de https://whitney.org/media/720. Acesso em 29/04/2025.)</small></p>`,
    enunciado: `<p>De acordo com o texto 3, é correto afirmar que</p>`,
    alternativas: [
      { letra: 'A', texto: 'a ilegibilidade em parte das imagens é intencional, pois reforça a invisibilização da identidade negra em contextos brancos, como sugere a autora do texto 1.' },
      { letra: 'B', texto: 'os efeitos da tinta usada por Glenn Ligon aludem à confusão desse artista quanto à sua própria identidade racial, semelhante ao que relata a autora do texto 1.' },
      { letra: 'C', texto: 'a repetição de frases nas imagens é proposital, pois representa a recusa de algumas pessoas em se verem como negras, como sugere a autora do texto 1.' },
      { letra: 'D', texto: 'os borrões em parte das imagens são um efeito da técnica usada por Glenn Ligon e aludem às vivências raciais da autora do texto 1.', explicacao: 'Correta! O texto 3 diz que a tinta a óleo “wants to spread out and smudge” (efeito da técnica) e que os borrões das palavras ilegíveis “embody her confusion” — a confusão de Zora Neale Hurston ao confrontar a questão racial, não a do artista.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2026-006',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 6,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'media',
    textoApoio: `<p>Leia o resumo de um artigo científico.</p>
<p><b>Incels: Masculinity in the Transition to Adulthood</b></p>
<p>Incels are men who are members of an online community that experiences an unmet desire for sex and blame women for their struggle. Since 2019 there have been several mass murder attacks committed by Incels motivated by Incel ideology creating a threat of future violence. While the vast majority of Incels do not commit such attacks, researchers have begun to study Incels to prevent violence and uncover the true nature of this community. The study of Incels is incipient; therefore, more knowledge about interventions to address the struggles of involuntary celibacy is needed. This paper emphasizes the masculinity strain experienced by Incels who attempt to perform hegemonic masculinity as part of the transition to adulthood but fall short because of their lack of sexual activity. This work proposes the creation and implementation of Incel-specific, online therapeutic interventions and continued research directly with the Incel community to uncover the complexities of Incel experiences.</p>
<p><small>(Adaptado de https://link.springer.com/article/10.1007/s12119-024-10201-7. Acesso em 16/05/2025.)</small></p>`,
    enunciado: `<p>De acordo com o resumo, é correto afirmar que</p>`,
    alternativas: [
      { letra: 'A', texto: '“Incel” é uma comunidade majoritariamente constituída por homens que culpam mulheres por questionarem sua masculinidade.' },
      { letra: 'B', texto: 'as pesquisas sobre a comunidade “Incel” ainda são escassas, por isso há a necessidade de mais estudos que definam teoricamente a abstinência sexual.' },
      { letra: 'C', texto: 'homens “Incel”, muitas vezes, tentam exercer uma masculinidade dominante que resulta em expectativas frustradas devido à inatividade sexual.', explicacao: 'Correta! O resumo diz que os Incels “attempt to perform hegemonic masculinity [...] but fall short because of their lack of sexual activity”: tentam exercer a masculinidade hegemônica (dominante) e se frustram pela falta de atividade sexual.' },
      { letra: 'D', texto: 'a pesquisa propõe práticas terapêuticas que integrem homens “Incel” a outros grupos sociais para melhor compreender as complexidades da masculinidade.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2026-007',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 7,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'facil',
    textoApoio: `<p>Leia a carta a seguir.</p>
<p>Dear Members of the Harvard Community,<br>For years, the federal government’s grants to Harvard have helped lead to groundbreaking innovations. Recently, the federal government has threatened its partnerships over accusations of antisemitism on our campuses. A list of demands was issued, warning that Harvard must comply if we intend to “maintain our financial relationship with the government.” Most of these demands are unprecedented and represent direct governmental regulation of the “intellectual conditions” at Harvard.<br>They include requirements to audit the viewpoints of our students and faculty, and to “reduce their power” for their ideological views. We will not accept that. The University will not surrender its independence or relinquish its constitutional rights. No government should dictate what universities can teach and which areas of inquiry they can pursue.<br>We do not take our moral duties lightly and we have taken many steps to address and fight antisemitism on campus. However, this will not be achieved by assertions of power, unmoored from the law, to dictate how we operate.</p>
<p>Sincerely,</p>
<p>Alan M. Garber<br>(President of Harvard University)</p>
<p><small>(Adaptado de https://www.harvard.edu/president/news/2025/the-promise-of-american-higher-education/. Acesso em 07/05/2025.)</small></p>`,
    enunciado: `<p>Assinale a alternativa correta em relação ao posicionamento do presidente de Harvard em sua carta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'As acusações de antissemitismo feitas à universidade são inconstitucionais, por isso Garber se recusa a aceitar as demandas propostas pelo governo.' },
      { letra: 'B', texto: 'As comparações entre as ideologias de professores e de alunos são sem precedentes, por isso Garber se nega a abrir mão da liberdade de expressão da comunidade.' },
      { letra: 'C', texto: 'As justificativas do governo para interromper o financiamento são falhas, por isso Garber se nega a tomar medidas para resolver os problemas apontados.' },
      { letra: 'D', texto: 'As demandas do governo são uma tentativa de controle da autonomia das universidades, por isso Garber se recusa a acatar as exigências impostas.', explicacao: 'Correta! Garber diz que as demandas representam “direct governmental regulation” das condições intelectuais de Harvard, que a universidade “will not surrender its independence” e que “no government should dictate what universities can teach”: recusa as exigências em defesa da autonomia.' },
    ],
    gabarito: 'D',
  },

  // ───────────────────────────── Física (8 a 14) ─────────────────────────────
  {
    id: 'unicamp-2026-008',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 8,
    disciplina: 'Física',
    conteudo: 'fis-2b2',
    subtopico: 'Propagação do calor',
    dificuldade: 'facil',
    enunciado: `<p>A uniformidade da temperatura em um ambiente refrigerado depende, além do bom funcionamento do aparelho de ar condicionado, de uma instalação adequada, visando a uma transferência de calor eficiente. Isso pode ser verificado pelo instalador utilizando um termômetro de infravermelho para inspecionar diferentes áreas do recinto. Analise as <u>afirmativas</u> 1, 2, 3 e 4 sobre os mecanismos de transferência de calor: condução, convecção e radiação.</p>
<p>1) A transferência de calor por condução térmica pode ocorrer tanto no vácuo quanto em um meio material.<br>2) A taxa de condução de calor em uma barra não depende da diferença entre as temperaturas de suas extremidades.<br>3) A convecção consiste no transporte de energia térmica de uma região para outra por meio do deslocamento de uma massa de fluido.<br>4) A transferência de calor por radiação térmica pode ocorrer tanto no vácuo quanto em um meio material.</p>
<p>As <u>afirmativas</u> corretas são:</p>`,
    alternativas: [
      { letra: 'A', texto: '1 e 2.' },
      { letra: 'B', texto: '1 e 4.' },
      { letra: 'C', texto: '2 e 3.' },
      { letra: 'D', texto: '3 e 4.', explicacao: 'Correta! A convecção é o transporte de energia pelo deslocamento do fluido (3) e a radiação (ondas eletromagnéticas) se propaga no vácuo e em meios materiais (4). A condução exige meio material (1 é falsa) e seu fluxo é proporcional à diferença de temperatura, pela lei de Fourier (2 é falsa).' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2026-009',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 9,
    disciplina: 'Física',
    conteudo: 'fis-4a1',
    subtopico: 'Corrente e carga elétrica',
    dificuldade: 'facil',
    textoApoio: TEXTO_UNICAMP_2026_9_11,
    enunciado: `<p>Uma bateria inicialmente carregada fornece uma corrente constante de <i>i</i> = 4 000 mA durante o tempo Δ<i>t</i> = 1 hora, ficando descarregada no final desse processo. A carga elétrica <i>Q</i>, que circula por essa bateria nesse intervalo de tempo é</p>`,
    alternativas: [
      { letra: 'A', texto: '4 C.' },
      { letra: 'B', texto: '4 000 C.' },
      { letra: 'C', texto: '14 400 C.', explicacao: 'Correta! Q = i · Δt = 4 A × 3 600 s = 14 400 C.' },
      { letra: 'D', texto: '14 400 000 C.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2026-010',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 10,
    disciplina: 'Física',
    conteudo: 'fis-4a2',
    subtopico: 'Gerador real e voltímetro',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/unicamp-2026-010.webp',
    textoApoio: TEXTO_UNICAMP_2026_9_11,
    enunciado: `<p>De forma simplificada, o comportamento de uma bateria pode ser modelado com uma fonte ideal de diferença de potencial elétrico <i>U<sub>b</sub></i> em série com um resistor de resistência <i>R<sub>b</sub></i>. Dessa maneira, o dispositivo que é alimentado pela bateria pode, muitas vezes, ser representado por um resistor de resistência <i>R</i>.</p>
<p>Na situação exemplificada na figura, a diferença de potencial registrada pelo voltímetro é</p>`,
    alternativas: [
      { letra: 'A', texto: '0,6 V.' },
      { letra: 'B', texto: '3,0 V.', explicacao: 'Correta! A corrente é i = U<sub>b</sub>/(R<sub>b</sub> + R) = 3,6/(1,2 + 6,0) = 0,5 A. O voltímetro, em paralelo com R, mede U = R · i = 6,0 × 0,5 = 3,0 V.' },
      { letra: 'C', texto: '3,6 V.' },
      { letra: 'D', texto: '4,3 V.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2026-011',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 11,
    disciplina: 'Física',
    conteudo: 'fis-3b2',
    subtopico: 'Energia potencial gravitacional',
    dificuldade: 'media',
    textoApoio: TEXTO_UNICAMP_2026_9_11,
    enunciado: `<p>Outra bateria totalmente carregada armazena uma energia <i>E<sub>b</sub></i> = 15 Wh. Devemos elevar uma massa <i>m</i> = 45 kg até a altura <i>y</i>, em relação ao solo, para que a variação da energia potencial gravitacional <i>E<sub>p</sub></i> desse sistema mecânico seja igual à energia armazenada nessa bateria. A altura <i>y</i> deve ser</p>
<p>Dado: <i>g</i> = 10 m/s<sup>2</sup>.</p>`,
    alternativas: [
      { letra: 'A', texto: '0,03 m.' },
      { letra: 'B', texto: '3 m.' },
      { letra: 'C', texto: '120 m.', explicacao: 'Correta! E<sub>b</sub> = 15 W × 3 600 s = 54 000 J. Igualando a m·g·y: y = 54 000/(45 × 10) = 120 m.' },
      { letra: 'D', texto: '1 200 m.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2026-012',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 12,
    disciplina: 'Física',
    conteudo: 'fis-1b4',
    subtopico: 'Lentes — lupa',
    dificuldade: 'facil',
    enunciado: `<p>O Centro de Tecnologia da Informação (CTI) Renato Archer, em Campinas (SP), possui equipamentos avançados de manufatura 3D, incluindo uma impressora capaz de produzir uma miniatura do Cristo Redentor, com pouco mais de 100 μm. Menor que um grão de areia, a peça só é visível com microscópio óptico, baseado em arranjo de um conjunto de lentes. Se uma lente delgada, de distância focal <i>f</i>, é usada para investigar um objeto de altura <i>o</i>, de forma que a imagem seja direita com altura <i>i</i> maior que a do objeto (<i>i</i> &gt; <i>o</i>), é correto afirmar que</p>`,
    alternativas: [
      { letra: 'A', texto: 'a lente é <u>convergente</u> e a distância entre objeto e lente é <u>menor</u> que a distância focal.', explicacao: 'Correta! Imagem direita e maior que o objeto só é formada por lente convergente com o objeto entre o foco e a lente (p &lt; f), como numa lupa; a imagem é virtual. A lente divergente sempre dá imagem direita e menor.' },
      { letra: 'B', texto: 'a lente é <u>divergente</u> e a distância entre objeto e lente é <u>menor</u> que a distância focal.' },
      { letra: 'C', texto: 'a lente é <u>convergente</u> e a distância entre objeto e lente é <u>maior</u> que a distância focal.' },
      { letra: 'D', texto: 'a lente é <u>divergente</u> e a distância entre objeto e lente é <u>maior</u> que a distância focal.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2026-013',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 13,
    disciplina: 'Física',
    conteudo: 'fis-2a4',
    subtopico: 'Gráficos do movimento (MU e MUV)',
    dificuldade: 'media',
    textoApoio: TEXTO_UNICAMP_2026_13_14,
    enunciado: `<p>Qual é o gráfico que representa a posição <i>s</i>(<i>t</i>) do motociclista em função do tempo <i>t</i>?</p>`,
    alternativas: [
      { letra: 'A', texto: '<img src="imagens/estudo/unicamp-2026-013-a.webp" alt="Alternativa A: gráfico s(t) — reta até 300 m em 30 s, curva até 400 m em 50 s, patamar em 400 m até 80 s, curva crescente e reta até cerca de 800 m em 120 s">', explicacao: 'Correta! Trecho I: s = 10 m/s × 30 s = 300 m (reta). Trecho II: frenagem até parar, +10 × 20/2 = 100 m (parábola com concavidade para baixo) → 400 m. Parado de 50 s a 80 s (patamar). Trecho III: +0,8 × 15²/2 = 90 m (concavidade para cima), chegando a 12 m/s. Trecho IV: +12 × 25 = 300 m (reta) → cerca de 790 m.' },
      { letra: 'B', texto: '<img src="imagens/estudo/unicamp-2026-013-b.webp" alt="Alternativa B: gráfico s(t) com patamar perto de 300 m, nova subida até cerca de 460 m e patamar até 80 s">' },
      { letra: 'C', texto: '<img src="imagens/estudo/unicamp-2026-013-c.webp" alt="Alternativa C: gráfico s(t) com patamar em 400 m e uma ondulação perto de 500 m no trecho III">' },
      { letra: 'D', texto: '<img src="imagens/estudo/unicamp-2026-013-d.webp" alt="Alternativa D: gráfico s(t) que sobe até cerca de 300 m e volta a zero no trecho II">' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2026-014',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 14,
    disciplina: 'Física',
    conteudo: ['fis-3b1', 'fis-2a4'],
    subtopico: 'Segunda lei de Newton',
    dificuldade: 'facil',
    textoApoio: TEXTO_UNICAMP_2026_13_14,
    enunciado: `<p>A massa do conjunto motociclista + motocicleta é dada por <i>m</i> = 180 kg. Para o trecho entre os tempos <i>t</i> = 30 s e <i>t</i> = 50 s, em que o movimento tem desaceleração constante, é correto afirmar que o módulo da força resultante que age nesse conjunto é igual a</p>`,
    alternativas: [
      { letra: 'A', texto: '36 N.' },
      { letra: 'B', texto: '90 N.', explicacao: 'Correta! A velocidade cai de 36 km/h = 10 m/s a 0 em 20 s: |a| = 10/20 = 0,5 m/s². Então F = m·|a| = 180 × 0,5 = 90 N.' },
      { letra: 'C', texto: '324 N.' },
      { letra: 'D', texto: '1 800 N.' },
    ],
    gabarito: 'B',
  },

  // ───────────────────────────── Geografia (15 a 21) ─────────────────────────────
  {
    id: 'unicamp-2026-015',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 15,
    disciplina: 'Geografia',
    conteudo: 'geo-2u2',
    subtopico: 'Sistema alimentar e agroindústria',
    dificuldade: 'dificil',
    textoApoio: `<p>“O ato de comer é construído culturalmente, e mediado por práticas, crenças, comportamentos, tabus, que formam os hábitos alimentares, que, por sua vez, relacionam-se a aspectos culturais, socioeconômicos e psicológicos que envolvem o ambiente alimentar de cada indivíduo. Os hábitos alimentares são dinâmicos e sensíveis às mudanças que ocorrem nas sociedades, fundamentalmente, nos sistemas alimentares. Com o sistema alimentar que predomina hoje, a humanidade vem substituindo a comida que carrega significados culturais e tradições ancestrais por produtos alimentares ultraprocessados globalizados, que viajam quilômetros até chegar ao prato, causando a homogeneização dos hábitos alimentares de forma global. O problema é que os ultraprocessados têm acarretado sérios problemas à saúde da população [...]”.</p>
<p><small>(Disponível em https://obha.fiocruz.br/?p=1413. Acesso em 06/08/25.)</small></p>`,
    enunciado: `<p>A partir do texto, é correto afirmar que a produção e o consumo de alimentos no mundo contemporâneo possuem</p>`,
    alternativas: [
      { letra: 'A', texto: 'menor vínculo com o lugar, visto que a indústria de processamento de alimentos e a produção agropecuária estão cada vez mais especializadas. Assim, produtos circulam com maior velocidade e eficiência entre a área de produção e o mercado consumidor, reduzindo o acesso da população a alimentos <i>in natura</i> e à diversidade produtiva regional.', explicacao: 'Correta! O sistema alimentar globalizado desvincula produção e consumo do lugar: a agropecuária e a agroindústria se especializam, os ultraprocessados “viajam quilômetros” com circulação rápida e eficiente, e isso homogeneíza os hábitos, reduzindo o acesso a alimentos in natura e à diversidade regional.' },
      { letra: 'B', texto: 'maior interdependência com o lugar, visto que a indústria de processamento precisa manter a proximidade com as áreas da produção agropecuária, aproveitando a modernização do sistema de circulação para atingir o mercado consumidor mais distante. Isso fortalece o acesso da população a produtos da agricultura familiar e à diversidade produtiva regional.' },
      { letra: 'C', texto: 'maior conexão com o lugar, visto que a indústria de processamento de alimentos pode estar distante da área de produção agropecuária. O sistema de circulação permite interligar, com menor custo, a área de produção ao mercado consumidor, restringindo o acesso da população à produção da pequena indústria local e à diversidade alimentar regional.' },
      { letra: 'D', texto: 'menor correlação com o lugar, visto que a indústria de processamento e a produção agropecuária possuem pouca vinculação entre si, tornando-se independentes, mas com estreitamento promovido pelo sistema de circulação entre a área de produção e o mercado consumidor. Isso favorece o acesso da população aos alimentos da culinária local e à diversidade alimentar regional.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2026-016',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 16,
    disciplina: 'Geografia',
    conteudo: ['geo-1u2', 'geo-c3'],
    subtopico: 'Hemisférios e Norte/Sul Global',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/unicamp-2026-016.webp',
    legendaAcima: '<b>Localização dos países do Norte e Sul Global</b>',
    legenda: '<small>(Elaboração: COMVEST, 2025.)</small>',
    textoApoio: `<p>Atualmente, é comum denominar a divisão político-regional do mundo entre Norte e Sul Global. Essa delimitação não segue exatamente os pontos cardeais. Há países do Norte que estão no Sul e vice-versa, conforme indicado no mapa. Essa forma de divisão está baseada no tabuleiro geopolítico e econômico mundial e afastada da localização geográfica dos países.</p>`,
    enunciado: `<p>Em relação à localização dos países do Norte e Sul Global nos diferentes hemisférios, assinale, com base no mapa, a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Austrália e Nova Zelândia são os únicos países do Norte Global situados no hemisfério meridional e hemisfério ocidental.' },
      { letra: 'B', texto: 'Argentina, Brasil, Chile, Colômbia, Equador e Venezuela estão no Sul Global e têm seus territórios no hemisfério meridional e no hemisfério oriental.' },
      { letra: 'C', texto: 'Estados Unidos e Canadá são países do continente americano no Norte Global que têm seus territórios localizados no hemisfério setentrional e hemisfério ocidental.', explicacao: 'Correta! EUA e Canadá aparecem no Norte Global e estão inteiramente ao norte do Equador (setentrional) e a oeste do meridiano de Greenwich (ocidental). Austrália e Nova Zelândia ficam no hemisfério oriental; os sul-americanos ficam no ocidental; China e Índia são do Sul Global.' },
      { letra: 'D', texto: 'China, Rússia, Índia e Japão, integrantes do Norte Global, estão situados no hemisfério setentrional e no hemisfério oriental.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2026-017',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 17,
    disciplina: 'Geografia',
    conteudo: ['geo-4u2', 'geo-3u1'],
    subtopico: 'Zonas climáticas e biomas da África',
    dificuldade: 'dificil',
    imagem: 'imagens/estudo/unicamp-2026-017.webp',
    legendaAcima: '<b>África e as suas zonas climáticas e zonobiomas</b>',
    legenda: `Legenda:
<table class="tabela-prova">
  <tr><th>Zona</th><th>Clima</th><th>Zonobiomas</th></tr>
  <tr><td>I</td><td>Tropical Equatorial</td><td>Florestas e savanas equatoriais</td></tr>
  <tr><td>II</td><td>Tropical Estacional</td><td>Florestas e savanas estacionais</td></tr>
  <tr><td>III</td><td>Subtropical árido</td><td>Desertos quentes</td></tr>
  <tr><td>IV</td><td>Mediterrâneo</td><td>Chaparral, maqui mediterrâneo</td></tr>
  <tr><td>V</td><td>Temperado quente-úmido</td><td>Florestas quente-temperadas</td></tr>
  <tr><td colspan="3">Zonas de transição</td></tr>
</table>
<small>(COUTINHO, L. M. <i>Biomas brasileiros</i>. São Paulo: Oficina de Textos, p. 27-28, 2016.)</small>`,
    textoApoio: `<p>O mapa da África apresentando seus respectivos climas e zonobiomas (classificação internacional feita em função do clima e da fitofisionomia) é um bom exemplo para mostrar a distribuição das zonas climáticas em faixas latitudinais. Em outros continentes, cordilheiras, correntes marinhas e diversos fatores distorcem, interrompem e/ou expandem essas faixas, tornando-as menos evidentes.</p>`,
    enunciado: `<p>A partir da leitura do mapa e de seus conhecimentos sobre os componentes naturais do continente africano, assinale a alternativa correta em relação às zonas de transição.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A zona de transição I–II apresenta fitofisionomias típicas de savanas perenifólias nas proximidades da zona I e um processo gradativo do desenvolvimento de florestas ombrófilas no limite com a zona II.' },
      { letra: 'B', texto: 'A zona de transição II–III apresenta formações vegetais contínuas e densas, com árvores latifoliadas e higrófilas, típicas da zona II e em detrimento das savanas típicas da zona III.' },
      { letra: 'C', texto: 'A zona de transição II–V apresenta uma vegetação densa e permanente, com gramíneas e arbustos, pois a influência da zona V predomina por influência dos processos costeiros.' },
      { letra: 'D', texto: 'A zona de transição III–II apresenta vegetação de pequeno porte e espécies xerófitas no contato com a zona III, e um processo gradativo de savanização em direção à zona II.', explicacao: 'Correta! Entre o deserto quente (III) e a zona tropical estacional (II), como no Sahel, a vegetação passa de arbustos baixos e xerófitas, adaptadas à seca, junto ao deserto, para savanas à medida que as chuvas aumentam em direção à zona II.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2026-018',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 18,
    disciplina: 'Geografia',
    conteudo: ['geo-3u3', 'geo-c3'],
    subtopico: 'Bacia do Indo — conflito Índia × Paquistão',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2026-018.webp',
    legendaAcima: '<b>Países drenados pela rede hidrográfica do rio Indo</b>',
    legenda: '<small>(Elaboração: COMVEST, 2025. Baseado em https://www.aljazeera.com/news/2011/8/1/kashmir-and-the-politics-of-water. e https://www.hydrosheds.org/. Acesso em 29/06/2025.)</small>',
    textoApoio: `<p>Os conflitos entre Índia e Paquistão se acirraram em 2025, entre outros fatores, pela disputa de recursos hídricos na bacia hidrográfica do rio Indo. Em setembro de 1960, os dois países firmaram o Tratado das Águas do Indo, que regula o uso compartilhado das águas desse sistema fluvial. Ao longo dos anos, a Índia manifestou, em diferentes ocasiões, a intenção de se desvincular do acordo. Em resposta, o governo paquistanês declarou que qualquer tentativa de bloqueio hídrico seria considerada um 'ato de guerra'.</p>
<p><small>(Adaptado de https://www.nytimes.com/2025/04/24/world/asia/india-pakistan-indus-waters-treaty.html. Acesso em 12/05/2025.)</small></p>
<p>Para entender o conflito, é fundamental analisar o sentido do fluxo de drenagem na bacia hidrográfica do rio Indo, conforme mostrado pelo mapa.</p>`,
    enunciado: `<p>A partir da leitura do mapa e do texto, é correto afirmar que os afluentes</p>`,
    alternativas: [
      { letra: 'A', texto: 'são rios drenados para o interior do continente (endorreicos) e escoam em direção à jusante, onde se localizam áreas agrícolas do Paquistão. Por isso, eventuais represamentos pela Índia comprometeriam a economia paquistanesa.' },
      { letra: 'B', texto: 'são rios drenados para o oceano (exorreicos) situados na montante do território indiano. Isso permitiria ao Paquistão represar sua vazão e reduzir o abastecimento indiano destinado às atividades agropecuárias e industriais.' },
      { letra: 'C', texto: 'são rios drenados para o interior do continente (endorreicos) e correm em direção à jusante, comprometendo as atividades econômicas das áreas urbanizadas do Paquistão que dependem da vazão originada nos afluentes situados na Índia.' },
      { letra: 'D', texto: 'são rios drenados para o oceano (exorreicos) situados na montante do Paquistão. Isso permitiria à Índia controlar seu fluxo, afetando as atividades agrícolas paquistanesas e comprometendo a economia do Paquistão.', explicacao: 'Correta! O Indo deságua no Oceano Índico (drenagem exorreica). Seus afluentes nascem na Caxemira e na Índia, a montante do Paquistão; por isso a Índia poderia represar ou desviar o fluxo, prejudicando a agricultura irrigada paquistanesa.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2026-019',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 19,
    disciplina: 'Geografia',
    conteudo: 'geo-c3',
    subtopico: 'Oriente Médio — “eixo da resistência”',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2026-019.webp',
    legendaAcima: '<b>Localização dos países e grupos sob influência do Irã</b>',
    legenda: '<small>(Elaboração: COMVEST 2025.)</small>',
    textoApoio: `<p>Historicamente, a região do Oriente Médio vive uma série de conflitos envolvendo alianças e disputas por interesses econômicos, geopolíticos e religiosos. Por exemplo, o chamado eixo da resistência é formado por um conjunto de países e grupos rebeldes sob influência do Irã. Esse eixo se define por confrontar forças militares ocidentais, como no caso dos Estados Unidos e de Israel. O mapa mostra a localização dos países e grupos sob influência do Irã.</p>
<p><small>(Adaptado de https://www.bbc.com/portuguese/articles/cw4dgr9yrpvo. Acesso em 23/05/2025.)</small></p>`,
    enunciado: `<p>A partir dessas informações, assinale a alternativa que apresenta corretamente as <u>disputas</u> e as <u>alianças</u> do Irã com grupos étnicos, militares e religiosos dentro dos países indicados no mapa.</p>`,
    alternativas: [
      { letra: 'A', texto: '<b>Disputas:</b> com a minoria sunita do islamismo (Iraque); com o Estado Islâmico (Síria).<br><b>Alianças:</b> com os Houthis (Iêmen); com o Hezbollah (Líbano).', explicacao: 'Correta! O Irã, xiita, apoia os Houthis no Iêmen e o Hezbollah no Líbano (aliados do “eixo da resistência”) e se opõe à minoria sunita no Iraque e ao Estado Islâmico, grupo sunita extremista que atuou na Síria.' },
      { letra: 'B', texto: '<b>Disputas:</b> com os Houthis (Iêmen); com o Estado Islâmico (Síria).<br><b>Alianças:</b> com a minoria sunita do islamismo (Iraque); com o Hezbollah (Líbano).' },
      { letra: 'C', texto: '<b>Disputas:</b> com a minoria sunita do islamismo (Iraque); com o Hezbollah (Líbano).<br><b>Alianças:</b> com os Houthis (Iêmen); com o Estado Islâmico (Síria).' },
      { letra: 'D', texto: '<b>Disputas:</b> com os Houthis (Iêmen); com o Hezbollah (Líbano).<br><b>Alianças:</b> com a minoria sunita do islamismo (Iraque); com o Estado Islâmico (Síria).' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2026-020',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 20,
    disciplina: 'Geografia',
    conteudo: 'geo-2u2',
    subtopico: 'Modernização seletiva do agronegócio',
    dificuldade: 'dificil',
    imagem: 'imagens/estudo/unicamp-2026-020.webp',
    legendaAcima: '<b>Circuitos produtivos do agronegócio no estado da Bahia</b>',
    legenda: '<small>(Elaboração: COMVEST 2025.)</small>',
    textoApoio: `<p>O mapa apresenta frações do território brasileiro transformadas a partir da década de 1970 pela implementação de políticas de desenvolvimento. Três áreas limítrofes do Estado da Bahia, que até então não eram modernizadas, foram incorporadas a diferentes circuitos espaciais produtivos globalizados.</p>`,
    enunciado: `<p>Considerando o texto e o mapa dos circuitos produtivos do agronegócio no Estado da Bahia, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A especialização produtiva regional favoreceu o uso intensivo de inovações técnico-científicas, promovendo seletividade espacial da modernização, o que gerou impactos nos mosaicos produtivos tradicionais.', explicacao: 'Correta! As três áreas (grãos no oeste, fruticultura irrigada no vale do São Francisco e silvicultura de eucalipto no sul) se especializaram e concentraram técnica e ciência, enquanto o restante do estado não se modernizou: a modernização é seletiva no espaço e altera as produções tradicionais.' },
      { letra: 'B', texto: 'Os enclaves de modernização regional promoveram a difusão de uma produção diversificada setorialmente, o que garantiu o espraiamento das inovações técnico-científicas para as demais localidades da região.' },
      { letra: 'C', texto: 'A especialização produtiva regional permitiu a cooperação das inovações técnico-científicas com os mosaicos produtivos tradicionais, o que restringiu maior conectividade espacial entre os estados limítrofes.' },
      { letra: 'D', texto: 'Os enclaves de modernização regional viabilizaram a dilatação das inovações técnico-científicas para setores produtivos não especializados, o que acarretou a eliminação da seletividade espacial produzida pela especialização.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2026-021',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 21,
    disciplina: 'Geografia',
    conteudo: 'geo-3u5',
    subtopico: 'Rede urbana e centros de gestão',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2026-021.webp',
    legenda: '<small>(IBGE, Cadastro Central de Empresas: 2012/2021. In: IBGE, Rio de Janeiro, p. 7, 2025.)</small>',
    textoApoio: `<p>A segunda edição do estudo Gestão do Território, elaborado pelo Instituto Brasileiro de Geografia e Estatística (IBGE) em 2024, mostra, no universo dos 5.570 municípios do país, quais são os Centros de Gestão, isto é, os núcleos responsáveis pelo papel de comando na rede urbana brasileira. Em 2024, apenas 39,1% dos municípios do Brasil se qualificavam como Centros de Gestão do Território (2.176 municípios).</p>
<p><small>(Adaptado de IBGE, Gestão do território: 2024. In: IBGE, Rio de Janeiro, 2025.)</small></p>
<p>Um indicador de centralidade na gestão do território é o número de assalariados externos ao Município da sede da empresa (gráfico).</p>`,
    enunciado: `<p>Com base no gráfico anterior, e em seus conhecimentos sobre a rede urbana brasileira, é correto afirmar que</p>`,
    alternativas: [
      { letra: 'A', texto: 'Rio de Janeiro, capital, amplia sua centralidade como centro de gestão empresarial do território nacional, conservando sua histórica função industrial e de administração pública.' },
      { letra: 'B', texto: 'Barueri apresenta tendência de crescimento do assalariado externo, contribuindo para manter a Região Metropolitana de São Paulo no topo da hierarquia urbana.', explicacao: 'Correta! Barueri passou de 163.989 (2012) para 197.356 (2021) assalariados externos. Junto com São Paulo, que também cresceu, e Osasco, reforça a Região Metropolitana de São Paulo como principal centro de gestão do país.' },
      { letra: 'C', texto: 'Brasília apresenta tendência de queda de seus assalariados externos, demonstrando a dificuldade da capital do país para permanecer como centro de gestão pública do território na atualidade.' },
      { letra: 'D', texto: 'Itajaí apresenta destaque por sua função industrial, perdendo força na centralidade da gestão empresarial do território por ser uma cidade de médio porte na Região Metropolitana da Foz do Rio Itajaí.' },
    ],
    gabarito: 'B',
  },

  // ───────────────────────────── História (28 a 34) ─────────────────────────────
  {
    id: 'unicamp-2026-028',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 28,
    disciplina: 'História',
    conteudo: 'his-1b5',
    subtopico: 'União Ibérica — tráfico e prata do Prata',
    dificuldade: 'media',
    textoApoio: `<p>Os dados da alfândega de Buenos Aires fixam em 18.100 o número de africanos oficialmente importados no porto entre 1597 e 1645. Durante alguns anos, a zona platense esteve aberta ao contrato de fornecimento de pessoas escravizadas (<i>Asiento</i>), com os navios negreiros saindo diretamente de Luanda para Buenos Aires. Nos anos de proibição, o contrabando ocorria por meio do Rio de Janeiro. Barcos ligavam os dois portos. No retorno, traziam prata lavrada e por lavrar e ouro, não só para o Rio de Janeiro, mas também para a Bahia e o Recife. Em torno das trocas de africanos pela prata do Peru (Potosí), esses interesses foram consolidados no Rio de Janeiro. Desse episódio resultou uma tradição religiosa conhecida: o culto a Nossa Senhora de Copacabana no Rio de Janeiro, oriundo do Baixo Peru em 1637. Nos anos seguintes, uma capela dedicada à santa foi erigida na praia que recebeu o seu nome.</p>
<p><small>(Adaptado de ALENCASTRO, L. F. <i>O Trato dos Viventes</i>. São Paulo: Companhia das Letras, 2000. p. 110.)</small></p>`,
    enunciado: `<p>Com base no excerto, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A extração de prata em Buenos Aires conectou o Brasil ao comércio internacional de metais que passava por Copacabana.' },
      { letra: 'B', texto: 'O tráfico de pedras preciosas de Buenos Aires complementava o fornecimento de mão de obra trazida de Luanda para o Porto de Copacabana.' },
      { letra: 'C', texto: 'Copacabana remete ao passado em que as Américas portuguesa e espanhola se conectavam por redes comerciais e culturais.', explicacao: 'Correta! O nome da praia vem do culto a Nossa Senhora de Copacabana, trazido do Peru no contexto das trocas de africanos escravizados (via Rio de Janeiro) pela prata de Potosí: um vestígio das redes comerciais e culturais entre as Américas portuguesa e espanhola, na época da União Ibérica.' },
      { letra: 'D', texto: 'Copacabana preserva a memória do desembarque de escravizados que, dali, eram levados para Buenos Aires e Peru.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2026-029',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 29,
    disciplina: 'História',
    conteudo: 'his-1a5',
    subtopico: 'Atenas clássica — esporte e cidadania',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2026-029.webp',
    textoApoio: `<p>A imagem e o texto a seguir têm como tema comum as práticas esportivas e a construção da masculinidade entre os atenienses no Período Clássico (séculos V e IV a.C.).</p>
<p>Esporte apreciado entre os helenos, o lançamento de disco exigia do atleta uma disciplina técnica, evidenciada pela harmonia dos movimentos corporais. No centro da imagem, há um jovem se preparando para o lançar o disco. A ausência da barba do personagem permite afirmar que ele está sendo preparado para o exercício da cidadania plena. A presença dos dois halteres e do enxadão indica que a cena ocorre em uma palestra: campo de exercício cercado de edifícios com funções diversas. Na imagem original, contamos com uma inscrição que diz "<i>Kléomelos é belo</i>".</p>
<p><small>(Texto e imagem adaptados de LESSA, F. de S. Corpo, Esporte e Masculinidade em Atenas. PHOÎNIX, Rio de Janeiro. v. 10: p. 111-132, 2004.)</small></p>`,
    enunciado: `<p>A partir da imagem e do texto, assinale a alternativa correta sobre a interpretação da imagem.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Um atleta do lançamento de discos, esporte olímpico, ligado ao trabalho manual das camadas subalternas.' },
      { letra: 'B', texto: 'Distinção de classe social, já que se representa um ideário de beleza própria ao atleta bem-nascido.', explicacao: 'Correta! O jovem sem barba, preparado para a cidadania plena, treina na palestra e é celebrado como belo (“Kléomelos é belo”): a imagem expressa o ideal de beleza e de formação do jovem bem-nascido, já que o tempo livre para o esporte e a cidadania eram privilégios da elite ateniense.' },
      { letra: 'C', texto: 'Um cidadão ateniense maduro e despido, em pose comum aos lançadores de disco já vitoriosos.' },
      { letra: 'D', texto: 'Elementos gráficos que representam a percepção social e esportiva do ápice da masculinidade.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2026-030',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 30,
    disciplina: 'História',
    conteudo: ['his-3a3', 'his-2a6'],
    subtopico: 'Independência do Prata e Iluminismo',
    dificuldade: 'media',
    textoApoio: `<p>Entre várias obras que devem formar este precioso presente que ofereço aos meus concidadãos, dei o primeiro lugar ao <i>Contrato Social</i>, escrito pelo cidadão de Genebra, Jean-Jacques Rousseau. Este homem imortal, que obteve a admiração de seu século e será o assombro de todas as idades, [... <i>ensinou que</i>] os povos aprenderam a procurar no pacto social a raiz e a única origem da obediência, não reconhecendo os seus chefes como emissários da divindade, enquanto não mostrassem as patentes do céu na qual eram destinados a imperar sobre seus semelhantes. [...] Como o autor teve a desgraça de delirar em matérias religiosas, suprimo o capítulo e as passagens principais onde delas tratou.</p>
<p><small>(MORENO, M. Prólogo de <i>O Contrato Social ou Princípios do direito político</i>, de Jean-Jacques Rousseau, Buenos Aires, 1810 <i>apud</i> MYERS, J. A revolução de independência no Rio da Prata e as origens da nacionalidade argentina (1806-1825) In: PAMPLONA, M; MÄDER, M. (org.). <i>Revoluções de independências e nacionalismos nas Américas: região do Prata e Chile</i>. São Paulo: Paz e Terra, p. 107 e 109, 2007.)</small></p>`,
    enunciado: `<p>Mariano Moreno, tradutor de Rousseau para o espanhol, foi secretário do primeiro governo da Argentina entre os anos 1810 e 1811. No texto acima, ele</p>`,
    alternativas: [
      { letra: 'A', texto: 'critica a defesa que Rousseau faz da Igreja e dos governos absolutistas na obra <i>O Contrato Social</i>.' },
      { letra: 'B', texto: 'interfere na tradução e edição da obra de Rousseau conforme seus ideários políticos e ideológicos.', explicacao: 'Correta! Moreno exalta a ideia do pacto social como origem da obediência, mas declara que suprimiu o capítulo e as passagens em que Rousseau trata de religião: ele editou a obra conforme suas próprias convicções políticas e religiosas.' },
      { letra: 'C', texto: 'justifica a tradução da obra para difundir a ideia de obediência cívica ligada à religião católica e ao rei.' },
      { letra: 'D', texto: 'demonstra seu caráter conservador e a resistência ao pensamento liberal e iluminista na Argentina.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2026-031',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 31,
    disciplina: 'História',
    conteudo: 'his-3b6',
    subtopico: 'Golpe do Estado Novo na imprensa estrangeira',
    dificuldade: 'facil',
    textoApoio: `<p>Em 1937, um golpe de Estado instaurou o Estado Novo no Brasil, um regime autoritário. Diferentes leituras do golpe de Vargas foram publicadas no jornal <i>The New York Times</i>, ilustrando o impacto difuso daquele evento na imprensa. De um lado, escrevendo da Argentina, o chefe dos correspondentes na América Latina, John White, afirmou o caráter “pseudo-fascista” do movimento, registrando a atuação dos censores sobre o trabalho dos correspondentes internacionais que atuavam no Brasil. White destacava o apoio alemão ao novo regime brasileiro e os desafios de centralizar o poder nas mãos de Getúlio Vargas. De outro lado, Frank Garcia, correspondente do <i>The New York Times</i>, que atuava então no Brasil, comentou:</p>
<p><i>Eu posso dizer que, embora tenha havido censura, eu não tive dificuldades em enviar matérias ao The New York Times. Elas foram telegrafadas sem nenhum problema. Essa nova Constituição configura o Estado um tanto fascista, mas não inteiramente. É mais democrático que fascista. Na verdade, é nacionalista.</i></p>
<p><small>(Adaptado de LINS, L.F.T. de S. Notícias de falsos vendavais: o golpe do Estado Novo de 1937 e o discurso de junho de 1940 nos jornais estadunidenses. <i>História: Debates e Tendências</i>, vol. 19, n. 2, p. 332-351, 2019.)</small></p>`,
    enunciado: `<p>Sobre a repercussão internacional do Golpe do Estado Novo no exterior, podemos afirmar que havia</p>`,
    alternativas: [
      { letra: 'A', texto: 'percepção unânime do pleno alinhamento ideológico do Brasil com governos fascistas.' },
      { letra: 'B', texto: 'condenação ao fascismo e sugestão de sanções econômicas em razão do apoio alemão a Vargas.' },
      { letra: 'C', texto: 'controvérsias e ambiguidades na caracterização ideológica do novo governo Vargas.', explicacao: 'Correta! No mesmo jornal, John White viu o regime como “pseudo-fascista”, com censura e apoio alemão, enquanto Frank Garcia o considerou “mais democrático que fascista” e “nacionalista”: leituras divergentes e ambíguas do Estado Novo.' },
      { letra: 'D', texto: 'estratégias de resistência à censura imposta aos jornalistas que atuavam no Brasil.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2026-032',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 32,
    disciplina: 'Geografia',
    conteudo: 'geo-4u5',
    subtopico: 'Globalização — China na OMC',
    dificuldade: 'media',
    textoApoio: `<p>"A OMC não será uma organização mundial de comércio até que a China seja um país-membro", afirmou Mike Moore, diretor-geral da OMC. A assinatura de um acordo bilateral de comércio entre os Estados Unidos e a China teve uma repercussão positiva no mercado internacional, apesar da desconfiança de que a China poderá ter dificuldades para cumprir o prometido. "A China deu um passo grande em direção à OMC", disse o presidente dos Estados Unidos, Bill Clinton. A União Europeia aprovou a assinatura do acordo. A adesão da China à OMC permitirá incluir no sistema comercial internacional a décima potência do planeta, que cresceu em média 9,6% ao ano desde 1980. O acordo será um teste importante para verificar se a economia chinesa aguentaria o impacto de sua incorporação à OMC e se continuaria com seu crescimento. Desde 1986, o país asiático busca ser aceito em um organismo de comércio internacional. Segundo nota chinesa, "ambas as partes estreitarão sua cooperação no seio da OMC para garantir no futuro o aumento de suas relações bilaterais e a prosperidade da economia mundial".</p>
<p><small>(De agências internacionais, Sem a China, OMC não é mundial. <i>Folha de S. Paulo</i>, ano 79, n. 25.794, 16 de novembro de 1999. Disponível em https://www1.folha.uol.com.br/fsp/dinheiro/fi1611199903.htm. Acesso em 05/08/2025.)</small></p>`,
    enunciado: `<p>Comparando as expectativas sobre o ingresso da China na Organização Mundial de Comério (OMC) expressas no texto com o contexto atual, é correto afirmar que</p>`,
    alternativas: [
      { letra: 'A', texto: 'havia um otimismo em relação à expansão da globalização da economia mundial entre as décadas de 1990 e 2000.', explicacao: 'Correta! O texto de 1999 mostra entusiasmo de EUA, União Europeia, OMC e China com a integração chinesa ao comércio mundial, típico do otimismo com a globalização na virada do século — contraste com o protecionismo e a guerra tarifária de hoje.' },
      { letra: 'B', texto: 'a entrada da China na OMC interrompeu o deslocamento das indústrias norte-americana e europeia para a Ásia.' },
      { letra: 'C', texto: 'a guerra tarifária contemporânea revela o fracasso do modelo de desenvolvimento chinês dos anos 2000.' },
      { letra: 'D', texto: 'os compromissos assumidos pela China na entrada na OMC permitiram a consolidação dos direitos humanos no país.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2026-033',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 33,
    disciplina: 'História',
    conteudo: 'his-4b2',
    subtopico: 'Zuzu Angel e a denúncia da ditadura',
    dificuldade: 'facil',
    imagem: ['imagens/estudo/unicamp-2026-033-1.webp', 'imagens/estudo/unicamp-2026-033-2.webp', 'imagens/estudo/unicamp-2026-033-3.webp'],
    legenda: [
      'Legenda: Vestido de noiva idealizado por Zuzu Angel.',
      'Legenda: Desenho de quepe militar nas cores verde oliva, amarela, azulão-verde; com aba na cor verde direcionada para a direita. Possui inscrição do número "32" a lápis e à caneta, bem como o texto "verde oliva, amarelo, azulão-verde" e a palavra "azulão" registrados à caneta. Desenho utilizado em bordado de vestido.',
      'Legenda: Desenho de canhão nas cores vermelha amarela, e azul. Possui bandeira na cor verde e bola na cor preta. Apresenta inscrição a lápis com o número "23" e assinatura "Carlos L" à caneta. Desenho utilizado em bordado de vestido.',
    ],
    legendaGeral: '<small>(Imagens disponíveis em https://www.zuzuangel.com.br. Acesso em 01/08/2025.)</small>',
    textoApoio: `<p>As imagens fazem parte da coleção <i>International Dateline Collection III</i>, exposta em um desfile internacional, organizado pela estilista brasileira Zuzu Angel, em Nova Iorque, no dia 13 de setembro de 1971.</p>`,
    enunciado: `<p>Sobre as criações de Zuzu Angel para a produção das peças e organização do desfile, é correto afirmar que a</p>`,
    alternativas: [
      { letra: 'A', texto: 'utilização de um vestido de noiva, decorado com símbolos militares e desenhos infantis, amenizava a percepção internacional dos anos de chumbo do Brasil pós-AI5.' },
      { letra: 'B', texto: 'escolha por desenhos infantis, associados aos motivos militares, expressa uma denúncia do desaparecimento de presos políticos.', explicacao: 'Correta! Zuzu Angel, mãe de Stuart Angel, militante preso e desaparecido em 1971, usou o desfile em Nova Iorque para denunciar a ditadura: desenhos infantis ao lado de quepes e canhões simbolizam a juventude atingida pela repressão e o desaparecimento de presos políticos.' },
      { letra: 'C', texto: 'banalização de elementos militares, em um desfile de moda, mostra uma alienação de parte da classe artística brasileira diante do regime militar.' },
      { letra: 'D', texto: 'opção pelos motivos militares remonta à valorização do nacionalismo e à adesão da estilista à política externa do Regime Militar.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2026-034',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 34,
    disciplina: 'História',
    conteudo: 'his-3a3',
    subtopico: 'Nacionalidade — jus soli e jus sanguinis',
    dificuldade: 'media',
    imagem: ['imagens/estudo/unicamp-2026-034-1.webp', 'imagens/estudo/unicamp-2026-034-2.webp'],
    legendaAcima: ['<b>Distribuição do princípio de nacionalidade no mundo contemporâneo</b>', 'Legenda:'],
    legendaGeral: '<small>(Adaptado de The Law Library of Congress, 2020.)</small>',
    textoApoio: `<p>Nas concepções de cidadania e nacionalidade em vigor a partir do século XIX, a filiação formal a um país é geralmente adquirida no nascimento, seja pelo <i>jus soli</i> (direito de solo) ou pelo <i>jus sanguinis</i> (direito de sangue). O <i>jus soli</i> atribui a nacionalidade com base no nascimento no território de um país; o <i>jus sanguinis</i> atribui às crianças a nacionalidade de seus pais. A dicotomia <i>soli/sanguinis</i> foi uma invenção do século XIX. Os impérios europeus do Antigo Regime atribuíam a pertença à comunidade com base em um ou outro princípio único de direito natural.</p>
<p><small>(Adaptado de PERL-ROSENTHAL, N. E.; ERMAN, S. Inventing Birthright: The Nineteenth-Century Fabrication of <i>Jus Soli</i> and <i>Jus Sanguinis</i>. <i>Law and History Review</i> 42, n. 3, p. 421-48, 2024.)</small></p>`,
    enunciado: `<p>Considerando o texto e o mapa, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Filhos de estrangeiros nascidos em países europeus adquiriam a nacionalidade e a cidadania ao nascer, após o fim das revoluções burguesas.' },
      { letra: 'B', texto: 'As ex-colônias europeias nas Américas eram importantes destinos de imigrantes, o que influenciou suas definições de cidadania e nacionalidade.', explicacao: 'Correta! O mapa mostra o predomínio do jus soli nas Américas. Países que recebiam muitos imigrantes no século XIX adotaram o direito de solo para integrar os filhos desses imigrantes como nacionais, enquanto a Europa, área de emigração, manteve o jus sanguinis.' },
      { letra: 'C', texto: 'Regimes populistas proibiram que os nascidos nos novos países reivindicassem cidadania europeia, após as independências americanas.' },
      { letra: 'D', texto: 'O <i>jus sanguinis</i> era utilizado nas colônias como um instrumento de controle pela Europa para dificultar o acesso à cidadania dos povos nativos.' },
    ],
    gabarito: 'B',
  },

  // ───────────────────────────── Biologia (35 a 41) ─────────────────────────────
  {
    id: 'unicamp-2026-035',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 35,
    disciplina: 'Biologia',
    conteudo: ['bio-2a3', 'bio-3b3'],
    subtopico: 'Microbiota intestinal e infecção',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2026-035.webp',
    legenda: '<small>(Adaptado de PORRAS, A. e colaboradores. <i>Cell Reports</i>, Cambridge, v. 36, p. 109457, jul. 2021.)</small>',
    textoApoio: `<p>A bactéria <i>Citrobacter rodentium</i> é um patógeno que causa aumento da profundidade das glândulas intestinais em camundongos devido à inflamação do cólon. Em um experimento, camundongos livres de germes tiveram seus intestinos colonizados pela microbiota de três populações humanas geograficamente distintas: Estados Unidos (EUA), Ilhas Fiji (FIJI) ou Guatemala (GUAT). Com a colonização bem-sucedida, dois grupos foram estudados: controle (apenas microbiota) e infectado (microbiota e <i>C. rodentium</i>). Após 14 dias, a profundidade das glândulas intestinais desses animais foi avaliada, conforme a figura.</p>`,
    enunciado: `<p>Considerando as informações apresentadas, é correto afirmar que as diferenças geográficas na composição da microbiota intestinal podem</p>`,
    alternativas: [
      { letra: 'A', texto: 'impactar a sensibilidade às infecções entéricas, sendo as populações dos EUA e de FIJI as mais suscetíveis.', explicacao: 'Correta! Nos camundongos com microbiota dos EUA e de Fiji, a infecção aumentou muito a profundidade das glândulas (inflamação), de cerca de 150 µm para mais de 220 µm; com a microbiota da Guatemala, infectados e controles ficaram iguais. A microbiota altera a suscetibilidade à infecção; o experimento não mede digestão.' },
      { letra: 'B', texto: 'auxiliar a digestão no trato gastrointestinal, sendo a população da GUAT a mais beneficiada.' },
      { letra: 'C', texto: 'impactar a sensibilidade às infecções entéricas, sendo a população da GUAT a mais suscetível.' },
      { letra: 'D', texto: 'auxiliar a digestão no trato gastrointestinal, sendo as populações dos EUA e de FIJI as mais beneficiadas.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2026-036',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 36,
    disciplina: 'Biologia',
    conteudo: 'bio-3a3',
    subtopico: 'Anelamento — floema e câmbio',
    dificuldade: 'media',
    enunciado: `<p>Um agricultor realizou a remoção de um anel da casca de ramos caulinares, prática conhecida como anelamento, para aumentar o tamanho dos frutos em seu pomar. Ele observou dois grupos de plantas após algumas semanas. As plantas do grupo 1 tinham uma região claramente anelada nos ramos e seus frutos eram maiores, se comparadas às plantas do grupo 2. Já as plantas do grupo 2 perderam as folhas e foram claramente prejudicadas pelo anelamento. Ao retornar no ano seguinte, o anelamento era quase imperceptível nas plantas do grupo 1.</p>
<p>Considerando as informações apresentadas e os seus conhecimentos em biologia vegetal, é correto afirmar que o anelamento eliminou os vasos do</p>`,
    alternativas: [
      { letra: 'A', texto: 'xilema e limitou o transporte de água para as folhas, comprometendo a atividade do câmbio vascular nas plantas do grupo 1.' },
      { letra: 'B', texto: 'floema e restringiu o transporte dos produtos da fotossíntese para as folhas, sem comprometer a atividade do câmbio vascular nas plantas do grupo 2.' },
      { letra: 'C', texto: 'xilema e limitou o transporte de água para as raízes, comprometendo a atividade do câmbio vascular nas plantas do grupo 2.' },
      { letra: 'D', texto: 'floema e restringiu o transporte dos produtos da fotossíntese para as raízes, sem comprometer a atividade do câmbio vascular nas plantas do grupo 1.', explicacao: 'Correta! A casca retirada contém o floema, que leva a seiva elaborada das folhas para baixo (até as raízes); acima do anel, os açúcares ficam retidos e os frutos crescem mais. No grupo 1 o câmbio vascular foi preservado e regenerou os tecidos, tanto que no ano seguinte o anel quase não aparecia.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2026-037',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 37,
    disciplina: 'Biologia',
    conteudo: 'bio-1b3',
    subtopico: 'Endogamia e heredograma',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2026-037.webp',
    textoApoio: `<p>No heredograma, são representadas raças de animais heterozigotos (em preto) e homozigotos (em branco). Os heterozigotos apresentam o alelo deletério recessivo e animais contendo dois alelos iguais recessivos têm menor ganho de peso. Os valores na figura indicam a massa corporal dos animais (em quilos, kg) em um grupo de animais isolados.</p>`,
    enunciado: `<p>Considerando as informações apresentadas, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A heterose ocorre no cruzamento entre indivíduos heterozigotos, levando à maior massa corporal, com probabilidade de ocorrer em 66% dos animais da geração F1.' },
      { letra: 'B', texto: 'A heterozigose tem probabilidade de ocorrer em 33% dos animais da geração F1, proporcionando animais com maior massa corporal e maior variabilidade genética.' },
      { letra: 'C', texto: 'A depressão endogâmica tem probabilidade de ocorrer em 25% dos animais da geração F1, proporcionando animais com menor massa corporal e também menor variabilidade genética.', explicacao: 'Correta! O cruzamento de dois heterozigotos (Aa × Aa) gera 25% de homozigotos recessivos (aa), que expressam o alelo deletério: é a depressão endogâmica, com menor massa corporal (o animal de 150 kg) e menor variabilidade genética.' },
      { letra: 'D', texto: 'A homozigose determina a depressão endogâmica, levando à menor massa corporal, com probabilidade de ocorrer em 50% dos animais da geração F1.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2026-038',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 38,
    disciplina: 'Biologia',
    conteudo: 'bio-2a5',
    subtopico: 'Ciclo de vida haplonte dos fungos',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2026-038.webp',
    legenda: '<small>(Adaptado de AMSES, K. R. e colaboradores. <i>PNAS</i>, Washington, v.119, p. e2116841119, ago. 2022.)</small>',
    textoApoio: `<p>Fungos e metazoários evoluíram de um ancestral comum similar aos protistas, entretanto, os dois reinos divergiram ao longo do tempo. Os fungos crescem em cima ou dentro do seu alimento e a digestão ocorre no meio externo. Além disso, a maioria dos representantes dos fungos é composta por organismos com ciclo de vida haplobionte. A figura representa um ciclo de vida típico de um fungo haplobionte haplonte.</p>`,
    enunciado: `<p>Assinale a alternativa que identifica corretamente os eventos I, II, III e IV.</p>`,
    alternativas: [
      { letra: 'A', texto: 'I: mitose; II: meiose; III: plasmogamia; IV: meiose.' },
      { letra: 'B', texto: 'I: meiose; II: meiose; III: cariogamia; IV: mitose.' },
      { letra: 'C', texto: 'I: mitose; II: mitose; III: plasmogamia; IV: meiose.', explicacao: 'Correta! No ciclo haplonte, só o zigoto é diploide. O fungo haploide (n) cresce e forma esporos e gametas por mitose (I e II); os gametas n se fundem na plasmogamia (III), surgindo a fase 2n, que sofre meiose (IV) e volta a formar células n.' },
      { letra: 'D', texto: 'I: meiose; II: mitose; III: cariogamia; IV: mitose.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2026-039',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 39,
    disciplina: 'Biologia',
    conteudo: ['bio-4b2', 'bio-4b5'],
    subtopico: 'Invasões biológicas — predador exótico',
    dificuldade: 'dificil',
    imagem: 'imagens/estudo/unicamp-2026-039.webp',
    legenda: '<small>(Adaptado de V. RIVERA-ESTAYE colaboradores. <i>Scientific Reports</i>, Londres, v.14, p. 4416, fev. 2024.)</small>',
    textoApoio: `<p>Nas invasões biológicas, os predadores exóticos são a maior causa de extinção de espécies e perda de biodiversidade. Isso acontece porque o predador exótico pode tanto consumir a presa nativa quanto competir com o predador nativo. O sucesso da invasão biológica ocorre quando existe a extinção de uma ou ambas as espécies nativas, ou quando existe a redução da população nativa na presença do predador exótico. Na figura, considere os cenários I e II da chegada de um predador exótico em um sistema nativo de presa-predador em equilíbrio.</p>`,
    enunciado: `<p>A partir dessas informações, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O cenário I representa insucesso da invasão biológica. O predador exótico é extinto, causando a redução populacional da presa nativa e o aumento populacional do predador nativo.' },
      { letra: 'B', texto: 'O cenário I representa sucesso da invasão biológica. O predador exótico se instala, causando a redução populacional da presa nativa e a extinção do predador nativo.', explicacao: 'Correta! No cenário I, a curva pontilhada (predador exótico, que chega em densidade baixa) cresce e se estabiliza, a presa nativa (curva contínua, a mais alta) cai para um novo equilíbrio menor e a curva tracejada (predador nativo) vai a zero: o predador nativo é extinto, o que caracteriza sucesso da invasão.' },
      { letra: 'C', texto: 'O cenário II representa sucesso da invasão biológica. O predador exótico se instala, causando a redução populacional do predador nativo e a extinção da presa nativa.' },
      { letra: 'D', texto: 'O cenário II representa insucesso da invasão biológica. O predador exótico é extinto, causando a redução populacional da presa nativa e o aumento populacional do predador nativo.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2026-040',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 40,
    disciplina: 'Biologia',
    conteudo: 'bio-4a3',
    subtopico: 'Artrópodes — insetos e aracnídeos',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/unicamp-2026-040.webp',
    legendaAcima: 'Considere a placa de aviso encontrada em uma reserva ecológica.',
    legenda: '<small>(Adaptado de https://pt.dreamstime.com. Acesso em 31/03/2025.)</small>',
    enunciado: `<p>A informação da placa está</p>`,
    alternativas: [
      { letra: 'A', texto: 'correta, já que os carrapatos e escorpiões são classificados como quilópodes e os mosquitos e as abelhas como diplópodes.' },
      { letra: 'B', texto: 'errada, pois apenas dois animais são artrópodes, sendo eles os mosquitos e as abelhas, que são classificados como insetos.' },
      { letra: 'C', texto: 'correta, já que os mosquitos e as abelhas são classificados como artrópodes e os carrapatos e escorpiões como aracnídeos.' },
      { letra: 'D', texto: 'errada, pois mesmo que todos os animais sejam classificados como artrópodes, os carrapatos e os escorpiões são aracnídeos.', explicacao: 'Correta! Todos são artrópodes, mas só mosquitos e abelhas são insetos (três pares de patas, antenas). Carrapatos e escorpiões são aracnídeos (quatro pares de patas, sem antenas); por isso chamar todos de “insetos” está errado.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2026-041',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 41,
    disciplina: 'Biologia',
    conteudo: 'bio-1a5',
    subtopico: 'Evolução humana — hominídeos',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2026-041.webp',
    legendaAcima: 'A figura a seguir apresenta o crânio de alguns hominídeos que fazem parte da história evolutiva humana.',
    legenda: '<small>(Adaptado de https://pt.dreamstime.com. Acesso em 31/03/2025.)</small>',
    enunciado: `<p>Considerando essas informações e os seus conhecimentos em biologia, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O <i>Australopithecus</i> possuía cérebro pequeno e crânio com a maxila projetada para frente da face. Apresentava bipedismo e utilizava o fogo, o que favoreceu a evolução da espécie.' },
      { letra: 'B', texto: 'O <i>Homo erectus</i> possuía cérebro de tamanho médio, fala rudimentar e várias características atuais, como testa plana e proeminente. Foi o primeiro a apresentar bipedismo e usar ferramentas, o que permitiu sua coexistência com outros hominídeos.' },
      { letra: 'C', texto: 'O <i>Homo neanderthalensis</i> possuía nariz e narinas voltadas para baixo, além de cérebro bem desenvolvido e capacidade de comunicação. Utilizava o fogo e ferramentas, o que permitiu sua coexistência com outros hominídeos.', explicacao: 'Correta! O neandertal tinha nariz largo e projetado, cérebro grande (até maior que o nosso), provável capacidade de comunicação, dominava o fogo e fabricava ferramentas, e coexistiu com o <i>Homo sapiens</i>. Nas outras: o Australopithecus não usava fogo, o erectus não foi o primeiro bípede e o sapiens não foi o primeiro a usar fogo e ferramentas.' },
      { letra: 'D', texto: 'O <i>Homo sapiens</i> possui, como característica mais marcante, o cérebro bem desenvolvido e a capacidade da fala. Foi o primeiro a usar o fogo e ferramentas, favorecendo a evolução da espécie.' },
    ],
    gabarito: 'C',
  },

  // ───────────────────────────── Matemática (42 a 53) ─────────────────────────────
  {
    id: 'unicamp-2026-042',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 42,
    disciplina: 'Matemática',
    conteudo: ['mat-1a5', 'mat-3b1'],
    subtopico: 'Leitura de gráfico e porcentagem',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/unicamp-2026-042.webp',
    legendaAcima: '<b>Distribuição dos cardeais votantes, por região, em cada conclave desde 2005</b>',
    textoApoio: `<p>Uma regra estabelecida pelo papa Paulo VI, em 1970, define que somente cardeais com menos de 80 anos participam e votam no conclave. Em 2025, 135 pessoas cumpriram esse critério de idade. O vencedor só é definido após garantir o apoio de dois terços dos votantes. Os últimos 3 conclaves aconteceram em 2005, 2013 e 2025.</p>
<p><small>(Adaptado de https://www.nexojornal.com.br/grafico/2025/04/24/eleicao-papa-conclave-quem-faz-parte-cardeais/. Acesso em 30/05/2025.)</small></p>`,
    enunciado: `<p>Considerando o gráfico, é correto afirmar que, desde 2005, em cada conclave,</p>`,
    alternativas: [
      { letra: 'A', texto: 'América Latina e África juntas corresponderam a mais que 40% da quantidade de cardeais votantes.' },
      { letra: 'B', texto: 'Ásia, Oceania e África juntas corresponderam a mais que 30% da quantidade de cardeais votantes.' },
      { letra: 'C', texto: 'Europa e África juntas corresponderam a mais que 50% da quantidade de cardeais votantes.', explicacao: 'Correta! Em 2005 e 2013 a Europa sozinha já tinha cerca de 50% ou mais e a África cerca de 10%; em 2025, 39,3% + 13,3% = 52,6%. Nos três conclaves a soma passa de 50%. As outras somas não chegam aos valores pedidos em todos os conclaves (ex.: América Latina + África ≈ 30%).' },
      { letra: 'D', texto: 'Ásia, Oceania, Estados Unidos e Canadá juntos corresponderam a 30% da quantidade de cardeais votantes.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2026-043',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 43,
    disciplina: 'Matemática',
    conteudo: ['mat-1a5', 'mat-3a4'],
    subtopico: 'Aumentos percentuais sucessivos',
    dificuldade: 'media',
    enunciado: `<p>Rogério é funcionário de uma fábrica de automóveis. Em dezembro de 2024, seu gestor fez duas propostas de aumento salarial:</p>
<ul>
  <li>a proposta 1 consistia em um aumento de 50% do seu salário, a partir do salário a ser recebido em janeiro de 2025, mas sem nenhum tipo de reajuste nos próximos três anos, ou seja, até dezembro de 2027;</li>
  <li>a proposta 2 consistia em um aumento de 20% a cada ano; o reajuste ocorreria no salário de janeiro de cada um dos próximos três anos, a partir de 2025.</li>
</ul>
<p>Para decidir a qual proposta aderir, Rogério calculou o montante total que receberia ao longo dos três anos em cada proposta, isto é, de janeiro de 2025 a dezembro de 2027. Ele concluiu que o total a ser recebido na proposta 1 é, aproximadamente,</p>`,
    alternativas: [
      { letra: 'A', texto: '3% maior que o total a ser recebido na proposta 2.', explicacao: 'Correta! Com salário S: proposta 1 = 36 × 1,5S = 54S; proposta 2 = 12S(1,2 + 1,44 + 1,728) = 12 × 4,368S = 52,416S. Razão: 54/52,416 ≈ 1,03, ou seja, cerca de 3% a mais.' },
      { letra: 'B', texto: '1% maior que o total a ser recebido na proposta 2.' },
      { letra: 'C', texto: '3% menor que o total a ser recebido na proposta 2.' },
      { letra: 'D', texto: '1% menor que o total a ser recebido na proposta 2.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2026-044',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 44,
    disciplina: 'Matemática',
    conteudo: ['mat-4a1', 'mat-2a1'],
    subtopico: 'Função composta e polinômio',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2026-044.webp',
    enunciado: `<p>A figura mostra um trecho do gráfico de <i>f</i>(<i>g</i>(<i>x</i>)) em que <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> + 2<i>x</i><sup>2</sup> + <i>ax</i> − 1, <i>g</i>(<i>x</i>) = 3 − <i>x</i> e <i>a</i> é uma constante real.</p>
<p>Qual é o valor da constante <i>a</i>?</p>`,
    alternativas: [
      { letra: 'A', texto: '−2.' },
      { letra: 'B', texto: '−3.' },
      { letra: 'C', texto: '−4.' },
      { letra: 'D', texto: '−5.', explicacao: 'Correta! O gráfico passa por (1, 5): f(g(1)) = f(2) = 8 + 8 + 2a − 1 = 15 + 2a = 5, logo a = −5.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2026-045',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 45,
    disciplina: 'Matemática',
    conteudo: 'mat-4a1',
    subtopico: 'Grau de polinômios',
    dificuldade: 'media',
    enunciado: `<p>Sobre dois polinômios <i>p</i>(<i>x</i>) e <i>q</i>(<i>x</i>) de coeficientes reais sabe-se que:</p>
<ul>
  <li><i>p</i>(<i>x</i>) + <i>q</i>(<i>x</i>) tem grau igual a 3.</li>
  <li><i>p</i>(<i>x</i>) · <i>q</i>(<i>x</i>) tem grau igual a 8.</li>
</ul>
<p>É correto afirmar que o grau de <i>p</i>(<i>x</i>) − <i>q</i>(<i>x</i>) é igual a</p>`,
    alternativas: [
      { letra: 'A', texto: '5.' },
      { letra: 'B', texto: '4.', explicacao: 'Correta! Os graus somam 8. Se fossem diferentes, a soma teria o grau do maior (≥ 5), não 3. Logo os dois têm grau 4 e os termos de x<sup>4</sup> se cancelam na soma (coeficientes opostos); na diferença eles se somam (2a·x<sup>4</sup> ≠ 0), e o grau de p − q é 4.' },
      { letra: 'C', texto: '3.' },
      { letra: 'D', texto: '2.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2026-046',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 46,
    disciplina: 'Matemática',
    conteudo: ['mat-4b1', 'mat-4a2'],
    subtopico: 'Reta — coeficientes e distância à origem',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2026-046.webp',
    enunciado: `<p>A reta de equação <i>y</i> = <i>ax</i> + <i>b</i> faz um ângulo de 30 graus com o eixo <i>y</i>, conforme ilustrado na figura, e sua distância até a origem é √3.</p>
<p>O valor de <i>ab</i> é</p>`,
    alternativas: [
      { letra: 'A', texto: '−4.' },
      { letra: 'B', texto: '−5.' },
      { letra: 'C', texto: '−6.', explicacao: 'Correta! Com 30° em relação ao eixo y, a reta (crescente) faz 60° com o eixo x: a = tg 60° = √3. Distância à origem: |b|/√(a² + 1) = |b|/2 = √3, logo |b| = 2√3, e b &lt; 0 pela figura. ab = √3 · (−2√3) = −6.' },
      { letra: 'D', texto: '−7.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2026-047',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 47,
    disciplina: 'Matemática',
    conteudo: 'mat-1a4',
    subtopico: 'Escala e área',
    dificuldade: 'dificil',
    imagem: 'imagens/estudo/unicamp-2026-047.webp',
    legenda: '<small>(Texto e mapas adaptados de https://g1.globo.com/economia/noticia/2025/03/27/brasil-area-maritima-decisao-onu.ghtml. Acesso em 16/06/2025.)</small>',
    textoApoio: `<p>Em 2025, a Comissão de Limites da Plataforma Continental (CLPC), da Organização das Nações Unidas (ONU), aprovou uma proposta do Brasil que pedia a ampliação da plataforma continental na costa do litoral norte, como indicado na figura. A decisão reconhece o direito do Brasil de explorar a Margem Equatorial, em uma área equivalente à área territorial da Alemanha.</p>`,
    enunciado: `<p>O cálculo de área de figuras planas irregulares envolve em geral noções complexas de matemática. No caso de áreas de figuras que estão impressas e/ou desenhadas em um papel, pode-se empregar um método prático, que considera a relação entre o peso do papel por unidade de área.</p>
<p>Para calcular a área da região recentemente incorporada ao território brasileiro, um mapa contendo esta região, na escala 1:5.000.000 — isto é, 1 cm no papel equivale a 5.000.000 cm no local — foi impresso em um papel cuja relação peso/área é de 75g/m<sup>2</sup>. A seguir, a parte do mapa referente a esta região foi recortada e pesada, obtendo-se 1,0815g.</p>
<p>A partir desses dados, é correto afirmar que a área obtida foi:</p>`,
    alternativas: [
      { letra: 'A', texto: '359.900 km<sup>2</sup>.' },
      { letra: 'B', texto: '360.100 km<sup>2</sup>.' },
      { letra: 'C', texto: '360.300 km<sup>2</sup>.' },
      { letra: 'D', texto: '360.500 km<sup>2</sup>.', explicacao: 'Correta! Área no papel: 1,0815/75 = 0,01442 m² = 144,2 cm². Na escala, 1 cm = 50 km, então 1 cm² = 2 500 km². Área real: 144,2 × 2 500 = 360 500 km².' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2026-048',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 48,
    disciplina: 'Matemática',
    conteudo: 'mat-2a3',
    subtopico: 'Parábola pelo vértice',
    dificuldade: 'media',
    imagem: ['imagens/estudo/unicamp-2026-048-1.webp', 'imagens/estudo/unicamp-2026-048-2.webp'],
    legendaAcima: ['<b>Figura 1</b>', '<b>Figura 2</b>'],
    enunciado: `<p>O movimento de ataque em um jogo de voleibol é mais eficiente se o atleta atingir a bola no ponto mais alto da trajetória do centro de massa da bola. A Figura 1 mostra a trajetória da bola que foi lançada pela Atleta A em direção à Atleta B.</p>
<p>O centro de massa da bola, ao ser lançada pela Atleta A, está a 2 metros de altura em relação ao solo. Quando a Atleta B ataca, o centro de massa da bola está a 3 metros de altura em relação ao solo.</p>
<p>As jogadoras estão no mesmo plano da trajetória da bola e a distância entre as jogadoras é de 9 metros. Sabe-se que a trajetória do centro de massa da bola é uma parábola e que o ataque aconteceu justamente no ponto de maior altura da parábola, conforme representado na Figura 2.</p>
<p>A equação da parábola que descreve a trajetória do centro de massa da bola é</p>`,
    alternativas: [
      { letra: 'A', texto: '<i>y</i> = (−1 ⁄ 9)<i>x</i><sup>2</sup> + (10 ⁄ 9)<i>x</i> + 2.' },
      { letra: 'B', texto: '<i>y</i> = (−1 ⁄ 99)<i>x</i><sup>2</sup> + (20 ⁄ 99)<i>x</i> + 2.' },
      { letra: 'C', texto: '<i>y</i> = (−1 ⁄ 81)<i>x</i><sup>2</sup> + (2 ⁄ 9)<i>x</i> + 2.', explicacao: 'Correta! Vértice em (9, 3): y = k(x − 9)² + 3. Passa por (0, 2): 81k + 3 = 2, k = −1/81. Expandindo: y = −x²/81 + 18x/81 − 1 + 3 = (−1/81)x² + (2/9)x + 2.' },
      { letra: 'D', texto: '<i>y</i> = (−1 ⁄ 4)<i>x</i><sup>2</sup> + (9 / 2)<i>x</i> + 2.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2026-049',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 49,
    disciplina: 'Matemática',
    conteudo: ['mat-3b3', 'mat-3b2'],
    subtopico: 'Probabilidade — permutações caóticas',
    dificuldade: 'dificil',
    enunciado: `<p>Em uma creche se realiza o “dia da troca do brinquedo”. Cada criança leva um brinquedo para a escola e o guarda na Caixa Divertida. Ao final do dia, cada criança retira um brinquedo da Caixa Divertida sem olhar, e o leva para brincar em casa.</p>
<p>Em uma sala com cinco crianças, qual é a probabilidade de exatamente duas crianças retirarem da Caixa Divertida seus próprios brinquedos?</p>`,
    alternativas: [
      { letra: 'A', texto: '1/5.' },
      { letra: 'B', texto: '1/6.', explicacao: 'Correta! Escolhem-se as 2 crianças que pegam o próprio brinquedo: C(5,2) = 10. As outras 3 não podem pegar o seu (permutação caótica de 3: D<sub>3</sub> = 2). Casos favoráveis: 10 × 2 = 20, de 5! = 120. Probabilidade = 20/120 = 1/6.' },
      { letra: 'C', texto: '1/25.' },
      { letra: 'D', texto: '1/30.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2026-050',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 50,
    disciplina: 'Matemática',
    conteudo: ['mat-2b2', 'mat-4a2'],
    subtopico: 'Área de triângulo e trigonometria',
    dificuldade: 'dificil',
    imagem: 'imagens/estudo/unicamp-2026-050.webp',
    enunciado: `<p>A figura mostra um quadrado <i>ABCD</i> de lado medindo <i>x</i>. O ponto médio do lado <i>AB</i> está representado por <i>M</i>. Os pontos <i>P</i> e <i>Q</i>, pertencentes ao lado <i>CD</i>, são tais que <i>PD</i> = <i>QC</i>. O ângulo <i>PMQ</i>, representado por θ na figura, é tal que cos(θ) = 2⁄3.</p>
<p>A área do triângulo <i>PMQ</i> é</p>`,
    alternativas: [
      { letra: 'A', texto: '√5 <i>x</i><sup>2</sup>/5.', explicacao: 'Correta! O triângulo é isósceles (MP = MQ = L) com altura x. cos(θ/2) = √((1 + 2/3)/2) = √(5/6), e x = L·cos(θ/2), então L² = 6x²/5. Com sen θ = √5/3: área = ½·L²·sen θ = ½ · (6x²/5) · (√5/3) = √5 x²/5.' },
      { letra: 'B', texto: '√3 <i>x</i><sup>2</sup>/2.' },
      { letra: 'C', texto: '√2 <i>x</i><sup>2</sup>/2.' },
      { letra: 'D', texto: '√3 <i>x</i><sup>2</sup>/4.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2026-051',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 51,
    disciplina: 'Matemática',
    conteudo: ['mat-1a2', 'mat-1a3'],
    subtopico: 'Conjuntos, módulo e números primos',
    dificuldade: 'facil',
    enunciado: `<p>Considere</p>
<p>A = { <i>x</i> ∈ ℕ : |<i>x</i>−5| ≥ 2 e |<i>x</i>−11| ≤ 9 }.</p>
<p>Quantos números primos pertencem ao conjunto <i>A</i>?</p>`,
    alternativas: [
      { letra: 'A', texto: '5.' },
      { letra: 'B', texto: '6.' },
      { letra: 'C', texto: '7.', explicacao: 'Correta! |x − 5| ≥ 2 dá x ≤ 3 ou x ≥ 7; |x − 11| ≤ 9 dá 2 ≤ x ≤ 20. Então A = {2, 3} ∪ {7, ..., 20}, com os primos 2, 3, 7, 11, 13, 17 e 19: 7 primos.' },
      { letra: 'D', texto: '8.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2026-052',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 52,
    disciplina: 'Matemática',
    conteudo: 'mat-1b5',
    subtopico: 'Sistema de equações',
    dificuldade: 'facil',
    enunciado: `<p>Em um jogo de videogame sobre guerra, cada jogador deve montar sua tropa escolhendo 100 combatentes. Ele tem à sua disposição dois tipos de combatentes, soldados e estrategistas, que possuem duas habilidades, astúcia e força, com as seguintes pontuações:</p>
<ul>
  <li>o soldado tem 30 pontos de astúcia e 70 pontos de força.</li>
  <li>o estrategista tem 80 pontos de astúcia e 20 pontos de força.</li>
</ul>
<p>A força total da tropa é a soma das pontuações de força de cada um dos combatentes, e a astúcia total da tropa é a soma das pontuações de astúcia de cada um dos combatentes.</p>
<p>Para montar uma tropa de modo a obter as mesmas pontuações de força total e de astúcia total, quantos soldados e quantos estrategistas devem ser escolhidos?</p>`,
    alternativas: [
      { letra: 'A', texto: '70 soldados e 30 estrategistas.' },
      { letra: 'B', texto: '60 soldados e 40 estrategistas.', explicacao: 'Correta! Com s soldados e e estrategistas: s + e = 100 e 30s + 80e = 70s + 20e, ou seja, 60e = 40s, s = 1,5e. Então 2,5e = 100, e = 40 e s = 60.' },
      { letra: 'C', texto: '50 soldados e 50 estrategistas.' },
      { letra: 'D', texto: '40 soldados e 60 estrategistas.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2026-053',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 53,
    disciplina: 'Matemática',
    conteudo: ['mat-2b2', 'mat-4b1'],
    subtopico: 'Área de região sombreada',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2026-053.webp',
    enunciado: `<p>Na figura, <i>ABCD</i> é um quadrado com lado medindo 6, e <i>P</i>, <i>Q</i>, <i>R</i> e <i>S</i> são pontos sobre os lados deste quadrado, em que <i>AS</i> = <i>BQ</i> = 2, <i>PB</i> = 3 e <i>DR</i> = 1.</p>
<p>O valor da área sombreada é igual a</p>`,
    alternativas: [
      { letra: 'A', texto: '11/3.', explicacao: 'Correta! Com D na origem: P(3, 6), R(1, 0), S(0, 4), Q(6, 4). A reta PR cruza SQ (y = 4) em x = 1 + 4·(2/6) = 7/3. O triângulo sombreado tem base 6 − 7/3 = 11/3 sobre SQ e altura 6 − 4 = 2: área = ½ · (11/3) · 2 = 11/3.' },
      { letra: 'B', texto: '13/3.' },
      { letra: 'C', texto: '15/4.' },
      { letra: 'D', texto: '17/4.' },
    ],
    gabarito: 'A',
  },

  // ───────────────────────────── Português (54 a 59) ─────────────────────────────
  {
    id: 'unicamp-2026-054',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 54,
    disciplina: 'Português',
    conteudo: ['por-1a3', 'por-4b4'],
    subtopico: 'Variação e preconceito linguístico',
    dificuldade: 'media',
    textoApoio: `<p><b>É advogado com d mudo, estúpida!</b><br>Mirian Goldenberg<br><small>Antropóloga e professora da Universidade Federal do Rio de Janeiro, é autora de “A Invenção de uma Bela Velhice”</small></p>
<p>Fiz um vídeo para o Instagram sobre a minha coluna intitulada <i>No dia 1º de abril, quase caí no golpe do ‘falso advogado’</i>. No vídeo, confessei que quase morri de vergonha por quase ter caído em um golpe no Dia da Mentira.</p>
<p>Fiquei triste quando li alguns dos comentários sobre o vídeo: “AdEvogado?; “Não é adevogado que fala”; “A desinformada que fala adêvogado aprendeu o que é golpe de verdade kkkk”; “Adevogado? Pode isso? Uma ‘intelequitual’ brasileira da linha de frente falando assim?”; “Um currículo e tanto e falando adevogado?; “Chamou de adEvogado. Então não foi difícil entender por que caiu em golpe... Eu teria é vergonha de falar adEvogado”; “A palavra ‘advogado’ se pronuncia ‘advogado’, com o ‘d’ mudo. A pronúncia adevogado é um erro de ortoépia”; “É advogado com ‘d’ mudo, estúpida!”.</p>
<p>Perguntei ao meu marido, que editou o vídeo, por que ele não me falou nada. Ele respondeu: “Porque eu acho bonitinho. Você é filha de advogado e tem dois irmãos advogados. Desde menina aprendeu a falar assim. Não é fácil falar ‘advogado’ com o ‘d’ mudo. Eu falo advogado com ‘i’: adivogado. Será que alguém consegue falar advogado com o ‘d’ mudo?”</p>
<p>Da próxima vez que fizer uma denúncia importante, vou tentar falar advogado com o “d” mudo. Será que vou conseguir?</p>
<p><small>(Adaptado de GOLDENBERG, M. É advogado com d mudo, estúpida! <i>Folha de São Paulo</i>, 16/04/2025, B6. Acesso em 29/07/2025.)</small></p>`,
    enunciado: `<p>Considerando que consoantes mudas não são seguidas de uma vogal, e levando em conta as duas pronúncias para advogado mencionadas no texto, as críticas reproduzidas no segundo parágrafo revelam</p>`,
    alternativas: [
      { letra: 'A', texto: 'preconceito linguístico, já que os comentários negativos foram motivados pelo fato de a autora ter um baixo nível de escolaridade.' },
      { letra: 'B', texto: 'desconhecimento linguístico, uma vez que a palavra advogado não é pronunciada com “d” mudo no português brasileiro.', explicacao: 'Correta! No português brasileiro, o “d” de advogado sempre vem seguido de uma vogal na fala (“adevogado” ou “adivogado”), ou seja, não é mudo. Os críticos exigem uma pronúncia que praticamente não existe: revelam desconhecimento de como a língua é falada.' },
      { letra: 'C', texto: 'negacionismo linguístico, pois os críticos não reconhecem que a pronúncia adevogado é a mais comum na norma culta.' },
      { letra: 'D', texto: 'correção linguística, porque só uma das duas pronúncias ocorre no português, enquanto a outra é um desvio fonético.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2026-055',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 55,
    disciplina: 'Português',
    conteudo: 'por-1a3',
    subtopico: 'Variação linguística e identidade',
    dificuldade: 'media',
    textoApoio: TEXTO_UNICAMP_2026_55_56,
    enunciado: `<p>Sobre a diferença que o texto estabelece entre Nós e nóix, podemos afirmar que está relacionada a uma distinção</p>`,
    alternativas: [
      { letra: 'A', texto: 'sociocultural, pois esses termos se referem a grupos demarcados distintamente: enquanto Nós é bem delimitado, nóix diz respeito a uma coletividade difusa, mas marcada por compartilhar vivências específicas.', explicacao: 'Correta! O texto opõe o “Nós da totalidade” ao nóix, coletivo de contornos incertos (“não sabemos exatamente quem ou quantos somos”), mas ligado por vivências da rua, ancestralidade e um sotaque/registro local: uma distinção sociocultural.' },
      { letra: 'B', texto: 'gramatical, pois esses termos não pertencem à mesma classe de palavras: enquanto Nós é um pronome típico da norma culta, nóix é um substantivo popular que serve à expressão da diversidade.' },
      { letra: 'C', texto: 'histórica, pois esses termos caracterizam os indivíduos em função do seu passado: enquanto Nós abrange aqueles sem ancestralidade, nóix reúne os que assumem os ancestrais como parte de sua história.' },
      { letra: 'D', texto: 'política, pois esses termos revelam uma polarização na forma de se relacionar com o poder: enquanto Nós simboliza o apoio à opressão social, nóix caracteriza uma rejeição aos poderes instituídos.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2026-056',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 56,
    disciplina: 'Português',
    conteudo: ['por-1a2', 'por-1a3'],
    subtopico: 'Pretuguês — africanização do português',
    dificuldade: 'media',
    textoApoio: TEXTO_UNICAMP_2026_55_56,
    enunciado: `<p>A partir das análises de Lélia Gonzalez – intelectual, professora universitária, mulher, negra e feminista – conseguimos compreender quão extensa é a introdução de palavras e termos de origens africanas na nossa língua. O Pretuguês é, então, parte da africanização da língua portuguesa brasileira. As pessoas negras escravizadas resistiam de inúmeras formas, lutando, fugindo, se organizando, mas também através da fala, no jeito de agir e na forma de viver que se enraizou na maneira de ser de todo o Brasil. E isso vem da ancestralidade, é o passar do conhecimento através do tempo e das relações de respeito pelo que veio antes, através do cântico antigo, da reza falada, da contação de história que os entrelaços linguísticos vão formando. Muitos vocábulos estão tão acomodados no nosso idioma que sequer paramos para pensar sua origem e seu significado. Mas são de origem africana, como dengo, quitanda, cafuné, muvuca, caçula e axé.</p>
<p><small>(Adaptado de texto publicado no perfil de Instagram de Mari Canuto em 28/09/2022. Disponível em https://www.instagram.com/mari_canuto/reel/CjD8ALkPw9o/. Acesso em 30/07/2025.)</small></p>
<p>Considerando esse texto, a menção ao “Pretuguês de Lélia Gonzalez” no artigo de Marcelo José Derzi Moraes, apresentado na questão anterior, ocorre pelo fato de nóix ser</p>`,
    alternativas: [
      { letra: 'A', texto: 'um vocábulo introduzido no Brasil pelos africanos escravizados, da mesma forma que outras palavras de origem africana acomodadas na língua.' },
      { letra: 'B', texto: 'uma expressão identitária que serve para demarcar os negros brasileiros e segregá-los dos demais grupos étnico-raciais que compõem o país.' },
      { letra: 'C', texto: 'uma marca linguística associada a um grupo cujos ancestrais reúnem aqueles que contribuíram para a africanização do português brasileiro.', explicacao: 'Correta! O nóix não é palavra de origem africana: é uma marca de pronúncia/registro (“um sotaque, um registro local”) de um coletivo que assume sua ancestralidade — a dos africanos escravizados que, pelo Pretuguês, africanizaram o português do Brasil.' },
      { letra: 'D', texto: 'um traço dialetal característico dos sotaques urbanos brasileiros que são fortemente marcados pela presença de palavras africanas.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2026-057',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 57,
    disciplina: 'Português',
    conteudo: ['por-2b6', 'por-1a5'],
    subtopico: 'Valores do “que”',
    dificuldade: 'dificil',
    imagem: 'imagens/estudo/unicamp-2026-057.webp',
    legenda: '<small>(BARRETO, S. <i>A luta</i>. Ikrek Edições, 2019 (reimpressão 2024).)</small>',
    textoApoio: `<p>O texto acima é um trabalho da artista Santarosa Barreto apresentado na exposição <i>Histórias das mulheres: artistas depois de 2000</i>, realizada no MASP em 2019.</p>`,
    enunciado: `<p>Nesse texto, observamos ocorrências de “que” com diferentes valores, entre eles o</p>`,
    alternativas: [
      { letra: 'A', texto: 'explicativo, com o objetivo de listar justificativas que tentam suprimir, em favor de outros, uma dimensão pessoal da luta.', explicacao: 'Correta! Em “Lute a luta como você acha que deve lutar [...] que vão dizer que...”, o “que” que abre cada nova sequência equivale a “pois/porque” (valor explicativo). Ele encadeia uma lista de justificativas (“você não sabe o que é uma luta”, “é melhor você desistir”...) com que os “supostos donos da luta” tentam tirar da pessoa a sua própria luta.' },
      { letra: 'B', texto: 'comparativo, com o objetivo de equiparar a luta motivada por convicções próprias e a luta instigada por quem está no poder.' },
      { letra: 'C', texto: 'condicional, com o objetivo de caracterizar a luta como uma condição para combater aqueles que a querem controlar.' },
      { letra: 'D', texto: 'causal, com o objetivo de reiterar as situações que levam alguém a desistir de promover a luta como forma de resistência individual.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2026-058',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 58,
    disciplina: 'Português',
    conteudo: ['por-4a1', 'por-2a2'],
    subtopico: 'Gêneros digitais — meme',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2026-058.webp',
    legendaAcima: '<b>Texto 2</b>',
    legenda: '<small>(Disponível em https://pt.wikipedia.org/wiki/Nazar%C3%A9_Confusa. Acesso em 02/06/2025.)</small>',
    textoApoio: `<p>Leia os textos 1 e 2.</p>
<p><b>Texto 1</b></p>
<p>O <i>image macro</i> é o mais velho, o mais simples e o mais difundido tipo de meme, provavelmente pela facilidade de criação e difusão, além do inegável apelo visual que permite uma rápida apreensão do seu conteúdo. Ele corresponde a uma estrutura imagético-textual em <i>frame</i><sup>1</sup> único que carrega uma qualidade icônica.</p>
<p>Podemos caracterizar o <i>image macro</i> como um texto em caixa alta e em fonte branca, superposto a uma imagem – quase sempre para fins de humor. Esse jogo memético consiste tanto em adicionar o mesmo texto a várias imagens quanto em “remixar” uma mesma imagem com diferentes textos. Os <i>image macros</i> têm seus <i>templates</i><sup>2</sup>, bem como suas referências intertextuais extraídas de diversas fontes, como videoclipes, fotografias, desenhos, filmes, seriados, videogames, comerciais, notícias etc.</p>
<p>Usando essa estrutura híbrida, os <i>image macros</i> tornam-se uma espécie de imagens-texto em que o imbricamento desses dois elementos ocorre sem subordinação da experiência visual nem da verbal – o pictório complementa o discursivo em um processo de afetação recíproca.</p>
<p><small><sup>1</sup> <i>Frame</i>: quadro, moldura; imagem estática que, quando reproduzida em sequência com outras, resultam no efeito de movimento.<br><sup>2</sup> <i>Template</i>: modelo.</small></p>
<p><small>(Adaptado de OLIVERA NETA, J. P. Por uma tipologia dos memes da internet. <i>Entremeios</i>, 13(2), 2017. Disponível em https://entremeios.com.puc-rio.br/media/Juracy%20Oliveira.pdf. Acesso em 02/06/2025.)</small></p>
<p><b>Texto 2</b>: imagem acima.</p>`,
    enunciado: `<p>Considerando as informações do texto 1, o texto 2 pode ser caracterizado como</p>`,
    alternativas: [
      { letra: 'A', texto: 'um típico <i>image macro</i>, pois utiliza um único frame para fundir o visual e o verbal, além de adicionar um mesmo elemento textual a várias ocorrências de uma só imagem.' },
      { letra: 'B', texto: 'um meme composto por vários <i>image macros</i>, nos quais uma mesma imagem se subordina à linguagem textual matemática em um jogo pictório de afetação recíproca.' },
      { letra: 'C', texto: 'uma experiência verbal e visual que se aproxima do <i>image macro</i> no que diz respeito à sua estrutura híbrida, mas se afasta desse tipo por não permitir a rápida apreensão do seu conteúdo.' },
      { letra: 'D', texto: 'uma peça memética que não reúne todos os elementos de um <i>image macro</i>, pois apresenta mais de um frame e adiciona conteúdos textuais diferentes a imagens distintas.', explicacao: 'Correta! O image macro tem frame único e texto em caixa alta superposto à imagem. O meme “Nazaré Confusa” tem vários quadros, com imagens diferentes e fórmulas matemáticas distintas sobre cada uma: é um meme, mas não reúne todos os traços do image macro.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2026-059',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 59,
    disciplina: 'Português',
    conteudo: ['por-4a1', 'por-2a2'],
    subtopico: 'Gênero textual — manifesto',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/unicamp-2026-059.webp',
    legendaAcima: '<b>Texto 1</b>',
    legenda: 'Nazaré Confusa no Estilo Studio Ghibli.<br><small>(Disponível em https://scc10.com.br/colunistas/um-noob/memes-em-estilo-ghibli-a-nova-febre-que-esta-quebrando-a-internet-e-o-chatgpt/. Acesso em 29/07/2025.)</small>',
    textoApoio: `<p>O texto 1 (acima) é a versão do meme <i>Nazaré Confusa</i> no chamado “Estilo Ghibli”, que é abordado no texto 2, publicado por um portal brasileiro dedicado às animações do Studio Ghibli. Leia os dois textos para responder à questão.</p>
<p><b>Texto 2</b></p>
<p><b>Studio Ghibli vs. IA:<br>Por que não usar imagens no “Estilo Ghibli”</b><br>Por Amanda, editora-chefe e responsável pelo Studio Ghibli Brasil.</p>
<p>Recentemente, uma tendência tomou conta das redes sociais: usuários utilizando inteligência artificial para transformar suas fotos em imagens que imitam o estilo do Studio Ghibli. A <i>trend</i> ganhou força em março deste ano, com a nova atualização da ferramenta GPT-4.0.</p>
<p>O Studio Ghibli é reconhecido não apenas por seu estilo visual, mas também por sua filosofia artística e valores profundos. Hayao Miyazaki, um dos fundadores do estúdio, sempre defendeu a arte feita à mão e criticou fortemente o uso excessivo da tecnologia na criação de animações. Em entrevistas, ele expressou preocupação com a mecanização da arte, argumentando que a verdadeira expressividade vem do esforço humano, da emoção e da experiência de vida.</p>
<p>A tentativa de emular o “estilo Ghibli” por meio da IA entra em conflito direto com esses princípios. A criação de imagens automatizadas baseadas em padrões estatísticos e grandes volumes de dados contrasta com o meticuloso processo artesanal pelo qual os filmes do estúdio são produzidos. Muitos profissionais da indústria da animação e ilustração já expressaram preocupação com a possibilidade de a IA substituir ou minar o valor do trabalho humano na criação artística.</p>
<p>Nós acreditamos na autenticidade e na ética de preservar os artistas e seus trabalhos autorais. A inteligência artificial, ao emular o estilo do Studio Ghibli, fere os princípios da animação tradicional do estúdio e desvaloriza o esforço humano por trás dessas obras. A melhor forma de levar o conhecimento sobre o Studio Ghibli adiante é apreciando e divulgando seus trabalhos originais e buscando conhecer cada vez mais sua história e relevância para o mundo da animação.</p>
<p><small>(Adaptado de https://studioghibli.com.br/2025/04/02/studio-ghibli-vs-ia-porque-nao-usar-imagens-no-estilo-ghibli/?srsltid=AfmBOoqbHDAfs5C6olUwSRqCzW_YcNrgae5aqqeaTrokiB1yzPh-HP1Y. Acesso em 29/07/2025)</small></p>`,
    enunciado: `<p>Considerando as imagens do texto 1 desta questão, o texto 2 pode ser caracterizado como</p>`,
    alternativas: [
      { letra: 'A', texto: 'uma nota de repúdio às IAs, por simplificarem o conteúdo das produções do Studio Ghibli, que perdem seus traços irreverentes ao serem utilizadas na geração mecânica de imagens.' },
      { letra: 'B', texto: 'uma carta aberta para incentivar um boicote às IAs, que permitem construir animações mecanizadas de qualquer imagem e emulam as produções do Studio Ghibli no intuito confundir as pessoas.' },
      { letra: 'C', texto: 'um manifesto contrário ao uso de IAs para gerar o estilo Ghibli, por utilizarem recursos automatizados que imitam animações originais do Studio Ghibli, o que desvaloriza a autenticidade artística do estúdio.', explicacao: 'Correta! O texto toma posição pública (“Nós acreditamos...”) contra o uso de IA para imitar o estilo Ghibli, como na imagem do texto 1, porque a geração automatizada contraria o processo artesanal do estúdio e desvaloriza sua autenticidade e o esforço humano: é um manifesto.' },
      { letra: 'D', texto: 'uma resenha crítica sobre a forma como as IAs imitam os recursos artesanais do Studio Ghibli para produzir imagens sem identidade autoral, que depreciam o esforço humano.' },
    ],
    gabarito: 'C',
  },

  // ───────────────────────────── Literatura (60, 61, 63, 65) ─────────────────────────────
  {
    id: 'unicamp-2026-060',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 60,
    disciplina: 'Literatura',
    subtopico: 'Interpretação de Texto Literário',
    dificuldade: 'media',
    textoApoio: `<p>Em seu ensaio “A vida não é útil”, Ailton Krenak elege Carlos Drummond de Andrade como um de seus “escudos”. Ele cita a última estrofe de “O Homem; as Viagens”, poema publicado em <i>As impurezas do Branco</i> (1973). Reproduzimos, a seguir, a primeira e a segunda estrofe desse poema:</p>
<p>“O Homem; as Viagens</p>
<p>O homem, bicho da Terra tão pequeno<br>chateia-se na Terra<br>lugar de muita miséria e pouca diversão,<br>faz um foguete, uma cápsula, um módulo<br>toca para a Lua<br>desce cauteloso na Lua<br>pisa na Lua<br>planta bandeirola na Lua<br>experimenta a Lua<br>coloniza a Lua<br>civiliza a Lua<br>humaniza a Lua.</p>
<p>Lua humanizada: tão igual à Terra.<br>O homem chateia-se na Lua.<br>Vamos para Marte – ordena a suas máquinas.<br>Elas obedecem, o homem desce em Marte<br>pisa em Marte<br>experimenta<br>coloniza<br>civiliza<br>humaniza Marte com engenho e arte.</p>
<p>Marte humanizado, que lugar quadrado.<br>(...)”.</p>
<p><small>(ANDRADE, C. D. O Homem; As viagens, <i>As impurezas do Branco</i>. In: <i>Poesia Completa</i>. Rio de Janeiro, Editora Nova Aguilar, p. 718, 2002.)<br>(KRENAK, A. <i>A vida não é útil</i>. Pesquisa e organização de Rita Carelli. São Paulo: Companhia das Letras, 2020.)</small></p>`,
    enunciado: `<p>Em relação às reflexões de Ailton Krenak, é correto afirmar que esse trecho do poema</p>`,
    alternativas: [
      { letra: 'A', texto: 'responsabiliza a ciência e tecnologia, desgastadas em seus valores, pela corrosão das relações nas sociedades contemporâneas.' },
      { letra: 'B', texto: 'mostra que os Homens, guiados pela ideia de progresso, não adotam uma postura consciente em relação ao seu espaço.', explicacao: 'Correta! O homem, entediado, foge da Terra e repete na Lua e em Marte o mesmo ciclo (pisa, coloniza, civiliza, humaniza) até tornar tudo “tão igual à Terra” e “quadrado”: movido pelo progresso, não reflete sobre o espaço em que vive — crítica que Krenak retoma em seu ensaio.' },
      { letra: 'C', texto: 'evidencia que a Terra, desgastada em seus valores, foi superada pelos elementos da conquista espacial.' },
      { letra: 'D', texto: 'identifica a aniquilação das sociedades contemporâneas nos programas de governos persuadidos pelo progresso.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2026-061',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 61,
    disciplina: 'Literatura',
    subtopico: 'Gêneros Literários',
    dificuldade: 'media',
    textoApoio: `<p>Leia os textos 1 e 2.</p>
<p><b>Texto 1</b></p>
<p><b>Aos óculos</b></p>
<p>Só fingem que põem<br>o mundo ao alcance<br>dos meus olhos míopes.</p>
<p>Na verdade, me exilam<br>dele com filtrar-lhe<br>a menor imagem.</p>
<p>Já não vejo as coisas<br>como são: vejo-as como eles querem<br>que as veja.</p>
<p>Logo, são eles que veem,<br>não eu que, mesmo cônscio<br>do logro, lhes sou grato</p>
<p>por anteciparem em mim<br>o Édipo curioso<br>de suas próprias trevas.</p>
<p><small>(PAES, J. P. <i>Prosas seguidas de Odes mínimas</i>. São Paulo: Companhia das Letras, p. 63, 1992.)</small></p>
<p><b>Texto 2</b></p>
<p>“Do grego <i>odé</i> e do latim <i>ōde</i> (ou <i>ōda</i>), a ode era, na antiguidade clássica, um poema destinado a ser cantado, ou um canto alegre, triste ou lírico. Era um poema de alguma extensão, de elevado assunto ou nobre, expressando sentimentos ilustres, em homenagem a algo ou a alguém. Apresentava também a elaboração estrófica, bem como estilo formal nobre e cerimonioso”.</p>
<p><small>(Adaptado do verbete “Ode”, elaborado por Ana Ladeira. In: CEIA, C. <i>E-Dicionário de termos literários</i> (projeto abrigado pela Universidade Nova de Lisboa). Disponível em https://edtl.fcsh.unl.pt/encyclopedia/ode. Acesso em 31/05/2025.)</small></p>`,
    enunciado: `<p>É correto afirmar que a ode mínima de José Paulo Paes reelabora a definição clássica de “ode” ao</p>`,
    alternativas: [
      { letra: 'A', texto: 'respeitar a elevação do assunto, a nobreza do tom e os sentimentos ilustres.' },
      { letra: 'B', texto: 'utilizar-se de um tom elevado e cerimonioso para a homenagem.' },
      { letra: 'C', texto: 'dirigir-se a um objeto, vinculando-se ao gênero canção popular.' },
      { letra: 'D', texto: 'celebrar um objeto fundamental, os óculos, e não algo/alguém ilustre.', explicacao: 'Correta! A ode clássica homenageava assuntos elevados e ilustres, em tom nobre. Paes mantém a homenagem (“Aos óculos”) e a organização em estrofes, mas a dirige a um objeto cotidiano, ainda que fundamental, em linguagem simples e irônica: é uma ode “mínima”.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2026-063',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 63,
    disciplina: 'Literatura',
    subtopico: 'Interpretação de Texto Literário',
    dificuldade: 'media',
    textoApoio: `<p>Leia a citação a seguir, extraída do conto “Pera, uva ou maçã?”, publicado no livro <i>Morangos mofados</i>, de Caio Fernando Abreu, e assinale a alternativa correta sobre o excerto.</p>
<p>Foi então que vi aquelas ameixas e achei tão bonitas e tão vermelhas que pedi um quilo e era minha última grana certo porque meus pais não me dão nada e daí eu pensei assim se comprar essas ameixas agora vou ter que voltar a pé para casa mas que importa volto a pé mesmo pode ser até que acorde um pouco e aquela coisa lá longe volte pra perto de mim e então eu vinha caminhando devagarinho as ameixas eu não conseguia parar de comer sabe já tinha comido acho que umas seis estava toda melada quando dobrei a esquina aqui da rua e ia saindo um caixão de defunto do sobrado amarelo na esquina certo acho que era um caixão cheio quer dizer com defunto dentro porque ia saindo e não entrando certo e foi bem na hora que eu dobrei não deu tempo de parar nem de desviar daí então eu tropecei no caixão e as ameixas todas caíram assim paf! na calçada e foi aí que eu reparei naquelas pessoas todas de preto e óculos escuros e lenços no nariz e uma porrada de coroas de flores devia ser um defunto muito rico certo e aquele carro fúnebre ali parado e só aí eu entendi que era um velório.</p>
<p><small>(ABREU, C. F. <i>Morangos Mofados</i>. 9ª. ed. São Paulo: Companhia das Letras, p. 105-106, 2015.)</small></p>`,
    enunciado: `<p>Assinale a alternativa correta sobre o excerto.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A presença de orações como “foi então que vi”, “foi aí que eu reparei” e “só aí eu entendi” cria um efeito de retardamento da narrativa, o que reflete o estado psicológico de apatia da personagem que fala.' },
      { letra: 'B', texto: 'A ausência de pontuação cria um efeito de aceleração da narrativa, o que reflete o estado psicológico de ansiedade da personagem que fala.', explicacao: 'Correta! Sem pontos nem vírgulas, as ações e pensamentos se encadeiam num fluxo contínuo, com “e”, “daí”, “certo”, como numa fala atropelada. A falta de pausas acelera o relato e traduz a ansiedade da personagem.' },
      { letra: 'C', texto: 'A presença de orações como “foi então que vi”, “foi aí que eu reparei” e “só aí eu entendi” rompe a sequência temporal da narrativa, prejudicando o seu desenvolvimento lógico.' },
      { letra: 'D', texto: 'A ausência de pontuação desorganiza a sequência das ações da personagem, o que reflete sua confusão e causa uma ambiguidade de sentido em sua narrativa.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2026-065',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 65,
    disciplina: 'Literatura',
    subtopico: 'Interpretação de Texto Literário',
    dificuldade: 'facil',
    textoApoio: `<p>Leia os versos da canção abaixo e assinale a alternativa correta.</p>
<p>ALVORADA</p>
<p>Alvorada lá no morro, que beleza,<br>Ninguém chora, não há tristeza,<br>Ninguém sente dissabor.<br>O sol colorindo é tão lindo, é tão lindo.<br>E a natureza sorrindo, tingindo, tingindo.<br>Você também me lembra a alvorada<br>Quando chega iluminando<br>Meus caminhos tão sem vida.<br>E o que me resta<br>é bem pouco, quase nada,<br>do que ir assim vagando<br>numa estrada perdida.</p>
<p><small>(CARTOLA. Alvorada. In: <i>Cartola</i>. Rio de Janeiro: Marcus Pereira Discos, 1974.)</small></p>`,
    enunciado: `<p>Assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O eu-lírico enfatiza a harmonia entre a cena idílica do morro no momento da alvorada e a alegria de sua vida junto à pessoa amada.' },
      { letra: 'B', texto: 'O eu-lírico enfatiza um contraste entre a alegria da alvorada no morro e a pobreza das pessoas que habitam aquele espaço.' },
      { letra: 'C', texto: 'A alvorada no morro é, para o eu-lírico, como a imagem da pessoa amada, que lhe traz alegria, apesar de sua desilusão e desesperança.', explicacao: 'Correta! “Você também me lembra a alvorada / Quando chega iluminando / Meus caminhos tão sem vida”: a pessoa amada é comparada à alvorada que traz luz, mas o eu-lírico segue desiludido, “vagando / numa estrada perdida”.' },
      { letra: 'D', texto: 'A alvorada no morro funciona, no poema, como imagem do futuro que pode ser transformado pelo amor, apesar das condições de vida difíceis.' },
    ],
    gabarito: 'C',
  },

  // ───────────────────────────── Química (66 a 72) ─────────────────────────────
  {
    id: 'unicamp-2026-066',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 66,
    disciplina: 'Química',
    conteudo: ['qui-1b1', 'qui-4a1'],
    subtopico: 'Níveis de representação (triângulo de Johnstone)',
    dificuldade: 'media',
    imagem: ['imagens/estudo/unicamp-2026-066-1.webp', 'imagens/estudo/unicamp-2026-066-2.webp'],
    legendaAcima: ['', '<b>Ilustrações dos domínios</b>'],
    legenda: ['<small>(Adaptado de https://edu.rsc.org/feature/develop-deeper-understanding-with-models/3010519.article. Acesso em 09/10/2025.)</small>', ''],
    enunciado: `<p>O desafio de ensinar como as reações químicas acontecem está no fato de que elas geralmente ocorrem por meio de sinais detectáveis pelos nossos sentidos, enquanto que sua explicação geralmente ocorre em um nível invisível ou abstrato. Johnstone, pesquisador escocês em educação científica, propôs que, para se entender um fenômeno do ponto de vista químico, qualquer pessoa precisa ser capaz de pensá-lo em três domínios distintos: o macroscópico, o submicroscópico e o simbólico. A figura mostra o triângulo de Johnstone que correlaciona os três domínios, identificados como (1), (2) e (3). Já as ilustrações apresentam os domínios de forma aleatória.</p>
<p>Com base nas informações do enunciado, da figura e das ilustrações, é correto afirmar que os domínios (1), (2) e (3) do triângulo de Johnstone são representados respectivamente pelas ilustrações</p>`,
    alternativas: [
      { letra: 'A', texto: '(F), (H) e (G), enquanto a ilustração (C) apresenta uma combinação dos domínios simbólico e submicroscópico.' },
      { letra: 'B', texto: '(G), (D) e (A), enquanto a ilustração (E) apresenta uma combinação dos domínios simbólico e submicroscópico.' },
      { letra: 'C', texto: '(B), (A) e (H), enquanto a ilustração (E) apresenta uma combinação dos domínios simbólico e submicroscópico.' },
      { letra: 'D', texto: '(D), (G) e (H), enquanto a ilustração (C) apresenta uma combinação dos domínios simbólico e submicroscópico.', explicacao: 'Correta! (1) Macroscópico = o que se vê: o incêndio da foto D. (2) Submicroscópico = partículas: os modelos de moléculas reagindo em G. (3) Simbólico = a equação química em H. A ilustração C junta um gráfico de energia (simbólico) e modelos de moléculas (submicroscópico).' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2026-067',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 67,
    disciplina: 'Química',
    conteudo: ['qui-4a3', 'qui-4a4'],
    subtopico: 'Acidificação dos oceanos e corais',
    dificuldade: 'dificil',
    imagem: 'imagens/estudo/unicamp-2026-067.webp',
    legenda: '<small>(Adaptado de HOEGH-GULDBERG et al. <i>Science</i>, v. 318, p.1737-1742, 2007.)</small>',
    enunciado: `<p>Os recifes de corais são ecossistemas ricos em biodiversidade, sendo essenciais para a pesca e proteção costeira. Essas estruturas são formadas por pólipos com esqueleto externo de carbonato de cálcio e sofrem degradação nas últimas décadas devido às atividades humanas no meio ambiente. O infográfico representa o efeito da ação humana sobre um dos equilíbrios químicos da água dos oceanos pela emissão de CO<sub>2</sub> atmosférico (CO<sub>2</sub> atm). Dados: [CO<sub>2</sub>]atm = concentração de CO<sub>2</sub> atmosférico</p>
<p>Com base nas informações do enunciado e do infográfico apresentado, é correto afirmar que as espécies <b>A</b>, <b>B</b> e <b>C</b> são, respectivamente,</p>`,
    alternativas: [
      { letra: 'A', texto: 'CO<sub>2</sub>, CO<sub>3</sub><sup>−2</sup> e CaCO<sub>3</sub>, enquanto os eixos X e Y no infográfico representam respectivamente [CO<sub>3</sub><sup>−2</sup>] e [CO<sub>2</sub>]atm. Globalmente, o aumento da [CO<sub>2</sub>]atm provoca um aumento do pH dos oceanos e, consequentemente, uma maior degradação dos corais.' },
      { letra: 'B', texto: 'CO<sub>3</sub><sup>−2</sup>, CaCO<sub>3</sub> e CO<sub>3</sub><sup>−2</sup>, enquanto os eixos X e Y no infográfico representam respectivamente [CO<sub>2</sub>]atm e [CO<sub>3</sub><sup>−2</sup>]. Globalmente, o aumento da [CO<sub>2</sub>]atm provoca uma diminuição do pH dos oceanos e, consequentemente, uma maior degradação dos corais.', explicacao: 'Correta! O H<sup>+</sup> liberado pelo CO<sub>2</sub> dissolvido reage com o carbonato (A = CO<sub>3</sub><sup>2−</sup>) formando HCO<sub>3</sub><sup>−</sup>; o CaCO<sub>3</sub> do coral (B) se dissolve em Ca<sup>2+</sup> + CO<sub>3</sub><sup>2−</sup> (C). No gráfico, ao aumentar o CO<sub>2</sub> atmosférico (X), cai o carbonato disponível (Y). Mais CO<sub>2</sub> → pH menor → mais degradação dos corais.' },
      { letra: 'C', texto: 'CO<sub>2</sub>, CaCO<sub>3</sub> e CO<sub>3</sub><sup>−2</sup>, enquanto os eixos X e Y no infográfico representam respectivamente [CO<sub>3</sub><sup>−2</sup>] e [CO<sub>2</sub>]atm. Globalmente, o aumento da [CO<sub>2</sub>]atm provoca uma diminuição do pH dos oceanos e, consequentemente, uma menor degradação dos corais.' },
      { letra: 'D', texto: 'CO<sub>3</sub><sup>−2</sup>, CaCO<sub>3</sub> e CO<sub>3</sub><sup>−2</sup>, enquanto os eixos X e Y no infográfico representam respectivamente [CO<sub>3</sub><sup>−2</sup>] e [CO<sub>2</sub>]atm. Globalmente, o aumento da [CO<sub>2</sub>]atm provoca um aumento do pH dos oceanos e, consequentemente, uma menor degradação dos corais.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2026-068',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 68,
    disciplina: 'Química',
    conteudo: ['qui-4a1', 'qui-3a1'],
    subtopico: 'Combustíveis — energia por massa e por volume',
    dificuldade: 'media',
    enunciado: `<p>Aviões são os únicos meios de transporte que cruzam continentes em um dia. Apesar dos avanços em eficiência energética, as aeronaves contribuem com 3,5% do aquecimento global. Por isso, existe o interesse em substituir o querosene usado por essas aeronaves por hidrogênio, com destaque para o uso do hidrogênio líquido combustível. A tabela a seguir apresenta dados desses dois tipos de combustíveis na aviação.</p>
<table class="tabela-prova">
  <tr><th>Combustível</th><th>Energia combustão (kJ·mol<sup>−1</sup>)</th><th>Densidade do líquido (g·cm<sup>−3</sup>)</th><th>Massa molar (g·mol<sup>−1</sup>)</th></tr>
  <tr><td>Querosene*</td><td>6745</td><td>0,804</td><td>153</td></tr>
  <tr><td>Hidrogênio</td><td>240</td><td>0,071</td><td>2</td></tr>
</table>
<p><small>* valores médios e aproximados.</small></p>
<p>Características como massa e volume da aeronave são fatores importantes para seu desempenho. Levando em conta essa informação, para uma <u>mesma quantidade de energia</u> gerada pelo combustível, é correto afirmar que o <u>hidrogênio</u> é melhor que o querosene, pois</p>`,
    alternativas: [
      { letra: 'A', texto: 'sua razão energia por volume é maior.' },
      { letra: 'B', texto: 'o volume utilizado será menor.' },
      { letra: 'C', texto: 'sua razão energia por massa é maior.', explicacao: 'Correta! Energia por massa: H<sub>2</sub> = 240/2 = 120 kJ/g; querosene = 6745/153 ≈ 44 kJ/g. Já por volume o H<sub>2</sub> perde: 120 × 0,071 ≈ 8,5 kJ/cm³ contra 44 × 0,804 ≈ 35 kJ/cm³ — ele exige mais volume, mas menos massa.' },
      { letra: 'D', texto: 'a massa utilizada será maior.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2026-069',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 69,
    disciplina: 'Química',
    conteudo: 'qui-3a1',
    subtopico: 'Mol, razão molar e porcentagem em massa',
    dificuldade: 'dificil',
    imagem: 'imagens/estudo/unicamp-2026-069.webp',
    legenda: '<small>(Adaptado de BACH, K. et al. <i>ChemRxiv</i>, DOI: 10.26434/chemrxiv-2024-xb06z-v2. Acesso em 09/10/2025.)</small>',
    enunciado: `<p>Diante das mudanças climáticas, muitos químicos desempenham um papel estratégico no enfrentamento desse problema. Uma dessas ações é o esforço no desenvolvimento de recursos que removem CO<sub>2</sub> por meio da captura direta do ar. Nesse sentido, os químicos se dedicam a produzir materiais que, ao mesmo tempo, possam capturar o CO<sub>2</sub> em situações diversas em quantidades e velocidades altas. Um exemplo disso é a captura cumulativa de CO<sub>2</sub> (em mmol) por grama de tetraperoxotitanato de potássio K<sub>4</sub>Ti(O<sub>2</sub>)<sub>4</sub> em função do tempo. Esses resultados são parcialmente mostrados no gráfico.</p>
<p>Dado parcial: Massa molar: K<sub>4</sub>Ti(O<sub>2</sub>)<sub>4</sub> = 332,3 g·mol<sup>−1</sup></p>
<p>Considerando as informações do gráfico, é correto afirmar que após 65 minutos de adsorção: (i) a razão molar [mol CO<sub>2</sub> por mol de K<sub>4</sub>Ti(O<sub>2</sub>)<sub>4</sub>] e (ii) o aumento percentual de massa do sólido serão aproximadamente de</p>`,
    alternativas: [
      { letra: 'A', texto: '(i) 3 e (ii) 13% em relação ao inicial.' },
      { letra: 'B', texto: '(i) 1 e (ii) 13% em relação ao inicial.', explicacao: 'Correta! Em 65 min a captura é ≈ 3,0 mmol de CO<sub>2</sub> por grama. 1 g do sólido = 1/332,3 mol ≈ 3,0 mmol, então a razão é ≈ 1 mol de CO<sub>2</sub> por mol. Massa captada: 3,0 mmol × 44 g/mol ≈ 0,13 g por grama de sólido, ou seja, ≈ 13% de aumento.' },
      { letra: 'C', texto: '(i) 3 e (ii) 30% em relação ao inicial.' },
      { letra: 'D', texto: '(i) 1 e (ii) 30% em relação ao inicial.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2026-070',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 70,
    disciplina: 'Química',
    conteudo: ['qui-2a7', 'qui-2a4'],
    subtopico: 'Processo Solvay',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2026-070.webp',
    legenda: '<small>(Adaptado de ARAÚJO A. L. et al. <i>Química Nova</i>, v. 21, n. 1, p. 114, 1998.)</small>',
    enunciado: `<p>A produção industrial de barrilha (carbonato de sódio) é majoritariamente feita pelo processo Solvay. A barrilha é um dos compostos químicos inorgânicos mais importantes globalmente, sendo vital para a fabricação de vidro, sabão, detergente, papel, entre muitos outros produtos. As reações envolvidas no processo Solvay, que ocorrem em fluxo contínuo, estão representadas esquematicamente no fluxograma.</p>
<p>Nesse processo de fabricação, após o fluxo contínuo de produção ser iniciado, é necessário adicionar para sua manutenção</p>`,
    alternativas: [
      { letra: 'A', texto: 'salmoura e calcário, pois a amônia é totalmente regenerada durante o processo.', explicacao: 'Correta! No fluxograma, a amônia sai como NH<sub>4</sub>Cl e volta como NH<sub>3</sub> ao reagir com o CaO; o CO<sub>2</sub> vem do calcário e da decomposição do NaHCO<sub>3</sub>. As matérias-primas consumidas são a salmoura (NaCl) e o calcário (CaCO<sub>3</sub>); saem Na<sub>2</sub>CO<sub>3</sub> e CaCl<sub>2</sub>.' },
      { letra: 'B', texto: 'gás carbônico e salmoura, pois a amônia é totalmente regenerada durante o processo.' },
      { letra: 'C', texto: 'calcário e amônia, pois o gás carbônico é totalmente regenerado durante o processo.' },
      { letra: 'D', texto: 'amônia e salmoura, pois o gás carbônico é totalmente regenerado durante o processo.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2026-071',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 71,
    disciplina: 'Química',
    conteudo: ['qui-3a4', 'qui-1b1'],
    subtopico: 'Densidade de misturas água-etanol',
    dificuldade: 'dificil',
    enunciado: `<p>A Agência Nacional do Petróleo (ANP) é responsável por implementar a política nacional de combustíveis e proteger os interesses dos consumidores quanto a preço, qualidade e oferta de produtos, além de especificar a qualidade dos derivados de petróleo, do gás natural e de seus derivados e dos biocombustíveis. Nesse sentido, a resolução ANP 907, de 2022, especifica algumas características do Etanol Anidro Combustível (EAC), do Etanol Hidratado Combustível (EHC) e do Etanol Hidratado Combustível Premium (EHCP). Algumas dessas características estão na tabela a seguir e nas alternativas.</p>
<table class="tabela-prova">
  <tr><th>Combustível</th><th>Massa Específica (kg/m<sup>3</sup>)</th><th>Teor Alcoólico (% massa)</th></tr>
  <tr><td><b>EAC</b></td><td>791,5 (<b>a</b>)</td><td>99,3 (<b>b</b>)</td></tr>
  <tr><td><b>EHC</b></td><td>(<b>c</b>)</td><td>entre 92,5 e 94,6</td></tr>
  <tr><td><b>EHCP</b></td><td>(<b>d</b>)</td><td>entre 95,5 e 96,5</td></tr>
</table>
<p><small>(Adaptado da Resolução ANP nº 907 de 18/11/2022.)</small></p>
<p>Considerando que água e etanol formam uma mistura ideal, para preencher corretamente essa tabela, as letras <b>a</b>, <b>b</b>, <b>c</b> e <b>d</b> devem corresponder, respectivamente, a</p>`,
    alternativas: [
      { letra: 'A', texto: 'máximo; mínimo; entre 805 e 811 e entre 800 e 803.', explicacao: 'Correta! A água é mais densa que o etanol, então quanto mais água, maior a massa específica. No EAC, a densidade 791,5 é um máximo e o teor 99,3% é um mínimo (limitam a água). O EHC, com mais água (92,5–94,6%), fica entre 805 e 811 kg/m³; o EHCP, com menos água, entre 800 e 803 kg/m³.' },
      { letra: 'B', texto: 'mínimo; máximo; entre 805 e 811 e entre 800 e 803.' },
      { letra: 'C', texto: 'máximo; mínimo; entre 800 e 803 e entre 805 e 811.' },
      { letra: 'D', texto: 'mínimo; máximo; entre 800 e 803 e entre 805 e 811.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2026-072',
    prova: 'Unicamp 2026',
    vestibular: 'Unicamp', ano: 2026,
    numeroOriginal: 72,
    disciplina: 'Química',
    conteudo: ['qui-2a7', 'qui-4a2'],
    subtopico: 'Interpretação de processo — produção de lítio',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2026-072.webp',
    legenda: '<small>(Adaptado de SUBASINGHE, S.A.D.T. et al. <i>Chemical Engineer Journal</i>, v. 505, n. 159661, 2025.)</small>',
    enunciado: `<p>Uma patente é uma concessão pública, conferida pelo Estado, que garante ao seu titular a exclusividade de explorar comercialmente a sua criação. É necessário que a patente seja de uma criação inédita. Para ser explorada comercialmente, deve apresentar vantagens para quem vai adquiri-la e utilizá-la na produção a que se propõe. É com base nesses pressupostos que cientistas entraram com pedido de patente para um processo de produção de lítio a partir do minério α-espodumênio (α-LiAlSi<sub>2</sub>O<sub>6</sub>). Para explicar o seu novo método e compará-lo a um método convencional, os pesquisadores apresentaram a figura.</p>
<p>Considerando <u>apenas</u> essas informações, é correto afirmar que, em relação ao método convencional, esse novo método é</p>`,
    alternativas: [
      { letra: 'A', texto: 'mais rápido e apresenta maior rendimento, porém consome mais carbonato na etapa final de separação do lítio.' },
      { letra: 'B', texto: 'mais intensivo em energia e com maior consumo de carbonato na etapa final de separação do lítio, porém com maior rendimento.' },
      { letra: 'C', texto: 'mais lento e apresenta menor rendimento, porém consome menos carbonato na etapa final de separação do lítio.' },
      { letra: 'D', texto: 'menos intensivo em energia e com menor consumo de carbonato na etapa final de separação do lítio, porém nada se pode afirmar acerca do rendimento.', explicacao: 'Correta! O método proposto usa temperaturas bem menores (325 °C e lixiviação em temperatura ambiente, contra 1 100 °C, 325 °C e 90 °C) e tem menos etapas antes do CO<sub>3</sub><sup>2−</sup> — logo, gasta menos energia e menos carbonato. A figura não traz dados de rendimento nem de tempo.' },
    ],
    gabarito: 'D',
  },
);
