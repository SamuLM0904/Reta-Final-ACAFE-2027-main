/**
 * Fuvest 2025 — 1ª fase (Prova de Conhecimentos Gerais, 17/11/2024), versão V1 — questões 46 a 90.
 *
 * Fonte: Provas/Outros/FUVEST/2025 - Prova V1.pdf; gabarito oficial: Provas/Outros/FUVEST/2025 - Gabarito.pdf (coluna V1).
 * Questões de ESTUDO — nunca entram nos simulados.
 * Formato das questões: veja README.md ("Como adicionar uma questão nova").
 * Fora deste arquivo: 82 e 83 (Literatura que depende da leitura de obras: Quincas Borba /
 * A Ilustre Casa de Ramires; Os ratos) e 86 (Artes — Tarsila do Amaral).
 */

/* Texto compartilhado pelas questões 65 e 66 da Fuvest 2025 */
var TEXTO_FUVEST_2025_B_1 = `
      <p><b>TEXTO PARA AS QUESTÕES 65 E 66</b></p>
      <p><b>Da moenda para a célula a combustível: caldo de cana é usado para produzir energia elétrica</b></p>
      <p>“Pesquisadores do Instituto de Pesquisas Energéticas e Nucleares (Ipen), órgão associado à USP, testaram o uso de caldo de cana para gerar energia elétrica em células a combustível. O processo dispensa a transformação do caldo <i>in natura</i> em etanol, feita nas usinas de álcool, impedindo a formação de resíduos nocivos ao meio ambiente. Após o êxito dos experimentos em laboratório, os cientistas vão desenvolver a aplicação da técnica em escala industrial.</p>
      <p>‘A célula a combustível tem o mesmo princípio de funcionamento de uma pilha. A diferença é que o combustível serve como reagente para ser consumido e gerar eletricidade’, explica o pesquisador do Ipen, Almir Oliveira Neto, que coordenou a pesquisa. ‘No dispositivo que foi desenvolvido na pesquisa, a oxidação do caldo de cana acontece no ânodo e a redução de oxigênio no cátodo. O objetivo do experimento era obter energia da biomassa com o mínimo impacto ambiental possível. Para isso, utilizou-se o caldo de cana em uma célula a combustível para gerar energia elétrica’, diz o pesquisador. ‘O uso do caldo de cana direto evita a formação de vinhaça, um resíduo ambientalmente perigoso decorrente da produção de etanol, contribuindo, assim, para a preservação do meio ambiente’.”</p>
      <small>Disponível em https://jornal.usp.br/ciencias/ (Adaptado).</small>
`;

/* Texto compartilhado pelas questões 73 e 74 da Fuvest 2025 (a figura da garrafa vai como imagem) */
var TEXTO_FUVEST_2025_B_2 = `
      <p><b>TEXTO PARA AS QUESTÕES 73 E 74</b></p>
      <p>Um artigo publicado em 2018, na Revista Brasileira de Ensino de Física, reporta um curioso estudo sobre a pressão interna de “foguetes de garrafa PET”, propulsionados a partir da reação química entre ácido acético e bicarbonato de sódio.<sup>[1]</sup> Uma mistura de vinagre (que contém ácido acético, CH<sub>3</sub>COOH) com bicarbonato de sódio (NaHCO<sub>3</sub>) produz gás carbônico (CO<sub>2</sub>) por meio da reação química representada pela seguinte equação:</p>
      <p style="text-align:center">CH<sub>3</sub>COOH + NaHCO<sub>3</sub> → CH<sub>3</sub>COONa + CO<sub>2</sub> + H<sub>2</sub>O</p>
      <p>A reação ocorre no interior de uma garrafa PET de 2 L de volume útil total, da qual foi retirado todo o ar. Insere-se na garrafa um volume inicial <i>V</i><sub>vin</sub> de vinagre líquido e bicarbonato de sódio, sendo a garrafa posteriormente selada com uma tampa acoplada a um manômetro. A reação produzirá gás carbônico que ocupará um volume <i>V</i><sub>CO<sub>2</sub></sub> e exercerá uma pressão <i>P</i><sub>CO<sub>2</sub></sub> sobre a tampa da garrafa, medida pelo manômetro, como mostra a figura.</p>
      <small>[1] FONSECA et al, RBEF, vol. 40, nº 3, e3504 (2018). Disponível em http://dx.doi.org/10.1590/1806-9126-RBEF-2017-0340.</small>
`;

QUESTOES.push(
  {
    id: 'fuvest-2025-046',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 46,
    disciplina: 'Biologia',
    conteudo: 'bio-3a2',
    subtopico: 'Sementes',
    dificuldade: 'facil',
    enunciado: `<p>A maior parte da alimentação humana é constituída por grãos e cereais, que, em sua maioria, correspondem às sementes, em termos botânicos. Esse consumo é adequado, uma vez que as sementes</p>`,
    alternativas: [
      { letra: 'A', texto: 'constituem o único órgão de reserva de amido das plantas, substância altamente energética para os seres vivos em geral.' },
      { letra: 'B', texto: 'armazenam todas as vitaminas e nutrientes necessários para a planta e, portanto, também ao ser humano.' },
      { letra: 'C', texto: 'possuem DNA da planta-mãe e do embrião, que constituem nutrientes sem os quais a espécie humana não sobrevive.' },
      { letra: 'D', texto: 'contêm substâncias de reserva provedoras de energia para o desenvolvimento do embrião vegetal, que também servem de fonte energética aos seres humanos.', explicacao: 'Correta! A semente guarda reservas (amido, proteínas, lipídios — no endosperma ou nos cotilédones) que nutrem o embrião até a planta fazer fotossíntese; essas mesmas reservas são fonte de energia para nós. O amido não fica só nas sementes (há raízes, caules e tubérculos de reserva).' },
      { letra: 'E', texto: 'possuem enzimas digestivas de amido e de proteínas, que disponibilizam energia ao embrião vegetal e também são usadas para promover a digestão em seres humanos.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'fuvest-2025-047',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 47,
    disciplina: 'Biologia',
    conteudo: 'bio-3b2',
    subtopico: 'Gordura saturada e doenças cardiovasculares',
    dificuldade: 'facil',
    enunciado: `<p>A figura a seguir representa os níveis médios de consumo de gordura saturada na dieta para adultos com idade ≥20 anos.</p>
      <p>Considerando apenas os dados da figura, os habitantes da Austrália e da Rússia apresentam maiores riscos de desenvolver doenças</p>`,
    imagem: 'imagens/estudo/fuvest-2025-047.webp',
    legenda: 'MICHA, R. et al., (2014). British Medical Journal, v. 348. g2272. DOI: 10.1136/bmj.g2272.',
    alternativas: [
      { letra: 'A', texto: 'renais.' },
      { letra: 'B', texto: 'respiratórias.' },
      { letra: 'C', texto: 'cardiovasculares.', explicacao: 'Correta! No mapa, Austrália e Rússia estão nas faixas de maior consumo de gordura saturada. Esse consumo eleva o LDL-colesterol e favorece a aterosclerose (placas nas artérias), fator de risco para infarto e AVC — doenças cardiovasculares.' },
      { letra: 'D', texto: 'cerebrais.' },
      { letra: 'E', texto: 'neuromusculares.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'fuvest-2025-048',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 48,
    disciplina: 'Matemática',
    conteudo: ['mat-3b1', 'mat-1a5'],
    subtopico: 'Leitura de gráficos e porcentagem',
    dificuldade: 'media',
    enunciado: `<p>Os gráficos a seguir apresentam a evolução do abate de bovinos e da participação de machos e fêmeas, por trimestre (indicado por algarismo romano), segundo informações obtidas pelo IBGE.</p>
      <p>A partir dos dados observados nos gráficos, é correto afirmar:</p>`,
    imagem: ['imagens/estudo/fuvest-2025-048-1.webp', 'imagens/estudo/fuvest-2025-048-2.webp'],
    legendaAcima: ['<b>Evolução do abate de bovinos no Brasil por trimestre (2019-2024)</b>', '<b>Evolução da participação de machos e fêmeas no abate de bovinos no Brasil por trimestre (2019-2024)</b>'],
    legendaGeral: 'IBGE: Diretoria de Pesquisas. Coordenação de Estatísticas Agropecuárias. Pesquisa Trimestral do Abate de Animais 2019-2024 (Adaptado).',
    alternativas: [
      { letra: 'A', texto: 'No primeiro trimestre de 2023, a diferença entre as quantidades de machos e fêmeas abatidos foi menor que a do primeiro trimestre de 2019.' },
      { letra: 'B', texto: 'No primeiro trimestre de 2023, a quantidade de fêmeas abatidas foi de, aproximadamente, 2 milhões.' },
      { letra: 'C', texto: 'No primeiro trimestre de 2021 e de 2022, a diferença entre as quantidades de machos e fêmeas abatidos foi igual.' },
      { letra: 'D', texto: 'No primeiro trimestre de 2024, a quantidade de fêmeas abatidas foi de, aproximadamente, 4,3 milhões.', explicacao: 'Correta! No 1º trimestre de 2024 foram abatidos 9,30 milhões de bovinos, e as fêmeas foram 46,2% do total: 0,462 × 9,30 ≈ 4,3 milhões.' },
      { letra: 'E', texto: 'No primeiro trimestre de 2024, a quantidade de fêmeas abatidas foi igual à do primeiro trimestre de 2019.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'fuvest-2025-049',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 49,
    disciplina: 'Geografia',
    conteudo: ['geo-4u2', 'geo-2u2'],
    subtopico: 'MATOPIBA e desmatamento do Cerrado',
    dificuldade: 'facil',
    enunciado: `<p>Observe as imagens de satélite que indicam o desmatamento de 12.272 hectares no município de Formosa do Rio Preto (BA), região do MATOPIBA, composta pelos estados do Maranhão, Tocantins, Piauí e Bahia, no período 2019-2022.</p>
      <p>Com base na análise temporal das imagens, assinale a alternativa que apresenta, respectivamente, o bioma correspondente à região do MATOPIBA, a atividade econômica desenvolvida nesse local e o possível impacto ambiental negativo decorrente de tal atividade.</p>`,
    imagem: 'imagens/estudo/fuvest-2025-049.webp',
    legenda: 'MapBiomas. 2023. Relatório de desmatamento no Brasil (Adaptado).',
    alternativas: [
      { letra: 'A', texto: 'Cerrado, agropecuária e processos erosivos.', explicacao: 'Correta! O MATOPIBA é a fronteira agrícola do Cerrado; as imagens mostram a vegetação nativa sendo substituída por áreas de lavoura/pastagem (agropecuária), e o solo exposto pelo desmatamento fica sujeito à erosão.' },
      { letra: 'B', texto: 'Cerrado, silvicultura e contaminação do solo.' },
      { letra: 'C', texto: 'Amazônia, mineração e poluição das águas.' },
      { letra: 'D', texto: 'Caatinga, pastagem e impermeabilização da superfície.' },
      { letra: 'E', texto: 'Caatinga, extrativismo e perda de biodiversidade.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'fuvest-2025-050',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 50,
    disciplina: 'Geografia',
    conteudo: 'geo-4u2',
    subtopico: 'Pampa',
    dificuldade: 'facil',
    enunciado: `<p>Neste bioma, a vegetação nativa apresenta-se intercalada por extensas monoculturas de soja e de arroz. Em alguns lugares, a vegetação campestre original tem sido substituída por vegetação florestal, formada por árvores de eucaliptos. Em vários locais, observa-se a expansão de grandes areais, em que os solos arenosos ficam expostos e suscetíveis a uma intensa erosão. Este é o bioma brasileiro menos protegido por Unidades de Conservação, embora esteja entre aqueles que mais perderam vegetação nativa nas últimas três décadas.</p>
      <p>A descrição da paisagem impactada por ações humanas refere-se ao bioma</p>`,
    alternativas: [
      { letra: 'A', texto: 'Caatinga.' },
      { letra: 'B', texto: 'Cerrado.' },
      { letra: 'C', texto: 'Mata Atlântica.' },
      { letra: 'D', texto: 'Pampas.', explicacao: 'Correta! Vegetação campestre (campos), arroz irrigado e soja, silvicultura de eucalipto e os areais do sudoeste gaúcho (arenização) caracterizam o Pampa, no Rio Grande do Sul — o bioma com a menor proteção em Unidades de Conservação.' },
      { letra: 'E', texto: 'Pantanal.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'fuvest-2025-051',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 51,
    disciplina: 'Geografia',
    conteudo: ['geo-3u5', 'geo-3u1'],
    subtopico: 'Ilha de calor',
    dificuldade: 'facil',
    enunciado: `<p>A figura a seguir representa a variação espacial da temperatura do ar por tipo de área, considerando diferentes padrões de uso e ocupação do solo de um município.</p>
      <p>A explicação para as características desse perfil de temperatura do ar deve-se</p>`,
    imagem: 'imagens/estudo/fuvest-2025-051.webp',
    legenda: 'Revista Pesquisa FAPESP – Setembro/2023 (Adaptado).',
    alternativas: [
      { letra: 'A', texto: 'à maior ocorrência de áreas verdes nas periferias, que absorvem mais radiação solar e aquecem o ambiente, ultrapassando os 32 °C.' },
      { letra: 'B', texto: 'à maior absorção de radiação solar nas áreas centrais das cidades, compostas em sua maioria por asfalto, vidro e concreto.', explicacao: 'Correta! O perfil mostra a ilha de calor: a temperatura é máxima no Centro. Asfalto, concreto e vidro absorvem e armazenam muita radiação solar, há pouca vegetação e pouca evapotranspiração, e o calor é devolvido ao ar.' },
      { letra: 'C', texto: 'ao efeito de sombreamento dos edifícios nas áreas centrais, com maior disponibilidade de radiação solar e temperaturas inferiores a 30 °C.' },
      { letra: 'D', texto: 'à presença de áreas comerciais e residenciais ao longo de todo perfil, que elevam a temperatura acima dos 32 °C e reduzem a umidade.' },
      { letra: 'E', texto: 'à maior reflexão da radiação solar nas áreas centrais pelo asfalto, por apresentarem albedo menor que as superfícies vegetadas.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'fuvest-2025-052',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 52,
    disciplina: 'Matemática',
    conteudo: 'mat-4a2',
    subtopico: 'Funções trigonométricas — período',
    dificuldade: 'media',
    enunciado: `<p>As enchentes ocorridas no Rio Grande do Sul, em maio de 2024, prejudicaram a infraestrutura de comunicação. A população afetada era informada sobre as notícias relativas às enchentes ao sintonizar, por rádio de pilhas, frequências de onda AM, cujo alcance é maior.</p>
      <p>Uma onda AM é modelada matematicamente por equações que envolvem a função cosseno, cuja variável independente é o tempo <i>t</i>, que aparece multiplicado pela frequência <i>f</i> da onda.</p>
      <p>Como exemplo, pode-se considerar a equação referente ao processo de modulação de uma onda AM:</p>
      <p style="text-align:center"><i>s</i>(<i>t</i>) = <i>A</i> [1 + <i>k m</i>(<i>t</i>)] cos (2π <i>f t</i>) ,</p>
      <p>em que <i>A</i> é a amplitude, <i>f</i> a frequência, <i>k</i> a constante da sensibilidade à amplitude e <i>m</i>(<i>t</i>) o sinal que contém a informação.</p>
      <p>Quando a frequência <i>f</i> é multiplicada por 3, o comprimento da onda sofre alteração. Por causa dessa multiplicação, qual transformação ocorre no gráfico da função cosseno original?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Expansão vertical.' },
      { letra: 'B', texto: 'Translação horizontal.' },
      { letra: 'C', texto: 'Expansão horizontal.' },
      { letra: 'D', texto: 'Contração horizontal.', explicacao: 'Correta! O período de cos(2π f t) é 1/f; com 3f, o período passa a 1/(3f), um terço do original. O gráfico é “comprimido” na direção do eixo t (contração horizontal), sem mudar a amplitude.' },
      { letra: 'E', texto: 'Contração vertical.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'fuvest-2025-053',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 53,
    disciplina: 'Geografia',
    conteudo: 'geo-3u1',
    subtopico: 'Climograma',
    dificuldade: 'media',
    enunciado: `<p>A Estação Meteorológica Mirante de Santana é a principal referência do Instituto Nacional de Meteorologia (INMET) no município de São Paulo - SP. O climograma a seguir apresenta dados referentes ao mês de fevereiro de 2023. Neste mesmo mês, o Centro de Gerenciamento de Emergências Climáticas detectou 11 pontos de alagamentos no dia 19 e 14 pontos no dia 21.</p>
      <p>Com base no texto e no gráfico, assinale a alternativa correta.</p>`,
    imagem: 'imagens/estudo/fuvest-2025-053.webp',
    legenda: 'Disponível em https://portal.inmet.gov.br/noticias/ (Adaptado).',
    alternativas: [
      { letra: 'A', texto: 'A menor amplitude térmica ocorreu no dia 19, quando foi observado um dos maiores volumes de chuva do mês.', explicacao: 'Correta! No dia 19 a máxima despencou para cerca de 21,6 °C enquanto a mínima ficou em torno de 18 °C — a menor diferença entre máxima e mínima do mês —, e a barra de chuva desse dia está entre as maiores.' },
      { letra: 'B', texto: 'Os quatro dias mais chuvosos apresentaram as menores temperaturas mínimas.' },
      { letra: 'C', texto: 'A temperatura máxima no período variou entre 21,5 °C e 17,8 °C.' },
      { letra: 'D', texto: 'Os cinco dias mais quentes correspondem às maiores precipitações.' },
      { letra: 'E', texto: 'Os pontos de alagamento nos dias 19 e 21 foram provocados pela chuva acumulada de 428,9 mm.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'fuvest-2025-054',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 54,
    disciplina: 'Geografia',
    conteudo: ['geo-3u2', 'geo-3u5'],
    subtopico: 'Clima e dengue',
    dificuldade: 'facil',
    enunciado: `<p>“A distribuição dos mosquitos, a frequência de suas picadas e o tempo de eclosão de seus ovos são afetados pela temperatura, pluviosidade e velocidade do vento, além de outros fatores, como deslocamento e densidade populacionais. Por exemplo, com uma temperatura de 27 °C, o período de incubação dos ovos é de dez dias; no entanto, a 37 °C, esse período passa a ser de sete dias. Além disso, a intermitência das chuvas no final da estação do verão e os ventos calmos acentuam a proliferação e a atuação do vetor.”</p>
      <p><small>MENDONÇA, Francisco de Assis. Aquecimento Global e Saúde: uma perspectiva geográfica – notas introdutórias. Terra Livre, 2003 (Adaptado).</small></p>
      <p>Com base no texto, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A elevação da temperatura e o aumento da pluviosidade, somados ao desmatamento, à urbanização e à circulação de pessoas em várias áreas, potencializam a expansão da dengue.', explicacao: 'Correta! O texto diz que temperaturas maiores encurtam a incubação dos ovos e que chuvas e densidade/deslocamento da população favorecem o vetor; somados à urbanização e ao desmatamento, esses fatores ampliam a dengue.' },
      { letra: 'B', texto: 'A dengue é um problema nacional e está relacionada ao fato de o Brasil ser um país tropical com áreas de florestas, aspectos que, combinados à dispersão da população, contribuem para minimizar a epidemia.' },
      { letra: 'C', texto: 'A proliferação do mosquito <i>Aedes aegypti</i> ocorre em áreas pouco povoadas nos centros urbanos, associada às baixas temperaturas que intensificam a transmissão da doença.' },
      { letra: 'D', texto: 'No território brasileiro, as áreas com baixas temperaturas reduzem o tempo necessário para eclosão dos ovos, aumentando a proliferação do mosquito <i>Aedes aegypti</i> e a frequência de picadas.' },
      { letra: 'E', texto: 'A dengue é um problema de saúde pública em escala mundial e sua disseminação está associada à diminuição de temperatura, aumento da velocidade do vento e redução da precipitação.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'fuvest-2025-055',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 55,
    disciplina: 'Biologia',
    conteudo: ['bio-3b2', 'bio-4a1'],
    subtopico: 'Sistema circulatório aberto e fechado',
    dificuldade: 'facil',
    enunciado: `<p>Dentre os animais invertebrados, alguns grupos apresentam o sistema circulatório fechado, enquanto outros apresentam o sistema circulatório aberto, o que leva a diferenças em processos fisiológicos.</p>
      <p>Nos invertebrados, o sistema circulatório</p>`,
    alternativas: [
      { letra: 'A', texto: 'fechado apresenta uma menor pressão do sangue / hemolinfa em relação ao sistema circulatório aberto.' },
      { letra: 'B', texto: 'aberto apresenta o coração dividido em quatro cavidades: dois átrios e dois ventrículos.' },
      { letra: 'C', texto: 'fechado permite maior eficiência no transporte de oxigênio em relação ao sistema circulatório aberto.', explicacao: 'Correta! No sistema fechado (anelídeos, cefalópodes) o sangue corre sempre dentro de vasos, com pressão e velocidade maiores, o que torna a entrega de oxigênio aos tecidos mais rápida e eficiente que no sistema aberto, em que a hemolinfa se espalha em lacunas.' },
      { letra: 'D', texto: 'aberto facilita a distribuição dos nutrientes aos tecidos em relação ao sistema circulatório fechado.' },
      { letra: 'E', texto: 'fechado mistura mais facilmente os gases respiratórios: oxigênio e dióxido de carbono.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'fuvest-2025-056',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 56,
    disciplina: 'Química',
    conteudo: ['qui-2a1', 'qui-1a5'],
    subtopico: 'Polaridade e solubilidade',
    dificuldade: 'facil',
    enunciado: `<p>O processo de mumificação usado pelos egípcios começava com a retirada dos órgãos e desidratação do corpo utilizando uma mistura natural, obtida em leito de lagos, de sais solúveis de sódio, como carbonato, hidrogenocarbonato, cloreto e sulfato. Após a desidratação, o corpo era preenchido com uma mistura de serragem e ervas aromáticas como canela, cássia, mirra e até mesmo cebola, que, por conterem álcoois e aldeídos com propriedades antimicrobianas, dificultavam a decomposição do corpo. Por fim, o corpo era envolvido em tecido embebido em resinas insolúveis em água, como betume ou óleo de cedro, que, após seco, formava uma camada impermeabilizante.</p>
      <p>A partir dessas informações, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Os sais de sódio mencionados, por serem hidrofílicos, repelem a água.' },
      { letra: 'B', texto: 'Propanona e hexano são exemplos de álcoois e aldeídos antimicrobianos.' },
      { letra: 'C', texto: 'Assim como o betume e óleo de cedro, qualquer outro composto orgânico serviria como impermeabilizante.' },
      { letra: 'D', texto: 'Todo sal iônico poderia ser utilizado em substituição aos sais de sódio mencionados.' },
      { letra: 'E', texto: 'A impermeabilidade conferida pelas resinas se deve às suas características apolares ou muito pouco polares.', explicacao: 'Correta! Betume e óleo de cedro são misturas de hidrocarbonetos/substâncias de baixa polaridade; como “semelhante dissolve semelhante”, não interagem com a água (polar), formando uma camada que a repele.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'fuvest-2025-057',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 57,
    disciplina: 'Química',
    conteudo: ['qui-3a4', 'qui-4a1'],
    subtopico: 'Solução supersaturada e calor de dissolução',
    dificuldade: 'media',
    enunciado: `<p>Em países frios, é comum o uso de pequenos aquecedores de mãos, normalmente descartáveis, que podem ser colocados dentro de luvas. Uma alternativa mais sustentável é o aquecedor de mão reutilizável, que é constituído por uma solução aquosa supersaturada de acetato de sódio armazenada em um reservatório maleável, conforme mostrado na figura a seguir.</p>
      <p>Um choque mecânico nesse reservatório perturba a solução supersaturada e leva à precipitação do sal, resultando no seu aquecimento. Após o uso, o aquecedor pode ser regenerado por imersão em água quente, que dissolve o sal, deixando-o pronto para ser reutilizado.</p>
      <p>Em relação à operação desse aquecedor, é correto afirmar:</p>`,
    imagem: 'imagens/estudo/fuvest-2025-057.webp',
    alternativas: [
      { letra: 'A', texto: 'A precipitação do acetato de sódio é exotérmica e sua solubilização é endotérmica.', explicacao: 'Correta! Ao cristalizar, o sal libera calor (por isso o aquecedor esquenta): a precipitação é exotérmica. O processo inverso, a dissolução feita na água quente para regenerar, absorve calor — é endotérmica.' },
      { letra: 'B', texto: 'A diminuição da temperatura aumenta a solubilidade do acetato de sódio.' },
      { letra: 'C', texto: 'A solubilização do acetato de sódio para a regeneração do aquecedor libera energia, aquecendo o banho de água.' },
      { letra: 'D', texto: 'Quando o aquecedor é regenerado, a solução interna passa de supersaturada para uma solução diluída.' },
      { letra: 'E', texto: 'A concentração de acetato de sódio na solução dentro do reservatório não muda durante a regeneração do aquecedor.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'fuvest-2025-058',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 58,
    disciplina: 'Química',
    conteudo: 'qui-4a4',
    subtopico: 'Produto de solubilidade (Kps)',
    dificuldade: 'media',
    enunciado: `<p>A toxicidade do Pb e o risco de sua ingestão ganharam notoriedade na mídia devido à presença desse elemento em copos térmicos amplamente comercializados. A exposição ao Pb, no entanto, pode ocorrer também por fontes naturais, como a ingestão de água em contato prolongado com minérios como a anglesita, rico em PbSO<sub>4</sub> (Kps = 1,0 × 10<sup>−8</sup>).</p>
      <p>Sabendo que a legislação estabelece a concentração máxima de Pb de 0,01 mg/L para água potável, assinale a alternativa correta em relação à ingestão de água que tenha contato prolongado com a anglesita.</p>
      <p><small><b>Note e adote:</b><br>Massa molar (g/mol): Pb = 207</small></p>`,
    alternativas: [
      { letra: 'A', texto: 'Não é segura, pois a concentração de Pb na água será de 2,07×10<sup>1</sup> mg/L, maior que o valor permitido.', explicacao: 'Correta! PbSO<sub>4</sub> ⇌ Pb<sup>2+</sup> + SO<sub>4</sub><sup>2−</sup>: Kps = s² = 1,0 × 10<sup>−8</sup> → s = 1,0 × 10<sup>−4</sup> mol/L. Em massa: 1,0 × 10<sup>−4</sup> × 207 g/L = 2,07 × 10<sup>−2</sup> g/L = 20,7 mg/L, muito acima de 0,01 mg/L.' },
      { letra: 'B', texto: 'É segura, pois a concentração de Pb na água será de 1×10<sup>−4</sup> mg/L, menor que o valor permitido.' },
      { letra: 'C', texto: 'Não é segura, pois a concentração de Pb na água será de 1×10<sup>−8</sup> mg/L, menor que o valor permitido.' },
      { letra: 'D', texto: 'É segura, pois a concentração de Pb na água será de 1×10<sup>−2</sup> mg/L, igual ao valor permitido.' },
      { letra: 'E', texto: 'É segura, pois a concentração de Pb na água será de 2,07×10<sup>−6</sup> mg/L, maior que o valor permitido.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'fuvest-2025-059',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 59,
    disciplina: 'Física',
    conteudo: 'fis-2b1',
    subtopico: 'Dilatação linear',
    dificuldade: 'media',
    enunciado: `<p>Quando uma barra de um certo material é aquecida até uma temperatura <i>T</i> a partir de uma temperatura inicial <i>T</i><sub>0</sub>, seu comprimento inicial <i>L</i><sub>0</sub> sofre um aumento Δ<i>L</i> dado por Δ<i>L</i> = α <i>L</i><sub>0</sub> (<i>T</i> − <i>T</i><sub>0</sub>), sendo α o coeficiente de expansão linear, que depende do material. O gráfico a seguir mostra curvas de expansão linear para barras feitas de três materiais distintos.</p>
      <p>Com base no gráfico e nas informações apresentadas, é correto afirmar:</p>`,
    imagem: 'imagens/estudo/fuvest-2025-059.webp',
    alternativas: [
      { letra: 'A', texto: 'O gráfico mostra curvas para três barras que possuem o mesmo comprimento à temperatura de 30°C.' },
      { letra: 'B', texto: 'Em um processo de aquecimento entre 100°C e 200°C, o comprimento da barra de cobre aumenta em 0,1 m.' },
      { letra: 'C', texto: 'O coeficiente de expansão linear do alumínio é maior do que o do cobre.' },
      { letra: 'D', texto: 'Partindo de 0°C, aumentar em 10 cm o comprimento da barra de polietileno requer elevar sua temperatura até 50°C.', explicacao: 'Correta! A reta do polietileno vai de 10,0 m (0 °C) a 10,4 m (200 °C), ou seja, 0,4 m a cada 200 °C = 0,1 m (10 cm) a cada 50 °C. Logo, de 0 °C a 50 °C a barra cresce 10 cm.' },
      { letra: 'E', texto: 'Duas barras de comprimentos 5 m e 10 m a 0°C, feitas do mesmo material, sofrem iguais incrementos de comprimento quando levadas de 0°C a 100°C.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'fuvest-2025-060',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 60,
    disciplina: 'Química',
    conteudo: 'qui-4b4',
    subtopico: 'Corrosão do ferro',
    dificuldade: 'facil',
    enunciado: `<p>As massas de duas barras, uma de ferro e outra de aço inoxidável, armazenadas em um mesmo ambiente úmido e na presença de oxigênio, foram monitoradas ao longo do tempo.</p>
      <p>Assinale a alternativa que representa a variação das massas de ambas as barras ao longo do tempo.</p>
      <p>(Em cada alternativa: à esquerda, <b>Ferro</b>; à direita, <b>Aço inoxidável</b>.)</p>`,
    alternativas: [
      { letra: 'A', texto: '<img src="imagens/estudo/fuvest-2025-060-a.webp" alt="Alternativa A: ferro com massa constante; aço inoxidável com massa constante">' },
      { letra: 'B', texto: '<img src="imagens/estudo/fuvest-2025-060-b.webp" alt="Alternativa B: ferro com massa crescente; aço inoxidável com massa crescente">' },
      { letra: 'C', texto: '<img src="imagens/estudo/fuvest-2025-060-c.webp" alt="Alternativa C: ferro com massa decrescente; aço inoxidável com massa constante">' },
      { letra: 'D', texto: '<img src="imagens/estudo/fuvest-2025-060-d.webp" alt="Alternativa D: ferro com massa crescente; aço inoxidável com massa constante">', explicacao: 'Correta! O ferro enferruja: incorpora O<sub>2</sub> e água, formando óxido de ferro hidratado (Fe<sub>2</sub>O<sub>3</sub>·<i>x</i>H<sub>2</sub>O) que fica sobre a barra, e a massa aumenta. O aço inoxidável (com cromo) forma uma película passivadora que o protege, e a massa praticamente não muda.' },
      { letra: 'E', texto: '<img src="imagens/estudo/fuvest-2025-060-e.webp" alt="Alternativa E: ferro com massa crescente; aço inoxidável com massa decrescente">' },
    ],
    gabarito: 'D',
  },
  {
    id: 'fuvest-2025-061',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 61,
    disciplina: 'Física',
    conteudo: 'fis-2a4',
    subtopico: 'Queda livre (Galileu)',
    dificuldade: 'facil',
    enunciado: `<p>Os versos a seguir pertencem à canção <i>Fall on Me</i>, da banda norte-americana R.E.M., lançada em 1986.</p>
      <p>“There's a problem, feathers, iron<br>Bargain buildings, weights and pulleys<br>Feathers hit the ground before the weight can leave the air”</p>
      <p><small>Bill Berry, Peter Buck, Mike Mills e Michael Stipe.</small></p>
      <p>A qual episódio (real ou hipotético) da história da física o trecho da música faz alusão?</p>`,
    alternativas: [
      { letra: 'A', texto: 'À queda de uma maçã, que teria inspirado Newton à descoberta da gravitação universal.' },
      { letra: 'B', texto: 'À observação de um pássaro em voo, que teria levado Einstein a formular a teoria da relatividade.' },
      { letra: 'C', texto: 'Aos experimentos com objetos de massas diferentes, que teriam indicado a Galileu os princípios da queda livre.', explicacao: 'Correta! Penas e ferro (pesos) caindo de edifícios remetem ao lendário experimento de Galileu (Torre de Pisa) com corpos de massas diferentes: sem resistência do ar, todos caem com a mesma aceleração.' },
      { letra: 'D', texto: 'Ao transbordamento da água em uma banheira, que teria sugerido a Arquimedes o conceito de empuxo.' },
      { letra: 'E', texto: 'À queda de um bloco de ferro ligado a uma hélice, que teria levado Joule à equivalência entre calor e energia.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'fuvest-2025-062',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 62,
    disciplina: 'Física',
    conteudo: 'fis-3b2',
    subtopico: 'Energia mecânica dissipada',
    dificuldade: 'facil',
    enunciado: `<p>Um brinquedo bastante comum em parques de diversões, a montanha-russa, utiliza-se da transformação parcial de energia potencial em energia cinética (e vice-versa) como princípio de funcionamento. Uma das montanhas-russas mais famosas do mundo, a Takabisha, cuja pista possui mais de 1 km de extensão, localiza-se no Japão e tem vista para o Monte Fuji. Nela, a subida inicial até o ponto mais alto, situado a uma altura aproximada de 50 m do solo, é feita sob ângulo de aproximadamente 90 graus, seguida de uma descida vertiginosa, cuja velocidade, no ponto mais baixo desse trecho, atinge cerca de 30 m/s em poucos segundos.</p>
      <p>Considerando um carrinho ocupado com massa total de 300 kg em repouso na posição de altura máxima, a energia mecânica perdida durante a descida inicial é, aproximadamente,</p>
      <p><small><b>Note e adote:</b><br>Aceleração da gravidade: g = 10 m/s<sup>2</sup>.</small></p>`,
    imagem: 'imagens/estudo/fuvest-2025-062.webp',
    legenda: 'Montanha-russa Takabisha.',
    alternativas: [
      { letra: 'A', texto: '1200 J.' },
      { letra: 'B', texto: '2500 J.' },
      { letra: 'C', texto: '5000 J.' },
      { letra: 'D', texto: '15000 J.', explicacao: 'Correta! No alto: E<sub>p</sub> = mgh = 300 × 10 × 50 = 150 000 J. Embaixo: E<sub>c</sub> = mv²/2 = 300 × 30²/2 = 135 000 J. Energia perdida = 150 000 − 135 000 = 15 000 J.' },
      { letra: 'E', texto: '20000 J.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'fuvest-2025-063',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 63,
    disciplina: 'Química',
    conteudo: ['qui-3a2', 'qui-2a7'],
    subtopico: 'Captura de CO₂ e ciclo do carbono',
    dificuldade: 'media',
    enunciado: `<p>A utilização de matrizes energéticas limpas, tais como aquelas que não aumentam a concentração de CO<sub>2</sub>(g) na atmosfera, é essencial para evitar a escalada das alterações climáticas causadas pela emissão de gases de efeito estufa. Considere a proposta apresentada na figura a seguir para a produção de uma matriz energética limpa.</p>
      <p>Com base nessas informações e em seus conhecimentos, assinale a alternativa correta.</p>`,
    imagem: 'imagens/estudo/fuvest-2025-063.webp',
    legenda: '(I) Capturar o CO<sub>2</sub>(g) atmosférico utilizando NaOH(aq) para formar Na<sub>2</sub>CO<sub>3</sub>(aq). (II) Tratar essa solução, na presença de um catalisador, com H<sub>2</sub>(g) oriundo de fontes renováveis, para gerar CH<sub>4</sub>(g), um gás combustível.',
    alternativas: [
      { letra: 'A', texto: 'O catalisador participa da reação de produção de metano e se decompõe em NaOH.' },
      { letra: 'B', texto: 'A combustão do CH<sub>4</sub> não emite CO<sub>2</sub>, motivo pelo qual a proposta se configura como uma matriz energética limpa.' },
      { letra: 'C', texto: 'A proposta não representa uma matriz energética limpa, pois a combustão completa de 1 mol de CH<sub>4</sub> emite mais CO<sub>2</sub> do que o que é utilizado para a sua síntese.' },
      { letra: 'D', texto: 'A retirada de CO<sub>2</sub> da atmosfera seria maior se a proposta de usar uma matriz energética limpa se resumisse unicamente em utilizar o H<sub>2</sub> como combustível.' },
      { letra: 'E', texto: 'Em relação ao ciclo do carbono, a proposta é semelhante ao uso do etanol como combustível veicular.', explicacao: 'Correta! O CH<sub>4</sub> é feito com CO<sub>2</sub> retirado do ar (1 mol de CO<sub>2</sub> por mol de CH<sub>4</sub>), e sua queima devolve o mesmo 1 mol de CO<sub>2</sub>: o balanço é neutro. O etanol faz o mesmo — o CO<sub>2</sub> da queima foi captado antes pela cana na fotossíntese.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'fuvest-2025-064',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 64,
    disciplina: 'Química',
    conteudo: ['qui-3a2', 'qui-3a1'],
    subtopico: 'Estequiometria e densidade',
    dificuldade: 'media',
    enunciado: `<p>Alguns motores de foguetes espaciais usam metano como combustível e oxigênio como comburente. Ambos os compostos são armazenados em estado líquido no próprio foguete, o que permite o seu armazenamento em maior quantidade do que se estivessem no estado gasoso. Sabe-se que o foguete armazena um volume de oxigênio líquido 1,5 vez maior do que de metano líquido e que ambos são completamente consumidos na combustão, conforme a equação CH<sub>4</sub>(<i>l</i>) + 2 O<sub>2</sub>(<i>l</i>) → CO<sub>2</sub>(g) + 2 H<sub>2</sub>O(g).</p>
      <p>Nessas condições, é correto afirmar que a razão entre a densidade do metano líquido e a densidade do oxigênio líquido é igual a</p>
      <p><small><b>Note e adote:</b><br>Massa molar (g/mol): H = 1; C = 12; O = 16</small></p>`,
    alternativas: [
      { letra: 'A', texto: '0,186.' },
      { letra: 'B', texto: '0,375.', explicacao: 'Correta! Para n mol de CH<sub>4</sub> (16n g) são consumidos 2n mol de O<sub>2</sub> (64n g). Com V(O<sub>2</sub>) = 1,5 V(CH<sub>4</sub>): d(CH<sub>4</sub>)/d(O<sub>2</sub>) = (16n/V) ÷ (64n/1,5V) = 16 × 1,5/64 = 0,375.' },
      { letra: 'C', texto: '0,75.' },
      { letra: 'D', texto: '1,5.' },
      { letra: 'E', texto: '3.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'fuvest-2025-065',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 65,
    disciplina: 'Português',
    conteudo: 'por-2a5',
    subtopico: 'Interpretação de texto',
    dificuldade: 'facil',
    textoApoio: TEXTO_FUVEST_2025_B_1,
    enunciado: `<p>De acordo com o texto, a pesquisa com caldo de cana apresentou resultados promissores em relação à sustentabilidade ambiental, porque</p>`,
    alternativas: [
      { letra: 'A', texto: 'o caldo <i>in natura</i> é obtido com facilidade, demandando somente a utilização das moendas, o que barateia os custos do processo.' },
      { letra: 'B', texto: 'a energia elétrica proveniente da célula a combustível é considerada limpa, já que esse dispositivo dispensa o uso de pilhas, cujo descarte constitui um problema ambiental.' },
      { letra: 'C', texto: 'a vinhaça, resíduo danoso ao meio ambiente, deixa de ser produzida ao se evitar a transformação do caldo de cana em álcool.', explicacao: 'Correta! O pesquisador afirma que “o uso do caldo de cana direto evita a formação de vinhaça, um resíduo ambientalmente perigoso decorrente da produção de etanol” — é esse o ganho ambiental apontado.' },
      { letra: 'D', texto: 'a célula a combustível se destaca pela economia energética gerada ao funcionar como uma pilha, reduzindo a quantidade de caldo de cana utilizada.' },
      { letra: 'E', texto: 'o Ipen não produz o caldo de cana em escala industrial, o que diminui a produção da vinhaça poluidora do meio ambiente.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'fuvest-2025-066',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 66,
    disciplina: 'Português',
    conteudo: ['por-2b2', 'por-2b4'],
    subtopico: 'Voz passiva sintética (pronome se)',
    dificuldade: 'media',
    textoApoio: TEXTO_FUVEST_2025_B_1,
    enunciado: `<p>Ao empregar o pronome <b><u>se</u></b> em “utilizou-se o caldo de cana em uma célula a combustível para gerar energia elétrica”, o pesquisador</p>`,
    alternativas: [
      { letra: 'A', texto: 'indetermina o sujeito, tentando mostrar que desconhece a real autoria do experimento.' },
      { letra: 'B', texto: 'valoriza o objeto “caldo de cana”, enfatizando a importância desse produto para o experimento.' },
      { letra: 'C', texto: 'chama a atenção para o verbo transitivo “utilizar”, valorizando a importância de se experimentar diretamente o caldo de cana.' },
      { letra: 'D', texto: 'faz uso da voz passiva, construção em que “caldo de cana” atua como sujeito, deixando de haver menção a quem realizou o experimento.', explicacao: 'Correta! “Utilizou-se o caldo de cana” = “o caldo de cana foi utilizado”: verbo transitivo direto + <i>se</i> (pronome apassivador) forma a voz passiva sintética; “o caldo de cana” é o sujeito paciente e o agente não é mencionado.' },
      { letra: 'E', texto: 'escolhe uma construção reflexiva em que “caldo de cana” é, ao mesmo tempo, o agente e o objeto do experimento realizado.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'fuvest-2025-067',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 67,
    disciplina: 'Biologia',
    conteudo: ['bio-1a3', 'bio-2b6'],
    subtopico: 'Células-tronco e diferenciação celular',
    dificuldade: 'facil',
    enunciado: `<p>Pesquisas e terapias com células-tronco têm se mostrado cada vez mais promissoras pela possibilidade de seu uso no tratamento de diferentes tipos de doenças, como câncer e doenças degenerativas. As células-tronco podem se diferenciar em células especializadas, conforme exemplificado a seguir.</p>
      <p>As células especializadas que derivam de uma mesma célula-tronco possuem os(as) mesmos(as)</p>`,
    imagem: 'imagens/estudo/fuvest-2025-067.webp',
    legenda: 'Disponível em https://upload.wikimedia.org/wikipedia/ (Adaptado).',
    alternativas: [
      { letra: 'A', texto: 'genes.', explicacao: 'Correta! As células especializadas surgem por mitoses a partir da mesma célula-tronco e carregam o mesmo DNA (os mesmos genes). A diferenciação vem da expressão gênica diferencial: cada tipo celular ativa genes distintos, produzindo RNAs e proteínas diferentes.' },
      { letra: 'B', texto: 'RNAs.' },
      { letra: 'C', texto: 'proteínas.' },
      { letra: 'D', texto: 'lipídeos.' },
      { letra: 'E', texto: 'organelas.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'fuvest-2025-068',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 68,
    disciplina: 'Geografia',
    conteudo: ['geo-4u5', 'geo-1u6'],
    subtopico: 'PIB e produção científica',
    dificuldade: 'media',
    enunciado: `<p>O gráfico a seguir apresenta dados do Produto Interno Bruto (PIB) por pessoa e dados de publicações científicas por milhão de habitantes para um grupo selecionado de países, além de destacar o estado de São Paulo.</p>
      <p>A partir da análise do gráfico e do texto, é correto afirmar:</p>`,
    imagem: 'imagens/estudo/fuvest-2025-068.webp',
    legenda: 'Revista Pesquisa FAPESP – Agosto/2022 (Adaptado).',
    alternativas: [
      { letra: 'A', texto: 'Irã, Tunísia e África do Sul possuem um PIB por pessoa abaixo da média mundial e apresentam um número de publicações científicas por milhão de habitantes superior ao da média mundial.', explicacao: 'Correta! No gráfico, Irã, Tunísia e África do Sul ficam à esquerda da linha vertical da média mundial de PIB por pessoa (abaixo dela) e acima da linha horizontal da média mundial de publicações por milhão de habitantes.' },
      { letra: 'B', texto: 'O estado de São Paulo possui uma quantidade de publicações por milhão de habitantes abaixo da média mundial, enquanto o Brasil, com um PIB por pessoa maior que o do estado paulista, tem uma quantidade de publicações maior.' },
      { letra: 'C', texto: 'Índia e Indonésia possuem um PIB por pessoa acima da média mundial, no entanto, o número de publicações por milhão de habitantes desses países é superior ao da média mundial.' },
      { letra: 'D', texto: 'Os países do Norte Global, embora tenham um PIB por pessoa maior que a média mundial, possuem uma quantidade menor de publicações por milhão de habitantes, se comparados com a média mundial.' },
      { letra: 'E', texto: 'Argentina, Tailândia e México, apesar de possuírem um PIB por pessoa abaixo da média mundial, apresentam produção científica por milhão de habitantes acima da média mundial.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'fuvest-2025-069',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 69,
    disciplina: 'Matemática',
    conteudo: ['mat-2a3', 'mat-2a2'],
    subtopico: 'Função modular e gráficos',
    dificuldade: 'dificil',
    enunciado: `<p>No plano cartesiano <i>Oxy</i>, o gráfico que melhor representa a função <i>f</i>(<i>x</i>) = |<i>x</i>² + 5<i>x</i> − 6| − 5<i>x</i> + 6 é dado por</p>`,
    alternativas: [
      { letra: 'A', texto: '<img src="imagens/estudo/fuvest-2025-069-a.webp" alt="Alternativa A: gráfico em forma de parábola com concavidade para cima e vértice perto da origem">' },
      { letra: 'B', texto: '<img src="imagens/estudo/fuvest-2025-069-b.webp" alt="Alternativa B: gráfico que desce até tocar o zero perto da origem e depois sobe; à esquerda, um trecho elevado">', explicacao: 'Correta! x² + 5x − 6 = (x + 6)(x − 1). Para x ≤ −6 ou x ≥ 1: f(x) = x² + 5x − 6 − 5x + 6 = x² (ramos de parábola, f(1) = 1, f(−6) = 36). Para −6 &lt; x &lt; 1: f(x) = −x² − 5x + 6 − 5x + 6 = −x² − 10x + 12, que vale 36 em x = −6, 12 em x = 0 e 1 em x = 1. É o gráfico B.' },
      { letra: 'C', texto: '<img src="imagens/estudo/fuvest-2025-069-c.webp" alt="Alternativa C: gráfico com valores negativos, concavidade para baixo">' },
      { letra: 'D', texto: '<img src="imagens/estudo/fuvest-2025-069-d.webp" alt="Alternativa D: parábola estreita com concavidade para cima e vértice na origem">' },
      { letra: 'E', texto: '<img src="imagens/estudo/fuvest-2025-069-e.webp" alt="Alternativa E: gráfico com concavidade para baixo e máximo à esquerda do eixo y">' },
    ],
    gabarito: 'B',
  },
  {
    id: 'fuvest-2025-070',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 70,
    disciplina: 'Matemática',
    conteudo: 'mat-3a4',
    subtopico: 'Progressão aritmética',
    dificuldade: 'media',
    enunciado: `<p>Seja (<i>a</i><sub><i>n</i></sub>) uma progressão aritmética cujo primeiro termo é <i>a</i><sub>1</sub> e a razão <i>r</i>, ambos números reais. É possível construir uma outra sequência (<i>b</i><sub><i>n</i></sub>), em que o primeiro termo é um número real <i>b</i><sub>1</sub> e com a seguinte lei de formação</p>
      <p style="text-align:center"><i>b</i><sub><i>n</i>+1</sub> = <i>b</i><sub><i>n</i></sub> + <i>a</i><sub><i>n</i></sub> ,</p>
      <p>sendo <i>n</i> &gt; 0 um número natural.</p>
      <p>Por exemplo, se <i>b</i><sub>1</sub> = 0 e</p>
      <p style="text-align:center">(<i>a</i><sub><i>n</i></sub>) = (1, 3, 5, 7, 9, 11, …) ,</p>
      <p>tem-se</p>
      <p style="text-align:center">(<i>b</i><sub><i>n</i></sub>) = (0, 1, 4, 9, 16, 25, …).</p>
      <p>Com base em tais informações, os valores de <i>a</i><sub>1</sub> e <i>r</i> foram escolhidos de forma que (<i>b</i><sub><i>n</i></sub>) também seja uma progressão aritmética de razão <i>r</i>′. Nessas condições, é correto afirmar:</p>`,
    alternativas: [
      { letra: 'A', texto: '<i>r</i>′ = <i>a</i><sub>1</sub>', explicacao: 'Correta! b<sub>n+1</sub> − b<sub>n</sub> = a<sub>n</sub>. Para (b<sub>n</sub>) ser PA, essa diferença tem de ser constante, ou seja, a<sub>n</sub> constante → r = 0 e a<sub>n</sub> = a<sub>1</sub> para todo n. Então r′ = a<sub>1</sub>.' },
      { letra: 'B', texto: '<i>r</i>′ = 2<i>a</i><sub>1</sub>' },
      { letra: 'C', texto: '<i>r</i>′ = <i>r</i>' },
      { letra: 'D', texto: '<i>r</i>′ = 2<i>r</i>' },
      { letra: 'E', texto: '<i>r</i>′ = <i>b</i><sub>1</sub> − <i>a</i><sub>1</sub>' },
    ],
    gabarito: 'A',
  },
  {
    id: 'fuvest-2025-071',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 71,
    disciplina: 'Biologia',
    conteudo: ['bio-1a5', 'bio-2a3'],
    subtopico: 'Resistência bacteriana a antibióticos',
    dificuldade: 'media',
    enunciado: `<p><b>Aumenta nos hospitais brasileiros a presença de bactérias resistentes a antibióticos</b></p>
      <p>“A disseminação de bactérias resistentes a antibióticos é um pesadelo mundial. Ela avança rapidamente e representa uma ameaça a uma das maiores conquistas da medicina moderna: a capacidade de eliminar infecções. Sem antibióticos eficientes, fica quase impossível realizar cirurgias, transplantes e outros tratamentos em segurança.</p>
      <p>Expostas à concentração adequada dos antibióticos e por tempo suficiente, as bactérias facilmente morrem. Se a dosagem e duração do tratamento forem inferiores ao necessário para aniquilá-las, uma parte pode sobreviver e se multiplicar, acumulando alterações no material genético que lhes permitem escapar à ação dos fármacos.</p>
      <p>As bactérias estão em todos os lugares: na água, no solo, no ar e nas superfícies, inclusive no nosso corpo. Com o uso intensivo de antibióticos na saúde humana e na produção de alimentos, as bactérias são continuamente expostas a esses fármacos. Esse contato favorece a seleção das variedades resistentes.”</p>
      <p><small>Revista Pesquisa FAPESP – Janeiro/2024 (Adaptado).</small></p>
      <p>O gráfico a seguir ilustra o crescimento de uma espécie de bactéria em meio de cultura, com e sem antibiótico. Foram testados três antibióticos diferentes (1, 2 e 3).</p>
      <p>Considerando o texto e o gráfico, sobre a resistência de bactérias a antibióticos, é correto afirmar:</p>`,
    imagem: 'imagens/estudo/fuvest-2025-071.webp',
    alternativas: [
      { letra: 'A', texto: 'A combinação de mais de um antibiótico durante um tratamento reduz a quantidade de antibióticos lançada na rede de esgoto e as chances de surgirem bactérias mutantes na natureza.' },
      { letra: 'B', texto: 'Para reduzir as chances de seleção de bactérias resistentes, é necessário aumentar a concentração de antibióticos presentes na natureza e matar as bactérias patogênicas livres.' },
      { letra: 'C', texto: 'Mutações aleatórias que acontecem nas bactérias, associadas à exposição prolongada a antibióticos, contribuem para a seleção de bactérias resistentes a antibióticos.', explicacao: 'Correta! As mutações surgem ao acaso; o antibiótico não as cria, mas mata as sensíveis e deixa as resistentes se multiplicarem (seleção natural). No gráfico, com o antibiótico 3 a população cai e depois volta a crescer: sobreviventes resistentes foram selecionadas.' },
      { letra: 'D', texto: 'O antibiótico 3 será eficiente, nas mesmas concentrações utilizadas no experimento, para tratar infecções causadas pelas linhagens de bactérias presentes no dia 16 de cultivo.' },
      { letra: 'E', texto: 'Dentre todos os antibióticos testados, o 2 é o mais eficiente para combater a bactéria do experimento relatado, enquanto o 1 é o menos eficiente.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'fuvest-2025-072',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 72,
    disciplina: 'Química',
    conteudo: ['qui-4a4', 'qui-3a2'],
    subtopico: 'pH e estequiometria',
    dificuldade: 'dificil',
    enunciado: `<p>A reação do antibiótico sulfanilamida com halogênios leva à reação de substituição com o halogênio em duas posições distintas do anel aromático, como representado na equação não balanceada a seguir.</p>
      <p>Em um experimento, 1 L de uma solução de sulfanilamida de pH 5 reagiu com Br<sub>2</sub> em excesso, obtendo-se pH 4 após reação total. Considerando que o volume se manteve inalterado após a adição do halogênio, quantos mols de sulfanilamida reagiram com bromo?</p>`,
    imagem: 'imagens/estudo/fuvest-2025-072.webp',
    alternativas: [
      { letra: 'A', texto: '4,5 × 10<sup>−5</sup>', explicacao: 'Correta! Cada molécula sofre duas substituições e libera 2 HBr (o subproduto). [H<sup>+</sup>] passa de 10<sup>−5</sup> (pH 5) para 10<sup>−4</sup> mol/L (pH 4): em 1 L, formaram-se 10<sup>−4</sup> − 10<sup>−5</sup> = 9,0 × 10<sup>−5</sup> mol de H<sup>+</sup>. Sulfanilamida = 9,0 × 10<sup>−5</sup> ÷ 2 = 4,5 × 10<sup>−5</sup> mol.' },
      { letra: 'B', texto: '9,0 × 10<sup>−5</sup>' },
      { letra: 'C', texto: '1,0 × 10<sup>−4</sup>' },
      { letra: 'D', texto: '5,0 × 10<sup>−2</sup>' },
      { letra: 'E', texto: '1,0 × 10<sup>−1</sup>' },
    ],
    gabarito: 'A',
  },
  {
    id: 'fuvest-2025-073',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 73,
    disciplina: 'Física',
    conteudo: 'fis-2b3',
    subtopico: 'Gases ideais',
    dificuldade: 'media',
    textoApoio: TEXTO_FUVEST_2025_B_2,
    imagem: 'imagens/estudo/fuvest-2025-073.webp',
    enunciado: `<p>Suponha que a reação produza 2 mols de CO<sub>2</sub> para cada 3 litros de vinagre. Nas condições do experimento, em que o volume de líquido é 1/3 de litro à temperatura <i>T</i> = 300 K, a pressão <i>P</i><sub>CO<sub>2</sub></sub> medida pelo manômetro será por volta de</p>
      <p><small><b>Note e adote:</b><br>Considere o CO<sub>2</sub> como um gás ideal.<br>Constante dos gases ideais: R = 0,08 atm.L/(K.mol).<br>Assuma que todo o ácido acético do vinagre reagiu com o bicarbonato de sódio e que o líquido resultante da reação ocupa aproximadamente o mesmo volume do vinagre antes da reação (V<sub>vin</sub>).</small></p>`,
    alternativas: [
      { letra: 'A', texto: '3,2 atm.', explicacao: 'Correta! Com 1/3 L de vinagre: n = (2/3) × (1/3) = 2/9 mol de CO<sub>2</sub>. O gás ocupa 2 − 1/3 = 5/3 L. P = nRT/V = (2/9 × 0,08 × 300) ÷ (5/3) = 5,33 × 0,6 ≈ 3,2 atm.' },
      { letra: 'B', texto: '4,1 atm.' },
      { letra: 'C', texto: '6,2 atm.' },
      { letra: 'D', texto: '9,0 atm.' },
      { letra: 'E', texto: '12 atm.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'fuvest-2025-074',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 74,
    disciplina: 'Física',
    conteudo: ['fis-2a1', 'fis-3b1'],
    subtopico: 'Pressão e 2ª lei de Newton',
    dificuldade: 'media',
    textoApoio: TEXTO_FUVEST_2025_B_2,
    imagem: 'imagens/estudo/fuvest-2025-073.webp',
    enunciado: `<p>Considere agora um outro experimento feito em condições semelhantes, em que o manômetro indica uma pressão de 5 atm e, sem que a pressão no interior da garrafa se altere, ele é cuidadosamente substituído por uma rolha de 10 g de massa e 2 cm de diâmetro (igual ao diâmetro interno do bocal da garrafa). Logo após a rolha ser encaixada no local, ela é expelida devido à pressão interna da garrafa ser maior que a pressão atmosférica.</p>
      <p>A aceleração da rolha no momento em que ela é expelida é de, aproximadamente,</p>
      <p><small><b>Note e adote:</b><br>Assuma que a pressão atmosférica seja de 1 atm = 10<sup>5</sup> Pa.<br>Utilize π = 3.<br>Considere que as forças relevantes atuando sobre a rolha no momento em que é expelida são apenas aquelas relativas à diferença de pressão entre os seus lados interno e externo.</small></p>`,
    alternativas: [
      { letra: 'A', texto: '12 m/s<sup>2</sup>.' },
      { letra: 'B', texto: '120 m/s<sup>2</sup>.' },
      { letra: 'C', texto: '1200 m/s<sup>2</sup>.' },
      { letra: 'D', texto: '12000 m/s<sup>2</sup>.', explicacao: 'Correta! ΔP = 5 − 1 = 4 atm = 4 × 10<sup>5</sup> Pa. Área: πr² = 3 × (0,01)² = 3 × 10<sup>−4</sup> m². F = ΔP·A = 120 N. a = F/m = 120/0,010 = 12 000 m/s².' },
      { letra: 'E', texto: '120000 m/s<sup>2</sup>.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'fuvest-2025-075',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 75,
    disciplina: 'Matemática',
    conteudo: 'mat-3a2',
    subtopico: 'Tronco de cone',
    dificuldade: 'media',
    enunciado: `<p>Um designer de produtos deseja fabricar um vaso para flores conforme a figura a seguir.</p>
      <p>Sabe-se que a base e o topo do vaso são uma circunferência de raio <i>R</i> que mede 10 cm, a parte central é uma circunferência de raio <i>r</i> de 5 cm e a medida <i>h</i> mede 12 cm.</p>
      <p>Qual é a capacidade volumétrica desse vaso em cm<sup>3</sup>?</p>`,
    imagem: 'imagens/estudo/fuvest-2025-075.webp',
    alternativas: [
      { letra: 'A', texto: '1400π', explicacao: 'Correta! O vaso são dois troncos de cone iguais, de altura h = 12 cm e raios 10 e 5 cm. Cada um: V = πh/3 (R² + Rr + r²) = π · 12/3 · (100 + 50 + 25) = 700π. Total: 2 × 700π = 1400π cm³.' },
      { letra: 'B', texto: '2100π' },
      { letra: 'C', texto: '2400π' },
      { letra: 'D', texto: '2600π' },
      { letra: 'E', texto: '2800π' },
    ],
    gabarito: 'A',
  },
  {
    id: 'fuvest-2025-076',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 76,
    disciplina: 'Matemática',
    conteudo: 'mat-3a2',
    subtopico: 'Cilindros — volume e área lateral',
    dificuldade: 'facil',
    enunciado: `<p>Considere um cilindro <i>C</i> de altura <i>h</i> &gt; 0 e cujo raio das circunferências, do topo e da base, é <i>r</i> &gt; 0; um cilindro <i>C</i><sub>1</sub> cujo raio é igual ao de <i>C</i> e altura igual a <i>h</i>/2; e um cilindro <i>C</i><sub>2</sub> com altura <i>h</i> e raio igual a <i>r</i>/2.</p>
      <p>Sendo <i>V</i>, <i>V</i><sub>1</sub> e <i>V</i><sub>2</sub> os volumes e <i>A</i>, <i>A</i><sub>1</sub> e <i>A</i><sub>2</sub> as áreas laterais dos cilindros <i>C</i>, <i>C</i><sub>1</sub> e <i>C</i><sub>2</sub>, respectivamente, é correto afirmar:</p>`,
    alternativas: [
      { letra: 'A', texto: '<i>V</i> = <i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> e <i>A</i> = <i>A</i><sub>1</sub> + <i>A</i><sub>2</sub>' },
      { letra: 'B', texto: '<i>V</i> = <i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> e <i>A</i> = <i>A</i><sub>1</sub> + 2<i>A</i><sub>2</sub>' },
      { letra: 'C', texto: '<i>V</i> = <i>V</i><sub>1</sub> + 2<i>V</i><sub>2</sub> e <i>A</i> = <i>A</i><sub>1</sub> + 2<i>A</i><sub>2</sub>' },
      { letra: 'D', texto: '<i>V</i> = <i>V</i><sub>1</sub> + 2<i>V</i><sub>2</sub> e <i>A</i> = <i>A</i><sub>1</sub> + <i>A</i><sub>2</sub>', explicacao: 'Correta! V = πr²h, V<sub>1</sub> = πr²h/2, V<sub>2</sub> = π(r/2)²h = πr²h/4 → V = V<sub>1</sub> + 2V<sub>2</sub>. A = 2πrh, A<sub>1</sub> = 2πr(h/2) = πrh, A<sub>2</sub> = 2π(r/2)h = πrh → A = A<sub>1</sub> + A<sub>2</sub>.' },
      { letra: 'E', texto: '<i>V</i> = 2<i>V</i><sub>1</sub> + 2<i>V</i><sub>2</sub> e <i>A</i> = 2<i>A</i><sub>1</sub> + 2<i>A</i><sub>2</sub>' },
    ],
    gabarito: 'D',
  },
  {
    id: 'fuvest-2025-077',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 77,
    disciplina: 'Matemática',
    conteudo: 'mat-4b2',
    subtopico: 'Circunferências — posição relativa',
    dificuldade: 'facil',
    enunciado: `<p>Em relação ao plano cartesiano <i>Oxy</i>, é correto afirmar que as equações</p>
      <p style="text-align:center"><i>x</i>² + <i>y</i>² − 4<i>x</i> = −3 &nbsp;&nbsp; e &nbsp;&nbsp; <i>x</i>² + <i>y</i>² − 4<i>y</i> = −3</p>
      <p>representam</p>`,
    alternativas: [
      { letra: 'A', texto: 'duas circunferências com raios de mesma medida e que se interceptam em dois pontos.' },
      { letra: 'B', texto: 'duas circunferências com raios de medidas diferentes e que se interceptam em dois pontos.' },
      { letra: 'C', texto: 'duas circunferências que se interceptam em um único ponto.' },
      { letra: 'D', texto: 'duas circunferências concêntricas e que não se interceptam.' },
      { letra: 'E', texto: 'duas circunferências com centros distintos e que não se interceptam.', explicacao: 'Correta! Completando quadrados: (x − 2)² + y² = 1 (centro (2, 0), raio 1) e x² + (y − 2)² = 1 (centro (0, 2), raio 1). A distância entre os centros é 2√2 ≈ 2,83, maior que a soma dos raios (2): as circunferências são externas, sem ponto comum.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'fuvest-2025-078',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 78,
    disciplina: 'Inglês',
    subtopico: 'Interpretação de Texto',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/fuvest-2025-078.webp',
    legenda: 'Disponível em https://andertoons.com/math/cartoon/7359/.',
    enunciado: `<p>Contribui para o efeito de comicidade do cartum a</p>`,
    alternativas: [
      { letra: 'A', texto: 'atitude do docente diante da apatia do grupo, incapaz de produzir uma resposta.' },
      { letra: 'B', texto: 'certeza do aluno em seu argumento, desafiando a autoridade do professor.', explicacao: 'Correta! O aluno protesta (“Hold on… X was 10. Now it’s 6. What’s going on around here?!”) convicto de que o professor errou, confundindo o X da álgebra com o numeral romano X; o humor vem dessa certeza que desafia o professor.' },
      { letra: 'C', texto: 'interpretação por parte do discente de símbolos matemáticos ligados à teoria dos conjuntos.' },
      { letra: 'D', texto: 'adoção pelo professor de duas formas semelhantes e eficazes de resolver a mesma equação.' },
      { letra: 'E', texto: 'rivalidade entre os colegas para determinar quem possui mais conhecimento.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'fuvest-2025-079',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 79,
    disciplina: 'História',
    conteudo: ['his-1a6', 'his-1a8'],
    subtopico: 'Invasões bárbaras no Império Romano',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/fuvest-2025-079.webp',
    legenda: 'Migrações e invasões no Império Romano, séculos IV e V.<br><small>Disponível em https://www.britannica.com/ (Adaptado).</small>',
    enunciado: `<p>A análise do mapa permite identificar deslocamentos de povos não romanos caracterizados</p>`,
    alternativas: [
      { letra: 'A', texto: 'pela concentração de rotas migratórias em território bizantino.' },
      { letra: 'B', texto: 'pela inexistência de invasões direcionadas para o norte da África.' },
      { letra: 'C', texto: 'pela inexpressiva diversidade de povos das correntes migratórias.' },
      { letra: 'D', texto: 'pela proeminência de migrações na porção ocidental do Império Romano.', explicacao: 'Correta! No mapa, as rotas de godos, visigodos, francos, vândalos, anglos e saxões, hunos etc. se concentram no Império Romano do Ocidente (Gália, Hispânia, Itália, norte da África), que acabou caindo em 476; o Oriente foi pouco atingido.' },
      { letra: 'E', texto: 'pelo predomínio de invasões por rotas marítimas em detrimento das rotas terrestres.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'fuvest-2025-080',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 80,
    disciplina: 'História',
    conteudo: 'his-2a2',
    subtopico: 'Reforma Protestante e capitalismo',
    dificuldade: 'media',
    enunciado: `<p>Leia o excerto a seguir de <i>A Ética Protestante e o Espírito do Capitalismo</i>, de Max Weber.</p>
      <p>“Temos de nos emancipar da seguinte visão: que se pode deduzir a Reforma das transformações econômicas como algo ‘necessário em termos de desenvolvimento histórico’. Por outro lado, não se deve de forma alguma defender uma tese tão disparatadamente doutrinária que afirmasse que o ‘espírito capitalista’ pôde surgir somente como resultado de determinados influxos da Reforma.</p>
      <p>Em face da enorme barafunda de influxos recíprocos entre as bases materiais, as formas de organização social e política e o conteúdo espiritual das épocas culturais da Reforma, procederemos tão-só de modo a examinar de perto se, e em quais pontos, podemos reconhecer determinadas ‘afinidades eletivas’ entre certas formas da fé religiosa e certas formas da ética profissional. Por esse meio serão elucidados o efeito que, em virtude de tais afinidades eletivas, o movimento religioso exerceu sobre o desenvolvimento da cultura material.”</p>
      <p><small>WEBER, Max. A Ética Protestante e o Espírito do Capitalismo. São Paulo: Companhia das Letras, 2004, p.82-83 (Adaptado).</small></p>
      <p>A partir da ideia expressa no excerto acerca da relação entre o desenvolvimento do capitalismo e alguns elementos da doutrina calvinista, é correto afirmar que</p>`,
    alternativas: [
      { letra: 'A', texto: 'as ideias calvinistas impulsionaram o capitalismo e levaram os comerciantes germânicos a buscar a acumulação irrestrita de capitais.' },
      { letra: 'B', texto: 'o crescimento acelerado dos mercados consumidores facilitou, no século XVI, a aceitação das ideias calvinistas pelos banqueiros e negociantes europeus.' },
      { letra: 'C', texto: 'as condições materiais, sociais e políticas da Europa Central contribuíram, no século XVI, para a expansão do capitalismo e para a repressão do calvinismo.' },
      { letra: 'D', texto: 'a união entre os comerciantes contra o Sacro Império Romano Germânico e contra o Papado determinou a adoção de práticas capitalistas e calvinistas na Europa medieval.' },
      { letra: 'E', texto: 'a defesa calvinista do trabalho árduo e o estímulo ao comportamento austero do crente tiveram impactos positivos na formação de condutas adequadas ao desenvolvimento do capitalismo.', explicacao: 'Correta! Weber recusa relações de causa única e fala em “afinidades eletivas”: a ética calvinista (trabalho como vocação, disciplina, poupança, vida austera) favoreceu condutas compatíveis com o capitalismo, sem tê-lo causado sozinha.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'fuvest-2025-081',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 81,
    disciplina: 'Geografia',
    conteudo: 'geo-2u4',
    subtopico: 'Industrialização brasileira',
    dificuldade: 'facil',
    enunciado: `<p>“O eixo econômico do país, que já havia se deslocado para a zona de mineração, caminhou mais uma vez, deslocando-se em direção às ondulações do planalto paulista, que foram se recobrindo pelo verde escuro dos cafezais. Enquanto outras regiões brasileiras vegetavam ou iniciavam mesmo um processo de decadência econômica, a Província, logo depois estado de São Paulo, apresentava uma ascensão esplêndida e vigorosa.”</p>
      <p><small>PETRONE, Pasquale. As indústrias paulistanas e os fatores de sua expansão. Terra Livre. 1953, p. 27 (Adaptado).</small></p>
      <p>Sobre a industrialização no território brasileiro, é correto afirmar:</p>`,
    alternativas: [
      { letra: 'A', texto: 'Tal como São Paulo, a Zona Franca de Manaus teve a expansão de suas indústrias dada pelo potencial do mercado consumidor local dos produtos resultantes da industrialização.' },
      { letra: 'B', texto: 'O Nordeste teve sua expansão industrial durante o Estado Novo, em razão da alta concentração de capitais dos estados da região, permitindo conexões dos seus polos industriais já consolidados.' },
      { letra: 'C', texto: 'O <i>boom</i> industrial que aconteceu na região Sul, a partir da década de 1980, foi similar ao desenvolvimento ocorrido no Sudeste, onde a mão de obra especializada aumentou a produção.' },
      { letra: 'D', texto: 'A concentração industrial no Sudeste ocorreu devido à existência de mercado consumidor, de capitais, de mão de obra disponível e de maior capacidade dos meios de transporte.', explicacao: 'Correta! A economia cafeeira gerou capitais, ferrovias e portos, atraiu imigrantes (mão de obra) e formou um mercado consumidor urbano — fatores que concentraram a indústria no Sudeste, sobretudo em São Paulo.' },
      { letra: 'E', texto: 'A região Centro-Oeste contou com a facilidade de obtenção de energia, por meio de hidrelétricas e termoelétricas, além da densa malha viária para o seu desenvolvimento industrial.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'fuvest-2025-084',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 84,
    disciplina: 'Literatura',
    subtopico: 'Interpretação de Texto Literário',
    dificuldade: 'dificil',
    enunciado: `<p>Leia os trechos das obras <i>Marília de Dirceu</i> e <i>Romanceiro da Inconfidência</i>:</p>
      <p><b>Lira VII (Parte II)</b><br>
      “Meu prezado Glauceste,<br>
      Se fazes o conceito<br>
      Que, bem que réu, abrigo<br>
      A cândida Virtude no meu peito;<br>
      Se julgas, digo, que mereço ainda<br>
      Da tua mão socorro;<br>
      Ah! Vem dar-mo agora,<br>
      Agora, sim, que morro!<br>
      Não quero que, montado<br>
      No Pégaso fogoso,<br>
      Venhas com dura lança<br>
      Ao monstro infame traspassar, raivoso.<br>
      Deixa que viva a pérfida calúnia,<br>
      E forje o meu tormento:<br>
      Com menos, meu Glauceste,<br>
      Com menos me contento.”<br>
      <small>Tomás Antônio Gonzaga. Marília de Dirceu.</small></p>
      <p><b>Romance LXVI ou De Outros Maldizentes</b><br>
      “- Que fica, na fortaleza,<br>
      daquele poeta Gonzaga?<br>
      - Um par de esporas, somente.<br>
      Um par de esporas de prata.<br>
      (...)<br>
      Dizem que tinha um cavalo<br>
      que Pégaso se chamava.<br>
      Não pisava neste mundo,<br>
      mas nos planaltos da Arcádia!”<br>
      <small>Cecília Meireles. Romanceiro da Inconfidência.</small></p>
      <p>Considerando o substantivo <i>Pégaso</i>, presente nos dois excertos, é correto afirmar:</p>`,
    alternativas: [
      { letra: 'A', texto: 'No poema de Cecília Meireles, a referência tem por objetivo destacar o animal mítico, enquanto na lira de Gonzaga o substantivo se refere a um animal real.' },
      { letra: 'B', texto: 'No poema de Gonzaga, a referência ao animal mitológico serve para aludir às características heroicas de Glauceste, enquanto, no poema de Cecília Meireles, Pégaso alude à criação poética.', explicacao: 'Correta! Na lira, Gonzaga imagina Glauceste (Cláudio Manuel da Costa) como um herói que, “montado no Pégaso fogoso”, viria com lança matar o “monstro” da calúnia. Em Cecília, o “cavalo” que não pisava no mundo, mas “nos planaltos da Arcádia”, é a própria poesia árcade de Gonzaga: Pégaso é o símbolo da inspiração poética.' },
      { letra: 'C', texto: 'Por pretender um tom épico, Cecília Meireles usa o animal mitológico para distinguir a condição heroica do poeta, enquanto Gonzaga se refere às suas diferenças com Glauceste.' },
      { letra: 'D', texto: 'No poema de Cecília Meireles, a metáfora do cavalo alado indica a evasão da realidade, típica dos poetas árcades, enquanto, no poema de Gonzaga, a referência ao animal serve para aludir às suas próprias características heroicas.' },
      { letra: 'E', texto: 'A referência ao cavalo alado provoca um efeito de estranhamento no leitor, tendo em vista as características específicas de cada obra poética.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'fuvest-2025-085',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 85,
    disciplina: 'História',
    conteudo: ['his-2b1', 'his-1b7'],
    subtopico: 'Inconfidência Mineira',
    dificuldade: 'media',
    enunciado: `<p>“Se a derrama for lançada,<br>
      há levante, com certeza.<br>
      Corre-se por essas ruas?<br>
      Corta-se alguma cabeça?<br>
      Do cimo de alguma escada,<br>
      profere-se alguma arenga?<br>
      Que bandeira se desdobra?<br>
      Com que figura ou legenda?<br>
      Coisas da Maçonaria,<br>
      do Paganismo ou da Igreja?<br>
      A Santíssima Trindade?<br>
      Um gênio a quebrar algemas?<br>
      Atrás de portas fechadas,<br>
      à luz de velas acesas,<br>
      entre sigilo e espionagem,<br>
      acontece a Inconfidência.”</p>
      <p>Os versos de Cecília Meireles, no <i>Romanceiro da Inconfidência</i>, remetem</p>`,
    alternativas: [
      { letra: 'A', texto: 'à insurreição promovida por maçons e reinóis, adeptos do iluminismo, contra a cobrança do quinto real sobre a exploração de diamantes na Capitania de Minas Gerais.' },
      { letra: 'B', texto: 'à possibilidade de sublevação motivada pela defesa da liberdade, por indivíduos de diferentes setores de Minas Gerais, ante a ameaça de cobrança de impostos metropolitanos.', explicacao: 'Correta! A Inconfidência Mineira (1789) seria deflagrada com a derrama (cobrança forçada dos quintos de ouro atrasados); reunia gente de vários setores (mineradores, padres, militares, intelectuais), inspirada em ideais de liberdade, e foi tramada em segredo — o que os versos sugerem.' },
      { letra: 'C', texto: 'à disputa entre católicos apoiadores do recolhimento do dízimo nas Minas Gerais e republicanos defensores da suspensão de impostos cobrados pelo Estado e pela Igreja.' },
      { letra: 'D', texto: 'ao movimento de setores reacionários da sociedade mineira, responsáveis por conspirar contra os idealizadores da Conjuração e denunciar os seus planos de revolução.' },
      { letra: 'E', texto: 'à trapaça e delação, que fizeram parte da Conjuração e ocorreram em razão das discrepâncias ideológicas dos denunciantes em relação aos rebelados.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'fuvest-2025-087',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 87,
    disciplina: 'História',
    conteudo: 'his-1b4',
    subtopico: 'Comércio atlântico Brasil–África',
    dificuldade: 'facil',
    enunciado: `<p><b>Tecidos de Ijebu</b></p>
      <p>“Os ijebus vestem-se quase sempre com panos produzidos por eles próprios. São fazendas de algodão, matéria-prima que obtêm localmente. Nas famílias, as tarefas de colher algodão, fiá-lo, tecê-lo e tingi-lo estão costumeiramente a cargo das mulheres, e sabe-se ser muito grande a quantidade de tecidos manufaturados em Ijebu e dali exportados, não apenas para os países vizinhos, mas até mesmo para o Brasil, cujos navios vêm buscar em Lagos essa mercadoria tão apreciada pela gente de origem africana transplantada para aquela terra distante. As cores mais comuns, depois da branca e da azul, são a amarela, a vermelha, a carmesim e a verde. Alguns panos são de uma só cor, outros são multicoloridos.”</p>
      <p><small>OSIFEKUNDE. Notícia sobre o país e o povo dos Ijebus. In: COSTA E SILVA, Alberto. Imagens da África. São Paulo: Penguin, 2012. p.361.</small></p>
      <p>O texto é parte de um relato das memórias de um ex-escravizado natural de Ijebu, na atual Nigéria, trazido ao Brasil no início do século XIX. O excerto faz menção</p>`,
    alternativas: [
      { letra: 'A', texto: 'à existência de um comércio de produtos manufaturados entre a África e a América.', explicacao: 'Correta! O relato diz que tecidos manufaturados em Ijebu eram exportados até para o Brasil, cujos navios iam buscá-los em Lagos: havia comércio de manufaturas africanas com a América, além do tráfico de pessoas.' },
      { letra: 'B', texto: 'à prerrogativa masculina na produção de tecidos naquela região da África.' },
      { letra: 'C', texto: 'à baixa qualidade das manufaturas africanas em comparação com as da Europa.' },
      { letra: 'D', texto: 'à impossibilidade de acesso, por africanos e afrodescendentes, a produtos vindos da África.' },
      { letra: 'E', texto: 'ao comércio de africanos escravizados para o trabalho nas plantações de algodão.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'fuvest-2025-088',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 88,
    disciplina: 'Geografia',
    conteudo: 'geo-c3',
    subtopico: 'Sahel',
    dificuldade: 'facil',
    enunciado: `<p>“Consiste em uma faixa de terra semiárida e árida que contorna a borda sul do Deserto do Saara e percorre a extensão da África no sentido leste-oeste. Atua como um cinturão que divide o continente africano em dois, a África majoritariamente islâmica, ao norte, e a cristã, ao sul. Englobando ao menos onze países, a região é lar para dezenas de grupos étnicos.”</p>
      <p><small>VAGEN, Tor-Gunnar; GUMBRICHT, Thomas. UNEP/ONU, 2012 (Adaptado).</small></p>
      <p>O texto descreve características da região denominada de</p>`,
    alternativas: [
      { letra: 'A', texto: 'Chifre da África.' },
      { letra: 'B', texto: 'África Meridional.' },
      { letra: 'C', texto: 'África Setentrional.' },
      { letra: 'D', texto: 'Rift Valley.' },
      { letra: 'E', texto: 'Sahel.', explicacao: 'Correta! O Sahel é a faixa semiárida de transição ao sul do Saara, que atravessa a África de oeste a leste (do Senegal ao Sudão/Eritreia) e separa o norte islâmico do sul majoritariamente cristão.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'fuvest-2025-089',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 89,
    disciplina: 'História',
    conteudo: 'his-3a7',
    subtopico: 'Identidades africanas',
    dificuldade: 'media',
    enunciado: `<p>“Aconteceu num debate, num país europeu. Da assistência alguém me lançou a seguinte pergunta:</p>
      <p>- Para si, o que é ser africano?</p>
      <p>Falava-se, inevitavelmente, de identidade <i>versus</i> globalização. Respondi com uma pergunta:</p>
      <p>- E para si, o que é ser europeu?</p>
      <p>O homem gaguejou. Não sabia responder. Mas o interessante é que, para ele, a questão da identidade se colocava naturalmente para os africanos. Não para os europeus. Ele nunca tinha colocado a questão no espelho.</p>
      <p>Recordo o episódio porque me parece que ele toca uma questão central: quando se fala de África, de qual África estamos falando? Terá o continente africano uma essência facilmente capturável? Haverá uma substância exótica que os caçadores de identidades possam recolher como sendo a alma africana?”</p>
      <p><small>COUTO, Mia. “Um retrato sem moldura”. In: HERNANDEZ, Leila Leite. A África na sala de aula: visita à história contemporânea. São Paulo: Selo Negro, 2008. p.11.</small></p>
      <p>Ao relatar e comentar o episódio, o escritor moçambicano Mia Couto apresenta a África como</p>`,
    alternativas: [
      { letra: 'A', texto: 'uma construção histórica proporcionada pela ação humanitária dos colonizadores europeus.' },
      { letra: 'B', texto: 'um resultado natural da luta dos povos do continente contra a dominação estrangeira.' },
      { letra: 'C', texto: 'uma região historicamente afetada por graves problemas demográficos e sanitários.' },
      { letra: 'D', texto: 'um continente definido a partir de critérios políticos e geográficos deterministas.' },
      { letra: 'E', texto: 'um mosaico composto por relações econômicas, políticas e culturais instáveis.', explicacao: 'Correta! Ao perguntar “de qual África estamos falando?” e negar uma “essência” ou “alma africana” única, Mia Couto apresenta o continente como diverso e plural — um mosaico de realidades, e não uma identidade homogênea e fixa.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'fuvest-2025-090',
    prova: 'Fuvest 2025',
    vestibular: 'Fuvest', ano: 2025,
    numeroOriginal: 90,
    disciplina: 'História',
    conteudo: 'his-3b6',
    subtopico: 'Estado Novo e nacionalismo cultural',
    dificuldade: 'facil',
    enunciado: `<p>“Brasil, meu Brasil brasileiro<br>
      Meu mulato inzoneiro<br>
      Vou cantar-te nos meus versos<br>
      O Brasil, samba que dá<br>
      Bamboleio, que faz gingar<br>
      O Brasil do meu amor<br>
      Terra de Nosso Senhor<br>
      Brasil, pra mim<br>
      Ô, abre a cortina do passado<br>
      Tira a mãe preta do cerrado<br>
      Bota o Rei Congo no congado<br>
      Brasil, pra mim (...)<br>
      Ô! Esse coqueiro que dá coco<br>
      Onde eu amarro a minha rede<br>
      Nas noites claras de luar<br>
      Brasil, pra mim<br>
      Ô! Ouve essas fontes murmurantes<br>
      Onde eu mato a minha sede<br>
      E onde a lua vem brincar<br>
      Ô! Este Brasil lindo e trigueiro<br>
      É o meu Brasil, brasileiro<br>
      Terra de samba e pandeiro<br>
      Brasil, pra mim”</p>
      <p>A canção <i>Aquarela do Brasil</i> foi composta por Ari Barroso e lançada no ano de 1939. Sua letra permite identificar temas que guardam afinidades com a política cultural do Estado Novo, podendo ser destacada a</p>`,
    alternativas: [
      { letra: 'A', texto: 'discriminação em relação a afrodescendentes.' },
      { letra: 'B', texto: 'exaltação das virtudes naturais e nacionais.', explicacao: 'Correta! A canção, marco do “samba-exaltação”, celebra a natureza (coqueiro, luar, fontes) e símbolos da nação (samba, mestiçagem, congado) — o ufanismo e a construção de uma identidade nacional que a política cultural do Estado Novo (DIP) promovia.' },
      { letra: 'C', texto: 'concepção civilizatória assentada na religião católica.' },
      { letra: 'D', texto: 'valorização da cultura cabocla e do regionalismo.' },
      { letra: 'E', texto: 'escolha do malandro como símbolo nacional.' },
    ],
    gabarito: 'B',
  },
);
