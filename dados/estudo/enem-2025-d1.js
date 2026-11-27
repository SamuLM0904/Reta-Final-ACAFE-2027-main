/**
 * ENEM 2025 — 1º dia, Caderno 1 AZUL (Linguagens 1–45 e Ciências Humanas 46–90).
 *
 * Fonte: Provas/Outros/ENEM/2025_PV_D1_CD1.pdf; gabarito oficial: 2025_GB_D1_CD1.pdf (caderno azul).
 * Questões de ESTUDO — nunca entram nos simulados. Aparecem no módulo da matéria, dentro do
 * capítulo do campo `conteudo` (Literatura e línguas: pelo `subtopico`).
 * Ficaram de fora: Artes, Educação Física, Filosofia, Sociologia e a Redação.
 * Formato das questões: veja README.md ("Como adicionar uma questão nova").
 */

/* Texto para as questões 06 a 10 (crônica "De próprio punho") */
var TEXTO_ENEM_2025_D1_PUNHO = `
      <b>De próprio punho</b><br>
      <i>A escrita e suas tecnologias sofrem interessantes metamorfoses, numa ciranda que vai do simples bilhete aos originais de um livro</i>
      <ol class="texto-numerado">
        <li>Estranhei muito na primeira vez que escutei a expressão “de próprio punho”. Parecia</li>
        <li>que eu ia bater em alguém. Não era bem o caso. Foi numa situação bancária, dessas bem</li>
        <li>burocráticas, e eu devia escrever algo bem breve, mas com minhas mãos. Na verdade,</li>
        <li>o que importava era a autenticidade da minha caligrafia, que à época ainda era mais</li>
        <li>fluente e firme. Depois dos teclados de computador, ela rateia bastante. Minha letra,</li>
        <li>hoje, tem uma espécie de alternância: dia sim, dia não, trêmula e firme, forte e fraca,</li>
        <li>mais rotunda e mais cheia de arestas.</li>
        <li>É claro que já escrevi muito mais de próprio punho ou, numa palavra mais bonita,</li>
        <li>manuscrevi (prefiro a mão ao punho, embora ele também seja usado na tarefa). Mas isso</li>
        <li>não é um feito individual. Em larga medida, é social. Muita gente sente o mesmo que</li>
        <li>eu, isto é, escreve bem menos usando as mãos, ou melhor, empregando algum tipo de</li>
        <li>tecnologia (lápis, caneta etc.) para escrever com grafite ou tinta ou giz ou carvão ou</li>
        <li>sangue e o que mais. É importante lembrar que ainda há gente que não sabe escrever</li>
        <li>neste país, neste planeta, mas muita gente sabe e tem um combo de tecnologias mais</li>
        <li>ou menos à disposição para isso. Sou dessas pessoas privilegiadas que têm várias</li>
        <li>possibilidades, e uma delas nunca deixou de ser o uso das minhas mãos. Ainda hoje,</li>
        <li>são elas que batucam meu teclado de computador ou que tocam suavemente duas ou</li>
        <li>três telas sensíveis. Mas não expressam mais a minha letra. No lugar, aparecem Times</li>
        <li>New Roman, Arial, Calibri e mais uma centena de “letras” à minha escolha. Eu e Deus</li>
        <li>e o mundo.</li>
        <li>A despeito desse rol de chances e ferramentas para escrever, o manuscrito nunca</li>
        <li>deixou de pintar aqui e ali, muitas vezes como obrigação. Na escola, por exemplo, até</li>
        <li>hoje ele é soberano. No Enem também. Curioso, não? Fico pensando em que espaços</li>
        <li>e ocasiões ainda uso minha letra. Olhando ao redor, na minha casa, minha letra está</li>
        <li>em espaços muito delimitados e específicos: bilhetes. Eles estão principalmente na</li>
        <li>cozinha, em especial na porta da geladeira, a fim de manter a comunicação com meus</li>
        <li>coabitantes, sempre muito esquecidos ou relapsos. Mas também há bilhetes em post its</li>
        <li>na minha mesa do escritório, textinhos em garranchos por meio dos quais me comunico</li>
        <li>comigo mesma, a evitar um comportamento esquecido e relapso.</li>
        <li>No escritório, costumo ser mais suave comigo mesma, mas também muito mais</li>
        <li>lacônica, a ponto de nem eu me entender, se passar o tempo. Em todos os casos vai</li>
        <li>minha letra, menos e mais redonda, a lápis e a tinta azul, em post its rosa-choque, colados</li>
        <li>precariamente, e todos com destino à lixeira, em breve. Justo porque eles funcionam</li>
        <li>como lembretes de tarefas e coisas que devem ser vencidas e, claro, substituídas por</li>
        <li>outras, num fluxo infinito, às vezes ansiogênico, com que a maioria dos adultos (e mais</li>
        <li>ainda as adultas) precisa conviver.</li>
        <li>As formas de escrever mudam, as necessidades também, e o resultado é um elenco</li>
        <li>complexo, em que nada dispensa nada, a depender da tarefa ou da importância das coisas</li>
        <li>ou de suas funções, claro. A escrita e suas tecnologias incríveis vão se reposicionando,</li>
        <li>mudando de status, numa ciranda interessante e importante que pode ser vista à luz de</li>
        <li>certa diversidade que encontra suas oportunidades e seus efeitos, aqui e ali. Não adianta</li>
        <li>muito pensar sempre como se tudo fosse excludente. Estão aí minha farta comunicação</li>
        <li>por bilhetes, minha gaveta alegre de post its de toda cor, esperando para serem usados,</li>
        <li>e o cheque do cartório, em que quase tudo já é digital. “Do punho ao pixel” não é uma</li>
        <li>frase filosoficamente correta. O negócio é mais “o punho e o pixel”.</li>
      </ol>
      <small>RIBEIRO, A. E. Disponível em: https://rascunho.com.br. Acesso em: 16 jan. 2024 (adaptado).</small>
`;

QUESTOES.push(

  /* ===================== INGLÊS (01 a 05) ===================== */
  {
    id: 'enem-2025-ing-001', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 1,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'facil',
    textoApoio: `
      <p>Glory Ames, from the White Earth reservation, is frustrated that despite the presence of several indigenous reservations near Moorhead, local Halloween stores still feature a western section with costumes such as “pow wow princess”.</p>
      <p>Even worse, despite a long-running debate about racism and cultural appropriation, often prompted by backlash against celebrities and politicians for donning offensive costumes, people continue to wear such costumes.</p>
      <p>Last Halloween, Ames spotted a photo on Instagram of a girl dressed as a Native American with a bullet in her forehead. She immediately reported it to the social media platform and had it removed.</p>
      <p>“They blatantly take certain aspects of our culture, race, religion, and use it for their advantage and ignore the people living it”, said Ames.</p>
      <small>LIU, M. C. M. Disponível em: www.washingtonpost.com. Acesso em: 12 maio 2024 (adaptado).</small>`,
    enunciado: `<p>Ao abordar um aspecto da celebração do Halloween, esse texto tem por objetivo</p>`,
    alternativas: [
      { letra: 'A', texto: 'denunciar a violência contra crianças indígenas.' },
      { letra: 'B', texto: 'descrever costumes tradicionais em celebrações indígenas.' },
      { letra: 'C', texto: 'valorizar as vestimentas características dos povos originários.' },
      { letra: 'D', texto: 'criticar a exploração indevida de elementos da identidade indígena.', explicacao: 'Correta! O texto critica as fantasias de Halloween que usam elementos indígenas (“pow wow princess”) e cita a fala de Ames: “They blatantly take certain aspects of our culture [...] and ignore the people living it” — ou seja, apropriação cultural indevida.' },
      { letra: 'E', texto: 'sugerir ações de combate ao preconceito contra os povos originários.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-ing-002', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 2,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'facil',
    textoApoio: `
      <p>My idea of philosophy is that if it is not relevant to human problems, if it does not tell us how we can go about eradicating some of the misery in this world, then it is not worth the name of philosophy. I think Socrates made a very profound statement when he asserted that philosophy is to teach us proper living. In this day and age “proper living” means liberation from the urgent problems of poverty, economic necessity and indoctrination, mental oppression.</p>
      <small>DAVIS, A. <i>Lectures on Liberation</i>. Washington: Smithsonian Libraries, 1971 (adaptado).</small>`,
    enunciado: `<p>Nesse texto, ao discorrer sobre a relevância da filosofia, a escritora Angela Davis tem por objetivo</p>`,
    alternativas: [
      { letra: 'A', texto: 'criticá-la pela restrição temática.' },
      { letra: 'B', texto: 'vinculá-la ao universo acadêmico.' },
      { letra: 'C', texto: 'afastá-la da abordagem socrática.' },
      { letra: 'D', texto: 'aproximá-la dos problemas sociais.', explicacao: 'Correta! Para Davis, a filosofia só merece esse nome se for “relevant to human problems” e ajudar a erradicar a miséria, a pobreza e a opressão — ela aproxima a filosofia dos problemas sociais.' },
      { letra: 'E', texto: 'responsabilizá-la pela pobreza humana.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-ing-003', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 3,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'facil',
    textoApoio: `
      <p>Remember the sky that you were born under,<br>
      know each of the star’s stories.<br>
      Remember the moon, know who she is.<br>
      Remember the sun’s birth at dawn. [...]<br>
      Remember your birth, how your mother struggled<br>
      to give you form and breath [...]<br>
      Remember the earth whose skin you are:<br>
      red earth, black earth, yellow earth, white earth<br>
      brown earth, we are earth.<br>
      Remember the plants, trees, animal life who all have their<br>
      tribes, their families, their histories, too [...]<br>
      Remember you are all people and all people are you.<br>
      Remember you are this universe and this universe is you.<br>
      Remember all is in motion, is growing, is you.</p>
      <small>HARJO, J. <i>She Had Some Horses</i>. Londres: W. Norton &amp; Company, 1983 (fragmento).</small>`,
    enunciado: `<p>Nesse poema, de uma autora de ascendência indígena, o eu lírico ressalta a</p>`,
    alternativas: [
      { letra: 'A', texto: 'potência dos astros celestes.' },
      { letra: 'B', texto: 'origem das plantas e dos animais.' },
      { letra: 'C', texto: 'importância do apego à terra natal.' },
      { letra: 'D', texto: 'relação entre seres humanos e natureza.', explicacao: 'Correta! O poema liga o ser humano ao céu, à lua, ao sol, à terra (“the earth whose skin you are”, “we are earth”) e às plantas e animais, culminando em “you are this universe and this universe is you”: a unidade entre seres humanos e natureza.' },
      { letra: 'E', texto: 'conexão entre o tempo real e o tempo imaginário.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-ing-004', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 4,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'media',
    textoApoio: `
      <p>It is true that all children are special, simply because they are children. But most adults are not special, and children end up as adults pretty quickly. Life then can be difficult and even disappointing. The shock of this may account for the emergence of the “snowflake generation” of university students, who are so delicate they can’t handle controversial ideas being put forward in their lectures. The roots of this fragility run deep in modern culture. So, an approach of the world that states: “Life is wonderful, you’re special and, if you are a good boy/girl, life will be amazing forever” is not a message designed to aid bouncing back from failure or confronting catastrophe. Resilience is not about feeding ego — telling your children how wonderful they are — but strengthening it.</p>
      <small>LOTT, T. Disponível em: www.theguardian.com. Acesso em: 10 dez. 2017 (adaptado).</small>`,
    enunciado: `<p>Nesse texto, a expressão “snowflake generation” é usada para</p>`,
    alternativas: [
      { letra: 'A', texto: 'abordar obstáculos impostos a universitários.' },
      { letra: 'B', texto: 'destacar mensagens de incentivo a estudantes.' },
      { letra: 'C', texto: 'estimular ações proativas em situações de emergência.' },
      { letra: 'D', texto: 'retratar relações conflituosas em ambiente universitário.' },
      { letra: 'E', texto: 'apontar posturas de uma juventude avessa a contrariedades.', explicacao: 'Correta! A “snowflake generation” (geração floco de neve) é descrita como estudantes “so delicate they can’t handle controversial ideas” — jovens frágeis, que não suportam ser contrariados.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-ing-005', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 5,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-ing-005.webp',
    legenda: 'Disponível em: https://pt.foursquare.com. Acesso em: 14 maio 2024.',
    enunciado: `<p>Nesse texto, a pergunta “What is sleep?”, em uma das embalagens do produto, está relacionada ao(à)</p>`,
    alternativas: [
      { letra: 'A', texto: 'escassez de horas de sono.', explicacao: 'Correta! Os copos de café têm tamanhos ligados às horas dormidas: o de 8 oz para quem dormiu 8–10 horas, o de 12 oz para 5–7 horas e o maior (16 oz) para quem pergunta “What is sleep?” — quem quase não dormiu e precisa de mais café.' },
      { letra: 'B', texto: 'estímulo a um descanso de qualidade.' },
      { letra: 'C', texto: 'gasto com bebidas que combatem a insônia.' },
      { letra: 'D', texto: 'consumo de bebidas que causam dependência.' },
      { letra: 'E', texto: 'necessidade de um produto que provoque o sono.' },
    ],
    gabarito: 'A',
  },

  /* ===================== ESPANHOL (01 a 05) ===================== */
  {
    id: 'enem-2025-esp-001', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 1,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'facil',
    textoApoio: `
      <p>¿Dónde está nuestro pan, patrón?<br>
      ¿Dónde quedó todo ese dinero?<br>
      ¿Lo tiene oculto bajo el colchón<br>
      o lo escondió en otro sucio agujero?<br>
      Yo tengo un Tàpies, dice Juan Luis;<br>
      yo tengo un Antonio López, dice Jaume.<br>
      ¿Quién de los dos sabrá decir<br>
      cuántos muertos tiene a sus espaldas?</p>
      <small>NACHO VEGAS. Disponível em: www.lahiguera.net. Acesso em: 12 abr. 2024 (fragmento).</small>`,
    enunciado: `<p>Na letra da canção <i>Polvorado</i>, ao apresentar as reflexões do eu poético, o cantor espanhol Nacho Vegas</p>`,
    alternativas: [
      { letra: 'A', texto: 'demonstra o orgulho dos trabalhadores para com artistas de referência.' },
      { letra: 'B', texto: 'critica a postura dos patrões frente aos direitos dos trabalhadores.', explicacao: 'Correta! O eu poético cobra do patrão o “pan” dos trabalhadores, insinua que ele esconde o dinheiro e que os patrões, que ostentam quadros de Tàpies e Antonio López, têm “muertos a sus espaldas” — crítica à postura patronal.' },
      { letra: 'C', texto: 'apresenta propostas para diminuir as desigualdades sociais.' },
      { letra: 'D', texto: 'evidencia o diálogo horizontal entre patrão e trabalhadores.' },
      { letra: 'E', texto: 'questiona a insalubridade do ambiente de trabalho.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-esp-002', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 2,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'media',
    textoApoio: `
      <p><b>Guagua, las palabras también migran</b></p>
      <p>Pocas palabras del idioma castellano despiertan tanto interés y asombro como <i>guagua</i>. En España su uso se reduce a las Islas Canarias, donde se registra a partir de los años 30 del pasado siglo. El origen de <i>guagua</i> resulta algo polémico. Todo parece indicar que la voz vino de Cuba. La trajeron de vuelta, junto con sus maletas y sus recuerdos, aquellos inmigrantes canarios que viajaron a la isla antillana en busca de fortuna. Recientemente en Lanzarote, las autoridades acuñaron “guagüismo” para potenciar el uso del transporte público y han solicitado a la Real Academia Española que introduzca dicho término en el diccionario.</p>
      <p>El origen de <i>guagua</i> cambia si nos vamos al sur del continente. Autobús no es la única acepción de la palabra <i>guagua</i> que se usa en América. En los países del sur, tales como Colombia, Argentina o Perú, como una derivación del término quechua <i>wáwa</i>, también se le dice <i>guagua</i> a un niño de pecho o bebé. Algunos autores chilenos han defendido también que esta acepción de <i>guagua</i> como bebé proviene del idioma mapuche. Sea uno u otro el origen, es común en todo el cono sur oír a hombres y mujeres hablar con ternura de sus “guaguas lindas”.</p>
      <small>Disponível em: www.escribirbienyclaro.com. Acesso em: 13 maio 2024.</small>`,
    enunciado: `<p>Ao abordar a trajetória da palavra “guagua”, o texto destaca a</p>`,
    alternativas: [
      { letra: 'A', texto: 'presença de empréstimo linguístico no espanhol.', explicacao: 'Correta! O texto mostra que “guagua” chegou às Canárias vinda de Cuba e que, no sul da América, deriva do quéchua “wáwa” (ou do mapuche) — palavras que “migram” entre variedades e línguas, isto é, empréstimos linguísticos.' },
      { letra: 'B', texto: 'validação de um vocábulo por uma instituição renomada.' },
      { letra: 'C', texto: 'concorrência entre línguas indígenas e a língua espanhola.' },
      { letra: 'D', texto: 'valorização da língua de um país em detrimento da de outro.' },
      { letra: 'E', texto: 'disputa entre hispano-americanos e espanhóis por sua origem.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-esp-003', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 3,
    disciplina: 'Espanhol', subtopico: 'Gramática', dificuldade: 'media',
    textoApoio: `
      <p>Cuando yo era chiquito<br>
      todo quedaba cerca, cerquita.<br>
      Para llegar al cielo<br>
      no más bastaba una subidita.<br>
      El sueño me alcanzaba<br>
      para ir tan lejos como quería.<br>
      Cuando yo era chiquito<br>
      yo sí podía, yo sí podía.<br>
      Libertad, libertad,<br>
      libertad para mi niño.<br>
      [...]<br>
      Cuando yo era vejigo<br>
      me iba pa’l río porque era hermoso,<br>
      aunque estaba prohibido<br>
      por peligroso, por peligroso.<br>
      Como jagüey y ceiba,<br>
      como la palma y la yagruma,<br>
      cuando yo era vejigo<br>
      yo era del monte y soñaba espuma.<br>
      Libertad, libertad,<br>
      libertad para mi niño.</p>
      <small>RODRÍGUEZ, S. Cuando yo era un enano. In: <i>Oh Melancolía</i>. Havana: Empresa de Grabaciones y Ediciones Musicales, 1988 (fragmento).</small>`,
    enunciado: `<p>O recurso que caracteriza essa letra de canção como um relato das memórias do eu poético é o uso de</p>`,
    alternativas: [
      { letra: 'A', texto: 'palavras no grau diminutivo.' },
      { letra: 'B', texto: 'adjetivos na descrição da paisagem.' },
      { letra: 'C', texto: 'vocábulos relacionados à fauna cubana.' },
      { letra: 'D', texto: 'verbos no pretérito imperfeito do indicativo.', explicacao: 'Correta! As memórias da infância são narradas com o pretérito imperfeito (“era”, “quedaba”, “bastaba”, “alcanzaba”, “quería”, “podía”, “iba”, “estaba”, “soñaba”), tempo que expressa ações habituais e contínuas no passado.' },
      { letra: 'E', texto: 'marcas linguísticas de uma variedade caribenha.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-esp-004', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 4,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-esp-004.webp',
    legenda: 'MORGAN, J. Disponível em: www3.gobiernodecanarias.org. Acesso em: 5 maio 2024.',
    enunciado: `<p>Na charge, a diversidade linguística está representada pelo uso de</p>`,
    alternativas: [
      { letra: 'A', texto: 'estruturas verbais com valor de futuro próximo.' },
      { letra: 'B', texto: 'expressões idiomáticas características de uma região.' },
      { letra: 'C', texto: 'advérbios característicos do repertório vocabular dos jovens.' },
      { letra: 'D', texto: 'marcas da oralidade expressas na representação escrita da fala.', explicacao: 'Correta! O menino responde “Vamo a sortá una paloma ahí...” e “Yoquisé... luego vamo acogehla”: a escrita reproduz a pronúncia (queda do “s” e do “r” finais, aspiração), marcas da oralidade de uma variedade do espanhol.' },
      { letra: 'E', texto: 'enunciados interrogativos em situação comunicativa com um interlocutor.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-esp-005', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 5,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'facil',
    textoApoio: `
      <p><b>¿Qué es la generación Alfa?</b></p>
      <p>Hacer cortes generacionales no es una ciencia exacta. Sin embargo, según un análisis de 2018 del centro de estudios Pew Research Center, analizar las generaciones ofrece “una manera de entender cómo los acontecimientos globales y los cambios tecnológicos, económicos y sociales interactúan para definir la forma en que la gente ve el mundo”. Y está claro cómo ve el mundo la próxima generación: a través de una pantalla.</p>
      <p>“Antes las generaciones se definían a partir de sucesos históricos o sociales importantes. Hoy se delimitan por el uso de determinada tecnología”, le explica a BBC Mundo un psicólogo, docente, escritor y experto en el uso — y abuso — de las redes sociales.</p>
      <p>Ninguna de las generaciones anteriores será comparable a nivel digital con los Alfa, que, como contraparte, serán la primera a la que le serán ajenos muchos aspectos del mundo analógico.</p>
      <small>Disponível em: www.bbc.com. Acesso em: 9 maio 2024 (adaptado).</small>`,
    enunciado: `<p>Nesse texto, a expressão “a través de una pantalla” evidencia que a geração Alfa estabelece com o mundo uma relação marcada pelo(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'conflito etário.' },
      { letra: 'B', texto: 'efemeridade da tecnologia.' },
      { letra: 'C', texto: 'dependência de recursos digitais.', explicacao: 'Correta! “A través de una pantalla” (através de uma tela) indica que a geração Alfa vê o mundo mediada por telas e dispositivos; o texto acrescenta que muitos aspectos do mundo analógico lhe serão alheios.' },
      { letra: 'D', texto: 'valor dos acontecimentos sociais.' },
      { letra: 'E', texto: 'indiferença em relação a fatos históricos.' },
    ],
    gabarito: 'C',
  },

  /* ===================== PORTUGUÊS E LITERATURA (06 a 45) ===================== */
  {
    id: 'enem-2025-006', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 6,
    disciplina: 'Português', conteudo: 'por-4a1', subtopico: 'Gêneros textuais', dificuldade: 'facil',
    textoApoio: TEXTO_ENEM_2025_D1_PUNHO,
    enunciado: `<p>No que diz respeito ao gênero bilhete, a autora dessa crônica</p>`,
    alternativas: [
      { letra: 'A', texto: 'ressalta a formalidade na comunicação com as pessoas de sua convivência.' },
      { letra: 'B', texto: 'critica a ansiedade causada pela velocidade da comunicação.' },
      { letra: 'C', texto: 'expressa a obrigatoriedade de concisão nas anotações.' },
      { letra: 'D', texto: 'questiona a prática da escrita de próprio punho.' },
      { letra: 'E', texto: 'apresenta a diversidade de usos no cotidiano.', explicacao: 'Correta! A autora mostra os bilhetes em vários usos do dia a dia: na porta da geladeira, para se comunicar com os coabitantes, e em post its no escritório, como lembretes para si mesma (l. 24-36).' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-007', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 7,
    disciplina: 'Português', conteudo: ['por-4a1', 'por-4a2'], subtopico: 'Crônica', dificuldade: 'media',
    textoApoio: TEXTO_ENEM_2025_D1_PUNHO,
    enunciado: `<p>O elemento que caracteriza esse texto como uma crônica é a</p>`,
    alternativas: [
      { letra: 'A', texto: 'defesa das opiniões da autora sobre um tema de interesse coletivo.' },
      { letra: 'B', texto: 'exposição sobre o uso de tecnologias nas práticas de escrita atuais.' },
      { letra: 'C', texto: 'abordagem de fatos do contexto pessoal em uma perspectiva reflexiva.', explicacao: 'Correta! A crônica parte de fatos do cotidiano da própria autora (a ida ao banco, os bilhetes na geladeira, os post its) para refletir sobre as formas de escrever — marca típica do gênero.' },
      { letra: 'D', texto: 'utilização de recursos linguísticos para a interlocução direta com o leitor.' },
      { letra: 'E', texto: 'apresentação de acontecimentos segundo a ordem de sucessão no tempo.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-008', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 8,
    disciplina: 'Português', conteudo: 'por-2a2', subtopico: 'Tecnologias da escrita', dificuldade: 'facil',
    textoApoio: TEXTO_ENEM_2025_D1_PUNHO,
    enunciado: `<p>Nesse texto, o que caracteriza a escrita “de próprio punho” é a letra manuscrita, enquanto a escrita digital é ilustrada pelo(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'utilização de tecnologias diversificadas.' },
      { letra: 'B', texto: 'desenvolvimento de novos recursos de escrita.' },
      { letra: 'C', texto: 'possibilidade de interações mediadas por telas.' },
      { letra: 'D', texto: 'diversidade de fontes tipográficas que estão disponíveis.', explicacao: 'Correta! No digital, as mãos “não expressam mais a minha letra. No lugar, aparecem Times New Roman, Arial, Calibri e mais uma centena de ‘letras’ à minha escolha” (l. 18-19): as fontes tipográficas substituem a caligrafia.' },
      { letra: 'E', texto: 'delimitação dos espaços onde a produção textual ocorre.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-009', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 9,
    disciplina: 'Português', conteudo: 'por-2a5', subtopico: 'Compreensão textual', dificuldade: 'facil',
    textoApoio: TEXTO_ENEM_2025_D1_PUNHO,
    enunciado: `<p>A autora conclui que as novas tecnologias de escrita</p>`,
    alternativas: [
      { letra: 'A', texto: 'evoluem para facilitar a vida cotidiana.' },
      { letra: 'B', texto: 'alcançam diferentes realidades sociais.' },
      { letra: 'C', texto: 'coexistem com outras já estabelecidas.', explicacao: 'Correta! A autora conclui que “nada dispensa nada” e que não se deve pensar “como se tudo fosse excludente”: não é “do punho ao pixel”, mas “o punho e o pixel” — as tecnologias convivem.' },
      { letra: 'D', texto: 'promovem maior agilidade na comunicação.' },
      { letra: 'E', texto: 'surgem nos contextos em que são necessárias.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-010', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 10,
    disciplina: 'Português', conteudo: 'por-2a5', subtopico: 'Recursos linguísticos e argumentação', dificuldade: 'media',
    textoApoio: TEXTO_ENEM_2025_D1_PUNHO,
    enunciado: `<p>O recurso linguístico usado para marcar a síntese da opinião da autora sobre a temática desenvolvida foi o(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'emprego da primeira pessoa em “Estranhei muito na primeira vez que escutei a expressão ‘de próprio punho’”. (l. 1)' },
      { letra: 'B', texto: 'utilização de locução adverbial em “Na verdade, o que importava era a autenticidade da minha caligrafia”. (l. 3-4)' },
      { letra: 'C', texto: 'uso de pronome possessivo em “Minha letra, hoje, tem uma espécie de alternância”. (l. 5-6)' },
      { letra: 'D', texto: 'adoção de termo autorreflexivo em “No escritório, costumo ser mais suave comigo mesma”. (l. 30)' },
      { letra: 'E', texto: 'substituição da expressão “Do punho ao pixel” (l. 44) pela expressão “o punho e o pixel”. (l. 45)', explicacao: 'Correta! Trocar “ao” (ideia de passagem, substituição) por “e” (adição, convivência) resume a tese da autora: a escrita manual e a digital coexistem.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-011', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 11,
    disciplina: 'Literatura', subtopico: 'Escolas Literárias', dificuldade: 'media',
    textoApoio: `
      <p>— Vejo, disse ele com algum acanhamento, que o doutor não é nenhum pé-rapado, mas nunca é bom facilitar... Minha filha Nocência fez 18 anos pelo Natal, e é rapariga que pela feição parece moça de cidade, muito ariscazinha de modos, mas bonita e boa deveras... Coitada, foi criada sem mãe, e aqui nestes fundões. [...]</p>
      <p>— Ora muito que bem, continuou Pereira caindo aos poucos na habitual garrulice, quando vi a menina tomar corpo, tratei logo de casá-la.</p>
      <p>— Ah! é casada? perguntou Cirino.</p>
      <p>— Isto é, é e não é. A coisa está apalavrada. Por aqui costuma labutar no costeio do gado para São Paulo um homem de mão-cheia, que talvez o sr. conheça... o Manecão Doca...</p>
      <p>— Não, respondeu Cirino abanando a cabeça.</p>
      <p>— Pois isso é um homem às direitas, desempenado e trabucador como ele só... fura estes sertões todos e vem tangendo pontes de gado que metem pasmo. Também dizem que tem bichado muito e ajuntado cobre grosso, o que é possível, porque não é gastador nem dado a mulheres. Uma feita que estava aqui de pousada... olhe, mesmo neste lugar onde estava mecê inda agorinha, falei-lhe em casamento... isto é, dei-lhe uns toques... porque os pais devem tomar isso a si para bem de suas famílias; não acha?</p>
      <p>— Boa dúvida, aprovou Cirino, dou-lhe toda a razão; era do seu dever.</p>
      <small>TAUNAY, A. d’E. <i>Inocência</i>. Disponível em: www.dominiopublico.gov.br. Acesso em: 29 fev. 2024.</small>`,
    enunciado: `<p>Nesse trecho, ao se referir à sua filha, o pai de Inocência reproduz os ideais românticos, presentes na</p>`,
    alternativas: [
      { letra: 'A', texto: 'valorização do ambiente rural na formação moral da mulher.' },
      { letra: 'B', texto: 'figura decorativa da mulher ante o protagonismo masculino.', explicacao: 'Correta! O pai descreve a filha só pela aparência (“bonita e boa deveras”) e decide o casamento dela com Manecão sem consultá-la, enquanto exalta as qualidades do homem: a mulher idealizada e passiva diante do protagonismo masculino, como no ideal romântico.' },
      { letra: 'C', texto: 'equivalência de origem social para a harmonia do casal.' },
      { letra: 'D', texto: 'importância do dote como condição para o casamento.' },
      { letra: 'E', texto: 'aura de mistério sobre a identidade da jovem.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-013', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 13,
    disciplina: 'Português', conteudo: ['por-1a3', 'por-4a1'], subtopico: 'Norma-padrão e gênero textual', dificuldade: 'media',
    textoApoio: `
      <p>Art. 26-A. Nos estabelecimentos de ensino fundamental e médio, oficiais e particulares, torna-se obrigatório o ensino sobre História e Cultura Afro-Brasileira.</p>
      <p>§ 1º O conteúdo programático a que se refere o caput deste artigo incluirá o estudo da História da África e dos Africanos, a luta dos negros no Brasil, a cultura negra brasileira e o negro na formação da sociedade nacional, resgatando a contribuição do povo negro nas áreas social, econômica e política pertinentes à História do Brasil.</p>
      <p>§ 2º Os conteúdos referentes à História e Cultura Afro-Brasileira serão ministrados no âmbito de todo o currículo escolar, em especial nas áreas de Educação Artística e de Literatura e História Brasileiras.</p>
      <small>BRASIL. Lei n. 10 639/2003. Disponível em: www.gov.br/planalto. Acesso em: 5 maio 2024.</small>`,
    enunciado: `<p>O emprego da norma-padrão é justificado nesse texto</p>`,
    alternativas: [
      { letra: 'A', texto: 'pela especialização de seu público-alvo.' },
      { letra: 'B', texto: 'pela relevância cultural de seu conteúdo.' },
      { letra: 'C', texto: 'pelos contextos pedagógicos em que circula.' },
      { letra: 'D', texto: 'pela importância para os grupos étnico-raciais.' },
      { letra: 'E', texto: 'pelas características do gênero a que pertence.', explicacao: 'Correta! O texto é uma lei (artigo, parágrafos), gênero oficial e normativo que exige linguagem formal, impessoal e precisa — a norma-padrão decorre do próprio gênero.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-014', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 14,
    disciplina: 'Português', conteudo: 'por-4a1', subtopico: 'Texto publicitário', dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-014.webp',
    legenda: 'Disponível em: www.publishnews.com.br. Acesso em: 19 set. 2024.',
    enunciado: `<p>Nesse cartaz publicitário, os recursos verbais e não verbais constroem um argumento que objetiva</p>`,
    alternativas: [
      { letra: 'A', texto: 'divulgar a obra de Fernando Pessoa no Brasil.' },
      { letra: 'B', texto: 'valorizar a realização de eventos literários no país.' },
      { letra: 'C', texto: 'ressaltar o impacto da leitura na vida das pessoas.', explicacao: 'Correta! O jogo “Você entra Fernando. E sai Pessoa.”, a cabeça do visitante cheia de imagens da obra de Pessoa e o slogan “Todo mundo sai melhor do que entrou” mostram que a leitura transforma quem lê.' },
      { letra: 'D', texto: 'fomentar o turismo cultural na cidade de São Paulo.' },
      { letra: 'E', texto: 'evidenciar a influência de Pessoa na literatura brasileira.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-016', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 16,
    disciplina: 'Literatura', subtopico: 'Escolas Literárias', dificuldade: 'media',
    textoApoio: `
      <p><b>Símbolos</b></p>
      <p>Eu e tu, ante a noite e o amplo desdobramento<br>
      do mar, fero, a estourar de encontro à rocha nua...<br>
      Um símbolo descubro aqui, neste momento<br>
      esta rocha, este mar... a minha vida e a tua.</p>
      <p>O mar vem, o mar vai, nele há o gesto violento<br>
      de quem maltrata e, após, se arrepende e recua.<br>
      Como compreendo bem da rocha o sentimento!<br>
      São muito iguais, por certo, a minha mágoa e a sua.</p>
      <p>Contemplo neste quadro a nossa triste vida;<br>
      tu és dúbio mar que, na sua inconsciência,<br>
      tem carinhos de amor e fúrias de demência!</p>
      <p>Eu sou a dor estanque, a dor empedernida,<br>
      sou rocha a emergir de um côncavo de areia,<br>
      imóvel, muda, isenta e alheia ao mar, alheia.</p>
      <small>MACHADO, G. <i>Poesia completa</i>. Rio de Janeiro: Cátedra/MEC, 1978.</small>`,
    enunciado: `<p>Nesse soneto, os traços da estética simbolista são resgatados pelo eu lírico ao</p>`,
    alternativas: [
      { letra: 'A', texto: 'rejeitar as emoções de “amor” e “mágoa”.' },
      { letra: 'B', texto: 'expressar a dubiedade do olhar sobre o outro.' },
      { letra: 'C', texto: 'representar o “eu” e o “tu” como sujeitos volúveis.' },
      { letra: 'D', texto: 'associar a sua inconsciência a elementos da natureza.' },
      { letra: 'E', texto: 'metaforizar o conflito amoroso nas imagens de “mar” e “rocha”.', explicacao: 'Correta! O eu lírico “descobre um símbolo”: o mar (o “tu”, dúbio, violento e arrependido) e a rocha (o “eu”, dor empedernida) representam a relação amorosa — sugestão por símbolos e metáforas, traço do Simbolismo.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-017', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 17,
    disciplina: 'Português', conteudo: 'por-2a3', subtopico: 'Coesão e progressão temática', dificuldade: 'media',
    textoApoio: `
      <p><b>Antes do inverno chegar.</b></p>
      <p>Ela tinha olhinhos brilhantes. Os mesmos de antes. Antes da fome. Antes das 17 mudanças de cidade. Dos sete filhos e dos muitos anos de trabalho dentro e fora de casa.</p>
      <p>Ela fazia ambrosia, bolo de fubá e pedacinhos de queijo. Antes do inverno, ela plantava flores novas e diferentes para nos esperar nas próximas férias de verão.</p>
      <p>Ela tinha o jeito de menina. Menina sapeca, correndo na grama seca do cerrado. O mesmo jeito de antes. Antes do marido (e mesmo com o marido). Antes do cansaço dos anos. Antes da dureza do trato com a terra.</p>
      <p>Ela tinha histórias. Compridas, curtas, divertidas e verdadeiras. Mas isso foi antes. Antes das lembranças se bagunçarem feito bolas coloridas de Natal esperando para serem montadas na árvore.</p>
      <p>Eu era sua neta. Antes do Alzheimer chegar, eu era sua neta. Mas ela é e sempre será minha avó.</p>
      <small>PERSON, C. R. <i>Borboletas no estômago</i>: porque às vezes o título precisa ser adolescente e clichê, já que a vida exige sermos tão adultos. São Paulo: Ed. das Autoras, 2021.</small>`,
    enunciado: `<p>A narradora, ao resgatar memórias da história de vida da avó, faz uso recorrente da locução “antes de”. Esse termo colabora para a progressão temática na medida em que</p>`,
    alternativas: [
      { letra: 'A', texto: 'relaciona eventos ocorridos simultaneamente.' },
      { letra: 'B', texto: 'estabelece uma comparação entre as lembranças.' },
      { letra: 'C', texto: 'ressalta fatos que ressignificam o momento presente.', explicacao: 'Correta! Cada “antes de” marca acontecimentos (a fome, as mudanças, o cansaço, o Alzheimer) que transformaram a avó e dão novo sentido ao presente, até a conclusão: “Mas ela é e sempre será minha avó”.' },
      { letra: 'D', texto: 'sinaliza uma sequência que denota ações consecutivas.' },
      { letra: 'E', texto: 'apresenta uma explicação para as memórias resgatadas.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-020', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 20,
    disciplina: 'Português', conteudo: 'por-1a2', subtopico: 'Patrimônio linguístico', dificuldade: 'facil',
    textoApoio: `
      <p>A característica fundamental no aprendizado das práticas rituais nos candomblés é o processo iniciático e participante. Durante o período de reclusão em terreiros ou rocas, o iniciado passa por uma série de ritos esotéricos (banhos rituais, raspagem da cabeça etc.), ao mesmo tempo em que começa a adquirir um complexo código de símbolos materiais (substâncias, folhas, frutos, raízes etc.) e de gestos associados a um repertório linguístico específico das cerimônias que se desenrolam nos contextos sagrados em geral e em cada terreiro em particular.</p>
      <p>Esse repertório linguístico, genericamente chamado de “língua de santo” na Bahia, compreende uma terminologia religiosa operacional, de caráter mágico-semântico e de aparente forma portuguesa, mas que repousa sobre sistemas lexicais de diferentes línguas africanas que provavelmente foram faladas no Brasil escravocrata, vindo a constituir uma língua ritual, que se acredita pertencer à nação do vodum, do orixá ou do inquice, e não a determinada nação africana política atual.</p>
      <small>Disponível em: https://periodicos.ufba.br. Acesso em: 21 jan. 2024 (adaptado).</small>`,
    enunciado: `<p>A “língua de santo” tem sua importância para o patrimônio linguístico brasileiro por</p>`,
    alternativas: [
      { letra: 'A', texto: 'apresentar uma carga semântica mítica.' },
      { letra: 'B', texto: 'conservar elementos dos falares dos escravizados.', explicacao: 'Correta! O texto diz que a “língua de santo” repousa sobre sistemas lexicais de línguas africanas “que provavelmente foram faladas no Brasil escravocrata” — ela preserva elementos dos falares dos escravizados.' },
      { letra: 'C', texto: 'resgatar expressões portuguesas do período colonial.' },
      { letra: 'D', texto: 'decodificar o ritual religioso dos nossos antepassados.' },
      { letra: 'E', texto: 'favorecer a compreensão do léxico africano contemporâneo.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-021', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 21,
    disciplina: 'Literatura', subtopico: 'Interpretação de Texto Literário', dificuldade: 'media',
    textoApoio: `
      <p>O meu medo é entrar na faculdade e tirar zero eu que nunca fui bom de matemática fraco no inglês eu que nunca gostei de química geografia e português o que é que eu faço agora hein mãe não sei. [...]</p>
      <p>O meu medo é a vida piorar e eu não conseguir arranjar emprego nem de faxineiro nem de porteiro nem de ajudante de pedreiro e o pessoal dizer que o governo já fez o que pôde já pôde o que fez já deu a sua cota de participação hein mãe não sei.</p>
      <p>O meu medo é que mesmo com diploma debaixo do braço andando por aí desiludido e desempregado o policial me olhe de cara feia e eu acabe fazendo uma burrice sei lá uma besteira será que eu vou ter direito a uma cela especial hein mãe não sei.</p>
      <small>FREIRE, M. <i>Contos negreiros</i>. Rio de Janeiro: Record, 2005.</small>`,
    enunciado: `<p>Nesse texto, a reiteração dos medos e das angústias do narrador exprime</p>`,
    alternativas: [
      { letra: 'A', texto: 'inseguranças sobre o futuro familiar.' },
      { letra: 'B', texto: 'dilemas resultantes de seu fracasso escolar.' },
      { letra: 'C', texto: 'incertezas centradas em sua condição social.', explicacao: 'Correta! Os medos repetidos (não conseguir emprego, a “cota de participação” do governo, o olhar do policial mesmo com diploma) revelam a insegurança de um jovem negro e pobre diante do racismo e da exclusão social.' },
      { letra: 'D', texto: 'hesitações em relação à sua formação profissional.' },
      { letra: 'E', texto: 'preocupações com as políticas públicas assistenciais.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-024', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 24,
    disciplina: 'Português', conteudo: 'por-4a1', subtopico: 'Campanha social', dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-024.webp',
    legenda: 'Disponível em: www.unicef.org.br. Acesso em: 15 jan. 2024 (adaptado).',
    enunciado: `<p>Nesse cartaz, a utilização de frases que projetam a vida profissional de duas crianças tem como objetivo</p>`,
    alternativas: [
      { letra: 'A', texto: 'sugerir a arrecadação de fundos para o sustento de povos originários no país.' },
      { letra: 'B', texto: 'sensibilizar a sociedade sobre os benefícios decorrentes do combate ao racismo.', explicacao: 'Correta! Ao imaginar a criança indígena como médico e a negra como advogada, “com o futuro todo pela frente”, o cartaz mostra o que se ganha com uma “infância sem racismo” e convida a sociedade a combater a discriminação.' },
      { letra: 'C', texto: 'indicar a importância da orientação vocacional na educação de crianças no Brasil.' },
      { letra: 'D', texto: 'chamar a atenção sobre a necessidade de ações voltadas para a educação infantil.' },
      { letra: 'E', texto: 'valorizar o trabalho de agências internacionais na luta contra a discriminação racial.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-025', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 25,
    disciplina: 'Português', conteudo: ['por-2a5', 'por-1a4'], subtopico: 'Estratégias argumentativas e humor', dificuldade: 'media',
    textoApoio: `
      <p>Passando por aqui para lembrar algumas palavras, frases e expressões que nos infernizaram em 2023. Inclusive passando por aqui. Se você for proativo, vai achar que é o novo normal. Estarão na sua zona de conforto. Mas, se for reativo como eu, vai achar que é uma narrativa que precisa ser ressignificada.</p>
      <p>É uma questão de empatia. É sobre entregar um discurso mais robusto e empoderado. Sei bem que não tenho lugar de fala para harmonizar certos pontos fora da curva e que preciso aplicar toda a minha resiliência para fazer um realinhamento. O nível de fitness está hoje num sarrafo muito alto.</p>
      <p>O fato é que acho cringe essas falas fora da caixinha. Aliás, falar cringe já é meio cringe. Preciso usar a superação para me reinventar e entender que resenha não tem mais a ver com futebol, é qualquer papo, desde que latente.</p>
      <p>Pensando bem, não é tão difícil. Frases feitas são aquelas que entram por um ouvido e saem pelo outro sem um estágio intermediário no cérebro. A boca fala por conta própria, dispensando-nos de pensar. E não tem problema nisso. Ou as ditas frases se incorporam à língua ou morrem e nascem outras. A língua é assim. Simples assim.</p>
      <small>CASTRO, R. Disponível em: www1.folha.uol.com.br. Acesso em: 3 fev. 2024 (adaptado).</small>`,
    enunciado: `<p>Nesse texto, a estratégia empregada para criticar a constante exposição a palavras, frases e expressões automatizadas é o(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'menção feita à efemeridade de alguns usos linguísticos aleatórios.' },
      { letra: 'B', texto: 'subjetividade marcada pela reflexão que se desenvolve em primeira pessoa.' },
      { letra: 'C', texto: 'efeito estilístico da repetição intencional da palavra “assim” no último parágrafo.' },
      { letra: 'D', texto: 'sedução sugerida pelo envolvimento direto do leitor marcado nos usos de “você” e “sua”.' },
      { letra: 'E', texto: 'humor gerado pelo uso das estruturas linguísticas que são objeto da reflexão desenvolvida.', explicacao: 'Correta! O autor critica os clichês usando os próprios clichês em sequência (“novo normal”, “zona de conforto”, “lugar de fala”, “fora da caixinha”, “cringe”), o que gera humor e ironia.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-026', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 26,
    disciplina: 'Português', conteudo: 'por-1a3', subtopico: 'Variação linguística regional', dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-026.webp',
    legenda: '<i>Revista Língua Portuguesa</i>, n. 31, maio 2008 (adaptado).',
    enunciado: `<p>Esse texto, que apresenta um prato da culinária brasileira, evidencia</p>`,
    alternativas: [
      { letra: 'A', texto: 'valor afetivo nas nomenclaturas.' },
      { letra: 'B', texto: 'variedade linguística entre regiões.', explicacao: 'Correta! O mesmo doce de milho recebe nomes diferentes conforme o lugar (curau, canjica, canjiquinha, corá, papa de milho...), exemplo de variação linguística regional (diatópica).' },
      { letra: 'C', texto: 'disputa regional pelo melhor prato.' },
      { letra: 'D', texto: 'modos de preparo de um mesmo alimento.' },
      { letra: 'E', texto: 'paladares diversificados entre diferentes estados.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-028', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 28,
    disciplina: 'Literatura', subtopico: 'Interpretação de Texto Literário', dificuldade: 'media',
    textoApoio: `
      <p><b>Pequenino morto</b></p>
      <p>Tange o sino, tange, numa voz de choro,<br>
      Numa voz de choro... tão desconsolado...<br>
      No caixão dourado, como em berço de ouro,<br>
      Pequenino, levam-te dormindo... Acorda!<br>
      Olha que te levam para o mesmo lado<br>
      De onde o sino tange numa voz de choro...<br>
      Pequenino, acorda!</p>
      <p>Que caminho triste, e que viagem! Alas<br>
      De ciprestes negros a gemer no vento;<br>
      Tanta boca aberta de famintas valas<br>
      A pedir que as fartem, a esperar que as encham...<br>
      Pequenino, acorda! Recupera o alento,<br>
      Foge da cobiça dessas fundas valas<br>
      A pedir que as encham.</p>
      <small>CARVALHO, V. <i>Poemas e canções</i>. Rio de Janeiro: Saraiva, 1962 (fragmento).</small>`,
    enunciado: `<p>Nesse fragmento do poema, o sentimento de luto adquire contornos expressivos e é intensificado pela</p>`,
    alternativas: [
      { letra: 'A', texto: 'descrição da paisagem de um cemitério.' },
      { letra: 'B', texto: 'recusa do eu lírico à irreversibilidade da morte.', explicacao: 'Correta! O eu lírico insiste, em apelos repetidos, “Pequenino, acorda!”, “Recupera o alento, / Foge [...] dessas fundas valas”: ele se recusa a aceitar que a morte da criança é definitiva, o que intensifica o luto.' },
      { letra: 'C', texto: 'sonoridade dos versos produzida pela pontuação.' },
      { letra: 'D', texto: 'religiosidade evocada como forma de fortalecimento.' },
      { letra: 'E', texto: 'impressão de sonho na construção da estrutura poética.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-029', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 29,
    disciplina: 'Literatura', subtopico: 'Interpretação de Texto Literário', dificuldade: 'media',
    textoApoio: `
      <p>Só entende os corações desse lugar quem mergulha nesse mar a perder de vista e recoberto de cana caiana, cana fita, cana roxa, cana-de-macaco, açúcar, melado, rapadura, aguardente, fumo, mandioca, quiabos, pimentas, moendas, frutas, fruta-pão, sobrados, senzalas, tachos, casa de purgar. Um reino dentro de outro, com tudo o que se tem direito: reis, rainhas, príncipes e princesas, bobos da corte, cortesãos, conselheiros e escravos, muitos escravos. […]</p>
      <p>A corte do massapé, como qualquer outra na história da humanidade, fazia tudo para não deixar escapar nenhum mísero grão dos seus domínios para quem estivesse de fora do seu apertado círculo. Os nomes se repetiam de pai para filho, para sobrinho, para netos e bisnetos, de forma concêntrica e repetitiva, para que não pairasse nenhuma dúvida de que são todos da mesma parentela. As farinhas todas num mesmo saco brasonado.</p>
      <small>CRUZ, E. A. <i>Água de barrela</i>. Rio de Janeiro: Malê, 2018.</small>`,
    enunciado: `<p>Nesse fragmento, o narrador enumera o resultado do trabalho com a terra, o qual, no contexto em que aparece,</p>`,
    alternativas: [
      { letra: 'A', texto: 'espelha a permanência dos privilégios de classe.', explicacao: 'Correta! A riqueza da cana (açúcar, melado, rapadura...) pertence a uma “corte do massapé” que não deixa escapar “nenhum mísero grão” para quem é de fora e repete os nomes de geração em geração: os privilégios da elite se perpetuam.' },
      { letra: 'B', texto: 'oferece um panorama da população do campo.' },
      { letra: 'C', texto: 'mostra os benefícios da fartura na agricultura.' },
      { letra: 'D', texto: 'defende a importância da atividade coletiva.' },
      { letra: 'E', texto: 'valoriza o trabalho ao longo das gerações.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-030', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 30,
    disciplina: 'Português', conteudo: 'por-1a2', subtopico: 'Patrimônio linguístico', dificuldade: 'media',
    textoApoio: `
      <p><b>Uruku<br>Urucum<br>Rocou</b><br>(<i>Bixa orellana</i>)</p>
      <p>Moju, dono da água, não gosta do cheiro de urucum. Mani’ojarã, dono da mandioca, e os donos das outras plantas cultivadas também não. Eles não suportam. Por isso, os Wajãpi se untam de urucum, deixam o rosto vermelho e se perfumam com seu aroma agradável. Além disso, os seres agressores, os jarã (donos) e os espíritos terrestres, gostam do cheiro dos fluidos humanos, do sangue, do suor. Então, o urucum os dissimula, protegendo as pessoas que vão caçar, caminhar pela floresta, que estão sendo perturbadas por espíritos em sonhos ou que estão em resguardo, como os doentes. O seu uso é tão cotidiano que os Wajãpi o plantam na aldeia, para ter sempre pertinho. Como o urucum não tem jarã, não tem problema nenhum em arrancar e usar para pintar.</p>
      <small>STRAPPAZZON, A. I.; SIGOLO, R. P. <i>Jardins da história</i>: medicinas indígenas. Recife: ObservaPICS, 2022.</small>`,
    enunciado: `<p>Esse verbete contribui para a preservação do patrimônio linguístico nacional, pois apresenta uma</p>`,
    alternativas: [
      { letra: 'A', texto: 'explicação de um rito medicinal do povo Wajãpi.' },
      { letra: 'B', texto: 'definição de um termo na perspectiva ancestral indígena.', explicacao: 'Correta! O verbete define o urucum a partir dos saberes e da cosmologia dos Wajãpi (os “donos” das plantas, os espíritos, a proteção), registrando a palavra com o sentido que ela tem para esse povo.' },
      { letra: 'C', texto: 'relação de equivalência entre vocábulos de diferentes línguas indígenas.' },
      { letra: 'D', texto: 'atualização de saberes tradicionais dos povos indígenas brasileiros.' },
      { letra: 'E', texto: 'descrição das propriedades científicas de plantas silvestres.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-031', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 31,
    disciplina: 'Português', conteudo: ['por-1a5', 'por-2a2'], subtopico: 'Sentidos das palavras e tecnologias', dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-031.webp',
    legenda: 'MURRAY, R.; KLIGERMAN, E. <i>Teias de afeto e poesia</i>. Disponível em: https://roseanamurray.com. Acesso em: 5 maio 2024.',
    enunciado: `<p>Nesse texto, a autora aborda diferentes sentidos da palavra “rede” para evidenciar</p>`,
    alternativas: [
      { letra: 'A', texto: 'as formas de comunicação em meios digitais.' },
      { letra: 'B', texto: 'a necessidade de atualização das mídias sociais.' },
      { letra: 'C', texto: 'os conflitos de identidade dos usuários da internet.' },
      { letra: 'D', texto: 'o impacto das tecnologias nas interações humanas.', explicacao: 'Correta! A autora contrapõe a “Rede” digital, que nos convoca para dentro da tela, à rede pendurada no alpendre de um amigo, com cheiro de café e piar de passarinhos: as tecnologias mudam a forma como convivemos.' },
      { letra: 'E', texto: 'os desejos de compartilhar vivências com os amigos.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-032', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 32,
    disciplina: 'Português', conteudo: ['por-4a2', 'por-2a2'], subtopico: 'Crônica e suporte', dificuldade: 'media',
    textoApoio: `
      <p>Muitos pensam que narrativa curta é sinônimo de conto, perdendo de vista gêneros que, por tradição ruim, continuam à margem da nobreza. Acontece que o conto tem uma densidade específica, centrando-se na exemplaridade de um instante da condição humana, sem que essa exemplaridade se refira à valoração moral, já que uma grande mazela pode muito bem exemplificar uma das nossas faces. A crônica não tem essa característica. Conservou a marca do registro circunstancial feito por narrador-repórter que relata um fato para muitos leitores que formam um público determinado.</p>
      <p>Mas que público é esse? Sendo a crônica uma soma de jornalismo e literatura (daí a imagem do narrador-repórter), dirige-se a uma classe que tem preferência pelo jornal em que ela é publicada, o que significa uma espécie de censura ou, pelo menos, de limitação: a ideologia do veículo corresponde ao interesse dos seus consumidores, direcionados pelos proprietários dos periódicos e/ou pelos editores-chefes da redação. Ocorre ainda o limite de espaço, uma vez que a página comporta várias matérias, o que impõe a cada uma delas um número restrito de laudas, obrigando o redator a explorar, da maneira mais econômica possível, o pequeno espaço de que dispõe. É dessa economia que nasce sua riqueza estrutural.</p>
      <small>SÁ, J. <i>A crônica</i>. São Paulo: Ática, 1987 (adaptado).</small>`,
    enunciado: `<p>De acordo com esse texto, o aspecto tecnológico que influencia a composição do gênero crônica advém da</p>`,
    alternativas: [
      { letra: 'A', texto: 'conexão ideológica.' },
      { letra: 'B', texto: 'densidade temática.' },
      { letra: 'C', texto: 'ênfase no público leitor.' },
      { letra: 'D', texto: 'apresentação de uma moral.' },
      { letra: 'E', texto: 'restrição espacial do suporte.', explicacao: 'Correta! O suporte (a página do jornal) comporta várias matérias e impõe um número restrito de laudas, obrigando o cronista a ser econômico — “é dessa economia que nasce sua riqueza estrutural”.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-033', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 33,
    disciplina: 'Português', conteudo: 'por-4a1', subtopico: 'Campanha social', dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-033.webp',
    legenda: 'Disponível em: www.tjdft.jus.br. Acesso em: 15 out. 2024 (adaptado).',
    enunciado: `<p>Esse texto trata de um problema social com o propósito de</p>`,
    alternativas: [
      { letra: 'A', texto: 'divulgar campanha virtual contra casos de feminicídio.' },
      { letra: 'B', texto: 'promover engajamento do setor educacional na luta contra a violência.', explicacao: 'Correta! O texto pergunta “Por que falar sobre violência contra mulheres na escola?” e se liga ao projeto “Maria da Penha vai à escola”: o objetivo é envolver a escola no enfrentamento da violência de gênero.' },
      { letra: 'C', texto: 'comparar o impacto da violência na qualidade de vida de meninas e meninos.' },
      { letra: 'D', texto: 'ressaltar a importância da segurança dos estudantes no ambiente escolar.' },
      { letra: 'E', texto: 'dar visibilidade a estudos e pesquisas do setor de segurança.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-034', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 34,
    disciplina: 'Português', conteudo: 'por-1a4', subtopico: 'Funções da linguagem', dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-034.webp',
    legenda: 'Disponível em: https://revistagalileu.globo.com. Acesso em: 18 jun. 2024 (adaptado).',
    enunciado: `<p>Com base na relação dos elementos não verbais com a frase “VOCÊ (NÃO) ESTÁ SOZINHO”, nessa capa de revista, a função poética fica evidente, pois</p>`,
    alternativas: [
      { letra: 'A', texto: 'essa frase informa sobre os riscos de um determinado comportamento social.' },
      { letra: 'B', texto: 'o conteúdo da mensagem expressa a atitude do enunciador sobre o tema.' },
      { letra: 'C', texto: 'a construção dessa frase possibilita mais de uma interpretação.', explicacao: 'Correta! O “(NÃO)” entre parênteses faz a frase ser lida de dois modos — “você está sozinho” e “você não está sozinho” —; esse trabalho com a forma da mensagem, que cria duplo sentido, é marca da função poética.' },
      { letra: 'D', texto: 'essa frase estabelece um diálogo direto com o leitor.' },
      { letra: 'E', texto: 'a linguagem utilizada volta-se para si mesma.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-035', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 35,
    disciplina: 'Português', conteudo: 'por-3a6', subtopico: 'Estratégias argumentativas', dificuldade: 'media',
    textoApoio: `
      <p>Margot Robbie foi criticada por “não ser bonita o suficiente” para interpretar a Barbie. Recentemente, Paolla Oliveira foi chamada de gorda. Só fico pensando o que serei eu com mais de 50 (também no peso), com a minha aparência comum. O corpo da mulher vive um reality show permanente: é sempre vigiado e fiscalizado, como se fosse domínio público. A mulher que não atender aos estereótipos está sujeita a sofrer penalidades básicas, como distúrbios, obsessões, medo do próprio corpo e, é claro, dietas à base de rúcula. “A dieta é o sedativo político mais potente na história das mulheres”, escreveu Naomi Wolf, em 1991. A regra é não haver singularidade, mascarar a passagem do tempo, imobilizar a beleza (já imaginou como isso seria enfadonho?). O mandamento é obedecer às regras sociais do bom comportamento corporal, “como deve ser”, não nos atos, mas na forma.</p>
      <small>KORICH, B. S. Disponível em: www1.folha.uol.com.br. Acesso em: 22 jan. 2024 (adaptado).</small>`,
    enunciado: `<p>Nesse texto, para introduzir a ideia de que a fiscalização permanente sobre o corpo afeta todas as mulheres, a autora</p>`,
    alternativas: [
      { letra: 'A', texto: 'faz um comentário sobre sua própria imagem.' },
      { letra: 'B', texto: 'destaca avaliações particulares entre parênteses.' },
      { letra: 'C', texto: 'cita um formato de programa influente no segmento da beleza.' },
      { letra: 'D', texto: 'utiliza declaração de uma jornalista como argumento de autoridade.' },
      { letra: 'E', texto: 'enumera críticas à aparência de mulheres consideradas padrões de beleza.', explicacao: 'Correta! O texto abre com as críticas a Margot Robbie (“não ser bonita o suficiente”) e a Paolla Oliveira (“gorda”): se até mulheres tidas como padrão de beleza são fiscalizadas, nenhuma escapa.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-036', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 36,
    disciplina: 'Português', conteudo: 'por-1a3', subtopico: 'Oralidade', dificuldade: 'facil',
    textoApoio: `
      <p>I: o nome do filme é roupa suja ... eu assisti na minha casa ... com minha mãe ... tinha um ... o filme era sobre um homem que colocaram ... trocaram as bolsas ... daí o homem levou uma bolsa cheia de dinheiro sem ele saber que na mala dele ... pensando que era dele mas era errada ... quando ele chegou onde ele ia trabalhar ... tinha uma moça tentando abrir a porta pra fazer entrevista com uns cantores lá que tinham ... daí ele perguntou ... “você tá tentando abrir a porta?”... daí ele ... “não ... não” ... daí ele disse ... “ah ... tá ... sim” ... daí ela ... “é ... e quero fazer uma entrevista” ... daí ele disse ... “você quer entrar ... então pode entrar” ... daí entraram ... daí ficaram lá ... quando ela entrou e queria fazer a entrevista um homem num deixou ... daí a mulher pegou ... subiu onde o homem tava trabalhando ... rapaz né ... onde ele tava trabalhando e ficou lá e dando o show ...</p>
      <small>CUNHA, M. A. F. <i>Corpus discurso &amp; gramática</i>: a língua falada e escrita na cidade de Natal. Disponível em: https://deg.uff.br. Acesso em: 4 dez. 2024 (adaptado).</small>`,
    enunciado: `<p>Nesse texto, a repetição da forma “daí” revela</p>`,
    alternativas: [
      { letra: 'A', texto: 'a necessidade de adequação ao interlocutor.' },
      { letra: 'B', texto: 'a origem regional do locutor.' },
      { letra: 'C', texto: 'a escolaridade do falante.' },
      { letra: 'D', texto: 'uma estratégia presente na linguagem oral.', explicacao: 'Correta! Na fala espontânea, “daí” funciona como marcador de sequência que encadeia os fatos da narrativa enquanto o falante organiza o pensamento — recurso típico da oralidade, não de região ou escolaridade.' },
      { letra: 'E', texto: 'uma ênfase em determinadas partes do discurso.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-037', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 37,
    disciplina: 'Português', conteudo: 'por-2a4', subtopico: 'Intertextualidade', dificuldade: 'facil',
    textoApoio: `
      <p><b>TEXTO I</b></p>
      <p><b>Os Doze Trabalhos de Hércules</b></p>
      <p>Hércules é uma figura lendária da mitologia greco-romana. Ele é frequentemente retratado como um herói de força sobre-humana e coragem, filho de Zeus, o rei dos deuses, e Alcmena, uma mulher mortal. O episódio mais conhecido de Hércules é a realização dos Doze Trabalhos.</p>
      <p>Esses trabalhos são impostos a ele como uma forma de expiação pelos crimes cometidos durante um acesso de loucura, causado pela deusa Hera, esposa de Zeus. Os Doze Trabalhos são: matar o Leão de Nemeia; matar a Hidra de Lerna; capturar a corça de Cerineia; capturar o javali de Erimanto; limpar os estábulos de Áugias; matar as aves do lago Estínfalo; matar o touro de Creta; capturar os cavalos de Diomedes; roubar o cinturão de Hipólita, a rainha das Amazonas; capturar o gado de Gerião; capturar os pomos de ouro do Jardim das Hespérides; capturar o cão de Hades, Cérbero.</p>
      <small>HERTEL, R. Mitologia. Disponível em: https://osmelhoreslivros.com.br. Acesso em: 4 jun. 2025 (adaptado).</small>
      <p><b>TEXTO II</b></p>
      <p><b>Os Doze Trabalhos</b></p>
      <p>O que lhe faltava de estudo lhe sobrava de boa vontade e inteligência. No escritório improvisado na salinha da casa, anunciava seus serviços de bombeiro hidráulico e eletricista. Nas horas vagas entregava panfletos e lavava carros. Quando a cidade fervia com alguma festa, postava-se à entrada vendendo cerveja. Se fosse algum show infantil, cocadas. Aos sábados, era pedreiro e, aos domingos, conservava um jardim de uma mansão, além de tratar da piscina e dos cachorros. Nas férias, abrigava-se na fazenda dos donos da mansão, onde trabalhava como caseiro e motorista. Seu nome: João Antonio da Silva. Mas pode chamar de Hércules.</p>
      <small>FERREIRA, G. V. Os doze trabalhos. Disponível em: www.minicontos.com.br. Acesso em: 15 jul. 2015 (adaptado).</small>`,
    enunciado: `<p>A comparação entre os textos I e II indica que o(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'intertextualidade com o mito apresentado no Texto I é um recurso presente no Texto II.', explicacao: 'Correta! O miniconto retoma o mito dos Doze Trabalhos de Hércules (no título e no fecho “Mas pode chamar de Hércules”) para caracterizar o trabalhador que acumula muitos empregos: é intertextualidade.' },
      { letra: 'B', texto: 'narração de fatos do Texto II sintetiza os acontecimentos retratados no Texto I.' },
      { letra: 'C', texto: 'vocabulário empregado no Texto II é ancorado em conhecimento literário.' },
      { letra: 'D', texto: 'tema do trabalho como reparação é abordado em ambos os textos.' },
      { letra: 'E', texto: 'marcação temporal no passado predomina em ambos os textos.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-038', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 38,
    disciplina: 'Português', conteudo: 'por-2a3', subtopico: 'Coesão referencial', dificuldade: 'dificil',
    textoApoio: `
      <ol class="texto-numerado">
        <li>O mais assustador do meteoro que cruzou o céu da Sibéria e explodiu no ar como</li>
        <li>várias bombas atômicas é que ele chegou sem ser anunciado. Com todas as atenções</li>
        <li>voltadas para o outro asteroide, o que passou de raspão, o asteroide da Sibéria entrou pela</li>
        <li>porta dos fundos sem ser detectado. A desculpa é que era pequeno demais para chamar a</li>
        <li>atenção e por isso os alarmes não funcionaram. Nossa ilusão, até agora, era que qualquer</li>
        <li>detrito espacial que se aproximasse de nós seria identificado e rotulado, e sua trajetória</li>
        <li>calculada até o último milímetro com grande antecedência, o que nos daria tempo para</li>
        <li>preparar o espírito — ou usar nossos cartões de crédito até o limite — no caso da colisão</li>
        <li>com a Terra ser inevitável.</li>
      </ol>
      <small>VERISSIMO, L. F. Disponível em: www.estadao.com.br. Acesso em: 1 mar. 2013.</small>`,
    enunciado: `<p>Com base na organização coesiva desse texto, o(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'oração “que passou de raspão” (l. 3) refere-se ao “meteoro que cruzou o céu da Sibéria” (l. 1).' },
      { letra: 'B', texto: 'expressão “sua trajetória” (l. 6) refere-se ao elemento textual “qualquer detrito espacial” (l. 5-6).', explicacao: 'Correta! O possessivo “sua” em “sua trajetória” retoma “qualquer detrito espacial que se aproximasse de nós”: a trajetória calculada é a do detrito (coesão referencial anafórica).' },
      { letra: 'C', texto: 'palavra “isso” (l. 5) remete ao segmento textual posterior “os alarmes não funcionaram” (l. 5).' },
      { letra: 'D', texto: 'pronome “o” em “o que nos daria tempo” (l. 7) remete a “ou usar nossos cartões de crédito” (l. 8).' },
      { letra: 'E', texto: 'fragmento “o asteroide da Sibéria” (l. 3) introduz um elemento novo no texto.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-039', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 39,
    disciplina: 'Português', conteudo: 'por-2a2', subtopico: 'Tecnologias da comunicação', dificuldade: 'facil',
    textoApoio: `
      <p><b>Do rádio ao podcast</b></p>
      <p>Desde a disseminação do rádio no Brasil, entre as décadas de 1920 e 1930, principalmente no governo de Getúlio Vargas, as pessoas passaram a dedicar uma parte de seu dia para escutar notícias, novelas, músicas e eventos esportivos em aparelhos de som. O radiojornalismo, por sua vez, teve seu pontapé inicial durante a Revolução Constitucionalista (1932) e se desenvolveu durante a Segunda Guerra Mundial (1939-1945).</p>
      <p>Quando a TV surgiu, esperava-se que o rádio fosse totalmente substituído, porém ele se manteve em alta, pois o sinal de televisão não cobria todos os lugares, diferentemente do rádio. Com o surgimento da internet, dos smartphones e de outros dispositivos móveis, o rádio foi incorporado a essas novas tecnologias até o desenvolvimento da web rádio e do podcast, mostrando-se um meio de comunicação versátil e democrático na área jornalística.</p>
      <p>Para um pesquisador da Universidade Federal de Uberlândia (UFU), o rádio não se tornou obsoleto, visto que não deixou de ser consumido e se reinventou com o tempo. “O podcast é uma continuação, uma evolução natural do rádio”, opina.</p>
      <small>ALVES, A.; ALVES, C. Disponível em: https://comunica.ufu.br. Acesso em: 19 abr. 2024 (adaptado).</small>`,
    enunciado: `<p>Ao abordar a trajetória dos meios de comunicação, esse texto propõe uma reflexão sobre a</p>`,
    alternativas: [
      { letra: 'A', texto: 'tecnologia digital e seus desdobramentos no desenvolvimento da televisão.' },
      { letra: 'B', texto: 'evolução da tecnologia digital com o predomínio do podcast sobre o rádio.' },
      { letra: 'C', texto: 'permanência do rádio e sua evolução por meio da tecnologia digital.', explicacao: 'Correta! O texto mostra que o rádio sobreviveu à TV e foi incorporado à internet e aos celulares (web rádio, podcast): ele “não se tornou obsoleto” e “se reinventou com o tempo”.' },
      { letra: 'D', texto: 'influência da televisão sobre os programas de radiojornalismo.' },
      { letra: 'E', texto: 'interferência da tecnologia digital nas interações humanas.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-040', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 40,
    disciplina: 'Literatura', subtopico: 'Interpretação de Texto Literário', dificuldade: 'dificil',
    textoApoio: `
      <p>Desenvolvendo-se nesse meio, é natural que Celina, filha mais velha de D. Adozinda, tivesse seus pequenos <i>flirts</i> com alguns desses rapazes, muito íntimos da casa e trazendo-lhe da cidade presentes de doces, de balas de ovo, de jornais ilustrados ou de frutas.</p>
      <p>As irmãs mais novas iam ao colégio; ela ficava, enchendo o tempo com uns crochês vagarosos, costuras leves, a leitura dos folhetins dos jornais; e o Gilberto, que raramente saía, andava sempre ao seu lado, muito caído por esse tipo um pouco mórbido de menina anêmica [...].</p>
      <p>O Gilberto não valia nada, mas quem sabe se apareceria outro, simplório e sincero como ele? E a filha, com os seus dezessete anos, começava a embaraçá-la um pouco, nesse difícil papel de virgem numa casa de pensão, cheia de rapazes. Ora, o melhor era esperar, dar tempo ao tempo... E o Gilberto e a Celina continuaram a namorar-se, ele cândido, ela dúbia; enquanto o Coronel Juvenato, que deixara a mulher em Sobral para tratar de uma concessão rendosa com os políticos do Rio, ia agora monopolizando, como protetor mais importante, as alegres visitas matinais da viúva, que já lhe levava sempre o café — mas sem flores colhidas no jardim, ainda rociadas de orvalho, porque o cearense não dava para essas coisas de poesia. Era rápido, prático, e não admitia bobagens. Por isso, todos os sábados à noite, ele dizia a D. Adozinda com um tremor lúbrico nas banhas moles da face, os olhinhos vivos pestanejando:</p>
      <p>— A senhora não se esqueça que amanhã é domingo... Leve-me cedo o café, hein?... que eu tenho de ir à missa...</p>
      <p>— Pois não, pois não, Coronel! fique descansado — respondia a viúva do Ferreira, muito atenciosamente, tirando-lhe umas caspas da gola do paletó, com a mão repolhuda.</p>
      <p>Os outros hóspedes riam-se à socapa; e no domingo o café não faltava, bem cedinho...</p>
      <small>DOLORES, C. <i>A luta</i>. Rio de Janeiro: Ímã, s.d.</small>`,
    enunciado: `<p>Nesse trecho, ao explorar a descrição como recurso que demarca impressões e pontos de vista, o narrador cria uma ambiência sugestiva do(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'escárnio relacionado à degradação moral dos indivíduos.', explicacao: 'Correta! A descrição caricata do coronel casado (“tremor lúbrico nas banhas moles da face”), que recebe as visitas matinais da viúva sob o pretexto da missa, e os risos “à socapa” dos hóspedes ridicularizam a hipocrisia e a decadência moral das personagens.' },
      { letra: 'B', texto: 'cenário urbano marcado por condições de insalubridade.' },
      { letra: 'C', texto: 'persistência do sentimentalismo explorado pelos folhetins.' },
      { letra: 'D', texto: 'prática do enriquecimento ilícito visto nas grandes cidades.' },
      { letra: 'E', texto: 'desigualdade de gênero acentuada pela baixa escolarização.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-042', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 42,
    disciplina: 'Português', conteudo: 'por-1a3', subtopico: 'Variedades linguísticas', dificuldade: 'media',
    textoApoio: `
      <p><b>TRADUZINDO O JURIDIQUÊS</b></p>
      <p>“Denego a liminar pleiteada na exordial, inobstante após a oitiva da parte adversa e da dilação probatória possa lograr alcançar um outro epílogo para o deslinde da <i>quaestio sub examine</i>.”</p>
      <p><b>TRADUÇÃO</b><br>Não atendo, por ora, a liminar requerida na petição inicial, ainda que possa chegar a uma outra conclusão após ouvir a outra parte e avaliar as provas produzidas.</p>
      <p>Proposta de emenda à Constituição 269 de 2013. Aplica-se aos Governadores e Prefeitos o Regime Geral de Previdência Social, vedada a concessão graciosa, após o término do mandato, de vantagem pecuniária, verba de representação, pensão ou subsídio.</p>
      <p><b>TRADUÇÃO</b><br>Torna-se proibido pagar benefícios vitalícios para ex-prefeitos e ex-governadores.</p>
      <small><i>Superinteressante</i>, n. 322, ago. 2013 (adaptado).</small>`,
    enunciado: `<p>Nesse texto, contribui para a construção da ironia a tradução das passagens escritas em “juridiquês” para uma variedade</p>`,
    alternativas: [
      { letra: 'A', texto: 'padrão, que alcança o público em geral.', explicacao: 'Correta! As “traduções” reescrevem o juridiquês na norma-padrão comum, compreensível para qualquer leitor; a ironia está em mostrar que a linguagem rebuscada do Direito precisa ser “traduzida” para o próprio português.' },
      { letra: 'B', texto: 'histórica, que registra a evolução das leis.' },
      { letra: 'C', texto: 'coloquial, que reproduz as relações sociais cotidianas.' },
      { letra: 'D', texto: 'erudita, que resgata a origem latina da língua portuguesa.' },
      { letra: 'E', texto: 'técnica, que facilita a circulação de informações no sistema judiciário.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-043', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 43,
    disciplina: 'Português', conteudo: 'por-4a2', subtopico: 'Reportagem', dificuldade: 'facil',
    textoApoio: `
      <p>Em 1995, os Jenipapo-Kanindé quebraram a tradição da sucessão masculina e nomearam Maria de Lourdes da Conceição Alves como sua líder. Desde então, a Cacique Pequena guia o povo em grandes batalhas pelo direito a terra, educação, saúde e cidadania. Hoje, a anciã de 73 anos prepara duas filhas para lhe sucederem quando ela “tombar e pai Tupã a levar”.</p>
      <p>Hoje, 129 famílias do município de Aquiraz são reconhecidas pela Fundação Nacional dos Povos Indígenas (Funai) como indígenas, principal luta de Pequena para o seu povo desde o início. “Em 1995, fui a Brasília e tive a oportunidade de conversar com o presidente da Funai. Pedi que mandasse o povo dele na aldeia para fazer o estudo da nossa mãe-terra e de nós”. Dois anos depois, vieram os antropólogos, que concluíram: “Nós era índio sim!”, diz ela.</p>
      <p>Há cerca de oito anos, Pequena adoeceu e ficou entre a vida e a morte. Nesse momento, precisou escolher, entre os 16 filhos, quem assumiria sua missão quando partisse. Reunida, a família decidiu sobre a sucessão. “Disseram que, como eu era a primeira cacique mulher do Ceará, acharam melhor eu colocar duas filhas”.</p>
      <small>Disponível em: www.sesc-ce.com.br. Acesso em: 15 set. 2024 (adaptado).</small>`,
    enunciado: `<p>Ao abordar a realidade da etnia Jenipapo-Kanindé, essa reportagem cumpre uma função social quando destaca o(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'quantidade de famílias indígenas em Aquiraz.' },
      { letra: 'B', texto: 'força da tradição nas comunidades indígenas.' },
      { letra: 'C', texto: 'estudo sobre a demarcação das terras indígenas.' },
      { letra: 'D', texto: 'protagonismo feminino na linha sucessória desse povo.', explicacao: 'Correta! A reportagem destaca que o povo quebrou a tradição da sucessão masculina ao escolher a Cacique Pequena, primeira cacique mulher do Ceará, que agora prepara duas filhas para sucedê-la.' },
      { letra: 'E', texto: 'reconhecimento dessa comunidade pelo governo brasileiro.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-044', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 44,
    disciplina: 'Português', conteudo: 'por-3a6', subtopico: 'Estratégias argumentativas', dificuldade: 'facil',
    textoApoio: `
      <p><b>Porque ler para crianças é um ato de amor</b></p>
      <p>Parece que, com o avanço da tecnologia, os livros têm enfrentado cada vez mais concorrência. Por isso, é nossa função lembrar a importância da leitura em todas as fases da vida, mas principalmente na primeira infância (entre 0 e 5 anos), quando o desenvolvimento das crianças acontece de forma mais intensa.</p>
      <p>O ato de ler com uma criança ou ler para ela vai muito além de apenas aproveitar uma história em conjunto. É um laço de amorosidade, porque oferece a ela ferramentas que vão ajudá-la a crescer forte e independente.</p>
      <p>Se você precisa de uma motivação extra para entrar nessa rede de incentivo, fique ligado nos motivos a seguir. Adotar esse hábito em casa:</p>
      <p>1 – cria um laço emocional com a criança;<br>
      2 – ajuda no desenvolvimento das capacidades cognitivas;<br>
      3 – ensina sobre o mundo;<br>
      4 – incentiva o processamento de informações e a imaginação.</p>
      <small>Disponível em: www.huffpost.com.br. Acesso em: 22 maio 2018 (adaptado).</small>`,
    enunciado: `<p>Para persuadir o interlocutor sobre a importância de ler para as crianças, esse texto recorre à estratégia de</p>`,
    alternativas: [
      { letra: 'A', texto: 'propor uma condição aos pais, pelo emprego da conjunção “se”.' },
      { letra: 'B', texto: 'relativizar a opinião apresentada pelo autor, com o uso de “Parece que”.' },
      { letra: 'C', texto: 'empregar uma linguagem metafórica, com o uso da expressão “laço de amorosidade”.' },
      { letra: 'D', texto: 'enumerar razões pertinentes a esse ato, como no exemplo “ensina sobre o mundo”.', explicacao: 'Correta! Para convencer o leitor, o texto lista quatro motivos numerados para ler para as crianças (laço emocional, capacidades cognitivas, ensinar sobre o mundo, imaginação).' },
      { letra: 'E', texto: 'implicar o autor do texto como corresponsável pela campanha, pelo uso de “é nossa função”.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-045', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 45,
    disciplina: 'Português', conteudo: ['por-1a4', 'por-4a4'], subtopico: 'Texto verbal e não verbal', dificuldade: 'facil',
    legendaAcima: 'A artista Marija Tiurina criou uma série chamada <i>Palavras intraduzíveis</i>, com diversas ilustrações detalhadas que transmitem o sentido desses vocábulos, que nenhuma palavra única em outras línguas pode descrever.',
    imagem: 'imagens/estudo/enem-2025-045.webp',
    legenda: 'ROMANZOTI, N. 9 desenhos que ilustram palavras sem tradução para o português. Disponível em: https://hypescience.com. Acesso em: 10 jun. 2019 (adaptado).',
    enunciado: `<p>O uso do texto verbal nesse desenho assume a função de</p>`,
    alternativas: [
      { letra: 'A', texto: 'descrever de forma técnica a ilustração.' },
      { letra: 'B', texto: 'destacar os múltiplos sentidos do verbete.' },
      { letra: 'C', texto: 'explicar o significado da expressão ilustrada.', explicacao: 'Correta! O texto verbal no desenho apresenta a palavra árabe “Gufra” e diz o que ela significa (“a quantidade de água que pode ser segurada com as mãos”), completando a ilustração que tenta representar esse sentido.' },
      { letra: 'D', texto: 'apresentar termos equivalentes em outras línguas.' },
      { letra: 'E', texto: 'apontar para a dificuldade de compreensão do termo.' },
    ],
    gabarito: 'C',
  },

  /* ===================== CIÊNCIAS HUMANAS (46 a 90): HISTÓRIA E GEOGRAFIA ===================== */
  {
    id: 'enem-2025-046', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 46,
    disciplina: 'Geografia', conteudo: ['geo-4u6', 'geo-c3'], subtopico: 'União Europeia e Bálcãs', dificuldade: 'facil',
    textoApoio: `
      <p><b>Macedônia do Norte</b><br><b>Acordo entra em vigor e país muda oficialmente de nome</b></p>
      <p>Entrou em vigor, em 2019, o acordo que determina a mudança de nome da Macedônia para Macedônia do Norte. A troca põe fim — ao menos por enquanto — no impasse entre essa antiga república da Iugoslávia e a vizinha Grécia. O governo grego se opunha ao uso do nome Macedônia pelo novo país vizinho porque a Grécia tem uma província no norte com o mesmo nome. Por causa desse impasse, a Grécia bloqueou as negociações de adesão de seu vizinho à União Europeia. Depois de negociações, as duas partes chegaram a um acordo.</p>
      <small>Disponível em: https://g1.globo.com. Acesso em: 7 nov. 2021 (adaptado).</small>`,
    enunciado: `<p>Para o país originado da antiga Iugoslávia, a mudança de nome é uma estratégia política para</p>`,
    alternativas: [
      { letra: 'A', texto: 'criar a moeda própria.' },
      { letra: 'B', texto: 'proteger a cultura local.' },
      { letra: 'C', texto: 'subjugar a minoria étnica.' },
      { letra: 'D', texto: 'expandir o território nacional.' },
      { letra: 'E', texto: 'intensificar a integração regional.', explicacao: 'Correta! A Grécia bloqueava a entrada do vizinho na União Europeia por causa do nome; ao mudar para Macedônia do Norte, o país destrava as negociações de adesão ao bloco, isto é, busca a integração regional.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-047', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 47,
    disciplina: 'Geografia', conteudo: 'geo-3u1', subtopico: 'Massas de ar', dificuldade: 'media',
    legendaAcima: 'Concentração de CO<sub>2</sub> por queimadas entre África e Brasil em 30 de agosto de 2019',
    imagem: 'imagens/estudo/enem-2025-047.webp',
    legenda: 'Disponível em: https://noticias.uol.com.br. Acesso em: 10 out. 2019 (adaptado).',
    enunciado: `<p>A dispersão espacial do problema ambiental representado na imagem de satélite é explicada pela seguinte característica geográfica:</p>`,
    alternativas: [
      { letra: 'A', texto: 'Amplitude das temperaturas médias.' },
      { letra: 'B', texto: 'Homogeneidade da insolação anual.' },
      { letra: 'C', texto: 'Ocorrência de chuvas de relevo.' },
      { letra: 'D', texto: 'Circulação de massas de ar.', explicacao: 'Correta! A fumaça e o CO<sub>2</sub> das queimadas se espalham por grandes áreas, atravessando continentes e oceanos, porque são transportados pela circulação atmosférica (ventos e massas de ar).' },
      { letra: 'E', texto: 'Ausência de frentes frias.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-049', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 49,
    disciplina: 'História', conteudo: ['his-2a1', 'his-2a4'], subtopico: 'Comércio mediterrâneo — Veneza', dificuldade: 'facil',
    legendaAcima: 'TEXTO I',
    imagem: 'imagens/estudo/enem-2025-049.webp',
    legenda: 'CARLEVARIS, L. <i>La piazetta</i> (detalhe). Óleo sobre tela, 49 × 41 cm. Ashmolean Museum, Oxford, 1729. Disponível em: www.meinsterart.de. Acesso em: 13 dez. 2017.',
    textoApoio: `
      <p><b>TEXTO II</b></p>
      <p>Antigo centro da economia mundo-europeia do século XV, no final do século XVII e início do século XVIII, Veneza ainda era uma cidade cosmopolita onde orientais podiam sentir-se em casa.</p>
      <small>BRAUDEL, F. <i>O tempo do mundo</i>. São Paulo: Martins Fontes, 1979 (adaptado).</small>`,
    enunciado: `<p>Qual elemento da condição cosmopolita de Veneza na Idade Moderna está explicitado nos textos?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Avanço do ensino laico.' },
      { letra: 'B', texto: 'Conquista das terras da América.' },
      { letra: 'C', texto: 'Integração do comércio mediterrâneo.', explicacao: 'Correta! Veneza foi centro do comércio entre o Oriente e a Europa pelo Mediterrâneo; a pintura (com mercadores de várias origens) e o texto (orientais “em casa”) mostram essa integração comercial que a tornava cosmopolita.' },
      { letra: 'D', texto: 'Popularização do pensamento humanista.' },
      { letra: 'E', texto: 'Desenvolvimento das corporações de ofício.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-052', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 52,
    disciplina: 'História', conteudo: ['his-4a1', 'his-c1'], subtopico: 'Gripe espanhola e Primeira Guerra', dificuldade: 'media',
    textoApoio: `
      <p>Não há consenso em torno do nome dado à pandemia, tendo, desde o seu início, sido chamada de gripe espanhola provavelmente por causa da desinformação em torno da notícia sobre sua origem. Uma das hipóteses deriva da neutralidade espanhola na Primeira Guerra Mundial e a consequente liberdade de imprensa naquele país, maior do que nos demais países envolvidos no conflito. Hoje existe o consenso entre virologistas e epidemiologistas de que o vírus da gripe não se originou na Espanha. Entretanto, dificilmente essa pandemia deixará de ser conhecida como gripe espanhola.</p>
      <small>KLAJMAN, C. A gripe sob a ótica da história ecológica. <i>História Revista</i>, n. 3, set.-dez. 2015 (adaptado).</small>`,
    enunciado: `<p>De acordo com o texto, a denominação recebida pela pandemia do começo do século XX foi determinada pelo(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'precariedade dos conhecimentos da medicina militar.' },
      { letra: 'B', texto: 'retaliação da tríplice aliança aos soldados desertores.' },
      { letra: 'C', texto: 'controle dos relatos oriundos de campos de batalha.', explicacao: 'Correta! Os países em guerra censuravam as notícias (inclusive sobre a doença); a Espanha, neutra, tinha imprensa livre e noticiou a pandemia, que acabou associada a ela.' },
      { letra: 'D', texto: 'emprego de armas biológicas em confrontos transnacionais.' },
      { letra: 'E', texto: 'circulação de refugiados contaminados em áreas conflagradas.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-054', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 54,
    disciplina: 'Geografia', conteudo: ['geo-1u5', 'geo-3u5'], subtopico: 'Migrações e espaço urbano', dificuldade: 'media',
    textoApoio: `
      <p>A ideia de êxodo urbano assume ares caricaturais. Pega a mais reduzida parte da pirâmide social e projeta para todos seus desejos defensivos. Se o êxodo urbano for compreendido como aquisição de uma segunda residência, então não estamos, de fato, falando de êxodo, mas da reversão de um excedente de renda de uma pequena fração da elite para as franjas metropolitanas. Se o êxodo urbano for compreendido como retorno aos municípios menos povoados, então não estamos, de fato, falando de êxodo urbano, mas de um movimento de migração de pessoas cuja estabilidade no emprego e a elevada renda lhes permitem simular, nas ilhas urbanas do interior agropecuário, a vida urbana metropolitana.</p>
      <small>ARRAIS, T. A. O distópico êxodo urbano. <i>Revista e</i>, n. 11, maio 2021 (adaptado).</small>`,
    enunciado: `<p>A crítica apresentada no texto evidencia uma dinâmica socioespacial marcada pela</p>`,
    alternativas: [
      { letra: 'A', texto: 'valorização de tradições rurais.' },
      { letra: 'B', texto: 'redução de plantações agrícolas.' },
      { letra: 'C', texto: 'estagnação de atividades comerciais.' },
      { letra: 'D', texto: 'precariedade de infraestruturas rodoviárias.' },
      { letra: 'E', texto: 'seletividade de deslocamentos populacionais.', explicacao: 'Correta! O autor mostra que o suposto “êxodo urbano” envolve só uma pequena fração da elite, com renda alta e emprego estável — um deslocamento seletivo, não um movimento de toda a população.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-056', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 56,
    disciplina: 'Geografia', conteudo: ['geo-3u3', 'geo-4u4'], subtopico: 'Rios e transporte hidroviário', dificuldade: 'facil',
    textoApoio: `
      <p>Por séculos, o Rio Reno tem sido uma rota de navegação confiável, ajudando a criar gigantes fabris ao longo de suas margens. No entanto, esses dias parecem estar no fim, pois o nível da água tem diminuído regularmente, o que impede a navegação fluvial do final do verão até o outono. Isso mostra como a crise climática atinge as economias dos países ricos.</p>
      <small>Disponível em: www.estadao.com.br. Acesso em: 10 ago. 2023 (adaptado).</small>`,
    enunciado: `<p>Qual é o efeito econômico do problema ambiental apresentado no texto?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Supressão da extração de minério.' },
      { letra: 'B', texto: 'Intensificação da atividade de pesca.' },
      { letra: 'C', texto: 'Encarecimento da logística de transporte.', explicacao: 'Correta! Com o nível baixo do Reno, as barcaças não navegam (ou levam menos carga), e as indústrias precisam usar modais mais caros, como o rodoviário e o ferroviário: o transporte encarece.' },
      { letra: 'D', texto: 'Inviabilização da agricultura de subsistência.' },
      { letra: 'E', texto: 'Sucateamento da indústria de transformação.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-057', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 57,
    disciplina: 'Geografia', conteudo: ['geo-1u1', 'geo-1u5'], subtopico: 'Lugar e migração', dificuldade: 'facil',
    textoApoio: `
      <p>Dos 10 aos 15 anos de idade, Virgínia adorava acompanhar seu pai, aos domingos, naquela sinestésica Feira de São Cristóvão (RJ), talvez por ser o maior elo que ela experimentava com o mundo exterior à sua casa e, visto assim e agora, tão íntimo e próximo de algo que ela ainda não sabia, mas que seria, no futuro, a sua própria casa: a Paraíba. Dona Didi costurava, sob medida, camisas sociais, bermudas, shorts, vestidos, saias, sempre em casa e rodeada pelos quatro filhos pequenos do casal, desdobrando-se para dar conta de toda a responsabilidade sem trégua que isso demandava.</p>
      <small>PASSOS, M. C. P. et al. apud SCARELI, G. A máquina de costura e os fios da memória. <i>Revista Brasileira de Pesquisa (Auto) Biográfica</i>, n. 18, maio-ago. 2021 (adaptado).</small>`,
    enunciado: `<p>Os itinerários afetivos e socioespaciais mencionados no texto associam-se à vida dos personagens por apresentarem</p>`,
    alternativas: [
      { letra: 'A', texto: 'histórias conectadas e recordações do lugar.', explicacao: 'Correta! As memórias de Virgínia ligam a Feira de São Cristóvão (reduto nordestino no Rio) à Paraíba, que seria sua casa, e à mãe costurando em casa: trajetórias familiares conectadas por lembranças afetivas dos lugares vividos.' },
      { letra: 'B', texto: 'direitos trabalhistas e produção industrial.' },
      { letra: 'C', texto: 'preconceitos linguísticos e dinâmicas territoriais.' },
      { letra: 'D', texto: 'lembranças fabris e discriminação dos operários.' },
      { letra: 'E', texto: 'experiências profissionais e segregação regional.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-058', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 58,
    disciplina: 'História', conteudo: 'his-2b6', subtopico: 'Lei Saraiva (1881)', dificuldade: 'media',
    textoApoio: `
      <p>Em 1872, havia mais de 1 milhão de votantes, correspondentes a 13% da população livre. Em 1886, votaram nas eleições parlamentares pouco mais de 100 mil eleitores, ou 0,8% da população total. Houve um corte de quase 90% do eleitorado. O dado é chocante, sobretudo se lembrarmos que a tendência de todos os países europeus da época era na direção de ampliar os direitos políticos. O mais grave é que esse retrocesso foi duradouro. A Proclamação da República não alterou o quadro.</p>
      <small>CARVALHO, J. M. <i>Cidadania no Brasil</i>. Rio de Janeiro: Civilização Brasileira, 2002 (adaptado).</small>`,
    enunciado: `<p>De acordo com o texto, a participação no processo eleitoral brasileiro após a Reforma de 1881 sofreu uma variação que se explica pela</p>`,
    alternativas: [
      { letra: 'A', texto: 'restrição de gênero.' },
      { letra: 'B', texto: 'exclusão de imigrantes.' },
      { letra: 'C', texto: 'comprovação de domicílio.' },
      { letra: 'D', texto: 'exigência da alfabetização.', explicacao: 'Correta! A Lei Saraiva (1881) instituiu o voto direto e proibiu o voto dos analfabetos, a maioria da população; por isso o eleitorado caiu quase 90%. A Constituição de 1891 manteve a exclusão.' },
      { letra: 'E', texto: 'obrigatoriedade do sufrágio.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-059', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 59,
    disciplina: 'Geografia', conteudo: ['geo-4u3', 'geo-4u2'], subtopico: 'Energia hidrelétrica e desmatamento', dificuldade: 'media',
    textoApoio: `
      <p>Pela falta de chuvas, a geração de energia eólica, solar e térmica atingiu níveis recordes em agosto de 2021, quando as hidrelétricas ficaram com cerca de 50% do total. Para um professor da Universidade Federal da Bahia, essa queda não é uma surpresa. “Não aconteceu de uma hora para outra. Se olharmos o mapa do Brasil, um dos grandes provedores de água é a Floresta Amazônica. Se você diminui a floresta, diminui a quantidade de água que vai para a atmosfera”, explica.</p>
      <small>BORGES, T. O fantasma do apagão. Disponível em: www.correio24horas.com.br. Acesso em: 9 out. 2021 (adaptado).</small>`,
    enunciado: `<p>De acordo com o texto, a dificuldade na produção de energia é causada pela alteração da(s)</p>`,
    alternativas: [
      { letra: 'A', texto: 'variável em pesquisas meteorológicas.' },
      { letra: 'B', texto: 'paisagem em locais estratégicos.', explicacao: 'Correta! O desmatamento da Amazônia (alteração da paisagem) reduz a evapotranspiração e a umidade levada pelos “rios voadores”, diminuindo as chuvas que abastecem os reservatórios das hidrelétricas.' },
      { letra: 'C', texto: 'demandas em regiões industriais.' },
      { letra: 'D', texto: 'metas em acordos climáticos.' },
      { letra: 'E', texto: 'geologia em áreas naturais.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-063', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 63,
    disciplina: 'Geografia', conteudo: ['geo-2u2', 'geo-2u3'], subtopico: 'Agronegócio', dificuldade: 'facil',
    legendaAcima: 'Produção e exportações brasileiras no ranking mundial em 2019',
    imagem: 'imagens/estudo/enem-2025-063.webp',
    legenda: 'Fonte: USDA, 2020. Elaboração CNA.<br>*Fatia de participação na produção mundial.<br>Disponível em: www.cnabrasil.org.br. Acesso em: 15 out. 2021.',
    enunciado: `<p>Qual condição favoreceu o cenário produtivo exposto na figura?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Redução do poder de compra da população brasileira.' },
      { letra: 'B', texto: 'Ampliação da entrada do capital agroindustrial no campo.', explicacao: 'Correta! O Brasil está entre os maiores produtores e exportadores mundiais de commodities graças à modernização do campo com investimento do capital agroindustrial (máquinas, insumos, biotecnologia, grandes empresas).' },
      { letra: 'C', texto: 'Diminuição do uso de trabalho especializado na agropecuária.' },
      { letra: 'D', texto: 'Valorização da moeda nacional em relação ao dólar americano.' },
      { letra: 'E', texto: 'Inclusão de pequenas propriedades em cultivos de subsistência.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-064', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 64,
    disciplina: 'História', conteudo: 'his-4b1', subtopico: 'Crise do governo Vargas (1954)', dificuldade: 'media',
    textoApoio: `
      <p>Em toda a sua carreira política, Getúlio Vargas sempre contara com o seu talento pessoal de persuasão e poder de manipulação. Agora, porém, seus amigos começavam a perceber que ele parecia envelhecido e cansado. A principal figura da oposição, concordavam eles, era o belicoso jornalista Carlos Lacerda. Se ao menos pudessem “removê-lo” do cenário político, talvez Vargas se salvasse da situação. Esses seguidores decidiram tomar o assunto em suas próprias mãos com o atentado da Rua Tonelero.</p>
      <small>SKDIMORE, T. <i>Brasil</i>: de Getúlio a Castelo. Rio de Janeiro: Paz e Terra, 2003 (adaptado).</small>`,
    enunciado: `<p>Nesse contexto, a ação dos aliados de Getúlio Vargas teve como consequência imediata o(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'intensificação dos ataques do grupo udenista.', explicacao: 'Correta! O atentado da Rua Tonelero (1954) feriu Lacerda e matou o major Rubens Vaz; a UDN e a imprensa oposicionista intensificaram os ataques e exigiram a renúncia de Vargas, que se suicidou dias depois.' },
      { letra: 'B', texto: 'intervenção dos sindicatos no conflito partidário.' },
      { letra: 'C', texto: 'mobilização da sociedade na defesa do governo.' },
      { letra: 'D', texto: 'abandono da censura aos meios de comunicação.' },
      { letra: 'E', texto: 'apoio dos parlamentares aos candidatos oposicionistas.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-067', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 67,
    disciplina: 'Geografia', conteudo: 'geo-2u2', subtopico: 'Questão agrária', dificuldade: 'media',
    textoApoio: `
      <p>Do ponto de vista administrativo e judicial, a desapropriação da fazenda Cabaceiras, localizada na região sul do estado do Pará, é a primeira da história motivada pelo desrespeito à função social de um imóvel rural, como prevê a Constituição Federal de 1988, em decorrência da exploração de “trabalho em condições análogas à escravidão”. Na realidade, essa desapropriação não se deu apenas pela ocorrência de relações de trabalho extremamente degradantes, mas também pelas graves infrações ambientais verificadas na fazenda — o que também configura um ataque à função social da terra, de acordo com os preceitos constitucionais.</p>
      <small>BARROS, C. J. A conquista da fazenda Cabaceiras. Disponível em: www.agb.org.br. Acesso em: 15 maio 2023.</small>`,
    enunciado: `<p>O texto considera a promoção da justiça como um mecanismo de</p>`,
    alternativas: [
      { letra: 'A', texto: 'manutenção da ordem agrária.' },
      { letra: 'B', texto: 'legitimação da propriedade privada.' },
      { letra: 'C', texto: 'hegemonia das classes dominantes.' },
      { letra: 'D', texto: 'revisão das desigualdades econômicas.', explicacao: 'Correta! A desapropriação por descumprimento da função social da terra (trabalho escravo e crimes ambientais) usa a lei para destinar a terra à reforma agrária, enfrentando a concentração fundiária e as desigualdades no campo.' },
      { letra: 'E', texto: 'homogeneização da distribuição fundiária.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-068', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 68,
    disciplina: 'Geografia', conteudo: 'geo-3u5', subtopico: 'Urbanização', dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-068.webp',
    legenda: 'Salvador, capital do estado da Bahia.<br>Disponível em: https://mundoeducacao.uol.com.br. Acesso em: 20 out. 2023.',
    enunciado: `<p>A análise dos elementos presentes na fotografia permite identificar qual característica socioespacial?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Estagnação da especulação imobiliária.' },
      { letra: 'B', texto: 'Conservação da arquitetura colonial.' },
      { letra: 'C', texto: 'Implantação de moradias populares.' },
      { letra: 'D', texto: 'Predomínio da atividade comercial.' },
      { letra: 'E', texto: 'Processo de verticalização urbana.', explicacao: 'Correta! A fotografia mostra grande concentração de prédios altos na paisagem de Salvador, o que caracteriza a verticalização urbana, ligada à valorização do solo e à especulação imobiliária.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-069', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 69,
    disciplina: 'História', conteudo: 'his-2a1', subtopico: 'Cruzadas', dificuldade: 'media',
    textoApoio: `
      <p>A difusão pelos cônegos do ideal apostólico, bem como a influência dos eremitas e dos pregadores errantes que na sua esteira propagavam temas evangélicos, contribuíram para fazer nascer, entre os fiéis, o desejo de se erguerem ao nível espiritual do clero e de obterem a sua salvação, sem que para isso tivessem de renunciar ao seu estado. Pela primeira vez, a Igreja entreabria as portas da graça em benefício da totalidade dos fiéis, colocando, como única condição, a sua partida para o Oriente, a fim de aí lutarem contra os inimigos de Cristo.</p>
      <small>VAUCHEZ, A. <i>A espiritualidade da Idade Média Ocidental, séc. VIII-XIII</i>. Lisboa: Estampa, 1995.</small>`,
    enunciado: `<p>Conforme o texto, no imaginário dos fiéis cristãos do período medieval, a salvação era alcançada por meio das</p>`,
    alternativas: [
      { letra: 'A', texto: 'palavras escritas.' },
      { letra: 'B', texto: 'práticas litúrgicas.' },
      { letra: 'C', texto: 'ações voluntárias.', explicacao: 'Correta! A salvação era oferecida a quem partisse por vontade própria para o Oriente para lutar contra os “inimigos de Cristo” — a adesão voluntária às Cruzadas, sem precisar entrar para o clero.' },
      { letra: 'D', texto: 'ideias messiânicas.' },
      { letra: 'E', texto: 'celebrações coletivas.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-070', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 70,
    disciplina: 'Geografia', conteudo: ['geo-2u1', 'geo-4u1'], subtopico: 'Intemperismo e relevo cárstico', dificuldade: 'media',
    textoApoio: `
      <p>Nos Estados Unidos, um hotel perto de um parque foi engolido por uma enorme cratera. E não é a primeira vez que esse tipo de incidente acontece na Flórida. Em minutos, uma ala inteira do hotel era engolida pela cratera de 30 metros de diâmetro e cinco de profundidade. O diretor do resort em Clermont, perto dos parques temáticos da Flórida, diz que o prédio tinha 15 anos, e que até então o solo nunca havia apresentado problemas. Os afundamentos são um fenômeno comum na Flórida por causa das formações de calcário e argila no subsolo, mas às vezes chuvas fortes, ou a drenagem do solo para construção, acabam contribuindo para o surgimento desses buracos.</p>
      <small>Disponível em: http://g1.globo.com. Acesso em: 10 dez. 2024 (adaptado).</small>`,
    enunciado: `<p>A situação de desmoronamento do solo descrita no texto origina-se da</p>`,
    alternativas: [
      { letra: 'A', texto: 'cristalização da estrutura geológica.' },
      { letra: 'B', texto: 'ação do intemperismo químico.', explicacao: 'Correta! A água ácida da chuva dissolve o calcário do subsolo (intemperismo químico por dissolução), formando cavidades que desabam e originam as dolinas (sinkholes).' },
      { letra: 'C', texto: 'recomposição da mata ciliar.' },
      { letra: 'D', texto: 'acumulação de sedimentos orgânicos.' },
      { letra: 'E', texto: 'impermeabilização da superfície ocupada.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-071', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 71,
    disciplina: 'História', conteudo: 'his-4a5', subtopico: 'Muro de Berlim e memória', dificuldade: 'facil',
    textoApoio: `
      <p>Moradores de Berlim protestaram contra a demolição de um trecho do muro que dividiu a cidade durante quase três décadas. Tratado como patrimônio cultural e histórico da cidade, o East Side Gallery, repleto de grafites emblemáticos, está na mira de uma construtora que pretende levantar um condomínio de luxo às margens do Rio Spree, que corta a cidade.</p>
      <small>ALMEIDA, R. Alemães impedem demolição de último trecho original do muro de Berlim. Disponível em: http://operamundi.uol.com.br. Acesso em: 2 fev. 2021 (adaptado).</small>`,
    enunciado: `<p>A demolição do símbolo histórico mencionado representa uma</p>`,
    alternativas: [
      { letra: 'A', texto: 'violação da memória coletiva.', explicacao: 'Correta! O trecho do Muro de Berlim é patrimônio histórico, símbolo da divisão da cidade na Guerra Fria; demoli-lo para um condomínio apagaria um lugar de memória da coletividade.' },
      { letra: 'B', texto: 'alteração das fronteiras políticas.' },
      { letra: 'C', texto: 'adesão à arquitetura neoclássica.' },
      { letra: 'D', texto: 'negação das influências orientais.' },
      { letra: 'E', texto: 'reorganização da mobilidade urbana.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-073', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 73,
    disciplina: 'História', conteudo: 'his-1b2', subtopico: 'Povos indígenas e conquista', dificuldade: 'facil',
    textoApoio: `
      <p>Entre esses preconceitos estava o canibalismo. A prática não era, porém, uma mentira, uma invenção europeia, mas um ritual controlado por regras. Entre os tupis, por exemplo, os guerreiros se sentiam honrados quando morriam em um banquete canibal. Para os europeus, no entanto, comer carne humana era abominável, pois nem mesmo os leões ingeriam seus semelhantes. Portanto, para os conquistadores, o canibalismo era sinônimo de barbarismo e da incapacidade de se autogovernar.</p>
      <small>RAMINELLI, R. Canibalismo para alemão ver. In: FIGUEIREDO, L. (Org.). <i>História do Brasil para ocupados</i>. Rio de Janeiro: Casa da Palavra, 2013 (adaptado).</small>`,
    enunciado: `<p>No texto, europeus e ameríndios atribuíram à prática relatada, respectivamente, o significado de</p>`,
    alternativas: [
      { letra: 'A', texto: 'selvageria — empoderamento.', explicacao: 'Correta! Para os europeus, o canibalismo era “barbarismo” (selvageria); para os tupis, era um ritual de honra para o guerreiro, que fortalecia o grupo (empoderamento).' },
      { letra: 'B', texto: 'impetuosidade — resistência.' },
      { letra: 'C', texto: 'fanatismo — humilhação.' },
      { letra: 'D', texto: 'intolerância — violência.' },
      { letra: 'E', texto: 'repressão — justiça.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-075', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 75,
    disciplina: 'Geografia', conteudo: ['geo-2u2', 'geo-4u2'], subtopico: 'Agrotóxicos e impactos ambientais', dificuldade: 'facil',
    textoApoio: `
      <p>A partir do século XIX e, principalmente, no século XX, iniciou-se o uso de produtos sintéticos na agricultura. No Brasil, a partir da década de 1960 e, posteriormente, nos anos 1970, os inseticidas ampliam sua fatia no mercado dos defensivos agrícolas.</p>
      <small>TROPPMAIR, H. <i>Biogeografia e meio ambiente</i>. Rio de Janeiro: TB, 2012 (adaptado).</small>`,
    enunciado: `<p>Nos espaços agrícolas, a mudança técnica descrita provocou a diminuição da</p>`,
    alternativas: [
      { letra: 'A', texto: 'desagregação de camadas pedológicas.' },
      { letra: 'B', texto: 'diversidade de polinizadores naturais.', explicacao: 'Correta! Os inseticidas matam não só as pragas, mas também insetos benéficos, como abelhas e outros polinizadores, reduzindo sua diversidade nos espaços agrícolas.' },
      { letra: 'C', texto: 'contaminação de lençóis freáticos.' },
      { letra: 'D', texto: 'produtividade da terra cultivada.' },
      { letra: 'E', texto: 'ocorrência da erosão laminar.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-077', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 77,
    disciplina: 'Geografia', conteudo: 'geo-4u3', subtopico: 'Carro elétrico e recursos minerais', dificuldade: 'facil',
    legendaAcima: '<b>Carro elétrico, uma miragem ecológica</b>',
    imagem: 'imagens/estudo/enem-2025-077.webp',
    textoApoio: `
      <p>A mudança para a eletromobilidade de fato promove uma alteração no consumo de recursos naturais. Hoje, amplamente dependentes do petróleo, nossos modais de transporte poderiam se tornar cada vez mais dependentes de trinta metais raros. Gálio, tântalo, cobalto, platinoides, tungstênio, metais de terras-raras: uma mina contém apenas ínfimas quantidades desses metais dotados de fabulosas propriedades eletrônicas, ópticas e magnéticas.</p>
      <small>PITRON, G. Revolução tecnológica, transformação geopolítica. Disponível em: https://diplomatique.org.br. Acesso em: 10 dez. 2018.</small>`,
    enunciado: `<p>No que se refere ao desenvolvimento sustentável, a charge e o texto indicam uma contradição no uso da tecnologia alternativa derivada do seguinte aspecto:</p>`,
    alternativas: [
      { letra: 'A', texto: 'Necessidade de fontes não renováveis.', explicacao: 'Correta! O carro elétrico deixa o petróleo, mas passa a depender de metais raros (cobalto, tântalo, terras-raras...) extraídos por mineração, recursos não renováveis e de grande impacto ambiental — daí a “miragem ecológica”.' },
      { letra: 'B', texto: 'Padronização dos modelos produtivos.' },
      { letra: 'C', texto: 'Demanda de mão de obra qualificada.' },
      { letra: 'D', texto: 'Precariedade da legislação industrial.' },
      { letra: 'E', texto: 'Utilização de materiais recicláveis.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-078', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 78,
    disciplina: 'História', conteudo: ['his-1b7', 'his-c1'], subtopico: 'Sociedade colonial — Roda dos Expostos', dificuldade: 'facil',
    textoApoio: `
      <p>A Roda dos Expostos de Salvador (Bahia) data de 1726 e foi uma das instituições implantadas com o objetivo de acolher e prover um encaminhamento para a criança recém-nascida abandonada. Essa assistência fundamentava-se em práticas caritativas, paternalistas e imediatistas que visavam ao cuidado básico da criança e, especialmente, à salvação da sua alma, via batismo, devido à alta mortalidade.</p>
      <small>BORRIONE, R.; CHAVES, A. M. Análise documental e contexto de desenvolvimento. Disponível em: www.scielo.br. Acesso em: 15 ago. 2013.</small>`,
    enunciado: `<p>A instituição apresentada no texto justificava-se pelo(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'defesa de direitos humanos.' },
      { letra: 'B', texto: 'preceito de natureza sociorreligiosa.', explicacao: 'Correta! A Roda baseava-se na caridade cristã e buscava “especialmente a salvação da alma” da criança pelo batismo: uma assistência social de fundamento religioso.' },
      { letra: 'C', texto: 'reconhecimento de vínculos familiares.' },
      { letra: 'D', texto: 'discurso de cunho técnico-científico.' },
      { letra: 'E', texto: 'ideologia de caráter abolicionista.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-080', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 80,
    disciplina: 'Geografia', conteudo: ['geo-3u5', 'geo-3u3'], subtopico: 'Cidades sustentáveis', dificuldade: 'facil',
    textoApoio: `
      <p>Cidade sustentável é o assentamento humano constituído por uma sociedade com consciência de seu papel de agente transformador dos espaços e cuja relação não se dá pela razão natureza-objeto, e sim por uma ação sinérgica entre prudência ecológica, eficiência energética e equidade socioespacial.</p>
      <small>ROMERO, M. Frentes do urbano para a construção de indicadores de sustentabilidade intraurbana. <i>Paranoá</i>, n. 4, nov. 2007.</small>`,
    enunciado: `<p>Uma medida pública que contradiz o modelo de cidade exposto no texto é a</p>`,
    alternativas: [
      { letra: 'A', texto: 'coleta seletiva de lixo.' },
      { letra: 'B', texto: 'reutilização das águas pluviais.' },
      { letra: 'C', texto: 'canalização dos cursos hídricos.', explicacao: 'Correta! Canalizar rios trata a natureza como objeto: impermeabiliza margens, elimina a vegetação ciliar e agrava enchentes, contrariando a “prudência ecológica” da cidade sustentável. As demais medidas estão de acordo com esse modelo.' },
      { letra: 'D', texto: 'arborização das avenidas centrais.' },
      { letra: 'E', texto: 'educação ambiental da comunidade.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-083', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 83,
    disciplina: 'História', conteudo: 'his-2b2', subtopico: 'Período Joanino', dificuldade: 'media',
    textoApoio: `
      <p>A Impressão Régia do Rio de Janeiro foi criada pelo decreto de 13 de maio de 1808 para dar continuidade à nova sede do império português. A nova tipografia é criada em um momento no qual o projeto de reforma do império se transforma em um projeto de construção de um novo império português na América. Frente às tensões políticas que essa nova situação criava, a tipografia atuou na legitimação e sustentação daquele projeto político.</p>
      <small>BARRA, S. H. S. A Impressão Régia do Rio de Janeiro e a colonização dos sertões na construção do novo império português na América (1808-1822). <i>Topoi</i>, n. 31, jul.-dez. 2015 (adaptado).</small>`,
    enunciado: `<p>A função política da tecnologia mencionada no texto favoreceu a nova sede do Império português por</p>`,
    alternativas: [
      { letra: 'A', texto: 'estabelecer as normativas ideológicas aos periódicos.' },
      { letra: 'B', texto: 'propagar as diretrizes administrativas às capitanias.' },
      { letra: 'C', texto: 'divulgar as conquistas às metrópoles europeias.' },
      { letra: 'D', texto: 'integrar as regiões territoriais ao poder central.', explicacao: 'Correta! A Impressão Régia imprimia leis, decretos e atos oficiais que circulavam pelo território, legitimando a Corte no Rio de Janeiro e ligando as diversas regiões ao poder central do novo império na América.' },
      { letra: 'E', texto: 'difundir as publicações às elites lusitanas.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-084', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 84,
    disciplina: 'Geografia', conteudo: ['geo-1u3', 'geo-4u2'], subtopico: 'Sensoriamento remoto e Cerrado', dificuldade: 'facil',
    textoApoio: `
      <p>Com o objetivo de auxiliar a prevenção e o combate a incêndios no Cerrado, o Centro de Sensoriamento Remoto da Universidade Federal de Minas Gerais (UFMG) desenvolveu um modelo computacional capaz de prever o comportamento do fogo. Essa tecnologia integra o projeto Monitoramento do Cerrado, do qual também participa o Instituto Nacional de Pesquisas Espaciais (Inpe). O instituto produz e processa dados de satélite sobre focos de calor para determinar a localização de incêndios no bioma. Esses focos são o ponto de ignição para o modelo desenvolvido na UFMG: com base em outros dados, como relevo, ventos, umidade e biomassa seca, a ferramenta estima as áreas com maior risco de incêndio e prevê a intensidade e a direção de propagação do fogo no Cerrado brasileiro.</p>
      <small>LAGES, L. Tecnologia antiqueimada. <i>Revista Minas Faz Ciência</i>, n. 84, dez. 2020 – jan.-fev. 2021 (adaptado).</small>`,
    enunciado: `<p>Em relação à causa ambiental, o uso da tecnologia mencionada indica a</p>`,
    alternativas: [
      { letra: 'A', texto: 'influência da produção orgânica.' },
      { letra: 'B', texto: 'relevância da infraestrutura viária.' },
      { letra: 'C', texto: 'significância da cosmologia nativa.' },
      { letra: 'D', texto: 'importância de pesquisas acadêmicas.', explicacao: 'Correta! O modelo que prevê o comportamento do fogo foi desenvolvido pela UFMG em parceria com o Inpe, a partir de dados de satélite: a pesquisa científica e universitária a serviço da proteção do Cerrado.' },
      { letra: 'E', texto: 'interferência de interesses estrangeiros.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-085', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 85,
    disciplina: 'História', conteudo: 'his-3b2', subtopico: 'Cultura e cinema na Primeira República', dificuldade: 'media',
    textoApoio: `
      <p><b>TEXTO I</b></p>
      <p>O cinema constituía um encanto indefinível: além do entretenimento delicioso das vidas alheias por meio dos filmes, o pretexto amável para os encontros de olhos, para a mostra dos vestidos, para as tagarelices com as vizinhas de cadeiras.</p>
      <small>SETTE, M. <i>Anquinhas e bernardas</i>. São Paulo: Livraria Martins, 1940 (adaptado).</small>
      <p><b>TEXTO II</b></p>
      <p>O pouco caso na seleção dos filmes para serem exibidos nos espetáculos diurnos tem sido causa de inúmeros dissabores sofridos pelos progenitores que levam os seus filhos ao cinema para recreá-los. Em toda parte, tanto nas casas de famílias como nos colégios, só se ouve a petizada falar em fitas, em artistas cinematográficos, nas proezas de William Hart ou nas façanhas de Mutt.</p>
      <small>O cinema e a criança. <i>Diário de Pernambuco</i>. 29 ago. 1925 (adaptado).</small>`,
    enunciado: `<p>Publicados na primeira metade do século XX, os textos apresentam</p>`,
    alternativas: [
      { letra: 'A', texto: 'conclusões semelhantes sobre o mesmo suporte midiático.' },
      { letra: 'B', texto: 'argumentos contrários sobre o mesmo tipo de diversão.', explicacao: 'Correta! O Texto I exalta o cinema como encanto e espaço de sociabilidade; o Texto II critica a má seleção dos filmes e seus efeitos sobre as crianças: visões opostas sobre a mesma diversão.' },
      { letra: 'C', texto: 'discursos contraditórios sobre a mesma didática escolar.' },
      { letra: 'D', texto: 'regras teológicas acerca de um mesmo recurso pedagógico.' },
      { letra: 'E', texto: 'justificativas idênticas acerca de um mesmo aspecto cultural.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-086', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 86,
    disciplina: 'Geografia', conteudo: 'geo-4u3', subtopico: 'Matriz energética', dificuldade: 'facil',
    textoApoio: `
      <p><b>Pesquisa pioneira no Brasil propõe o uso de energia do solo para climatizar edifícios</b></p>
      <p>Pela primeira vez na história, o Brasil terá um prédio que usa energia do solo para climatizar seus ambientes. Uma pesquisa inovadora avaliou o uso das fundações de edifícios como meio para a troca de energia térmica entre o prédio e o subsolo. A energia geotérmica é aquela encontrada dentro da crosta terrestre, seja no solo, nas rochas ou mesmo na água, sendo identificada pela temperatura. Essa energia pode ser transferida para a superfície por processos de troca térmica a partir das fundações da edificação.</p>
      <small>Disponível em: https://jornal.usp.br. Acesso em: 7 nov. 2021 (adaptado).</small>`,
    enunciado: `<p>Para o sistema elétrico brasileiro, a expansão de tecnologias como a descrita no texto representa uma tendência de</p>`,
    alternativas: [
      { letra: 'A', texto: 'homogeneização da oferta da matriz produtiva.' },
      { letra: 'B', texto: 'ampliação do consumo em unidades residenciais.' },
      { letra: 'C', texto: 'redução da pressão sobre as usinas hidrelétricas.', explicacao: 'Correta! Climatizar prédios com energia geotérmica diminui o consumo de eletricidade (ar-condicionado), aliviando a demanda sobre a rede, abastecida principalmente pelas hidrelétricas.' },
      { letra: 'D', texto: 'estagnação do consumo em unidades industriais.' },
      { letra: 'E', texto: 'superação da necessidade de recursos renováveis.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-087', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 87,
    disciplina: 'História', conteudo: 'his-1a6', subtopico: 'Roma Antiga — patrícios e plebeus', dificuldade: 'facil',
    textoApoio: `
      <p>Durante a realeza, e nos primeiros anos republicanos, as leis eram transmitidas oralmente de uma geração para outra. A ausência de uma legislação escrita permitia aos patrícios manipular a justiça conforme seus interesses.</p>
      <small>COULANGES, F. <i>A cidade antiga</i>. São Paulo: Martins Fontes, 2000.</small>`,
    enunciado: `<p>A conjuntura sociopolítica da Roma Antiga, conforme apresentada no texto, foi contestada pelos</p>`,
    alternativas: [
      { letra: 'A', texto: 'monarcas, que queriam expandir o código jurídico.' },
      { letra: 'B', texto: 'plebeus, que almejavam participar da vida política.', explicacao: 'Correta! As revoltas da plebe contra o domínio patrício conquistaram o tribunato da plebe e a Lei das Doze Tábuas (leis escritas, c. 450 a.C.), ampliando gradualmente a participação plebeia na política.' },
      { letra: 'C', texto: 'nobres, que desejavam superar a relação de dependência.' },
      { letra: 'D', texto: 'camponeses, que aspiravam diminuir a jornada de trabalho.' },
      { letra: 'E', texto: 'estrangeiros, que ambicionavam acessar os espaços públicos.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-089', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 89,
    disciplina: 'História', conteudo: ['his-1a4', 'his-1a7'], subtopico: 'Religião, ciência e trabalho', dificuldade: 'media',
    textoApoio: `
      <p><b>TEXTO I</b></p>
      <p>Eu escolhi Bezalel e lhe dei competência e habilidade para fazer todo tipo de trabalho artístico; para fazer desenhos e trabalhar em ouro, prata e bronze; para lapidar e montar pedras preciosas; para entalhar madeira; e para fazer todo tipo de artesanato.</p>
      <small>BÍBLIA. Êxodo 31, 2-5. São Paulo: Paulinas, 2005.</small>
      <p><b>TEXTO II</b></p>
      <p>Moisés foi educado em toda a sabedoria dos egípcios e veio a ser poderoso em palavras e obras.</p>
      <small>BÍBLIA. Atos 7, 22. São Paulo: Paulinas, 2005.</small>
      <p><b>TEXTO III</b></p>
      <p>Se conhecêsseis a ciência certa, logo renunciarias à ostentação.</p>
      <small>ALCORÃO. Sura 102, 5. São Paulo: Tangará, 1975.</small>`,
    enunciado: `<p>Escritos em temporalidades diferentes (Antiguidade e Idade Média), os textos sagrados aproximam-se ao mostrar o papel da ciência para o(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'emergência das universidades e escolas confessionais.' },
      { letra: 'B', texto: 'crescimento religioso e movimentos sectários.' },
      { letra: 'C', texto: 'avanço da intolerância e rivalidades nacionais.' },
      { letra: 'D', texto: 'preservação das tradições e rituais místicos.' },
      { letra: 'E', texto: 'desenvolvimento social e práticas laborais.', explicacao: 'Correta! Os textos valorizam o conhecimento ligado ao trabalho e à vida em sociedade: as habilidades artesanais de Bezalel, a sabedoria que tornou Moisés poderoso “em palavras e obras” e a ciência que afasta a ostentação.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-090', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 90,
    disciplina: 'História', conteudo: 'his-3a7', subtopico: 'Imperialismo e expedições científicas', dificuldade: 'media',
    textoApoio: `
      <p>Em 1914, uma expedição estudantil saiu da Rússia em direção à América do Sul, sendo considerada a segunda campanha científica da Rússia no continente depois da longa viagem do barão Langsdorff pelo interior do Brasil na primeira metade do século XIX. O empreendimento foi enviado pelo Museu de Antropologia e Etnografia de São Petersburgo e integrado por cinco jovens cientistas, sendo dois zoólogos, dois etnógrafos e um antropólogo, cujo objetivo era a coleta de material de valor biológico e etnográfico para compor coleções nas instituições que participaram de seu financiamento. A expedição passou por países como Brasil, Paraguai e Argentina, resultando em amplo material manuscrito e algumas publicações, além dos objetos coletados.</p>
      <small>CARNEIRO, L. A. F. <i>A Rússia no Brasil do início do século XX</i>. Rio de Janeiro: Casa de Oswaldo Cruz, 2015 (adaptado).</small>`,
    enunciado: `<p>Além do significado científico, o evento mencionado conectava-se a um projeto nacionalista de caráter</p>`,
    alternativas: [
      { letra: 'A', texto: 'imperialista e colonizador.', explicacao: 'Correta! No auge do imperialismo, as potências enviavam expedições para coletar espécimes e objetos de outros povos para seus museus, afirmando seu poder e seu domínio sobre o conhecimento de outras regiões.' },
      { letra: 'B', texto: 'militar e disciplinador.' },
      { letra: 'C', texto: 'lúdico e filantrópico.' },
      { letra: 'D', texto: 'mercantil e predatório.' },
      { letra: 'E', texto: 'religioso e humanitário.' },
    ],
    gabarito: 'A',
  },
);
