/**
 * ENEM 2024 — 1º dia, Caderno 1 (Azul): Linguagens (01 a 45, com Inglês e Espanhol nas 01 a 05)
 * e Ciências Humanas (46 a 90).
 *
 * Fonte: Provas/Outros/ENEM/2024_PV_D1_CD1.pdf; gabarito oficial: Provas/Outros/ENEM/2024_GB_D1_CD1.pdf.
 * Questões de ESTUDO — nunca entram nos simulados. Aparecem no módulo da matéria, dentro do
 * capítulo indicado em `conteudo`.
 * Ficaram de fora: Artes (08, 16, 21, 25, 36, 43), Educação Física (07, 09, 18, 26, 40, 44),
 * Filosofia (54, 55, 58, 61, 62, 72, 76, 78, 82, 87), Sociologia (52, 56, 63, 65, 90),
 * Artes/xilogravura (73) e a Redação.
 * Formato das questões: veja README.md ("Como adicionar uma questão nova").
 */

/* Textos de uma só questão ficam direto no campo textoApoio; aqui, os textos mais longos. */
var TEXTO_ENEM_2024_D1_ESP_1 = `
      <b>El vírus de la cancelación</b><br>
      ¿De qué se trata este fenómeno? Se entiende por cultura de la cancelación a una práctica popular que consiste en “quitarle apoyo” especialmente a figuras públicas y compañías multinacionales después de que hayan hecho o dicho algo considerado objetable u ofensivo. Cuando alguien o algo está cancelado se descarta, se deja de ver, se deja de escuchar, se desclasifica, se aísla, se abandona, se niega, se deja de consumir hasta que eventualmente puede o no desaparecer. Es una estrategia muy extendida en la historia de las luchas anticoloniales, antiespecistas, sexodisidentes, feministas y, especialmente en nuestro país, también llevadas adelante por el movimiento de derechos humanos. Entonces, ¿dónde radica el problema? Se puede observar positivamente que hay un proceso cada vez más agudo de socialización de herramientas críticas para desmantelar formas de desigualdad incrustadas en los lazos sociales. Pero la popularización irrestricta y el uso amplificado de esta herramienta por fuera de sus contextos colectivos de emergencia han despertado efectos adversos en una sociedad atravesada por las pantallas como formas de encierro-consumo, la representación online como única esfera pública y un imperativo felicista cuya moral nos obliga a trabajar ansiosamente por una vida sin desacuerdos, sin errores y sin dolor, a como dé lugar.<br>
      <small>Disponível em: www.revistaanfibia.com. Acesso em: 7 out. 2021 (adaptado).</small>
`;

var TEXTO_ENEM_2024_D1_19 = `
      <p>Até ali que sabia das misérias do mundo? Nada. Aquela noite do Castelo, tão simples, tão monótona, fora uma revelação! Era bem certo que a lágrima existia, que irrompiam soluços de peitos oprimidos, que para alguém os dias não tinham cor nem a noite tinha estrelas! Ela, criada entre beijos, no aroma dos seus jardins, com as vontades satisfeitas, o leito fofo, a mesa delicada, sentira sempre no coração um desejo sem nome, um desejo ou uma saudade absurda, a saudade do céu, como dizia o dr. Gervásio, e que não era mais que a doida aspiração da artista incipiente, que germinava no seu peito fraco.</p>
      <p>E aquela mesma mágoa parecia-lhe agora doce e embaladora, comparando-se à outra, a Sancha, da sua idade, negra, feia, suja, levada a pontapés, dormindo sem lençóis em uma esteira, comendo em pé, apressada, os restos parcos e frios de duas velhas, vestida de algodões rotos, curvada para um trabalho sem descanso nem paga!</p>
      <p>Por quê? Que direito teriam uns a todas as primícias e regalos da vida, se havia outros que nem por uma nesga viam a felicidade?</p>
      <small>ALMEIDA, J. L. A falência. Disponível em: www.dominiopublico.gov.br. Acesso em: 28 dez. 2023.</small>
`;

var TEXTO_ENEM_2024_D1_22 = `
      <b>TEXTO I</b><br>
      <b>Capítulo 4, versículo 3</b><br>
      Minha palavra vale um tiro, eu tenho muita munição<br>
      Na queda ou na ascensão, minha atitude vai além<br>
      E tem disposição pro mal e pro bem<br>
      Talvez eu seja um sádico ou um anjo, um mágico<br>
      Ou juiz, ou réu, o bandido do céu<br>
      Malandro ou otário, quase sanguinário<br>
      Franco atirador se for necessário<br>
      Revolucionário, insano, ou marginal<br>
      Antigo e moderno, imortal<br>
      Fronteira do céu com o inferno<br>
      Astral imprevisível, como um ataque cardíaco do verso.<br>
      <small>RACIONAIS MCs. Sobrevivendo ao inferno. São Paulo: Cosa Nostra, 1997 (fragmento).</small><br><br>
      <b>TEXTO II</b><br>
      Pode-se dizer que as várias experiências narradas nos discos do Racionais tratam no fundo de um só tema: a violência que estrutura a nossa sociedade. O grupo canta a violência que estrutura as relações entre os familiares, os amigos, o homem e a mulher, o traficante e o viciado. Canta a violência do crime. A violência causada por inveja ou por vaidade. Também canta que a relação entre as classes sociais é sempre violenta: o racismo, a miséria, os baixos salários, a concentração de renda, a esmola, a publicidade, o alcoolismo, o jornalismo, o poder policial, a justiça, o sistema penitenciário, o governo existem por meio da violência.<br>
      <small>GARCIA, W. Ouvindo Racionais MCs. Teresa: revista de literatura brasileira, n. 5, 2004 (adaptado).</small>
`;

var TEXTO_ENEM_2024_D1_28 = `
      <b>Data venia</b>
      <p>Conheci Bentinho e Capitu nos meus curiosos e antigos quinze anos. E os olhos de água da jovem de Matacavalos atraíram-me, seduziram-me ao primeiro contato. Aliados ao seu jeito de ser, flor e mistério. Mas tomou-me também a indignação diante do narrador e seu texto, feito de acusação e vilipêndio. Sem qualquer direito de defesa. Sem acesso ao discurso, usurpado, sutilmente, pela palavra autoritária do marido, algoz, em pele de cordeiro vitimado. Crudelíssimo e desumano: não bastasse o que faz com a mulher, chega a desejar a morte do próprio filho e a festejá-la com um jantar, sem qualquer remorso. No fundo, uma pobre consciência dilacerada, um homem dividido, que busca encontrar-se na memória, e acaba faltando-se a si mesmo. Retomei inúmeras vezes a triste história daquele amor em desencanto. Familiarizei-me, ao longo do tempo, com a crítica do texto; poucos, muito poucos, escapam das bem traçadas linhas do libelo condenatório; no mínimo concedem à ré o beneplácito da dúvida: convertem-na num enigma indecifrável, seu atributo consagrador.</p>
      <p>Eis que, diante de mais um retorno ao romance, veio a iluminação: por que não dar voz plena àquela mulher, brasileira do século XIX, que, apesar de todas as artimanhas e do maquiavelismo do companheiro, se converte numa das mais fascinantes criaturas do gênio que foi Machado de Assis?</p>
      <p>A empresa era temerária, mas escrever é sempre um risco. Apoiado no espaço de liberdade em que habita a Literatura, arrisquei-me.</p>
      <p>O resultado: este livro em que, além-túmulo, como Brás Cubas, a dona dos olhos de ressaca assume, à luz do mistério da arte literária e do próprio texto do Dr. Bento Santiago, seu discurso e sua verdade.</p>
      <small>PROENÇA FILHO, D. Capitu: memórias póstumas. Rio de Janeiro: Atrium, 1998.</small>
`;

var TEXTO_ENEM_2024_D1_30 = `
      <b>TEXTO I</b>
      <p>A 13 de fevereiro de 1946, Graciliano Ramos escreve uma carta a Cândido Portinari relembrando uma visita que lhe fizera quando tivera a ocasião de apreciar algumas telas da série Retirantes. Diz o escritor alagoano:</p>
      <p>Caríssimo Portinari:</p>
      <p>A sua carta chegou muito atrasada, e receio que esta resposta já não o ache fixando na tela a nossa pobre gente da roça. Não há trabalho mais digno, penso eu. Dizem que somos pessimistas e exibimos deformações; contudo, as deformações e essa miséria existem fora da arte e são cultivadas pelos que nos censuram. [...]</p>
      <p>Dos quadros que você me mostrou quando almocei no Cosme Velho pela última vez, o que mais me comoveu foi aquela mãe com a criança morta. Saí de sua casa com um pensamento horrível: numa sociedade sem classes e sem miséria, seria possível fazer-se aquilo? Numa vida tranquila e feliz, que espécie de arte surgiria? Chego a pensar que teríamos cromos, anjinhos cor-de-rosa, e isto me horroriza.</p>
      <p>Graciliano</p>
      <small>Disponível em: https://graciliano.com.br. Acesso em: 6 fev. 2024 (adaptado).</small><br><br>
      <b>TEXTO II</b><br>
      <b>Histórias de ninar (adultos)</b>
      <p>Houve um tempo — tão perto, e, ó, tão longe — em que a arte era um holofote na unha encravada, não um campeonato de melhores esmaltes.</p>
      <p>Raskolnikov matava velhinhas, a família de Gregor Samsa o assassinava a “maçãzadas”, <i>Memórias póstumas de Brás Cubas</i> (Machado de Assis) é o retrato mais perfeito de tudo o que tem de pior na sociedade brasileira, uma sequência tristemente hilária de ações moralmente condenáveis, atitudes pusilânimes, cálculos mesquinhos e maus passos cretinos.</p>
      <p>A literatura, o cinema e o teatro vêm se transformando num exercício de lacração: o mal está sempre no outro, os protagonistas são <i>ironmen / women</i> da virtude. A pessoa sai da leitura ou da sessão não com a guarda abaixada, as certezas abaladas, mais próxima da verdade (ou, à falta de uma palavra melhor, da sinceridade): sai com suas certezas reforçadas.</p>
      <p>A realidade é confusa. Contraditória. Muitas vezes incompreensível. A arte é onde tentamos nos mostrar nus, com todos os nossos defeitos.</p>
      <small>PRATA, A. Disponível em: www1.folha.uol.com.br. Acesso em: 12 jan. 2024 (adaptado).</small>
`;

var TEXTO_ENEM_2024_D1_42 = `
      <b>Feijoada à minha moda</b><br>
      Amiga Helena Sangirardi<br>
      Conforme um dia prometi<br>
      Onde, confesso que esqueci<br>
      E embora — perdoe — tão tarde<br><br>
      (Melhor do que nunca!) este poeta<br>
      Segundo manda a boa ética<br>
      Envia-lhe a receita (poética)<br>
      De sua feijoada completa.<br><br>
      Em atenção ao adiantado<br>
      Da hora em que abrimos o olho<br>
      O feijão deve, já catado<br>
      Nos esperar, feliz, de molho.<br><br>
      Uma vez cozido o feijão<br>
      (Umas quatro horas, fogo médio)<br>
      Nós, bocejando o nosso tédio<br>
      Nos chegaremos ao fogão<br>
      [...]<br>
      De carne-seca suculenta<br>
      Gordos paios, nédio toucinho<br>
      (Nunca orelhas de bacorinho<br>
      Que a tornam em excesso opulenta!)<br>
      [...]<br>
      Enquanto ao lado, em fogo brando<br>
      Desmilinguindo-se de gozo<br>
      Deve também se estar fritando<br>
      O torresminho delicioso<br><br>
      Em cuja gordura, de resto<br>
      (Melhor gordura nunca houve!)<br>
      Deve depois frigir a couve<br>
      Picada, em fogo alegre e presto.<br>
      [...]<br>
      Dever cumprido. Nunca é vã<br>
      A palavra de um poeta... — jamais!<br>
      Abraça-a, em Brillat-Savarin,<br>
      O seu Vinicius de Moraes.<br>
      <small>MORAES, V. In: CÍCERO, A.; QUEIROZ, E. (Org.). Vinicius de Moraes: nova antologia poética. São Paulo: Cia. das Letras, 2005 (fragmento).</small>
`;

QUESTOES.push(
  // ───────────── INGLÊS (opção inglês, questões 01 a 05) ─────────────
  {
    id: 'enem-2024-ing-001', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 1,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2024-ing-001.webp',
    legenda: 'Disponível em: http://thumbpress.com. Acesso em: 28 out. 2013.',
    enunciado: `<p>A relação entre as citações atribuídas ao físico Albert Einstein e ao cantor e compositor Bob Marley reside na crença de que é necessário</p>`,
    alternativas: [
      { letra: 'A', texto: 'dar oportunidade a pessoas que parecem necessitadas.' },
      { letra: 'B', texto: 'identificar contextos que podem representar perigo.' },
      { letra: 'C', texto: 'tirar proveito de situações que podem ser adversas.', explicacao: 'Correta! Einstein diz que “no meio da dificuldade está a oportunidade”, e Marley, que “alguns sentem a chuva, outros apenas se molham”: ambos defendem aproveitar situações adversas.' },
      { letra: 'D', texto: 'evitar dificuldades que parecem ser intransponíveis.' },
      { letra: 'E', texto: 'contestar circunstâncias que parecem ser harmônicas.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-ing-002', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 2,
    disciplina: 'Inglês', subtopico: 'Vocabulário', dificuldade: 'facil',
    textoApoio: `
      <b>Holy War</b><br>
      Oh, so we can hate each other and fear each other<br>
      We can build these walls between each other<br>
      Baby, blow by blow and brick by brick<br>
      Keep yourself locked in, yourself locked in<br>
      […]<br>
      Oh, maybe we should love somebody<br>
      Oh, maybe we could care a little more<br>
      So maybe we should love somebody<br>
      Instead of polishing the bombs of holy war<br>
      <small>KEYS, A. Here. Estados Unidos: RCA Records, 2016.</small>`,
    enunciado: `<p>Nessa letra de canção, que aborda um contexto de ódio e intolerância, o marcador “<i>instead of</i>” introduz a ideia de</p>`,
    alternativas: [
      { letra: 'A', texto: 'mudança de comportamento.', explicacao: 'Correta! “Instead of” significa “em vez de”: a letra propõe amar e cuidar mais em vez de “polir as bombas da guerra santa”, ou seja, uma mudança de comportamento.' },
      { letra: 'B', texto: 'panorama de conflitos.' },
      { letra: 'C', texto: 'rotina de isolamento.' },
      { letra: 'D', texto: 'perspectiva bélica.' },
      { letra: 'E', texto: 'cenário religioso.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2024-ing-003', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 3,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2024-ing-003.webp',
    legenda: 'Disponível em: www.hongkiat.com. Acesso em: 18 ago. 2017 (adaptado).',
    enunciado: `<p>O texto estabelece uma relação entre elementos da natureza e comandos de um programa de computador para</p>`,
    alternativas: [
      { letra: 'A', texto: 'alertar as pessoas sobre a rápida destruição da natureza.', explicacao: 'Correta! A janela de “70% Deleted”, com árvores sumindo, “Removed by: World\\Users” e taxa de 1000 por segundo, alerta que a humanidade está destruindo a natureza rapidamente.' },
      { letra: 'B', texto: 'conscientizar os indivíduos sobre a passagem acelerada do tempo.' },
      { letra: 'C', texto: 'apresentar aos leitores os avanços tecnológicos na área da agricultura.' },
      { letra: 'D', texto: 'orientar os usuários sobre o emprego sustentável das novas tecnologias.' },
      { letra: 'E', texto: 'informar os interessados sobre o tempo de crescimento de novas árvores.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2024-ing-004', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 4,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'media',
    textoApoio: `
      <p>I remember being caught speaking Spanish at recess [...] I remember being sent to the corner of the classroom for “talking back” to the Anglo teacher when all I was trying to do was tell her how to pronounce my name. “If you want to be American, speak ‘American’. If you don’t like it, go back to Mexico where you belong”.</p>
      <p>“I want you to speak English […]”, my mother would say, mortified that I spoke English like a Mexican. At Pan American University, I and all Chicano students were required to take two speech classes. Their purpose: to get rid of our accents.</p>
      <small>ANZALDÚA, G. Borderlands/La Frontera: The New Mestiza. San Francisco: Aunt Lute Books, 1987.</small>`,
    enunciado: `<p>O problema abordado nesse texto sobre imigrantes residentes nos Estados Unidos diz respeito aos prejuízos gerados pelo(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'repúdio ao sotaque espanhol no uso do inglês.', explicacao: 'Correta! A autora relata a vergonha da mãe por ela falar inglês “como mexicana” e as aulas obrigatórias cujo propósito era “livrar-se dos sotaques”: o problema é o repúdio ao sotaque hispânico.' },
      { letra: 'B', texto: 'resignação diante do apagamento da língua materna.' },
      { letra: 'C', texto: 'escassez de oportunidades de aprendizado do espanhol.' },
      { letra: 'D', texto: 'choque entre falantes de línguas distintas de diferentes gerações.' },
      { letra: 'E', texto: 'concorrência entre as variações linguísticas do inglês e as do espanhol.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2024-ing-005', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 5,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2024-ing-005.webp',
    legenda: 'Disponível em: www.clickhole.com. Acesso em: 26 out. 2015.',
    enunciado: `<p>A carta da editora Stephanie Allen-Nichols à escritora Alice Walker tem o propósito de</p>`,
    alternativas: [
      { letra: 'A', texto: 'problematizar o enredo de sua obra.' },
      { letra: 'B', texto: 'acusar o recebimento de seu manuscrito.' },
      { letra: 'C', texto: 'solicitar a revisão ortográfica de seu texto.' },
      { letra: 'D', texto: 'informar a transferência de seu livro a outra editora.' },
      { letra: 'E', texto: 'comunicar a recusa da publicação de seu romance.', explicacao: 'Correta! A expressão “we are forced to make the difficult decision to pass on your manuscript” significa que a editora decidiu não publicar o romance.' },
    ],
    gabarito: 'E',
  },

  // ───────────── ESPANHOL (opção espanhol, questões 01 a 05) ─────────────
  {
    id: 'enem-2024-esp-001', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 1,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'media',
    textoApoio: TEXTO_ENEM_2024_D1_ESP_1,
    enunciado: `<p>Na argumentação apresentada sobre cultura do cancelamento, esse texto objetiva</p>`,
    alternativas: [
      { letra: 'A', texto: 'apresentar o conceito desse tipo de prática.' },
      { letra: 'B', texto: 'mostrar a contrariedade das mídias com relação a essa atitude.' },
      { letra: 'C', texto: 'criticar o impacto dessa cultura sobre a vida representada nas redes.', explicacao: 'Correta! Depois de definir a prática, o texto pergunta “¿dónde radica el problema?” e critica os efeitos adversos do seu uso ampliado numa sociedade em que a representação online é a única esfera pública.' },
      { letra: 'D', texto: 'evidenciar a democratização dessa prática na sociedade virtual.' },
      { letra: 'E', texto: 'discorrer historicamente sobre a origem e as causas dessa cultura.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-esp-002', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 2,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'facil',
    textoApoio: `
      <p>“Y si llueve, que llueva” es un refrán gallego. Para mí cobró sentido una noche de febrero, cuando vivía en el barrio de la Macarena de Sevilla con dos buenos amigos, gallegos también.</p>
      <p>Mi compañero y yo nos decidimos a salir ese sábado de noche, pese a que había estado lloviendo algunas horas a lo largo del día. La idea era una locura, al parecer. Le propusimos salir “de parranda” con nosotros a una amiga andaluza, ésta respondió que no, nos dijo que no iba a salir un día de lluvia. Flipamos. Comentamos entre nosotros que si los gallegos no saliésemos de casa cuando llueve, en invierno saldríamos poco. Habríamos inventado el confinamiento hace mucho.</p>
      <p>Los gallegos no dejamos de salir por la lluvia.</p>
      <small>Disponível em: https://politicahora.es. Acesso em: 26 out. 2021.</small>`,
    enunciado: `<p>O comportamento dos personagens narrado no texto destaca o(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'abandono da própria identidade.' },
      { letra: 'B', texto: 'medo dos perigos durante a noite.' },
      { letra: 'C', texto: 'influência do grupo na tomada de decisão.' },
      { letra: 'D', texto: 'diferença cultural entre galegos e andaluzes.', explicacao: 'Correta! Os galegos saem mesmo com chuva (“Los gallegos no dejamos de salir por la lluvia”), enquanto a amiga andaluza se recusa: o texto destaca a diferença de hábitos culturais entre as duas regiões.' },
      { letra: 'E', texto: 'variação meteorológica entre Sevilha e Galiza.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-esp-003', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 3,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'media',
    textoApoio: `
      <p>Celerina Patricia Sánchez Santiago comentó que su acercamiento a la poesía fue por la escuela, con libros de texto en español. Descubrió el gusto por las letras pero notó que no había textos en la suya, así que, contra muchos comentarios negativos que recibió en ese momento, decidió emprender el camino de la escritura pero en mixteco. “Fue un proceso de años para notar que en mi lengua podía escribir poesía, porque me decían que mi lengua era tan pobre que no podía tener conceptos abstractos, era un reto pero yo sabía que sí era posible”.</p>
      <p>Este proceso no sólo le ayudó a vivir la poesía en mixteco, sino a “ir descubriendo mi propia historia y la de mi pueblo”. Comentó que las lenguas habladas en el territorio nacional se encuentran en gran desventaja con el español. “El reconocimiento a la diversidad no se ha hecho y ha sido tratada de borrar. Este es un país con 68 lenguas y somos monolingües del español. Antes había nulo de reconocimiento de ser bilingüe, negabas que hablabas tu lengua, hasta le decían dialecto. Era parte del proceso fatal que nos llevó a no reconocernos en un país multilingüe. ¿Si tenemos varias lenguas por qué no aprender?”.</p>
      <small>Disponível em: www.fapcom.edu.br. Acesso em: 20 nov. 2021.</small>`,
    enunciado: `<p>Em sua escrita poética, a poetisa mexicana Celerina Patricia Sánchez Santiago assume o desafio de</p>`,
    alternativas: [
      { letra: 'A', texto: 'destacar a importância da literatura na formação escolar.' },
      { letra: 'B', texto: 'discutir a hegemonia da literatura escrita em espanhol.' },
      { letra: 'C', texto: 'promover reflexões acerca de conceitos abstratos.' },
      { letra: 'D', texto: 'representar a pluralidade linguística de seu país.', explicacao: 'Correta! Ao escrever poesia em mixteco, apesar de dizerem que sua língua era “pobre”, a poetisa afirma o valor das 68 línguas de um México que se vê como monolíngue: ela representa a pluralidade linguística do país.' },
      { letra: 'E', texto: 'narrar uma trajetória de autoconhecimento.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-esp-004', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 4,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'media',
    textoApoio: `
      <b>Morir muy vivos</b>
      <p>No todo es perder, es cierto. Si te esfuerzas mucho y bien, porque no viene de fábrica, ganas conocimiento del mundo y de ti mismo, empatía, sosiego y, en suma, algo que podríamos denominar sabiduría. Pero creo que para ello hay que mantenerse alerta y no darse nunca por vencido. Pero también es un tiempo para saldar cuentas. No creo que haya que dejarse llevar por el peso de los días como un leño podrido al que las olas arrojan finalmente a la playa. Uno siempre puede intentar sacarse alguna de las piedras que lleva a la espalda, decir las cosas que nunca se atrevió a decir, cumplir en la medida de lo posible los deseos arrumbados, rescatar algún sueño que quedó en la cuneta. No rendirse, esa es la clave. Y sobre todo decirse: ¿y por qué no? Porque la vejez no está reñida con la audacia. Debemos aspirar a morir muy vivos.</p>
      <small>MONTERO, R. Disponível em: https://elpais.com. Acesso em: 4 dez. 2017.</small>`,
    enunciado: `<p>Nesse texto, ao utilizar a expressão “<i>morir muy vivos</i>”, a escritora Rosa Montero evidencia a importância de se</p>`,
    alternativas: [
      { letra: 'A', texto: 'acumular sabedoria com o passar do tempo.' },
      { letra: 'B', texto: 'observar o impacto dos anos sobre o corpo.' },
      { letra: 'C', texto: 'rever os erros e os acertos de sua trajetória.' },
      { letra: 'D', texto: 'desfrutar de todas as fases da vida.', explicacao: 'Correta! A autora defende não se render na velhice, realizar desejos e sonhos adiados, porque “la vejez no está reñida con la audacia”: “morrer muito vivos” é aproveitar plenamente também essa fase da vida.' },
      { letra: 'E', texto: 'libertar das amarras sociais.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-esp-005', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 5,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'facil',
    textoApoio: `
      <b>Los últimos días del sitio de Tenochtitlán</b><br>
      Y todo esto pasó con nosotros.<br>
      Nosotros lo vimos,<br>
      nosotros lo admiramos.<br>
      Con esta lamentosa y triste suerte<br>
      nos vimos angustiados.<br>
      En los caminos yacen dardos rotos,<br>
      los cabellos están esparcidos.<br>
      Destechadas están las casas,<br>
      enrojecidos tienen sus muros.<br>
      Gusanos pululan por calles y plazas,<br>
      y en las paredes están salpicados los sesos.<br>
      Rojas están las aguas, están como teñidas,<br>
      y cuando la bebimos,<br>
      es como si bebiéramos agua de salitre.<br>
      <small>Manuscrito anónimo de Tlatelolco, 1528. Disponível em: www.biblioweb.tic.unam.mx. Acesso em: 13 out. 2021 (fragmento).</small>`,
    enunciado: `<p>Nesse poema, o eu lírico representa a voz de um sobrevivente asteca que testemunha a</p>`,
    alternativas: [
      { letra: 'A', texto: 'destruição da capital do Império Asteca pelos colonizadores espanhóis.', explicacao: 'Correta! O poema descreve o fim do cerco de Tenochtitlán: casas sem teto, muros e águas tingidos de sangue, dardos quebrados — a destruição da capital asteca na conquista espanhola.' },
      { letra: 'B', texto: 'degradação do meio ambiente no entorno da capital do Império Asteca.' },
      { letra: 'C', texto: 'tristeza dos refugiados astecas ao deixarem a capital do Império rumo ao exílio.' },
      { letra: 'D', texto: 'aflição dos astecas ao receberem os colonizadores espanhóis na capital do Império.' },
      { letra: 'E', texto: 'resistência dos astecas às mudanças feitas pelos colonizadores espanhóis na capital do Império.' },
    ],
    gabarito: 'A',
  },

  // ───────────── PORTUGUÊS e LITERATURA (06 a 45) ─────────────
  {
    id: 'enem-2024-006', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 6,
    disciplina: 'Português', conteudo: 'por-1a3', subtopico: 'Variedades linguísticas', dificuldade: 'facil',
    textoApoio: `
      <b>Expressões e termos utilizados no Amazonas são retratados em livro e em camisetas</b>
      <p>“Na linguagem, podemos nos ver da forma mais verdadeira: nossas crenças, nossos valores, nosso lugar no mundo”, afirmou o doutor em linguística e professor da Ufam em seu livro <i>Amazonês: expressões e termos usados no Amazonas</i>. Portanto, o amazonense, com todas as suas “cunhantãs” e “curumins”, acaba por encontrar um lugar no mundo e formar uma unidade linguística, informalmente denominada de português “caboco”, que muito se diferencia do português “mineiro”, “gaúcho”, “carioca” e de tantos outros espalhados pelo Brasil. O livro, que conta com cerca de 1 100 expressões e termos típicos do falar amazonense, levou dez anos para ser construído. Para o autor, o principal objetivo da obra é registrar a linguagem.</p>
      <p>Um designer amazonense também acha o amazonês “xibata”, tanto é que criou uma série de camisetas estampadas com o nome de Caboquês Ilustrado, que mistura o bom humor com as expressões típicas da região. A coleção conta com sete modelos já lançados, entre eles: Leseira Baré, Xibata no Balde e Até o Tucupi, e 43 ainda na fila de espera. Para o criador, as camisas têm como objetivo “resgatar o orgulho do povo manauara, do povo do Norte”.</p>
      <small>Disponível em: https://g1.globo.com. Acesso em: 15 jan. 2024 (adaptado).</small>`,
    enunciado: `<p>A reportagem apresenta duas iniciativas: o livro <i>Amazonês</i> e as camisetas do Caboquês Ilustrado. Com temática em comum, essas iniciativas</p>`,
    alternativas: [
      { letra: 'A', texto: 'recomendam produtos feitos por empreendedores da região Norte.' },
      { letra: 'B', texto: 'ressaltam diferenças entre o falar manauara e outros falares.' },
      { letra: 'C', texto: 'reverenciam o trabalho feito por pesquisadores brasileiros.' },
      { letra: 'D', texto: 'destacam a descontração no jeito de ser do amazonense.' },
      { letra: 'E', texto: 'valorizam o repertório linguístico do povo do Amazonas.', explicacao: 'Correta! O livro registra cerca de 1 100 expressões do falar amazonense e as camisetas querem “resgatar o orgulho do povo manauara”: as duas iniciativas valorizam o repertório linguístico regional.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2024-010', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 10,
    disciplina: 'Português', conteudo: 'por-2a2', subtopico: 'Tecnologias de informação e comunicação', dificuldade: 'facil',
    textoApoio: `
      <p>Já ouvi gente falando que o <i>podcast</i> é o renascimento do rádio. O rádio é genial, uma mídia imorredoura, mas <i>podcast</i> não tem nada a ver com ele. O formato está mais próximo do ensaio literário do que de um programa de ondas curtas, médias ou longas.</p>
      <p><i>Podcasts</i> são antípodas das redes sociais. Enquanto elas são dispersivas, levam à evasão e à desinformação, os <i>podcasts</i> são uma possibilidade de imersão, concentração, aprendizado. Depois que eles surgiram, lavar a louça e me locomover pela cidade viraram um programaço. Um pós-almoço de domingo e aprendo tudo sobre bonobos e gorilas. Um táxi pro aeroporto e chego ao embarque PhD em reforma tributária.</p>
      <small>PRATA, A. Disponível em: www1.folha.uol.com.br. Acesso em: 7 jan. 2024 (adaptado).</small>`,
    enunciado: `<p>Segundo a argumentação construída nesse texto, o <i>podcast</i></p>`,
    alternativas: [
      { letra: 'A', texto: 'provoca dispersão da atenção em seu público.' },
      { letra: 'B', texto: 'funciona por meio de uma frequência de ondas curtas.' },
      { letra: 'C', texto: 'propicia divulgação de conhecimento para seus usuários.', explicacao: 'Correta! O autor apresenta o podcast como “possibilidade de imersão, concentração, aprendizado”, com exemplos de quem aprende sobre bonobos ou reforma tributária ouvindo-o.' },
      { letra: 'D', texto: 'tem um formato de interação semelhante ao das redes sociais.' },
      { letra: 'E', texto: 'constitui uma evolução na transmissão de informações via rádio.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-011', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 11,
    disciplina: 'Português', conteudo: 'por-1a3', subtopico: 'Variedades linguísticas', dificuldade: 'media',
    textoApoio: `
      <p>Evanildo Bechara prepara a sua aposentadoria de pouco em pouco, como se a adiasse ao máximo. Aos 95 anos, o imortal da Academia Brasileira de Letras (ABL) alcançou um status de astro pop no mundo da filologia e da gramática. Quando ainda tinha saúde para viagens mais longas, o filólogo lotava plateias em suas palestras na Europa e no Brasil, que não raro terminavam com filas para <i>selfies</i>.</p>
      <p>A idade acentuou o lado “cientista” e professoral de Bechara, que adota um tom técnico na conversa até mesmo diante das perguntas mais pessoais. — “Qual o seu tipo preferido de leitura?”. — “A minha leitura está dividida em duas partes, a científica e a literária, estabelecendo uma relação de causa e efeito entre elas.” — responde.</p>
      <p>Ainda adolescente, Bechara descobriu a lexicologia. Um “novo mundo” se abriu para o pernambucano, que se mantém atento às metamorfoses do nosso idioma. Seu colega de ABL, o filólogo Ricardo Cavaliere, se lembra de quando deu carona para o mestre e este encucou com os estrangeirismos do aplicativo de navegação instalado no veículo. — “A vozinha do aplicativo avisou que havia um radar de velocidade ‘reportado’ à frente”, lembra Cavaliere. — “Esse ‘reportado’ é uma importação, né?”, notou Bechara.</p>
      <small>Disponível em: https://oglobo.globo.com. Acesso em: 3 jan. 2024 (adaptado).</small>`,
    enunciado: `<p>Nesse texto, as falas atribuídas a Evanildo Bechara são representativas da variedade linguística</p>`,
    alternativas: [
      { letra: 'A', texto: 'situacional, pois o contexto exige o uso da linguagem formal.' },
      { letra: 'B', texto: 'regional, pois ele traz marcas do falar de seu local de nascimento.' },
      { letra: 'C', texto: 'sociocultural, pois sua formação pressupõe o uso de linguagem rebuscada.' },
      { letra: 'D', texto: 'geracional, pois ele emprega termos característicos de sua faixa etária.' },
      { letra: 'E', texto: 'ocupacional, pois ele faz uso de termos específicos de sua área de atuação.', explicacao: 'Correta! Mesmo em conversas pessoais, Bechara usa o tom técnico do filólogo (“relação de causa e efeito”, comentário sobre o estrangeirismo “reportado”): são marcas da linguagem de sua profissão.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2024-012', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 12,
    disciplina: 'Português', conteudo: ['por-1a2', 'por-1a3'], subtopico: 'Patrimônio linguístico', dificuldade: 'facil',
    textoApoio: `
      <p>A Língua da Tabatinga, falada na cidade de Bom Despacho, Minas Gerais, foi por muito tempo estigmatizada devido à sua origem e à própria classe social de seus falantes, pois, segundo uma pesquisadora, era falada por “meninos pobres vindos da Tabatinga ou de Cruz de Monte — ruas da periferia da cidade cujos habitantes sempre foram tidos por marginais”. Conhecida por antigos como a “língua dos engraxates”, pois muitos trabalhadores desse ofício conversavam nessa língua enquanto lustravam sapatos na praça da matriz, a Língua da Tabatinga era utilizada por negros escravizados como uma espécie de “língua secreta”, um código para trocarem informações de como conseguir alimentos, ou para planejar fugas de seus senhores sem risco de serem descobertos por eles.</p>
      <p>De acordo com um documento do Iphan (2011), os falantes da língua apresentam uma forte consciência de sua relação com a descendência africana e da importância de preservar a “fala que os identifica na região”. Essa mudança de compreensão tangencia aspectos de pertencimento, pois, à medida que o falante da Língua da Tabatinga se identifica com a origem afro-brasileira, ele passa a ver essa língua como um legado recebido e tem o cuidado de transmiti-la para outras gerações. A concentração de falantes dessa língua está na faixa entre 21 e 60 anos de idade.</p>
      <small>Disponível em: www.historiaeparcerias2019.rj.anpuh.org. Acesso em: 3 fev. 2024 (adaptado).</small>`,
    enunciado: `<p>A Língua da Tabatinga tem sido preservada porque o(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'seu registro passou da forma oral para a escrita.' },
      { letra: 'B', texto: 'classe social de seus usuários ganhou prestígio.' },
      { letra: 'C', texto: 'sua função inicial se manteve ao longo dos anos.' },
      { letra: 'D', texto: 'sentimento de identidade linguística tem se consolidado.', explicacao: 'Correta! Segundo o texto, os falantes passaram a se identificar com a origem afro-brasileira e a ver a língua como legado a transmitir: é esse sentimento de pertencimento que a preserva.' },
      { letra: 'E', texto: 'perfil etário de seus falantes tem se tornado homogêneo.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-013', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 13,
    disciplina: 'Português', conteudo: 'por-1a4', subtopico: 'Funções da linguagem', dificuldade: 'facil',
    textoApoio: `
      <p>Diante do pouco dinheiro para produtos básicos de sobrevivência, são as adolescentes o alvo mais vulnerável à precariedade menstrual. Sofrem com dois fatores: o desconhecimento da importância da higiene menstrual para sua saúde e a dependência dos pais ou familiares para a compra do absorvente, que acaba entrando na lista de artigos supérfluos da casa.</p>
      <p>A falta do absorvente afeta diretamente o desempenho escolar dessas estudantes e, como consequência, restringe o desenvolvimento de seu potencial na vida adulta. Dados da Pesquisa Nacional de Saúde (PNS), do IBGE, revelaram que, das meninas entre 10 e 19 anos que deixaram de fazer alguma atividade (estudar, realizar afazeres domésticos, trabalhar ou, até mesmo, brincar) por problemas de saúde nos 14 dias anteriores à data da pesquisa, 2,88% deixaram de fazê-la por problemas menstruais. Para efeitos de comparação, o índice de meninas que relataram não ter conseguido realizar alguma de suas atividades por gravidez e parto foi menor: 2,55%.</p>
      <p>Dados da ONU apontam que, no mundo, uma em cada dez meninas falta às aulas durante o período menstrual. No Brasil, esse número é ainda maior: uma entre quatro estudantes já deixou de ir à escola por não ter absorventes. Com isso, perdem, em média, até 45 dias de aula, por ano letivo, como revela o levantamento Impacto da Pobreza Menstrual no Brasil. O ato biológico de menstruar acaba por virar mais um fator de desigualdade de oportunidades entre os gêneros.</p>
      <small>Disponível em: www12.senado.leg.br. Acesso em: 21 jan. 2024 (adaptado).</small>`,
    enunciado: `<p>Esse texto é marcado pela função referencial da linguagem, uma vez que cumpre o propósito de</p>`,
    alternativas: [
      { letra: 'A', texto: 'sugerir soluções para um problema de ordem social.' },
      { letra: 'B', texto: 'estabelecer uma relação entre menstruação e gravidez.' },
      { letra: 'C', texto: 'comparar o desempenho acadêmico de mulheres e homens.' },
      { letra: 'D', texto: 'informar o leitor sobre o impacto da pobreza menstrual na vida das mulheres.', explicacao: 'Correta! A função referencial centra-se na informação: o texto apresenta dados (IBGE, ONU) sobre como a pobreza menstrual afeta a escolaridade e as oportunidades das meninas.' },
      { letra: 'E', texto: 'orientar o público sobre a necessidade de rotinas de autocuidado na adolescência.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-014', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 14,
    disciplina: 'Português', conteudo: 'por-1a3', subtopico: 'Variedades linguísticas', dificuldade: 'facil',
    textoApoio: `
      <p>Maranhenses que moram longe matam a saudade da terra natal usando expressões próprias do estado. Se o maranhês impressiona e desperta a curiosidade de quem mora no próprio Maranhão, imagine de quem vem de outros estados e países? A variedade linguística local é enorme e o modo de falar tão próprio e característico dos maranhenses vem conquistando muita gente e inspirando títulos e muito conteúdo digital com a criação de <i>podcasts</i>, <i>blogs</i>, perfis na internet, além de estampar diversos tipos de produtos e serviços de empresas locais.</p>
      <p>Com saudades do Maranhão, morando há 16 anos no Rio de Janeiro, um fotógrafo maranhense criou um perfil na internet no qual compartilha a culinária, brincadeiras e o ‘dicionário’ maranhês. “A primeira vez que fui a uma padaria no Rio, na inocência, pedi 3 reais de ‘pães misturados’. Quando falei isso, as pessoas pararam e me olharam de uma forma bem engraçada, aí já fiquei ‘encabulado, ó’ e o atendente sorriu e explicou que lá não existia pão misturado e, sim, pão francês e suíço. Depois foi a minha vez de explicar sobre os pães ‘massa grossa e massa fina’”, contou o fotógrafo, com humor.</p>
      <small>Disponível em: https://oimparcial.com.br. Acesso em: 1 nov. 2021 (adaptado).</small>`,
    enunciado: `<p>A vivência relatada no texto evidencia que as variedades linguísticas</p>`,
    alternativas: [
      { letra: 'A', texto: 'impedem o entendimento mútuo.' },
      { letra: 'B', texto: 'enaltecem o português do Maranhão.' },
      { letra: 'C', texto: 'são constitutivas do português brasileiro.', explicacao: 'Correta! O episódio dos “pães misturados” mostra que o mesmo objeto recebe nomes diferentes em cada região: as variedades regionais fazem parte da própria constituição do português do Brasil.' },
      { letra: 'D', texto: 'exigem a dicionarização dos termos usados.' },
      { letra: 'E', texto: 'são restritas a situações coloquiais de comunicação.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-015', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 15,
    disciplina: 'Português', conteudo: 'por-2a5', subtopico: 'Análise textual', dificuldade: 'facil',
    textoApoio: `
      <b>Telemedicina é para todos, mas nem todos estão preparados</b>
      <p>A telemedicina, nos últimos anos, tem se destacado como uma ferramenta valiosa, proporcionando uma gama de benefícios que vão desde a ampliação do acesso à assistência médica até a otimização dos recursos de todo o ecossistema de saúde.</p>
      <p>O governo federal propõe a Estratégia de Saúde Digital, um programa destinado à transformação digital da saúde no Brasil. Seu principal objetivo é facilitar a troca de informações entre os diversos pontos da Rede de Atenção à Saúde, promovendo a interoperabilidade e, assim, possibilitando a transição e a continuidade do cuidado nos setores público e privado. Também está em discussão um projeto de lei que dispõe sobre o prontuário eletrônico unificado do cidadão, o que indica o quanto o tema está em evidência tanto para os gestores públicos quanto para os privados.</p>
      <p>Contudo, é importante reconhecer que nem todas as pessoas estão igualmente preparadas para aproveitar plenamente os cuidados ofertados pela telemedicina. Um dos principais benefícios do atendimento de saúde a distância é a capacidade de superar barreiras geográficas, proporcionando acesso a serviços médicos, especialmente para pacientes que residem em áreas remotas e/ou carentes de certas especialidades médicas, os chamados “vazios assistenciais”. A equidade no acesso é uma questão crítica, uma vez que nem todos têm ao seu alcance dispositivos tecnológicos ou uma conexão à internet que seja confiável, entre outros problemas de infraestrutura. É um desafio tanto para os pacientes quanto para os profissionais de saúde, que, em muitos casos, não contam com estrutura para o trabalho remoto nem com letramento digital para desenvolver as funções.</p>
      <small>OLIVEIRA, D. Disponível em: www.correiobraziliense.com.br. Acesso em: 21 jan. 2024 (adaptado).</small>`,
    enunciado: `<p>Ao tratar da telemedicina, esse texto ressalta que um dos benefícios dessa tecnologia para a sociedade é o fato de ela</p>`,
    alternativas: [
      { letra: 'A', texto: 'disponibilizar prontuário único do cidadão tanto na rede pública quanto na privada.' },
      { letra: 'B', texto: 'oportunizar o acesso a atendimento médico a pacientes de áreas periféricas.', explicacao: 'Correta! O texto afirma que um dos principais benefícios é “superar barreiras geográficas”, levando atendimento a pacientes de áreas remotas ou carentes de especialidades (os “vazios assistenciais”).' },
      { letra: 'C', texto: 'fornecer dispositivos tecnológicos para a realização de exames.' },
      { letra: 'D', texto: 'promover a interação entre diferentes especialidades médicas.' },
      { letra: 'E', texto: 'garantir infraestrutura para o trabalho remoto de médicos.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2024-017', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 17,
    disciplina: 'Português', conteudo: 'por-3a6', subtopico: 'Estratégias argumentativas', dificuldade: 'facil',
    textoApoio: `
      <p>Influenciadores negros têm recorrentemente chamado a atenção para o fato de terem muito menos repercussão em suas postagens e nas entregas do seu conteúdo quando comparados com os influenciadores brancos, mesmo se fotos, contextos e anúncios forem extremamente semelhantes. Segundo o <i>site</i> Negrê, a <i>digital influencer</i> e <i>youtuber</i> criadora do projeto digital Preta Pariu iniciou um experimento em uma plataforma. Após perceber a crescente queda nos índices de alcance digital, a paulista publicou fotografias de modelos brancas em seu perfil e analisou as métricas de engajamento. Surpreendentemente, a ferramenta de estatísticas aferiu um aumento de 6 000% em seu alcance.</p>
      <small>Disponível em: https://diplomatique.org.br. Acesso em: 21 jan. 2024 (adaptado).</small>`,
    enunciado: `<p>A apresentação do dado estatístico ao final desse texto revela a intenção de</p>`,
    alternativas: [
      { letra: 'A', texto: 'demonstrar a repercussão de projetos como o Preta Pariu.' },
      { letra: 'B', texto: 'informar o quantitativo de postagens da comunidade negra.' },
      { letra: 'C', texto: 'potencializar o alcance de textos e imagens em sites como o Negrê.' },
      { letra: 'D', texto: 'exaltar a qualidade das publicações sobre negritude em redes sociais.' },
      { letra: 'E', texto: 'comprovar a relação entre o alcance de conteúdos digitais e o viés racial.', explicacao: 'Correta! O aumento de 6 000% no alcance ao publicar fotos de modelos brancas funciona como prova (argumento por dados) de que as plataformas entregam menos o conteúdo de pessoas negras.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2024-019', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 19,
    disciplina: 'Literatura', subtopico: 'Interpretação de Texto Literário', dificuldade: 'facil',
    textoApoio: TEXTO_ENEM_2024_D1_19,
    enunciado: `<p>Nesse fragmento do romance de Júlia Lopes de Almeida, escrito no cenário brasileiro pós-abolição, a narradora exprime um olhar crítico sobre a</p>`,
    alternativas: [
      { letra: 'A', texto: 'desvalorização da arte produzida por mulheres.' },
      { letra: 'B', texto: 'mudança das condições de moradia do povo negro.' },
      { letra: 'C', texto: 'ruptura do projeto político de emancipação feminina.' },
      { letra: 'D', texto: 'exploração da força de trabalho da população negra.', explicacao: 'Correta! A personagem contrasta sua vida confortável com a de Sancha, menina negra “curvada para um trabalho sem descanso nem paga”, e questiona essa desigualdade: é a crítica à exploração do trabalho negro após a abolição.' },
      { letra: 'E', texto: 'disputa de poder entre brancos e negros no século XIX.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-020', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 20,
    disciplina: 'Português', conteudo: 'por-2a3', subtopico: 'Coesão textual', dificuldade: 'facil',
    textoApoio: `
      <p>Sempre passo nervoso quando leio minha crônica neste jornal e percebo que escapuliu a palavra “coisa” em alguma frase. Acontece que “coisa” está entre as coisas mais deliciosas do mundo.</p>
      <p>O primeiro banho da minha filha foi embalado pela minha voz dizendo, ao fundo, “cuidado, ela ainda é uma coisinha tão pequena”. “Viu só que amor? Nunca vi coisa assim”. O amor que não dá conta de explicação é “a coisa” em seu esplendor e excelência. “Alguma coisa acontece no meu coração” é a frase mais bonita que alguém já disse sobre São Paulo. E quando Caetano, citado aqui pela terceira vez pra defender a dimensão poética da coisa, diz “coisa linda”, nós sabemos que nenhuma palavra definiria de forma mais profunda e literária o quão bela e amada uma coisa pode ser.</p>
      <p>“Coisar” é verbo de quem está com pressa ou tem lapsos de memória. É pra quando “mexe qualquer coisa dentro doida”. E que coisa magnífica poder se expressar tal qual Caetano Veloso. Agora chega, porque “esse papo já tá qualquer coisa” e eu já tô “pra lá de Marrakech”.</p>
      <small>TATI BERNARDI. Disponível em: www1.folha.uol.com.br. Acesso em: 3 jan. 2024 (adaptado).</small>`,
    enunciado: `<p>O recurso utilizado na progressão textual para garantir a unidade temática dessa crônica é a</p>`,
    alternativas: [
      { letra: 'A', texto: 'intertextualidade, marcada pela citação de versos de letras de canções.' },
      { letra: 'B', texto: 'metalinguagem, marcada pela referência à escrita de crônicas pela autora.' },
      { letra: 'C', texto: 'reiteração, marcada pela repetição de uma determinada palavra e de seus cognatos.', explicacao: 'Correta! A crônica avança repetindo “coisa” e seus cognatos (“coisinha”, “coisar”): essa coesão por reiteração mantém a unidade temática do texto.' },
      { letra: 'D', texto: 'conexão, marcada pela presença dos conectores lógicos “quando” e “porque” entre orações.' },
      { letra: 'E', texto: 'pronominalização, marcada pela retomada de “minha filha” e “um namorado ruim” pelos pronomes “ela” e “lo”.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-022', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 22,
    disciplina: 'Literatura', subtopico: 'Interpretação de Texto Literário', dificuldade: 'dificil',
    textoApoio: TEXTO_ENEM_2024_D1_22,
    enunciado: `<p>Na letra da canção, a tematização da violência mencionada no Texto II manifesta-se</p>`,
    alternativas: [
      { letra: 'A', texto: 'como metáfora da desigualdade, que associa a ideia de justiça a valores históricos negativos.' },
      { letra: 'B', texto: 'na referência a termos bélicos, que sinaliza uma crítica social à opressão da população das periferias.' },
      { letra: 'C', texto: 'como procedimento metalinguístico, que concebe a palavra como uma forma de combate e insubordinação.', explicacao: 'Correta! Em “Minha palavra vale um tiro, eu tenho muita munição” e “ataque cardíaco do verso”, a letra fala da própria palavra/verso do rapper como arma: a violência aparece metalinguisticamente, como combate e insubordinação.' },
      { letra: 'D', texto: 'nas definições ambíguas do enunciador, que inverte e relativiza as representações da maldade e da bondade.' },
      { letra: 'E', texto: 'na menção à imortalidade, que sugere a possibilidade de resistência para além da dicotomia entre vida e morte.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-023', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 23,
    disciplina: 'Português', conteudo: ['por-4a2', 'por-2b6'], subtopico: 'Resenha e conectivos adversativos', dificuldade: 'media',
    textoApoio: `
      <p>As reações à sétima temporada foram o ápice do último estágio em <i>Game of Thrones</i>. De forma alguma, este que vos fala seria capaz de argumentar que a série é perfeita, mas os defeitos que existem aqui sempre existiram, de uma forma ou de outra, durante os sete anos em que ela esteve no ar. Os dois roteiristas foram brilhantes em traduzir os personagens intrincados e conflituosos da obra de George R. R. Martin, mas nunca souberam exatamente como fazer jus a eles (e especialmente a elas, as mulheres da trama).</p>
      <p>A verdade é que, com tudo isso e mais Ramin Djawadi evocando sentimentos e ambientes improváveis com sua trilha sonora magistral, a série não conseguiria ser ruim nem se tentasse, mas continua sendo uma pena que, ao buscar o seu final com tanta sede e tanta celeridade, Benioff e Weiss tenham tirado sua qualidade mais preciosa: o fôlego, a paciência e o detalhismo que faziam suas palavras se levantarem do papel e ganharem vida.</p>
      <small>Disponível em: https://observatoriodocinema.uol.com.br. Acesso em: 29 nov. 2017 (adaptado).</small>`,
    enunciado: `<p>Ainda que faça uma avaliação positiva da série, nessa resenha, o autor aponta aspectos negativos da obra ao utilizar</p>`,
    alternativas: [
      { letra: 'A', texto: 'marcas de impessoalidade que disfarçam a opinião do especialista.' },
      { letra: 'B', texto: 'expressões adversativas para fazer ressalvas às afirmações elogiosas.', explicacao: 'Correta! Os elogios são sempre seguidos de “mas” (“foram brilhantes [...], mas nunca souberam”; “não conseguiria ser ruim [...], mas continua sendo uma pena”): o conectivo adversativo introduz as ressalvas.' },
      { letra: 'C', texto: 'interlocução com o leitor para corroborar opiniões contrárias à adaptação.' },
      { letra: 'D', texto: 'eufemismos que minimizam as críticas feitas à construção das personagens.' },
      { letra: 'E', texto: 'antíteses que opõem a fragilidade do roteiro à beleza da trilha sonora da série.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2024-024', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 24,
    disciplina: 'Literatura', subtopico: 'Interpretação de Texto Literário', dificuldade: 'media',
    textoApoio: `
      <p>— Vá para o inferno, Gondim. Você acanalhou o troço. Está pernóstico, está safado, está idiota. Há lá ninguém que fale dessa forma!</p>
      <p>Azevedo Gondim apagou o sorriso, engoliu em seco, apanhou os cacos da sua pequenina vaidade e replicou amuado que um artista não pode escrever como fala.</p>
      <p>— Não pode? — perguntei com assombro. E por quê?</p>
      <p>Azevedo Gondim respondeu que não pode porque não pode.</p>
      <p>— Foi assim que sempre se fez. A literatura é a literatura, seu Paulo. A gente discute, briga, trata de negócios naturalmente, mas arranjar palavras com tinta é outra coisa. Se eu fosse escrever como falo, ninguém me lia.</p>
      <small>RAMOS, G. São Bernardo. Rio de Janeiro: Record, 2009.</small>`,
    enunciado: `<p>Nesse fragmento, a discussão dos personagens traz à cena um debate acerca da escrita que</p>`,
    alternativas: [
      { letra: 'A', texto: 'diferencia a produção artística do registro padrão da língua.' },
      { letra: 'B', texto: 'aproxima a literatura de dialetos sociais de pouco prestígio.' },
      { letra: 'C', texto: 'defende a relação entre a fala e o estilo literário de um autor.' },
      { letra: 'D', texto: 'contrapõe o preciosismo linguístico a situações de coloquialidade.', explicacao: 'Correta! Paulo Honório critica o texto “pernóstico” de Gondim, que defende que a literatura exige linguagem diferente da usada para discutir e tratar de negócios: opõem-se o preciosismo e a fala coloquial.' },
      { letra: 'E', texto: 'associa o uso da norma culta à ocorrência de desentendimentos pessoais.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-027', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 27,
    disciplina: 'Português', conteudo: 'por-1a4', subtopico: 'Interlocução e empatia', dificuldade: 'media',
    textoApoio: `
      <p>Volta e meia recebo cartinhas de fãs, e alguns são bem jovens, contando como meu trabalho com a música mudou a vida deles. Fico no céu lendo essas coisas e me emociono quando escrevem que não são aceitos pelos pais por serem diferentes, e como minhas músicas são uma companhia e os libertam nessas horas de solidão.</p>
      <p>Sinto que é mais complicado ser jovem hoje, já que nunca tivemos essa superpopulação no planeta: haja competitividade, culto à beleza, ter filho ou não, estudar, ralar para arranjar trabalho, ser mal remunerado, ser bombardeado com trocentas informações, lavagens cerebrais...</p>
      <p>Queria dar beijinhos e carinhos sem ter fim nessa moçada e dizer a ela que a barra é pesada mesmo, mas que a juventude está a seu favor e, de repente, a maré de tempestade muda. Diria também um monte de clichê: que vale a pena estudar mais, pesquisar mais, ler mais. Diria que não é sinal de saúde estar bem-adaptado a uma sociedade doente, que o que é normal para uma aranha é o caos para uma mosca.</p>
      <p>Meninada, sintam-se beijados pela vovó Rita.</p>
      <small>RITA LEE. Outra autobiografia. São Paulo: Globo Livros, 2023.</small>`,
    enunciado: `<p>Como estratégia para se aproximar de seu leitor, a autora usa uma postura de empatia explicitada em</p>`,
    alternativas: [
      { letra: 'A', texto: '“Volta e meia recebo cartinhas de fãs, e alguns são bem jovens”.' },
      { letra: 'B', texto: '“Fico no céu lendo essas coisas”.' },
      { letra: 'C', texto: '“Sinto que é mais complicado ser jovem hoje”.', explicacao: 'Correta! Empatia é colocar-se no lugar do outro: ao dizer que sente ser mais difícil ser jovem hoje, a autora reconhece as dificuldades da juventude e se aproxima do leitor jovem.' },
      { letra: 'D', texto: '“Queria dar beijinhos e carinhos sem ter fim nessa moçada”.' },
      { letra: 'E', texto: '“Diria que não é sinal de saúde estar bem-adaptado a uma sociedade doente”.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-028', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 28,
    disciplina: 'Literatura', subtopico: 'Interpretação de Texto Literário', dificuldade: 'dificil',
    textoApoio: TEXTO_ENEM_2024_D1_28,
    enunciado: `<p>Para apresentar a apropriação literária que faz da obra de Machado de Assis, o autor desse texto</p>`,
    alternativas: [
      { letra: 'A', texto: 'relaciona aspectos centrais da obra original e, então, reafirma o ponto de vista adotado.' },
      { letra: 'B', texto: 'explica os pontos de vista de críticos da literatura e, por fim, os redimensiona na discussão.' },
      { letra: 'C', texto: 'introduz elementos relevantes da história e, na sequência, apresenta motivos para refutá-los.' },
      { letra: 'D', texto: 'justifica as razões pelas quais adotou certa abordagem e, em seguida, reconsidera tal escolha.' },
      { letra: 'E', texto: 'contextualiza o enredo de forma subjetiva e, na conclusão, explicita o foco narrativo a ser assumido.', explicacao: 'Correta! O autor retoma Dom Casmurro a partir de sua experiência pessoal de leitor (“Conheci Bentinho e Capitu nos meus [...] quinze anos”) e, ao final, revela que o livro dará voz a Capitu, que assume “seu discurso e sua verdade”.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2024-029', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 29,
    disciplina: 'Literatura', subtopico: 'Interpretação de Texto Literário', dificuldade: 'media',
    textoApoio: `
      <p>Meu irmão é filho adotivo. Há uma tecnicidade no termo, filho adotivo, que contribui para sua aceitação social. Há uma novidade que por um átimo o absolve das mazelas do passado, que parece limpá-lo de seus sentidos indesejáveis. Digo que meu irmão é filho adotivo e as pessoas tendem a assentir com solenidade, disfarçando qualquer pesar, baixando os olhos como se não sentissem nenhuma ânsia de perguntar mais nada. Talvez compartilhem da minha inquietude, talvez de fato se esqueçam do assunto no próximo gole ou na próxima garfada. Se a inquietude continua a reverberar em mim, é porque ouço a frase também de maneira parcial — meu irmão é filho — e é difícil aceitar que ela não termine com a verdade tautológica habitual: meu irmão é filho dos meus pais. Estou entoando que meu irmão é filho e uma interrogação sempre me salta aos lábios: filho de quem?</p>
      <small>FUCKS, J. A resistência. São Paulo: Cia. das Letras, 2015.</small>`,
    enunciado: `<p>Das reflexões do narrador, apreende-se uma perspectiva que associa a adoção</p>`,
    alternativas: [
      { letra: 'A', texto: 'a representações sociais estigmatizadas da parentalidade.', explicacao: 'Correta! O narrador percebe que o termo técnico “filho adotivo” disfarça “sentidos indesejáveis” e provoca reações de pesar contido, e que a frase não termina em “filho dos meus pais”: a adoção carrega estigmas sociais sobre a filiação.' },
      { letra: 'B', texto: 'à necessidade de aprovação por parte de desconhecidos.' },
      { letra: 'C', texto: 'ao julgamento velado de membros do núcleo familiar.' },
      { letra: 'D', texto: 'ao conflito entre o termo técnico e o vínculo afetivo.' },
      { letra: 'E', texto: 'a inquietações próprias das relações entre irmãos.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2024-030', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 30,
    disciplina: 'Português', conteudo: 'por-3a5', subtopico: 'Comparação de pontos de vista', dificuldade: 'media',
    textoApoio: TEXTO_ENEM_2024_D1_30,
    enunciado: `<p>No que diz respeito à arte, o posicionamento de Antônio Prata, no Texto II, aproxima-se da tese de Graciliano Ramos, no Texto I, uma vez que ambos</p>`,
    alternativas: [
      { letra: 'A', texto: 'defendem a dignidade do ofício dos artistas.' },
      { letra: 'B', texto: 'concluem que a arte reforça crenças pessoais.' },
      { letra: 'C', texto: 'apresentam a pobreza como inspiração para a arte.' },
      { letra: 'D', texto: 'afirmam o necessário caráter desestabilizador da arte.', explicacao: 'Correta! Graciliano se horroriza com uma arte de “anjinhos cor-de-rosa” e Prata critica a arte que reforça certezas, defendendo a que abala o público: os dois querem uma arte que incomode e desestabilize.' },
      { letra: 'E', texto: 'atestam que há mudanças significativas na produção artística.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-031', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 31,
    disciplina: 'Literatura', subtopico: 'Interpretação de Texto Literário', dificuldade: 'media',
    textoApoio: `
      <b>Cap. XLVIII / Terpsícore</b>
      <p>Ao contrário do que ficou dito atrás, Flora não se aborreceu na ilha. Conjeturei mal, emendo-me a tempo. Podia aborrecer-se pelas razões que lá ficam, e ainda outras que poupei ao leitor apressado; mas, em verdade, passou bem a noite. A novidade da festa, a vizinhança do mar, os navios perdidos na sombra, a cidade defronte com os seus lampiões de gás, embaixo e em cima, na praia e nos outeiros, eis aí aspectos novos que a encantaram durante aquelas horas rápidas.</p>
      <p>Não lhe faltavam pares, nem conversação, nem alegria alheia e própria. Toda ela compartia da felicidade dos outros. Via, ouvia, sorria, esquecia-se do resto para se meter consigo. Também invejava a princesa imperial, que viria a ser imperatriz um dia, com o absoluto poder de despedir ministros e damas, visitas e requerentes, e ficar só, no mais recôndito do paço, fartando-se de contemplação ou de música. Era assim que Flora definia o ofício de governar. Tais ideias passavam e tornavam. De uma vez alguém lhe disse, como para lhe dar força: “Toda alma livre é imperatriz!”.</p>
      <small>ASSIS, M. Esaú e Jacó. Rio de Janeiro: Nova Aguilar, 1974.</small>`,
    enunciado: `<p>Convidada para o último baile do Império, na Ilha Fiscal, localizada no Rio de Janeiro, Flora devaneia sobre aspectos daquele contexto, no qual o narrador ironiza a</p>`,
    alternativas: [
      { letra: 'A', texto: 'promessa de esperança com o futuro regime.' },
      { letra: 'B', texto: 'alienação da elite em relação ao fim da monarquia.', explicacao: 'Correta! No último baile do Império, às vésperas da República, todos se divertem e Flora imagina a princesa “que viria a ser imperatriz um dia”: o narrador ironiza a elite alheia ao fim iminente da monarquia.' },
      { letra: 'C', texto: 'perspectiva da contemplação distanciada da capital.' },
      { letra: 'D', texto: 'animosidade entre população e membros da nobreza.' },
      { letra: 'E', texto: 'fantasia de amor e de casamento da mulher burguesa.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2024-032', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 32,
    disciplina: 'Literatura', subtopico: 'Interpretação de Texto Literário', dificuldade: 'facil',
    textoApoio: `
      <b>Marília acorda</b>
      <p>Tomo café em golinhos para não queimar meus lábios ressequidos. Como pão em pedacinhos para não engasgar com um farelo mais duro. Marília come também, mas olha o tempo todo para baixo. Parece que tem um acanhamento novo entre a gente. Termino. Olho mais uma vez pela janela. O dia está bom. Quero caminhar pelo pátio. Marília levanta, pega o andador e põe ao lado da cama. Ela sabe que eu quero levantar sozinha, e levanto. O lance de escadas, apesar de pequeno, ainda me causa problemas, mas não quero um elevador na casa e não vou tolerar descer uma rampa de cadeira de rodas. Marília abre a porta e saímos para a manhã. O dia está mais fresco do que eu imaginava. Ela pega uma manta de tricô que temos desde não sei quando e põe sobre as minhas costas. Ela aperta meus ombros com muita força, porque mesmo depois de todos esses anos, não descobriu a medida certa do carinho. Eu gosto. Porque entendo que naquele ato, naquela força está o nosso carinho.</p>
      <small>POLESSO, N. B. Amora. Porto Alegre: Não Editora, 2015.</small>`,
    enunciado: `<p>Nesse trecho, o drama do declínio físico da narradora transmite uma sensibilidade lírica centrada na</p>`,
    alternativas: [
      { letra: 'A', texto: 'necessidade de fazer adaptações na casa.' },
      { letra: 'B', texto: 'atmosfera de afeto fortalecido pelo convívio.', explicacao: 'Correta! Os gestos de Marília (o andador, a manta, o aperto forte nos ombros) e a frase final “naquela força está o nosso carinho” mostram o afeto construído em “todos esses anos” de convivência.' },
      { letra: 'C', texto: 'condição de dependência de outras pessoas.' },
      { letra: 'D', texto: 'determinação de manter a regularidade da rotina.' },
      { letra: 'E', texto: 'aceitação das restrições de mobilidade da personagem.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2024-033', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 33,
    disciplina: 'Português', conteudo: 'por-4a1', subtopico: 'Cartaz: linguagem verbal e não verbal', dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2024-033.webp',
    legenda: 'Disponível em: https://defesacivil.rs.gov.br. Acesso em: 11 mar. 2024 (adaptado).',
    enunciado: `<p>Nesse cartaz, a expressão “Vou deixar que você se vá”, em conjunto com os elementos não verbais utilizados, tem a finalidade de</p>`,
    alternativas: [
      { letra: 'A', texto: 'incentivar o descarte de itens defeituosos.' },
      { letra: 'B', texto: 'promover a reciclagem de produtos usados.' },
      { letra: 'C', texto: 'garantir a conservação de roupas de inverno.' },
      { letra: 'D', texto: 'relacionar o gesto de doação à ideia de desapego.', explicacao: 'Correta! A frase, estampada no agasalho que a mulher segura sorrindo, numa campanha de doação, associa o ato de doar a “deixar ir” uma peça — isto é, ao desapego.' },
      { letra: 'E', texto: 'comparar a peça de roupa ao sentimento de despedida.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-034', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 34,
    disciplina: 'Português', conteudo: ['por-1a2', 'por-2a2'], subtopico: 'Línguas indígenas e tecnologia', dificuldade: 'facil',
    textoApoio: `
      <b>Teclado amazônico</b>
      <p>Em novembro de 2023, uma professora indígena recebeu uma missão: verter as regras de um jogo de tabuleiro infantil do português para o tukano, sua língua nativa. Com vinte anos de experiência como professora de línguas em Taracuá, no Amazonas, ela já se dedicava à tradução havia tempos. O trabalho ficou mais fácil graças a um aplicativo lançado no ano anterior: com o Linklado em seu computador, ela traduziu as sete páginas das instruções do jogo em dois dias. Sem esse recurso, a tarefa seria bem mais trabalhosa. Antes dele, diz a professora, as transcrições de línguas indígenas exigiam o esforço quase manual de produzir diacríticos (acentos gráficos) e letras que não constam no teclado de aplicativos de mensagens ou programas de texto.</p>
      <p>Para a pesquisadora do Instituto Nacional de Pesquisas da Amazônia (Inpa), idealizadora do aplicativo, o Linklado representa uma revolução. O programa não restringe combinações de acentos, e isso poderá facilitar a criação de representações gráficas para fonemas que ainda não têm forma escrita. “Eu mirei em uma dor e atingimos várias outras”, diz.</p>
      <p>“O Linklado possibilita que o Brasil reconheça a sua diversidade linguística”, afirma uma antropóloga que é colega da pesquisadora no Inpa e faz parte da equipe do aplicativo. Ela defende que escrever na língua materna é uma das principais formas de preservá-la.</p>
      <small>Disponível em: https://piaui.folha.uol.com.br. Acesso em: 3 fev. 2024 (adaptado).</small>`,
    enunciado: `<p>De acordo com esse texto, o aplicativo Linklado contribuiu para a</p>`,
    alternativas: [
      { letra: 'A', texto: 'criação de fonemas representativos de línguas indígenas no meio digital.' },
      { letra: 'B', texto: 'democratização do registro escrito de línguas dos povos originários.', explicacao: 'Correta! O aplicativo permite digitar os diacríticos e letras das línguas indígenas, facilitando que seus falantes escrevam nelas — o que amplia o acesso ao registro escrito e ajuda a preservá-las.' },
      { letra: 'C', texto: 'adaptação de regras de jogos de tabuleiro de origem indígena.' },
      { letra: 'D', texto: 'divulgação das técnicas de tradução de línguas indígenas.' },
      { letra: 'E', texto: 'aprendizagem da lingua portuguesa pelos indígenas.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2024-035', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 35,
    disciplina: 'Literatura', subtopico: 'Escolas Literárias', dificuldade: 'media',
    textoApoio: `
      <p>— Eu lhe juro, Aurélia. Estes lábios nunca tocaram a face de outra mulher, que não fosse minha mãe. Meu primeiro beijo de amor, guardei-o para minha esposa, para ti...</p>
      <p>[...]</p>
      <p>— Ou de outra mais rica! — disse ela, retraindo-se para fugir ao beijo do marido, e afastando-o com a ponta dos dedos.</p>
      <p>A voz da moça tomara o timbre cristalino, eco da rispidez e aspereza do sentimento que lhe sublevava o seio, e que parecia ringir-lhe nos lábios como aço.</p>
      <p>— Aurélia! Que significa isto?</p>
      <p>— Representamos uma comédia, na qual ambos desempenhamos o nosso papel com perícia consumada. Podemos ter este orgulho, que os melhores atores não nos excederiam. Mas é tempo de pôr termo a esta cruel mistificação, com que nos estamos escarnecendo mutuamente, senhor. Entremos na realidade por mais triste que ela seja; e resigne-se cada um ao que é, eu, uma mulher traída; o senhor, um homem vendido.</p>
      <p>— Vendido! — exclamou Seixas ferido dentro d’alma.</p>
      <p>— Vendido, sim: não tem outro nome. Sou rica, muito rica; sou milionária; precisava de um marido, traste indispensável às mulheres honestas. O senhor estava no mercado; comprei-o. Custou-me cem contos de réis, foi barato; não se fez valer. Eu daria o dobro, o triplo, toda a minha riqueza por este momento.</p>
      <small>ALENCAR, J. Senhora. Rio de Janeiro: Tecnoprint, 2003.</small>`,
    enunciado: `<p>Ao tematizar o casamento, esse fragmento reproduz uma concepção de literatura romântica evidenciada na</p>`,
    alternativas: [
      { letra: 'A', texto: 'defesa da igualdade de gêneros.' },
      { letra: 'B', texto: 'importância atribuída à castidade.' },
      { letra: 'C', texto: 'indignação com as injustiças sociais.' },
      { letra: 'D', texto: 'interferência da riqueza sobre o amor.', explicacao: 'Correta! Aurélia revela que “comprou” Seixas por cem contos de réis: o romance urbano de Alencar critica o casamento por interesse, mostrando o dinheiro interferindo no amor idealizado.' },
      { letra: 'E', texto: 'valorização das relações interpessoais.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-037', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 37,
    disciplina: 'Português', conteudo: 'por-2a4', subtopico: 'Intertextualidade', dificuldade: 'media',
    textoApoio: `
      <b>Se você é feito de música, este texto é pra você</b>
      <p>Às vezes, no silêncio da noite, eu fico imaginando: que graça teria a vida sem música? Sem ela não há paz, não há beleza. Nos dias de festa e nas madrugadas de pranto, nas trilhas dos filmes e nas corridas no parque, o que seria de nós sem as canções que enfeitam o cotidiano com ritmo e verso? Quem nunca curou uma dor de cotovelo dançando lambada ou terminou de se afundar ouvindo sertanejo sofrência? Quantos já criticaram funk e fecharam a noite descendo até o chão? Tudo bem... Raul nos ensinou que é preferível ser essa metamorfose ambulante do que ter aquela velha opinião formada sobre tudo.</p>
      <p>Já somos castigados com o peso das tragédias, o barulho das buzinas, os ruídos dos conflitos. É pau, é pedra, é o fim do caminho. Há uma nuvem de lágrimas sobre os olhos, você está na lanterna dos afogados, o coração despedaçado. Mas, como um sopro, da janela do vizinho, entra o samba que reanima a mente. Floresce do fundo do nosso quintal a batida que ressuscita o ânimo, sintoniza a alegria e equaliza o fôlego. Levanta, sacode a poeira, dá a volta por cima.</p>
      <small>BITTAR, L. Disponível em: www.revistabula.com. Acesso em: 21 nov. 2021 (adaptado).</small>`,
    enunciado: `<p>Defendendo a importância da música para o bem-estar e o equilíbrio emocional das pessoas, a autora usa, como recurso persuasivo, a</p>`,
    alternativas: [
      { letra: 'A', texto: 'contradição, ao associar o coração despedaçado à alegria.' },
      { letra: 'B', texto: 'metáfora, ao citar a imagem da metamorfose ambulante.' },
      { letra: 'C', texto: 'intertextualidade, ao resgatar versos de letras de canções.', explicacao: 'Correta! O texto incorpora versos de canções conhecidas (“metamorfose ambulante”, “É pau, é pedra, é o fim do caminho”, “lanterna dos afogados”, “Levanta, sacode a poeira, dá a volta por cima”), mostrando na prática o poder da música.' },
      { letra: 'D', texto: 'enumeração, ao mencionar diferentes ritmos musicais.' },
      { letra: 'E', texto: 'hipérbole, ao falar em “sofrência”, “tragédias” e “afogados”.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-038', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 38,
    disciplina: 'Literatura', subtopico: 'Interpretação de Texto Literário', dificuldade: 'facil',
    textoApoio: `
      pessoas com suas malas<br>
      mochilas e valises<br>
      chegam e se vão<br>
      se encontram<br>
      se despedem<br>
      e se despem<br>
      de seus pertences<br>
      como se pudessem chegar<br>
      a algum lugar<br>
      onde elas mesmas<br>
      não estivessem<br>
      <small>RUIZ, A. In: SANT’ANNA, A. Rua Aribau: coletânea de poemas. Porto Alegre: TAG, 2018.</small>`,
    enunciado: `<p>Esse poema, por meio da ideia de deslocamento, metaforiza a tentativa de pessoas</p>`,
    alternativas: [
      { letra: 'A', texto: 'buscarem novos encontros.' },
      { letra: 'B', texto: 'fugirem da própria identidade.', explicacao: 'Correta! Os versos finais (“como se pudessem chegar / a algum lugar / onde elas mesmas / não estivessem”) mostram que viajar é uma tentativa de escapar de si mesmo.' },
      { letra: 'C', texto: 'procurarem lugares inexplorados.' },
      { letra: 'D', texto: 'partirem em experiências inusitadas.' },
      { letra: 'E', texto: 'desaparecerem da vida em sociedade.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2024-039', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 39,
    disciplina: 'Português', conteudo: 'por-1a3', subtopico: 'Preconceito linguístico', dificuldade: 'facil',
    textoApoio: `
      <b>Falar errado é uma arte, Arnesto!</b>
      <p>No dia 6 de agosto de 1910, Emma Riccini Rubinato pariu um garoto sapeca em Valinhos e deu a ele o nome de João Rubinato. Na escola, João não passou do terceiro ano. Não era a área dele, tinha de escolher outra. Fez o que apareceu. Foi ser garçom, metalúrgico, até virar radialista, comediante, ator de cinema e TV, cantor e compositor. De samba.</p>
      <p>Como tinha sobrenome italiano, João resolveu mudar para emplacar seu samba. E como ia mudar o sobrenome, mudou o nome. Virou Adoniran Barbosa. O cara falava errado, voz rouca, pinta de malandro da roça. Virou ícone da música brasileira, o mais paulista de todos, falando errado e irritando Vinicius de Moraes, que ficou de bico fechado depois de ouvir a música que Adoniran fez para a letra <i>Bom dia, tristeza</i>, de autoria do Poetinha. Coisa de arrepiar.</p>
      <p>Para toda essa gente que implicava, Adoniran tinha uma resposta neoerudita: “Gosto de samba e não foi fácil, pra mim, ser aceito como compositor, porque ninguém queria nada com as minhas letras que falavam ‘nóis vai’, ‘nóis fumo’, ‘nóis fizemo’, ‘nóis peguemo’. Acontece que é preciso saber falar errado. Falar errado é uma arte, senão vira deboche”.</p>
      <p>Ele sabia o que fazia. Por isso dizia que falar errado era uma arte. A sua arte. Escolhida a dedo porque casava com seu tipo. O <i>Samba do Arnesto</i> é um monumento à fala errada, assim como <i>Tiro ao Álvaro</i>. O erudito podia resmungar, mas o povo se identificava.</p>
      <small>PEREIRA, E. Disponível em: www.tribunapr.com.br. Acesso em: 8 jul. 2024 (adaptado).</small>`,
    enunciado: `<p>O “falar errado” a que o texto se refere constitui um preconceito em relação ao uso que Adoniran Barbosa fazia da língua em suas composições, pois esse uso</p>`,
    alternativas: [
      { letra: 'A', texto: 'marcava a linguagem dos comediantes no mesmo período.' },
      { letra: 'B', texto: 'prejudicava a compreensão das canções pelo público.' },
      { letra: 'C', texto: 'denunciava a ausência de estilo nas letras de canção.' },
      { letra: 'D', texto: 'restringia a criação poética nas letras do compositor.' },
      { letra: 'E', texto: 'transgredia a norma-padrão vigente à época.', explicacao: 'Correta! Formas como “nóis vai” e “nóis fumo” fogem à concordância da norma-padrão; chamá-las de “erro” é preconceito linguístico, pois são variedades populares usadas conscientemente como recurso artístico.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2024-041', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 41,
    disciplina: 'Português', conteudo: 'por-4a2', subtopico: 'Reportagem', dificuldade: 'facil',
    textoApoio: `
      <p>O Brasil somou cerca de 60 mil novos casos de câncer de mama até o final de 2019, número que corresponde a 25% de todos os diagnósticos da condição registrados no país, segundo dados do Instituto Nacional do Câncer (Inca). Apesar de o Outubro Rosa ser o mês de conscientização sobre a questão voltada para as mulheres, é muito importante lembrar que um dos grandes mitos da medicina é o de que o câncer de mama não afeta o sexo masculino.</p>
      <p>Fatores importantes para detectar o câncer de mama masculino:</p>
      <ol>
        <li>Genética: se houver casos na família, as chances são um pouco mais elevadas.</li>
        <li>Hormônios: homens podem desenvolver tecido real das glândulas mamárias por tomarem certos medicamentos ou apresentarem níveis hormonais anormais.</li>
        <li>Caroços: é necessário que os médicos se atentem a alguns sintomas suspeitos, como um caroço na área do tórax.</li>
        <li>Retração na pele: em situações mais graves do câncer de mama masculino, é possível também ocorrer uma retração do mamilo.</li>
      </ol>
      <small>Disponível em: https://pebmed.com.br. Acesso em: 24 nov. 2021 (adaptado).</small>`,
    enunciado: `<p>As informações dessa reportagem auxiliam no combate ao câncer de mama masculino por apresentarem um alerta sobre o(s)</p>`,
    alternativas: [
      { letra: 'A', texto: 'sinais indicadores da doença.', explicacao: 'Correta! A lista de “fatores importantes para detectar” a doença (histórico familiar, alterações hormonais, caroços, retração do mamilo) alerta para os sinais que indicam o câncer de mama masculino.' },
      { letra: 'B', texto: 'índice de crescimento de casos.' },
      { letra: 'C', texto: 'exames para diagnóstico do tumor.' },
      { letra: 'D', texto: 'mitos a respeito da herança genética.' },
      { letra: 'E', texto: 'período de campanhas de conscientização.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2024-042', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 42,
    disciplina: 'Literatura', subtopico: 'Gêneros Literários', dificuldade: 'facil',
    textoApoio: TEXTO_ENEM_2024_D1_42,
    enunciado: `<p>Apesar de haver marcas formais de carta e receita, a característica que define esse texto como poema é o(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'nomeação de um interlocutor.' },
      { letra: 'B', texto: 'manifestação de intimidade.' },
      { letra: 'C', texto: 'descrição de procedimentos.' },
      { letra: 'D', texto: 'utilização de uma linguagem expressiva.', explicacao: 'Correta! Interlocutor nomeado é traço da carta e procedimentos/ingredientes são da receita; o que faz o texto ser poema é a linguagem expressiva — versos rimados, ritmo, personificações (“feliz, de molho”, “desmilinguindo-se de gozo”).' },
      { letra: 'E', texto: 'apresentação de ingredientes culinários.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-045', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 45,
    disciplina: 'Português', conteudo: ['por-4a2', 'por-2a2'], subtopico: 'Reportagem e letramento midiático', dificuldade: 'facil',
    textoApoio: `
      <b>Memes e <i>fake news</i>: o impacto na educação das crianças</b>
      <p>Há quem diga que o Brasil nunca mais foi o mesmo depois dos memes. Na economia da velocidade, alguns apostam no humor, outros no engajamento político, e tem gente investindo alto na mentira também. Diante desse cenário, uma pergunta se torna essencial: será que todo mundo está conseguindo traduzir as mensagens postadas, curtidas e compartilhadas?</p>
      <p>Essa dúvida incentivou uma professora de língua portuguesa a desenvolver uma proposta de leitura e análise crítica de memes com estudantes do ensino fundamental, na rede pública do Distrito Federal, na cidade de Samambaia. “Percebi que muitos alunos e pais estavam divulgando conteúdos sem saber o que havia por trás das palavras”, relata a professora.</p>
      <p>“O que antes era engraçado para os alunos passou a ser visto com outros olhos”, afirma a professora. Para ela, que utilizou a representação da criança em memes de WhatsApp como material gerador das discussões em sala de aula, aguçar o olhar sobre essas mensagens impacta diretamente a atitude de postar, curtir e compartilhar conteúdos ao estimular o uso consciente da informação que circula nas plataformas de mídia social.</p>
      <p>Letramento político e midiático é um desafio intergeracional. Em tempos de notícias falsas, de imagens manipuladas e de memes sendo usados como triunfo da verdade de cada um, checagem de informação e interpretação de texto acabam se tornando moedas valiosas.</p>
      <small>Disponível em: https://lunetas.com.br. Acesso em: 15 jan. 2024 (adaptado).</small>`,
    enunciado: `<p>Ao abordar a relação dos memes com a educação, a reportagem sustenta uma crítica à</p>`,
    alternativas: [
      { letra: 'A', texto: 'falta de fiscalização no uso de aplicativos de mensagens por crianças.' },
      { letra: 'B', texto: 'divulgação de informação manipulada em postagens virtuais.', explicacao: 'Correta! A reportagem critica quem “investe alto na mentira” e o compartilhamento de conteúdos sem análise, em “tempos de notícias falsas, de imagens manipuladas”, defendendo a checagem de informação.' },
      { letra: 'C', texto: 'utilização de ferramentas digitais no trabalho educacional.' },
      { letra: 'D', texto: 'exploração de conteúdos humorísticos nas mídias sociais.' },
      { letra: 'E', texto: 'propagação de mensagens com objetivos políticos.' },
    ],
    gabarito: 'B',
  },

  // ───────────── CIÊNCIAS HUMANAS (46 a 90) ─────────────
  {
    id: 'enem-2024-046', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 46,
    disciplina: 'Geografia', conteudo: 'geo-2u1', subtopico: 'Tectônica de placas e terremotos', dificuldade: 'media',
    textoApoio: `
      <b>TEXTO I</b><br>
      Um terremoto de magnitude 5,9 atingiu a cidade de Valparaíso, na costa chilena. O terremoto ocorreu a uma profundidade de 112 quilômetros.<br>
      <small>Terremoto de magnitude 5,9 atinge Valparaíso, no Chile. Disponível em: www.cnnbrasil.com.br. Acesso em: 6 nov. 2021 (adaptado).</small><br><br>
      <b>TEXTO II</b><br>
      Um tremor de terra de magnitude 4,8 foi registrado no município de Atalaia do Norte, no interior do estado do Amazonas. O abalo é de magnitude considerada mediana para os níveis do Brasil. Os eventos dessa região costumam ser resultado das atividades da placa de Nazca.<br>
      <small>Tremor de terra de magnitude 4,8 é registrado no interior do Amazonas. Disponível em: https://g1.globo.com. Acesso em: 6 nov. 2021 (adaptado).</small><br><br>
      <b>TEXTO III</b><br>
      Moradores usaram as redes sociais para relatar tremores de terra no interior de São Paulo. As atividades foram registradas nas cidades de Júlio Mesquita e Guaimbê e tiveram magnitude 3,0 na escala Richter, o que é considerado pequeno e sem previsão de danos.<br>
      <small>Moradores do interior de SP relatam tremores de terra. Disponível em: https://noticias.r7.com. Acesso em: 6 nov. 2021 (adaptado).</small>`,
    enunciado: `<p>As diferenças entre os eventos geológicos relatados decorrem de distintas posições geográficas das cidades em relação a:</p>`,
    alternativas: [
      { letra: 'A', texto: 'Planícies costeiras.' },
      { letra: 'B', texto: 'Bacias continentais.' },
      { letra: 'C', texto: 'Zonas de subducção.', explicacao: 'Correta! Valparaíso fica junto à zona de subducção da placa de Nazca sob a Sul-Americana (tremor mais forte); o Amazonas sente efeitos dessa placa mais longe, e o interior paulista está no centro da placa (tremores fracos, intraplaca).' },
      { letra: 'D', texto: 'Áreas de denudação.' },
      { letra: 'E', texto: 'Vertentes escarpadas.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-047', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 47,
    disciplina: 'História', conteudo: 'his-c1', subtopico: 'Saúde pública na Primeira República', dificuldade: 'media',
    textoApoio: `
      <p>Tal qual num exército, não se compreende um efetivo composto apenas de oficiais. Também na saúde pública, os funcionários técnicos graduados necessitam ser assistidos por auxiliares em número suficiente e com preparo adequado, constituído pelas enfermeiras de saúde pública, educadoras ou visitadoras sanitárias, técnicos de laboratório, inspetores ou guardas etc., para não falarmos no pessoal burocrático, não especializado.</p>
      <small>PAULA SOUZA, G. H.; VIEIRA, F. B. Centro de saúde “eixo” de organização sanitária. Boletim do Instituto de Higiene de São Paulo, n. 59 (adaptado).</small>`,
    enunciado: `<p>O texto dos sanitaristas atuantes nas décadas de 1920 e 1930 veicula uma mensagem caracterizada pela</p>`,
    alternativas: [
      { letra: 'A', texto: 'higienização moral.' },
      { letra: 'B', texto: 'imposição eugênica.' },
      { letra: 'C', texto: 'assimilação cultural.' },
      { letra: 'D', texto: 'hegemonização identitária.' },
      { letra: 'E', texto: 'hierarquização profissional.', explicacao: 'Correta! A comparação com o exército (oficiais e efetivo) organiza a saúde pública em níveis: técnicos graduados no topo, assistidos por auxiliares — uma hierarquia entre as profissões.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2024-048', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 48,
    disciplina: 'Geografia', conteudo: 'geo-1u1', subtopico: 'Lugar e espaço vivido', dificuldade: 'facil',
    textoApoio: `
      <p>O rompimento da barragem de Fundão levou muito consigo. A lama soterrou sonhos e modificou de forma permanente centenas de vidas nascidas e criadas em Bento Rodrigues e Paracatu, em Mariana (MG). Mas não somente. Ao se estender ao longo do rio, outras famílias e histórias foram atingidas de formas diferentes. Ao fugirem dos rejeitos que rapidamente tomaram as localidades, deixaram para trás os resquícios da vida que tiveram até o 5 de novembro de 2015. Nada jamais seria igual.</p>
      <small>SANTOS, P. Histórias soterradas. Curinga, n. 19, nov. 2016 (adaptado).</small>`,
    enunciado: `<p>Conforme o texto, o evento gerou o seguinte impacto na relação entre as pessoas e o seu espaço vivido:</p>`,
    alternativas: [
      { letra: 'A', texto: 'Flexibilização de parâmetros ambientais.' },
      { letra: 'B', texto: 'Consolidação de identidades regionais.' },
      { letra: 'C', texto: 'Fragilização de vínculos afetivos.', explicacao: 'Correta! O espaço vivido é o “lugar”, marcado por laços afetivos; ao perderem suas comunidades soterradas pela lama, os moradores tiveram rompidos esses vínculos com o lugar onde nasceram e viveram.' },
      { letra: 'D', texto: 'Supressão de práticas exploratórias.' },
      { letra: 'E', texto: 'Recuperação de tradições ancestrais.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-049', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 49,
    disciplina: 'História', conteudo: 'his-3b2', subtopico: 'Modernização e República', dificuldade: 'media',
    textoApoio: `
      <p>Com a proximidade do final do século XIX, amplificam-se as expectativas com relação ao século seguinte. Se muitas eram as utopias, talvez uma das mais evidentes tenha se concentrado nas potencialidades da nova ciência, com suas invenções e projetos. Não é por mera coincidência que a agenda do país tenha sido tomada pela introdução de uma série de inventos. De forma acelerada, entraram no Brasil a luz elétrica e, com ela, o telégrafo, o telefone, o cinematógrafo. Na área dos transportes, o trem a vapor é substituído pelo elétrico, que assiste à entrada do automóvel e até do aeroplano.</p>
      <small>COSTA, A. M.; SCHWARCZ, L. M. 1890-1914, no tempo das certezas. São Paulo: Cia. das Letras, 2000 (adaptado).</small>`,
    enunciado: `<p>No Brasil, os eventos descritos ganharam conotação política ao serem vinculados à</p>`,
    alternativas: [
      { letra: 'A', texto: 'expansão estratégica do imperialismo.' },
      { letra: 'B', texto: 'ascensão gradual do mercantilismo.' },
      { letra: 'C', texto: 'laicidade da educação.' },
      { letra: 'D', texto: 'retomada do absolutismo.' },
      { letra: 'E', texto: 'visão republicana de nação.', explicacao: 'Correta! Entre 1890 e 1914, os republicanos associaram as novidades técnicas ao “progresso” e à modernidade que o novo regime prometia, opondo-as ao Império visto como atrasado.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2024-050', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 50,
    disciplina: 'História', conteudo: 'his-2a3', subtopico: 'Colonização espanhola', dificuldade: 'facil',
    textoApoio: `
      <p>O bispo Bartolomeu de Las Casas é o homem mais odiado da América, o anti-Cristo dos senhores, o açoite destas terras. Por sua culpa, o imperador promulgou novas leis que despojam de escravos índios os filhos dos conquistadores. O que será deles sem os braços que os sustentam nas minas e nas lavouras? As novas leis estão arrancando a comida de suas bocas. Las Casas é o homem mais amado da América. Voz dos mudos, teimoso defensor dos que recebem pior tratamento que o esterco das praças, denunciador de quem por cobiça converte Jesus Cristo no mais cruel dos deuses e o rei em lobo faminto de carne humana.</p>
      <small>GALEANO, E. Os nascimentos. Porto Alegre: L&amp;PM, 2011 (adaptado).</small>`,
    enunciado: `<p>Os diferentes pontos de vista presentes no texto expressam que o bispo era, ao mesmo tempo,</p>`,
    alternativas: [
      { letra: 'A', texto: 'execrado pelos reis e reverenciado pelos religiosos do local.' },
      { letra: 'B', texto: 'detestado pelos colonizadores e respeitado pelos povos do lugar.', explicacao: 'Correta! Las Casas é odiado pelos conquistadores, que perderam os indígenas escravizados com as novas leis, e amado pelos indígenas, de quem era “voz dos mudos” e defensor.' },
      { letra: 'C', texto: 'menosprezado pela colônia e idolatrado pelos governantes da região.' },
      { letra: 'D', texto: 'desrespeitado pela metrópole e adorado pelos invasores da Espanha.' },
      { letra: 'E', texto: 'desacatado pelos excluídos e valorizado pelos negociantes de negros.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2024-051', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 51,
    disciplina: 'História', conteudo: 'his-2a4', subtopico: 'Sociedade do Antigo Regime', dificuldade: 'facil',
    textoApoio: `
      <p>A valsa vienense é a mais antiga das danças de salão tradicional. É dançada desde a Idade Média, quando os pares davam voltas pelo salão realizando giros em torno de si mesmos em postura fechada. Pelo fato de ser dançada aos pares em contato íntimo, a valsa encantava a sociedade medieval, como também sofria proibições por infringir os “bons costumes”. Originária das danças campestres e folclóricas, no século XVI, a aristocracia francesa abandonou a valsa por sua estreita relação com a cultura plebeia, retomando-a posteriormente.</p>
      <small>FRANCO, N.; FERREIRA, N. Evolução da dança no contexto histórico: aproximações iniciais com o tema. Repertório, n. 26, 2016 (adaptado).</small>`,
    enunciado: `<p>A expressão cultural descrita no texto foi rejeitada no início da Idade Moderna por congregar</p>`,
    alternativas: [
      { letra: 'A', texto: 'traços advindos da feitiçaria nórdica.' },
      { letra: 'B', texto: 'práticas inspiradas em rituais pagãos.' },
      { letra: 'C', texto: 'regras decorrentes do período renascentista.' },
      { letra: 'D', texto: 'compassos produzidos em territórios colonizados.' },
      { letra: 'E', texto: 'elementos provenientes de segmentos populares.', explicacao: 'Correta! O texto diz que, no século XVI, a aristocracia francesa abandonou a valsa “por sua estreita relação com a cultura plebeia”, ou seja, por sua origem popular.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2024-053', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 53,
    disciplina: 'Geografia', conteudo: 'geo-3u3', subtopico: 'Inundações e relevo', dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2024-053.webp',
    legendaAcima: 'Diferenças entre inundação gradual e brusca',
    legenda: 'TOMINAGA, L. K.; SANTORO, J.; AMARAL, R. Desastres naturais: conhecer para prevenir. São Paulo: Instituto Geológico, 2009 (adaptado).',
    enunciado: `<p>A desproporção de velocidade e tempo de duração nos tipos de inundação destacados é condicionada pela</p>`,
    alternativas: [
      { letra: 'A', texto: 'variabilidade solar anual.' },
      { letra: 'B', texto: 'temperatura média mensal.' },
      { letra: 'C', texto: 'declividade do relevo local.', explicacao: 'Correta! Em áreas de relevo íngreme a água escoa rápido e a inundação é brusca (alta velocidade, curta duração); em áreas planas o escoamento é lento e a cheia é gradual e prolongada.' },
      { letra: 'D', texto: 'dinâmica tectônica regional.' },
      { letra: 'E', texto: 'gradação da turbidez fluvial.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-057', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 57,
    disciplina: 'Geografia', conteudo: 'geo-3u5', subtopico: 'Espaço público', dificuldade: 'facil',
    textoApoio: `
      <p>Espaços públicos não são produtos dados e acabados, uma instituição que, uma vez estabelecida, traria a paz da consensualidade e a perfeita igualdade. São os lugares em que os problemas aparecem e se transformam em debates, em diálogo e em possibilidade de ajuste e compromissos. Por isso, não anulam os conflitos, ao contrário, são canais de comunicação e de visibilidade de oposições.</p>
      <small>GOMES, P. C. C. Espaço público, espaços públicos. Geographia, n. 44, set.-dez. 2018 (adaptado).</small>`,
    enunciado: `<p>As características descritas no texto exibem a importância dos espaços públicos para a</p>`,
    alternativas: [
      { letra: 'A', texto: 'prática do lazer.' },
      { letra: 'B', texto: 'vigilância da sociedade.' },
      { letra: 'C', texto: 'erradicação da violência.' },
      { letra: 'D', texto: 'construção da democracia.', explicacao: 'Correta! Espaços onde os problemas viram debate, diálogo e compromisso, e onde as oposições ganham visibilidade, são fundamentais para a vida democrática.' },
      { letra: 'E', texto: 'diversificação do trabalho.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-059', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 59,
    disciplina: 'História', conteudo: 'his-2a1', subtopico: 'Universidades medievais', dificuldade: 'facil',
    textoApoio: `
      <p>As instituições que a Idade Média nos legou são de um valor maior e mais imperecível do que suas catedrais. E a universidade é nitidamente uma instituição medieval — tanto quanto a monarquia constitucional, ou os parlamentos, ou o julgamento por meio do júri. As universidades e os produtos imediatos das suas atividades constituem a grande realização da Idade Média na esfera intelectual.</p>
      <small>RASHDALL, H. apud OLIVEIRA, T. Origem e memória das universidades medievais. Varia História, n. 37, jan.-jun. 2007.</small>`,
    enunciado: `<p>De acordo com o texto, o legado das universidades medievais torna-se um relevante patrimônio histórico-cultural por</p>`,
    alternativas: [
      { letra: 'A', texto: 'adotar currículo e método padronizado.' },
      { letra: 'B', texto: 'rejeitar ideologias e costumes orientais.' },
      { letra: 'C', texto: 'possuir organização e função mercantil.' },
      { letra: 'D', texto: 'transmitir técnicas e valores ecumênicos.' },
      { letra: 'E', texto: 'agregar tradição e conhecimento científico.', explicacao: 'Correta! A universidade é uma instituição que atravessou os séculos (tradição) e foi “a grande realização da Idade Média na esfera intelectual”, produzindo e transmitindo conhecimento.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2024-060', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 60,
    disciplina: 'Geografia', conteudo: 'geo-2u2', subtopico: 'Reservas extrativistas e populações tradicionais', dificuldade: 'media',
    textoApoio: `
      <p>Há experiências de lutas sociais de reapropriação cultural da natureza que são movimentos emblemáticos, como a dos seringueiros no Brasil, que da luta sindical para a comercialização da borracha chegaram a inventar o conceito de reserva extrativista e estão avançando para um novo modo de produção, uma nova racionalidade produtiva, mostrando que é possível viver bem, e não apenas sobreviver, em harmonia com a natureza que habitam. O novo planeta que podemos imaginar é feito desses territórios produtivos que não são apenas economias de autossubsistência mas economias que potencializam a produtividade ecológica de seus territórios.</p>
      <small>LEFF, E. Discursos sustentáveis. São Paulo: Cortez, 2010 (adaptado).</small>`,
    enunciado: `<p>O texto expõe a possibilidade de uma nova racionalidade produtiva por meio de uma gestão territorial que se baseia na</p>`,
    alternativas: [
      { letra: 'A', texto: 'integração de mercados regidos por pressões regionais.' },
      { letra: 'B', texto: 'conexão de valores fundamentados por decisões locais.', explicacao: 'Correta! A reserva extrativista nasceu da luta dos próprios seringueiros: a gestão do território parte das comunidades locais, unindo seus valores culturais ao uso sustentável da natureza.' },
      { letra: 'C', texto: 'unificação de preços delimitados por demandas nacionais.' },
      { letra: 'D', texto: 'normatização de regras construídas por instituições mundiais.' },
      { letra: 'E', texto: 'valorização de tradições orientadas por determinações globais.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2024-064', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 64,
    disciplina: 'História', conteudo: 'his-2b6-2', subtopico: 'Abolicionismo', dificuldade: 'facil',
    textoApoio: `
      <b>TEXTO I</b><br>
      Neta de Tomásia, uma escravizada alforriada, Chiquinha Gonzaga foi uma das primeiras mulheres a se destacar na música popular brasileira. Entre suas obras mais famosas estão a marcha <i>Ó abre alas</i>, sucesso nos blocos de Carnaval até hoje, e o tango <i>Gaúcho</i>, além de inúmeras peças musicais para teatro e óperas. Chiquinha também teve uma atuação em defesa dos direitos das mulheres e pelo fim da escravatura.<br>
      <small>Disponível em: www.uol.com.br. Acesso em: 7 out. 2023 (adaptado).</small><br><br>
      <b>TEXTO II</b><br>
      Depois da estreia de sua peça <i>Gonzaga</i>, em 1867, que tem como um de seus núcleos dramáticos dois escravizados, pai e filha, separados há muitos anos, Castro Alves escreve talvez o maior conjunto de poemas antiescravistas do Romantismo brasileiro, publicados em 1883 no livro <i>Os escravos</i>, doze anos após a sua morte. Os textos <i>Vozes d’África</i> e <i>Navio negreiro</i>, por exemplo, publicados em folhetos, já em 1878, tiveram enorme repercussão desde a sua circulação, a ponto de Afrânio Coutinho (um importante crítico brasileiro) afirmar ter sido Castro Alves, no que diz respeito à poesia antiescravista, um dos primeiros que o Brasil ouviu.<br>
      <small>Disponível em: www.uol.com.br. Acesso em: 8 out. 2023 (adaptado).</small>`,
    enunciado: `<p>Os textos indicam a participação de artistas e intelectuais brasileiros em defesa do(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'ação integralista.' },
      { letra: 'B', texto: 'literatura realista.' },
      { letra: 'C', texto: 'movimento abolicionista.', explicacao: 'Correta! Chiquinha Gonzaga lutou “pelo fim da escravatura” e Castro Alves escreveu poemas antiescravistas como “Navio negreiro”: ambos participaram do movimento abolicionista no Segundo Reinado.' },
      { letra: 'D', texto: 'política indigenista.' },
      { letra: 'E', texto: 'nacionalismo desenvolvimentista.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-066', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 66,
    disciplina: 'História', conteudo: 'his-c1', subtopico: 'Pílula anticoncepcional e planejamento familiar', dificuldade: 'facil',
    textoApoio: `
      <p>Em 1960, a primeira pílula anticoncepcional foi comercializada nos EUA, e, em poucos anos, o método contraceptivo se difundiu pelo mundo, inclusive no Brasil. Em nosso país, a chegada das pílulas anticoncepcionais foi simultânea às discussões neomalthusianas sobre a crise demográfica, à aceleração dos processos de modernização e ao <i>boom</i> da indústria farmacêutica multinacional.</p>
      <small>DIAS, T. M. et al. A pílula da oportunidade: discursos sobre as pílulas anticoncepcionais em A Gazeta da Farmácia, 1960-1981. História, Ciências, Saúde — Manguinhos, n. 3, jul.-set. 2018 (adaptado).</small>`,
    enunciado: `<p>Qual foi o efeito social resultante do avanço tecnológico mencionado no texto?</p>`,
    alternativas: [
      { letra: 'A', texto: 'O afastamento da autoridade médica na regulação da fecundidade.' },
      { letra: 'B', texto: 'A superação do discurso da moralidade pela ação da mídia estatal.' },
      { letra: 'C', texto: 'A ampliação do debate público sobre o planejamento familiar.', explicacao: 'Correta! A pílula chegou junto com as discussões neomalthusianas sobre controle populacional e permitiu separar sexualidade e reprodução, ampliando o debate público sobre planejamento familiar.' },
      { letra: 'D', texto: 'A centralização da pesquisa científica pelo sistema privado de saúde.' },
      { letra: 'E', texto: 'O enrijecimento das doutrinas religiosas sobre a organização da vida doméstica.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-067', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 67,
    disciplina: 'Geografia', conteudo: 'geo-2u2', subtopico: 'Tecnologia e comunidades tradicionais', dificuldade: 'facil',
    textoApoio: `
      <p>A internet fortalece o engajamento e a visibilidade de populações tradicionais e indígenas por meio de redes sociais, rádios e veículos de mídia digital. Ela também promove a criação e o fortalecimento de mercados e a inovação nos sistemas de financiamento, integrando pequenos agricultores e produtores da comunidade florestal a cadeias de abastecimento maiores.</p>
      <small>GROTTERA, C.; CASTRO, L. M.; BRITO, M. C. Como a tecnologia pode ser uma aliada na conservação ambiental. Nexo Jornal, 14 ago. 2021.</small>`,
    enunciado: `<p>A adoção da tecnologia mencionada amplia a rentabilidade das comunidades citadas, ao possibilitar o(a):</p>`,
    alternativas: [
      { letra: 'A', texto: 'Valorização da economia local.', explicacao: 'Correta! Ao integrar pequenos produtores florestais a mercados e cadeias de abastecimento maiores, a internet valoriza o que a comunidade produz e aumenta sua renda.' },
      { letra: 'B', texto: 'Elaboração de projetos culturais.' },
      { letra: 'C', texto: 'Estabelecimento de regras comerciais.' },
      { letra: 'D', texto: 'Incremento da infraestrutura educacional.' },
      { letra: 'E', texto: 'Homogeneização da qualificação profissional.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2024-068', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 68,
    disciplina: 'Geografia', conteudo: ['geo-3u1', 'geo-4u2'], subtopico: 'Desmatamento e chuvas na Amazônia', dificuldade: 'media',
    textoApoio: `
      <b>TEXTO I</b><br>
      Uma única árvore joga entre 300 e 1 000 litros de água por dia para a atmosfera. Considerando a demanda mínima que uma pessoa consome de água, ou seja, 120 litros por dia, uma única árvore pode ser capaz de produzir água para até oito pessoas.<br>
      <small>MAGNO, C. Estudiosos explicam o motivo de chover tanto em Belém. Disponível em: www.diarioonline.com.br. Acesso em: 6 nov. 2021.</small><br><br>
      <b>TEXTO II</b><br>
      A Amazônia perdeu diariamente uma área de floresta maior do que 4 mil campos de futebol apenas em setembro de 2021. Em todo o mês, foram devastados 1 224 km², o que corresponde ao tamanho da cidade do Rio de Janeiro e é a pior marca para setembro em 10 anos. Os dados são do Sistema de Alerta de Desmatamento (SAD) do Instituto do Homem e Meio Ambiente da Amazônia (Imazon), que monitora a floresta por meio de imagens de satélites.<br>
      <small>FREITAS, A. Desmatamento na Amazônia em setembro foi o maior para o período em 10 anos. Disponível em: www.cnnbrasil.com.br. Acesso em: 6 nov. 2021.</small>`,
    enunciado: `<p>Para a região amazônica, a relação entre as informações dos textos indica uma redução do(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'circulação de ventos alísios.' },
      { letra: 'B', texto: 'aquecimento dos solos locais.' },
      { letra: 'C', texto: 'média de temperatura oceânica.' },
      { letra: 'D', texto: 'índice de refletividade superficial.' },
      { letra: 'E', texto: 'intensidade de chuvas convectivas.', explicacao: 'Correta! As árvores lançam muita umidade na atmosfera pela evapotranspiração, que alimenta as chuvas convectivas locais; com o desmatamento, essa umidade diminui e as chuvas perdem intensidade.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2024-069', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 69,
    disciplina: 'História', conteudo: 'his-2a6', subtopico: 'Iluminismo e direitos da mulher', dificuldade: 'media',
    textoApoio: `
      <p>Atribuo a causa desse florescimento estéril a um sistema de educação falso, extraído de livros sobre o assunto escrito por homens que, ao considerar as mulheres mais como fêmeas do que como criaturas humanas, estão mais ansiosos em torná-las damas sedutoras do que esposas afetuosas e mães racionais. O entendimento do sexo feminino tem sido tão distorcido por essa homenagem ilusória de que as mulheres civilizadas de nosso século, com raras exceções, anseiam apenas inspirar amor, quando deveriam nutrir uma ambição mais nobre e exigir respeito por suas capacidades e virtudes.</p>
      <small>WOLLSTONECRAFT, M. Reivindicação dos direitos da mulher. São Paulo: Boitempo, 2016.</small>`,
    enunciado: `<p>Nesse texto, escrito no século XVIII, a autora reivindica para as mulheres a</p>`,
    alternativas: [
      { letra: 'A', texto: 'recuperação de sua participação política.' },
      { letra: 'B', texto: 'equiparação de ganhos salariais.' },
      { letra: 'C', texto: 'valorização de seu papel social.', explicacao: 'Correta! A autora critica a educação que reduz as mulheres a “damas sedutoras” e pede que exijam “respeito por suas capacidades e virtudes”, como esposas e mães racionais: é a valorização do papel social feminino.' },
      { letra: 'D', texto: 'distinção de padrões biológicos.' },
      { letra: 'E', texto: 'ocupação de cargos públicos.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-070', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 70,
    disciplina: 'Geografia', conteudo: 'geo-4u4', subtopico: 'Objetos técnicos e fluxos', dificuldade: 'facil',
    textoApoio: `
      <p>Cada objeto é, em si mesmo, um sistema funcionando sistemicamente. Um grande supermercado ou <i>shopping center</i> seria incapaz de existir se não fossem servidos por vias rápidas, estacionamentos adequados e acessíveis, sistemas de transportes públicos com horários regulares e conhecidos e se, no seu próprio interior, as atividades não estivessem subordinadas a uma coordenação. Esse é o caso dos armazéns, dos silos etc. Os portos, a rede rodoviária de um país e, sobretudo, a rede ferroviária são exemplos de objetos complexos e sistêmicos.</p>
      <small>SANTOS, M. A natureza do espaço: técnica, tempo, razão e emoção. São Paulo: Hucitec, 1996 (adaptado).</small>`,
    enunciado: `<p>De acordo com o texto, o território torna-se cada vez mais dotado de objetos com a finalidade de intensificar a</p>`,
    alternativas: [
      { letra: 'A', texto: 'desindustrialização da economia.' },
      { letra: 'B', texto: 'desregulamentação do mercado.' },
      { letra: 'C', texto: 'concentração da produção.' },
      { letra: 'D', texto: 'distribuição de renda.' },
      { letra: 'E', texto: 'dinamização dos fluxos.', explicacao: 'Correta! Vias rápidas, portos, ferrovias, armazéns e transportes coordenados são objetos técnicos que aceleram a circulação de pessoas, mercadorias e informações — os fluxos no território.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2024-071', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 71,
    disciplina: 'Geografia', conteudo: 'geo-4u5', subtopico: 'Conferências do clima', dificuldade: 'facil',
    textoApoio: `
      <p>A 26ª Conferência do Clima das Nações Unidas foi realizada com a perspectiva de que os países tornassem ainda mais ambiciosos os compromissos assumidos no enfrentamento das mudanças climáticas, de modo a evitar que a temperatura global se eleve acima de 1,5 °C, marca que já vinha sendo discutida desde o Acordo de Paris, de 2015.</p>
      <p>A pressão do setor empresarial, que se posicionou de maneira contundente nesta COP-26, gerou impacto positivo. O Conselho Empresarial Brasileiro para o Desenvolvimento Sustentável (CEBDS) capitaneou, por meio do movimento Empresários pelo Clima, a adesão de 119 CEOs de importantes empresas e 14 instituições do setor privado, de setores tão diversos como agronegócio, alimentício, aviação, elétrico, farmacêutico, finanças, infraestrutura, logística, papel e celulose, petroquímico, saúde, tecnologia, telefonia e varejo.</p>
      <p>O Brasil deixa a conferência com o compromisso de fazer valer sua meta e reduzir 50% dos gases de efeito estufa até 2030 em relação aos níveis de 2005 — anteriormente, a meta de redução era de 43%.</p>
      <small>GROSSI, M. A mais plural das COPs e a lição de casa para o Brasil. Disponível em: www.nexojornal.com.br. Acesso em: 24 nov. 2021 (adaptado).</small>`,
    enunciado: `<p>Conforme o texto, o compromisso assumido pelo Brasil foi resultado dos tensionamentos promovidos por</p>`,
    alternativas: [
      { letra: 'A', texto: 'povos ribeirinhos e segmentos culturais.' },
      { letra: 'B', texto: 'blocos econômicos e instituições militares.' },
      { letra: 'C', texto: 'grupos científicos e universidades públicas.' },
      { letra: 'D', texto: 'organismos supranacionais e sociedade civil.', explicacao: 'Correta! A conferência da ONU (organismo supranacional) e a pressão do setor empresarial organizado (sociedade civil) levaram o Brasil a ampliar sua meta de 43% para 50% de redução de emissões.' },
      { letra: 'E', texto: 'agentes governamentais e demanda turística.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-074', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 74,
    disciplina: 'História', conteudo: 'his-1a1', subtopico: 'Patrimônio imaterial', dificuldade: 'facil',
    textoApoio: `
      <p>O Círio de Nazaré é uma festa que ocorre, anualmente, na cidade de Belém do Pará, no segundo domingo do mês de outubro. Sua estrutura ritualística tem origem no catolicismo devocional que surge em Portugal por volta do século XV. Até 1789, a festa em louvor a Nossa Senhora de Nazaré, em Belém, era marcada pelas ladainhas e novenas. Em 1790, a Igreja Católica autorizou a realização de festa em homenagem à Virgem. A primeira procissão ocorreu em 1793. Existindo há mais de duzentos anos, a Festa congrega um extenso mosaico de elementos integrados em diferentes planos e graus de intensidade.</p>
      <small>ALMEIDA, I. M. A. Revisitando o Círio de Nazaré a partir da lente sociológica de Eidorfe Moreira. Boletim do Museu Paraense Emílio Goeldi, n. 3, set.-dez. 2015 (adaptado).</small>`,
    enunciado: `<p>O reconhecimento da festa descrita no texto, como patrimônio histórico, encontra sustentação no(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'instituição de políticas públicas de âmbito local.' },
      { letra: 'B', texto: 'registro de bens culturais de natureza imaterial.', explicacao: 'Correta! Festas, celebrações e saberes são patrimônio imaterial, protegido pelo registro (não pelo tombamento, que vale para bens materiais); o Círio de Nazaré foi registrado pelo Iphan.' },
      { letra: 'C', texto: 'tombamento de sítios arqueológicos de propriedade privada.' },
      { letra: 'D', texto: 'salvaguarda de elementos sacros de expressão regional.' },
      { letra: 'E', texto: 'categorização de manifestações cristãs de caráter oficial.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2024-075', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 75,
    disciplina: 'História', conteudo: 'his-2a6', subtopico: 'Iluminismo: salões e cafés', dificuldade: 'media',
    textoApoio: `
      <p>Os salões permitiam aos escritores da época do Iluminismo adentrar no universo dos poderosos. Figuras como as de Voltaire e Duclos exortavam seus “irmãos” a aproveitarem da mobilidade que era oferecida pela ordem social do Antigo Regime, juntando-se à elite. Nos últimos decênios do <i>Ancien Régime</i>, ele foi se tornando cada vez mais o reduto dos filósofos do Alto Iluminismo, que deixavam os cafés para os tipos inferiores de literário. Com efeito, os cafés se constituíram na antítese lógica dos salões. Eles eram abertos a todos, a um passo da rua. Como é possível constatar, salões e cafés constituem interessantes instituições do espaço público literário através das quais é possível vislumbrar as bases sociais nas quais se assentavam o Alto e o Baixo Iluminismo.</p>
      <small>HABERMAS, J. Mudança estrutural da esfera pública: investigações quanto a uma categoria da sociedade burguesa. Rio de Janeiro: Tempo Brasileiro, 1984 (adaptado).</small>`,
    enunciado: `<p>No período iluminista, os espaços sociais mencionados contribuíram para</p>`,
    alternativas: [
      { letra: 'A', texto: 'segregar pensadores e aumentar a circulação de ideias.', explicacao: 'Correta! Os salões reuniam o “Alto Iluminismo” junto à elite e os cafés ficavam com os literatos “inferiores”, separando os pensadores; ao mesmo tempo, ambos eram espaços de debate que faziam as ideias circularem.' },
      { letra: 'B', texto: 'apoiar revolucionários e perseguir a nobreza local.' },
      { letra: 'C', texto: 'rejeitar poetisas e proibir a entrada de mulheres.' },
      { letra: 'D', texto: 'censurar cronistas e coibir o patrocínio editorial.' },
      { letra: 'E', texto: 'integrar artistas e ampliar o comércio urbano.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2024-077', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 77,
    disciplina: 'História', conteudo: 'his-3b6', subtopico: 'Estado Novo e propaganda (DIP)', dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2024-077.webp',
    legenda: 'VIEIRA, A. P. L. O Departamento de Imprensa e Propaganda e a política editorial do Estado Novo (1937-1945). Rio de Janeiro: Unirio, 2019.',
    enunciado: `<p>O que as capas da revista <i>Travel in Brazil</i>, publicadas entre 1941 e 1944 pelo Departamento de Imprensa e Propaganda (DIP), evidenciam?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Estereótipos da cultura nacional.', explicacao: 'Correta! Voltadas ao público estrangeiro, as capas do DIP mostram figuras-símbolo do Brasil (a baiana à moda de Carmen Miranda, o gaúcho a cavalo, tipos regionais): imagens estereotipadas da cultura nacional usadas como propaganda do Estado Novo.' },
      { letra: 'B', texto: 'Exploração da população pobre.' },
      { letra: 'C', texto: 'Preconceitos de ordem racial.' },
      { letra: 'D', texto: 'Política de censura midiática.' },
      { letra: 'E', texto: 'Projeto de país industrial.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2024-079', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 79,
    disciplina: 'Geografia', conteudo: 'geo-1u5', subtopico: 'Refugiados', dificuldade: 'facil',
    textoApoio: `
      <p>O que alicerça, portanto, o acolhimento de refugiados pelos Estados gira em torno da fronteira erguida entre inclusão e exclusão, admissão e rejeição, desejáveis e indesejáveis; ao mesmo tempo, enseja vulnerabilidade, indefinição e incerteza a esses migrantes internacionais forçados.</p>
      <small>MOREIRA, J. B. Refugiados no Brasil. REMHU, n. 43, jul.-dez. 2014.</small>`,
    enunciado: `<p>A eliminação, para os refugiados, do tipo de fronteira descrita no texto necessita de políticas públicas de</p>`,
    alternativas: [
      { letra: 'A', texto: 'planejamento familiar.' },
      { letra: 'B', texto: 'segregação territorial.' },
      { letra: 'C', texto: 'homogeneização cultural.' },
      { letra: 'D', texto: 'diferenciação étnico-racial.' },
      { letra: 'E', texto: 'integração socioeconômica.', explicacao: 'Correta! A “fronteira” entre inclusão e exclusão só desaparece quando o refugiado é integrado à sociedade, com acesso a trabalho, renda, moradia e serviços.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2024-080', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 80,
    disciplina: 'Geografia', conteudo: 'geo-4u5', subtopico: 'Globalização cultural', dificuldade: 'facil',
    textoApoio: `
      <b>TEXTO I</b><br>
      “As novelas brasileiras foram as primeiras a aparecer na TV russa ainda na época de Gorbachov, nos anos 1980. Elas causaram sensação. Houve casos anedóticos, como quando o Parlamento da Federação Russa terminou a sessão mais cedo para ver o último capítulo de <i>Escrava Isaura</i>”, conta o russo Anatoli Sostanov, consultor na área de TV internacional e ex-diretor da emissora estatal russa Canal.<br>
      <small>Disponível em: www.bbc.com. Acesso em: 16 out. 2021.</small><br><br>
      <b>TEXTO II</b><br>
      As novelas de maior impacto em Angola foram as produções brasileiras. Fizeram tanto sucesso que um mercado popular, na época era o maior a céu aberto na África, chegou a receber o nome de <i>Roque Santeiro</i>, novela brasileira exibida naquele país na década de 1980. A influência das produções brasileiras fez com que os angolanos conhecessem o Brasil por meio das novelas. Além de entreter, os folhetins brasileiros até hoje ditam a moda em Angola. Figurinos e acessórios de personagens se transformam em uma verdadeira febre e influenciam o comportamento.<br>
      <small>Disponível em: https://tvbrasil.ebc.com.br. Acesso em: 16 out. 2021 (adaptado).</small>`,
    enunciado: `<p>Embora situados em continentes diferentes com práticas sociais distintas, Rússia e Angola se aproximam, conforme os textos I e II, no aspecto</p>`,
    alternativas: [
      { letra: 'A', texto: 'cultural, ao subjetivarem costumes da teledramaturgia estrangeira.', explicacao: 'Correta! Nos dois países as novelas brasileiras foram absorvidas pelo público a ponto de influenciar comportamentos, a moda e até nomes de lugares: houve incorporação cultural de costumes da teledramaturgia estrangeira.' },
      { letra: 'B', texto: 'econômico, ao importarem confecções de estilistas famosos.' },
      { letra: 'C', texto: 'geográfico, ao encurtarem distâncias de caráter ideológico.' },
      { letra: 'D', texto: 'antropológico, ao adaptarem valores de povos tradicionais.' },
      { letra: 'E', texto: 'político, ao adotarem sistemas de governos democráticos.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2024-081', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 81,
    disciplina: 'História', conteudo: 'his-4b4', subtopico: 'Constituição de 1988 e quilombolas', dificuldade: 'facil',
    textoApoio: `
      <p>No Brasil, os remanescentes de antigos quilombos, “mocambos”, “comunidades negras rurais”, “quilombos contemporâneos”, “comunidades quilombolas” ou “terras de preto” referem-se a um mesmo patrimônio territorial e cultural inestimável, que só recentemente passaram a ter atenção do Estado e ser do interesse de algumas autoridades e organismos oficiais.</p>
      <small>ANJOS, R. S. A. Cartografia e quilombos: territórios étnicos africanos no Brasil. Africana Studia, n. 9, 2007.</small>`,
    enunciado: `<p>Na esfera de ação do Estado, com a Constituição de 1988, os espaços mencionados tornaram-se objeto de</p>`,
    alternativas: [
      { letra: 'A', texto: 'iniciativas de planejamento familiar.' },
      { letra: 'B', texto: 'projetos de reorientação religiosa.' },
      { letra: 'C', texto: 'programas de moradias sustentáveis.' },
      { letra: 'D', texto: 'políticas de inserção social.', explicacao: 'Correta! A Constituição de 1988 reconheceu a propriedade das terras ocupadas por remanescentes de quilombos, abrindo caminho para titulação e políticas públicas de inclusão dessas comunidades.' },
      { letra: 'E', texto: 'medidas de homogeneização educacional.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-083', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 83,
    disciplina: 'Geografia', conteudo: 'geo-1u3', subtopico: 'Cartografia e poder', dificuldade: 'facil',
    textoApoio: `
      <p>A finalidade mais marcante em toda a história dos mapas, desde o seu início, teria sido a de estarem sempre voltados à prática, principalmente a serviço da dominação, do poder. Sempre registraram o que mais interessava a uma minoria, fato este que acabou estimulando o incessante aperfeiçoamento deles.</p>
      <small>MARTINELLI, M. Mapas da geografia e cartografia temática. São Paulo: Contexto, 2011 (adaptado).</small>`,
    enunciado: `<p>No texto, a cartografia é apresentada como um instrumento usado essencialmente para a</p>`,
    alternativas: [
      { letra: 'A', texto: 'preservação de espaços naturais.' },
      { letra: 'B', texto: 'emancipação de sujeitos marginais.' },
      { letra: 'C', texto: 'revalorização de culturas reprimidas.' },
      { letra: 'D', texto: 'inversão de hierarquias estabelecidas.' },
      { letra: 'E', texto: 'sustentação de hegemonias territoriais.', explicacao: 'Correta! O texto diz que os mapas sempre estiveram “a serviço da dominação, do poder”, registrando o que interessava a uma minoria: servem para manter o controle sobre territórios.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2024-084', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 84,
    disciplina: 'História', conteudo: 'his-2b6-2', subtopico: 'Amazônia no século XIX', dificuldade: 'media',
    textoApoio: `
      <b>TEXTO I</b><br>
      O bufarinheiro, conhecido nas cidades por teque-teque, chama-se, nos recônditos da Amazônia, “regatão”. Em lugar de transportar nas costas o mundo de miudezas, transporta-o no bojo de uma gaiola que desloca duas, três, quatro toneladas, divididas em seções de secos e molhados e é movido por remo de faia. Cortando comunidades e matas da Amazônia por rios, dentro dessas gaiolas, riscadas de prateleiras, encontram-se os artigos mais díspares, que vão da agulha à espingarda, do lenço ao cobertor, da chita à escova de dentes.<br>
      <small>MORAES, R. Na Planície Amazônica. São Paulo: Editora Nacional, 1936 (adaptado).</small><br><br>
      <b>TEXTO II</b><br>
      No século XIX, o comércio dos regatões era feito, então, com base em relações tecidas com quilombolas, pequenos produtores, comerciantes locais e indígenas, constituindo relação comercial alternativa ao abastecimento da população.<br>
      <small>HENRIQUE, M. C.; MORAIS, L. T. Estradas líquidas, comércio sólido: índios e regatões na Amazônia (século XIX). Rev. Hist., n. 171, jul.-dez. 2014 (adaptado).</small>`,
    enunciado: `<p>Como parte do patrimônio cultural da Amazônia, o regatão foi fundamental, no século XIX, para a</p>`,
    alternativas: [
      { letra: 'A', texto: 'organização de rotas de fuga na floresta tropical.' },
      { letra: 'B', texto: 'criação de postos de trabalho nos seringais nortistas.' },
      { letra: 'C', texto: 'divulgação de receitas de fármacos nas zonas ribeirinhas.' },
      { letra: 'D', texto: 'construção de redes de sociabilidade no interior brasileiro.', explicacao: 'Correta! Navegando pelos rios, o regatão mantinha relações comerciais com quilombolas, indígenas, pequenos produtores e comerciantes, tecendo redes de contato e troca no interior amazônico.' },
      { letra: 'E', texto: 'ampliação de ambientes de lazer nos territórios autóctones.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-085', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 85,
    disciplina: 'História', conteudo: 'his-4a5', subtopico: 'Ditaduras na América Latina', dificuldade: 'facil',
    textoApoio: `
      <p>Era uma vez um país, uma cidade, uma praça, algumas mães... <i>Las Madres de Plaza de Mayo</i>! Silenciosas, com lenços brancos na cabeça, rondavam a Praça de Maio. Incansáveis, caminharam por dias, meses, anos. Foram chamadas de loucas. Em silêncio, criaram um fato político, escancararam as entranhas da repressão, desafiaram o aparato militar e suas dores ecoaram pelo mundo. Como observou Oliveira, “à luz do dia, sob as janelas do ditador, sob chuva, sob sol, no silêncio entrecortado de gritos, faziam ouvir como que a alucinação de uma litania, que ecoou no país, na América Latina e além-mar”. Era impossível ignorá-las, estavam lá, sempre em silêncio, mas estavam lá.</p>
      <small>GONÇALVES, R. De antigas e novas loucas: Madres e Mães de Maio contra a violência de Estado. Lutas Sociais, n. 29, jul.-dez. 2012.</small>`,
    enunciado: `<p>Qual problema de âmbito nacional argentino o movimento social mencionado expôs ao mundo?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Violação dos direitos humanos.', explicacao: 'Correta! As Mães da Praça de Maio denunciavam o desaparecimento de seus filhos pela ditadura militar argentina (1976-1983): sequestros, tortura e mortes, ou seja, graves violações de direitos humanos.' },
      { letra: 'B', texto: 'Insegurança da juventude periférica.' },
      { letra: 'C', texto: 'Naturalização da violência doméstica.' },
      { letra: 'D', texto: 'Ampliação das desigualdades sociais.' },
      { letra: 'E', texto: 'Relativização dos princípios democráticos.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2024-086', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 86,
    disciplina: 'Geografia', conteudo: 'geo-1u1', subtopico: 'Transformação do espaço geográfico', dificuldade: 'facil',
    imagem: ['imagens/estudo/enem-2024-086-1.webp', 'imagens/estudo/enem-2024-086-2.webp'],
    legendaAcima: ['TEXTO I', 'TEXTO II'],
    legenda: ['Disponível em: https://earth.google.com. Acesso em: 13 out. 2023.', 'Disponível em: https://earth.google.com. Acesso em: 13 out. 2023.'],
    enunciado: `<p>A comparação entre as imagens de satélite indica a ocorrência de um processo de</p>`,
    alternativas: [
      { letra: 'A', texto: 'conservação de lugares afetivos.' },
      { letra: 'B', texto: 'aumento de áreas desertificadas.' },
      { letra: 'C', texto: 'redefinição de fronteiras nacionais.' },
      { letra: 'D', texto: 'artificialização do espaço geográfico.', explicacao: 'Correta! Entre 2000 e 2020 surgiram em Dubai ilhas artificiais (as “palmeiras” e o arquipélago “The World”), além da expansão urbana sobre o deserto: o espaço natural foi substituído por formas criadas pela técnica humana.' },
      { letra: 'E', texto: 'mudança da dinâmica macroclimática.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-088', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 88,
    disciplina: 'Geografia', conteudo: ['geo-3u5', 'geo-3u2'], subtopico: 'Clima urbano e soluções baseadas na natureza', dificuldade: 'facil',
    textoApoio: `
      <p>A mudança do clima nas cidades brasileiras é um desafio de adaptação e equidade. Inundações, alagamentos e ondas de calor são cada vez mais frequentes e intensas. Cidades precisam se adaptar com urgência, a começar pelas áreas e populações mais vulneráveis. Implementar soluções baseadas na natureza de forma sistêmica pode contribuir para a redução de desastres relacionados às mudanças do clima e ainda gerar múltiplos benefícios para a economia, o ambiente e as pessoas.</p>
      <small>EVERS, H. et al. Soluções baseadas na natureza para adaptação em cidades. Disponível em: www.wribrasil.org.br. Acesso em: 19 out. 2023 (adaptado).</small>`,
    enunciado: `<p>Qual medida atenua os problemas abordados no texto?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Criação de faixas sinalizadoras.' },
      { letra: 'B', texto: 'Incineração de resíduos sólidos.' },
      { letra: 'C', texto: 'Implantação de parques públicos.', explicacao: 'Correta! Parques são solução baseada na natureza: a vegetação e o solo permeável absorvem a água das chuvas (menos alagamentos) e amenizam as ilhas de calor.' },
      { letra: 'D', texto: 'Verticalização de espaços centrais.' },
      { letra: 'E', texto: 'Construção de estacionamentos privados.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-089', prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024, numeroOriginal: 89,
    disciplina: 'Geografia', conteudo: 'geo-c3', subtopico: 'ONU e Conselho de Segurança', dificuldade: 'facil',
    textoApoio: `
      <p>O Conselho de Segurança da Organização das Nações Unidas (ONU) é, junto com a Assembleia-Geral, um dos principais órgãos de tomada de decisão dentro da entidade. O Conselho lida com questões de segurança e paz internacionais, além de recomendar a admissão de novos membros à Assembleia-Geral e aprovar mudanças na Carta das Nações Unidas. Cinco dos quinze membros são permanentes e podem vetar resoluções, o que ocorreu 261 vezes até 2020.</p>
      <small>GOMES, L.; PRETTO, N. O funcionamento do Conselho de Segurança das Nações Unidas. Disponível em: www.nexojornal.com.br. Acesso em: 10 nov. 2021 (adaptado).</small>`,
    enunciado: `<p>A composição e o funcionamento do organismo internacional apresentados revelam a seguinte característica das relações internacionais entre os países-membros:</p>`,
    alternativas: [
      { letra: 'A', texto: 'Igualdade militar.' },
      { letra: 'B', texto: 'Assimetria política.', explicacao: 'Correta! Só cinco membros permanentes têm poder de veto sobre as resoluções, enquanto os demais não: o poder de decisão é desigual entre os países.' },
      { letra: 'C', texto: 'Consenso multipolar.' },
      { letra: 'D', texto: 'Equilíbrio estratégico.' },
      { letra: 'E', texto: 'Soberania compartilhada.' },
    ],
    gabarito: 'B',
  },
);
