/**
 * ENEM 2025 — 2º dia, Caderno 7 (Azul) — Ciências da Natureza e suas Tecnologias (questões 91 a 135).
 *
 * Origem: Provas/Outros/ENEM/2025_PV_D2_CD7.pdf; gabarito oficial: Provas/Outros/ENEM/2025_GB_D2_CD7.pdf
 * (JSON: Provas/Outros/ENEM/2025_NAT_gabarito.json).
 * Questões de ESTUDO — nunca entram nos simulados. Aparecem no módulo da matéria (campo `disciplina`),
 * dentro do capítulo do campo `conteudo` (dados/conteudos.js).
 * Ficaram de fora: 123 e 132 (anuladas no gabarito oficial).
 * Formato das questões: veja README.md ("Como adicionar uma questão nova").
 */

/* Questão 95 — Textos I e II */
var TEXTO_ENEM_2025_NAT_95 = `
  <p><b>TEXTO I</b></p>
  <p><b>As mariposas</b><br>
  As mariposa, quando chega o frio<br>
  Fica dando volta em volta da lâmpida pra se esquentá. [sic]</p>
  <p><small>BARBOSA, A. <b>Reviva: Adoniran Barbosa</b>. São Paulo: Som Livre, 2002 (fragmento).</small></p>
  <p><b>TEXTO II</b></p>
  <p>As mariposas se aproximam das lâmpadas atraídas pela luz, pois, sendo basicamente criaturas noturnas, estão adaptadas a seguir o brilho da lua, em um processo conhecido como orientação transversal. Assim, o que o sambista Adoniran Barbosa, no Texto I, descreve não é a causa, mas sim uma das consequências possíveis dessa aproximação. De fato, o calor gerado pelas lâmpadas, sobretudo as incandescentes, pode aquecer as mariposas.</p>
  <p><small>HERTZBERG, R. Por que as mariposas são tão atraídas por luzes fortes? <b>National Geographic</b>, nov. 2020 (adaptado).</small></p>
`;

/* Questão 94 — quadro de potências */
var TEXTO_ENEM_2025_NAT_94 = `
  <p>Réguas elétricas são dispositivos que permitem a ligação segura e simultânea de dois ou mais aparelhos eletroeletrônicos à rede elétrica. Uma estudante comprou uma régua com seis tomadas, conforme a figura. Essa régua suporta uma intensidade máxima de corrente elétrica igual a 20 A. Acima desse valor, o fusível de segurança da régua se rompe, inutilizando-a até que um novo fusível seja instalado. Considere as potências nominais de alguns aparelhos eletroeletrônicos apresentadas no quadro.</p>
  <table class="tabela-prova">
    <tr><th>Aparelho</th><th>Potência (watt)</th></tr>
    <tr><td>Luminária de LED</td><td>5</td></tr>
    <tr><td>Computador</td><td>250</td></tr>
    <tr><td>Impressora a laser</td><td>660</td></tr>
    <tr><td>Secador de cabelos</td><td>750</td></tr>
    <tr><td>Cafeteira</td><td>900</td></tr>
    <tr><td>Condicionador de ar portátil</td><td>1 100</td></tr>
  </table>
  <p>Em um dia quente, a estudante mantém o computador e o condicionador de ar portátil ligados à régua permanentemente. Nessa situação, ela tenta realizar algumas atividades, uma de cada vez, utilizando a mesma régua, na seguinte ordem:</p>
  <p>1º – imprimir um trabalho escolar;<br>
  2º – fazer um café com a cafeteira;<br>
  3º – ligar a luminária;<br>
  4º – secar os cabelos.</p>
  <p>Sabe-se que a régua foi ligada à tensão elétrica de 110 V, adequada para o funcionamento desses aparelhos.</p>
`;

/* Questão 124 — semirreações */
var TEXTO_ENEM_2025_NAT_124 = `
  <p>Objetos de prata escurecem em contato com compostos contendo enxofre por causa da formação de uma fina camada de sulfeto de prata. Um método simples para clarear o objeto consiste em forrar um recipiente com papel alumínio, adicionar ao recipiente uma solução aquosa de cloreto de sódio e, enfim, mergulhar o objeto de prata enegrecido. Em cerca de três minutos, a prata volta à coloração original. As seguintes semirreações e os respectivos potenciais-padrão de redução são úteis para a compreensão dos fenômenos ocorridos.</p>
  <table class="tabela-prova">
    <tr><td>Ag<sub>2</sub>S (s) + 2 e<sup>−</sup> → 2 Ag (s) + S<sup>2−</sup> (aq)</td><td>−0,69 V</td></tr>
    <tr><td>O<sub>2</sub> (g) + 4 H<sup>+</sup> (aq) + 4 e<sup>−</sup> → 2 H<sub>2</sub>O (l)</td><td>+1,23 V</td></tr>
    <tr><td>Al<sup>3+</sup> (aq) + 3 e<sup>−</sup> → Al (s)</td><td>−1,68 V</td></tr>
  </table>
  <p><small>SARTORI, E. R.; BATISTA, E. F.; FATIBELLO-FILHO, O. Escurecimento e limpeza de objetos de prata: um experimento simples e de fácil execução envolvendo reações de oxidação-redução. <b>Química Nova na Escola</b>, n. 30, 2008 (adaptado).</small></p>
`;

/* Questão 129 — quadro */
var TEXTO_ENEM_2025_NAT_129 = `
  <p>O ácido úsnico é retirado de liquens e foi testado contra diversas espécies, conforme o quadro.</p>
  <table class="tabela-prova">
    <tr><th>Teste</th><th>Resultado</th></tr>
    <tr><td><i>Aedes aegypti</i> (larvas)</td><td>Baixa eficiência</td></tr>
    <tr><td>Bacilo de Koch</td><td>Média eficiência</td></tr>
    <tr><td>Moluscos aquáticos (adultos)</td><td>Alta eficiência</td></tr>
    <tr><td>Pernilongo (larvas)</td><td>Média eficiência</td></tr>
    <tr><td>Vermes platelmintos</td><td>Ineficiente</td></tr>
  </table>
`;

QUESTOES.push(
  {
    id: 'enem-2025-091', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 91,
    disciplina: 'Química', conteudo: 'qui-1b4', subtopico: 'Purificação da água (adsorção)', dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-091.webp',
    legenda: '<small>CORRÊA, M. A. <b>Cosmetologia: ciência e técnica</b>. São Paulo: Medfarma, 2012 (adaptado).</small>',
    enunciado: `<p>A filtração em carvão é uma das mais antigas formas de purificação de água. O carvão ativado, diferentemente do carvão comum, é útil para ser empregado na remoção de material orgânico, cloro e outros contaminantes. Essa capacidade decorre de suas propriedades de adsorção. A origem do material utilizado para produzir o carvão ativado pode influenciar sua porosidade e, consequentemente, interferir na capacidade do material de remover impurezas. Na figura, é ilustrada esquematicamente a diferença entre as estruturas físicas do carvão comum e do carvão ativado.</p>
      <p>Qual característica do carvão ativado explica a sua maior eficiência nesse processo?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Massa.' },
      { letra: 'B', texto: 'Dureza.' },
      { letra: 'C', texto: 'Densidade.' },
      { letra: 'D', texto: 'Superfície.', explicacao: 'Correta! A adsorção é um fenômeno de superfície: as impurezas ficam retidas na superfície do sólido. Os macro, meso e microporos do carvão ativado aumentam muito a sua área superficial, o que o torna mais eficiente.' },
      { letra: 'E', texto: 'Condutividade.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-092', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 92,
    disciplina: 'Biologia', conteudo: 'bio-4b6', subtopico: 'Transgênicos', dificuldade: 'facil',
    enunciado: `<p>A maioria dos seres vivos tem um relógio biológico (ciclo circadiano), que regula as mudanças metabólicas e comportamentais de acordo com o ciclo de 24 horas de rotação da Terra. Em 2015, um artigo publicado na revista <i>Science Advantage</i> mostrou ser possível a transferência dos genes do relógio circadiano da cianobactéria <i>Synechococcus elongatus</i> para o genoma da bactéria <i>Escherichia coli</i>, um organismo não circadiano.</p>
      <p><small>CHEN, A. H. et al. Transplantability of a Circardian Lock to Noncircardian Organism. <b>Science Advantage</b>, n. 1, 2015 (adaptado).</small></p>
      <p>Estarão presentes no organismo geneticamente modificado os genes do</p>`,
    alternativas: [
      { letra: 'A', texto: 'metabolismo de <i>E. coli</i>, apenas.' },
      { letra: 'B', texto: 'ciclo circadiano de <i>E. coli</i>, apenas.' },
      { letra: 'C', texto: 'metabolismo de <i>S. elongatus</i> e do ciclo circadiano de <i>E. coli</i>.' },
      { letra: 'D', texto: 'ciclo circadiano de <i>S. elongatus</i> e do metabolismo de <i>E. coli</i>.', explicacao: 'Correta! A <i>E. coli</i> transgênica mantém o próprio genoma (com os genes do seu metabolismo) e recebe os genes do relógio circadiano da cianobactéria. Ela não tinha genes de ciclo circadiano próprios, pois é um organismo não circadiano.' },
      { letra: 'E', texto: 'ciclo circadiano de <i>S. elongatus</i> e do ciclo circadiano de <i>E. coli</i>.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-093', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 93,
    disciplina: 'Biologia', conteudo: 'bio-4a7', subtopico: 'Aves (glândula uropigial)', dificuldade: 'media',
    enunciado: `<p>Os funcionários de um zoológico observaram um aumento na taxa de mortalidade de aves aquáticas por afogamento. Um grupo de biólogos analisou o comportamento das aves por várias semanas e observou que elas apresentavam dificuldade de flutuação, por causa do encharcamento das penas com água.</p>
      <p>O aumento na taxa de mortalidade dessas aves estava associado a uma redução na</p>`,
    alternativas: [
      { letra: 'A', texto: 'dilatação do papo.' },
      { letra: 'B', texto: 'reposição de penas das asas.' },
      { letra: 'C', texto: 'secreção da glândula uropigial.', explicacao: 'Correta! A glândula uropigial, na base da cauda das aves, produz uma secreção oleosa que a ave espalha nas penas com o bico, impermeabilizando-as. Com menos secreção, as penas se encharcam e a ave perde a flutuação.' },
      { letra: 'D', texto: 'formação da membrana natatória.' },
      { letra: 'E', texto: 'largura das cavidades de ossos pneumáticos.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-094', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 94,
    disciplina: 'Física', conteudo: 'fis-4a1', subtopico: 'Potência elétrica', dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-094.webp',
    textoApoio: TEXTO_ENEM_2025_NAT_94,
    enunciado: `<p>Considerando a ordem das tentativas, quantas atividades a estudante conseguiu realizar sem queimar o fusível?</p>`,
    alternativas: [
      { letra: 'A', texto: '4' },
      { letra: 'B', texto: '3' },
      { letra: 'C', texto: '2' },
      { letra: 'D', texto: '1', explicacao: 'Correta! A régua suporta P<sub>máx</sub> = U · i = 110 × 20 = 2 200 W. Computador + condicionador = 1 350 W. Com a impressora: 1 350 + 660 = 2 010 W (funciona). Com a cafeteira: 1 350 + 900 = 2 250 W &gt; 2 200 W, e o fusível se rompe; por isso só a 1ª atividade foi realizada.' },
      { letra: 'E', texto: '0' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-095', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 95,
    disciplina: 'Física', conteudo: 'fis-2b2', subtopico: 'Propagação de calor', dificuldade: 'facil',
    textoApoio: TEXTO_ENEM_2025_NAT_95,
    enunciado: `<p>Nesse contexto, o processo de transferência de calor para as mariposas que independe da presença de fluidos é a</p>`,
    alternativas: [
      { letra: 'A', texto: 'reflexão.' },
      { letra: 'B', texto: 'refração.' },
      { letra: 'C', texto: 'irradiação.', explicacao: 'Correta! A irradiação transfere calor por ondas eletromagnéticas (principalmente infravermelho) e não precisa de meio material, ao contrário da condução e da convecção (esta exige um fluido). Reflexão, refração e dispersão nem são processos de transferência de calor.' },
      { letra: 'D', texto: 'dispersão.' },
      { letra: 'E', texto: 'convecção.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-096', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 96,
    disciplina: 'Biologia', conteudo: ['bio-4a6', 'bio-4b1'], subtopico: 'Anfíbios e cadeia alimentar', dificuldade: 'facil',
    enunciado: `<p>Os sapinhos-ponta-de-flecha constituem um grupo de espécies encontradas na América Central e do Sul. Seus venenos são obtidos por meio do consumo de algumas formigas e cupins que se alimentam de plantas que contêm esses venenos. Esses anfíbios são usados para envenenar as flechas das zarabatanas dos caçadores nativos. Quando capturados e criados em condições artificiais, ou quando nascidos em cativeiro, não são tóxicos.</p>
      <p><small>BADIO, B. et al. Epibatidine: Discovery and Definition as a Potent Analgesic and Nicotinic Agonist. <b>Med. Chem. Res.</b>, n. 4, 1994 (adaptado).</small></p>
      <p>A perda da capacidade de se obter a toxina nos nascidos em cativeiro é causada pela</p>`,
    alternativas: [
      { letra: 'A', texto: 'diferença de umidade entre os ambientes.' },
      { letra: 'B', texto: 'ausência de alimentação natural.', explicacao: 'Correta! O texto diz que o veneno vem da dieta: os sapos o obtêm ao comer formigas e cupins que se alimentam de plantas tóxicas. Em cativeiro, sem essas presas, eles não acumulam a toxina.' },
      { letra: 'C', texto: 'adaptação ao novo ambiente.' },
      { letra: 'D', texto: 'mudança de comportamento.' },
      { letra: 'E', texto: 'variabilidade genética.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-097', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 97,
    disciplina: 'Biologia', conteudo: 'bio-3b3', subtopico: 'Vacinas', dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-097.webp',
    enunciado: `<p>A produção de vacinas exige uma sequência de procedimentos, além do cumprimento estrito de verificações de segurança. No esquema, estão demonstradas as etapas básicas realizadas para a fabricação de uma vacina utilizando a tecnologia tradicional e o efeito dela no organismo.</p>
      <p>O antígeno utilizado na vacina causa um efeito protetor contra o vírus porque</p>`,
    alternativas: [
      { letra: 'A', texto: 'mata o vírus pela ligação.' },
      { letra: 'B', texto: 'aglutina o vírus por associação.' },
      { letra: 'C', texto: 'contém imunoglobulinas de defesa.' },
      { letra: 'D', texto: 'induz a produção de proteínas neutralizadoras.', explicacao: 'Correta! O vírus inativado da vacina funciona como antígeno: estimula a imunidade ativa, levando os linfócitos B a produzir anticorpos (proteínas) que neutralizam o vírus, além de gerar células de memória.' },
      { letra: 'E', texto: 'mantém a quantidade de anticorpos preexistentes.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-098', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 98,
    disciplina: 'Biologia', conteudo: 'bio-4b5', subtopico: 'Espécies invasoras', dificuldade: 'facil',
    enunciado: `<p>O bioma Cerrado é caracterizado por apresentar ampla e natural diversidade de espécies vegetais. Nos últimos tempos, o homem vem modificando esse cenário pela inserção de plantas exóticas nesse ambiente. Exemplo disso é o cultivo do capim-gordura, nativo do continente africano e utilizado nesse tipo de ecossistema como forma de pastagem. É importante ressaltar que essa espécie vegetal é capaz de se espalhar por grandes áreas, devido à sua agressividade e poder competitivo.</p>
      <p><small>CARLOS JR., L. A.; BARBOSA, N. P. U.; FERNANDES, G. W. O capim-gordura e as invasões no Cerrado brasileiro. <b>Jornal do Biólogo</b>, mar.-jun. 2008 (adaptado).</small></p>
      <p>Em longo prazo, essa ação do homem pode gerar qual consequência?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Diversificar nichos ecológicos.' },
      { letra: 'B', texto: 'Assorear as nascentes do bioma.' },
      { letra: 'C', texto: 'Dificultar a infiltração de água na terra.' },
      { letra: 'D', texto: 'Diminuir as espécies nativas do bioma.', explicacao: 'Correta! Uma espécie exótica invasora, agressiva e competitiva, ocupa o espaço e os recursos das plantas nativas (competição), reduzindo a diversidade de espécies nativas do Cerrado.' },
      { letra: 'E', texto: 'Contribuir com a redução das queimadas.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-099', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 99,
    disciplina: 'Biologia', conteudo: 'bio-4b3', subtopico: 'Biomas brasileiros', dificuldade: 'media',
    enunciado: `<p>O monstro de gila, um lagarto encontrado em um deserto dos Estados Unidos, apresenta adaptações à falta de alimento nesse ambiente. Esse lagarto possui um hormônio que controla os níveis de açúcar em seu próprio sangue. Foi observado que esse hormônio também controla os níveis de açúcar no sangue de pessoas diabéticas.</p>
      <p><small>RUSSELL, C. Ozempic e outros remédios inspirados em veneno de animais. Disponível em: www.bbc.com. Acesso em: 6 dez. 2024 (adaptado).</small></p>
      <p>Considerando que animais de um mesmo grupo taxonômico podem apresentar características adaptativas semelhantes em ambientes similares, onde seria mais provável encontrar lagartos com essas características no território brasileiro?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Cerrado.' },
      { letra: 'B', texto: 'Pampas.' },
      { letra: 'C', texto: 'Caatinga.', explicacao: 'Correta! O monstro de gila vive num deserto, ambiente seco e de pouco alimento. No Brasil, o bioma mais parecido é a Caatinga, semiárida, com chuvas escassas e irregulares e longos períodos de seca.' },
      { letra: 'D', texto: 'Restinga.' },
      { letra: 'E', texto: 'Pantanal.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-100', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 100,
    disciplina: 'Química', conteudo: 'qui-1b4', subtopico: 'Destilação (água destilada)', dificuldade: 'facil',
    enunciado: `<p>Existe um processo de purificação de água em que são removidos os sais dissolvidos. A água que passa por esse processo é muito utilizada em laboratórios de química, em indústrias (como solvente), em baterias de carros etc. Entretanto, esse tipo de água não é adequado para ingestão, pois pode causar problemas de saúde, como carência iônica e diarreia.</p>
      <p>Essa água é chamada de</p>`,
    alternativas: [
      { letra: 'A', texto: 'dura.' },
      { letra: 'B', texto: 'pesada.' },
      { letra: 'C', texto: 'sanitária.' },
      { letra: 'D', texto: 'destilada.', explicacao: 'Correta! Na destilação, a água evapora e é condensada, deixando para trás os sais dissolvidos. A água destilada é usada em laboratórios e baterias, mas não é indicada para beber por não ter os sais minerais.' },
      { letra: 'E', texto: 'oxigenada.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-101', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 101,
    disciplina: 'Biologia', conteudo: 'bio-3b9', subtopico: 'Visão (pupila e retina)', dificuldade: 'facil',
    enunciado: `<p><b>Por que os olhos ficam vermelhos em algumas fotografias?</b></p>
      <p>Em fotos tiradas com câmeras fotográficas antigas, por vezes as pessoas aparecem com os olhos vermelhos. Isso ocorre porque a luz do flash da câmera incide diretamente no globo ocular, sendo refletida por uma região repleta de vasos sanguíneos.</p>
      <p><small>Disponível em: www.uol.com.br. Acesso em: 14 jun. 2017 (adaptado).</small></p>
      <p>Esse efeito é mais comum à noite ou em lugares pouco iluminados porque, com a pupila</p>`,
    alternativas: [
      { letra: 'A', texto: 'dilatada, chega mais luz à retina.', explicacao: 'Correta! No escuro, a pupila se dilata (midríase) para captar mais luz. Assim, mais luz do flash atinge a retina, muito vascularizada, e é refletida em vermelho de volta para a câmera.' },
      { letra: 'B', texto: 'retraída, chega mais luz vermelha à retina.' },
      { letra: 'C', texto: 'retraída, chega mais luz vermelha aos bastonetes.' },
      { letra: 'D', texto: 'retraída, chegam menos luzes azul e verde aos cones.' },
      { letra: 'E', texto: 'dilatada, chegam menos luzes azul e verde aos bastonetes.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-102', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 102,
    disciplina: 'Biologia', conteudo: 'bio-c1', subtopico: 'Intoxicação alimentar (tetrodotoxina)', dificuldade: 'media',
    enunciado: `<p>O <i>sashimi</i> (filé de peixe cru) de baiacu é uma iguaria muito apreciada no Japão. Entretanto, sua ingestão pode causar a morte por parada respiratória, pois esse peixe contém uma potente neurotoxina termoestável, a tetrodotoxina, que é produzida e armazenada nas gônadas e vísceras.</p>
      <p>Que ação poderia evitar essa intoxicação?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Criar os peixes em cativeiro.' },
      { letra: 'B', texto: 'Realizar a pesca com redes.' },
      { letra: 'C', texto: 'Consumir peixes cozidos ou fritos.' },
      { letra: 'D', texto: 'Preparar o peixe em condições adequadas de higiene.' },
      { letra: 'E', texto: 'Manusear o peixe sem provocar o rompimento dos órgãos internos.', explicacao: 'Correta! A toxina fica armazenada nas gônadas e vísceras; se esses órgãos não forem rompidos, ela não contamina o filé. Cozinhar não adianta, pois a toxina é termoestável, e higiene não elimina uma toxina produzida pelo próprio peixe.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-103', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 103,
    disciplina: 'Biologia', conteudo: 'bio-2b2', subtopico: 'Lisossomos', dificuldade: 'facil',
    enunciado: `<p>A deficiência da enzima lipase ácida causa uma doença em que o portador apresenta células que não degradam colesterol esterificado nem triglicerídeos, resultando no depósito desses compostos em diversos órgãos, principalmente no fígado.</p>
      <p><small>ANDERSON, R. A. et al. <i>In Situ</i> Localization of the Genetic Locus Encoding [...]. <b>Genomics</b>, n. 1, jan. 1993 (adaptado).</small></p>
      <p>Essa doença resulta da insuficiência funcional de qual estrutura celular?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Lisossomos.', explicacao: 'Correta! A lipase ácida é uma enzima digestiva que atua em pH ácido, dentro dos lisossomos. Sem ela, os lisossomos não degradam lipídios, que se acumulam nas células (uma doença de depósito lisossômico).' },
      { letra: 'B', texto: 'Ribossomos.' },
      { letra: 'C', texto: 'Mitocôndrias.' },
      { letra: 'D', texto: 'Peroxissomos.' },
      { letra: 'E', texto: 'Retículo endoplasmático liso.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-104', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 104,
    disciplina: 'Biologia', conteudo: 'bio-4b4', subtopico: 'Ciclo do carbono', dificuldade: 'facil',
    enunciado: `<p>A quantidade de CO<sub>2</sub> na atmosfera da Terra aumentou em 50%, e a temperatura está agora cerca de 1,2 °C mais quente em comparação ao século XIX. O ritmo de aumento da temperatura precisa diminuir se quisermos evitar as piores consequências das mudanças climáticas. Cientistas afirmam que o aquecimento global precisa ser mantido em 1,5 °C até o ano 2100. No entanto, a menos que outras ações sejam tomadas, o planeta ainda pode aquecer mais de 2 °C até o final deste século. Na prática, os países precisam enfrentar as mudanças climáticas com ações mitigadoras, que reduzam tanto as emissões quanto os níveis de CO<sub>2</sub> na atmosfera.</p>
      <p><small>Um guia rápido para entender as mudanças climáticas. Disponível em: www.bbc.com. Acesso em: 6 dez. 2021 (adaptado).</small></p>
      <p>Qual ação mitigadora auxilia na remoção desse gás presente na atmosfera, reduzindo seus níveis?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Plantar mais árvores.', explicacao: 'Correta! As árvores em crescimento retiram CO<sub>2</sub> da atmosfera pela fotossíntese e fixam o carbono na biomassa (sequestro de carbono). As demais ações só reduzem novas emissões; não removem o CO<sub>2</sub> que já está no ar.' },
      { letra: 'B', texto: 'Instalar mais usinas eólicas.' },
      { letra: 'C', texto: 'Ampliar o uso de energia solar.' },
      { letra: 'D', texto: 'Manter os combustíveis fósseis no solo.' },
      { letra: 'E', texto: 'Produzir menos resíduos sólidos urbanos.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-105', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 105,
    disciplina: 'Química', conteudo: 'qui-3a4', subtopico: 'Solubilidade de gases (poluição térmica)', dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-105.webp',
    enunciado: `<p>As usinas termonucleares são aquelas que produzem energia elétrica a partir da geração de energia térmica proveniente das reações nucleares. Normalmente, essas usinas funcionam por meio de dois circuitos, denominados circuito primário (vaso de pressão, pressurizador e bomba) e circuito secundário (gerador de vapor, turbina, condensador, tanque de alimentação e bombas), além de um sistema de água de refrigeração, formado por uma bomba ligada a uma fonte hídrica natural.</p>
      <p>Durante a operação da usina, se o sistema de água de refrigeração funcionar de forma ineficiente pode causar poluição térmica, comprometendo a vida no ecossistema aquático.</p>
      <p><small>Disponível em: www.eletronuclear.gov.br. Acesso em: 29 nov. 2021 (adaptado).</small></p>
      <p>Para o ecossistema aquático, a ineficiência do sistema de água de refrigeração tem como consequência a</p>`,
    alternativas: [
      { letra: 'A', texto: 'diminuição do pH.' },
      { letra: 'B', texto: 'liberação de gases poluentes.' },
      { letra: 'C', texto: 'contaminação por combustíveis.' },
      { letra: 'D', texto: 'liberação de elementos radioativos.' },
      { letra: 'E', texto: 'diminuição da solubilidade do gás oxigênio.', explicacao: 'Correta! A água de refrigeração volta mais quente para o rio ou lago (poluição térmica). A solubilidade dos gases na água diminui com o aumento da temperatura, então há menos O<sub>2</sub> dissolvido para os organismos aquáticos.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-106', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 106,
    disciplina: 'Química', conteudo: ['qui-2a2', 'qui-2a4'], subtopico: 'Fórmulas de ácidos e sais', dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-106.webp',
    enunciado: `<p>No início do século XX, as fórmulas das substâncias eram representadas de modo diferente do atual. A figura apresenta uma fotografia bem antiga (1909) que registra uma aula de química ministrada em um colégio em Santos (SP). Um olhar mais atento permite identificar como os compostos químicos eram representados.</p>
      <p>O nitrogênio era chamado de azoto e representado pelo símbolo Az. Vê-se na lousa a equação representativa da adição do oxigênio atômico (O) ao monóxido de nitrogênio (AzO) com a formação de dióxido de nitrogênio (AzO<sup>2</sup>). Analogamente, o nitrato de sódio era representado por NaAzO<sup>3</sup>.</p>
      <p><small>Disponível em: www.novomilenio.inf.br. Acesso em: 29 ago. 2014 (adaptado).</small></p>
      <p>Em 1909, as representações das substâncias ácido nítrico e cloreto de cálcio, tendo por base essas informações e seguindo a mesma lógica, seriam, respectivamente:</p>`,
    alternativas: [
      { letra: 'A', texto: 'HAzO<sup>3</sup> e CaCl<sup>2</sup>', explicacao: 'Correta! Na notação antiga, o índice era escrito em sobrescrito e N era Az. Ácido nítrico, HNO<sub>3</sub>, vira HAzO<sup>3</sup>; cloreto de cálcio, CaCl<sub>2</sub> (Ca<sup>2+</sup> e dois Cl<sup>−</sup>), vira CaCl<sup>2</sup>.' },
      { letra: 'B', texto: 'HAz<sup>3</sup>O e Ca<sup>2</sup>Cl' },
      { letra: 'C', texto: 'H<sup>3</sup>AzO<sup>4</sup> e CaCl' },
      { letra: 'D', texto: 'HAz<sup>3</sup>O e KCl<sup>2</sup>' },
      { letra: 'E', texto: 'HAzO<sup>2</sup> e KCl' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-107', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 107,
    disciplina: 'Biologia', conteudo: 'bio-1b3', subtopico: 'Codominância', dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-107.webp',
    enunciado: `<p>A figura apresenta a herança genética de uma característica a partir do cruzamento de insetos de uma mesma espécie.</p>
      <p>Qual alternativa representa a proporção fenotípica da prole resultante do cruzamento entre indivíduos da primeira geração?</p>`,
    alternativas: [
      { letra: 'A', texto: '<img src="imagens/estudo/enem-2025-107-a.webp" alt="Alternativa A: quatro insetos com pintas, machos e fêmeas">' },
      { letra: 'B', texto: '<img src="imagens/estudo/enem-2025-107-b.webp" alt="Alternativa B: quatro insetos com listra, machos e fêmeas">' },
      { letra: 'C', texto: '<img src="imagens/estudo/enem-2025-107-c.webp" alt="Alternativa C: quatro insetos com pintas e listra, machos e fêmeas">' },
      { letra: 'D', texto: '<img src="imagens/estudo/enem-2025-107-d.webp" alt="Alternativa D: dois insetos com pintas e dois com listra, machos e fêmeas">' },
      { letra: 'E', texto: '<img src="imagens/estudo/enem-2025-107-e.webp" alt="Alternativa E: um inseto com pintas, um com listra e dois com pintas e listra, machos e fêmeas">', explicacao: 'Correta! Os filhos da primeira geração mostram as duas características dos pais ao mesmo tempo (pintas e listra): é codominância, e todos são heterozigotos. O cruzamento entre eles dá 1/4 com pintas, 2/4 com pintas e listra e 1/4 com listra (1 : 2 : 1), em machos e fêmeas.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-108', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 108,
    disciplina: 'Física', conteudo: 'fis-3b1', subtopico: 'Força de atrito', dificuldade: 'media',
    enunciado: `<p>Para transportar uma caixa do primeiro para o segundo piso de uma construção, um trabalhador precisará arrasta-lá sobre um plano inclinado. O trabalhador começa a arrastar a caixa no primeiro piso, exercendo sobre ela uma força de grande intensidade, paralela ao seu deslocamento. Na medida em que a caixa sobe o plano inclinado, ele decide reduzir a força sobre ela, arrastando-a lentamente até chegar ao segundo piso. Considere que a caixa permanece em movimento nos encontros dos pisos com o plano inclinado, e que a rugosidade entre as superfícies permanece a mesma durante todo o percurso.</p>
      <p>O comportamento da força de atrito entre a caixa e o chão no plano inclinado é representado em:</p>`,
    alternativas: [
      { letra: 'A', texto: '<img src="imagens/estudo/enem-2025-108-a.webp" alt="Alternativa A: gráfico da força de atrito pelo tempo que cai, sobe e fica constante">' },
      { letra: 'B', texto: '<img src="imagens/estudo/enem-2025-108-b.webp" alt="Alternativa B: gráfico da força de atrito pelo tempo que sobe, cai e fica constante">' },
      { letra: 'C', texto: '<img src="imagens/estudo/enem-2025-108-c.webp" alt="Alternativa C: gráfico da força de atrito constante ao longo do tempo">', explicacao: 'Correta! Com a caixa sempre em movimento, o atrito é cinético: F<sub>at</sub> = μ · N, com N = P · cos θ no plano inclinado. Como μ e a inclinação não mudam, o atrito é constante, não importa a força que o trabalhador faça.' },
      { letra: 'D', texto: '<img src="imagens/estudo/enem-2025-108-d.webp" alt="Alternativa D: gráfico da força de atrito constante e depois decrescente">' },
      { letra: 'E', texto: '<img src="imagens/estudo/enem-2025-108-e.webp" alt="Alternativa E: gráfico da força de atrito que sobe e depois decresce">' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-109', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 109,
    disciplina: 'Química', conteudo: 'qui-4b1', subtopico: 'Descarboxilação', dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-109.webp',
    legenda: '<small>MAZZETTO, S. E.; LOMONACO, D.; MELE, G. Óleo da castanha de caju: oportunidades e desafios no contexto do desenvolvimento e sustentabilidade industrial. <b>Química Nova</b>, n. 3, 2009 (adaptado).</small>',
    enunciado: `<p>O fruto do cajueiro é um aquênio repleto de um líquido escuro, quase preto, cáustico e inflamável. Esse líquido da casca da castanha do caju (LCC) representa aproximadamente 25% da massa da castanha e é um subproduto de agronegócio do caju. Quando submetido a altas temperaturas, o ácido anacárdico presente no LCC é convertido a cardanol, que recebe a denominação de LCC técnico, conforme o esquema.</p>
      <p>O LCC técnico é produzido por meio de uma reação orgânica do tipo</p>`,
    alternativas: [
      { letra: 'A', texto: 'hidrólise.' },
      { letra: 'B', texto: 'fenilação.' },
      { letra: 'C', texto: 'esterificação.' },
      { letra: 'D', texto: 'hidrogenação.' },
      { letra: 'E', texto: 'descarboxilação.', explicacao: 'Correta! No esquema, o ácido anacárdico perde o grupo carboxila (–COOH), que sai como CO<sub>2</sub>, e forma o cardanol. A perda de CO<sub>2</sub> de um ácido carboxílico por aquecimento é uma descarboxilação.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-110', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 110,
    disciplina: 'Química', conteudo: 'qui-4b5', subtopico: 'Meia-vida', dificuldade: 'facil',
    enunciado: `<p>A química nuclear é uma importante ferramenta na produção de substâncias utilizadas na área da saúde humana. A radiação emitida pelo cobalto-60 é utilizada na medicina como ferramenta de diagnóstico e no tratamento do câncer. No entanto, esse radioisótopo tem um tempo de armazenamento limitado, pois seu tempo de meia-vida é de 5,3 anos. Considere um frasco com uma amostra contendo 2,00 mg de cobalto-60, armazenado durante um período de 26,5 anos.</p>
      <p>A massa de cobalto-60, em miligrama, que restará ao final desse tempo é mais próxima de</p>`,
    alternativas: [
      { letra: 'A', texto: '2,00 mg.' },
      { letra: 'B', texto: '1,00 mg.' },
      { letra: 'C', texto: '0,40 mg.' },
      { letra: 'D', texto: '0,13 mg.' },
      { letra: 'E', texto: '0,06 mg.', explicacao: 'Correta! 26,5 ÷ 5,3 = 5 meias-vidas. m = 2,00 ÷ 2<sup>5</sup> = 2,00 ÷ 32 ≈ 0,0625 mg ≈ 0,06 mg.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-111', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 111,
    disciplina: 'Biologia', conteudo: 'bio-4b5', subtopico: 'Eutrofização', dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-111.webp',
    legenda: '<small>Disponível em: www.engquimicasantossp.com.br. Acesso em: 11 fev. 2015 (adaptado).</small>',
    enunciado: `<p>O esquema apresenta as etapas do processo de biodigestão, uma forma de dar um destino sustentável a excrementos animais e restos de comida produzidos em áreas de criação de gado e porcos confinados.</p>
      <p>Dar destino sustentável às sobras, conforme apresentado na etapa 4, ajuda a evitar a</p>`,
    alternativas: [
      { letra: 'A', texto: 'bioacumulação de toxinas em plantas.' },
      { letra: 'B', texto: 'eutrofização dos corpos de água.', explicacao: 'Correta! Excrementos e restos de alimentos são ricos em matéria orgânica e nutrientes (N e P). Lançados em rios e lagos, causariam eutrofização; usados como fertilizante (etapa 4), esses nutrientes vão para o solo em vez de ir para a água.' },
      { letra: 'C', texto: 'destruição da camada de ozônio.' },
      { letra: 'D', texto: 'ocorrência de inversão térmica.' },
      { letra: 'E', texto: 'produção de chuva ácida.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-112', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 112,
    disciplina: 'Biologia', conteudo: 'bio-1a2', subtopico: 'Vitaminas (vitamina A)', dificuldade: 'facil',
    enunciado: `<p><i>Golden Rice</i>, ou arroz dourado, é uma variedade de arroz enriquecida em betacaroteno, precursor da vitamina A. Foi desenvolvida para ajudar a combater a doença decorrente da deficiência dessa vitamina. Para a obtenção dessa variedade de arroz, foram utilizados métodos de engenharia genética.</p>
      <p><small>BORÉM, A.; SANTOS, F. R. <b>Entendendo a biotecnologia</b>. Viçosa: UFV, 2008 (adaptado).</small></p>
      <p>Esse alimento contribui para diminuir a carência associada a qual doença?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Hemofilia.' },
      { letra: 'B', texto: 'Escorbuto.' },
      { letra: 'C', texto: 'Raquitismo.' },
      { letra: 'D', texto: 'Cegueira noturna.', explicacao: 'Correta! A vitamina A (retinol) forma o retinal, parte da rodopsina dos bastonetes da retina. Sua falta causa cegueira noturna (e xeroftalmia). Escorbuto é falta de vitamina C; raquitismo, de vitamina D; anemia perniciosa, de B<sub>12</sub>.' },
      { letra: 'E', texto: 'Anemia perniciosa.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-113', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 113,
    disciplina: 'Física', conteudo: 'fis-3a5', subtopico: 'Campo elétrico (força sobre elétron)', dificuldade: 'media',
    imagem: ['imagens/estudo/enem-2025-113-1.webp', 'imagens/estudo/enem-2025-113-2.webp'],
    legenda: ['', 'Figura 2'],
    legendaGeral: '<small>Grupo de Reelaboração do Ensino de Física. <b>Física 3: eletromagnetismo</b>. São Paulo: Edusp, 2000 (adaptado).</small>',
    enunciado: `<p>A Figura 1 apresenta o esquema de um tubo de imagem em que um filamento, na posição A, libera elétrons por efeito termiônico. Esses elétrons formam um feixe estreito, que é acelerado por campos elétricos em direção à parte interna da tela. Nesse caminho, o feixe de elétrons passa por outro campo elétrico, na região B, atingindo, em seguida, a parte interna da tela do tubo, a qual é recoberta por um material que emite luz ao receber o impacto dos elétrons.</p>
      <p>Na Figura 2, a carga negativa representa o feixe de elétrons que é acelerado e, posteriormente, atinge um ponto da tela. O campo elétrico na região B apresenta a seguinte configuração:</p>
      <p>Nessa situação, qual ponto da tela será atingido pelo feixe de elétrons?</p>`,
    alternativas: [
      { letra: 'A', texto: '1' },
      { letra: 'B', texto: '2', explicacao: 'Correta! A força elétrica sobre carga negativa tem sentido oposto ao do campo: F = q · E com q &lt; 0. Como o campo na região B aponta para cima, os elétrons são desviados para baixo e atingem o ponto 2.' },
      { letra: 'C', texto: '3' },
      { letra: 'D', texto: '4' },
      { letra: 'E', texto: '5' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-114', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 114,
    disciplina: 'Física', conteudo: ['fis-1a3', 'fis-1a4'], subtopico: 'Ressonância', dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-114.webp',
    legenda: '<small>Disponível em: https://artedafisicapibid.blogspot.com. Acesso em: 23 nov. 2021 (adaptado).</small>',
    enunciado: `<p>A tirinha ilustra um processo físico em que uma onda sonora, produzida pela Mônica, causa a quebra das taças de cristal. O fenômeno ondulatório que provoca a quebra das taças só é possível em razão de uma característica da voz produzida pela Mônica naquele momento, que, diferentemente do que sugere a tirinha, não está relacionada à sua intensidade.</p>
      <p>Esse fenômeno e a característica associada à voz da Mônica são, respectivamente,</p>`,
    alternativas: [
      { letra: 'A', texto: 'reflexão e comprimento de onda.' },
      { letra: 'B', texto: 'ressonância e frequência.', explicacao: 'Correta! A taça quebra por ressonância: quando o som tem a mesma frequência natural de vibração da taça, ela absorve energia e vibra com amplitude cada vez maior até se romper. A característica decisiva é a frequência da voz, não a intensidade.' },
      { letra: 'C', texto: 'interferência e velocidade.' },
      { letra: 'D', texto: 'ressonância e timbre.' },
      { letra: 'E', texto: 'reflexão e amplitude.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-115', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 115,
    disciplina: 'Química', conteudo: ['qui-2b3', 'qui-4b1'], subtopico: 'Oxidação de álcool secundário', dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-115.webp',
    legenda: '<b>Borneol</b><br><small>SANTOS, A. P. B. et al. Oxidação do borneol à cânfora com água sanitária: um experimento simples de baixo custo e limpo. <b>Química Nova</b>, n. 6, 2009 (adaptado).</small>',
    enunciado: `<p>Em uma aula prática de química orgânica, um professor identificou os frascos de várias substâncias apenas por suas fórmulas moleculares. Em seguida, apresentou a representação tridimensional da molécula do borneol, um álcool secundário, conforme a figura. Ele explicou que, quando oxidado, o borneol dá origem à cânfora, uma cetona usada desde a Antiguidade como incenso e no preparo de medicamentos. Finalmente, o professor solicitou que os alunos identificassem o frasco contendo a substância cânfora.</p>
      <p>O frasco contendo cânfora apresenta a fórmula molecular:</p>`,
    alternativas: [
      { letra: 'A', texto: 'C<sub>9</sub>H<sub>16</sub>O' },
      { letra: 'B', texto: 'C<sub>9</sub>H<sub>17</sub>O' },
      { letra: 'C', texto: 'C<sub>10</sub>H<sub>16</sub>O', explicacao: 'Correta! O borneol tem 10 carbonos (biciclo com 3 metilas) e fórmula C<sub>10</sub>H<sub>18</sub>O. Na oxidação do álcool secundário a cetona, o carbono da hidroxila perde 2 H (o do OH e o ligado ao carbono): C<sub>10</sub>H<sub>18</sub>O → C<sub>10</sub>H<sub>16</sub>O.' },
      { letra: 'D', texto: 'C<sub>10</sub>H<sub>16</sub>O<sub>2</sub>' },
      { letra: 'E', texto: 'C<sub>10</sub>H<sub>18</sub>O<sub>2</sub>' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-116', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 116,
    disciplina: 'Biologia', conteudo: 'bio-4b3', subtopico: 'Endemismo', dificuldade: 'media',
    enunciado: `<p>As cangas são ambientes resultantes da atuação, ao longo de milhões de anos, de chuvas, enxurradas, calor e ventos em rochas ricas em ferro. São compostas por até 90% de óxidos de ferro e contêm solos muito ácidos, rasos, com reduzidos índices de fertilidade e temperaturas que atingem quase 70 °C na superfície. Ao contrário do que se imagina, esse tipo de ambiente abriga comunidades de plantas e animais com elevado número de espécies e distribuição restrita.</p>
      <p><small>CARMO, F. F. et al. <b>Ilhas de ferro estratégicas para a conservação</b>. Disponível em: http://cienciahoje.org.br. Acesso em: 2 dez. 2018 (adaptado).</small></p>
      <p>A seleção adaptativa nesses ambientes favorece a ocorrência de espécies</p>`,
    alternativas: [
      { letra: 'A', texto: 'exóticas.' },
      { letra: 'B', texto: 'migratórias.' },
      { letra: 'C', texto: 'endêmicas.', explicacao: 'Correta! Condições extremas e isoladas (solo ácido, pobre, muito quente) selecionam espécies especializadas, que só existem ali. Espécies com "distribuição restrita" a um local são chamadas endêmicas.' },
      { letra: 'D', texto: 'dominantes.' },
      { letra: 'E', texto: 'generalistas.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-117', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 117,
    disciplina: 'Química', conteudo: 'qui-4a3', subtopico: 'Deslocamento de equilíbrio', dificuldade: 'facil',
    enunciado: `<p>Para a produção de titânio metálico ou dióxido de titânio puros, é necessário fazer a cloração do minério que contém dióxido de titânio, com o objetivo de separar esse óxido de outras substâncias presentes no minério. A principal reação química de cloração é representada por:</p>
      <p>TiO<sub>2</sub> (s) + 2 Cl<sub>2</sub> (g) ⇌ TiCl<sub>4</sub> (g) + O<sub>2</sub> (g) &nbsp;&nbsp; ΔH = +175 kJ/mol</p>
      <p>Depois da cloração, o tetracloreto de titânio é condensado e convertido, novamente, a dióxido de titânio.</p>
      <p>Após o sistema atingir o equilíbrio químico, como a formação do TiCl<sub>4</sub> pode ser favorecida?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Aumentando a pressão total do sistema.' },
      { letra: 'B', texto: 'Diminuindo a temperatura do sistema.' },
      { letra: 'C', texto: 'Aumentando a pressão parcial de O<sub>2</sub>.' },
      { letra: 'D', texto: 'Aumentando a pressão parcial de Cl<sub>2</sub>.', explicacao: 'Correta! Pelo princípio de Le Chatelier, aumentar a pressão parcial de um reagente (Cl<sub>2</sub>) desloca o equilíbrio no sentido direto, formando mais TiCl<sub>4</sub>. A pressão total não influi (2 mol de gás de cada lado), a reação é endotérmica (esfriar desfavorece) e o TiO<sub>2</sub> sólido não altera o equilíbrio.' },
      { letra: 'E', texto: 'Variando a quantidade de TiO<sub>2</sub>.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-118', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 118,
    disciplina: 'Física', conteudo: 'fis-2a1', subtopico: 'Pressão', dificuldade: 'facil',
    enunciado: `<p>A laje de um depósito de bebidas tem 50 m<sup>2</sup> de área útil de armazenamento e foi projetada para suportar pressões de até 10<sup>4</sup> Pa. O gerente do estabelecimento pretende armazenar um produto cuja densidade é 1 250 kg/m<sup>3</sup>. Considere a aceleração da gravidade igual a 10 m/s<sup>2</sup>.</p>
      <p>A altura máxima, em metro, de empilhamento do produto que essa laje é capaz de suportar é</p>`,
    alternativas: [
      { letra: 'A', texto: '0,16 m.' },
      { letra: 'B', texto: '0,50 m.' },
      { letra: 'C', texto: '0,80 m.', explicacao: 'Correta! A pressão de uma pilha uniforme sobre a laje é p = m · g / A = d · g · h (a área não importa). h = p / (d · g) = 10<sup>4</sup> / (1 250 × 10) = 0,80 m.' },
      { letra: 'D', texto: '1,60 m.' },
      { letra: 'E', texto: '8,00 m.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-119', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 119,
    disciplina: 'Física', conteudo: 'fis-4a2', subtopico: 'Geradores e associação', dificuldade: 'dificil',
    imagem: 'imagens/estudo/enem-2025-119.webp',
    enunciado: `<p>Em uma comunidade rural, os moradores utilizam uma bomba-d’água alimentada por 100 V de tensão contínua, podendo variar em até 5 V. Um eletrotécnico pretende instalar placas fotovoltaicas para alimentar essa bomba. As placas são idênticas e cada uma apresenta tensão de operação igual a 34 V com corrente de 7,5 A. Além disso, cada placa apresenta 40 V de tensão elétrica, quando em circuito aberto. Assim, considerando que a placa descrita é um gerador não ideal, em circuito aberto ela pode ser representada conforme a figura.</p>
      <p>O eletrotécnico construiu um circuito que permite à bomba-d’água operar corretamente com o menor número possível de placas conectadas. Para isso, desenhou um diagrama no qual todas essas placas são representadas como um único gerador não ideal, com a especificação das correspondentes características elétricas.</p>
      <p>O diagrama que representa o circuito construído pelo eletrotécnico é:</p>`,
    alternativas: [
      { letra: 'A', texto: '<img src="imagens/estudo/enem-2025-119-a.webp" alt="Alternativa A: gerador de 136 V com resistência interna de 3,2 Ω ligado à bomba">' },
      { letra: 'B', texto: '<img src="imagens/estudo/enem-2025-119-b.webp" alt="Alternativa B: gerador de 120 V com resistência interna de 2,4 Ω ligado à bomba">', explicacao: 'Correta! Cada placa: r = (40 − 34) / 7,5 = 0,8 Ω e opera com 34 V. Duas placas dão 68 V (pouco); três em série dão 3 × 34 = 102 V, dentro de 100 ± 5 V. O gerador equivalente tem ε = 3 × 40 = 120 V e r = 3 × 0,8 = 2,4 Ω.' },
      { letra: 'C', texto: '<img src="imagens/estudo/enem-2025-119-c.webp" alt="Alternativa C: gerador de 120 V com resistência interna de 5,3 Ω ligado à bomba">' },
      { letra: 'D', texto: '<img src="imagens/estudo/enem-2025-119-d.webp" alt="Alternativa D: gerador de 102 V com resistência interna de 2,4 Ω ligado à bomba">' },
      { letra: 'E', texto: '<img src="imagens/estudo/enem-2025-119-e.webp" alt="Alternativa E: gerador de 102 V com resistência interna de 5,3 Ω ligado à bomba">' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-120', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 120,
    disciplina: 'Física', conteudo: 'fis-2a4', subtopico: 'Movimento uniforme', dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-120.webp',
    legenda: '<small><b>Manual de referência e instalação</b>: sensor de barreira ativo. Disponível em: cs.ind.br. Acesso em: 2 dez. 2021 (adaptado).</small>',
    enunciado: `<p>A figura ilustra as informações contidas no manual de um sistema de alarme que utiliza transmissores e receptores de radiação eletromagnética para a detecção de movimento. O receptor é regulado pelo tempo de resposta, que corresponde ao intervalo de tempo necessário para o corpo do invasor atravessar completamente o feixe, de diâmetro d = 15 cm. Considere que a menor porção do corpo de um invasor é a sua posição de perfil, cuja espessura típica é 20 cm. São indicados cinco possíveis movimentos de um invasor e suas velocidades típicas, que devem ser observadas para a escolha do tempo de resposta.</p>
      <p>Nesse sistema, o menor tempo de resposta, em milissegundo, que garante a detecção de um possível invasor é mais próximo de</p>`,
    alternativas: [
      { letra: 'A', texto: '30 ms.' },
      { letra: 'B', texto: '70 ms.', explicacao: 'Correta! Para atravessar completamente o feixe, o corpo percorre 20 cm + 15 cm = 0,35 m. O caso mais rápido (5,0 m/s) exige o menor tempo: Δt = 0,35 / 5,0 = 0,07 s = 70 ms.' },
      { letra: 'C', texto: '300 ms.' },
      { letra: 'D', texto: '400 ms.' },
      { letra: 'E', texto: '700 ms.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-121', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 121,
    disciplina: 'Química', conteudo: ['qui-2a6', 'qui-2b5'], subtopico: 'Basicidade de aminas', dificuldade: 'media',
    enunciado: `<p>A dimetilamina é uma substância de elevada toxidez que entra em ebulição a 7 °C. Na madrugada de um dia frio, essa substância se espalhou por uma rodovia após um acidente de trânsito envolvendo um caminhão que transportava esse produto. Para minimizar a agressão ao meio ambiente, bem como evitar a evaporação da dimetilamina com a elevação da temperatura ao longo do dia, um químico considerou o uso de algumas substâncias ou misturas como água, vinagre, óleo de soja, sal de cozinha e bicarbonato de sódio.</p>
      <p>Dentre as opções apresentadas, o tratamento correto para minimizar esse problema é usar</p>`,
    alternativas: [
      { letra: 'A', texto: 'água.' },
      { letra: 'B', texto: 'vinagre.', explicacao: 'Correta! A dimetilamina é uma base orgânica. O ácido acético do vinagre a neutraliza, formando um sal (acetato de dimetilamônio), iônico e não volátil, o que impede a evaporação.' },
      { letra: 'C', texto: 'óleo de soja.' },
      { letra: 'D', texto: 'sal de cozinha.' },
      { letra: 'E', texto: 'bicarbonato de sódio.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-122', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 122,
    disciplina: 'Física', conteudo: 'fis-4b4', subtopico: 'Indução eletromagnética', dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2025-122.webp',
    legenda: '<small>PEREIRA, A. B. et al. <b>Fogões de indução</b>: montagem e testes de um circuito disponível. Disponível em: https://publicacoes.fatecsertaozinho.edu.br. Acesso em: 21 maio 2025 (adaptado).</small>',
    enunciado: `<p>O aquecimento em fogões por indução utiliza bobinas para produzir um campo magnético variável. Essa bobina se localiza abaixo do vidro cerâmico sobre o qual a panela se apoia. O mecanismo aquece apenas a panela que se encontra na zona de cozimento, o que é uma das principais vantagens em relação ao uso do fogão a gás ou de resistência elétrica.</p>
      <p>O uso do campo magnético variável tem a finalidade de</p>`,
    alternativas: [
      { letra: 'A', texto: 'imantar o material da panela por indução.' },
      { letra: 'B', texto: 'movimentar os átomos de ferro concentrados no fundo da panela.' },
      { letra: 'C', texto: 'emitir radiação eletromagnética, aquecendo a panela através do vidro cerâmico.' },
      { letra: 'D', texto: 'induzir corrente elétrica na parte inferior da panela, aquecendo-a por efeito Joule.', explicacao: 'Correta! Pela lei de Faraday, o fluxo magnético variável induz correntes elétricas (correntes de Foucault) no fundo metálico da panela. Essas correntes dissipam energia na resistência do metal (efeito Joule), aquecendo a panela.' },
      { letra: 'E', texto: 'gerar um fluxo de corrente de convecção no ar contido entre a região da bobina e o vidro cerâmico.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-124', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 124,
    disciplina: 'Química', conteudo: 'qui-4b4', subtopico: 'Pilhas (ddp)', dificuldade: 'dificil',
    textoApoio: TEXTO_ENEM_2025_NAT_124,
    enunciado: `<p>Os valores das diferenças de potencial-padrão das reações que representam o escurecimento e o clareamento do objeto de prata são, respectivamente:</p>`,
    alternativas: [
      { letra: 'A', texto: '+0,54 V e +2,37 V.' },
      { letra: 'B', texto: '+1,92 V e +0,99 V.', explicacao: 'Correta! Escurecimento: a prata é oxidada a Ag<sub>2</sub>S e o O<sub>2</sub> é reduzido: ΔE° = 1,23 − (−0,69) = +1,92 V. Clareamento: o alumínio é oxidado e o Ag<sub>2</sub>S é reduzido a Ag: ΔE° = −0,69 − (−1,68) = +0,99 V.' },
      { letra: 'C', texto: '−0,15 V e +5,43 V.' },
      { letra: 'D', texto: '+2,61 V e +1,29 V.' },
      { letra: 'E', texto: '+0,15 V e −1,29 V.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-125', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 125,
    disciplina: 'Química', conteudo: ['qui-3a2', 'qui-3a3'], subtopico: 'Estequiometria com gases e rendimento', dificuldade: 'dificil',
    enunciado: `<p>Apaixonada por culinária e química, uma chefe de cozinha calculou que, para promover o crescimento adequado da massa durante o cozimento de um bolo a 180 °C (453 K) e 1,00 atm, ela precisaria utilizar uma quantidade de fermento químico suficiente para produzir um volume de gás igual a 4,00 L. Com esse objetivo, ela escolheu utilizar o bicarbonato de amônio, um composto que, sob aquecimento, degrada-se em três gases distintos, que são os responsáveis pelo crescimento da massa. A decomposição do bicarbonato de amônio ocorre conforme a equação química apresentada e, nas condições do cozimento, seu rendimento é de 80%.</p>
      <p>NH<sub>4</sub>HCO<sub>3</sub> (s) → NH<sub>3</sub> (g) + CO<sub>2</sub> (g) + H<sub>2</sub>O (g)</p>
      <p>Considere que a mistura dos gases se comporta como gás ideal nas condições de cozimento utilizadas pela chefe.</p>
      <p>Dados: Massa molar do NH<sub>4</sub>HCO<sub>3</sub> = 79 g · mol<sup>−1</sup> e R = 0,082 atm · L · mol<sup>−1</sup> · K<sup>−1</sup>.</p>
      <p>A massa, em grama, de bicarbonato de amônio que ela deve utilizar é mais próxima de</p>`,
    alternativas: [
      { letra: 'A', texto: '2,3 g.' },
      { letra: 'B', texto: '3,5 g.', explicacao: 'Correta! n(gases) = PV/RT = (1 × 4,00) / (0,082 × 453) ≈ 0,108 mol. Cada mol de NH<sub>4</sub>HCO<sub>3</sub> dá 3 mol de gás: 0,036 mol; com rendimento de 80%: 0,036 / 0,8 ≈ 0,045 mol. Massa = 0,045 × 79 ≈ 3,5 g.' },
      { letra: 'C', texto: '5,9 g.' },
      { letra: 'D', texto: '6,8 g.' },
      { letra: 'E', texto: '8,9 g.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-126', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 126,
    disciplina: 'Física', conteudo: 'fis-3a1', subtopico: 'Composição de movimentos (vetores)', dificuldade: 'dificil',
    imagem: 'imagens/estudo/enem-2025-126.webp',
    enunciado: `<p>Segundo o princípio da independência dos movimentos, de Galileu, sempre que a velocidade resultante de um corpo puder ser decomposta em duas ou mais componentes perpendiculares entre si, cada um desses movimentos poderá ser analisado separadamente como se os outros não existissem. Esse princípio é muito útil para a simplificação de alguns problemas reais, em três dimensões.</p>
      <p>Considere um avião que, ao decolar, é instruído pela torre a atingir, em 6 minutos, uma posição de 20 km a Leste, 20 km a Norte e 1 km de altitude em relação ao ponto de decolagem, conforme a figura (fora de escala). No entanto, no instante da decolagem, começa a soprar um vento cujo vetor velocidade tem componentes 30 km/h para Leste, 20 km/h para Sul e 1 km/h de cima para baixo.</p>
      <p>Durante a ação do vento, a velocidade <i>v⃗</i> que o piloto deve estabelecer em relação ao ar para que o avião chegue à posição esperada no tempo indicado tem as componentes</p>`,
    alternativas: [
      { letra: 'A', texto: '230 km/h para Leste, 180 km/h para Sul e 9 km/h para baixo.' },
      { letra: 'B', texto: '230 km/h para Leste, 180 km/h para Norte e 9 km/h para cima.' },
      { letra: 'C', texto: '200 km/h para Oeste, 200 km/h para Norte e 10 km/h para cima.' },
      { letra: 'D', texto: '170 km/h para Leste, 220 km/h para Norte e 11 km/h para cima.', explicacao: 'Correta! Em 6 min = 0,1 h, a velocidade em relação ao solo deve ser 200 km/h Leste, 200 km/h Norte e 10 km/h para cima. Como v<sub>solo</sub> = v<sub>ar</sub> + v<sub>vento</sub>: Leste 200 − 30 = 170; Norte 200 + 20 = 220; vertical 10 + 1 = 11 km/h para cima.' },
      { letra: 'E', texto: '170 km/h para Leste, 180 km/h para Norte e 11 km/h para cima.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2025-127', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 127,
    disciplina: 'Química', conteudo: 'qui-4a2', subtopico: 'Catalisadores e energia de ativação', dificuldade: 'facil',
    enunciado: `<p>Nos processos de transformação e reciclagem de recursos naturais, as velocidades das reações químicas são estudadas pela cinética química. Uma reação A → B é realizada na presença e na ausência de uma enzima, com todas as demais condições permanecendo inalteradas. Considere que, no gráfico da variação de energia ao longo dessa reação, a linha contínua representa o avanço da reação na ausência da enzima, e a linha pontilhada, na presença da enzima.</p>
      <p>O gráfico que representa a situação descrita é:</p>`,
    alternativas: [
      { letra: 'A', texto: '<img src="imagens/estudo/enem-2025-127-a.webp" alt="Alternativa A: com enzima, energia dos reagentes maior e mesmo pico">' },
      { letra: 'B', texto: '<img src="imagens/estudo/enem-2025-127-b.webp" alt="Alternativa B: com enzima, mesmo pico e energia dos produtos maior">' },
      { letra: 'C', texto: '<img src="imagens/estudo/enem-2025-127-c.webp" alt="Alternativa C: com enzima, pico de energia mais baixo e mesmos reagentes e produtos">', explicacao: 'Correta! A enzima é um catalisador: oferece um caminho de menor energia de ativação (pico mais baixo, linha pontilhada), sem mudar a energia dos reagentes A e dos produtos B, ou seja, o ΔH é o mesmo.' },
      { letra: 'D', texto: '<img src="imagens/estudo/enem-2025-127-d.webp" alt="Alternativa D: com enzima, pico de energia mais alto">' },
      { letra: 'E', texto: '<img src="imagens/estudo/enem-2025-127-e.webp" alt="Alternativa E: com enzima, reagentes e produtos com energia maior e mesmo pico">' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2025-128', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 128,
    disciplina: 'Física', conteudo: 'fis-4a1', subtopico: 'Resistência e temperatura', dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-128.webp',
    enunciado: `<p>A resistência de um fio de platina pode ser usada para medir temperaturas entre 0 °C e 100 °C e já foi utilizada como referência para a escala internacional de temperatura. Para um sensor feito de platina, a relação entre a resistência e a temperatura pode ser descrita por uma equação do tipo <i>R</i>(<i>T</i>) = A + B<i>T</i>, em que <i>T</i> é a temperatura e A e B são constantes. O gráfico apresenta a dependência da resistência em função da temperatura para cinco diferentes sensores.</p>
      <p>Os sensores que apresentam maior sensibilidade são</p>`,
    alternativas: [
      { letra: 'A', texto: '1 e 2.' },
      { letra: 'B', texto: '1 e 3.' },
      { letra: 'C', texto: '2 e 3.' },
      { letra: 'D', texto: '2 e 4.' },
      { letra: 'E', texto: '2 e 5.', explicacao: 'Correta! A sensibilidade é a variação da resistência por grau, ou seja, a inclinação B da reta. As retas mais inclinadas são a do sensor 2 (de ≈ 75 Ω a ≈ 225 Ω) e a do sensor 5 (de ≈ 65 Ω a ≈ 145 Ω).' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-129', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 129,
    disciplina: 'Biologia', conteudo: ['bio-3a6', 'bio-4a1'], subtopico: 'Esquistossomose (hospedeiro intermediário)', dificuldade: 'media',
    textoApoio: TEXTO_ENEM_2025_NAT_129,
    enunciado: `<p>O ácido úsnico mostrou-se mais indicado para o controle da</p>`,
    alternativas: [
      { letra: 'A', texto: 'esquistossomose.', explicacao: 'Correta! O ácido úsnico tem alta eficiência contra moluscos aquáticos. O caramujo <i>Biomphalaria</i> é o hospedeiro intermediário do <i>Schistosoma mansoni</i>; eliminá-lo interrompe o ciclo da esquistossomose (mesmo sem matar o verme, contra o qual é ineficiente).' },
      { letra: 'B', texto: 'febre amarela.' },
      { letra: 'C', texto: 'coqueluche.' },
      { letra: 'D', texto: 'tuberculose.' },
      { letra: 'E', texto: 'dengue.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-130', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 130,
    disciplina: 'Física', conteudo: 'fis-4a2', subtopico: 'Associação de resistores (divisor de tensão)', dificuldade: 'media',
    enunciado: `<p>Em sua maioria, os equipamentos eletrônicos domésticos demandam baixa potência elétrica em corrente contínua. Para alimentá-los, uma fonte externa ou embutida transforma a corrente alternada em corrente contínua de baixa tensão. Entretanto, cada equipamento tem suas especificidades, e muitas vezes não é possível simplesmente trocar essas fontes sem levar em conta a tensão, a corrente ou a potência elétrica de saída.</p>
      <p>Considere um equipamento de resistência elétrica R<sub>C</sub> que funciona corretamente apenas em um dado valor de tensão. Porém, a única fonte de alimentação disponível fornece uma tensão 20% superior à tensão recomendada. Para adaptar essa fonte ao aparelho, a associação de um resistor de proteção R<sub>P</sub>, de potência adequada, se faz necessária.</p>
      <p>A configuração adequada do circuito e o valor do resistor de proteção, em relação ao valor da resistência do equipamento, são:</p>`,
    alternativas: [
      { letra: 'A', texto: '<img src="imagens/estudo/enem-2025-130-a.webp" alt="Alternativa A: R_C em paralelo com R_P = 0,2 R_C">' },
      { letra: 'B', texto: '<img src="imagens/estudo/enem-2025-130-b.webp" alt="Alternativa B: R_C em paralelo com R_P = 1,2 R_C">' },
      { letra: 'C', texto: '<img src="imagens/estudo/enem-2025-130-c.webp" alt="Alternativa C: R_C em série com R_P = 1,2 R_C">' },
      { letra: 'D', texto: '<img src="imagens/estudo/enem-2025-130-d.webp" alt="Alternativa D: R_C em série com R_P = 2,2 R_C">' },
      { letra: 'E', texto: '<img src="imagens/estudo/enem-2025-130-e.webp" alt="Alternativa E: R_C em série com R_P = 0,2 R_C">', explicacao: 'Correta! O resistor deve ficar em série para "absorver" o excesso de tensão (em paralelo o aparelho receberia a tensão toda da fonte). A fonte dá 1,2 U; o aparelho precisa de U, então R<sub>P</sub> fica com 0,2 U. Como a corrente é a mesma em série, R<sub>P</sub>/R<sub>C</sub> = 0,2 U / U → R<sub>P</sub> = 0,2 R<sub>C</sub>.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-131', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 131,
    disciplina: 'Química', conteudo: 'qui-3a2', subtopico: 'Estequiometria (excesso de reagente)', dificuldade: 'media',
    enunciado: `<p>O Brasil é o maior produtor mundial de nióbio (massa molar = 93 g mol<sup>−1</sup>), metal utilizado na fabricação de vários tipos de aço: automotivos, estruturais e inoxidáveis. O processo utilizado na produção do nióbio é a redução aluminotérmica de Nb<sub>2</sub>O<sub>5</sub> com excesso de 10% de Al (massa molar = 27 g mol<sup>−1</sup>), em relação à quantidade estequiométrica da reação, representada pela equação química:</p>
      <p>3 Nb<sub>2</sub>O<sub>5</sub> (s) + 10 Al (s) → 6 Nb (s) + 5 Al<sub>2</sub>O<sub>3</sub> (s)</p>
      <p>Uma engenheira metalúrgica estimou a massa de alumínio necessária para produzir 9,3 kg de nióbio, nas condições descritas, para a produção de um lote de peças de aço encomendado por uma indústria, considerando um rendimento de 100%.</p>
      <p><small>Disponível em: www.cbmm.com.br. Acesso em: 17 out. 2015 (adaptado).</small></p>
      <p>A massa de alumínio, em quilograma, estimada pela engenheira é mais próxima de</p>`,
    alternativas: [
      { letra: 'A', texto: '2,7 kg.' },
      { letra: 'B', texto: '3,0 kg.' },
      { letra: 'C', texto: '4,1 kg.' },
      { letra: 'D', texto: '4,5 kg.' },
      { letra: 'E', texto: '5,0 kg.', explicacao: 'Correta! 9,3 kg de Nb = 9 300 / 93 = 100 mol. Pela equação, 10 Al : 6 Nb → Al = 100 × 10/6 ≈ 166,7 mol × 27 g ≈ 4,5 kg (estequiométrico). Com 10% de excesso: 4,5 × 1,1 ≈ 4,95 ≈ 5,0 kg.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2025-133', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 133,
    disciplina: 'Química', conteudo: 'qui-2a1', subtopico: 'Interações intermoleculares (separação óleo-água)', dificuldade: 'dificil',
    imagem: 'imagens/estudo/enem-2025-133.webp',
    legendaAcima: '<b>Representação esquemática do dispositivo</b>',
    legenda: '<small>BROWN, P. S.; BHUSHAN, B. Mechanically durable, superoleophobic coatings prepared by layer-by-layer technique for anti-smudge and oil-water separation. <b>Scientific Reports</b>, v. 5, mar. 2015 (adaptado).</small>',
    enunciado: `<p>O despejo acidental de óleo nos oceanos tem ocasionado incontáveis prejuízos à vida marinha e à economia de regiões costeiras. Métodos tradicionais de tratamento do despejo geram resíduos de difícil descarte e nem sempre são eficazes. Por isso, pesquisadores desenvolveram um filtro capaz de separar óleo e água. O dispositivo é montado sobre uma malha de aço com uma sequência de camadas. A primeira camada é formada por um polímero de carga positiva, a segunda é composta por nanopartículas de sílica (SiO<sub>2</sub>), a terceira é formada pelo mesmo polímero e a última é um surfactante, conforme apresentado na figura.</p>
      <p>Na utilização desse dispositivo, a retenção do óleo ocorre</p>`,
    alternativas: [
      { letra: 'A', texto: 'no surfactante.', explicacao: 'Correta! O surfactante é a camada mais externa, em contato com a mistura. Sua cadeia fluorada repele o óleo (é superoleofóbica), enquanto a parte iônica interage com a água e a deixa passar. Assim, o óleo fica retido já no surfactante.' },
      { letra: 'B', texto: 'na camada superior de polímero.' },
      { letra: 'C', texto: 'nas nanopartículas de sílica.' },
      { letra: 'D', texto: 'na camada inferior de polímero.' },
      { letra: 'E', texto: 'na malha de aço.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2025-134', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 134,
    disciplina: 'Química', conteudo: 'qui-2a1', subtopico: 'Solubilidade e ligações de hidrogênio', dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-134.webp',
    legenda: '<small>MUHAMMAD, A. et al. Environmental Impact of Estrogens on Human, Animal and Plant Life: a Critical Review. <b>Environment International</b>, n. 99, 2017 (adaptado).</small>',
    enunciado: `<p>Alguns hormônios sexuais têm ganhado notável atenção nos últimos anos por suas concentrações cada vez maiores no solo e na água em todo o mundo. O motivo da preocupação é porque, em níveis poluentes, eles têm sido associados ao câncer de mama e ao câncer de próstata, além de perturbarem a fisiologia dos peixes, podendo, ainda, afetarem o desenvolvimento reprodutivo de animais domésticos e selvagens. Assim, o descarte inadequado desses hormônios representa uma séria ameaça ao solo, plantas, recursos hídricos e humanos. De baixa polaridade, eles apresentam uma solubilidade pequena e variável em água, dependendo dos grupos presentes em suas estruturas, representando um grande risco para os ambientes aquáticos. As figuras a seguir apresentam as estruturas de alguns desses hormônios.</p>
      <p>Do ponto de vista das interações químicas, qual desses hormônios apresenta maior solubilidade em ambientes aquáticos?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Estradiol.' },
      { letra: 'B', texto: 'Estriol.', explicacao: 'Correta! O estriol tem três grupos –OH (os outros têm um ou dois), então faz mais ligações de hidrogênio com a água e é o mais polar da série, sendo o mais solúvel em ambientes aquáticos.' },
      { letra: 'C', texto: 'Estrona.' },
      { letra: 'D', texto: 'Novestrol.' },
      { letra: 'E', texto: 'Noretindrona.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2025-135', prova: 'ENEM 2025', vestibular: 'ENEM', ano: 2025, numeroOriginal: 135,
    disciplina: 'Física', conteudo: 'fis-1a2', subtopico: 'Espectro eletromagnético (frequência e comprimento de onda)', dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2025-135.webp',
    legenda: '<small>SILVA, M. M. et al. Fabricação de sensor orgânico flexível para aplicação em terapia com luz azul. <b>Tecnol. Metal. Mater. Miner.</b>, n. 3, jul.-set. 2011 (adaptado).</small>',
    enunciado: `<p>A icterícia é uma doença que acomete recém-nascidos e pode ser tratada com um método de fototerapia conhecido como banho de luz, que consiste na exposição do recém-nascido a uma fonte luminosa equipada com LEDs azuis. Para o monitoramento da dosagem dessa radiação, é utilizada a resposta óptica de um sensor constituído de materiais orgânicos que luminescem quando expostos à luz azul. Com o passar do tempo, essa radiação oxida os materiais do sensor, alterando sua coloração de vermelho-laranja para verde, o que indica o final do tratamento.</p>
      <p>O gráfico apresenta o espectro de fotoluminescência do sensor em função do comprimento de onda da luz emitida no início do tratamento, quando o sensor, colado na fralda do bebê (Figura 1), luminesce na região do vermelho-laranja (∼600 nm). A Figura 2 apresenta a evolução da coloração do sensor, mostrando que a frequência da luz emitida por ele aumenta em função do tempo de exposição à luz azul.</p>
      <p>Os espectros de fotoluminescência do sensor no início e no final do tratamento estão esboçados no gráfico:</p>`,
    alternativas: [
      { letra: 'A', texto: '<img src="imagens/estudo/enem-2025-135-a.webp" alt="Alternativa A: no final, pico deslocado para cerca de 550 nm">', explicacao: 'Correta! No fim do tratamento o sensor emite verde, de frequência maior. Como c = λ · f, frequência maior significa comprimento de onda menor: o pico se desloca de ≈ 600 nm (vermelho-laranja) para ≈ 550 nm (verde), como no gráfico A.' },
      { letra: 'B', texto: '<img src="imagens/estudo/enem-2025-135-b.webp" alt="Alternativa B: no final, pico deslocado para cerca de 635 nm">' },
      { letra: 'C', texto: '<img src="imagens/estudo/enem-2025-135-c.webp" alt="Alternativa C: no final, pico em 600 nm mais baixo">' },
      { letra: 'D', texto: '<img src="imagens/estudo/enem-2025-135-d.webp" alt="Alternativa D: no final, pico em 600 nm mais alto">' },
      { letra: 'E', texto: '<img src="imagens/estudo/enem-2025-135-e.webp" alt="Alternativa E: espectros iguais no início e no final">' },
    ],
    gabarito: 'A',
  },
);
