/**
 * PUCPR Vestibular de Verão — MEDICINA (prova de 11/10/2026, ingresso 2027/1) — Prova 1, BRANCA
 * (Português 01–09, Literatura 10–12, Biologia 13–20, Química 21–28, Matemática 29–37, Física 38–42,
 * História 43–47, Geografia 48–52, Filosofia 53–54, Inglês 55–60).
 *
 * Fonte: Provas/Outros/PUCPR/2027-Verao-Medicina (out-2026) - Prova Branca com Gabarito Definitivo.pdf
 * (o gabarito definitivo é a alternativa destacada no próprio caderno); gabarito em JSON:
 * Provas/Outros/PUCPR/2027_gabarito.json.
 * Fora: 11 (Literatura que depende da leitura integral da obra), 53–54 (Filosofia).
 * Questões de ESTUDO — nunca entram nos simulados. Aparecem no módulo da matéria, dentro do
 * capítulo do campo `conteudo` (Literatura e línguas: pelo `subtopico`).
 * Formato das questões: veja README.md ("Como adicionar uma questão nova").
 */

var TEXTO_PUCPR_2027_CAVERNA = `
  <p><b>Caverna no Paraná revela influência da Antártida e do El Niño em chuvas extremas no Sul do Brasil</b></p>
  <p><i>Pesquisadores analisaram amostras de sedimentos preservados em estalagmites para reconstruir histórico de eventos climáticos na região. Século 20 concentra uma das maiores frequências de eventos extremos dos últimos 7,5 mil anos</i></p>
  <p><small><b>Por Luciana Constantino, da Agência FAPESP</b><br>28/06/2026</small></p>
  <p>Uma caverna no interior do Paraná guarda um “arquivo climático” que permitiu a pesquisadores brasileiros reconstruir a história das chuvas extremas na região Sul do Brasil nos últimos 7,5 mil anos. O resultado mostrou que a frequência desses eventos no século 20 figura entre as mais elevadas de toda a série histórica e apontou dois fatores que influenciam esse processo: a variabilidade climática no continente antártico e a ocorrência de El Niño – ambos presentes no cenário atual.</p>
  <p>Os cientistas descobriram que períodos de verão com temperaturas mais baixas na Antártida Ocidental tendem a coincidir com mais eventos extremos no Sul do Brasil. A hipótese é que mudanças no gradiente térmico entre altas e médias latitudes (ou seja, entre as regiões polares, que são mais frias, e as zonas temperadas e subtropicais, mais quentes) alterem a circulação atmosférica, favorecendo a formação de frentes frias e o transporte de umidade da Amazônia para a região.</p>
  <p><small>Disponível em: &lt;https://revistagalileu.globo.com/ciencia/meio-ambiente/noticia/2026/06/caverna-no-parana-revela-influencia-da-antartida-e-do-el-nino-em-chuvas-extremas-no-sul-do-brasil.ghtml&gt;. Acesso em: 28 jun. 2026.</small></p>
`;

var TEXTO_PUCPR_2027_GILA = `
  <p>Leia o texto a seguir e responda as questões <b><u>8</u></b> e <b><u>9</u></b>.</p>
  <p><b>O monstro de Gila e as canetas emagrecedoras</b></p>
  <p>Estima-se que existam na natureza mais de 200 mil espécies de animais que utilizam venenos e peçonhas. Seja como defesa contra predadores ou arma para imobilização de presas, essa é uma das estratégias mais bem sucedidas de sobrevivência entre os animais, moldada por milhões de anos de evolução bioquímica e presente em todos os ramos da árvore da vida. Os venenos animais são tipicamente compostos por uma mistura complexa de centenas ou até milhares de substâncias químicas, são coquetéis bioativos complexos e sofisticados, cujos principais componentes são proteínas e peptídeos. Além das substâncias tóxicas, as secreções produzidas por esses organismos carregam diversas outras moléculas, com inúmeras atividades biológicas, incluindo efeitos analgésicos, anticoagulantes, anti-hipertensivos, anticancerígenos, antimicrobianos e neuroprotetores.</p>
  <p>Atualmente, a disciplina de toxinologia, uma subárea da toxicologia, é responsável pelo estudo de venenos e toxinas produzidas por microrganismos, animais e plantas. O objetivo mais óbvio dessa área de pesquisa é desenvolver antídotos mais eficazes e acessíveis para o tratamento de envenenamentos por cobras, aranhas e escorpiões. Mas cientistas do mundo inteiro já perceberam que os componentes do veneno de diferentes animais podem ser transformados em medicamentos para tratar doenças. Um exemplo de sucesso dessa abordagem é o Captopril, um medicamento para hipertensão, que foi isolado do veneno da jararaca.</p>
  <p>A mais recente adição ao rol dos medicamentos inspirados em venenos, e talvez a mais famosa, são os agonistas de GLP-1, as drogas utilizadas nas “canetas emagrecedoras”. Agonistas são moléculas que se ligam a um receptor nas células do nosso corpo e ativam esses receptores. Na prática, a célula é enganada, e pensa que seu receptor está sendo ativado pelo seu ligante natural. É exatamente assim que as canetas emagrecedoras funcionam: imitando a atividade do GLP-1.</p>
  <p><small>Disponível em: &lt; O monstro de Gila e as canetas emagrecedoras - Ciência HojeCiência Hoje&gt;. Acesso em: 20 jun. 2026.</small></p>
`;

var PUCPR_2027_BASE = { prova: 'PUCPR Medicina 2027/1', vestibular: 'PUCPR', ano: 2027 };

QUESTOES.push(
  // ───────────── LÍNGUA PORTUGUESA (01 a 09) ─────────────
  {
    id: 'pucpr-2027-001', ...PUCPR_2027_BASE, numeroOriginal: 1,
    disciplina: 'Português', conteudo: 'por-2a5', subtopico: 'Interpretação de texto', dificuldade: 'facil',
    textoApoio: `<p>O texto a seguir é referência para as próximas duas questões.</p>` + TEXTO_PUCPR_2027_CAVERNA,
    enunciado: `<p>Com base nas informações apresentadas no texto sobre a pesquisa realizada em uma caverna no Paraná, assinale a alternativa <b><u>CORRETA</u></b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A pesquisa sugere que o resfriamento de verão na Antártida Ocidental altera a circulação da atmosfera devido à diferença de temperatura entre regiões polares e temperadas, intensificando as chuvas no Sul.', explicacao: 'Correta! O texto diz que verões mais frios na Antártida Ocidental coincidem com mais eventos extremos no Sul e que a hipótese é a de que a mudança no gradiente térmico entre altas e médias latitudes altere a circulação atmosférica, favorecendo frentes frias e umidade.' },
      { letra: 'B', texto: 'O estudo baseou-se na análise de sedimentos amazônicos para provar que o El Niño é o único responsável pelo aumento de chuvas extremas no Sul do Brasil durante o século 20.' },
      { letra: 'C', texto: 'O aumento da frequência de eventos climáticos extremos no Sul do Brasil, registrado no século 20, é um fenômeno inédito e sem paralelos nos últimos 7,5 mil anos.' },
      { letra: 'D', texto: 'As estalagmites encontradas na caverna paranaense permitiram concluir que o transporte de umidade da Amazônia para o Sul do Brasil foi completamente interrompido no cenário climático atual.' },
      { letra: 'E', texto: 'Os pesquisadores descobriram que o cenário atual de chuvas extremas é fruto de fatores geográficos específicos da região Sul, descartando a interferência de fenômenos globais.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2027-002', ...PUCPR_2027_BASE, numeroOriginal: 2,
    disciplina: 'Português', conteudo: ['por-3b4', 'por-3b2'], subtopico: 'Pontuação', dificuldade: 'media',
    textoApoio: TEXTO_PUCPR_2027_CAVERNA,
    enunciado: `<p>Releia o trecho a seguir: "A hipótese é que mudanças no gradiente térmico entre altas e médias latitudes (ou seja, entre as regiões polares, que são mais frias, e as zonas temperadas e subtropicais, mais quentes) alterem a circulação atmosférica..."</p>
      <p>Sobre o uso dos sinais de pontuação no trecho entre parênteses, assinale a alternativa <b><u>CORRETA</u></b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Os parênteses poderiam ser substituídos por um único travessão logo após "latitudes", mantendo-se a correção gramatical e o sentido original.' },
      { letra: 'B', texto: 'A vírgula após a palavra <i>"subtropicais"</i> indica a supressão (elipse) do termo <i>"regiões"</i>, servindo para evitar a repetição da palavra.' },
      { letra: 'C', texto: 'O uso dos parênteses é inadequado no padrão culto da língua, pois interrompe abruptamente o fluxo sintático entre o sujeito e o verbo da oração principal.' },
      { letra: 'D', texto: 'Se a vírgula depois de <i>"subtropicais"</i> fosse retirada, a estrutura gramatical e o sentido do texto permaneceriam intactos.' },
      { letra: 'E', texto: 'As vírgulas que isolam a expressão <i>"que são mais frias"</i> são obrigatórias porque introduzem uma oração subordinada adjetiva explicativa.', explicacao: 'Correta! "que são mais frias" acrescenta uma informação sobre todas as regiões polares (não as restringe): é oração adjetiva explicativa, que obrigatoriamente vem entre vírgulas. A vírgula após "subtropicais" marca a elipse de "que são", não de "regiões".' },
    ],
    gabarito: 'E',
  },
  {
    id: 'pucpr-2027-003', ...PUCPR_2027_BASE, numeroOriginal: 3,
    disciplina: 'Português', conteudo: 'por-4b2', subtopico: 'Crase', dificuldade: 'facil',
    imagem: 'imagens/estudo/pucpr-2027-003.webp',
    legendaAcima: 'O texto a seguir é referência para a próxima questão.',
    legenda: '<small>Disponível em: &lt; https://revistaplaneta.com.br/escrita-a-mao-e-inteligencia&gt;. Acesso em: 13 jun. 2026.</small>',
    enunciado: `<p>Sobre a presença do acento grave no trecho “Abandono de escrita à mão...”, assinale a alternativa <b><u>CORRETA</u></b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O uso da crase é facultativo, uma vez que a palavra "mão" é um substantivo feminino singular, permitindo que o autor optasse por usar apenas a preposição "a".' },
      { letra: 'B', texto: 'A crase ocorre obrigatoriamente por se tratar de uma locução adverbial de modo formada por palavra feminina ("à mão").', explicacao: 'Correta! "À mão" é locução adverbial de modo com núcleo feminino; nessas locuções o acento grave é obrigatório (como em "às pressas", "à vontade").' },
      { letra: 'C', texto: 'O acento grave justifica-se pela fusão da preposição "a" (exigida pelo substantivo "escrita") com o artigo definido "a" (que acompanha o substantivo "mão").' },
      { letra: 'D', texto: 'Se o termo "escrita à mão" fosse substituído por "escrita a lápis", o acento grave deveria ser mantido para garantir a clareza e a uniformidade da regência.' },
      { letra: 'E', texto: 'O acento grave foi empregado incorretamente, pois não há verbo na oração que exija a preposição "a" para complementar seu sentido.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'pucpr-2027-004', ...PUCPR_2027_BASE, numeroOriginal: 4,
    disciplina: 'Português', conteudo: 'por-2a5', subtopico: 'Interpretação de texto', dificuldade: 'facil',
    textoApoio: `<p>O texto a seguir é referência para a próxima questão.</p>
      <p><b>Fibrose cística: novas fronteiras</b></p>
      <p>A fibrose cística é uma doença genética rara em que o muco, substância essencial para lubrificar as vias aéreas, filtrar impurezas e microrganismos e auxiliar na digestão, torna-se espesso e obstrutivo, afetando os pulmões e o sistema digestivo. Antes fatal na juventude, hoje essa doença é controlada por terapias que corrigem proteínas defeituosas em 90% dos casos. A próxima revolução está nas terapias gênicas e de mRNA, que visam tratar diretamente a raiz genética do problema.</p>
      <p>A produção de muco pelo organismo é um processo diário e essencial. Embora seja mais perceptível durante um resfriado ou tosse, ele é produzido continuamente nos pulmões, no nariz e no trato digestivo, mesmo em pessoas saudáveis. Sua função é vital: lubrificar as vias aéreas, filtrar impurezas e microrganismos e auxiliar na digestão.</p>
      <p>Contudo, na fibrose cística, uma condição genética altera essa substância. Em vez de ser fluido, o muco torna-se denso e aderente, bloqueando os canais respiratórios e digestivos. Esse muco espesso e pegajoso acaba por ‘entupir’ os pulmões e o sistema digestivo. Seu acúmulo compromete a respiração e a absorção de nutrientes, além de favorecer infecções recorrentes.</p>
      <p>A fibrose cística é uma doença genética – as pessoas nascem com uma alteração prejudicial em um de seus genes. Ela afeta mais de 100 mil pessoas em todo o mundo. A maioria das pessoas com fibrose cística recebe o diagnóstico ainda bebês ou crianças pequenas.</p>
      <p><small>Disponível em: &lt; https://cienciahoje.org.br/artigo/fibrose-cistica-novas-fronteiras/&gt;. Acesso em: 13 jun. 2026.</small></p>`,
    enunciado: `<p>Com base nas informações e nos argumentos apresentados no texto "Fibrose cística: novas fronteiras", assinale a alternativa <b><u>CORRETA</u></b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O muco é uma substância maléfica produzida pelo organismo humano em momentos de adoecimento, como em resfriados, tosses ou no caso da fibrose cística.' },
      { letra: 'B', texto: 'Embora a fibrose cística ainda seja uma doença invariavelmente fatal na juventude, as pesquisas com mRNA trazem a primeira esperança de sobrevivência para os pacientes.' },
      { letra: 'C', texto: 'O texto estabelece uma linha de evolução no tratamento da doença, mostrando que as terapias atuais já corrigem proteínas defeituosas na maioria dos casos, enquanto o futuro aponta para tratamentos na raiz genética.', explicacao: 'Correta! O texto diz que a doença, "antes fatal na juventude", hoje é controlada por terapias que corrigem proteínas defeituosas em 90% dos casos, e que "a próxima revolução" são as terapias gênicas e de mRNA, que atacam a raiz genética.' },
      { letra: 'D', texto: 'A gravidade da fibrose cística reside no fato de que o organismo do paciente cessa completamente a produção de muco, deixando os pulmões e o sistema digestivo desprotegidos.' },
      { letra: 'E', texto: 'O diagnóstico da fibrose cística ocorre predominantemente na fase adulta, uma vez que os sintomas dependem do acúmulo prolongado de muco denso ao longo dos anos.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2027-005', ...PUCPR_2027_BASE, numeroOriginal: 5,
    disciplina: 'Português', conteudo: ['por-3b2', 'por-3b5'], subtopico: 'Oração reduzida', dificuldade: 'media',
    imagem: 'imagens/estudo/pucpr-2027-005.webp',
    legendaAcima: 'O texto a seguir é referência para a próxima questão.',
    legenda: '<small>Disponível em: &lt; https://www.instagram.com/tirinhadearmandinho/&gt;. Acesso em: 13 jun. 2026.</small>',
    enunciado: `<p>A oração reduzida presente no último quadrinho pode ser desenvolvida, mantendo-se o sentido original e a correção gramatical, empregando-se uma construção</p>`,
    alternativas: [
      { letra: 'A', texto: 'causal.' },
      { letra: 'B', texto: 'comparativa.' },
      { letra: 'C', texto: 'aditiva.' },
      { letra: 'D', texto: 'concessiva.', explicacao: 'Correta! "...acreditando você ou não" (reduzida de gerúndio) equivale a "embora você acredite ou não" / "mesmo que você não acredite": os fatos são verdadeiros apesar da crença do interlocutor — ideia de concessão.' },
      { letra: 'E', texto: 'consecutiva.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'pucpr-2027-006', ...PUCPR_2027_BASE, numeroOriginal: 6,
    disciplina: 'Português', conteudo: ['por-2b4', 'por-4b2'], subtopico: 'Pronomes oblíquos e regência', dificuldade: 'facil',
    textoApoio: `<p>O texto a seguir é referência para a próxima questão.</p>
      <p><b>IA decifra pergaminho completo de Herculano queimado há 2000 anos</b></p>
      <p>Federica Nicolardi, papirologista-chefe do Vesuvius Challenge, disse que as novas tecnologias são transformadoras. “Mesmo com os métodos mais bem-sucedidos disponíveis, para desenrolar fisicamente os pergaminhos e <b><u>lê-los</u></b>, era necessário <b><u>danificá-los</u></b>. Mas, com o desenrolamento virtual, não somos mais forçados a escolher entre preservar e ler esses artefatos extraordinários. Podemos fazer ambos.</p>
      <p><small><b>Folha de S. Paulo</b>. Ciência, 20 jun. 2026.</small></p>`,
    enunciado: `<p>Assinale a alternativa que analisa <b><u>CORRETAMENTE</u></b> o emprego dos pronomes oblíquos e a regência dos verbos destacados no texto.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Em “lê-los” e “danificá-los”, os pronomes exercem a função de objeto direto, substituindo a expressão “os pergaminhos”.', explicacao: 'Correta! "Ler" e "danificar" são transitivos diretos (ler os pergaminhos, danificar os pergaminhos). O pronome "os" (objeto direto) vira "los" porque os verbos terminam em -r, que cai: ler + os → lê-los; danificar + os → danificá-los.' },
      { letra: 'B', texto: 'Os verbos “ler” e “danificar” são transitivos indiretos, razão pela qual exigem pronomes que funcionam como objetos indiretos, assumindo a forma “los” por eufonia.' },
      { letra: 'C', texto: 'De acordo com a norma-padrão da língua portuguesa, o uso correto dos pronomes exigiria a forma “lhes” nas duas ocorrências, uma vez que os verbos exigem complemento preposicionado.' },
      { letra: 'D', texto: 'A alteração do pronome “os” para “los” ocorre porque os verbos estão conjugados no pretérito, o que gera alteração da terminação verbal.' },
      { letra: 'E', texto: 'O verbo “ler” classifica-se como transitivo direto e indireto no contexto, exigindo que o pronome “los” atue simultaneamente como objeto direto e indireto.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2027-007', ...PUCPR_2027_BASE, numeroOriginal: 7,
    disciplina: 'Português', conteudo: 'por-4b1', subtopico: 'Concordância', dificuldade: 'media',
    imagem: 'imagens/estudo/pucpr-2027-007.webp',
    legendaAcima: 'O <i>post</i> a seguir é referência para a próxima questão.',
    legenda: '<small>PRECISAVAM. <b>Não existe essa história [...]</b>. Instagram. @precisavam. Acesso em: 13 jun. 2026.</small>',
    enunciado: `<p>As relações de concordância são parte importante para a construção de um texto coerente e sem ambiguidades. No post em questão, caso a forma singular “tem” fosse substituída pela forma plural “têm”, quantas outras palavras teriam sua grafia alterada em obediência à norma-padrão no que se refere à concordância?</p>`,
    alternativas: [
      { letra: 'A', texto: '1.' },
      { letra: 'B', texto: '2.' },
      { letra: 'C', texto: '3.', explicacao: 'Correta! Com "têm", o sujeito passa ao plural: "<i>As pessoas</i> têm que ser <i>boas</i> no raso mesmo". Mudam "A" → "As", "pessoa" → "pessoas" e "boa" → "boas" (3 palavras); "mesmo" é advérbio (= de fato) e não varia.' },
      { letra: 'D', texto: '4.' },
      { letra: 'E', texto: '5.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2027-008', ...PUCPR_2027_BASE, numeroOriginal: 8,
    disciplina: 'Português', conteudo: 'por-2b7', subtopico: 'Pronome relativo "cujo"', dificuldade: 'media',
    textoApoio: TEXTO_PUCPR_2027_GILA,
    enunciado: `<p>Releia o seguinte trecho: "...Os venenos animais são tipicamente compostos por uma mistura complexa de centenas ou até milhares de substâncias químicas, são coquetéis bioativos complexos e sofisticados, <b><u>cujos</u></b> principais componentes são proteínas e peptídeos..."</p>
      <p>Com relação ao emprego e às relações sintático-semânticas do pronome relativo "cujos" no trecho anterior, assinale a alternativa <b><u>CORRETA</u></b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O pronome "cujos" poderia ser substituído, sem prejuízo para a correção gramatical e para o sentido original do texto, pela expressão <i>"onde os"</i>.' },
      { letra: 'B', texto: 'A substituição de <i>"cujos principais componentes"</i> por <i>"dos quais os principais componentes"</i> mantém a correção gramatical e o sentido do período.', explicacao: 'Correta! "Cujo" indica posse (os principais componentes dos coquetéis/venenos); "dos quais os principais componentes" expressa a mesma relação de posse, com correção. "Onde" só retoma lugar, "cujos os" é erro, e "cujo" concorda com o termo possuído ("componentes"), não com o antecedente.' },
      { letra: 'C', texto: 'O termo antecedente ao qual o pronome "cujos" se refere semanticamente (relação de posse) é <i>"substâncias químicas"</i>.' },
      { letra: 'D', texto: 'Do ponto de vista da norma-padrão, haveria melhora na clareza e correção do texto caso se inserisse o artigo "os" logo após o pronome, resultando em <i>"cujos os principais componentes"</i>.' },
      { letra: 'E', texto: 'O pronome "cujos" concorda em gênero (masculino) e número (plural) com o seu antecedente imediato, "sofisticados".' },
    ],
    gabarito: 'B',
  },
  {
    id: 'pucpr-2027-009', ...PUCPR_2027_BASE, numeroOriginal: 9,
    disciplina: 'Português', conteudo: ['por-4a1', 'por-4a2'], subtopico: 'Gênero textual — divulgação científica', dificuldade: 'facil',
    textoApoio: TEXTO_PUCPR_2027_GILA,
    enunciado: `<p>Todo texto é produzido com uma intencionalidade discursiva e cumpre uma função específica na sociedade. A partir da leitura, reconhece-se que a função social do gênero textual em questão é</p>`,
    alternativas: [
      { letra: 'A', texto: 'regulamentar o uso de substâncias bioativas e alertar a população sobre os riscos do uso indiscriminado de canetas emagrecedoras.' },
      { letra: 'B', texto: 'apresentar uma narrativa histórica sobre o surgimento da toxinologia, com o objetivo de engajar o leitor por meio de curiosidades da natureza.' },
      { letra: 'C', texto: 'defender o posicionamento da comunidade médica a favor da manipulação de toxinas animais, persuadindo o leitor a confiar em pesquisas científicas.' },
      { letra: 'D', texto: 'instruir profissionais da área da saúde sobre os protocolos técnicos de isolamento de proteínas para a produção de fármacos como o Captopril.' },
      { letra: 'E', texto: 'disseminar o conhecimento científico, tornando públicas as descobertas sobre o potencial terapêutico dos venenos de forma acessível e contextualizada.', explicacao: 'Correta! O texto, publicado na revista Ciência Hoje, é de divulgação científica: explica em linguagem acessível, com exemplos (Captopril, agonistas de GLP-1), como componentes de venenos se tornam medicamentos.' },
    ],
    gabarito: 'E',
  },

  // ───────────── LITERATURA (10 e 12; a 11 depende da leitura da obra) ─────────────
  {
    id: 'pucpr-2027-010', ...PUCPR_2027_BASE, numeroOriginal: 10,
    disciplina: 'Literatura', subtopico: 'Escolas Literárias', dificuldade: 'media',
    textoApoio: `<p>Leia o seguinte poema de Alice Ruiz, do livro <i>Paixão xama paixão</i>, presente na coletânea <i>Dois em um</i>.</p>
      <p>topa um pacto de sangue<br>com essa cigana do futuro<br>que lê<br>o passado na tua boca<br>o presente no teu corpo<br>e nos teus olhos<br>tanto quanto nos astros?</p>
      <p><small>(RUIZ S., Alice. <i>Dois em um</i>. São Paulo: Iluminuras, 2008, p. 117.)</small></p>`,
    enunciado: `<p>Sobre este poema, é <b><u>CORRETO</u></b> afirmar:</p>`,
    alternativas: [
      { letra: 'A', texto: 'O poema retoma os princípios da geração de 1922, valorizando a liberdade formal, os temas nacionais e a representação da identidade brasileira.' },
      { letra: 'B', texto: 'A principal característica do poema é a denúncia do racionalismo ocidental, ao propor novas formas de leitura – “previsão” – da realidade.' },
      { letra: 'C', texto: 'O texto recupera o projeto concretista ao eliminar os traços de subjetividade e concentrar seus efeitos na disposição visual dos versos na página.' },
      { letra: 'D', texto: 'O poema dialoga com procedimentos recorrentes da poesia brasileira das décadas de 1970 e 1980, servindo-se de uma linguagem ao mesmo tempo concisa e coloquial.', explicacao: 'Correta! Alice Ruiz é da geração dos anos 1970/80 (poesia marginal e pós-concretismo): versos curtos, sem pontuação nem maiúsculas, linguagem coloquial ("topa um pacto"), tom afetivo e brincadeira com a imagem da cigana que "lê" o futuro.' },
      { letra: 'E', texto: 'O poema rompe com tendências predominantes da poesia produzida na época ao evitar o cotidiano, fugir da oralidade e de qualquer aproximação com a experiência afetiva.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'pucpr-2027-012', ...PUCPR_2027_BASE, numeroOriginal: 12,
    disciplina: 'Literatura', subtopico: 'Interpretação de Texto Literário', dificuldade: 'media',
    textoApoio: `<p>Considere a abertura de “Ei vampiro, qual é a tua?”, da coletânea <i>Educação sentimental do vampiro</i>, de Dalton Trevisan.</p>
      <p>Buscando se livrar da pecha de repetitivo, o contista agregou ao seu conhecido circo de horrores uma nova galeria de monstros morais. Perdido entre a tautologia e a platitude, se pendura sobre o oco do próprio coração.</p>
      <p>Eis o desfile grotesco dos filhos da noite desse vampiro de almas e lobisomem de espíritos: fornicários, sodomitas, pedófilos, sadistas, maníacos, uai. Que feira de aberrações!</p>
      <p>Invertendo o axioma de que com bons sentimentos se faz a pior literatura, ele escreve direito, mas pensa oblíquo.</p>
      <p><small>(TREVISAN, Dalton. <i>Educação sentimental do vampiro</i>. Organização de Felipe Hirsch e Caetano W. Galindo. São Paulo: Todavia, 2025, p. 191.)</small></p>`,
    enunciado: `<p>Assinale a alternativa <b><u>CORRETA</u></b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O texto ironiza a recorrência de temas e personagens na obra do autor, ao mesmo tempo que reconhece que sua escrita se caracteriza pela exploração de zonas moralmente ambíguas da experiência humana.', explicacao: 'Correta! Em tom autoirônico, o texto zomba da "pecha de repetitivo" e do "conhecido circo de horrores" do contista, mas reconhece sua marca: escreve "direito" (com rigor) e "pensa oblíquo", explorando os "monstros morais" e as zonas ambíguas da experiência humana.' },
      { letra: 'B', texto: 'O conto indica que a antologia reúne uma fase de ruptura radical na obra de Dalton Trevisan, marcada pelo abandono do universo urbano curitibano e pela adoção de uma narrativa de caráter mais autobiográfico.' },
      { letra: 'C', texto: 'A enumeração de “fornicários, sodomitas, pedófilos, sadistas, maníacos” demonstra que a principal finalidade dos contos é condenar explicitamente os desvios morais de seus personagens, conduzindo-os ao final a uma regeneração de seu comportamento.' },
      { letra: 'D', texto: 'A referência ao aforismo segundo o qual “com bons sentimentos se faz a pior literatura” evidencia a adesão do contista ao princípio de que a qualidade literária depende em grande parte da perversidade das personagens retratadas.' },
      { letra: 'E', texto: 'A metáfora do “vampiro” deve ser compreendida literalmente, pois a antologia reúne narrativas fantásticas protagonizadas por seres sobrenaturais, aproximando Dalton Trevisan da tradição do romance gótico.' },
    ],
    gabarito: 'A',
  },

  // ───────────── BIOLOGIA (13 a 20) ─────────────
  {
    id: 'pucpr-2027-013', ...PUCPR_2027_BASE, numeroOriginal: 13,
    disciplina: 'Biologia', conteudo: ['bio-2a1', 'bio-2a5'], subtopico: 'Cladograma e Opisthokonta', dificuldade: 'dificil',
    imagem: 'imagens/estudo/pucpr-2027-013.webp',
    legendaAcima: 'Nos últimos vinte anos, o estudo das relações filogenéticas entre os seres vivos vem passando por grandes transformações graças ao uso de informações do material genético – como sequências de nucleotídeos do DNA e RNA ribossômico – para elaboração de cladogramas. Dessa forma, algumas relações antes baseadas apenas em critérios morfológicos foram reinterpretadas. Um dos marcos dessa nova sistemática molecular foi a confirmação de que os fungos são filogeneticamente mais próximos dos animais do que das plantas, compartilhando um ancestral comum exclusivo (clado Opisthokonta).<br><br>Essa proximidade evolutiva impõe um severo desafio para a infectologia e a farmacologia médica: como fungos e humanos compartilham grande parte de sua maquinaria bioquímica e metabólica, encontrar alvos terapêuticos seletivos para fármacos antifúngicos (que matem o patógeno, sem causar toxicidade às células do paciente humano) é extremamente complexo.<br><br>Considere o cladograma simplificado a seguir, que representa o entendimento atual das relações de parentesco evolutivo entre quatro grupos de organismos, com o surgimento de novidades evolutivas indicado pelos pontos I, II, III e IV.',
    enunciado: `<p>Um novo fármaco antifúngico, em fase de testes clínicos, denominado Ergofobin, atua bloqueando especificamente a via de síntese do ergosterol, um componente essencial para a manutenção da fluidez e integridade da membrana plasmática fúngica. Células animais utilizam o colesterol para essa mesma função e não possuem os genes para a síntese de ergosterol, enquanto algumas linhagens de plantas sintetizam fitosteróis, com alta homologia estrutural à molécula fúngica.</p>
      <p>Com base na análise do cladograma e nos mecanismos de manifestação das características biológicas, a seletividade terapêutica do Ergofobin — que destrói as células fúngicas sem causar danos às células do hospedeiro humano — é explicada pelo fato de que a via metabólica do ergosterol</p>`,
    alternativas: [
      { letra: 'A', texto: 'é uma homologia bioquímica compartilhada entre plantas e fungos herdada diretamente do ponto II, que une todos os organismos clorofilados.' },
      { letra: 'B', texto: 'representa uma característica ancestral (plesiomorfia) fixada no ponto I e que foi perdida unicamente pelos animais ao longo do processo de especiação.' },
      { letra: 'C', texto: 'decorre de um processo de convergência adaptativa entre plantas e fungos (ponto III) disparado por pressões seletivas ambientais semelhantes.' },
      { letra: 'D', texto: 'foi adquirida pelos fungos por transferência horizontal de genes bacterianos, estando representada como uma sinapomorfia no ponto II.' },
      { letra: 'E', texto: 'constitui uma novidade evolutiva expressa no ramo IV (exclusivo dos fungos), surgida após a divergência com o ancestral comum dos Opisthokonta.', explicacao: 'Correta! O ramo IV leva só aos fungos, depois do ancestral comum com os animais (III). Uma via que só os fungos têm (os animais não possuem os genes) é uma novidade exclusiva desse ramo — por isso o fármaco atinge o fungo sem lesar as células humanas.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'pucpr-2027-014', ...PUCPR_2027_BASE, numeroOriginal: 14,
    disciplina: 'Biologia', conteudo: 'bio-2b3', subtopico: 'Fotossíntese e respiração celular', dificuldade: 'media',
    enunciado: `<p>A manutenção da vida humana e a prática médica hospitalar dependem diretamente do suprimento constante de oxigênio (O<sub>2</sub>) para a realização da respiração celular nas mitocôndrias. Paralelamente, o funcionamento dos ecossistemas e a renovação da atmosfera terrestre dependem da fotossíntese realizada pelos organismos clorofilados. Embora pareçam processos opostos, a respiração celular e a fotossíntese são bioquimicamente complementares e operam de forma integrada no ciclo do carbono e do oxigênio do planeta. Considere um experimento hipotético em que uma planta e um pequeno mamífero foram colocados juntos dentro de uma câmara de vidro hermeticamente fechada e iluminada constantemente.</p>
      <p>Compreendendo as reações bioquímicas que ocorrem nas organelas desses dois organismos, o equilíbrio gasoso e a sobrevivência de ambos na câmara são garantidos porque</p>`,
    alternativas: [
      { letra: 'A', texto: 'a glicose produzida na fase puramente escura da fotossíntese é transferida por difusão gasosa para o pulmão do animal, servindo como o principal combustível para a glicólise que ocorre na matriz mitocondrial.' },
      { letra: 'B', texto: 'o gás carbônico gerado na quebra da água durante a respiração animal estimula a abertura dos estômatos da planta, permitindo que ela fabrique o ATP necessário para oxigenar o sangue do mamífero.' },
      { letra: 'C', texto: 'a mitocôndria da planta consome o gás carbônico produzido pelo próprio vegetal, liberando energia térmica suficiente para manter a temperatura corporal do mamífero estável.' },
      { letra: 'D', texto: 'o gás oxigênio liberado pela fotólise da água na etapa fotoquímica da planta é utilizado como aceptor final de elétrons nas mitocôndrias do animal, enquanto o gás carbônico liberado pelo ciclo de Krebs do animal é fixado no ciclo de Calvin da planta.', explicacao: 'Correta! Na fase clara, a fotólise da água libera O<sub>2</sub>, que o animal usa como aceptor final de elétrons na cadeia respiratória; o CO<sub>2</sub> liberado no ciclo de Krebs do animal é fixado pela planta no ciclo de Calvin. Os dois processos se complementam.' },
      { letra: 'E', texto: 'o oxigênio produzido no ciclo de Krebs da planta reage diretamente com o gás carbônico da respiração animal, gerando água metabólica essencial para evitar a desidratação de ambos os tecidos.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'pucpr-2027-015', ...PUCPR_2027_BASE, numeroOriginal: 15,
    disciplina: 'Biologia', conteudo: 'bio-3b6', subtopico: 'Regulação da glicemia', dificuldade: 'dificil',
    imagem: 'imagens/estudo/pucpr-2027-015.webp',
    legendaAcima: 'O esquema a seguir representa o circuito homeostático de regulação da glicemia na espécie humana, mediado pelas células endócrinas do pâncreas e com atuação direta nos tecidos alvos, destacando-se o fígado.',
    legenda: '<small><b>WIKIPÉDIA.</b> Glicemia.svg. In: <b>Insulina</b>. Wikimedia Commons, [s.d.]. Disponível em: https://pt.wikipedia.org/wiki/Insulina#/media/Ficheiro:Glicemia.svg. Acesso em: 21 jun. 2026.</small>',
    enunciado: `<p>Em uma clínica médica, quatro pacientes (W, X, Y e Z) apresentaram quadros clínicos distintos relacionados a disfunções metabólicas. Visando um diagnóstico diferencial preciso, a equipe médica realizou testes de tolerância à glicose e biópsias teciduais, gerando os seguintes relatórios:</p>
      <p>Paciente W: Apresenta destruição autoimune severa das células Beta pancreáticas, inviabilizando qualquer produção endógena do mensageiro químico correspondente.</p>
      <p>Paciente X: Possui uma mutação deletéria no gene do receptor celular de insulina (RTK), fazendo com que o hormônio seja produzido normalmente, mas impossibilitando a transdução do sinal nas células hepáticas.</p>
      <p>Paciente Y: Apresenta um tumor neuroendócrino hipersecretor (glucagonoma), localizado nas células alfa, que secreta níveis massivos e contínuos de glucagon, independentemente da glicemia circulante.</p>
      <p>Paciente Z: Possui uma glicogenose severa (doença de armazenamento de glicogênio), caracterizada pela ausência congênita da enzima glicogênio sintase no tecido hepático.</p>
      <p>Considerando os mecanismos moleculares exibidos no esquema e os critérios clínicos de homeostase, avalie as proposições diagnósticas feitas pela junta médica e assinale a conclusão fisiologicamente <b><u>CORRETA</u></b> e clinicamente defensável.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O Paciente Y apresentará um quadro de hipoglicemia severa crônica em jejum, uma vez que a hiperativação das células alfa inibe, por feedback negativo, o funcionamento homeostático das células beta do pâncreas.' },
      { letra: 'B', texto: 'A administração exógena de insulina regular seria uma estratégia terapêutica eficaz para normalizar a glicemia e reestabelecer o estoque de glicogênio hepático tanto no Paciente W quanto no Paciente X.' },
      { letra: 'C', texto: 'Após uma refeição rica em carboidratos, o Paciente Z manifestará hiperglicemia, pois a falha enzimática impede o fígado de cumprir a rota metabólica estimulada pela insulina.', explicacao: 'Correta! Pelo esquema, a insulina faz o fígado absorver glicose e armazená-la como glicogênio. Sem glicogênio sintase, o fígado de Z não consegue estocar a glicose da refeição, e a glicemia pós-prandial sobe.' },
      { letra: 'D', texto: 'Os pacientes X e Y apresentarão a mesma repercussão laboratorial em jejum (hipoglicemia severa), mas por motivos opostos: X pela falta de absorção de glicose e Y pelo consumo excessivo de glicogênio.' },
      { letra: 'E', texto: 'A integridade das células alfa do Paciente W garante que, durante longos períodos de jejum biológico, ele consiga manter a glicemia estável por meio da degradação eficiente do glicogênio estocado.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2027-016', ...PUCPR_2027_BASE, numeroOriginal: 16,
    disciplina: 'Biologia', conteudo: 'bio-2b3', subtopico: 'Cadeia respiratória e desacopladores', dificuldade: 'dificil',
    enunciado: `<p>A respiração celular aeróbica é o processo pelo qual as nossas células convertem a energia dos alimentos em ATP. Esse processo depende do perfeito acoplamento entre a Cadeia Respiratória (que transporta elétrons e consome oxigênio nas cristas mitocondriais) e a enzima ATP sintase (que usa o gradiente de prótons para fabricar o ATP).</p>
      <p>Nota: Um agente desacoplador age como um "atalho" ou "furo" na membrana da mitocôndria, permitindo que a energia acumulada seja dissipada diretamente na forma de calor, em vez de ser canalizada para a fábrica de ATP (ATP sintase).</p>
      <table class="tabela-prova">
        <tr><th>Paciente</th><th>Consumo de Oxigênio (O2)</th><th>Produção de ATP</th><th>Temperatura Corporal</th></tr>
        <tr><th>Paciente 1</th><td>Muito Alto</td><td>Quase Nula</td><td>Hipertermia</td></tr>
        <tr><th>Paciente 2</th><td>Quase Nulo</td><td>Quase Nula</td><td>Normal</td></tr>
        <tr><th>Paciente 3</th><td>Normal</td><td>Baixa</td><td>Normal (com acúmulo de piruvato no citosol)</td></tr>
      </table>
      <p>Considerando o funcionamento da mitocôndria e os dados laboratoriais, a junta médica precisou avaliar a causa exata de cada quadro clínico. A conclusão diagnóstica <b><u>CORRETA</u></b> é:</p>`,
    alternativas: [
      { letra: 'A', texto: 'O quadro do Paciente 1 é compatível com a ação de um agente desacoplador (exemplo a termogenina), que desvia o gradiente de prótons, sem bloquear a cadeia respiratória, gerando calor excessivo em vez de ATP.', explicacao: 'Correta! Com o desacoplador, a cadeia respiratória continua (e até acelera) consumindo O<sub>2</sub>, mas os prótons voltam à matriz sem passar pela ATP sintase: a energia vira calor. Isso explica O<sub>2</sub> muito alto, ATP quase nulo e hipertermia.' },
      { letra: 'B', texto: 'O Paciente 2 foi exposto a uma substância desacopladora, o que justifica a interrupção simultânea do consumo de oxigênio e da produção de ATP, pelas cristas mitocondriais.' },
      { letra: 'C', texto: 'A administração de oxigênio puro sob alta pressão seria o tratamento ideal para o Paciente 2, pois o gás reverte diretamente o bloqueio químico causado por venenos.' },
      { letra: 'D', texto: 'O Paciente 3 apresenta um bloqueio na cadeia de transporte de elétrons, evidenciado pelo acúmulo de piruvato, que não conseguiu entrar na mitocôndria, por falta de oxigênio.' },
      { letra: 'E', texto: 'Os três pacientes apresentam falhas exclusivas na etapa da Glicólise, já que qualquer alteração na produção de ATP no organismo humano decorre obrigatoriamente de erros no citosol celular.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2027-017', ...PUCPR_2027_BASE, numeroOriginal: 17,
    disciplina: 'Biologia', conteudo: ['bio-3b3', 'bio-2a2'], subtopico: 'Vacinas', dificuldade: 'media',
    enunciado: `<p>Como funcionam as vacinas?</p>
      <p>As vacinas ensinam o nosso sistema imunológico a reconhecer um invasor antes mesmo de ficarmos doentes. Existem diferentes técnicas para fabricá-las:<br>Tipos de vacinas antivirais</p>
      <p><b>Vírus atenuado tradicional:</b> O vírus é enfraquecido após ser cultivado em laboratório por várias gerações. Ele sofre mutações naturais aleatórias que diminuem a sua virulência e conduzem à perda da sua capacidade de causar a doença grave, mas ele continua vivo e se multiplicando lentamente no corpo.</p>
      <p><b>Vírus modificado geneticamente (Nova tecnologia)</b>: Cientistas alteram o código genético (DNA ou RNA) do vírus em pontos específicos. Eles trocam algumas "letras" do código para que as fábricas da nossa célula (os ribossomos) leiam a receita do vírus de forma extremamente lenta. O vírus permanece vivo, mas a produção de suas proteínas é tão devagar que o corpo o destrói facilmente.</p>
      <p><b>Vírus inativado</b>: O vírus é totalmente "morto" usando calor ou produtos químicos (como o formaldeído). Ele não consegue se multiplicar de jeito nenhum, servindo apenas como um "molde" estático para o corpo produzir defesas.</p>
      <p>Imagine que você faz parte de um comitê de jovens cientistas e recebeu a missão de projetar o plano de criação de uma vacina contra um novo vírus altamente perigoso. O comitê determinou duas regras obrigatórias para o seu projeto:</p>
      <ol>
        <li>A vacina deve simular uma infecção real, fazendo o vírus entrar e se multiplicar dentro das células para ativar as defesas mais profundas do corpo (os Linfócitos T de memória).</li>
        <li>O risco de o vírus sofrer uma mutação reversa e "voltar a ser perigoso" dentro do corpo do paciente deve ser zero, eliminando o maior problema das vacinas atenuadas tradicionais.</li>
      </ol>
      <p>Assinale a alternativa que apresenta a proposta que você deve defender, por cumprir todas as regras do comitê:</p>`,
    alternativas: [
      { letra: 'A', texto: 'Escolher a técnica do vírus atenuado tradicional por cultivo em laboratório, alterando apenas um único gene do vírus, já que focar a mutação em uma única letra do código genético impede totalmente que o vírus sofra novas mutações no corpo humano.' },
      { letra: 'B', texto: 'Adotar a vacina de vírus inativado por produtos químicos, uma vez que o vírus morto e incapaz de se multiplicar é a única forma de fazer o patógeno invadir o citoplasma das células humanas e treinar os Linfócitos T.' },
      { letra: 'C', texto: 'Ferver o vírus a 100 °C para desnaturar completamente o seu material genético, injetando as partes destruídas diretamente no sangue, pois o calor extremo duplica a velocidade com que os lisossomos humanos fabricam anticorpos de defesa.' },
      { letra: 'D', texto: 'Utilizar a tecnologia de modificação genética para alterar centenas de letras ao longo de todo o genoma viral, pois as várias alterações planejadas impedem matematicamente que ele volte a ser perigoso, enquanto o vírus vivo desse tipo de vacina garante a multiplicação celular necessária para ativar os Linfócitos T.', explicacao: 'Correta! O vírus continua vivo e se multiplica dentro das células (regra 1, ativa linfócitos T), e centenas de alterações planejadas tornam praticamente impossível reverter todas por mutação (regra 2) — o problema do atenuado tradicional, que depende de poucas mutações aleatórias.' },
      { letra: 'E', texto: 'Injetar os vírus intactos e ativo junto com uma dose massiva de antibióticos comuns, visto que os antibióticos bloqueiam a síntese de proteínas e a replicação viral no organismo, de forma imediata.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'pucpr-2027-018', ...PUCPR_2027_BASE, numeroOriginal: 18,
    disciplina: 'Biologia', conteudo: ['bio-2a2', 'bio-c1'], subtopico: 'Viroses — transmissão', dificuldade: 'media',
    enunciado: `<p>No cenário da medicina tropical e da infectologia global, o diagnóstico diferencial de síndromes febris agudas representa um desafio crítico. Vírus como o da Dengue (DENV) e o Ebola (EBOV) pertencem a famílias taxonômicas distintas, possuem reservatórios biológicos diferentes e utilizam vias de dispersão particulares. Enquanto algumas viroses exigem a presença de vetores artrópodes estritos para infectar o ambiente urbano, outras dependem do contato direto com fluidos biológicos para a transmissão inter-humana, o que altera completamente os protocolos de isolamento hospitalar e o manejo de surtos.</p>
      <p>Uma equipe de epidemiologistas do Ministério da Saúde analisou o perfil de transmissão e contaminação de três patógenos virais (X, Y e Z) circulantes em uma região de fronteira, sintetizando os critérios no quadro comparativo a seguir.</p>
      <table class="tabela-prova">
        <tr><th>Patógeno</th><th>Vetor Biológico</th><th>Mecanismo de Contaminação Humana</th><th>Tecido-Alvo Principal / Complicação</th></tr>
        <tr><th>Vírus X</th><td>Ausente</td><td>Contato direto com sangue, vômito ou secreções de pacientes infectados</td><td>Endotélio vascular e hepatócitos; Febre hemorrágica.</td></tr>
        <tr><th>Vírus Y</th><td><i>Aedes aegypti</i></td><td>Picada da fêmea do mosquito hematófago infectada</td><td>Células dendríticas e macrófagos; Extravasamento plasmático e choque</td></tr>
        <tr><th>Vírus Z</th><td>Ausente</td><td>Ingestão de água ou alimentos contaminados por fezes</td><td>Enterócitos do intestino delgado; Desidratação grave por diarreia aguda</td></tr>
      </table>
      <p>Considerando as propriedades de transmissão, os mecanismos de contaminação e a análise comparativa das dinâmicas epidemiológicas desses patógenos, a conclusão <b><u>CORRETA</u></b> é:</p>`,
    alternativas: [
      { letra: 'A', texto: 'O Vírus Y e o Vírus X compartilham o mesmo mecanismo de contaminação por fômites (objetos inanimados contaminados), o que significa que o uso de telas em janelas e repelentes é a única medida eficaz para interromper os surtos de ambos os patógenos.' },
      { letra: 'B', texto: 'O Vírus X comporta-se de maneira análoga ao vírus Ebola, cuja contenção hospitalar exige isolamento de contato rigoroso devido ao alto risco de transmissão nosocomial (intra-hospitalar), enquanto o Vírus Y assemelha-se ao vírus da Dengue, dispensando o isolamento de contato entre leitos, mas exigindo o controle vetorial ambiental.', explicacao: 'Correta! X se transmite por contato com sangue e secreções e causa febre hemorrágica, como o Ebola — exige isolamento de contato no hospital. Y depende da picada do <i>Aedes aegypti</i>, como a dengue — não passa de pessoa a pessoa, então o combate é ao vetor.' },
      { letra: 'C', texto: 'O Vírus Z apresenta o perfil epidemiológico típico do vírus da Febre Amarela, cuja contaminação ocorre pela via fecal-oral, demandando investimentos prioritários em saneamento básico e tratamento de esgoto para a sua erradicação urbana.' },
      { letra: 'D', texto: 'A dinâmica de contaminação do Vírus X indica que ele é transmitido majoritariamente por via aérea (aerossóis respiratórios), o que o torna biologicamente menos letal e de mais fácil controle comunitário do que o Vírus Y.' },
      { letra: 'E', texto: 'Os mecanismos de contaminação do vírus Z é semelhante ao vírus da poliomielite, cuja disseminação leva a complicações muito semelhantes ao vírus X.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'pucpr-2027-019', ...PUCPR_2027_BASE, numeroOriginal: 19,
    disciplina: 'Biologia', conteudo: 'bio-3b2', subtopico: 'Coagulação sanguínea', dificuldade: 'facil',
    imagem: 'imagens/estudo/pucpr-2027-019.webp',
    legendaAcima: 'A figura, simplificadamente, representa algumas etapas da coagulação sanguínea. Nela, observa-se que lesões nos tecidos e a agregação de plaquetas desencadeiam uma sequência de reações que culmina na formação de fibrina, responsável pela estabilização do coágulo.',
    legenda: '<small><b>RIBEIRO, Krukemberghe Fonseca.</b> Hemostasia. <i>InfoEscola: Navegando e Aprendendo</i>. Disponível em: InfoEscola – Hemostasia. Acesso em: 21 jun. 2026.</small>',
    enunciado: `<p>Um paciente apresentou hemorragias frequentes após um tratamento prolongado com antibióticos, que reduziram significativamente sua microbiota intestinal, produtora de vitamina K.</p>
      <p>Com base no modelo apresentado e nos conhecimentos sobre coagulação sanguínea, qual alteração é mais provável ocorrer nesse paciente?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Aumento da produção de fibrina devido ao acúmulo de vitamina K no plasma, acelerando a coagulação sanguínea.' },
      { letra: 'B', texto: 'Conversão direta do fibrinogênio em fibrina, sem a necessidade da ação da trombina.' },
      { letra: 'C', texto: 'Aumento da concentração de cálcio plasmático, compensando totalmente a deficiência de vitamina K.' },
      { letra: 'D', texto: 'Maior agregação plaquetária, independentemente da produção de protrombina e trombina.' },
      { letra: 'E', texto: 'Redução da produção de protrombina pelo fígado, dificultando a formação de trombina e, já que a vitamina K é lipossolúvel, atua como co-fator enzimático nesse processo.', explicacao: 'Correta! O fígado precisa da vitamina K para produzir protrombina. Com menos vitamina K (microbiota reduzida), há menos protrombina, menos trombina e menos conversão de fibrinogênio em fibrina — daí as hemorragias.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'pucpr-2027-020', ...PUCPR_2027_BASE, numeroOriginal: 20,
    disciplina: 'Biologia', conteudo: ['bio-3b6', 'bio-3b5'], subtopico: 'ADH e diabetes insipidus', dificuldade: 'facil',
    enunciado: `<p>Leia a seguir.</p>
      <p>Diabetes Insipidus Central</p>
      <p>O diabetes insipidus central consiste na ausência ou deficiência de secreção do hormônio vasopressina (também conhecido como Hormônio Antidiurético – ADH). A vasopressina é produzida no hipotálamo, armazenada e liberada pelo lobo posterior da hipófise. A sua principal função biológica é enviar sinais aos rins para que estes reabsorvam água, diminuindo o volume de urina produzido e mantendo o corpo hidratado.<br>Quando há uma falha crônica nessa produção, devido a tumores cerebrais, traumas ou cirurgias na região da hipófise, o paciente manifesta os sintomas clássicos: produção excessiva de urina extremamente diluída (poliúria) e sede constante e incontrolável (polidipsia).</p>
      <p>Imagine que você lidera uma equipe de biotecnologia farmacêutica e recebeu o desafio de projetar um novo medicamento para tratar pacientes com Diabetes Insipidus Central. O comitê de desenvolvimento do laboratório determinou dois requisitos obrigatórios para a sua proposta:</p>
      <ol>
        <li>O composto deve reverter diretamente os sintomas de desidratação e poliúria agindo especificamente no tecido-alvo correto.</li>
        <li>O medicamento deve ser projetado sabendo que o sistema de produção e liberação de hormônios do cérebro (hipotálamo-hipófise) do paciente está permanentemente inoperante.</li>
      </ol>
      <p>Assinale a alternativa que apresenta a proposta terapêutica que você deve defender por cumprir rigorosamente os requisitos do comitê.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Desenhar uma molécula sintética estruturalmente semelhante à vasopressina natural, que passa a ser administrada para contornar a falha cerebral e ligar-se diretamente aos receptores das células renais, estimulando a reabsorção de água.', explicacao: 'Correta! Um análogo sintético do ADH (como a desmopressina) substitui o hormônio que o hipotálamo-hipófise não fornece e age direto no tecido-alvo, os túbulos renais, aumentando a reabsorção de água.' },
      { letra: 'B', texto: 'Desenhar um medicamento inibidor que bloqueie completamente a ação dos néfrons nos rins, pois paralisar a atividade de filtração renal impede, probabilisticamente, que a água do sangue seja convertida em urina diluída.' },
      { letra: 'C', texto: 'Projetar uma pílula concentrada contendo glicose e insulina para induzir o fígado a fabricar vasopressina artificial, uma vez que o Diabetes Insipidus compartilha dos mesmos mecanismos de controle do açúcar encontrados no Diabetes Mellitus.' },
      { letra: 'D', texto: 'Criar um estimulante químico direcionado ao lobo anterior da hipófise para forçar as células locais a duplicarem a velocidade de síntese da vasopressina, compensando a destruição sofrida pelo tecido do hipotálamo.' },
      { letra: 'E', texto: 'Desenhar um composto diurético potente de ação prolongada para ser tomado em jejum, visto que aumentar a excreção forçada de sais minerais pelo sistema urinário reestabelece a homeostase hídrica por osmose reversa.' },
    ],
    gabarito: 'A',
  },

  // ───────────── QUÍMICA (21 a 28) ─────────────
  {
    id: 'pucpr-2027-021', ...PUCPR_2027_BASE, numeroOriginal: 21,
    disciplina: 'Química', conteudo: ['qui-2b2', 'qui-1a5'], subtopico: 'Acetileno e O₂', dificuldade: 'media',
    imagem: 'imagens/estudo/pucpr-2027-021.webp',
    legendaAcima: 'Leia a seguir.',
    legenda: '<small>Disponível em: https://quatrorodas.abril.com.br/noticias/vw-e-renault-bombardeiam-nuvens-para-evitarem-granizo-em-seus-carros/. Acesso em: 02 jul. 2026.</small>',
    enunciado: `<p>Uma empresa espanhola desenvolveu um canhão ultrassônico, o qual utiliza gás acetileno e gás oxigênio dentro de uma câmara de combustão, gerando ondas sonoras e direcionadas ao céu com o objetivo de quebrar o granizo, reduzindo-o a grãos tão menores que derretem e viram chuva antes de chegar ao solo. Apesar desta tecnologia não ser comprovada cientificamente, empresas automobilísticas, lavouras e cidades já têm feito a aquisição do equipamento para reduzir impactos financeiros causados por chuvas de granizo.</p>
      <p>Sobre as substâncias descritas acima e considerando o gás acetileno um hidrocarboneto, são feitas as seguintes afirmativas:</p>
      <p>I. O acetileno é um alceno e seu nome oficial é eteno.<br>
      II. A reação de combustão do acetileno é classificada como exotérmica.<br>
      III. O acetileno, ao sofrer reação de oxidação enérgica, produzirá CO<sub>2</sub> e H<sub>2</sub>O.<br>
      IV. Etino é o nome oficial do gás acetileno, apresentando três ligações π na molécula.<br>
      V. O gás oxigênio, cuja fórmula é O<sub>2</sub>, possui geometria linear e a molécula é apolar.</p>
      <p>São <b><u>CORRETAS</u></b> as afirmativas</p>`,
    alternativas: [
      { letra: 'A', texto: 'I, II e III.' },
      { letra: 'B', texto: 'II, III e V.', explicacao: 'Correta! O acetileno é o etino (HC≡CH), um alcino: I é falsa; a tripla ligação tem 1 σ e 2 π, então IV é falsa. A combustão é exotérmica (II), a oxidação enérgica do etino gera CO<sub>2</sub> e H<sub>2</sub>O (III) e o O<sub>2</sub> é diatômico, linear e apolar (V).' },
      { letra: 'C', texto: 'III, IV e V.' },
      { letra: 'D', texto: 'I, II e V.' },
      { letra: 'E', texto: 'II, III e IV.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'pucpr-2027-022', ...PUCPR_2027_BASE, numeroOriginal: 22,
    disciplina: 'Química', conteudo: ['qui-3a3', 'qui-2b2'], subtopico: 'Fórmula molecular e cicloalcanos', dificuldade: 'dificil',
    enunciado: `<p>Um composto desconhecido contém apenas carbono e hidrogênio. É um líquido que entra em ebulição à 49°C e 1 atm de pressão. Ao ser analisada, verifica-se que que este composto apresenta 85,7% de carbono e 14,3% de hidrogênio em massa. A 100°C e 0,96 atm a densidade desta substância é de 2,21g/L. Esta substância é então dissolvida em hexano e água de bromo (Br<sub>2</sub> dissolvido em água) é adicionado, a reação não ocorre. O composto desconhecido é:</p>
      <p>(Dados: R= 0,082 atm.L/mol.K; C=12 g/mol; H=1g/mol)</p>`,
    alternativas: [
      { letra: 'A', texto: 'but-1-eno.' },
      { letra: 'B', texto: 'pent-1-eno.' },
      { letra: 'C', texto: 'pentan-1-ol.' },
      { letra: 'D', texto: 'ciclopentano.', explicacao: 'Correta! 85,7/12 ≈ 7,14 e 14,3/1 = 14,3 → fórmula mínima CH<sub>2</sub>. M = dRT/P = 2,21 · 0,082 · 373 / 0,96 ≈ 70 g/mol → C<sub>5</sub>H<sub>10</sub>. Como não reage com água de bromo, não é alceno: é o cicloalcano ciclopentano.' },
      { letra: 'E', texto: 'ciclobutano.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'pucpr-2027-023', ...PUCPR_2027_BASE, numeroOriginal: 23,
    disciplina: 'Química', conteudo: ['qui-2b1', 'qui-2b5', 'qui-3b3'], subtopico: 'Análise de estrutura orgânica', dificuldade: 'dificil',
    imagem: 'imagens/estudo/pucpr-2027-023.webp',
    legendaAcima: 'A mucormicose, popularmente conhecida como “fungo negro”, é uma infecção fúngica rara e grave, causada por fungos da ordem <i>Mucorales</i>. Ela afeta principalmente pessoas imunocomprometidas e precisa ser tratada com antifúngico intravenoso e muitas vezes com cirurgias para remoção do tecido necrosado. O Sistema Único de Saúde (SUS), por meio da Secretaria de Vigilância em Saúde (SVS/MS), disponibiliza o <b><u>complexo lipídico de anfotericina B</u></b> para o tratamento das infecções fúngicas graves. Considere a fórmula estrutural da anfotericina B a seguir.',
    enunciado: `<p>Sobre a estrutura da anfotericina B, foram feitas as seguintes afirmações:</p>
      <p>I. Possui carbono assimétrico.<br>
      II. Possui apenas as funções: ácido carboxílico, éter e álcool.<br>
      III. A amina presente é classificada como primária.<br>
      IV. Sua cadeia carbônica é homogênea com 18 elétrons π.<br>
      V. Possui apenas carbonos primários, secundários e terciários.</p>
      <p>São <b><u>CORRETAS</u></b></p>`,
    alternativas: [
      { letra: 'A', texto: 'II, III e IV.' },
      { letra: 'B', texto: 'I, II, III e IV.' },
      { letra: 'C', texto: 'II, IV e V.' },
      { letra: 'D', texto: 'I, III e IV.' },
      { letra: 'E', texto: 'I, III e V.', explicacao: 'Correta! I: há vários carbonos quirais (os ligados a OH, CH<sub>3</sub> etc.). III: o NH<sub>2</sub> está ligado a um só carbono — amina primária. V: nenhum carbono está ligado a 4 outros carbonos. II é falsa (há também éster/lactona e amina) e IV é falsa (cadeia heterogênea, com O no anel, e mais elétrons π que 18).' },
    ],
    gabarito: 'E',
  },
  {
    id: 'pucpr-2027-024', ...PUCPR_2027_BASE, numeroOriginal: 24,
    disciplina: 'Química', conteudo: ['qui-4a4', 'qui-3a4'], subtopico: 'Titulação e pH', dificuldade: 'media',
    enunciado: `<p>No laboratório de um hospital, uma amostra de 10 mL de suco gástrico (ácido clorídrico, α=100%), obtido muitas horas depois de uma refeição, foi titulada com 0,1mol/L de NaOH até a neutralidade, sendo consumidos 8mL da base na titulação. O estômago do paciente não continha nenhum alimento ou bebida, então se supõe que não havia nenhum tampão no material coletado. Qual era o pH do suco gástrico do paciente? Dado: log 2 =0,3</p>`,
    alternativas: [
      { letra: 'A', texto: '1,1.', explicacao: 'Correta! n(NaOH) = 0,1 · 0,008 = 8·10<sup>−4</sup> mol = n(HCl). [H<sup>+</sup>] = 8·10<sup>−4</sup> / 0,010 = 8·10<sup>−2</sup> mol/L. pH = −log(8·10<sup>−2</sup>) = 2 − 3·0,3 = 1,1.' },
      { letra: 'B', texto: '2,8.' },
      { letra: 'C', texto: '3,9.' },
      { letra: 'D', texto: '4,3.' },
      { letra: 'E', texto: '5,0.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2027-025', ...PUCPR_2027_BASE, numeroOriginal: 25,
    disciplina: 'Química', conteudo: ['qui-4a4', 'qui-4a3'], subtopico: 'Tampão bicarbonato', dificuldade: 'media',
    enunciado: `<p>As reações químicas que ocorrem nos seres vivos são sensíveis às variações de pH. O principal sistema tampão para controlar o pH sanguíneo é o tampão ácido carbônico – bicarbonato. Juntos eles formam um par ácido-base conjugado. O ácido carbônico, um ácido fraco, pode ainda se decompor em dióxido de carbono e água. O equilíbrio envolvido nesse sistema é:</p>
      <p>H<sup>+</sup><sub>(aq)</sub> + HCO<sub>3</sub><sup>-</sup><sub>(aq)</sub> ⇌ H<sub>2</sub>CO<sub>3(aq)</sub> ⇌ H<sub>2</sub>O<sub>(l)</sub> + CO<sub>2(g)</sub></p>
      <p>O pH normal do sangue humano deve ficar entre 7,35 e 7,45. Caso o pH fique abaixo de 6,8 ou acima de 7,8, o risco pode ser fatal. Quando o pH está abaixo de 7,35, a condição é chamada acidose e, acima de 7,45, a condição é chamada alcalose. Em relação ao sistema tampão descrito acima, é <b><u>CORRETO</u></b> afirmar que</p>`,
    alternativas: [
      { letra: 'A', texto: 'Um atleta que estiver em uma situação de hiperventilação terá o pH sanguíneo aumentado, porque a concentração de H<sup>+</sup> vai aumentar.' },
      { letra: 'B', texto: 'Um indivíduo em situação de alcalose sanguínea estará com pH 7,0.' },
      { letra: 'C', texto: 'Um indivíduo em situação de hiperventilação aumentará o pH sanguíneo, uma vez que a concentração de CO<sub>2</sub> vai diminuir.', explicacao: 'Correta! Na hiperventilação, elimina-se mais CO<sub>2</sub>; o equilíbrio se desloca para a direita, consumindo H<sup>+</sup>. Com menos H<sup>+</sup>, o pH sobe (alcalose respiratória).' },
      { letra: 'D', texto: 'Se um atleta receber um soro endovenoso com solução de bicarbonato de sódio, o pH irá diminuir.' },
      { letra: 'E', texto: 'Se um indivíduo apresentar hipoventilação, o pH sanguíneo irá aumentar.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2027-026', ...PUCPR_2027_BASE, numeroOriginal: 26,
    disciplina: 'Química', conteudo: 'qui-4b4', subtopico: 'Eletrólise ígnea', dificuldade: 'media',
    enunciado: `<p>A eletrólise é um processo não espontâneo de reações de oxidação e redução, mas que usam energia elétrica para promovê-las. Uma célula eletrolítica consiste em dois eletrodos mergulhados em uma cuba que possui um eletrólito fundido ou dissolvido água. A corrente elétrica atua como uma “bomba” de elétrons, empurrando elétrons de um eletrodo e puxando-os do outro. A partir da eletrólise é possível a obtenção de metais, gases industriais ou ainda proteção de metais contra a corrosão através da eletrodeposição. Considere o processo de eletrólise ígnea do cloreto de alumínio (AℓCℓ<sub>3</sub>), com eletrodos inertes, ocorrendo com uma corrente elétrica de 10,0 A durante uma hora. Sobre a eletrólise citada, assinale a alternativa <b><u>CORRETA</u></b>.</p>
      <p>(Dados: 1F = 1mol de elétrons = 96500C; Aℓ=27g/mol; Cℓ=35,5g/mol; considere volume do gás medido na CNTP)</p>`,
    alternativas: [
      { letra: 'A', texto: 'A produção do gás cloro ocorre no ânodo, polo negativo na eletrólise.' },
      { letra: 'B', texto: 'A produção de 3,36 g de alumínio no cátodo, polo negativo na eletrólise.', explicacao: 'Correta! Q = 10 · 3600 = 36 000 C → 36 000/96 500 ≈ 0,373 mol de e<sup>−</sup>. No cátodo (polo negativo): Aℓ<sup>3+</sup> + 3 e<sup>−</sup> → Aℓ, então 0,373/3 ≈ 0,124 mol · 27 ≈ 3,36 g de alumínio.' },
      { letra: 'C', texto: 'Durante a redução, ocorrida no cátodo, forma-se 4,18 L de gás cloro.' },
      { letra: 'D', texto: 'A oxidação produz 6,71g alumínio no ânodo, polo negativo na eletrólise.' },
      { letra: 'E', texto: 'É possível a obtenção de gás hidrogênio e gás oxigênio nesta eletrólise.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'pucpr-2027-027', ...PUCPR_2027_BASE, numeroOriginal: 27,
    disciplina: 'Química', conteudo: 'qui-4a3', subtopico: 'Princípio de Le Chatelier', dificuldade: 'facil',
    enunciado: `<p>O óxido nítrico (NO) é um importante neurotransmissor no corpo humano, fazendo com que os músculos que revestem os vasos sanguíneos relaxem, permitindo assim maior fluxo sanguíneo. Já na atmosfera, é um poluente uma vez que oxida facilmente para formar dióxido de nitrogênio, contribuindo para o <i>smog</i> fotoquímico, destruição do ozônio e chuva ácida. A formação do NO na atmosfera pode ocorrer de acordo com a reação a seguir:</p>
      <p>½ N<sub>2</sub>(g) + ½ O<sub>2</sub>(g) ⇌ NO(g) &nbsp; ΔH = +90,4kJ</p>
      <p>Considerando a reação em equilíbrio de formação do óxido nítrico acima, e o Princípio de Le Chatelier, é <b><u>CORRETO</u></b> afirmar que</p>`,
    alternativas: [
      { letra: 'A', texto: 'a retirada de N<sub>2</sub> deslocará o equilíbrio para a direita, aumentando a quantidade de NO produzido.' },
      { letra: 'B', texto: 'a adição de catalisador deslocará o equilíbrio para a direita, aumentando a produção de NO.' },
      { letra: 'C', texto: 'aumentando-se a pressão, o equilíbrio se desloca no sentido de formação de NO.' },
      { letra: 'D', texto: 'a redução na pressão parcial de O<sub>2</sub> deslocará o equilíbrio para a direita, aumentando a quantidade de NO produzido.' },
      { letra: 'E', texto: 'o aumento da temperatura deslocará o equilíbrio para a direita, aumentando a quantidade de NO produzido.', explicacao: 'Correta! A formação de NO é endotérmica (ΔH > 0); aquecer favorece o sentido endotérmico, deslocando o equilíbrio para a direita. Pressão não altera (1 mol de gás de cada lado) e catalisador não desloca equilíbrio.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'pucpr-2027-028', ...PUCPR_2027_BASE, numeroOriginal: 28,
    disciplina: 'Química', conteudo: ['qui-1a5', 'qui-2a2'], subtopico: 'Geometria, polaridade e funções', dificuldade: 'facil',
    enunciado: `<p>Durante o Ensino Médio, nas aulas de Química, os estudantes aprendem vários conteúdos, como ligações químicas, geometrias, polaridade, funções inorgânicas e orgânicas. O conhecimento básico é essencial, ajudando o estudante a relacionar a Química com a vida prática, tornando o aprendizado mais útil e significativo. Faça a relação das substâncias químicas listadas na coluna 1 e suas características na coluna 2.</p>
      <table class="tabela-prova">
        <tr><th>Substância</th><th>Característica</th></tr>
        <tr><td>(1) Trifluoreto de boro</td><td>( &nbsp; ) Ácido presente no vinagre, fraco solúvel em água</td></tr>
        <tr><td>(2) Ácido clorídrico</td><td>( &nbsp; ) Composto iônico, solúvel em água</td></tr>
        <tr><td>(3) Hidróxido de sódio</td><td>( &nbsp; ) Composto covalente, apolar e geometria trigonal planar.</td></tr>
        <tr><td>(4) Tolueno</td><td>( &nbsp; ) Geometria linear, solúvel em água.</td></tr>
        <tr><td>(5) C<sub>2</sub>H<sub>4</sub>O<sub>2</sub></td><td>( &nbsp; ) Hidrocarboneto aromático, apolar.</td></tr>
      </table>
      <p>A relação <b><u>CORRETA</u></b>, de cima para baixo é:</p>`,
    alternativas: [
      { letra: 'A', texto: '5, 3, 1, 2, 4.', explicacao: 'Correta! Ácido do vinagre = ácido acético, C<sub>2</sub>H<sub>4</sub>O<sub>2</sub> (5); iônico solúvel = NaOH (3); covalente, apolar e trigonal plana = BF<sub>3</sub> (1); linear e solúvel = HCl (2); hidrocarboneto aromático apolar = tolueno (4).' },
      { letra: 'B', texto: '2, 4, 1, 5, 3.' },
      { letra: 'C', texto: '5, 2, 3, 1, 4.' },
      { letra: 'D', texto: '2, 1, 4, 3, 5.' },
      { letra: 'E', texto: '3, 2, 1, 5, 4.' },
    ],
    gabarito: 'A',
  },

  // ───────────── MATEMÁTICA (29 a 37) ─────────────
  {
    id: 'pucpr-2027-029', ...PUCPR_2027_BASE, numeroOriginal: 29,
    disciplina: 'Matemática', conteudo: ['mat-4b1', 'mat-2a3'], subtopico: 'Área máxima com retas', dificuldade: 'dificil',
    enunciado: `<p>No plano cartesiano, a reta r contém os pontos P e Q e é paralela à reta s que contém os pontos R e S. Já os pontos P e S, que pertencem (respectivamente) aos lados AB e BC do triângulo ABC, determinam uma reta horizontal.</p>
      <p>Dados A(1, 1), B(4, 6) e C(11, 1), e sabendo que Q e R possuem ordenadas nulas e abscissas negativas, determine a distância entre os pontos P e S para a qual a área do quadrilátero convexo PQRS é máxima.</p>`,
    alternativas: [
      { letra: 'A', texto: '3.' },
      { letra: 'B', texto: '4.' },
      { letra: 'C', texto: '5.' },
      { letra: 'D', texto: '6.', explicacao: 'Correta! Na altura y = h: em AB, x<sub>P</sub> = 1 + 3(h − 1)/5; em BC, x<sub>S</sub> = 4 + 7(6 − h)/5. Então PS = 12 − 2h. Com PS ∥ QR (horizontais) e PQ ∥ RS, PQRS é um paralelogramo de área (12 − 2h)·h, máxima em h = 3 → PS = 6.' },
      { letra: 'E', texto: '8.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'pucpr-2027-030', ...PUCPR_2027_BASE, numeroOriginal: 30,
    disciplina: 'Matemática', conteudo: 'mat-1a4', subtopico: 'Razão e proporção', dificuldade: 'facil',
    enunciado: `<p>Em um laboratório de análises clínicas, dois reagentes utilizados em um protocolo experimental apresentam volumes iniciais na razão de 11 para 9. Como a concentração final da solução depende da proporção entre os volumes utilizados, o técnico responsável precisa preservar a relação adequada entre os reagentes.</p>
      <p>Após a chegada de um novo lote, foram adicionados 40 mL de cada reagente aos estoques disponíveis. Com essa alteração, a razão entre os volumes passou a ser de 6 para 5.</p>
      <p>Determine a soma dos volumes iniciais dos dois reagentes.</p>`,
    alternativas: [
      { letra: 'A', texto: '720 mL.' },
      { letra: 'B', texto: '760 mL.' },
      { letra: 'C', texto: '800 mL.', explicacao: 'Correta! Volumes 11k e 9k: (11k + 40)/(9k + 40) = 6/5 → 55k + 200 = 54k + 240 → k = 40. Soma inicial = 20k = 800 mL.' },
      { letra: 'D', texto: '840 mL.' },
      { letra: 'E', texto: '960 mL.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2027-031', ...PUCPR_2027_BASE, numeroOriginal: 31,
    disciplina: 'Matemática', conteudo: 'mat-2a2', subtopico: 'Função afim', dificuldade: 'facil',
    enunciado: `<p>Em um procedimento hospitalar, um soro é administrado a um paciente por um sistema de infusão que mantém constante a taxa de administração, sem interrupções durante o procedimento. O volume restante no frasco, em mililitros, varia linearmente em função do tempo t, em minutos, decorrido desde o início da administração.</p>
      <p>Sabe-se que</p>
      <p>após 20 minutos do início da infusão, restavam 400 mL de soro no frasco;<br>após 60 minutos, restavam 200 mL;<br>após restarem 50 mL no frasco, como medida de segurança, a administração será imediatamente interrompida.</p>
      <p>Imediatamente após quantos minutos do início da infusão ocorrerá a interrupção programada?</p>`,
    alternativas: [
      { letra: 'A', texto: '80 min.' },
      { letra: 'B', texto: '90 min.', explicacao: 'Correta! Taxa = (200 − 400)/(60 − 20) = −5 mL/min, então V(t) = 500 − 5t. V = 50 → 5t = 450 → t = 90 min.' },
      { letra: 'C', texto: '100 min.' },
      { letra: 'D', texto: '110 min.' },
      { letra: 'E', texto: '120 min.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'pucpr-2027-032', ...PUCPR_2027_BASE, numeroOriginal: 32,
    disciplina: 'Matemática', conteudo: 'mat-3a4', subtopico: 'Sequência de depósitos e retiradas', dificuldade: 'media',
    enunciado: `<p>João decidiu criar uma reserva financeira em casa, guardando dinheiro em uma gaveta – que está totalmente vazia no início – destinada exclusivamente a esse objetivo. Sempre e apenas no primeiro dia útil de cada mês ele depositará R$ 750,00 nessa gaveta. Entretanto, todo dia 25 de cada mês retirará R$ 250,00 dessa reserva para recarregar seu cartão de transporte público. Ele pretende comprar uma motocicleta à vista, no valor de R$ 11.000,00, utilizando o dinheiro acumulado nessa gaveta, mas deseja manter ao menos R$ 1.200,00 de reserva após a compra. Por isso, realizará a aquisição somente no mesmo dia em que o montante acumulado for superior a R$ 12.200,00.</p>
      <p>Considerando que, de fato, R$ 11.000,00 será o valor da moto no dia da aquisição, quantos depósitos serão necessários — contando a partir do início dessa reserva — para que João consiga comprar a motocicleta?</p>`,
    alternativas: [
      { letra: 'A', texto: '17.' },
      { letra: 'B', texto: '23.' },
      { letra: 'C', texto: '24.', explicacao: 'Correta! O saldo máximo do mês ocorre logo após cada depósito: depois do n-ésimo depósito há 750n − 250(n − 1) = 500n + 250 reais. 500n + 250 > 12 200 → n > 23,9 → n = 24 depósitos.' },
      { letra: 'D', texto: '25.' },
      { letra: 'E', texto: '26.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2027-033', ...PUCPR_2027_BASE, numeroOriginal: 33,
    disciplina: 'Matemática', conteudo: 'mat-3a2', subtopico: 'Cilindro e cone inscritos', dificuldade: 'media',
    enunciado: `<p>Um cilindro equilátero está inscrito em um cone circular reto que, por sua vez, está inscrito em um cilindro equilátero. Determine a razão ente o volume do cilindro maior e o volume do cilindro menor.</p>`,
    alternativas: [
      { letra: 'A', texto: '8', explicacao: 'Correta! Cilindro maior: raio R e altura 2R; o cone inscrito tem raio R e altura 2R. O cilindro menor (raio r, altura 2r) toca a geratriz: na altura 2r o raio do cone é R − r = r → r = R/2. Como os cilindros são semelhantes, a razão dos volumes é (R/r)<sup>3</sup> = 8.' },
      { letra: 'B', texto: '4' },
      { letra: 'C', texto: '16/3' },
      { letra: 'D', texto: '27/4' },
      { letra: 'E', texto: '16' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2027-034', ...PUCPR_2027_BASE, numeroOriginal: 34,
    disciplina: 'Matemática', conteudo: 'mat-1a2', subtopico: 'Conjuntos — interseções', dificuldade: 'dificil',
    enunciado: `<p>Um Congresso Brasileiro de Medicina recebeu 600 inscrições para suas trilhas temáticas de aprimoramento profissional. O edital estabelecia que cada participante deveria se inscrever em, pelo menos, uma de três trilhas disponíveis: Pesquisa Clínica, Saúde Pública ou Inovação Tecnológica.<br>Encerrado o prazo, o balanço mostrou que 480 participantes optaram por Pesquisa Clínica, 390 escolheram Saúde Pública e 340 se inscreveram em Inovação Tecnológica.</p>
      <p>Se <b>x</b> representa o número de participantes que se inscreveram simultaneamente em Pesquisa Clínica e Inovação Tecnológica, a quantidade total dos possíveis valores inteiros (distintos) que <b>x</b> pode assumir, sem contrariar a lógica dos dados, é</p>`,
    alternativas: [
      { letra: 'A', texto: '119.' },
      { letra: 'B', texto: '120.' },
      { letra: 'C', texto: '121.', explicacao: 'Correta! Mínimo: |P ∩ I| ≥ 480 + 340 − 600 = 220. Máximo: x ≤ 340 (todo o grupo de Inovação dentro de Pesquisa Clínica), situação compatível com os demais dados. Logo x vai de 220 a 340: 340 − 220 + 1 = 121 valores.' },
      { letra: 'D', texto: '220.' },
      { letra: 'E', texto: '340.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2027-035', ...PUCPR_2027_BASE, numeroOriginal: 35,
    disciplina: 'Matemática', conteudo: 'mat-1a3', subtopico: 'Número de divisores', dificuldade: 'media',
    enunciado: `<p>Leia a seguir.</p>
      <p><i>GRANDE SERTÃO: VEREDAS</i> — 70 anos</p>
      <p>A obra-prima de um dos maiores nomes da literatura brasileira narra, em fluxo contínuo — sem divisão em capítulos —, a trajetória do jagunço Riobaldo pelo sertão mineiro. <i>Grande Sertão: Veredas</i> é hoje reconhecida internacionalmente como um marco da literatura de língua portuguesa. Em maio de 2002, o Clube do Livro da Noruega incluiu a obra em sua lista dos cem melhores livros de todos os tempos, tornando Guimarães Rosa o único autor brasileiro entre 100 escritores de 54 países.</p>
      <p>Em 2026, a obra completou 70 anos de publicação e o romance segue sendo reeditado e celebrado.</p>
      <p>Eleito por unanimidade para uma cadeira da Academia Brasileira de Letras, Guimarães Rosa levou 4 anos para tomar posse e, apenas 3 dias depois da cerimônia, faleceu aos 59 anos de idade — 11 anos depois de sua obra-prima ter sido publicada.</p>
      <p>Sendo N a diferença, em anos, entre o centenário da publicação dessa obra e o centenário do nascimento do autor, quantos são os divisores positivos de N?</p>`,
    alternativas: [
      { letra: 'A', texto: '4.' },
      { letra: 'B', texto: '8.' },
      { letra: 'C', texto: '9.' },
      { letra: 'D', texto: '10.', explicacao: 'Correta! Publicação: 2026 − 70 = 1956 (centenário em 2056). Morte: 1956 + 11 = 1967, aos 59 anos → nascimento em 1908 (centenário em 2008). N = 2056 − 2008 = 48 = 2<sup>4</sup>·3, com (4 + 1)(1 + 1) = 10 divisores positivos.' },
      { letra: 'E', texto: '48.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'pucpr-2027-036', ...PUCPR_2027_BASE, numeroOriginal: 36,
    disciplina: 'Matemática', conteudo: ['mat-3b3', 'mat-3b2'], subtopico: 'Probabilidade com restos', dificuldade: 'dificil',
    enunciado: `<p>Admita que 14 é o número de elementos do conjunto A, 16 é o número de elementos do conjunto B e que A é subconjunto de B. Se em A não há elementos repetidos e B é o conjunto dos 16 primeiros inteiros positivos, então, qual a probabilidade de a soma dos elementos de A ser um múltiplo de 3?</p>`,
    alternativas: [
      { letra: 'A', texto: '1/3', explicacao: 'Correta! A é B sem 2 elementos: C(16, 2) = 120 casos. A soma de 1 a 16 é 136 ≡ 1 (mod 3), então os 2 retirados devem somar ≡ 1 (mod 3). Restos: 6 números ≡ 1, 5 ≡ 2, 5 ≡ 0. Pares válidos: (0, 1) → 5·6 = 30; (2, 2) → C(5, 2) = 10. P = 40/120 = 1/3.' },
      { letra: 'B', texto: '1/8' },
      { letra: 'C', texto: '1/12' },
      { letra: 'D', texto: '5/16' },
      { letra: 'E', texto: '5/24' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2027-037', ...PUCPR_2027_BASE, numeroOriginal: 37,
    disciplina: 'Matemática', conteudo: 'mat-3a4', subtopico: 'Sequência de figuras — soma', dificuldade: 'dificil',
    imagem: 'imagens/estudo/pucpr-2027-037.webp',
    legendaAcima: 'Na sequência a seguir, o padrão se mantém indefinidamente e em cada figura há círculos brancos e círculos cinzas.',
    enunciado: `<p>Sabendo que considerando apenas os círculos das vinte primeiras figuras dessa sequência há um total de N círculos de cor branca, determine a soma dos algarismos do número N.</p>`,
    alternativas: [
      { letra: 'A', texto: '6.' },
      { letra: 'B', texto: '7.' },
      { letra: 'C', texto: '11.', explicacao: 'Correta! A figura n é um quadrado (n + 1) × (n + 1) com n + 1 círculos cinzas (uma diagonal), logo tem (n + 1)² − (n + 1) = n(n + 1) brancos. N = Σ n(n + 1) de 1 a 20 = 20·21·22/3 = 3080, e 3 + 0 + 8 + 0 = 11.' },
      { letra: 'D', texto: '14.' },
      { letra: 'E', texto: '17.' },
    ],
    gabarito: 'C',
  },

  // ───────────── FÍSICA (38 a 42) ─────────────
  {
    id: 'pucpr-2027-038', ...PUCPR_2027_BASE, numeroOriginal: 38,
    disciplina: 'Física', conteudo: ['fis-3b1', 'fis-3b2', 'fis-3b3'], subtopico: 'Áreas em gráficos (impulso e trabalho)', dificuldade: 'media',
    imagem: 'imagens/estudo/pucpr-2027-038.webp',
    legendaAcima: 'Considere um corpo de massa m = 4 kg, inicialmente em repouso. Em determinado momento, a grandeza A passa a variar em função da grandeza B, conforme mostrado no gráfico a seguir, e o corpo passa a descrever uma trajetória retilínea.',
    enunciado: `<p>A respeito do que foi descrito, analise as afirmativas a seguir.</p>
      <p>I. Se a grandeza A representa o módulo da aceleração do corpo, em metros por segundo ao quadrado (m/s<sup>2</sup>), e a grandeza B representa o tempo, em segundos (s), então o módulo da velocidade do corpo no instante t = 5 s é igual a 100 m/s.<br>
      II. Se a grandeza A representa a força resultante sobre o corpo, em newtons (N), e a grandeza B representa o tempo, em segundos (s), então o módulo da velocidade do corpo no instante t = 5 s é igual a 25 m/s.<br>
      III. Se a grandeza A representa a força resultante sobre o corpo, em newtons (N), e a grandeza B representa o seu deslocamento, em metros (m), então a velocidade do corpo após ele ter se deslocado por 5 m é igual a 5 m/s.</p>
      <p>É(são) <b><u>CORRETA</u>(<u>S</u>)</b> apenas a(s) afirmativa(s)</p>`,
    alternativas: [
      { letra: 'A', texto: 'II.' },
      { letra: 'B', texto: 'I.' },
      { letra: 'C', texto: 'I e II.' },
      { letra: 'D', texto: 'III.', explicacao: 'Correta! A área sob o gráfico vale 5·20/2 = 50. I: Δv = 50 m/s (não 100). II: impulso 50 N·s = 4·v → v = 12,5 m/s (não 25). III: trabalho 50 J = 4·v²/2 → v = 5 m/s.' },
      { letra: 'E', texto: 'II e III.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'pucpr-2027-039', ...PUCPR_2027_BASE, numeroOriginal: 39,
    disciplina: 'Física', conteudo: ['fis-4a2', 'fis-4a3', 'fis-1b3'], subtopico: 'Circuito com LED e capacitor', dificuldade: 'media',
    imagem: 'imagens/estudo/pucpr-2027-039.webp',
    legendaAcima: 'O circuito elétrico mostrado a seguir é composto por duas baterias ideais, que fornecem tensões U<sub>1</sub> = U<sub>2</sub> = 12 V, um resistor de resistência elétrica R, um capacitor C = 40 μF, uma chave (Ch) que pode ser conectada nas posições 1 ou 2, e um LED, além de fios ideais de conexão. Para que funcione dentro de suas especificações, O LED deve estar submetido a uma d.d.p. de 3 V e ser percorrido por 4 A de corrente elétrica, o que acontece quando a chave está conectada na posição 1. Nessas condições, ele emite luz laranja que possui comprimento de onda 600 nm no ar.',
    enunciado: `<p>Considerando, para efeitos de simplificação, c = 3·10<sup>8</sup> m/s a velocidade da luz no ar, n<sub>AR</sub> = 1 e n<sub>V</sub> = 1,5 os índices de refração do ar e do vidro, respectivamente, analise as afirmativas a seguir.</p>
      <p>I. Com a chave na posição 1 e o LED funcionando dentro de suas especificações, o resistor dissipa, num intervalo de tempo igual a 2 min, uma energia igual a 4320 J.<br>
      II. Caso a chave seja mudada para a posição 2, o LED dará um rápido piscar e apagará em seguida; o capacitor, que inicialmente está descarregado, após um breve intervalo de tempo ficará carregado com carga igual a 480 μC.<br>
      III. Caso a luz emitida pelo LED penetre numa placa de vidro, terá neste meio de propagação comprimento de onda igual a 900 nm.</p>
      <p>É(são) <b><u>CORRETA</u>(<u>S</u>)</b> apenas a(s) afirmativa(s)</p>`,
    alternativas: [
      { letra: 'A', texto: 'I e III.' },
      { letra: 'B', texto: 'I e II.', explicacao: 'Correta! I: no resistor, U = 12 − 3 = 9 V e i = 4 A → P = 36 W; em 120 s, E = 4320 J. II: com a chave em 2, o capacitor carrega até 12 V: Q = 40 μF · 12 V = 480 μC. III: no vidro, λ = 600/1,5 = 400 nm, não 900 nm.' },
      { letra: 'C', texto: 'II e III.' },
      { letra: 'D', texto: 'I.' },
      { letra: 'E', texto: 'II.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'pucpr-2027-040', ...PUCPR_2027_BASE, numeroOriginal: 40,
    disciplina: 'Física', conteudo: 'fis-1b1', subtopico: 'Espelho plano — campo visual', dificuldade: 'media',
    imagem: 'imagens/estudo/pucpr-2027-040.webp',
    legendaAcima: 'Uma sala de academia contém, em uma das paredes, um grande espelho plano retangular. As amigas Amanda (A) e Bruna (B), ambas com 1,60 m de altura, encontram-se de pé nas posições indicadas na figura a seguir.',
    enunciado: `<p>Considere as seguintes afirmativas.</p>
      <p>I. O espelho conjuga uma imagem virtual de Amanda, mas não de Bruna.<br>
      II. Como consequência do princípio da reversibilidade dos raios luminosos, se Amanda pode enxergar a imagem do rosto de Bruna por reflexão no espelho, então Bruna pode enxergar a imagem do rosto de Amanda também por reflexão no espelho.<br>
      III. Para que Amanda possa ver sua imagem por completo no espelho, este deve ter no mínimo 80 cm de altura e sua parte inferior deve estar a uma distância do chão igual à metade da distância dos olhos de Amanda até o chão, independente da distância d indicada na figura.</p>
      <p>É(são) <b><u>CORRETA</u>(<u>S</u>)</b> apenas a(s) afirmativa(s)</p>`,
    alternativas: [
      { letra: 'A', texto: 'I e III.' },
      { letra: 'B', texto: 'I.' },
      { letra: 'C', texto: 'II.' },
      { letra: 'D', texto: 'III.' },
      { letra: 'E', texto: 'II e III.', explicacao: 'Correta! I é falsa: o espelho plano conjuga imagem de qualquer objeto à sua frente (Bruna também tem imagem, ainda que não seja vista de toda posição). II: pela reversibilidade, o caminho de luz rosto de B → espelho → olho de A também vale ao contrário. III: o espelho mínimo para se ver por inteiro tem metade da altura (80 cm), com a borda inferior na metade da altura dos olhos, qualquer que seja a distância.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'pucpr-2027-041', ...PUCPR_2027_BASE, numeroOriginal: 41,
    disciplina: 'Física', conteudo: ['fis-3a2', 'fis-3b1'], subtopico: 'Tombamento de barra e atrito', dificuldade: 'dificil',
    imagem: 'imagens/estudo/pucpr-2027-041.webp',
    legendaAcima: 'Uma barra homogênea de 200 cm de comprimento e massa m<sub>B</sub> = 300 g é apoiada horizontalmente sobre dois suportes verticais, distantes 115 cm entre si, conforme mostrado na figura a seguir.',
    enunciado: `<p>Da extremidade esquerda da barra, um cubo de massa m<sub>C</sub> = 100 g é lançado com velocidade de módulo v<sub>o</sub> = 5 m/s e direção coincidente com a da barra, e se desloca ao longo dela. Considerando irrelevantes as dimensões do cubo e a largura dos suportes nesta situação, sendo μ = 0,5 o coeficiente de atrito cinético entre os materiais da barra e do cubo, e g = 10 m/s<sup>2</sup> o módulo da aceleração da gravidade local, é <b><u>CORRETO</u></b> afirmar que a barra começa a girar após um intervalo de tempo Δt após o lançamento do cubo, cujo valor é igual a</p>`,
    alternativas: [
      { letra: 'A', texto: '0,4 s.', explicacao: 'Correta! Momentos em relação ao suporte direito (115 cm): o peso da barra (3 N) atua a 15 cm à esquerda → 0,45 N·m. A barra gira quando o cubo (1 N) passa 0,45 m à direita do suporte, ou seja, em x = 1,60 m. Com desaceleração μg = 5 m/s²: 1,6 = 5t − 2,5t² → t = 0,4 s.' },
      { letra: 'B', texto: '0,5 s.' },
      { letra: 'C', texto: '0,6 s.' },
      { letra: 'D', texto: '0,7 s.' },
      { letra: 'E', texto: '0,8 s.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2027-042', ...PUCPR_2027_BASE, numeroOriginal: 42,
    disciplina: 'Física', conteudo: ['fis-2a2', 'fis-3a2'], subtopico: 'Empuxo e equilíbrio de fios', dificuldade: 'media',
    imagem: 'imagens/estudo/pucpr-2027-042.webp',
    legendaAcima: 'No esquema representado na figura a seguir, um bloco cúbico de massa m = 8 kg e aresta a = 20 cm, preso ao fio 2, encontra-se em equilíbrio com 30% de seu volume submerso em água (d<sub>água</sub>= 1 g/cm<sup>3</sup>).',
    enunciado: `<p>Considerando os fios ideais, a água um fluido ideal, e g = 10 m/s<sup>2</sup> a aceleração da gravidade, é <b><u>CORRETO</u></b> afirmar que a tração a que fica submetido o fio 1 é de</p>`,
    alternativas: [
      { letra: 'A', texto: '56 N.' },
      { letra: 'B', texto: '64 N.' },
      { letra: 'C', texto: '96 N.' },
      { letra: 'D', texto: '112 N.', explicacao: 'Correta! V = 8000 cm³; submerso 2400 cm³ → E = 24 N. T<sub>2</sub> = 80 − 24 = 56 N. No nó, só o fio 1 tem componente vertical (fio 3 é horizontal): T<sub>1</sub>·sen 30° = 56 → T<sub>1</sub> = 112 N.' },
      { letra: 'E', texto: '128 N.' },
    ],
    gabarito: 'D',
  },

  // ───────────── HISTÓRIA (43 a 47) ─────────────
  {
    id: 'pucpr-2027-043', ...PUCPR_2027_BASE, numeroOriginal: 43,
    disciplina: 'História', conteudo: 'his-2a1', subtopico: 'Rotas comerciais e Pax Mongolica', dificuldade: 'media',
    enunciado: `<p>Leia as fontes históricas a seguir.</p>
      <p><b>Texto 1</b></p>
      <p>A cidade de Kashgar é grande e florescente, situada entre muitas rotas por onde passam mercadores de diversas partes do mundo. Ali se encontram sedas finíssimas, especiarias e pedras preciosas. As caravanas que atravessam essas terras enfrentam desertos extensos, mas são recompensadas pelos lucros obtidos no comércio.</p>
      <p><small>Marco Polo, <b>Il Milione</b>, século XIII.</small></p>
      <p><b>Texto 2</b></p>
      <p>Caxemira é uma província muito grande e bela. Seus habitantes são idólatras e têm língua própria. São homens sábios em artes mágicas e conhecem muitos encantamentos. Produzem grande quantidade de seda e vivem do comércio e da agricultura. Há também muitas cidades e vilas, e os mercadores que por ali passam encontram boas hospedarias.</p>
      <p><small>POLO, Marco. <b>O Livro das Maravilhas</b>: a descrição do mundo. Tradução de Elpídio Ferreira Paes. São Paulo: L&amp;PM, 1999.</small></p>
      <p>Com base nos textos e nos conhecimentos sobre as redes comerciais afro-euro-asiáticas na Idade Média, analise as assertivas.</p>
      <p>I. As descrições de Kashgar e da Caxemira evidenciam a existência de centros urbanos integrados a rotas terrestres de longa distância, cuja consolidação foi favorecida pela estabilidade política proporcionada pela Pax Mongolica no século XIII.<br>
      II. A menção às caravanas e às hospedarias indica a organização de infraestruturas voltadas ao comércio terrestre, fundamentais para a circulação de mercadorias e mercadores através da Ásia Central.<br>
      III. A produção de seda citada nas fontes demonstra que o monopólio chinês sobre essa manufatura permaneceu inalterado ao longo de toda a Idade Média, impedindo sua difusão para outras regiões asiáticas.<br>
      IV. As atividades comerciais descritas por Marco Polo estavam subordinadas ao sistema mercantil atlântico, estruturado a partir da expansão marítima europeia iniciada no século XIII.</p>
      <p>Assinale a alternativa <b><u>CORRETA</u></b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Apenas I e III são verdadeiras.' },
      { letra: 'B', texto: 'Apenas I e II são verdadeiras.', explicacao: 'Correta! I e II: as rotas terrestres (Rota da Seda), com cidades, caravanas e hospedarias, floresceram sob a estabilidade da Pax Mongolica. III é falsa (o próprio texto mostra seda produzida na Caxemira) e IV é falsa (a expansão marítima atlântica só começa no século XV).' },
      { letra: 'C', texto: 'Apenas II e IV são verdadeiras.' },
      { letra: 'D', texto: 'I, II e III são verdadeiras.' },
      { letra: 'E', texto: 'Todas são verdadeiras.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'pucpr-2027-044', ...PUCPR_2027_BASE, numeroOriginal: 44,
    disciplina: 'História', conteudo: 'his-4a5', subtopico: 'Apartheid na África do Sul', dificuldade: 'facil',
    enunciado: `<p>Leia a fonte histórica a seguir:</p>
      <p>Três anos mais tarde, em 1960, a luta dos excluídos recrudesceu. Em Sharpeville, cidade próxima a Johannesburgo, foi organizada uma mobilização nacional contra a obrigatoriedade do uso do passaporte interno. Pacificamente, cerca de 15 mil manifestantes cercaram a delegacia, que tinha na sua frente 75 policiais, e declararam não estar usando passaporte, pedindo para serem presos, gritando em uma só voz: ‘Liberdade para nossa vida’. Seguiu-se um massacre, fazendo 250 feridos e 70 mortos. Esse ato ficou para sempre guardado na memória da sociedade sul-africana como um dos mais representativos do apartheid racial.</p>
      <p><small>HERNANDEZ, Leila Leite. <b>A África na sala de aula</b>: Visita à história contemporânea. São Paulo: Selo Negro, 2005, p.254-257 (adaptado).</small></p>
      <p>Com base na leitura da fonte e nos conhecimentos sobre o regime do apartheid na África do Sul, analise as assertivas.</p>
      <p>I. A obrigatoriedade do passaporte interno mencionada no texto evidencia um mecanismo estatal de controle da circulação da população negra, coerente com a política de segregação racial do apartheid.<br>
      II. A repressão violenta a uma manifestação pacífica indica que o regime sul-africano restringia direitos civis e políticos da maioria da população.<br>
      III. A criação dos bantustões foi uma solução criada pelos excluídos, para poder obter a cidadania sul-africana e poder circular livremente nas diferentes regiões da capital.<br>
      IV. A mobilização descrita na fonte ocorreu em um contexto de igualdade jurídica entre brancos e negros, sendo o conflito resultado exclusivo de divergências econômicas.</p>
      <p>Assinale a alternativa <b><u>CORRETA</u></b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Apenas II e IV são verdadeiras.' },
      { letra: 'B', texto: 'Apenas III e IV são verdadeiras.' },
      { letra: 'C', texto: 'Apenas I e II são verdadeiras.', explicacao: 'Correta! O passaporte interno controlava a circulação dos negros (I), e o massacre de manifestantes pacíficos mostra a negação de direitos civis e políticos à maioria (II). Os bantustões foram impostos pelo governo branco para retirar a cidadania dos negros (III falsa), e não havia igualdade jurídica (IV falsa).' },
      { letra: 'D', texto: 'I, II e III são verdadeiras.' },
      { letra: 'E', texto: 'Todas são verdadeiras.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2027-045', ...PUCPR_2027_BASE, numeroOriginal: 45,
    disciplina: 'História', conteudo: ['his-1b3', 'his-1b6'], subtopico: 'Missões jesuíticas', dificuldade: 'dificil',
    imagem: 'imagens/estudo/pucpr-2027-045.webp',
    legendaAcima: 'Observe a imagem a seguir.',
    legenda: '<small>Atlas histórico escolar, Rio de Janeiro: FAE, 1991, p. 57. (Adaptado)</small>',
    enunciado: `<p>Sobre as missões Jesuítas, a partir de 1550, no território que hoje é o Brasil, leia as assertivas e assinale a alternativa <b><u>CORRETA</u></b>.</p>
      <p>I. Na primeira tentativa de criar as missões, a Companhia de Jesus usou como estratégia aproximar-se dos indígenas por meio do conhecimento das línguas e de práticas de assistência, como o cuidado com os doentes.<br>
      II. Na primeira fase do processo de catequização os religiosos buscaram seguir à risca os rituais católicos, mantendo o latim em partes das missas, contudo, essa manutenção das cerimônias tradicionais foi um fracasso e acabou por ser revista.<br>
      III. É possível observar no mapa das missões que parte delas se concentraram em áreas pouco exploradas pelos portugueses no início da colonização, e que não faziam parte do Tratado de Tordesilhas.<br>
      IV. Em perspectiva historiográfica, pode-se distinguir três momentos de atuação da Companhia de Jesus, com diferentes centros de gravidade operacional que repercutiram sobre seu projeto de evangelização no Brasil: primeira com viés da missão, segundo focada em educação e, última no século XX, marcada pela atuação de setores da ordem com relação à libertação.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Estão corretas I, III e IV.', explicacao: 'Correta! Os jesuítas se aproximaram dos indígenas aprendendo suas línguas e prestando assistência (I); o mapa mostra missões no interior, a oeste da linha de Tordesilhas, em áreas pouco exploradas pelos portugueses (III); e a historiografia distingue as fases missionária, educacional e, no século XX, a ligada à Teologia da Libertação (IV). II é falsa: a catequese adaptou-se desde o início (uso do tupi, teatro, música).' },
      { letra: 'B', texto: 'Estão corretas I e II.' },
      { letra: 'C', texto: 'Estão corretas I, II e III.' },
      { letra: 'D', texto: 'Estão corretas I e IV.' },
      { letra: 'E', texto: 'Estão todas corretas.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2027-046', ...PUCPR_2027_BASE, numeroOriginal: 46,
    disciplina: 'História', conteudo: 'his-4b1', subtopico: 'Governo JK e Brasília', dificuldade: 'media',
    imagem: 'imagens/estudo/pucpr-2027-046.webp',
    legendaAcima: 'Observe a imagem a seguir.',
    legenda: '<small>A meca do desenvolvimentismo e do modernismo urbanístico e arquitetônico recebeu caravanas de todo o Brasil no dia de sua inauguração. Foto: Arquivo Público-DF Disponível em: https://www12.senado.leg.br/noticias/infomaterias/2020/05/brasilia-60-anos-2014-a-festa-de-inauguracao Acesso em 28 de junho de 2026.</small>',
    enunciado: `<p>A partir da análise da fotografia e dos conhecimentos sobre o contexto político e econômico do governo Juscelino Kubitschek (1956–1961), analise as assertivas.</p>
      <p>I. As camadas populares estiveram presente em dois momentos: na sua construção com os milhares de candangos e na sua inauguração, mas não em sua concepção e nem em sua ocupação do plano piloto.<br>
      II. A transferência da capital para o Planalto Central relacionava-se à estratégia de interiorização do desenvolvimento, prevista desde a Constituição de 1891, mas concretizada apenas na segunda metade do século XX.<br>
      III. A construção de Brasília foi financiada com recursos internos, sem recorrer direta ou indiretamente a capitais estrangeiros ou a mecanismos de endividamento externo, o que reforçou a autonomia econômica do projeto.<br>
      IV. A inauguração da nova capital assumiu dimensão simbólica ao projetar a imagem de um país moderno, articulando arquitetura inovadora, discurso político desenvolvimentista e integração territorial.</p>
      <p>Assinale a alternativa <b><u>CORRETA</u></b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Apenas I e II são verdadeiras.' },
      { letra: 'B', texto: 'Apenas II e III são verdadeiras.' },
      { letra: 'C', texto: 'Apenas I, III e IV são verdadeiras.' },
      { letra: 'D', texto: 'Apenas I, II e IV são verdadeiras.', explicacao: 'Correta! Os candangos construíram a cidade e o povo foi à festa, mas o plano piloto foi ocupado pelas elites (I); a mudança da capital estava prevista desde 1891 (II); e a inauguração simbolizou o Brasil moderno do desenvolvimentismo (IV). III é falsa: o Plano de Metas recorreu a capital estrangeiro, emissão de moeda e endividamento externo.' },
      { letra: 'E', texto: 'I, II, III e IV são verdadeiras.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'pucpr-2027-047', ...PUCPR_2027_BASE, numeroOriginal: 47,
    disciplina: 'História', conteudo: 'his-4a5', subtopico: 'Integração europeia (CECA e CEE)', dificuldade: 'facil',
    enunciado: `<p>Leia os textos a seguir.</p>
      <p><b>Texto 1</b></p>
      <p>A Europa não se fará de uma só vez, nem segundo um plano único: ela se fará por meio de realizações concretas que criem, antes de tudo, uma solidariedade de fato.</p>
      <p><small>SCHUMAN, Robert. Declaração Schuman. Paris, 9 maio 1950.</small></p>
      <p><b>Texto 2</b></p>
      <p>Determinados a estabelecer os fundamentos de uma união cada vez mais estreita entre os povos da Europa [...] Resolveram instituir uma Comunidade Econômica Europeia.</p>
      <p><small>TRATADO DE ROMA. 25 mar. 1957.</small></p>
      <p>Com base nos textos e nos conhecimentos sobre o contexto europeu do pós‑Segunda Guerra Mundial, analise as assertivas.</p>
      <p>I. A proposta de integração expressa na Declaração Schuman estava vinculada à estratégia de submeter a produção de carvão e aço a uma autoridade supranacional, buscando reduzir rivalidades franco‑alemãs e impedir novos conflitos bélicos na Europa Ocidental.<br>
      II. O Tratado de Roma instituiu uma união política completa, com política externa unificada, exército comum e Constituição europeia ratificada por todos os Estados-membros signatários.<br>
      III. Tanto a Declaração Schuman quanto o Tratado de Roma resultaram diretamente da criação da Organização do Tratado do Atlântico Norte (OTAN), que impôs aos países europeus a integração econômica como cláusula obrigatória de defesa coletiva.<br>
      IV. O processo de integração europeia iniciado nos anos 1950 contou, desde sua origem, com a adesão de todos os países do continente europeu, incluindo Reino Unido e Grécia.<br>
      V. A Comunidade Econômica Europeia foi criada com o objetivo exclusivo de estabelecer uma moeda única europeia, eliminando as moedas nacionais já na década de 1950.</p>
      <p>Assinale a alternativa <b><u>CORRETA</u></b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Apenas as assertivas I e III são verdadeiras.' },
      { letra: 'B', texto: 'Apenas as assertivas II e IV são verdadeiras.' },
      { letra: 'C', texto: 'Apenas a assertiva I é verdadeira.', explicacao: 'Correta! A Declaração Schuman propôs pôr carvão e aço franceses e alemães sob uma alta autoridade comum (a CECA), para tornar a guerra entre eles inviável. As demais são falsas: a CEE era econômica (mercado comum), não nasceu da OTAN, começou com só seis países e o euro só surgiu em 1999/2002.' },
      { letra: 'D', texto: 'Apenas as assertivas III e V são verdadeiras.' },
      { letra: 'E', texto: 'Todas as assertivas são verdadeiras.' },
    ],
    gabarito: 'C',
  },

  // ───────────── GEOGRAFIA (48 a 52) ─────────────
  {
    id: 'pucpr-2027-048', ...PUCPR_2027_BASE, numeroOriginal: 48,
    disciplina: 'Geografia', conteudo: 'geo-2u1', subtopico: 'Relevo do Paraná', dificuldade: 'media',
    enunciado: `<p>Em uma aula de campo de Geografia, um grupo de estudantes parte do litoral paranaense (Paranaguá) com destino a Foz do Iguaçu, no extremo oeste do estado. O objetivo da viagem é analisar a dinâmica do relevo, visitar a Usina Hidrelétrica de Itaipu, cataratas do rio Iguaçu e o marco da tríplice fronteira, na foz do rio Iguaçu.</p>
      <p>Durante o trajeto, o professor solicita que os alunos identifiquem a sucessão dos grandes compartimentos geomorfológicos e suas respectivas bases litológicas.</p>
      <p>A alternativa que apresenta <b><u>CORRETAMENTE</u></b> essa sequência, no sentido leste-oeste, é</p>`,
    alternativas: [
      { letra: 'A', texto: 'Serra do Mar e 1º Planalto (rochas sedimentares); Escarpa Devoniana e 2º Planalto (embasamento cristalino); Escarpa Triássico-Jurássica e 3º Planalto (magmatismo intrusivo).' },
      { letra: 'B', texto: 'Serra do Mar e 1º Planalto (embasamento cristalino); Escarpa Devoniana e 2º Planalto (rochas sedimentares da Bacia do Paraná); Escarpa Triássico-Jurássica e 3º Planalto (derrames basálticos).', explicacao: 'Correta! De leste para oeste: Serra do Mar e 1º Planalto (Curitiba) sobre o embasamento cristalino; Escarpa Devoniana e 2º Planalto (Ponta Grossa) em rochas sedimentares da Bacia do Paraná; Escarpa da Serra Geral (Triássico-Jurássica) e 3º Planalto (Guarapuava, Foz) sobre os derrames basálticos.' },
      { letra: 'C', texto: 'Serra do Mar e 1º Planalto (derrames basálticos); Escarpa Devoniana e 2º Planalto (embasamento cristalino); Escarpa da Serra Geral e 3º Planalto (rochas sedimentares recentes da Bacia do Paraná).' },
      { letra: 'D', texto: 'Planície Litorânea e 1º Planalto (embasamento cristalino); Escarpa Devoniana e 2º Planalto (rochas plutônicas); Escarpa da Serra Geral e 3º Planalto (rochas metamórficas).' },
      { letra: 'E', texto: 'Serra do Mar e 1º Planalto (embasamento cristalino); Escarpa da Serra Geral e 2º Planalto (rochas sedimentares); Escarpa Devoniana e 3º Planalto (rochas ígneas plutônicas).' },
    ],
    gabarito: 'B',
  },
  {
    id: 'pucpr-2027-049', ...PUCPR_2027_BASE, numeroOriginal: 49,
    disciplina: 'Geografia', conteudo: 'geo-1u4', subtopico: 'Solstício e duração do dia', dificuldade: 'facil',
    enunciado: `<p>Leia o texto a seguir.</p>
      <p>Domingo (21/06) não só começa o inverno, como acontecerá o dia mais curto do ano: o chamado solstício de inverno. Como não se bastasse, Curitiba terá um dos dias mais curtos do Brasil: 10 horas e 41 minutos, segundo levantamento do site norueguês <i>Time and Date AS</i>, líder mundial em horários e fusos horários.</p>
      <p>O solstício de inverno ou inverno astronômico acontece quando um dos hemisférios da Terra atinge sua máxima inclinação para longe do Sol, reduzindo o tempo de iluminação diária nessa porção do planeta.</p>
      <p><small>Disponível em: &lt;https://www.bemparana.com.br/noticias/parana/curitiba-tera-um-dos-dias-mais-curtos-do-brasil-no-domingo-entenda/&gt;. Acesso em: 20 jun. 2026. (com adaptações).</small></p>
      <p>Com base nos movimentos astronômicos, a redução da luminosidade destacada pela reportagem é consequência da interação entre a inclinação do eixo terrestre e o(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'posicionamento do planeta no afélio orbital.' },
      { letra: 'B', texto: 'incidência zenital dos raios solares no Hemisfério Sul.' },
      { letra: 'C', texto: 'maior distanciamento angular em relação ao Equador.', explicacao: 'Correta! No solstício de inverno, o efeito da inclinação do eixo cresce com a latitude: quanto mais longe do Equador, mais curto o dia. Curitiba (≈25° S), uma das capitais mais ao sul, tem por isso um dos dias mais curtos do país.' },
      { letra: 'D', texto: 'variação das coordenadas longitudinais locais.' },
      { letra: 'E', texto: 'refração atmosférica em grandes altitudes.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2027-050', ...PUCPR_2027_BASE, numeroOriginal: 50,
    disciplina: 'Geografia', conteudo: ['geo-1u5', 'geo-4u5'], subtopico: 'Refugiados climáticos', dificuldade: 'facil',
    enunciado: `<p>Analise a ação do governo australiano e faça o que se pede.</p>
      <p><b>Austrália acolhe primeira leva de refugiados climáticos</b></p>
      <p>A Austrália recebeu o primeiro grupo de cidadãos de nações insulares do Pacífico, forçados a abandonar definitivamente seus lares devido à elevação do nível do mar e à salinização de suas fontes de água doce.</p>
      <p>Embora a expressão "refugiado climático" seja amplamente utilizada pela mídia e por organizações não governamentais, o acolhimento dessas populações ocorreu por meio de um acordo diplomático bilateral, e não pelos mecanismos tradicionais de solicitação de refúgio previstos no Direito Internacional.</p>
      <p><small>Disponível em: &lt;https://www.dw.com/pt-br/australia-acolhe-primeira-leva-de-refugiados-climaticos/a-75118385&gt;. Acesso em: 20 jun. 2026. (com adaptações).</small></p>
      <p>A ausência de previsão específica para “refugiados climáticos” na Convenção de Genebra de 1951 revela</p>`,
    alternativas: [
      { letra: 'A', texto: 'a limitação histórica do conceito clássico de refúgio frente a novos fenômenos socioambientais.', explicacao: 'Correta! A Convenção de 1951, feita no pós-guerra, define refugiado por perseguição (raça, religião, nacionalidade, opinião política, grupo social). Não contempla deslocamentos causados por mudanças climáticas — por isso a Austrália usou um acordo bilateral.' },
      { letra: 'B', texto: 'a completa integração entre mudanças climáticas e legislação migratória global.' },
      { letra: 'C', texto: 'a atualização constante e automática do Direito Internacional Ambiental.' },
      { letra: 'D', texto: 'a substituição do conceito de soberania estatal por governança ambiental global.' },
      { letra: 'E', texto: 'a centralização das decisões migratórias em organizações não governamentais.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2027-051', ...PUCPR_2027_BASE, numeroOriginal: 51,
    disciplina: 'Geografia', conteudo: 'geo-4u6', subtopico: 'Espaço Schengen', dificuldade: 'facil',
    enunciado: `<p>Leia o excerto a seguir.</p>
      <p><b>Suíça decide em plebiscito inédito se adota teto populacional de 10 milhões</b></p>
      <p>Folha de São Paulo, 12/06/2026.</p>
      <p>De seus 9,1 milhões de habitantes atuais, 31% não nasceram no país, sendo que boa parte vem da União Europeia, segundo o escritório de estatísticas Eurostat.</p>
      <p>A aprovação do teto populacional colocaria Berna em rota de colisão direta com os compromissos assumidos nos pacotes de acordos bilaterais firmados com Bruxelas desde os anos 2000. A restrição quantitativa unilateral de imigrantes inviabilizaria a manutenção do país no sistema de integração e supressão de controles fronteiriços europeu, essencial para a dinâmica econômica e atração de mão de obra altamente qualificada para os cantões suíços.</p>
      <p><small>Disponível em: &lt;https://www1.folha.uol.com.br/mundo/2026/06/suica-decide-em-plebiscito-inedito-se-adota-teto-populacional-de-10-milhoes.shtml&gt;. Acesso em: 14 jun. 2026. (com adaptações).</small></p>
      <p>O sistema de integração mencionado no texto, do qual a Suíça é signatária e que seria juridicamente inviabilizado caso a proposta demográfica fosse aprovada, é o(a)</p>`,
    alternativas: [
      { letra: 'A', texto: 'Zona do Euro.' },
      { letra: 'B', texto: 'Tratado de Maastricht.' },
      { letra: 'C', texto: 'Espaço Schengen.', explicacao: 'Correta! A Suíça não é da União Europeia, mas participa do Espaço Schengen, que suprime os controles nas fronteiras internas e garante a livre circulação de pessoas — incompatível com um teto unilateral de imigrantes.' },
      { letra: 'D', texto: 'Banco Central Europeu.' },
      { letra: 'E', texto: 'Parlamento Europeu.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2027-052', ...PUCPR_2027_BASE, numeroOriginal: 52,
    disciplina: 'Geografia', conteudo: 'geo-3u2', subtopico: 'El Niño', dificuldade: 'media',
    enunciado: `<p>Leia e complemente corretamente o excerto extraído e adaptado da nota técnica do Centro de Previsão de Tempo e Estudos Climáticos - Instituto Nacional de Pesquisas Espaciais (CPTEC-INPE), publicada em junho de 2026.</p>
      <p>Considerando o cenário de estabelecimento do <i>El Niño</i>-Oscilação Sul (ENOS) nos próximos meses de 2026, são esperadas alterações nos padrões de circulação atmosférica sobre a América do Sul. Em anos de <i>El Niño</i> ocorre o fortalecimento da corrente de Jato Subtropical, atuando como um bloqueio que justifica a ______________________ dos volumes de precipitação em grande parte da Região Sul. Em contrapartida, na porção equatorial do país, observa-se um padrão de forte ______________________ do ar sobre a Região Norte e o norte da Região Nordeste, inibindo a convecção e reduzindo as chuvas. Adicionalmente, essa dinâmica atmosférica é reflexo do deslocamento do ramo ascendente da Célula de Walker em direção ao Pacífico Central. Em sua gênese, todo esse padrão anômalo é desencadeado pelo(a) ______________________ dos ventos alísios no Oceano Pacífico Equatorial.</p>
      <p><small>Disponível em: &lt;https://dataserver.cptec.inpe.br/dataserver_diptc/web/Painel-Elnino/2026-2027/nota_tecnica_el_nino_2026_final_160626.pdf&gt;. Acesso em: 20 jun. 2026. (com adaptações).</small></p>
      <p>A dinâmica e os mecanismos do fenômeno El Niño, descritos no texto, estão <b><u>CORRETA</u></b> e ordenadamente representados pela alternativa</p>`,
    alternativas: [
      { letra: 'A', texto: 'intensificação; ascensão; enfraquecimento.' },
      { letra: 'B', texto: 'intensificação; subsidência; enfraquecimento.', explicacao: 'Correta! No El Niño, o jato subtropical reforçado bloqueia frentes frias e intensifica as chuvas no Sul; no Norte/Nordeste, o ar desce (subsidência), inibindo nuvens e chuvas; e tudo começa com o enfraquecimento dos alísios, que deixa as águas quentes avançarem para o Pacífico central e leste.' },
      { letra: 'C', texto: 'redução; ascensão; intensificação.' },
      { letra: 'D', texto: 'intensificação; subsidência; fortalecimento.' },
      { letra: 'E', texto: 'redução; expansão; intensificação.' },
    ],
    gabarito: 'B',
  },

  // ───────────── INGLÊS (55 a 60) ─────────────
  {
    id: 'pucpr-2027-055', ...PUCPR_2027_BASE, numeroOriginal: 55,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'media',
    imagem: 'imagens/estudo/pucpr-2027-055.webp',
    legendaAcima: 'Leia a propaganda a seguir e marque a assertiva que a interpreta <b><u>ADEQUADAMENTE</u></b>.',
    legenda: '28 July is World Hepatitis Day',
    enunciado: `<p>World Hepatitis Day, 28 July, is an opportunity to step up national and international efforts on hepatitis, encourage actions and engagement by individuals, partners and the public and highlight the need for a greater global response as outlined in the WHO's Global hepatitis report of 2017.</p>
      <p>The date of 28 July was chosen because it is the birthday of Nobel-prize winning scientist Dr Baruch Blumberg, who discovered hepatitis B virus (HBV) and developed a diagnostic test and vaccine for the virus.</p>
      <p>Low coverage of testing and treatment is the most important gap to be addressed in order to achieve the global elimination goals by 2030.</p>
      <p><small>https://www.who.int/campaigns/world-hepatitis-day</small></p>`,
    alternativas: [
      { letra: 'A', texto: 'A campanha encoraja a realização de ações individuais e coletivas e a imagem demonstra união.' },
      { letra: 'B', texto: 'A campanha alerta para a importância de detectar a hepatite e ilustra uma criança saudável e feliz.', explicacao: 'Correta! O texto aponta a baixa cobertura de testes ("Low coverage of testing") como a principal lacuna a ser enfrentada, e a imagem mostra uma criança sorridente brincando num balanço, saudável e feliz.' },
      { letra: 'C', texto: 'A campanha explica o porquê da data escolhida e a imagem é do inventor da vacina contra hepatite.' },
      { letra: 'D', texto: 'A campanha celebra o recebimento do prêmio Nobel pelo cientista que criou o teste e a vacina.' },
      { letra: 'E', texto: 'A campanha alerta para o combate à hepatite e a imagem ilustra as amarras que a doença cria.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'pucpr-2027-056', ...PUCPR_2027_BASE, numeroOriginal: 56,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'media',
    enunciado: `<p>Leia o trecho da notícia a seguir e selecione a assertiva que descreve, <b><u>CORRETAMENTE</u></b>, sua estrutura.</p>
      <p><b>Ebola: New measures to fight against the disease</b></p>
      <p><i>Scientists are exploring three innovative approaches in the fight against Ebola. Together, these studies aim to prevent new infections, improve patient treatment, and deepen our understanding of the disease.</i></p>
      <p>Ebola remains a serious public health challenge, and healthcare professionals continue to work tirelessly to combat the virus. To strengthen the fight against the highly contagious disease, three complementary clinical studies are currently underway: EboPep, Partners, and Clinical Evolution. Together, these studies address the prevention, treatment, and understanding the disease.</p>
      <p><small>https://www.dw.com/en/ebola-new-measures-to-fight-against-the-disease/video-78075890</small></p>`,
    alternativas: [
      { letra: 'A', texto: 'A manchete convida ao combate, a linha fina destaca aumento de infecções e o lide alerta para o perigo da doença.' },
      { letra: 'B', texto: 'O título traz esperança, o subtítulo destaca a existência de novas infecções e o lide apenas repete as informações.' },
      { letra: 'C', texto: 'O título destaca a seriedade da doença, a linha fina explica tipos de tratamento e o lide resume os dois itens anteriores.' },
      { letra: 'D', texto: 'A manchete anuncia novas medidas de combate, a linha fina detalha o foco dos estudos e o lide os denomina.', explicacao: 'Correta! A manchete anuncia "New measures to fight against the disease"; a linha fina (em itálico) diz o foco dos três estudos (prevenir, tratar, entender); e o lide os nomeia: EboPep, Partners e Clinical Evolution.' },
      { letra: 'E', texto: 'A manchete induz à reflexão, o subtítulo destaca o entendimento e o primeiro parágrafo finaliza com esperança.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'pucpr-2027-057', ...PUCPR_2027_BASE, numeroOriginal: 57,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'media',
    enunciado: `<p>Leia o trecho a seguir e selecione a assertiva que apresenta a <b><u>ÚNICA</u></b> interpretação plausível.</p>
      <p>UN report: Global hunger levels ease for third consecutive year as regional disparities persist</p>
      <p>Global hunger declined for a third consecutive year in 2025, demonstrating that progress is possible. However, the improvements remain fragile, unevenly distributed and insufficient to achieve the Sustainable Development Goals by 2030, according to The State of Food Security and Nutrition in the World 2026 (SOFI 2026) report, released on Tuesday by five United Nations specialized agencies.</p>
      <p>The report estimates that 7.8 percent of the global population faced hunger in 2025, down from 8.1 percent in 2024 and 8.6 percent in 2022, confirming a sustained, albeit slow, improvement. This means that around 645 million people were affected by hunger in 2025, representing a reduction of nearly 14 million compared to 2024 and 43 million compared to 2022.</p>
      <p><small>https://www.who.int/news/item/21-07-2026-un-report--global-hunger-levels-ease-for-third-consecutive-year-as-regional-disparities-persist</small></p>`,
    alternativas: [
      { letra: 'A', texto: 'A fome mundial teve uma redução significativa e o foco deve ser no combate à desigualdade.', explicacao: 'Correta! A fome caiu pelo terceiro ano seguido (menos 43 milhões de pessoas desde 2022), mas o título e o texto destacam que as "regional disparities persist" e que a melhora é "unevenly distributed" — daí o foco na desigualdade. As demais contrariam os dados (C inverte os números; B e E não têm base no texto).' },
      { letra: 'B', texto: 'Os índices de redução da fome mundial para 2030 são comprovadamente inatingíveis.' },
      { letra: 'C', texto: 'A porcentagem do índice de fome mundial cresceu de 7.8 para 8.1 por cento entre 2024 e 2025.' },
      { letra: 'D', texto: 'A redução vigorosa nos níveis de fome mundial deve-se à queda na qualidade da alimentação.' },
      { letra: 'E', texto: 'A facilitação dos índices de fome mundial ocorreu devido ao esforço contínuo das regionais citadas.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2027-058', ...PUCPR_2027_BASE, numeroOriginal: 58,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'facil',
    enunciado: `<p>Leia o trecho da notícia a seguir e selecione a assertiva que sintetiza, <b><u>ADEQUADAMENTE</u></b>, as estratégias inovadoras da Indonésia no combate à dengue.</p>
      <p>Shaping Indonesia’s path towards zero dengue deaths by 2030</p>
      <p>Dengue continues to cause serious health problems in Indonesia. It affects nearly all provinces, with a total of over 257 000 cases and more than 1400 deaths in Indonesia in 2024. Late detection, limited diagnostic capacity, difficulties in coordination and low community participation in dengue prevention activities are challenges to prevention and response</p>
      <p>From July to September 2025, the Ministry of Health, supported by World Health Organization (WHO) and Gadjah Mada University, led consultations to develop the “Rencana Aksi Nasional Pengendalian Dengue 2026–2029”, the national action plan for dengue. The process brought together national and subnational government agencies, professional associations, United Nations partners, academics, civil society and philanthropic organizations.</p>
      <p>They reviewed dengue trends and assessed surveillance and case management gaps. Innovations such as Wolbachia-carrying mosquitoes that are less able to transmit dengue virus, dengue vaccines, digital vector surveillance, early warning systems integrating climate and epidemiological data, and sustained community engagement were also explored.</p>
      <p><small>https://www.who.int/indonesia/news/detail/30-03-2026-shaping-indonesia-s-path-towards-zero-dengue-deaths-by-2030</small></p>`,
    alternativas: [
      { letra: 'A', texto: 'Detecção tardia, diagnóstico limitado, coordenação e participação comunitária.' },
      { letra: 'B', texto: 'Focam na revisão de tendências mundiais e no esforço conjunto de organizações filantrópicas.' },
      { letra: 'C', texto: 'Utilizam bactérias, sistemas de avaliação local e mundialmente integrados e antibióticos.' },
      { letra: 'D', texto: 'Destacam a participação popular e governamental na limpeza e conservação de ambientes.' },
      { letra: 'E', texto: 'Mosquitos, vacinas, sistemas de vigilância e alerta e participação popular.', explicacao: 'Correta! As inovações citadas são mosquitos com Wolbachia, vacinas contra a dengue, vigilância digital de vetores, sistemas de alerta precoce e engajamento contínuo da comunidade. A alternativa A lista os desafios, não as estratégias.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'pucpr-2027-059', ...PUCPR_2027_BASE, numeroOriginal: 59,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'media',
    imagem: 'imagens/estudo/pucpr-2027-059.webp',
    legenda: '<small>https://www.instagram.com/p/DXbzXcPiFw3/</small>',
    enunciado: `<p>Leia o quadrinho a seguir e assinale a alternativa que identifica, <b><u>CORRETAMENTE</u></b>, os aspectos que contribuem como fatores geradores de humor.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O humor é gerado majoritariamente pelo aspecto não-verbal, pois ambos parecem preocupados.' },
      { letra: 'B', texto: 'O humor é gerado pela interação entre aspectos verbais e não-verbais, já que um ilustra o outro.' },
      { letra: 'C', texto: 'O humor é gerado sobretudo pelo aspecto verbal devido ao uso de uma frase comum no dia das bruxas.', explicacao: 'Correta! A legenda "TRICK OR TREATMENT" brinca com "trick or treat" (gostosuras ou travessuras, do Halloween): dependendo do plano de saúde, o paciente recebe um "truque" (placebo) ou o tratamento de verdade.' },
      { letra: 'D', texto: 'O humor é gerado pelo uso de hipérbole uma vez que a médica jamais revelaria o uso de placebo ao paciente.' },
      { letra: 'E', texto: 'O humor é gerado pela imagem do paciente retratado como rei, contudo recebendo um tratamento grosseiro.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2027-060', ...PUCPR_2027_BASE, numeroOriginal: 60,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'facil',
    imagem: 'imagens/estudo/pucpr-2027-060.webp',
    legenda: '<small>https://www.koreatimes.co.kr/opinion/20260701/blondie-garfield-july-2-2026</small>',
    enunciado: `<p>Leia a tirinha a seguir e assinale a alternativa que identifica o assunto nela abordado.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Adaptação de cardápios às novas tendências dietéticas atuais.', explicacao: 'Correta! As clientes exigem um banquete "fat-free", "gluten-free", "dairy-free", "sugar-free", "carb-free" e "meat-free" — tantas restrições da moda que montar o cardápio "might take some time".' },
      { letra: 'B', texto: 'Vaidade feminina quando da realização de dietas alimentares.' },
      { letra: 'C', texto: 'Criação de cardápios dietéticos por ferramentas de inteligência artificial.' },
      { letra: 'D', texto: 'Cobrança por um corpo perfeito que a população enfrenta atualmente.' },
      { letra: 'E', texto: 'Uso de medicamentos para a redução do percentual de gordura corporal.' },
    ],
    gabarito: 'A',
  },
);
