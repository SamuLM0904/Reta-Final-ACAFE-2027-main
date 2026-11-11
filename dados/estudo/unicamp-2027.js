/**
 * Unicamp 2027 — 1ª fase (Conhecimentos Gerais), provas Q e Y — 72 questões de 4 alternativas (A–D).
 *
 * Fonte: Provas/Outros/UNICAMP/2027 - Prova Q-Y.pdf; gabarito oficial: 2027 - Gabarito Q-Y.pdf
 * (provas Q e Y; nenhuma anulada) → Provas/Outros/UNICAMP/2027_gabarito.json.
 * Questões de ESTUDO — nunca entram nos simulados. Aparecem no módulo da matéria, dentro do
 * capítulo do campo `conteudo` (Literatura e Inglês: pelo `subtopico`).
 * Ficaram de fora: Sociologia (39, 40, 41), Filosofia (70, 71, 72) e Literatura que depende da
 * leitura de obras fora da lista da ACAFE (34, 36, 37, 38).
 * Formato das questões: veja README.md ("Como adicionar uma questão nova").
 */

/* Texto para as questões 28 e 29 (canção "Sonho de um carnaval", de Chico Buarque) */
var TEXTO_UNICAMP_2027_CARNAVAL = `
      <p>Há 60 anos, quando a Universidade Estadual de Campinas era fundada, Chico Buarque de Hollanda lançava o seu primeiro álbum musical. Entre as canções presentes no álbum, estava <i>Sonho de um carnaval</i>, com a letra reproduzida a seguir.</p>
      <b>Sonho de um carnaval</b>
      <ol class="texto-numerado">
        <li>Carnaval, desengano</li>
        <li>Deixei a dor em casa me esperando</li>
        <li>E brinquei e gritei e fui vestido de rei</li>
        <li>Quarta-feira sempre desce o pano</li>
        <li>Carnaval, desengano</li>
        <li>Essa morena me deixou sonhando</li>
        <li>Mão na mão, pé no chão e hoje nem lembra não</li>
        <li>Quarta-feira sempre desce o pano</li>
        <li>Era uma canção, um só cordão e uma vontade</li>
        <li>De tomar a mão de cada irmão pela cidade</li>
        <li>No carnaval, esperança</li>
        <li>Que gente longe viva na lembrança</li>
        <li>Que gente triste possa entrar na dança</li>
        <li>Que gente grande saiba ser criança</li>
      </ol>
      <small>(BUARQUE, C. Sonho de um carnaval. In: <i>Chico Buarque de Hollanda</i>. Rio de Janeiro: RGE, 1966. 1 disco de vinil [LP].)</small>
`;

/* Textos para as questões 31 e 32 */
var TEXTO_UNICAMP_2027_TRABALHO = `
      <p><b>Texto 1</b></p>
      <p>Em comparação com o resto do mundo, o brasileiro não trabalha muito. Nem pode ser considerado particularmente esforçado. Uma pesquisa com dados de 160 países revela que trabalhadores de todo o mundo destinaram em média 42,7 horas semanais a atividades remuneradas em 2022 e 2023. Os brasileiros trabalharam, nesse mesmo período, 40,1 horas semanais em média. Disponível desde novembro do ano passado, o banco de dados organizado por Gethin e Saez confirma relações esperadas entre características demográficas, de renda per capita, de impostos e transferências realizados por cada país, de um lado, e a quantidade de horas trabalhadas por seus cidadãos, de outro. Sob qualquer desses critérios, o brasileiro trabalha menos do que seria esperado. O que provavelmente explica o desvio brasileiro é uma questão cultural, uma preferência por maior quantidade de lazer.</p>
      <small>(Adaptado de CARRIELO, R. Brasileiro trabalha menos que a média mundial; veja rankings. <i>Folha de S. Paulo</i>, 21/02/2026.)</small>
      <p><b>Texto 2</b></p>
      <p>Uma afirmação amplamente divulgada na mídia brasileira sustenta que os brasileiros trabalham substancialmente menos do que o esperado para seu nível de renda. Usando os dados de Gethin e Saez (2025) para 160 países, mostro que essa conclusão é um artefato da especificação econométrica. O resíduo do Brasil muda de sinal conforme a forma funcional, o método de ponderação e, sobretudo, a inclusão de controles institucionais – tributação, informalidade e regulação de jornada. Quando esses controles são adicionados, o Brasil passa a trabalhar mais do que o esperado. A hipótese de que o desvio reflete uma “preferência cultural por lazer” é testada com microdados da World Values Survey para 58 países e rejeitada: a variável que a mede diretamente – disposição a priorizar trabalho sobre lazer – deixa de ser estatisticamente significativa.</p>
      <small>(Adaptado de RANGEL, V. O Brasileiro trabalha menos do que deveria? <i>Folha de S. Paulo</i>, 23/02/2026.)</small>
`;

/* Texto para as questões 63 e 64 */
var TEXTO_UNICAMP_2027_LIGO = `
      <p>Em 2026, comemoramos os 10 anos da primeira observação direta de ondas gravitacionais. As medições foram realizadas pelo <i>Laser Interferometer Gravitational-Wave Observatory</i> (LIGO) nos Estados Unidos. A detecção das ondas gravitacionais trouxe novos elementos ao entendimento da teoria da gravitação.</p>
`;

QUESTOES.push(
  {
    id: 'unicamp-2027-001',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 1,
    disciplina: 'História',
    conteudo: 'his-1a6',
    subtopico: 'Cristianismo e Estado romano na Antiguidade Tardia',
    dificuldade: 'media',
    enunciado: `
      <p>Em <i>Domination</i>, Alice Roberts analisa o cristianismo na Antiguidade Tardia, enfatizando sua relação com o Estado romano. A autora argumenta que a Igreja inicialmente se beneficiou do apoio imperial e, depois, ajudou a preservar o legado de Roma em meio às transformações do século V. A questão central do livro é por que a Igreja foi tão bem-sucedida em sua expansão.</p>
      <small>(Adaptado de PETTS, D. Domination. <i>Current Archaeology</i>, edição 433, 1 mar. 2026.)</small>
      <p>A partir desse trecho, assinale a alternativa correta.</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'Ao longo do século V, as disputas entre classes sociais do Império Romano do Oriente e do Ocidente levaram à ruptura entre Igreja e Estado romano, gerando a separação entre essas instituições.' },
      { letra: 'B', texto: 'A Igreja Católica Apostólica Romana e o Estado romano construíram uma relação por vezes simbiótica, na qual ambas as instituições saíram fortalecidas, favorecendo determinados grupos sociais presentes na Antiguidade Tardia.', explicacao: 'Correta! O texto mostra a Igreja beneficiada pelo apoio imperial (oficialização do cristianismo no século IV) e, depois, preservando o legado romano: uma relação de benefício mútuo entre Igreja e Estado, que fortaleceu as elites ligadas às duas instituições.' },
      { letra: 'C', texto: 'A expansão do cristianismo ocorreu principalmente após o colapso do Estado romano, quando a Igreja passou a atuar de forma autônoma, consolidando sua influência sem apoio político das autoridades imperiais.' },
      { letra: 'D', texto: 'A consolidação do cristianismo resultou da substituição gradual das instituições romanas pela Igreja, que passou a exercer funções políticas e administrativas antes desempenhadas pelo Estado imperial.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2027-002',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 2,
    disciplina: 'História',
    conteudo: 'his-2a3',
    subtopico: 'Povos ameríndios e colonização',
    dificuldade: 'media',
    enunciado: `
      <p>Durante o período colonial, muitos povos indígenas da América organizavam suas relações com os animais de forma distinta dos europeus. Em vez de separar rigidamente humanos e não humanos, diversas comunidades distinguiam sobretudo seres selvagens e seres familiarizados, aproximando parentes humanos e animais integrados ao convívio cotidiano. Assim, transformar inimigos, presas ou animais selvagens em seres próximos ao grupo constituía uma prática valorizada. Mesmo após a chegada de animais trazidos pelos europeus, muitos povos ameríndios continuaram a incorporá-los ao seu convívio segundo suas próprias referências culturais, diferentes das concepções europeias de pecuária e propriedade animal.</p>
      <small>(Adaptado de NORTON, M,“The Chicken or the Iegue: Human-Animal Relationships and the Columbian Exchange”, <i>The American Historical Review</i>, v. 120, n. 1, 2015, p. 28–60.)</small>
      <p>A partir do texto, assinale a alternativa correta sobre as relações entre sociedades ameríndias, animais e colonização na América.</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'As sociedades ameríndias consideravam seres familiarizados aqueles que não faziam parte do convívio cotidiano, estabelecendo classificações próprias que, em muitos casos, atribuíam aos animais papéis sociais distintos dos observados nas sociedades europeias.' },
      { letra: 'B', texto: 'A relação dos povos indígenas com os animais era pautada na distinção entre humanos e não humanos, embora admitisse a incorporação simbólica de determinados animais ao universo social e familiar das comunidades.' },
      { letra: 'C', texto: 'Para alguns povos ameríndios, o mundo não era organizado pela oposição entre humanos e não humanos. Por isso, a distinção entre seres familiarizados e seres selvagens contribuía para formas de organização social diferentes das europeias.', explicacao: 'Correta! O texto afirma que, em vez de separar humanos e não humanos, essas comunidades distinguiam seres selvagens e familiarizados — critério que gerava relações com os animais diferentes das concepções europeias de pecuária e propriedade.' },
      { letra: 'D', texto: 'Povos ameríndios consideravam que a convivência próxima com animais favorecia sua integração ao grupo, aproximando suas práticas das concepções europeias de criação, domesticação e propriedade animal.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2027-003',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 3,
    disciplina: 'História',
    conteudo: 'his-2b3',
    subtopico: 'Constituição de 1824 e voto censitário',
    dificuldade: 'facil',
    enunciado: `
      <p>Leia o trecho a seguir extraído do capítulo VI da Constituição Brasileira de 1824:</p>
      <p>“CAPITULO VI: Das Eleições.<br>
      Art. 94. Podem ser Eleitores, e votar na eleição dos Deputados, Senadores, e Membros dos Conselhos de Provincia todos os que podem votar na Assembléa Parochial. Exceptuam-se<br>
      I. Os que não tiverem de renda liquida annual duzentos mil réis por bens de raiz, industria, commercio, ou emprego.<br>
      II. Os Libertos.<br>
      III. Os criminosos pronunciados em queréla, ou devassa."</p>
      <small>(Constituição Politica do Imperio do Brazil (25 de março de 1824). Disponível em https://www.planalto.gov.br/ccivil_03/constituicao/constituicao24.htm. Acesso em 15/05/2026.)</small>
      <p>De acordo com a concepção de direitos democráticos presente na Constituição Brasileira de 1824, o direito ao voto no país podia, nessa época, ser caracterizado como</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'universal, pois reconhecia o voto como um direito político extensivo ao conjunto dos cidadãos do Império.' },
      { letra: 'B', texto: 'meritocrático, pois condicionava o acesso ao voto ao grau de instrução e à capacidade intelectual dos eleitores.' },
      { letra: 'C', texto: 'censitário, pois condicionava o exercício do voto à comprovação de renda mínima ou propriedades, entre outros temas legais.', explicacao: 'Correta! O art. 94 exclui quem não tivesse renda líquida anual de 200 mil réis: o voto dependia de renda (voto censitário), além de excluir libertos e criminosos pronunciados.' },
      { letra: 'D', texto: 'racial, pois estabelecia critérios distintos de participação política de acordo com a origem e a cor dos indivíduos.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2027-004',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 4,
    disciplina: 'História',
    conteudo: 'his-4a3',
    subtopico: 'Fascismo italiano e a “Batalha do Trigo”',
    dificuldade: 'facil',
    enunciado: `
      <p>Em 1925, o regime fascista italiano lançou a “Batalha do Trigo”, programa de modernização agrária baseado na substituição das variedades tradicionais de trigo por cultivares “de elite”, desenvolvidas por meio do melhoramento genético. Nas palavras de Mussolini, o objetivo era “libertar o povo italiano da escravidão do pão estrangeiro”. A estratégia obteve resultados expressivos no norte do país, onde as condições ambientais e econômicas eram mais favoráveis, mas fracassou no sul semiárido e pobre, onde os agricultores resistiram às novas variedades e preservaram suas sementes e formas tradicionais de cultivo. Essa resistência levou à formulação de abordagens alternativas, especialmente o desenvolvimento, financiado pelo Estado, de estratégias de “adaptação profunda”, que valorizavam a agrobiodiversidade local em vez de substituí-la. A “Revolução Verde” fascista não foi, portanto, um bloco homogêneo de soluções: ela se desdobrou de forma desigual e contraditória, diferente do que normalmente encontramos na Revolução Verde do pós Segunda Guerra Mundial.</p>
      <small>(Adaptado de SOLLAI, M. The fascist Green Revolution. <i>Plants, People, Planet</i>, v. 6, n. 5, p. 1094–1103, 2024. https://doi.org/10.1002/ppp3.10386.)</small>
      <p>Com base no texto de Sollai (2024) e nos conhecimentos históricos sobre outros processos de transformação nos modos de produção no campo, é correto afirmar que</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'a “Batalha do Trigo” fascista e a “Revolução Verde” do pós-Segunda Guerra Mundial caracterizaram-se pela aplicação relativamente padronizada de estratégias de modernização agrícola em diferentes contextos regionais.' },
      { letra: 'B', texto: 'a “Revolução Verde” do pós-guerra diferenciou-se da “Batalha do Trigo” por não utilizar pesquisas científicas e técnicas de melhoramento genético para ampliar a produção agrícola.' },
      { letra: 'C', texto: 'o projeto de modernização agrícola fascista encontrou resistência em determinadas regiões da Itália, levando o Estado a desenvolver estratégias alternativas adaptadas às condições locais.', explicacao: 'Correta! O texto relata que os agricultores do sul resistiram às novas variedades e que essa resistência levou o Estado a financiar estratégias de “adaptação profunda”, que valorizavam a agrobiodiversidade local.' },
      { letra: 'D', texto: 'a resistência dos agricultores do sul da Itália ocorreu porque o regime fascista abandonou os projetos de modernização agrícola nas regiões economicamente menos desenvolvidas do país.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2027-005',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 5,
    disciplina: 'História',
    conteudo: 'his-1b7',
    subtopico: 'Bolsas de mandinga no Atlântico escravista',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2027-005.webp',
    legenda: '(Bolsa de mandinga anexada ao processo da Inquisição contra Jaques Viegas em 1704. Arquivo Nacional da Torre do Tombo, proc. 2355.)',
    enunciado: `
      <p>Entre os inúmeros objetos e artefatos que circulavam no Atlântico escravista da época moderna, destacam-se as célebres bolsas de mandinga. Eram amuletos confeccionados em couro ou tecido, usados ao pescoço sobretudo por populações de origem africana. Acreditava-se que, por meio deles, seria possível “fechar” o corpo contra agressões físicas e espirituais. No interior dessas bolsas havia uma variedade de elementos simbólicos, fruto do contato entre diferentes tradições culturais: itens da flora e fauna americanas; partes do corpo humano, como unhas, cabelos, ossos e dentes; materiais ligados aos ritos católicos, como pedra d’ara e fragmentos de hóstias; além de componentes escritos e imagéticos, como orações, cruzes e outros símbolos gráficos. Elas circulavam por redes que conectavam regiões como Minas Gerais, Recife, Rio de Janeiro, Lisboa, Costa da Mina e Angola. Sua difusão aumentou no século XVIII, quando diversos mandingueiros foram presos pela Inquisição.</p>
      <small>(Adaptado de SOUZA, L de M. e. <i>O Diabo e a terra de Santa Cruz</i>. São Paulo: Companhia das Letras, 1986. pp. 210–226.)</small>
      <p>Com base no excerto, é correto afirmar que as bolsas de mandinga</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'evidenciam a preservação de tradições religiosas africanas no mundo colonial, mantendo-se relativamente imunes à incorporação de elementos culturais europeus e americanos.' },
      { letra: 'B', texto: 'constituíam recursos espirituais de proteção amplamente utilizados no Atlântico escravista, articulando elementos provenientes de diferentes tradições culturais em novas práticas religiosas.', explicacao: 'Correta! As bolsas “fechavam” o corpo (proteção espiritual), circulavam por todo o Atlântico (Brasil, Lisboa, África) e reuniam itens americanos, africanos e católicos — uma prática religiosa nova, fruto do contato entre culturas.' },
      { letra: 'C', texto: 'demonstram o avanço da cristianização das populações africanas na América portuguesa, uma vez que incorporavam objetos e símbolos católicos em substituição às práticas religiosas africanas.' },
      { letra: 'D', texto: 'eram artefatos de matriz islâmica, portados por escravizados de origem mandinga, que permitiam a leitura clandestina do Alcorão e a transmissão de preceitos, fundamentos e práticas no Brasil.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2027-006',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 6,
    disciplina: 'História',
    conteudo: 'his-4b2',
    subtopico: 'Ditadura militar e política indigenista',
    dificuldade: 'facil',
    enunciado: `
      <p>A ditadura militar trouxe um dado novo à política indigenista pós-Vargas, que foi o da falta de controle social: das arbitrariedades locais de colonos e fazendeiros, os conluios dos chefes locais com a polícia e os militares, às políticas engendradas em Brasília. O caráter autoritário do regime e a pesada censura, bem como a propaganda oficial ufanista dos projetos desenvolvimentistas, dificultavam as denúncias sobre esses crimes. A própria doutrina de Segurança Nacional servia para “legitimar” as graves violações de direitos humanos contra os povos indígenas, pois ela era etnocêntrica, racista e desenvolvimentista. A sobrevivência dos povos indígenas e a existência de suas culturas foram subordinadas aos grandes projetos de colonização do país. A BR-80, por exemplo, cortou o então Parque Nacional do Xingu (uma das vitrines da política indigenista nacional) ao norte, dividiu a tribo Tukarramãe e levou-lhe doenças como sarampo; o General Bandeira de Mello, presidente da Funai, apenas comentou, em julho de 1971, que “o Parque Nacional do Xingu não pode impedir o progresso do país”.</p>
      <small>(Adaptado de BRASIL. <i>Comissão Nacional da Verdade</i>. Relatório: textos temáticos – povos indígenas. Brasília: CNV, 2014.)</small>
      <p>Com base no trecho apresentado sobre a política indigenista durante a ditadura militar no Brasil, é correto afirmar que</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'a expansão das fronteiras econômicas, durante a ditadura militar, foi acompanhada por políticas que procuravam compatibilizar a integração territorial do país com a preservação da autonomia das populações indígenas.' },
      { letra: 'B', texto: 'os projetos de ocupação territorial, implementados durante a ditadura militar, expressavam uma concepção de desenvolvimento que subordinava a permanência dos povos indígenas em seus territórios aos interesses do Estado.', explicacao: 'Correta! O texto diz que a sobrevivência dos indígenas foi subordinada aos grandes projetos de colonização, como a BR-80 que cortou o Parque do Xingu — “o Parque Nacional do Xingu não pode impedir o progresso do país”.' },
      { letra: 'C', texto: 'a atuação dos órgãos indigenistas, durante a ditadura militar, ampliou os mecanismos de participação das comunidades indígenas na definição dos projetos de infraestrutura e colonização do país.' },
      { letra: 'D', texto: 'a construção de rodovias e a ocupação de áreas consideradas estratégicas, durante a ditadura militar, reduziram os conflitos fundiários ao fortalecer a proteção dos territórios indígenas.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2027-007',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 7,
    disciplina: 'História',
    conteudo: 'his-4a5',
    subtopico: 'Videogames e cultura de massa',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2027-007.webp',
    legenda: '(Exposição “Game Masters” (2012), Australian Centre for the Moving Image (ACMI). Reproduzida em: METUARAU, Tuakana. <i>A history of video games</i>. Wellington (Nova Zelândia): VUW, 2017, p. 12–13.)',
    enunciado: `
      <p>Os jogos eletrônicos deixaram de ser curiosidades técnicas para se tornarem uma das principais linguagens culturais do final do século XX e do início do XXI. O console doméstico foi decisivo nesse processo. Surgido comercialmente em 1972 com o Magnavox Odyssey, popularizado pelo Atari 2600 e consolidado nos anos 1980 por Nintendo e Sega, o dispositivo console deslocou o jogo eletrônico dos laboratórios, arcades e espaços públicos para o interior das casas. Ao conectar o gesto corporal do jogador à televisão, a tela mais importante da cultura audiovisual de massa do pós-guerra, o console transformou uma superfície antes predominantemente expositiva em um espaço interativo e responsivo, no qual escolhas, reflexos e estratégias produzem consequências. Formava-se, assim, uma mídia capaz de articular visualidade, som, regra e performance.</p>
      <small>(CARREIRO, M. Jogando o passado: videogames como fontes históricas. <i>História e Cultura</i>, Franca, v. 2, n. 2, p. 157–173, 2013.)</small>
      <p>A partir da imagem e do excerto, assinale a alternativa correta sobre o impacto dos <i>games</i> e do console nas culturas de massa.</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'Ao instaurar uma cultura material específica, o console transformou a relação histórica com as telas da televisão, redefinindo a sociabilidade, o consumo e a memória.', explicacao: 'Correta! A imagem mostra a sequência de consoles (cultura material própria) e o texto afirma que o console levou o jogo para dentro das casas e transformou a TV de tela expositiva em espaço interativo — mudando sociabilidade, consumo e memória.' },
      { letra: 'B', texto: 'Ao radicalizar a relação entre ver e agir, o console impactou a indústria cultural do cinema e da TV, permitindo novas formas de filmar e exibir a experiência humana na tela.' },
      { letra: 'C', texto: 'A adaptação do console às técnicas da indústria cinematográfica hollywoodiana contribuiu para aprofundar as diferenças entre a linguagem do cinema e a linguagem da televisão.' },
      { letra: 'D', texto: 'A recusa da linguagem dos <i>games</i> pela indústria televisiva na década de 1980 causou uma perda de espaço da televisão como forma de entretenimento doméstico.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2027-008',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 8,
    disciplina: 'Química',
    conteudo: ['qui-2a5', 'qui-3a3'],
    subtopico: 'CO₂ em água: condutividade e pressão',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2027-008.webp',
    legenda: '(Elaboração: Comvest, 2026.)',
    enunciado: `
      <p>Considere o seguinte experimento (ilustrado na figura): em um frasco fechado, há um sensor de condutividade elétrica imerso em água e um sensor de pressão localizado fora da água. Na saída lateral do frasco, há um balão inflado com um gás. O experimento tem início com o registro da condutividade e da pressão. Num dado instante, indicado pela seta no gráfico das alternativas, há a liberação do gás para dentro do frasco.</p>
      <p>O gás usado para inflar o balão e o gráfico que melhor representa os parâmetros monitorados são, respectivamente,</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'CO<sub>2</sub>,<br><img src="imagens/estudo/unicamp-2027-008-a.webp" alt="Alternativa A: condutividade sobe continuamente e a pressão sobe de repente e depois cai aos poucos">', explicacao: 'Correta! O CO<sub>2</sub> (óxido ácido) se dissolve na água: CO<sub>2</sub> + H<sub>2</sub>O ⇌ H<sub>2</sub>CO<sub>3</sub> ⇌ H<sup>+</sup> + HCO<sub>3</sub><sup>–</sup>, formando íons — a condutividade cresce com o tempo. A pressão salta quando o gás entra e depois diminui aos poucos, porque o CO<sub>2</sub> vai sendo absorvido pela água. O He é praticamente insolúvel e não forma íons.' },
      { letra: 'B', texto: 'CO<sub>2</sub>,<br><img src="imagens/estudo/unicamp-2027-008-b.webp" alt="Alternativa B: condutividade salta e depois cai aos poucos, pressão constante">' },
      { letra: 'C', texto: 'He,<br><img src="imagens/estudo/unicamp-2027-008-c.webp" alt="Alternativa C: condutividade sobe continuamente e a pressão sobe de repente e depois cai aos poucos">' },
      { letra: 'D', texto: 'He,<br><img src="imagens/estudo/unicamp-2027-008-d.webp" alt="Alternativa D: condutividade salta e depois cai aos poucos, pressão constante">' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2027-009',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 9,
    disciplina: 'Química',
    conteudo: 'qui-4b4',
    subtopico: 'Substituição galvânica e potenciais de redução',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2027-009.webp',
    legendaAcima: 'Dados:',
    enunciado: `
      <p>A nanotecnologia é a área que investiga materiais em escala nanométrica, na qual suas propriedades podem diferir das observadas em maiores dimensões. Uma estratégia para obtenção de nanoestruturas, com diferentes propriedades, é a utilização de reações de substituição galvânica.</p>
      <p>Considere um experimento em que a substituição galvânica consistiu, simplificadamente, em colocar em contato nanocubos de prata pura numa solução de um dado íon metálico. Nesse processo, os nanocubos de prata metálica foram transformados em nanoestruturas de liga metálica à base de prata, com alterações na sua composição e morfologia.</p>
      <p>Considere essas informações e o fato de que as imagens apresentadas nas alternativas serem apenas ilustrativas e fora da escala. A alternativa que descreve corretamente o íon utilizado na substituição galvânica e a transformação da morfologia do nanocubo é</p>
      <small>(Texto e figuras adaptados de JENKINS, S.V.; GOHMAN, T.D.; MILLER ,E.K.; CHEN, J. J. CHEM. (...) J. Chem. Educ., v. 92, n. 6, p. 1056–1060, 2015.)</small>
    `,
    alternativas: [
      { letra: 'A', texto: 'Au<sup>3+</sup>;<br><img src="imagens/estudo/unicamp-2027-009-a.webp" alt="Alternativa A: cubo maciço que continua um cubo maciço">' },
      { letra: 'B', texto: 'Au<sup>3+</sup>;<br><img src="imagens/estudo/unicamp-2027-009-b.webp" alt="Alternativa B: cubo maciço que vira um cubo oco e poroso">', explicacao: 'Correta! O Au<sup>3+</sup>/Au (+0,93 V) tem potencial de redução maior que o Ag<sup>+</sup>/Ag (+0,80 V), então oxida a prata: 3 Ag + Au<sup>3+</sup> → 3 Ag<sup>+</sup> + Au. A prata se dissolve (3 átomos saem para cada átomo de ouro depositado), e o cubo vira uma estrutura oca e porosa de liga Au–Ag. O Cu<sup>2+</sup> (+0,34 V) não oxida a prata.' },
      { letra: 'C', texto: 'Cu<sup>2+</sup>;<br><img src="imagens/estudo/unicamp-2027-009-c.webp" alt="Alternativa C: cubo maciço que continua um cubo maciço">' },
      { letra: 'D', texto: 'Cu<sup>2+</sup>;<br><img src="imagens/estudo/unicamp-2027-009-d.webp" alt="Alternativa D: cubo maciço que vira um cubo oco e poroso">' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2027-010',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 10,
    disciplina: 'Química',
    conteudo: 'qui-4a3',
    subtopico: 'Síntese da amônia: deslocamento de equilíbrio',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/unicamp-2027-010.webp',
    legenda: '(Texto e Figura adaptados de SMIL, V. <i>Enriching the Earth: Fritz Haber, Carl Bosch, and the Transformation of World Food Production</i>; The MIT Press: Cambridge, MA, 2001.)',
    enunciado: `
      <p>Como afirma Vaclav Smil em <i>Enriching the Earth</i>, “nenhuma invenção foi tão fundamental para sustentar as grandes populações humanas quanto a síntese da amônia a partir de seus elementos” (tradução livre), desenvolvida no início do século XX. Industrialmente a síntese da amônia é conduzida na presença de catalisadores, a alta temperatura e pressão. A figura a seguir apresenta informações sobre o equilíbrio dessa reação.</p>
      <p>De acordo com a figura, a formação do produto é</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'favorecida tanto com o aumento da temperatura, quanto com o aumento da pressão.' },
      { letra: 'B', texto: 'favorecida com o aumento da temperatura, mas desfavorecida com o aumento da pressão.' },
      { letra: 'C', texto: 'desfavorecida tanto com o aumento da temperatura, quanto com o aumento da pressão' },
      { letra: 'D', texto: 'desfavorecida com o aumento da temperatura, mas favorecida com o aumento da pressão.', explicacao: 'Correta! O gráfico mostra K diminuindo com o aumento de T: a reação é exotérmica e o aquecimento desfavorece o NH<sub>3</sub>. Já o aumento de pressão desloca o equilíbrio para o lado de menor número de mols de gás (2 mols de reagentes → 1 mol de NH<sub>3</sub>), favorecendo o produto.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2027-011',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 11,
    disciplina: 'Química',
    conteudo: 'qui-2a1',
    subtopico: 'MOFs e interações intermoleculares com a água',
    dificuldade: 'dificil',
    imagem: 'imagens/estudo/unicamp-2027-011.webp',
    legendaAcima: '<b>LIGANTES ORGÂNICOS</b>',
    legenda: '(Elaboração: Comvest, 2026.)',
    enunciado: `
      <p>Os MOFs (<i>Metal–Organic Frameworks</i>, ou Estruturas Metal–Orgânicas) são materiais porosos formados por centros metálicos e ligantes orgânicos, cujas propriedades — como acidez, interação molecular e polaridade — dependem diretamente da natureza desses ligantes. O impacto dessa classe de materiais foi reconhecido com o Prêmio Nobel de Química de 2025. Os laureados mostraram que esses materiais podem ser aplicados na captação de água do ar em regiões áridas, na captura de dióxido de carbono, no armazenamento de gases tóxicos e na catálise de reações químicas. Os ligantes orgânicos que formam as estruturas de três importantes MOFs — MIL-101-SO<sub>3</sub>H (<b>A</b>), UiO-66 (<b>B</b>) e ZIF-8 (<b>C</b>) — estão apresentados na figura a seguir.</p>
      <p>Se você fosse sintetizar uma MOF com a finalidade de captar água do ar, considerando a natureza das possíveis interações intermoleculares, você escolheria como primeira e segunda opções, respectivamente, os ligantes orgânicos</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'B e A.' },
      { letra: 'B', texto: 'C e A.' },
      { letra: 'C', texto: 'A e B.', explicacao: 'Correta! Para captar água do ar, o ligante deve ter grupos polares que façam ligações de hidrogênio com a água. A tem duas carboxilas (–COOH) e um grupo sulfônico (–SO<sub>3</sub>H), muito polar e ácido: é a primeira opção. B tem duas carboxilas: segunda opção. C (imidazol com metila) é pouco polar e quase não interage com a água (o ZIF-8 é hidrofóbico).' },
      { letra: 'D', texto: 'B e C.' },
    ],
    gabarito: 'C'
  },
  {
    id: 'unicamp-2027-012',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 12,
    disciplina: 'Química',
    conteudo: 'qui-4a4',
    subtopico: 'Intoxicação por metanol e acidose metabólica',
    dificuldade: 'media',
    enunciado: `
      <p>De acordo com dados publicados no portal GOV.BR em 29/10/2025, a intoxicação por ingestão de bebidas alcoólicas contaminadas por CH<sub>3</sub>OH levou 15 pessoas à morte. No organismo, o CH<sub>3</sub>OH é metabolizado em compostos altamente tóxicos, como o HCOOH. O tratamento clínico mais indicado inclui hemodiálise, associada à administração de C<sub>2</sub>H<sub>5</sub>OH e fomepizol. Para encaminhar um paciente ao tratamento, três parâmetros sanguíneos são utilizados: concentração de CH<sub>3</sub>OH, concentração de HCO<sub>3</sub><sup>–</sup> e pH arterial.</p>
      <p>Considerando as informações dadas e o conhecimento químico, qual é a alternativa correta para que um paciente seja encaminhado para o tratamento?</p>
      <small>(Ministério da Saúde, Nota Técnica Conjunta nº 365/2025. <i>Metanol: 59 casos confirmados de intoxicação após consumo de bebidas alcoolicas</i>. Disponível em https://www.gov.br/saude/pt-br/assuntos/noticias/2025/outubro/metanol-59-casos-confir-mados-de-intoxicacao-apos-consumo-de-bebidas-alcoolicas. Acesso em 05/05/2026.)</small>
    `,
    alternativas: [
      { letra: 'A', texto: '[CH<sub>3</sub>OH] &gt; 50mg/dL, alcalose metabólica (HCO<sub>3</sub><sup>–</sup> &gt; 15 mmol/L e pH arterial &lt; 7,30).' },
      { letra: 'B', texto: '[CH<sub>3</sub>OH] &lt; 50mg/dL, acidez metabólica (HCO<sub>3</sub><sup>–</sup> &gt; 15 mmol/L e pH arterial &gt; 7,30).' },
      { letra: 'C', texto: '[CH<sub>3</sub>OH] &gt; 50mg/dL, acidez metabólica (HCO<sub>3</sub><sup>–</sup> &lt; 15 mmol/L e pH arterial &lt; 7,30).', explicacao: 'Correta! Concentração alta de metanol indica intoxicação grave. O ácido fórmico (HCOOH) formado libera H<sup>+</sup>, que consome o tampão bicarbonato (H<sup>+</sup> + HCO<sub>3</sub><sup>–</sup> → H<sub>2</sub>CO<sub>3</sub>): o HCO<sub>3</sub><sup>–</sup> cai e o pH fica abaixo do normal — acidose metabólica.' },
      { letra: 'D', texto: '[CH<sub>3</sub>OH] &lt; 50mg/dL, alcalose metabólica (HCO<sub>3</sub><sup>–</sup> &lt; 15 mmol/L e pH arterial &gt; 7,30).' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2027-013',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 13,
    disciplina: 'Química',
    conteudo: 'qui-4b4',
    subtopico: 'Eletrólise de NaCl e produção de HClO',
    dificuldade: 'media',
    enunciado: `
      <p>Em fevereiro de 2026, um incidente ocorrido na piscina de uma academia, na cidade de São Paulo, ganhou destaque após a morte de uma pessoa e o relato de mal-estar por, pelo menos, outras sete pessoas, enquanto nadavam durante o processo de tratamento da piscina. O principal agente bactericida utilizado no tratamento de água em piscinas – sejam de clubes, academias ou residências – é o HClO. Uma forma de tratamento que tem se popularizado, por se mostrar mais segura e econômica, se baseia na eletrólise de NaCl, adicionado diretamente na água da piscina. Um dos produtos dessa eletrólise reage gerando HClO.</p>
      <p>Assim, os gases produzidos nessa eletrólise e a equação química correta de produção do HClO são, respectivamente,</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'Gases produzidos: H<sub>2</sub> e Cl<sub>2</sub>; Equação química: Cl<sub>2</sub>(g) + H<sub>2</sub>O(l) ⇌ HClO(aq) + Cl<sup>–</sup>(aq)' },
      { letra: 'B', texto: 'Gases produzidos: H<sub>2</sub> e O<sub>2</sub>; Equação química: H<sub>2</sub>(g) + O<sub>2</sub>(g) + Cl<sup>–</sup>(aq) ⇌ HClO(aq) + H<sub>2</sub>O(aq)' },
      { letra: 'C', texto: 'Gases produzidos: O<sub>2</sub> e H<sub>2</sub>; Equação química: Cl<sup>–</sup>(aq) +O<sub>2</sub>(g) + H<sub>2</sub>O(l) ⇌ HClO(aq) + H<sup>+</sup>(aq)' },
      { letra: 'D', texto: 'Gases produzidos: H<sub>2</sub> e Cl<sub>2</sub>; Equação química: Cl<sub>2</sub>(g) + H<sub>2</sub>O(l) ⇌ HClO(aq) + H<sup>+</sup>(aq) + Cl<sup>–</sup>(aq)', explicacao: 'Correta! Na eletrólise da solução de NaCl, forma-se H<sub>2</sub> no cátodo (redução da água) e Cl<sub>2</sub> no ânodo (oxidação do Cl<sup>–</sup>). O Cl<sub>2</sub> reage com a água: Cl<sub>2</sub> + H<sub>2</sub>O ⇌ HClO + H<sup>+</sup> + Cl<sup>–</sup> — equação balanceada em massa e em carga (a da alternativa A não fecha a carga).' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2027-014',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 14,
    disciplina: 'Química',
    conteudo: 'qui-4a2',
    subtopico: 'Velocidade de absorção e dose acumulada de fármaco',
    dificuldade: 'dificil',
    imagem: 'imagens/estudo/unicamp-2027-014.webp',
    legenda: '(Elaboração: Comvest, 2026.)',
    enunciado: `
      <p>A isotretinoína é um fármaco que atua diminuindo a atividade das glândulas sebáceas, exercendo ação anti-inflamatória nos tecidos cutâneos, especialmente em casos resistentes a terapias convencionais. A bula do remédio recomenda uma dose diária entre 0,5-1,0 mg kg<sup>–1</sup> e especifica que o tratamento busca atingir uma dose acumulada total (dose total ingerida ao longo do tratamento) entre 120 e 150 mg kg<sup>–1</sup>, faixa associada a melhores resultados terapêuticos e menor taxa de recidiva. A figura a seguir apresenta a variação da concentração plasmática de isotretinoína e a dose acumulada (em mg) em função do tempo, para uma paciente de 50 kg.</p>
      <p>Considerando as informações do texto e da figura, é correto afirmar que a velocidade de absorção do fármaco (entrada no plasma) é</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'maior que a sua velocidade de metabolização, sendo que esse paciente terá que tomar o remédio, no mínimo, por cerca de 215 dias.' },
      { letra: 'B', texto: 'maior que a sua velocidade de metabolização, sendo que esse paciente terá que tomar o remédio, no mínimo, por cerca de 170 dias.', explicacao: 'Correta! Após cada dose, a concentração plasmática sobe rapidamente e cai devagar: a absorção é mais rápida que a metabolização. Pelos degraus do gráfico, a dose diária é de 35 mg. A dose acumulada mínima é 120 mg/kg × 50 kg = 6.000 mg, e 6.000 ÷ 35 ≈ 171 dias, ou seja, cerca de 170 dias.' },
      { letra: 'C', texto: 'menor que a sua velocidade de metabolização, sendo que esse paciente terá que tomar o remédio, no mínimo, por cerca de 215 dias.' },
      { letra: 'D', texto: 'menor que a sua velocidade de metabolização, sendo que esse paciente terá que tomar o remédio, no mínimo, por cerca de 170 dias.' },
    ],
    gabarito: 'B'
  },
  {
    id: 'unicamp-2027-015',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 15,
    disciplina: 'Matemática',
    conteudo: 'mat-1b5',
    subtopico: 'Sistema linear (problema)',
    dificuldade: 'facil',
    enunciado: `
      <p>Um grupo de alunos que pratica judô vendeu pizzas para ajudar a pagar os custos de uma viagem para um campeonato.</p>
      <p>A pizza de calabresa custava R$ 45,00 e a pizza de brigadeiro custava R$ 40,00. O total arrecadado foi de R$ 8.750,00 pela venda de 205 pizzas. Quantas pizzas de brigadeiro foram vendidas?</p>
    `,
    alternativas: [
      { letra: 'A', texto: '95.', explicacao: 'Correta! Com x calabresas e y brigadeiros: x + y = 205 e 45x + 40y = 8750. Se todas fossem de calabresa: 45 × 205 = 9225; a diferença 9225 − 8750 = 475 vem dos R$ 5 a menos de cada brigadeiro: y = 475 ÷ 5 = 95.' },
      { letra: 'B', texto: '100.' },
      { letra: 'C', texto: '105.' },
      { letra: 'D', texto: '110.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2027-016',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 16,
    disciplina: 'Matemática',
    conteudo: 'mat-4b1',
    subtopico: 'Distância entre pontos (curling)',
    dificuldade: 'media',
    imagem: ['imagens/estudo/unicamp-2027-016-1.webp', 'imagens/estudo/unicamp-2027-016-2.webp'],
    textoApoio: `
      <p>Olimpíada de Inverno: como o <i>curling</i> esquentou o coração dos brasileiros?</p>
      <p>Conhecido como o “xadrez no gelo”, a modalidade encanta pelas jogadas e pela famosa “vassourinha”. A função, claro, não é limpar o gelo como se tira o pó do chão de casa, mas alisar a pista para tornar o gelo mais ou menos liso para as pedras atingirem o alvo.</p>
      <p>Em uma pista de gelo de 45,7m de extensão, duas equipes competem para lançar suas pedras de 20kg cada no alvo formado por quatro círculos concêntricos, sendo o central chamado de botão. O jogo tem mais de uma rodada.</p>
      <small>(Adaptado de <i>Olimpíada de Inverno: como o curling esquentou o coração dos brasileiros?</i> Disponível em https://veja.abril.com.br/esporte/olimpiadas-de-inverno-como-o-curling-esquentou-o-coracao-dos-brasileiros/. Acesso em 04/05/2026.)</small>
    `,
    enunciado: `
      <p>No <i>curling</i>, uma rodada consiste num arremesso de quatro pedras por cada equipe, de maneira alternada. Vence a rodada a equipe que tiver a pedra cujo centro está mais próximo do centro do alvo. Para calcular a pontuação da equipe vencedora, considere <i>d</i> a distância do centro do alvo até o centro da pedra do adversário que está mais próxima do centro do alvo. A pontuação da equipe vencedora é a quantidade de pedras dela cuja distância ao centro do alvo, medido do centro da pedra, é menor do que <i>d</i>.</p>
      <p>Considere que o alvo é composto por círculos de raios 1, 2, 3 e 4, todos centrados na origem de um plano cartesiano, conforme indicado pela figura.</p>
      <p>Em uma rodada em que foram lançadas 4 pedras por cada equipe, temos a seguinte situação:</p>
      <p>Os centros das pedras da equipe azul estão nos pontos (1,2), (–3/2, –1), (–2,–3), (4,–1).</p>
      <p>Os centros das pedras da equipe vermelha estão nos pontos (1/2, 1/5), (2,0), (–1,1), (2,–2).</p>
      <p>Qual das equipes venceu essa rodada e quantos pontos foram feitos pela equipe vencedora nessa rodada?</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'Azul venceu com 1 ponto.' },
      { letra: 'B', texto: 'Azul venceu com 2 pontos.' },
      { letra: 'C', texto: 'Vermelho venceu com 1 ponto.' },
      { letra: 'D', texto: 'Vermelho venceu com 2 pontos.', explicacao: 'Correta! Distâncias à origem (√(x² + y²)): vermelho (1/2, 1/5) ≈ 0,54; (–1,1) ≈ 1,41; (2,0) = 2; (2,–2) ≈ 2,83. Azul: (–3/2,–1) = √3,25 ≈ 1,80; (1,2) ≈ 2,24; os outros são maiores. O vermelho tem a pedra mais próxima e vence; d ≈ 1,80, e duas pedras vermelhas (0,54 e 1,41) estão a menos de d: 2 pontos.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2027-017',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 17,
    disciplina: 'Matemática',
    conteudo: ['mat-1b4', 'mat-4a1'],
    subtopico: 'Determinante e gráfico de função cúbica',
    dificuldade: 'dificil',
    imagem: 'imagens/estudo/unicamp-2027-017.webp',
    legendaAcima: 'Considere a matriz A(<i>x</i>) dada por',
    enunciado: `
      <p>em que <i>x</i> é um número real. Você que é fã do Vestibular Unicamp deve se lembrar dela: foi assunto da questão 7 da prova de matemática da segunda fase do Vestibular Unicamp de 1987.</p>
      <p>A opção que melhor representa o gráfico de <i>y</i> = det(<i>A</i>(<i>x</i>)) é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '<img src="imagens/estudo/unicamp-2027-017-a.webp" alt="Alternativa A: cúbica que vem de baixo, sobe a um máximo, desce a um mínimo e sobe">' },
      { letra: 'B', texto: '<img src="imagens/estudo/unicamp-2027-017-b.webp" alt="Alternativa B: cúbica que vem de cima, desce a um mínimo, sobe a um máximo e desce">', explicacao: 'Correta! Pela regra de Sarrus, det(A(x)) = (2 − x)[(−3 − x)(1 − x) − 27] − 1·[−7(1 − x)] − 3·(−21) = −x³ + 27x + 10. O coeficiente de x³ é negativo (a curva vem de cima e termina embaixo), y(0) = 10 &gt; 0 e há três raízes reais (x = −5 e x = (5 ± √33)/2): é o gráfico B.' },
      { letra: 'C', texto: '<img src="imagens/estudo/unicamp-2027-017-c.webp" alt="Alternativa C: curva com dois máximos e um mínimo, os dois extremos para baixo">' },
      { letra: 'D', texto: '<img src="imagens/estudo/unicamp-2027-017-d.webp" alt="Alternativa D: curva com dois mínimos e um máximo, os dois extremos para cima">' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2027-018',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 18,
    disciplina: 'Matemática',
    conteudo: 'mat-4a1',
    subtopico: 'Relações de Girard',
    dificuldade: 'dificil',
    enunciado: `
      <p>Seja <i>p</i>(<i>x</i>) = <i>x</i><sup>3</sup> + <i>bx</i><sup>2</sup> + <i>cx</i> + 8, com <i>b</i> e <i>c</i> números reais.</p>
      <p>Sabendo que todas as soluções de <i>p</i>(<i>x</i>) = 0 são inteiras, o maior valor possível para <i>b</i> é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '6.' },
      { letra: 'B', texto: '7.' },
      { letra: 'C', texto: '10.', explicacao: 'Correta! Pelas relações de Girard, r₁·r₂·r₃ = −8 e b = −(r₁ + r₂ + r₃). Para b máximo, a soma das raízes deve ser a menor possível: com as três raízes negativas, as opções são (−1, −1, −8), soma −10; (−1, −2, −4), soma −7; (−2, −2, −2), soma −6. Logo, o maior b é 10.' },
      { letra: 'D', texto: '13.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2027-019',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 19,
    disciplina: 'Matemática',
    conteudo: 'mat-4a2',
    subtopico: 'Função seno (tábua de marés)',
    dificuldade: 'media',
    enunciado: `
      <p>A tábua de marés consiste em uma tabela com informações sobre o horário e a altura das marés altas e baixas em algumas localidades litorâneas. Essa informação é muito utilizada no turismo, na visitação de piscinas naturais, atividade melhor aproveitada quando a maré está baixa.</p>
      <p>Em um determinado dia, a tábua de maré de uma praia é modelada pela função</p>
      <p><i>A</i>(<i>t</i>) = (7/10)·sen((<i>π</i>/12)(2<i>t</i> + 3)) + 13/10,</p>
      <p>com 0 ≤ <i>t</i> ≤ 24 em que <i>A</i>(<i>t</i>) é a altura da maré em metros no tempo <i>t</i> medido em horas. Considerando essas informações, a maré estava no ponto mais baixo às</p>
    `,
    alternativas: [
      { letra: 'A', texto: '06h e 18h.' },
      { letra: 'B', texto: '06h30 e 18h30.' },
      { letra: 'C', texto: '07h e 19h.' },
      { letra: 'D', texto: '07h30 e 19h30.', explicacao: 'Correta! A altura é mínima quando o seno vale −1: (π/12)(2t + 3) = 3π/2 + 2kπ ⇒ 2t + 3 = 18 + 24k ⇒ t = 7,5 + 12k. No intervalo 0 ≤ t ≤ 24: t = 7,5 h e t = 19,5 h, ou seja, 07h30 e 19h30.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2027-020',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 20,
    disciplina: 'Matemática',
    conteudo: ['mat-3a4', 'mat-2a4'],
    subtopico: 'Soma de PG infinita (área sob exponencial)',
    dificuldade: 'media',
    imagem: ['imagens/estudo/unicamp-2027-020-1.webp', 'imagens/estudo/unicamp-2027-020-2.webp'],
    enunciado: `
      <p>Considere a região</p>
      <p><i>A</i> = {(<i>x</i>, <i>y</i>) ∈ ℝ<sup>2</sup>; <i>x</i> ≥ 0, 0 ≤ <i>y</i> ≤ <i>f</i>(<i>x</i>)}</p>
      <p>em que <i>f</i>(<i>x</i>) = 1/3<sup><i>x</i></sup>, ilustrada na figura a seguir.</p>
      <p>Considere a região B formada pela união de infinitos retângulos de base 1 e altura <i>f</i>(<i>n</i>), com <i>n</i> ∈ ℤ, <i>n</i> ≥ 0, como ilustrado na figura a seguir.</p>
      <p>A região A está contida na região B, portanto, a área da região B é uma estimativa por excesso para a área da região A.</p>
      <p>A área da região B é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '9/10.' },
      { letra: 'B', texto: '3/9.' },
      { letra: 'C', texto: '3/2.', explicacao: 'Correta! A área de B é a soma das áreas dos retângulos: 1·f(0) + 1·f(1) + 1·f(2) + … = 1 + 1/3 + 1/9 + …, uma PG infinita de razão 1/3. Soma = 1 ÷ (1 − 1/3) = 3/2.' },
      { letra: 'D', texto: '40/27.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2027-021',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 21,
    disciplina: 'Matemática',
    conteudo: ['mat-1b4', 'mat-3a4'],
    subtopico: 'Determinante, traço e PA',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2027-021.webp',
    legendaAcima: 'Considere a matriz',
    enunciado: `
      <p>em que as entradas <i>a</i>,<i>b</i>,<i>c</i>,<i>d</i> formam, nessa ordem, uma PA de razão negativa. Sabendo que o determinante de <i>M</i> é –8 e o traço de <i>M</i>, ou seja, a soma dos elementos da diagonal principal de <i>M</i>, vale –4, o valor de <i>a</i> é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '1.', explicacao: 'Correta! Com razão r: b = a + r, c = a + 2r, d = a + 3r. det = ad − bc = a(a + 3r) − (a + r)(a + 2r) = −2r² = −8 ⇒ r = −2 (razão negativa). Traço: a + d = 2a + 3r = −4 ⇒ 2a − 6 = −4 ⇒ a = 1.' },
      { letra: 'B', texto: '–1.' },
      { letra: 'C', texto: '5.' },
      { letra: 'D', texto: '–5.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2027-022',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 22,
    disciplina: 'Matemática',
    conteudo: ['mat-4b1', 'mat-2a1'],
    subtopico: 'Região do plano com módulo',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2027-022.webp',
    enunciado: `
      <p>Considere a região sombreada da figura a seguir consistindo de um quadrado com vértices nos pontos (0,0), (1,1), (-1,1) (0,2).</p>
      <p>O conjunto que descreve essa região é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '{(<i>x</i>, <i>y</i>) ∈ ℝ<sup>2</sup> : |<i>x</i>| ≥ <i>y</i> ≥ 2 − |<i>x</i>|}.' },
      { letra: 'B', texto: '{(<i>x</i>, <i>y</i>) ∈ ℝ<sup>2</sup> : |<i>x</i>| ≤ <i>y</i> ≤ 2 − |<i>x</i>|}.', explicacao: 'Correta! Os lados de baixo do quadrado estão sobre y = |x| (de (−1,1) a (0,0) e a (1,1)) e os de cima sobre y = 2 − |x| (de (−1,1) a (0,2) e a (1,1)). Os pontos da região ficam acima de y = |x| e abaixo de y = 2 − |x|: |x| ≤ y ≤ 2 − |x|.' },
      { letra: 'C', texto: '{(<i>x</i>, <i>y</i>) ∈ ℝ<sup>2</sup> : |<i>x</i>| ≥ <i>y</i> ≥ 2 + |<i>x</i>|}.' },
      { letra: 'D', texto: '{(<i>x</i>, <i>y</i>) ∈ ℝ<sup>2</sup> : |<i>x</i>| ≤ <i>y</i> ≤ 2 + |<i>x</i>|}.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2027-023',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 23,
    disciplina: 'Matemática',
    conteudo: ['mat-2a1', 'mat-2a3'],
    subtopico: 'Função inversível (injetividade da quadrática)',
    dificuldade: 'media',
    enunciado: `
      <p>Sejam A,B subconjuntos de ℝ. Considere a função f: A→B, <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> – <i>x</i> – 2, com <i>x</i> ∈ <i>A</i>. Considerando que essa função é invertível, qual das alternativas abaixo indica uma possibilidade para o conjunto A?</p>
    `,
    alternativas: [
      { letra: 'A', texto: '[0,2].' },
      { letra: 'B', texto: '[-1,2].' },
      { letra: 'C', texto: '[1,2].', explicacao: 'Correta! Para ser invertível, f precisa ser injetora em A. O vértice da parábola está em x = 1/2; a função só é injetora num intervalo que fique inteiro de um lado do vértice. Dos intervalos dados, só [1,2] não contém 1/2 (os outros contêm o vértice e repetem valores, como f(0) = f(1) = −2).' },
      { letra: 'D', texto: '[-2,1].' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2027-024',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 24,
    disciplina: 'Matemática',
    conteudo: ['mat-3b3', 'mat-1a3'],
    subtopico: 'Probabilidade e MDC',
    dificuldade: 'media',
    enunciado: `
      <p>Para praticar seus conceitos de aritmética, Lúcio sorteia, sem reposição, duas bolinhas de uma urna com bolinhas numeradas de 1 até 100 e calcula o máximo divisor comum dos números sorteados. Qual a probabilidade do máximo divisor comum ser um número ímpar?</p>
    `,
    alternativas: [
      { letra: 'A', texto: '1/ 2.' },
      { letra: 'B', texto: '50/198.' },
      { letra: 'C', texto: '100/199.' },
      { letra: 'D', texto: '149/198.', explicacao: 'Correta! O MDC é par só quando os dois números são pares. P(dois pares) = (50/100)·(49/99) = 49/198. Logo, P(MDC ímpar) = 1 − 49/198 = 149/198.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2027-025',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 25,
    disciplina: 'Matemática',
    conteudo: ['mat-4b1', 'mat-2a1'],
    subtopico: 'Área de triângulo e desigualdades',
    dificuldade: 'dificil',
    enunciado: `
      <p>Seja <i>f</i> : ℝ→ℝ uma função com a propriedade de que <i>x</i><sup>3</sup> &lt; <i>f</i>(<i>x</i>) &lt; <i>x</i><sup>2</sup> para todo 0 &lt; <i>x</i> &lt; 1.</p>
      <p>Considere o triângulo de vértices <i>P</i> = (0,0), <i>Q</i> = (1/2, <i>f</i>(1/2)) e <i>R</i> = (1/2,1/2).</p>
      <p>A respeito da área A desse triângulo, é correto afirmar que</p>
    `,
    alternativas: [
      { letra: 'A', texto: '0 &lt; <i>A</i> &lt; 3/128.' },
      { letra: 'B', texto: '3/128 &lt; <i>A</i> &lt; 1/32.' },
      { letra: 'C', texto: '1/32 &lt; <i>A</i> &lt; 1/16.' },
      { letra: 'D', texto: '1/16 &lt; <i>A</i> &lt; 3/32.', explicacao: 'Correta! Q e R estão na reta x = 1/2: a base QR = 1/2 − f(1/2) e a altura (distância de P a essa reta) é 1/2, então A = QR/4. Como 1/8 &lt; f(1/2) &lt; 1/4, temos 1/4 &lt; QR &lt; 3/8 e, portanto, 1/16 &lt; A &lt; 3/32.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2027-026',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 26,
    disciplina: 'Matemática',
    conteudo: ['mat-2b4', 'mat-4a2'],
    subtopico: 'Circunferência, ângulos e lei dos cossenos',
    dificuldade: 'dificil',
    imagem: 'imagens/estudo/unicamp-2027-026.webp',
    enunciado: `
      <p>A figura a seguir, que também apareceu no Vestibular Unicamp 1987, exibe uma circunferência de centro O e raio r. Considere que o segmento BC mede r e o ângulo ABO mede 15 graus. Os pontos P, A, C estão na circunferência, e os pontos P, O, B e A, C, B são colineares.</p>
      <p>Se r=1, determine o comprimento do segmento AP.</p>
    `,
    alternativas: [
      { letra: 'A', texto: '√(2 − √2).', explicacao: 'Correta! Como OC = BC = r, o triângulo OCB é isósceles: ∠COB = 15° e o ângulo externo ∠OCA = 30°. O triângulo OAC é isósceles (OA = OC): ∠OAC = 30°. No triângulo OAB, o ângulo externo em O é ∠AOP = 30° + 15° = 45°. Pela lei dos cossenos em AOP: AP² = 1 + 1 − 2·cos 45° = 2 − √2, logo AP = √(2 − √2).' },
      { letra: 'B', texto: '√(2 + √2).' },
      { letra: 'C', texto: '√(4 − √2).' },
      { letra: 'D', texto: '√(4 + √2).' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2027-027',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 27,
    disciplina: 'Português',
    conteudo: 'por-1a5',
    subtopico: 'Polissemia (fantasia)',
    dificuldade: 'media',
    imagem: ['imagens/estudo/unicamp-2027-027-1.webp', 'imagens/estudo/unicamp-2027-027-2.webp'],
    legendaAcima: ['<b>Texto 1</b>', '<b>Texto 2</b>'],
    legenda: [
      '(Print de tela do vídeo postado no Instragram pelo perfil @MidiaNinja. Disponível em: https://www.instagram.com/reels/DUvSK63EfIM/. Acesso em 03/05/2026.)',
      '(Imagem de Daniel Pxeira postada no Instagram em seu perfil @danielpxeira. Disponível em https://www.instagram.com/p/DUwX8xGklCZ/. Acesso em 03/05/2026.)',
    ],
    textoApoio: `
      <p>Os textos 1 e 2 foram construídos a partir de uma imagem que viralizou no carnaval de 2026: um folião nas ruas de Salvador com a frase “Não mate sua mina” escrita nas costas. O texto 3 apresenta significados possíveis para um item lexical do português.</p>
    `,
    enunciado: `
      <p><b>Texto 3</b></p>
      <p><b>fantasia</b> <i>substantivo feminino</i>. <b>1</b> capacidade de criar pela imaginação <b>2</b> obra criada pela imaginação <b>3</b> coisa puramente ideal ou ficcional <b>4</b> traje que representa objetos, figuras históricas, imaginárias etc.</p>
      <small>(Adaptado de <i>Pequeno Dicionário Houaiss da Língua Portuguesa</i>. São Paulo: Moderna, 2015, p. 443.)</small>
      <p>Tendo em vista os significados para <i>fantasia</i> indicados no texto 3, podemos afirmar que o uso dessa palavra no texto 2 se deve ao fato de o folião do texto 1 ter</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'demonstrado a capacidade de criar, no plano das ideias, uma situação utópica.' },
      { letra: 'B', texto: 'elaborado uma obra de carnaval a partir de um clamor subjetivo e imaginário.' },
      { letra: 'C', texto: 'idealizado um elemento ficcional a partir de um apelo emotivo.' },
      { letra: 'D', texto: 'trajado, em termos figurativos, algo que se apresenta como um imperativo moral.', explicacao: 'Correta! “Fantasia nota 10” usa o sentido 4 (traje de carnaval), mas de modo figurado: o folião não vestiu uma roupa, e sim “vestiu” a frase “Não mate sua mina” escrita no corpo — uma ordem (imperativo) de valor moral contra o feminicídio.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2027-028',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 28,
    disciplina: 'Literatura',
    subtopico: 'Interpretação de Texto Literário',
    dificuldade: 'facil',
    textoApoio: TEXTO_UNICAMP_2027_CARNAVAL,
    enunciado: `
      <p>Em <i>Sonho de um carnaval</i>, a associação entre carnaval e desengano se deve</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'à busca por confraternização como parte da festa.' },
      { letra: 'B', texto: 'ao retorno à realidade com o término da festa.', explicacao: 'Correta! O refrão “Quarta-feira sempre desce o pano” mostra que a ilusão do carnaval (ser “rei”, deixar a dor em casa, o amor da morena) acaba na Quarta-feira de Cinzas: o desengano é a volta à realidade quando a festa termina.' },
      { letra: 'C', texto: 'à vivência de um grande amor durante a festa.' },
      { letra: 'D', texto: 'a um sentimento de dor ampliado pela festa.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2027-029',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 29,
    disciplina: 'Português',
    conteudo: 'por-2b1',
    subtopico: 'Modos e tempos verbais (subjuntivo)',
    dificuldade: 'media',
    textoApoio: TEXTO_UNICAMP_2027_CARNAVAL,
    enunciado: `
      <p>Poucos pensadores influenciaram tão decisivamente a reflexão sobre o tempo quanto Aurélio Agostinho de Hipona (354-430). Nascido no norte da África, Agostinho é autor das <i>Confissões</i>, obra na qual formula uma pergunta que atravessa séculos: “O que é, pois, o tempo?”.</p>
      <p>O filósofo rompe com a ideia do tempo como algo puramente externo, mensurável com um relógio. Para ele, o tempo se dá na interioridade: o passado vive na memória, o presente na atenção, e o futuro na expectativa. Não são três tempos objetivos, mas três modos de experiência.</p>
      <p>É por isso que os tempos verbais não funcionam como etiquetas rígidas. Mais do que marcar quando algo ocorre, a língua indica como o falante se posiciona diante do tempo, isto é, no fluxo entre o que já foi, o que é e o que ainda não é.</p>
      <small>(Adaptado de MÓDOLO, M. e BRAGA, H. O tempo que se diz: entre Santo Agostinho e Benveniste. <i>Jornal da USP</i>, 7/5/2026.)</small>
      <p>Com base no que afirma o texto de Módolo e Braga, as formas verbais empregadas na canção <i>Sonho de um carnaval</i> que servem para indicar uma experiência de expectativa por aquilo “que ainda não é" estão no</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'pretérito perfeito do indicativo (<i>brinquei</i>, <i>gritei</i> e <i>fui</i>, no verso 3).' },
      { letra: 'B', texto: 'gerúndio (<i>esperando</i>, no verso 2, e <i>sonhando</i>, no verso 6).' },
      { letra: 'C', texto: 'presente do indicativo (<i>desce</i>, nos versos 4 e 8, e <i>lembra</i>, no verso 7).' },
      { letra: 'D', texto: 'presente do subjuntivo (<i>viva</i>, <i>possa</i> e <i>saiba</i>, nos versos 12, 13 e 14, respectivamente).', explicacao: 'Correta! O subjuntivo é o modo do desejo e da hipótese. Em “Que gente longe viva na lembrança / Que gente triste possa entrar na dança / Que gente grande saiba ser criança”, o eu lírico exprime esperança por algo que ainda não aconteceu — a expectativa de que fala o texto.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2027-030',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 30,
    disciplina: 'Português',
    conteudo: ['por-4b6', 'por-1a5'],
    subtopico: 'Criação vocabular (louvor-prisão)',
    dificuldade: 'facil',
    enunciado: `
      <p>Fui ver uma peça no teatro Cultura Artística: <i>Para Sempre</i>, de Maria Adelaide Amaral. No palco, um casal homossexual: Max (professor universitário vivido por Paulo Autran) e Tony (bancário interpretado por Celso Frateschi). Representavam uma relação assimétrica em idade, renda e cultura. Em determinado momento, o jovem diz que não se sentia atacado quando na periferia (onde vivia sua mãe) uma vizinha o chamava de “veado”. Ele se ofendia, realmente, quando algum amigo intelectual e sofisticado do marido elogiava “o café que ele passava”. Incrível sutileza de Maria Adelaide. O ataque direto e virulento da periferia era algo possível de ser respondido: pertencia a um código binário da comunicação. O elogio sutil com uma etiqueta de gênero (“você é o de menor importância, o doméstico, o que faz café”) era mais agressivo. “Você passa bem café” é um louvor-prisão, um rebaixamento naquele universo onde o valor era dado pelos livros lidos/escritos. “Veado” estabelece um código de “eu” e “anti-eu”. “Passador de café hábil” empurra para um nada inferior na percepção de Tony. Ao primeiro insulto, se responde com algo defensivo; ao segundo, talvez, só possamos sorrir de forma amarela. Sutileza psicológica e textual: agredir com um elogio, preconceito com açúcar, ataque com punho de renda...</p>
      <small>(Adaptado de KARNAL, L. Esperança no bom-senso. Cultura &amp; Comportamento. <i>O Estado de S. Paulo</i>, 15/3/2026, C16.)</small>
      <p>No texto, <i>louvor-prisão</i> consiste numa criação vocabular para designar uma</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'postura discriminatória disfarçada de enaltecimento.', explicacao: 'Correta! O composto junta “louvor” (elogio) e “prisão” (aprisionamento num papel inferior): o elogio “você passa bem café” é, na verdade, um rebaixamento com etiqueta de gênero — “agredir com um elogio, preconceito com açúcar”.' },
      { letra: 'B', texto: 'ofensa explícita motivada por preconceito.' },
      { letra: 'C', texto: 'expressão de empatia frente a uma agressão verbal.' },
      { letra: 'D', texto: 'conduta defensiva diante de um falso elogio.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2027-031',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 31,
    disciplina: 'Português',
    conteudo: 'por-3a6',
    subtopico: 'Comparação entre textos argumentativos',
    dificuldade: 'media',
    textoApoio: TEXTO_UNICAMP_2027_TRABALHO,
    enunciado: `
      <p>Os dois textos apresentam em comum o fato de</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'criticarem aspectos culturais e econômicos ao descreverem uma situação.' },
      { letra: 'B', texto: 'relativizarem a validade de um argumento divulgado pela mídia.' },
      { letra: 'C', texto: 'recorrerem a informações estatísticas na defesa de um ponto de vista.', explicacao: 'Correta! O texto 1 usa as médias de horas trabalhadas (42,7 h × 40,1 h) do banco de Gethin e Saez; o texto 2 usa os mesmos dados, especificações econométricas e microdados da World Values Survey. Ambos se apoiam em estatística, embora cheguem a conclusões opostas.' },
      { letra: 'D', texto: 'apresentarem divergências entre especialistas sobre o tema abordado.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2027-032',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 32,
    disciplina: 'Português',
    conteudo: 'por-3a6',
    subtopico: 'Relação entre argumentos de dois textos',
    dificuldade: 'facil',
    textoApoio: TEXTO_UNICAMP_2027_TRABALHO,
    enunciado: `
      <p>A metodologia reportada no texto 2 permite</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'complementar os resultados citados pelo texto 1.' },
      { letra: 'B', texto: 'reverter a conclusão à qual chega o texto 1.', explicacao: 'Correta! Ao incluir controles institucionais, o texto 2 mostra que o Brasil passa a trabalhar mais do que o esperado e rejeita a hipótese da “preferência cultural por lazer” — o oposto da conclusão do texto 1.' },
      { letra: 'C', texto: 'invalidar o banco de dados mencionado no texto 1.' },
      { letra: 'D', texto: 'corroborar a hipótese defendida pelo texto 1.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2027-033',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 33,
    disciplina: 'Literatura',
    subtopico: 'Interpretação de Texto Literário',
    obra: 'memorias-postumas',
    dificuldade: 'facil',
    enunciado: `
      <p>“Prudêncio, um moleque de casa, era o meu cavalo de todos os dias; punha as mãos no chão, recebia um cordel nos queixos, à guisa de freio, eu trepava-lhe ao dorso, com uma varinha na mão, fustigava-o, dava mil voltas a um e outro lado, e ele obedecia — algumas vezes gemendo — mas obedecia sem dizer palavra, ou, quando muito, soltava um ‘ai, nhonhô!’ ao que eu retorquia: ‘Cala a boca, besta!’”</p>
      <small>(ASSIS, M. de. O menino é o pai do homem. <i>Memórias póstumas de Brás Cubas</i>. Campinas; SP: Editora da UNICAMP, 2026, p. 87.)</small>
      <p>A partir da leitura de <i>Memórias Póstumas de Brás Cubas</i> e considerando o ponto de vista do narrador desse romance, a representação das relações sociais no trecho permite inferir uma</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'atenuação das relações hierárquicas, pois essas aparecem marcadas por interação lúdica entre nhonhô e seu escravizado.' },
      { letra: 'B', texto: 'desnaturalização das relações hierárquicas, pois o poder é exercido por uma criança, o que enfraquece o quadro social da época.' },
      { letra: 'C', texto: 'caracterização das relações hierárquicas, pois o poder senhorial se exerce sobre os subalternizados.', explicacao: 'Correta! O menino Brás, filho de senhor, monta, açoita e insulta Prudêncio, menino escravizado que obedece sem dizer palavra: o trecho caracteriza a hierarquia escravista, com o poder senhorial exercido sobre o subalterno desde a infância — narrado com a naturalidade cínica do narrador-defunto.' },
      { letra: 'D', texto: 'inversão das relações hierárquicas, pois o lamento de Prudêncio indica uma forma de resistência.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2027-035',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 35,
    disciplina: 'Literatura',
    subtopico: 'Interpretação de Texto Literário',
    dificuldade: 'media',
    enunciado: `
      <p>Leia o poema de José Paulo Paes a seguir:</p>
      <p><b>À Bengala</b><br>
      Contigo me faço<br>
      Pastor do rebanho<br>
      De meus próprios passos.</p>
      <small>(PAES, J. P. <i>Prosas seguidas de Odes Mínimas</i>. São Paulo: Companhia das Letras, 1992, p. 61.)</small>
      <p>No poema, a palavra e o objeto bengala, com quem dialoga o eu-lírico,</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'indicam apoio material como extensão da imaginação, fantasia consequente da dificuldade de comparação entre o rebanho e os passos do eu-lírico.' },
      { letra: 'B', texto: 'exprimem apoio psicológico como extensão do trauma, imagem recuperada pela associação entre os passos do rebanho e os do eu-lírico.' },
      { letra: 'C', texto: 'expressam o protagonismo daquele que conduz, condição recuperada pela aproximação semântica entre as palavras <i>bengala</i> e <i>cajado</i>.', explicacao: 'Correta! A bengala lembra o cajado do pastor: com ela, o eu lírico se torna “pastor do rebanho / de meus próprios passos”, isto é, quem conduz a si mesmo. O objeto de apoio vira símbolo de protagonismo, não de fragilidade.' },
      { letra: 'D', texto: 'invocam a fragilidade daquele que lamenta, dissolução sintática criada pela substituição da palavra <i>cajado</i> pela palavra <i>bengala</i>.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2027-042',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 42,
    disciplina: 'Biologia',
    conteudo: 'bio-1a3',
    subtopico: 'Transcrição',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/unicamp-2027-042.webp',
    legenda: '(Disponível em https://www.facebook.com/CurtirPiadasNerds/. Acesso em 31/03/2026.)',
    textoApoio: `
      <p>Compreender os mecanismos para a produção de proteínas é essencial para relacionar a expressão gênica ao funcionamento celular.</p>
    `,
    enunciado: `
      <p>É correto afirmar que a tirinha retrata o processo de</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'transcrição, que ocorre no núcleo. O DNA serve de molde para a síntese de uma fita de RNAm com bases nitrogenadas complementares, que transporta as informações para o citoplasma.', explicacao: 'Correta! A tirinha mostra o DNA servindo de molde para a fita de RNA: é a transcrição, que nos eucariontes ocorre no núcleo. O RNAm formado, com bases complementares às do DNA, leva a informação ao citoplasma, onde será traduzido nos ribossomos.' },
      { letra: 'B', texto: 'tradução, que ocorre no ribossomo. O RNAm serve de molde para a síntese de uma fita de RNAt contendo novas bases nitrogenadas, que corresponderá à sequência de aminoácidos da proteína.' },
      { letra: 'C', texto: 'transcrição, que ocorre no ribossomo. O RNAt serve de molde para a síntese de uma fita de RNAm com bases nitrogenadas complementares, que corresponderá à sequência de aminoácidos da proteína.' },
      { letra: 'D', texto: 'tradução, que ocorre no núcleo. O DNA serve de molde para a síntese de uma fita de RNAt contendo novas bases nitrogenadas, que transporta as informações para o ribossomo.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2027-043',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 43,
    disciplina: 'Biologia',
    conteudo: 'bio-1a5',
    subtopico: 'Seleção natural e duplicação gênica',
    dificuldade: 'media',
    enunciado: `
      <p>Um estudo de sequenciamento genético revelou como os genes responsáveis pelas toxinas do veneno da jararaca-ilhoa evoluíram. Essa serpente endêmica da Ilha de Queimada Grande, no litoral de São Paulo, se diferenciou de suas congêneres continentais há cerca de 100 mil anos. Além das características morfológicas, o hábito alimentar também difere quando se comparam as espécies do continente e da ilha. Pesquisadores descobriram que o veneno da jararaca-ilhoa é mais letal para as aves, sua principal fonte de alimento. Isso se deve a modificações genéticas, tais como duplicação de genes. Os resultados indicam ainda que as principais toxinas do veneno da jararaca-ilhoa sofreram seleção positiva de um ponto de vista evolutivo.</p>
      <small>(Adaptado de NACHTIGALL, P. G. e colaboradores. <i>Genome Biology and Evolution</i>, Oxford, v.18, n.1, jan. 2026, evaf243. Acesso em 17/04/2026.)</small>
      <p>A partir das informações apresentadas no texto, assinale a alternativa correta.</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'As modificações no veneno da jararaca-ilhoa indicam adaptação à principal presa, decorrente de fluxo gênico causado pela seleção natural.' },
      { letra: 'B', texto: 'A duplicação gênica é um exemplo de mutação que motivou a especiação e levou ao surgimento da jararaca-ilhoa de forma súbita na ilha.' },
      { letra: 'C', texto: 'A variante duplicada do gene do veneno aumentou a sobrevivência e/ou reprodução das jararacas portadoras, tornando-se mais comum com o tempo.', explicacao: 'Correta! “Seleção positiva” significa que a variante (aqui, a duplicação de genes de toxinas, que torna o veneno mais letal para as aves) dava vantagem de sobrevivência e reprodução aos portadores, e por isso aumentou de frequência na população ao longo das gerações.' },
      { letra: 'D', texto: 'O isolamento na ilha levou à especiação e ao surgimento da jararaca-ilhoa, envolvendo eventos de deriva genética que causaram a duplicação gênica.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2027-044',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 44,
    disciplina: 'Biologia',
    conteudo: ['bio-3a5', 'bio-3a6', 'bio-2b8'],
    subtopico: 'Evolução do sistema nervoso e potencial de ação',
    dificuldade: 'media',
    enunciado: `
      <p>Estrelas-do-mar, águas-vivas, ouriços e anêmonas não possuem cérebros. Entretanto, eles podem capturar presas, sentir perigo e reagir ao ambiente. Redes nervosas difusas são capazes de integrar estímulos sensoriais e gerar respostas motoras organizadas, incluindo alimentação e natação, mesmo na ausência de um sistema nervoso centralizado.</p>
      <small>(Can brainless animals think?. 2025. Disponível em https://www.livescience.com/animals/can-brainless-animals-think. Acesso em 29/03/2026.)</small>
      <p>Assinale a alternativa que preenche corretamente as lacunas no excerto a seguir.</p>
      <p>Nos (i)__________, o surgimento de uma rede nervosa difusa permitiu respostas rápidas de retração e movimentos rítmicos. No entanto é nos (ii)__________ que surgem o cordão nervoso longitudinal e o agrupamento de células nervosas, chamado de gânglio na região anterior do corpo. Para o adequado funcionamento integrado do sistema nervoso, os potenciais de ação resultam de uma série de mudanças rápidas na voltagem através (iii)__________ com a entrada de íons de (iv)__________ e, posteriormente, a saída de íons de (v)__________, retornando o gradiente eletroquímico ao estado de repouso.</p>
    `,
    alternativas: [
      { letra: 'A', texto: '(i) equinodermos; (ii) cnidários; (iii) do envoltório nuclear; (iv) sódio; (v) potássio.' },
      { letra: 'B', texto: '(i) cnidários; (ii) platelmintos; (iii) da membrana plasmática; (iv) sódio; (v) potássio.', explicacao: 'Correta! A rede nervosa difusa surge nos cnidários (águas-vivas, anêmonas); os platelmintos são os primeiros com cordões nervosos longitudinais e gânglios cerebrais (cefalização). O potencial de ação ocorre na membrana plasmática: a entrada de Na<sup>+</sup> despolariza e a saída de K<sup>+</sup> repolariza o neurônio.' },
      { letra: 'C', texto: '(i) equinodermos; (ii) platelmintos; (iii) da membrana plasmática; (iv) potássio; (v) sódio.' },
      { letra: 'D', texto: '(i) cnidários; (ii) equinodermos; (III) do envoltório nuclear; (iv) potássio; (v) sódio.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2027-045',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 45,
    disciplina: 'Biologia',
    conteudo: 'bio-3a3',
    subtopico: 'Tropismos e auxina',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2027-045.webp',
    legenda: '(Elaboração: Comvest, 2026.)',
    enunciado: `
      <p>Em geral, as plantas são consideradas organismos sésseis, que não se movimentam. Movimentar-se, todavia, significa ir de um ponto a outro no espaço. Partindo dessa definição, é possível observar que as plantas estão em constante movimento quando consideramos a expansão do sistema radicular ou mesmo o crescimento dos ramos. Os tropismos são movimentos associados ao balanço hormonal em plantas, sendo orientados por estímulos, como a luz e a gravidade.</p>
      <p>A figura ao lado representa uma planta em crescimento e as seis setas indicam posições no corpo vegetal, onde ocorrem alterações nos níveis de hormônios vegetais.</p>
      <p>Considerando o texto e a figura, é correto afirmar que</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'o fototropismo positivo ocorre no meristema apical indicado na seta 1, sendo ocasionado pelo aumento da concentração de auxina.' },
      { letra: 'B', texto: 'o geotropismo positivo ocorre no meristema radicular na posição da seta 6, sendo ocasionado pelo aumento da concentração de citocinina.' },
      { letra: 'C', texto: 'o fototropismo positivo ocorre na parte aérea da planta, havendo maior concentração de auxina na posição da seta 2 do que na indicada pela seta 3.', explicacao: 'Correta! O caule cresce em direção à luz (fototropismo positivo) porque a auxina migra para o lado sombreado (seta 2), onde estimula o alongamento das células; o lado iluminado (seta 3) cresce menos, e o caule se curva para a luz.' },
      { letra: 'D', texto: 'o geotropismo positivo ocorre no sistema radicular, havendo maior concentração de citocinina na posição da seta 4 do que na indicada pela seta 5.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2027-046',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 46,
    disciplina: 'Biologia',
    conteudo: 'bio-4b1',
    subtopico: 'Pirâmides ecológicas',
    dificuldade: 'dificil',
    imagem: 'imagens/estudo/unicamp-2027-046.webp',
    legenda: '(Elaboração: Comvest, 2026.)',
    enunciado: `
      <p>As relações entre organismos de uma teia alimentar podem ser representadas em pirâmides, que, por sua vez, podem ser construídas levando em consideração o número de organismos, a biomassa ou o fluxo de energia entre os níveis tróficos. A figura a seguir representa as relações ecológicas em uma teia alimentar, em dois tempos (t<sub>1</sub> e t<sub>2</sub>).</p>
      <p>Considerando essas informações, é correto afirmar que a figura é composta por pirâmides de</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'fluxo de energia e sugere um desequilíbrio ecológico que reduziu a eficiência energética dos consumidores secundários e terciários em t<sub>2</sub>.' },
      { letra: 'B', texto: 'biomassa e indica que os produtores e consumidores primários foram impactados por um desequilíbrio ecológico, com a teia alimentar ainda se reestruturando em t<sub>2</sub>.', explicacao: 'Correta! Em t<sub>2</sub> a base (produtores e consumidores primários) ficou menor que os níveis de cima — pirâmide invertida, o que é possível para biomassa, mas nunca para energia (que sempre diminui ao subir os níveis). A redução da base indica um desequilíbrio que atingiu produtores e consumidores primários, com a teia ainda em reestruturação.' },
      { letra: 'C', texto: 'fluxo de energia e sugere uma invasão ecológica por um consumidor primário, causando desequilíbrio ecológico em t<sub>2</sub>.' },
      { letra: 'D', texto: 'biomassa e indica uma reestruturação da teia alimentar causada por limitação ambiental que impactou os produtores primários, sendo o equilíbrio ecológico restabelecido em t<sub>2</sub>.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2027-047',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 47,
    disciplina: 'Biologia',
    conteudo: ['bio-2a2', 'bio-3b3'],
    subtopico: 'HIV e AIDS',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2027-047.webp',
    enunciado: `
      <p>A Organização das Nações Unidas (ONU) esclarece que não existe evidência científica ou relação biológica que associe a imunização completa contra Covid-19 com a AIDS.</p>
      <small>(<i>Vacina para COVID-19 não causa AIDS</i>. 2021. Disponível em https://brasil.un.org/pt-br/153124-vacina-para-covid-19-não-causa-aids-reforça-o-programa-conjunto-da-onu-sobre-hivaids. Acesso em 06/04/2026.)</small>
      <p>É correto afirmar que</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'a AIDS é causada pela infecção com HIV. Como o sistema imunológico elimina esse vírus naturalmente, a maioria das pessoas infectadas não desenvolve a doença.' },
      { letra: 'B', texto: 'o HIV é o agente causador da imunodeficiência. Como não existe cura, os medicamentos não previnem que a pessoa infectada transmita o vírus e que doenças oportunistas causem a AIDS.' },
      { letra: 'C', texto: 'o HIV é um vírus que permanece no organismo por toda a vida após a infecção. Como esse vírus ataca o sistema imunológico, a pessoa torna-se suscetível às doenças que causam a AIDS.' },
      { letra: 'D', texto: 'a AIDS é o estágio mais grave da infecção pelo HIV. Como o uso de medicamentos pode tornar a carga viral indetectável na pessoa, existe a prevenção da evolução para a doença.', explicacao: 'Correta! A AIDS é a fase avançada da infecção pelo HIV, quando a queda dos linfócitos T CD4 abre caminho para doenças oportunistas. Os antirretrovirais não curam, mas podem deixar a carga viral indetectável, o que impede a evolução para a AIDS (e a transmissão).' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2027-048',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 48,
    disciplina: 'Biologia',
    conteudo: 'bio-3b8',
    subtopico: 'Medula espinhal: substância branca e cinzenta',
    dificuldade: 'facil',
    enunciado: `
      <p>A medula espinhal é um cordão cilíndrico de tecido nervoso, constituinte do sistema nervoso central, que conecta o encéfalo ao corpo. Lesões na medula espinhal podem resultar em perda parcial ou total das funções motoras e sensoriais abaixo do local da lesão, ao romper os axônios dos neurônios ali presentes. Recentemente, muito foi discutido sobre resultados oriundos da aplicação de compostos diretamente à medula espinhal, visando favorecer o crescimento de axônios e propiciar a recuperação dos movimentos em pacientes com lesão medular.</p>
      <p>Na medula espinhal, os axônios concentram-se na</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'substância cinzenta, localizada na região periférica, constituída por fibras nervosas que conduzem impulsos ascendentes ao encéfalo e descendentes gerados pelo encéfalo.' },
      { letra: 'B', texto: 'substância branca, localizada na região central, onde se agrupam os corpos celulares dos neurônios motores na recepção de impulsos do encéfalo.' },
      { letra: 'C', texto: 'substância branca, localizada na região periférica, constituída por fibras nervosas que conduzem impulsos ascendentes ao encéfalo e descendentes gerados pelo encéfalo.', explicacao: 'Correta! Na medula, a disposição é inversa à do encéfalo: a substância cinzenta (corpos celulares) fica no centro, em forma de H, e a substância branca (axônios mielinizados) fica na periferia, formando os feixes ascendentes (sensitivos) e descendentes (motores).' },
      { letra: 'D', texto: 'substância cinzenta, localizada na região central, onde se agrupam os corpos celulares dos neurônios motores na recepção de impulsos do encéfalo.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2027-049',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 49,
    disciplina: 'Geografia',
    conteudo: 'geo-4u5',
    subtopico: 'Globalização em Milton Santos',
    dificuldade: 'media',
    enunciado: `
      <p>Em 2026, é celebrado o centenário de nascimento de Milton Santos. Sua obra renovou a ciência geográfica e ganhou reconhecimento nacional e internacional por, entre outros fatores, interpretar a globalização e os usos dos territórios. Em sua obra <b><i>Por uma outra globalização</i></b>, publicada em 2000, o entendimento da complexidade do mundo contemporâneo deve levar em conta ao menos três dimensões. A primeira seria a do mundo tal como nos fazem vê-lo, a globalização como fábula sustentada em mitos e fantasias que propagam, por exemplo, que o mundo está ao alcance das mãos de todos. A segunda seria a do mundo tal como ele é: a globalização como perversidade, pois apoiada na tirania do dinheiro e da informação que imprime uma nova onda de modernização seletiva e impulsiona a desigualdade. A terceira seria a do mundo como ele pode ser: uma outra globalização, colocada como tendência, apreendida através da presença de uma humanidade misturada, concentrada em grandes cidades e fomentadora de uma cultura popular que atua como contra racionalidade a ordem vigente.</p>
      <small>(Adaptado de SANTOS, M. <i>Por uma outra globalização. Do pensamento único à consciência universal</i>. Rio de Janeiro: Record, 2000; p. 20.)</small>
      <p>A partir da leitura do texto e da concepção de globalização formulada por Milton Santos, é correto afirmar que o mundo concreto constitui uma realidade complexa, na qual</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'a globalização é uma realidade, uma vez que as técnicas da informação conectam os lugares numa aldeia global, reduzindo as desigualdades a partir do consumo dos bens materiais e imateriais disponíveis na internet.' },
      { letra: 'B', texto: 'as três dimensões estão dissociadas, uma vez que a terceira dimensão refere-se à projeção de um futuro possível para a urbanização planetária, resultando em uma dimensão da globalização como fábula.' },
      { letra: 'C', texto: 'a globalização é uma perversidade que homogeneizou o mundo nas últimas décadas, afetando especialmente as grandes cidades periféricas imersas que estão nas contingências do presente marcado pela escassez.' },
      { letra: 'D', texto: 'as três dimensões formam uma unidade, designando que o mundo é uma totalidade aberta, em movimento, mediante transformações que já estão concretamente em curso nas grandes cidades.', explicacao: 'Correta! Para Milton Santos, fábula, perversidade e possibilidade são faces de um mesmo mundo, que é uma totalidade em movimento; a “outra globalização” já aparece como tendência concreta nas grandes cidades, com sua humanidade misturada e cultura popular.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2027-050',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 50,
    disciplina: 'Geografia',
    conteudo: ['geo-c3', 'geo-4u5'],
    subtopico: 'Geopolítica da inteligência artificial',
    dificuldade: 'media',
    enunciado: `
      <p>O mundo vive um estado de forte tensão geopolítica, com a escalada de conflitos entre as Nações e a eclosão de guerras. Nesse contexto, recentemente, a China se manifestou sobre a militarização desenfreada da inteligência artificial (IA) voltada a influenciar decisões de guerra, deixando que algoritmos tenham decisão de vida e morte sobre seres humanos. Segundo o porta-voz do governo chinês, isto poderia mergulhar o mundo na distopia retratada no filme "O Exterminador do Futuro", onde as máquinas tomam o poder. O alerta se dirigia particularmente aos Estados Unidos, atualmente envolvidos em um intenso debate sobre as aplicações militares da Inteligência Artificial.</p>
      <small>(Adaptado de G1. “China alerta EUA para ‘apocalipse’ ao estilo ‘Exterminador do Futuro’ por uso militar da IA”. Disponível em https://g1.globo.com/mundo/noticia/2026/03/11/china-alerta-eua-para-apocalipse-ao-estilo-exterminador-do-futuro-por-uso-militar-da-ia.ghtml. Acesso em 30 jul. 2026.)</small>
      <p>Com base no texto, é correto afirmar que a geopolítica, na era da inteligência artificial, envolve o fortalecimento do poder</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'dos EUA que, ao dominarem a infraestrutura de inteligência artificial, criaram uma ordem unipolar com base num tecnopoder compartilhado com grandes empresas de tecnologia e no uso de objetos inteligentes voltados à guerra que estão sob discussão ética.' },
      { letra: 'B', texto: 'dos EUA e da China, países com economias interdependentes e concorrentes que dominam a infraestrutura de inteligência artificial e exercem hegemonia num mundo multipolar em transformação acelerada com dilemas ético e existencial candentes.', explicacao: 'Correta! EUA e China são as duas potências que lideram a IA; suas economias são ao mesmo tempo interdependentes e rivais, num mundo multipolar. O alerta chinês sobre o uso militar da IA mostra os dilemas éticos e existenciais dessa disputa.' },
      { letra: 'C', texto: 'da China, que desenvolveu sua indústria de inteligência artificial seguindo os tratados internacionais de não proliferação de armas e assumiu a liderança na construção de uma ordem mundial multipolar sob critérios éticos e não distópicos.' },
      { letra: 'D', texto: 'da China e dos EUA, pois recriaram um mundo bipolar a partir de suas economias nacionais que desenvolvem, de forma independente, inovações em sistemas de inteligência artificial, algoritmos e drones de guerra sem critérios éticos.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2027-051',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 51,
    disciplina: 'Geografia',
    conteudo: ['geo-2u2', 'geo-4u3'],
    subtopico: 'Etanol de milho no Mato Grosso',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2027-051.webp',
    legendaAcima: 'Produção de etanol por matéria-prima no estado de Mato Grosso entre 2017 e 2024 (em %)',
    legenda: '(Elaborado a partir de dados da Agência Nacional do Petróleo, Gás Natural e Biocombustíveis (ANP), Painel Dinâmico de Produtores de Etanol — Matéria-prima, período 2017–2024.)',
    enunciado: `
      <p>O setor energético tem utilizado diferentes matérias-primas de origem vegetal na produção de etanol. No caso do Brasil, a produção foi historicamente estruturada em torno da cana-de-açúcar. No entanto, nos últimos anos, o milho passou a ampliar sua participação como matéria-prima ocasionando transformações socioespaciais relevantes. É o caso do Estado do Mato Grosso, que diversifica sua produção de etanol a partir da significativa ampliação da área plantada e da produtividade de milho, conforme demonstra o gráfico a seguir.</p>
      <p>Com as transformações produtivas e socioespaciais decorrentes da expansão da produção do etanol derivado do milho, ocorre</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'adaptação da unidade produtiva cujo beneficiamento poderá ser realizado pelas usinas para ambas as matérias-primas, o que possibilita uma maior flexibilidade da produção do biocombustível.', explicacao: 'Correta! Muitas usinas passaram a ser “flex”: processam cana na safra e milho (que pode ser armazenado) na entressafra, o que aumenta a flexibilidade e o aproveitamento da estrutura industrial na produção de etanol.' },
      { letra: 'B', texto: 'aproveitamento, de maneira compatível, do sistema de armazenamento e de infraestrutura logística, porque tanto a cana quanto o milho possuem correspondência na estocagem e exigem proximidade entre a área de cultivo e a planta de fábrica processadora.' },
      { letra: 'C', texto: 'adoção de sistemas rotativos de plantio nas mesmas propriedades agrícolas e, no período de entressafra da cana, a utilização da terra para o plantio do milho, otimizando recursos financeiros e maior rentabilidade produtiva por hectare.' },
      { letra: 'D', texto: 'ampliação da absorção de pessoas nas grandes propriedades, pois, ao contrário da cana-de-açúcar, na produção de milho, o sistema de colheita ainda acontece com pouca mecanização, gerando condições de maior aproveitamento de força de trabalho no processo produtivo do cereal.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2027-052',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 52,
    disciplina: 'Geografia',
    conteudo: 'geo-3u5',
    subtopico: 'Crescimento das cidades médias',
    dificuldade: 'media',
    enunciado: `
      <p>O Censo Demográfico de 2022 revelou mudanças importantes na distribuição da população brasileira. Embora as grandes metrópoles continuem concentrando expressivo contingente populacional, muitas cidades ascenderam à condição de médio porte, consideradas como municípios não capitais com população entre 100 mil e 500 mil habitantes, apresentando crescimento significativo entre 2010 e 2022. A tabela a seguir apresenta essas mudanças.</p>
      <p>As 10 cidades brasileiras entre 100 mil e 500 mil habitantes com maiores taxas de crescimento urbano entre 2010 e 2022.</p>
      <table class="tabela-prova">
        <tr><th>Município</th><th>População em 2010</th><th>População em 2022</th><th>Taxa de Crescimento (%)</th></tr>
        <tr><td>Senador Canedo (GO)</td><td>84.443</td><td>155.635</td><td>84.31</td></tr>
        <tr><td>Fazenda Rio Grande (PR)</td><td>81.675</td><td>148.873</td><td>82.27</td></tr>
        <tr><td>Luís Eduardo Magalhães (BA)</td><td>60.105</td><td>107.909</td><td>79.53</td></tr>
        <tr><td>Parauapebas (PA)</td><td>153.908</td><td>267.836</td><td>74.02</td></tr>
        <tr><td>Sinop (MT)</td><td>113.099</td><td>196.312</td><td>73.58</td></tr>
        <tr><td>Sorriso (MT)</td><td>66.521</td><td>110.635</td><td>66.32</td></tr>
        <tr><td>Camboriú (SC)</td><td>62.361</td><td>103.074</td><td>65.29</td></tr>
        <tr><td>Palhoça (SC)</td><td>137.334</td><td>222.598</td><td>62.09</td></tr>
        <tr><td>Maricá (RJ)</td><td>127.461</td><td>197.277</td><td>54.77</td></tr>
        <tr><td>São José de Ribamar (MA)</td><td>163.045</td><td>244.579</td><td>50.01</td></tr>
      </table>
      <small>(Elaboração: Comvest, 2026, a partir de IBGE Cidades. Disponível em https://cidades.ibge.gov.br/brasil/panorama. Acesso em 07/08/2026.)</small>
      <p>Considerando a dinâmica recente da urbanização brasileira, assinale a alternativa que associa corretamente os vetores que explicam o crescimento das cidades de médio porte no país.</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'O avanço do front agrícola e mineral, de exploração de combustíveis fósseis e de atividades turísticas, combinado com o fortalecimento da dispersão metropolitana para as áreas semirrurais onde ocorre a expansão do mercado imobiliário.', explicacao: 'Correta! A tabela reúne cidades do agronegócio (Luís Eduardo Magalhães, Sinop, Sorriso), da mineração (Parauapebas), do petróleo e turismo (Maricá, Camboriú) e cidades das periferias metropolitanas (Senador Canedo, Fazenda Rio Grande, Palhoça, São José de Ribamar), onde avança o mercado imobiliário.' },
      { letra: 'B', texto: 'O crescimento da industrialização de base que atrai pessoas de distinta condição econômica para o interior do país e para áreas litorâneas portuárias concentradoras de atividades empresariais corporativas.' },
      { letra: 'C', texto: 'O enfraquecimento das redes ilegais e da violência no interior do país, onde as forças de segurança pública estão mais preparadas para combater as atividades ilícitas de gangues urbanas e de controle do crime organizado.' },
      { letra: 'D', texto: 'O reforço dos programas governamentais de moradia popular que ajudam a reduzir o déficit habitacional, com transferência de população de áreas precarizadas de elevado adensamento urbano para cidades do interior do país.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2027-053',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 53,
    disciplina: 'Geografia',
    conteudo: 'geo-4u2',
    subtopico: 'Biomas e uso da terra na Austrália',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2027-053.webp',
    legendaAcima: 'Mapa de Biomas e das zonas de intensidade do uso da terra na Austrália',
    legenda: '(Adaptado de WILLIAMS, K.; HUNTER, B.; SCHMIDT, B.; WOODWARD, E.; CRESSWELL, I. <i>Australia State of the Environment 2021: Land</i>. Canberra: Commonwealth of Australia, 2021.)',
    enunciado: `
      <p>O mapa a seguir apresenta a distribuição dos principais biomas da Austrália e sua associação com três zonas de intensidade de uso da terra. Dados sobre a vegetação nativa indicam que a Austrália ainda possui 664 milhões de hectares de vegetação nativa remanescente, equivalentes a 86,5% do continente, enquanto áreas desmatadas, vegetação não nativa e edificações correspondem a 13,2% do território.</p>
      <p>Considerando a distribuição dos desertos e das savanas em relação às zonas de intensidade de uso da terra, assinale a alternativa correta.</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'Os desertos concentram-se majoritariamente na zona relativamente natural, enquanto as savanas apresentam distribuição mais equilibrada entre zonas relativamente naturais, extensivas e intensivas.', explicacao: 'Correta! No mapa, os desertos do interior árido coincidem quase todos com a zona relativamente natural (pouco ocupada), enquanto as savanas se distribuem pelas três zonas, inclusive a extensiva (pecuária) e a intensiva.' },
      { letra: 'B', texto: 'As savanas concentram-se quase totalmente na zona relativamente natural, enquanto os desertos apresentam distribuição equilibrada entre zonas de uso extensivo, intensivo e relativamente natural.' },
      { letra: 'C', texto: 'Os desertos são os biomas mais associados à zona de uso intensivo da terra, pois ocupam o interior do continente, onde se concentram as principais atividades agrícolas e urbanas da Austrália.' },
      { letra: 'D', texto: 'As savanas estão ausentes das zonas de uso intensivo da terra, pois sua ocorrência no norte tropical impede o desenvolvimento de atividades agropecuárias e de infraestrutura.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2027-054',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 54,
    disciplina: 'Geografia',
    conteudo: ['geo-3u4', 'geo-3u1'],
    subtopico: 'Precipitação, evapotranspiração e abastecimento',
    dificuldade: 'media',
    imagem: ['imagens/estudo/unicamp-2027-054-1.webp', 'imagens/estudo/unicamp-2027-054-2.webp'],
    legendaAcima: [
      '<b>Mapa 1</b><br>Normais Climatológicas do Sudeste Brasileiro – (1991-2020) – Precipitação Acumulada (em mm) – Anual',
      '<b>Mapa 2</b><br>Normais Climatológicas do Sudeste Brasileiro – (1991-2020) – Evapotranspiração Potencial (em mm) – Anual',
    ],
    legenda: [
      '(Adaptado do mapa “Precipitação acumulada mensal e anual: 1991-2020”. Disponível em https://clima.inmet.gov.br/NormaisClimatologicas/1991-2020/precipitacao_acumulada_mensal_anual. Acesso em 15/05/2026.)',
      '(Adaptado do mapa “Evapotranspiração potencial mensal e anual: 1991-2020”. Disponível em https://clima.inmet.gov.br/NormaisClimatologicas/1991-2020/evapotranspiracao_potencial_mensal_anual. Acesso em 15/05/2026.)',
    ],
    enunciado: `
      <p>Para avaliar riscos ao abastecimento urbano em Regiões Metropolitanas (RM), onde há alta demanda hídrica, é necessário considerar, além da precipitação e da evaporação, a sazonalidade das chuvas, o armazenamento e a demanda urbana por água. Nos mapas a seguir, a precipitação acumulada anual indica a entrada de água no sistema atmosférico, enquanto a evapotranspiração potencial anual expressa a demanda atmosférica por água.</p>
      <p>Marque a alternativa correta, considerando as informações da questão e dos mapas.</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'Na RM de Belo Horizonte, os valores médios anuais de precipitação e evapotranspiração potencial estão em faixas semelhantes. Essa condição indica disponibilidade hídrica ao longo do ano e tende a reduzir a necessidade de alertas frequentes nos sistemas de abastecimento.' },
      { letra: 'B', texto: 'Na RM do Rio de Janeiro, os valores médios anuais de precipitação e evapotranspiração potencial estão em faixas distintas. Essa condição possibilita o equilíbrio hídrico ao longo do ano e assegura o atendimento regular da demanda urbana dispensando a necessidade da emissão de alertas.' },
      { letra: 'C', texto: 'Na RM de São Paulo, embora as médias anuais de precipitação sejam superiores às de evapotranspiração potencial, a sazonalidade das chuvas, o armazenamento e a elevada demanda urbana exigem monitoramento constante dos reservatórios, demandando alertas em períodos de menor disponibilidade hídrica.', explicacao: 'Correta! Na RM de São Paulo a chuva anual supera a evapotranspiração potencial, mas a média anual esconde a estação seca (inverno); como a demanda urbana é enorme e depende de reservatórios, é preciso monitorá-los e emitir alertas — como na crise hídrica de 2014-2015.' },
      { letra: 'D', texto: 'Na RM de Vitória, as médias anuais de evapotranspiração potencial são superiores às médias anuais de precipitação. Essa condição indica maior vulnerabilidade hídrica, o que aumenta a necessidade de monitoramento da sazonalidade das chuvas e dos sistemas de abastecimento.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2027-055',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 55,
    disciplina: 'Geografia',
    conteudo: 'geo-1u3',
    subtopico: 'Representação simbólica × cartográfica',
    dificuldade: 'facil',
    imagem: ['imagens/estudo/unicamp-2027-055-1.webp', 'imagens/estudo/unicamp-2027-055-2.webp'],
    legendaGeral: '(Elaboração: Comvest, 2026.)',
    enunciado: `
      <p>O logotipo da Unicamp é uma marca visual que identifica a universidade em documentos, placas, sites e materiais institucionais. No entanto, ele também permite uma leitura interessante quando comparado à imagem aérea do campus.</p>
      <p>Considerando as diferenças entre representação simbólica e representação cartográfica do campus da UNICAMP, o logotipo</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'identifica e simboliza a universidade. Embora dialogue visualmente com a organização espacial do campus, funciona como uma representação gráfica simplificada associada à identidade institucional.', explicacao: 'Correta! O logotipo lembra a forma do campus (anéis concêntricos vistos de cima), mas não é um mapa: não tem escala, orientação, legenda nem localização precisa de edifícios e vias. É um símbolo gráfico da identidade institucional.' },
      { letra: 'B', texto: 'é um mapa do campus. Embora apresente formas simplificadas, representa a disposição dos espaços universitários e permite reconhecer os principais trajetos de circulação em seu interior.' },
      { letra: 'C', texto: 'identifica e simboliza a universidade. Como reproduz a distribuição dos edifícios e das vias do campus, também funciona como uma representação cartográfica dos espaços universitários.' },
      { letra: 'D', texto: 'é um mapa do campus. Embora sintetize visualmente a forma da universidade, reproduz sua organização espacial e permite orientar os deslocamentos entre as diferentes áreas do campus.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2027-056',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 56,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2027-056.webp',
    legenda: '(NOÉ-BUSTAMANTE, L. &amp; KROGSTAD, J. M. <i>Americans’ Views of Deportations</i>. Disponível em https://www.pewresearch.org/race-and-ethnicity/2025/03/26/americans-views-of-deportations/. Acesso em 27/05/2026.)',
    enunciado: `
      <p>Os dados a seguir são de uma pesquisa feita com adultos estadunidenses em 2025.</p>
      <p>De acordo com as informações apresentadas na figura,</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'mais da metade dos entrevistados é a favor da deportação irrestrita de imigrantes em situação irregular nos Estados Unidos.' },
      { letra: 'B', texto: 'entrevistados que apoiam deportações condicionadas são mais tolerantes à permanência de imigrantes irregulares com vínculos familiares no país.', explicacao: 'Correta! Entre os que apoiam “some” deportation (51%), 97% deportariam quem cometeu crimes violentos, mas só 14% deportariam pais de crianças nascidas nos EUA e 5% quem é casado com cidadão americano: há grande tolerância com quem tem vínculos familiares no país.' },
      { letra: 'C', texto: 'aproximadamente um terço dos entrevistados é a favor da deportação de imigrantes em situação irregular desde que tenham cometido crimes brandos.' },
      { letra: 'D', texto: 'entrevistados que defendem a deportação de imigrantes irregulares que cometeram crimes violentos compõem a quase totalidade de respondentes.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2027-057',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 57,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'media',
    imagem: ['imagens/estudo/unicamp-2027-057-1.webp', 'imagens/estudo/unicamp-2027-057-2.webp'],
    enunciado: `
      <p>Leia os depoimentos de dois artistas.</p>
      <p>“Any sort of art is political. And when these people say: ‘You’re an artist, stay in your lane’, they are ignoring the fact that we historically have been shaping politics. And I think they’re afraid of us. They’re not afraid of what I’m saying to you in this microphone, though it might bother them. They’re afraid of what we do: with our films, with our music, with our poetry. Because art is revolutionary” (Wagner Moura, 2026).</p>
      <small>(Adaptado de MOURA, W. Trecho de entrevista In: YouTube da American Civil Liberties Union. Disponível em https://youtube.com/shorts/715PdYulYuA?. Acesso em 01/05/2026.)</small>
      <p>“I want to remind us that art is dangerous and remind you of the history of artists who have been murdered, imprisoned. The history of art, whether in music or written or what have you, has always been bloody because dictators and people in office and people who want to control and deceive know exactly the people who will disturb their plans and those people are artists. They’re the ones that tell the truth” (Toni Morrison, 2016).</p>
      <small>(Adaptado de MORRISON, T. Trecho de palestra In: YouTube The Pharaoh Family. Disponível em https://youtube.com/shorts/5iFBPa0A4PI?. Acesso em 01/05/2026.)</small>
      <p>Os depoimentos estão alinhados quanto à</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'natureza transgressora da arte, mas apenas Morrison cita quais tipos de pessoas têm atacado artistas.', explicacao: 'Correta! Os dois veem a arte como transgressora (“art is revolutionary”; “art is dangerous”). Só Morrison nomeia quem ataca os artistas: “dictators and people in office and people who want to control and deceive”; Moura fala apenas em “these people”.' },
      { letra: 'B', texto: 'relação entre arte e política, mas apenas Moura diz que há pessoas que se sentem mais amedrontadas pelo discurso do que pelas ações de artistas.' },
      { letra: 'C', texto: 'relação entre arte e história, mas apenas Morrison menciona a decepção de artistas por serem historicamente perseguidos.' },
      { letra: 'D', texto: 'luta contra a punição de artistas, mas apenas Moura cita o cinema como um tipo de arte engajada politicamente.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2027-058',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 58,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'facil',
    enunciado: `
      <p>O texto a seguir é parte de uma publicação acadêmica.</p>
      <p>This fruit comes from a plant originating in the Amazon region in South America. Its popular name comes from a Tupi word which alludes to its red dye. Fruits grown from that plant are small, teardrop-shaped capsules covered by a non-smooth coating and malleable bristles that give them a fuzzy appearance. When they mature, their seeds can be used for body painting and protection of the skin against insect bites.</p>
      <small>(Adaptado de FRANKLIN, V.A., et al. Aqueous extract from (…): antimicrobial, antioxidant, and healing activity. Disponível em https://pmc.ncbi.nlm.nih.gov/articles/PMC10194807/. Acesso em 13/05/2026.)</small>
      <p>As alternativas contêm ilustrações de frutos amazônicos, retiradas da obra “Floresta na Boca”. Assinale aquela que corresponde à descrição do texto.</p>
      <small>(Fonte das imagens: COELHO, B. <i>Floresta na Boca: Amazonia: pessoas, paisagens e alimentos</i>. São Paulo: Fósforo, 2025.)</small>
    `,
    alternativas: [
      { letra: 'A', texto: '<img src="imagens/estudo/unicamp-2027-058-a.webp" alt="Alternativa A: fruto alongado e sulcado, vermelho-arroxeado (cacau)">' },
      { letra: 'B', texto: '<img src="imagens/estudo/unicamp-2027-058-b.webp" alt="Alternativa B: frutos redondos alaranjados, um cortado ao meio (pupunha)">' },
      { letra: 'C', texto: '<img src="imagens/estudo/unicamp-2027-058-c.webp" alt="Alternativa C: cápsulas vermelhas em forma de gota cobertas de cerdas (urucum)">', explicacao: 'Correta! O texto descreve o urucum: nome de origem tupi ligado à tinta vermelha, cápsulas pequenas em forma de gota cobertas de cerdas maleáveis (aspecto “peludo”) e sementes usadas na pintura corporal e contra picadas de insetos — é a ilustração C.' },
      { letra: 'D', texto: '<img src="imagens/estudo/unicamp-2027-058-d.webp" alt="Alternativa D: frutos vermelhos abertos com sementes pretas e arilo branco (guaraná)">' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2027-059',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 59,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2027-059.webp',
    enunciado: `
      <p>Em 2026, a expressão <i>I’m gagged</i>, ou apenas <i>gag</i>, em português, tornou-se popular nas redes sociais. Leia a transcrição de um vídeo publicado pelo linguista Adam Aleksic sobre essa expressão.</p>
      <p>“We’re seeing an increase in the use of words and phrases like 'gag' and 'I'm gagged' and it shows how language spreads on social media: by straight white girls adopting what gay and black people are saying. That's what happened with the words 'slay', 'serve', and 'mother'. They came from the ballroom scene in the late 1980s, became viral on TikTok, and then everybody started saying it. The original appeal of these words was that they signaled in-group status, but they’ve lost that exclusivity. This is also why the word 'gagged' is now trending: it signals queer excitement (…). And it's going to be taken too, because we're in a never-ending cycle of marginalized groups creating slang as a tool of power to build community and shared identity, and then other people taking that slang to capitalize on its perceived coolness.”</p>
      <small>(Adaptado de ALEKSIC, A. In: Instagram de @etymologynerd. Disponível em https://www.tiktok.com/@etymologynerd/video/7357723597768576298. Acesso em 27/05/2026.)</small>
      <p>Em sua análise, Aleksic</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'defende o poder das redes sociais de propagar a diversidade sociolinguística.' },
      { letra: 'B', texto: 'esclarece a função de algumas gírias na demarcação de território e identidade cultural.', explicacao: 'Correta! Aleksic explica que essas gírias “signaled in-group status” e são criadas por grupos marginalizados “as a tool of power to build community and shared identity”, ou seja, servem para demarcar o grupo e sua identidade.' },
      { letra: 'C', texto: 'ilustra o direito de grupos minoritarizados de recusarem a apropriação cultural que sofrem.' },
      { letra: 'D', texto: 'descreve a busca de grupos dominantes pela exclusividade no uso de gírias específicas.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2027-060',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 60,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'media',
    enunciado: `
      <p>Leia o resumo de uma pesquisa científica.</p>
      <p>This article theorises how a new generation of artificial intelligence (AI) companion products can commodify intimacy through emotionally manipulative design and racialised and gendered aesthetics. Inspired by Lauren Berlant’s framework of cruel optimism, we develop the notion of ‘cruel companionship’ to describe the affective dynamics at play in AI companions, where users can form deep attachments that promise intimacy and connection, yet structurally foreclose the possibility of genuinely reciprocal relationships that respect users’ autonomy. These dynamics are further underpinned by AI companions’ racialised and gendered identities, which can draw on long-standing stereotypes of servitude and docility. By analysing AI companions through the lens of political economy and cultural studies, this article shows how these products reproduce exploitative platform hierarchies and repackage racial and gendered stereotypes in digital form.</p>
      <small>(Adaptado de MULDOON, J. Cruel companionship: How AI companions exploit (...). Sage Journals, 2025. Disponível em https://doi.org/10.1177/14614448251395192. Acesso em 23/03/2026.)</small>
      <p>Assinale a alternativa correta de acordo com o texto.</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'O artigo explora como assistentes de IA disseminam, no meio digital, estereótipos sobre o campo de estudos culturais e economia política.' },
      { letra: 'B', texto: 'Assistentes de IA reforçam a noção de companheirismo cruel, apesar da reciprocidade no relacionamento entre usuários e esses robôs.' },
      { letra: 'C', texto: 'A forma como assistentes de IA são desenvolvidos tem o potencial de transformar a intimidade em mercadoria.', explicacao: 'Correta! Logo na primeira frase: “AI companion products can commodify intimacy through emotionally manipulative design” — o design desses produtos pode transformar a intimidade em mercadoria.' },
      { letra: 'D', texto: 'Assistentes de IA refletem marcas da identidade de raça e gênero, combatendo, portanto, docilidade e servidão.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2027-061',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 61,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'dificil',
    enunciado: `
      <p>Leia a transcrição da apresentação ao vivo de um <i>spoken word poem</i>, da artista Ruth Elora.</p>
      <p><b>An Ode to Africa</b><br>
      I am the daughter<br>
      of a continent who’s carried the cross of the world on its back. (...)<br>
      Gold stripped from her rivers,<br>
      names erased from her maps.<br>
      Bones buried beneath railroads and sugarcane fields. (...)<br>
      Yet she breathes<br>
      she births<br>
      she dances with dust in her ankles and fire in her lungs.<br>
      A continent crowned by salt and sun. (...)<br>
      Africa<br>
      the womb of the world,<br>
      the cradle of civilization. (...)<br>
      I carry her in my marrow. (...)<br>
      I am her memory. (...)<br>
      She’s carried the cross of the world but has not worn its crown.<br>
      So I wear it for her.<br>
      Not gold but grace.<br>
      Not jewels but justice.<br>
      A crown that cannot be taken. It pulses in my blood. (...) I wear the<br>
      crown for those who burned. For those who bled, for those who<br>
      built<br>
      and were buried.<br>
      And still<br>
      we rise<br>
      crowned<br>
      in the name<br>
      of the motherland</p>
      <small>(Apresentação de Ruth Elora no “Tell’em Festival” em Rotterdam. Vídeo publicado no canal “The Mayfair Poet” do YouTube. Transcrição adaptada de https://www.youtube.com/watch?v=GTRCN2T-UxA. Acesso em 08/05/2026.)</small>
      <p>No poema, a autora recorre</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'à metáfora da coroa para se referir ao sofrimento infringido às pessoas no continente africano.' },
      { letra: 'B', texto: 'ao emprego de verbos no presente simples para se referir à persistência e à opressão das violências coloniais no continente africano.' },
      { letra: 'C', texto: 'à personificação da África para representar um corpo que perdeu suas raízes africanas.' },
      { letra: 'D', texto: 'a alternâncias entre verbos que, no passado e particípio, representam traumas, e verbos que, no presente simples, demonstram a resistência.', explicacao: 'Correta! As violências aparecem no passado e no particípio (“stripped”, “erased”, “buried”, “burned”, “bled”), enquanto a resistência vem no presente simples (“she breathes”, “she births”, “she dances”, “I wear”, “we rise”).' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2027-062',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 62,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2027-062.webp',
    enunciado: `
      <p>Leia um trecho de um livro sobre direitos dos animais.</p>
      <p>The foundational principle of the Abolitionist Approach is that animals do matter morally and that all sentient beings, human or nonhuman, have the basic right not to be treated as the property of others. (…) There is absolutely no doubt that the animals we routinely exploit are sentient. All sentient beings have at least two interests: the interest in not suffering and the interest in not dying. That is, although not all sentient beings may think about their lives in the same way, all of them desire to remain alive. And the use of animals as property for food, clothing, and other purposes implicates at least two interests that animals have. (…) If we embrace the idea that animals have rights, we not only can, but we are under an obligation to, make clear that the exploitation of animals, however “humane,” is morally unjustifiable. And it’s not a matter of judging others, but judging actions. The former is never a good idea; the latter is essential if we want to have a social justice movement for animals.</p>
      <small>(Adaptado de FRANCIONE, G. L.; CHARLTON, A. <i>Animal Rights – the Abolitionist Approach</i>. Exempla Press, 2015.)</small>
      <p>Assinale a alternativa correta de acordo com o texto.</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'Os animais explorados por humanos têm o direito de não serem tratados como propriedade, mesmo que alguns deles não sejam capazes de sentir emoções.' },
      { letra: 'B', texto: 'A defesa dos direitos dos animais significa reconhecer a nossa obrigação em criminalizar a exploração deles porque essa é uma prática desumana.' },
      { letra: 'C', texto: 'O movimento que busca justiça social para os animais carece de um princípio essencial: o julgamento das pessoas que ferem os direitos desses seres.' },
      { letra: 'D', texto: 'O uso de animais como produto fere dois interesses que humanos e animais têm em comum: o interesse em viver e em não sofrer.', explicacao: 'Correta! O texto diz que todos os seres sencientes, humanos ou não, têm ao menos dois interesses — “the interest in not suffering and the interest in not dying” — e que usar animais como propriedade (alimento, roupa etc.) “implicates at least two interests that animals have”.' },
    ],
    gabarito: 'D'
  },
  {
    id: 'unicamp-2027-063',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 63,
    disciplina: 'Física',
    conteudo: ['fis-2a4', 'fis-c1'],
    subtopico: 'Distância percorrida pela onda gravitacional',
    dificuldade: 'facil',
    textoApoio: TEXTO_UNICAMP_2027_LIGO,
    enunciado: `
      <p>Segundo os pesquisadores do LIGO, a onda gravitacional observada teve origem na fusão de dois buracos negros e se propagou pelo Universo por 1,3 bilhão de anos antes de passar pela Terra. Pesquisas adicionais na mesma área demonstraram que a onda gravitacional viaja com velocidade muito próxima à da velocidade da luz <i>c</i>.</p>
      <p>Se <i>c</i> = 3,0 × 10<sup>8</sup> m/s e 1 ano ≈ 3,2 × 10<sup>7</sup> s, a distância <i>d</i> entre a Terra e a fonte dessa onda gravitacional é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '1,2 x 10<sup>25</sup> m.', explicacao: 'Correta! d = c·t = 3,0 × 10<sup>8</sup> × (1,3 × 10<sup>9</sup> × 3,2 × 10<sup>7</sup>) = 3,0 × 10<sup>8</sup> × 4,16 × 10<sup>16</sup> ≈ 1,2 × 10<sup>25</sup> m.' },
      { letra: 'B', texto: '3,9 x 10<sup>17</sup> m.' },
      { letra: 'C', texto: '1,2 x 10<sup>22</sup> m.' },
      { letra: 'D', texto: '3,9 x 10<sup>14</sup> m.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'unicamp-2027-064',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 64,
    disciplina: 'Física',
    conteudo: 'fis-3b4',
    subtopico: 'Aceleração da gravidade',
    dificuldade: 'facil',
    textoApoio: TEXTO_UNICAMP_2027_LIGO,
    enunciado: `
      <p>Na teoria da gravitação universal, dentro da mecânica clássica, atribuída a Newton, o módulo da aceleração da gravidade decorrente da ação da força gravitacional da Terra em um corpo de massa <i>m</i>, localizado na superfície da Terra, é</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'diretamente proporcional a <i>m</i>, diretamente proporcional à massa da Terra (<i>M</i>) e diretamente proporcional ao quadrado do raio da Terra.' },
      { letra: 'B', texto: 'independente de <i>m</i>, diretamente proporcional à massa da Terra (<i>M</i>) e inversamente proporcional ao quadrado do raio da Terra.', explicacao: 'Correta! Igualando o peso à força gravitacional: m·g = G·M·m/R², logo g = G·M/R². A massa m do corpo se cancela; g é proporcional a M e inversamente proporcional a R².' },
      { letra: 'C', texto: 'diretamente proporcional a <i>m</i>, diretamente proporcional à massa da Terra (<i>M</i>) e inversamente proporcional ao quadrado do raio da Terra.' },
      { letra: 'D', texto: 'independente de <i>m</i>, diretamente proporcional à massa da Terra (<i>M</i>) e diretamente proporcional ao quadrado do raio da Terra.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2027-065',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 65,
    disciplina: 'Física',
    conteudo: ['fis-3b1', 'fis-3a2'],
    subtopico: 'Polias e equilíbrio',
    dificuldade: 'media',
    imagem: 'imagens/estudo/unicamp-2027-065.webp',
    legenda: '(Elaboração: Comvest, 2026.)',
    enunciado: `
      <p>Os exercícios físicos têm sido incorporados ao cotidiano de cada vez mais pessoas, seja como parte dos cuidados com a saúde ou como atividade de lazer. Polias e alavancas, por exemplo, são encontradas em muitos equipamentos usados para exercícios musculares. Considere a figura a seguir, de um equipamento no qual as polias e os fios são considerados ideais, de massas desprezíveis e sem atrito.</p>
      <p>Considerando <i>g</i> = 10 m/s<sup>2</sup>, o módulo da força <i>F</i> para que a massa <i>m</i> se encontre na iminência de ser levantada é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '12 N.' },
      { letra: 'B', texto: '60 N.' },
      { letra: 'C', texto: '120 N.' },
      { letra: 'D', texto: '240 N.', explicacao: 'Correta! O fio que passa pela polia móvel tem uma ponta presa na base e a outra sustentando a massa: na iminência de subir, T = m·g = 12 × 10 = 120 N nos dois ramos. O eixo da polia móvel é puxado por 2T = 240 N, e é esse fio, passando pelas polias fixas, que a pessoa segura: F = 240 N.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'unicamp-2027-066',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 66,
    disciplina: 'Física',
    conteudo: 'fis-3b1',
    subtopico: 'Força de atrito cinético',
    dificuldade: 'facil',
    enunciado: `
      <p>No <i>curling</i>, esporte das Olimpíadas de Inverno, o atleta lança discos de granito (do inglês <i>curling stones</i>) na direção de um alvo, uma área circular pintada em uma pista de gelo plana e horizontal. Para aproximar o disco desse alvo, os atletas esfregam vigorosamente o gelo à frente do disco com uma espécie de vassoura (esfregão) para alterar o coeficiente de atrito da pista.</p>
      <p>Considere uma situação em que um disco de massa <i>m</i> = 20 kg se desloca em uma pista com coeficiente de atrito estático do sistema disco-gelo <i>μ</i><sub>E</sub> = 0,1 e coeficiente de atrito cinético <i>μ</i><sub>C</sub> = 0,02. Sendo a aceleração da gravidade <i>g</i> = 10 m/s<sup>2</sup>, é correto afirmar que o módulo da força de atrito (<i>f</i><sub>at</sub>) que age sobre o disco de granito durante seu deslocamento é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '0,4 N.' },
      { letra: 'B', texto: '2,0 N.' },
      { letra: 'C', texto: '4,0 N.', explicacao: 'Correta! Durante o deslizamento vale o atrito cinético: f<sub>at</sub> = μ<sub>C</sub>·N = μ<sub>C</sub>·m·g = 0,02 × 20 × 10 = 4,0 N (o coeficiente estático só importa antes de o disco começar a se mover).' },
      { letra: 'D', texto: '20 N.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'unicamp-2027-067',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 67,
    disciplina: 'Física',
    conteudo: 'fis-2b2',
    subtopico: 'Curva de aquecimento e mudança de fase',
    dificuldade: 'media',
    enunciado: `
      <p>Um dos maiores problemas dos computadores modernos é o calor gerado por chips cada vez menores e mais potentes. O gálio (Ga) é um material promissor para a refrigeração de chips devido às suas propriedades, como alta condutividade térmica.</p>
      <p>Considere uma amostra sólida de Ga de massa <i>m</i><sub>Ga</sub> = 10 g, em um processo térmico no qual esse material recebe calor do chip de um computador com potência variável. O sistema está a uma temperatura inicial <i>T</i><sub>1</sub> = 20 °C, e, após, um determinado tempo, essa amostra sofre uma transição de fase para o estado líquido a <i>T</i><sub>2</sub> = 30 °C, atingindo em <i>t</i> = 230 s uma temperatura <i>T</i><sub>3</sub> na fase líquida. Considere que a quantidade de calor recebida pela amostra na sua fase líquida para variar sua temperatura de <i>T</i><sub>2</sub> a <i>T</i><sub>3</sub> é <i>Q</i> = 80 J. Sendo o calor específico do Ga na fase líquida igual a <i>c</i><sub>liq</sub> = 0,4 J / (g .°C), o gráfico que melhor representa esse processo térmico é</p>
      <p>Observação: Para melhor visualização dos dados, foi introduzida uma quebra indicada pelo símbolo // nos eixos dos tempos (s) de alguns gráficos.</p>
    `,
    alternativas: [
      { letra: 'A', texto: '<img src="imagens/estudo/unicamp-2027-067-a.webp" alt="Alternativa A: sobe de 20 °C a 30 °C, patamar a 30 °C e sobe até 120 °C em 230 s">' },
      { letra: 'B', texto: '<img src="imagens/estudo/unicamp-2027-067-b.webp" alt="Alternativa B: sobe de 20 °C a 30 °C, patamar a 30 °C e sobe até 50 °C em 230 s">', explicacao: 'Correta! Na fase líquida, Q = m·c·ΔT ⇒ 80 = 10 × 0,4 × ΔT ⇒ ΔT = 20 °C, então T<sub>3</sub> = 30 + 20 = 50 °C em t = 230 s. O gráfico certo sobe de 20 °C a 30 °C (sólido), tem um patamar a 30 °C (fusão) e depois sobe até 50 °C em 230 s.' },
      { letra: 'C', texto: '<img src="imagens/estudo/unicamp-2027-067-c.webp" alt="Alternativa C: reta que sobe de 20 °C a 50 °C, sem patamar">' },
      { letra: 'D', texto: '<img src="imagens/estudo/unicamp-2027-067-d.webp" alt="Alternativa D: reta que desce de 20 °C a 0 °C">' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2027-068',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 68,
    disciplina: 'Física',
    conteudo: 'fis-4a1',
    subtopico: 'Potência elétrica',
    dificuldade: 'facil',
    enunciado: `
      <p>Estudos recentes têm mostrado o impacto econômico e ecológico do gasto energético de equipamentos residenciais que permanecem ligados mesmo quando não estão sendo utilizados. Alguns equipamentos com consumo considerável quando ociosos são as TVs, os consoles de jogos e os roteadores. Em média, esse consumo pode corresponder a oito por cento do total de uma casa e um e meio por cento do consumo total de um país.</p>
      <p>Considere um roteador de internet sem fio que, quando ocioso, consome uma potência elétrica <i>P</i> = 3,0 W. Se o roteador é alimentado por uma diferença de potencial elétrico de <i>U</i> = 12 V, a corrente elétrica que circula por esse roteador ocioso é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '0,03 A.' },
      { letra: 'B', texto: '0,25 A.', explicacao: 'Correta! P = U·i ⇒ i = P/U = 3,0 / 12 = 0,25 A.' },
      { letra: 'C', texto: '4,0 A.' },
      { letra: 'D', texto: '36 A.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'unicamp-2027-069',
    prova: 'Unicamp 2027',
    vestibular: 'Unicamp', ano: 2027,
    numeroOriginal: 69,
    disciplina: 'Física',
    conteudo: 'fis-4a2',
    subtopico: 'Associação de resistores em paralelo',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/unicamp-2027-069.webp',
    legenda: '(Elaboração: Comvest, 2026.)',
    enunciado: `
      <p>A tornozeleira eletrônica é um dispositivo de monitoramento utilizado pela justiça no Brasil, em casos de prisão domiciliar ou na aplicação de medidas protetivas que envolvem a violência contra a mulher, entre outros casos. O circuito interno de uma tornozeleira eletrônica é formado por quatro blocos, tal como no circuito equivalente simplificado na figura a seguir, compostos por resistências idênticas <i>R</i><sub>1</sub> = <i>R</i><sub>2</sub> = <i>R</i><sub>3</sub> = <i>R</i><sub>4</sub> = 1,2 kΩ. Essas resistências representam, respectivamente, o microprocessador, o bloco que faz a localização em tempo real, o bloco de transmissão de dados entre a tornozeleira e uma central de monitoramento, e o sistema de alarme. O último (<i>R</i><sub>4</sub>) é ativado por uma chave apenas em caso de violação do dispositivo.</p>
      <p>Sabendo que a tornozeleira é alimentada por uma bateria de diferença de potencial <i>U</i><sub>b</sub> = 9,0 V, podemos afirmar que a corrente total <i>i</i> quando o sistema de alarmes é ativado é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '1,9 mA.' },
      { letra: 'B', texto: '7,5 mA.' },
      { letra: 'C', texto: '22 mA.' },
      { letra: 'D', texto: '30 mA.', explicacao: 'Correta! Com a chave fechada, os quatro resistores de 1,2 kΩ ficam em paralelo: R<sub>eq</sub> = 1200/4 = 300 Ω. Então i = U/R<sub>eq</sub> = 9,0/300 = 0,030 A = 30 mA.' },
    ],
    gabarito: 'D',
  },
);
