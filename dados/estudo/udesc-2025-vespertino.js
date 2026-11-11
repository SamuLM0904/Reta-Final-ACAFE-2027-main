/**
 * UDESC — Vestibular de Verão 2025 (Vestibular 2025.1, prova de 01/12/2024), caderno da TARDE
 * (Física 1–14, Química 15–28, História 29–39, Geografia 40–50; redação não entra).
 *
 * Fonte: Provas/Outros/UDESC/2025-Verao - Prova Vespertino.pdf (escaneado; texto transcrito);
 * gabarito oficial: 2025-Verao - Gabarito.pdf (Período Vespertino).
 * Questões de ESTUDO — nunca entram nos simulados. Aparecem no módulo da matéria, dentro do
 * capítulo do campo `conteudo`.
 * A numeração recomeça em 1 no caderno da tarde: ids udesc-2025-v-0NN.
 * Ficaram de fora: questões 23 (Química) e 32 (História), anuladas, e a Redação.
 * Formato das questões: veja README.md ("Como adicionar uma questão nova").
 */

QUESTOES.push(
  {
    id: 'udesc-2025-v-001',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 1,
    disciplina: 'Física',
    conteudo: ['fis-3a1', 'fis-3b1'],
    subtopico: 'Movimento circular uniforme',
    dificuldade: 'facil',
    enunciado: `<p>Um carro percorre uma rotatória circular de raio 100 metros. O motorista mantém uma velocidade constante de 72km/h durante todo o trajeto.</p>
      <p>Analise as proposições com base na informação.</p>
      <p>I. O módulo da aceleração centrípeta do carro é 4m/s².<br>
      II. A direção da aceleração centrípeta é sempre radial, apontando para o centro da rotatória.<br>
      III. O vetor deslocamento do carro, ao completar uma volta completa na rotatória, tem magnitude igual a 200 metros.<br>
      IV. A força centrípeta responsável por manter o carro em movimento circular é proporcionada pela força de atrito entre os pneus e o asfalto.<br>
      V. O período para o carro completar uma volta completa, na rotatória, é de 10 segundos.</p>
      <p>Assinale a alternativa <b>correta</b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Somente as proposições II e III são verdadeiras.' },
      { letra: 'B', texto: 'Somente as proposições I, II e IV são verdadeiras.', explicacao: 'Correta! v = 72 km/h = 20 m/s, então a<sub>c</sub> = v²/R = 400/100 = 4 m/s² (I), sempre apontando para o centro (II), e quem faz o papel de força centrípeta numa curva plana é o atrito pneu-asfalto (IV). Numa volta completa o deslocamento é nulo (III falsa) e T = 2πR/v = 200π/20 ≈ 31,4 s (V falsa).' },
      { letra: 'C', texto: 'Somente as proposições I, III e V são verdadeiras.' },
      { letra: 'D', texto: 'Somente as proposições II, IV e V são verdadeiras.' },
      { letra: 'E', texto: 'Todas as proposições são verdadeiras.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2025-v-002',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 2,
    disciplina: 'Física',
    conteudo: 'fis-3b1',
    subtopico: 'Leis de Newton e atrito',
    dificuldade: 'facil',
    enunciado: `<p>Um bloco de massa m=5kg está em repouso sobre uma superfície horizontal sem atrito. Uma força horizontal de F=20N é aplicada no bloco, e uma outra força de 10N é aplicada em sentido contrário ao movimento. Considere g=10m/s<sup>2</sup>.</p>
      <p>Com base nessas informações, analise e calcule as proposições.</p>
      <p>I. A aceleração do bloco.<br>
      II. A força resultante atuando sobre o bloco.<br>
      III. Caso a força de 10N seja substituída por uma força de atrito, determine o coeficiente de atrito necessário para que o bloco se mova com velocidade constante.</p>
      <p>Assinale a alternativa <b>correta</b>, respectivamente.</p>`,
    alternativas: [
      { letra: 'A', texto: '2m/s<sup>2</sup>; 15N; 0,4' },
      { letra: 'B', texto: '2m/s<sup>2</sup>; 10N; 0,2' },
      { letra: 'C', texto: '2m/s<sup>2</sup>; 10N; 0,4', explicacao: 'Correta! F<sub>R</sub> = 20 − 10 = 10 N e a = F<sub>R</sub>/m = 10/5 = 2 m/s². Para velocidade constante, o atrito deve equilibrar a força de 20 N: μ·m·g = 20 → μ = 20/50 = 0,4.' },
      { letra: 'D', texto: '4m/s<sup>2</sup>; 20N; 0,2' },
      { letra: 'E', texto: '4m/s<sup>2</sup>; 15N; 0,4' },
    ],
    gabarito: 'C',
  },
  {
    id: 'udesc-2025-v-003',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 3,
    disciplina: 'Física',
    conteudo: 'fis-3b2',
    subtopico: 'Máquinas simples (Parafuso de Arquimedes)',
    dificuldade: 'media',
    enunciado: `<p>A Figura 1 mostra um Parafuso de Arquimedes. Uma fazenda utiliza um Parafuso de Arquimedes para transportar água de um rio para um reservatório, em um terreno mais elevado. O parafuso é girado, manualmente, por uma pessoa e a água é deslocada para cima, ao longo de um tubo helicoidal inclinado.</p>
      <p>Analise as proposições sobre o Parafuso de Arquimedes.</p>
      <p>I. O Parafuso de Arquimedes é um exemplo de máquina simples que converte movimento rotacional em movimento linear.<br>
      II. O Parafuso de Arquimedes é capaz de aumentar a eficiência de transporte de líquidos, utilizando uma inclinação suave.<br>
      III. A maior eficiência do Parafuso de Arquimedes acontece quando está inclinado a 90 graus.<br>
      IV. A energia necessária para girar o Parafuso de Arquimedes depende apenas do peso da água e não do ângulo de inclinação.<br>
      V. O Parafuso de Arquimedes pode ser utilizado tanto para transportar líquidos quanto sólidos granulados, como grãos.</p>
      <p>Assinale a alternativa <b>correta</b>.</p>`,
    imagem: 'imagens/estudo/udesc-2025-v-003.webp',
    legenda: 'FIGURA 1',
    alternativas: [
      { letra: 'A', texto: 'Somente as proposições II, IV são verdadeiras.' },
      { letra: 'B', texto: 'Somente as proposições I, II e V são verdadeiras.', explicacao: 'Correta! O parafuso é uma máquina simples que transforma a rotação da manivela em deslocamento linear do fluido ao longo do eixo (I), funciona melhor com inclinação suave (II) e também transporta sólidos granulados, como grãos (V). Na vertical (90°) a água não fica presa nas espiras (III falsa), e a inclinação influi na energia/eficiência do transporte (IV falsa).' },
      { letra: 'C', texto: 'Somente as proposições I, III e V são verdadeiras.' },
      { letra: 'D', texto: 'Somente as proposições II, IV e V são verdadeiras.' },
      { letra: 'E', texto: 'Todas as proposições são verdadeiras.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2025-v-004',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 4,
    disciplina: 'Física',
    conteudo: 'fis-3b1',
    subtopico: 'Leis de Newton',
    dificuldade: 'facil',
    enunciado: `<p>Considere um astronauta em uma nave espacial no espaço profundo, longe de qualquer planeta ou estrela. Ele está flutuando no interior da nave e, em certo momento, decide empurrar uma caixa flutuante de massa menor que a dele.</p>
      <p>Analise as proposições sobre a informação.</p>
      <p>I. Quando o astronauta empurra a caixa, ele exerce uma força sobre a caixa. Mas a caixa também exerce uma força sobre o astronauta.<br>
      II. A caixa acelerará na mesma direção da força exercida pelo astronauta.<br>
      III. O astronauta, ao empurrar a caixa, não será acelerado, pois sua massa é maior que a da caixa.<br>
      IV. Se o astronauta parar de aplicar força sobre a caixa, a caixa continuará se movendo com velocidade constante.<br>
      V. Se o astronauta parar de aplicar força sobre a caixa, a caixa irá parar imediatamente.</p>
      <p>Assinale a alternativa <b>correta</b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Somente as proposições I, II e IV são verdadeiras.', explicacao: 'Correta! Pela 3ª lei, a caixa reage com força de mesmo módulo sobre o astronauta (I); pela 2ª lei, a caixa acelera no sentido da força recebida (II); e, cessada a força, pela inércia ela segue em MRU (IV). O astronauta também é acelerado (com aceleração menor, por ter massa maior), e a caixa não para sozinha (III e V falsas).' },
      { letra: 'B', texto: 'Somente as proposições I, III e IV são verdadeiras.' },
      { letra: 'C', texto: 'Somente as proposições II, III e IV são verdadeiras.' },
      { letra: 'D', texto: 'Somente as proposições III, IV e V são verdadeiras.' },
      { letra: 'E', texto: 'Todas as proposições são verdadeiras.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'udesc-2025-v-005',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 5,
    disciplina: 'Física',
    conteudo: ['fis-2a1', 'fis-2a2'],
    subtopico: 'Densidade e empuxo',
    dificuldade: 'media',
    enunciado: `<p>A bolsa natatória é um órgão presente em muitos peixes, a qual lhes permite controlar a flutuabilidade. Ao alterar a quantidade de gás dentro da bolsa, o peixe pode ajustar a sua densidade em relação à água, facilitando sua subida, descida ou manutenção de profundidade. Considere um peixe, em equilíbrio, submerso em água doce. Sua massa total é de 1,5 kg, e seu volume total (corporal + bolsa natatória) é de 1,5 litros. A bolsa natatória, inicialmente, ocupa 0,1 litro. Em certo momento, o peixe reduz o volume da bolsa pela metade.</p>
      <p>Em relação à informação, analise as proposições.</p>
      <p>I. A densidade inicial do peixe, com a bolsa natatória cheia, é 1,0g/cm³, o que lhe permite flutuar estaticamente, sem subir nem descer.<br>
      II. Após reduzir o volume da bolsa natatória, o volume total do peixe será 1,45 litros, e sua nova densidade será 1,034g/cm³.<br>
      III. Após reduzir o volume da bolsa natatória, o peixe irá afundar.<br>
      IV. Após reduzir o volume da bolsa natatória, o peixe irá subir.<br>
      V. A força de empuxo que o peixe recebe, quando a bolsa natatória está cheia, é 14,7N.</p>
      <p>Assinale a alternativa <b>correta</b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Somente as proposições II e III são verdadeiras.' },
      { letra: 'B', texto: 'Somente as proposições II e V são verdadeiras.' },
      { letra: 'C', texto: 'Somente as proposições III e V são verdadeiras.' },
      { letra: 'D', texto: 'Somente as proposições I, II e III são verdadeiras.', explicacao: 'Correta! Inicialmente d = 1500 g / 1500 cm³ = 1,0 g/cm³, igual à da água (equilíbrio, I). Reduzindo a bolsa de 0,1 L para 0,05 L, o volume vai a 1,45 L e d = 1500/1450 ≈ 1,034 g/cm³ (II), maior que a da água, e o peixe afunda (III). O empuxo inicial é E = d·V·g = 1000 · 1,5·10⁻³ · 10 = 15 N, não 14,7 N (V falsa).' },
      { letra: 'E', texto: 'Somente as proposições I, III e V são verdadeiras.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'udesc-2025-v-006',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 6,
    disciplina: 'Física',
    conteudo: 'fis-3b4',
    subtopico: 'Lei da Gravitação Universal',
    dificuldade: 'media',
    enunciado: `<p>Duas esferas homogêneas A e B, de massas mA=5kg e mB=10kg, estão dispostas ao longo de uma reta, com uma distância de 2 metros entre seus centros de massa. Em um determinado momento, uma terceira esfera C, de massa mC=1kg, é colocada sobre a reta, exatamente no ponto médio entre as esferas A e B.</p>
      <p>A força gravitacional resultante sobre a esfera C, devido às esferas A e B, é:</p>`,
    alternativas: [
      { letra: 'A', texto: '6,67×10<sup>−11</sup> N para o lado da esfera A' },
      { letra: 'B', texto: '1,67×10<sup>−10</sup> N para o lado da esfera B' },
      { letra: 'C', texto: '3,34×10<sup>−10</sup> N para o lado da esfera B', explicacao: 'Correta! C fica a 1 m de cada esfera: F<sub>A</sub> = G·5·1/1² = 5G e F<sub>B</sub> = G·10·1/1² = 10G, em sentidos opostos. A resultante é 10G − 5G = 5G = 5 · 6,67×10⁻¹¹ ≈ 3,34×10⁻¹⁰ N, apontando para B (a esfera de maior massa).' },
      { letra: 'D', texto: '1,67×10<sup>−10</sup> N para o lado da esfera A' },
      { letra: 'E', texto: '3,34×10<sup>−10</sup> N para o lado da esfera A' },
    ],
    gabarito: 'C',
  },
  {
    id: 'udesc-2025-v-007',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 7,
    disciplina: 'Física',
    conteudo: 'fis-3b2',
    subtopico: 'Energia elástica e trabalho do atrito',
    dificuldade: 'media',
    enunciado: `<p>Um bloco de massa m=2kg é comprimido contra uma mola ideal de constante elástica k= 200N/m, comprimindo-a em 0,4m. O bloco é liberado a partir do repouso e desliza sobre uma superfície horizontal. Ao longo do caminho, o bloco passa por uma região de 1,5 metros, onde há atrito, com coeficiente de atrito cinético μ=0,1. Após passar por essa região, o bloco move-se livremente sem atrito.</p>
      <p>Assinale a alternativa que contém a velocidade do bloco após ele ter passado pela região com atrito.</p>`,
    alternativas: [
      { letra: 'A', texto: '4,0m/s' },
      { letra: 'B', texto: '2,0m/s' },
      { letra: 'C', texto: '3,6m/s', explicacao: 'Correta! Energia elástica: kx²/2 = 200 · 0,16/2 = 16 J. Trabalho do atrito: μ·m·g·d = 0,1 · 2 · 10 · 1,5 = 3 J. Restam 13 J de energia cinética: mv²/2 = 13 → v² = 13 → v ≈ 3,6 m/s.' },
      { letra: 'D', texto: '2,8m/s' },
      { letra: 'E', texto: '3,2m/s' },
    ],
    gabarito: 'C',
  },
  {
    id: 'udesc-2025-v-008',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 8,
    disciplina: 'Física',
    conteudo: ['fis-3a1', 'fis-3b2'],
    subtopico: 'Movimento circular vertical (pêndulo)',
    dificuldade: 'facil',
    enunciado: `<p>Uma pequena esfera de massa m=0,2kg, presa a uma corda de comprimento L=2m, é liberada de uma altura h tal que a corda fica tensionada ao longo do movimento. Quando a esfera atinge a posição mais baixa, ela passa a descrever um movimento circular vertical.</p>
      <p>Analise as proposições com base na informação.</p>
      <p>I. A tensão na corda é maior na posição mais baixa do movimento.<br>
      II. A aceleração centrípeta da esfera, ao passar pelo ponto mais baixo, aponta para o centro da trajetória circular.<br>
      III. A energia potencial gravitacional da esfera é máxima na posição mais baixa.<br>
      IV. A força resultante no ponto mais baixo é a soma da força gravitacional e da força de tensão na corda.<br>
      V. A energia mecânica da esfera conserva-se ao longo do movimento.</p>
      <p>Assinale a alternativa <b>correta</b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Somente as proposições I, II e III são verdadeiras.' },
      { letra: 'B', texto: 'Somente as proposições I, III e IV são verdadeiras.' },
      { letra: 'C', texto: 'Somente as proposições II, III e V são verdadeiras.' },
      { letra: 'D', texto: 'Somente as proposições I, II, IV e V são verdadeiras.', explicacao: 'Correta! No ponto mais baixo a velocidade é máxima e T − P = mv²/R, então a tração é máxima (I); a aceleração centrípeta aponta para o centro (II); a resultante é a soma vetorial do peso com a tração (IV); e, sem atrito, a energia mecânica se conserva (V). A energia potencial é mínima, não máxima, no ponto mais baixo (III falsa).' },
      { letra: 'E', texto: 'Todas as proposições são verdadeiras.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'udesc-2025-v-009',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 9,
    disciplina: 'Física',
    conteudo: ['fis-3a6', 'fis-3b2'],
    subtopico: 'Energia potencial elétrica e conservação de energia',
    dificuldade: 'media',
    imagem: 'imagens/estudo/udesc-2025-v-009.webp',
    enunciado: `<p>A energia potencial elétrica U entre duas partículas em relação à distância r que as separa está ilustrada no gráfico a seguir.</p>
      <p>Considere duas partículas A e B com cargas qA=qB=1μC. A partícula A permanece fixa, enquanto a partícula B, com massa mB=2kg, é liberada a uma distância da primeira de 0,25m e se desloca, exclusivamente, devido à força de interação elétrica entre as duas partículas. O gráfico apresenta a variação da energia potencial elétrica em função da distância. Quando a separação entre as partículas varia de r=0,25m para r=1,75m, a velocidade da partícula B é:</p>`,
    alternativas: [
      { letra: 'A', texto: '0,256m/s' },
      { letra: 'B', texto: '0,346m/s' },
      { letra: 'C', texto: '0,246m/s' },
      { letra: 'D', texto: '0,273m/s' },
      { letra: 'E', texto: '0,173m/s', explicacao: 'Correta! Pelo gráfico, U ≈ 0,035 J em r = 0,25 m e U ≈ 0,005 J em r = 1,75 m. A energia potencial perdida (≈ 0,030 J) vira energia cinética: 2·v²/2 = 0,030 → v² = 0,030 → v ≈ 0,173 m/s.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'udesc-2025-v-010',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 10,
    disciplina: 'Física',
    conteudo: 'fis-3b2',
    subtopico: 'Potência e energia',
    dificuldade: 'facil',
    enunciado: `<p>Um carro elétrico utiliza uma bateria com capacidade de 60kWh para alimentar seu motor. O motor elétrico do carro tem uma potência de 100kW, quando o carro está em movimento constante a uma velocidade de 100km/h. Suponha que o carro utilize apenas 80% da capacidade total da bateria, antes de precisar ser recarregada, assim, a autonomia deste carro elétrico (em quilômetros) para essa condição de operação é de:</p>`,
    alternativas: [
      { letra: 'A', texto: '30km' },
      { letra: 'B', texto: '48km', explicacao: 'Correta! Energia utilizável: 0,8 · 60 kWh = 48 kWh. Com potência de 100 kW, o tempo de uso é Δt = 48/100 = 0,48 h. A 100 km/h, a distância é 100 · 0,48 = 48 km.' },
      { letra: 'C', texto: '160km' },
      { letra: 'D', texto: '200km' },
      { letra: 'E', texto: '53km' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2025-v-011',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 11,
    disciplina: 'Física',
    conteudo: 'fis-2b3',
    subtopico: '1ª Lei da Termodinâmica',
    dificuldade: 'media',
    imagem: 'imagens/estudo/udesc-2025-v-011.webp',
    legenda: 'FIGURA 2',
    enunciado: `<p>Uma amostra de gás ideal está confinada em um cilindro com um pistão móvel, conforme Figura 2.</p>
      <p>O gás realiza um processo termodinâmico em duas etapas.</p>
      <p>Na primeira etapa<b>,</b> o gás recebe 500J de calor de uma fonte externa, mantendo-se a pressão constante. Como resultado, o volume do gás aumenta, e o trabalho realizado pelo gás sobre o pistão é de 200J.</p>
      <p>Na segunda etapa<b>,</b> o gás sofre uma compressão adiabática, de modo que todo o trabalho realizado sobre o gás durante a compressão é de 300J.</p>
      <p>Com base nas informações fornecidas, analise e calcule as proposições.</p>
      <p>I. A variação de energia interna do gás ao final da primeira etapa.<br>
      II. A variação total de energia interna do gás após as duas etapas.<br>
      III. A quantidade total de calor trocada com o ambiente durante todo o processo, sequencialmente.</p>
      <p>Assinale a alternativa que contém as quantidades solicitadas nas proposições, sequencialmente.</p>`,
    alternativas: [
      { letra: 'A', texto: '0J; 300J; 500J' },
      { letra: 'B', texto: '300J; 600J; 500J', explicacao: 'Correta! 1ª etapa: ΔU = Q − τ = 500 − 200 = 300 J. 2ª etapa (adiabática, Q = 0): o trabalho de 300 J realizado sobre o gás vira energia interna, ΔU = +300 J; total = 600 J. O calor trocado em todo o processo é só o da 1ª etapa: 500 J.' },
      { letra: 'C', texto: '300J; 600J; 300J' },
      { letra: 'D', texto: '200J; 400J; 500J' },
      { letra: 'E', texto: '200J; 300J; 0J' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2025-v-012',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 12,
    disciplina: 'Física',
    conteudo: 'fis-2b2',
    subtopico: 'Calor sensível',
    dificuldade: 'media',
    enunciado: `<p>Mercúrio é o planeta mais próximo do Sol, e atinge uma temperatura média de 167°C. No entanto, Vênus, que está mais longe do Sol, é o planeta mais quente do sistema solar, com uma temperatura média de 464°C. A razão para isso é a densa atmosfera de Vênus, rica em dióxido de carbono (CO<sub>2</sub>), que gera um efeito estufa extremo, aprisionando grandes quantidades de calor.</p>
      <p>Da mesma forma, o efeito estufa na Terra tem sido intensificado por gases como CO<sub>2</sub> e metano (CH<sub>4</sub>), o que está contribuindo para o aquecimento global.</p>
      <p>Entre 1971 e 2020, 90% dos 380×10<sup>21</sup>J de energia adicional acumulada no planeta foram absorvidos pelos oceanos, enquanto o restante foi responsável por aquecer a atmosfera e derreter as geleiras.</p>
      <p><small>Disponível em: www.ipcc.ch/srocc/chapter/chapter-5/. Acesso em: 22 set. 2024.</small></p>
      <p>Sabendo-se que a massa dos primeiros 1000 metros dos oceanos é de 1,4×10<sup>21</sup>kg, o aumento médio da temperatura dos oceanos, nesse período, é de:</p>`,
    alternativas: [
      { letra: 'A', texto: '0,341°C' },
      { letra: 'B', texto: '0,584°C' },
      { letra: 'C', texto: '0,0584°C', explicacao: 'Correta! Energia absorvida pelos oceanos: Q = 0,9 · 380×10²¹ = 3,42×10²³ J. Com Q = m·c·ΔT e c<sub>água</sub> ≈ 4,18×10³ J/(kg·°C): ΔT = 3,42×10²³ / (1,4×10²¹ · 4,18×10³) ≈ 0,0584 °C.' },
      { letra: 'D', texto: '0,073°C' },
      { letra: 'E', texto: '0,0342°C' },
    ],
    gabarito: 'C',
  },
  {
    id: 'udesc-2025-v-013',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 13,
    disciplina: 'Física',
    conteudo: 'fis-4b5',
    subtopico: 'Princípio da Incerteza de Heisenberg',
    dificuldade: 'facil',
    enunciado: `<p>O Princípio da Incerteza de Heisenberg é um dos pilares da mecânica quântica, e afirma que existe uma limitação fundamental na precisão com que se pode conhecer, simultaneamente, certas propriedades de uma partícula, como sua posição e quantidade de movimento (momento linear).</p>
      <p>Considere um elétron que se move em uma direção ao longo do eixo x, e analise as proposições.</p>
      <p>I. Se Δx for pequeno, Δpx deve ser grande.<br>
      II. O Princípio da Incerteza de Heisenberg afirma que é possível conhecer exatamente a posição e o momento de uma partícula ao mesmo tempo.<br>
      III. A incerteza no momento do elétron aumenta conforme tenta-se medir sua posição com maior precisão.<br>
      IV. O Princípio da Incerteza está diretamente relacionado à natureza ondulatória da matéria.</p>
      <p>Assinale a alternativa <b>correta</b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Somente a proposição I é verdadeira.' },
      { letra: 'B', texto: 'Somente as proposições I e III são verdadeiras.' },
      { letra: 'C', texto: 'Somente as proposições II e IV são verdadeiras.' },
      { letra: 'D', texto: 'Somente as proposições I, III e IV são verdadeiras.', explicacao: 'Correta! Como Δx·Δp<sub>x</sub> ≥ h/4π, quanto menor Δx, maior Δp<sub>x</sub> (I e III), e essa limitação decorre do comportamento ondulatório da matéria (IV). A II é falsa: o princípio diz justamente que não se pode conhecer posição e momento com exatidão ao mesmo tempo.' },
      { letra: 'E', texto: 'Todas as proposições são verdadeiras.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'udesc-2025-v-014',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 14,
    disciplina: 'Física',
    conteudo: 'fis-1a4',
    subtopico: 'Acústica (faixa audível)',
    dificuldade: 'media',
    enunciado: `<p>A capacidade de percepção de sons varia com a idade, conforme mostrado na tabela abaixo.</p>
      <table class="tabela-prova">
        <tr><th colspan="2">Tabela de Frequência Auditiva Máxima Média por Idade</th></tr>
        <tr><td>Crianças e adolescentes</td><td>20Hz até 20.000Hz</td></tr>
        <tr><td>Pessoas até 24 anos</td><td>20Hz até 17.000Hz</td></tr>
        <tr><td>Pessoas até 30 anos</td><td>20Hz até 16.000Hz</td></tr>
        <tr><td>Pessoas até 40 anos</td><td>20Hz até 15.000Hz</td></tr>
        <tr><td>Pessoas até 50 anos</td><td>20Hz até 12.000Hz</td></tr>
        <tr><td>Acima de 50 anos</td><td>20Hz até 8.000Hz</td></tr>
      </table>
      <p><small>Disponível em: www.audiologyresearch.org/human-hearing-range. Acesso em: 23 set. 2024.</small></p>
      <p>Considere uma caixa de som que emite uma onda sonora com comprimento de onda de 0,0243 metros, e com base nos dados da tabela, analise as proposições.</p>
      <p>I. O som está dentro da faixa audível que uma pessoa de 25 anos ouviria.<br>
      II. Uma pessoa de 50 anos ouviria o som, se a onda tivesse um comprimento de onda 50% menor.<br>
      III. Uma pessoa de 40 anos ouviria o som emitido pela caixa.<br>
      IV. Se o comprimento de onda fosse 25% maior, a frequência correspondente estaria dentro da faixa audível para pessoas com mais de 30 anos.</p>
      <p>Assinale a alternativa <b>correta</b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Somente a proposição I é verdadeira.' },
      { letra: 'B', texto: 'Somente as proposições I e III são verdadeiras.', explicacao: 'Correta! Com v = 340 m/s, f = v/λ = 340/0,0243 ≈ 14.000 Hz, abaixo dos limites de 16.000 Hz (até 30 anos) e 15.000 Hz (até 40 anos): I e III verdadeiras. Com λ 50% menor, f ≈ 28.000 Hz, inaudível (II falsa); com λ 25% maior, f ≈ 11.200 Hz, que pessoas acima de 50 anos (até 8.000 Hz) não ouvem (IV falsa).' },
      { letra: 'C', texto: 'Somente as proposições I, III e IV são verdadeiras.' },
      { letra: 'D', texto: 'Somente as proposições II, III e IV são verdadeiras.' },
      { letra: 'E', texto: 'Todas as proposições são verdadeiras.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2025-v-015',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 15,
    disciplina: 'Química',
    conteudo: 'qui-1a1',
    subtopico: 'Modelos atômicos',
    dificuldade: 'facil',
    enunciado: `<p>As discussões envolvendo a constituição da matéria e a proposição de modelos para explicar a estrutura atômica fizeram parte de muitos momentos da história científica, especialmente nos séculos XIX e XX. John Dalton, Joseph John Thomson e Ernest Rutherford foram importantes cientistas que propuseram modelos atômicos.</p>
      <p>Em relação às contribuições e limitações dos modelos propostos pelos atomistas supracitados, é <b>correto</b> afirmar que o modelo de:</p>`,
    alternativas: [
      { letra: 'A', texto: 'Thomson era análogo ao sistema solar, em que os elétrons estariam ao redor do núcleo de modo semelhante aos planetas que orbitam ao redor do sol. Esse modelo permitiu compreender fenômenos de natureza elétrica, mas não conseguiu explicar o motivo dos elétrons orbitarem ao redor do núcleo positivo sem colapsar.' },
      { letra: 'B', texto: 'Thomson considerou o átomo como uma esfera maciça e indivisível, permitindo a compreensão sobre fenômenos de natureza elétrica, uma vez que os elétrons estariam ao redor dessa esfera. No entanto, a proposta não explicava a neutralidade do átomo.' },
      { letra: 'C', texto: 'Rutherford, proposto a partir de dados experimentais, concluiu que apenas algumas partículas alfa teriam a trajetória desviada, pois o átomo seria constituído por uma esfera carregada positivamente com elétrons distribuídos de maneira uniforme em seu volume. Entretanto, seu modelo não explicava a atração eletrostática entre as partículas negativas e positivas do átomo.' },
      { letra: 'D', texto: 'Dalton contestou diretamente a proposta de modelo atômico apresentada por Rutherford, a partir da verificação experimental que conduziu a ideia de que o átomo era um grande espaço vazio, com um núcleo pequeno e denso, com elétrons incrustados. Mesmo assim, a proposta não era suficiente para explicar fenômenos de natureza elétrica.' },
      { letra: 'E', texto: 'Dalton foi útil para explicar a proporção de reagentes e de produtos envolvidos em uma reação química, mas não foi suficiente para explicar fenômenos radioativos e de natureza elétrica.', explicacao: 'Correta! O átomo de Dalton (esfera maciça, indivisível) explicava as leis ponderais (conservação da massa e proporções definidas), mas, por não ter cargas nem estrutura interna, não explicava fenômenos elétricos nem a radioatividade. As outras trocam os modelos: o "sistema solar" é o de Rutherford, e a esfera positiva com elétrons incrustados é a de Thomson.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'udesc-2025-v-016',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 16,
    disciplina: 'Química',
    conteudo: 'qui-1a3',
    subtopico: 'Tabela periódica',
    dificuldade: 'facil',
    enunciado: `<p>A tabela periódica dos elementos químicos está organizada a partir de padrões de classificação como, por exemplo, nas linhas horizontais, chamadas de períodos, em que é possível compreender quantas camadas eletrônicas são preenchidas por determinado átomo. Alguns elementos químicos também estão organizados conforme a quantidade de elétrons em sua camada de valência.</p>
      <p>Acerca dessas classificações, é <b>correto</b> afirmar que:</p>`,
    alternativas: [
      { letra: 'A', texto: 'Flúor (F) e iodo (I) estão no mesmo período, pois ambos apresentam 17 elétrons na camada de valência.' },
      { letra: 'B', texto: 'Carbono (C) e silício (Si) apresentam 4 elétrons na camada de valência, mas enquanto o silício possui 3 camadas eletrônicas preenchidas, o carbono possui 2.', explicacao: 'Correta! C (Z = 6: K2 L4) e Si (Z = 14: K2 L8 M4) são do grupo 14, com 4 elétrons de valência; o C está no 2º período (2 camadas) e o Si no 3º (3 camadas). F e I são do mesmo grupo (7 elétrons de valência), não do mesmo período; o Ca tem Z = 20 e o K, Z = 19; o Fe tem 2 elétrons na camada de valência; He e Ar estão em camadas diferentes, mas ambos têm a camada de valência completa.' },
      { letra: 'C', texto: 'Cálcio (Ca) e potássio (K) possuem, respectivamente, número atômico 19 e 20, com elétrons ocupando 4 camadas eletrônicas.' },
      { letra: 'D', texto: 'Ferro (Fe) está no Grupo 8 e no quarto período, tendo 4 elétrons em sua camada de valência.' },
      { letra: 'E', texto: 'Hélio (He) e argônio (Ar) não possuem a mesma quantidade de elétrons na camada de valência e de camadas eletrônicas preenchidas, característica comum aos gases nobres.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2025-v-017',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 17,
    disciplina: 'Química',
    conteudo: 'qui-1a4',
    subtopico: 'Propriedades dos compostos iônicos',
    dificuldade: 'facil',
    enunciado: `<p>Os compostos iônicos são formados a partir de ligações iônicas resultantes da atração eletrostática de cargas opostas, devido a uma grande diferença de eletronegatividade entre os átomos.</p>
      <p>Assinale a alternativa <b>correta</b> cujos compostos iônicos tenham propriedades que seguem as características descritas.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Alta temperatura de fusão e baixa temperatura de ebulição.' },
      { letra: 'B', texto: 'Alta temperatura de fusão e ebulição; condutividade elétrica quando fundidos ou em solução.', explicacao: 'Correta! A forte atração entre os íons no retículo cristalino dá aos compostos iônicos altas temperaturas de fusão e ebulição. No sólido os íons estão presos e não conduzem; fundidos ou dissolvidos em água, os íons ficam livres e conduzem corrente elétrica.' },
      { letra: 'C', texto: 'Não condutividade elétrica no estado sólido, líquido e em solução.' },
      { letra: 'D', texto: 'Baixa temperatura de fusão e ebulição; não condutividade elétrica quando fundidos ou em solução.' },
      { letra: 'E', texto: 'Baixa temperatura de fusão e alta temperatura de ebulição; condutividade elétrica apenas quando em solução.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2025-v-018',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 18,
    disciplina: 'Química',
    conteudo: 'qui-1a3',
    subtopico: 'Propriedades periódicas',
    dificuldade: 'facil',
    enunciado: `<p>Com base nas propriedades dos átomos dos elementos químicos boro (B), carbono (C), nitrogênio (N) e oxigênio (O), todos do segundo período da tabela periódica, é possível afirmar que:</p>`,
    alternativas: [
      { letra: 'A', texto: 'o raio atômico aumenta na ordem O &lt; N &lt; C &lt; B, seguindo o aumento da carga nuclear efetiva que é maior no oxigênio e menor no boro.', explicacao: 'Correta! No mesmo período, da esquerda para a direita, aumenta o número de prótons e a carga nuclear efetiva, que atrai mais os elétrons e diminui o raio. Por isso o O é o menor e o B o maior: O &lt; N &lt; C &lt; B. Entre eles, o mais eletronegativo é o O, não o N.' },
      { letra: 'B', texto: 'o nitrogênio tem maior eletronegatividade que os demais, pois tem maior tendência em atrair elétrons.' },
      { letra: 'C', texto: 'o raio atômico do O é maior do que do B, pois possui maior quantidade de elétrons ao redor do núcleo.' },
      { letra: 'D', texto: 'o oxigênio tem maior eletronegatividade e maior raio atômico que os demais, pois tem maior quantidade de elétrons e maior tendência em atrair os elétrons.' },
      { letra: 'E', texto: 'a atração próton/elétron para cada caso tende a fazer o raio atômico aumentar.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'udesc-2025-v-019',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 19,
    disciplina: 'Química',
    conteudo: 'qui-3a2',
    subtopico: 'Estequiometria (neutralização)',
    dificuldade: 'media',
    enunciado: `<p>Suponha uma situação na qual ocorreu um derramamento de ácido etanoico puro sobre uma pista de rodagem, e que esse precisa ser neutralizado com carbonato de cálcio sólido.</p>
      <p>Assinale a alternativa que contém a massa mínima de carbonato de cálcio, em kg, que precisa ser utilizada para neutralização completa de 500L do referido ácido, cuja densidade é de 1,0 g/mL.</p>`,
    alternativas: [
      { letra: 'A', texto: '183,3' },
      { letra: 'B', texto: '833,3' },
      { letra: 'C', texto: '625,0' },
      { letra: 'D', texto: '3167' },
      { letra: 'E', texto: '416,7', explicacao: 'Correta! 500 L × 1,0 g/mL = 500 kg de ácido etanoico (M = 60 g/mol) ≈ 8.333 mol. Reação: 2 CH<sub>3</sub>COOH + CaCO<sub>3</sub> → Ca(CH<sub>3</sub>COO)<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>, então são necessários 8.333/2 ≈ 4.167 mol de CaCO<sub>3</sub> (M = 100 g/mol) ≈ 416,7 kg.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'udesc-2025-v-020',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 20,
    disciplina: 'Química',
    conteudo: 'qui-2a1',
    subtopico: 'Forças intermoleculares (íon-dipolo)',
    dificuldade: 'facil',
    enunciado: `<p>As forças intermoleculares são fundamentais para o entendimento das interações que acontecem em uma substância, de seu estado físico e de seu comportamento frente a outras substâncias.</p>
      <p>Considere o cloreto de sódio nas diferentes situações apresentadas, e assinale a alternativa <b>correta</b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Ao adicionar NaCℓ na água não haverá interação entre essas substâncias, pois as moléculas de água interagem entre si a partir das ligações de hidrogênio, que são interações muito fortes.' },
      { letra: 'B', texto: 'Ao adicionar NaCℓ na água haverá interação do tipo íon-dipolo, entre os íons Na<sup>+</sup> e Cℓ<sup>-</sup> do NaCℓ com a água que é uma molécula polar.', explicacao: 'Correta! Na dissolução, os íons Na⁺ são rodeados pelo polo negativo (oxigênio) das moléculas de água e os íons Cℓ⁻ pelo polo positivo (hidrogênios): interação íon-dipolo, que permite a dissociação do sal. O NaCℓ é iônico (não covalente), sólido por causa da forte atração entre os íons, e conduz eletricidade fundido ou em solução.' },
      { letra: 'C', texto: 'Ao observar o cloreto de sódio em temperatura ambiente e pressão atmosférica de 1 atm, verifica-se que ele é um composto iônico sólido, pois os íons Na<sup>+</sup> e Cℓ<sup>-</sup> encontram-se bem separados, devido a quase não existir forças atrativas entre eles.' },
      { letra: 'D', texto: 'Ao ser adicionado em água, o NaCℓ pode se dissociar em íons, devido à ligação covalente apolar que existe entre os átomos de Na e Cℓ que possuem, respectivamente, 1 elétron e 7 elétrons na camada de valência.' },
      { letra: 'E', texto: 'O NaCℓ não pode conduzir eletricidade em meio aquoso e em estado líquido, pois os íons não possuem mobilidade para que tal fenômeno seja observado nessa situação.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2025-v-021',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 21,
    disciplina: 'Química',
    conteudo: 'qui-4b4',
    subtopico: 'Potenciais de redução',
    dificuldade: 'dificil',
    enunciado: `<p>A tabela, abaixo, mostra algumas semirreações com seus potenciais padrão de redução, em volt, a 25°C.</p>
      <table class="tabela-prova">
        <tr><th>Semirreação</th><th>E°/V</th></tr>
        <tr><td>Au<sup>+</sup>(aq) + e<sup>-</sup> ⇌ Au(s)</td><td>+1,69</td></tr>
        <tr><td>O<sub>2</sub>(g) + 4 H<sup>+</sup>(aq) + 4e<sup>-</sup> ⇌ 2 H<sub>2</sub>O(ℓ)</td><td>+1,23</td></tr>
        <tr><td>NO<sub>3</sub><sup>-</sup>(aq) + 4 H<sup>+</sup>(aq) + 3e<sup>-</sup> ⇌ NO(g) + 2 H<sub>2</sub>O(ℓ)</td><td>+0,96</td></tr>
        <tr><td>Fe<sup>3+</sup>(aq) + e<sup>-</sup> ⇌ Fe<sup>2+</sup>(aq)</td><td>+0,77</td></tr>
        <tr><td>O<sub>2</sub>(g) + 2 H<sub>2</sub>O(ℓ) + 4e<sup>-</sup> ⇌ 4 OH<sup>-</sup>(aq)</td><td>+0,40</td></tr>
        <tr><td>2 H<sup>+</sup> + 2e<sup>-</sup> ⇌ H<sub>2</sub>(g)</td><td>0,00</td></tr>
        <tr><td>Fe<sup>2+</sup> + 2e<sup>-</sup> ⇌ Fe(s)</td><td>-0,44</td></tr>
        <tr><td>Zn<sup>2+</sup> + 2e<sup>-</sup> ⇌ Zn(s)</td><td>-0,76</td></tr>
        <tr><td>2 H<sub>2</sub>O(ℓ) + 2e<sup>-</sup> ⇌ H<sub>2</sub>(g) + 2 OH<sup>-</sup>(aq)</td><td>-0,83</td></tr>
        <tr><td>Aℓ<sup>3+</sup>(aq) + 3e<sup>-</sup> ⇌ Aℓ (s)</td><td>-1,66</td></tr>
        <tr><td>Mg<sup>2+</sup>(aq) + 2e<sup>-</sup> ⇌ Mg(s)</td><td>-2,36</td></tr>
      </table>
      <p>Analise as proposições, com base na tabela.</p>
      <p>I. Zinco, ferro, alumínio e magnésio são tipicamente encontrados na forma de compostos na natureza, já o contrário verifica-se com o ouro, devido ao seu potencial padrão de redução ser positivo.<br>
      II. O gás oxigênio é melhor oxidante em meio alcalino do que em meio ácido.<br>
      III. O gás hidrogênio em meio alcalino reage espontaneamente com íons de magnésio, reduzindo-os a magnésio metálico.<br>
      IV. Zinco metálico pode ser usado como proteção para estruturas de ferro metálicas, pois o potencial padrão de redução para o zinco é mais negativo.<br>
      V. O íon nitrato pode oxidar ferro metálico a íons Fe<sup>3+</sup> em meio ácido.</p>
      <p>Assinale a alternativa <b>correta</b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Somente as proposições I, II e IV são verdadeiras.' },
      { letra: 'B', texto: 'Somente as proposições I, III e IV são verdadeiras.' },
      { letra: 'C', texto: 'Somente as proposições I, IV e V são verdadeiras.', explicacao: 'Correta! Metais com E° negativo (Zn, Fe, Aℓ, Mg) se oxidam facilmente e aparecem como compostos, enquanto o ouro (E° = +1,69 V) é encontrado nativo (I). O Zn (−0,76 V) se oxida antes do Fe (−0,44 V), servindo de metal de sacrifício (IV). O nitrato (+0,96 V) supera tanto o par Fe²⁺/Fe quanto o Fe³⁺/Fe²⁺ (+0,77 V), oxidando o ferro até Fe³⁺ (V). O O<sub>2</sub> oxida melhor em meio ácido (+1,23 V &gt; +0,40 V), e o H<sub>2</sub> não reduz Mg²⁺ (−2,36 V &lt; −0,83 V).' },
      { letra: 'D', texto: 'Somente as proposições II, III e V são verdadeiras.' },
      { letra: 'E', texto: 'Somente as proposições II, IV e V são verdadeiras.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'udesc-2025-v-022',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 22,
    disciplina: 'Química',
    conteudo: ['qui-2b5', 'qui-3b3'],
    subtopico: 'Nicotina: funções orgânicas e isomeria óptica',
    dificuldade: 'media',
    imagem: 'imagens/estudo/udesc-2025-v-022.webp',
    legenda: 'FIGURA',
    enunciado: `<p>A Figura, abaixo, refere-se à molécula de nicotina, presente no tabaco, em cigarros convencionais e eletrônicos.</p>
      <p>Sobre a molécula de nicotina, analise as proposições.</p>
      <p>I. Possui fórmula molecular C<sub>9</sub>H<sub>14</sub>N<sub>2</sub>.<br>
      II. Pode formar ligações de hidrogênio com moléculas de água.<br>
      III. Pode apresentar dois isômeros ópticos devido à presença de um carbono quiral.<br>
      IV. Contém a função amida em sua estrutura.<br>
      V. Seus dois átomos de nitrogênio podem ser protonados, diminuindo sua solubilidade em água.</p>
      <p>Assinale a alternativa <b>correta</b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Somente as proposições I e III são verdadeiras.' },
      { letra: 'B', texto: 'Somente as proposições I e IV são verdadeiras.' },
      { letra: 'C', texto: 'Somente as proposições II e III são verdadeiras.', explicacao: 'Correta! Os nitrogênios (piridina e amina terciária) têm par de elétrons livre e aceitam ligações de hidrogênio da água (II), e o carbono do anel pirrolidínico ligado ao H em cunha é quiral, gerando dois enantiômeros (III). A fórmula é C<sub>10</sub>H<sub>14</sub>N<sub>2</sub> (I falsa), não há grupo C=O ligado a N, logo não há amida (IV falsa), e a protonação forma íons, o que aumenta a solubilidade em água (V falsa).' },
      { letra: 'D', texto: 'Somente as proposições II e V são verdadeiras.' },
      { letra: 'E', texto: 'Somente as proposições III e V são verdadeiras.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'udesc-2025-v-024',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 24,
    disciplina: 'Química',
    conteudo: ['qui-3a1', 'qui-3a4'],
    subtopico: 'Teor alcoólico e quantidade de matéria',
    dificuldade: 'facil',
    enunciado: `<p>A quantidade de álcool em bebidas é expressa pelo seu teor alcoólico em volume, que indica a proporção de álcool etílico (C<sub>2</sub>H<sub>5</sub>OH) presente na bebida. No caso da cerveja, o teor alcoólico é um fator importante para entender o quanto de álcool é ingerido ao se consumir determinada quantidade da bebida. Agora, considere que uma pessoa consuma uma garrafa de 600mL de uma cerveja com teor alcoólico de 5% v/v.</p>
      <p>Sabendo que a densidade do álcool etílico é 0,789 g/mL, a quantidade de álcool ingerida, em mol, ao beber toda essa garrafa, é:</p>`,
    alternativas: [
      { letra: 'A', texto: '0,514', explicacao: 'Correta! Volume de etanol: 5% de 600 mL = 30 mL. Massa: 30 × 0,789 = 23,67 g. Com M(C<sub>2</sub>H<sub>5</sub>OH) = 46 g/mol: n = 23,67/46 ≈ 0,514 mol.' },
      { letra: 'B', texto: '0,467' },
      { letra: 'C', texto: '0,528' },
      { letra: 'D', texto: '0,483' },
      { letra: 'E', texto: '0,492' },
    ],
    gabarito: 'A',
  },
  {
    id: 'udesc-2025-v-025',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 25,
    disciplina: 'Química',
    conteudo: ['qui-2b2', 'qui-2b3'],
    subtopico: 'Nomenclatura e funções orgânicas',
    dificuldade: 'facil',
    enunciado: `<p>A nomenclatura de compostos orgânicos é uma parte fundamental da química orgânica, pois permite identificar a estrutura e a função dos compostos.</p>
      <p>Assinale a alternativa que apresenta, <b>corretamente,</b> a nomenclatura e a função orgânica correspondente.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Pentano: um álcool que contém cinco carbonos e um grupo hidroxila, sendo um composto insaturado.' },
      { letra: 'B', texto: 'Hexano: um alceno com seis carbonos, que contém uma ligação dupla entre dois carbonos.' },
      { letra: 'C', texto: 'Ácido propanoico: um éster derivado do ácido propanoico, que possui um grupo carboxila (-COOH).' },
      { letra: 'D', texto: 'Butanol: um álcool com quatro carbonos, que apresenta um grupo hidroxila ligado a um carbono saturado.', explicacao: 'Correta! O prefixo "but" indica 4 carbonos e o sufixo "ol" indica álcool: hidroxila (−OH) ligada a carbono saturado. Pentano e hexano são alcanos (sufixo "ano", só ligações simples), ácido propanoico é ácido carboxílico (não éster) e eteno é um alceno (não aldeído).' },
      { letra: 'E', texto: 'Eteno: um aldeído que contém uma ligação dupla entre carbonos e um grupo carbonila (-CHO).' },
    ],
    gabarito: 'D',
  },
  {
    id: 'udesc-2025-v-026',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 26,
    disciplina: 'Química',
    conteudo: ['qui-2a2', 'qui-2a4', 'qui-2a5'],
    subtopico: 'Funções inorgânicas',
    dificuldade: 'facil',
    enunciado: `<p>Sobre as funções inorgânicas e a nomenclatura dos compostos, analise as proposições e coloque (V) para verdadeiro e (F) para falso.</p>
      <p>( ) O ácido clorídrico (HCℓ) é um ácido forte e se dissocia completamente em solução aquosa, liberando íons H<sup>+</sup> e Cℓ<sup>−</sup>.<br>
      ( ) O sulfato de cálcio (CaSO<sub>4</sub>) é um exemplo de um sal ácido, resultante da neutralização de um ácido forte com uma base forte.<br>
      ( ) O hidróxido de sódio (NaOH) é uma base forte, que se dissocia completamente em água, formando íons Na<sup>+</sup> e OH<sup>−</sup>.<br>
      ( ) O nitrato de amônio (NH<sub>4</sub>NO<sub>3</sub>) é um sal que pode ser classificado como um composto iônico, formado pela reação de um ácido fraco e uma base forte.<br>
      ( ) O dióxido de carbono (CO<sub>2</sub>) é um óxido ácido, que reage com água para formar ácido carbônico (H<sub>2</sub>CO<sub>3</sub>).</p>
      <p>Assinale a alternativa com a sequência <b>correta</b>, de cima para baixo.</p>`,
    alternativas: [
      { letra: 'A', texto: 'F – V – V – F – V' },
      { letra: 'B', texto: 'V – V – F – V – F' },
      { letra: 'C', texto: 'V – F – V – F – V', explicacao: 'Correta! HCℓ é ácido forte e NaOH é base forte, ambos totalmente dissociados em água (V, V), e o CO<sub>2</sub> é óxido ácido: CO<sub>2</sub> + H<sub>2</sub>O → H<sub>2</sub>CO<sub>3</sub> (V). O CaSO<sub>4</sub> é sal neutro (normal), não ácido (F), e o NH<sub>4</sub>NO<sub>3</sub> vem de ácido forte (HNO<sub>3</sub>) e base fraca (NH<sub>3</sub>/NH<sub>4</sub>OH) (F).' },
      { letra: 'D', texto: 'V – F – F – V – V' },
      { letra: 'E', texto: 'V – V – V – F – V' },
    ],
    gabarito: 'C',
  },
  {
    id: 'udesc-2025-v-027',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 27,
    disciplina: 'Química',
    conteudo: 'qui-4b5',
    subtopico: 'Meia-vida',
    dificuldade: 'facil',
    enunciado: `<p>O rádio (Ra), um elemento radioativo descoberto por Marie Curie e seu marido Pierre Curie, em 1898, possui um tempo de meia-vida de aproximadamente 1600 anos. Suponha que, em uma amostra inicial de 10 gramas de rádio, você meça a quantidade de material radioativo, após um certo período. O tempo necessário para que a quantidade de rádio restante na amostra seja de 1,25 gramas é:</p>`,
    alternativas: [
      { letra: 'A', texto: '4800 anos', explicacao: 'Correta! 10 g → 5 g → 2,5 g → 1,25 g: são 3 meias-vidas. Tempo = 3 × 1600 = 4800 anos.' },
      { letra: 'B', texto: '3200 anos' },
      { letra: 'C', texto: '2400 anos' },
      { letra: 'D', texto: '6400 anos' },
      { letra: 'E', texto: '1000 anos' },
    ],
    gabarito: 'A',
  },
  {
    id: 'udesc-2025-v-028',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 28,
    disciplina: 'Química',
    conteudo: ['qui-4a1', 'qui-4a2'],
    subtopico: 'Neutralização: entalpia e cinética',
    dificuldade: 'dificil',
    enunciado: `<p>A reação de neutralização entre um ácido forte e uma base forte é um conceito fundamental na química, que envolve aspectos de cinética, termodinâmica e equilíbrio químico. Essa reação é amplamente estudada em laboratórios e é crucial em aplicações práticas, como na titulação de ácidos e bases. Considere a seguinte reação entre o ácido clorídrico (HCℓ) e o hidróxido de sódio (NaOH):</p>
      <p style="text-align:center">HCℓ(aq) + NaOH(aq) → NaCℓ(aq) + H<sub>2</sub>O(ℓ)</p>
      <p>A entalpia de neutralização para essa reação é de aproximadamente −57,1kJ/mol<sup>-1</sup>.</p>
      <p>Com base nas informações acima, assinale a alternativa <b>incorreta</b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O cloreto de sódio (NaCℓ), formado na reação, é um sal neutro.' },
      { letra: 'B', texto: 'A entalpia de neutralização para a reação entre HCℓ e NaOH é aproximadamente −57,1kJ/mol, indicando que a reação é exotérmica e libera calor ao ambiente.' },
      { letra: 'C', texto: 'A solução resultante da neutralização, composta por água e cloreto de sódio, não apresenta variações significativas de pH em condições normais, pois ambos os reagentes são ácidos e bases fortes.' },
      { letra: 'D', texto: 'A velocidade da reação de neutralização é afetada por fatores como a concentração dos reagentes e a temperatura, que podem influenciar a taxa de formação dos produtos.' },
      { letra: 'E', texto: 'O aumento da temperatura da reação de neutralização entre HCℓ e NaOH pode aumentar a velocidade da reação, mas não altera a entalpia de reação, que permanece constante.', explicacao: 'Correta! Esta é a afirmação incorreta: a temperatura acelera a reação, mas a variação de entalpia depende das condições: o valor −57,1 kJ/mol é o padrão (25 °C), e ΔH muda com a temperatura, pois as capacidades caloríficas de reagentes e produtos são diferentes. Por isso não se pode afirmar que a entalpia "permanece constante". As demais estão corretas: NaCℓ é sal neutro, a reação é exotérmica e a velocidade depende de concentração e temperatura.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'udesc-2025-v-029',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 29,
    disciplina: 'História',
    conteudo: ['his-1a4', 'his-1a5', 'his-1a6'],
    subtopico: 'Escravidão na Antiguidade',
    dificuldade: 'media',
    enunciado: `<p>A escravidão esteve presente em várias civilizações da Antiguidade, com características distintas, dependendo do contexto cultural e econômico.</p>
      <p>A respeito das diversas formas de escravidão na Antiguidade, assinale a alternativa <b>correta</b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Entre os hebreus, a escravidão era praticada apenas em relação a estrangeiros capturados em guerras, e a Lei Mosaica proibia a escravização de outros hebreus, estabelecendo a libertação dos escravos no Sétimo Ano, conhecido como o "Ano Sabático".', explicacao: 'Correta! Para o gabarito oficial, a Lei Mosaica limitava a servidão entre os hebreus e previa a libertação no sétimo ano (Ano Sabático). As demais erram: em Roma a alforria não levava os libertos à elite política; as pirâmides egípcias foram erguidas sobretudo por trabalhadores livres e camponeses em regime de corveia; na Grécia havia escravidão por dívidas (como em Atenas antes de Sólon) e os hilotas de Esparta eram servos do Estado sem liberdade; e os fenícios praticavam o comércio de escravos.' },
      { letra: 'B', texto: 'Entre os romanos, a escravidão era flexível, pois os escravos podiam ser libertos, facilmente, por seus donos e, em muitos casos, integravam-se, plenamente, à elite romana, chegando a ocupar cargos políticos de destaque.' },
      { letra: 'C', texto: 'Entre os egípcios, a maior parte dos escravos era composta por prisioneiros de guerra e a escravidão era uma prática econômica vital para a construção das grandes pirâmides, sendo os escravos responsáveis por toda a mão de obra pesada em grandes obras públicas.' },
      { letra: 'D', texto: 'Entre os gregos, a escravidão era restrita a estrangeiros e não incluía cidadãos gregos, sendo mais comum em cidades como Esparta, onde os "hilotas", embora tivessem uma condição de servidão, gozavam de relativa liberdade em comparação com escravos comuns.' },
      { letra: 'E', texto: 'Entre os fenícios, embora conhecidos por seu comércio marítimo, não havia a escravidão em larga escala, preferindo estabelecer acordos comerciais com as civilizações vizinhas, o que excluía o tráfico de pessoas.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'udesc-2025-v-030',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 30,
    disciplina: 'História',
    conteudo: ['his-4b2', 'his-4b3'],
    subtopico: 'SNI, FUNAI e povos indígenas em SC na ditadura',
    dificuldade: 'media',
    enunciado: `<p>O Serviço Nacional de Informações (SNI) e a Fundação Nacional do Índio (FUNAI) tiveram papéis importantes na história de Santa Catarina, especialmente durante o regime militar.</p>
      <p>Assinale a alternativa que melhor descreve funções e interações dessas instituições com as populações indígenas no Estado.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A FUNAI foi criada pelo SNI para integrar os indígenas catarinenses ao exército, visando a utilizar sua expertise territorial para ampliar a política do Estado no oeste catarinense.' },
      { letra: 'B', texto: 'O SNI utilizou a FUNAI como meio de controle militar sobre territórios indígenas, especialmente nas fronteiras, promovendo o deslocamento forçado de comunidades indígenas.', explicacao: 'Correta! Durante a ditadura, a FUNAI (criada em 1967) esteve subordinada à lógica de segurança nacional, e o SNI a usou para vigiar e controlar terras indígenas, sobretudo em áreas de fronteira, com remoções forçadas de comunidades. Ela não foi criada pelo SNI, e nenhum dos órgãos atuou como protetor de direitos territoriais ou da cultura indígena.' },
      { letra: 'C', texto: 'O SNI era responsável por mediar conflitos entre indígenas e fazendeiros, assegurando os direitos territoriais dos povos originários.' },
      { letra: 'D', texto: 'A FUNAI, com apoio do SNI, implementou um projeto de colonização indígena, substituindo terras indígenas por projetos agrícolas estatais.' },
      { letra: 'E', texto: 'Ambos os órgãos atuaram em parceria para preservar a cultura indígena, assegurando que as tradições fossem mantidas em territórios protegidos.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2025-v-031',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 31,
    disciplina: 'História',
    conteudo: ['his-2a3', 'his-3a3'],
    subtopico: 'Insurreições indígenas na América Latina',
    dificuldade: 'dificil',
    enunciado: `<p>As insurreições indígenas, no Brasil e na América Latina, desde o período colonial até o presente, foram marcadas por uma forte resistência às imposições coloniais e pós-coloniais.</p>
      <p>Considerando a complexidade e diversidade dessas lutas, assinale a alternativa que melhor reflete o papel dessas insurreições no contexto da resistência indígena latino-americana.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A Revolta dos Comuneros, na Colômbia (1780-1781), foi um levante que uniu indígenas, mestiços e crioulos em oposição às autoridades coloniais espanholas. A principal motivação para a revolta foi o descontentamento com o aumento de impostos, além das profundas desigualdades sociais e econômicas.', explicacao: 'Correta! A Revolta dos Comuneros (Nova Granada, 1780-1781) reuniu indígenas, mestiços e crioulos contra o aumento de impostos das reformas bourbônicas e as desigualdades coloniais. As outras erram: Túpac Amaru II foi derrotado sem acabar com o trabalho forçado; nas Guerras Guaraníticas os guaranis lutaram contra as tropas luso-espanholas, não aliados a colonizadores; a Guerra dos Aimorés não forçou tratados de paz da Coroa; e o levante equatoriano de 1990 não criou um Estado independente.' },
      { letra: 'B', texto: 'A Rebelião de Túpac Amaru II (1780-1783), no Peru, foi uma das maiores revoltas indígenas contra a dominação espanhola e, apesar de seu fracasso em alcançar a independência, resultou na libertação imediata das populações indígenas do trabalho forçado e na abolição das tributações coloniais.' },
      { letra: 'C', texto: 'As Guerras Guaraníticas (1750-1756), ocorridas no sul do Brasil e Paraguai, marcaram a resistência indígena ao Tratado de Madrid, sendo um exemplo raro de uma aliança entre indígenas e colonizadores europeus, que juntos enfrentaram tropas de Portugal e Espanha.' },
      { letra: 'D', texto: 'No Brasil, A Guerra dos Aimorés (1555-1673) foi uma revolta indígena que resultou na expulsão temporária dos colonos portugueses de várias regiões da Bahia e Espírito Santo, forçando a Coroa Portuguesa a assinar tratados de paz com diversas nações indígenas.' },
      { letra: 'E', texto: 'A Revolta Indígena no Equador (1990) foi uma das poucas, na América Latina, que conquistou um Estado independente de fato, estabelecendo uma nação indígena autônoma, reconhecida internacionalmente e em parte do território equatoriano.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'udesc-2025-v-033',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 33,
    disciplina: 'História',
    conteudo: 'his-2a2',
    subtopico: 'Mulheres na Reforma e na Contrarreforma',
    dificuldade: 'media',
    enunciado: `<p>A Reforma Protestante e a Contrarreforma Católica foram movimentos que moldaram profundamente a política e a religião, globalmente, no contexto da história moderna. Apesar de liderados por figuras proeminentes, como Martinho Lutero e João Calvino, esses processos também contaram com a participação de mulheres.</p>
      <p>Analise as proposições acerca da participação das mulheres no contexto da Reforma e da Contrarreforma, e assinale a alternativa <b>correta</b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'As mulheres anabatistas desempenharam um papel importante na propagação das ideias reformadoras na Europa. Elas pregavam a igualdade entre homens e mulheres e participaram ativamente dos movimentos de Contrarreforma religiosa.' },
      { letra: 'B', texto: 'As mulheres, especialmente nas áreas protestantes, foram excluídas das discussões teológicas e dos movimentos de reforma, sendo que suas funções na sociedade permaneceram rigidamente limitadas às esferas familiares, sem participação nos debates religiosos ou políticos.' },
      { letra: 'C', texto: 'Na Contrarreforma, as classes populares e as mulheres tiveram um papel insignificante na propagação da fé católica, uma vez que as ordens religiosas como a Companhia de Jesus eram exclusivamente compostas por homens.' },
      { letra: 'D', texto: 'Ordens religiosas femininas, como as Ursulinas e as Carmelitas Descalças, desempenharam um papel crucial na educação das mulheres e na manutenção da fé católica em suas comunidades, com algumas também dedicando-se à assistência aos pobres e doentes.', explicacao: 'Correta! Na Contrarreforma, as Ursulinas (fundadas por Ângela Merici) dedicaram-se à educação de meninas e as Carmelitas Descalças (reformadas por Teresa de Ávila) à vida religiosa e espiritual, ajudando a fortalecer o catolicismo. As anabatistas não atuaram na Contrarreforma (que é católica), mulheres protestantes participaram dos debates, e Catarina de Médici era católica, não protestante.' },
      { letra: 'E', texto: 'A Rainha da França, Catarina de Médici, desempenhou um papel crucial nas Guerras Religiosas da França, tentando conciliar católicos e protestantes. Mesmo sendo protestante, ela procurou garantir a liberdade religiosa para os católicos no território francês.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'udesc-2025-v-034',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 34,
    disciplina: 'História',
    conteudo: 'his-4a5',
    subtopico: 'Movimento Zapatista (EZLN)',
    dificuldade: 'dificil',
    enunciado: `<p>O Movimento Zapatista, oficialmente conhecido como Exército Zapatista de Libertação Nacional (EZLN), ganhou notoriedade internacional com sua insurreição em 1994, no estado de Chiapas, México.</p>
      <p>Analise as proposições acerca dos objetivos, estratégias e alianças políticas do EZLN ao longo de sua história e coloque (V) para verdadeiro e (F) para falso.</p>
      <p>( ) O EZLN defende a autonomia indígena e a criação de comunidades autônomas baseadas na auto-organização. Embora inicialmente tenha recorrido à luta armada, hoje utiliza, principalmente, meios pacíficos e o diálogo com o governo para alcançar seus objetivos.<br>
      ( ) O EZLN lançou uma revolta armada no estado de Chiapas contra o governo mexicano, que tem se acirrado em confrontos armados violentos, desde o Acordo Estados Unidos-México-Canadá (USMCA), assinado em 2020.<br>
      ( ) O Movimento dos Trabalhadores Rurais Sem Terra (MST), um dos maiores movimentos sociais da América Latina, estabeleceu várias conexões com o EZLN, trocando experiências e aprendendo com suas estratégias de resistência e organização.<br>
      ( ) O EZLN inspirou diversos movimentos indígenas na América Latina a se organizarem e lutarem por seus direitos, incluindo os mapuches no Chile, os guaranis no Paraguai e os povos indígenas da Amazônia brasileira, que reivindicam autonomia, direitos territoriais e culturais.<br>
      ( ) O EZLN participou ativamente dos Fóruns Sociais Mundiais e de outros eventos do movimento antiglobalização, contribuindo para a construção de uma rede global de resistência ao neoliberalismo.</p>
      <p>Assinale a alternativa <b>correta</b>, de cima para baixo.</p>`,
    alternativas: [
      { letra: 'A', texto: 'F – V – V – F – V' },
      { letra: 'B', texto: 'V – V – F – F – F' },
      { letra: 'C', texto: 'F – V – V – V – V' },
      { letra: 'D', texto: 'F – F – V – F – V' },
      { letra: 'E', texto: 'V – F – V – V – V', explicacao: 'Correta! Após o levante armado de 1994 (no dia em que entrou em vigor o NAFTA), o EZLN passou a priorizar meios políticos e pacíficos e a organização de comunidades autônomas (V); trocou experiências com o MST (V), inspirou movimentos indígenas pelo continente (V) e integrou a rede antiglobalização e antineoliberal (V). A 2ª é falsa: não houve escalada de confrontos armados ligada ao USMCA.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'udesc-2025-v-035',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 35,
    disciplina: 'História',
    conteudo: ['his-4b4', 'his-4a5'],
    subtopico: 'Comissões da Verdade',
    dificuldade: 'dificil',
    enunciado: `<p>As Comissões da Verdade desempenharam um papel central na reconstrução de sociedades pós-conflito ou pós-ditaduras em diversos países. No entanto, cada uma teve características, contextos específicos e nomenclaturas diversas.</p>
      <p>Assinale a alternativa que descreve <b>corretamente</b> o funcionamento ou o impacto de uma Comissão da Verdade em um dos países mencionados.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A Comissão da Verdade e Reconciliação da África do Sul permitiu a anistia incondicional para todos os perpetradores do Apartheid, sem exigir confissão pública ou qualquer tipo de reparação às vítimas, sendo, por isso, muito criticada nacional e internacionalmente.' },
      { letra: 'B', texto: 'A Comissão Nacional da Verdade da Argentina foi pioneira na América Latina, tendo como objetivo principal a reconciliação nacional, sem implicar responsabilizações criminais contra os agentes da ditadura militar, sendo, por isso, considerada exemplar para demais comissões instaladas em outros países.' },
      { letra: 'C', texto: 'Em Serra Leoa, a Comissão de Verdade e Reconciliação foi criada para investigar os crimes da guerra civil, sendo a única a atuar em paralelo com um tribunal internacional que processava os principais responsáveis por crimes de guerra.', explicacao: 'Correta! Em Serra Leoa, a Comissão de Verdade e Reconciliação funcionou ao mesmo tempo que o Tribunal Especial para Serra Leoa, apoiado pela ONU, que julgava os principais responsáveis pela guerra civil. Na África do Sul, a anistia exigia confissão pública completa; a comissão argentina (CONADEP) embasou o Julgamento das Juntas; a CNV brasileira não tinha poder judicial; e a comissão chilena (Rettig) investigou justamente mortes e desaparecimentos da ditadura de Pinochet.' },
      { letra: 'D', texto: 'A Comissão Nacional da Verdade do Brasil teve ampla autonomia judicial, possibilitando a reabertura de processos judiciais contra militares, envolvidos em violações de direitos humanos durante a ditadura, resultando em diversas condenações e, com isso, agravando as relações políticas entre o governo de Dilma Rousseff (2011-2016) e os militares, sobretudo do Exército Brasileiro.' },
      { letra: 'E', texto: 'A Comissão Nacional da Verdade e Reconciliação do Chile optou por não investigar desaparecimentos forçados, limitando seu escopo a violações de direitos civis e políticos ocorridas durante a transição democrática, sem foco nos crimes cometidos pela ditadura de Pinochet.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'udesc-2025-v-036',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 36,
    disciplina: 'História',
    conteudo: 'his-4a5',
    subtopico: 'Revolução Chinesa',
    dificuldade: 'facil',
    enunciado: `<p>O evento que marcou a transição da China para um regime socialista liderado pelo Partido Comunista e impactou profundamente a política internacional do século XX foi a:</p>`,
    alternativas: [
      { letra: 'A', texto: 'Abertura econômica da China, iniciada por Deng Xiaoping nas décadas de 1970 e 1980.' },
      { letra: 'B', texto: 'Guerra Civil Chinesa (1927-1949), que culminou na vitória do Kuomintang e na instauração de um governo nacionalista.' },
      { letra: 'C', texto: 'Grande Marcha (1934), realizada pelo Exército Vermelho para escapar das tropas nacionalistas.' },
      { letra: 'D', texto: 'Revolução Xinhai de 1911, que derrubou a monarquia e instaurou a República da China.' },
      { letra: 'E', texto: 'Proclamação da República Popular da China, em 1949, sob a liderança de Mao Tsé-tung.', explicacao: 'Correta! Em 1949, com a vitória dos comunistas na guerra civil, Mao Tsé-tung proclamou a República Popular da China, instaurando o regime socialista e ampliando o bloco comunista na Guerra Fria. A guerra civil terminou com a derrota (não a vitória) do Kuomintang, a Grande Marcha foi uma etapa anterior e a Revolução de 1911 criou uma república não socialista.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'udesc-2025-v-037',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 37,
    disciplina: 'História',
    conteudo: ['his-4a5', 'his-4a3'],
    subtopico: 'Mulheres em revoluções e insurgências',
    dificuldade: 'media',
    enunciado: `<p>Ao longo da história, mulheres de diferentes regiões do mundo participaram de revoltas, revoluções e insurgências, muitas vezes, assumindo papéis centrais na luta armada.</p>
      <p>Considerando essa diversidade, assinale a alternativa que apresenta as informações <b>corretas</b> acerca da participação feminina em movimentos revolucionários e insurgentes.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Na Guerra de Libertação da Argélia (1954-1962), mulheres argelinas, especialmente as da Frente de Libertação Nacional (FLN), limitaram sua participação à logística e aos cuidados médicos, sendo proibidas de participar diretamente em combates armados ou em atos de resistência violenta.' },
      { letra: 'B', texto: 'Durante a Guerra Civil Espanhola (1936-1939), as Milicianas lutaram na linha de frente ao lado dos homens nas brigadas antifascistas republicanas, e após a derrota dos republicanos, as mulheres mantiveram seus direitos políticos e sociais assegurados pelo regime franquista.' },
      { letra: 'C', texto: 'Durante a Revolução Cubana (1953-1959), mulheres como Vilma Espín e Haydée Santamaría desempenharam papéis fundamentais, tanto na luta armada quanto na organização política do Movimento 26 de Julho. Após a vitória da revolução, muitas dessas mulheres assumiram posições de liderança no governo revolucionário.', explicacao: 'Correta! Vilma Espín e Haydée Santamaría participaram da luta armada e da organização do Movimento 26 de Julho e, após 1959, ocuparam cargos de liderança (Vilma presidiu a Federação de Mulheres Cubanas; Haydée dirigiu a Casa de las Américas). As argelinas da FLN também atuaram em ações armadas, e o franquismo retirou direitos políticos e sociais das mulheres.' },
      { letra: 'D', texto: 'Na Guerra da Ucrânia, muitas mulheres ucranianas têm servido nas forças armadas, tanto nas linhas de frente quanto em funções de suporte. Elas atuam como soldados, médicas, <i>snipers</i>, pilotos e algumas têm ocupado altos postos de comando e cargos militares nas forças armadas ucraniana.' },
      { letra: 'E', texto: 'Na Primeira Intifada (1987-1993), mulheres palestinas desempenharam um papel crucial nas redes de apoio logístico e protestos não violentos, mas foram excluídas das atividades armadas e de resistência organizada, devido às normas patriarcais.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'udesc-2025-v-038',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 38,
    disciplina: 'História',
    conteudo: 'his-1b6',
    subtopico: 'Economia da Ilha de Desterro (Santa Catarina)',
    dificuldade: 'media',
    enunciado: `<p>Assinale a alternativa <b>correta</b> acerca da economia da Ilha de Desterro (atual Florianópolis), durante o período colonial e imperial.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A economia da Ilha de Desterro era diversificada, com destaque para a agricultura de subsistência, a pesca, a produção de aguardente e a extração de madeira. A região também desempenhava um importante papel no abastecimento de alimentos para outras regiões do Brasil.', explicacao: 'Correta! Com a colonização açoriana (século XVIII), Desterro teve economia diversificada de pequenas propriedades: lavouras de subsistência (sobretudo mandioca e farinha), pesca, engenhos de aguardente e extração de madeira, além de fornecer alimentos a outras regiões. Não houve grandes fazendas de café e algodão, mineração de ouro e diamantes nem predomínio da caça à baleia ou do comércio de importados.' },
      { letra: 'B', texto: 'A economia da Ilha de Desterro era baseada na produção de grandes propriedades agrícolas, como as fazendas de café e de algodão presentes no sul da Ilha, com utilização de mão de obra escrava.' },
      { letra: 'C', texto: 'A caça às baleias era a principal atividade econômica da Ilha, gerando grande riqueza para a Coroa Portuguesa e para os comerciantes locais. Essa atividade, no entanto, foi rapidamente substituída pela agricultura, devido à escassez de mão de obra especializada para a atividade.' },
      { letra: 'D', texto: 'A mineração de ouro e diamantes foi, inicialmente, explorada na Ilha de Desterro, atraindo grande número de imigrantes açorianos e impulsionando o crescimento da cidade.' },
      { letra: 'E', texto: 'A economia da Ilha era baseada no comércio, com a cidade de Desterro funcionando como um importante centro de distribuição de produtos importados da Europa para outras regiões do Brasil, em função da facilidade de desembarque de navios.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'udesc-2025-v-039',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 39,
    disciplina: 'História',
    conteudo: 'his-4b4',
    subtopico: 'Constituição de 1988',
    dificuldade: 'media',
    enunciado: `<p>A Constituição de 1988, conhecida como "Constituição Cidadã", é um marco fundamental na história política do Brasil.</p>
      <p>Analise as proposições acerca do processo de elaboração da Constituição de 1988, e assinale (V) para verdadeiro e (F) para falso.</p>
      <p>( ) Uma das disposições mais importantes da Constituição de 1988 foi a garantia da educação básica como direito de todos e dever do Estado. Essa conquista foi fruto de intensa mobilização social, especialmente de professores e estudantes, que pressionaram a Assembleia Constituinte para incluir a educação como um direito fundamental.<br>
      ( ) Além dos constituintes eleitos, a Assembleia Constituinte de 1988 contou com a participação ativa da sociedade civil. Foram realizadas audiências públicas, debates e mobilizações populares em todo o país, com diversas categorias profissionais e movimentos sociais apresentando propostas e defendendo seus interesses.<br>
      ( ) Embora o movimento negro tenha participado ativamente da mobilização popular durante a Constituinte, ele não conseguiu incluir na Constituição de 1988 que o racismo fosse considerado crime inafiançável e imprescritível no Brasil. Essa vitória ocorreu somente por pressão ao judiciário e ao legislativo brasileiro.<br>
      ( ) A Constituição de 1988 garantiu, de forma explícita, a proteção do meio ambiente como direito fundamental e reconheceu formalmente os direitos dos povos indígenas sobre suas terras e culturas. Esses avanços colocaram o Brasil na vanguarda da proteção ambiental e dos direitos indígenas, destacando a importância da preservação dos recursos naturais e do respeito à diversidade étnica e cultural do país.<br>
      ( ) A reforma agrária foi um dos temas mais controversos da Constituinte. A pressão dos movimentos sociais, especialmente do Movimento dos Trabalhadores Rurais Sem Terra (MST) foi fundamental para o debate, mas não conseguiu a inclusão de artigos que estabelecessem diretrizes para a reforma agrária.</p>
      <p>Assinale a alternativa que apresenta a sequência <b>correta</b>, de cima para baixo.</p>`,
    alternativas: [
      { letra: 'A', texto: 'V – F – V – F – F' },
      { letra: 'B', texto: 'V – V – F – V – F', explicacao: 'Correta! A Constituição garantiu a educação como direito de todos e dever do Estado (V), a Constituinte recebeu emendas populares, audiências e forte mobilização social (V) e assegurou o meio ambiente equilibrado (art. 225) e os direitos indígenas (arts. 231-232) (V). É falso que o racismo ficou de fora: o art. 5º, XLII, o define como crime inafiançável e imprescritível; e também é falso que não houve artigos sobre reforma agrária (arts. 184 a 191).' },
      { letra: 'C', texto: 'F – V – V – F – V' },
      { letra: 'D', texto: 'F – V – V – F – F' },
      { letra: 'E', texto: 'V – F – F – V – V' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2025-v-040',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 40,
    disciplina: 'Geografia',
    conteudo: ['geo-2u2', 'geo-2u3'],
    subtopico: 'Agropecuária brasileira',
    dificuldade: 'facil',
    enunciado: `<p>Em 2023, o crescimento da economia brasileira foi impulsionado pela alta de 15% da agropecuária. O avanço do setor é o maior da série histórica divulgada pelo IBGE, e o Produto Interno Bruto do país cresceu 2,9%.</p>
      <p><small>Disponível em: www.gov.br/agricultura/pt-br/assuntos/noticias/crescimento-da-economia-brasileira-e-impulsionado-pela-alta-de-15-da-agropecuaria-em-2023. Acesso em: 07 nov. 2024.</small></p>
      <p>Assinale a alternativa <b>correta</b> sobre o setor agropecuário brasileiro.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A produção do setor agropecuário brasileiro é realizada em pequenas propriedades, com alta produção e uso intenso de tecnologia.' },
      { letra: 'B', texto: 'No Brasil, os ganhos com a exportação de produtos agrícolas são menores que os gastos com a importação, visto que o volume de produtos exportados é muito menor, o que coloca o Brasil como grande fornecedor de produtos agrícolas no mercado internacional.' },
      { letra: 'C', texto: 'Devido ao fato de ser um grande produtor agrícola, o Brasil precisa importar poucos alimentos. Essa importação se restringe a produtos exóticos e menos consumidos no Brasil, como cerejas, ameixas e salmão.' },
      { letra: 'D', texto: 'O setor também é responsável pela maior parte da mão de obra no campo brasileiro, decorrente da sua grande produtividade.' },
      { letra: 'E', texto: 'A produção brasileira do agronegócio ocorre em grande escala, realizada em grandes propriedades monocultoras, empregando relativamente pouca mão de obra no campo.', explicacao: 'Correta! O agronegócio brasileiro se baseia em grandes propriedades mecanizadas e monocultoras (soja, milho, cana etc.), voltadas à exportação, que empregam pouca mão de obra por hectare. A maior parte do pessoal ocupado no campo está na agricultura familiar, a balança comercial agrícola é superavitária e o país importa também alimentos básicos, como trigo.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'udesc-2025-v-041',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 41,
    disciplina: 'Geografia',
    conteudo: 'geo-3u1',
    subtopico: 'Climograma de Brasília (clima tropical)',
    dificuldade: 'facil',
    enunciado: `<p>Os dados da tabela expressam a precipitação e a temperatura na cidade de Brasília (DF), ao longo dos meses do ano.</p>
      <table class="tabela-prova">
        <tr><th></th><th>J</th><th>F</th><th>M</th><th>A</th><th>M</th><th>J</th><th>J</th><th>A</th><th>S</th><th>O</th><th>N</th><th>D</th></tr>
        <tr><th>Precipitação (mm)</th><td>241</td><td>215</td><td>189</td><td>124</td><td>39</td><td>9</td><td>12</td><td>13</td><td>52</td><td>172</td><td>238</td><td>249</td></tr>
        <tr><th>Temperatura (˚C)</th><td>21,6</td><td>21,8</td><td>22,0</td><td>21,4</td><td>20,2</td><td>19,1</td><td>19,1</td><td>21,2</td><td>22,5</td><td>22,1</td><td>21,7</td><td>21,5</td></tr>
      </table>
      <p>A partir da leitura dos dados, assinale a alternativa <b>correta</b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A temperatura mais baixa foi registrada no mês de maio.' },
      { letra: 'B', texto: 'Os meses menos chuvosos são janeiro, fevereiro, março, abril, maio, junho e julho.' },
      { letra: 'C', texto: 'Os meses mais chuvosos são janeiro, fevereiro, março, abril, outubro, novembro e dezembro.', explicacao: 'Correta! Os maiores totais de chuva estão em outubro a abril (172 a 249 mm, com abril em 124 mm), contra 9 a 52 mm de maio a setembro: é o clima tropical típico do Brasil Central, com verão chuvoso e inverno seco. A menor temperatura (19,1 °C) foi em junho e julho, e a maior (22,5 °C) em setembro.' },
      { letra: 'D', texto: 'A temperatura mais alta foi registrada nos meses de junho e julho.' },
      { letra: 'E', texto: 'Os dados apresentados são semelhantes aos dados de regiões com clima subtropical.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'udesc-2025-v-042',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 42,
    disciplina: 'Geografia',
    conteudo: ['geo-3u3', 'geo-3u4'],
    subtopico: 'Bacia do Xingu: desmatamento e recursos hídricos',
    dificuldade: 'media',
    imagem: 'imagens/estudo/udesc-2025-v-042.webp',
    enunciado: `<p>Dados do Sistema de Monitoramento da Exploração Madeireira (Simex) 2024 revelam que a extração ilegal de madeira na Amazônia aumentou 19% e que as propriedades particulares lideram a ilegalidade, e o desmatamento avança sobre terras Indígenas.</p>
      <p><small>Disponível em: www.imazon.org.br/imprensa/extracao-ilegal-de-madeira-aumentou-19-na-amazonia/. Acesso em: 07 nov. 2024.</small></p>
      <p>A partir do enunciado e dos mapas que retratam a evolução do desmatamento na bacia hidrográfica do Rio Xingu, analise as proposições.</p>
      <p>I. Os desmatamentos da bacia hidrográfica do Rio Xingu estão associados ao avanço do modo de produção agropecuária das comunidades indígenas, atividade comercial, com uso intensivo de agrotóxicos nas plantações do entorno do Parque Indígena do Xingu, o que constitui como uma ameaça à qualidade das águas de sua bacia hidrográfica.<br>
      II. Reflorestar as matas ciliares das cabeceiras do Rio Xingu seria uma alternativa suficiente para proteger as águas da rede hidrográfica desse parque e garantir a manutenção de sua qualidade.<br>
      III. O Parque Nacional do Xingu é considerado uma ilha em relação ao seu entorno, no que diz respeito à preservação ambiental da região. Portanto, as dinâmicas da bacia hidrográfica põem em risco a soberania dos povos indígenas em relação à água, pois o Rio Xingu tem suas nascentes principais ao sul, percorrendo, assim, seu trajeto em direção ao norte. Os afluentes do Rio Xingu, que formam as nascentes principais do rio, estão à montante do rio, fora da área do parque.<br>
      IV. Qualquer acontecimento que ocorre na bacia de drenagem repercute direta ou indiretamente nos rios. O uso de insumos potencialmente poluentes dos recursos hídricos, como agrotóxicos nas áreas da bacia hidrográfica, principalmente, nas áreas de cabeceira, repercutirá direta ou indiretamente nos rios, por meio de chuvas ou dos lençóis freáticos.</p>
      <p>Assinale a alternativa <b>correta</b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Somente as proposições I e II são verdadeiras.' },
      { letra: 'B', texto: 'Somente as proposições I e III são verdadeiras.' },
      { letra: 'C', texto: 'Somente as proposições I e IV são verdadeiras.' },
      { letra: 'D', texto: 'Somente as proposições II e IV são verdadeiras.' },
      { letra: 'E', texto: 'Somente as proposições III e IV são verdadeiras.', explicacao: 'Correta! Os mapas mostram o parque como uma "ilha" de floresta cercada pelo desmatamento; como o Xingu corre de sul para norte, suas nascentes ficam a montante, fora do parque, e o que acontece nelas chega às águas indígenas (III). Tudo o que ocorre na bacia de drenagem, como o uso de agrotóxicos nas cabeceiras, atinge os rios pelo escoamento e pelos lençóis freáticos (IV). O desmatamento vem da agropecuária comercial do entorno, não das comunidades indígenas (I falsa), e só reflorestar matas ciliares não basta (II falsa).' },
    ],
    gabarito: 'E',
  },
  {
    id: 'udesc-2025-v-043',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 43,
    disciplina: 'Geografia',
    conteudo: ['geo-4u2', 'geo-2u1'],
    subtopico: 'Domínio dos mares de morros',
    dificuldade: 'facil',
    enunciado: `<p>Os terrenos cristalinos do cinturão do Atlântico se formaram em decorrência de processos endógenos que soergueram a parte leste da plataforma sul-americana. É a parte do território brasileiro onde se localizam as Serras do Mar, da Mantiqueira e do Espinhaço, marcadas por escarpas abruptas e morros de topos convexos e vales profundos. Essa área foi definida por Aziz Ab’Saber como:</p>`,
    alternativas: [
      { letra: 'A', texto: 'mares de morros', explicacao: 'Correta! Na classificação dos domínios morfoclimáticos de Aziz Ab’Saber, o domínio dos mares de morros corresponde às áreas cristalinas do leste brasileiro (Serras do Mar, da Mantiqueira e do Espinhaço), com morros de topos convexos ("meias-laranjas") e vales profundos, originalmente cobertos pela Mata Atlântica.' },
      { letra: 'B', texto: 'formação Rio do Rastro' },
      { letra: 'C', texto: 'escudo cristalino' },
      { letra: 'D', texto: 'domínios morfoclimáticos' },
      { letra: 'E', texto: 'zoneamento ecológico' },
    ],
    gabarito: 'A',
  },
  {
    id: 'udesc-2025-v-044',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 44,
    disciplina: 'Geografia',
    conteudo: 'geo-3u5',
    subtopico: 'Favelas e espaço urbano',
    dificuldade: 'facil',
    enunciado: `<p>O termo surgiu na cidade do Rio de Janeiro, quando os soldados que lutaram na Guerra de Canudos (1894-1897) retornaram, e, sem condições financeiras para morar perto das praias, que eram as áreas mais valorizadas, instalaram-se em barracos provisórios no Morro da Providência. A ocupação dos morros cresceu ainda mais a partir do início do século XX, em razão da reforma urbana promovida por Pereira Passos (1836-1913), prefeito da cidade do Rio de Janeiro, entre 1902 e 1906. Atualmente, o termo designa construções irregulares em terrenos pouco valorizados, em geral por causa da falta de infraestrutura e da ausência de regularização fundiária, como áreas de mangue, morros e margens de rios.</p>
      <p><small>GOETTEMS, A. A. <i>Geografia: leituras e interação.</i> Vol. 2. 2ª ed. São Paulo: Leya, 2016.</small></p>
      <p>O termo ao qual o texto se refere é:</p>`,
    alternativas: [
      { letra: 'A', texto: 'subúrbio' },
      { letra: 'B', texto: 'favela', explicacao: 'Correta! O nome vem do "Morro da Favela" (atual Morro da Providência), ocupado pelos ex-combatentes de Canudos, onde havia a planta chamada favela. Hoje o termo designa ocupações irregulares, sem infraestrutura nem regularização fundiária, em morros, mangues e margens de rios.' },
      { letra: 'C', texto: 'segregação socioespacial' },
      { letra: 'D', texto: 'aglomerados urbanos' },
      { letra: 'E', texto: 'periferias' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2025-v-045',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 45,
    disciplina: 'Geografia',
    conteudo: 'geo-3u5',
    subtopico: 'Metrópoles e regiões metropolitanas',
    dificuldade: 'facil',
    enunciado: `<p>A Região Metropolitana de Porto Alegre – RMPA é a área mais densamente povoada do Rio Grande do Sul. Em 2020, segundo as estimativas de população, a região concentrava 4,4 milhões de habitantes – 38,2% da população total do Estado. Dos 19 municípios do Estado com mais de 100 mil habitantes, nove fazem parte da RMPA, e a densidade demográfica média da região é de 421,8 hab/km².</p>
      <p><small>Disponível em: www.atlassocioeconomico.rs.gov.br/regiao-metropolitana-de-porto-alegre-rmpa. Acesso em: 10 out. 2024.</small></p>
      <p>Assinale a alternativa que apresenta os fatores que definem uma metrópole, como Porto Alegre.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Industrialização, concentração de capitais e crescimento do setor terciário.', explicacao: 'Correta! As metrópoles se formam com a industrialização, que atrai população e capitais, e se consolidam pela concentração de comércio, serviços, finanças e gestão (setor terciário), exercendo influência sobre uma ampla região. Elas concentram, e não desconcentram, riquezas.' },
      { letra: 'B', texto: 'Setor secundário e rede de transporte ferroviária.' },
      { letra: 'C', texto: 'Setor primário e presença de fontes renováveis de energia.' },
      { letra: 'D', texto: 'Influência cultural, qualidade de vida e desconcentração de riquezas.' },
      { letra: 'E', texto: 'Trabalhadores manuais qualificados para a construção civil.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'udesc-2025-v-046',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 46,
    disciplina: 'Geografia',
    conteudo: 'geo-1u5',
    subtopico: 'Queda da natalidade (transição demográfica)',
    dificuldade: 'media',
    enunciado: `<p>Segundo a Organização das Nações Unidas – ONU, a taxa de fecundidade necessária para a reposição da população, sem que haja decréscimo no total, é de 2,1 filhos por mulher. Atualmente, o que se verifica na média mundial é uma queda dos índices de natalidade e mortalidade.</p>
      <p>Dentre os aspectos relacionados a essa queda, indique a alternativa que <b>não</b> condiz com a queda dos índices de natalidade.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Acesso à assistência médica, saneamento básico e programas de vacinação.' },
      { letra: 'B', texto: 'Êxodo rural e comportamento demográfico de uma população crescentemente urbana.' },
      { letra: 'C', texto: 'Acesso a métodos anticoncepcionais.' },
      { letra: 'D', texto: 'Trabalho feminino extradomiciliar e maior custo para criar os filhos.' },
      { letra: 'E', texto: 'Escolha por famílias nucleares, compostas por pais e filhos.', explicacao: 'Correta! Para o gabarito oficial, a escolha por famílias nucleares (pais e filhos) não é um fator que explique a queda da natalidade, já que o modelo nuclear não define quantos filhos o casal tem. Urbanização, acesso a anticoncepcionais, trabalho feminino fora de casa e maior custo de criação dos filhos são causas clássicas da redução da natalidade, e a melhora da saúde e do saneamento, ao reduzir a mortalidade infantil, também leva as famílias a terem menos filhos.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'udesc-2025-v-047',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 47,
    disciplina: 'Geografia',
    conteudo: 'geo-1u5',
    subtopico: 'Migrações internacionais e refugiados',
    dificuldade: 'media',
    enunciado: `<p>A crise migratória, que ocorre no mundo, foi agravada pela pandemia da covid-19. A Comissão Mista Permanente sobre Migrações Internacionais e Refugiados da Câmara dos Deputados afirma que cinco países respondem por 67% do deslocamento transfronteiriço no mundo: a Síria lidera, com quase 7 milhões de pessoas fora do país; a Venezuela é o segundo maior país com população deslocada no exterior; Afeganistão, com mais de 2,5 milhões; Sudão do Sul, com 2,2 milhões; e Mianmar, com mais de 1 milhão. Durante o ano de 2021, no Brasil, o Conselho Nacional de Refugiados analisou 70.933 solicitações de refúgio, sendo esse o maior volume da década até o momento.</p>
      <p><small>Disponível em: www.jornal.usp.br/radio-usp/fluxo-migratorio-mundial-agravado-na-pos-pandemia-tem-reflexos-no-brasil/. Acesso em: 18 out. 2024.</small></p>
      <p>Analise as proposições sobre a crise migratória e seus reflexos no Brasil.</p>
      <p>I. Os refugiados venezuelanos fogem do regime implantado pelo Talibã desde agosto de 2021. O governo atual baseia-se no fundamentalismo islâmico, cujas normas sociais têm por base a religião.<br>
      II. O Governo Federal brasileiro não tem responsabilidade de dar suporte e assistência humanitária a migrantes, pois tal iniciativa deve acatar os acordos políticos internacionais, feitos antes da chegada de determinados grupos ao País.<br>
      III. Com o fechamento das fronteiras em função da covid-19, houve um decréscimo oficial das migrações, as travessias, porém, ocorreram de forma irregular. No Brasil, o fluxo ocorreu pela Amazônia, por meio da floresta, e por rotas alternativas no Estado de Roraima.<br>
      IV. No Brasil, estão chegando refugiados não só da América do Sul e Central, mas também da Europa e Oriente Médio. A recente guerra na Ucrânia fez com que um grande número deles viesse para cidades brasileiras.</p>
      <p>Assinale a alternativa <b>correta</b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Somente as proposições I e II são verdadeiras.' },
      { letra: 'B', texto: 'Somente as proposições I e III são verdadeiras.' },
      { letra: 'C', texto: 'Somente as proposições I e IV são verdadeiras.' },
      { letra: 'D', texto: 'Somente as proposições II e IV são verdadeiras.' },
      { letra: 'E', texto: 'Somente as proposições III e IV são verdadeiras.', explicacao: 'Correta! Com as fronteiras fechadas na pandemia, a migração oficial caiu, mas as travessias continuaram por rotas irregulares, como pela floresta amazônica e por Roraima (III); e o Brasil passou a receber refugiados também da Europa e do Oriente Médio, incluindo ucranianos após a guerra (IV). O regime do Talibã é o do Afeganistão, não o da Venezuela (I falsa), e o Brasil tem obrigação legal de acolher e prestar assistência a refugiados (II falsa).' },
    ],
    gabarito: 'E',
  },
  {
    id: 'udesc-2025-v-048',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 48,
    disciplina: 'Geografia',
    conteudo: 'geo-2u4',
    subtopico: 'Concentração industrial no Brasil',
    dificuldade: 'media',
    imagem: 'imagens/estudo/udesc-2025-v-048.webp',
    legenda: '<small>HERVÉ, T; MELLO-THÉRY, N. A. de. <i>Atlas do Brasil:</i> disparidades e dinâmicas do território. 3ª ed. São Paulo: EdUSP, 2018.</small>',
    enunciado: `<p>Analise o mapa e assinale a alternativa que representa as áreas sinalizadas.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Regiões metropolitanas.' },
      { letra: 'B', texto: 'Áreas com concentração industrial.', explicacao: 'Correta! Os círculos proporcionais (até ~600 mil) se concentram no Sudeste e no Sul, sobretudo em São Paulo e seu entorno, com destaque isolado para Manaus (Zona Franca) no Norte: é o padrão da distribuição da atividade industrial brasileira. Manaus não teria esse peso num mapa de ensino superior ou de centros tecnológicos, e a dispersão por muitas cidades do interior paulista e do Sul não corresponde só às regiões metropolitanas.' },
      { letra: 'C', texto: 'Distribuição de instituições de ensino superior.' },
      { letra: 'D', texto: 'Áreas com centros tecnológicos.' },
      { letra: 'E', texto: 'Alta densidade demográfica.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2025-v-049',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 49,
    disciplina: 'Geografia',
    conteudo: 'geo-4u1',
    subtopico: 'Degradação dos solos',
    dificuldade: 'facil',
    enunciado: `<p>Solos degradados são aqueles que não exercem suas funções, ou ao menos parte delas, como fornecer os nutrientes necessários ao desenvolvimento das plantas e filtrar a água, que abastece os depósitos subterrâneos. Assim como ocorre nas cidades, principalmente nas grandes e médias, a atividade agropecuária contribui para a degradação dos solos.</p>
      <p>As formas principais de degradação dos solos, provocadas ou intensificadas pelas atividades humanas, são:</p>`,
    alternativas: [
      { letra: 'A', texto: 'eutrofização e uso de agrotóxicos' },
      { letra: 'B', texto: 'manejo florestal e controle de pragas' },
      { letra: 'C', texto: 'devastação de matas ciliares, galerias e encostas' },
      { letra: 'D', texto: 'rotação de culturas, plantio direto e adubação com agrotóxico' },
      { letra: 'E', texto: 'erosão hídrica, erosão eólica, erosão química e compactação do solo', explicacao: 'Correta! As principais formas de degradação do solo são a erosão hídrica (pela água das chuvas), a eólica (pelo vento), a química (perda de nutrientes, salinização, contaminação) e a compactação (por máquinas e pisoteio do gado). Eutrofização é um problema das águas, e rotação de culturas, plantio direto e manejo florestal são práticas de conservação; o desmatamento é causa, não forma, de degradação.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'udesc-2025-v-050',
    prova: 'UDESC 2025/Verão',
    vestibular: 'UDESC', ano: 2025,
    numeroOriginal: 50,
    disciplina: 'Geografia',
    conteudo: ['geo-3u2', 'geo-3u1'],
    subtopico: 'Enchentes no Rio Grande do Sul (2024)',
    dificuldade: 'media',
    enunciado: `<p>No Rio Grande do Sul, as enchentes constituem-se em fenômenos naturais, já conhecidos pela população, em especial, aquelas que habitam os vales dos principais rios sul-rio-grandenses. No primeiro semestre de 2024, grande parte da população do estado foi atingida pelas enchentes que causaram cheia e transbordamento dos rios resultante de chuvas volumosas.</p>
      <p>Acerca das enchentes no Rio Grande do Sul, analise as proposições.</p>
      <p>I. A umidade proveniente da Amazônia, no fenômeno conhecido como rios voadores, e a aproximação de frentes frias são duas causas naturais das chuvas no Rio Grande do Sul. Ambos os fenômenos foram potencializados pela ocorrência do El Niño, aquecimento anormal das águas do oceano Pacífico que causa transformações temporárias no padrão de circulação da atmosfera.<br>
      II. A construção de diques de prevenção de enchentes e planos de ação voltados para as mudanças do clima minimizaram os efeitos das enchentes.<br>
      III. Além de causas naturais, as causas antrópicas das enchentes no Rio Grande do Sul têm relação tanto com as mudanças climáticas quanto com a governança dos territórios.<br>
      IV. As enchentes atingiram cerca de 95% dos municípios do Rio Grande do Sul, além de cidades no Estado de Santa Catarina, e foi o maior desastre climático registrado na região Sul do Brasil.</p>
      <p>Assinale a alternativa <b>correta</b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Somente as proposições I e II são verdadeiras.' },
      { letra: 'B', texto: 'Somente as proposições I e III são verdadeiras.', explicacao: 'Correta! As chuvas extremas de 2024 resultaram da umidade amazônica (rios voadores) encontrando frentes frias sobre o estado, situação intensificada pelo El Niño (I); e, além das causas naturais, pesaram as mudanças climáticas e a má gestão do território, como a ocupação de várzeas e a manutenção falha de diques e bombas (III). Os diques e sistemas de proteção falharam em vez de minimizar os efeitos (II falsa), e a IV não é aceita pelo gabarito, pois a enchente de 2024 foi uma tragédia do território gaúcho, sem atingir da mesma forma cidades de Santa Catarina.' },
      { letra: 'C', texto: 'Somente as proposições I e IV são verdadeiras.' },
      { letra: 'D', texto: 'Somente as proposições II e IV são verdadeiras.' },
      { letra: 'E', texto: 'Somente as proposições III e IV são verdadeiras.' },
    ],
    gabarito: 'B',
  },
);
