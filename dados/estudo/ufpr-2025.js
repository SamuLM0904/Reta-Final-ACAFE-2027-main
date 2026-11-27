/**
 * UFPR — Processo Seletivo 2025 (Edital 25/2024 – NC/PROGRAD), 1ª fase: Conhecimentos Gerais
 * (prova de outubro de 2024, caderno ORDEM A, 90 questões de 5 alternativas).
 * Matemática 01–09, Física 10–18, Química 19–27, Biologia 28–36, Geografia 37–45, História 46–54,
 * Língua Portuguesa 55–66, Literatura Brasileira 67–72, Filosofia 73–77, Sociologia 78–82 e
 * Língua Estrangeira 83–90 (cadastradas só Inglês e Espanhol).
 *
 * Fonte: Provas/Outros/UFPR/2025 - Prova com Gabarito Definitivo.pdf (caderno com a resposta do
 * gabarito definitivo marcada); anuladas: Provas/Outros/UFPR/2025 - Gabarito - Questoes anuladas e alteradas.pdf.
 * Ficaram de fora: 39 (anulada), 67, 68, 69, 71 e 72 (dependem da leitura de obras da lista da UFPR),
 * 73–77 (Filosofia) e 78–82 (Sociologia).
 * Questões de ESTUDO — nunca entram nos simulados. Aparecem no módulo da matéria, dentro do
 * capítulo do campo `conteudo` (Literatura e línguas: pelo `subtopico`).
 * Formato das questões: veja README.md ("Como adicionar uma questão nova").
 */

var TEXTO_UFPR_2025_FIS_10 = `
      <p><b>O texto a seguir é referência para as questões 10 a 12.</b></p>
      <p>Um objeto de massa constante <i>m</i> = 0,2 kg desloca-se em um movimento unidimensional ao longo de uma linha reta, e sua aceleração <i>a</i> é medida em função do tempo <i>t</i>, obtendo-se, então, o gráfico a seguir:</p>
`;

var TEXTO_UFPR_2025_FIS_16 = `
      <p><b>O texto a seguir é referência para as questões 16 e 17.</b></p>
      <p>Uma dada quantidade de gás ideal executa o processo termodinâmico apresentado no gráfico a seguir, iniciando no ponto <i>A</i> e terminando no ponto <i>B</i>:</p>
`;

var TEXTO_UFPR_2025_POR_55 = `
      <p><b>O texto a seguir é referência para as questões 55 a 58.</b></p>
      <p><b>Tragédia no RS apaga pessoas negras e escancara racismo ambiental</b></p>
      <p>No início dos anos 2000, viajei a Mato Grosso do Sul para participar de um evento universitário. Lembro que na época eu causei espanto em alguns participantes ao dizer que eu era de Porto Alegre. A surpresa vinha acompanhada de um questionamento: “Não sabia que tinha negros no Rio Grande Sul”. Ao longo dos anos experimentei essa reação diversas vezes, em contextos e lugares diferentes.</p>
      <p>Essa percepção faz parte de um senso comum bastante arraigado no Brasil, e é fruto de um projeto de embranquecimento e apagamento das comunidades negras no estado. Um projeto bem-sucedido que há séculos invisibiliza não só a presença de pessoas negras, como também sua contribuição crucial na construção do estado.</p>
      <p>O imaginário popular é este: o Rio Grande do Sul é branco, constituído por uma grande colônia alemã, de ares europeus, lugar em que os moradores nem falam português. Um estereótipo que é reforçado pelas imagens dos municípios como Gramado e Canela, com seus chalés, fábricas de chocolates, vinhos e cafés coloniais.</p>
      <p>Obviamente que existe uma inegável contribuição da colonização europeia na formação do estado, no entanto, o que se coloca aqui é a supervalorização dessa cultura e o apagamento de outras.</p>
      <p>Segundo dados do próprio governo do estado, o Rio Grande do Sul tem uma população negra de 21%. Os levantamentos também mostram que os negros são os mais pobres, ganham salários mais baixos e têm menos acesso à educação e à saúde quando comparados aos brancos. Além disso, a representatividade na política é pequena: apenas na última eleição foi eleita a primeira bancada negra de Porto Alegre.</p>
      <p>As enchentes no Rio Grande do Sul revelam a existência de uma segregação racial no estado. A tragédia atingiu de maneira significativa a região metropolitana de Porto Alegre, por exemplo, um lugar onde reside grande parte da população negra e periférica. Portanto, são comunidades inteiras pertencentes a uma classe operária, que ocupam áreas de risco e que estão propensas a serem as primeiras vítimas das catástrofes climáticas.</p>
      <p>Não se pode falar em reconstrução de um estado sem levar em consideração os efeitos do racismo ambiental. A reconstrução deve se dar num contexto compreendendo que, historicamente, as comunidades periféricas, negras, quilombolas e indígenas não tiveram acesso a serviços básicos como saneamento, água potável, luz, acesso à internet, saúde e educação de qualidade. As enchentes escancararam o racismo ambiental, portanto, será preciso dar atenção ainda maior às desigualdades raciais para uma reconstrução justa e humana.</p>
      <small>Disponível em: https://www.geledes.org.br/tragedia-no-rs-apaga-pessoas-negras-e-escancara-racismo-ambiental. Adaptado.</small>
`;

var TEXTO_UFPR_2025_POR_60 = `
      <p><b>O texto a seguir é referência para as questões 60 e 61.</b></p>
      <p><b>Entenda os juros</b><br>
      Juros são o valor do dinheiro no tempo. Ou seja, funcionam como se fossem o aluguel do dinheiro. Os bancos e outras instituições financeiras fazem a intermediação entre quem tem dinheiro (poupador ou investidor) e quem precisa de dinheiro (tomador ou devedor). Se você é um poupador/investidor, o dinheiro que você aplicou na instituição financeira será emprestado ao tomador/devedor, que pagará o valor, mais juros ao banco. O banco, por sua vez, fica com parcela do valor pago como remuneração e devolve a você a quantia com juros no momento futuro, conforme combinado.<br>
      O tomador vai devolver ao banco um valor superior ao que tomou emprestado e o poupador vai receber um montante maior do que o investido.<br>
      <b>Taxa de juros</b><br>
      É o preço do “aluguel” do dinheiro por um período de tempo; percentual calculado pela divisão dos juros contratados pelo capital emprestado/poupado.<br>
      Se os juros cobrados pelo empréstimo de R$1.000 durante um ano forem R$80, significa que o tomador pagou uma taxa de juros de 8% a.a. (ao ano). O cálculo é feito da seguinte forma: juros/capital, ou seja 80/1.000 = 8/100 por ano = 8% a.a.<br>
      Por outro lado, considere o cenário em que um investimento de R$ 1.000 renda à taxa de juros de 5% a.a. (ao ano). Assim, o investidor receberá R$5 por cada R$100 investidos (5/100) durante um ano, o que, ao final do período, totalizará o montante de R$1.050.</p>
      <small>Disponível em: https://www.bcb.gov.br/cidadaniafinanceira/entendajuro.</small>
`;

var TEXTO_UFPR_2025_POR_64 = `
      <p><b>O texto a seguir é referência para as questões 64 e 65.</b></p>
      <p>Todas as grandes línguas de cultura que conhecemos hoje, ao longo de sua história, passaram por um processo de estandardização. Por estandardização, entenderemos aqui o fato de que a língua assume uma mesma forma para a maioria dos usuários e passa a obedecer a modelos definidos. No processo de estandardização de uma língua entram, às vezes, fatores de natureza extralinguística. Em poucos séculos, a invenção da imprensa fez com que as mesmas obras pudessem ser lidas exatamente com o mesmo texto em lugares diferentes. Antes da imprensa, elas circulavam em versões manuscritas, produzidas a bico-de-pena em oficinas de cópia: a ignorância dos empregados a respeito do assunto da obra, suas diferenças de formação, a própria lentidão da tarefa, que obrigava a utilizar vários copistas na produção de um mesmo manuscrito, faziam com que o texto copiado se alterasse ao longo do tempo. No século XX, a estandardização da língua esteve intimamente ligada à explosão dos meios de comunicação de massa (o rádio, a televisão, o jornal, o <i>outdoor</i> e a internet), e a algumas grandes tendências da educação, como a generalização do ensino primário, que gerou um mercado de livros didáticos de grandes proporções e levou à criação de uma rica literatura infantil. É difícil avaliar de maneira exata a influência de todos esses fatores extralinguísticos, mas o certo é que eles contribuíram para uniformizar a língua e frear suas mudanças.</p>
      <small>Ilari, R.; Basso, R. <i>O português da gente</i>: a língua que estudamos a língua que falamos. São Paulo: Contexto, 2006. p. 197-199. Adaptado.</small>
`;

var TEXTO_UFPR_2025_ING_83 = `
      <p><b>The following text is reference to questions 83 and 84.</b></p>
      <p><b>Global Female Leaders Summit</b></p>
      <p><b>Jennifer Colpas</b><br>
      Co-Founder and Executive Chair | Tierra Grata, Colombia</p>
      <p>Jennifer Colpas is a 32-year-old Colombian, passionate about rural development, a specialist in Social Responsibility with more than seven years of experience in leading social development programs in Brazil and Colombia. She is a Chevening scholar and is a Master’s in Social Development. She is Co-Founder and Executive Director of Tierra Grata, a social enterprise created by a group of young people with experience in social intervention, international cooperation and research. Colpas believes that the essentials are for everyone.</p>
      <p>Tierra Grata was founded in April 2016 with the purpose of providing access to basic energy, water, and sanitation services to rural communities in Colombia. Colpas and Tierra Grata take part of youth networks and associations that are changing the world as Young Water Solutions and One Young World.</p>
      <small>Available in: https://www.globalfemaleleaders.com/speaker/jennifer-colpas.html. Adapted.</small>
`;

var TEXTO_UFPR_2025_ING_85 = `
      <p><b>The following text is reference to questions 85 and 86.</b></p>
      <p><b>Tierra Grata</b></p>
      <p><b>About us?</b><br>
      We provide access to clean energy, water and safe sanitation to rural communities through decentralized, affordable and non-polluting solutions.<br>
      Users subscribe to our services and through an interest-free credit acquire the different solutions through monthly payments adjusted to their income.<br>
      We accompany the services with a social intervention program that aims to generate capacities within the communities. With our Guardians program, we establish a management committee that becomes the technical team in charge of monitoring and repairing the installed solutions, guaranteeing long-term sustainability.</p>
      <small>Available in: https://tierragrata.org/en/about-us. Adapted.</small>
`;

var TEXTO_UFPR_2025_ING_87 = `
      <p><b>The following text is reference to questions 87 and 88.</b></p>
      <p>“Dune – Part I” tells the story of Paul Atreides, a brilliant and <b>gifted</b> young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to <b>ensure</b> the future of his family and his people. As malevolent forces explode into conflict over the planet’s exclusive supply of the most precious resource in existence – a <b>commodity</b> capable of unlocking humanity’s greatest potential – only those who can conquer their fear will survive.</p>
      <small>Available in: https://www.imdb.com/video/vi3986080537. Adapted.</small>
`;

var TEXTO_UFPR_2025_ING_89 = `
      <p><b>The following text is reference to questions 89 and 90.</b></p>
      <p><b>Surgery in space: Tiny remotely operated robot completes first simulated procedure at the sp</b><br>
      By Taylor Nicioli and Kristin Fisher, CNN February 13, 2024</p>
      <p>A tiny surgical robot in residence at the International Space Station completed its first surgery demo in zero gravity on Saturday.<br>
      The robot, known as spaceMIRA – which stands for Miniaturized In Vivo Robotic Assistant – performed several operations on simulated tissue at the orbiting laboratory while remotely operated by multiple-area surgeons from approximately 250 miles (400 kilometers) below in Lincoln, Nebraska.<br>
      The milestone is a step forward in developing technology that could have implications not just for successful long-term human space travel, where surgical emergencies could happen, but also for establishing access to medical care in remote areas on Earth, such as in rural areas or military battlefields.<br>
      The US goal of pushing exploration deeper into space includes the possibility of journeys that could take years – a round-trip to Mars, for example, could take about two years to complete, according to NASA.<br>
      The demonstration on Saturday called for the remote surgeon to control the robots’ hands to provide tension to the simulated tissue – made of rubber bands – and use the other hand to dissect the elastic tissue with scissors. A total of six surgeons performed remote tests with the robot, and each demonstration – dissecting the correct piece of tissue under pressure, a common surgical task, was considered successful.<br>
      One of the challenges when attempting to control a robot in space from Earth is latency, or the delay between the time the command is sent and the time the robot receives <b><u>it</u></b>. The delay was about 0.85 of a second, said Dr. Michael Jobst, a colorectal surgeon who was part of the demonstration with spaceMIRA on Saturday.</p>
      <small>Available in: https://edition.cnn.com/2024/02/13/world/mira-robot-first-surgery-in-space-scn/index.html. Adapted.</small>
`;

var TEXTO_UFPR_2025_ESP_87 = `
      <p><b>El texto que sigue es la referencia para las cuestiones 87 y 88.</b></p>
      <p>Dicen que nuestra vieja historia de amor con el agua tiene mucho que ver con el recuerdo del refugio amniótico, en el útero de nuestra madre. Y también por la indeleble huella del primer organismo unicelular de hace millones de años. Nos lo advirtió el filósofo británico Alan Watts: “No viniste a este mundo. Saliste de él, como una ola del océano. No eres un extraño aquí”. Entre el cielo y la tierra somos criaturas fronterizas que, de asombro en asombro, se sienten hermanadas en las infinitas transmutaciones “del mar vivo del gran mundo”, leemos en El libro del agua y el fuego: El enigma de Louis Cattiaux, de Raimon Arola (Herder, 2022). Nos creemos criaturas de campo, montaña o ciudad, pero el agua es también nuestro territorio. En el agua “te sumerges en otra dimensión donde rigen otros valores más elementales. Y mientras nos esforzamos por mantenernos a flote, recuperamos nuestra olvidada condición de animales”, explica por teléfono María Belmonte, autora de El murmullo del agua (Acantilado, 2024). Somos una de las muchas formas del agua, y asumirlo es una purificante bendición. “Cada uno de nosotros llevamos en nuestras venas la corriente salina de nuestra sangre, en la cual el sodio, el potasio y el calcio se hallan en proporciones muy semejantes a las que existen en el agua del mar”, explicó la bióloga marina estadounidense Rachel Carson en El mar que nos rodea, publicado en 1951. De los océanos venimos y “por eso sumergirnos nos restaura”, afirma por videollamada Easkey Britton, doctora en Medio Ambiente y Sociedad por la Universidad Nacional de Irlanda. “Al meternos en el agua, especialmente si es fría, nos sentimos muy bien. Nos ayuda a conectar con otros y con nosotros mismos”, añade. Después de un baño de mar estamos más presentes, menos distraídos. “Vivimos una especie de reset del sistema nervioso”, según Britton, autora de Ebb and Flow (Flujo y reflujo, sin edición en español; Watkins, 2023).</p>
      <small>Disponible en: https://elpais.com/ideas/2024-08-04/animales-liquidos-por-que-meternos-en-el-agua-nos-sienta-tan-bien.html. Adaptado.</small>
`;

var TEXTO_UFPR_2025_ESP_89 = `
      <p><b>El texto que sigue es la referencia para las cuestiones 89 y 90.</b></p>
      <p>¿Qué estrategias siguen las familias para limitar o controlar la actividad de sus hijos en Internet? Según un informe de Save the Children, el 38% les explica los riesgos existentes; el 30% establece un límite de horas de conexión; el 25% les ayuda a actuar frente a posibles riesgos, y el 23% les sigue en sus cuentas de redes sociales.</p>
      <p>La encuesta, en la que han participado más de 3.300 chavales españoles de entre 14 y 17 años, arroja que el interés de los menores por su privacidad está más relacionado con “ganar libertad e intimidad respecto a sus padres”, que con mecanismos para la protección de sus datos personales.</p>
      <p>Casi el 58% de los participantes aseguró que utiliza Internet “de manera habitual” desde los 11 años, y casi 1 de cada 3 lo hacía antes de cumplir 10 – la OMS recomienda cero uso hasta los dos años, menos de una hora al día entre tres y cinco años, y menos de dos diarias a partir de los cinco años. Casi el 67% de los adolescentes afirmó conectarse varias veces al día, y más de un 20% reportó estar “permanentemente conectado”. Las horas de conexión van aumentando con la edad: frente al 12% de los que tienen 14 años que se conectan más de 4 horas al día, un 21% de los 16 lo hace.</p>
      <p>“Cruzando la edad de inicio y el tiempo de conexión posterior, podemos observar una clara relación entre la exposición temprana y un uso más intenso: el 25% de los adolescentes que pasan más de 4 horas al día en Internet son aquellos que empezaron a usarlo antes de los 10 años, frente al 12,9% de los que comenzaron a los 14 años o más”, apunta Del Moral, que señala que ese mayor consumo se debe a la incorporación temprana de formas de ocio o consumo online que se convierten en hábito. El 91% de los chavales reportó que la red que más usan es Whatsapp, seguida de Instagram (79,2%) y TikTok (74,4%).</p>
      <p>Sobre la “no conexión”, la mayoría manifestó que se produce porque no les es posible estar conectados, no porque decidan desconectar. “El único espacio claro de desconexión del móvil obligatorio son las clases, sin embargo, los adolescentes reportaron cómo el profesorado a veces es laxo, siendo posible, en ocasiones, que hayan visto series en sus horas de clase”, indica el trabajo.</p>
      <p>Relacionado con los tiempos de consumo, el trabajo muestra que aquellos que pasan más horas conectados muestran unas tasas más altas respecto a la “incapacidad para superar dificultades”, “tener una visión negativa sobre la propia situación” o “dificultad para manejar problemas personales”. El 30,9% de los menores que se conectan más de 4 horas al día responden que “siempre o casi siempre” sienten que las dificultades se acumulaban tanto que no pueden superarlas, casi el doble con respecto a los que pasan menos tiempo conectados (18,9%).</p>
      <small>Disponible en: https://elpais.com/sociedad/2024-07-11/el-23-de-las-familias-sigue-a-sus-hijos-en-redes-sociales-para-vigilar-y-el-37-de-los-menores-sabe-como-saltarse-las-apps-de-control-parental.html.</small>
`;

QUESTOES.push(
  // ===================== MATEMÁTICA =====================
  {
    id: 'ufpr-2025-001', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 1,
    disciplina: 'Matemática', conteudo: 'mat-2a2', subtopico: 'Inequação do 1º grau', dificuldade: 'facil',
    enunciado: `<p>Assinale a alternativa que corresponde ao maior número inteiro <i>x</i> que satisfaz a desigualdade 2<i>x</i> − 10 ≤ −3<i>x</i> + 8.</p>`,
    alternativas: [
      { letra: 'A', texto: '–2' },
      { letra: 'B', texto: '0' },
      { letra: 'C', texto: '3', explicacao: 'Correta! 2x − 10 ≤ −3x + 8 ⇒ 5x ≤ 18 ⇒ x ≤ 3,6. O maior inteiro que satisfaz é 3.' },
      { letra: 'D', texto: '4' },
      { letra: 'E', texto: '5' },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2025-002', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 2,
    disciplina: 'Matemática', conteudo: 'mat-1b5', subtopico: 'Sistema de equações', dificuldade: 'facil',
    enunciado: `<p>Em um campeonato de futebol, cada vitória vale 3 pontos, o empate vale apenas 1 ponto e a derrota, nenhum ponto. Um time perdeu apenas 2 dos 34 jogos que disputou e somou 78 pontos. Quantos empates ele obteve na competição?</p>`,
    alternativas: [
      { letra: 'A', texto: '6' },
      { letra: 'B', texto: '7' },
      { letra: 'C', texto: '8' },
      { letra: 'D', texto: '9', explicacao: 'Correta! Sem as 2 derrotas, v + e = 32 e 3v + e = 78. Subtraindo: 2v = 46 ⇒ v = 23 vitórias e e = 32 − 23 = 9 empates.' },
      { letra: 'E', texto: '10' },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2025-003', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 3,
    disciplina: 'Matemática', conteudo: 'mat-4b1', subtopico: 'Distância entre dois pontos', dificuldade: 'media',
    enunciado: `<p>No plano cartesiano, considere os pontos <i>P</i> = (2<i>a</i>, 0) e <i>Q</i> = (<i>a</i> + 1, <i>a</i> − 1), sendo <i>a</i> um número real positivo. Sabendo que a distância entre <i>P</i> e <i>Q</i> é igual a √8 cm, assinale a alternativa que corresponde ao valor de <i>a</i>.</p>`,
    alternativas: [
      { letra: 'A', texto: '1/2' },
      { letra: 'B', texto: '√3' },
      { letra: 'C', texto: '1' },
      { letra: 'D', texto: '2' },
      { letra: 'E', texto: '3', explicacao: 'Correta! d² = (2a − a − 1)² + (0 − a + 1)² = 2(a − 1)² = 8 ⇒ (a − 1)² = 4 ⇒ a − 1 = ±2. Como a > 0, a = 3.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2025-004', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 4,
    disciplina: 'Matemática', conteudo: 'mat-2b3', subtopico: 'Áreas de quadriláteros', dificuldade: 'facil',
    enunciado: `<p>Um quadrado <i>Q</i> e um retângulo <i>R</i> possuem, cada um, área de 25 cm<sup>2</sup>. O comprimento de um dos lados do retângulo <i>R</i> é igual à metade do comprimento do lado do quadrado <i>Q</i>. Qual é a medida, em cm, do lado de maior comprimento do retângulo <i>R</i>?</p>`,
    alternativas: [
      { letra: 'A', texto: '√5' },
      { letra: 'B', texto: '√10' },
      { letra: 'C', texto: '5/2' },
      { letra: 'D', texto: '5' },
      { letra: 'E', texto: '10', explicacao: 'Correta! O lado do quadrado é √25 = 5 cm, então um lado do retângulo mede 5/2 cm. Como a área é 25 cm², o outro lado mede 25 ÷ (5/2) = 10 cm.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2025-005', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 5,
    disciplina: 'Matemática', conteudo: 'mat-2a3', subtopico: 'Raízes da função quadrática', dificuldade: 'facil',
    enunciado: `<p>O gráfico da função <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + <i>bx</i> + <i>c</i> intersecta o eixo <i>x</i> nos pontos <i>x</i> = −1 e <i>x</i> = 3. Determine o valor de <i>b</i> + <i>c</i>.</p>`,
    alternativas: [
      { letra: 'A', texto: '–5', explicacao: 'Correta! f(x) = (x + 1)(x − 3) = x² − 2x − 3, logo b = −2 e c = −3, e b + c = −5.' },
      { letra: 'B', texto: '–4' },
      { letra: 'C', texto: '–1' },
      { letra: 'D', texto: '2' },
      { letra: 'E', texto: '5' },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2025-006', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 6,
    disciplina: 'Matemática', conteudo: 'mat-3b2', subtopico: 'Princípio fundamental da contagem', dificuldade: 'media',
    enunciado: `<p>Três amigos vão viajar em um carro que possui cinco lugares. Durante a viagem, eles vão mudar de lugares, de modo que cada um ocupará, por vez, apenas um lugar no veículo. Como o lugar do condutor deve ser necessariamente ocupado e sabendo que eles vão se revezar na condução do carro durante a viagem, quantas configurações são possíveis?</p>`,
    alternativas: [
      { letra: 'A', texto: '9' },
      { letra: 'B', texto: '12' },
      { letra: 'C', texto: '18' },
      { letra: 'D', texto: '36', explicacao: 'Correta! Há 3 escolhas para o condutor; os outros dois ocupam 2 dos 4 lugares restantes, em ordem: 4 · 3 = 12. Total: 3 · 12 = 36 configurações.' },
      { letra: 'E', texto: '120' },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2025-007', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 7,
    disciplina: 'Matemática', conteudo: ['mat-2a5', 'mat-2a1'], subtopico: 'Função composta e logaritmo', dificuldade: 'media',
    enunciado: `<p>Sejam as funções <i>f</i>(<i>x</i>) = 2<sup><i>x</i></sup>, <i>g</i>(<i>x</i>) = 4<i>x</i> e <i>h</i>(<i>x</i>) = log<sub>8</sub> <i>x</i>. A função composta <i>u</i> = <i>h</i> ∘ <i>g</i> ∘ <i>f</i> é uma função afim. Assinale a alternativa que corresponde ao coeficiente angular da função <i>u</i>.</p>`,
    alternativas: [
      { letra: 'A', texto: '1/3', explicacao: 'Correta! u(x) = log₈(4 · 2ˣ) = log₈(2ˣ⁺²) = (x + 2)/3 = x/3 + 2/3. O coeficiente angular é 1/3.' },
      { letra: 'B', texto: '2/3' },
      { letra: 'C', texto: '4/3' },
      { letra: 'D', texto: '1' },
      { letra: 'E', texto: '2' },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2025-008', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 8,
    disciplina: 'Matemática', conteudo: 'mat-4a2', subtopico: 'Arco duplo', dificuldade: 'facil',
    enunciado: `<p>Sabendo que sen <i>x</i> = 3/5, assinale a alternativa que corresponde ao valor de cos (2<i>x</i>).</p>`,
    alternativas: [
      { letra: 'A', texto: '2/25' },
      { letra: 'B', texto: '3/25' },
      { letra: 'C', texto: '7/25', explicacao: 'Correta! cos(2x) = 1 − 2 sen²x = 1 − 2 · 9/25 = 1 − 18/25 = 7/25.' },
      { letra: 'D', texto: '9/25' },
      { letra: 'E', texto: '16/25' },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2025-009', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 9,
    disciplina: 'Matemática', conteudo: ['mat-2b4', 'mat-2b2'], subtopico: 'Circunferências tangentes', dificuldade: 'media',
    imagem: 'imagens/estudo/ufpr-2025-009.webp',
    enunciado: `<p>Duas circunferências com raios de 1 cm e 3 cm são tangentes no ponto <i>P</i>, conforme figura ao lado. A reta <i>r</i> tangencia as duas circunferências nos pontos <i>A</i> e <i>B</i>. Assinale a alternativa que corresponde à distância, em cm, entre os pontos <i>A</i> e <i>B</i>.</p>`,
    alternativas: [
      { letra: 'A', texto: '√3' },
      { letra: 'B', texto: '√5' },
      { letra: 'C', texto: '2√2' },
      { letra: 'D', texto: '2√3', explicacao: 'Correta! A distância entre os centros é 1 + 3 = 4 cm e a diferença dos raios é 3 − 1 = 2 cm. Pelo trapézio retângulo formado com os raios perpendiculares à tangente: AB² = 4² − 2² = 12 ⇒ AB = 2√3 cm.' },
      { letra: 'E', texto: '2√5' },
    ],
    gabarito: 'D',
  },

  // ===================== FÍSICA =====================
  {
    id: 'ufpr-2025-010', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 10,
    disciplina: 'Física', conteudo: 'fis-3b1', subtopico: 'Segunda lei de Newton', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2025_FIS_10,
    imagem: 'imagens/estudo/ufpr-2025-010.webp',
    enunciado: `<p>Considerando os dados expostos no enunciado e no gráfico, assinale a alternativa que apresenta corretamente a intensidade <i>F</i> da força resultante aplicada sobre a partícula no instante <i>t</i> = 30 s.</p>`,
    alternativas: [
      { letra: 'A', texto: '<i>F</i> = 0,0 N' },
      { letra: 'B', texto: '<i>F</i> = 0,4 N' },
      { letra: 'C', texto: '<i>F</i> = 0,8 N', explicacao: 'Correta! Pelo gráfico, em t = 30 s a aceleração é 4,0 m/s². Pela 2ª lei de Newton, F = m · a = 0,2 · 4,0 = 0,8 N.' },
      { letra: 'D', texto: '<i>F</i> = 4,0 N' },
      { letra: 'E', texto: '<i>F</i> = 8,0 N' },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2025-011', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 11,
    disciplina: 'Física', conteudo: 'fis-2a4', subtopico: 'Gráfico a × t', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2025_FIS_10,
    imagem: 'imagens/estudo/ufpr-2025-010.webp',
    enunciado: `<p>Sabe-se que a velocidade do objeto no instante <i>t</i> = 40 s vale <i>v</i><sub>1</sub> = 25 m/s. Com base nos dados fornecidos no enunciado e no gráfico, assinale a alternativa que apresenta corretamente a velocidade <i>v</i><sub>2</sub> do objeto no instante <i>t</i> = 50 s.</p>`,
    alternativas: [
      { letra: 'A', texto: '<i>v</i><sub>2</sub> = 35 m/s' },
      { letra: 'B', texto: '<i>v</i><sub>2</sub> = 45 m/s', explicacao: 'Correta! No gráfico a × t, a área dá a variação de velocidade. Entre 40 s e 50 s, a = 2,0 m/s² constante: Δv = 2,0 · 10 = 20 m/s. Logo v₂ = 25 + 20 = 45 m/s.' },
      { letra: 'C', texto: '<i>v</i><sub>2</sub> = 55 m/s' },
      { letra: 'D', texto: '<i>v</i><sub>2</sub> = 65 m/s' },
      { letra: 'E', texto: '<i>v</i><sub>2</sub> = 75 m/s' },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2025-012', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 12,
    disciplina: 'Física', conteudo: 'fis-3b2', subtopico: 'Teorema da energia cinética', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2025_FIS_10,
    imagem: 'imagens/estudo/ufpr-2025-010.webp',
    enunciado: `<p>Considerando os dados fornecidos no enunciado e no gráfico, assinale a alternativa que apresenta corretamente o valor do trabalho total <i>W</i> realizado sobre o objeto entre os instantes <i>t</i> = 60 s e <i>t</i> = 70 s.</p>`,
    alternativas: [
      { letra: 'A', texto: '<i>W</i> = −10 J' },
      { letra: 'B', texto: '<i>W</i> = −5 J' },
      { letra: 'C', texto: '<i>W</i> = 0 J', explicacao: 'Correta! Entre 60 s e 70 s a aceleração é nula, então a velocidade (e a energia cinética) não muda. Pelo teorema da energia cinética, W = ΔEc = 0.' },
      { letra: 'D', texto: '<i>W</i> = 5 J' },
      { letra: 'E', texto: '<i>W</i> = 10 J' },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2025-013', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 13,
    disciplina: 'Física', conteudo: 'fis-c1', subtopico: 'Múltiplos e submúltiplos', dificuldade: 'facil',
    enunciado: `<p>O uso de múltiplos e submúltiplos de unidades de medida simplifica a escrita de números que, de outra forma, poderia se tornar muito extensa. Nesse sentido, considere que o diâmetro médio de fios de cabelo, em metros, vale <i>e</i> = 0,000070 m. Assinale a alternativa que expressa corretamente o valor do diâmetro médio de fios de cabelo usando múltiplos ou submúltiplos do metro.</p>`,
    alternativas: [
      { letra: 'A', texto: '<i>e</i> = 0,70 cm' },
      { letra: 'B', texto: '<i>e</i> = 0,70 km' },
      { letra: 'C', texto: '<i>e</i> = 70 mm' },
      { letra: 'D', texto: '<i>e</i> = 70 μm', explicacao: 'Correta! 0,000070 m = 70 × 10⁻⁶ m, e 10⁻⁶ m = 1 μm (micrômetro). Logo e = 70 μm.' },
      { letra: 'E', texto: '<i>e</i> = 70 nm' },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2025-014', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 14,
    disciplina: 'Física', conteudo: 'fis-4a1', subtopico: 'Potência elétrica', dificuldade: 'facil',
    enunciado: `<p>Um aquecedor elétrico dissipa uma potência média <i>P</i> = 4,4 kW quando está ligado e sujeito a uma tensão Δ<i>V</i> = 220 V. Com base nesses dados, assinale a alternativa que apresenta corretamente o valor da intensidade da corrente elétrica <i>i</i> que circula pelo aquecedor quando ele está operando na condição descrita.</p>`,
    alternativas: [
      { letra: 'A', texto: '<i>i</i> = 20 A', explicacao: 'Correta! P = ΔV · i ⇒ i = 4400 / 220 = 20 A.' },
      { letra: 'B', texto: '<i>i</i> = 10 A' },
      { letra: 'C', texto: '<i>i</i> = 5,0 A' },
      { letra: 'D', texto: '<i>i</i> = √20 A' },
      { letra: 'E', texto: '<i>i</i> = 0,050 A' },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2025-015', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 15,
    disciplina: 'Física', conteudo: 'fis-1a1', subtopico: 'Equação fundamental da ondulatória', dificuldade: 'facil',
    enunciado: `<p>Uma fonte de ondas produz, em um dado meio, uma onda propagante periódica com velocidade de propagação <i>v</i> e frequência <i>f</i>. Sabe-se que, para ondas em que <i>f</i> = 25,0 Hz, a distância entre duas cristas sucessivas da onda produzida vale <i>d</i> = 4,00 m. Com base nessas informações, assinale a alternativa que apresenta corretamente o valor da velocidade de propagação <i>v</i> da onda produzida para a frequência indicada.</p>`,
    alternativas: [
      { letra: 'A', texto: '<i>v</i> = 6,25 m/s' },
      { letra: 'B', texto: '<i>v</i> = 12,5 m/s' },
      { letra: 'C', texto: '<i>v</i> = 50,0 m/s' },
      { letra: 'D', texto: '<i>v</i> = 100 m/s', explicacao: 'Correta! A distância entre duas cristas sucessivas é o comprimento de onda: λ = 4,00 m. Então v = λ · f = 4,00 · 25,0 = 100 m/s.' },
      { letra: 'E', texto: '<i>v</i> = 200 m/s' },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2025-016', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 16,
    disciplina: 'Física', conteudo: 'fis-2b3', subtopico: 'Equação geral dos gases', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2025_FIS_16,
    imagem: 'imagens/estudo/ufpr-2025-016.webp',
    enunciado: `<p>Considere que a temperatura do gás no ponto <i>A</i> vale <i>T<sub>A</sub></i>, e a temperatura no ponto <i>B</i> vale <i>T<sub>B</sub></i>. Com base nas informações fornecidas no enunciado e no gráfico, assinale a alternativa que apresenta corretamente o valor da razão <i>T<sub>B</sub></i>/<i>T<sub>A</sub></i> entre as temperaturas dos pontos <i>B</i> e <i>A</i>.</p>`,
    alternativas: [
      { letra: 'A', texto: '<i>T<sub>B</sub></i>/<i>T<sub>A</sub></i> = 3/4' },
      { letra: 'B', texto: '<i>T<sub>B</sub></i>/<i>T<sub>A</sub></i> = 4/3' },
      { letra: 'C', texto: '<i>T<sub>B</sub></i>/<i>T<sub>A</sub></i> = 2/3' },
      { letra: 'D', texto: '<i>T<sub>B</sub></i>/<i>T<sub>A</sub></i> = 1/2' },
      { letra: 'E', texto: '<i>T<sub>B</sub></i>/<i>T<sub>A</sub></i> = 3/2', explicacao: 'Correta! Para a mesma quantidade de gás, PV/T é constante: T_B/T_A = (P_B·V_B)/(P_A·V_A) = (40 · 3,0)/(80 · 1,0) = 120/80 = 3/2.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2025-017', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 17,
    disciplina: 'Física', conteudo: 'fis-2b3', subtopico: 'Trabalho em gráfico P × V', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2025_FIS_16,
    imagem: 'imagens/estudo/ufpr-2025-016.webp',
    enunciado: `<p>Considerando os dados fornecidos no enunciado e no gráfico, assinale a alternativa que apresenta corretamente o valor do trabalho <i>W</i> realizado pelo gás no processo <i>AB</i>.</p>`,
    alternativas: [
      { letra: 'A', texto: '<i>W</i> = 20 kJ' },
      { letra: 'B', texto: '<i>W</i> = 40 kJ' },
      { letra: 'C', texto: '<i>W</i> = 80 kJ' },
      { letra: 'D', texto: '<i>W</i> = 120 kJ', explicacao: 'Correta! O trabalho é a área sob a curva no gráfico P × V (um trapézio): W = (80 + 40)/2 · (3,0 − 1,0) = 60 · 2,0 = 120 kPa·m³ = 120 kJ.' },
      { letra: 'E', texto: '<i>W</i> = 160 kJ' },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2025-018', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 18,
    disciplina: 'Física', conteudo: 'fis-1b4', subtopico: 'Equação de Gauss', dificuldade: 'facil',
    enunciado: `<p>Uma dada lente delgada convergente tem distância focal <i>f</i> = 3,0 cm. Um objeto luminoso puntiforme é colocado no eixo principal da lente a uma distância <i>p</i> = 4,0 cm do centro óptico da lente. Assinale a alternativa que apresenta corretamente a distância <i>p</i>′ em que ocorre a formação da imagem, medida a partir do centro óptico da lente.</p>`,
    alternativas: [
      { letra: 'A', texto: '<i>p</i>′ = −12,0 cm' },
      { letra: 'B', texto: '<i>p</i>′ = −6,0 cm' },
      { letra: 'C', texto: '<i>p</i>′ = +4,0 cm' },
      { letra: 'D', texto: '<i>p</i>′ = +6,0 cm' },
      { letra: 'E', texto: '<i>p</i>′ = +12,0 cm', explicacao: 'Correta! Pela equação de Gauss, 1/f = 1/p + 1/p′ ⇒ 1/p′ = 1/3 − 1/4 = 1/12 ⇒ p′ = +12,0 cm (imagem real).' },
    ],
    gabarito: 'E',
  },

  // ===================== QUÍMICA =====================
  {
    id: 'ufpr-2025-019', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 19,
    disciplina: 'Química', conteudo: 'qui-1b4', subtopico: 'Flotação', dificuldade: 'facil',
    enunciado: `<p>As restrições de produção do período pandêmico e a alta demanda com o avanço da produção de carros elétricos impulsionaram os preços internacionais do cobre. Uma vez que os minerais possuem baixos teores desse metal, a produção do cobre é realizada a partir de uma série de etapas de enriquecimento, no qual a rocha do mineral é triturada e tratada em tanques de água contendo surfactantes, e, em seguida, essa mistura é submetida à aeração. Desse modo, a espuma gerada carrega as partículas contendo cobre para a superfície, formando uma pasta com maior teor desse metal.</p>
      <p>Qual método de separação é descrito nesse processo de enriquecimento do metal?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Filtração' },
      { letra: 'B', texto: 'Flotação', explicacao: 'Correta! Na flotação, bolhas de ar (com ajuda de surfactantes) aderem às partículas de minério e as arrastam para a superfície na espuma, separando-as da ganga, que afunda.' },
      { letra: 'C', texto: 'Destilação' },
      { letra: 'D', texto: 'Decantação' },
      { letra: 'E', texto: 'Centrifugação' },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2025-020', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 20,
    disciplina: 'Química', conteudo: 'qui-4b5', subtopico: 'Transmutação nuclear', dificuldade: 'facil',
    textoApoio: `<p>Recentemente, pesquisadores publicaram resultados sobre compostos de promécio (Pm), um dos elementos mais raros da tabela periódica. Estima-se que menos de um quilograma da substância pode ser encontrado naturalmente na crosta terrestre. A sua existência foi comprovada apenas em 1945, por meio da análise dos subprodutos da fissão do urânio. O promécio é produzido por bombardeamento de neodímio-146 por uma partícula (A), formando neodímio-147, que por sua vez decai a promécio-147.</p>
      <small>Driscoll, D. M. <i>et al.</i> Observation of a promethium complex in solution, <i>Nature</i>, n. 629, p. 819, 2024.</small>
      <p>O esquema a seguir ilustra esse processo:</p>`,
    imagem: 'imagens/estudo/ufpr-2025-020.webp',
    enunciado: `<p>Considerando as informações apresentadas, a espécie indicada por A, no esquema, corresponde a um(a):</p>`,
    alternativas: [
      { letra: 'A', texto: 'próton.' },
      { letra: 'B', texto: 'elétron.' },
      { letra: 'C', texto: 'fóton gama.' },
      { letra: 'D', texto: 'partícula (radiação) alfa.' },
      { letra: 'E', texto: 'nêutron.', explicacao: 'Correta! Conservando massa e carga: 146 + A = 147 ⇒ massa 1; 60 + Z = 60 ⇒ carga 0. Partícula de massa 1 e carga 0 é o nêutron (¹₀n).' },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2025-021', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 21,
    disciplina: 'Química', conteudo: 'qui-1a2', subtopico: 'Distribuição eletrônica de íons', dificuldade: 'media',
    enunciado: `<p>Observações realizadas durante eclipses solares permitiram a constatação de uma emissão característica de cor verde na coroa solar. No século XIX, esse resultado levou a comunidade científica a acreditar na existência de um novo elemento químico, o qual foi denominado <i>coronium</i>, por causa da origem de sua descoberta. Apenas no início do século XX, evidências mostraram que esse elemento não existe, e a emissão verde, na realidade, deve-se à presença do íon de ferro altamente ionizado Fe<sup>13+</sup> (Fe, Z = 26). Considerando os valores de Z para Ne = 10, Ar = 18 e Kr = 36, a distribuição eletrônica de mais baixa energia desse íon altamente ionizado é:</p>`,
    alternativas: [
      { letra: 'A', texto: '[Ne] 3s<sup>2</sup> 3p<sup>1</sup>', explicacao: 'Correta! O Fe<sup>13+</sup> tem 26 − 13 = 13 elétrons: 1s² 2s² 2p⁶ 3s² 3p¹ = [Ne] 3s² 3p¹ (é isoeletrônico do alumínio neutro).' },
      { letra: 'B', texto: '[Ne] 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>5</sup>' },
      { letra: 'C', texto: '[Ar] 3d<sup>6</sup> 4s<sup>2</sup>' },
      { letra: 'D', texto: '[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>1</sup>' },
      { letra: 'E', texto: '[Kr] 5s<sup>2</sup> 4d<sup>1</sup>' },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2025-022', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 22,
    disciplina: 'Química', conteudo: 'qui-3a2', subtopico: 'Reagente limitante', dificuldade: 'media',
    enunciado: `<p>Um dos pigmentos sintéticos mais antigos, encontrado em paredes de tumbas e templos egípcios, é o azul egípcio, de fórmula CaCuSi<sub>4</sub>O<sub>10</sub>. O azul egípcio é produzido pela mistura, moagem e aquecimento de um minério de cobre (Cu<sub>2</sub>CO<sub>3</sub>(OH)<sub>2</sub>), areia (SiO<sub>2</sub>) e calcário (CaCO<sub>3</sub>), conforme representado na equação a seguir:</p>
      <p>Cu<sub>2</sub>CO<sub>3</sub>(OH)<sub>2</sub> + 8SiO<sub>2</sub> + 2CaCO<sub>3</sub> → 2CaCuSi<sub>4</sub>O<sub>10</sub> + 3CO<sub>2</sub> + H<sub>2</sub>O</p>
      <p>Em um experimento, foram misturados 221 gramas de Cu<sub>2</sub>CO<sub>3</sub>(OH)<sub>2</sub>, 600 gramas de SiO<sub>2</sub> e 1000 gramas de CaCO<sub>3</sub>.</p>
      <p>Considerando as informações fornecidas e que a massa molar (g mol<sup>–1</sup>) de Cu<sub>2</sub>CO<sub>3</sub>(OH)<sub>2</sub> é 221, a de SiO<sub>2</sub>(s) é 60, a de CaCO<sub>3</sub> é 100 e a de CaCuSi<sub>4</sub>O<sub>10</sub> é 376, qual será a massa de pigmento azul egípcio obtida, em gramas?</p>`,
    alternativas: [
      { letra: 'A', texto: '188' },
      { letra: 'B', texto: '221' },
      { letra: 'C', texto: '752', explicacao: 'Correta! Há 1 mol de Cu₂CO₃(OH)₂, 10 mol de SiO₂ (precisaria de 8) e 10 mol de CaCO₃ (precisaria de 2): o limitante é o minério de cobre. 1 mol dele forma 2 mol de pigmento: 2 · 376 = 752 g.' },
      { letra: 'D', texto: '940' },
      { letra: 'E', texto: '1821' },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2025-023', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 23,
    disciplina: 'Química', conteudo: ['qui-1a5', 'qui-2b1'], subtopico: 'Hibridização sp³ e ângulo de ligação', dificuldade: 'facil',
    textoApoio: `<p>Em química orgânica, o conceito de hibridização (ou hibridação) de orbitais atômicos é amplamente utilizado em função dos ângulos de ligação dos compostos de carbono. Na figura a seguir, está uma representação espacial do diclorometano (CH<sub>2</sub>Cl<sub>2</sub>) que assume uma geometria tetragonal (hibridização <i>sp</i><sup>3</sup>) ao redor do átomo central, o carbono.</p>`,
    imagem: 'imagens/estudo/ufpr-2025-023.webp',
    enunciado: `<p>Considerando as informações apresentadas, qual é o valor de ângulo, para a molécula do diclorometano, entre as ligações H–C–H que mais se aproxima do observado experimentalmente?</p>`,
    alternativas: [
      { letra: 'A', texto: '30º' },
      { letra: 'B', texto: '90º' },
      { letra: 'C', texto: '110º', explicacao: 'Correta! Carbono sp³ tem geometria tetraédrica, com ângulos próximos de 109,5°; no CH₂Cl₂ o ângulo H–C–H fica em torno de 110°.' },
      { letra: 'D', texto: '180º' },
      { letra: 'E', texto: '360º' },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2025-024', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 24,
    disciplina: 'Química', conteudo: 'qui-1a4', subtopico: 'Ligação iônica', dificuldade: 'facil',
    enunciado: `<p>O ciclamato de sódio é um composto de fórmula Na(C<sub>6</sub>H<sub>11</sub>NHSO<sub>3</sub>), empregado como adoçante artificial de baixa caloria para substituir o açúcar. Sua produção é realizada pela reação de neutralização do ácido ciclâmico (C<sub>6</sub>H<sub>11</sub>NHSO<sub>3</sub>H) com o hidróxido de sódio (NaOH). Qual é o tipo de ligação entre o sódio e o ciclamato?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Metálica' },
      { letra: 'B', texto: 'Iônica', explicacao: 'Correta! A neutralização forma um sal: o Na⁺ (metal alcalino) e o ânion ciclamato (C₆H₁₁NHSO₃⁻) se unem por atração eletrostática, ou seja, ligação iônica.' },
      { letra: 'C', texto: 'De hidrogênio' },
      { letra: 'D', texto: 'Covalente simples' },
      { letra: 'E', texto: 'Covalente múltipla' },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2025-025', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 25,
    disciplina: 'Química', conteudo: 'qui-4a1', subtopico: 'Lei de Hess', dificuldade: 'media',
    enunciado: `<p>Na busca por combustíveis menos danosos ao meio ambiente, a amônia (NH<sub>3</sub>) tem sido considerada uma possível alternativa. Sua combustão no motor não libera gás carbônico para a atmosfera e produz bastante calor, como mostra a Reação 1:</p>
      <p>4NH<sub>3</sub> + 3O<sub>2</sub> → 2N<sub>2</sub> + 6H<sub>2</sub>O &nbsp;&nbsp;&nbsp; Δ<i>H</i><sub>1</sub> = –1268 kJ &nbsp; (Reação 1)</p>
      <p>Entretanto, a adoção da amônia encontra vários obstáculos técnicos, como o fato de sua combustão também produzir óxidos de nitrogênio altamente tóxicos. A produção do óxido de nitrogênio mais simples (NO) é mostrada na Reação 2:</p>
      <p>4NH<sub>3</sub> + 5O<sub>2</sub> → 4NO + 6H<sub>2</sub>O &nbsp;&nbsp;&nbsp; Δ<i>H</i><sub>2</sub> = –904 kJ &nbsp; (Reação 2)</p>
      <p>Por outro lado, o óxido de nitrogênio é produzido por qualquer motor de combustão interna a partir do nitrogênio atmosférico, como mostra a Reação 3:</p>
      <p>N<sub>2</sub> + O<sub>2</sub> → 2NO &nbsp;&nbsp;&nbsp; Δ<i>H</i><sub>3</sub> = ? &nbsp; (Reação 3)</p>
      <p>Utilizando os dados fornecidos, assinale a alternativa que apresenta corretamente o valor da variação da entalpia da Reação 3 (Δ<i>H</i><sub>3</sub>), em kJ.</p>`,
    alternativas: [
      { letra: 'A', texto: '182', explicacao: 'Correta! Reação 2 menos Reação 1 (invertida) dá 2N₂ + 2O₂ → 4NO, com ΔH = −904 + 1268 = +364 kJ. Dividindo por 2: N₂ + O₂ → 2NO, ΔH₃ = +182 kJ.' },
      { letra: 'B', texto: '364' },
      { letra: 'C', texto: '728' },
      { letra: 'D', texto: '1086' },
      { letra: 'E', texto: '2172' },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2025-026', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 26,
    disciplina: 'Química', conteudo: ['qui-2b4', 'qui-2b5'], subtopico: 'Função mista', dificuldade: 'media',
    enunciado: `<p>Muitas moléculas orgânicas apresentam mais de uma função orgânica em sua estrutura, além das cadeias hidrocarbônicas inerentes a elas. Quando isso acontece, diz-se que a molécula apresenta função mista.</p>
      <p>Considerando essas informações, qual das moléculas a seguir apresenta função mista?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Acetato de etila' },
      { letra: 'B', texto: 'Acetileno' },
      { letra: 'C', texto: 'Ácido cloroacético', explicacao: 'Correta! O ácido cloroacético (ClCH₂COOH) tem a carboxila (ácido carboxílico) e o cloro ligado a carbono (haleto orgânico): duas funções. Os demais têm uma só função (éster, hidrocarboneto, anidrido, haleto de acila).' },
      { letra: 'D', texto: 'Anidrido acético' },
      { letra: 'E', texto: 'Cloreto de acetila' },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2025-027', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 27,
    disciplina: 'Química', conteudo: ['qui-3b2', 'qui-3b3'], subtopico: 'Isômeros do C4H8', dificuldade: 'media',
    enunciado: `<p>A partir do craqueamento do petróleo, obtêm-se diversas frações que contêm misturas de hidrocarbonetos, as quais têm aplicações para diferentes finalidades, desde a produção de combustíveis até a de plásticos. Suponha que uma determinada fração desse processo resultou em uma mistura de hidrocarbonetos contendo apenas compostos pertencentes à classe de alcenos e que todos possuem a mesma fórmula molecular C<sub>4</sub>H<sub>8</sub>.</p>
      <p>Considerando a fórmula molecular indicada, quantos isômeros estão presentes nessa mistura de alcenos?</p>`,
    alternativas: [
      { letra: 'A', texto: '12' },
      { letra: 'B', texto: '8' },
      { letra: 'C', texto: '6' },
      { letra: 'D', texto: '4', explicacao: 'Correta! Os alcenos C₄H₈ são: but-1-eno, cis-but-2-eno, trans-but-2-eno e metilpropeno — 4 isômeros (3 planos, um deles com isomeria geométrica).' },
      { letra: 'E', texto: '2' },
    ],
    gabarito: 'D',
  },

  // ===================== BIOLOGIA =====================
  {
    id: 'ufpr-2025-028', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 28,
    disciplina: 'Biologia', conteudo: 'bio-3b6', subtopico: 'Insulina e resistência insulínica', dificuldade: 'media',
    enunciado: `<p>As doenças crônicas não transmissíveis (DCNT) atualmente constituem os principais problemas de saúde pública no Brasil e no mundo, causando grande número de mortes prematuras e perda de qualidade de vida. Muitas dessas doenças estão associadas a desequilíbrios metabólicos, detectáveis em exames laboratoriais. A tabela a seguir apresenta os valores para variáveis metabólicas mensuradas a partir da coleta de sangue de 3 indivíduos adultos fictícios:</p>
      <table class="tabela-prova">
        <tr><td>Variáveis</td><td>Indivíduo 1</td><td>Indivíduo 2</td><td>Indivíduo 3</td></tr>
        <tr><td>Glicose em jejum (mg/dL)</td><td>80</td><td>150</td><td>150</td></tr>
        <tr><td>Insulina em jejum (µU/mL)</td><td>10</td><td>0,4</td><td>40</td></tr>
        <tr><td>HOMA-IR</td><td>1,9</td><td>0,1</td><td>13,5</td></tr>
      </table>
      <p><small>HOMA-IR: modelo matemático de avaliação da homeostase para resistência à insulina.</small></p>
      <p><b>Referências para análise dos resultados:</b><br>
      Glicose normal: 70 a 99 mg/dL<br>
      Insulina normal: 2 a 13 µU/mL<br>
      HOMA-IR &gt; 2,7 indica resistência à ação da insulina</p>
      <p>Sobre a relação entre as variáveis apresentadas e as possíveis consequências para a saúde dos indivíduos apresentados na tabela, é correto afirmar:</p>`,
    alternativas: [
      { letra: 'A', texto: 'O indivíduo 3 apresenta valores elevados de glicose e insulina devido à resistência insulínica, condição em que as células não respondem adequadamente a esse hormônio.', explicacao: 'Correta! O indivíduo 3 tem glicose (150) e insulina (40) acima do normal e HOMA-IR 13,5 (> 2,7): o pâncreas produz muita insulina, mas as células não respondem a ela, e a glicemia continua alta.' },
      { letra: 'B', texto: 'No indivíduo 2, o valor de insulina abaixo do normal se deve ao valor de glicose alto, já que as duas variáveis são inversamente correlacionadas em indivíduos saudáveis.' },
      { letra: 'C', texto: 'O valor de insulina obtido no indivíduo 3 indica a necessidade de tratamento com esse lipídio para normalizar a quantidade de glicose em jejum.' },
      { letra: 'D', texto: 'Os valores das variáveis obtidos no indivíduo 1 sugerem que ele apresenta diabetes, doença causada por excesso de lipídios no sangue.' },
      { letra: 'E', texto: 'O valor de insulina abaixo do normal no indivíduo 2 se deve à entrada da insulina nas células, fato que ocorre quando a quantidade de glicose está alta.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2025-029', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 29,
    disciplina: 'Biologia', conteudo: 'bio-1a5', subtopico: 'Seleção natural e especiação', dificuldade: 'media',
    enunciado: `<p>Em uma vasta região, há uma população de insetos com três variações de cor em suas carapaças: verde, marrom e amarelo. Essas cores conferem diferentes vantagens em três tipos distintos de ambientes: na floresta densa, os insetos verdes têm melhor camuflagem; nos prados abertos, os insetos marrons se misturam melhor com a vegetação seca; nas áreas de solo arenoso, os insetos amarelos são menos visíveis para os predadores. Com o tempo, um evento geológico separa essas regiões, criando barreiras físicas entre a floresta, os prados e as áreas arenosas.</p>
      <p>Com base no texto, assinale a alternativa correta em relação a possíveis consequências da ação da seleção natural.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A seleção natural disruptiva altera o código genético dos insetos verdes isolados em áreas de solo arenoso, fazendo com que se tornem amarelos.' },
      { letra: 'B', texto: 'A seleção natural estabilizadora promove irradiação adaptativa ao longo das gerações ao favorecer a sobrevivência de insetos marrons nas áreas de prados abertos.' },
      { letra: 'C', texto: 'A seleção natural direcional, atuando em cada tipo de ambiente, pode levar à diferenciação entre os insetos ao longo das gerações e à especiação alopátrica.', explicacao: 'Correta! Em cada ambiente isolado, a seleção favorece uma cor (direcional). Com a barreira geográfica impedindo o fluxo gênico, as populações se diferenciam e podem originar novas espécies: especiação alopátrica.' },
      { letra: 'D', texto: 'A seleção natural estabilizadora induz os insetos a sofrerem mutações nos genes determinantes da cor da carapaça, podendo ocorrer especiação simpátrica.' },
      { letra: 'E', texto: 'A seleção natural direcional, atuando nos três tipos de ambiente, promove alterações moleculares aleatórias na coloração dos insetos, podendo gerar novas adaptações.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2025-030', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 30,
    disciplina: 'Biologia', conteudo: 'bio-3a3', subtopico: 'Seiva bruta e elaborada', dificuldade: 'facil',
    enunciado: `<p>Sobre a função e o transporte da seiva nas plantas vasculares, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A seiva bruta transporta os nutrientes inorgânicos da fotossíntese, como carboidratos e aminoácidos, das folhas para outras partes da planta.' },
      { letra: 'B', texto: 'O xilema é responsável pelo transporte da seiva elaborada, que é composta principalmente de água e carboidratos.' },
      { letra: 'C', texto: 'A seiva bruta contém açúcares e nutrientes orgânicos, enquanto a seiva elaborada contém principalmente água e sais minerais.' },
      { letra: 'D', texto: 'A seiva elaborada é produzida pelas folhas e transporta nutrientes orgânicos, como carboidratos, para diferentes partes da planta por meio do floema.', explicacao: 'Correta! A seiva elaborada (orgânica) vem da fotossíntese nas folhas e é distribuída pelo floema; a seiva bruta (água e sais minerais) sobe das raízes pelo xilema.' },
      { letra: 'E', texto: 'A seiva elaborada se movimenta das raízes em direção às folhas, e a seiva bruta pode movimentar-se em várias direções, dependendo da necessidade da planta.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2025-031', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 31,
    disciplina: 'Biologia', conteudo: 'bio-4b6', subtopico: 'DNA recombinante', dificuldade: 'media',
    enunciado: `<p>A clonagem molecular e a tecnologia do DNA recombinante permitiram que pacientes com diabetes passassem a usar a insulina humana recombinada produzida por bactérias, que possui a vantagem de, em geral, não provocar reações imunológicas nos pacientes. Sobre esses processos, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A transcrição das moléculas de DNA recombinantes por meio da ação da enzima ligase gera muitas cópias dessas moléculas, e esse processo é necessário para otimizar a produção de insulina.' },
      { letra: 'B', texto: 'A insulina é produzida pelas bactérias a partir da expressão de moléculas de DNA recombinantes, que possuem, além do genoma bacteriano, o gene da insulina humano.', explicacao: 'Correta! O gene humano da insulina é inserido no DNA bacteriano (em geral num plasmídeo); a bactéria transcreve e traduz esse gene e produz insulina idêntica à humana.' },
      { letra: 'C', texto: 'A tecnologia do DNA recombinante consiste na inserção do gene bacteriano de interesse no genoma humano; a partir disso, a insulina passa a ser produzida pelo paciente.' },
      { letra: 'D', texto: 'A insulina recombinada combina insulina bacteriana e humana e, em geral, não provoca reações imunológicas porque a imunidade já foi adquirida por meio de vacina.' },
      { letra: 'E', texto: 'A combinação de aminoácidos humanos e bacterianos gera as moléculas de DNA recombinantes que serão inseridas em um vetor que irá produzir a insulina.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2025-032', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 32,
    disciplina: 'Biologia', conteudo: 'bio-4b1', subtopico: 'Níveis tróficos', dificuldade: 'facil',
    enunciado: `<p>Em um dado ecossistema, os seguintes organismos constituem uma teia alimentar simplificada: fungos, coelhos, capim, águias e cobras.</p>
      <p>Com base nessa teia alimentar, assinale a alternativa que descreve corretamente a sequência de níveis tróficos, do nível mais baixo ao mais alto, e os organismos correspondentes a cada nível trófico.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Coelhos: produtores → cobras: consumidores primários → águias: consumidores secundários → fungos: consumidores terciários → capim: decompositores.' },
      { letra: 'B', texto: 'Capim: produtores → fungos: consumidores primários → coelhos: consumidores secundários → cobras: consumidores terciários → águias: consumidores quaternários.' },
      { letra: 'C', texto: 'Fungos: produtores → coelhos: consumidores primários → capim: consumidores secundários → águias: consumidores terciários → cobras: consumidores quaternários.' },
      { letra: 'D', texto: 'Capim: produtores → coelhos: consumidores secundários → águias: consumidores terciários → cobras: consumidores quaternários → fungos: decompositores.' },
      { letra: 'E', texto: 'Capim: produtores → coelhos: consumidores primários → cobras: consumidores secundários → águias: consumidores terciários → fungos: decompositores.', explicacao: 'Correta! O capim faz fotossíntese (produtor), o coelho herbívoro é consumidor primário, a cobra que come o coelho é secundária, a águia que come a cobra é terciária e os fungos decompõem a matéria orgânica.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2025-033', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 33,
    disciplina: 'Biologia', conteudo: 'bio-3b5', subtopico: 'Excretas nitrogenadas', dificuldade: 'media',
    enunciado: `<p>A respeito dos tipos de excretas e sistemas excretores nos animais, é correto afirmar:</p>`,
    alternativas: [
      { letra: 'A', texto: 'Anfíbios adultos excretam principalmente amônia como uma estratégia para evitar a desidratação.' },
      { letra: 'B', texto: 'Os insetos excretam uma urina pouco concentrada produzida pelos metanefrídios.' },
      { letra: 'C', texto: 'Mamíferos terrestres convertem a ureia em amônia, substância menos tóxica e menos solúvel.' },
      { letra: 'D', texto: 'Os répteis, em geral, perdem pouca água na excreção, pois excretam o ácido úrico, altamente insolúvel.', explicacao: 'Correta! O ácido úrico é pouco tóxico e quase insolúvel em água, podendo ser eliminado como pasta com mínima perda de água — adaptação de répteis (e aves) ao ambiente terrestre.' },
      { letra: 'E', texto: 'A ureia, por ser a excreta menos tóxica, contribui para que embriões de aves se desenvolvam em ovos.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2025-034', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 34,
    disciplina: 'Biologia', conteudo: ['bio-1a3', 'bio-1a2'], subtopico: 'Replicação do DNA e enzimas', dificuldade: 'media',
    enunciado: `<p>Sobre as enzimas e a sua atuação na síntese de DNA, é correto afirmar:</p>`,
    alternativas: [
      { letra: 'A', texto: 'O funcionamento enzimático denominado modelo chave-fechadura permite que diversas enzimas atuem na síntese de DNA, otimizando os recursos celulares.' },
      { letra: 'B', texto: 'A DNA polimerase degrada o DNA para liberar os nucleotídeos utilizados na síntese de novas moléculas de DNA durante a replicação celular.' },
      { letra: 'C', texto: 'Os substratos da DNA polimerase são os desoxirribonucleotídeos livres, os quais são incorporados a uma fita em formação.', explicacao: 'Correta! A DNA polimerase usa desoxirribonucleotídeos livres como substrato e os une à fita nova, seguindo a fita molde (pareamento A–T e C–G).' },
      { letra: 'D', texto: 'As enzimas que sintetizam DNA possuem os centros ativos específicos para os diferentes tipos de aminoácidos que formarão a molécula.' },
      { letra: 'E', texto: 'A síntese de DNA ocorre pela ação de enzimas que, em um processo semiconservativo, convertem o RNA mensageiro em uma molécula de DNA.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2025-035', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 35,
    disciplina: 'Biologia', conteudo: ['bio-2b8', 'bio-3b8'], subtopico: 'Impulso nervoso e junção neuromuscular', dificuldade: 'media',
    enunciado: `<p>Imagine que uma pessoa está na academia e precisa flexionar os braços para realizar um determinado movimento. Ela realizará um movimento voluntário, que depende da propagação de estímulos por neurônios motores até células musculares esqueléticas.</p>
      <p>Considerando as informações fornecidas, partindo do estímulo de um neurônio motor em repouso, assinale a alternativa que apresenta a ordem e os eventos corretos responsáveis por efetivar esse movimento.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Despolarização: saída de K<sup>+</sup> no neurônio motor → Repolarização: entrada de Na<sup>+</sup> → Propagação do potencial de ação → Extremidade do axônio → Liberação de acetilcolina → Ligação de acetilcolina nos receptores de membrana das células musculares esqueléticas.' },
      { letra: 'B', texto: 'Repolarização: saída de K<sup>+</sup> no neurônio motor → Despolarização: entrada de Na<sup>+</sup> → Propagação do potencial de ação → Extremidade dos dendritos → Liberação de acetilcolina → Ligação de acetilcolina nos receptores de membrana das células musculares esqueléticas.' },
      { letra: 'C', texto: 'Despolarização: entrada de Na<sup>+</sup> no neurônio motor → Repolarização: saída de K<sup>+</sup> → Propagação do potencial de ação → Extremidade do axônio → Sinapse elétrica → Estímulo elétrico às células musculares esqueléticas.' },
      { letra: 'D', texto: 'Repolarização: entrada de Na<sup>+</sup> no neurônio motor → Despolarização: saída de K<sup>+</sup> → Propagação do potencial de ação → Extremidade dos dendritos → Sinapse elétrica → Estímulo elétrico às células musculares esqueléticas.' },
      { letra: 'E', texto: 'Despolarização: entrada de Na<sup>+</sup> no neurônio motor → Repolarização: saída de K<sup>+</sup> → Propagação do potencial de ação → Extremidade do axônio → Liberação de acetilcolina → Ligação de acetilcolina nos receptores de membrana das células musculares esqueléticas.', explicacao: 'Correta! O potencial de ação começa com a entrada de Na⁺ (despolarização), seguida da saída de K⁺ (repolarização); o impulso percorre o axônio até a terminação, que libera acetilcolina na junção neuromuscular (sinapse química), e ela se liga aos receptores da fibra muscular.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2025-036', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 36,
    disciplina: 'Biologia', conteudo: 'bio-1b4', subtopico: 'Interação gênica', dificuldade: 'media',
    enunciado: `<p>Em uma determinada espécie de plantas, a altura é associada a dois genes com segregação independente, cada um com dois alelos. O gene A tem os alelos A (dominante) e a (recessivo), enquanto o gene B tem os alelos B (dominante) e b (recessivo). A altura da planta é associada à interação entre esses dois genes, de acordo com as seguintes regras:</p>
      <p>Genótipos AABB e AaBB resultam em planta alta.<br>
      Genótipos AABb e AaBb resultam em planta de altura mediana.<br>
      Genótipos AAbb, Aabb, aaBB ou aaBb resultam em planta baixa.<br>
      Genótipo aabb resulta em planta muito baixa.</p>
      <p>Considerando as informações apresentadas, assinale a alternativa que informa corretamente qual é a probabilidade de se obter uma planta de altura mediana na descendência do cruzamento de duas plantas heterozigotas para ambos os genes (AaBb x AaBb).</p>`,
    alternativas: [
      { letra: 'A', texto: '1/2' },
      { letra: 'B', texto: '1/4' },
      { letra: 'C', texto: '3/4' },
      { letra: 'D', texto: '6/16', explicacao: 'Correta! Altura mediana = A_ e Bb. P(A_) = 3/4 (AA ou Aa) e P(Bb) = 1/2. Como os genes segregam independentemente: 3/4 · 1/2 = 3/8 = 6/16.' },
      { letra: 'E', texto: '9/16' },
    ],
    gabarito: 'D',
  },

  // ===================== GEOGRAFIA =====================
  {
    id: 'ufpr-2025-037', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 37,
    disciplina: 'Geografia', conteudo: ['geo-4u5', 'geo-2u4'], subtopico: 'Fases do capitalismo', dificuldade: 'media',
    enunciado: `<p>“O capitalismo é um sistema econômico que, desde sua origem, foi se expandindo econômica e territorialmente: primeiro foi o colonialismo, depois o imperialismo e, nos dias atuais, a globalização. [...] Considerando seu processo de desenvolvimento, costuma-se dividir o capitalismo em quatro etapas: comercial, industrial, financeira e informacional.”</p>
      <p><small>Moreira, J. C.; Sene, E. <i>Geografia</i>: ensino médio. São Paulo: Scipione, 2018. p. 278. (Projeto Múltiplo, Parte 2)</small></p>
      <p>Com base no excerto apresentado e nos conhecimentos sobre o assunto, assinale a alternativa correta a respeito dos processos de expansão e desenvolvimento do capitalismo mencionados.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A fase informacional do capitalismo se caracteriza pela terceira Revolução Industrial, pela integração do comércio mundial e pela industrialização de países em desenvolvimento.', explicacao: 'Correta! O capitalismo informacional (pós-1970) se apoia na Terceira Revolução Industrial (informática, telecomunicações), na globalização do comércio e na dispersão da indústria para países em desenvolvimento.' },
      { letra: 'B', texto: 'O capitalismo comercial se iniciou no século XIV, quando as potências europeias instituíram a escravidão na África.' },
      { letra: 'C', texto: 'A fase do capitalismo industrial começou no final do século XIX, quando surgiu a indústria automobilística.' },
      { letra: 'D', texto: 'O capitalismo financeiro se iniciou com a instituição do Banco Mundial e do Fundo Monetário Internacional, responsáveis por regular os fluxos mundiais de capital.' },
      { letra: 'E', texto: 'A primeira fase da globalização começou quando as nações europeias ocuparam territórios na África, na Ásia e nas Américas, integrando os continentes em um único mercado.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2025-038', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 38,
    disciplina: 'Geografia', conteudo: 'geo-c3', subtopico: 'Economia planificada e URSS', dificuldade: 'media',
    enunciado: `<p>Sobre o sistema de economia planificada e sua aplicação na antiga União Soviética, é correto afirmar:</p>`,
    alternativas: [
      { letra: 'A', texto: 'O planejamento estatal não previu o impacto da urbanização no aumento da demanda por alimentos, e a agricultura apresentava baixa produtividade porque a maior parte do território da URSS era coberta por tundra e deserto.' },
      { letra: 'B', texto: 'Os Planos Quinquenais soviéticos priorizaram a indústria de alimentos e de outros bens de consumo corrente, a fim de atender às necessidades populares.' },
      { letra: 'C', texto: 'Os Planos Quinquenais restringiram a atividade madeireira na Sibéria, motivo pelo qual a Floresta de Taiga se manteve como a segunda maior floresta do mundo.' },
      { letra: 'D', texto: 'A Perestroika, implementada pela URSS nos anos 1980, é um conjunto de reformas econômicas que substituiu mecanismos de planejamento estatal por mecanismos de economia de mercado.', explicacao: 'Correta! A Perestroika (reestruturação) de Gorbachev, a partir de 1985, introduziu elementos de mercado (autonomia de empresas, iniciativa privada limitada) no lugar do planejamento centralizado.' },
      { letra: 'E', texto: 'O sistema planificado se mostrou superior em termos de inovação tecnológica, como visto com a vitória da URSS na corrida espacial contra os EUA.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2025-040', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 40,
    disciplina: 'Geografia', conteudo: 'geo-4u3', subtopico: 'Fontes renováveis', dificuldade: 'facil',
    enunciado: `<p>Um dos desafios tecnológicos do século XXI é implantar uma matriz energética na qual as fontes de energia renováveis sejam predominantes. Sobre as fontes de energia renováveis, é correto afirmar:</p>`,
    alternativas: [
      { letra: 'A', texto: 'As energias renováveis já respondem por mais da metade da produção energética na China, superando o Brasil em termos de participação dessas fontes na produção nacional.' },
      { letra: 'B', texto: 'O petróleo vem sendo explorado nos EUA desde o século XIX, e o esgotamento de suas reservas fez desse país um dos maiores consumidores mundiais de energia gerada por fontes não renováveis.' },
      { letra: 'C', texto: 'O etanol é uma fonte de energia renovável, mas o uso de terras agrícolas para a produção de biocombustível pode contribuir para o desmatamento de áreas naturais.', explicacao: 'Correta! O etanol vem da biomassa (cana, milho) e é renovável, mas a expansão das lavouras para biocombustíveis pode empurrar a fronteira agrícola sobre áreas de vegetação nativa.' },
      { letra: 'D', texto: 'A participação dos combustíveis fósseis no consumo mundial de energia nos últimos 20 anos recuou fortemente devido ao aumento da produção de energia eólica e solar.' },
      { letra: 'E', texto: 'O elevado potencial brasileiro para a produção de energia hidrelétrica e geotérmica permitiu atender ao aumento da demanda nacional por eletricidade sem recorrer a fontes não renováveis.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2025-041', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 41,
    disciplina: 'Geografia', conteudo: 'geo-3u5', subtopico: 'Urbanização mundial', dificuldade: 'media',
    enunciado: `<p>Sobre o desenvolvimento e as características do processo de urbanização, é correto afirmar:</p>`,
    alternativas: [
      { letra: 'A', texto: 'Os países com grandes áreas de vegetação natural apresentam percentuais mais elevados de população rural, o que implica um ritmo mais lento de urbanização.' },
      { letra: 'B', texto: 'Na União Europeia, a urbanização desacelerou a partir da década de 1970, quando a política agrícola comum foi implementada com o objetivo de reter a população no campo.' },
      { letra: 'C', texto: 'A urbanização se define, nos países desenvolvidos, por metrópoles densamente povoadas, enquanto países emergentes têm cidades com população mais dispersa.' },
      { letra: 'D', texto: 'Os países onde a taxa de urbanização é inferior a 50% se concentram na África subsaariana e no sul da Ásia, regiões essas com os maiores números de pessoas extremamente pobres no mundo.', explicacao: 'Correta! As regiões ainda predominantemente rurais (taxa de urbanização abaixo de 50%) estão sobretudo na África Subsaariana e no Sul da Ásia, que concentram a maior parte da pobreza extrema mundial.' },
      { letra: 'E', texto: 'Projeções da ONU indicam que as tecnologias de trabalho remoto reduzirão o êxodo rural, freando o processo de urbanização por permitirem que a população more no campo e trabalhe em empregos urbanos.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2025-042', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 42,
    disciplina: 'Geografia', conteudo: 'geo-2u2', subtopico: 'Revolução Verde', dificuldade: 'media',
    enunciado: `<p>De 1961 a 2014, a produção mundial de cereais cresceu de 1,4 tonelada por hectare para 4 toneladas por hectare. Sobre as causas e consequências desse processo, é correto afirmar:</p>`,
    alternativas: [
      { letra: 'A', texto: 'A revolução tecnológica já atingiu seu potencial de aumento da produção, de modo que, para continuar enfrentando a explosão demográfica, é preciso um novo modelo produtivo.' },
      { letra: 'B', texto: 'O aumento de produção se deu por meio da ocupação de grandes áreas de florestas, sendo, portanto, ambientalmente insustentável.' },
      { letra: 'C', texto: 'Cereais são plantas adaptadas a regiões de clima temperado, de modo que o aumento de produtividade se concentrou no hemisfério Norte.' },
      { letra: 'D', texto: 'O uso intensivo de maquinário, fertilizantes químicos e pesticidas eleva os custos de produção agrícola, de modo que o aumento da produção se deu pelos investimentos do agronegócio.' },
      { letra: 'E', texto: 'O crescimento da produção de cereais no mundo foi resultado das tecnologias da revolução verde e provocou a diminuição da desnutrição em escala mundial.', explicacao: 'Correta! O aumento de produtividade por hectare (não de área) veio da Revolução Verde — sementes melhoradas, fertilizantes, defensivos, irrigação e mecanização — e ampliou a oferta de alimentos, reduzindo a proporção de desnutridos no mundo.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2025-043', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 43,
    disciplina: 'Geografia', conteudo: 'geo-1u6', subtopico: 'Mortalidade infantil e qualidade de vida', dificuldade: 'media',
    enunciado: `<p>“No Egito, em 1960, 30% de todas as crianças morriam antes do quinto aniversário. O delta do rio [Nilo] era uma miséria para as crianças, com todo tipo de doenças graves e subnutrição. Então […] os egípcios construíram a represa de Aswan, levaram eletricidade às casas das pessoas, melhoraram a educação, construíram um sistema de assistência médica primária, erradicaram a malária e tornaram a água potável. Hoje, a taxa de mortalidade infantil do Egito, 2,3%, é menor do que era na França ou no Reino Unido em 1960.”</p>
      <p><small>Rosling, H. <i>Factfulness</i>: o hábito libertador de só ter opiniões baseadas em fatos. 2. ed. Rio de Janeiro; São Paulo: Record, 2019. p. 102.</small></p>
      <p>Sobre os fatores que afetam as mudanças expressas nos indicadores de qualidade de vida, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O Egito exemplifica um processo mundial de melhora das condições de vida causada pela combinação de crescimento econômico com progresso tecnológico.', explicacao: 'Correta! O texto mostra que investimentos em infraestrutura (represa, eletricidade, água potável), educação e saúde — fruto de crescimento econômico e de tecnologia — derrubaram a mortalidade infantil, tendência observada em escala mundial.' },
      { letra: 'B', texto: 'A redução da mortalidade infantil é um avanço social que impôs o desafio de enfrentar o aumento das taxas de crescimento demográfico em países muçulmanos.' },
      { letra: 'C', texto: 'A melhora das condições de saúde foi mais rápida na África do que na Ásia e América Latina devido às campanhas de vacinação contra a malária, doença que era epidêmica no continente africano.' },
      { letra: 'D', texto: 'O salto de qualidade de vida descrito ocorreu nos países subdesenvolvidos exportadores de petróleo, como o Egito.' },
      { letra: 'E', texto: 'A comparação entre os países citados mostra que as desigualdades internacionais aumentaram, pois os indicadores de saúde dos países ricos melhoram mais rapidamente.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2025-044', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 44,
    disciplina: 'Geografia', conteudo: 'geo-3u5', subtopico: 'Rede urbana brasileira', dificuldade: 'media',
    enunciado: `<p>Um tema importante da Geografia Urbana são as relações funcionais e hierárquicas dentro da rede urbana, visto que as atividades de comércio e serviços criam fluxos de pessoas entre cidades. Sobre essas relações e as classificações das cidades dentro da rede urbana brasileira, é correto afirmar:</p>`,
    alternativas: [
      { letra: 'A', texto: 'As capitais dos estados da Região Norte não alcançam o nível de metrópoles devido às baixas taxas de urbanização regionais.' },
      { letra: 'B', texto: 'São Luís do Maranhão é considerada uma cidade regional porque exerce influência em seu estado sem chegar a ser uma metrópole.' },
      { letra: 'C', texto: 'São Paulo e Rio de Janeiro são as duas metrópoles com maiores áreas de influência dentro da rede urbana brasileira.', explicacao: 'Correta! Na hierarquia urbana do IBGE (REGIC), São Paulo é a Grande Metrópole Nacional e Rio de Janeiro (com Brasília) é Metrópole Nacional — as cidades com as maiores áreas de influência do país.' },
      { letra: 'D', texto: 'Corumbá ainda não atingiu o nível de metrópole regional devido ao papel propulsor da agricultura na economia do Centro-Oeste, que retém a população no campo.' },
      { letra: 'E', texto: 'Rio Branco, capital do Acre, é classificada como metrópole internacional porque sua posição geográfica lhe permite exercer influência sobre cidades da Bolívia.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2025-045', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 45,
    disciplina: 'Geografia', conteudo: ['geo-2u4', 'geo-c2'], subtopico: 'Desconcentração industrial', dificuldade: 'media',
    enunciado: `<p>Assinale a alternativa que indica corretamente uma transformação regional ocorrida no Brasil após 1970.</p>`,
    alternativas: [
      { letra: 'A', texto: 'As políticas públicas aplicadas pela Superintendência do Desenvolvimento do Nordeste (Sudene) fizeram com que a participação nordestina no PIB nacional dobrasse no período considerado.' },
      { letra: 'B', texto: 'A participação do estado de São Paulo no PIB industrial do país diminuiu devido ao crescimento mais rápido da indústria em outros estados.', explicacao: 'Correta! A partir dos anos 1970 houve desconcentração industrial: incentivos fiscais, mão de obra mais barata e deseconomias de aglomeração levaram indústrias para outros estados, e a fatia paulista no PIB industrial caiu (embora SP siga líder).' },
      { letra: 'C', texto: 'A Grande Região Centro-Oeste manteve seu nível de participação no PIB nacional em um patamar baixo, pois a agricultura é uma atividade que tende a perder importância na economia moderna.' },
      { letra: 'D', texto: 'O crescimento econômico da Região Norte foi mais lento do que a média nacional, pois as legislações ambientais impuseram restrições crescentes à exploração dos recursos naturais da Amazônia.' },
      { letra: 'E', texto: 'A construção de Brasília cumpriu o objetivo de reduzir a concentração populacional nos estados litorâneos, pois induziu a migração de população para os estados interiores.' },
    ],
    gabarito: 'B',
  },

  // ===================== HISTÓRIA =====================
  {
    id: 'ufpr-2025-046', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 46,
    disciplina: 'História', conteudo: 'his-1a7', subtopico: 'Expansão islâmica', dificuldade: 'media',
    enunciado: `<p>Com a adoção do Islã, religião propagada pelo profeta Maomé, os árabes iniciaram uma grande sequência de conquistas territoriais que foram sedimentadas com a formação dos califados omíada (a partir de 661 d.C.) e abássida (a partir de 750 d.C.). Alguns fatores fizeram com que essa expansão e sua subsequente manutenção fossem facilitadas, entre eles:</p>`,
    alternativas: [
      { letra: 'A', texto: 'os laços diplomáticos estabelecidos com as regiões do norte da Europa cristã, especialmente o tratado entre o califado abássida e o reino franco de Carlos Martel.' },
      { letra: 'B', texto: 'a permissão de que povos conquistados mantivessem suas religiões mediante o pagamento da <i>jizia</i>, imposto cobrado de súditos não muçulmanos.', explicacao: 'Correta! Os árabes toleravam cristãos e judeus ("povos do Livro") nos territórios conquistados, desde que pagassem a jizia; essa tolerância reduzia resistências e ainda gerava receita para os califados.' },
      { letra: 'C', texto: 'o fundamentalismo religioso dos árabes, que eram movidos pelo fervor da <i>jihad</i>, termo que pode ser traduzido como “guerra santa”.' },
      { letra: 'D', texto: 'a realocação da capital dos califados para Constantinopla, cidade bizantina conquistada pelas forças islâmicas e localizada entre a Ásia e a Europa.' },
      { letra: 'E', texto: 'a conversão voluntária de judeus, especialmente no norte da África e na península Ibérica, que ficaram conhecidos como moçárabes.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2025-047', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 47,
    disciplina: 'História', conteudo: 'his-1a6', subtopico: 'Império Romano', dificuldade: 'media',
    enunciado: `<p>Leia o excerto a seguir:</p>
      <p><b>O Império integrava suas populações?</b></p>
      <p>O Império, embora fundado nas cidades, abriu suas fronteiras internas e permitiu uma circulação mais intensa de pessoas, de credos, de objetos, de influências culturais […] O Império, contudo, nunca foi um todo homogêneo. Era possível ser romano de várias maneiras em toda a sua extensão territorial. Isso valia para a religião, para aspectos da cultura material — como habitações, vestuários, modos de enterramento —, ou para a língua do dia a dia.</p>
      <p><small>Guarinello, N. L. <i>História Antiga</i>. São Paulo: Editora Contexto, 2016. p. 158. Adaptado.</small></p>
      <p>O trecho aborda a pluralidade do contexto social e político do Império Romano. Com base no texto e nos conhecimentos de História Antiga, assinale a alternativa que apresenta duas características responsáveis por essa pluralidade identitária.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O cristianismo e a implementação do parlamento romano.' },
      { letra: 'B', texto: 'A urbanização e a política de Pão e Circo.' },
      { letra: 'C', texto: 'A invenção dos aquedutos e a proibição da escravidão.' },
      { letra: 'D', texto: 'A construção de estradas e a universalização da cidadania romana.', explicacao: 'Correta! As estradas permitiram a circulação de pessoas, mercadorias e ideias pelo Império, e a extensão da cidadania a todos os homens livres (Édito de Caracala, 212 d.C.) tornou "romanos" povos de culturas muito diferentes.' },
      { letra: 'E', texto: 'A educação filosófica e o uso do grego como língua franca.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2025-048', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 48,
    disciplina: 'História', conteudo: 'his-2a2', subtopico: 'Renascimento', dificuldade: 'media',
    enunciado: `<p>Considere o excerto abaixo:</p>
      <p>A nossa compreensão do período que vai de Filipe, o Belo a Henrique IV ficaria muito facilitada se fossem suprimidos dos livros de História dois termos solidários e solidariamente inexatos: “Idade Média” e “Renascimento”. Com isso se abandonaria todo um conjunto de preconceitos. Ficar-se-ia, especialmente, livre da ideia de ter havido um corte brusco que veio separar uma época de luz de um período de trevas.</p>
      <p><small>Delumeau, J. <i>A Civilização do Renascimento</i>. Lisboa: Editora Estampa, 1994. p. 19. v. 1. Adaptado.</small></p>
      <p>No trecho, o historiador Jean Delumeau aponta que uma separação bem demarcada entre o período medieval e o período renascentista é fruto de análises historiográficas posteriores, e não necessariamente dos processos históricos ocorridos entre os séculos XIV e XVI. Com base no texto e nos conhecimentos sobre História Moderna, assinale a alternativa que apresenta corretamente um elemento de continuidade entre os períodos.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A organização política e econômica feudal, que se espalhou das regiões francesas para a península Itálica especialmente nos séculos XV e XVI.' },
      { letra: 'B', texto: 'A doutrina de Despotismo Esclarecido, que embasava a legitimidade dos governantes no Medievo e manteve-se firme nos séculos seguintes.' },
      { letra: 'C', texto: 'A religiosidade cristã, marcante nos séculos medievais e perceptível em diversas obras artísticas e textos do Renascimento no Ocidente.', explicacao: 'Correta! O Renascimento não rompeu com o cristianismo: temas religiosos dominam a arte renascentista (madonas, cenas bíblicas, Capela Sistina) e muitos humanistas eram cristãos, o que mostra continuidade com o mundo medieval.' },
      { letra: 'D', texto: 'O espírito cruzadístico, que moveu diversas campanhas militares desde o século XI e, no Renascimento, delimitou o movimento inquisitorial.' },
      { letra: 'E', texto: 'A ideia de antropocentrismo, que foi amplamente discutida nos mosteiros medievais e ganhou verniz cultural com os artistas do Renascimento.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2025-049', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 49,
    disciplina: 'História', conteudo: 'his-1b6', subtopico: 'Bandeirantes e memória', dificuldade: 'media',
    enunciado: `<p>Em julho de 2021, manifestantes incendiaram uma estátua do bandeirante Borba Gato, localizada na Zona Sul de São Paulo. A ação foi considerada vandalismo por alguns e um ato político por outros. A dissonância nessas posturas revela um embate público sobre a construção de imagens e memória da História do Brasil. Assinale a alternativa que explica corretamente esse embate entre a construção de imagens dos bandeirantes e a memória da História do Brasil.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Por serem portugueses de nascimento, bandeirantes como Borba Gato passaram a ser vistos de forma negativa durante o período da República Velha, uma vez que o novo governo buscava fomentar o nacionalismo por meio de personagens nativos da História do Brasil.' },
      { letra: 'B', texto: 'Tradicionalmente considerados heróis e forjados como símbolos de identidade nacional, os bandeirantes passaram a ser questionados pela historiografia recente por suas ações violentas e excludentes, como o assassinato, a caça e a tentativa de escravização de indígenas nativos.', explicacao: 'Correta! A memória oficial (sobretudo paulista, no início do século XX) fez dos bandeirantes heróis desbravadores; a historiografia recente destaca o apresamento, a escravização e o massacre de indígenas, o que explica a disputa em torno de seus monumentos.' },
      { letra: 'C', texto: 'Desprezados desde o início do século XX por movimentos culturais como o dos modernistas, os bandeirantes foram recuperados como fruto de orgulho nacional durante a ditadura militar, motivo pelo qual passaram a ser questionados novamente após a redemocratização.' },
      { letra: 'D', texto: 'Símbolos marcantes da identidade brasileira, os bandeirantes foram idolatrados por seu vasto conhecimento sobre o território, ao passo que, mais recentemente, passaram a ser questionados por não representarem o Brasil como um todo, dada sua vinculação exclusiva com São Paulo.' },
      { letra: 'E', texto: 'Embora muitos bandeirantes fossem violentos, motivo que sustenta certos questionamentos contemporâneos, a caça aos indígenas não era a prerrogativa das expedições, que são, hoje, louvadas pelo pioneirismo na catalogação de espécies de fauna e flora nativas no território brasileiro.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2025-050', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 50,
    disciplina: 'História', conteudo: 'his-2b6-2', subtopico: 'Lei de Terras (1850)', dificuldade: 'media',
    enunciado: `<p>Em 18 de setembro de 1850, o imperador D. Pedro II assinou a Lei 601, também conhecida como Lei de Terras. Esse é um marco legislativo importante na História do Brasil, pois representa:</p>`,
    alternativas: [
      { letra: 'A', texto: 'um passo rumo à abolição da escravidão, já que a alforria poderia ser comprada junto a uma parcela de terras devolutas.' },
      { letra: 'B', texto: 'o primeiro exemplo de reforma agrária bem-sucedida no país, com o rígido controle sobre a grilagem de terras.' },
      { letra: 'C', texto: 'um privilégio aos imigrantes italianos recém-chegados, com a distribuição de títulos de terra.' },
      { letra: 'D', texto: 'o rompimento com o latifúndio já estabelecido, dada a possibilidade da aquisição de pequenas propriedades.' },
      { letra: 'E', texto: 'a restrição da propriedade de terra e de sua aquisição em contexto de crescente trabalho livre.', explicacao: 'Correta! Aprovada no mesmo ano da Lei Eusébio de Queirós (fim do tráfico), a Lei de Terras determinou que terras públicas só seriam obtidas por compra, dificultando o acesso de libertos, imigrantes e pobres à terra e garantindo mão de obra para os latifúndios.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2025-051', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 51,
    disciplina: 'História', conteudo: 'his-3a3', subtopico: 'Revolução Mexicana e zapatismo', dificuldade: 'facil',
    enunciado: `<p>Assinale a alternativa que corresponde ao movimento mexicano inspirado pela oposição ao regime ditatorial de Porfírio Diaz (1876-1910) e que, desde então, luta por autonomia popular, justiça social e direito à terra.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Castrismo' },
      { letra: 'B', texto: 'Sandinismo' },
      { letra: 'C', texto: 'Peronismo' },
      { letra: 'D', texto: 'Bolivarianismo' },
      { letra: 'E', texto: 'Zapatismo', explicacao: 'Correta! O zapatismo nasce com Emiliano Zapata na Revolução Mexicana (1910), contra Porfírio Díaz, defendendo a terra para os camponeses ("Terra e Liberdade"); o nome foi retomado pelo EZLN em Chiapas, a partir de 1994.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2025-052', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 52,
    disciplina: 'História', conteudo: ['his-4a1', 'his-3a7'], subtopico: 'Declaração Balfour', dificuldade: 'media',
    enunciado: `<p>Leia o excerto a seguir:</p>
      <p>O governo de Sua Majestade encara favoravelmente o estabelecimento, na Palestina, de um Lar Nacional para o Povo Judeu e empregará todos os seus esforços no sentido de facilitar a realização desse objetivo, entendendo-se claramente que nada será feito que possa atentar contra os direitos civis e religiosos das coletividades não judaicas existentes na Palestina, nem contra os direitos e o estatuto político de que gozam os judeus em qualquer outro país.</p>
      <p><small>Disponível em: https://imagesonline.bl.uk/asset/2781. Adaptado.</small></p>
      <p>O texto apresentado foi retirado de um documento público conhecido como Declaração de Balfour, que consiste em uma carta escrita pelo secretário britânico dos Assuntos Estrangeiros, Arthur Balfour, para o líder da comunidade judaica no Reino Unido, Lionel Rothschild, em 1917. Considerada um indicativo importante para a formação de um Estado judeu no Oriente Médio, o contexto histórico e político da Declaração pode ser identificado como:</p>`,
    alternativas: [
      { letra: 'A', texto: 'de imperialismo britânico e de divisão do Império Otomano.', explicacao: 'Correta! Em 1917, em plena Primeira Guerra, o Reino Unido disputava o espólio do Império Otomano (acordo Sykes-Picot) e buscava influência na Palestina, que depois ficaria sob mandato britânico.' },
      { letra: 'B', texto: 'de busca por petróleo e pelo desmantelamento das lideranças dos partidos palestinos.' },
      { letra: 'C', texto: 'de atuação internacional da ONU e de contenção do avanço bolchevique.' },
      { letra: 'D', texto: 'de sionismo e de reparação histórica pelo Holocausto.' },
      { letra: 'E', texto: 'de nacionalismo árabe e de supressão do radicalismo islâmico.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2025-053', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 53,
    disciplina: 'História', conteudo: ['his-3a7', 'his-4a5'], subtopico: 'Colonialismo e descolonização da África', dificuldade: 'media',
    enunciado: `<p>Leia o excerto a seguir:</p>
      <p>[...] ninguém coloniza inocentemente, ninguém coloniza impunemente; uma nação colonizadora, uma civilização que justifica a colonização – portanto a força – já é uma civilização doente, uma civilização moralmente atingida [...]. Colonização: uma cabeça de ponte, em uma civilização, da barbárie que, a qualquer momento, pode levar à pura e simples negação da civilização.</p>
      <p><small>Césaire, A. <i>Discurso sobre o Colonialismo</i>. São Paulo: Veneta, 2020. p. 21. Adaptado.</small></p>
      <p>Esse texto, publicado originalmente por Aimé Césaire em 1950, denuncia as violências do colonialismo europeu e seus efeitos morais tanto para o mundo colonizado quanto para a Europa. A respeito do colonialismo europeu na África e seu legado para o continente no século XX, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'As classificações étnico-raciais e o estabelecimento de fronteiras arbitrárias por parte das metrópoles ajudam a explicar diversos conflitos civis em países africanos formados após o processo de descolonização.', explicacao: 'Correta! A partilha da África (Conferência de Berlim) traçou fronteiras sem respeitar etnias, e as metrópoles hierarquizaram grupos (como hutus e tutsis em Ruanda); após a independência, isso alimentou guerras civis e conflitos étnicos.' },
      { letra: 'B', texto: 'A captura e o tráfico de pessoas escravizadas, intensificados entre os séculos XIX e XX, ajudaram a criar um clima de violência que deu origem aos governos ditatoriais e guerras civis no continente africano.' },
      { letra: 'C', texto: 'A interdição para a construção de ferrovias e escolas, por parte das metrópoles, barrou o desenvolvimento econômico de diversos países africanos, ocasionando crises de fome após a descolonização.' },
      { letra: 'D', texto: 'A proibição de missões catequizadoras cristãs, condutoras de uma doutrina igualitária e universalista, abriu espaço para o surgimento de discriminações raciais e econômicas na formação de países africanos.' },
      { letra: 'E', texto: 'O recrutamento de soldados africanos durante a Segunda Guerra interrompeu a implementação da democracia na África por parte das metrópoles colonialistas, o que ocasionou o surgimento de governos autoritários e da violência interétnica.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2025-054', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 54,
    disciplina: 'História', conteudo: 'his-4b3', subtopico: 'Ditadura militar e Itaipu', dificuldade: 'media',
    enunciado: `<p>Em 17 de maio de 1974, por meio da representação de Ernesto Geisel e Alfredo Stroessner, foi criada a entidade Itaipu Binacional, que gerenciaria as obras da usina de Itaipu. A data representa o comprometimento com a intenção firmada em 1966 entre Brasil e Paraguai com a assinatura da “Ata do Iguaçu”, considerada uma demonstração da união entre as duas ditaduras. Com o desvio do Rio Paraná, houve a inundação de uma larga área para a viabilização da hidrelétrica, submergindo toda a região da barragem. Sobre o contexto envolvendo ditadura militar e a construção de Itaipu, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A construção da hidrelétrica de Itaipu foi motivada pela escassez energética, fruto da crise econômica que sucedeu o “milagre econômico”, possibilitando, por um lado, o abandono de modelos de energia nuclear e, por outro, a independência do petróleo venezuelano.' },
      { letra: 'B', texto: 'O projeto da usina hidrelétrica de Itaipu é um exemplo das várias demonstrações centenárias de união entre Paraguai e Brasil, países que tradicionalmente manifestaram um compromisso mútuo com as agendas um do outro e, durante as respectivas ditaduras militares, estreitaram ainda mais seus laços políticos e econômicos.' },
      { letra: 'C', texto: 'O desenvolvimentismo da ditadura envolveu debates entre diferentes setores da sociedade, polarizados entre aqueles que o viam como avanço moderno, representado na construção da hidrelétrica de Itaipu, e aqueles que o condenavam por violações a diferentes povos – no caso de Itaipu, o povo Avá-Guarani.', explicacao: 'Correta! As grandes obras da ditadura (Itaipu, Transamazônica) eram exaltadas como modernização, mas também criticadas pelos impactos sociais: o alagamento expulsou comunidades, entre elas os Avá-Guarani, de suas terras.' },
      { letra: 'D', texto: 'A ditadura militar brasileira coexistiu com outras ditaduras no Cone Sul, o que fez com que variados projetos de expansão ameaçassem a soberania nacional do Brasil, sendo a construção de Itaipu uma demonstração contrária a essa tendência e, portanto, um motivo de comemoração binacional.' },
      { letra: 'E', texto: 'Os países sul-americanos sob ditadura militar eram apoiados pelos Estados Unidos, o que fazia da existência de projetos nacionalistas de soberania energética uma ameaça aos interesses norte-americanos, tornando Itaipu, portanto, uma exceção dentro do contexto ditatorial brasileiro.' },
    ],
    gabarito: 'C',
  },

  // ===================== LÍNGUA PORTUGUESA =====================
  {
    id: 'ufpr-2025-055', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 55,
    disciplina: 'Português', conteudo: 'por-1a5', subtopico: 'Sinonímia contextual', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2025_POR_55,
    enunciado: `<p>Assinale a alternativa que indica expressões do texto com significados convergentes.</p>`,
    alternativas: [
      { letra: 'A', texto: '“embranquecimento” e “construção do estado”' },
      { letra: 'B', texto: '“estereótipo” e “representatividade na política”' },
      { letra: 'C', texto: '“senso comum” e “imaginário popular”', explicacao: 'Correta! As duas expressões designam a mesma ideia no texto: a crença difundida de que o Rio Grande do Sul é um estado branco ("Essa percepção faz parte de um senso comum..." / "O imaginário popular é este...").' },
      { letra: 'D', texto: '“racismo ambiental” e “reconstrução justa e humana”' },
      { letra: 'E', texto: '“classe operária” e “quilombolas e indígenas”' },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2025-056', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 56,
    disciplina: 'Português', conteudo: 'por-3a6', subtopico: 'Tese do texto', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2025_POR_55,
    enunciado: `<p>Assinale a alternativa que sintetiza a tese central do texto.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A contribuição da colonização europeia no Rio Grande do Sul é incontestável.' },
      { letra: 'B', texto: 'Pesquisas mostram que os negros são mais pobres no Rio Grande do Sul.' },
      { letra: 'C', texto: 'As enchentes no Rio Grande do Sul foram desastrosas à região de Porto Alegre.' },
      { letra: 'D', texto: 'A falsa crença de que o Rio Grande do Sul é branco é prejudicial ao estado.', explicacao: 'Correta! O texto defende que o apagamento da população negra (a ideia de um RS "branco") gera invisibilidade e desigualdade, agravadas no racismo ambiental das enchentes; os dados e a tragédia são argumentos a serviço dessa tese.' },
      { letra: 'E', texto: 'As comunidades das áreas de risco devem ter acesso a serviços básicos.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2025-057', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 57,
    disciplina: 'Português', conteudo: 'por-2a5', subtopico: 'Compreensão de texto', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2025_POR_55,
    enunciado: `<p>Considere as seguintes afirmativas:</p>
      <p>1. As condições sociais da periferia de Porto Alegre foram a principal causa das enchentes.<br>
      2. A população negra do Rio Grande do Sul forma a maior parte da população do estado.<br>
      3. A reconstrução humana e justa do Rio Grande do Sul poderá combater o racismo ambiental.<br>
      4. O autor do texto não sabia que havia negros no Rio Grande do Sul.</p>
      <p>Assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Somente a afirmativa 3 é verdadeira.', explicacao: 'Correta! Só a 3 está de acordo com o texto, que pede uma reconstrução atenta às desigualdades raciais. A 1 inverte causa e efeito, a 2 contradiz o dado de 21% e a 4 confunde o autor com quem se surpreendia ao saber que ele era negro e gaúcho.' },
      { letra: 'B', texto: 'Somente as afirmativas 1 e 2 são verdadeiras.' },
      { letra: 'C', texto: 'Somente as afirmativas 2 e 4 são verdadeiras.' },
      { letra: 'D', texto: 'Somente as afirmativas 1, 3 e 4 são verdadeiras.' },
      { letra: 'E', texto: 'As afirmativas 1, 2, 3 e 4 são verdadeiras.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2025-058', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 58,
    disciplina: 'Português', conteudo: 'por-2a5', subtopico: 'Compreensão de texto', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2025_POR_55,
    enunciado: `<p>Assinale a alternativa que sintetiza a experiência relatada em primeira pessoa, no primeiro parágrafo.</p>`,
    alternativas: [
      { letra: 'A', texto: 'As enchentes no Rio Grande do Sul mostram o racismo ambiental do estado.' },
      { letra: 'B', texto: 'A reconstrução do Rio Grande do Sul depende da população negra.' },
      { letra: 'C', texto: 'Os negros têm pouca representatividade política no Rio Grande do Sul.' },
      { letra: 'D', texto: 'A colonização europeia contribuiu para o crescimento do Rio Grande do Sul.' },
      { letra: 'E', texto: 'Os brasileiros desconhecem a presença da população negra no Rio Grande do Sul.', explicacao: 'Correta! No 1º parágrafo, o autor conta que pessoas de outros lugares se espantavam: “Não sabia que tinha negros no Rio Grande Sul” — reação que ele ouviu diversas vezes.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2025-059', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 59,
    disciplina: 'Português', conteudo: ['por-1a5', 'por-4a4'], subtopico: 'Homofonia em quadrinhos', dificuldade: 'facil',
    textoApoio: `<p>Leia os quadrinhos abaixo:</p>`,
    imagem: 'imagens/estudo/ufpr-2025-059.webp',
    legenda: '<small>Disponível em: https://www.instagram.com/tirinhadearmandinho.</small>',
    enunciado: `<p>Assinale a alternativa que aponta o fenômeno linguístico que provoca humor nesses quadrinhos.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Sinonímia' },
      { letra: 'B', texto: 'Conotação' },
      { letra: 'C', texto: 'Homofonia', explicacao: 'Correta! “Cestas”, “sestas” e “sextas” têm som igual ou muito parecido e sentidos diferentes (homófonos); o humor vem do jogo entre essas palavras.' },
      { letra: 'D', texto: 'Metáfora' },
      { letra: 'E', texto: 'Derivação' },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2025-060', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 60,
    disciplina: 'Português', conteudo: 'por-2a5', subtopico: 'Compreensão de texto', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2025_POR_60,
    enunciado: `<p>Considere as seguintes afirmativas:</p>
      <p>1. As instituições financeiras atuam no meio do processo entre o investidor e o devedor.<br>
      2. O devedor é o participante que sai lucrando no processo de empréstimo de dinheiro dos bancos.<br>
      3. A taxa de juros define o valor da administração bancária na gestão de investimentos financeiros.<br>
      4. O valor dos juros pago pelo devedor é igual ao valor lucrado pelo investidor.</p>
      <p>Assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Somente a afirmativa 1 é verdadeira.', explicacao: 'Correta! O texto diz que os bancos “fazem a intermediação” entre poupador e tomador (1). O devedor paga mais do que tomou (2 é falsa), a taxa de juros é o preço do “aluguel” do dinheiro (3 é falsa) e o banco fica com parte dos juros, então o investidor recebe menos do que o devedor paga (4 é falsa).' },
      { letra: 'B', texto: 'Somente as afirmativas 1 e 3 são verdadeiras.' },
      { letra: 'C', texto: 'Somente as afirmativas 2 e 4 são verdadeiras.' },
      { letra: 'D', texto: 'Somente as afirmativas 2, 3 e 4 são verdadeiras.' },
      { letra: 'E', texto: 'As afirmativas 1, 2, 3 e 4 são verdadeiras.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2025-061', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 61,
    disciplina: 'Português', conteudo: 'por-2a5', subtopico: 'Compreensão de texto', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2025_POR_60,
    enunciado: `<p>Analise a seguinte situação:</p>
      <p>Você investiu R$ 3.500,00 em uma instituição financeira, com uma taxa de juros de 8% ao ano.</p>
      <p>Assinale a alternativa que define o valor do lucro após um ano.</p>`,
    alternativas: [
      { letra: 'A', texto: 'R$ 100,00' },
      { letra: 'B', texto: 'R$ 280,00', explicacao: 'Correta! Seguindo o raciocínio do texto (juros = capital × taxa): 3.500 × 8/100 = R$ 280,00 de lucro em um ano.' },
      { letra: 'C', texto: 'R$ 350,00' },
      { letra: 'D', texto: 'R$ 380,00' },
      { letra: 'E', texto: 'R$ 800,00' },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2025-062', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 62,
    disciplina: 'Português', conteudo: ['por-2a3', 'por-3b5'], subtopico: 'Reescrita e conectivos', dificuldade: 'dificil',
    enunciado: `<p>Observe as formulações abaixo, extraídas de questões de processos seletivos:</p>
      <p>1. Uma das etapas do processo de reciclagem de plásticos é a separação de diferentes polímeros. Um dos métodos mais empregados consiste na separação por densidade. Uma amostra <u>contendo</u> diferentes polímeros é triturada e colocada num líquido. Os plásticos mais densos que o líquido afundam e os menos densos flutuam, <u>permitindo</u> a separação.<br>
      2. Dois tipos de transporte que podem acontecer nas membranas plasmáticas são o transporte passivo e o transporte ativo. O primeiro pode acontecer por simples difusão do elemento a ser transportado através da bicamada lipídica da membrana. <u>Já</u> o transporte ativo sempre depende de proteínas que atravessam a membrana, às quais o elemento a ser transportado se liga, desligando-se posteriormente do outro lado da membrana.</p>
      <p>Assinale a alternativa que substitui, respectiva e adequadamente, os itens grifados em cada um dos enunciados, respeitando o nexo sintático-semântico:</p>`,
    alternativas: [
      { letra: 'A', texto: 'ao conter – ao permitir – contudo,' },
      { letra: 'B', texto: 'pode conter – que permite – no entanto,' },
      { letra: 'C', texto: 'que contenha – permitem – portanto,' },
      { letra: 'D', texto: 'ao conter – permitiriam – em seguida,' },
      { letra: 'E', texto: 'que contém – o que permite – por outro lado,', explicacao: 'Correta! “contendo” equivale à oração adjetiva “que contém”; “permitindo” retoma todo o fato anterior, como “o que permite”; e “Já” marca contraste entre os dois tipos de transporte, como “por outro lado”.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2025-063', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 63,
    disciplina: 'Português', conteudo: 'por-1a4', subtopico: 'Subjetividade (função expressiva)', dificuldade: 'media',
    textoApoio: `<p>Leia o texto a seguir.</p>
      <p><b>O santo bateu</b></p>
      <p>Minha mãe é fã de Lana Del Rey* aos 56 anos. Essa é uma feliz exceção. Em geral nós perdemos a capacidade de gostar de música nova por volta dos 30. Um experimento publicado em 2022 analisou as preferências de 1064 pessoas entre 18 e 84 anos e descobriu que as canções favoritas de cada uma, em média, saíram quando elas tinham 17. A maior parte de nós gosta dos hits da nossa infância, ama os da juventude e odeia (ou só ignora) boa parte do que é lançado depois. É o famoso “no meu tempo que era bom”.</p>
      <small>Vaiano, B. O Santo bateu, <i>Superinteressante</i>, ed. 464, junho 2024.</small><br>
      <small>*Lana Del Rey, cantora performática, compositora, modelo e poetisa norte-americana, nascida em 1985.</small>`,
    enunciado: `<p>Considere as seguintes sequências extraídas do texto:</p>
      <p>1. Essa é uma feliz exceção.<br>
      2. Em geral nós perdemos a capacidade de gostar de música por volta dos 30.<br>
      3. A maior parte de nós gosta dos hits de infância.<br>
      4. É o famoso “no meu tempo que era bom”.</p>
      <p>Apresenta(m) marca expressiva da subjetividade do autor:</p>`,
    alternativas: [
      { letra: 'A', texto: 'apenas a afirmativa 1.' },
      { letra: 'B', texto: 'apenas as afirmativas 1 e 4.', explicacao: 'Correta! Em 1, o adjetivo “feliz” é uma avaliação pessoal; em 4, “o famoso” e a citação do bordão revelam o comentário irônico do autor. As sequências 2 e 3 apenas relatam resultados da pesquisa.' },
      { letra: 'C', texto: 'apenas as afirmativas 2 e 3.' },
      { letra: 'D', texto: 'apenas as afirmativas 2, 3 e 4.' },
      { letra: 'E', texto: 'as afirmativas 1, 2, 3 e 4.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2025-064', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 64,
    disciplina: 'Português', conteudo: 'por-2a5', subtopico: 'Compreensão de texto', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2025_POR_64,
    enunciado: `<p>De acordo com o texto, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Segundo os autores, para avaliar a influência dos fatores extralinguísticos apresentados, é preciso saber exatamente quais são.' },
      { letra: 'B', texto: 'Os fatores extralinguísticos citados no texto são os principais responsáveis pelo processo de estandardização das línguas.' },
      { letra: 'C', texto: 'As chamadas línguas de cultura apresentam processo de estandardização em que atuam fatores internos e externos à natureza linguística.', explicacao: 'Correta! O texto diz que na estandardização “entram, às vezes, fatores de natureza extralinguística” — ou seja, atuam fatores linguísticos (internos) e também externos à língua.' },
      { letra: 'D', texto: 'Somente em alguns séculos, as obras foram lidas com o mesmo formato de texto em diferentes locais, graças à invenção da imprensa.' },
      { letra: 'E', texto: 'Os autores afirmam que, historicamente, pode-se constatar que todas as línguas passam por um processo de estandardização.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2025-065', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 65,
    disciplina: 'Português', conteudo: 'por-2a5', subtopico: 'Ideia central', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2025_POR_64,
    enunciado: `<p>Assinale a alternativa que apresenta a ideia central do texto.</p>`,
    alternativas: [
      { letra: 'A', texto: 'As versões manuscritas de textos seriam desnecessárias, segundo os autores, porque eram imprecisas e se alteravam conforme o copista.' },
      { letra: 'B', texto: 'A estandardização consiste em um processo de normatização de padrões gerais acerca de representações escritas das línguas humanas.', explicacao: 'Correta! O texto define a estandardização (a língua assume uma mesma forma e obedece a modelos definidos) e mostra fatores que a promoveram; os manuscritos, a imprensa e os meios de comunicação são exemplos dentro dessa ideia central.' },
      { letra: 'C', texto: 'As imprecisões de textos manuscritos se devem ao emprego de diferentes copistas e à diversidade de sua formação.' },
      { letra: 'D', texto: 'Os meios de comunicação de massa e a expansão da educação primária fomentaram o mercado de livros, especialmente os didáticos.' },
      { letra: 'E', texto: 'Os meios de comunicação de massa, entre eles o rádio, a televisão e a internet, são os principais fatores que permitiram a estandardização linguística.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2025-066', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 66,
    disciplina: 'Português', conteudo: 'por-2a5', subtopico: 'Compreensão de texto', dificuldade: 'media',
    textoApoio: `<p>Leia o texto a seguir:</p>
      <p><b>A Lua está encolhendo</b></p>
      <p>A exemplo de uma uva que se enruga ao virar uma passa, a Lua está encolhendo e ganhando vincos. Mas por não ser feito de matéria flexível como a fruta, o astro se deforma de modo mais violento. As falhas geológicas se multiplicam e terremotos e deslizamentos de terra se tornam mais comuns. A circunferência da Lua diminuiu mais de 45 metros nas últimas centenas de milhões de anos à medida que seu núcleo foi se resfriando. Pesquisadores da Nasa, a agência espacial norte-americana, e de universidades e institutos da América do Norte verificaram que a contração lunar provocou o surgimento de falhas tectônicas no polo sul lunar. Algumas regiões afetadas pelas deformações e instabilidades de terreno se situam em áreas cogitadas como local de pouso da missão Artemis 3, iniciativa da Nasa prevista para 2026 que pretende levar novamente astronautas para a Lua. “Nossa modelagem sugere que terremotos superficiais capazes de produzir fortes tremores de solo na região polar sul são possíveis de ocorrer a partir de eventos de deslizamento em falhas existentes ou novas que venham a se formar”, diz o geólogo Thomas Watters, do Instituto Smithsonian, autor principal do estudo, em comunicado à imprensa.</p>
      <small>A Lua está encolhendo, <i>Revista Pesquisa FAPESP</i>, n. 337, p. 7, mar. 2024.</small>`,
    enunciado: `<p>De acordo com o texto, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O geólogo Thomas Watters, com base em modelos de pesquisa, afirma que deslizamentos podem ocorrer a partir de terremotos em falhas na superfície lunar.' },
      { letra: 'B', texto: 'O autor do texto emprega a comparação com uma uva que enruga e vira passa, porque não esteve na Lua e desconhece a paisagem lunar.' },
      { letra: 'C', texto: 'Pesquisadores da Nasa, de universidades e institutos de pesquisa dos Estados Unidos descobriram falhas tectônicas no Polo Sul na Terra e na Lua.' },
      { letra: 'D', texto: 'O pouso da missão Artemis 3, previsto para 2026, está cogitado para a zona de deformações provocadas por instabilidades do solo lunar.', explicacao: 'Correta! O texto afirma que algumas regiões afetadas pelas deformações e instabilidades “se situam em áreas cogitadas como local de pouso da missão Artemis 3”. (Em A, a relação causal está invertida: são os deslizamentos em falhas que geram os terremotos.)' },
      { letra: 'E', texto: 'A circunferência da Lua encolheu 45 metros em virtude de seu resfriamento, mas isso é insignificante considerando-se o tempo que levou para que ocorresse.' },
    ],
    gabarito: 'D',
  },

  // ===================== LITERATURA =====================
  // ===================== INGLÊS =====================
  {
    id: 'ufpr-2025-ing-083', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 83,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2025_ING_83,
    enunciado: `<p>According to the text, it is correct to say that Jennifer Colpas:</p>`,
    alternativas: [
      { letra: 'A', texto: 'has founded the organization Tierra Grata on her own.' },
      { letra: 'B', texto: 'is a female leader dedicated to the development of Colombian highly populated areas.' },
      { letra: 'C', texto: 'is part of a middle-aged group of female leaders helping urban communities.' },
      { letra: 'D', texto: 'is an influential young leader taking part in organizations that aim to change the world.', explicacao: 'Correta! Ela tem 32 anos, é líder (Global Female Leaders) e, com a Tierra Grata, participa de redes de jovens “that are changing the world”, como Young Water Solutions e One Young World.' },
      { letra: 'E', texto: 'believes everyone has access to the essentials.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2025-ing-084', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 84,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2025_ING_83,
    enunciado: `<p>According to the text, it is correct to say that:</p>`,
    alternativas: [
      { letra: 'A', texto: 'Tierra Grata is a for profit organization dedicated to providing scholarships for young students.' },
      { letra: 'B', texto: 'Jennifer Colpas has under seven years of experience focusing on social programs in all states of South America.' },
      { letra: 'C', texto: 'sanitation services are one of the issues Tierra Grata is concerned about.', explicacao: 'Correta! A Tierra Grata foi fundada “with the purpose of providing access to basic energy, water, and sanitation services to rural communities in Colombia”.' },
      { letra: 'D', texto: 'Tierra Grata is devoted to the improvement of the quality of life for the younger female world population.' },
      { letra: 'E', texto: 'Jennifer Colpas is a Brazilian female leader who has been part of youth networks and associations for over a decade.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2025-ing-085', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 85,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2025_ING_85,
    enunciado: `<p>According to the text, it is correct to say that:</p>`,
    alternativas: [
      { letra: 'A', texto: 'Tierra Grata offers free services for rural communities.' },
      { letra: 'B', texto: 'the cost of services offered by Tierra Grata are priced according to users’ income.' },
      { letra: 'C', texto: 'Tierra Grata users pay for the services on a yearly basis.' },
      { letra: 'D', texto: 'the Guardians establish the committee that selects users who subscribe for the program.' },
      { letra: 'E', texto: 'the payments users make each month are calculated according to their earnings.', explicacao: 'Correta! O texto diz que os usuários adquirem as soluções “through monthly payments adjusted to their income”: o que se ajusta à renda são as parcelas mensais, não o preço do serviço.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2025-ing-086', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 86,
    disciplina: 'Inglês', subtopico: 'Gramática', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2025_ING_85,
    enunciado: `<p>Consider the following sentences:</p>
      <p>1. <i>Safe</i>, <i>non-polluting</i> and <i>long-term</i> are adjectives.<br>
      2. The Guardians’ program offers opportunities to people from outside the communities assisted by Tierra Grata.<br>
      3. The Guardians are responsible for monitoring and repairing the services after installation.<br>
      4. <i>Affordable</i>, <i>subscribe</i> and <i>management</i> are all verb forms in the text.</p>
      <p>Mark the correct alternative.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Only affirmative 1 is correct.' },
      { letra: 'B', texto: 'Only affirmatives 1 and 3 are correct.', explicacao: 'Correta! 1: safe, non-polluting e long-term qualificam substantivos (adjetivos). 3: o comitê dos Guardians monitora e conserta as soluções instaladas. 2 é falsa (o comitê é formado dentro das comunidades) e 4 também (affordable é adjetivo e management, substantivo).' },
      { letra: 'C', texto: 'Only affirmatives 2 and 4 are correct.' },
      { letra: 'D', texto: 'Only affirmatives 2, 3 and 4 are correct.' },
      { letra: 'E', texto: 'Affirmatives 1, 2, 3 and 4 are correct.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2025-ing-087', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 87,
    disciplina: 'Inglês', subtopico: 'Vocabulário', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2025_ING_87,
    enunciado: `<p>Mark the alternative with the synonyms for the terms <i>gifted</i>, <i>ensure</i> and <i>commodity</i> found in the text.</p>`,
    alternativas: [
      { letra: 'A', texto: 'talented – guarantee – product', explicacao: 'Correta! gifted = talentoso (talented), ensure = garantir (guarantee) e commodity = mercadoria, produto (product).' },
      { letra: 'B', texto: 'luckless – certify – component' },
      { letra: 'C', texto: 'unfit – destroy – merchandise' },
      { letra: 'D', texto: 'inept – neglect – asset' },
      { letra: 'E', texto: 'competent – ignore – goods' },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2025-ing-088', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 88,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2025_ING_87,
    enunciado: `<p>Analyze the following sentences:</p>
      <p>1. Paul Atreides completely understands his destiny towards the universe.<br>
      2. The planet Paul Atreides must travel to is the supplier of a vital resource.<br>
      3. The commodity found in the planet is the reason of conflicts.<br>
      4. Malevolent forces in conflict exploded the planet’s exclusive supply.</p>
      <p>Mark the correct alternative, based on the text.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Only sentence 1 is correct.' },
      { letra: 'B', texto: 'Only sentences 1 and 4 are correct.' },
      { letra: 'C', texto: 'Only sentences 2 and 3 are correct.', explicacao: 'Correta! O planeta tem o suprimento exclusivo do recurso mais precioso (2), e as forças malévolas entram em conflito por causa dele (3). O destino está “beyond his understanding” (1 é falsa) e as forças “explode into conflict”, não explodem o suprimento (4 é falsa).' },
      { letra: 'D', texto: 'Only sentences 2, 3 and 4 are correct.' },
      { letra: 'E', texto: 'Sentences 1, 2, 3 and 4 are correct.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2025-ing-089', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 89,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2025_ING_89,
    enunciado: `<p>Based on the information presented in the text, which is the main characteristic of the robot spaceMIRA?</p>`,
    alternativas: [
      { letra: 'A', texto: 'It is a remotely controlled robot that has completed its first surgery on board the International Space Station.', explicacao: 'Correta! O texto diz que o spaceMIRA, a bordo da Estação Espacial Internacional, completou sua primeira demonstração de cirurgia, operado remotamente por cirurgiões em Nebraska.' },
      { letra: 'B', texto: 'It is an oversized robotic assistant that performed its first simulated operation on human tissue in space.' },
      { letra: 'C', texto: 'It is remotely controlled by a team of colorectal surgeons that were in the International Space Station.' },
      { letra: 'D', texto: 'It has rubber bands that allow more precision and fewer seconds of delay in performing the command given.' },
      { letra: 'E', texto: 'It is part of a NASA project that will take about two years to make a trip around Mars.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2025-ing-090', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 90,
    disciplina: 'Inglês', subtopico: 'Gramática', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2025_ING_89,
    enunciado: `<p>The term “it” in bold and underlined in the text refers to:</p>`,
    alternativas: [
      { letra: 'A', texto: 'one of the challenges.' },
      { letra: 'B', texto: 'the command sent.', explicacao: 'Correta! “the delay between the time the command is sent and the time the robot receives it”: o robô recebe o comando — “it” retoma “the command”.' },
      { letra: 'C', texto: 'a robot in space.' },
      { letra: 'D', texto: 'the attempt.' },
      { letra: 'E', texto: 'the planet Earth.' },
    ],
    gabarito: 'B',
  },

  // ===================== ESPANHOL =====================
  {
    id: 'ufpr-2025-esp-083', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 83,
    disciplina: 'Espanhol', subtopico: 'Gramática', dificuldade: 'media',
    enunciado: `<p>Seleccione la alternativa que llene correctamente los espacios vacíos en el texto a continuación, en el orden en que aparecen en el texto.</p>
      <p>___ más importante en ___ vida es saber reconocer lo que puede traernos lo mejor, buscando siempre ___ horizonte y ___ meta que alcanzar.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Lo – el – la – un' },
      { letra: 'B', texto: 'La – una – el – la' },
      { letra: 'C', texto: 'El – la – la – una' },
      { letra: 'D', texto: 'Lo – la – un – una', explicacao: 'Correta! “Lo” (artículo neutro) sustantiva el adjetivo “más importante”; “la vida” (femenino); “un horizonte” (masculino) y “una meta” (femenino), con indefinidos porque no se trata de algo específico.' },
      { letra: 'E', texto: 'El – el – un – una' },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2025-esp-084', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 84,
    disciplina: 'Espanhol', subtopico: 'Vocabulario', dificuldade: 'facil',
    enunciado: `<p>En el excerto “La policía no consiguió arrestar a todos los criminales”, <i>arrestar</i> tiene el significado de:</p>`,
    alternativas: [
      { letra: 'A', texto: 'poner en libertad o soltar quien está atado, preso o sujeto físicamente.' },
      { letra: 'B', texto: 'establecer distancia entre algo o alguien y una persona, animal, lugar o cosa que se toman como punto de referencia.' },
      { letra: 'C', texto: 'quitar algo a alguien o dejarle sin ello.' },
      { letra: 'D', texto: 'llevar o mover rasando el suelo, o una superficie cualquiera.' },
      { letra: 'E', texto: 'retener a alguien y privarlo de su libertad.', explicacao: 'Correta! “Arrestar” significa prender, deter alguém — retenerlo y privarlo de su libertad. (A é o contrário, “soltar”; D seria “arrastrar”, falso cognato.)' },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2025-esp-085', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 85,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'media',
    textoApoio: `<p>Lee el texto que sigue:</p>
      <p>Las preocupaciones de los adolescentes tienen que ver con: “Todas las chicas están más delgadas que yo”, “la escuela es lo más frustrante que existe en el mundo” o “me da miedo enamorarme de un chico y que otra se enamore de él”. Son pensamientos reales que escribieron a los 14 años cientos de alumnos de noveno grado del profesor canadiense Bruce Farrer (hoy 83 años), quien desde 1962 hasta el año pasado encargaba a sus estudiantes que escribieran a su yo del futuro una carta en la que describieran sus miedos y aspiraciones. Pero el ejercicio no se quedó en una mera tarea de clase: 20 años después de la redacción de cada uno de aquellos textos, Farrer las fue enviando una por una a sus autores. Ahora el documental <i>El método Farrer</i>, de la española Esther Morente, muestra cómo algunos de aquellos adolescentes, hoy convertidos en adultos, se han enfrentado a su yo del pasado. “Les ofrecía a mis estudiantes la oportunidad de reflexionar sobre su vida a los 14 años y pensar en el futuro, en la mejor manera de prepararse para cumplir sus objetivos. Les decía: no os limitéis a decir lo que hicisteis el fin de semana pasado, tampoco quiénes son vuestros familiares. Dentro de 20 años seguiréis sabiendo quiénes son; habladme de vuestras relaciones con ellos, qué os irrita, qué admiráis. También escribo un diario que empecé a los 10 años y la noche antes de mi boda, hace 50, me escribí una carta que releí en mi vigesimoquinto aniversario”, cuenta Farrer.</p>
      <small>El País, Madrid, 24 ago. 2024. Adaptado.</small>`,
    enunciado: `<p>Según el texto, ¿cuál era el objetivo del profesor Bruce Farrer al pedir a sus alumnos que escribieran una carta para su yo futuro?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Registrar sus experiencias personales.' },
      { letra: 'B', texto: 'Describir sus preocupaciones actuales.' },
      { letra: 'C', texto: 'Prepararse para cumplir objetivos futuros.', explicacao: 'Correta! Farrer diz que oferecia aos alunos a oportunidade de “pensar en el futuro, en la mejor manera de prepararse para cumplir sus objetivos” — essa é a finalidade da carta segundo o gabarito oficial.' },
      { letra: 'D', texto: 'Reflexionar sobre la vida a los 14 años.' },
      { letra: 'E', texto: 'Compartir historias familiares.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2025-esp-086', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 86,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'facil',
    textoApoio: `<p>Lee el siguiente trecho del soneto XVII de Pablo Neruda:</p>
      <p>“No te amo como si fueras rosa de sal, topacio o flecha de claveles que propagan el fuego: te amo como se aman ciertas cosas oscuras, secretamente, entre la sombra y el alma.”</p>`,
    enunciado: `<p>Elije la alternativa correcta en relación al excerto.</p>`,
    alternativas: [
      { letra: 'A', texto: 'El poeta compara el amor con la belleza de las flores.' },
      { letra: 'B', texto: 'El amor descrito en el poema es coherente.' },
      { letra: 'C', texto: 'La palabra “oscuras” sugiere un amor misterioso y escondido.', explicacao: 'Correta! O poeta ama “como se aman ciertas cosas oscuras, secretamente, entre la sombra y el alma”: “oscuras”, junto com “secretamente” e “sombra”, sugere um amor misterioso e oculto.' },
      { letra: 'D', texto: 'El poema habla del amor a la naturaleza.' },
      { letra: 'E', texto: 'El poeta compara el amor a la sal, topacio o flecha de claveles.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2025-esp-087', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 87,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2025_ESP_87,
    enunciado: `<p>Según el texto, ¿qué relación tiene nuestra conexión con el agua con nuestra historia evolutiva?</p>`,
    alternativas: [
      { letra: 'A', texto: 'La relación con el agua se explica exclusivamente por la necesidad de mantenernos hidratados.' },
      { letra: 'B', texto: 'La conexión con el agua se relaciona con el recuerdo del ambiente amniótico y la evolución de seres unicelulares.', explicacao: 'Correta! O texto abre dizendo que nossa história com a água tem a ver “con el recuerdo del refugio amniótico” e com “la indeleble huella del primer organismo unicelular de hace millones de años”.' },
      { letra: 'C', texto: 'La relación con el agua se explica únicamente como una construcción cultural contemporánea.' },
      { letra: 'D', texto: 'La conexión con el agua es posterior a las ideas expresas en 1951.' },
      { letra: 'E', texto: 'La vinculación con el agua es una respuesta al cambio climático.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2025-esp-088', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 88,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2025_ESP_87,
    enunciado: `<p>¿Qué efectos tiene sumergirse en el agua según Easkey Britton?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Aumenta la presión arterial y el estrés.' },
      { letra: 'B', texto: 'Nos desconecta de nuestro entorno y nos aisla.' },
      { letra: 'C', texto: 'Provoca una sensación de incomodidad y ansiedad.' },
      { letra: 'D', texto: 'Nos permite vincularnos con los demás y con nosotros mismos.', explicacao: 'Correta! Britton afirma: “Al meternos en el agua [...] nos sentimos muy bien. Nos ayuda a conectar con otros y con nosotros mismos”.' },
      { letra: 'E', texto: 'Nos hace olvidar nuestras responsabilidades diárias.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2025-esp-089', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 89,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2025_ESP_89,
    enunciado: `<p>De acuerdo con el texto, ¿Cuál es la relación entre la exposición temprana a Internet y un uso más intenso?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Cuanto antes empiecen a consumir, más tiempo pasarán online.', explicacao: 'Correta! O texto mostra que 25% dos que passam mais de 4 horas por dia na internet começaram antes dos 10 anos, contra 12,9% dos que começaram aos 14 ou mais: quanto mais cedo o início, mais intenso o uso.' },
      { letra: 'B', texto: 'La relación tiene que ver con incapacidad para superar problemas.' },
      { letra: 'C', texto: 'Cuando empiecen a utilizarlo de manera temprana, tendrán problemas personales.' },
      { letra: 'D', texto: 'La exposición temprana trae problemas en la escuela.' },
      { letra: 'E', texto: 'La exposición temprana está relacionada con la seguridad en línea.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2025-esp-090', prova: 'UFPR 2025', vestibular: 'UFPR', ano: 2025, numeroOriginal: 90,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2025_ESP_89,
    enunciado: `<p>Según la encuesta, ¿cuál es el principal interés de los menores en relación con su privacidad en Internet?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Obtener más autonomía y privacidad con relación a sus padres.', explicacao: 'Correta! A pesquisa conclui que o interesse dos menores pela privacidade está mais ligado a “ganar libertad e intimidad respecto a sus padres” do que à proteção de dados pessoais.' },
      { letra: 'B', texto: 'Proteger sus datos personales.' },
      { letra: 'C', texto: 'Evitar imágenes negativas sobre si mismos.' },
      { letra: 'D', texto: 'Mejorar su seguridad en línea.' },
      { letra: 'E', texto: 'Reducir el tiempo de conexión.' },
    ],
    gabarito: 'A',
  },
);
