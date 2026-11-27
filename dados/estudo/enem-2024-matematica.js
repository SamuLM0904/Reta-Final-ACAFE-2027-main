/**
 * ENEM 2024 — 2º dia, caderno 7 (AZUL) — Matemática e suas Tecnologias (questões 136 a 180).
 *
 * Questões de ESTUDO — nunca entram nos simulados.
 * Origem: Provas/Outros/ENEM/2024_PV_D2_CD7.pdf; gabarito oficial: Provas/Outros/ENEM/2024_GB_D2_CD7.pdf
 * (conferido em Provas/Outros/ENEM/2024_MAT_gabarito.json). Nenhuma questão de Matemática foi anulada.
 * Apenas ACRESCENTA as questões ao banco QUESTOES.
 * Formato das questões: veja README.md ("Como adicionar uma questão nova").
 */

QUESTOES.push(
  {
    id: 'enem-2024-136',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 136,
    disciplina: 'Matemática',
    conteudo: ['mat-1a4', 'mat-1b1'],
    subtopico: 'Razão e proporção',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2024-136.webp',
    enunciado: `
      <p>O tamanho mínimo que a visão humana é capaz de visualizar sem o uso de equipamento auxiliar é equivalente a 100 micrômetros (1 micrômetro = 10<sup>−3</sup> milímetros). Uma estudante pretende visualizar e analisar hemácias do sangue humano, que medem 0,007 mm de diâmetro. Ela adquiriu um microscópio óptico que tem uma lente ocular que amplia em 10 vezes a imagem do objeto em observação, e um conjunto de lentes objetivas com estas capacidades de ampliação:</p>
      <ul>
        <li>lente I: 2 vezes;</li>
        <li>lente II: 10 vezes;</li>
        <li>lente III: 15 vezes;</li>
        <li>lente IV: 1,1 vez;</li>
        <li>lente V: 1,4 vez.</li>
      </ul>
      <p>O funcionamento desse microscópio permite o uso da lente ocular sozinha ou a combinação dela com uma de suas lentes objetivas, proporcionando, nesse caso, um aumento de sua capacidade de ampliação final, que é dada pelo produto entre as capacidades de ampliação da ocular e da objetiva.</p>
      <p>Essa estudante pretende selecionar a lente objetiva de menor capacidade de ampliação que permita, na combinação com a ocular, visualizar hemácias do sangue humano.</p>
      <p>A lente objetiva a ser selecionada pela estudante é a</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'I.', explicacao: 'Correta! 100 µm = 0,1 mm, e a hemácia mede 0,007 mm: é preciso ampliar pelo menos 0,1/0,007 ≈ 14,3 vezes. Com a ocular (10×), a objetiva precisa ampliar pelo menos 1,43 vez. A lente V (10 × 1,4 = 14) não basta; a menor que serve é a I (10 × 2 = 20).' },
      { letra: 'B', texto: 'II.' },
      { letra: 'C', texto: 'III.' },
      { letra: 'D', texto: 'IV.' },
      { letra: 'E', texto: 'V.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2024-137',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 137,
    disciplina: 'Matemática',
    conteudo: ['mat-3b1', 'mat-1b2'],
    subtopico: 'Média aritmética',
    dificuldade: 'facil',
    enunciado: `
      <p>Ao calcular a média de suas notas em 4 provas, um estudante dividiu, por engano, a soma das notas por 5. Com isso, a média obtida foi 1 unidade menor do que deveria ser, caso fosse calculada corretamente.</p>
      <p>O valor correto da média das notas desse estudante é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '4.' },
      { letra: 'B', texto: '5.', explicacao: 'Correta! Sendo S a soma das notas: S/4 − S/5 = 1 ⇒ S/20 = 1 ⇒ S = 20. A média correta é 20/4 = 5.' },
      { letra: 'C', texto: '6.' },
      { letra: 'D', texto: '19.' },
      { letra: 'E', texto: '21.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2024-138',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 138,
    disciplina: 'Matemática',
    conteudo: 'mat-3b2',
    subtopico: 'Princípio fundamental da contagem',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2024-138.webp',
    enunciado: `
      <p>Para abrir a porta de uma empresa, cada funcionário deve cadastrar uma senha utilizando um teclado alfanumérico como o representado na figura.</p>
      <p>Por exemplo: a tecla que contém o número 2 traz as letras correlacionadas A, B e C. Cada toque nessa tecla mostra, sequencialmente, os seguintes caracteres: 2, A, B e C. Para os próximos toques, essa sequência se repete. As demais teclas funcionam da mesma maneira.</p>
      <p>As senhas a serem cadastradas pelos funcionários devem conter 5 caracteres, sendo 2 algarismos distintos seguidos de 3 letras diferentes, nessa ordem. Um funcionário irá cadastrar a sua primeira senha, podendo escolher entre as teclas que apresentam os números 1, 2, 5, 7 e 0 e as respectivas letras correlacionadas, quando houver.</p>
      <p>O número de possibilidades diferentes que esse funcionário tem para cadastrar sua senha é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '11 520.' },
      { letra: 'B', texto: '14 400.', explicacao: 'Correta! Algarismos distintos entre 1, 2, 5, 7 e 0: 5 × 4 = 20. Letras disponíveis: ABC (tecla 2), JKL (tecla 5) e PQRS (tecla 7), 10 letras; 3 letras diferentes: 10 × 9 × 8 = 720. Total: 20 × 720 = 14 400.' },
      { letra: 'C', texto: '18 000.' },
      { letra: 'D', texto: '312 000.' },
      { letra: 'E', texto: '390 000.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2024-139',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 139,
    disciplina: 'Matemática',
    conteudo: 'mat-1a1',
    subtopico: 'Operações com números decimais',
    dificuldade: 'facil',
    enunciado: `
      <p>Um artesão utiliza dois tipos de componentes, X e Y, nos enfeites que produz. Ele sempre compra todos os componentes em uma mesma loja. O quadro apresenta os preços dos dois tipos de componentes nas lojas I e II.</p>
      <table class="tabela-prova">
        <tr><th rowspan="2">Lojas</th><th colspan="2">Preços dos componentes (R$)</th></tr>
        <tr><th>X</th><th>Y</th></tr>
        <tr><td>I</td><td>3,00</td><td>1,00</td></tr>
        <tr><td>II</td><td>2,00</td><td>4,00</td></tr>
      </table>
      <p>Ele confeccionará enfeites formados por duas unidades do componente X e uma unidade do componente Y e efetuará a compra na loja que oferecer o menor valor total para a confecção de um enfeite.</p>
      <p>O artesão efetuará a compra na loja</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'I, pois o valor é R$ 7,00.', explicacao: 'Correta! Loja I: 2 × 3,00 + 1,00 = R$ 7,00; loja II: 2 × 2,00 + 4,00 = R$ 8,00. A loja I é a mais barata, com R$ 7,00.' },
      { letra: 'B', texto: 'I, pois o valor é R$ 4,00.' },
      { letra: 'C', texto: 'II, pois o valor é R$ 6,00.' },
      { letra: 'D', texto: 'I, pois anuncia o componente com o menor preço.' },
      { letra: 'E', texto: 'II, pois o componente X, que é o mais utilizado, tem menor preço.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2024-140',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 140,
    disciplina: 'Matemática',
    conteudo: 'mat-1a5',
    subtopico: 'Porcentagem',
    dificuldade: 'facil',
    enunciado: `
      <p>João e Felipe participaram, na escola, de uma maratona de matemática na qual, durante uma semana, resolveram 200 questões cada. Nessa maratona, a porcentagem <i>P</i> de acertos de cada participante é convertida em um conceito:</p>
      <ul>
        <li>insatisfatório: se 0 ≤ <i>P</i> &lt; 50;</li>
        <li>regular: se 50 ≤ <i>P</i> &lt; 60;</li>
        <li>bom: se 60 ≤ <i>P</i> &lt; 75;</li>
        <li>muito bom: se 75 ≤ <i>P</i> &lt; 90;</li>
        <li>excelente: se 90 ≤ <i>P</i> ≤ 100.</li>
      </ul>
      <p>João acertou 75% das questões da maratona e Felipe acertou 30% a menos que a quantidade de questões que João acertou.</p>
      <p>Os conceitos de João e Felipe foram, respectivamente,</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'muito bom e bom.' },
      { letra: 'B', texto: 'muito bom e regular.', explicacao: 'Correta! João: 75% (muito bom), ou seja, 150 acertos. Felipe: 0,7 × 150 = 105 acertos, que são 105/200 = 52,5% (regular). Atenção: 30% a menos dos acertos de João não é 75% − 30% = 45%.' },
      { letra: 'C', texto: 'muito bom e insatisfatório.' },
      { letra: 'D', texto: 'bom e regular.' },
      { letra: 'E', texto: 'bom e insatisfatório.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2024-141',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 141,
    disciplina: 'Matemática',
    conteudo: ['mat-2a1', 'mat-2a2'],
    subtopico: 'Leitura de gráficos e composição de funções',
    dificuldade: 'media',
    imagem: ['imagens/estudo/enem-2024-141-1.webp', 'imagens/estudo/enem-2024-141-2.webp'],
    enunciado: `
      <p>Três grandezas (I, II e III) se relacionam entre si. Os gráficos a seguir, formados por segmentos de reta, descrevem as relações de dependência existentes entre as grandezas I e II, e entre as grandezas II e III.</p>
      <p>O valor máximo assumido pela grandeza III, quando a grandeza I varia de 1 a 3, é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '1,0.' },
      { letra: 'B', texto: '2,5.', explicacao: 'Correta! Pelo 1º gráfico, I = 1 dá II = 1,5 e I = 3 dá II = 3,5; logo, II varia de 1,5 a 3,5. No 2º gráfico, III = 4 − II até II = 3 (III cai de 2,5 para 1) e depois III = 1 + 2(II − 3) (em II = 3,5, III = 2). O máximo é 2,5.' },
      { letra: 'C', texto: '3,0.' },
      { letra: 'D', texto: '3,5.' },
      { letra: 'E', texto: '4,0.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2024-142',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 142,
    disciplina: 'Matemática',
    conteudo: ['mat-3a4', 'mat-1b1'],
    subtopico: 'Progressão geométrica',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2024-142.webp',
    enunciado: `
      <p>Uma criança, utilizando um aplicativo, escreveu uma mensagem para enviar a um amigo. Essa mensagem foi escrita seguindo estas etapas:</p>
      <p>A criança seguiu copiando e colando, em cada etapa, o que tinha no visor na etapa imediatamente anterior, até concluir a 20ª etapa. Em seguida, enviou a mensagem.</p>
      <p>Qual foi o total de figuras contidas na mensagem enviada?</p>
    `,
    alternativas: [
      { letra: 'A', texto: '3 × 2<sup>19</sup>', explicacao: 'Correta! A quantidade dobra a cada etapa: 3, 6, 12, … é uma PG de razão 2 com a<sub>1</sub> = 3. Na 20ª etapa: a<sub>20</sub> = 3 × 2<sup>19</sup>.' },
      { letra: 'B', texto: '3 × 2<sup>20</sup>' },
      { letra: 'C', texto: '3 × 2<sup>21</sup>' },
      { letra: 'D', texto: '3 × 2<sup>20</sup> − 1' },
      { letra: 'E', texto: '3 × 2<sup>20</sup> − 3' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2024-143',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 143,
    disciplina: 'Matemática',
    conteudo: 'mat-1a5',
    subtopico: 'Porcentagem e lucro',
    dificuldade: 'dificil',
    enunciado: `
      <p>Uma casa de shows terá um evento cujo custo total de produção é de R$ 34 350,00, sendo que comporta 500 pessoas. O preço do ingresso será de R$ 130,00 e, normalmente, 60% das pessoas adquirem meia-entrada, pagando R$ 65,00 pelo ingresso. Além do faturamento proveniente da venda de ingressos, a casa de shows vende, com 60% de lucro, bebidas e petiscos ao público no dia do evento.</p>
      <p>Após ter vendido todos os 500 ingressos, constatou-se que a quantidade de meias-entradas vendidas superou em 50% o que estava previsto, impactando o faturamento estimado com a venda de ingressos.</p>
      <p>No dia do evento, decidiu-se manter o percentual de 60% de lucro sobre as bebidas e petiscos, pois todo o público que comprou ingresso compareceu ao show. Com isso, espera-se ter lucro de R$ 17 000,00 nesse evento.</p>
      <p>Para que se alcance o lucro esperado, o gasto médio por pessoa com bebidas e petiscos, em real, deverá ser de</p>
    `,
    alternativas: [
      { letra: 'A', texto: '19,50.' },
      { letra: 'B', texto: '28,80.' },
      { letra: 'C', texto: '34,00.' },
      { letra: 'D', texto: '52,00.', explicacao: 'Correta! Meias previstas: 60% de 500 = 300; vendidas: 1,5 × 300 = 450, e 50 inteiras. Ingressos: 450 × 65 + 50 × 130 = R$ 35 750, que dão 35 750 − 34 350 = R$ 1 400 de lucro. Faltam 17 000 − 1 400 = R$ 15 600 de lucro, que são 60% do vendido em bebidas e petiscos: 15 600/0,6 = R$ 26 000, ou seja, 26 000/500 = R$ 52,00 por pessoa.' },
      { letra: 'E', texto: '68,70.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-144',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 144,
    disciplina: 'Matemática',
    conteudo: 'mat-3a2',
    subtopico: 'Sólidos de revolução',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2024-144.webp',
    enunciado: `
      <p>Para obter um sólido de revolução (rotação de 360° em torno de um eixo fixo), uma professora realizou as seguintes etapas:</p>
      <ul>
        <li>recortou o trapézio retângulo <i>PQRS</i> de um material rígido;</li>
        <li>afixou o lado <i>PS</i> do trapézio em uma vareta fixa retilínea (eixo de rotação);</li>
        <li>girou o trapézio 360° em torno da vareta e obteve um sólido de revolução.</li>
      </ul>
      <p>Observe a figura que apresenta o trapézio afixado na vareta e o sentido de giro.</p>
      <p>O sólido obtido foi um(a)</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'cone.' },
      { letra: 'B', texto: 'cilindro.' },
      { letra: 'C', texto: 'pirâmide.' },
      { letra: 'D', texto: 'tronco de cone.', explicacao: 'Correta! Girando o trapézio retângulo em torno do lado perpendicular às bases (PS), as bases PQ e SR descrevem dois círculos de raios diferentes e o lado oblíquo QR gera a superfície lateral: é um tronco de cone.' },
      { letra: 'E', texto: 'tronco de pirâmide.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-145',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 145,
    disciplina: 'Matemática',
    conteudo: 'mat-2b3',
    subtopico: 'Área do retângulo',
    dificuldade: 'facil',
    enunciado: `
      <p>O estádio do Maracanã passou por algumas modificações estruturais para a realização da Copa do Mundo de 2014, como, por exemplo, as dimensões do campo retangular. Para se adaptar aos padrões da Fifa, as dimensões do campo foram reduzidas de 110 m × 75 m para 105 m × 68 m.</p>
      <p><small>Disponível em: http://virgula.uol.com.br. Acesso em: 14 ago. 2013 (adaptado).</small></p>
      <p>Em quantos metros quadrados a área do campo do Maracanã foi reduzida?</p>
    `,
    alternativas: [
      { letra: 'A', texto: '24' },
      { letra: 'B', texto: '35' },
      { letra: 'C', texto: '555' },
      { letra: 'D', texto: '1 110', explicacao: 'Correta! Área antiga: 110 × 75 = 8 250 m²; área nova: 105 × 68 = 7 140 m². Redução: 8 250 − 7 140 = 1 110 m².' },
      { letra: 'E', texto: '1 145' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-146',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 146,
    disciplina: 'Matemática',
    conteudo: 'mat-2a3',
    subtopico: 'Máximo da função quadrática',
    dificuldade: 'media',
    enunciado: `
      <p>Um fazendeiro pretende construir um galinheiro ocupando uma região plana de formato retangular, com lados de comprimentos <i>L</i> metro e <i>C</i> metro. Os lados serão cercados por telas de tipos diferentes. Nos lados de comprimento <i>L</i> metro, será utilizada uma tela cujo metro linear custa R$ 20,00, enquanto, nos outros dois lados, uma que custa R$ 15,00. O fazendeiro quer gastar, no máximo, R$ 6 000,00 na compra de toda a tela necessária para o galinheiro, e deseja que o galinheiro tenha a maior área possível.</p>
      <p>Qual será a medida, em metro, do maior lado do galinheiro?</p>
    `,
    alternativas: [
      { letra: 'A', texto: '85' },
      { letra: 'B', texto: '100', explicacao: 'Correta! Custo: 2L · 20 + 2C · 15 = 6 000 ⇒ 4L + 3C = 600 ⇒ C = 200 − 4L/3. Área A(L) = L(200 − 4L/3), parábola com máximo no vértice L = 75 m; então C = 200 − 100 = 100 m, que é o maior lado.' },
      { letra: 'C', texto: '175' },
      { letra: 'D', texto: '200' },
      { letra: 'E', texto: '350' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2024-147',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 147,
    disciplina: 'Matemática',
    conteudo: 'mat-1a1',
    subtopico: 'Representações de números racionais',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2024-147.webp',
    enunciado: `
      <p>Uma professora de matemática utiliza em suas aulas uma “máquina caça-números” para verificar os conhecimentos de seus estudantes sobre representações de números racionais. Essa máquina tem um visor dividido em seis compartimentos e, na lateral, uma alavanca. Cada estudante puxa a alavanca e espera que os compartimentos parem de girar. A partir daí, precisa responder para a professora em quais posições se encontram os números que representam a mesma quantidade.</p>
      <p>Um estudante puxou a alavanca, aguardou que os compartimentos parassem de girar e observou os números apresentados no visor. A configuração da máquina naquele instante está apresentada na imagem.</p>
      <p>Esse estudante respondeu corretamente à pergunta da professora.</p>
      <p>As posições indicadas pelo estudante foram</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'I, II e IV.' },
      { letra: 'B', texto: 'II, IV e V.', explicacao: 'Correta! I: 4<sup>1/2</sup> = √4 = 2; II: 4½ = 4,5; III: 10/45 = 2/9; IV: 18/4 = 4,5; V: 4,5; VI: 4/5 = 0,8. As três quantidades iguais (4,5) estão em II, IV e V.' },
      { letra: 'C', texto: 'II, III e V.' },
      { letra: 'D', texto: 'III, V e VI.' },
      { letra: 'E', texto: 'III, IV e VI.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2024-148',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 148,
    disciplina: 'Matemática',
    conteudo: 'mat-2a4',
    subtopico: 'Função exponencial',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2024-148.webp',
    enunciado: `
      <p>Uma caneca com água fervendo é retirada de um forno de micro-ondas. A temperatura <i>T</i>, em grau Celsius, da caneca, em função do tempo <i>t</i>, em minuto, pode ser modelada pela função <i>T</i>(<i>t</i>) = <i>a</i> + 80 <i>b</i><sup><i>t</i></sup>, representada no gráfico a seguir.</p>
      <p>Os valores das constantes <i>a</i> e <i>b</i> são</p>
    `,
    alternativas: [
      { letra: 'A', texto: '<i>a</i> = 20; <i>b</i> = log(0,5)' },
      { letra: 'B', texto: '<i>a</i> = 100; <i>b</i> = 0,5' },
      { letra: 'C', texto: '<i>a</i> = 20; <i>b</i> = (0,5)<sup>1/10</sup>', explicacao: 'Correta! T(0) = a + 80 = 100 ⇒ a = 20. T(20) = 20 + 80b<sup>20</sup> = 40 ⇒ b<sup>20</sup> = 1/4 = (0,5)<sup>2</sup> ⇒ b = (0,5)<sup>2/20</sup> = (0,5)<sup>1/10</sup>.' },
      { letra: 'D', texto: '<i>a</i> = 20; <i>b</i> = (40)<sup>1/10</sup>/80' },
      { letra: 'E', texto: '<i>a</i> = 20; <i>b</i> = 40' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-149',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 149,
    disciplina: 'Matemática',
    conteudo: ['mat-3a2', 'mat-3a1'],
    subtopico: 'Volume do cilindro e do cubo',
    dificuldade: 'media',
    enunciado: `
      <p>Em uma empresa é comercializado um produto em embalagens em formato de cilindro circular reto, com raio medindo 3 cm, e altura medindo 15 cm. Essa empresa planeja comercializar o mesmo produto em embalagens em formato de cubo, com capacidade igual a 80% da capacidade da embalagem cilíndrica utilizada atualmente.</p>
      <p>Use 3 como valor aproximado para π.</p>
      <p>A medida da aresta da nova embalagem, em centímetro, deve ser</p>
    `,
    alternativas: [
      { letra: 'A', texto: '6' },
      { letra: 'B', texto: '18' },
      { letra: 'C', texto: '6√6' },
      { letra: 'D', texto: '6∛6' },
      { letra: 'E', texto: '3∛12', explicacao: 'Correta! Cilindro: V = π r² h = 3 · 9 · 15 = 405 cm³. Cubo: a³ = 0,8 · 405 = 324 = 27 · 12 ⇒ a = ∛(27 · 12) = 3∛12 cm.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2024-150',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 150,
    disciplina: 'Matemática',
    conteudo: ['mat-2b4', 'mat-1b2'],
    subtopico: 'Círculo e otimização de custos',
    dificuldade: 'dificil',
    imagem: 'imagens/estudo/enem-2024-150.webp',
    enunciado: `
      <p>Uma sala com piso no formato retangular, com lados de medidas 3 m e 6 m, será dividida em dois ambientes. Para isso, serão utilizadas colunas em formato cilíndrico, dispostas perpendicularmente ao piso e representadas na figura pelos círculos de cor azul. Os centros desses círculos estarão sobre uma reta paralela aos lados de menor medida do piso da sala. Os vãos entre duas colunas e entre uma coluna e a parede não poderão ser superiores a 15 cm.</p>
      <p>Para efetuar a compra dessas colunas, foram feitos orçamentos com base em dados fornecidos por cinco lojas.</p>
      <table class="tabela-prova">
        <tr><th>Loja</th><th>Raio (cm)</th><th>Preço por unidade (R$)</th></tr>
        <tr><td>I</td><td>5</td><td>60</td></tr>
        <tr><td>II</td><td>10</td><td>70</td></tr>
        <tr><td>III</td><td>12</td><td>75</td></tr>
        <tr><td>IV</td><td>15</td><td>90</td></tr>
        <tr><td>V</td><td>20</td><td>120</td></tr>
      </table>
      <p>A compra será realizada na loja cujo orçamento resulte no menor valor total possível.</p>
      <p>A compra será realizada na loja</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'I.' },
      { letra: 'B', texto: 'II.' },
      { letra: 'C', texto: 'III.', explicacao: 'Correta! Com n colunas de diâmetro d em 300 cm há n + 1 vãos de no máximo 15 cm: n · d + 15(n + 1) ≥ 300 ⇒ n ≥ 285/(d + 15). Loja I: n = 12 (R$ 720); II: n = 9 (R$ 630); III: 285/39 ≈ 7,3 ⇒ n = 8 (R$ 600); IV: n = 7 (R$ 630); V: n = 6 (R$ 720). O menor total é na loja III.' },
      { letra: 'D', texto: 'IV.' },
      { letra: 'E', texto: 'V.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-151',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 151,
    disciplina: 'Matemática',
    conteudo: 'mat-1a4',
    subtopico: 'Escala',
    dificuldade: 'media',
    enunciado: `
      <p>O arquiteto Renzo Piano exibiu a maquete da nova sede do Museu Whitney de Arte Americana, um prédio assimétrico que tem um vão aberto para a galeria principal, cuja medida da área é 1 672 m<sup>2</sup>.</p>
      <p>Considere que a escala da maquete exibida é 1 : 200.</p>
      <p><small><b>Época</b>, n. 682, jun. 2011 (adaptado).</small></p>
      <p>A medida da área do vão aberto nessa maquete, em centímetro quadrado, é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '4,18.' },
      { letra: 'B', texto: '8,36.' },
      { letra: 'C', texto: '41,80.' },
      { letra: 'D', texto: '83,60.' },
      { letra: 'E', texto: '418,00.', explicacao: 'Correta! Na escala 1 : 200, as áreas ficam na razão 1 : 200² = 1 : 40 000. 1 672 m² = 16 720 000 cm²; na maquete: 16 720 000/40 000 = 418 cm².' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2024-152',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 152,
    disciplina: 'Matemática',
    conteudo: 'mat-3b1',
    subtopico: 'Leitura de gráficos',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2024-152.webp',
    legendaAcima: '<b>Valor total de exportações e importações</b>',
    legenda: '<small>Disponível em: http://blogs.estadao.com.br. Acesso em: 20 fev. 2013 (adaptado).</small>',
    enunciado: `
      <p>O gráfico apresenta o valor total de exportações e o valor total de importações, ao longo de um período, em bilhão de dólares. O saldo da balança comercial brasileira é dado pelo valor total de exportações menos o valor total de importações num mesmo período.</p>
      <p>Considere que os saldos da balança comercial brasileira, nos três meses destacados no gráfico, sejam representados por:</p>
      <ul>
        <li><i>S</i><sub>1</sub>: saldo em junho de 2009;</li>
        <li><i>S</i><sub>2</sub>: saldo em janeiro de 2010;</li>
        <li><i>S</i><sub>3</sub>: saldo em junho de 2010.</li>
      </ul>
      <p>A ordenação dos saldos <i>S</i><sub>1</sub>, <i>S</i><sub>2</sub> e <i>S</i><sub>3</sub>, do maior para o menor, é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '<i>S</i><sub>1</sub>, <i>S</i><sub>3</sub> e <i>S</i><sub>2</sub>.', explicacao: 'Correta! Pelo gráfico: S<sub>1</sub> ≈ 14,5 − 10 = 4,5; S<sub>3</sub> = 17,1 − 14,8 = 2,3; em janeiro de 2010 as importações superam as exportações, então S<sub>2</sub> é negativo. Ordem: S<sub>1</sub> &gt; S<sub>3</sub> &gt; S<sub>2</sub>.' },
      { letra: 'B', texto: '<i>S</i><sub>2</sub>, <i>S</i><sub>1</sub> e <i>S</i><sub>3</sub>.' },
      { letra: 'C', texto: '<i>S</i><sub>2</sub>, <i>S</i><sub>3</sub> e <i>S</i><sub>1</sub>.' },
      { letra: 'D', texto: '<i>S</i><sub>3</sub>, <i>S</i><sub>1</sub> e <i>S</i><sub>2</sub>.' },
      { letra: 'E', texto: '<i>S</i><sub>3</sub>, <i>S</i><sub>2</sub> e <i>S</i><sub>1</sub>.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2024-153',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 153,
    disciplina: 'Matemática',
    conteudo: 'mat-1a5',
    subtopico: 'Taxa percentual na forma decimal',
    dificuldade: 'facil',
    enunciado: `
      <p>Um instituto de pesquisa constatou que, nos últimos dez anos, o crescimento populacional de uma cidade foi de 135,25%.</p>
      <p>Qual é a representação decimal da taxa percentual desse crescimento populacional?</p>
    `,
    alternativas: [
      { letra: 'A', texto: '13 525,0' },
      { letra: 'B', texto: '135,25' },
      { letra: 'C', texto: '13,525' },
      { letra: 'D', texto: '1,3525', explicacao: 'Correta! Taxa percentual na forma decimal: divide-se por 100. 135,25% = 135,25/100 = 1,3525.' },
      { letra: 'E', texto: '0,13525' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-154',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 154,
    disciplina: 'Matemática',
    conteudo: 'mat-3b1',
    subtopico: 'Média aritmética',
    dificuldade: 'facil',
    enunciado: `
      <p>Contratos de vários serviços disponíveis na internet apresentam uma quantidade excessiva de informações. Isso faz com que o tempo necessário para a leitura desses contratos possa ser longo.</p>
      <p>O quadro apresenta uma amostra do tempo considerado necessário para a leitura completa do contrato de alguns serviços digitais.</p>
      <table class="tabela-prova">
        <tr><th>Tipo de serviço</th><th>Tempo necessário para a leitura completa do contrato (em minuto)</th></tr>
        <tr><td>A</td><td>36</td></tr>
        <tr><td>B</td><td>17</td></tr>
        <tr><td>C</td><td>27</td></tr>
        <tr><td>D</td><td>13</td></tr>
        <tr><td>E</td><td>13</td></tr>
        <tr><td>F</td><td>13</td></tr>
      </table>
      <p><small>ROMERO, L. Não li e concordo. <b>Superinteressante</b>, n. 307, ago. 2012 (adaptado).</small></p>
      <p>O tempo médio, em minuto, necessário para a leitura completa de um contrato de serviço dentre os listados no quadro é, com uma casa decimal, aproximadamente,</p>
    `,
    alternativas: [
      { letra: 'A', texto: '13,0.' },
      { letra: 'B', texto: '15,0.' },
      { letra: 'C', texto: '19,8.', explicacao: 'Correta! Média = (36 + 17 + 27 + 13 + 13 + 13)/6 = 119/6 ≈ 19,8 minutos.' },
      { letra: 'D', texto: '20,0.' },
      { letra: 'E', texto: '23,3.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-155',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 155,
    disciplina: 'Matemática',
    conteudo: 'mat-2b4',
    subtopico: 'Área do setor circular',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2024-155.webp',
    enunciado: `
      <p>Um proprietário pretende instalar um sensor de presença para a proteção de seu imóvel. O sensor deverá detectar movimentos de objetos e pessoas numa determinada região plana. A figura ilustra a vista superior da área de cobertura (setor circular em azul) de um sensor colocado no ponto <i>S</i>. Essa área depende da medida do ângulo α, em grau, e do raio <i>R</i>, em metro.</p>
      <p>Ao aumentar o ângulo α ou o raio <i>R</i> aumenta-se a área de cobertura do sensor. Entretanto, quanto maior essa área, maior o preço do sensor.</p>
      <p>Para esse fim, há cinco tipos de sensores disponíveis no mercado, cada um com as seguintes características:</p>
      <ul>
        <li>tipo I: α = 15° e <i>R</i> = 20 m;</li>
        <li>tipo II: α = 30° e <i>R</i> = 22 m;</li>
        <li>tipo III: α = 40° e <i>R</i> = 12 m;</li>
        <li>tipo IV: α = 60° e <i>R</i> = 16 m;</li>
        <li>tipo V: α = 90° e <i>R</i> = 10 m.</li>
      </ul>
      <p>Esse proprietário pretende adquirir um desses sensores que seja capaz de cobrir, no mínimo, uma área de medida 70 m<sup>2</sup>, com o menor preço possível.</p>
      <p>Use 3 como valor aproximado para π.</p>
      <p>O proprietário do imóvel deverá adquirir o sensor do tipo</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'I.' },
      { letra: 'B', texto: 'II.' },
      { letra: 'C', texto: 'III.' },
      { letra: 'D', texto: 'IV.' },
      { letra: 'E', texto: 'V.', explicacao: 'Correta! Área do setor = (α/360) · π R². I: (15/360) · 3 · 400 = 50; II: (30/360) · 3 · 484 = 121; III: (40/360) · 3 · 144 = 48; IV: (60/360) · 3 · 256 = 128; V: (90/360) · 3 · 100 = 75 m². Dos que cobrem 70 m² ou mais, o de menor área (mais barato) é o V.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2024-156',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 156,
    disciplina: 'Matemática',
    conteudo: 'mat-2a2',
    subtopico: 'Expressão algébrica de uma função',
    dificuldade: 'facil',
    enunciado: `
      <p>O uso de aplicativos de transporte tem sido uma alternativa à população que busca preços mais competitivos para se locomover, principalmente nas grandes cidades. As formas usadas para determinar o valor cobrado por cada viagem variam de um aplicativo para outro, mas, em geral, o valor <i>V</i> a ser pago, em real, varia em função de:</p>
      <ul>
        <li>tarifa base <i>F</i>: valor fixo, em real, cobrado no início da viagem;</li>
        <li>tempo <i>T</i>: tempo, em minuto, de duração da viagem;</li>
        <li>distância <i>D</i>: distância percorrida, em quilômetro.</li>
      </ul>
      <p>Um desses aplicativos cobra R$ 2,00 de valor fixo, acrescido de R$ 0,26 por minuto de viagem e de R$ 1,40 por quilômetro rodado.</p>
      <p>Nessas condições, a expressão que fornece o valor <i>V</i> a ser pago por uma viagem desse aplicativo é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '2,00<i>F</i> + 0,26<i>T</i> + 1,40<i>D</i>' },
      { letra: 'B', texto: '2,00 + 0,26<i>T</i> + 1,40<i>D</i>', explicacao: 'Correta! O valor fixo (R$ 2,00) entra sozinho, sem multiplicar variável; somam-se R$ 0,26 por minuto (0,26T) e R$ 1,40 por quilômetro (1,40D): V = 2,00 + 0,26T + 1,40D.' },
      { letra: 'C', texto: '2,00 + 0,26<i>T</i> + <i>D</i>' },
      { letra: 'D', texto: '0,26<i>T</i> + 1,40<i>D</i>' },
      { letra: 'E', texto: '<i>F</i> + <i>T</i> + <i>D</i>' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2024-157',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 157,
    disciplina: 'Matemática',
    conteudo: 'mat-1b2',
    subtopico: 'Equação do 1º grau',
    dificuldade: 'facil',
    enunciado: `
      <p>Uma doceira vende e entrega, em seu bairro, porções de 100 g de docinhos de aniversário. Atualmente, a taxa única de entrega é R$ 10,00, e o valor cobrado por uma porção é R$ 25,00. Por uma estratégia de vendas, a partir da próxima semana, a taxa única de entrega será R$ 15,00, e um novo valor será cobrado por uma porção, de maneira que o valor total a ser pago por um cliente na compra de 5 porções permaneça o mesmo.</p>
      <p>A partir da próxima semana, qual será o novo valor cobrado, em real, por uma porção?</p>
    `,
    alternativas: [
      { letra: 'A', texto: '12,50' },
      { letra: 'B', texto: '20,00' },
      { letra: 'C', texto: '24,00', explicacao: 'Correta! Hoje, 5 porções custam 10 + 5 · 25 = R$ 135. Com a nova taxa: 15 + 5x = 135 ⇒ 5x = 120 ⇒ x = R$ 24,00.' },
      { letra: 'D', texto: '30,00' },
      { letra: 'E', texto: '37,50' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-158',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 158,
    disciplina: 'Matemática',
    conteudo: 'mat-1a4',
    subtopico: 'Regra de três e comparação de custos',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2024-158.webp',
    enunciado: `
      <p>Em uma loja de defensivos agrícolas, os preços de alguns produtos foram divulgados em um cartaz.</p>
      <p>Sabe-se que 1 litro de defensivo do Tipo A é suficiente para aplicação em 0,5 hectare (ha), enquanto que 1 litro de defensivo do Tipo B é suficiente para aplicação em 0,4 ha. Um agricultor precisa comprar, nessa loja, uma quantidade de litros de defensivo suficiente para aplicar em uma área de 20 ha, além de levar uma máscara para aplicação.</p>
      <p>O valor mínimo, em real, a ser gasto pelo agricultor é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '147,00.' },
      { letra: 'B', texto: '150,00.' },
      { letra: 'C', texto: '162,50.', explicacao: 'Correta! Só Tipo B: 20/0,4 = 50 L × 3,00 = 150 + máscara 12,50 = R$ 162,50. Só Tipo A: 20/0,5 = 40 L × 4,20 = R$ 168,00 (máscara grátis). Misturando, com o mínimo de 35 L de A para ganhar a máscara: 35 × 4,20 = 147 cobre 17,5 ha, e os 2,5 ha restantes pedem 6,25 L de B = 18,75, total R$ 165,75. O mínimo é R$ 162,50.' },
      { letra: 'D', texto: '165,75.' },
      { letra: 'E', texto: '168,00.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-159',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 159,
    disciplina: 'Matemática',
    conteudo: 'mat-1a4',
    subtopico: 'Grandezas proporcionais e unidades',
    dificuldade: 'facil',
    enunciado: `
      <p>Uma tubulação despeja sempre o mesmo volume de água por unidade de tempo em uma caixa-d’água, o que significa dizer que a vazão de água nessa tubulação é constante. Na junção dessa tubulação com a caixa-d’água, está instalada uma membrana de filtragem cujo objetivo é filtrar eventuais impurezas presentes na água, combinado a um bom fluxo de água. O fluxo (φ) de água através da superfície da membrana é diretamente proporcional à vazão de água na tubulação, medida em mililitro por segundo, e inversamente proporcional à área da superfície da membrana, medida em centímetro quadrado.</p>
      <p>A unidade de medida adequada para descrever o fluxo (φ) de água que atravessa a superfície da membrana é</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'mL · s · cm<sup>2</sup>' },
      { letra: 'B', texto: '(mL/s) · cm<sup>2</sup>' },
      { letra: 'C', texto: 'mL/(cm<sup>2</sup> · s)', explicacao: 'Correta! φ = vazão/área = (mL/s)/cm² = mL/(cm² · s).' },
      { letra: 'D', texto: '(cm<sup>2</sup> · s)/mL' },
      { letra: 'E', texto: 'cm<sup>2</sup>/(mL · s)' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-160',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 160,
    disciplina: 'Matemática',
    conteudo: 'mat-1a4',
    subtopico: 'Vazão e regra de três',
    dificuldade: 'media',
    enunciado: `
      <p>Uma piscina tem capacidade de 2 500 000 litros. Seu sistema de abastecimento foi regulado para ter uma vazão constante de 6 000 litros de água por minuto.</p>
      <p>O mesmo sistema foi instalado em uma segunda piscina, com capacidade de 2 750 000 litros, e regulado para ter uma vazão, também constante, capaz de enchê-la em um tempo 20% maior que o gasto para encher a primeira piscina.</p>
      <p>A vazão do sistema de abastecimento da segunda piscina, em litro por minuto, é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '8 250.' },
      { letra: 'B', texto: '7 920.' },
      { letra: 'C', texto: '6 545.' },
      { letra: 'D', texto: '5 500.', explicacao: 'Correta! 1ª piscina: t = 2 500 000/6 000 = 1 250/3 min. 2ª: t = 1,2 · 1 250/3 = 500 min. Vazão = 2 750 000/500 = 5 500 L/min.' },
      { letra: 'E', texto: '5 280.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-161',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 161,
    disciplina: 'Matemática',
    conteudo: ['mat-3a1', 'mat-2a1'],
    subtopico: 'Volume do paralelepípedo e gráficos',
    dificuldade: 'dificil',
    imagem: 'imagens/estudo/enem-2024-161.webp',
    enunciado: `
      <p>Um tanque, em formato de paralelepípedo reto retângulo, tem em seu interior dois anteparos verticais, fixados na sua base e em duas paredes opostas, sendo perpendiculares a elas, conforme a figura.</p>
      <p>Esses anteparos, de espessuras desprezíveis, estão instalados de maneira a dividir a base do tanque em três retângulos congruentes, tendo suas alturas iguais à metade e a um quarto da altura do tanque. O tanque é abastecido por uma entrada situada no teto, através de um duto que despeja água a uma vazão constante, sendo necessárias 12 horas para finalizar o seu enchimento.</p>
      <p>O gráfico que descreve, em cada instante, a maior altura de coluna de água, dentre aquelas que vão sendo formadas ao longo do enchimento do tanque, é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '<img src="imagens/estudo/enem-2024-161-a.webp" alt="Alternativa A: gráfico que sobe até 2 h, fica constante de 2 h a 4 h e depois sobe em dois trechos de inclinações diferentes até 12 h">' },
      { letra: 'B', texto: '<img src="imagens/estudo/enem-2024-161-b.webp" alt="Alternativa B: gráfico que sobe até 2 h, fica constante de 2 h a 6 h e depois sobe em linha reta até 12 h">', explicacao: 'Correta! Cada compartimento tem 1/3 da base; a vazão enche o tanque (volume 3·A·H) em 12 h. A entrada fica sobre o compartimento da direita, cercado pelo anteparo de H/2: ele enche até H/2 em 2 h. Depois a água transborda e enche os outros dois (até H/4 e depois até H/2), o que leva mais 4 h, com a maior altura parada em H/2 de 2 h a 6 h. Por fim, o tanque inteiro sobe de H/2 a H em 6 h (de 6 h a 12 h), em ritmo constante.' },
      { letra: 'C', texto: '<img src="imagens/estudo/enem-2024-161-c.webp" alt="Alternativa C: gráfico que sobe até 2 h, fica constante de 2 h a 10 h e depois sobe rapidamente até 12 h">' },
      { letra: 'D', texto: '<img src="imagens/estudo/enem-2024-161-d.webp" alt="Alternativa D: gráfico em degraus horizontais: nível médio até 2 h, baixo de 2 h a 4 h, médio de 4 h a 6 h e alto de 6 h a 12 h, sem ligação vertical">' },
      { letra: 'E', texto: '<img src="imagens/estudo/enem-2024-161-e.webp" alt="Alternativa E: gráfico em degraus ligados: nível médio até 2 h, baixo de 2 h a 4 h, médio de 4 h a 6 h e alto de 6 h a 12 h">' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2024-162',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 162,
    disciplina: 'Matemática',
    conteudo: 'mat-3a4',
    subtopico: 'Progressão geométrica',
    dificuldade: 'dificil',
    enunciado: `
      <p>Uma imobiliária iniciou uma campanha de divulgação para promover a venda de apartamentos que podem ser pagos em 100 parcelas mensais. O valor da primeira delas é fixado no momento da compra, com o pagamento dessa primeira parcela. A partir da segunda parcela, o valor é determinado pela aplicação de um acréscimo percentual fixo ao valor da parcela anterior. Como atrativo, a imobiliária fará o pagamento de todas as parcelas correspondentes ao mês de aniversário do comprador.</p>
      <p>Um cliente, que faz aniversário no mês de maio, decidiu comprar um desses apartamentos por meio do financiamento oferecido pela imobiliária, e pretende escolher o mês mais adequado para realizar essa compra, de modo que o valor total dos pagamentos seja o menor possível.</p>
      <p>Qual é o mês que esse cliente deverá escolher para realizar a compra do apartamento?</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'Fevereiro.', explicacao: 'Correta! As parcelas crescem (PG de razão maior que 1), então convém que as parcelas de maio sejam as mais altas e em maior número. 100 parcelas = 8 anos e 4 meses. Comprando em fevereiro, a parcela 1 é em fevereiro e a 100ª cai em maio (fevereiro + 99 meses): são 9 maios pagos pela imobiliária, incluindo a última e maior parcela.' },
      { letra: 'B', texto: 'Abril.' },
      { letra: 'C', texto: 'Maio.' },
      { letra: 'D', texto: 'Junho.' },
      { letra: 'E', texto: 'Agosto.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2024-163',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 163,
    disciplina: 'Matemática',
    conteudo: 'mat-2b4',
    subtopico: 'Comprimento de arco',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2024-163.webp',
    enunciado: `
      <p>Um sistema de polias circulares e correias é um dos mecanismos responsáveis pela transmissão de movimento em máquinas rotativas. O manual de um motor traz uma figura representando um sistema composto por duas polias e uma correia de transmissão, tensionada e perfeitamente ajustada sobre as polias, de modo a não apresentar folgas nos contatos com as polias. Considere que as partes dessa correia que não ficam em contato com as polias são representadas por segmentos de reta tangentes às polias.</p>
      <p>Para substituição dessa correia, é necessária a especificação de seu comprimento.</p>
      <p>Considere 3 como valor aproximado para π.</p>
      <p>A medida do comprimento dessa correia, em centímetro, é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '54.' },
      { letra: 'B', texto: '60.' },
      { letra: 'C', texto: '66.' },
      { letra: 'D', texto: '68.', explicacao: 'Correta! Na polia A (r = 4 cm) a correia cobre 150°: (150/360) · 2 · 3 · 4 = 10 cm. Na polia B (R = 8 cm) cobre 360° − 150° = 210°: (210/360) · 2 · 3 · 8 = 28 cm. Somando os dois segmentos de 15 cm: 10 + 28 + 30 = 68 cm.' },
      { letra: 'E', texto: '72.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-164',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 164,
    disciplina: 'Matemática',
    conteudo: 'mat-2b2',
    subtopico: 'Triângulo equilátero e circuncentro',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2024-164.webp',
    enunciado: `
      <p>A prefeitura de uma cidade planeja construir três postos de saúde. Esses postos devem ser construídos em locais equidistantes entre si e de forma que as distâncias desses três postos ao hospital dessa cidade sejam iguais. Foram conseguidos três locais para a construção dos postos de saúde que apresentam as características desejadas, e que distam 10 km entre si, conforme o esquema, no qual o ponto <i>H</i> representa o local onde está construído o hospital; os pontos <i>P</i><sub>1</sub>, <i>P</i><sub>2</sub> e <i>P</i><sub>3</sub>, os postos de saúde; e esses quatro pontos estão em um mesmo plano.</p>
      <p>A distância, em quilômetro, entre o hospital e cada um dos postos de saúde, é um valor entre</p>
    `,
    alternativas: [
      { letra: 'A', texto: '2 e 3.' },
      { letra: 'B', texto: '4 e 5.' },
      { letra: 'C', texto: '5 e 6.', explicacao: 'Correta! H é o centro do triângulo equilátero de lado 10 km; a distância a cada vértice é o raio circunscrito: R = 2/3 da altura = (2/3) · (10√3/2) = 10√3/3 ≈ 5,77 km.' },
      { letra: 'D', texto: '7 e 8.' },
      { letra: 'E', texto: '8 e 9.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-165',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 165,
    disciplina: 'Matemática',
    conteudo: 'mat-3b3',
    subtopico: 'Eventos independentes',
    dificuldade: 'media',
    enunciado: `
      <p>Para melhorar o fluxo de ônibus em uma avenida que tem dois semáforos, a prefeitura reduzirá o tempo em que cada sinal ficará vermelho, que atualmente é de 15 segundos a cada 60 segundos. Admita que o instante de chegada de um ônibus a cada semáforo é aleatório.</p>
      <p>O engenheiro de tráfego da prefeitura calculou a probabilidade de um ônibus encontrar cada um deles vermelho, obtendo 15/60. A partir daí, estabeleceu uma mesma redução na quantidade do tempo, em segundo, em que cada sinal ficará vermelho, de maneira que a probabilidade de um ônibus encontrar ambos os sinais vermelhos numa mesma viagem seja igual a 4/100, considerando os eventos independentes.</p>
      <p>Para isso, a redução do tempo em que o sinal ficará vermelho, em segundo, estabelecida pelo engenheiro foi de</p>
    `,
    alternativas: [
      { letra: 'A', texto: '1,35.' },
      { letra: 'B', texto: '3,00.', explicacao: 'Correta! Com redução x, cada sinal fica vermelho com probabilidade (15 − x)/60. Independentes: [(15 − x)/60]² = 4/100 ⇒ (15 − x)/60 = 2/10 ⇒ 15 − x = 12 ⇒ x = 3 s.' },
      { letra: 'C', texto: '9,00.' },
      { letra: 'D', texto: '12,60.' },
      { letra: 'E', texto: '13,80.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2024-166',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 166,
    disciplina: 'Matemática',
    conteudo: 'mat-1a4',
    subtopico: 'Razão (densidade demográfica)',
    dificuldade: 'facil',
    enunciado: `
      <p>A densidade demográfica de uma região é definida como sendo a razão entre o número de habitantes dessa região e sua área, expressa na unidade habitantes por quilômetro quadrado.</p>
      <p>Uma região <i>R</i> é subdividida em várias outras, sendo uma delas a região <i>Q</i>. A área de <i>Q</i> é igual a três quartos da área de <i>R</i>, e o número de habitantes de <i>Q</i> é igual à metade do número de habitantes de <i>R</i>. As densidades demográficas correspondentes a essas regiões são denotadas por <i>d</i>(<i>Q</i>) e <i>d</i>(<i>R</i>).</p>
      <p>A expressão que relaciona <i>d</i>(<i>Q</i>) e <i>d</i>(<i>R</i>) é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '<i>d</i>(<i>Q</i>) = (1/4) <i>d</i>(<i>R</i>)' },
      { letra: 'B', texto: '<i>d</i>(<i>Q</i>) = (1/2) <i>d</i>(<i>R</i>)' },
      { letra: 'C', texto: '<i>d</i>(<i>Q</i>) = (3/4) <i>d</i>(<i>R</i>)' },
      { letra: 'D', texto: '<i>d</i>(<i>Q</i>) = (3/2) <i>d</i>(<i>R</i>)' },
      { letra: 'E', texto: '<i>d</i>(<i>Q</i>) = (2/3) <i>d</i>(<i>R</i>)', explicacao: 'Correta! Com N habitantes e área A em R: d(Q) = (N/2)/(3A/4) = (1/2) · (4/3) · N/A = (2/3) d(R).' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2024-167',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 167,
    disciplina: 'Matemática',
    conteudo: 'mat-1a1',
    subtopico: 'Frações e números mistos',
    dificuldade: 'facil',
    imagem: 'imagens/estudo/enem-2024-167.webp',
    legenda: '<small>Disponível em: www.tecmundo.com.br. Acesso em: 5 nov. 2014 (adaptado).</small>',
    enunciado: `
      <p>Atualmente, há telefones celulares com telas de diversos tamanhos e em formatos retangulares. Alguns deles apresentam telas medindo 3 <sup>1</sup>/<sub>2</sub> polegadas, com determinadas especificações técnicas. Além disso, em muitos modelos, com a inclusão de novas funções no celular, suas telas ficaram maiores, sendo muito comum encontrarmos atualmente telas medindo 4 <sup>5</sup>/<sub>6</sub> polegadas, conforme a figura.</p>
      <p>A diferença de tamanho, em valor absoluto, entre as medidas, em polegada, das telas do celular 2 e do celular 1, representada apenas com uma casa decimal, é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '0,1.' },
      { letra: 'B', texto: '0,5.' },
      { letra: 'C', texto: '1,0.' },
      { letra: 'D', texto: '1,3.', explicacao: 'Correta! 4 5/6 − 3 1/2 = 29/6 − 21/6 = 8/6 = 4/3 ≈ 1,333…, que com uma casa decimal é 1,3.' },
      { letra: 'E', texto: '1,8.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-168',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 168,
    disciplina: 'Matemática',
    conteudo: 'mat-4a2',
    subtopico: 'Funções trigonométricas (amplitude)',
    dificuldade: 'facil',
    enunciado: `
      <p>Projetistas de uma fábrica de amortecedores realizaram uma série de experimentos que produziram oscilações semelhantes ao comportamento do gráfico de uma senoide, para qualquer tipo de estrada. Cada experimento teve duração de 20 minutos, sendo os 9 primeiros minutos em superfície que simula uma rodovia asfaltada, e os 11 minutos restantes em superfície que simula uma estrada de chão.</p>
      <p>Para os amortecedores serem aprovados no experimento, exige-se que as amplitudes das ondas oscilatórias, em cada tipo de superfície, sejam constantes e, ainda, que a amplitude da oscilação do amortecedor no asfalto seja menor do que sua amplitude da oscilação na estrada de chão.</p>
      <p>O tipo de gráfico que descreve o comportamento oscilatório de um amortecedor aprovado nesse experimento é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '<img src="imagens/estudo/enem-2024-168-a.webp" alt="Alternativa A: senoide com amplitude pequena e constante até 9 min e amplitude maior e constante de 9 a 20 min">', explicacao: 'Correta! O gráfico A tem amplitude constante nos 9 primeiros minutos (asfalto) e outra amplitude constante, maior, nos 11 minutos finais (estrada de chão). Em B a amplitude no chão diminui com o tempo; em C e E a amplitude não aumenta; em D só muda a frequência.' },
      { letra: 'B', texto: '<img src="imagens/estudo/enem-2024-168-b.webp" alt="Alternativa B: senoide com amplitude pequena até 9 min e, depois, amplitude maior que vai diminuindo">' },
      { letra: 'C', texto: '<img src="imagens/estudo/enem-2024-168-c.webp" alt="Alternativa C: senoide cuja amplitude diminui depois de 9 min">' },
      { letra: 'D', texto: '<img src="imagens/estudo/enem-2024-168-d.webp" alt="Alternativa D: senoide de amplitude igual nos dois trechos, com oscilações mais rápidas depois de 9 min">' },
      { letra: 'E', texto: '<img src="imagens/estudo/enem-2024-168-e.webp" alt="Alternativa E: senoide de amplitude igual nos dois trechos, com oscilações mais lentas depois de 9 min">' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2024-169',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 169,
    disciplina: 'Matemática',
    conteudo: 'mat-3b3',
    subtopico: 'Probabilidade de eventos sucessivos',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2024-169.webp',
    legenda: '<small>Disponível em: www.codifica.ibict.br. Acesso em: 15 out. 2019.</small>',
    enunciado: `
      <p>A criptografia refere-se à construção e análise de protocolos que impedem terceiros de lerem mensagens privadas. Júlio César, imperador romano, utilizava um código para proteger as mensagens enviadas a seus generais. Assim, se a mensagem caísse em mãos inimigas, a informação não poderia ser compreendida. Nesse código, cada letra do alfabeto era substituída pela letra três posições à frente, ou seja, o “A” era substituído pelo “D”, o “B” pelo “E”, o “C” pelo “F”, e assim sucessivamente.</p>
      <p>Qualquer código que tenha um padrão de substituição de letras como o descrito é considerado uma Cifra de César ou um Código de César. Note que, para decifrar uma Cifra de César, basta descobrir por qual letra o “A” foi substituído, pois isso define todas as demais substituições a serem feitas.</p>
      <p>Uma mensagem, em um alfabeto de 26 letras, foi codificada usando uma Cifra de César. Considere a probabilidade de se descobrir, aleatoriamente, o padrão utilizado nessa codificação, e que uma tentativa frustrada deverá ser eliminada nas tentativas seguintes.</p>
      <p>A probabilidade de se descobrir o padrão dessa Cifra de César apenas na terceira tentativa é dada por</p>
    `,
    alternativas: [
      { letra: 'A', texto: '1/25 + 1/25 + 1/25' },
      { letra: 'B', texto: '24/25 + 23/24 + 1/23' },
      { letra: 'C', texto: '1/25 × 1/24 × 1/23' },
      { letra: 'D', texto: '24/25 × 23/25 × 1/25' },
      { letra: 'E', texto: '24/25 × 23/24 × 1/23', explicacao: 'Correta! O “A” pode ter sido trocado por qualquer uma das outras 25 letras (25 padrões). Errar na 1ª (24/25), errar na 2ª entre os 24 restantes (23/24) e acertar na 3ª entre os 23 restantes (1/23): P = 24/25 × 23/24 × 1/23.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2024-170',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 170,
    disciplina: 'Matemática',
    conteudo: 'mat-2a5',
    subtopico: 'Logaritmos (escala Richter)',
    dificuldade: 'facil',
    enunciado: `
      <p>Em uma região com grande incidência de terremotos, observou-se que dois terremotos ocorridos apresentaram magnitudes <i>M</i><sub>1</sub> e <i>M</i><sub>2</sub>, medidos segundo a escala Richter, e liberaram energias iguais a <i>E</i><sub>1</sub> e <i>E</i><sub>2</sub>, respectivamente. Entre os estudiosos do assunto, é conhecida uma expressão algébrica relacionando esses valores dada por</p>
      <p style="text-align:center"><i>M</i><sub>2</sub> − <i>M</i><sub>1</sub> = (2/3) <i>log</i>(<i>E</i><sub>2</sub>/<i>E</i><sub>1</sub>)</p>
      <p>Estudos mais abrangentes observaram que o primeiro terremoto apresentou a magnitude <i>M</i><sub>1</sub> = 6,9 e a energia liberada foi um décimo da observada no segundo terremoto.</p>
      <p>O valor aproximado da magnitude <i>M</i><sub>2</sub> do segundo terremoto, expresso com uma casa decimal, é igual a</p>
    `,
    alternativas: [
      { letra: 'A', texto: '5,4.' },
      { letra: 'B', texto: '6,2.' },
      { letra: 'C', texto: '7,6.', explicacao: 'Correta! E<sub>1</sub> = E<sub>2</sub>/10 ⇒ E<sub>2</sub>/E<sub>1</sub> = 10 e log 10 = 1. M<sub>2</sub> = 6,9 + (2/3) · 1 ≈ 6,9 + 0,67 = 7,57 ≈ 7,6.' },
      { letra: 'D', texto: '8,2.' },
      { letra: 'E', texto: '8,4.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-171',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 171,
    disciplina: 'Matemática',
    conteudo: ['mat-2b3', 'mat-2b2'],
    subtopico: 'Áreas de polígonos regulares',
    dificuldade: 'media',
    enunciado: `
      <p>Um jardineiro dispõe de <i>k</i> metros lineares de cerca baixa para fazer um jardim ornamental. O jardim, delimitado por essa cerca, deve ter a forma de um triângulo equilátero, um quadrado ou um hexágono regular. A escolha será pela forma que resulte na maior área.</p>
      <p>O jardineiro escolherá a forma de</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'hexágono regular, pois a área do jardim, em metro quadrado, será <i>k</i><sup>2</sup>√3/24.', explicacao: 'Correta! Com o mesmo perímetro, o polígono com mais lados tem a maior área. Hexágono de lado k/6: A = 6 · (√3/4)(k/6)² = k²√3/24 ≈ 0,072k², maior que a do quadrado (k²/16 ≈ 0,0625k²) e a do triângulo (k²√3/36 ≈ 0,048k²).' },
      { letra: 'B', texto: 'hexágono regular, pois a área do jardim, em metro quadrado, será 3<i>k</i><sup>2</sup>√3/2.' },
      { letra: 'C', texto: 'quadrado, pois a área do jardim, em metro quadrado, será <i>k</i><sup>2</sup>/16.' },
      { letra: 'D', texto: 'triângulo equilátero, pois a área do jardim, em metro quadrado, será <i>k</i><sup>2</sup>√3/36.' },
      { letra: 'E', texto: 'triângulo equilátero, pois a área do jardim, em metro quadrado, será <i>k</i><sup>2</sup>√3/4.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2024-172',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 172,
    disciplina: 'Matemática',
    conteudo: ['mat-1a4', 'mat-1a1'],
    subtopico: 'Velocidade, encontro e frações',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2024-172.webp',
    enunciado: `
      <p>Um aeroporto disponibiliza o serviço de transporte gratuito entre seus dois terminais utilizando os ônibus A e B, que partem simultaneamente, de hora em hora, de terminais diferentes. A distância entre os terminais é de 9 000 metros, e o percurso total dos ônibus, de um terminal ao outro, é monitorado por um sistema de cinco câmeras que cobrem diferentes partes do trecho, conforme o esquema.</p>
      <p>O alcance de cada uma das cinco câmeras é:</p>
      <ul>
        <li>câmera I: 1/5 do percurso;</li>
        <li>câmera II: 3/10 do percurso;</li>
        <li>câmera III: 1/10 do percurso;</li>
        <li>câmera IV: 1/10 do percurso;</li>
        <li>câmera V: 3/10 do percurso.</li>
      </ul>
      <p>Em determinado horário, o ônibus A parte do terminal 1 e realiza o percurso total com velocidade constante de 250 m/min; enquanto o ônibus B, que parte do terminal 2, realiza o percurso total com velocidade constante de 150 m/min.</p>
      <p>Qual câmera registra o momento em que os ônibus A e B se encontram?</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'I' },
      { letra: 'B', texto: 'II' },
      { letra: 'C', texto: 'III' },
      { letra: 'D', texto: 'IV', explicacao: 'Correta! Encontro: t = 9 000/(250 + 150) = 22,5 min; A andou 250 × 22,5 = 5 625 m = 5 625/9 000 = 0,625 do percurso a partir do terminal 1. As câmeras cobrem, a partir do terminal 1: I até 0,2; II até 0,5; III até 0,6; IV até 0,7; V até 1. O ponto 0,625 fica na câmera IV.' },
      { letra: 'E', texto: 'V' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-173',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 173,
    disciplina: 'Matemática',
    conteudo: ['mat-3b1', 'mat-1a5'],
    subtopico: 'Gráfico de barras com porcentagens',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2024-173.webp',
    enunciado: `
      <p>Uma empresa tem 400 funcionários, distribuídos em três setores: administrativo, logística e produção. O gráfico apresenta a distribuição quantitativa desses funcionários, por setor e por faixa etária.</p>
      <p>Uma viagem de férias será sorteada entre esses funcionários, de forma que todos terão igual probabilidade de serem sorteados.</p>
      <p>A maior probabilidade é que o funcionário sorteado esteja na faixa etária</p>
    `,
    alternativas: [
      { letra: 'A', texto: 'entre 25 e 45 anos, pois é a faixa etária com maior quantidade de funcionários.', explicacao: 'Correta! Setores: 80, 120 e 200 funcionários. Entre 25 e 45 anos: 30% de 80 + 40% de 120 + 35% de 200 = 24 + 48 + 70 = 142. Até 25: 16 + 30 + 80 = 126. A partir de 45: 40 + 42 + 50 = 132. A faixa de 25 a 45 anos tem mais funcionários, logo maior probabilidade.' },
      { letra: 'B', texto: 'entre 25 e 45 anos, pois é a única faixa etária cujas porcentagens são maiores do que as porcentagens mínimas de cada setor.' },
      { letra: 'C', texto: 'até 25 anos, pois é a única faixa etária cujos percentuais associados aos setores aumentam com o aumento da quantidade de funcionários por setor.' },
      { letra: 'D', texto: 'até 25 anos, pois é a faixa etária que apresenta maior quantidade de funcionários no setor de produção, que é o setor que emprega metade dos funcionários dessa empresa.' },
      { letra: 'E', texto: 'a partir de 45 anos, pois a soma das porcentagens associadas a essa faixa etária é 110%, que é maior do que as respectivas somas associadas às outras faixas etárias, que são 105% e 85%.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'enem-2024-174',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 174,
    disciplina: 'Matemática',
    conteudo: 'mat-3a1',
    subtopico: 'Projeção ortogonal',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2024-174.webp',
    enunciado: `
      <p>Em um jogo virtual para celular, um personagem pode percorrer trajetórias retilíneas voando ou se deslocando ao longo de paredes. Considere que o personagem descreve a trajetória <i>ABCDEF</i>, em que os pontos <i>A</i>, <i>D</i> e <i>E</i> estão em um plano paralelo ao que contém os pontos <i>B</i> e <i>C</i>, sendo esses dois planos ortogonais ao plano da base que contém o ponto <i>F</i>, conforme a figura.</p>
      <p>A projeção ortogonal, sobre o plano da base, da trajetória <i>ABCDEF</i> descrita pelo personagem é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '<img src="imagens/estudo/enem-2024-174-a.webp" alt="Alternativa A: projeção com um segmento inclinado, um segmento horizontal e um segmento inclinado até a base">' },
      { letra: 'B', texto: '<img src="imagens/estudo/enem-2024-174-b.webp" alt="Alternativa B: projeção em zigue-zague com dois segmentos inclinados e um segmento inclinado até a base">' },
      { letra: 'C', texto: '<img src="imagens/estudo/enem-2024-174-c.webp" alt="Alternativa C: projeção em zigue-zague com dois segmentos inclinados, um segmento sobre a lateral direita e um segmento inclinado até a base">', explicacao: 'Correta! BC é vertical sobre a parede esquerda e se projeta num ponto; AB e CD cruzam entre as paredes e viram dois segmentos inclinados (zigue-zague); DE, contido na parede direita, se projeta como um segmento sobre a lateral direita; e EF desce até F, na base. Essa é a figura C.' },
      { letra: 'D', texto: '<img src="imagens/estudo/enem-2024-174-d.webp" alt="Alternativa D: projeção com segmento inclinado, segmento vertical na lateral esquerda, segmento horizontal, segmento vertical na lateral direita e segmento inclinado até a base">' },
      { letra: 'E', texto: '<img src="imagens/estudo/enem-2024-174-e.webp" alt="Alternativa E: projeção com segmento inclinado, segmento horizontal, pequeno segmento vertical na lateral direita e segmento inclinado até a base">' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-175',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 175,
    disciplina: 'Matemática',
    conteudo: 'mat-3a2',
    subtopico: 'Volume do cilindro',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2024-175.webp',
    enunciado: `
      <p>Uma indústria faz uma parceria com uma distribuidora de sucos para lançar no mercado dois tipos de embalagens. Para a fabricação dessas embalagens, a indústria dispõe de folhas de alumínio retangulares, de dimensões 10 cm por 20 cm. Cada uma dessas folhas é utilizada para formar a superfície lateral da embalagem, em formato de cilindro circular reto, que posteriormente recebe fundo e tampa circulares. A figura ilustra, dependendo de qual das duas extensões será utilizada como altura, as duas opções para formar a possível embalagem.</p>
      <p>Dentre essas duas embalagens, a de maior capacidade apresentará volume, em centímetro cúbico, igual a</p>
    `,
    alternativas: [
      { letra: 'A', texto: '4 000 π' },
      { letra: 'B', texto: '2 000 π' },
      { letra: 'C', texto: '4 000/π' },
      { letra: 'D', texto: '1 000/π', explicacao: 'Correta! Embalagem 1: 2πr = 10 ⇒ r = 5/π, h = 20: V = π(5/π)² · 20 = 500/π. Embalagem 2: 2πr = 20 ⇒ r = 10/π, h = 10: V = π(10/π)² · 10 = 1 000/π, a maior.' },
      { letra: 'E', texto: '500/π' },
    ],
    gabarito: 'D',
  },
  {
    id: 'enem-2024-176',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 176,
    disciplina: 'Matemática',
    conteudo: 'mat-2a2',
    subtopico: 'Função afim (reta de tendência)',
    dificuldade: 'media',
    imagem: 'imagens/estudo/enem-2024-176.webp',
    enunciado: `
      <p>As receitas anuais obtidas por uma indústria no período de 2014 a 2021, em milhão de reais, foram registradas, por pontos, em um gráfico. Nele, também está representada a reta que descreve a tendência de evolução das receitas. Essa reta pode ser utilizada para estimar as receitas dos anos seguintes.</p>
      <p>A estimativa da receita, em milhão de reais, dessa indústria, para o ano de 2026, obtida a partir dessa reta de tendência, é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '7.' },
      { letra: 'B', texto: '8.', explicacao: 'Correta! A reta passa por (2017; 5) e (2020; 6): sobe 1 milhão a cada 3 anos. De 2020 a 2026 são 6 anos, ou seja, +2: 6 + 2 = 8 milhões de reais.' },
      { letra: 'C', texto: '9.' },
      { letra: 'D', texto: '10.' },
      { letra: 'E', texto: '11.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'enem-2024-177',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 177,
    disciplina: 'Matemática',
    conteudo: 'mat-2a2',
    subtopico: 'Função afim (custo fixo e variável)',
    dificuldade: 'facil',
    enunciado: `
      <p>Uma empresa produz mochilas escolares sob encomenda. Essa empresa tem um custo total de produção, composto por um custo fixo, que não depende do número de mochilas, mais um custo variável, que é proporcional ao número de mochilas produzidas. O custo total cresce de forma linear, e a tabela apresenta esse custo para três quantidades de mochilas produzidas.</p>
      <table class="tabela-prova">
        <tr><th>Quantidade de mochilas</th><td>30</td><td>50</td><td>100</td></tr>
        <tr><th>Custo total (R$)</th><td>1 050,00</td><td>1 650,00</td><td>3 150,00</td></tr>
      </table>
      <p>O custo total, em real, para a produção de 80 mochilas será</p>
    `,
    alternativas: [
      { letra: 'A', texto: '2 400,00.' },
      { letra: 'B', texto: '2 520,00.' },
      { letra: 'C', texto: '2 550,00.', explicacao: 'Correta! Custo por mochila: (1 650 − 1 050)/(50 − 30) = R$ 30. Custo fixo: 1 050 − 30 · 30 = R$ 150. Para 80 mochilas: 150 + 30 · 80 = R$ 2 550,00.' },
      { letra: 'D', texto: '2 700,00.' },
      { letra: 'E', texto: '2 800,00.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-178',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 178,
    disciplina: 'Matemática',
    conteudo: 'mat-3b1',
    subtopico: 'Mediana',
    dificuldade: 'facil',
    enunciado: `
      <p>A umidade relativa do ar é um dos indicadores utilizados na meteorologia para fazer previsões sobre o clima. O quadro apresenta as médias mensais, em porcentagem, da umidade relativa do ar em um período de seis meses consecutivos em uma cidade.</p>
      <table class="tabela-prova">
        <tr><th>Meses</th><td>Maio</td><td>Jun.</td><td>Jul.</td><td>Ago.</td><td>Set.</td><td>Out.</td></tr>
        <tr><th>Média mensal da umidade relativa do ar (%)</th><td>66</td><td>64</td><td>54</td><td>46</td><td>60</td><td>64</td></tr>
      </table>
      <p>Nessa cidade, a mediana desses dados, em porcentagem, da umidade relativa do ar no período considerado foi</p>
    `,
    alternativas: [
      { letra: 'A', texto: '56.' },
      { letra: 'B', texto: '58.' },
      { letra: 'C', texto: '59.' },
      { letra: 'D', texto: '60.' },
      { letra: 'E', texto: '62.', explicacao: 'Correta! Em ordem: 46, 54, 60, 64, 64, 66. Com 6 dados, a mediana é a média dos dois centrais: (60 + 64)/2 = 62.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'enem-2024-179',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 179,
    disciplina: 'Matemática',
    conteudo: ['mat-1a4', 'mat-1a5'],
    subtopico: 'Divisão proporcional',
    dificuldade: 'media',
    enunciado: `
      <p>Uma empresa de engenharia foi contratada para realizar um serviço no valor de R$ 71 250,00. Os sócios da empresa decidiram que 40% desse valor seria destinado ao pagamento de três engenheiros que gerenciaram o serviço. O pagamento para cada um deles será feito de forma diretamente proporcional ao total de horas trabalhadas. O número de dias e o número de horas diárias trabalhadas pelos engenheiros foram, respectivamente:</p>
      <ul>
        <li>engenheiro I: 4 dias, numa jornada de 5 horas e meia por dia;</li>
        <li>engenheiro II: 5 dias, numa jornada de 4 horas por dia;</li>
        <li>engenheiro III: 6 dias, numa jornada de 2 horas e meia por dia.</li>
      </ul>
      <p>Qual a maior diferença, em real, entre os valores recebidos por esse serviço entre dois desses engenheiros?</p>
    `,
    alternativas: [
      { letra: 'A', texto: '1 000' },
      { letra: 'B', texto: '1 500' },
      { letra: 'C', texto: '3 500', explicacao: 'Correta! 40% de 71 250 = R$ 28 500. Horas: I = 4 × 5,5 = 22; II = 5 × 4 = 20; III = 6 × 2,5 = 15; total 57 h, ou seja, 28 500/57 = R$ 500 por hora. Maior diferença: (22 − 15) × 500 = R$ 3 500.' },
      { letra: 'D', texto: '3 800' },
      { letra: 'E', texto: '5 250' },
    ],
    gabarito: 'C',
  },
  {
    id: 'enem-2024-180',
    prova: 'ENEM 2024', vestibular: 'ENEM', ano: 2024,
    numeroOriginal: 180,
    disciplina: 'Matemática',
    conteudo: 'mat-3b2',
    subtopico: 'Combinações',
    dificuldade: 'media',
    enunciado: `
      <p>Um hospital tem 7 médicos cardiologistas e 6 médicos neurologistas em seu quadro de funcionários. Para executar determinada atividade, a direção desse hospital formará uma equipe com 5 médicos, sendo, pelo menos, 3 cardiologistas.</p>
      <p>A expressão numérica que representa o número máximo de maneiras distintas de formar essa equipe é</p>
    `,
    alternativas: [
      { letra: 'A', texto: '7!/4! × 6!/4!' },
      { letra: 'B', texto: '7!/(3! × 4!) × 6!/(2! × 4!)' },
      { letra: 'C', texto: '7!/(3! × 4!) + 6!/(2! × 4!) + 5!/(1! × 4!)' },
      { letra: 'D', texto: '(7!/(3! × 4!) + 6!/(2! × 4!)) × (7!/(4! × 3!) + 6!/(1! × 5!)) × (7!/(5! × 2!) + 6!/(0! × 6!))' },
      { letra: 'E', texto: '(7!/(3! × 4!) × 6!/(2! × 4!)) + (7!/(4! × 3!) × 6!/(1! × 5!)) + (7!/(5! × 2!) × 6!/(0! × 6!))', explicacao: 'Correta! “Pelo menos 3 cardiologistas” = 3C e 2N, ou 4C e 1N, ou 5C e 0N (casos que se somam). Em cada caso, multiplicam-se as combinações: C(7,3)·C(6,2) + C(7,4)·C(6,1) + C(7,5)·C(6,0), com C(n,p) = n!/(p!(n − p)!).' },
    ],
    gabarito: 'E',
  },
);
