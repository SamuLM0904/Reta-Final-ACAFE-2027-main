/**
 * UDESC — Vestibular de Verão 2026 (Vestibular 2026.1, prova de 30/11/2025), caderno VESPERTINO (tarde).
 * Física 01–14, Química 15–28, História 29–37, Geografia 40–48.
 *
 * Fonte: Provas/Outros/UDESC/2026-Verao - Prova Vespertino.pdf; gabarito oficial: 2026-Verao - Gabarito.pdf
 * (Período Vespertino). Gabarito em JSON: Provas/Outros/UDESC/2026_VESP_gabarito.json.
 * Questões de ESTUDO — nunca entram nos simulados. Aparecem no módulo da matéria, dentro do
 * capítulo do campo `conteudo`.
 * A numeração do vespertino recomeça em 1 (colide com o matutino), por isso os ids são udesc-2026-v-0NN.
 * Ficaram de fora: Q17 (Química, anulada), Filosofia (38–39), Sociologia (49–50) e a Redação.
 * Formato das questões: veja README.md ("Como adicionar uma questão nova").
 */

QUESTOES.push(

  /* ===================== FÍSICA (01 a 14) ===================== */
  {
    id: 'udesc-2026-v-001', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 1,
    disciplina: 'Física', conteudo: ['fis-4b6', 'fis-3b4'], subtopico: 'Ondas gravitacionais e Relatividade Geral', dificuldade: 'facil',
    enunciado: `<p>Em 2015, o Observatório de Ondas Gravitacionais por Interferômetro Laser (LIGO) conseguiu detectar ondas gravitacionais pela primeira vez, inaugurando um novo modo de fazer astronomia. Indo além da luz, agora é possível observar pequenas variações no próprio tecido do espaço, causadas por grandes eventos cósmicos, como a colisão de buracos negros.</p>
      <p>Assinale a alternativa correta, em que essa detecção confirma a teoria física:</p>`,
    alternativas: [
      { letra: 'A', texto: 'Eletromagnetismo.' },
      { letra: 'B', texto: 'Mecânica Quântica.' },
      { letra: 'C', texto: 'Termodinâmica.' },
      { letra: 'D', texto: 'Relatividade Geral.', explicacao: 'Correta! As ondas gravitacionais são ondulações do próprio espaço-tempo previstas por Einstein na Relatividade Geral (1916); a detecção do LIGO em 2015 confirmou essa previsão.' },
      { letra: 'E', texto: 'Teoria Cinética dos Gases' },
    ],
    gabarito: 'D',
  },
  {
    id: 'udesc-2026-v-002', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 2,
    disciplina: 'Física', conteudo: 'fis-3b1', subtopico: 'Leis de Newton — sistema de blocos', dificuldade: 'facil',
    imagem: 'imagens/estudo/udesc-2026-v-002.webp',
    legendaAcima: 'Figura 1',
    legenda: 'Fonte: Elaboração própria',
    enunciado: `<p>A Figura 1 mostra duas caixas sobre uma superfície horizontal sem atrito. A primeira tem massa de m<sub>1</sub> = 5 kg, e a segunda tem massa de m<sub>2</sub> = 10 kg. Aplica-se uma força horizontal de F = 30 N sobre a primeira caixa, empurrando ambas.</p>
      <p>Sabendo que não há atrito entre as caixas e o solo, assinale a alternativa que apresenta a força de contato entre as duas caixas.</p>`,
    alternativas: [
      { letra: 'A', texto: '15 N' },
      { letra: 'B', texto: '10 N' },
      { letra: 'C', texto: '20 N', explicacao: 'Correta! O conjunto acelera com a = F/(m<sub>1</sub> + m<sub>2</sub>) = 30/15 = 2 m/s². A força de contato é a única força horizontal na caixa 2: F<sub>c</sub> = m<sub>2</sub>·a = 10·2 = 20 N.' },
      { letra: 'D', texto: '5 N' },
      { letra: 'E', texto: '25 N' },
    ],
    gabarito: 'C',
  },
  {
    id: 'udesc-2026-v-003', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 3,
    disciplina: 'Física', conteudo: 'fis-2b3', subtopico: 'Transformação adiabática', dificuldade: 'facil',
    enunciado: `<p>Um gás ideal é submetido a uma compressão adiabática. Nessas condições, pode-se afirmar que a energia interna do gás:</p>`,
    alternativas: [
      { letra: 'A', texto: 'diminui, devido à saída de calor.' },
      { letra: 'B', texto: 'diminui, pois o sistema fornece trabalho.' },
      { letra: 'C', texto: 'não se altera, já que a temperatura permanece constante.' },
      { letra: 'D', texto: 'aumenta, em virtude da entrada de calor.' },
      { letra: 'E', texto: 'aumenta, pois o sistema recebe trabalho.', explicacao: 'Correta! Na adiabática Q = 0, então ΔU = Q − W = −W. Na compressão o trabalho do gás é negativo (o gás recebe trabalho), logo ΔU > 0: a energia interna (e a temperatura) aumenta.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'udesc-2026-v-004', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 4,
    disciplina: 'Física', conteudo: 'fis-3b3', subtopico: 'Colisão perfeitamente inelástica', dificuldade: 'facil',
    imagem: 'imagens/estudo/udesc-2026-v-004.webp',
    legendaAcima: 'Figura 2',
    legenda: 'Fonte: Elaboração própria.',
    enunciado: `<p>A Figura 2 apresenta o mesmo sistema em duas situações: inicial e final. Na situação inicial, uma caixa de 2 kg move-se sobre um plano sem atrito a 15 m/s, enquanto uma segunda caixa de 3 kg encontra-se em repouso. Na situação final, a caixa de 2 kg colide com a caixa de 3 kg e fica aderida a esta.</p>
      <p>Assinale a alternativa correta da velocidade V<sub>f</sub> do conjunto após a colisão.</p>`,
    alternativas: [
      { letra: 'A', texto: '6,0 m/s', explicacao: 'Correta! Conservação da quantidade de movimento: 2·15 = (2 + 3)·V<sub>f</sub> ⇒ 30 = 5·V<sub>f</sub> ⇒ V<sub>f</sub> = 6,0 m/s.' },
      { letra: 'B', texto: '7,5 m/s' },
      { letra: 'C', texto: '8,0 m/s' },
      { letra: 'D', texto: '3,0 m/s' },
      { letra: 'E', texto: '0,0 m/s' },
    ],
    gabarito: 'A',
  },
  {
    id: 'udesc-2026-v-005', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 5,
    disciplina: 'Física', conteudo: 'fis-3b2', subtopico: 'Conservação da energia mecânica', dificuldade: 'facil',
    enunciado: `<p>Um objeto de 2 kg é liberado do topo, a partir de seu ponto de repouso, de um plano inclinado liso de 20 m de altura.</p>
      <p>Assinale a alternativa que demonstra a velocidade do objeto ao atingir a base do plano. Adote g = 10 m/s²</p>`,
    alternativas: [
      { letra: 'A', texto: '10 m/s' },
      { letra: 'B', texto: '20 m/s', explicacao: 'Correta! Sem atrito, a energia mecânica se conserva: m·g·h = m·v²/2 ⇒ v = √(2·g·h) = √(2·10·20) = √400 = 20 m/s (a massa não interfere).' },
      { letra: 'C', texto: '5 m/s' },
      { letra: 'D', texto: '15 m/s' },
      { letra: 'E', texto: '30 m/s' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2026-v-006', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 6,
    disciplina: 'Física', conteudo: 'fis-1a2', subtopico: 'Espectro eletromagnético — infravermelho', dificuldade: 'facil',
    enunciado: `<p>Lançado em dezembro de 2021, o Telescópio Espacial James Webb (JWST) é considerado o sucessor do Hubble e já forneceu imagens detalhadas de galáxias muito antigas.</p>
      <p>A principal inovação tecnológica do JWST está relacionada à capacidade de observar:</p>`,
    alternativas: [
      { letra: 'A', texto: 'neutrinos emitidos em explosões estelares.' },
      { letra: 'B', texto: 'raios X emitidos por buracos negros.' },
      { letra: 'C', texto: 'o espectro visível com maior nitidez.' },
      { letra: 'D', texto: 'ondas de rádio com altíssima resolução.' },
      { letra: 'E', texto: 'radiação infravermelha, permitindo estudar objetos muito distantes e frios.', explicacao: 'Correta! O JWST observa principalmente no infravermelho: a luz de galáxias muito distantes chega desviada para o vermelho (redshift) e objetos frios (poeira, planetas, estrelas em formação) emitem sobretudo nessa faixa.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'udesc-2026-v-007', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 7,
    disciplina: 'Física', conteudo: 'fis-3b4', subtopico: 'Aceleração da gravidade em órbita', dificuldade: 'facil',
    enunciado: `<p>Considere um satélite orbitando a Terra em uma órbita circular de raio igual ao dobro do raio terrestre.</p>
      <p>Em relação à aceleração da gravidade g na superfície da Terra, assinale a alternativa correta sobre a aceleração gravitacional atuando no satélite.</p>`,
    alternativas: [
      { letra: 'A', texto: 'g/4', explicacao: 'Correta! A aceleração gravitacional é g = G·M/d², inversamente proporcional ao quadrado da distância ao centro da Terra. Com d = 2R: g\' = G·M/(2R)² = g/4.' },
      { letra: 'B', texto: 'g/2' },
      { letra: 'C', texto: 'g' },
      { letra: 'D', texto: '2g' },
      { letra: 'E', texto: '4g' },
    ],
    gabarito: 'A',
  },
  {
    id: 'udesc-2026-v-008', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 8,
    disciplina: 'Física', conteudo: 'fis-1a4', subtopico: 'Tubos sonoros', dificuldade: 'facil',
    enunciado: `<p>Seja um tubo sonoro, fechado em uma das extremidades e de comprimento L, e seja v a velocidade do som no ar.</p>
      <p>Assinale a alternativa correta a respeito da menor frequência de ressonância que esse tubo pode produzir.</p>`,
    alternativas: [
      { letra: 'A', texto: 'v/2L' },
      { letra: 'B', texto: 'v/3L' },
      { letra: 'C', texto: 'v/4L', explicacao: 'Correta! No tubo fechado, o modo fundamental tem nó na extremidade fechada e ventre na aberta: L = λ/4 ⇒ λ = 4L. Assim, f = v/λ = v/4L.' },
      { letra: 'D', texto: 'v/L' },
      { letra: 'E', texto: '2v/L' },
    ],
    gabarito: 'C',
  },
  {
    id: 'udesc-2026-v-009', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 9,
    disciplina: 'Física', conteudo: ['fis-3a5', 'fis-3b1'], subtopico: 'Equilíbrio de carga em campo elétrico', dificuldade: 'facil',
    enunciado: `<p>Um pequeno corpo de massa 20 g e carga 4,0 μC encontra-se em equilíbrio suspenso em um campo elétrico uniforme vertical, dirigido para cima.</p>
      <p>Assinale a alternativa correta do módulo do campo elétrico.</p>`,
    alternativas: [
      { letra: 'A', texto: '3,0×10<sup>4</sup>N/C' },
      { letra: 'B', texto: '5,0×10<sup>4</sup>N/C.', explicacao: 'Correta! No equilíbrio, a força elétrica equilibra o peso: q·E = m·g ⇒ E = (0,020·10)/(4,0×10<sup>−6</sup>) = 0,2/4,0×10<sup>−6</sup> = 5,0×10<sup>4</sup> N/C.' },
      { letra: 'C', texto: '2,0×10<sup>4</sup>N/C.' },
      { letra: 'D', texto: '4,0×10<sup>4</sup>N/C.' },
      { letra: 'E', texto: '6,0×10<sup>4</sup>N/C.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2026-v-010', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 10,
    disciplina: 'Física', conteudo: 'fis-2a2', subtopico: 'Empuxo — corpo flutuando', dificuldade: 'media',
    enunciado: `<p>Um objeto de 480 g é colocado em um líquido de densidade 1,6 g/cm³. Sabendo que o objeto tem 600 cm³ de volume total, assinale a alternativa que corresponde à parte do volume do objeto que está submerso no líquido.</p>`,
    alternativas: [
      { letra: 'A', texto: '700 cm³' },
      { letra: 'B', texto: '500 cm³' },
      { letra: 'C', texto: '800 cm³' },
      { letra: 'D', texto: '300 cm³', explicacao: 'Correta! A densidade do objeto (480/600 = 0,8 g/cm³) é menor que a do líquido, então ele flutua: empuxo = peso ⇒ d<sub>líq</sub>·V<sub>sub</sub> = m ⇒ V<sub>sub</sub> = 480/1,6 = 300 cm³.' },
      { letra: 'E', texto: '600 cm³' },
    ],
    gabarito: 'D',
  },
  {
    id: 'udesc-2026-v-011', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 11,
    disciplina: 'Física', conteudo: ['fis-4a2', 'fis-4a1'], subtopico: 'Potência elétrica — lâmpadas em paralelo', dificuldade: 'facil',
    imagem: 'imagens/estudo/udesc-2026-v-011.webp',
    legendaAcima: 'Figura 3',
    legenda: 'Fonte: Elaboração própria.',
    enunciado: `<p>A Figura 3 mostra um circuito elétrico composto por duas lâmpadas, uma de 60 W e outra de 100 W.</p>
      <p>Sabendo que ambas estão ligadas a uma fonte de tensão de 120 V, assinale a alternativa que corresponde às correntes elétricas que percorrem cada lâmpada quando o interruptor é acionado.</p>`,
    alternativas: [
      { letra: 'A', texto: '1,0 A na lâmpada de 60 W e 2,0 A na de 100 W' },
      { letra: 'B', texto: '0,5 A na lâmpada de 60 W e 0,83 A na de 100 W', explicacao: 'Correta! As lâmpadas estão em paralelo, cada uma sob 120 V. Como P = U·i: i<sub>60</sub> = 60/120 = 0,5 A e i<sub>100</sub> = 100/120 ≈ 0,83 A.' },
      { letra: 'C', texto: '50 A na lâmpada de 60 W e 60 A na de 100 W' },
      { letra: 'D', texto: '0,31 A em cada lâmpada' },
      { letra: 'E', texto: '1,33 A em cada lâmpada' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2026-v-012', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 12,
    disciplina: 'Física', conteudo: 'fis-2b2', subtopico: 'Calor sensível', dificuldade: 'facil',
    enunciado: `<p>Um bloco de alumínio de massa 200 g e calor específico 0,90 cal/g °C está a 20 °C. Ele recebe 1800 cal de calor.</p>
      <p>Assinale a alternativa que corresponde à nova temperatura do bloco.</p>`,
    alternativas: [
      { letra: 'A', texto: '25 °C' },
      { letra: 'B', texto: '40 °C' },
      { letra: 'C', texto: '35 °C' },
      { letra: 'D', texto: '30 °C', explicacao: 'Correta! Q = m·c·ΔT ⇒ 1800 = 200·0,90·ΔT ⇒ ΔT = 1800/180 = 10 °C. Nova temperatura: 20 + 10 = 30 °C.' },
      { letra: 'E', texto: '45 °C' },
    ],
    gabarito: 'D',
  },
  {
    id: 'udesc-2026-v-013', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 13,
    disciplina: 'Física', conteudo: 'fis-3a1', subtopico: 'Lançamento oblíquo — alcance', dificuldade: 'facil',
    enunciado: `<p>Um jogador de futebol chuta a bola com velocidade inicial de 20 m/s em um ângulo de 45° em relação ao solo plano e horizontal.</p>
      <p>Desprezando a resistência do ar e adotando g = 10 m/s², a bola atinge o solo a uma distância horizontal máxima de:</p>`,
    alternativas: [
      { letra: 'A', texto: '40 m', explicacao: 'Correta! Alcance horizontal: A = v<sub>0</sub>²·sen(2θ)/g = 20²·sen 90°/10 = 400/10 = 40 m (45° dá o alcance máximo).' },
      { letra: 'B', texto: '10 m' },
      { letra: 'C', texto: '80 m' },
      { letra: 'D', texto: '60 m' },
      { letra: 'E', texto: '20 m' },
    ],
    gabarito: 'A',
  },
  {
    id: 'udesc-2026-v-014', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 14,
    disciplina: 'Física', conteudo: 'fis-1a4', subtopico: 'Eco — ecolocalização', dificuldade: 'facil',
    imagem: 'imagens/estudo/udesc-2026-v-014.webp',
    legendaAcima: 'Figura 4',
    legenda: 'Fonte: Elaboração própria.',
    enunciado: `<p>As belugas (espécie de baleia branca) utilizam a ecolocalização para se orientarem em águas turvas e geladas do Ártico. Elas emitem pulsos sonoros de alta frequência, que se propagam pela água, refletem em obstáculos e retornam ao animal, permitindo-lhe “enxergar pelo som”.</p>
      <p>A Figura 4 ilustra uma beluga emitindo um pulso sonoro em direção a uma parede de gelo. Ela percebe o eco retornando após 0,40 s.</p>
      <p>Sabendo que a velocidade do som na água do mar é de aproximadamente 5400 km/h, a distância da beluga até a parede é de:</p>`,
    alternativas: [
      { letra: 'A', texto: '100 m' },
      { letra: 'B', texto: '600 m' },
      { letra: 'C', texto: '300 m', explicacao: 'Correta! v = 5400 km/h ÷ 3,6 = 1500 m/s. O som vai e volta em 0,40 s, então a ida leva 0,20 s: d = 1500·0,20 = 300 m.' },
      { letra: 'D', texto: '2160 m' },
      { letra: 'E', texto: '1080 m' },
    ],
    gabarito: 'C',
  },

  /* ===================== QUÍMICA (15 a 28; a 17 foi anulada) ===================== */
  {
    id: 'udesc-2026-v-015', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 15,
    disciplina: 'Química', conteudo: ['qui-2b5', 'qui-c1'], subtopico: 'Creatina — estrutura e reação', dificuldade: 'dificil',
    imagem: 'imagens/estudo/udesc-2026-v-015.webp',
    legendaAcima: 'FIGURA 1',
    enunciado: `<p>A Figura 1 representa a reação química de obtenção da creatina monohidratada.</p>
      <p>Analise as proposições acerca da equação química da creatina e de suas aplicações.</p>
      <p>I. O produto da reação possui fórmula molecular igual a C<sub>3</sub>H<sub>9</sub>N<sub>3</sub>O<sub>2</sub>∙H<sub>2</sub>O.<br>
      II. A estrutura apresentada representa a forma zwiteriônica da substância.<br>
      III. A creatina monohidratada representa uma importante fonte de suplementação proteica para humanos.<br>
      IV. A formação da creatina envolve a ligação do nitrogênio da sarcosina ao carbono da cianamida concomitante à formação da ligação dupla entre o carbono e o nitrogênio da cianamida.<br>
      V. A Figura 1 é um exemplo de reação de oxirredução, pois há mudança no estado de oxidação dos elementos carbono e nitrogênio.</p>
      <p>Assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Somente as proposições I e III são verdadeiras.' },
      { letra: 'B', texto: 'Somente as proposições I e V são verdadeiras.' },
      { letra: 'C', texto: 'Somente as proposições II e IV são verdadeiras.', explicacao: 'Correta! II: a estrutura tem N<sup>+</sup> e COO<sup>−</sup> na mesma molécula (zwitterion). IV: o N da sarcosina se liga ao C da cianamida e a tripla C≡N vira dupla C=N. I é falsa (creatina = C<sub>4</sub>H<sub>9</sub>N<sub>3</sub>O<sub>2</sub>), III é falsa (creatina não é proteína) e V é falsa (é uma adição, sem variação de Nox).' },
      { letra: 'D', texto: 'Somente as proposições III e V são verdadeiras.' },
      { letra: 'E', texto: 'Somente as proposições IV e V são verdadeiras.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'udesc-2026-v-016', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 16,
    disciplina: 'Química', conteudo: ['qui-4b4', 'qui-4a2'], subtopico: 'Escurecimento enzimático — oxidação de polifenóis', dificuldade: 'dificil',
    imagem: 'imagens/estudo/udesc-2026-v-016.webp',
    legendaAcima: 'FIGURA 2',
    enunciado: `<p>A reação química catalisada pela enzima polifenol oxidase (PFO) entre os polifenóis presentes, por exemplo, na maçã e na banana, com gás oxigênio, é a responsável pelo escurecimento desses alimentos quando cortados e expostos à atmosfera. Ela gera produtos de condensação de alta massa molar de cor escura com outros componentes, como quinonas, aminoácidos e proteínas. Um esquema simplificado desse processo pode ser visualizado na Figura 2.</p>
      <p>Assinale a alternativa <b>incorreta</b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Os estados de oxidação do carbono ligado a OH no fenol e do mesmo carbono ligado ao oxigênio na quinona são, respectivamente, -1 e -2.', explicacao: 'Correta! (é a incorreta) No fenol, o carbono ligado ao OH faz uma ligação com O e duas com C: Nox = +1. Na quinona, ligado ao O por dupla: Nox = +2. Os valores são +1 e +2, e não −1 e −2 — o carbono se oxida.' },
      { letra: 'B', texto: 'O escurecimento do alimento rico em polifenóis pode ser evitado pela minimização da exposição ao oxigênio e pela adição de sucos ricos em ácido ascórbico.' },
      { letra: 'C', texto: 'A presença da PFO aumenta a velocidade da reação de oxidação do polifenol pela criação de um caminho alternativo menos energético entre reagentes e produtos, diminuindo, assim, a energia de ativação da reação.' },
      { letra: 'D', texto: 'Alimentos ricos em PFO, quando misturados a alimentos ricos em polifenóis, podem diminuir a biodisponibilidade desses últimos, que são ótimos antioxidantes.' },
      { letra: 'E', texto: 'Alimentos escurecidos pela ação do oxigênio e da PFO podem ser consumidos, pois não são tóxicos, têm apenas uma diminuição em sua aceitação por uma questão visual.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'udesc-2026-v-018', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 18,
    disciplina: 'Química', conteudo: 'qui-4b3', subtopico: 'Reciclagem da borracha', dificuldade: 'facil',
    enunciado: `<p>Acerca da reciclagem da borracha, assinale a alternativa <b>incorreta</b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A pirólise de produtos de borracha leva à formação de gases, líquido e sólido, que podem encontrar utilização, entre outras aplicações, como combustível.' },
      { letra: 'B', texto: 'A reciclagem de pneus inservíveis diminui uma fonte de proliferação de mosquitos causadores de doenças em humanos.' },
      { letra: 'C', texto: 'Um dos processos utilizados para reciclagem e reuso de materiais à base de borracha é a de desvulcanização, em que ligações S-S e C-S são clivadas, permitindo que a borracha retorne à indústria para outros usos.' },
      { letra: 'D', texto: 'A borracha, especialmente aquela proveniente de pneumáticos, tem pouco valor agregado após seu uso, e sua transformação em produtos úteis em seu processo de reciclagem é ineficaz.', explicacao: 'Correta! (é a incorreta) A borracha de pneus usados é reaproveitada de forma eficaz: pirólise (combustíveis), desvulcanização, asfalto-borracha, pisos, solados etc. Não é verdade que sua reciclagem em produtos úteis seja ineficaz.' },
      { letra: 'E', texto: 'A reciclagem da borracha tem impacto ambiental significativo, uma vez que fontes naturais deixam de ser tão exploradas.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'udesc-2026-v-019', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 19,
    disciplina: 'Química', conteudo: ['qui-1b1', 'qui-1a4'], subtopico: 'Mudanças de estado e ligação metálica', dificuldade: 'facil',
    enunciado: `<p>Considere que, em um dia quente e úmido, um estudante observou dois fatos curiosos ao tomar seu café da manhã, antes de ir para a escola:</p>
      <p>I. No copo de suco de laranja, que pegou na geladeira, formaram-se pequenas gotículas na parte externa da parede do copo de vidro.<br>
      II. Ao colocar uma colher de metal no café quente, após alguns instantes, a extremidade da colher, que estava fora do líquido, também se aqueceu.</p>
      <p>Com base nos fenômenos observados pelo estudante, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Em I: o vapor d’água presente no ar está se condensando ao entrar em contato com a superfície fria do copo com suco gelado; e em II: a estrutura metálica da colher permite a condução de calor, pois os metais são bons condutores de calor e de eletricidade.', explicacao: 'Correta! As gotículas vêm do vapor de água do ar úmido, que se condensa na superfície fria do copo. Na colher, o calor se propaga por condução, favorecida pelos elétrons livres da ligação metálica.' },
      { letra: 'B', texto: 'Em I: o copo de suco libera água líquida por um processo de fusão através da parede de vidro; e em II: as ligações iônicas presentes no metal são quebradas e, por isso, o calor é conduzido até a outra extremidade da colher.' },
      { letra: 'C', texto: 'Em I: a água líquida que constitui o suco evapora e rapidamente se condensa pelo lado de fora; e em II: a dissolução da cafeína do café na água libera muita energia e faz com que a colher esquente.' },
      { letra: 'D', texto: 'Em I: o copo de vidro é uma membrana semipermeável e, por isso, a água do suco atravessa essa membrana e se deposita na parede externa do copo; e em II: há transferência de calor apenas por um sistema de convecção entre as partículas do metal.' },
      { letra: 'E', texto: 'Em I: o suco de laranja, que é ácido, libera H<sup>+</sup> que reage com o gás oxigênio do ar, formando gotículas de água nas paredes do copo; e em II: a energia fica armazenada temporariamente na parte da colher que está imersa no líquido e depois é liberada na outra extremidade metálica.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'udesc-2026-v-020', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 20,
    disciplina: 'Química', conteudo: 'qui-4a3', subtopico: 'Deslocamento de equilíbrio — temperatura', dificuldade: 'facil',
    enunciado: `<p>O dióxido de carbono está presente em muitas bebidas comerciais como, por exemplo, refrigerantes, espumantes, águas gaseificadas, entre outros. Nesses casos, a dissolução é realizada sob pressão. Nesse tipo de bebida, ocorre um equilíbrio que pode ser representado pela equação a seguir:</p>
      <p>CO<sub>2(aq)</sub> ⇌ CO<sub>2(g)</sub></p>
      <p>Sabendo que o processo de dissolução do dióxido de carbono é exotérmico, ao colocar uma lata de refrigerante na geladeira, é correto afirmar que:</p>`,
    alternativas: [
      { letra: 'A', texto: 'A diminuição da temperatura desloca o equilíbrio para a formação de CO<sub>2</sub> gasoso, aumentando a pressão interna.' },
      { letra: 'B', texto: 'A diminuição da temperatura favorecerá a dissolução de CO<sub>2</sub> na bebida.', explicacao: 'Correta! Pelo princípio de Le Chatelier, baixar a temperatura favorece o sentido exotérmico, que é a dissolução (CO<sub>2(g)</sub> → CO<sub>2(aq)</sub>). Por isso o gás fica mais dissolvido no refrigerante gelado.' },
      { letra: 'C', texto: 'O resfriamento não altera o equilíbrio.' },
      { letra: 'D', texto: 'O processo torna-se endotérmico, pois a geladeira interfere no sistema e, consequentemente, na dissolução.' },
      { letra: 'E', texto: 'Haverá diminuição da temperatura, mas isso não favorecerá a dissolução de CO<sub>2</sub>.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2026-v-021', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 21,
    disciplina: 'Química', conteudo: 'qui-4a2', subtopico: 'Fatores que afetam a velocidade — temperatura', dificuldade: 'facil',
    enunciado: `<p>O gás metano (CH<sub>4</sub>) pode ser formado a partir da decomposição de matéria orgânica que é compactada em aterros sanitários, como resultado da ação de bactérias anaeróbicas. Sabe-se que, em regiões tropicais, a geração de metano ocorre de forma mais rápida do que em outras regiões com clima frio.</p>
      <p>Sobre esse processo, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O metano, pertencente à classe dos hidrocarbonetos, é um gás inerte, devido à sua estrutura apolar, sendo o único hidrocarboneto que não sofre combustão.' },
      { letra: 'B', texto: 'O lixo é compactado para aumentar a superfície de contato dos resíduos orgânicos com o ar e, consequentemente, acelerar sua decomposição.' },
      { letra: 'C', texto: 'As bactérias anaeróbicas são aquelas que precisam do gás oxigênio para suas atividades e, por isso, é importante que os aterros sejam construídos em locais abertos, com bastante circulação de gás oxigênio.' },
      { letra: 'D', texto: 'As temperaturas altas das regiões tropicais resultam no aumento da energia cinética das moléculas, tornando a decomposição da matéria orgânica mais acelerada do que em regiões mais frias.', explicacao: 'Correta! Temperatura maior aumenta a energia cinética média das moléculas e a fração de choques efetivos (com energia acima da de ativação), acelerando as reações de decomposição.' },
      { letra: 'E', texto: 'A compactação excessiva do lixo aumenta a taxa de liberação de metano para a atmosfera.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'udesc-2026-v-022', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 22,
    disciplina: 'Química', conteudo: ['qui-3a5', 'qui-1a4'], subtopico: 'NaCl — osmose e ligação iônica', dificuldade: 'facil',
    enunciado: `<p>O sal de cozinha (NaCl) é amplamente utilizado no preparo de alimentos e, desde tempos mais remotos, sua utilização também servia para a conservação de alimentos, a partir do preparo de soluções concentradas que dificultavam o crescimento de micro-organismos e diminuíam a atividade da água.</p>
      <p>Sobre o NaCl e suas aplicações, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A conservação de alimentos nas soluções concentradas de sal ocorre porque os micro-organismos não conseguem sobreviver debaixo d’água.' },
      { letra: 'B', texto: 'O cloreto de sódio, popularmente conhecido por sal de cozinha, é constituído a partir da ligação covalente polar entre o sódio e o cloro, de modo que a densidade eletrônica é maior na região do sódio do que na do cloro.' },
      { letra: 'C', texto: 'As células perdem água em meio à presença do sal, a partir de um processo chamado osmose, que resulta na desidratação dos micro-organismos, dificultando sua sobrevivência.', explicacao: 'Correta! A solução salgada é hipertônica: a água sai das células dos micro-organismos por osmose, desidratando-os e dificultando sua proliferação.' },
      { letra: 'D', texto: 'O NaCl, formado por íons Na<sup>2+</sup> e Cl<sup>-</sup>, é conhecido como sal de cozinha, mas possui nomenclatura oficial de clorato de sódio.' },
      { letra: 'E', texto: 'O sal de cozinha não possui ligações iônicas e, por isso, quando dissolvido em água, permanece com sua estrutura molecular, sem dissociação em íons.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'udesc-2026-v-023', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 23,
    disciplina: 'Química', conteudo: 'qui-3a2', subtopico: 'Estequiometria — siderurgia', dificuldade: 'facil',
    enunciado: `<p>A produção do ferro metálico é de grande importância desde a revolução industrial. Esse processo, que é realizado em siderúrgicas, ocorre pela reação de redução do óxido de ferro(III) pelo monóxido de carbono e pode ser representado pela equação (não balanceada) a seguir:</p>
      <p>Fe<sub>2</sub>O<sub>3(s)</sub> + CO<sub>(g)</sub> → Fe<sub>(s)</sub> + CO<sub>2(g)</sub></p>
      <p>Considerando o uso de 320 g de Fe<sub>2</sub>O<sub>3</sub> em uma siderúrgica, com um rendimento de 100%, assinale a alternativa que representa a quantidade de ferro metálico produzido.</p>`,
    alternativas: [
      { letra: 'A', texto: '112 g' },
      { letra: 'B', texto: '224 g', explicacao: 'Correta! Balanceada: Fe<sub>2</sub>O<sub>3</sub> + 3 CO → 2 Fe + 3 CO<sub>2</sub>. M(Fe<sub>2</sub>O<sub>3</sub>) = 160 g/mol, então 320 g = 2 mol, que formam 4 mol de Fe: 4·56 = 224 g.' },
      { letra: 'C', texto: '56 g' },
      { letra: 'D', texto: '320 g' },
      { letra: 'E', texto: '11,2 g' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2026-v-024', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 24,
    disciplina: 'Química', conteudo: ['qui-2b5', 'qui-2b1'], subtopico: 'Aminas e cetonas — análise estrutural', dificuldade: 'media',
    imagem: 'imagens/estudo/udesc-2026-v-024.webp',
    legendaAcima: 'FIGURA 3',
    enunciado: `<p>A molécula na Figura 3 atende pelo nome oficial: 1,4-bis[(propan-2-il)amino]-9,10-dihidroantracen-9,10-diona, sendo conhecida comercialmente como Solvente Azul 36 (óleo azul A). Essa molécula pode ser empregada para gerar fumaça azul em fogos de artifício.</p>
      <p>Considere as informações estruturais e assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Possui o substituinte isopropil ligado às aminas.', explicacao: 'Correta! Cada N–H está ligado a um grupo –CH(CH<sub>3</sub>)<sub>2</sub>, o isopropil (propan-2-il, como diz o nome oficial). Não há éster (as funções são amina e cetona) e há carbonos sp² nos anéis e nas carbonilas.' },
      { letra: 'B', texto: 'Possui a função éster.' },
      { letra: 'C', texto: 'Todos os carbonos da molécula estão hibridizados sp³.' },
      { letra: 'D', texto: 'Possui a fórmula C<sub>20</sub>H<sub>20</sub>N<sub>2</sub>O<sub>2</sub>.' },
      { letra: 'E', texto: 'Apresenta massa molar 315,89 g/mol.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'udesc-2026-v-025', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 25,
    disciplina: 'Química', conteudo: 'qui-1a3', subtopico: 'Propriedades periódicas', dificuldade: 'facil',
    enunciado: `<p>Em 2019, foi celebrado o Ano Internacional da Tabela Periódica, lembrando os 150 anos da proposta de Mendeleev. Desde então, novas aplicações têm ressaltado a importância das leis periódicas para compreender a organização dos elementos e suas propriedades. Um exemplo atual é o uso crescente de terras-raras (lantanídeos), fundamentais para a fabricação de imãs permanentes em turbinas eólicas, motores de carros elétricos e dispositivos eletrônicos.</p>
      <p>Considerando os princípios da tabela periódica e as propriedades periódicas, assinale a alternativa correta sobre os elementos envolvidos.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Os elementos lantanídeos ocupam a série dos actinídeos e apresentam propriedades químicas idênticas às do urânio.' },
      { letra: 'B', texto: 'A energia de ionização tende a diminuir dentro de um mesmo período, já que os elétrons externos ficam cada vez mais próximos do núcleo.' },
      { letra: 'C', texto: 'A afinidade eletrônica é constante dentro de um mesmo grupo, sendo idêntica para todos os elementos.' },
      { letra: 'D', texto: 'O aumento do caráter metálico ocorre da direita para a esquerda em um período e de cima para baixo em um grupo, sem exceções conhecidas.' },
      { letra: 'E', texto: 'A variação do raio atômico dentro de um período ocorre pela maior atração nuclear efetiva, fazendo com que, mesmo com o aumento do número atômico, o tamanho do átomo diminua da esquerda para a direita.', explicacao: 'Correta! Num período, o número de camadas é o mesmo, mas a carga nuclear efetiva cresce para a direita; os elétrons são mais atraídos e o raio atômico diminui da esquerda para a direita.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'udesc-2026-v-026', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 26,
    disciplina: 'Química', conteudo: ['qui-1a1', 'qui-1a2'], subtopico: 'Modelos atômicos e distribuição eletrônica', dificuldade: 'media',
    enunciado: `<p>A compreensão da estrutura da matéria evoluiu com diferentes modelos atômicos até a atual organização dos elétrons em níveis e subníveis de energia. Essa evolução permitiu não apenas avanços na Química, mas também no desenvolvimento de novas tecnologias, como semicondutores empregados em painéis solares e dispositivos eletrônicos. A correta atribuição da configuração eletrônica é fundamental para explicar as propriedades periódicas e a reatividade química dos elementos.</p>
      <p>Considerando os modelos atômicos e os princípios que regem a distribuição eletrônica, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'No caso dos gases nobres, sua estabilidade é explicada apenas pelo modelo de Dalton, pois este já previa o octeto eletrônico como regra de máxima estabilidade.' },
      { letra: 'B', texto: 'O modelo de Dalton explicava os espectros de emissão atômica ao considerar que os átomos eram esferas maciças e indivisíveis, capazes de emitir radiação quando excitadas.' },
      { letra: 'C', texto: 'Segundo a configuração eletrônica, o cobalto (Z = 27) termina em 3d<sup>6</sup>4s<sup>1</sup>, o que justifica seu caráter de elemento de transição estável e sem variações de estados de oxidação.' },
      { letra: 'D', texto: 'O Princípio da Exclusão de Pauli admite que dois elétrons em um mesmo orbital podem ter todos os quatro números quânticos idênticos, desde que o spin seja paralelo.' },
      { letra: 'E', texto: 'O modelo de Bohr explicou os espectros de emissão do átomo de hidrogênio e, a partir dele, a configuração eletrônica passou a ser organizada em níveis e subníveis de energia, permitindo justificar a semelhança química entre elementos de um mesmo grupo da Tabela Periódica.', explicacao: 'Correta! Bohr explicou as linhas do espectro do hidrogênio com níveis de energia quantizados; a partir dele, os elétrons passaram a ser distribuídos em níveis e subníveis, e a mesma configuração da camada de valência explica a semelhança química dentro de um grupo.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'udesc-2026-v-027', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 27,
    disciplina: 'Química', conteudo: 'qui-4b4', subtopico: 'Oxirredução — tratamento de cromo', dificuldade: 'facil',
    enunciado: `<p>No tratamento de efluentes industriais, um dos maiores desafios é a presença de íons Cr<sup>6+</sup>, geralmente encontrados na forma de cromato (CrO<sub>4</sub><sup>2-</sup>) ou dicromato (Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>), altamente tóxicos e cancerígenos. Processos de oxirredução são empregados para converter o Cr<sup>6+</sup> em Cr<sup>3+</sup>, forma menos solúvel e com menor toxicidade, possibilitando sua precipitação e remoção. A compreensão das reações redox é fundamental não apenas para explicar esse processo, mas também para analisar fenômenos como a corrosão e a eletrólise.</p>
      <p>Com base nesses conceitos, assinale a alternativa <b>incorreta</b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O agente redutor utilizado em uma reação redox, como o Fe<sup>2+</sup> em presença de Cr<sup>6+</sup>, é a espécie que fornece elétrons, sofrendo oxidação e permitindo a redução do cromo.' },
      { letra: 'B', texto: 'No processo de conversão ambientalmente relevante do Cr<sup>6+</sup> para o Cr<sup>3+</sup>, o cromo sofre oxidação, pois passa de um número de oxidação mais baixo para um mais elevado, caracterizando o ganho de elétrons.', explicacao: 'Correta! (é a incorreta) De Cr<sup>6+</sup> para Cr<sup>3+</sup> o Nox diminui: o cromo ganha 3 elétrons e sofre <b>redução</b>, não oxidação.' },
      { letra: 'C', texto: 'Em qualquer reação de oxirredução, uma variação simultânea de números de oxidação ocorre, sendo imprescindível a presença de um oxidante e de um redutor.' },
      { letra: 'D', texto: 'O balanceamento de reações redox pelo método iônico-eletrônico em meio ácido envolve a adição de H<sub>2</sub>O, H<sup>+</sup> e de elétrons, de modo a conservar tanto a massa quanto a carga elétrica.' },
      { letra: 'E', texto: 'A eletrólise utilizada em processos industriais, como a galvanoplastia, corresponde a uma reação de oxirredução não espontânea, forçada pela aplicação de corrente elétrica externa.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2026-v-028', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 28,
    disciplina: 'Química', conteudo: 'qui-4b5', subtopico: 'Radioatividade', dificuldade: 'facil',
    enunciado: `<p>A descoberta da radioatividade no final do século XIX, por Becquerel, e os estudos de Marie e Pierre Curie revolucionaram a ciência ao revelar que alguns núcleos atômicos podem se transformar espontaneamente em outros núcleos, liberando energia. Atualmente, os conceitos de meia-vida, tipos de radiação e decaimento radioativo têm aplicações que vão da medicina nuclear à datação de fósseis.</p>
      <p>Considerando os fundamentos da radioatividade, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A radiação gama é constituída por partículas eletricamente carregadas, o que explica sua baixa penetração em tecidos biológicos.' },
      { letra: 'B', texto: 'A radiação beta consiste na emissão de um pósitron (e<sup>+</sup>), resultante da transformação de um próton em nêutron dentro do núcleo.' },
      { letra: 'C', texto: 'O tempo de meia-vida de um radioisótopo varia de acordo com as condições externas de pressão, temperatura e estado físico da amostra.' },
      { letra: 'D', texto: 'O decaimento alfa corresponde à emissão de uma partícula formada por dois prótons e dois nêutrons, provocando a redução de duas unidades no número atômico e de quatro unidades no número de massa do núcleo instável.', explicacao: 'Correta! A partícula alfa é um núcleo de hélio (<sub>2</sub>α<sup>4</sup>: 2 prótons e 2 nêutrons). Ao emiti-la, o núcleo perde 2 no número atômico (Z − 2) e 4 no número de massa (A − 4).' },
      { letra: 'E', texto: 'O processo de fissão nuclear espontânea ocorre sem necessidade de indução externa e gera produtos mais leves, acompanhados da liberação de grande quantidade de energia.' },
    ],
    gabarito: 'D',
  },

  /* ===================== HISTÓRIA (29 a 37) ===================== */
  {
    id: 'udesc-2026-v-029', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 29,
    disciplina: 'História', conteudo: 'his-1a7', subtopico: 'Islã medieval', dificuldade: 'media',
    textoApoio: `<p><b>TEXTO 1</b></p>
      <p>O Islã tornou iguais todos os seus conversos, independentemente de sua origem étnico-racial. Abriu o caminho para os talentosos e ambiciosos, mesmo que não fossem árabes. Muçulmanos, Sírios e Persas, em apenas um século, tornaram-se os pilares da civilização islâmica e viriam a ser administradores, juristas, teólogos e até mesmo professores de poesia árabe. O Islã Medieval é, em grande parte, uma criação de muçulmanos que não eram árabes.</p>
      <small>BROWN, P. The World of Late Antiquity. AD 150-750. Nova Iorque; Londres: W.W. Norton &amp; Company, 1989, p. 198.</small>`,
    enunciado: `<p>O historiador irlandês Peter Brown atribuiu ao Islã Medieval as características descritas no Texto 1:</p>
      <p>Assinale a alternativa <b>incorreta</b> a respeito da História do Islã na Idade Média.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Na Península Ibérica, o Islã permaneceu isolado e imune às culturas locais e estrangeiras. Em geral, o território de Al-Andaluz revelou-se adepto de ideais de pureza e rejeição às populações instaladas nesta localidade.', explicacao: 'Correta! (é a incorreta) Al-Andalus foi marcado pela convivência e pelo intercâmbio entre muçulmanos, cristãos (moçárabes) e judeus, com grande produção cultural compartilhada — o oposto de isolamento e de “ideais de pureza”, o que também contraria o Texto 1.' },
      { letra: 'B', texto: 'Construído pelos Omíadas em Jerusalém, o Domo da Rocha foi estabelecido sobre as ruínas do Monte do Templo e conectava, ainda que simbolicamente, a fé pregada pelo profeta Muhhamad a Abraão.' },
      { letra: 'C', texto: 'A cidade de Bagdá (Madinat-al-Salam ou “A cidade da paz”) foi fundada sob a pretensão de ser a capital do Califado Abássida a partir do ano 762 d.C.' },
      { letra: 'D', texto: 'Entre os anos de 650 e 750 d.C., ainda sob a hegemonia dos Omíadas, o Islã promoveu uma ampliação de sua expansão territorial, congregando territórios na Arábia, no Norte da África e na Península Ibérica.' },
      { letra: 'E', texto: 'No ano 751, Abássidas e Chineses da Dinastia Tang se enfrentaram nas proximidades do rio Talas, com vitória das forças muçulmanas e o consequente estabelecimento de limites às expansões dos chineses sobre a Ásia Central.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'udesc-2026-v-030', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 30,
    disciplina: 'História', conteudo: 'his-4a5', subtopico: 'Panteras Negras e direitos civis nos EUA', dificuldade: 'facil',
    enunciado: `<p>O Partido dos Panteras Negras foi um dos movimentos antirracistas mais importantes dos Estados Unidos. Sua atuação radical e organizada representou um desafio direto ao Estado.</p>
      <p>Assinale a alternativa correta sobre os Panteras Negras.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Entre as principais lideranças do Partido dos Panteras Negras constam Martin Luther King Jr. e Malcom X.' },
      { letra: 'B', texto: 'O Partido dos Panteras Negras surgiu durante a década de 1970 e foi um dos maiores representantes do nacionalismo negro nos Estados Unidos com a campanha de retorno dos afroamericanos para o continente africano.' },
      { letra: 'C', texto: 'O legado das ideias, símbolos e ações dos Panteras Negras permanece atual nas lutas por igualdade e direitos civis, sendo evidente sua influência em movimentos contemporâneos, como o Black Lives Matter.', explicacao: 'Correta! Fundado em 1966, em Oakland (Califórnia), por Huey Newton e Bobby Seale, o partido deixou um legado (autodefesa, denúncia da violência policial, programas comunitários, estética) que inspira movimentos atuais como o Black Lives Matter.' },
      { letra: 'D', texto: 'O movimento nasceu nas comunidades de periferia de Nova Iorque, e suas primeiras lideranças eram trabalhadores populares, semialfabetizados, vítimas diárias do racismo no país.' },
      { letra: 'E', texto: 'Embora tenha contato com participação de mulheres, os cargos de liderança do Partido dos Panteras Negras sempre foram ocupados por homens.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'udesc-2026-v-031', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 31,
    disciplina: 'História', conteudo: 'his-1a6', subtopico: 'Mulheres na Roma imperial', dificuldade: 'media',
    imagem: 'imagens/estudo/udesc-2026-v-031.webp',
    legendaAcima: 'Figura 1: Afresco pompeiano (Século I d.C.) retratando mulher com instrumentos de escrita.',
    legenda: 'Fonte: Wikimedia Commons. “Portrait d’une jeune femme, dite Sappho” [fresque]. Casa VI, 17 (Insula Occidentalis), Pompeia (Itália), séc. I d.C. Descoberta em 17 ou 24 maio 1760; conservada no Museo Archeologico Nazionale di Napoli, Núm. Inv. 9084. Disponível em: https://en.wikipedia.org/wiki/%22Sappho%22_fresco_(Pompeii)#/media/File:Portrait_d%27une_jeune_femme,_dite_Sappho.jpg. Acesso em: 20 out. 2025',
    enunciado: `<p>A Figura 1, pintura encontrada na antiga cidade de Pompeia, Itália, retrata uma mulher portando os instrumentos de escrita utilizados pelos antigos romanos: tabuinhas de cera e um artefato pontiagudo para riscá-las. O retrato em questão, no passado, já foi interpretado como sendo uma representação da poeta grega Safo. Mais recentemente, contudo, o acesso a diversas fontes históricas tem evidenciado tratar-se da representação das mulheres em todos os âmbitos da sociedade romana antiga dos primeiros séculos do período imperial.</p>
      <p>Assinale a alternativa <b>incorreta</b>, considerando o protagonismo das mulheres romanas dos primeiros séculos do período imperial.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Parte significativa das inscrições parietais da cidade de Pompeia é de autoria feminina e trata de temas diversos do quotidiano: religiosidade, trabalho, amor e economia.' },
      { letra: 'B', texto: 'Nas lápides funerárias romanas, inúmeras mulheres foram registradas junto das profissões desempenhadas em vida.' },
      { letra: 'C', texto: 'Muitas mulheres romanas, nos primeiros séculos do período imperial, atuavam como médicas, atrizes de teatro, comerciantes e trabalhadoras domésticas.' },
      { letra: 'D', texto: 'Inúmeras mulheres romanas, inclusive alforriadas, atuaram como benfeitoras em suas cidades, doando quantias significativas de seu próprio dinheiro em prol da construção de edifícios e serviços públicos à população.' },
      { letra: 'E', texto: 'As mulheres romanas estavam proibidas de atuar no comércio, âmbito dominado apenas por homens de nascimento livre ou alforriados.', explicacao: 'Correta! (é a incorreta) Inscrições, lápides e registros de Pompeia mostram mulheres comerciantes, proprietárias de lojas e negócios (como Eumáquia e Júlia Félix). Não havia proibição de atuarem no comércio — o que a própria alternativa C confirma.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'udesc-2026-v-032', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 32,
    disciplina: 'História', conteudo: 'his-4b2', subtopico: 'Relatório Figueiredo — violência contra indígenas', dificuldade: 'dificil',
    textoApoio: `<p><b>TEXTO 2</b></p>
      <p>Depois de mais de 40 anos desaparecido após incêndio no Ministério da Agricultura, que teria dado o documento como ‘eliminado’, o Relatório Figueiredo foi encontrado em abril de 2013 no Museu do Índio no Rio de Janeiro com mais de 7 mil páginas que mostram o genocídio cometido na época, algo que chocou a população com tamanho horror quando foi divulgado na mídia.</p>
      <small>Fonte: ENCONTRADO há 10 anos, Relatório Figueiredo revelou extermínio, mas cultura indígena resiste em MS. Memórias Reveladas – Arquivo Nacional, Brasília, 20 abr. 2023. Disponível em: https://www.gov.br/memoriasreveladas/pt-br/assuntos/noticias/encontrado-ha-10-anos-relatorio-figueiredo-revelou-exterminio-mas-cultura-indigena-resiste-em-ms. Acesso em: 21 out. 2025.</small>`,
    enunciado: `<p>A matéria publicada no site do Arquivo Nacional relata a importância histórica do documento conhecido como Relatório Figueiredo, nome dado em referência ao procurador do Ministério Público Federal Jader de Figueiredo Correia. Na matéria transcrita no Texto 2, é informado o seguinte:</p>
      <p>Assinale a alternativa correta sobre o Relatório Figueiredo.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O relatório concentra sua apuração de violência indígena na região sul e sudeste do Brasil, não sendo demonstrativo de ações de violação de direitos humanos em outras regiões do país.' },
      { letra: 'B', texto: 'O relatório foi produzido pela Comissão da Verdade, instituída no Brasil durante o governo presidencial de Dilma Rousseff. Essa comissão foi instituída para investigar e apurar crimes cometidos pelo Estado durante a ditadura militar.' },
      { letra: 'C', texto: 'A investigação que deu origem ao relatório foi encomendada em 1967 pelo Ministro do Interior Afonso de Albuquerque Lima. Seu objetivo era apurar denúncias de corrupção e violência dentro do então Serviço de Proteção ao Índio (SPI), órgão do governo responsável pela política indigenista.', explicacao: 'Correta! Em 1967, o ministro do Interior Albuquerque Lima encarregou o procurador Jader de Figueiredo de investigar o SPI; o relatório documentou corrupção, torturas e massacres de indígenas em várias regiões do país e levou à extinção do SPI e à criação da Funai.' },
      { letra: 'D', texto: 'O relatório não conseguiu identificar a participação de militares e funcionários do SPI (Serviço de Proteção ao Índio) em práticas de violação aos direitos humanos contra as populações indígenas no Brasil.' },
      { letra: 'E', texto: 'O relatório serviu de base legal para fundamentar a tese do marco temporal, defendida pelas populações indígenas, antropólogos e entidades civis engajadas na política de reparações históricas no Brasil atualmente.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'udesc-2026-v-033', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 33,
    disciplina: 'História', conteudo: 'his-1b5', subtopico: 'União Ibérica e invasões holandesas', dificuldade: 'facil',
    enunciado: `<p>Sobre o contexto histórico da formação da União Ibérica (1580-1640), invasões holandesas e o estabelecimento da Companhia de Jesus na América portuguesa, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O contexto de dominação espanhola sobre a Coroa portuguesa marcou o auge da exploração aurífera das Minas Gerais.' },
      { letra: 'B', texto: 'As relações econômicas entre portugueses e holandeses foram afetadas diretamente pelo domínio espanhol sobre a Coroa portuguesa, o que motivou a invasão e ocupação de territórios da América portuguesa pelos holandeses.', explicacao: 'Correta! Os holandeses financiavam e refinavam o açúcar do Brasil, mas estavam em guerra com a Espanha; com a União Ibérica, Filipe II proibiu o comércio com eles, que reagiram invadindo a Bahia (1624) e Pernambuco (1630).' },
      { letra: 'C', texto: 'Mesmo durante o domínio espanhol sobre a Coroa portuguesa, os limites territoriais estabelecidos no Tratado de Tordesilhas (1494) foram respeitados, sendo impossível transitar e comercializar com praças comerciais estrangeiras.' },
      { letra: 'D', texto: 'O domínio holandês no nordeste brasileiro não afetou o comércio de escravizados africanos.' },
      { letra: 'E', texto: 'Os indígenas deixaram de ser escravizados, uma vez que a estratégia de evangelização jesuítica evoluiu para a construção das Missões Jesuíticas, afastadas dos principais territórios portugueses.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2026-v-034', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 34,
    disciplina: 'História', conteudo: 'his-3b3', subtopico: 'Revolta da Chibata', dificuldade: 'facil',
    enunciado: `<p>A Revolta da Chibata ocorreu entre os dias 22 e 27 de novembro de 1910. Após assumir o controle de navios da Marinha, apontar seus canhões para a cidade do Rio de Janeiro e abrir negociação com as lideranças políticas e militares da época, os revoltosos tiveram a promessa do atendimento de suas demandas. O pedido de anistia a todos os envolvidos na revolta era uma delas.</p>
      <p>Assinale a alternativa correta sobre o pedido de anistia aos marinheiros envolvidos na Revolta da Chibata.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Após a renúncia dos marinheiros, o acordo de anistia, inicialmente prometido, não foi cumprido pelas autoridades competentes. Os líderes da revolta foram expulsos da Marinha sob a alegação de insubordinação, e muitos marinheiros foram presos, torturados ou enviados para trabalhos forçados na Amazônia.', explicacao: 'Correta! A anistia aprovada pelo Congresso foi desrespeitada logo após a rendição: houve expulsões, prisões (João Cândido na Ilha das Cobras) e o envio de marinheiros no navio Satélite para trabalhos forçados na Amazônia.' },
      { letra: 'B', texto: 'A anistia para casos de sublevação contra a nação não estava amparada na constituição vigente, mas cláusulas fundamentadas em liberdade de expressão e direitos humanos foram usadas para assegurar a integridade física dos marinheiros e o fim do uso da chibata como castigo físico na Marinha.' },
      { letra: 'C', texto: 'A anistia foi cumprida de forma ampla e irrestrita, absolvendo todos os revoltosos e extinguindo, oficialmente, os castigos físicos na Marinha brasileira.' },
      { letra: 'D', texto: 'A anistia plena a todos os envolvidos não foi cumprida, e as principais lideranças da revolta de marinheiros foram julgadas perante tribunais brasileiros e condenadas por traição ao país.' },
      { letra: 'E', texto: 'O único marinheiro não anistiado após a rendição do movimento contra a chibata no Brasil foi João Candido, conhecido como Almirante Negro dos mares. Ele foi punido de forma exemplar em nome dos demais.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'udesc-2026-v-035', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 35,
    disciplina: 'História', conteudo: ['his-3b5', 'his-3b6'], subtopico: 'Constituições de 1934 e 1937', dificuldade: 'media',
    enunciado: `<p>Em 16 de julho de 1934 foi promulgada a segunda Constituição republicana do Brasil. O período democrático, no entanto, teve curta duração. Em 10 de novembro de 1937, o Congresso foi fechado e teve início a ditadura do Estado Novo, com uma nova Constituição sendo imposta.</p>
      <p>Analise as proposições sobre essas duas constituições.</p>
      <p>I. A Constituição de 1934 ratificou as conquistas do Código Eleitoral de 1932 e garantiu o voto secreto e o voto feminino.<br>
      II. A Constituição de 1937 estabeleceu a política do bipartidarismo durante o período do Estado Novo.<br>
      III. As duas cartas constitucionais mantiveram os trabalhadores rurais à margem das garantias da legislação do trabalho.<br>
      IV. A Constituição de 1934 concedeu o direito ao voto aos analfabetos, retirado pela Constituição de 1937 e referendado novamente apenas pela Constituição de 1988.<br>
      V. A Constituição de 1937 frustrou as pretensões de governo dos integralistas, que tentaram a insurreição no ano seguinte</p>
      <p>Assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Somente as proposições I, II e IV são verdadeiras.' },
      { letra: 'B', texto: 'Somente as proposições I, III e V são verdadeiras.', explicacao: 'Correta! I: 1934 manteve o voto secreto e feminino do Código de 1932. III: os trabalhadores rurais ficaram fora da legislação trabalhista. V: o Estado Novo extinguiu os partidos, inclusive a AIB, e os integralistas tentaram o golpe em 1938. II é falsa (1937 aboliu os partidos; bipartidarismo foi na ditadura de 1964) e IV é falsa (1934 não deu voto aos analfabetos; isso veio em 1985/1988).' },
      { letra: 'C', texto: 'Somente as proposições I e IV são verdadeiras.' },
      { letra: 'D', texto: 'Somente as proposições II, III e V são verdadeiras.' },
      { letra: 'E', texto: 'Somente as proposições II, IV e V são verdadeiras.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2026-v-036', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 36,
    disciplina: 'História', conteudo: 'his-3b1', subtopico: 'Revolução Federalista e Revolta da Armada', dificuldade: 'dificil',
    textoApoio: `<p><b>TEXTO 3</b></p>
      <p>A reação governista não se dá sem uma feroz repressão aos revoltosos. Na fortaleza da ilha de Anhatomirim, próxima a Desterro, mais de 180 federalistas são fuzilados por ordem do coronel Moreira César, que não poupa nem mesmo as autoridades que haviam declarado a cidade de Desterro capital da ‘República provisória’. A guerra simbólica daria continuidade às façanhas das armas: a cidade recuperada teve o nome mudado e se passou a chamar Florianópolis, numa referência ao salvamento da República por Floriano Peixoto.</p>
      <small>FLORES, Hélio Chaves. “A consolidação da República: rebeliões de ordem e progresso”. In: FERREIRA, Jorge; DELGADO, Lucília de Almeida Neves (orgs.). O Brasil Republicano: o tempo do liberalismo excludente - da proclamação da República à Revolução de 1930. 4ªed. Rio de Janeiro: Civilização Brasileira, 2010. p. 45-88. [o Brasil republicano; v. 1, p.78-79].</small>`,
    enunciado: `<p>No Texto 3, é apresentada a forma como o historiador Hélio Chaves Flores descreveu a repressão do governo federal em Desterro.</p>
      <p>Analise as proposições sobre esse momento de instabilidade no início do período republicano e assinale (V) para verdadeira e (F) para falsa.</p>
      <p>(&nbsp;&nbsp;&nbsp;) O primeiro presidente republicano, o marechal Deodoro da Fonseca, foi eleito indiretamente pelo Congresso e, poucos meses depois, em 3 de novembro de 1891, decretou o Estado de Sítio e dissolveu o mesmo Congresso.<br>
      (&nbsp;&nbsp;&nbsp;) A Revolução Federalista começou no Rio Grande do Sul em 1893, mas rapidamente se espalhou por toda região Sul do Brasil, e a ilha de Desterro tornou-se a capital provisória da revolta.<br>
      (&nbsp;&nbsp;&nbsp;) Os revoltosos da segunda Revolta da Armada, de 1893, eram simpáticos aos ideais dos federalistas, mas não estabeleceram com eles ligações militares diretas, permanecendo duas revoltas distintas.<br>
      (&nbsp;&nbsp;&nbsp;) A primeira Revolta da Armada, de 1891, foi liderada pelo almirante Custódio de Melo, e já contava com o apoio de personagens notáveis da política catarinense.<br>
      (&nbsp;&nbsp;&nbsp;) A união do governo Floriano Peixoto com os paulistas facilitou a vitória governista e abriu o caminho para a posterior eleição do primeiro presidente civil paulista – Prudente de Morais.</p>
      <p>Assinale a alternativa correta, de cima para baixo.</p>`,
    alternativas: [
      { letra: 'A', texto: 'F – V – V – V – F' },
      { letra: 'B', texto: 'F – V – F – V – F' },
      { letra: 'C', texto: 'V – F – V – F – V' },
      { letra: 'D', texto: 'V – V – F – F – V', explicacao: 'Correta! (V) Deodoro, eleito pelo Congresso em fev./1891, dissolveu-o em 3/11/1891. (V) A Federalista começou no RS em 1893, chegou a SC e PR, e Desterro virou capital provisória. (F) A Armada de 1893 se uniu militarmente aos federalistas no Sul. (F) A Revolta da Armada de 1891 só forçou a renúncia de Deodoro; o apoio de políticos catarinenses veio na de 1893. (V) O apoio do PRP paulista a Floriano garantiu a vitória e abriu caminho para Prudente de Morais.' },
      { letra: 'E', texto: 'F – F – V – F – V' },
    ],
    gabarito: 'D',
  },
  {
    id: 'udesc-2026-v-037', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 37,
    disciplina: 'História', conteudo: 'his-4b2', subtopico: 'Ditadura militar — propaganda e censura', dificuldade: 'facil',
    textoApoio: `<p><b>TEXTO 1</b></p>
      <p><b>Pra frente Brasil</b><br>Miguel Gustavo (1970)</p>
      <p>Noventa milhões em ação<br>Pra frente, Brasil<br>Do meu coração</p>
      <p>Todos juntos vamos<br>Pra frente, Brasil<br>Salve a Seleção!</p>
      <p>De repente é aquela corrente pra frente<br>Parece que todo o Brasil deu a mão<br>Todos ligados na mesma emoção<br>Tudo é um só coração!</p>
      <p>Todos juntos vamos<br>Pra frente Brasil, Brasil<br>Salve a Seleção!</p>
      <p>Todos juntos vamos<br>Pra frente Brasil, Brasil<br>Salve a Seleção!</p>
      <small>Disponível em: https://www.letras.mus.br/hinos-de-futebol/394819/. Acesso em: 12 nov. 2025.</small>`,
    enunciado: `<p>A composição “Pra frente Brasil”, transcrita a seguir, marcou o tricampeonato mundial de futebol que a seleção brasileira conquistou no México, em 1970.</p>
      <p>Essa conquista foi amplamente instrumentalizada pela ditadura militar de 1964. Enquanto o governo reprimia a sociedade e censurava os meios de comunicações, a propaganda destacava a vitória do selecionado.</p>
      <p>Sobre esse período, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A diminuição da dívida externa durante o chamado “Milagre Econômico” possibilitou uma política de investimentos na construção de inúmeros estádios de futebol durante o período da ditadura militar.' },
      { letra: 'B', texto: 'Os diversos órgãos que compunham a rede de informações e inteligência/espionagem da ditadura possuíam atividades que se restringiam ao âmbito do território nacional.' },
      { letra: 'C', texto: 'A ditadura militar foi capaz de eliminar a corrupção no período, sendo essa conquista amplamente utilizada como propaganda do governo.' },
      { letra: 'D', texto: 'Os elevados índices de crescimento econômico da ditadura militar foram responsáveis por uma redução da concentração de renda. A propaganda do governo destacava que “ninguém segura esse país”.' },
      { letra: 'E', texto: 'A censura e a propaganda política eram faces complementares das políticas de controle e divulgação de informações, com destaque para a Assessoria Especial de Relações Públicas (Aerp).', explicacao: 'Correta! Enquanto a censura calava as críticas, a Aerp (criada em 1968, no governo Costa e Silva, e muito ativa com Médici) produzia a propaganda ufanista (“Brasil, ame-o ou deixe-o”), explorando o tri de 1970.' },
    ],
    gabarito: 'E',
  },

  /* ===================== GEOGRAFIA (40 a 48) ===================== */
  {
    id: 'udesc-2026-v-040', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 40,
    disciplina: 'Geografia', conteudo: 'geo-1u5', subtopico: 'Migrantes e refugiados', dificuldade: 'facil',
    textoApoio: `<p><b>TEXTO 1</b></p>
      <p>De acordo com o ‘Boletim das Migrações’, em 14 anos, o fluxo migratório no Brasil foi de 2,3 milhões de pessoas. De 2010 a agosto de 2024, o Brasil registrou a entrada de 1.700.686 migrantes, entre residentes permanentes, temporários e fronteiriços. Além disso, o País reconheceu 146.109 pessoas como refugiadas e recebeu 450.752 solicitações de reconhecimento da condição de refugiado.</p>
      <small>Disponível em: https://www.gov.br/mj/pt-br/assuntos/noticias/fluxo-migratorio-no-brasil-foi-de-2-3-milhoes-de-pessoas-em-14-anos-aponta-boletim-das-migracoes. Acesso em: 29 ago. 2025.</small>`,
    enunciado: `<p>Assinale a alternativa correta sobre migrantes e refugiados.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O termo refugiado trata de pessoas que foram forçadas a sair do país de origem, seja por motivos religiosos, políticos ou por violações de direitos humanos e que têm essa situação reconhecida pelo Estado.', explicacao: 'Correta! Refugiado é quem foi forçado a deixar seu país por perseguição (religiosa, política, étnica etc.) ou grave violação de direitos humanos e teve essa condição reconhecida pelo Estado de acolhida (no Brasil, pelo Conare).' },
      { letra: 'B', texto: 'Os constantes desastres naturais, como tufões e terremotos, também colaboraram para o aumento do número de refugiados e de migrantes venezuelanos ao redor do mundo.' },
      { letra: 'C', texto: 'Os refugiados reconhecidos no Brasil são, em sua maioria, da Venezuela, do México e da República Dominicana.' },
      { letra: 'D', texto: 'A Alto Comissariado das Nações Unidas para Refugiados (ACNUR) é uma organização dedicada a avaliar e deliberar sobre os processos de migração e refúgio no Brasil e em países da América Latina, África e Oriente Médio.' },
      { letra: 'E', texto: 'A globalização e o avanço da tecnologia e das telecomunicações são os principais responsáveis pelos fluxos de refugiados ao longo do século XX.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'udesc-2026-v-041', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 41,
    disciplina: 'Geografia', conteudo: 'geo-4u2', subtopico: 'Amazônia — savanização', dificuldade: 'media',
    textoApoio: `<p><b>TEXTO 2</b></p>
      <p>Nos últimos anos, diferentes pesquisas têm divulgado que a Floresta Amazônica está muito próxima de se tornar savana. Os cientistas atestam que o processo de ‘savanização’ da Floresta Amazônica já é realidade e pode atingir ponto crítico até 2050.</p>
      <small>Disponível em: https://jornal.usp.br/radio-usp/processo-de-savanizacao-da-floresta-amazonica-ja-e-realidade-e-pode-atingir-ponto-critico-ate-2050/. Acesso em: 1 set. 2025.</small>`,
    enunciado: `<p>Assinale a alternativa correta sobre esta importante floresta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A COP30, que aconteceu entre os dias 10 e 21 de novembro de 2025 na cidade de Belém, capital do Pará, reuniu líderes mundiais, cientistas, organizações não governamentais e representantes da sociedade civil para discutir o futuro da Floresta Amazônica.' },
      { letra: 'B', texto: 'Os principais fatores de estresse ambiental na floresta amazônica estão associados às secas, à extração de madeira e aos incêndios.', explicacao: 'Correta! Secas mais intensas, extração de madeira (e desmatamento) e incêndios são os principais fatores de estresse que degradam a floresta e a aproximam do “ponto de não retorno” da savanização.' },
      { letra: 'C', texto: 'O manejo florestal na Amazônia é uma ameaça grave, que pode desencadear transições inesperadas nos ecossistemas e, potencialmente, exacerbar as mudanças climáticas regionais.' },
      { letra: 'D', texto: 'Em relação às perturbações humanas, as áreas da floresta são degradadas para a exploração de madeireiras, para a rotação de culturas e para a adubação com agrotóxico.' },
      { letra: 'E', texto: 'A Floresta Amazônica possui um ecossistema biologicamente pobre e pouco diversificado, o que favorece os processos de savanização.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2026-v-042', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 42,
    disciplina: 'Geografia', conteudo: 'geo-4u3', subtopico: 'Consumo de energia no Brasil', dificuldade: 'media',
    imagem: 'imagens/estudo/udesc-2026-v-042.webp',
    legendaAcima: 'Figura 1 – Consumo de Energia no Brasil',
    legenda: 'Disponível em: https://agenciagov.ebc.com.br/noticias/202406/transporte-e-industria-representaram-64-8-do-consumo-de-energia-do-pais-em-2023. Acesso em: 29 ago. 2025.',
    enunciado: `<p>O Balanço Energético Nacional (BEN 2024), divulgado pela Empresa de Pesquisa Energética (EPE) em parceria com o Ministério de Minas e Energia (MME), informou que, no ano de 2023, houve um aumento de 4% do uso de energia em relação ao ano anterior. Nesse cenário, o setor de transportes apresentou a maior participação dentre os setores e se tornou, novamente, o líder no país em termos de consumo de energia, com 33% do total.</p>
      <p>Analise as proposições sobre o consumo de energia no Brasil.</p>
      <p>I. Os países mais desenvolvidos apresentam um alto consumo energético em relação ao PIB, como é o caso do Brasil.<br>
      II. O setor primário está entre os que mais utilizam energia para produzir, uma vez que as commodities constituem a base econômica de muitos países.<br>
      III. Há diferentes tipos de indústrias, e as indústrias de base e petroquímicas demandam alta intensidade energética para produzir.<br>
      IV. Do total do consumo de energia no Brasil, 64,8% foram utilizados pelos setores de transporte e industrial, em 2023.</p>
      <p>Assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Somente as proposições I e II são verdadeiras.' },
      { letra: 'B', texto: 'Somente as proposições I e III são verdadeiras.' },
      { letra: 'C', texto: 'Somente as proposições I e IV são verdadeiras.' },
      { letra: 'D', texto: 'Somente as proposições II e IV são verdadeiras.' },
      { letra: 'E', texto: 'Somente as proposições III e IV são verdadeiras.', explicacao: 'Correta! III: indústrias de base (siderurgia, cimento) e petroquímicas são eletro e energointensivas. IV: transportes (33%) + indústrias (31,8%) = 64,8%. I é falsa (o Brasil não é país desenvolvido e tem consumo moderado por PIB) e II é falsa (a agropecuária consome só 5,0% da energia, segundo a figura).' },
    ],
    gabarito: 'E',
  },
  {
    id: 'udesc-2026-v-043', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 43,
    disciplina: 'Geografia', conteudo: 'geo-3u5', subtopico: 'Segregação socioespacial urbana', dificuldade: 'media',
    textoApoio: `<p><b>TEXTO 3</b></p>
      <p>Recém-chegado de lá do fundão da cidade, ali tá tu, a bordo do Bonsucesso, comendo a pipoca doce que tu pegou baratinho na mão dum piá que nasceu chorando, como todo o mundo, mas não no Moinhos de Vento, e sim num lugar que ensinou ele a parar de chorar bem antes do tempo. O bonde atravessa o Túnel da Conceição, e aí, olhando pela janela, tu viaja no viaduto. Tu sabe: algum cara completamente diferente do teu pai ganhou uma fortuna pra calcular a quantidade exata de aço que aquele bagulho tinha que ter pro vento não acabar derrubando tudo com o passar dos dia, mas foi uma pá de cara idêntico ao teu pai que ganhou um salário de fome pra virar todo o concreto que foi usado ali. Puta obra de engenharia, tu pensa. Mas, na real, pra ti que mal e porcamente domina as quatro operação básica da aritmética, até os barraco de pau da invasão lá perto da tua casa já são tudo umas puta obra de engenharia.</p>
      <small>FALERO, J. Mas em que mundo tu vive? Crônicas.1. ed. São Paulo: Todavia, 2021, p. 22.</small>`,
    enunciado: `<p>O Texto 3 foi retirado da crônica ‘Uma vitória da tua gente’, do escritor porto-alegrense José Falero, publicado no livro ‘Mas em que mundo tu vive?’.</p>
      <p>Em relação ao contexto em que é criada a obra de José Falero, analise as proposições.</p>
      <p>I. Quando o autor menciona o ‘fundão da cidade’ em oposição ao ‘Moinhos de Vento’ está se referindo ao desenvolvimento segregado da capital gaúcha, em que as periferias urbanas, em geral, se formaram em áreas geograficamente afastadas das áreas centrais, mais valorizadas pelo mercado imobiliário.<br>
      II. O desastre socioambiental ocorrido no Rio Grande do Sul em maio de 2024 afetou a Região Metropolitana de Porto Alegre de forma desigual e revelou outra dimensão da segregação socioespacial, que vem sendo chamada de “racismo ambiental”, posto que neste território as áreas que foram mais impactadas apresentavam concentrações expressivas de população negra e de baixa renda.<br>
      III. A ‘invasão’ a que se refere o autor diz respeito ao processo de ocupação (espontâneo ou politicamente organizado) de territórios pela classe trabalhadora nas periferias urbanas, já que, em função da contradição básica entre quem pensa e quem constrói a cidade moderna brasileira, esta “pá de cara idêntico ao teu pai que ganhou um salário de fome pra virar todo o concreto que foi usado ali” frequentemente não encontra espaço para estabelecer sua moradia nesta cidade que ajudou a construir.</p>
      <p>Assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Somente as proposições I e II são verdadeiras.' },
      { letra: 'B', texto: 'Somente as proposições I e III são verdadeiras.' },
      { letra: 'C', texto: 'Somente a proposição II é verdadeira.' },
      { letra: 'D', texto: 'Somente as proposições II e III são verdadeiras.' },
      { letra: 'E', texto: 'Todas as proposições são verdadeiras.', explicacao: 'Correta! As três descrevem a segregação socioespacial: periferias afastadas das áreas valorizadas (I), impactos desiguais das enchentes de 2024 sobre população negra e pobre — o “racismo ambiental” (II) — e as ocupações de quem constrói a cidade mas não tem acesso à moradia nela (III).' },
    ],
    gabarito: 'E',
  },
  {
    id: 'udesc-2026-v-044', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 44,
    disciplina: 'Geografia', conteudo: 'geo-4u2', subtopico: 'Biomas brasileiros', dificuldade: 'facil',
    enunciado: `<p>O Instituto Brasileiro de Geografia e Estatística (IBGE) reconhece oficialmente seis biomas continentais no Brasil: Amazônia, Caatinga, Cerrado, Mata Atlântica, Pampa e Pantanal. Cada bioma apresenta características próprias de clima, relevo, fauna e flora, influenciando diretamente as atividades humanas.</p>
      <p>Assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O Pampa abrange parte significativa da região Sudeste, sendo formado por extensas áreas de floresta de Araucárias.' },
      { letra: 'B', texto: 'A Caatinga é marcada por chuvas abundantes durante todo o ano, com rios perenes e vegetação densa.' },
      { letra: 'C', texto: 'O Cerrado ocupa pequena extensão territorial disjunta no Brasil, sendo sua maior área situada na região Sul e caracterizado por clima sempre úmido.' },
      { letra: 'D', texto: 'O Pantanal é considerado a maior planície alagável do planeta, com rica biodiversidade e alternância entre períodos de cheia e de seca.', explicacao: 'Correta! O Pantanal (MT e MS) é a maior planície inundável do mundo; o ritmo de cheias e vazantes comanda sua rica biodiversidade e as atividades humanas.' },
      { letra: 'E', texto: 'A Mata Atlântica é formada exclusivamente pela Floresta Ombrófila Densa e tem sofrido impactos significativos da ocupação humana.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'udesc-2026-v-045', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 45,
    disciplina: 'Geografia', conteudo: 'geo-c1', subtopico: 'População de Santa Catarina', dificuldade: 'media',
    textoApoio: `<p><b>TEXTO 4</b></p>
      <p>Durante muito tempo discutiu-se e buscou-se definir uma identidade única para o povo catarinense. [...]. Hoje existe a clareza de que a verdadeira identidade do povo catarinense é representada pela diversidade de identidades. Não se pode reduzir a identidade a uma ou mesmo muitas delas, pois cada grupo, à sua maneira, contribui para a construção do mosaico cultural, múltiplo e diversificado, representado pelo conjunto da população de Santa Catarina.</p>
      <small>SANTA CATARINA. Secretaria de Estado do Planejamento. Diretoria de Estatística e Cartografia; ROCHA, Isa de Oliveira (org.). Atlas Geográfico de Santa Catarina. Fascículo 3: População. Florianópolis: Editora da Udesc, 2019, 175 p.</small>`,
    enunciado: `<p>Acerca das características dos grupos populacionais que formam a diversidade social do território catarinense, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O povoamento vicentista representa a primeira tentativa de ocupação efetiva do território hoje compreendido como pertencente à Santa Catarina por parte da coroa portuguesa, no século XIX, a partir da fundação das localidades de São Francisco do Sul, Desterro e Laguna.' },
      { letra: 'B', texto: 'Os povos indígenas que ocupam o atual território catarinense (Guarani, Xokleng e Kaingang) têm como característica cultural a delimitação rígida de territórios, o que facilita os processos de demarcação territorial por parte do Estado.' },
      { letra: 'C', texto: 'A população cabocla, que representa um segundo momento de ocupação do planalto catarinense, viveu um movimento de dispersão após a Guerra do Contestado e, consequente, rearranjo identitário, e hoje marca presença em todo território estadual.', explicacao: 'Correta! Os caboclos ocuparam o planalto e o meio-oeste (após os indígenas) e, com a derrota no Contestado (1912–1916), se dispersaram e passaram por um rearranjo identitário; hoje estão presentes em todo o estado.' },
      { letra: 'D', texto: 'Pesquisas e recenseamentos historiográficos dão conta da presença de população de origem africana no território catarinense desde o século XVII, sendo uma das manifestações espaciais desse período a formação de territórios quilombolas, dos quais não encontramos remanescentes na contemporaneidade.' },
      { letra: 'E', texto: 'Durante a segunda metade do século XIX, a região do Vale do Itajaí deu origem a um exitoso empreendimento colonial, em que extensas áreas de mata virgem e desabitada foram transformadas pela fundação de colônias de imigrantes alemães, o que gerou uma conformação étnica homogênea para a região, que pode ser percebida até os dias atuais.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'udesc-2026-v-046', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 46,
    disciplina: 'Geografia', conteudo: 'geo-4u2', subtopico: 'Domínios morfoclimáticos (Ab’Saber)', dificuldade: 'facil',
    textoApoio: `<p><b>TEXTO 5</b></p>
      <p>Entendemos por domínio morfoclimático e fitogeográfico um conjunto espacial de certa ordem de grandeza territorial – de centenas de milhares a milhões de quilômetros quadrados de área onde haja um esquema coerente de feições de relevo, tipos de solos, formas de vegetação e condições climático-hidrológicas (Ab´Saber, 2003). Esses domínios permitem compreender melhor a diversidade ambiental brasileira e seus usos socioeconômicos.</p>
      <small>AB´SABER, A. N. Os domínios de natureza no Brasil: potencialidades paisagísticas. São Paulo: Ataliê Editorial, 2003.</small>`,
    enunciado: `<p>Considerando a proposta de regionalização descrita nas proposições a seguir, assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O domínio dos cerrados apresenta clima semiárido, vegetação xerófita e grande predominância da pecuária extensiva.' },
      { letra: 'B', texto: 'O domínio amazônico caracteriza-se pela floresta equatorial densa, clima quente e úmido, presença de rios volumosos e solos geralmente pobres em nutrientes.', explicacao: 'Correta! O domínio amazônico reúne terras baixas florestadas equatoriais, clima quente e úmido, a maior rede de rios caudalosos do planeta e solos em geral pobres (a fertilidade depende da reciclagem da matéria orgânica).' },
      { letra: 'C', texto: 'O domínio das araucárias estende-se por todo o Nordeste brasileiro, sendo marcado por clima árido e vegetação adaptada à escassez de água.' },
      { letra: 'D', texto: 'O domínio dos mares de morros ocorre principalmente na região Centro-Oeste, associado a áreas de relevo plano e solos de elevada fertilidade.' },
      { letra: 'E', texto: 'O domínio das caatingas abrange parte da Amazônia Legal, destacando-se por apresentar altos índices pluviométricos durante todo o ano.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'udesc-2026-v-047', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 47,
    disciplina: 'Geografia', conteudo: 'geo-3u3', subtopico: 'Rios e bacias brasileiras', dificuldade: 'facil',
    enunciado: `<p>O Brasil possui uma das maiores redes hidrográficas do mundo, formada por rios de diferentes regimes, extensões e relevância socioeconômica. O Instituto Brasileiro de Geografia e Estatística (IBGE) destaca que os rios brasileiros apresentam características ligadas à diversidade climática e ao relevo do país.</p>
      <p>Assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O rio Madeira, um dos principais afluentes do Amazonas, nasce na Argentina e percorre toda a região Sul do Brasil.' },
      { letra: 'B', texto: 'O rio São Francisco nasce no estado do Paraná, percorre o Centro-Oeste e deságua no Oceano Pacífico.' },
      { letra: 'C', texto: 'O rio Paraná corre inteiramente em território brasileiro, sendo o maior afluente da margem direita do rio Amazonas.' },
      { letra: 'D', texto: 'O rio Tocantins não possui ligação com a bacia Amazônica, mas deságua diretamente no rio Amazonas.' },
      { letra: 'E', texto: 'O rio Amazonas é o maior do mundo em vazão, com uma bacia hidrográfica que abrange quase metade do território brasileiro.', explicacao: 'Correta! O Amazonas tem a maior vazão do planeta, e sua bacia ocupa cerca de 45% do território brasileiro.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'udesc-2026-v-048', prova: 'UDESC 2026/Verão', vestibular: 'UDESC', ano: 2026, numeroOriginal: 48,
    disciplina: 'Geografia', conteudo: 'geo-3u2', subtopico: 'Mudanças climáticas no Brasil', dificuldade: 'media',
    enunciado: `<p>Em novembro de 2025, o estado do Pará recebeu a COP30, Conferência das Nações Unidas sobre Mudanças Climáticas (Conferência das Partes), um encontro global em que líderes mundiais, cientistas, organizações não governamentais e representantes da sociedade civil discutiram ações para combater as mudanças do clima.</p>
      <p>Analise as proposições sobre as mudanças climáticas e seus impactos no Brasil.</p>
      <p>I. Embora eventos climáticos extremos ainda não afetem o Brasil, é fundamental que compreendamos seus impactos, para que o país não venha a sofrer as consequências já relatadas pelo mundo, como a ameaça aos diversos setores produtivos essenciais (produção de alimentos, as seguranças hídrica e energética) e às pessoas, diretamente, na saúde física e mental, no risco de morte por desastres etc.<br>
      II. Os ecossistemas marinhos e costeiros, assim como seus serviços e atividades que neles se desenvolvem, estão expostos e são altamente vulneráveis a quase todos os efeitos das mudanças climáticas, recebendo os impactos provenientes do oceano e do continente.<br>
      III. Pesquisas vêm comprovando que alta biodiversidade e estoque de carbono estão diretamente associados. A proteção de áreas de alta biodiversidade conserva o carbono dos ecossistemas; assim, há redução das emissões na atmosfera e na magnitude dos efeitos das mudanças climáticas.<br>
      IV. Os últimos relatórios do Painel Intergovernamental sobre Mudança do Clima (IPCC) colocam em xeque o consenso estabelecido pela comunidade científica até a primeira década do século XXI, de que a influência humana sobre o clima é inequívoca, pois demonstram que as maiores emissões de gases de efeito estufa (GEE) provêm dos países menos desenvolvidos economicamente, não estando relacionadas, portanto, à queima de combustíveis fósseis.<br>
      V. Se, por um lado, os últimos relatórios do Painel Intergovernamental sobre Mudança do Clima (IPCC) comprovam que a emissão de gases do efeito estufa (GEE) é desigual pelo globo, estes também vêm corroborando a ideia de que os impactos das mudanças climáticas são democráticos, atingindo a todos os países e comunidades, sem distinção de classe, raça ou gênero, o que ressalta a importância de encontros globais para discussão do tema COP30.</p>
      <p>Assinale a alternativa correta.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Somente as proposições I, II e III são verdadeiras.' },
      { letra: 'B', texto: 'Somente as proposições II e III são verdadeiras.', explicacao: 'Correta! II e III são verdadeiras. I é falsa (o Brasil já sofre eventos extremos, como as enchentes do RS em 2024); IV é falsa (o IPCC reafirma que a influência humana é inequívoca e ligada aos combustíveis fósseis); V é falsa (os impactos são desiguais, atingindo mais os mais pobres e vulneráveis).' },
      { letra: 'C', texto: 'Somente as proposições II e V são verdadeiras.' },
      { letra: 'D', texto: 'Somente as proposições III e IV são verdadeiras.' },
      { letra: 'E', texto: 'Todas as proposições são verdadeiras.' },
    ],
    gabarito: 'B',
  },

);
