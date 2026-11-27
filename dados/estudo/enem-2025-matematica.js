/**
 * ENEM 2025 — 2º dia, caderno 7 (AZUL) — Matemática e suas Tecnologias (questões 136 a 180).
 *
 * Fonte: Provas/Outros/ENEM/2025_PV_D2_CD7.pdf (prova) e 2025_GB_D2_CD7.pdf (gabarito oficial).
 * Questões de ESTUDO — nunca entram nos simulados.
 * Anulada (fica de fora): 174.
 * Formato das questões: veja README.md ("Como adicionar uma questão nova").
 */

QUESTOES.push(
  {
    id: 'enem-2025-136',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 136,
    disciplina: 'Matemática',
    conteudo: 'mat-1a4',
    subtopico: 'Razão e proporção',
    dificuldade: 'facil',
    imagem: null,
    enunciado: `<p>Uma pessoa pretende instalar um kit de gás natural veicular (GNV) em seu carro. Na loja que escolheu para realizar a compra e instalação desse kit, havia cinco modelos de cilindro para armazenamento do gás, cujas capacidades, em metro cúbico, eram, respectivamente: 10, 14, 17, 21 e 25. O preço do cilindro é proporcional à sua capacidade. Esse carro rodará 30 km diariamente, 7 dias por semana, e o consumo do GNV é de 1 m<sup>3</sup> a cada 13 km rodados. A pessoa escolherá o modelo de cilindro de menor preço e que garanta apenas um abastecimento semanal.</p>
<p>Nessas condições, qual será a capacidade, em metro cúbico, do cilindro escolhido por essa pessoa?</p>`,
    alternativas: [
      { letra: 'A', texto: '10' },
      { letra: 'B', texto: '14' },
      { letra: 'C', texto: '17', explicacao: 'Correta! Por semana o carro roda 30 × 7 = 210 km e consome 210 ÷ 13 ≈ 16,2 m³. O menor (e mais barato) cilindro que comporta isso é o de 17 m³.' },
      { letra: 'D', texto: '21' },
      { letra: 'E', texto: '25' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-137',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 137,
    disciplina: 'Matemática',
    conteudo: ['mat-3b3', 'mat-1a5'],
    subtopico: 'Probabilidade',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-137.webp',
    legendaAcima: '<b>Perfil dos brasileiros nas redes sociais</b>',
    legenda: '<small>Disponível em: http://revistagalileu.globo.com. Acesso em: 22 out. 2015 (adaptado).</small>',
    enunciado: `<p>A reportagem de uma revista abordou o uso de redes sociais pelos internautas brasileiros. Alguns dos dados apurados pela reportagem estão apresentados no infográfico.</p>
<p>Segundo os dados do infográfico, ao se escolher aleatoriamente um internauta brasileiro no período ao qual se refere a reportagem, a probabilidade de ele ser um homem que acessa alguma rede social é</p>`,
    alternativas: [
      { letra: 'A', texto: '30/90' },
      { letra: 'B', texto: '36/100', explicacao: 'Correta! 90% dos internautas acessam redes sociais e, desses, 40% são homens (100% − 60%). Logo, P = 0,90 × 0,40 = 0,36 = 36/100.' },
      { letra: 'C', texto: '40/100' },
      { letra: 'D', texto: '40/90' },
      { letra: 'E', texto: '46/90' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-138',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 138,
    disciplina: 'Matemática',
    conteudo: 'mat-3a1',
    subtopico: 'Projeções ortogonais no espaço',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-138.webp',
    enunciado: `<p>Em um jogo de computador, um cubo se encontra inicialmente posicionado conforme indicado na figura.</p>
<p>Cada deslocamento efetuado por esse cubo se dá sempre em uma das direções definidas pelos três eixos coordenados. Ao se movimentar a partir da posição inicial, esse cubo se aproximou 3 unidades do plano <i>yz</i>, se afastou 5 unidades do plano <i>xz</i> e se aproximou 4 unidades do plano <i>xy</i>.</p>
<p>A figura que apresenta as projeções ortogonais desse cubo sobre os três planos coordenados, após efetuar as movimentações descritas, é</p>`,
    alternativas: [
      { letra: 'A', texto: '<img src="imagens/estudo/enem-2025-138-a.webp" alt="Alternativa A: projeções do cubo nos três planos coordenados">' },
      { letra: 'B', texto: '<img src="imagens/estudo/enem-2025-138-b.webp" alt="Alternativa B: projeções do cubo nos três planos coordenados">' },
      { letra: 'C', texto: '<img src="imagens/estudo/enem-2025-138-c.webp" alt="Alternativa C: projeções do cubo nos três planos coordenados">' },
      { letra: 'D', texto: '<img src="imagens/estudo/enem-2025-138-d.webp" alt="Alternativa D: projeções do cubo nos três planos coordenados">' },
      { letra: 'E', texto: '<img src="imagens/estudo/enem-2025-138-e.webp" alt="Alternativa E: projeções do cubo nos três planos coordenados">', explicacao: 'Correta! Aproximar-se de yz diminui o x em 3; afastar-se de xz aumenta o y em 5 (o cubo passa de y entre 1 e 2 para y entre 6 e 7); aproximar-se de xy diminui o z em 4 (de z entre 6 e 7 para z entre 2 e 3). Na figura E, a projeção no plano yz está em y de 6 a 7 e z de 2 a 3, e as projeções em xz e xy são coerentes com esses deslocamentos.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-139',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 139,
    disciplina: 'Matemática',
    conteudo: 'mat-2b4',
    subtopico: 'Comprimento da circunferência',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-139.webp',
    enunciado: `<p>No entorno de uma lagoa circular, cujo raio mede 1 km, há um uma ciclovia. Devido aos frequentes roubos de bicicleta, a prefeitura planeja alocar policiais em posições estratégicas para patrulhar essa ciclovia, de forma a torná-la totalmente protegida. Um ponto da ciclovia é considerado protegido se houver pelo menos um policial a, no máximo, 200 m de distância daquele ponto, posicionado sobre a ciclovia. A figura ilustra um ponto <i>P</i> sobre a ciclovia, que estará protegido se houver pelo menos um policial posicionado sobre a região de cor cinza escuro.</p>
<p>Desconsidere a largura da pista da ciclovia e utilize 3 como aproximação para π.</p>
<p>Nessas condições, a quantidade mínima necessária de policiais a serem alocados ao longo dessa ciclovia para torná-la protegida é</p>`,
    alternativas: [
      { letra: 'A', texto: '4.' },
      { letra: 'B', texto: '8.' },
      { letra: 'C', texto: '15.', explicacao: 'Correta! A ciclovia mede 2πr = 2 × 3 × 1 km = 6 km = 6 000 m. Cada policial protege 200 m para cada lado, ou seja, 400 m de pista: 6 000 ÷ 400 = 15 policiais.' },
      { letra: 'D', texto: '30.' },
      { letra: 'E', texto: '60.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-140',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 140,
    disciplina: 'Matemática',
    conteudo: 'mat-1a5',
    subtopico: 'Porcentagem',
    dificuldade: 'media',
    imagem: null,
    enunciado: `<p>Em um laboratório, um recipiente contém 10 litros de uma solução composta apenas pelas substâncias S<sub>1</sub> e S<sub>2</sub>. Dessa solução, 99,95% é de S<sub>1</sub>. Uma quantidade de S<sub>1</sub> será retirada dessa solução, mantendo a quantidade inicial de S<sub>2</sub>, de modo que 99,90% da nova solução seja de S<sub>1</sub>.</p>
<p>Qual é a quantidade de S<sub>1</sub>, em litro, que será retirada?</p>`,
    alternativas: [
      { letra: 'A', texto: '0,0050' },
      { letra: 'B', texto: '0,0100' },
      { letra: 'C', texto: '0,5000' },
      { letra: 'D', texto: '4,9775' },
      { letra: 'E', texto: '5,0000', explicacao: 'Correta! S₂ = 0,05% de 10 L = 0,005 L, e essa quantidade não muda. Na nova solução S₂ deve ser 0,10% do total: total = 0,005 ÷ 0,001 = 5 L. Logo, retiram-se 10 − 5 = 5 L de S₁.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-141',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 141,
    disciplina: 'Matemática',
    conteudo: 'mat-1a4',
    subtopico: 'Problemas com as quatro operações',
    dificuldade: 'facil',
    imagem: null,
    enunciado: `<p>Uma distribuidora de combustível possui caminhões-tanque com capacidade de 30 000 litros cada. Em qualquer transporte realizado por esses caminhões, um mesmo volume de combustível é descartado, pois fica com muitas impurezas. Esse volume descartado independe da quantidade transportada.</p>
<p>Um posto de combustível encomendou 10 000 litros de gasolina dessa distribuidora, que enviou 10 200 litros, considerando o volume descartado no transporte. Mesmo assim, a quantidade de gasolina entregue ao posto foi de 9 900 litros.</p>
<p>Em um novo pedido, esse posto solicitou que fosse entregue exatamente o dobro do volume de gasolina encomendado no pedido anterior.</p>
<p>Utilizando o mesmo caminhão da entrega anterior, qual é o volume mínimo de gasolina, em litro, que a distribuidora deverá enviar para garantir a entrega da quantidade encomendada nesse novo pedido?</p>`,
    alternativas: [
      { letra: 'A', texto: '20 100' },
      { letra: 'B', texto: '20 200' },
      { letra: 'C', texto: '20 300', explicacao: 'Correta! O volume descartado é 10 200 − 9 900 = 300 L (fixo). Para entregar 2 × 10 000 = 20 000 L, é preciso enviar 20 000 + 300 = 20 300 L.' },
      { letra: 'D', texto: '20 400' },
      { letra: 'E', texto: '20 600' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-142',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 142,
    disciplina: 'Matemática',
    conteudo: 'mat-3b1',
    subtopico: 'Mediana',
    dificuldade: 'facil',
    imagem: null,
    enunciado: `<p>Uma empresa de tecnologia vai padronizar a velocidade de conexão de internet que oferece a seus clientes em dez cidades. A direção da empresa decide que seu novo padrão de velocidade de referência será a mediana dos valores das velocidades de referência de conexões nessas dez cidades. Esses valores, em megabyte por segundo (MB/s), são apresentados no quadro.</p>
<table class="tabela-prova">
  <tr><th>Cidades</th><th>Velocidade de referência (MB/s)</th></tr>
  <tr><td>C1</td><td>390</td></tr>
  <tr><td>C2</td><td>380</td></tr>
  <tr><td>C3</td><td>320</td></tr>
  <tr><td>C4</td><td>390</td></tr>
  <tr><td>C5</td><td>340</td></tr>
  <tr><td>C6</td><td>380</td></tr>
  <tr><td>C7</td><td>390</td></tr>
  <tr><td>C8</td><td>400</td></tr>
  <tr><td>C9</td><td>350</td></tr>
  <tr><td>C10</td><td>360</td></tr>
</table>
<p>A velocidade de referência, em megabyte por segundo, a ser adotada por essa empresa é</p>`,
    alternativas: [
      { letra: 'A', texto: '360.' },
      { letra: 'B', texto: '370.' },
      { letra: 'C', texto: '380.', explicacao: 'Correta! Em ordem: 320, 340, 350, 360, 380, 380, 390, 390, 390, 400. Com 10 valores, a mediana é a média do 5º e do 6º termos: (380 + 380) ÷ 2 = 380.' },
      { letra: 'D', texto: '390.' },
      { letra: 'E', texto: '400.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-143',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 143,
    disciplina: 'Matemática',
    conteudo: 'mat-1a4',
    subtopico: 'Problemas com as quatro operações',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-143.webp',
    enunciado: `<p>Na cantina de uma escola, há cinco alimentos vendidos em pacotes com diferentes quantidades de porções.</p>
<p>As informações nutricionais contidas nos rótulos desses produtos estão indicadas nas imagens.</p>
<p>Uma estudante opta sempre pelo alimento com a menor quantidade total de sódio por pacote.</p>
<p>Qual desses produtos deve ser o escolhido pela estudante?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Batata chips.', explicacao: 'Correta! Sódio por pacote = nº de porções × sódio por porção: batata 3 × 170 = 510 mg; palitos 4 × 501 = 2 004 mg; multigrãos 8 × 264 = 2 112 mg; polvilho 6 × 175 = 1 050 mg; água e sal 5 × 166 = 830 mg. O menor é o da batata chips.' },
      { letra: 'B', texto: 'Palitos salgados.' },
      { letra: 'C', texto: 'Biscoito multigrãos.' },
      { letra: 'D', texto: 'Biscoito de polvilho.' },
      { letra: 'E', texto: 'Biscoito de água e sal.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-144',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 144,
    disciplina: 'Matemática',
    conteudo: 'mat-3a1',
    subtopico: 'Poliedros (prisma e tronco de pirâmide)',
    dificuldade: 'media',
    imagem: null,
    enunciado: `<p>Uma fábrica utilizou uma impressora 3D para produzir o protótipo de uma peça. O protótipo tem forma de um poliedro convexo, obtido pela justaposição de dois sólidos distintos, um com a forma de um prisma hexagonal regular reto e o outro com a forma de um tronco de pirâmide hexagonal reta. A base maior do tronco de pirâmide coincide com uma das bases do prisma.</p>
<p>Após a impressão do protótipo, ele foi encaminhado ao setor de customização para realização da pintura de sua superfície. O critério definido para realização da pintura considera que faces congruentes entre si devem ser pintadas com uma mesma cor, e faces não congruentes entre si devem apresentar cores distintas.</p>
<p>Qual é a quantidade de cores utilizadas para pintar o protótipo?</p>`,
    alternativas: [
      { letra: 'A', texto: '9' },
      { letra: 'B', texto: '8' },
      { letra: 'C', texto: '6' },
      { letra: 'D', texto: '4', explicacao: 'Correta! A superfície tem 4 tipos de face: os 6 retângulos laterais do prisma (1 cor), a base hexagonal livre do prisma (1 cor), os 6 trapézios laterais do tronco (1 cor) e a base menor hexagonal do tronco (1 cor). A base comum fica no interior e não é pintada: 4 cores.' },
      { letra: 'E', texto: '3' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-145',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 145,
    disciplina: 'Matemática',
    conteudo: 'mat-2a1',
    subtopico: 'Leitura de gráficos',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-145.webp',
    legenda: '<small>Disponível em: www.redepsi.com.br. Acesso em: 3 dez. 2018 (adaptado).</small>',
    enunciado: `<p>Pesquisas na área de neurobiologia confirmam que a prática meditativa é responsável por diminuir consideravelmente a frequência respiratória para praticantes avançados, que, após iniciarem a meditação, têm suas frequências respiratórias reduzidas até se estabilizarem em um nível mais baixo. O gráfico apresenta a relação da frequência respiratória, em incursões de respirações por minuto (rpm), em relação ao tempo, em minuto, de um praticante avançado, em que (f<sub>1</sub>) representa a frequência no instante t<sub>1</sub>, no qual se inicia a prática meditativa; e (f<sub>2</sub>), a frequência no instante t<sub>2</sub>, a partir do qual esta se estabiliza durante a meditação.</p>
<p>A partir do instante t<sub>1</sub>, em que se inicia a prática meditativa, o comportamento da frequência respiratória, em relação ao tempo,</p>`,
    alternativas: [
      { letra: 'A', texto: 'mantém-se constante.' },
      { letra: 'B', texto: 'é diretamente proporcional ao tempo.' },
      { letra: 'C', texto: 'é inversamente proporcional ao tempo.' },
      { letra: 'D', texto: 'diminui até o instante t<sub>2</sub>, a partir do qual se torna constante.', explicacao: 'Correta! No gráfico, a partir de t₁ a curva desce de f₁ até f₂ (no instante t₂) e, depois de t₂, fica horizontal: a frequência diminui e então se estabiliza.' },
      { letra: 'E', texto: 'diminui de forma proporcional ao tempo, tanto entre t<sub>1</sub> e t<sub>2</sub> quanto após t<sub>2</sub>.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-146',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 146,
    disciplina: 'Matemática',
    conteudo: 'mat-1a1',
    subtopico: 'Operações com decimais',
    dificuldade: 'facil',
    imagem: null,
    enunciado: `<p>No atletismo, um grande desafio da prova de 100 metros rasos é a sua conclusão num tempo abaixo da marca de referência dos 10,00 segundos. Vários atletas já alcançaram esse feito. Em 2009, o jamaicano Usain Bolt estabeleceu o recorde mundial masculino dessa prova, com o tempo de 9,58 segundos.</p>
<p>Qual é a diferença, em segundo, entre a marca de referência e a marca estabelecida por Usain Bolt em 2009?</p>`,
    alternativas: [
      { letra: 'A', texto: '0,02' },
      { letra: 'B', texto: '0,42', explicacao: 'Correta! 10,00 − 9,58 = 0,42 s.' },
      { letra: 'C', texto: '0,52' },
      { letra: 'D', texto: '1,02' },
      { letra: 'E', texto: '1,42' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-147',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 147,
    disciplina: 'Matemática',
    conteudo: ['mat-1a5', 'mat-3b1'],
    subtopico: 'Porcentagem e gráficos',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-147.webp',
    enunciado: `<p>Uma escola de idiomas oferece cursos de inglês, espanhol, francês e alemão. Os gráficos apresentam a distribuição percentual das matrículas, por idioma, em 2023, e a distribuição da quantidade de matrículas, por idioma, em 2024.</p>
<p>Para planejar as atividades de 2025, o gerente da escola estimou que o total de matrículas será o mesmo de 2024, e a distribuição percentual das matrículas, por idioma, será igual à registrada em 2023.</p>
<p>Segundo essa estimativa, o número de matrículas no curso de francês para o ano de 2025 será</p>`,
    alternativas: [
      { letra: 'A', texto: '2.' },
      { letra: 'B', texto: '12.' },
      { letra: 'C', texto: '20.' },
      { letra: 'D', texto: '22.' },
      { letra: 'E', texto: '40.', explicacao: 'Correta! Total de 2024: 280 + 80 + 20 + 20 = 400 matrículas. Em 2023, o francês tinha 10%: 10% de 400 = 40.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-148',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 148,
    disciplina: 'Matemática',
    conteudo: 'mat-1a4',
    subtopico: 'Escala',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-148.webp',
    enunciado: `<p>O controle remoto de um carrinho de brinquedo vem equipado com uma tela que ajusta automaticamente a escala empregada na exibição de cada deslocamento. A tela apresenta a imagem do deslocamento, a escala utilizada na geração dessa imagem e o comprimento desse deslocamento, em centímetro, em conformidade com a escala empregada. As figuras representam a tela do controle remoto exibindo os dados de cinco deslocamentos realizados por esse carrinho.</p>
<p>A opção que indica o deslocamento de maior comprimento realizado pelo carrinho de brinquedo é</p>`,
    alternativas: [
      { letra: 'A', texto: 'I.' },
      { letra: 'B', texto: 'II.' },
      { letra: 'C', texto: 'III.', explicacao: 'Correta! Comprimento real = medida × fator da escala: I) 9 × 100 = 900 cm; II) 5 × 300 = 1 500 cm; III) 5 × 600 = 3 000 cm; IV) 3 × 700 = 2 100 cm; V) 2 × 1 000 = 2 000 cm. O maior é o III.' },
      { letra: 'D', texto: 'IV.' },
      { letra: 'E', texto: 'V.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-149',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 149,
    disciplina: 'Matemática',
    conteudo: 'mat-3a1',
    subtopico: 'Poliedros e planificação',
    dificuldade: 'dificil',
    imagem: 'imagens/estudo/enem-2025-149.webp',
    enunciado: `<p>A cúpula pentagonal giralongada é um poliedro de Johnson, cujas faces são polígonos regulares, mas que não é um poliedro de Platão, de Arquimedes, prisma ou antiprisma.</p>
<p>As figuras apresentam esse poliedro em duas posições e uma de suas planificações.</p>
<p>Quantos vértices tem esse poliedro?</p>`,
    alternativas: [
      { letra: 'A', texto: '21' },
      { letra: 'B', texto: '25', explicacao: 'Correta! Pela planificação há 1 decágono, 25 triângulos, 5 quadrados e 1 pentágono: F = 32. Cada aresta é lado de duas faces: 2A = 10 + 25 × 3 + 5 × 4 + 5 = 110 → A = 55. Por Euler, V = A − F + 2 = 55 − 32 + 2 = 25.' },
      { letra: 'C', texto: '55' },
      { letra: 'D', texto: '80' },
      { letra: 'E', texto: '110' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-150',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 150,
    disciplina: 'Matemática',
    conteudo: 'mat-1a4',
    subtopico: 'Regra de três composta',
    dificuldade: 'facil',
    imagem: null,
    enunciado: `<p>Uma fábrica de tijolos ecológicos com 3 funcionários, cada um trabalhando 6 horas diárias, produz 720 unidades por dia. Para atender ao crescimento da demanda por esse tipo de tijolo, essa fábrica passou a ter 5 funcionários, cada um trabalhando 9 horas por dia, aumentando, assim, sua capacidade de produção. Todos os funcionários produzem igual quantidade de tijolos a cada hora, independentemente de trabalharem 6 ou 9 horas diárias.</p>
<p>O número de tijolos fabricados diariamente após o aumento da capacidade de produção é</p>`,
    alternativas: [
      { letra: 'A', texto: '800.' },
      { letra: 'B', texto: '1 080.' },
      { letra: 'C', texto: '1 200.' },
      { letra: 'D', texto: '1 800.', explicacao: 'Correta! Cada funcionário produz 720 ÷ (3 × 6) = 40 tijolos por hora. Depois: 5 × 9 × 40 = 1 800 tijolos por dia.' },
      { letra: 'E', texto: '2 520.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-151',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 151,
    disciplina: 'Matemática',
    conteudo: 'mat-1a1',
    subtopico: 'Sistema de numeração (códigos)',
    dificuldade: 'facil',
    imagem: null,
    enunciado: `<p>Para acompanhar o fluxo de visitantes em seu prédio, uma empresa estabeleceu um código de identificação para a visitação. De acordo com a regra estabelecida, cada visitante será identificado com um código sequencial numérico com 7 dígitos, determinado, da esquerda para a direita, da seguinte forma:</p>
<ul>
  <li>o primeiro dígito indica o andar ao qual o visitante se dirige, que é um número de 1 a 4;</li>
  <li>os dois próximos dígitos correspondem ao número do setor da empresa ao qual o visitante se destina. Esse número varia de 01 a 20;</li>
  <li>os três dígitos seguintes correspondem ao número do funcionário da empresa com quem o visitante irá se reunir. Esse número varia de 001 a 135;</li>
  <li>o último dígito indica se o visitante chegou à empresa pela manhã, dígito 0, ou à tarde, dígito 1.</li>
</ul>
<p>Um visitante chegou à empresa às 10 horas da manhã para se reunir com o funcionário identificado pelo número 109, que trabalha no setor 08 da empresa, localizado no 2º andar.</p>
<p>O código de identificação desse visitante é</p>`,
    alternativas: [
      { letra: 'A', texto: '0109082.' },
      { letra: 'B', texto: '0281090.' },
      { letra: 'C', texto: '1010982.' },
      { letra: 'D', texto: '2081090.', explicacao: 'Correta! Andar 2 → "2"; setor 08 → "08"; funcionário 109 → "109"; manhã → "0". Código: 2 08 109 0 = 2081090.' },
      { letra: 'E', texto: '2810910.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-152',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 152,
    disciplina: 'Matemática',
    conteudo: ['mat-3b3', 'mat-3b2'],
    subtopico: 'Probabilidade (permutações)',
    dificuldade: 'facil',
    imagem: null,
    enunciado: `<p>Quatro candidatos se apresentaram para realizar a prova de um concurso. Antes de iniciar a prova, os celulares dos quatro candidatos foram recolhidos pelo aplicador, que os guardou, cada um, dentro de um envelope preto. Ao término da prova, o aplicador devolveu os quatro envelopes com os celulares aos quatro candidatos, de maneira aleatória, já que não havia feito a identificação dos envelopes.</p>
<p>A probabilidade de que todos os candidatos tenham recebido de volta os envelopes com os seus respectivos celulares é</p>`,
    alternativas: [
      { letra: 'A', texto: '1/2' },
      { letra: 'B', texto: '1/10' },
      { letra: 'C', texto: '1/16' },
      { letra: 'D', texto: '1/24', explicacao: 'Correta! Há 4! = 24 maneiras de distribuir os 4 envelopes, e só 1 delas devolve cada celular ao dono: P = 1/24.' },
      { letra: 'E', texto: '1/256' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-153',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 153,
    disciplina: 'Matemática',
    conteudo: 'mat-4b1',
    subtopico: 'Equação da reta (mediatriz)',
    dificuldade: 'dificil',
    imagem: 'imagens/estudo/enem-2025-153.webp',
    enunciado: `<p>Em um jogo digital, há três personagens: um herói e dois vilões. A programação é feita de tal forma que o herói sempre será atacado pelo vilão que estiver mais próximo dele. Uma das maneiras de “confundir” os vilões é movimentar o herói por trajetórias que o mantenha equidistante dos vilões, gerando indefinição entre eles e, com isso, não sendo atacado.</p>
<p>Para a programação de uma das etapas desse jogo, o programador considerou, no plano cartesiano, o quadrado <i>STUV</i> como a região de movimentação dos personagens, onde <i>V</i> e <i>T</i> representam as posições fixas dos vilões, e <i>S</i>, a posição inicial do herói, como apresentado na figura.</p>
<p>Qual é a equação da trajetória em que o herói poderá se movimentar sem ser atacado?</p>`,
    alternativas: [
      { letra: 'A', texto: '<i>y</i> = −3<i>x</i> + 20', explicacao: 'Correta! Os pontos equidistantes de T e V formam a mediatriz de TV, que no quadrado é a diagonal SU. Com S(6; 2) e V(8; 6), SV = (2; 4); girando 90°, ST = (−4; 2), então T(2; 4) e U(4; 8). Reta SU: m = (8 − 2)/(4 − 6) = −3 e y − 2 = −3(x − 6) → y = −3x + 20.' },
      { letra: 'B', texto: '<i>y</i> = −3<i>x</i> + 16' },
      { letra: 'C', texto: '<i>y</i> = −3<i>x</i> − 20' },
      { letra: 'D', texto: '<i>y</i> = 3<i>x</i> + 16' },
      { letra: 'E', texto: '<i>y</i> = 3<i>x</i> − 16' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-154',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 154,
    disciplina: 'Matemática',
    conteudo: 'mat-3b1',
    subtopico: 'Leitura de gráficos',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-154.webp',
    legendaAcima: '<b>Estoque e demanda por livros</b>',
    enunciado: `<p>Uma livraria comercializa livros dos seguintes gêneros literários: ficção científica, autoajuda, romance e biografia. O gráfico apresenta o estoque dos livros que essa livraria tem, por gênero literário e por nacionalidade do autor, bem como a demanda por gênero literário, obtida por meio de uma enquete feita com seus clientes habituais.</p>
<p>O gerente da livraria fará a encomenda de novos exemplares somente do gênero cuja quantidade em estoque seja insuficiente para atender a demanda constatada pela enquete.</p>
<p>O gênero de livro do qual o gerente deverá encomendar mais exemplares é</p>`,
    alternativas: [
      { letra: 'A', texto: 'ficção, pois é o que apresenta maior demanda.' },
      { letra: 'B', texto: 'biografia, pois é o gênero que tem a menor demanda.' },
      { letra: 'C', texto: 'autoajuda, pois a quantidade em estoque é inferior à demanda.', explicacao: 'Correta! Estoque total × demanda: ficção 80 + 120 = 200 ≥ 160; autoajuda 50 + 80 = 130 < 135; romance 40 + 105 = 145 ≥ 140; biografia 45 + 50 = 95 ≥ 80. Só a autoajuda tem estoque menor que a demanda.' },
      { letra: 'D', texto: 'biografia, pois é o gênero que tem a menor quantidade de livros em estoque.' },
      { letra: 'E', texto: 'romance, pois é o que apresenta o menor estoque de livros de autores brasileiros.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-155',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 155,
    disciplina: 'Matemática',
    conteudo: 'mat-3b2',
    subtopico: 'Princípio fundamental da contagem',
    dificuldade: 'media',
    imagem: null,
    enunciado: `<p>Dez casais fundaram um grupo de dança e decidiram constituir uma diretoria com três cargos: presidente, secretário e tesoureiro. Para maior representatividade, decidiu-se que no máximo uma pessoa por casal poderá ocupar um cargo nessa diretoria.</p>
<p>Quantas diretorias diferentes podem ser constituídas por esses 10 casais?</p>`,
    alternativas: [
      { letra: 'A', texto: '10 × 9 × 8' },
      { letra: 'B', texto: '20 × 18 × 16', explicacao: 'Correta! Presidente: 20 pessoas. Secretário: 18 (exclui o presidente e o cônjuge). Tesoureiro: 16 (exclui os dois casais já usados). Total: 20 × 18 × 16.' },
      { letra: 'C', texto: '20 × 19 × 18' },
      { letra: 'D', texto: '10 × 9 × 8 × 2' },
      { letra: 'E', texto: '20 × 18 × 16 × 2' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-156',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 156,
    disciplina: 'Matemática',
    conteudo: 'mat-1a4',
    subtopico: 'Escala',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-156.webp',
    enunciado: `<p>Um artista, que costuma fazer desenhos com areia na praia, pediu a um banhista que fizesse um pequeno desenho, que serviria de esboço para uma grande obra de arte a ser feita na areia. Esse desenho está representado na figura.</p>
<p>Após a conclusão, a obra de arte obtida manteve as mesmas proporções do desenho feito pelo banhista, sendo que as medidas indicadas na figura foram ampliadas para 30 m.</p>
<p>Em qual escala esse desenho representa a obra de arte?</p>`,
    alternativas: [
      { letra: 'A', texto: '1 : 1,5' },
      { letra: 'B', texto: '1 : 2,25' },
      { letra: 'C', texto: '1 : 10' },
      { letra: 'D', texto: '1 : 100' },
      { letra: 'E', texto: '1 : 150', explicacao: 'Correta! 20 cm no desenho correspondem a 30 m = 3 000 cm na obra: escala = 20 : 3 000 = 1 : 150.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-157',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 157,
    disciplina: 'Matemática',
    conteudo: 'mat-1a4',
    subtopico: 'Razão',
    dificuldade: 'facil',
    imagem: null,
    enunciado: `<p>O cortisol é um hormônio produzido pelas glândulas adrenais e pode ser considerado um importante marcador do estresse fisiológico. Em um estudo desenvolvido com enfermeiros, foi verificado que a concentração de cortisol salivar em um dia de trabalho, denotada por <i>T</i>, era, em média, 1,59 vezes a concentração de cortisol salivar em um dia de folga, denotada por <i>F</i>.</p>
<p><small>ROCHA, M. C. P. et al. Estresse em enfermeiros: o uso do cortisol salivar no dia de trabalho e de folga. <b>Rev. Esc. Enferm. USP</b>, n. 5, 2013 (adaptado).</small></p>
<p>Nesse estudo, a relação obtida entre <i>T</i> e <i>F</i> foi</p>`,
    alternativas: [
      { letra: 'A', texto: '<i>T</i> = 1,59 + <i>F</i>' },
      { letra: 'B', texto: '<i>F</i> = 1,59 + <i>T</i>' },
      { letra: 'C', texto: '<i>T</i>/<i>F</i> = 1,59', explicacao: 'Correta! "T era 1,59 vezes F" significa T = 1,59 · F, ou seja, T/F = 1,59.' },
      { letra: 'D', texto: '<i>F</i>/<i>T</i> = 1,59' },
      { letra: 'E', texto: '<i>F</i> · <i>T</i> = 1,59' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-158',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 158,
    disciplina: 'Matemática',
    conteudo: ['mat-1a5', 'mat-1b2'],
    subtopico: 'Porcentagem e lucro',
    dificuldade: 'media',
    imagem: null,
    enunciado: `<p>Um estacionamento possui 120 vagas para veículos, e todas essas vagas estão ocupadas. Cada cliente paga uma mensalidade para utilizar uma vaga, que é calculada com base nas despesas mensais do estacionamento e no lucro pretendido. As despesas mensais do estacionamento são: R$ 14 240,00 com manutenção mais R$ 36,00 de seguro por veículo. O lucro do estacionamento é determinado pela diferença do valor arrecadado com as mensalidades pelas despesas efetuadas. A partir do mês seguinte, o valor do seguro por veículo aumentará em 20%, e as despesas com manutenção permanecerão sem alterações. Com isso, o dono do estacionamento reajustará as mensalidades para obter um lucro mensal de R$ 10 000,00. Apesar desse reajuste, todas as vagas continuarão ocupadas.</p>
<p>O valor, em real, da mensalidade reajustada será</p>`,
    alternativas: [
      { letra: 'A', texto: '185,60.' },
      { letra: 'B', texto: '226,09.' },
      { letra: 'C', texto: '245,20.', explicacao: 'Correta! Novo seguro: 36 × 1,2 = R$ 43,20 por veículo. Despesas: 14 240 + 120 × 43,20 = 14 240 + 5 184 = 19 424. Arrecadação necessária: 19 424 + 10 000 = 29 424; mensalidade = 29 424 ÷ 120 = R$ 245,20.' },
      { letra: 'D', texto: '268,93.' },
      { letra: 'E', texto: '285,60.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-159',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 159,
    disciplina: 'Matemática',
    conteudo: 'mat-1a4',
    subtopico: 'Unidades de volume e capacidade',
    dificuldade: 'facil',
    imagem: null,
    enunciado: `<p>O dono de uma sorveteria armazena sorvete em potes de 20 000 cm<sup>3</sup>. Ele serve o sorvete em taças, em porções de 250 mL.</p>
<p>A quantidade de taças que ele consegue servir a partir de um pote cheio de sorvete é</p>`,
    alternativas: [
      { letra: 'A', texto: '5.' },
      { letra: 'B', texto: '8.' },
      { letra: 'C', texto: '50.' },
      { letra: 'D', texto: '80.', explicacao: 'Correta! 1 cm³ = 1 mL, então o pote tem 20 000 mL: 20 000 ÷ 250 = 80 taças.' },
      { letra: 'E', texto: '800.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-160',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 160,
    disciplina: 'Matemática',
    conteudo: 'mat-4a2',
    subtopico: 'Função tangente',
    dificuldade: 'dificil',
    imagem: 'imagens/estudo/enem-2025-160.webp',
    enunciado: `<p>Um recipiente tem um formato que faz com que, ao ser enchido de água com uma vazão constante, a distância <i>D</i> da lâmina de água ao tampo da mesa, em centímetro, aumente em relação ao tempo <i>T</i>, em minuto, de acordo com uma função do tipo</p>
<p style="text-align:center"><i>D</i> = <i>k</i> + tg[<i>p</i>(<i>T</i> + <i>m</i>)],</p>
<p>sendo os parâmetros <i>k</i>, <i>p</i> e <i>m</i> números reais, para <i>T</i> variando entre 0 e 4 minutos, conforme ilustrado na figura, na qual estão apresentadas assíntotas verticais da função tangente utilizada na definição de <i>D</i>.</p>
<p>A expressão algébrica que representa a relação entre <i>D</i> e <i>T</i> é</p>`,
    alternativas: [
      { letra: 'A', texto: '<i>D</i> = 2,5 + tg[30(<i>T</i> − (5 − 2π)/2)]' },
      { letra: 'B', texto: '<i>D</i> = 4 + tg[30(<i>T</i> + 5/2)]' },
      { letra: 'C', texto: '<i>D</i> = 4 + tg[2,5(<i>T</i> + (5 + 2π)/2)]' },
      { letra: 'D', texto: '<i>D</i> = 30 + tg[(1/2)(<i>T</i> − 5)]' },
      { letra: 'E', texto: '<i>D</i> = 30 + tg[(1/2)(<i>T</i> − 5/2)]', explicacao: 'Correta! O centro de simetria da tangente está em (2,5; 30): k = 30 e m = −5/2. A distância entre as assíntotas é o período: (5 + 2π)/2 − (5 − 2π)/2 = 2π = π/p, logo p = 1/2. Assim, D = 30 + tg[(1/2)(T − 5/2)].' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-161',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 161,
    disciplina: 'Matemática',
    conteudo: 'mat-4b1',
    subtopico: 'Localização e orientação no plano',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-161.webp',
    enunciado: `<p>Os quadrados em cinza na figura representam os quarteirões de uma parte do bairro onde moram João e seu amigo. O quadrado pequeno (A), pintado em preto e localizado no canto superior esquerdo de um quadrado maior, indica a casa do amigo de João. João também mora em uma casa de esquina, mas na extremidade nordeste de um quarteirão. Para chegar à casa de seu amigo, ao sair de casa, João deve caminhar pelo quarteirão onde mora na direção oeste, dobrar à direita, caminhar por três quarteirões na direção norte e dobrar à esquerda. A casa de seu amigo fica no segundo quarteirão a oeste.</p>
<p>O quarteirão onde se encontra a casa de João é representado pelo quadrado com a letra</p>`,
    alternativas: [
      { letra: 'A', texto: 'P.', explicacao: 'Correta! Refazendo o caminho de trás para a frente a partir do quarteirão A: andando para leste até a segunda rua (a do quarteirão S, coluna do P) e descendo três quarteirões para o sul chega-se à esquina noroeste de P; João saiu da esquina nordeste de P andando para oeste. Logo, João mora no quarteirão P.' },
      { letra: 'B', texto: 'Q.' },
      { letra: 'C', texto: 'R.' },
      { letra: 'D', texto: 'S.' },
      { letra: 'E', texto: 'T.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-162',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 162,
    disciplina: 'Matemática',
    conteudo: ['mat-2a2', 'mat-1a5'],
    subtopico: 'Inequação do 1º grau',
    dificuldade: 'media',
    imagem: null,
    enunciado: `<p>Uma empresa produziu, em um determinado mês, 110 toneladas de plástico a partir de derivados de petróleo e 80 toneladas a partir de plásticos reciclados. O custo para reciclar uma tonelada de plástico é de R$ 500,00, que equivale a 5% do custo para produzir a mesma quantidade de plástico a partir de derivados de petróleo. Para o mês seguinte, a meta dessa empresa é produzir a mesma quantidade de plástico que foi produzida nesse mês, mas com redução de, pelo menos, 50% no custo de produção.</p>
<p>Para que no mês seguinte a empresa atinja a meta, a quantidade mínima de toneladas de plástico que devem ser produzidas a partir de reciclagem deverá ser</p>`,
    alternativas: [
      { letra: 'A', texto: '135.' },
      { letra: 'B', texto: '140.', explicacao: 'Correta! Do petróleo: 500 ÷ 0,05 = R$ 10 000/t. Custo atual: 110 × 10 000 + 80 × 500 = 1 140 000; meta: ≤ 570 000. Com x toneladas recicladas (total 190 t): 500x + 10 000(190 − x) ≤ 570 000 → 1 900 000 − 9 500x ≤ 570 000 → x ≥ 140.' },
      { letra: 'C', texto: '155.' },
      { letra: 'D', texto: '160.' },
      { letra: 'E', texto: '175.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-163',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 163,
    disciplina: 'Matemática',
    conteudo: 'mat-3b1',
    subtopico: 'Leitura de gráficos',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-163.webp',
    enunciado: `<p>Em uma escola, todos os estudantes do ensino médio praticam uma das três modalidades esportivas oferecidas como atividade física, e cada um deles pratica somente uma dessas atividades. Os gráficos trazem alguns dados relativos aos quantitativos de estudantes que praticam essas modalidades esportivas nessa escola, apesar de algumas quantidades não terem sido informadas.</p>
<p>Qual é a quantidade de estudantes no ensino médio dessa escola?</p>`,
    alternativas: [
      { letra: 'A', texto: '720' },
      { letra: 'B', texto: '360', explicacao: 'Correta! Contando as divisões do gráfico de barras: futebol 7 + 6 + 5 = 18, vôlei 3 + 3 + 4 = 10, basquete 1 + 3 + 4 = 8 (total 36 divisões; o futebol é metade, como no gráfico de setores). Basquete: 8 divisões = 80 estudantes → cada divisão vale 10. Total: 36 × 10 = 360.' },
      { letra: 'C', texto: '320' },
      { letra: 'D', texto: '288' },
      { letra: 'E', texto: '240' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-164',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 164,
    disciplina: 'Matemática',
    conteudo: 'mat-4a2',
    subtopico: 'Lei dos cossenos',
    dificuldade: 'dificil',
    imagem: 'imagens/estudo/enem-2025-164.webp',
    enunciado: `<p>O dono de uma embarcação deve partir do ponto <i>P</i> e chegar ao ponto <i>R</i> por meio de dois deslocamentos lineares e navegando a uma velocidade constante. Essa viagem será feita durante a noite, e como ele dispõe somente de uma bússola e de um relógio, planejou sua rota da seguinte forma:</p>
<p>1º – partir do ponto <i>P</i> na direção 110 e navegar por 4 horas, alcançando um ponto <i>Q</i>;</p>
<p>2º – partir do ponto <i>Q</i> na direção 90 e navegar por 2 horas, alcançando o ponto de destino <i>R</i>.</p>
<p>No entanto, ao direcionar o barco para o primeiro deslocamento, o fez na direção 340, em vez de 110. Com isso, realizou os seguintes deslocamentos:</p>
<p>1º – partiu do ponto <i>P</i> na direção 340 e navegou por 4 horas, alcançando um ponto <i>S</i>;</p>
<p>2º – partiu do ponto <i>S</i> na direção 90 e navegou por 2 horas, alcançando o ponto <i>T</i>.</p>
<p>A figura apresenta a bússola, a rota planejada e a rota executada.</p>
<p>O dono da embarcação só percebeu o equívoco ao chegar ao ponto <i>T</i>. Com isso, agora ele precisa definir a direção e o tempo de navegação que lhe permita, partindo do ponto <i>T</i>, chegar ao ponto de destino <i>R</i> por meio de uma rota retilínea.</p>
<p>Considere 0,64 como aproximação para cos 50°.</p>
<p>A direção e o tempo aproximado de navegação que o dono da embarcação deve utilizar são, respectivamente,</p>`,
    alternativas: [
      { letra: 'A', texto: '135 e 7 horas e 15 minutos.', explicacao: 'Correta! ST e QR são iguais (direção 90, 2 h), então TR é paralelo e igual a SQ. No triângulo PSQ, PS = PQ = 4 h e o ângulo em P é 130° (de 340 a 110): SQ² = 16 + 16 − 2·16·cos 130° = 32 + 32 × 0,64 = 52,48 → SQ ≈ 7,24 h ≈ 7 h 15 min. Como o triângulo é isósceles com bissetriz na direção 45, SQ é perpendicular a ela, apontando para 135.' },
      { letra: 'B', texto: '45 e 7 horas e 15 minutos.' },
      { letra: 'C', texto: '135 e 12 horas.' },
      { letra: 'D', texto: '135 e 6 horas.' },
      { letra: 'E', texto: '45 e 6 horas.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-165',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 165,
    disciplina: 'Matemática',
    conteudo: 'mat-3b1',
    subtopico: 'Medidas de tendência central e dispersão',
    dificuldade: 'media',
    imagem: null,
    enunciado: `<p>Em um estudo clínico, 55 mulheres foram distribuídas, aleatoriamente, em 5 grupos de 11 pessoas. Para testar uma nova medicação, será escolhido um grupo no qual a maioria das mulheres tenham idades entre 20 e 30 anos. Os demais grupos tomarão placebo ou medicações já existentes no mercado. O quadro, parcialmente preenchido, informa alguns dados relativos às idades das mulheres desses grupos.</p>
<table class="tabela-prova">
  <tr><th>Grupos</th><th>Menor idade</th><th>Maior idade</th><th>Média</th><th>Mediana</th><th>Moda</th><th>Desvio padrão</th></tr>
  <tr><td>1</td><td></td><td></td><td>25</td><td></td><td></td><td>10</td></tr>
  <tr><td>2</td><td></td><td></td><td></td><td>25</td><td></td><td>9</td></tr>
  <tr><td>3</td><td></td><td></td><td></td><td></td><td>25</td><td></td></tr>
  <tr><td>4</td><td></td><td></td><td>25</td><td></td><td></td><td>1</td></tr>
  <tr><td>5</td><td>20</td><td>35</td><td></td><td></td><td></td><td></td></tr>
</table>
<p>Mesmo com o quadro incompleto, foi possível selecionar um desses grupos porque, apenas com os dados apresentados no quadro, foi identificado um grupo que, certamente, atendia ao critério de escolha.</p>
<p>O grupo escolhido foi o</p>`,
    alternativas: [
      { letra: 'A', texto: '1.' },
      { letra: 'B', texto: '2.' },
      { letra: 'C', texto: '3.' },
      { letra: 'D', texto: '4.', explicacao: 'Correta! No grupo 4, a média é 25 e o desvio padrão é só 1: as idades estão concentradas perto de 25 (no máximo 2 mulheres poderiam ficar a 5 anos ou mais da média, pois 11 × 1² = 11 < 3 × 25). Assim, certamente a maioria tem entre 20 e 30 anos. Os outros grupos não garantem isso.' },
      { letra: 'E', texto: '5.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-166',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 166,
    disciplina: 'Matemática',
    conteudo: 'mat-3b1',
    subtopico: 'Média aritmética',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-166.webp',
    enunciado: `<p><i>Pace</i> é um termo usado por um corredor para denominar o seu ritmo médio em uma corrida. Representa o tempo médio, em segundo, que esse corredor leva para percorrer 1 km.</p>
<p>O esquema apresenta o tempo, em segundo, que um corredor levou para cruzar as marcas que definem os quatro primeiros trechos de 1 km, em uma corrida de 5 km, e o tempo gasto para percorrer cada trecho de 1 km.</p>
<p>O melhor <i>pace</i> que esse corredor alcançou em corridas de 5 km foi 281 s/km.</p>
<p>Para que consiga repetir nessa corrida seu melhor <i>pace</i> em corridas de 5 km, seu tempo, no 5º trecho, deve ser quantos segundos menor do que o que ele gastou para percorrer o 4º trecho?</p>`,
    alternativas: [
      { letra: 'A', texto: '1' },
      { letra: 'B', texto: '2' },
      { letra: 'C', texto: '8' },
      { letra: 'D', texto: '9' },
      { letra: 'E', texto: '15', explicacao: 'Correta! Pace de 281 s/km em 5 km dá tempo total de 5 × 281 = 1 405 s. Até o 4º km ele gastou 1 132 s, então o 5º trecho deve levar 1 405 − 1 132 = 273 s, que é 288 − 273 = 15 s a menos que o 4º trecho.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-167',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 167,
    disciplina: 'Matemática',
    conteudo: ['mat-2a1', 'mat-1a4'],
    subtopico: 'Leitura de gráficos',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-167.webp',
    enunciado: `<p>Uma pessoa tem um carro bicombustível, que funciona a gás natural veicular (GNV) e a gasolina. O rendimento do carro, medido em km/m³, no caso do gás, ou medido em km/L, no caso da gasolina, depende, entre outros fatores, da velocidade, em km/h, em que o carro trafega. Essa relação está em conformidade com estes gráficos.</p>
<p>Durante um feriado, essa pessoa realizou uma viagem de 240 km. Para obter uma estimativa de gasto de combustível, assuma que em todo o trajeto se manteve uma velocidade constante de 60 km/h. Considere que, durante metade do caminho, foi utilizado apenas GNV e, na outra metade, apenas gasolina. O que foi pago pelo metro cúbico de GNV e pelo litro de gasolina correspondeu, respectivamente, a R$ 2,00 e a R$ 3,00.</p>
<p>Qual foi a diferença, em real, entre os gastos totais com gasolina e com GNV?</p>`,
    alternativas: [
      { letra: 'A', texto: '4' },
      { letra: 'B', texto: '8' },
      { letra: 'C', texto: '14' },
      { letra: 'D', texto: '21', explicacao: 'Correta! A 60 km/h, o GNV rende 10 km/m³ e a gasolina, 8 km/L. Em 120 km: GNV 120 ÷ 10 = 12 m³ × R$ 2 = R$ 24; gasolina 120 ÷ 8 = 15 L × R$ 3 = R$ 45. Diferença: 45 − 24 = R$ 21.' },
      { letra: 'E', texto: '30' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-168',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 168,
    disciplina: 'Matemática',
    conteudo: 'mat-1b2',
    subtopico: 'Expressões numéricas',
    dificuldade: 'facil',
    imagem: null,
    enunciado: `<p>Em um país, a primeira etapa para obtenção da carteira de motorista é a contratação de três produtos:</p>
<ul>
  <li>pacote com 20 aulas teóricas;</li>
  <li>pacote com 10 aulas práticas;</li>
  <li>aluguel do veículo para realização das aulas práticas.</li>
</ul>
<p>Uma pessoa que pretende obter a carteira de motorista pesquisou o valor do aluguel do veículo e os valores de cada aula teórica e de cada aula prática em três autoescolas. O quadro apresenta esses valores.</p>
<table class="tabela-prova">
  <tr><th>Autoescola</th><th>Valor de cada aula teórica (R$)</th><th>Valor de cada aula prática (R$)</th><th>Aluguel do veículo (R$)</th></tr>
  <tr><td>I</td><td>10</td><td>80</td><td>400</td></tr>
  <tr><td>II</td><td>30</td><td>50</td><td>200</td></tr>
  <tr><td>III</td><td>20</td><td>40</td><td>400</td></tr>
</table>
<p>Ela contratará os três produtos numa mesma autoescola de modo que o custo total nessa primeira etapa seja o menor possível.</p>
<p>A autoescola que será contratada é a</p>`,
    alternativas: [
      { letra: 'A', texto: 'I, com o custo total de R$ 1 400,00.' },
      { letra: 'B', texto: 'II, com o custo total de R$ 280,00.' },
      { letra: 'C', texto: 'II, com o custo total de R$ 1 300,00.' },
      { letra: 'D', texto: 'III, com o custo total de R$ 460,00.' },
      { letra: 'E', texto: 'III, com o custo total de R$ 1 200,00.', explicacao: 'Correta! Custo = 20 × teórica + 10 × prática + aluguel: I) 200 + 800 + 400 = 1 400; II) 600 + 500 + 200 = 1 300; III) 400 + 400 + 400 = 1 200. A menor é a III, com R$ 1 200,00.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-169',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 169,
    disciplina: 'Matemática',
    conteudo: ['mat-1a4', 'mat-3b1'],
    subtopico: 'Tabelas e gráficos de linhas',
    dificuldade: 'media',
    imagem: null,
    enunciado: `<p>A produtividade de soja em uma área cultivada é a média da quantidade de sacas de 50 quilogramas que são produzidas por hectare. O quadro apresenta a área cultivada e a produtividade de soja em certa propriedade, ao longo de cinco safras, com períodos de um ano, de 2011 a 2016.</p>
<table class="tabela-prova">
  <tr><th>Safra</th><th>11-12</th><th>12-13</th><th>13-14</th><th>14-15</th><th>15-16</th></tr>
  <tr><th>Área cultivada (hectare)</th><td>200</td><td>220</td><td>250</td><td>250</td><td>200</td></tr>
  <tr><th>Produtividade (sacas de 50 kg por hectare)</th><td>40</td><td>30</td><td>45</td><td>45</td><td>50</td></tr>
</table>
<p>O gráfico de linhas que representa a produção de soja dessa propriedade, em tonelada, nessas cinco safras é</p>`,
    alternativas: [
      { letra: 'A', texto: '<img src="imagens/estudo/enem-2025-169-a.webp" alt="Alternativa A: gráfico com 400; 330; 562,5; 562,5; 500 toneladas">', explicacao: 'Correta! Produção (t) = área × produtividade × 50 kg ÷ 1 000: 200 × 40 × 0,05 = 400; 220 × 30 × 0,05 = 330; 250 × 45 × 0,05 = 562,5 (duas safras); 200 × 50 × 0,05 = 500. É o gráfico A.' },
      { letra: 'B', texto: '<img src="imagens/estudo/enem-2025-169-b.webp" alt="Alternativa B: gráfico com 40; 30; 45; 45; 50 toneladas">' },
      { letra: 'C', texto: '<img src="imagens/estudo/enem-2025-169-c.webp" alt="Alternativa C: gráfico com 200; 220; 250; 250; 200 toneladas">' },
      { letra: 'D', texto: '<img src="imagens/estudo/enem-2025-169-d.webp" alt="Alternativa D: gráfico com 240; 250; 295; 295; 250 toneladas">' },
      { letra: 'E', texto: '<img src="imagens/estudo/enem-2025-169-e.webp" alt="Alternativa E: gráfico com 8; 6,6; 11,25; 11,25; 10 toneladas">' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-170',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 170,
    disciplina: 'Matemática',
    conteudo: 'mat-3a1',
    subtopico: 'Volume do paralelepípedo',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-170.webp',
    enunciado: `<p>Uma caixa de descarga, acoplada a um vaso sanitário, tem a forma de paralelepípedo reto retângulo cujas dimensões internas da base são 2,5 dm e 1,5 dm. Nessa caixa há uma boia que interrompe o abastecimento quando a altura da coluna de água atinge 2 dm, conforme a figura.</p>
<p>A cada acionamento da descarga, todo o volume de água contida na caixa é despejado no vaso. Para reduzir o volume de água despejado a cada acionamento, uma pessoa colocará, no interior dessa caixa, garrafas de 300 mL, cheias de areia e tampadas, de modo a ficarem submersas quando o abastecimento for interrompido.</p>
<p>Para garantir o funcionamento eficiente, o mínimo de água despejada a cada acionamento deve ser de 5 L.</p>
<p>A quantidade máxima de garrafas que serão colocadas nessa caixa, garantindo um funcionamento eficiente, é igual a</p>`,
    alternativas: [
      { letra: 'A', texto: '10.' },
      { letra: 'B', texto: '8.', explicacao: 'Correta! Volume de água: 2,5 × 1,5 × 2 = 7,5 dm³ = 7,5 L. Cada garrafa ocupa 0,3 L: 7,5 − 0,3n ≥ 5 → n ≤ 8,33. No máximo 8 garrafas.' },
      { letra: 'C', texto: '4.' },
      { letra: 'D', texto: '3.' },
      { letra: 'E', texto: '2.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-171',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 171,
    disciplina: 'Matemática',
    conteudo: ['mat-3a2', 'mat-3a1'],
    subtopico: 'Cilindro dentro de prisma',
    dificuldade: 'media',
    imagem: null,
    enunciado: `<p>Um confeiteiro passou a produzir tortas em formato de cilindro circular reto, com raio da base variando entre 12 cm e 16 cm e altura de 6 cm. Essas tortas deverão ser embaladas em caixas com formato de prisma reto de base quadrada, de modo que seja possível acomodar a torta em seu interior e ainda restar pelo menos 1 cm de distância entre a torta e as superfícies internas da caixa, lateral e superior. Ele dispõe, originalmente, de caixas no formato pretendido, cujas dimensões internas são 14 cm de comprimento do lado da base e 7 cm de altura, que não atendem às suas necessidades. Portanto, ele comprará novas caixas, com o mesmo formato das caixas originais, mas com comprimento do lado da base maior, que sejam adequadas para embalar todos os tipos de torta que produz.</p>
<p>A aresta da base das novas caixas deve ser, no mínimo, quantos centímetros maior do que a das caixas originais?</p>`,
    alternativas: [
      { letra: 'A', texto: '4' },
      { letra: 'B', texto: '12' },
      { letra: 'C', texto: '16' },
      { letra: 'D', texto: '18' },
      { letra: 'E', texto: '20', explicacao: 'Correta! A maior torta tem diâmetro 2 × 16 = 32 cm; com 1 cm de folga de cada lado, a aresta da base deve ser 32 + 2 = 34 cm. Aumento: 34 − 14 = 20 cm. (A altura 7 cm já dá 1 cm de folga sobre os 6 cm.)' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-172',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 172,
    disciplina: 'Matemática',
    conteudo: ['mat-2a5', 'mat-2a3'],
    subtopico: 'Logaritmo e máximo da função quadrática',
    dificuldade: 'dificil',
    imagem: null,
    enunciado: `<p>Um empresário utiliza máquinas cuja pressão interna <i>P</i>, em atmosfera, depende do tempo contínuo de utilização <i>t</i>, em hora, e de um parâmetro positivo <i>K</i>, que define o modelo da máquina, segundo a expressão:</p>
<p style="text-align:center"><i>P</i> = 4 · log[−<i>K</i> · (<i>t</i> + 1) · (<i>t</i> − 19)]</p>
<p>O fabricante dessas máquinas recomenda ao usuário que a pressão interna desse tipo de máquina não ultrapasse 10 atmosferas durante seu funcionamento.</p>
<p>O empresário pretende comprar novas máquinas desse tipo que deverão funcionar, diariamente, por um período contínuo de 10 horas. Para isso, precisa definir o modelo de máquina a ser adquirida escolhendo o maior valor possível do parâmetro <i>K</i>, atendendo à recomendação do fabricante.</p>
<p>O maior valor a ser escolhido para <i>K</i> é</p>`,
    alternativas: [
      { letra: 'A', texto: '10<sup>0,5</sup>', explicacao: 'Correta! −(t + 1)(t − 19) é uma parábola com máximo no vértice t = 9 (dentro das 10 h), valor 10 × 10 = 100. A pressão máxima é 4 · log(100K) ≤ 10 → log(100K) ≤ 2,5 → 100K ≤ 10<sup>2,5</sup> → K ≤ 10<sup>0,5</sup>.' },
      { letra: 'B', texto: '10<sup>8</sup>' },
      { letra: 'C', texto: '10<sup>2,5</sup>/84' },
      { letra: 'D', texto: '10<sup>2,5</sup>/99' },
      { letra: 'E', texto: '25 × 10<sup>−2</sup>' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-173',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 173,
    disciplina: 'Matemática',
    conteudo: 'mat-2b4',
    subtopico: 'Área do círculo',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-173.webp',
    enunciado: `<p>Em uma cidade, será construído um túnel que atravessa uma montanha para facilitar o trânsito de automóveis e bicicletas. Dois projetos foram elaborados e os esquemas com as vistas frontais desses projetos são apresentados na figura.</p>
<p>O Projeto 1 conta com dois túneis, um exclusivo para bicicletas e o outro, para automóveis. O Projeto 2 conta com um único túnel, com espaços reservados para o trânsito exclusivo de bicicletas e automóveis. Nos dois projetos, os túneis têm o formato de semicilindro reto de mesma extensão, com vias de ida e volta para os dois tipos de veículos, separados por muretas.</p>
<p>O projeto a ser aprovado será aquele que apresentar a menor área da seção transversal, pois implicará menor volume de material retirado da montanha.</p>
<p>Considere 3 como aproximação para π e desconsidere as espessuras das muretas.</p>
<p>O projeto a ser aprovado é</p>`,
    alternativas: [
      { letra: 'A', texto: 'o 1, pois apresenta área de seção transversal medindo 67,5 m<sup>2</sup>.', explicacao: 'Correta! Projeto 1: semicírculos de raios 6 m e 3 m → 3 × 36/2 + 3 × 9/2 = 54 + 13,5 = 67,5 m². Projeto 2: semicírculo de raio 9 m → 3 × 81/2 = 121,5 m². O Projeto 1 tem a menor área.' },
      { letra: 'B', texto: 'o 2, pois apresenta área de seção transversal medindo 121,5 m<sup>2</sup>.' },
      { letra: 'C', texto: 'o 1, pois apresenta área de seção transversal medindo 135 m<sup>2</sup>.' },
      { letra: 'D', texto: 'o 2, pois apresenta área de seção transversal medindo 243 m<sup>2</sup>.' },
      { letra: 'E', texto: 'qualquer um dos dois, pois apresentam áreas de suas seções transversais com medidas iguais.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-175',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 175,
    disciplina: 'Matemática',
    conteudo: 'mat-3b2',
    subtopico: 'Combinações',
    dificuldade: 'dificil',
    imagem: null,
    enunciado: `<p>Um pai comprou oito presentes diferentes (dentre os quais, uma bicicleta e um celular) para dar a seus três filhos. Ele pretende distribuir os presentes de modo que o filho mais velho e o mais novo recebam três presentes cada um, e o do meio receba os dois presentes restantes. O mais velho ganhará, entre seus presentes, ou uma bicicleta ou um celular, mas não ambos.</p>
<p>De quantas maneiras distintas a distribuição dos presentes pode ser feita?</p>`,
    alternativas: [
      { letra: 'A', texto: '36' },
      { letra: 'B', texto: '53' },
      { letra: 'C', texto: '300', explicacao: 'Correta! Mais velho: escolhe bicicleta ou celular (2 modos) e mais 2 dos outros 6 presentes: 2 × C(6,2) = 2 × 15 = 30. Mais novo: 3 dos 5 restantes, C(5,3) = 10; o do meio fica com os 2 que sobram. Total: 30 × 10 = 300.' },
      { letra: 'D', texto: '360' },
      { letra: 'E', texto: '560' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-176',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 176,
    disciplina: 'Matemática',
    conteudo: 'mat-1a4',
    subtopico: 'Grandezas diretamente proporcionais',
    dificuldade: 'facil',
    imagem: null,
    enunciado: `<p>A final de um campeonato de futebol foi disputada em 2 tempos regulamentares, de 45 minutos cada, sem acréscimos, com uma prorrogação de 30 minutos, também sem acréscimos. Um jogador entrou no início do segundo tempo, com um equipamento para medir a distância percorrida durante sua participação no jogo. Ao final do segundo tempo regulamentar, esse jogador havia percorrido 4,5 km. Ele manteve na prorrogação a mesma velocidade média que havia mantido no segundo tempo regulamentar.</p>
<p>A distância percorrida por esse jogador durante sua participação na partida, em quilômetro, foi</p>`,
    alternativas: [
      { letra: 'A', texto: '4,5.' },
      { letra: 'B', texto: '6,0.' },
      { letra: 'C', texto: '7,5.', explicacao: 'Correta! Velocidade média: 4,5 km em 45 min = 0,1 km/min. Na prorrogação: 30 × 0,1 = 3 km. Total: 4,5 + 3 = 7,5 km.' },
      { letra: 'D', texto: '9,0.' },
      { letra: 'E', texto: '12,0.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-177',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 177,
    disciplina: 'Matemática',
    conteudo: ['mat-3a2', 'mat-2b3'],
    subtopico: 'Volume do cilindro e do prisma',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-177.webp',
    enunciado: `<p>A figura ilustra o projeto visual para confecção de uma medalha comemorativa, com a forma de um cilindro circular reto, de diâmetro 6 cm e espessura 3 mm.</p>
<p>A figura <i>ABCD</i> tem a forma de um quadrado e é a base de um prisma que atravessa toda a medalha. A região da medalha externa a esse prisma será cunhada em ouro. Pretende-se cunhar 100 dessas medalhas.</p>
<p>Considere 3,1 como valor aproximado para π.</p>
<p>Qual é o volume de ouro, em centímetro cúbico, necessário para a confecção dessas medalhas?</p>`,
    alternativas: [
      { letra: 'A', texto: '288' },
      { letra: 'B', texto: '297', explicacao: 'Correta! Área do círculo: 3,1 × 3² = 27,9 cm². O quadrado tem diagonal 6 cm: área = 6²/2 = 18 cm². Área de ouro: 9,9 cm²; volume por medalha: 9,9 × 0,3 = 2,97 cm³. Para 100 medalhas: 297 cm³.' },
      { letra: 'C', texto: '567' },
      { letra: 'D', texto: '990' },
      { letra: 'E', texto: '1 134' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-178',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 178,
    disciplina: 'Matemática',
    conteudo: 'mat-3b3',
    subtopico: 'Probabilidade',
    dificuldade: 'dificil',
    imagem: null,
    enunciado: `<p>Três dados cúbicos, com faces numeradas de 1 a 6, foram utilizados em um jogo. Artur escolheu dois dados, e João ficou com o terceiro. O jogo consiste em ambos lançarem seus dados, observarem os números nas faces voltadas para cima e compararem o maior número obtido por Artur com o número obtido por João. Vence o jogador que obtiver o maior número. Em caso de empate, a vitória é de João.</p>
<p>O jogador que tem a maior probabilidade de vitória é</p>`,
    alternativas: [
      { letra: 'A', texto: 'Artur, com probabilidade de 2/3' },
      { letra: 'B', texto: 'João, com probabilidade de 4/9' },
      { letra: 'C', texto: 'Artur, com probabilidade de 91/216' },
      { letra: 'D', texto: 'João, com probabilidade de 91/216' },
      { letra: 'E', texto: 'Artur, com probabilidade de 125/216', explicacao: 'Correta! João vence se tirar j e os dois dados de Artur derem no máximo j: P = Σ (1/6)(j/6)² = (1 + 4 + 9 + 16 + 25 + 36)/216 = 91/216. Artur vence com 1 − 91/216 = 125/216, que é maior.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-179',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 179,
    disciplina: 'Matemática',
    conteudo: 'mat-1a4',
    subtopico: 'Grandezas e unidades',
    dificuldade: 'facil',
    imagem: null,
    enunciado: `<p>A luminância de um objeto é a grandeza que descreve a quantidade de luz produzida ou refletida por sua superfície. Ela está definida como a razão entre a intensidade luminosa, medida em candela (cd), e o quadrado da distância do objeto até o foco de luz, medida em metro (m).</p>
<p>A unidade de medida da luminância de um objeto é</p>`,
    alternativas: [
      { letra: 'A', texto: 'cd/m<sup>2</sup>', explicacao: 'Correta! Luminância = intensidade ÷ (distância)², então a unidade é cd ÷ m² = cd/m².' },
      { letra: 'B', texto: 'm<sup>2</sup>/cd' },
      { letra: 'C', texto: 'cd/m' },
      { letra: 'D', texto: 'm/cd' },
      { letra: 'E', texto: 'm/cd<sup>2</sup>' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-180',
    prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025,
    numeroOriginal: 180,
    disciplina: 'Matemática',
    conteudo: ['mat-3a4', 'mat-1b2'],
    subtopico: 'Padrões e expressões algébricas',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-180.webp',
    enunciado: `<p>Quatro amigos, cada um com 100 moedas, criaram um jogo, no qual cada um assume uma das quatro posições, 1, 2, 3 ou 4, indicadas na figura, e nela permanece até o final.</p>
<p>O desenvolvimento do jogo se dá em rodadas e, em todas elas, cada jogador transfere e recebe uma quantidade de moedas, da seguinte maneira:</p>
<ul>
  <li>o jogador na posição 1 transfere 1 moeda para o jogador na posição 2;</li>
  <li>o jogador na posição 2 transfere 2 moedas para o jogador na posição 3;</li>
  <li>o jogador na posição 3 transfere 3 moedas para o jogador na posição 4;</li>
  <li>o jogador na posição 4 transfere 4 moedas para o jogador na posição 1, completando a rodada.</li>
</ul>
<p>Ao final da rodada <i>n</i>, qual é a expressão algébrica que representa o número de moedas do jogador na posição 1?</p>`,
    alternativas: [
      { letra: 'A', texto: '103 + 4<i>n</i>' },
      { letra: 'B', texto: '103 + 3<i>n</i>' },
      { letra: 'C', texto: '100 + 4<i>n</i>' },
      { letra: 'D', texto: '100 + 3<i>n</i>', explicacao: 'Correta! Em cada rodada o jogador 1 dá 1 moeda e recebe 4: saldo de +3 por rodada. Partindo de 100, após n rodadas ele tem 100 + 3n (uma PA de razão 3).' },
      { letra: 'E', texto: '99 + 4<i>n</i>' },
    ],
    gabarito: 'D',
  },
);
