/**
 * UFPR — Processo Seletivo 2026 (Edital 28/2025 – NC/PROGRAP), 1ª fase — Conhecimentos Gerais
 * (outubro de 2025), 90 questões de 5 alternativas. Matemática 01–09, Física 10–18, Química 19–27,
 * Biologia 28–36, Geografia 37–45, História 46–54, Língua Portuguesa 55–66, Literatura 67–72,
 * Filosofia 73–77, Sociologia 78–82 e Língua Estrangeira 83–90 (aqui: Inglês e Espanhol).
 *
 * Fonte: Provas/Outros/UFPR/2026 - Prova com Gabarito Definitivo.pdf (caderno com a resposta
 * marcada); anuladas: Provas/Outros/UFPR/2026 - Gabarito - Questoes anuladas e alteradas.pdf
 * (a 15 foi anulada). Gabarito em JSON: Provas/Outros/UFPR/2026_gabarito.json.
 * Fora: 15 (anulada), 67, 68, 69 e 72 (Literatura que depende da leitura integral de obras da
 * lista da UFPR), 73–77 (Filosofia) e 78–82 (Sociologia).
 * Questões de ESTUDO — nunca entram nos simulados. Aparecem no módulo da matéria, dentro do
 * capítulo do campo `conteudo` (Literatura e línguas: pelo `subtopico`).
 * Formato das questões: veja README.md ("Como adicionar uma questão nova").
 */

var TEXTO_UFPR_2026_FIS_GERAL = `<p><b>O texto a seguir é referência para as questões 10 a 18.</b></p>
<p>As medições são feitas por um referencial inercial. O módulo da aceleração gravitacional é representado por <i>g</i>. Onde for necessário, use <i>g</i> = 10 m/s<sup>2</sup> para o módulo da aceleração gravitacional.</p>`;

var TEXTO_UFPR_2026_FIS_1 = TEXTO_UFPR_2026_FIS_GERAL + `
<p><b>O texto a seguir é referência para as questões 10 a 12.</b></p>
<p>Dois objetos, A e B, movem-se sobre uma mesma linha reta. O gráfico a seguir apresenta as posições <i>x</i> dos dois objetos, medidas nessa reta, em função do tempo <i>t</i>. A curva para o objeto A é representada por uma linha tracejada, e, para o objeto B, a curva é uma linha cheia.</p>`;

var TEXTO_UFPR_2026_QUI_1 = `<p><b>O texto a seguir é referência para as questões 22 a 25.</b></p>
<p>No início do mês de maio de 2025, os olhos do mundo estavam voltados para uma chaminé no alto da Capela Sistina, no Vaticano. Tratava-se do conclave que elegeu o novo líder da Igreja Católica, o Papa Leão XIV. Nas três primeiras votações, a chaminé expeliu uma fumaça preta, resultado da queima de perclorato de potássio e antraceno, dentre outras substâncias, anunciando que ainda não havia consenso entre os cardeais. Mas, após a quarta votação, o momento esperado chegou: uma fumaça branca, gerada principalmente pela queima de clorato de potássio, lactose e resina de pinho, subiu ao céu de Roma, trazendo a notícia tão aguardada – um novo líder espiritual havia sido escolhido.</p>
<p>A seguir estão mostradas as estruturas químicas dos compostos orgânicos lactose e antraceno.</p>`;

var TEXTO_UFPR_2026_POR_1 = `<p>O seguinte texto, escrito pelo quilombola Antonio Bispo dos Santos, sobre a cosmovisão de seu povo, é referência para as questões 55 a 58.</p>
<p><b>Somos compartilhantes</b></p>
<ol class="texto-numerado">
<li>Quando ouço a palavra <i>confluência</i> ou a palavra <i>compartilhamento</i> pelo mundo, fico muito festivo. Quando ouço <i>troca</i>, entretanto,</li>
<li>sempre digo: “Cuidado, não é <i>troca</i>, é compartilhamento”. Porque a troca significa um relógio por um relógio, um objeto por outro</li>
<li>objeto, enquanto no compartilhamento temos uma ação por outra ação, um gesto por outro gesto, um afeto por outro afeto. E</li>
<li>afetos não se trocam, se compartilham. Quando me relaciono com afeto com alguém, recebo uma recíproca desse afeto. O afeto</li>
<li>vai e vem. O compartilhamento é uma coisa que rende. Quando cheguei ao território em que estou hoje, já existiam outros</li>
<li>compartilhantes que nos recepcionaram. Na Caatinga, os umbuzeiros nos recepcionaram. Eles compartilharam seus frutos, suas</li>
<li>folhas e suas raízes quando chegamos, e não trouxemos nada para os umbuzeiros. Eles já eram nativos daqui, viemos habitar</li>
<li>esta terra depois deles. Foi assim com os pássaros, foi assim com uma planta chamada pinhão – que não é o pinhão manso, é</li>
<li>um pinhão cuidado por nós, ditos humanos, que as juritis adoram. Elas comem esses pinhões e, vez por outra, pegamos uma</li>
<li>juriti. O pinhão compartilha com a juriti, a juriti compartilha conosco, e nós vamos compartilhar de novo com o pinhão. Agora que</li>
<li>já estamos aqui há mais tempo, entramos também no ciclo local de compartilhamento.</li>
</ol>
<p><small>Santos, A. B. dos. <i>A terra dá, a terra quer</i>. São Paulo: Ubu Editora/PISEAGRAMA, 2023, p. 21.</small></p>`;

var TEXTO_UFPR_2026_POR_2 = `<p>O texto a seguir é referência para as questões 59 e 60.</p>
<p>Continuamos a acreditar que vivemos numa época em que a técnica dá passos gigantes e diários, a perguntar onde vamos parar com a globalização, <b><u>mas</u></b> refletimos com menor frequência sobre o fato de que o aumento do tempo médio de vida é o maior avanço da humanidade – e neste campo a aceleração supera a de qualquer outra façanha. <b><u>Na verdade</u></b>, o <b><u>troglodita</u></b> que conseguiu produzir fogo artificialmente <b><u>já havia compreendido obscuramente</u></b> que o homem poderia dominar a natureza, sem falar naquele outro antepassado mais maduro que inventou a roda. [...] Mas durante séculos os homens sonharam em vão com o elixir da longa vida e com a fonte da juventude eterna. [...] Muitos dos problemas que devemos enfrentar hoje têm relação com o aumento do tempo de vida. E não estou falando apenas das aposentadorias. [...] No entanto (<b><u>embora</u></b> não tenha as estatísticas à mão), creio que a soma que gastamos em pesquisas gerontológicas e em medicina preventiva seja infinitamente menor do que o investimento em tecnologia bélica e em informática. Sem falar que sabemos muito bem como destruir uma cidade ou como transportar informação a baixo custo, mas ainda não temos ideia de como conciliar bem-estar coletivo, futuro dos jovens, superpopulação mundial e expectativa de vida.</p>
<p><small>Eco, U. Vida média (2003). <i>In</i>: Eco, U. <i>Pape Satàn aleppe</i>: crônicas de uma sociedade líquida. 2. ed., pp. 45-47. Rio de Janeiro: Record, 2017. Adaptado.</small></p>`;

var TEXTO_UFPR_2026_POR_3 = `<p>O texto a seguir é referência para as questões 61 e 62.</p>
<p>A forma como utilizamos os memes revela uma maneira criativa, muitas vezes sarcástica, que evidencia uma das funções do humor. Recentemente, pudemos acompanhar uma “guerra” bem-humorada entre Brasil e Portugal. Brasileiros, inicialmente, “anexaram” o país europeu e o chamaram de <i>Guiana Brasileira</i>. Seguiram-se outras designações para Portugal, o que provocou o revide dos portugueses. Reproduzimos as “farpas” dessa batalha nas afirmativas I e II a seguir:</p>
<p>I. São denominações de brasileiros para Portugal, além da já mencionada: Pernambuco em pé; Faixa de Gajo; Rio de Fevereiro; Porto de Gajinhas; Mato Grosso do Norte; e Vitória da Reconquista.<br>
II. A resposta veio de Portugal. Foram estes os nomes atribuídos: Texas do Sul; Geórgia Amado; Brasillinois; Havai que é tua Taffarel; Capivarizona; Mississítio do Picapau Amarelo; Funkentucky.</p>`;

var TEXTO_UFPR_2026_POR_4 = `<p>O texto a seguir é referência para as questões 63 a 66. Trata-se de um trecho transcrito de um episódio do podcast Projeto Querino, produzido por Tiago Rogero. Ou seja, o texto traz, por escrito, palavras que foram faladas e concebidas como texto oral.</p>
<ol class="texto-numerado">
<li>O palácio do Museu Nacional já foi residência oficial da Família Real, depois Família Imperial, do Brasil. Sabe? Dom João Sexto,</li>
<li>Dom Pedro Primeiro, Dom Pedro Segundo, Princesa Isabel? O nome é Palácio de São Cristóvão. É como se fosse hoje em dia o</li>
<li>Palácio da Alvorada, lá em Brasília… Só que, diferentemente do Alvorada, este palácio aqui <b><u>num</u></b> foi construído pra ser a residência</li>
<li>oficial do Dom João Sexto. Já existia um prédio aqui.</li>
<li>Tinha sido construído por um comerciante bem rico, o Elias Antônio Lopes. Daí quando a Família Real portuguesa veio pro Brasil,</li>
<li>em 1808, era disparada a melhor mansão do Rio, e o Elias doou a casa, e toda a Quinta da Boa Vista, pro Dom João Sexto morar</li>
<li>com a família. Bonzinho ele… Mas comé que o Elias, um comerciante, juntou tanto dinheiro assim pra poder não só construir a</li>
<li>melhor mansão do Rio, mas também pra poder <b><u>se dar ao luxo de doar ela</u></b>? De <b><u>abrir mão dela</u></b>?</li>
<li>É que ele num era qualquer comerciante. Ele trabalhava com o bem mais valioso daquela época. Num era café, num era açúcar,</li>
<li>num era ouro, num era diamante. O Elias era traficante… de gente. O Elias Antônio Lopes mandava um navio lá na costa do</li>
<li>continente africano, embarcava um monte de gente acorrentada – homens, mulheres, crianças –, colocava todo mundo no porão</li>
<li>desse navio por semanas, até meses, de viagem, e trazia pra vender por aqui. E a Família Real aceitou <b><u>essa doação</u></b>. Não se</li>
<li>constrangeu nem um pouco de aceitar esse presente. <b><u>Assim</u></b>, o tráfico nessa época era legal, era permitido por lei, mas num deixa</li>
<li>de ser uma coisa grotesca.</li>
<li>E o simbolismo desse gesto, de transformar em residência oficial uma casa construída com o dinheiro do tráfico negreiro, dessa</li>
<li>relação extremamente próxima entre um traficante de escravos e a Família Real, o simbolismo disso ajuda a explicar não só por</li>
<li>que a escravidão durou tanto tempo no Brasil, mas a própria Independência do Brasil. Ajuda a explicar por que o Brasil é o Brasil.</li>
</ol>
<p><small>Disponível em: https://projetoquerino.com.br/wp-content/uploads/2022/07/Ep-01_A-grande-aposta_Querino-1.pdf.</small></p>`;

var TEXTO_UFPR_2026_ING_1 = `<p>The following text is reference to questions 84 to 86.</p>
<p><b>Lights out: Why <u>all-night parties</u> are in decline around the world</b></p>
<p>Tighter regulations, <b><u>higher costs</u></b>, and <b><u>the “most sober”</u></b> generation hit the nightlife industry hard.<br>
Nightclubs around the world are closing their doors earlier than ever before, and some of the world's biggest party hotspots are hosting fewer all-night parties. Club owners and party organizers face tighter regulations and higher costs. But <b><u>the real culprit</u></b> is simply that this generation of young people is less interested in club culture than previous generations were.<br>
The Financial Times recently updated an analysis of late-night dance parties. The newspaper found that the number of nightclubs open past 3 a.m. has decreased in 12 out of 15 global cities it analyzed.<br>
So it’s true. From Barcelona to New York and Manchester to Melbourne, the party is ending earlier than ever before.<br>
Nightclubs are also facing competition from day clubs. Several big cities have seen an increase in events that end early in the evening.<br>
Young people today are just not into clubbing like previous generations were. The idea of drinking a lot, dropping a lot of money on drinks and staying out well past sunrise – well, that idea doesn’t appeal to the newer generation of young people. One commentator called Gen Z the “most sober” generation yet.<br>
Younger people are more educated about sleep. More young people say they get eight to nine hours of sleep per night. It’s hard to do that when you’re partying until six or eight in the morning.<br>
Nightclubs won’t completely <b><u>die out</u></b> any time soon. But the industry needs to adapt, or else it will continue to shrink.</p>
<p><small>Available in: https://plainenglish.com/lessons/late-night-parties. Adapted.</small></p>`;

var TEXTO_UFPR_2026_ING_2 = `<p>The following A.I. generated definition is reference to questions 87 and 88.</p>
<p><b>Brain rot definition</b></p>
<p>“Brain rot” is a slang term that refers to the perceived deterioration of a person’s mental or intellectual state, often due to overconsumption of trivial or unchallenging content, particularly online content. It’s not a medical condition, but a way to describe the mental effects of excessive screen time and engagement with certain types of online material.</p>
<p>Here’s a more detailed explanation:</p>
<p><b>Perceived deterioration:</b><br>The term suggests a decline in cognitive abilities like attention, memory, and mood, caused by consuming low-effort content.<br>
<b>Overconsumption of unchallenging content:</b><br>Brain rot is often associated with activities like “doomscrolling”, where individuals spend excessive time online, passively consuming news or other content without engaging in deeper thought or analysis.<br>
<b>Mental fogginess:</b><br>It can also describe a state of mental fogginess, where individuals struggle with focus and clarity.<br>
<b>Not a medical diagnosis:</b><br>It's important to note that “brain rot” is not a recognized medical diagnosis.<br>
<b>Slang term:</b><br>The term is popular among Gen Z and Gen Alpha social media users.</p>
<p><small>Available in www.google.com: https://acesse.one/YWnDy. Adapted.</small></p>`;

var TEXTO_UFPR_2026_ING_3 = `<p>The following text is reference to questions 89 and 90.</p>
<p><b>A clean, well-lighted place</b></p>
<p><b>How less clutter can reduce stress!</b><br>
Clutter, for many of us, is a simple annoyance; but to others, it is a highly personal and sensitive topic. For some, parting with even the smallest scrap of paper can cause emotional turmoil. If there is a deeper fear of loss, scarcity, or if the clutter is used as self-protection from relationships, it may be a sign of a serious (but treatable) mental disorder known as hoarding. But for those who are simply disorganized, yet feeling stressed by it, the following benefits of cleaning up may prove illuminating – because we all, as Hemingway said, long for “a clean, well-lighted place.”</p>
<p><b>What are the benefits we can expect to receive upon cleaning up the mess?</b></p>
<ul>
<li>Save time by not spending time looking for things.</li>
<li>Save money by not buying items you already have.</li>
<li>Reduce stress related to lost items or lost information.</li>
<li>Manage activities and deadlines more efficiently.</li>
<li>Have more time to do things you really want to do.</li>
<li>Have a more attractive and inviting home.</li>
</ul>
<p><small>Available in: https://bewell.stanford.edu/a-clean-well-lighted-place. Adapted.</small></p>`;

var TEXTO_UFPR_2026_ESP_1 = `<p>El texto a continuación es referencia para las cuestiones 83, 84 y 85.</p>
<p><b>La IA en 2025: entre la promesa tecnológica y la amenaza sistémica</b></p>
<p>En 2025, la inteligencia artificial (IA) se ha consolidado como una de las fuerzas tecnológicas más disruptivas de la actualidad. Su capacidad para transformar sectores clave, desde la salud hasta la educación, es innegable. Sin embargo, ese mismo poder que permite optimizar procesos y potenciar la innovación también abre la puerta a nuevas vulnerabilidades de enorme complejidad, muchas de ellas todavía insuficientemente comprendidas o reguladas. […]</p>
<p>En el ámbito industrial, la automatización inteligente ha redefinido la productividad, minimizando el error humano y reduciendo significativamente los costos operativos. Esta eficiencia, potenciada por algoritmos de aprendizaje automático, está presente en cadenas logísticas, operaciones de fabricación y sistemas de distribución global. En la medicina, los avances son aún más tangibles: la IA demuestra una capacidad notable para detectar patologías en etapas tempranas, a veces incluso antes que los propios especialistas, permitiendo intervenciones más rápidas y mejores pronósticos para los pacientes.</p>
<p>También crece la desinformación automatizada, alimentada por modelos lingüísticos que producen contenido falso con un grado de coherencia, fluidez y realismo que desafía incluso a expertos en verificación. La combinación de estos textos persuasivos con imágenes y videos generados artificialmente crea un ecosistema donde los límites entre lo verdadero y lo manipulado se desdibujan peligrosamente. En contextos electorales, la amenaza es aún más grave: la circulación de contenidos adulterados y la aparición de influencers sintéticos están distorsionando la conversación pública y erosionando la confianza en los procesos democráticos. […]</p>
<p>Ante este panorama, la regulación aparece como un eje central del debate. Mientras la Unión Europea avanza con una legislación integral que contempla auditorías obligatorias y niveles de riesgo diferenciados, otras regiones como Estados Unidos aún muestran resistencia a imponer límites por temor a frenar la competitividad tecnológica. Esta divergencia normativa crea brechas difíciles de gestionar, especialmente en un entorno digital transnacional donde los algoritmos no reconocen fronteras. Además, persiste un vacío crítico en torno a la atribución de responsabilidades legales: ¿quién responde cuando una IA comete un error en un diagnóstico médico o en una evaluación crediticia? La falta de marcos jurídicos claros en este sentido representa una zona gris con potencial para derivar en litigios complejos y la situación es de desprotección.</p>
<p><small>Disponible en: https://www.infobae.com/opinion/2025/04/26/la-ia-en-2025-entre-la-promesa-tecnologica-y-la-amenaza-sistemica/.</small></p>`;

var TEXTO_UFPR_2026_ESP_2 = `<p>El texto a continuación es referencia para las cuestiones 86 y 87.</p>
<p><b>Más allá del ser humano: cómo el derecho puede transformar nuestra relación con la tierra</b></p>
<p>El derecho juega un papel activo en la formación de conciencias. A través de la ley determinamos lo que es correcto o incorrecto, lo permitido y lo prohibido, lo reprochable moralmente y aquello que consideramos justo o deseable. El derecho no solo regula subjetividades, también las construye. Hasta hace relativamente poco, el derecho entendía a todo lo no-humano como cosas carentes de valor intrínseco, simples bienes apropiables por el ser humano para su uso. Esta aproximación ayudó a legitimar actitudes depredadoras hacia el ambiente, amparadas en un falso modelo de desarrollo antropocéntrico, consumista e individualista. Así, se normalizó la idea de que con el intercambio de papeles y firmas podemos reclamar la propiedad individual y el uso indiscriminado de elementos de la naturaleza que han estado allí millones de años antes que nosotros. Esto, por fortuna, parece estar cambiando.</p>
<p>En las últimas décadas, la crisis ecológica ha reabierto la discusión filosófica, política y jurídica sobre nuestra relación con la naturaleza. Diversas teorías se han aproximado a este debate, todas ellas agrupadas en alguno de los siguientes tres grandes marcos de pensamiento: el antropocentrismo, el biocentrismo y el ecocentrismo. Mientras el primero defiende la centralidad del ser humano en nuestros debates sobre el valor del ambiente, los otros sostienen que hay argumentos fuertes para establecer que el centro de valoración no debe estar en el ser humano, sino en los seres que tienen vida (biocentrismo) o en las interrelaciones entre la materia inerte y viva que hacen posible la existencia en este planeta (ecocentrismo).</p>
<p>El biocentrismo se opone al antropocentrismo, pues no sitúa al ser humano como el eje único de nuestras preocupaciones sobre la naturaleza. En su lugar, propone ubicar en el centro a los seres vivos, en tanto individuos, para, a partir de ello, dar cuenta de que hay razones suficientes para otorgar igual consideración moral a ciertos no-humanos. Por un lado, a diferencia de las posturas antropocéntricas, el biocentrismo busca la preservación de los seres vivos por el interés que poseen ellos mismos y no por su utilidad para el ser humano. Por otro lado, a diferencia del ecocentrismo, el biocentrismo sitúa el estatus moral en las criaturas individuales y no en los sistemas ecológicos. Es decir, los biocentristas no son holistas, no consideran que los sistemas ecológicos son relevantes en sí mismos, sino solo en la medida en que protegen o hacen posible las vidas individuales que hay en ellos. En otras palabras, no consideran moralmente relevantes a las especies en tanto conjunto, sino a los animales individualmente considerados; tampoco al bosque, sino al árbol, en singular.</p>
<p><small>Disponible en: https://www.fuhem.es/2024/11/03/mas-alla-del-ser-humano-como-el-derecho-puede-transformar-nuestra-relacion-con-la-tierra/.</small></p>`;

var TEXTO_UFPR_2026_ESP_3 = `<p>Los textos a continuación son referencia para las cuestiones 88, 89 y 90.</p>
<p><b>Texto A</b></p>
<p><b>INSTANTES</b></p>
<p>Si pudiera vivir nuevamente mi vida,<br>
en la próxima trataría de cometer más errores.<br>
No intentaría ser tan perfecto, me relajaría más. Sería más tonto de lo que he sido,<br>
de hecho tomaría muy pocas cosas con seriedad. Sería menos higiénico.<br>
Correría más riesgos,<br>
haría más viajes,<br>
contemplaría más atardeceres,<br>
subiría más montañas, nadaría más ríos.<br>
Iría a más lugares adonde nunca he ido,<br>
comería más helados y menos habas,<br>
tendría más problemas reales y menos imaginarios.</p>
<p>Yo fui una de esas personas que vivió sensata y prolíficamente cada minuto de su vida; claro que tuve momentos de alegría.<br>
Pero si pudiera volver atrás trataría<br>
de tener solamente buenos momentos.</p>
<p>Por si no lo saben, de eso está hecha la vida,<br>
solo de momentos; no te pierdas el ahora.</p>
<p>Yo era uno de esos que nunca<br>
iban a ninguna parte sin un termómetro,<br>
una bolsa de agua caliente,<br>
un paraguas y un paracaídas;<br>
si pudiera volver a vivir, viajaría más liviano.</p>
<p>Si pudiera volver a vivir<br>
comenzaría a andar descalzo a principios de la primavera<br>
y seguiría descalzo hasta concluir el otoño. Daría más vueltas en calesita, contemplaría más amaneceres,<br>
y jugaría con más niños,<br>
si tuviera otra vez vida por delante.</p>
<p>Pero ya ven, tengo 85 años...<br>
y sé que me estoy muriendo.</p>
<p><small>Disponible en: https://www.ehu.eus/~mepvaarf/ficheros/Borges.pdf.</small></p>
<p><b>Texto B</b></p>
<p><b>Polémica por el poema de Borges que nunca existió</b></p>
<p>La editorial Random House Mondadori informó este miércoles que el libro “Borges y México”, presentado el martes en la capital mexicana, será reeditado porque en su interior atribuye un poema al autor argentino que no fue escrito por él.</p>
<p>En un texto firmado por la escritora Elena Poniatowska que integra el libro, se atribuye a Jorge Luis Borges el poema “Instantes”, que ha circulado de forma frecuente en sitios de internet como si fuera parte de la obra borgiana, aunque fue escrito en realidad por la estadounidense Nadine Stair.</p>
<p>En entrevista con BBC Mundo, la escritora mexicana admitió su error al citar como propios de Borges este poema y otras obras. “Yo pensé que eran de Borges porque circulaban mucho. Es un error y fue yo tener demasiada confianza, que es un defecto que siempre he tenido”, dijo Poniatowska.</p>
<p>La casa editorial decidió reeditar la obra después de que la viuda del autor argentino advirtiera del error.</p>
<p>En una sesión de chat celebrada este martes con los lectores del diario mexicano El Universal, María Kodama elogió el libro pero dijo que era “un error verdaderamente imposible de imaginar” la atribución que había hecho Poniatowska. “El poema 'Instantes' de Nadine Stair en realidad es un mal ejemplo para la juventud porque la incita a vivir en lo banal. Borges nunca se arrepintió de su vida”, dijo la viuda.</p>
<p><small>Disponible en: https://www.bbc.com/mundo/noticias/2012/08/120801_cultura_controversia_poema_borges_bd.</small></p>`;

QUESTOES.push(
  // ---------------------------------------------------------------- MATEMÁTICA
  {
    id: 'ufpr-2026-001', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 1,
    disciplina: 'Matemática', conteudo: 'mat-1a5', subtopico: 'Desconto percentual', dificuldade: 'facil',
    enunciado: `<p>O preço de um livro está com 15% de desconto em uma promoção. Nessa promoção, esse livro custa R$ 51,00. Assinale a alternativa que corresponde ao valor desse livro sem o desconto.</p>`,
    alternativas: [
      { letra: 'A', texto: `R$ 70,00` },
      { letra: 'B', texto: `R$ 60,00`, explicacao: `Correta! Com 15% de desconto, paga-se 85% do preço: 0,85·P = 51 ⇒ P = 51/0,85 = R$ 60,00.` },
      { letra: 'C', texto: `R$ 67,00` },
      { letra: 'D', texto: `R$ 80,00` },
      { letra: 'E', texto: `R$ 56,00` },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2026-002', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 2,
    disciplina: 'Matemática', conteudo: 'mat-2b3', subtopico: 'Áreas de quadriláteros', dificuldade: 'facil',
    imagem: 'imagens/estudo/ufpr-2026-002.webp',
    enunciado: `<p>Na figura ao lado, a área do quadrado <i>ABEF</i> é igual a 9 cm<sup>2</sup>, e o comprimento do segmento <i>DF</i> é igual a 5 cm. Assinale a alternativa que corresponde à área, em cm<sup>2</sup>, do retângulo <i>ABCD</i>.</p>`,
    alternativas: [
      { letra: 'A', texto: `12` },
      { letra: 'B', texto: `15` },
      { letra: 'C', texto: `22` },
      { letra: 'D', texto: `24`, explicacao: `Correta! O lado do quadrado é √9 = 3 cm, então AB = AF = 3 cm. AD = AF + FD = 3 + 5 = 8 cm, e a área do retângulo é 3 · 8 = 24 cm².` },
      { letra: 'E', texto: `45` },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2026-003', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 3,
    disciplina: 'Matemática', conteudo: 'mat-4b1', subtopico: 'Retas paralelas', dificuldade: 'facil',
    enunciado: `<p>As retas paralelas <i>r</i><sub>1</sub> e <i>r</i><sub>2</sub> no plano <i>xy</i> são dadas pelas equações <i>y</i> = (2<i>m</i> – 3)<i>x</i> + 4 e <i>y</i> = (5<i>m</i> + 1)<i>x</i> – 2, respectivamente. Assinale a alternativa que corresponde ao valor de <i>m</i>.</p>`,
    alternativas: [
      { letra: 'A', texto: `–2/7` },
      { letra: 'B', texto: `–1` },
      { letra: 'C', texto: `–4/3`, explicacao: `Correta! Retas paralelas têm o mesmo coeficiente angular: 2m – 3 = 5m + 1 ⇒ –3m = 4 ⇒ m = –4/3.` },
      { letra: 'D', texto: `–2/3` },
      { letra: 'E', texto: `–3/7` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-004', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 4,
    disciplina: 'Matemática', conteudo: ['mat-4a2', 'mat-2b2'], subtopico: 'Tangente no triângulo retângulo', dificuldade: 'media',
    imagem: 'imagens/estudo/ufpr-2026-004.webp',
    enunciado: `<p>O pentágono da figura ao lado tem ângulos retos <i>Â</i>, <i>B̂</i> e <i>Ĉ</i>. Conhecendo as medidas dos lados <i>AE</i> = 15, <i>AB</i> = 12, <i>BC</i> = 7 e <i>CD</i> = 5, assinale a alternativa que corresponde ao valor da tangente do ângulo <i>θ</i> = <i>Ê</i>.</p>`,
    alternativas: [
      { letra: 'A', texto: `4/5` },
      { letra: 'B', texto: `5/4` },
      { letra: 'C', texto: `5/8` },
      { letra: 'D', texto: `8/7` },
      { letra: 'E', texto: `7/8`, explicacao: `Correta! Com E = (0, 0) e A = (15, 0): B = (15, 12), C = (8, 12) e D = (8, 7). Assim, tg θ = 7/8 (cateto vertical 12 – 5 = 7 sobre o horizontal 15 – 7 = 8).` },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2026-005', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 5,
    disciplina: 'Matemática', conteudo: ['mat-2b2', 'mat-2b3'], subtopico: 'Semelhança no paralelogramo', dificuldade: 'media',
    imagem: 'imagens/estudo/ufpr-2026-005.webp',
    enunciado: `<p>Considere o paralelogramo <i>ABCD</i> ilustrado na figura ao lado. Sejam <i>M</i> o ponto médio do lado <i>CD</i> e <i>N</i> o ponto comum aos segmentos <i>AC</i> e <i>BM</i>. Sabendo que a medida do segmento <i>AN</i> é igual a 4/3, assinale a alternativa que corresponde à medida da diagonal <i>AC</i>.</p>`,
    alternativas: [
      { letra: 'A', texto: `2`, explicacao: `Correta! Como AB ∥ CM, os triângulos NAB e NCM são semelhantes, com razão AB/CM = 2 (M é ponto médio de CD = AB). Logo AN = 2·NC, ou seja, AN = (2/3)·AC ⇒ AC = (4/3)·(3/2) = 2.` },
      { letra: 'B', texto: `4` },
      { letra: 'C', texto: `5/3` },
      { letra: 'D', texto: `3` },
      { letra: 'E', texto: `8/3` },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2026-006', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 6,
    disciplina: 'Matemática', conteudo: 'mat-3b2', subtopico: 'Arranjos com restrições', dificuldade: 'media',
    enunciado: `<p>A equipe técnica de um time de futebol analisou a possibilidade de a final do campeonato ir para a disputa por pênaltis. Caso isso ocorra, a equipe precisará escolher 5 jogadores diferentes, dentre os 11 que estarão em campo, e também a ordem entre eles para a cobrança dos 5 primeiros pênaltis. A decisão tomada foi a seguinte: o principal atacante do time começará as cobranças, e o goleiro deverá ser um dos 5 cobradores. Além disso, nenhum dos 3 zagueiros em campo participará dessas primeiras cobranças. A partir dessas informações, assinale a alternativa que apresenta corretamente o número de configurações possíveis para essa escolha.</p>`,
    alternativas: [
      { letra: 'A', texto: `280` },
      { letra: 'B', texto: `340` },
      { letra: 'C', texto: `480`, explicacao: `Correta! O atacante fica na 1ª cobrança; o goleiro pode ocupar uma das 4 posições restantes; as outras 3 posições são preenchidas, em ordem, pelos 11 – 1 – 1 – 3 = 6 jogadores disponíveis: 6·5·4 = 120. Total: 4·120 = 480.` },
      { letra: 'D', texto: `625` },
      { letra: 'E', texto: `864` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-007', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 7,
    disciplina: 'Matemática', conteudo: 'mat-3a4', subtopico: 'Progressão aritmética', dificuldade: 'media',
    imagem: 'imagens/estudo/ufpr-2026-007.webp',
    enunciado: `<p>O caminho poligonal do ponto <i>A</i> ao ponto <i>B</i>, descrito na figura ao lado, tem medida igual a 84/5 unidades de comprimento. As medidas dos consecutivos segmentos desse caminho poligonal formam uma progressão aritmética. Assinale a alternativa que corresponde à soma das medidas dos segmentos <i>PQ</i> e <i>QR</i>.</p>`,
    alternativas: [
      { letra: 'A', texto: `26/5` },
      { letra: 'B', texto: `24/5` },
      { letra: 'C', texto: `42/5` },
      { letra: 'D', texto: `28/5`, explicacao: `Correta! O caminho tem 6 segmentos: a, a + r, a + 2r (PQ), a + 3r (QR), a + 4r, a + 5r. A soma é 6a + 15r = 84/5, e PQ + QR = 2a + 5r, que é exatamente 1/3 da soma: (84/5)/3 = 28/5.` },
      { letra: 'E', texto: `48/5` },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2026-008', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 8,
    disciplina: 'Matemática', conteudo: 'mat-2a3', subtopico: 'Vértice da parábola', dificuldade: 'media',
    enunciado: `<p>A função quadrática <i>f</i>(<i>x</i>) satisfaz a igualdade <i>f</i>(2<i>x</i> + 1) = 4<i>x</i><sup>2</sup> + 10<i>x</i> + 9, para todo <i>x</i> ∈ <i>R</i>. Assinale a alternativa que corresponde ao vértice da parábola dada pelo gráfico de <i>f</i>(<i>x</i>).</p>`,
    alternativas: [
      { letra: 'A', texto: `(3/2, 11/4)` },
      { letra: 'B', texto: `(3/2, –11/4)` },
      { letra: 'C', texto: `(–3/2, 11/4)`, explicacao: `Correta! Fazendo u = 2x + 1, temos x = (u – 1)/2 e f(u) = (u – 1)² + 5(u – 1) + 9 = u² + 3u + 5. O vértice tem x<sub>v</sub> = –3/2 e y<sub>v</sub> = 9/4 – 9/2 + 5 = 11/4.` },
      { letra: 'D', texto: `(5/4, 11/4)` },
      { letra: 'E', texto: `(–5/4, 11/4)` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-009', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 9,
    disciplina: 'Matemática', conteudo: 'mat-2a5', subtopico: 'Sistema com logaritmos', dificuldade: 'media',
    enunciado: `<p>Os números reais <i>x</i> e <i>y</i> satisfazem as equações:</p>
<p style="text-align:center"><b>log<sub>3</sub>(3<i>y</i> – 1) = 2 + log<sub>3</sub><i>x</i><br>2 log<sub>2</sub><i>y</i> = 2 + log<sub>2</sub><i>x</i></b></p>
<p>Assinale a alternativa que corresponde ao valor da razão <i>y</i>/<i>x</i>.</p>`,
    alternativas: [
      { letra: 'A', texto: `3/4` },
      { letra: 'B', texto: `2` },
      { letra: 'C', texto: `3` },
      { letra: 'D', texto: `5` },
      { letra: 'E', texto: `6`, explicacao: `Correta! Da 1ª: 3y – 1 = 9x; da 2ª: y² = 4x. Então 3y – 1 = 9y²/4 ⇒ 9y² – 12y + 4 = 0 ⇒ (3y – 2)² = 0 ⇒ y = 2/3 e x = 1/9. Logo y/x = 6.` },
    ],
    gabarito: 'E',
  },
  // ---------------------------------------------------------------- FÍSICA
  {
    id: 'ufpr-2026-010', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 10,
    disciplina: 'Física', conteudo: 'fis-2a4', subtopico: 'Deslocamento em gráfico x × t', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_FIS_1, imagem: 'imagens/estudo/ufpr-2026-010.webp',
    enunciado: `<p>O valor do deslocamento <i>Δx</i> efetuado pelo objeto A, entre os instantes <i>t</i><sub>1</sub> = 0 s e <i>t</i><sub>2</sub> = 35 s, é:</p>`,
    alternativas: [
      { letra: 'A', texto: `<i>Δx</i> = 8,0 cm` },
      { letra: 'B', texto: `<i>Δx</i> = 6,0 cm` },
      { letra: 'C', texto: `<i>Δx</i> = 4,0 cm`, explicacao: `Correta! Pelo gráfico, o objeto A parte de x = 4,0 cm (t = 0) e está em x = 8,0 cm em t = 35 s: Δx = 8,0 – 4,0 = 4,0 cm.` },
      { letra: 'D', texto: `<i>Δx</i> = 2,0 cm` },
      { letra: 'E', texto: `<i>Δx</i> = 0,0 cm` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-011', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 11,
    disciplina: 'Física', conteudo: ['fis-2a4', 'fis-3b2'], subtopico: 'Energia cinética e velocidade', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2026_FIS_1, imagem: 'imagens/estudo/ufpr-2026-010.webp',
    enunciado: `<p>O valor da energia cinética <i>K</i><sub>B</sub> do objeto B (de massa constante <i>m</i> = 5,0 g), no instante <i>t</i> = 15 s, é:</p>`,
    alternativas: [
      { letra: 'A', texto: `<i>K</i><sub>B</sub> = 10 nJ` },
      { letra: 'B', texto: `<i>K</i><sub>B</sub> = 20 nJ` },
      { letra: 'C', texto: `<i>K</i><sub>B</sub> = 40 nJ`, explicacao: `Correta! Entre 10 s e 20 s, B vai de 4,0 cm a 0: v = 4,0 cm/10 s = 0,4 cm/s = 4·10⁻³ m/s. K = m·v²/2 = (5·10⁻³ · 16·10⁻⁶)/2 = 4·10⁻⁸ J = 40 nJ.` },
      { letra: 'D', texto: `<i>K</i><sub>B</sub> = 80 nJ` },
      { letra: 'E', texto: `<i>K</i><sub>B</sub> = 160 nJ` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-012', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 12,
    disciplina: 'Física', conteudo: 'fis-2a4', subtopico: 'Leitura de gráfico x × t', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_FIS_1, imagem: 'imagens/estudo/ufpr-2026-010.webp',
    enunciado: `<p>O valor da distância <i>d</i> entre os dois objetos no instante <i>t</i> = 30 s é:</p>`,
    alternativas: [
      { letra: 'A', texto: `<i>d</i> = 2,0 cm` },
      { letra: 'B', texto: `<i>d</i> = 4,0 cm` },
      { letra: 'C', texto: `<i>d</i> = 6,0 cm` },
      { letra: 'D', texto: `<i>d</i> = 8,0 cm` },
      { letra: 'E', texto: `<i>d</i> = 10,0 cm`, explicacao: `Correta! Em t = 30 s, A está em x = 8,0 cm e B em x = –2,0 cm: d = 8,0 – (–2,0) = 10,0 cm.` },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2026-013', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 13,
    disciplina: 'Física', conteudo: 'fis-1a4', subtopico: 'Tubos sonoros', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_FIS_GERAL,
    enunciado: `<p>Num tubo sonoro aberto de comprimento <i>L</i>, a frequência do terceiro harmônico produzido por ele vale <i>f</i><sub>3</sub> = 5,1 kHz. Sabe-se que a velocidade do som no local vale <i>v<sub>s</sub></i> = 340 m/s. O valor do comprimento <i>L</i> do tubo é:</p>`,
    alternativas: [
      { letra: 'A', texto: `<i>L</i> = 5,00 cm` },
      { letra: 'B', texto: `<i>L</i> = 10,0 cm`, explicacao: `Correta! Em tubo aberto, f<sub>n</sub> = n·v/(2L). Para n = 3: 5100 = 3·340/(2L) ⇒ L = 1020/10200 = 0,10 m = 10,0 cm.` },
      { letra: 'C', texto: `<i>L</i> = 15,0 cm` },
      { letra: 'D', texto: `<i>L</i> = 20,0 cm` },
      { letra: 'E', texto: `<i>L</i> = 30,0 cm` },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2026-014', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 14,
    disciplina: 'Física', conteudo: 'fis-4a3', subtopico: 'Energia em capacitores', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_FIS_GERAL,
    enunciado: `<p>Dispõem-se de dois capacitores, de capacitâncias <i>C</i><sub>1</sub> e <i>C</i><sub>2</sub>, respectivamente. O primeiro é submetido a uma tensão Δ<i>V</i><sub>1</sub> e o segundo, a uma tensão Δ<i>V</i><sub>2</sub>. Sabendo que <i>C</i><sub>1</sub> = 3<i>C</i><sub>2</sub> e Δ<i>V</i><sub>1</sub> = 2Δ<i>V</i><sub>2</sub>, determine a razão <i>U</i><sub>2</sub>/<i>U</i><sub>1</sub> entre as energias <i>U</i><sub>2</sub> e <i>U</i><sub>1</sub> armazenadas por cada capacitor.</p>`,
    alternativas: [
      { letra: 'A', texto: `<i>U</i><sub>2</sub>/<i>U</i><sub>1</sub> = 1/2` },
      { letra: 'B', texto: `<i>U</i><sub>2</sub>/<i>U</i><sub>1</sub> = 1/3` },
      { letra: 'C', texto: `<i>U</i><sub>2</sub>/<i>U</i><sub>1</sub> = 1/4` },
      { letra: 'D', texto: `<i>U</i><sub>2</sub>/<i>U</i><sub>1</sub> = 1/6` },
      { letra: 'E', texto: `<i>U</i><sub>2</sub>/<i>U</i><sub>1</sub> = 1/12`, explicacao: `Correta! U = C·ΔV²/2. Então U<sub>2</sub>/U<sub>1</sub> = (C<sub>2</sub>·ΔV<sub>2</sub>²)/(3C<sub>2</sub>·4ΔV<sub>2</sub>²) = 1/12.` },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2026-016', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 16,
    disciplina: 'Física', conteudo: 'fis-3a4', subtopico: 'Lei de Coulomb', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_FIS_GERAL,
    enunciado: `<p>O módulo da força elétrica entre duas cargas pontuais estáticas <i>q</i> e <i>Q</i><sub>1</sub>, separadas por uma distância <i>d</i><sub>1</sub>, vale <i>F</i><sub>1</sub>. Substituindo <i>Q</i><sub>1</sub> por uma carga pontual <i>Q</i><sub>2</sub> = 4<i>Q</i><sub>1</sub>, e colocando-a a uma distância <i>d</i><sub>2</sub> = 2<i>d</i><sub>1</sub> de <i>q</i>, o módulo da força passa a valer <i>F</i><sub>2</sub>. O valor da razão <i>F</i><sub>1</sub>/<i>F</i><sub>2</sub> é:</p>`,
    alternativas: [
      { letra: 'A', texto: `<i>F</i><sub>1</sub>/<i>F</i><sub>2</sub> = 1/4` },
      { letra: 'B', texto: `<i>F</i><sub>1</sub>/<i>F</i><sub>2</sub> = 1/2` },
      { letra: 'C', texto: `<i>F</i><sub>1</sub>/<i>F</i><sub>2</sub> = 1`, explicacao: `Correta! F = k·q·Q/d². Com a carga 4 vezes maior e a distância dobrada, F<sub>2</sub> = k·q·4Q<sub>1</sub>/(4d<sub>1</sub>²) = F<sub>1</sub>; logo F<sub>1</sub>/F<sub>2</sub> = 1.` },
      { letra: 'D', texto: `<i>F</i><sub>1</sub>/<i>F</i><sub>2</sub> = 2` },
      { letra: 'E', texto: `<i>F</i><sub>1</sub>/<i>F</i><sub>2</sub> = 4` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-017', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 17,
    disciplina: 'Física', conteudo: 'fis-4a1', subtopico: 'Potência elétrica', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_FIS_GERAL,
    enunciado: `<p>Um resistor de resistência <i>R</i> dissipa uma potência <i>P</i> quando submetido a uma diferença de potencial Δ<i>V</i>. Assinale a alternativa que apresenta corretamente o valor da resistência <i>R</i> quando <i>P</i> = 5,0 W e Δ<i>V</i> = 10 V.</p>`,
    alternativas: [
      { letra: 'A', texto: `<i>R</i> = 2,0 Ω` },
      { letra: 'B', texto: `<i>R</i> = 5,0 Ω` },
      { letra: 'C', texto: `<i>R</i> = 10 Ω` },
      { letra: 'D', texto: `<i>R</i> = 20 Ω`, explicacao: `Correta! P = ΔV²/R ⇒ R = ΔV²/P = 10²/5,0 = 20 Ω.` },
      { letra: 'E', texto: `<i>R</i> = 50 Ω` },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2026-018', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 18,
    disciplina: 'Física', conteudo: 'fis-2b3', subtopico: 'Equação geral dos gases', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_FIS_GERAL,
    enunciado: `<p>Uma certa quantidade de gás ideal executa um processo termodinâmico partindo de um estado em que a pressão vale <i>P</i><sub>1</sub>, a temperatura vale <i>T</i><sub>1</sub> e o volume vale <i>V</i><sub>1</sub>, chegando a outro estado em que a pressão vale <i>P</i><sub>2</sub>, a temperatura vale <i>T</i><sub>2</sub> e o volume vale <i>V</i><sub>2</sub>. Assinale a alternativa que apresenta corretamente o valor da razão <i>P</i><sub>2</sub>/<i>P</i><sub>1</sub> quando <i>T</i><sub>2</sub> = 5<i>T</i><sub>1</sub>/2 e <i>V</i><sub>2</sub> = 3<i>V</i><sub>1</sub>.</p>`,
    alternativas: [
      { letra: 'A', texto: `<i>P</i><sub>2</sub>/<i>P</i><sub>1</sub> = 2/15` },
      { letra: 'B', texto: `<i>P</i><sub>2</sub>/<i>P</i><sub>1</sub> = 2/5` },
      { letra: 'C', texto: `<i>P</i><sub>2</sub>/<i>P</i><sub>1</sub> = 5/6`, explicacao: `Correta! P·V/T é constante: P<sub>2</sub>/P<sub>1</sub> = (T<sub>2</sub>/T<sub>1</sub>)·(V<sub>1</sub>/V<sub>2</sub>) = (5/2)·(1/3) = 5/6.` },
      { letra: 'D', texto: `<i>P</i><sub>2</sub>/<i>P</i><sub>1</sub> = 6/5` },
      { letra: 'E', texto: `<i>P</i><sub>2</sub>/<i>P</i><sub>1</sub> = 15/2` },
    ],
    gabarito: 'C',
  },
  // ---------------------------------------------------------------- QUÍMICA
  {
    id: 'ufpr-2026-019', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 19,
    disciplina: 'Química', conteudo: 'qui-4b5', subtopico: 'Emissão beta', dificuldade: 'facil',
    enunciado: `<p>O radioisótopo sintético iodo-131 é empregado no diagnóstico e tratamento de diversas enfermidades. Para a sua síntese, um isótopo natural de um determinado elemento, representado por A', é bombardeado por nêutrons em um reator nuclear. Quando o núcleo do átomo A' absorve um nêutron, é transformado no isótopo A", conforme a seguinte equação:</p>
<p style="text-align:center"><b>A' + n → A"</b></p>
<p>Na sequência, A" emite radiação <i>β</i> espontaneamente, produzindo o iodo-131, como mostrado na equação a seguir:</p>
<p style="text-align:center"><b>A" → <sup>131</sup><sub>53</sub>I + <i>β</i><sup>–</sup></b></p>
<p>A radiação <i>β</i> envolve a conversão de um nêutron do núcleo atômico para um próton, seguida da ejeção de um elétron altamente energético chamado de partícula <i>β</i>.</p>
<p>Considerando as informações apresentadas, qual é o átomo representado por A'?</p>`,
    alternativas: [
      { letra: 'A', texto: `<sup>130</sup><sub>52</sub>Te`, explicacao: `Correta! Na emissão β⁻, Z aumenta 1 e A não muda: A" = ¹³¹₅₂Te. Como A" veio da absorção de um nêutron (A + 1, mesmo Z), A' = ¹³⁰₅₂Te.` },
      { letra: 'B', texto: `<sup>131</sup><sub>52</sub>Te` },
      { letra: 'C', texto: `<sup>130</sup><sub>54</sub>Xe` },
      { letra: 'D', texto: `<sup>131</sup><sub>54</sub>Xe` },
      { letra: 'E', texto: `<sup>132</sup><sub>54</sub>Xe` },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2026-020', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 20,
    disciplina: 'Química', conteudo: 'qui-4b4', subtopico: 'Semirreações e balanceamento redox', dificuldade: 'media',
    enunciado: `<p>Para a desinfeção da água destinada ao consumo doméstico, emprega-se o cloro (Cl<sub>2</sub>), que elimina um amplo espectro de microrganismos nocivos. Entretanto, o cloro que persiste na água tratada pode prejudicar certas atividades, como a criação de peixes em aquário. O agente redutor tiossulfato (S<sub>2</sub>O<sub>3</sub><sup>2−</sup>) é utilizado quando se quer remover rapidamente o cloro, reduzindo-o a cloreto. As semirreações de redução envolvendo o cloro e o tiossulfato são, respectivamente:</p>
<p style="text-align:center"><b>Cl<sub>2</sub> + 2 e<sup>–</sup> → 2 Cl<sup>–</sup><br>2 SO<sub>4</sub><sup>2–</sup> + 5 H<sub>2</sub>O + 8 e<sup>–</sup> → S<sub>2</sub>O<sub>3</sub><sup>2–</sup> + 10 OH<sup>–</sup></b></p>
<p>Com base nas duas equações dadas, qual é a equação química que representa a reação de redução do cloro pelo tiossulfato?</p>`,
    alternativas: [
      { letra: 'A', texto: `Cl<sub>2</sub> + 2 SO<sub>4</sub><sup>2–</sup> + 5 H<sub>2</sub>O → 2 Cl<sup>–</sup> + S<sub>2</sub>O<sub>3</sub><sup>2–</sup> + 10 OH<sup>–</sup>` },
      { letra: 'B', texto: `4 Cl<sub>2</sub> + 2 SO<sub>4</sub><sup>2–</sup> + 5 H<sub>2</sub>O → 8 Cl<sup>–</sup> + S<sub>2</sub>O<sub>3</sub><sup>2–</sup> + 10 OH<sup>–</sup>` },
      { letra: 'C', texto: `Cl<sub>2</sub> + S<sub>2</sub>O<sub>3</sub><sup>2–</sup> + 10 OH<sup>–</sup> → 2 Cl<sup>–</sup> + 2 SO<sub>4</sub><sup>2–</sup> + 5 H<sub>2</sub>O` },
      { letra: 'D', texto: `Cl<sub>2</sub> + 2 S<sub>2</sub>O<sub>3</sub><sup>2–</sup> + 20 OH<sup>–</sup> → 2 Cl<sup>–</sup> + 4 SO<sub>4</sub><sup>2–</sup> + 10 H<sub>2</sub>O` },
      { letra: 'E', texto: `4 Cl<sub>2</sub> + S<sub>2</sub>O<sub>3</sub><sup>2–</sup> + 10 OH<sup>–</sup> → 8 Cl<sup>–</sup> + 2 SO<sub>4</sub><sup>2–</sup> + 5 H<sub>2</sub>O`, explicacao: `Correta! O tiossulfato se oxida, então sua semirreação é invertida (libera 8 e⁻). Para igualar os elétrons, a do cloro é multiplicada por 4 (8 e⁻). Somando: 4 Cl₂ + S₂O₃²⁻ + 10 OH⁻ → 8 Cl⁻ + 2 SO₄²⁻ + 5 H₂O.` },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2026-021', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 21,
    disciplina: 'Química', conteudo: 'qui-1a2', subtopico: 'Distribuição eletrônica (estado excitado)', dificuldade: 'facil',
    enunciado: `<p>O funcionamento de uma lâmpada comum para iluminação pública antes do advento do LED era baseado em vapor de sódio. Os átomos de sódio, quando bombardeados por elétrons durante a operação da lâmpada, atingem o estado excitado em que o elétron de maior energia é promovido para o orbital atômico vazio de menor energia disponível. Quando os átomos decaem do estado excitado para o estado fundamental, um fóton é emitido, produzindo a cor amarela típica da lâmpada de sódio.</p>
<p>Sabendo que o número atômico do sódio é 11, qual é a configuração eletrônica do estado excitado do sódio responsável pela emissão de luz da lâmpada de vapor de sódio?</p>`,
    alternativas: [
      { letra: 'A', texto: `1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>6</sup> 3s<sup>2</sup>` },
      { letra: 'B', texto: `1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup> 3s<sup>2</sup>` },
      { letra: 'C', texto: `1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3p<sup>1</sup>`, explicacao: `Correta! No estado fundamental, Na = 1s² 2s² 2p⁶ 3s¹. O elétron de maior energia (3s) é promovido ao orbital vazio de menor energia, o 3p: 1s² 2s² 2p⁶ 3p¹.` },
      { letra: 'D', texto: `1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3d<sup>1</sup>` },
      { letra: 'E', texto: `1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 4s<sup>1</sup>` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-022', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 22,
    disciplina: 'Química', conteudo: 'qui-2b1', subtopico: 'Fórmula molecular a partir da estrutura', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2026_QUI_1, imagem: 'imagens/estudo/ufpr-2026-022.webp',
    enunciado: `<p>A partir das estruturas mostradas, assinale a alternativa que apresenta as fórmulas moleculares da lactose e do antraceno, respectivamente.</p>`,
    alternativas: [
      { letra: 'A', texto: `C<sub>10</sub>H<sub>22</sub>O<sub>11</sub> e C<sub>14</sub>H<sub>10</sub>` },
      { letra: 'B', texto: `C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> e C<sub>14</sub>H<sub>14</sub>` },
      { letra: 'C', texto: `C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> e C<sub>14</sub>H<sub>10</sub>`, explicacao: `Correta! A lactose é um dissacarídeo de duas hexoses (2 × C₆H₁₂O₆ – H₂O) = C₁₂H₂₂O₁₁. O antraceno tem três anéis benzênicos fundidos: 14 carbonos e 10 hidrogênios, C₁₄H₁₀.` },
      { letra: 'D', texto: `C<sub>10</sub>H<sub>12</sub>O<sub>11</sub> e C<sub>14</sub>H<sub>10</sub>` },
      { letra: 'E', texto: `C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> e C<sub>10</sub>H<sub>10</sub>` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-023', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 23,
    disciplina: 'Química', conteudo: ['qui-2b2', 'qui-c1'], subtopico: 'Classificação de compostos orgânicos', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_QUI_1, imagem: 'imagens/estudo/ufpr-2026-022.webp',
    enunciado: `<p>Considerando as estruturas da lactose e do antraceno, como esses compostos orgânicos são classificados, respectivamente?</p>`,
    alternativas: [
      { letra: 'A', texto: `Carboidrato e fenol.` },
      { letra: 'B', texto: `Hidrocarboneto e fenol.` },
      { letra: 'C', texto: `Hidrocarboneto e carboidrato.` },
      { letra: 'D', texto: `Carboidrato e hidrocarboneto.`, explicacao: `Correta! A lactose é um açúcar (dissacarídeo, poli-hidroxi com ligação glicosídica), logo um carboidrato; o antraceno tem só C e H (aromático polinuclear), logo é um hidrocarboneto — não tem OH, portanto não é fenol.` },
      { letra: 'E', texto: `Hidrocarboneto e hidrocarboneto.` },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2026-024', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 24,
    disciplina: 'Química', conteudo: 'qui-3a2', subtopico: 'Combustão completa', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_QUI_1, imagem: 'imagens/estudo/ufpr-2026-022.webp',
    enunciado: `<p>Um dos componentes da resina de pinho, usado na produção da fumaça branca, é o ácido abiético, de fórmula molecular C<sub>20</sub>H<sub>30</sub>O<sub>2</sub>. Considere a combustão completa de 1 mol desse ácido, ou seja, a reação entre ele e o gás oxigênio (O<sub>2</sub>), produzindo apenas gás carbônico (CO<sub>2</sub>) e água (H<sub>2</sub>O). Quantos mols de gás carbônico e água, respectivamente, são produzidos nessa combustão?</p>`,
    alternativas: [
      { letra: 'A', texto: `10 e 10` },
      { letra: 'B', texto: `10 e 15` },
      { letra: 'C', texto: `20 e 15`, explicacao: `Correta! Pela conservação dos átomos: os 20 C formam 20 CO₂ e os 30 H formam 15 H₂O (C₂₀H₃₀O₂ + 27 O₂ → 20 CO₂ + 15 H₂O).` },
      { letra: 'D', texto: `20 e 60` },
      { letra: 'E', texto: `40 e 60` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-025', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 25,
    disciplina: 'Química', conteudo: 'qui-4b4', subtopico: 'Número de oxidação', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_QUI_1, imagem: 'imagens/estudo/ufpr-2026-022.webp',
    enunciado: `<p>Os sais clorato e perclorato de potássio são utilizados como agentes oxidantes nas reações de combustão. Quais são os estados de oxidação do átomo de cloro nos ânions perclorato (ClO<sub>4</sub><sup>–</sup>) e clorato (ClO<sub>3</sub><sup>–</sup>), respectivamente?</p>`,
    alternativas: [
      { letra: 'A', texto: `–1 e –1` },
      { letra: 'B', texto: `–7 e –5` },
      { letra: 'C', texto: `+7 e –5` },
      { letra: 'D', texto: `+7 e +5`, explicacao: `Correta! Com O = –2: no ClO₄⁻, x – 8 = –1 ⇒ x = +7; no ClO₃⁻, x – 6 = –1 ⇒ x = +5.` },
      { letra: 'E', texto: `+1 e +1` },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2026-026', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 26,
    disciplina: 'Química', conteudo: 'qui-4a2', subtopico: 'Fatores que afetam a velocidade', dificuldade: 'facil',
    enunciado: `<p>O processo de deterioração de alimentos consiste em várias reações químicas, incluindo de oxidação. Diversas estratégias são utilizadas para aumentar a vida útil de um alimento embalado. Assinale a alternativa que apresenta uma ação que diminui a velocidade dessas reações de deterioração em alimentos.</p>`,
    alternativas: [
      { letra: 'A', texto: `Adicionar gás oxigênio dentro da embalagem.` },
      { letra: 'B', texto: `Armazenar o alimento em temperaturas elevadas.` },
      { letra: 'C', texto: `Embalar os alimentos a vácuo.`, explicacao: `Correta! Embalar a vácuo retira o O₂, um dos reagentes das oxidações; com menor concentração de reagente, a velocidade da reação diminui. As demais opções aumentam a velocidade (mais O₂, maior temperatura, maior superfície de contato, catalisadores).` },
      { letra: 'D', texto: `Cortar o alimento em partes menores antes do armazenamento.` },
      { letra: 'E', texto: `Adicionar enzimas digestivas.` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-027', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 27,
    disciplina: 'Química', conteudo: 'qui-4b3', subtopico: 'Polímeros de condensação (poliéster)', dificuldade: 'facil',
    imagem: 'imagens/estudo/ufpr-2026-027.webp',
    enunciado: `<p>Um dos materiais mais utilizados nas tecnologias de impressão 3D é o PLA, um polímero resistente e que pode ser obtido de fontes renováveis. A seguir é apresentada a equação química da reação de polimerização do ácido lático para formar o PLA.</p>
<p>A reação química associada a essa transformação de grupos funcionais é uma:</p>`,
    alternativas: [
      { letra: 'A', texto: `hidrólise.` },
      { letra: 'B', texto: `alcoólise.` },
      { letra: 'C', texto: `eliminação.` },
      { letra: 'D', texto: `acidificação.` },
      { letra: 'E', texto: `esterificação.`, explicacao: `Correta! O ácido lático tem os grupos –COOH e –OH; a carboxila de uma molécula reage com a hidroxila de outra, liberando água e formando ligações éster (–COO–) — uma esterificação, que gera o poliéster PLA.` },
    ],
    gabarito: 'E',
  },
  // ---------------------------------------------------------------- BIOLOGIA
  {
    id: 'ufpr-2026-028', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 28,
    disciplina: 'Biologia', conteudo: 'bio-c1', subtopico: 'Vetores e doenças transmitidas', dificuldade: 'facil',
    enunciado: `<p>A liberação de mosquitos com a bactéria <i>Wolbachia</i> no meio ambiente é uma técnica adotada por diversos países para impedir o desenvolvimento de certos vírus em insetos. Quando inserida artificialmente em ovos de <i>Aedes aegypti</i>, a capacidade do mosquito de transmitir o vírus fica reduzida. Em 2023, um grupo de pesquisadores de diversos países descreveu, em artigo publicado na revista <i>Science</i>, um fenômeno semelhante: mosquitos <i>Anopheles</i> contaminados pela bactéria <i>Delftia tsuruhatensis</i> são menos capazes de transmitir o protozoário <i>Plasmodium</i>. Em 2025, artigo publicado na revista Nature mostrou que esta mesma bactéria, <i>Delftia</i>, pode inibir a transmissão de parasitas em mosquitos <i>Phlebotomus</i>.</p>
<p>A liberação de mosquitos <i>Aedes aegypti</i> com a <i>Wolbachia</i> e a de <i>Anopheles</i> e <i>Phlebotomus</i> com a <i>Delftia</i> podem ser estratégias para reduzir a transmissão, respectivamente, de:</p>`,
    alternativas: [
      { letra: 'A', texto: `zika, dengue e leishmaniose.` },
      { letra: 'B', texto: `malária, leishmaniose e zika.` },
      { letra: 'C', texto: `dengue, malária e leishmaniose.`, explicacao: `Correta! O <i>Aedes aegypti</i> transmite vírus como o da dengue; o <i>Anopheles</i> transmite o <i>Plasmodium</i> (malária); e o <i>Phlebotomus</i> (flebotomíneo, mosquito-palha) transmite a <i>Leishmania</i> (leishmaniose).` },
      { letra: 'D', texto: `zika, malária e doença de Chagas.` },
      { letra: 'E', texto: `dengue, leishmaniose e doença de Chagas.` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-029', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 29,
    disciplina: 'Biologia', conteudo: ['bio-1a3', 'bio-3b3'], subtopico: 'Vacinas de RNAm', dificuldade: 'facil',
    enunciado: `<p>Vacinas utilizam diferentes estratégias para induzir imunidade contra uma determinada doença. No caso da COVID-19, diversas vacinas funcionam por meio da transferência de RNAm (RNA mensageiro) associado a proteínas virais.</p>
<p>O RNAm transferido possibilitará imunidade contra a COVID-19 no indivíduo que recebeu a vacina, pois, em um primeiro momento, causará:</p>`,
    alternativas: [
      { letra: 'A', texto: `redução da carga viral.` },
      { letra: 'B', texto: `aumento da síntese de RNA.` },
      { letra: 'C', texto: `produção de uma proteína viral.`, explicacao: `Correta! O RNAm da vacina é traduzido pelos ribossomos das células do vacinado, que produzem uma proteína do vírus (antígeno). Só depois o sistema imune reconhece essa proteína e produz anticorpos e células de memória.` },
      { letra: 'D', texto: `redução do número de leucócitos.` },
      { letra: 'E', texto: `produção de anticorpos contra o RNAm viral.` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-030', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 30,
    disciplina: 'Biologia', conteudo: 'bio-3a3', subtopico: 'Abertura e fechamento estomático', dificuldade: 'media',
    enunciado: `<p>Ao longo da evolução, a capacidade fotossintética das plantas esteve relacionada à condutância estomática – uma medida da eficiência com que os estômatos regulam a troca de gases entre a folha e o ambiente. Uma condutância elevada pode aumentar a taxa de fotossíntese, mas também expõe a planta a riscos, especialmente em ambientes secos, ao intensificar a perda de água. Um pesquisador avaliou a condutância estomática de uma planta em quatro situações:</p>
<p>Situação 0 ou inicial: em ambiente seco;<br>Situação 1: aumentou a disponibilidade de CO<sub>2</sub>;<br>Situação 2: reduziu a disponibilidade de CO<sub>2</sub>;<br>Situação 3: aumentou a umidade do ambiente mantendo a disponibilidade de CO<sub>2</sub> igual à inicial.</p>
<p>Espera-se que a condutância dos estômatos nas situações 1, 2 e 3, quando comparadas à condição inicial, respectivamente:</p>`,
    alternativas: [
      { letra: 'A', texto: `diminua, aumente, aumente.`, explicacao: `Correta! Com mais CO₂ disponível, a planta obtém o gás com os estômatos menos abertos (condutância diminui); com menos CO₂, eles se abrem mais (aumenta); com maior umidade, o risco de perder água cai e os estômatos podem ficar mais abertos (aumenta).` },
      { letra: 'B', texto: `diminua, diminua, aumente.` },
      { letra: 'C', texto: `diminua, aumente, diminua.` },
      { letra: 'D', texto: `aumente, diminua, diminua.` },
      { letra: 'E', texto: `aumente, aumente, diminua.` },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2026-031', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 31,
    disciplina: 'Biologia', conteudo: 'bio-3b6', subtopico: 'Insulina, glucagon e glicemia', dificuldade: 'media',
    imagem: ['imagens/estudo/ufpr-2026-031-1.webp', 'imagens/estudo/ufpr-2026-031-2.webp', 'imagens/estudo/ufpr-2026-031-3.webp', 'imagens/estudo/ufpr-2026-031-4.webp', 'imagens/estudo/ufpr-2026-031-5.webp'],
    legendaAcima: ['Figura I', 'Figura II', 'Figura III', 'Figura IV', 'Figura V'],
    enunciado: `<p>Medicamentos injetáveis que eram utilizados exclusivamente para o tratamento de diabetes tipo II passaram a ser usados para tratamento de obesidade e sobrepeso, sendo popularmente chamados de “canetas emagrecedoras”. Esses medicamentos retardam o esvaziamento gástrico e alteram a secreção de hormônios pancreáticos, resultando em uma redução da glicemia. A esse respeito, considere as figuras a seguir:</p>
<p>A figura que melhor representa o efeito da aplicação desses medicamentos em relação à glicemia e às concentrações plasmáticas de glucagon e insulina é a:</p>`,
    alternativas: [
      { letra: 'A', texto: `I` },
      { letra: 'B', texto: `II` },
      { letra: 'C', texto: `III` },
      { letra: 'D', texto: `IV` },
      { letra: 'E', texto: `V`, explicacao: `Correta! Esses medicamentos (análogos de GLP-1) estimulam a secreção de insulina e inibem a de glucagon, reduzindo a glicemia. A Figura V mostra exatamente isso: glicemia caindo, insulina subindo e glucagon diminuindo após a aplicação.` },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2026-032', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 32,
    disciplina: 'Biologia', conteudo: ['bio-4b5', 'bio-4b2'], subtopico: 'Espécies exóticas invasoras', dificuldade: 'facil',
    enunciado: `<p>Ao longo dos últimos 10 anos, o peixe-leão – uma espécie originária dos oceanos Índico e Pacífico – tem sido registrado em diversas áreas do litoral brasileiro. Os primeiros avistamentos ocorreram no Rio de Janeiro, mas atualmente já há relatos em pelo menos nove estados do país. Para a tilápia e o panga, outras duas espécies exóticas, já há registros de escapes para rios e águas oceânicas. Na bacia do Alto Paraná, por exemplo, houve, em cinco anos, um aumento de 1.500% na captura de tilápias nos riachos da região. Esses são exemplos de espécies exóticas invasoras presentes em alguns ecossistemas brasileiros, que se somam ao javali, caramujo-africano e rã-touro-americana.</p>
<p>Com base nos exemplos mencionados, a presença de espécies exóticas invasoras nos ecossistemas costuma causar:</p>`,
    alternativas: [
      { letra: 'A', texto: `aumento da competição por recursos e da predação de espécies nativas.`, explicacao: `Correta! Sem predadores e competidores naturais no novo ambiente, as espécies invasoras se multiplicam, competem com as nativas por alimento e espaço e muitas vezes as predam, reduzindo a biodiversidade local.` },
      { letra: 'B', texto: `redução da incidência de doenças infecciosas e de parasitas nas espécies nativas.` },
      { letra: 'C', texto: `redução da pressão seletiva sobre as espécies nativas e aumento da biodiversidade a longo prazo.` },
      { letra: 'D', texto: `aumento da variabilidade genética das espécies nativas e redução do risco de extinção dessas espécies.` },
      { letra: 'E', texto: `ampliação do nicho ecológico das espécies nativas e estabelecimento de relações como mutualismo, comensalismo ou inquilinismo.` },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2026-033', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 33,
    disciplina: 'Biologia', conteudo: 'bio-2b7', subtopico: 'Tecido conjuntivo e sangue', dificuldade: 'media',
    enunciado: `<p>O tabagismo está associado a um quarto dos casos de câncer, além de doenças pulmonares e cardiovasculares. Uma sessão de narguilé pode equivaler ao consumo de 100 cigarros, e o cigarro eletrônico (<i>vaper</i>), embora não contenha tabaco, pode provocar lesões pulmonares graves. Um usuário de <i>vaper</i> apresenta falta de ar, febre, calafrios, tosse, dor de cabeça e tontura. Análises histopatológicas do pulmão revelaram lesões nos bronquíolos e alvéolos, com formação de tecido cicatricial e grande acúmulo de colágeno, além de:</p>
<p>(1) presença de macrófagos espumosos, ou seja, com acúmulo de gordura no seu interior;<br>(2) infiltração leucocitária, predominantemente por linfócitos e neutrófilos, sem evidência de infecção.</p>
<p>De acordo com a descrição acima, os itens 1 e 2 indicam, respectivamente, a presença de representantes dos tecidos:</p>`,
    alternativas: [
      { letra: 'A', texto: `epitelial e linfático.` },
      { letra: 'B', texto: `adiposo e epitelial.` },
      { letra: 'C', texto: `nervoso e conjuntivo.` },
      { letra: 'D', texto: `sanguíneo e nervoso.` },
      { letra: 'E', texto: `conjuntivo e sanguíneo.`, explicacao: `Correta! Macrófagos são células do tecido conjuntivo (derivadas de monócitos que migram para os tecidos); linfócitos e neutrófilos são leucócitos, células do tecido sanguíneo.` },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2026-034', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 34,
    disciplina: 'Biologia', conteudo: ['bio-1a3', 'bio-4b6'], subtopico: 'CRISPR e síntese proteica', dificuldade: 'media',
    imagem: 'imagens/estudo/ufpr-2026-034.webp',
    enunciado: `<p>Em 2022, foi realizado o primeiro transplante de um coração de porco geneticamente modificado para um humano vivo. Para isso, cientistas utilizaram a técnica de edição gênica CRISPR-Cas9, que permite modificar o DNA das células. Nesse processo, a enzima Cas9, guiada por um RNA específico, realiza um corte preciso, possibilitando a inserção de genes humanos. A produção das proteínas codificadas por esses genes e a inativação de algumas proteínas suínas pela mesma técnica reduzem a chance de rejeição do órgão transplantado. A figura a seguir ilustra o fluxo da informação genética na célula do porco, desde a edição do DNA até a produção da proteína humana.</p>
<p>Na figura, os números de 1 a 4 representam, respectivamente:</p>`,
    alternativas: [
      { letra: 'A', texto: `1 = Nucléolo; 2 = Ribossomo; 3 = Transcrição; 4 = RNA ribossomal` },
      { letra: 'B', texto: `1 = Citosol; 2 = Complexo de Golgi; 3 = <i>Splicing</i>; 4 = RNA transportador` },
      { letra: 'C', texto: `1 = Núcleo; 2 = Complexo de Golgi; 3 = Transcrição; 4 = RNA mensageiro` },
      { letra: 'D', texto: `1 = Núcleo; 2 = Retículo endoplasmático; 3 = Tradução; 4 = RNA mensageiro`, explicacao: `Correta! O DNA é editado e transcrito no núcleo (1); o RNA mensageiro (4, com cauda poli-A) sai para o citoplasma, onde ribossomos aderidos ao retículo endoplasmático (2) fazem a tradução (3) da proteína que segue para a membrana.` },
      { letra: 'E', texto: `1 = Citosol; 2 = Retículo endoplasmático; 3 = Tradução; 4 = RNA transportador` },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2026-035', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 35,
    disciplina: 'Biologia', conteudo: 'bio-1b3', subtopico: 'Heredograma e dominância incompleta', dificuldade: 'dificil',
    imagem: 'imagens/estudo/ufpr-2026-035.webp',
    enunciado: `<p>Níveis elevados de LDL (lipoproteína de baixa densidade) no sangue aumentam o risco de doenças cardiovasculares, que estão entre as principais causas de morte no mundo. Esse aumento pode ser causado por maus hábitos alimentares ou por hipercolesterolemia familiar, uma condição genética caracterizada por níveis muito altos de LDL no sangue, independentemente da dieta. Estima-se que essa condição afete mais de 10 milhões de pessoas globalmente. A forma mais comum de hipercolesterolemia familiar envolve mutações no gene <i>LDLR</i>, que codifica o receptor de LDL, e está representada no heredograma a seguir, com indivíduos acompanhados de seus respectivos níveis de LDL. Consideram-se aceitáveis os níveis de LDL inferiores a 130 mg/dL.</p>
<p>Considerando os fenótipos e os níveis de LDL dos indivíduos representados no heredograma, é correto afirmar que o padrão de herança observado é:</p>`,
    alternativas: [
      { letra: 'A', texto: `autossômico recessivo.` },
      { letra: 'B', texto: `poligênico ou quantitativo.` },
      { letra: 'C', texto: `recessivo ligado ao cromossomo X.` },
      { letra: 'D', texto: `autossômico dominante, com dominância completa.` },
      { letra: 'E', texto: `autossômico dominante, com dominância incompleta ou codominância.`, explicacao: `Correta! A condição aparece em todas as gerações, afeta homens e mulheres e passa de pai para filho (autossômica dominante). Há três fenótipos: normais (≈ 90 mg/dL), afetados com ≈ 270 mg/dL (heterozigotos) e afetados com ≈ 700 mg/dL (homozigotos), ou seja, o heterozigoto é intermediário — dominância incompleta.` },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2026-036', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 36,
    disciplina: 'Biologia', conteudo: 'bio-4a6', subtopico: 'Anfíbios', dificuldade: 'facil',
    enunciado: `<p>Os anfíbios lideram o ranking de vertebrados em risco de extinção, com 41% das espécies ameaçadas. Em seguida, aparecem os tubarões e as raias (37%), os mamíferos (27%), os répteis (21%) e as aves (13%). Entre 1980 e 2004, as doenças fúngicas e a perda de hábitat foram os principais fatores de ameaça. A partir de 2004, no entanto, as mudanças climáticas tornaram-se o novo vilão, seguidas pela perda de hábitat e outras causas já anteriormente presentes.</p>
<p>Qual característica dos anfíbios ajuda a explicar por que esse grupo é proporcionalmente mais ameaçado de extinção?</p>`,
    alternativas: [
      { letra: 'A', texto: `Endotermia` },
      { letra: 'B', texto: `Pele fina e úmida`, explicacao: `Correta! A pele fina, úmida e permeável (usada na respiração cutânea) torna os anfíbios muito sensíveis à desidratação, ao aquecimento, a poluentes e a fungos como o quitrídio — fatores agravados pelas mudanças climáticas.` },
      { letra: 'C', texto: `Desenvolvimento direto` },
      { letra: 'D', texto: `Ovos com casca e âmnio` },
      { letra: 'E', texto: `Excreção renal de ácido úrico` },
    ],
    gabarito: 'B',
  },
  // ---------------------------------------------------------------- GEOGRAFIA
  {
    id: 'ufpr-2026-037', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 37,
    disciplina: 'Geografia', conteudo: 'geo-3u3', subtopico: 'Cabeça d’água', dificuldade: 'facil',
    enunciado: `<p>Considere a seguinte notícia, que relata um episódio ocorrido em 11 de janeiro de 2025:</p>
<p><b>Bombeiros salvam 10 pessoas ilhadas em rio de Antonina após cabeça d’água</b></p>
<p>O Corpo de Bombeiros Militar do Paraná (CBMPR) resgatou, na noite de sábado (11), dez pessoas que ficaram ilhadas após uma cabeça d’água atingir o Rio do Nunes, em Antonina, no Litoral do Estado. [...] Segundo o comandante-geral do CBMPR, [...] a operação exemplifica a dedicação e o preparo da corporação para enfrentar situações extremas. [...] O comandante reforçou ainda a necessidade de precauções ao praticar atividades aquáticas, especialmente durante o verão.</p>
<p><small>Disponível em: https://www.aen.pr.gov.br/Noticia/Bombeiros-salvam-10-pessoas-ilhadas-em-rio-de-Antonina-apos-cabeca-dagua.</small></p>
<p>Considerando essas informações, assinale a alternativa que apresenta a principal causa do fenômeno cabeça d’água e o motivo pelo qual seus efeitos podem surpreender as pessoas.</p>`,
    alternativas: [
      { letra: 'A', texto: `Formação de uma coluna de ar em rotação associada a uma nuvem de tempestade, que surpreende por se originar sobre uma superfície de água, como o mar, lagos ou grandes rios.` },
      { letra: 'B', texto: `Ocorrência de chuvas intensas em áreas mais elevadas de uma bacia hidrográfica, que surpreende pelo aumento rápido e repentino do nível de um rio ou córrego, mesmo que não tenha chovido no local onde estão as pessoas.`, explicacao: `Correta! A cabeça d’água é uma onda de cheia repentina: chuva forte nas cabeceiras (áreas altas da bacia) escoa rapidamente rio abaixo, e o nível sobe de repente onde as pessoas estão, mesmo sem chuva no local.` },
      { letra: 'C', texto: `Avanço de frentes frias sobre uma determinada localidade, aumentando os riscos e a vulnerabilidade de uma determinada área, e surpreendendo por provocar ondas de frio em pleno verão.` },
      { letra: 'D', texto: `Ocorrência de chuvas fortes em grandes bacias hidrográficas, que surpreendem ao provocar os eventos extremos de granizo no continente e em nível regional.` },
      { letra: 'E', texto: `Registro de chuvas intensas e homogêneas em bacias hidrográficas de médio e grande porte, que surpreende por favorecer a ocorrência de erosão e deslizamentos de terra nos trechos costeiros de menor elevação.` },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2026-038', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 38,
    disciplina: 'Geografia', conteudo: 'geo-c3', subtopico: 'Questão Palestina', dificuldade: 'media',
    imagem: 'imagens/estudo/ufpr-2026-038.webp',
    legenda: 'Evolução da ocupação judaica na Palestina<br><small>Disponível em: https://agenciabrasil.ebc.com.br/internacional/noticia/2023-10/israel-hamas-palestina-entenda-guerra-no-oriente-medio</small>',
    textoApoio: `<p>Considere o texto e o mapa a seguir:</p>
<p><b>Declaração Balfour, 2 de novembro de 1917.</b></p>
<p>O governo de Sua Majestade encara favoravelmente o estabelecimento, na Palestina, de um Lar Nacional para o Povo Judeu, e empregará todos os seus esforços no sentido de facilitar a realização desse objetivo, entendendo-se claramente que nada será feito que possa atentar contra os direitos civis e religiosos das coletividades não judaicas existentes na Palestina, nem contra os direitos e o estatuto político de que gozam os judeus em qualquer outro país. Desde já, declaro-me extremamente grato a você pela gentileza de encaminhar esta declaração ao conhecimento da Federação Sionista.</p>
<p style="text-align:right">Arthur James Balfour<br>Ministro britânico de Relações Exteriores</p>
<p><small>Brener, Jayme. <i>As guerras entre Israel e os Árabes</i>. São Paulo: Scipione, 1997, p. 13.</small></p>`,
    enunciado: `<p>Considerando as informações apresentadas, assinale a alternativa que relaciona corretamente a declaração Balfour à evolução da ocupação judaica na Palestina.</p>`,
    alternativas: [
      { letra: 'A', texto: `A declaração Balfour simboliza o nascimento do Estado judeu na Palestina em 1917, como um gesto de aliança do governo Britânico com a comunidade judaica, com objetivo de controlar a expansão árabe no Oriente Médio durante a Primeira Guerra Mundial, o que determinou a evolução da ocupação judaica na região.` },
      { letra: 'B', texto: `A expansão da ocupação israelense em território palestino, para além da área delimitada pela ONU em 1947, indica que os direitos das coletividades não judaicas existentes na Palestina não foram assegurados pelos organismos internacionais, conforme prometia a declaração Balfour emitida pelo Reino Britânico.`, explicacao: `Correta! A declaração prometia que nada atentaria contra os direitos das coletividades não judaicas. Os mapas mostram o território palestino encolhendo muito além da partilha da ONU de 1947 até a situação atual, ou seja, essa garantia não foi cumprida.` },
      { letra: 'C', texto: `A declaração Balfour representou apenas um gesto simbólico do Reino Britânico para angariar apoio dos judeus durante a Primeira Grande Guerra, já que a partilha da Palestina entre árabes e judeus se deu apenas em 1947, pela Resolução 181 da ONU, e a criação do Estado de Israel ocorreu oficialmente em 1948.` },
      { letra: 'D', texto: `Diante da promessa não cumprida pela declaração Balfour, a ONU confiscou os poderes britânicos sobre a Palestina e realizou sua partilha entre árabes e judeus de modo desproporcional, em 1947, o que tem levado Israel a justificar sua expansão sobre o território palestino com base nas promessas britânicas.` },
      { letra: 'E', texto: `A declaração Balfour registra o início do movimento sionista, como uma política de ocupação da Palestina promovida pelo Império Britânico para frear o Império Turco Otomano e a ocupação árabe na região, com um programa de expansão territorial gradual do Estado israelense.` },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2026-039', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 39,
    disciplina: 'Geografia', conteudo: 'geo-2u1', subtopico: 'Relevo cárstico', dificuldade: 'facil',
    enunciado: `<p>Subsidência e colapso são processos comuns e naturais em áreas de relevo cárstico. Feições típicas do carste podem se formar de maneira bastante lenta ou surgir em poucos dias, originando depressões na superfície do terreno. Considerando as informações apresentadas, são exemplos de formas típicas de relevo cárstico:</p>`,
    alternativas: [
      { letra: 'A', texto: `leques aluviais, dunas e chapadas.` },
      { letra: 'B', texto: `cascatas, morros testemunhos e rochas periglaciais.` },
      { letra: 'C', texto: `ravinas, voçorocas e derrames basálticos.` },
      { letra: 'D', texto: `planícies, planaltos e rios de superfície extensos.` },
      { letra: 'E', texto: `dolinas, sumidouros e cavernas.`, explicacao: `Correta! O relevo cárstico se forma pela dissolução de rochas solúveis (como o calcário) pela água; suas feições típicas são dolinas (depressões), sumidouros (onde rios somem no subsolo) e cavernas.` },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2026-040', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 40,
    disciplina: 'Geografia', conteudo: 'geo-4u2', subtopico: 'Cerrado e Matopiba', dificuldade: 'facil',
    enunciado: `<p>Analise os dois fragmentos de texto a seguir:</p>
<p>Quatro dos cinco estados com maior perda de vegetação nativa em 2024 ficam no Matopiba, a principal fronteira de desmatamento. [...] Os quatro estados do Matopiba estão entre as cinco unidades federativas que mais desmataram em 2024.</p>
<p><small>Disponível em: https://brasil.mapbiomas.org/2025/05/15/mapbiomas-desmatamento-caiu-em-todos-os-biomas-brasileiros-em-2024/.</small></p>
<p>A região do Matopiba é uma área de grande crescimento no cultivo de grãos, que se desenvolveu de modo mais intenso a partir da década de 1980 e que requer maior atenção das autoridades e especialistas. O nome refere-se à combinação das siglas dos estados que possuem municípios na região: Maranhão, Tocantins, Piauí e Bahia. Os municípios abrangidos pela região do Matopiba estão listados na Portaria nº 244, de 12 de novembro de 2015, do Ministério da Agricultura, Pecuária e Abastecimento.</p>
<p><small>Disponível em: https://www.ibge.gov.br/geociencias/organizacao-do-territorio/estrutura-territorial/34329-matopiba.html?=&t=o-que-e.</small></p>
<p>Nos dois últimos anos, 2023 e 2024, a Amazônia deixou de ser a formação vegetal mais desmatada do país. Em 2024, a região do Matopiba concentrou aproximadamente 75% do desmatamento de um determinado bioma e 42% de toda a perda de vegetação nativa no Brasil. Predominante em cerca de 91% da área do Matopiba, o bioma em questão é chamado de:</p>`,
    alternativas: [
      { letra: 'A', texto: `pantanal.` },
      { letra: 'B', texto: `pampa.` },
      { letra: 'C', texto: `cerrado.`, explicacao: `Correta! O Matopiba (MA, TO, PI e BA) é a fronteira agrícola de grãos sobre o Cerrado, bioma predominante na região e hoje o mais desmatado do país.` },
      { letra: 'D', texto: `mata atlântica.` },
      { letra: 'E', texto: `zonas costeiras.` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-041', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 41,
    disciplina: 'Geografia', conteudo: 'geo-1u5', subtopico: 'Migrações Sul-Sul', dificuldade: 'media',
    imagem: 'imagens/estudo/ufpr-2026-041.webp',
    legendaAcima: '<b>Migrantes com entrada registrada no Brasil – janeiro de 2010 a agosto de 2024</b>',
    legenda: '<small>Migração no Brasil. Boletim Informativo n.º 4 – Outubro/2024. Secretaria Nacional de Justiça – Ministério da Justiça e Segurança Pública</small>',
    textoApoio: `<p>Considere o texto e o quadro a seguir:</p>
<p><b>Quase 68% dos imigrantes não estão inseridos no mercado de trabalho, diz pesquisa.</b></p>
<p>Se, por um lado, os especialistas apontam um mercado de trabalho aquecido no Brasil, com taxas de desemprego baixas e uma rotatividade maior de empregos, por outro, essa realidade não é a mesma encontrada por imigrantes que chegam ao país [...]. Anceliany Arbelay, 38, é venezuelana e sentiu esse processo na pele ao imigrar para o Brasil em 2022. “Eu trabalhava 8 horas e 12 horas aos finais de semana, se eu falasse que não queria eles queriam descontar do meu salário porque eu não tinha os documentos, eu não tinha os direito[s] da carteira, contratada pela CLT”, relatou. A venezuelana, que por muito tempo ocupou a informalidade, conseguiu sua identidade no Brasil, o Registro Nacional Migratório (RNM), apenas 6 meses depois de chegar ao país. E mesmo assim, ainda não conseguiu regularizar sua documentação escolar. Por isso, tem dificuldade para trabalhar na sua área de formação, de administradora financeira.</p>
<p><small>Disponível em: https://www.cnnbrasil.com.br/economia/macroeconomia/quase-68-dos-imigrantes-nao-estao-inseridos-no-mercado-de-trabalho-diz-pesquisa/.</small></p>`,
    enunciado: `<p>Considerando as informações apresentadas e os conhecimentos dos fluxos migratórios contemporâneos, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: `Em decorrência do acirramento das políticas anti-imigratórias de países do norte global, pós-crise de 2008, observa-se uma queda da imigração brasileira para o exterior simultaneamente ao aumento de fluxos migratórios para o Brasil, sobrecarregando o mercado de trabalho do país.` },
      { letra: 'B', texto: `A deflagração da Operação Acolhida pelo Exército brasileiro, em 2018, colaborou para o aumento da entrada de imigrantes venezuelanos pelas cidades fronteiriças de Boa Vista (RR) e Pacaraima (RR), contribuindo para a saturação do mercado de trabalho e a geração de situações de informalidade.` },
      { letra: 'C', texto: `A liderança do Brasil na Missão das Nações Unidas para a Estabilização do Haiti, a partir de 2004, inaugurou o protagonismo geopolítico do país na América Latina e estimulou as migrações regionais, com destaque para Venezuela, Haiti e Bolívia.` },
      { letra: 'D', texto: `As políticas anti-imigratórias do Norte Global têm contribuído para o estabelecimento de fluxos latino-americanos no sentido Sul-Sul, reproduzindo a lógica de exploração do trabalho imigrante e transformando os fluxos migratórios para o Brasil, que outrora possuía predomínio de imigrações Norte-Sul.`, explicacao: `Correta! Com as barreiras impostas por EUA e Europa, cresceram os fluxos entre países do Sul (venezuelanos, haitianos, bolivianos — maioria no quadro), e esses imigrantes enfrentam informalidade e exploração, como no relato; antes, predominavam no Brasil imigrantes vindos do Norte (europeus).` },
      { letra: 'E', texto: `As situações de trabalho precarizado às quais os imigrantes venezuelanos têm sido submetidos no Brasil são consequência do sobrefluxo de pessoas que chegam ao país, associado a políticas de interiorização que encaminham esses imigrantes principalmente para as regiões Sudeste e Sul do país.` },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2026-042', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 42,
    disciplina: 'Geografia', conteudo: 'geo-4u5', subtopico: 'Meio técnico-científico-informacional', dificuldade: 'media',
    enunciado: `<p>Considere o seguinte texto:</p>
<p><b>Márcio Pochmann: IBGE planeja reconquistar “soberania de dados” contra as big techs</b></p>
<p>Para o professor da Unicamp, a questão dos dados é um novo dilema da soberania. No século 19, a questão era a soberania política. No século 20, o Brasil debateu a soberania econômica e o subdesenvolvimento. Agora, é a hora de o país ingressar no debate sobre a soberania de informações. “Na era digital, nós praticamente estamos submetidos a um censo por dia. Todas as suas decisões de ouvir música, de direção, para se deslocar para algum lugar, de pagamento, de compra, enfim, todas as suas decisões são dados brutos que viram uma forma de extrativismo pelas big techs, empresas estrangeiras que coletam essas informações, que trabalham, dilapidam essas informações e depois as transformam num grande negócio”, explica o professor. “Isso nos aprofunda no subdesenvolvimento. Nós estamos permitindo que o extrativismo digital possibilite que essas empresas tenham alta lucratividade, não paguem impostos, não gerem emprego; o país não tem essa tecnologia para poder operar nacionalmente como outros países”, afirma Pochmann.</p>
<p><small>Disponível em: https://revistaforum.com.br/ciencia-e-tecnologia/2024/7/19/marcio-pochmann-ibge-planeja-reconquistar-soberania-de-dados-contra-as-big-techs-162389.html. Adaptado.</small></p>
<p>Considerando o contexto apontado pelo fragmento de reportagem acima, é correto afirmar sobre as relações entre soberania e meio técnico-científico-informacional:</p>`,
    alternativas: [
      { letra: 'A', texto: `Os desafios impostos pelo meio técnico-científico-informacional reforçam a importância da soberania de dados para o desenvolvimento do país, compreendendo que a exploração econômica dessas informações deve se dar em território nacional, como garantia de desenvolvimento econômico de empresas brasileiras.` },
      { letra: 'B', texto: `Diante dos impactos do extrativismo de dados assinalados pela matéria, compreende-se que o desenvolvimento do país nas atuais circunstâncias do meio técnico-científico-informacional requer a erradicação de plataformas e serviços digitais de empresas estrangeiras para a garantia da soberania digital.` },
      { letra: 'C', texto: `No contexto do meio técnico-científico-informacional, a soberania digital passa pelo desenvolvimento de estratégias de guerra informacional, com investidas do governo contra as big techs para resgatar os dados dos brasileiros que são enviados para o exterior para serem explorados economicamente.` },
      { letra: 'D', texto: `O meio técnico-científico-informacional requer uma política nacional de enfrentamento às big techs que impacta a liberdade de expressão da população brasileira, em benefício do fortalecimento da segurança nacional e do desenvolvimento econômico e social.` },
      { letra: 'E', texto: `No meio técnico-científico-informacional, a soberania passa pelo controle de um país sobre os dados de sua população, condição que se vê ameaçada no Brasil pela extração e exploração informacional por parte de empresas estrangeiras, incluindo o envio desses dados para o exterior.`, explicacao: `Correta! O texto trata a informação como recurso estratégico: a soberania hoje inclui controlar os dados da população, e o “extrativismo digital” das big techs estrangeiras, que levam esses dados para fora e os exploram, ameaça essa soberania. As outras opções extrapolam o texto (erradicação, guerra informacional, censura).` },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2026-043', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 43,
    disciplina: 'Geografia', conteudo: 'geo-1u3', subtopico: 'Elementos do mapa', dificuldade: 'facil',
    imagem: 'imagens/estudo/ufpr-2026-043.webp',
    enunciado: `<p>Mapas são representações simplificadas e imperfeitas da realidade. A esse respeito, observe os mapas a seguir.</p>
<p>Considerando que as escolhas técnicas podem modificar tais representações, quais elementos cartográficos dos mapas B, C e D foram transformados em relação ao mapa A?</p>`,
    alternativas: [
      { letra: 'A', texto: `Mapa B: Coordenadas geográficas; Mapa C: Escala; Mapa D: Projeção cartográfica` },
      { letra: 'B', texto: `Mapa B: Orientação; Mapa C: Coordenadas geográficas; Mapa D: Escala` },
      { letra: 'C', texto: `Mapa B: Projeção cartográfica; Mapa C: Coordenadas geográficas; Mapa D: Orientação` },
      { letra: 'D', texto: `Mapa B: Orientação; Mapa C: Escala; Mapa D: Projeção cartográfica`, explicacao: `Correta! O mapa B está invertido, com o sul para cima (orientação); o C tem escala 1:110.000.000, metade da de A, por isso o país aparece menor (escala); o D mantém a escala e a orientação, mas o contorno está deformado de outro modo (projeção cartográfica).` },
      { letra: 'E', texto: `Mapa B: Coordenadas geográficas; Mapa C: Projeção cartográfica; Mapa D: Orientação` },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2026-044', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 44,
    disciplina: 'Geografia', conteudo: ['geo-1u3', 'geo-1u2'], subtopico: 'Coordenadas UTM e escala', dificuldade: 'facil',
    imagem: 'imagens/estudo/ufpr-2026-044.webp',
    enunciado: `<p>Uma pesquisa mapeou dois sítios arqueológicos <i>A</i> e <i>B</i> no estado do Paraná, nos municípios de Peabiru e Faxinal, respectivamente. Para cada local, as coordenadas UTM (Universal Transversa de Mercator) no fuso 22S são: local <i>A</i> (370.000,00 m E; 7.350.000,00 m S); local <i>B</i> (470.000,00 m E; 7.350.000,00 m S), conforme a representação cartográfica a seguir.</p>
<p>Com base nessas informações, qual é, respectivamente, a menor distância (D) entre os locais <i>A</i> e <i>B</i> na superfície terrestre e a menor distância (d) entre os locais <i>A</i> e <i>B</i> em um documento cartográfico com escala 1:1.000.000?</p>`,
    alternativas: [
      { letra: 'A', texto: `D = 10 km e d = 1 cm.` },
      { letra: 'B', texto: `D = 47 km e d = 4,7 cm.` },
      { letra: 'C', texto: `D = 100 km e d = 10 cm.`, explicacao: `Correta! As coordenadas UTM são métricas: com a mesma coordenada norte, D = 470.000 – 370.000 = 100.000 m = 100 km. Na escala 1:1.000.000, 1 cm = 10 km, então d = 100/10 = 10 cm.` },
      { letra: 'D', texto: `D = 470 km e d = 47 cm.` },
      { letra: 'E', texto: `D = 7350 km e d = 73,5 cm.` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-045', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 45,
    disciplina: 'Geografia', conteudo: ['geo-1u3', 'geo-3u2'], subtopico: 'Anamorfoses e mudanças climáticas', dificuldade: 'facil',
    imagem: 'imagens/estudo/ufpr-2026-045.webp',
    legenda: '<small>Patz, J. A.; Gibbs, H. K.; Foley, J. A.; Rogers, J. V.; Smith, K. R. Climate change and global health: quantifying a growing ethical crisis. <i>EcoHealth</i>, v. 4, p. 397-405, 2007. Adaptado.</small>',
    enunciado: `<p>Os cartogramas a seguir mostram os países redimensionados em proporção a: (A) emissão cumulativa de CO<sub>2</sub> (dióxido de carbono) e (B) estimativas de mortalidade decorrente de quatro potenciais efeitos das mudanças climáticas para a saúde (malária, desnutrição, diarreia e mortes relacionadas a inundações).</p>
<p>A partir da interpretação dessas representações cartográficas, é correto afirmar que:</p>`,
    alternativas: [
      { letra: 'A', texto: `os países mais vulneráveis aos efeitos das mudanças climáticas na saúde são os menos responsáveis pelas emissões de CO<sub>2</sub>.`, explicacao: `Correta! No cartograma A aparecem inflados EUA, Europa e Japão (grandes emissores); no B, África e sul da Ásia aparecem enormes, enquanto os grandes emissores quase somem: quem menos emitiu é quem mais sofre.` },
      { letra: 'B', texto: `o continente africano possui maior potencial de mortalidade relacionada às mudanças climáticas devido às suas baixas emissões de CO<sub>2</sub>.` },
      { letra: 'C', texto: `a Ásia possui baixa emissão de CO<sub>2</sub>, mas tem alta mortalidade devido aos efeitos das mudanças climáticas na saúde.` },
      { letra: 'D', texto: `as regiões com maiores emissões de CO<sub>2</sub> são mais afetadas pelas mudanças climáticas na saúde.` },
      { letra: 'E', texto: `os Estados Unidos apresentam emissões de CO<sub>2</sub> superiores à média global, o que gera alta mortalidade relacionada às mudanças climáticas no continente americano.` },
    ],
    gabarito: 'A',
  },
  // ---------------------------------------------------------------- HISTÓRIA
  {
    id: 'ufpr-2026-046', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 46,
    disciplina: 'História', conteudo: 'his-1a6', subtopico: 'Arcos triunfais romanos', dificuldade: 'facil',
    enunciado: `<p>A historiografia sobre o mundo antigo tem um importante papel ideológico na construção de discursos políticos contemporâneos, como demonstrado pelo saudosismo do passado imperial romano, que influenciou desde o fascismo italiano até os discursos da atual primeira-ministra Giorgia Meloni, que recentemente afirmou que Roma deveria ser a capital da União Europeia. Nesse mesmo sentido, uma bandeira de Israel foi projetada no Arco de Tito, em Roma, no dia 10 de outubro de 2023. A escolha de um Arco Triunfal romano para a projeção do símbolo causou curiosidade e até mesmo polêmica. Isso se deve ao fato de que esse tipo de arquitetura representava, na República e no Império Romano:</p>`,
    alternativas: [
      { letra: 'A', texto: `o triunfo e a expansão do monoteísmo abraâmico contra o politeísmo.` },
      { letra: 'B', texto: `a integração de populações estrangeiras por meio da romanização.` },
      { letra: 'C', texto: `a celebração da cultura de jogos violentos entre gladiadores.` },
      { letra: 'D', texto: `a vitória militar em guerras, rebeliões ou conquistas territoriais.`, explicacao: `Correta! Os arcos triunfais celebravam vitórias militares. O Arco de Tito, em particular, comemora a repressão à revolta judaica e a destruição de Jerusalém (70 d.C.) — daí a polêmica de projetar ali a bandeira de Israel.` },
      { letra: 'E', texto: `a coesão social entre patrícios e plebeus a partir da criação do Tribunato da Plebe.` },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2026-047', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 47,
    disciplina: 'História', conteudo: 'his-1a7', subtopico: 'Reinos africanos e rotas transaarianas', dificuldade: 'media',
    enunciado: `<p>Leia o trecho a seguir, escrito pelo historiador árabe al-Umari (1301–1349), que descreve uma viagem do governante africano Mansa Musa, que reinou entre 1312 e 1337.</p>
<p><b>A peregrinação de Mansa Musa</b></p>
<p>Ele gosta mais de ser chamado de governante do Mali, porque essa é a maior província e é o nome pelo qual ele é mais conhecido. Este rei é o maior dos reis muçulmanos do Sudão [nome dado pelos árabes ao oeste africano]. Ele governa o território mais extenso, tem o exército mais numeroso, é o mais corajoso, o mais rico, o mais afortunado, o mais vitorioso sobre os seus inimigos e o mais capaz de distribuir benefícios. [...] Este homem inundou o Cairo com as suas benesses. Não deixou nenhum emir da corte, nem detentor de um cargo real, sem lhe oferecer uma carga de ouro. Os cairotas obtiveram lucros incalculáveis com ele e a sua comitiva, comprando, vendendo, dando e recebendo. Trocaram ouro até deprimir o seu valor no Egito e fazer com que o seu preço caísse.</p>
<p><small>Levtizion, N.; Hopkins, J. <i>Corpus of Early Arabic Sources for West African History</i>. Princeton: Markus Wiener, 2011, p. 261-271. Adaptado.</small></p>
<p>Al-Umari descreve, no excerto apresentado, o impacto causado pelo governante do Império do Mali, Mansa Musa, em sua passagem pelo Egito quando ele seguia em sua peregrinação islâmica para Meca (conhecida como <i>hajj</i>). Com base nesse texto e nos conhecimentos sobre as sociedades africanas durante a expansão islâmica, assinale a alternativa que aponta corretamente uma característica dos estados africanos durante o período da Idade Média.</p>`,
    alternativas: [
      { letra: 'A', texto: `Reinos como Gana, Mali e Songai dependiam de produtos importados do Mediterrâneo, especialmente do ouro.` },
      { letra: 'B', texto: `As monarquias do oeste africano eram compostas de grupos nômades conhecidos como beduínos.` },
      { letra: 'C', texto: `O cristianismo, por conta da presença islâmica na África, não era praticado no continente até o contato com europeus.` },
      { letra: 'D', texto: `Os reinos da região conhecida em árabe como Sudão tiveram seu ápice antes da chegada do Islã.` },
      { letra: 'E', texto: `Estados como Gana, Mali e Songai se conectavam com parte da África e da Ásia por meio das rotas transaarianas.`, explicacao: `Correta! Os impérios do Sahel enriqueceram com o comércio de ouro, sal e outros produtos pelas caravanas que cruzavam o Saara, ligando-os ao norte da África e ao mundo islâmico (até a Ásia) — como mostra a viagem de Mansa Musa ao Cairo e a Meca.` },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2026-048', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 48,
    disciplina: 'História', conteudo: 'his-2a2', subtopico: 'Reforma Anglicana', dificuldade: 'facil',
    enunciado: `<p>O século XVI foi palco de um fortalecimento das monarquias europeias, cujas raízes remontavam à Idade Média, e isso acarretou também vulnerabilidades diplomáticas. Um desses casos se deu entre os reinos da Inglaterra, da França, da Espanha e do Sacro Império Romano Germânico, contexto em que alianças frágeis eram asseguradas, entre outros, por casamentos. Nesse sentido, uma crise diplomática importante se deu a partir do relacionamento do rei inglês Henrique VIII com a espanhola Catarina de Aragão. Com base nessa afirmação e nos conhecimentos de História Moderna, é correto afirmar que são consequências dessa crise:</p>`,
    alternativas: [
      { letra: 'A', texto: `a deposição de Henrique VIII e a declaração da Magna Carta.` },
      { letra: 'B', texto: `o divórcio de Henrique VIII e a fundação da Igreja Anglicana.`, explicacao: `Correta! Diante da recusa do papa em anular o casamento com Catarina de Aragão, Henrique VIII rompeu com Roma, obteve o divórcio na Inglaterra e, pelo Ato de Supremacia (1534), tornou-se chefe da nova Igreja Anglicana.` },
      { letra: 'C', texto: `o rompimento de Henrique VIII com o papado e o início do Grande Cisma.` },
      { letra: 'D', texto: `a vitória de Henrique VIII sobre os franceses e o fim da Guerra dos Cem Anos.` },
      { letra: 'E', texto: `o isolamento de Henrique VIII e a promulgação das Leis de Cercamento.` },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2026-049', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 49,
    disciplina: 'História', conteudo: 'his-1b3', subtopico: 'Administração colonial', dificuldade: 'media',
    enunciado: `<p>A política brasileira, especialmente nas décadas de 2010 e 2020, tem sido marcada pelas tensões entre diferentes instâncias de poder legislativo, executivo e judiciário. Séculos atrás, durante o período colonial, a administração do território por parte da Coroa Portuguesa também envolvia a tensão entre diferentes mecanismos de controle. Com base nessa reflexão, assinale a alternativa que descreve corretamente uma instância administrativa do Brasil Colonial e sua função.</p>`,
    alternativas: [
      { letra: 'A', texto: `Capitanias Hereditárias: amplos lotes de terra, de controle administrativo público, com função de avanço da economia agrária.` },
      { letra: 'B', texto: `Padroados: instituições religiosas de direta autoridade papal, com função de conversão e treinamento burocrático de indígenas.` },
      { letra: 'C', texto: `Câmaras Municipais: fundamentadas nas Ordenações do Reino, com função de administração local e dotadas de variadas competências.`, explicacao: `Correta! As Câmaras Municipais, regidas pelas Ordenações do Reino e controladas pelos “homens bons”, cuidavam da administração local: impostos, obras, abastecimento, justiça de primeira instância etc.` },
      { letra: 'D', texto: `Governo-Geral: órgão descentralizador, cuja função era desonerar a administração metropolitana e tornar o empreendimento colonial menos custoso.` },
      { letra: 'E', texto: `Tribunal do Santo Ofício: mecanismo de cunho religioso, cuja função era a nomeação de clérigos de ordens atuantes na Colônia, como os jesuítas.` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-050', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 50,
    disciplina: 'História', conteudo: 'his-1b2', subtopico: 'Povos originários da Amazônia', dificuldade: 'dificil',
    enunciado: `<p>Considere os dois excertos a seguir. O primeiro foi retirado da obra “O estado do Direito entre os Autochtones do Brazil”, do intelectual Carl Friedrich Philipp von Martius (1794–1868), publicada em 1907; e o segundo, escrito pelo arqueólogo Eduardo Goés Neves.</p>
<p>O passado remoto da humanidade americana se apresenta para nós como um abismo insondável. Nenhum raio de uma tradição, nenhum monumento de força intelectual anterior esclarece essa escuridão profunda, nenhum som de uma humanidade elevada, nenhum eco [...] escapa deste túmulo para chegar aos nossos ouvidos atentos. Milênios sem resultado passaram por esta humanidade e o único testemunho da sua alta antiguidade é exatamente esta completa dissolução [...]. Nem ao menos o singelo e modesto musgo que como um símbolo da melancolia cobre as ruínas das grandezas antigas romanas e germânicas se estendeu sobre os restos daquela antiguidade sul-americana [...].</p>
<p><small>Levtizion, N.; Hopkins, J. <i>Corpus of Early Arabic Sources for West African History</i>. Princeton: Markus Wiener, 2011, p. 261-271. Adaptado.</small></p>
<p>Os poucos relatos disponíveis sobre a Amazônia, produzidos por espanhóis e portugueses nos séculos XVI e XVII [...], falam de grandes assentamentos, com milhares de pessoas, localizados ao largo do Amazonas e de seus principais afluentes. [...] Praticamente em qualquer área da Amazônia onde há pesquisas, a arqueologia vem encontrando evidências de ocupações humanas no passado, mesmo em locais hoje cobertos por floresta aparentemente virgem. Atualmente sabemos que a Amazônia é habitada há pelo menos 12 mil anos, há tanto tempo quanto em outras partes das Américas, por diferentes povos, com distintas formas de organização social e política, desde bandos de caçadores-coletores até sociedades sedentárias hierarquizadas [...].</p>
<p><small>Neves, E. G. <i>Sob os tempos do Equinócio</i>: oito mil anos de História na Amazônia Central. São Paulo: Edusp/UBU, 2022, p. 183.</small></p>
<p>Os textos representam visões divergentes sobre o passado dos indígenas da Amazônia. Com base nessas informações contrastantes e nos conhecimentos sobre sociedades indígenas no contexto da América Portuguesa, assinale a alternativa que identifica corretamente as perspectivas históricas sobre os povos originários.</p>`,
    alternativas: [
      { letra: 'A', texto: `Os projetos de nação bem como os modelos de identidade que estavam vigentes durante o período imperial e boa parte do período republicano anularam as conquistas e a agência histórica dos povos originários.`, explicacao: `Correta! Von Martius, intelectual de referência do Império, via o passado indígena como um “abismo” sem realizações; essa visão marcou os projetos de nação do Império e da República, que apagaram a agência indígena. A arqueologia atual, como mostra Neves, revela sociedades antigas e complexas.` },
      { letra: 'B', texto: `Os relatos mais antigos, produzidos no início do período colonial, demonstram o desconhecimento dos portugueses e espanhóis, que atribuíram aos povos amazônicos características exageradas.` },
      { letra: 'C', texto: `A arqueologia contemporânea dialoga com a historiografia do século XIX ao corroborar a antiguidade indígena na Amazônia e ao negar a existência de sociedades complexas.` },
      { letra: 'D', texto: `Historiadores como von Martius acreditavam que romanos e germânicos poderiam ter colonizado a Amazônia na Antiguidade, fato esquecido pelos indígenas.` },
      { letra: 'E', texto: `Tanto a historiografia brasileira do século XIX quanto a arqueologia concordam em relação à grandeza do passado amazônico, mas divergem em relação à forma de pensar as estruturas políticas das civilizações originárias.` },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2026-051', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 51,
    disciplina: 'História', conteudo: 'his-2b6', subtopico: 'Partidos do Segundo Reinado', dificuldade: 'facil',
    enunciado: `<p>O Brasil possui, hoje, 29 partidos políticos reconhecidos pelo Tribunal Superior Eleitoral. A lógica partidária do país tem quase 200 anos, remontando em especial à formação do Partido Conservador (também chamado de saquaremas) e do Partido Liberal (conhecido como luzias). Sobre esses partidos do período imperial brasileiro, era comum se dizer “nada mais parecido com um conservador do que um liberal no poder”. Com base nos conhecimentos sobre o período imperial da História do Brasil, essa expressão:</p>`,
    alternativas: [
      { letra: 'A', texto: `demonstra o desprendimento ideológico dos partidos, que eram compostos das mesmas elites políticas e sociais.`, explicacao: `Correta! Liberais e conservadores vinham da mesma elite agrária e escravista; no poder, governavam de modo muito parecido, o que mostra a pouca diferença ideológica entre eles.` },
      { letra: 'B', texto: `se refere ao sistema de “parlamentarismo às avessas”, em que a divisão partidária era apenas fachada para o exercício do poder autocrático do imperador.` },
      { letra: 'C', texto: `reflete o surgimento do neoliberalismo no Brasil, que pregava políticas de austeridade econômica defendidas tipicamente por conservadores.` },
      { letra: 'D', texto: `aponta para a hegemonia dos dois maiores partidos brasileiros em detrimento das outras agremiações, apelidadas de “nanicos”.` },
      { letra: 'E', texto: `indica, já em período de Guerra Fria, que, assim como o mundo, o Brasil também se encontrava em divisão bipolar da política.` },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2026-052', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 52,
    disciplina: 'História', conteudo: 'his-3b2', subtopico: 'Eugenia na Primeira República', dificuldade: 'facil',
    enunciado: `<p>Leia o seguinte trecho, retirado do livro de ficção “O Presidente Negro”, escrito e publicado por Monteiro Lobato em 1926:</p>
<p>“Caráter racial é uma cristalização que às lentas se vai operando através dos séculos. O cruzamento perturba essa cristalização, liquefá-la, torna-a instável. A nossa solução deu mau resultado [...]. Não há mal nem bem no jogo das forças cósmicas. O ódio desabrocha tantas maravilhas quanto o amor. O amor matou no Brasil a possibilidade de uma suprema expressão biológica [...]”.</p>
<p><small>Lobato, M. <i>O Presidente Negro</i>. São Paulo: Brasiliense, 1979, p. 70-71. Adaptado.</small></p>
<p>Monteiro Lobato (1882–1948) é comumente tido como um autor central para a formação cultural brasileira do período republicano. De fato, nas primeiras décadas da República, havia uma preocupação em formar uma nova identidade brasileira, marcada por novos símbolos e novos traços, e nesse contexto havia também a preocupação com a composição racial do Brasil – assunto sobre o qual Monteiro Lobato era interessado. Com base nos conhecimentos sobre a História da República Velha, assinale a alternativa que aponta a proposta de cunho racista expressa no trecho e que por vezes circulava no Brasil nas primeiras décadas do século XX.</p>`,
    alternativas: [
      { letra: 'A', texto: `A busca pela melhoria biológica por meio de vacinação, conhecida como Higienismo.` },
      { letra: 'B', texto: `A proposta de controle sobre qualidades de pureza genética, chamada de Eugenia.`, explicacao: `Correta! O trecho condena a miscigenação (“o cruzamento perturba”) e lamenta a perda de uma “suprema expressão biológica” — ideias da eugenia, pseudociência racista que defendia controlar a reprodução para “melhorar” a raça e que circulou no Brasil nas primeiras décadas do século XX.` },
      { letra: 'C', texto: `A medida de classificação racial e fenotípica obrigatória, chamada de Frenologia.` },
      { letra: 'D', texto: `A criação de espaços urbanos de segregação compulsória, referida como Favelização.` },
      { letra: 'E', texto: `A proibição de casamentos interraciais, conhecida como Política de Embranquecimento.` },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2026-053', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 53,
    disciplina: 'História', conteudo: 'his-4a3', subtopico: 'Espaço Vital nazista', dificuldade: 'facil',
    enunciado: `<p>A ascensão de partidos de extrema direita na Europa, como o AfD (<i>Alternative für Deutschland</i>, ou “Alternativa para a Alemanha”), comumente traz consigo uma retórica de oposição à imigração. Essa postura, no contexto alemão, tem relação histórica com a ideia de <i>Lebensraum</i>, ou “Espaço Vital”, que se populariza no final do século XIX e atinge seu ápice com as doutrinas nazistas na primeira metade do século XX. Com base nessa afirmação, assinale a alternativa que corretamente relaciona a ideologia nazista com o nacionalismo contido na ideia de “Espaço Vital”.</p>`,
    alternativas: [
      { letra: 'A', texto: `O nazismo defendia um modelo de nacionalismo pan-europeu, unindo todos os grupos étnicos da Europa, como os germânicos e os eslavos.` },
      { letra: 'B', texto: `O nazismo pregava uma política externa agressiva, mas defendia a soberania individual dos costumes germânicos em seu território, como a tradição romani.` },
      { letra: 'C', texto: `O nazismo propunha uma forma de isolacionismo patriótico, em que grupos estrangeiros seriam proibidos de entrar no país e as fronteiras deveriam se manter estáticas.` },
      { letra: 'D', texto: `O nazismo idealizava um Grande Reich Alemão de orientação cristã e, por isso, arquitetou a perseguição religiosa aos judeus.` },
      { letra: 'E', texto: `O nazismo estipulava uma ideologia de expansão territorial voltada para a acomodação de uma suposta superioridade germânica.`, explicacao: `Correta! O <i>Lebensraum</i> justificava a conquista de territórios, sobretudo no Leste europeu, para abrigar a suposta “raça superior” germânica, com a submissão ou eliminação dos povos considerados inferiores (como os eslavos).` },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2026-054', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 54,
    disciplina: 'História', conteudo: ['his-3a4', 'his-3a7'], subtopico: 'Corolário Roosevelt', dificuldade: 'media',
    enunciado: `<p>Leia o excerto a seguir, retirado do discurso de posse do 47.º Presidente dos Estados Unidos, Donald Trump, realizado em 20 de janeiro de 2025:</p>
<p>O presidente McKinley tornou o nosso país muito rico através de tarifas e do talento [...] e deu a [Theodore] Roosevelt o dinheiro para muitas das grandes coisas que ele fez, incluindo o Canal do Panamá, que foi tolamente entregue ao país do Panamá [...]. Fomos muito maltratados por causa desse presente insensato que nunca deveria ter sido feito, e a promessa do Panamá para conosco foi quebrada. O objetivo do nosso acordo e o espírito do nosso tratado foram totalmente violados. [...] E, acima de tudo, a China está a operar o Canal do Panamá. E nós não o demos à China. Nós demos ao Panamá e vamos recuperá-lo.</p>
<p><small>Disponível em: https://www.whitehouse.gov/remarks/2025/01/the-inaugural-address/. Adaptado.</small></p>
<p>Em seu discurso, Donald Trump menciona os presidentes William McKinley (presidente entre 1897 e 1901) e Theodore Roosevelt (presidente entre 1901 e 1909), governantes que atuaram num contexto de Imperialismo europeu e formação de um modelo próprio de Imperialismo estadunidense. Sobre a política externa dos Estados Unidos na virada do século XIX para o XX, é correto afirmar que uma de suas características era:</p>`,
    alternativas: [
      { letra: 'A', texto: `a Doutrina Monroe, que estipulava que a América Latina deveria ser supervisionada e administrada, em conjunto, pelos Estados Unidos e pelos países da Europa Ocidental.` },
      { letra: 'B', texto: `o argumento do Destino Manifesto, que defendia o financiamento de infraestrutura e o consequente endividamento dos países mais pobres da América Latina.` },
      { letra: 'C', texto: `a Diplomacia do Dólar, que postulava o constante aumento das tarifas de exportação de países da América Latina e da Ásia para os Estados Unidos como forma de protecionismo econômico.` },
      { letra: 'D', texto: `o Corolário Roosevelt, que argumentava pelo direito de intervenção dos Estados Unidos em países da América Latina que estivessem em crise política ou econômica.`, explicacao: `Correta! O Corolário Roosevelt (1904), complemento à Doutrina Monroe ligado à política do <i>Big Stick</i>, afirmava o direito dos EUA de intervir em países latino-americanos instáveis — base de ações como a separação do Panamá e o controle do canal.` },
      { letra: 'E', texto: `a Política da Boa Vizinhança, que previa a concessão de presentes, benesses políticas e afrouxamento tarifário como base para um movimento panamericano.` },
    ],
    gabarito: 'D',
  },
  // ---------------------------------------------------------------- LÍNGUA PORTUGUESA
  {
    id: 'ufpr-2026-055', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 55,
    disciplina: 'Português', conteudo: 'por-2a5', subtopico: 'Interpretação de texto', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2026_POR_1,
    enunciado: `<p>Sobre a perspectiva apresentada pelo quilombola Antonio Bispo dos Santos, é correto afirmar:</p>`,
    alternativas: [
      { letra: 'A', texto: `Os humanos têm ascendência sobre animais e vegetais na relação de compartilhamento.` },
      { letra: 'B', texto: `A troca e a partilha são práticas apresentadas pelo autor do texto em uma relação de convergência entre si.` },
      { letra: 'C', texto: `Há duas visões de mundo, as quais implicam reciprocidade, porém, regidas por princípios distintos.`, explicacao: `Correta! O autor contrapõe a troca (objeto por objeto, equivalência) ao compartilhamento (ação por ação, afeto por afeto): ambos envolvem reciprocidade, mas com lógicas diferentes — por isso ele insiste “não é troca, é compartilhamento”.` },
      { letra: 'D', texto: `Os ciclos de compartilhamento caracterizam-se pela descontinuidade.` },
      { letra: 'E', texto: `A prática de compartilhamento é análoga às práticas de ordem econômica, visto que é positiva e rentável.` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-056', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 56,
    disciplina: 'Português', conteudo: 'por-4b6', subtopico: 'Sufixo -ante', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2026_POR_1,
    enunciado: `<p>Assinale a alternativa em que em todas as palavras o sufixo derivacional <i>–ante</i> tem o mesmo sentido que há em <b><i>compartilhante</i></b>.</p>`,
    alternativas: [
      { letra: 'A', texto: `acompanhante – celebrante – pensante – cantante`, explicacao: `Correta! Em <i>compartilhante</i>, “-ante” forma, a partir do verbo, o nome de quem pratica a ação (“aquele que compartilha”). O mesmo ocorre em acompanhante (que acompanha), celebrante (que celebra), pensante (que pensa) e cantante (que canta). Nas outras séries há palavras sem esse valor (distante, gigante, bastante, obstante, refrigerante…).` },
      { letra: 'B', texto: `distante – flagrante – pulsante – importante` },
      { letra: 'C', texto: `constante – dissonante – feirante – estonteante` },
      { letra: 'D', texto: `gigante – berrante – falante – obstante` },
      { letra: 'E', texto: `bastante – refrigerante – montante – palestrante` },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2026-057', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 57,
    disciplina: 'Português', conteudo: 'por-2a5', subtopico: 'Interpretação de texto', dificuldade: 'dificil',
    textoApoio: TEXTO_UFPR_2026_POR_1,
    enunciado: `<p>A respeito dos modos de vida próprios dos quilombolas, considere as seguintes afirmativas:</p>
<p>1. Os elementos dos compartilhamentos diversos podem ter valor subjetivo.<br>
2. A condição do compartilhamento é a reciprocidade simultânea.<br>
3. A confluência apresenta-se em relação de antagonismo com a troca.<br>
4. As práticas e vivências implicam alternância e ações coletivas.</p>
<p>Assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: `Somente a afirmativa 1 é verdadeira.` },
      { letra: 'B', texto: `Somente as afirmativas 2 e 3 são verdadeiras.` },
      { letra: 'C', texto: `Somente as afirmativas 2 e 4 são verdadeiras.` },
      { letra: 'D', texto: `Somente as afirmativas 1, 3 e 4 são verdadeiras.`, explicacao: `Correta! 1: compartilham-se gestos e afetos (valor subjetivo). 3: confluência e compartilhamento se opõem à troca. 4: o ciclo pinhão–juriti–humanos mostra alternância e ação coletiva. A 2 é falsa: a reciprocidade não é simultânea (os umbuzeiros deram sem nada receber, e o retorno vem depois).` },
      { letra: 'E', texto: `As afirmativas 1, 2, 3 e 4 são verdadeiras.` },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2026-058', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 58,
    disciplina: 'Português', conteudo: ['por-2b6', 'por-1a5'], subtopico: 'Paráfrase e relações lógicas', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2026_POR_1,
    enunciado: `<p>Considere o excerto:</p>
<p>“Na Caatinga, nos recepcionaram. Eles compartilharam seus frutos, suas folhas e suas raízes quando chegamos, e não trouxemos nada para os umbuzeiros.”</p>
<p>Assinale a alternativa cuja reformulação parafrástica altera o sentido básico da proposição.</p>`,
    alternativas: [
      { letra: 'A', texto: `Ao nos recepcionarem, quando chegamos na Caatinga, os umbuzeiros compartilharam seus frutos, suas folhas e suas raízes, ainda que não tenhamos trazido nada para eles.` },
      { letra: 'B', texto: `Chegando na Caatinga, os umbuzeiros nos recepcionaram, compartilhando seus frutos, suas folhas e suas raízes, mesmo que não tenhamos trazido nada para eles.` },
      { letra: 'C', texto: `Embora não tenhamos trazido nada para os umbuzeiros quando chegamos na Caatinga, mesmo assim eles nos recepcionaram, compartilhando seus frutos, suas folhas e suas raízes.` },
      { letra: 'D', texto: `Quando chegamos na Caatinga, não trouxemos nada para os umbuzeiros, ainda assim, fomos recepcionados por eles, os quais compartilharam seus frutos, suas folhas e suas raízes conosco.` },
      { letra: 'E', texto: `Por termos chegado na Caatinga, sem trazer nada para eles, os umbuzeiros nos recepcionaram, compartilhando suas folhas, seus frutos e suas raízes.`, explicacao: `Correta! No original, o fato de nada ter sido trazido tem valor concessivo (eles compartilharam mesmo assim). Em E, “Por termos chegado…” cria uma relação de causa — a recepção passa a ser consequência da chegada sem nada —, o que altera o sentido.` },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2026-059', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 59,
    disciplina: 'Português', conteudo: ['por-2b6', 'por-1a5'], subtopico: 'Relações sintático-semânticas', dificuldade: 'dificil',
    textoApoio: TEXTO_UFPR_2026_POR_2,
    enunciado: `<p>A respeito das expressões em destaque, assinale a alternativa correta quanto às relações sintático-semânticas do texto.</p>`,
    alternativas: [
      { letra: 'A', texto: `A conjunção <i>mas</i> pode ser substituída por <i>embora</i> mantendo sentido original do período.` },
      { letra: 'B', texto: `A expressão <i>Na verdade</i> revela o ponto de vista do autor sobre a capacidade cognitiva do ser humano.`, explicacao: `Correta! “Na verdade” é um marcador de opinião: introduz a avaliação do autor de que, desde o troglodita, o ser humano já compreendia que poderia dominar a natureza. As demais trocam o sentido (mas ≠ embora; obscuramente ≠ equivocadamente) ou interpretam mal o texto.` },
      { letra: 'C', texto: `A sequência <i>já havia compreendido obscuramente</i> pode ser parafraseada por <i>já havia compreendido equivocadamente</i>.` },
      { letra: 'D', texto: `O autor emprega a conjunção <i>embora</i> para informar que as questões estatísticas são irrelevantes nesse caso.` },
      { letra: 'E', texto: `A palavra <i>troglodita</i> indica que o autor minimiza a conquista da produção artificial do fogo, uma realização desses homens das cavernas.` },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2026-060', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 60,
    disciplina: 'Português', conteudo: 'por-2a5', subtopico: 'Ideia central', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_POR_2,
    enunciado: `<p>Assinale a alternativa que apresenta a ideia central do texto.</p>`,
    alternativas: [
      { letra: 'A', texto: `A capacidade e o desenvolvimento tecnológico humanos, que iniciaram na Pré-história, trouxeram mais inconvenientes do que benefícios para a civilização.` },
      { letra: 'B', texto: `O domínio da natureza pelo homem será possível quando ele conseguir encontrar o elixir da longa vida e a fonte da juventude.` },
      { letra: 'C', texto: `A questão crucial em relação ao aumento da expectativa de vida é o pagamento de aposentadorias aos idosos pelos respectivos governos.` },
      { letra: 'D', texto: `O desenvolvimento tecnológico trouxe aumento da longevidade para o ser humano, mas não necessariamente melhores condições de vida.`, explicacao: `Correta! Eco afirma que o aumento do tempo médio de vida é o maior avanço da humanidade, mas que ainda não sabemos conciliar essa longevidade com bem-estar coletivo, futuro dos jovens e superpopulação.` },
      { letra: 'E', texto: `Os problemas sociais ligados ao aumento da expectativa de vida suplantam as benesses proporcionadas pelo envelhecimento.` },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2026-061', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 61,
    disciplina: 'Português', conteudo: ['por-4b6', 'por-2a5'], subtopico: 'Criação de nomes humorísticos', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_POR_3,
    enunciado: `<p>De acordo com o texto, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: `Tanto em I quanto em II, os processos de criação das designações nominais de ambos os países empregam os mesmos recursos linguísticos.` },
      { letra: 'B', texto: `Em I, as nomeações são baseadas em nomes de estados brasileiros e adaptadas para uma versão portuguesa.` },
      { letra: 'C', texto: `Em II, as nomeações são baseadas em nomes de estados norte-americanos e adaptadas para referências brasileiras.`, explicacao: `Correta! Os nomes portugueses partem de estados dos EUA (Texas, Geórgia, Illinois, Havaí, Arizona, Mississippi, Kentucky) misturados a referências brasileiras (Jorge Amado, Taffarel, capivara, Sítio do Picapau Amarelo, funk), sugerindo o Brasil como “quintal” norte-americano.` },
      { letra: 'D', texto: `Em ambos os conjuntos, há denominações baseadas na forma geográfica do país alvo da designação humorística.` },
      { letra: 'E', texto: `A principal estratégia linguística empregada para a criação das nomeações recorre a conhecimentos sobre a história dos países envolvidos.` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-062', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 62,
    disciplina: 'Português', conteudo: ['por-4b6', 'por-1a5'], subtopico: 'Aglutinação e analogia', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2026_POR_3,
    enunciado: `<p>Considerando os nomes <b><i>Faixa de Gajo, Brasillinois e Georgia Amado</i></b>, atribuídos a Portugal e Brasil, presentes no texto, assinale a alternativa que apresenta, adequada e respectivamente, o recurso linguístico empregado em cada um, para atingir o efeito humorístico pretendido.</p>`,
    alternativas: [
      { letra: 'A', texto: `Denominação eufêmica; composição; personificação.` },
      { letra: 'B', texto: `Nominalização metonímica; sinestesia; comparação nominal.` },
      { letra: 'C', texto: `Analogia; aglutinação; analogia.`, explicacao: `Correta! “Faixa de Gajo” imita, por analogia, “Faixa de Gaza” (com “gajo”, termo português); “Brasillinois” funde Brasil + Illinois com perda de fonemas (aglutinação); “Geórgia Amado” imita “Jorge Amado” por semelhança sonora (analogia).` },
      { letra: 'D', texto: `Ironia; ironia; antítese.` },
      { letra: 'E', texto: `Perífrase morfológica; onomatopeia; metáfora.` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-063', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 63,
    disciplina: 'Português', conteudo: 'por-2a5', subtopico: 'Interpretação de texto', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_POR_4,
    enunciado: `<p>Para o autor, a relação entre a origem do Palácio de São Cristóvão e a formação do Brasil está:</p>`,
    alternativas: [
      { letra: 'A', texto: `na proximidade geográfica entre o Palácio e outros locais históricos da cidade do Rio de Janeiro, o que demonstra a centralização do poder na região Sudeste.` },
      { letra: 'B', texto: `no fato de a Família Real ter aceitado uma doação e dado início a uma tradição de troca de favores entre governantes e pessoas com grande poderio econômico.` },
      { letra: 'C', texto: `no ato de tornar residência oficial um lugar construído com dinheiro do tráfico negreiro, revelando como a escravização era uma prática naturalizada na sociedade.`, explicacao: `Correta! O autor diz que o “simbolismo desse gesto” — morar numa casa paga com dinheiro do tráfico, sem constrangimento — ajuda a explicar a longa duração da escravidão e a própria formação do Brasil.` },
      { letra: 'D', texto: `na arquitetura do palácio, que misturava elementos portugueses e africanos, revelando-se um símbolo da miscigenação brasileira.` },
      { letra: 'E', texto: `na reforma estrutural realizada por Dom João VI, que transformou completamente o estilo original do palácio, ilustrando a falta de reconhecimento da cultura nacional.` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-064', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 64,
    disciplina: 'Português', conteudo: ['por-1a5', 'por-2a3'], subtopico: 'Sinonímia e referência', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2026_POR_4,
    enunciado: `<p>Sobre os elementos linguísticos presentes no texto, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: `A forma <i>num</i>, como é utilizada no texto, é uma contração da preposição <i>em</i> e do artigo indefinido <i>um</i>, bastante comum na fala.` },
      { letra: 'B', texto: `No texto, o autor interpela seu interlocutor por meio de interrogações, recurso circunscrito a modalidades orais da língua.` },
      { letra: 'C', texto: `As expressões destacadas <i>se dar ao luxo de doar ela</i> e <i>abrir mão dela</i> são utilizadas como sinônimas.`, explicacao: `Correta! Na linha 8, “De abrir mão dela?” retoma e reformula “se dar ao luxo de doar ela”: ambas significam desfazer-se da mansão. Já “num” no texto é a forma oral de “não”, “essa doação” retoma a doação da casa e “assim” tem valor concessivo/explicativo de fala.` },
      { letra: 'D', texto: `A expressão destacada <i>essa doação</i> se refere ao antecedente <i>gente acorrentada</i>.` },
      { letra: 'E', texto: `A expressão destacada no texto <i>assim</i> poderia ser substituída por <i>dessa forma</i> sem alteração de significado e estrutura.` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-065', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 65,
    disciplina: 'Português', conteudo: ['por-1a5', 'por-2a5'], subtopico: 'Relações de sentido', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2026_POR_4,
    enunciado: `<p>Sobre as relações de significado estabelecidas no texto, é correto afirmar:</p>`,
    alternativas: [
      { letra: 'A', texto: `A expressão <i>Bonzinho ele...</i> expressa a opinião do autor, que demonstra admiração pelo gesto altruísta de Elias Antônio Lopes.` },
      { letra: 'B', texto: `O emprego recorrente da expressão <i>num era</i> (“num era café, num era açúcar...”) cria uma expectativa sobre qual seria o “bem mais valioso” da época.`, explicacao: `Correta! A enumeração do que o bem “num era” (café, açúcar, ouro, diamante) adia a revelação e cria suspense, até a resposta impactante: “O Elias era traficante… de gente”.` },
      { letra: 'C', texto: `A afirmação presente no trecho final do texto, “o Brasil é o Brasil”, é vazia de significado em relação ao que vinha sendo dito, uma vez que afirma o óbvio.` },
      { letra: 'D', texto: `A frase “Daí quando a Família Real portuguesa veio pro Brasil” estabelece uma relação de causalidade entre a construção do palácio e a vinda da Família Real.` },
      { letra: 'E', texto: `O autor compara o Palácio de São Cristóvão com o Palácio da Alvorada devido à origem da sua destinação para a utilização histórica.` },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2026-066', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 66,
    disciplina: 'Português', conteudo: 'por-1a3', subtopico: 'Oralidade e escrita', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2026_POR_4,
    enunciado: `<p>Sobre a linguagem utilizada no texto, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: `O trecho “O Elias Antônio Lopes mandava um navio lá na costa do continente africano” apresenta uma regência verbal típica dos usos escritos cultos do português brasileiro.` },
      { letra: 'B', texto: `Por meio da utilização de palavras e expressões como <i>bonzinho</i>, <i>juntou tanto dinheiro</i>, <i>todo mundo</i>, é possível perceber o direcionamento do podcast para um público menos culto.` },
      { letra: 'C', texto: `As reticências são um sinal estilístico da fala, e as vírgulas são utilizadas para marcar as pausas na respiração.` },
      { letra: 'D', texto: `As palavras <i>grotesca</i>, <i>mansão</i> e <i>traficante</i> são exemplos de gírias, uma marca comum da oralidade, que são evitadas em registros escritos.` },
      { letra: 'E', texto: `As expressões <i>num</i>, <i>daí</i> e <i>comé que</i> são exemplos de usos do registro oral que seriam consideradas inadequadas em um texto escrito jornalístico, a menos que sinalizassem a fala de alguém.`, explicacao: `Correta! “Num” (não), “daí” (então) e “comé que” (como é que) são marcas da fala informal; num texto jornalístico escrito, só caberiam como citação da fala de alguém. As outras alternativas fazem julgamentos equivocados (preconceito linguístico, gírias inexistentes, regência “mandar … lá na” é coloquial).` },
    ],
    gabarito: 'E',
  },
  // ---------------------------------------------------------------- LITERATURA
  {
    id: 'ufpr-2026-070', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 70,
    disciplina: 'Literatura', subtopico: 'Interpretação de Texto Literário', dificuldade: 'media',
    enunciado: `<p>Leia, a seguir, o poema “Não sei fazer poemas sobre gatos”, de Ana Martins Marques.</p>
<p style="text-align:right"><i>Não sei gatografia.</i><br>Ana Cristina Cesar</p>
<p>Não sei fazer poemas sobre gatos<br>
se tento logo fogem<br>
furtivas<br>
as palavras<br>
soltam-se ou<br>
saltam<br>
não capturam do gato<br>
nem a cauda<br>
sobre a mesa<br>
quieta e quente<br>
a folha recém-impressa<br>
página branca com manchas negras:<br>
eis o meu poema sobre gatos</p>
<p><small>Marques, A. M. <i>O Livro das Semelhanças.</i> São Paulo: Companhia das Letras, 2015.</small></p>
<p>Com base no poema e n’<b><i>O livro das semelhanças,</i></b> de Ana Martins Marques, no qual o poema está incluído, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: `A epígrafe de Ana Cristina Cesar, poeta da segunda metade do século XX, é a única referência a outros autores em todo o livro.` },
      { letra: 'B', texto: `O terceiro verso do poema é composto de um único adjetivo, destacando a característica atribuída aos gatos.` },
      { letra: 'C', texto: `O poema destoa dos procedimentos poéticos predominantes no livro, caracterizados pela regularidade na rima e na métrica.` },
      { letra: 'D', texto: `O poema discorre sobre o fazer poético, sobre a dificuldade de as palavras se deixarem apreender pelo poeta.`, explicacao: `Correta! É um poema metalinguístico: as palavras “fogem”, “soltam-se”, “saltam” como gatos e não se deixam capturar; no fim, a própria folha impressa (branca com manchas negras, como um gato) se torna o poema possível. O adjetivo “furtivas” (verso 3) caracteriza as palavras, não os gatos.` },
      { letra: 'E', texto: `A presença de termos e expressões comparativas explícitas nos versos do poema aproxima os gatos e as palavras.` },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2026-071', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 71,
    disciplina: 'Literatura', subtopico: 'Escolas Literárias', dificuldade: 'media',
    enunciado: `<p>Um dos tópicos mais frequentes na poesia do Arcadismo é aquele conhecido como <b><i>carpe diem</i></b>, expressão latina que significa literalmente “colhe o dia”, e que pode ser entendida mais diretamente como “desfruta o presente”. Assinale a alternativa cujo conteúdo, explorado em <b><i>Liras de Marília de Dirceu</i></b>, de Tomás Antônio Gonzaga, pertence a esse tema.</p>`,
    alternativas: [
      { letra: 'A', texto: `“Nem canto letra, que não seja minha” (Primeira parte, Lira I)` },
      { letra: 'B', texto: `“As glórias, que vêm tarde, já vêm frias” (Primeira parte, Lira XIV)`, explicacao: `Correta! O verso afirma que os prazeres adiados perdem o valor (“vêm frias”), por isso é preciso aproveitá-los agora — a essência do <i>carpe diem</i> árcade. As demais tratam de autoria, desprezo à riqueza, idealização da amada e outros temas.` },
      { letra: 'C', texto: `“Eu não beijo vis tesouros” (Primeira Parte, Lira XVI)` },
      { letra: 'D', texto: `“Eu vejo aquela Deusa” (Segunda Parte, Lira XXXVIII)` },
      { letra: 'E', texto: `“Tu não verás, Marília, cem cativos” (Terceira parte, Lira III)` },
    ],
    gabarito: 'B',
  },
  // ---------------------------------------------------------------- INGLÊS
  {
    id: 'ufpr-2026-ing-083', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 83,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'facil',
    imagem: 'imagens/estudo/ufpr-2026-ing-083.webp',
    legendaAcima: '<b>AI written, AI read</b>',
    legenda: '<small>Available in: https://marketoonist.com/2023/03/ai-written-ai-read.html.</small>',
    textoApoio: `<p>The following comic strip, “AI written, AI read”, is reference to question 83.</p>`,
    enunciado: `<p>According to the comic strip, it is correct to say that:</p>`,
    alternativas: [
      { letra: 'A', texto: `A.I. writes the email without any guidance items, ideas or suggested topic.` },
      { letra: 'B', texto: `both people working on the computers declare they had the intention to write and read the emails.` },
      { letra: 'C', texto: `A.I. summarizes the long email into a list of a few items.` },
      { letra: 'D', texto: `A.I. guarantees workers are well informed, engaged with the emails and responsible for what they write and read.` },
      { letra: 'E', texto: `the people working on the computers can simulate they either wrote or read the emails.`, explicacao: `Correta! Um personagem diz que a IA transforma um tópico num e-mail longo que ele pode fingir ter escrito (“pretend I wrote”); o outro, que a IA reduz o e-mail a um tópico que ele pode fingir ter lido (“pretend I read”). A IA resume num único tópico, não numa lista (C).` },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2026-ing-084', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 84,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_ING_1,
    enunciado: `<p>Based on the text, it is correct to say:</p>`,
    alternativas: [
      { letra: 'A', texto: `The nightlife in global cities is as strong as it has ever been with the Gen Z public.` },
      { letra: 'B', texto: `The research of the Financial Times has revealed that the number of nightclubs operating after 3 a.m. in global cities has reduced from 15 to 12.` },
      { letra: 'C', texto: `Younger generations prefer going to day clubs so they can get drunk, and still go home early and get from 8 to 9 hours of sleep.` },
      { letra: 'D', texto: `The nightclub industry must change their club culture and adapt to the new generation’s life style to avoid becoming smaller and smaller.`, explicacao: `Correta! O texto conclui: “the industry needs to adapt, or else it will continue to shrink” (a indústria precisa se adaptar ou continuará encolhendo). B está errada: o número de clubes caiu em 12 de 15 cidades, não “de 15 para 12”.` },
      { letra: 'E', texto: `Older generations were into being sober and dropped less money on drinks in nightclubs than the Gen Z.` },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2026-ing-085', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 85,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_ING_1,
    enunciado: `<p>Consider the following sentences:</p>
<p><b>1. Some of the most famous party spots around the world are reducing the frequency of all-night parties.<br>
2. The Financial Times analyzed 15 global cities for the article.<br>
3. The nightclubs continue thriving as much as the day clubs.<br>
4. Young people from Generation Z are very interested in buying high priced drinks in nightclubs.</b></p>
<p>Mark the correct alternative.</p>`,
    alternativas: [
      { letra: 'A', texto: `Only affirmative 3 is correct.` },
      { letra: 'B', texto: `Only affirmatives 1 and 2 are correct.`, explicacao: `Correta! 1: “some of the world's biggest party hotspots are hosting fewer all-night parties”. 2: o FT analisou 15 cidades globais. 3 é falsa (as boates enfrentam concorrência dos <i>day clubs</i> e estão em declínio) e 4 também (a Gen Z não quer gastar muito com bebidas).` },
      { letra: 'C', texto: `Only affirmatives 2 and 4 are correct.` },
      { letra: 'D', texto: `Only affirmatives 1, 3 and 4 are correct.` },
      { letra: 'E', texto: `Affirmatives 1, 2, 3 and 4 are correct.` },
    ],
    gabarito: 'B',
  },
  {
    id: 'ufpr-2026-ing-086', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 86,
    disciplina: 'Inglês', subtopico: 'Vocabulário', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_ING_1,
    enunciado: `<p>Mark the alternative that correctly defines an expression used in the text.</p>`,
    alternativas: [
      { letra: 'A', texto: `All-night parties: parties that last 24 hours non-stop.` },
      { letra: 'B', texto: `Higher costs: less expensive to maintain when compared to before.` },
      { letra: 'C', texto: `The “most sober”: the one who drinks the most when compared to all others.` },
      { letra: 'D', texto: `The real culprit: the real cause of the situation or problem.`, explicacao: `Correta! “Culprit” é o culpado, o responsável; “the real culprit” é a verdadeira causa do problema (o desinteresse dos jovens pela cultura das boates). As outras definições invertem os sentidos (all-night = a noite toda; higher = mais caros; most sober = o que menos bebe; die out = desaparecer).` },
      { letra: 'E', texto: `Die out: expand or grow.` },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2026-ing-087', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 87,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_ING_2,
    enunciado: `<p>According to the text, it is correct to say that:</p>`,
    alternativas: [
      { letra: 'A', texto: `spending too much time consuming irrelevant online content may lead to brain rot.`, explicacao: `Correta! O texto define <i>brain rot</i> como a deterioração mental “due to overconsumption of trivial or unchallenging content, particularly online content”. Não é condição médica (B), não melhora a memória (C) e não se restringe à Gen Z e Alpha — o termo só é popular entre eles (E).` },
      { letra: 'B', texto: `the term “brain rot” has been created to define this modern medical condition.` },
      { letra: 'C', texto: `excessive screen time has been linked to improved memory and better attention span.` },
      { letra: 'D', texto: `mental fogginess is when people focus easily and have a clear view of situations.` },
      { letra: 'E', texto: `only people from Gen Z and Gen Alpha suffer from brain rot.` },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2026-ing-088', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 88,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_ING_2,
    enunciado: `<p>Mark the correct alternative based on the text.</p>`,
    alternativas: [
      { letra: 'A', texto: `Doomscrolling is consuming higher-thinking and thought-provoking content online.` },
      { letra: 'B', texto: `People’s moods boost when they consume unchallenging contents online.` },
      { letra: 'C', texto: `A slang term is considered a traditional, well-established standard word.` },
      { letra: 'D', texto: `Engaging in deeper thought or analysis and critical thinking can develop brain rot.` },
      { letra: 'E', texto: `Low-effort and unchallenging online contents consumption can develop brain rot.`, explicacao: `Correta! O texto associa o <i>brain rot</i> ao declínio cognitivo “caused by consuming low-effort content” e à “overconsumption of unchallenging content”. O <i>doomscrolling</i> é consumo passivo, sem pensamento profundo (A e D invertem isso).` },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2026-ing-089', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 89,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_ING_3,
    enunciado: `<p>Based on the information presented in the text, clutter may:</p>`,
    alternativas: [
      { letra: 'A', texto: `make people feel a variety of emotions, like stress, anxiety, annoyance and fear.`, explicacao: `Correta! O texto diz que a bagunça é um incômodo (“annoyance”) para uns, causa “emotional turmoil” e estresse em outros e pode estar ligada a medo de perda (“fear of loss”). O <i>hoarding</i> é tratável (B errada), e organizar — não a bagunça — traz os benefícios citados em C e E.` },
      { letra: 'B', texto: `lead to mental disorders that have no cure.` },
      { letra: 'C', texto: `transform homes into attractive environments.` },
      { letra: 'D', texto: `lower stress levels because people have all their things around them.` },
      { letra: 'E', texto: `help people meet their deadlines and do the things they enjoy.` },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2026-ing-090', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 90,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2026_ING_3,
    enunciado: `<p>Analyze the following sentences:</p>
<p>1. Hoarding is a mental disorder that keeps people from eliminating clutter.<br>
2. Hemingway said all people want to be in messy places.<br>
3. Organizing the mess can help you save money and time.<br>
4. Loosing objects and information around the house is one of the benefits of cleaning up.</p>
<p>Mark the correct alternative, based on the text.</p>`,
    alternativas: [
      { letra: 'A', texto: `Only sentence 1 is correct.` },
      { letra: 'B', texto: `Only sentences 1 and 3 are correct.`, explicacao: `Correta! 1: o <i>hoarding</i> é um transtorno em que a pessoa não consegue se desfazer nem de um pedaço de papel. 3: “Save time…” e “Save money…” estão entre os benefícios. 2 é falsa (Hemingway fala em desejar “a clean, well-lighted place”) e 4 também (o benefício é reduzir o estresse com objetos perdidos).` },
      { letra: 'C', texto: `Only sentences 2 and 4 are correct.` },
      { letra: 'D', texto: `Only sentences 2, 3 and 4 are correct.` },
      { letra: 'E', texto: `Sentences 1, 2, 3 and 4 are correct.` },
    ],
    gabarito: 'B',
  },
  // ---------------------------------------------------------------- ESPANHOL
  {
    id: 'ufpr-2026-esp-083', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 83,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2026_ESP_1,
    enunciado: `<p>A partir de la lectura y análisis del texto, es posible afirmar que la intención comunicativa del autor es:</p>`,
    alternativas: [
      { letra: 'A', texto: `criticar el crecimiento de la exclusión tecnológica generada por el desarrollo de la IA.` },
      { letra: 'B', texto: `instruir los usuarios de IA sobre los nuevos recursos tecnológicos ya disponibles en varios campos de actuación humana.` },
      { letra: 'C', texto: `discutir la implementación de la IA en distintos sectores de la sociedad convenciendo sobre la necesidad de regulación.`, explicacao: `Correta! O texto de opinião apresenta usos da IA na indústria, na medicina e na comunicação, aponta riscos (desinformação, vazio jurídico) e defende que a regulação é o eixo central do debate.` },
      { letra: 'D', texto: `promocionar el freno de la implementación de la IA demostrando a la población los usos distorsionados de las tecnologías disruptivas.` },
      { letra: 'E', texto: `exponer distintas experiencias de los usuarios de IA para instruir nuevos influencers digitales.` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-esp-084', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 84,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_ESP_1,
    enunciado: `<p>De acuerdo con el texto, un desafío en la creación de marcos legales para regular la IA en el mundo está relacionado:</p>`,
    alternativas: [
      { letra: 'A', texto: `a los regímenes políticos, una vez que existen fragilidades democráticas.` },
      { letra: 'B', texto: `a los sistemas de distribución, pues ellos son articulados globalmente.` },
      { letra: 'C', texto: `a los procesos industriales, ya que la automatización disminuye el riesgo de errores humanos.` },
      { letra: 'D', texto: `a la gestión, puesto que los algoritmos de IA no reconocen las fronteras nacionales.`, explicacao: `Correta! O texto diz que a divergência normativa entre regiões “crea brechas difíciles de gestionar, especialmente en un entorno digital transnacional donde los algoritmos no reconocen fronteras”.` },
      { letra: 'E', texto: `a la eficiencia, una vez que los algoritmos avanzan el aprendizaje automático.` },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2026-esp-085', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 85,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2026_ESP_1,
    enunciado: `<p>Lea las proposiciones a continuación en relación a las ideas presentadas en el texto:</p>
<p>1. El título del texto apunta los distintos impactos existentes en relación a la implementación de la IA en la sociedad.<br>
2. Hay una preocupación con la dificultad de identificar contenidos falsos que son producidos por esa nueva tecnología.<br>
3. La falta de reglamentación sobre el uso de la IA contribuye a la creación de contenidos adulterados y la aparición de influencers sintéticos.<br>
4. Los sistemas democráticos son potencializados por el uso de la IA en la distribución rápida de contenido global.</p>
<p>Señala la alternativa correcta.</p>`,
    alternativas: [
      { letra: 'A', texto: `Solo la afirmativa 4 es verdadera.` },
      { letra: 'B', texto: `Solo las afirmativas 1 y 3 son verdaderas.` },
      { letra: 'C', texto: `Solo las afirmativas 2 y 4 son verdaderas.` },
      { letra: 'D', texto: `Solo las afirmativas 1, 2 y 3 son verdaderas.`, explicacao: `Correta! 1: o título opõe “promesa tecnológica” e “amenaza sistémica”. 2: a desinformação “desafía incluso a expertos en verificación”. 3: o texto liga os conteúdos adulterados e os influencers sintéticos ao debate sobre a falta de regulação. A 4 é falsa: a IA está “erosionando la confianza en los procesos democráticos”.` },
      { letra: 'E', texto: `Las afirmativas 1, 2, 3 y 4 son verdaderas.` },
    ],
    gabarito: 'D',
  },
  {
    id: 'ufpr-2026-esp-086', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 86,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'dificil',
    textoApoio: TEXTO_UFPR_2026_ESP_2,
    enunciado: `<p>Según el texto, el marco interpretativo que mejor describe la relación que los seres humanos están estableciendo con la tierra está enmarcado por:</p>`,
    alternativas: [
      { letra: 'A', texto: `una defensa de que los derechos jurídicos son establecidos a causa de la superioridad de lo humano sobre los demás seres del planeta.` },
      { letra: 'B', texto: `una oposición entre la visión ecocéntrica y la biocéntrica en la percepción del valor atribuido a seres vivos y inanimados.` },
      { letra: 'C', texto: `una reestructuración del rol de derechos que han atribuido a los seres humanos la responsabilidad por la crisis ecológica actual.` },
      { letra: 'D', texto: `una discusión filosófica, política y jurídica sobre los constructos morales que sostienen los sistemas de propiedad individual.` },
      { letra: 'E', texto: `un análisis crítico de los dispositivos jurídicos del modelo antropocéntrico que se mostró predatorio, consumista e individualista.`, explicacao: `Correta! O texto critica o direito que tratava o não humano como simples bem apropriável e que legitimou “actitudes depredadoras” amparadas num modelo “antropocéntrico, consumista e individualista”, e discute alternativas (biocentrismo e ecocentrismo).` },
    ],
    gabarito: 'E',
  },
  {
    id: 'ufpr-2026-esp-087', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 87,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'media',
    textoApoio: TEXTO_UFPR_2026_ESP_2,
    enunciado: `<p>El carácter argumentativo del texto se materializa, textualmente, en la defensa de la tesis de que:</p>`,
    alternativas: [
      { letra: 'A', texto: `el derecho jurídico interfiere en la forma como los seres humanos se relacionan con el espacio que habitan.`, explicacao: `Correta! A tese aparece logo no início e no título: “El derecho juega un papel activo en la formación de conciencias […] no solo regula subjetividades, también las construye” — ou seja, o direito molda a relação humana com a terra.` },
      { letra: 'B', texto: `la crisis ambiental es resultado de la dificultad en distinguir las teorías biocéntricas de las ecocéntricas.` },
      { letra: 'C', texto: `los seres humanos poseen un valor intrínseco ya que son responsables por crear nuevas teorías.` },
      { letra: 'D', texto: `los biocentristas poseen un carácter más individualista, negando las relaciones sistémicas existentes.` },
      { letra: 'E', texto: `las teorías que describen la relación del ser humano con la naturaleza son creadas juridicamente.` },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2026-esp-088', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 88,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_ESP_3,
    enunciado: `<p>Tras la lectura del poema Instantes, es correcto afirmar que el yo poético:</p>`,
    alternativas: [
      { letra: 'A', texto: `hace una reflexión en tono confesional de sus arrepentimientos.`, explicacao: `Correta! O eu lírico, aos 85 anos e perto da morte, confessa o que faria diferente se pudesse viver de novo (“Si pudiera vivir nuevamente mi vida…”): cometer mais erros, correr mais riscos, viajar mais leve — um balanço de arrependimentos.` },
      { letra: 'B', texto: `critica las personas que no tienen tiempo para disfrutar de la naturaleza.` },
      { letra: 'C', texto: `alaba las memorias de infancia y juventud que han construido su identidad.` },
      { letra: 'D', texto: `reclama de las dificultades que han llegado junto a la vejez.` },
      { letra: 'E', texto: `considera necesario mantener la seguridad para recomenzar la vida.` },
    ],
    gabarito: 'A',
  },
  {
    id: 'ufpr-2026-esp-089', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 89,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'facil',
    textoApoio: TEXTO_UFPR_2026_ESP_3,
    enunciado: `<p>El tema del texto titulado “Polémica por el poema de Borges que nunca existió” es:</p>`,
    alternativas: [
      { letra: 'A', texto: `la dificultad de la viuda del escritor argentino en aceptar la percepción de su marido sobre la vida.` },
      { letra: 'B', texto: `una descripción sobre el proceso de composición de una obra poética de Borges.` },
      { letra: 'C', texto: `un informe sobre un proceso de no reconocimiento de autoría literaria.`, explicacao: `Correta! A notícia relata que o poema “Instantes” foi atribuído por engano a Borges, que não o escreveu (é de Nadine Stair), e que o livro será reeditado para corrigir a autoria.` },
      { letra: 'D', texto: `la demostración de cómo se articulan las editoriales en casos de falsedad ideológica.` },
      { letra: 'E', texto: `una ejemplificación del uso de seudónimos en la red literaria mexicana.` },
    ],
    gabarito: 'C',
  },
  {
    id: 'ufpr-2026-esp-090', prova: 'UFPR 2026', vestibular: 'UFPR', ano: 2026, numeroOriginal: 90,
    disciplina: 'Espanhol', subtopico: 'Interpretación de Textos', dificuldade: 'dificil',
    textoApoio: TEXTO_UFPR_2026_ESP_3,
    enunciado: `<p>Lea comparativamente los dos textos y, enseguida, analice las proposiciones a continuación.</p>
<p>1. María Kodama apuntó inconsistencias ideológicas que explican el motivo por el cual la atribución de la autoría del poema Instantes a Borges fue un error.<br>
2. La posibilidad de cometer errores constituye el núcleo temático compartido por los textos.<br>
3. La noticia publicada en el periódico de la BBC busca informar al público lector un proceso de corrección de autoría.<br>
4. El yo poético del poema defiende la idea de que las personas deberían disfrutar de cosas simples en la vida, mientras que la cita presente en la noticia se contrapone y critica esa postura.</p>
<p>Señale la alternativa correcta.</p>`,
    alternativas: [
      { letra: 'A', texto: `Solo la afirmativa 1 es verdadera.` },
      { letra: 'B', texto: `Solo las afirmativas 1 y 2 son verdaderas.` },
      { letra: 'C', texto: `Solo las afirmativas 3 y 4 son verdaderas.` },
      { letra: 'D', texto: `Solo las afirmativas 1, 3 y 4 son verdaderas.`, explicacao: `Correta! 1: Kodama diz que o poema incita a “vivir en lo banal” e que “Borges nunca se arrepintió de su vida” — incompatível com o pensamento de Borges. 3: a notícia informa a correção da autoria. 4: o poema valoriza prazeres simples, e a fala de Kodama critica essa postura. A 2 é falsa: o tema comum não é a possibilidade de errar.` },
      { letra: 'E', texto: `Las afirmativas 1,2, 3 y 4 son verdaderas.` },
    ],
    gabarito: 'D',
  },
);
