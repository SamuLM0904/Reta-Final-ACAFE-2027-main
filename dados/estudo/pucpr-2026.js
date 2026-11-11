/**
 * PUCPR Vestibular de Inverno 2026 — MEDICINA (prova de 24/05/2026, ingresso 2026/2) — Prova 1, BRANCA
 * (Língua Portuguesa 01–09, Literatura Brasileira 10–12, Biologia 13–20, Química 21–28, Matemática 29–37,
 * Física 38–42, História 43–47, Geografia 48–52, Filosofia 53–54, Língua Inglesa 55–60).
 *
 * Fonte: Provas/Outros/PUCPR/2026-Inverno-Medicina (mai-2026) - Prova Branca com Gabarito Definitivo.pdf
 * (o gabarito definitivo é a alternativa destacada no próprio caderno).
 * Ficaram de fora: 11 e 12 (Literatura de obras da lista de leituras da PUCPR) e 53–54 (Filosofia).
 * Questões de ESTUDO — nunca entram nos simulados. Aparecem no módulo da matéria, dentro do
 * capítulo do campo `conteudo` (Literatura e línguas: pelo `subtopico`).
 * Formato das questões: veja README.md ("Como adicionar uma questão nova").
 */

QUESTOES.push(
  // ───────────────────────── LÍNGUA PORTUGUESA ─────────────────────────
  {
    id: 'pucpr-2026-001', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 1,
    disciplina: 'Português', conteudo: 'por-4b1', subtopico: 'Concordância verbal', dificuldade: 'facil',
    textoApoio: `<p>A capa de revista reproduzida a seguir é referência para a próxima questão.</p>`,
    imagem: 'imagens/estudo/pucpr-2026-001.webp',
    legenda: '<small>Revista <b>Ciência Hoje</b>. Jan/fev. 2026, ed.428.</small>',
    enunciado: `<p>Se a palavra “polímeros”, no subtítulo da capa, for escrita no singular “polímero”, quantas outras palavras terão necessariamente a grafia alterada para se manter as regras de concordância?</p>`,
    alternativas: [
      { letra: 'A', texto: 'Uma.' },
      { letra: 'B', texto: 'Duas.', explicacao: 'Correta! “Polímeros que vêm da natureza têm aplicações inovadoras” passa a “Polímero que vem da natureza tem aplicações inovadoras”: só os verbos “vêm” e “têm” mudam (perdem o acento do plural); “aplicações inovadoras” não concorda com “polímero”.' },
      { letra: 'C', texto: 'Três.' },
      { letra: 'D', texto: 'Quatro.' },
      { letra: 'E', texto: 'Cinco.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'pucpr-2026-002', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 2,
    disciplina: 'Português', conteudo: 'por-1a5', subtopico: 'Sinonímia', dificuldade: 'facil',
    textoApoio: `<p>O trecho de livro a seguir é referência para a próxima questão.</p>
      <p>Partindo da <b><u>premissa</u></b> de que humanidades e formação médica são <b><u>indissociáveis</u></b>, mesmo que o contemporâneo insista em ameaçá-las, é preciso refletir sobre os caminhos de agora e para onde nos levarão os dias que estão chegando. E posso confessar: em 35 anos de docência, nunca vivi um tempo tão desafiador. Treinados para ensinar medicina, estamos agora pressionados pelo avanço <b><u>avassalador</u></b> da inteligência artificial e seu <b><u>séquito</u></b> tecnológico, encantados com o “como é possível?” e refletindo sobre onde essa novidade entra nas nossas vidas e como ela se <b><u>encaixa</u></b> no aprendizado dos alunos. Visto que já não há muita dúvida quanto aos seus benefícios para o ensino da medicina, a questão é o quanto e como esse novo mundo impactará a educação dos médicos em formação.</p>
      <small>CAMARGO, J.J. <b>A medicina da pessoa no século XXI</b>. Porto Alegre: Art Med editora, 2024, p. 2.</small>`,
    enunciado: `<p>Assinale a alternativa que apresenta um sinônimo <b><u>ADEQUADO</u></b> para o vocábulo destacado do texto, no contexto em que ocorre.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Premissa – consequência.' },
      { letra: 'B', texto: 'Indissociáveis – intransferíveis.' },
      { letra: 'C', texto: 'Avassalador – incólume.' },
      { letra: 'D', texto: 'Encaixa – insere.', explicacao: 'Correta! “Como ela se encaixa no aprendizado” = “como ela se insere no aprendizado”. Premissa é ponto de partida (não consequência), indissociáveis é inseparáveis, avassalador é arrasador (incólume = ileso) e séquito é comitiva (sequioso = sedento).' },
      { letra: 'E', texto: 'Séquito – sequioso.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'pucpr-2026-003', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 3,
    disciplina: 'Português', conteudo: 'por-2a3', subtopico: 'Relações lógico-semânticas', dificuldade: 'media',
    textoApoio: `<p>O texto a seguir é referência para a próxima questão.</p>`,
    imagem: 'imagens/estudo/pucpr-2026-003.webp',
    legenda: '<small>Disponível em: &lt;https://www.metropoles.com/colunas/claudia-meireles/a-descoberta-da-polilaminina-pode-dar-premio-nobel-a-tatiana-sampaio&gt;. Acesso em: 26 fev. 2026.</small>',
    enunciado: `<p>O excerto “Com o avanço brasileiro na regeneração da medula” estabelece com as informações subsequentes uma relação de</p>`,
    alternativas: [
      { letra: 'A', texto: 'causalidade.', explicacao: 'Correta! O avanço brasileiro na regeneração da medula é a causa de “surgem debates sobre impacto científico, futuro da medicina e Nobel”: “com o avanço” equivale a “por causa do avanço / graças ao avanço”.' },
      { letra: 'B', texto: 'proporcionalidade.' },
      { letra: 'C', texto: 'condicionalidade.' },
      { letra: 'D', texto: 'temporalidade.' },
      { letra: 'E', texto: 'adversatividade.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2026-004', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 4,
    disciplina: 'Português', conteudo: 'por-2a5', subtopico: 'Interpretação de texto', dificuldade: 'facil',
    textoApoio: `<p>O trecho de texto de divulgação científica a seguir é referência para a próxima questão.</p>
      <p><b>Indivíduos podem valorizar mais a recompensa quando é conquistada com esforço</b></p>
      <ul><li>Sugestão é feita por pesquisadores que conduziram um experimento com camundongos</li></ul>
      <p>O esforço pode tornar as recompensas mais valiosas. A conclusão é de um estudo, desenvolvido por pesquisadores de Stanford (Estados Unidos), publicado no fim do mês passado na revista Nature.</p>
      <p>O trabalho oferece uma explicação fisiológica para o paradoxo do esforço, termo que busca contemplar a contradição entre a sensação desagradável que pode vir da necessidade de foco e perseverança e a maior valorização da recompensa fruto do empenho.</p>
      <p>De acordo com a pesquisa, o esforço provoca a liberação do neurotransmissor acetilcolina, que, por sua vez, aciona o neurotransmissor dopamina, ligado ao prazer, quando a recompensa é entregue.</p>
      <p>Até alguns anos atrás, a ciência focava o custo do esforço. A "lei do menor esforço", por exemplo, foi cunhada em 1930 e descreve a preferência dos animais em exercer o menor esforço possível, seja físico ou mental, para obter a mesma recompensa.</p>
      <small>Disponível em: &lt;https://www1.folha.uol.com.br/ciencia/2026/02/individuos-podem-valorizar-mais-a-recompensa-quando-e-conquistada-com-esforco.shtml&gt;. Acesso em: 21 fev. 2026.</small>`,
    enunciado: `<p>Com base nas informações apresentadas pelo artigo de divulgação científica, depreende-se que os resultados da pesquisa até o momento</p>`,
    alternativas: [
      { letra: 'A', texto: 'comprovam o que já se sabia sobre a desvalorização do que é obtido com facilidade.' },
      { letra: 'B', texto: 'corroboram a teoria da “lei do menor esforço”, já estabelecida na primeira metade do século 20.' },
      { letra: 'C', texto: 'indicam a possibilidade de uma nova interpretação da relação entre esforço e recompensa.', explicacao: 'Correta! O título usa “podem valorizar” e o texto fala em “sugestão”: o estudo oferece uma explicação fisiológica que aponta para uma nova leitura (o esforço valoriza a recompensa), diferente do foco antigo no custo do esforço (“lei do menor esforço”).' },
      { letra: 'D', texto: 'interferem na maneira como o gerenciamento de atividades cotidianas pode ocorrer entre equipes.' },
      { letra: 'E', texto: 'Induzem os indivíduos a buscar minimizar os esforços para obtenção de melhores resultados.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2026-005', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 5,
    disciplina: 'Português', conteudo: ['por-2a5', 'por-4a2'], subtopico: 'Interpretação de manchete', dificuldade: 'facil',
    textoApoio: `<p>A notícia a seguir é referência para a próxima questão.</p>
      <p><b>Rede de túneis de 1.600 anos é descoberta sob a mesquita Hagia Sophia</b><br>
      <b>Construída entre 532 e 537 d.C., durante o reinado do imperador bizantino Justiniano I, a Hagia Sophia revela nova rede subterrânea durante obras de restauração</b></p>
      <small>Disponível em: &lt;https://revistagalileu.globo.com/ciencia/arqueologia/noticia/2026/03/rede-de-tuneis-de-1600-anos-e-descoberta-sob-a-mesquita-hagia-sophia.ghtml&gt;. Acesso em: 28 fev. 2026.</small>`,
    enunciado: `<p>Assinale a alternativa que apresenta uma afirmação <b><u>CORRETA</u></b> sobre as informações da notícia.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Descobriu-se uma nova rede de túneis em restauração feita sob a mesquita Hagia Sophia, há 1.600 anos.' },
      { letra: 'B', texto: 'Obras de restauração na mesquita Hagia Sophia permitiram descobrir uma rede de túneis de 1.600 anos.', explicacao: 'Correta! O título diz que a rede de túneis tem 1.600 anos e o subtítulo, que ela foi revelada “durante obras de restauração” da Hagia Sophia — exatamente o que a alternativa afirma.' },
      { letra: 'C', texto: '1.600 anos depois, descobriu-se uma restauração feita sob uma nova rede de túneis na mesquita Hagia Sophia.' },
      { letra: 'D', texto: 'A mesquita Hagia Sophia revelou, depois de 1.600 anos, a restauração de uma nova rede de túneis.' },
      { letra: 'E', texto: 'Uma nova rede de túneis, construída durante o reinado de Justiniano I, foi descoberta na Hagia Sophia.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'pucpr-2026-006', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 6,
    disciplina: 'Português', conteudo: ['por-2b7', 'por-2b4'], subtopico: 'Funções do “que” e do “se”', dificuldade: 'media',
    textoApoio: `<p>A notícia a seguir é referência para a próxima questão.</p>
      <p><b>Cientistas testam bactéria <u>que</u> pode acabar com o câncer <u>se</u> alimentando dos tumores</b><br>
      <b>Estratégia de biologia sintética usa microrganismo do solo para destruir massas tumorais por dentro e ativar mecanismos de segurança que evitam danos aos tecidos saudáveis</b></p>
      <small>Disponível em:&lt; https://revistagalileu.globo.com/saude/noticia/2026/02/cientistas-testam-bacteria-que-pode-acabar-com-o-cancer-se-alimentando-dos-tumores.ghtml&gt;. Acesso em: 20 fev. 2026.</small>`,
    enunciado: `<p>As palavras “que” e “se” têm usos bastante diversificados em língua portuguesa e, para ler adequadamente uma informação, é preciso compreender em que função esses vocábulos foram utilizados. No trecho de notícia em questão, identifica-se</p>`,
    alternativas: [
      { letra: 'A', texto: '“que” como pronome relativo que introduz oração subordinada adjetiva restritiva, enquanto “se” funciona como pronome reflexivo.', explicacao: 'Correta! “que” retoma “bactéria” e introduz a oração adjetiva restritiva (sem vírgula, especifica qual bactéria); em “se alimentando”, o “se” é pronome reflexivo (a bactéria alimenta a si mesma dos tumores).' },
      { letra: 'B', texto: '“que” como pronome relativo que introduz oração subordinada adjetiva explicativa, enquanto “se” funciona como pronome reflexivo.' },
      { letra: 'C', texto: '“que” como conjunção integrante que introduz oração subordinada substantiva subjetiva, enquanto “se” funciona como pronome recíproco.' },
      { letra: 'D', texto: '“que” como pronome relativo que introduz oração subordinada adjetiva restritiva, enquanto “se” funciona como conjunção condicional.' },
      { letra: 'E', texto: '“que” como conjunção integrante que introduz oração subordinada adjetiva restritiva, enquanto “se” funciona como conjunção causal.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2026-007', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 7,
    disciplina: 'Português', conteudo: ['por-3b1', 'por-2b4'], subtopico: 'Pronome oblíquo e função sintática', dificuldade: 'media',
    textoApoio: `<p>O trecho de correspondência a seguir é referência para a próxima questão.</p>
      <p>"D. Alba, Só agora posso pegar na pena e escrever-<b><u>lhe</u></b> para agradecer o obséquio que me fez mandando-me de presente ao velho amigo Machado. No primeiro dia, não pude conhecer bem este cavalheiro; ele buscava-me com palavrinhas doces e estalinhos, mas eu fugia-<b><u>lhe</u></b> com medo e metia-me pelos cantos ou embaixo dos aparadores. No segundo dia, já me aproximava, mas ainda cauteloso. Agora, corro para ele sem receio, trepo-lhe aos joelhos e às costas, ele coça-me, diz-me graças, e, se não mia como eu, é porque <b><u>lhe</u></b> custa, mas espero que chegue até lá" [...].</p>
      <small>ASSIS, Machado de. <b>Correspondência de Machado de Assis</b>. Reunida, organizada e comentada por Irene Moutinho e Sílvia Eleutério. Coordenação e orientação de Sérgio Paulo Rouanet. Rio de Janeiro: Academia Brasileira de Letras, 2008-2015.</small>`,
    enunciado: `<p>O uso de pronomes como elementos coesivos revela compreensão de diferentes estratégias de estilo para fazer um texto progredir. Os usos do pronome oblíquo “lhe”, em destaque no trecho de correspondência lido, devem-se</p>`,
    alternativas: [
      { letra: 'A', texto: 'à substituição rebuscada e retomada de substantivos em função de sujeito.' },
      { letra: 'B', texto: 'à incidência de complemento nominal nas duas primeiras ocorrências e complemento verbal (objeto indireto) na terceira.' },
      { letra: 'C', texto: 'à escolha de formas pronominais que conferem mais elegância ao texto, independentemente da função sintática.' },
      { letra: 'D', texto: 'à função de complemento nominal, objeto indireto e complemento nominal, exercida respectivamente pelas ocorrências.' },
      { letra: 'E', texto: 'à função de complemento verbal (objeto indireto) exercida nas três ocorrências.', explicacao: 'Correta! Nos três casos o “lhe” completa um verbo transitivo indireto: escrever (a ela), fugia (dele/a ele) e custa (a ele). Em todos é objeto indireto, não complemento de nome.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'pucpr-2026-008', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 8,
    disciplina: 'Português', conteudo: 'por-2a5', subtopico: 'Pressupostos e interpretação', dificuldade: 'media',
    textoApoio: `<p>O texto a seguir é referência para a próxima questão.</p>
      <p><b>Por que o macaco Punch viralizou? A ciência da fofura explica</b><br>
      <b>A evolução moldou nosso cérebro para amar bebês – e não só os humanos.</b><br>
      Por Bruno Carbinatto<br>
      26 fev 2026, 19h00</p>
      <p>Como acontece com frequência, a internet está novamente obcecada com um bichinho fofo.</p>
      <p>A celebridade da vez, você deve saber, é o macaco Punch do Zoológico de Ichikawa, no Japão. Nascido em julho de 2025, ele foi abandonado pela mãe ao nascer e criado pelos tratadores humanos, que o alimentaram com uma mamadeira.</p>
      <p>Sem apoio materno para se inserir na vida social do bando, Punch recebeu uma pelúcia de orangotango, que se tornou sua melhor amiga. Vídeos do macaco abraçando seu brinquedo e sendo agredido por indivíduos adultos viralizaram nas redes sociais nos últimos dias.</p>
      <small>Leia mais em: https://super.abril.com.br/ciencia/por-que-o-macaco-punch-viralizou-a-ciencia-da-fofura-explica/. Acesso em: 26 fev. 2026.</small>`,
    enunciado: `<p>Assinale a alternativa que apresenta uma interpretação <b><u>ADEQUADA</u></b> para as informações do texto anterior.</p>`,
    alternativas: [
      { letra: 'A', texto: 'No texto, celebra-se o ineditismo do surgimento de uma celebridade não humana como o macaco Punch.' },
      { letra: 'B', texto: 'A pelúcia recebida pelo macaquinho ajudou-o a socializar-se com maior rapidez com o grupo.' },
      { letra: 'C', texto: 'O autor do texto pressupõe que o leitor tenha conhecimento prévio da história do macaco Punch.', explicacao: 'Correta! A expressão “você deve saber” mostra que o autor pressupõe que o leitor já conhece o caso do macaco Punch, que viralizou nas redes.' },
      { letra: 'D', texto: 'O macaquinho Punch pôde ser salvo e acolhido pelo grupo graças à intervenção dos tratadores.' },
      { letra: 'E', texto: 'Nossa evolução depende do nosso apreço por bebês, mas não conseguimos fazer isso com outras espécies.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2026-009', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 9,
    disciplina: 'Português', conteudo: 'por-4b2', subtopico: 'Crase e regência', dificuldade: 'dificil',
    textoApoio: `<p>O texto a seguir é referência para a próxima questão.</p>
      <p>No site do programa (www.ppgcs.pucpr.br), em três idiomas, podem ser encontradas as informações de interesse para estudantes, pesquisadores e sociedade em geral que reforçam a maturidade do PPGCS. O quadriênio 2020-2024 foi marcado por grandes desafios, com destaque para a pandemia da COVID-19. Nesse período, apesar das dificuldades, o PPGCS encontrou uma oportunidade de dar uma contribuição adicional à (1) sociedade, o que, somada à (2) resiliência dos docentes e pós-graduandos, resultou também em um aumento na produção científica referente ao tema, como relatado nos relatórios anteriores. Isso foi possível devido a posição de destaque dos PPGCS em relação à (3) assistência, aos pesquisadores qualificados e engajados com a sociedade, à (4) estrutura para análise de material biológico e às (5) colaborações internacionais, além do apoio institucional.</p>
      <small>Disponível em: &lt;https://www.pucpr.br/escola-de-medicina-e-ciencias-da-vida/mestrado-doutorado/ciencias-da-saude/&gt;. Acesso em: 20 fev. 2026.</small>`,
    enunciado: `<p>O emprego de acento grave indica ocorrência de crase que pode ser causada por diferentes combinações morfossintáticas. Considerando essas informações, assinale a alternativa que apresenta uma afirmação <b><u>CORRETA</u></b> sobre ocorrências do texto.</p>`,
    alternativas: [
      { letra: 'A', texto: '3, 4 e 5 devem-se à regência nominal de “relação”.', explicacao: 'Correta! A expressão “em relação a” rege a preposição “a”, que se funde ao artigo dos termos coordenados: em relação à assistência (3), (a)os pesquisadores, à estrutura (4) e às colaborações (5).' },
      { letra: 'B', texto: '1 e 2 devem-se à regência nominal de “adicional”.' },
      { letra: 'C', texto: '3 deve-se à regência nominal de “relação”, já 4 e 5, à regência de “sociedade”.' },
      { letra: 'D', texto: '1 deve-se à regência nominal de “contribuição”.' },
      { letra: 'E', texto: '3 deve-se à regência nominal de “destaque”.' },
    ],
    gabarito: 'A',
  },

  // ───────────────────────── LITERATURA ─────────────────────────
  {
    id: 'pucpr-2026-010', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 10,
    disciplina: 'Literatura', subtopico: 'Escolas Literárias', dificuldade: 'dificil',
    textoApoio: `<p>Leia o poema que se segue, de Alice Ruiz, do livro dois <i>Dois em um</i>.</p>
      <p><i>enchemos a vida<br>de filhos<br>que nos enchem a vida</i></p>
      <p><i>um me enche de lembranças<br>que me enchem<br>de lágrimas</i></p>
      <p><i>uma me enche de alegrias<br>que enchem minhas noites<br>de dias</i></p>
      <p><i>outro me enche de esperanças<br>e receios<br>enquanto me incham<br>os seios</i></p>
      <small>RUIZ S., Alice. <b>Dois em um</b>. São Paulo: Iluminuras, 2008, p. 127.</small>`,
    enunciado: `<p>Sobre esse poema, é <b><u>CORRETO</u></b> afirmar:</p>`,
    alternativas: [
      { letra: 'A', texto: 'Pelos versos livres e a ausência de metro e rima, o poema é uma amostra típica da poesia da chamada Geração de 1945.' },
      { letra: 'B', texto: 'Esse poema é um exemplo da virada coloquial que a poesia brasileira sofreu depois do excessivo formalismo derivado do Concretismo e da segunda geração do Modernismo.' },
      { letra: 'C', texto: 'Nesse poema, é visível a influência de Cecília Meireles na geração de Alice, por sua delicadeza e contenção lírica.' },
      { letra: 'D', texto: 'A concisão e a economia de formas nesse poema apontam para a matriz vanguardista da poesia de Alice Ruiz.' },
      { letra: 'E', texto: 'É um poema que exemplifica o retorno do eu biográfico em boa parte da nova poesia brasileira que se produziu entre as décadas de 1970 e 1980.', explicacao: 'Correta! O eu lírico fala da própria experiência de mãe (os filhos, a gravidez — “me incham os seios”), em linguagem simples e cotidiana, traço da poesia dos anos 1970–1980 (geração “marginal”), que trouxe de volta a experiência pessoal e biográfica.' },
    ],
    gabarito: 'E',
  },

  // ───────────────────────── BIOLOGIA ─────────────────────────
  {
    id: 'pucpr-2026-013', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 13,
    disciplina: 'Biologia', conteudo: 'bio-1b2', subtopico: 'Telômeros e câncer', dificuldade: 'media',
    enunciado: `<p>Durante a vida, as células humanas passam por sucessivos ciclos de divisão para garantir o crescimento, a manutenção e a regeneração dos tecidos. Nesse processo, estruturas localizadas nas extremidades dos cromossomos sofrem encurtamento progressivo, fenômeno associado à perda da capacidade proliferativa celular e ao envelhecimento biológico. Pesquisas recentes demonstram que a manipulação desses mecanismos moleculares pode ser explorada terapeuticamente, tanto para conter a proliferação de células tumorais, quanto para o tratamento de doenças associadas ao envelhecimento celular.</p>
      <p>A utilização de estratégias terapêuticas que inibem a regeneração dos telômeros em células cancerígenas, como no tratamento do glioblastoma, fundamenta-se biologicamente no fato de que tais estratégias</p>`,
    alternativas: [
      { letra: 'A', texto: 'impedem diretamente a duplicação do DNA, ao bloquear as ligações de hidrogênio entre os pares de bases nitrogenadas.' },
      { letra: 'B', texto: 'promovem a diferenciação celular terminal das células tumorais, levando-as à perda da capacidade proliferativa.' },
      { letra: 'C', texto: 'eduzem a produção de ATP mitocondrial, limitando a energia necessária aos processos mitóticos.' },
      { letra: 'D', texto: 'estimulam a senescência celular reversível, permitindo posterior recuperação funcional das células cancerígenas.' },
      { letra: 'E', texto: 'favorecem a instabilidade genômica, aumentando a ocorrência de danos irreparáveis ao DNA e induzindo a apoptose das células tumorais.', explicacao: 'Correta! Células tumorais mantêm os telômeros pela telomerase. Inibindo essa regeneração, os telômeros encurtam a cada divisão, as pontas dos cromossomos ficam desprotegidas (fusões, quebras), surge instabilidade genômica com danos irreparáveis e a célula entra em apoptose.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'pucpr-2026-014', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 14,
    disciplina: 'Biologia', conteudo: ['bio-2b2', 'bio-2a3'], subtopico: 'Ribossomos e antibióticos', dificuldade: 'facil',
    textoApoio: `<p>Observe a imagem.</p>`,
    imagem: 'imagens/estudo/pucpr-2026-014.webp',
    legenda: 'Ribossomo célula procariota &nbsp;&nbsp;&nbsp;&nbsp; Ribossomo célula eucariota',
    enunciado: `<p>A imagem apresenta uma comparação entre os ribossomos de células procarióticas e eucarióticas, destacando suas subunidades (S) e coeficientes de sedimentação. Embora ambos desempenhem a mesma função biológica — a síntese de proteínas —, diferenças estruturais e moleculares entre esses complexos permitem a ação seletiva de determinados antibióticos.</p>
      <p>O uso de antibióticos capazes de eliminar bactérias em uma situação de infecção, sem causar danos significativos às células humanas, fundamenta-se no fato de que esses fármacos</p>`,
    alternativas: [
      { letra: 'A', texto: 'bloqueiam o código genético bacteriano, que possui códons distintos daqueles utilizados pelas células humanas.' },
      { letra: 'B', texto: 'impedem a ligação do ribossomo ao retículo endoplasmático rugoso, estrutura ausente nas células procarióticas.' },
      { letra: 'C', texto: 'interagem especificamente com as subunidades 30S e/ou 50S dos ribossomos bacterianos, cuja estrutura tridimensional e composição molecular diferem das subunidades 40S e 60S, presentes nos ribossomos eucarióticos.', explicacao: 'Correta! Antibióticos como tetraciclinas (30S) e macrolídeos/cloranfenicol (50S) se ligam aos ribossomos 70S bacterianos, diferentes dos 80S (40S + 60S) humanos; assim inibem a síntese proteica da bactéria sem afetar a da célula humana.' },
      { letra: 'D', texto: 'inativam o RNA ribossômico apenas em organismos unicelulares, sem interferir em células pluricelulares.' },
      { letra: 'E', texto: 'afetam exclusivamente células com elevada taxa metabólica, característica predominante em bactérias patogênicas.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2026-015', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 15,
    disciplina: 'Biologia', conteudo: ['bio-1a3', 'bio-2b8'], subtopico: 'Epigenética e músculo', dificuldade: 'media',
    enunciado: `<p>Em um experimento com camundongos fêmeas, pesquisadores analisaram os efeitos da prática de corrida voluntária ao longo da vida sobre a metilação do DNA no músculo esquelético. Parte dos animais teve as células satélite eliminadas na fase adulta, enquanto outro grupo manteve essas células. A análise revelou alterações epigenéticas em regiões promotoras de genes relacionados à identidade, à estrutura e ao tamanho das fibras musculares apenas nos animais fisicamente ativos que preservaram as células satélite.</p>
      <p>A interpretação integrada dos resultados desse experimento, a partir do texto científico e do conceito de metilação do DNA, como mecanismo regulador da expressão gênica, permite concluir que</p>`,
    alternativas: [
      { letra: 'A', texto: 'a adaptação muscular ao exercício, ao longo da vida, depende da ação das células satélite, na modulação epigenética de genes estruturais do músculo.', explicacao: 'Correta! As alterações de metilação nos promotores de genes da fibra muscular só apareceram nos animais ativos que mantinham as células satélite; logo, essas células são necessárias para a modulação epigenética que acompanha a adaptação ao exercício.' },
      { letra: 'B', texto: 'a metilação do DNA ocorre de forma idêntica em músculos ativos e sedentários, sendo independente da presença de células satélite.' },
      { letra: 'C', texto: 'o exercício físico substitui completamente a função das células satélite, na manutenção da estrutura muscular, por meio da ativação direta de genes contráteis.' },
      { letra: 'D', texto: 'as alterações epigenéticas observadas são consequência exclusiva do envelhecimento dos animais, sem relação com a prática de atividade física.' },
      { letra: 'E', texto: 'a eliminação das células satélite potencializa a adaptação muscular ao exercício ao aumentar a expressão de genes ligados à inervação.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2026-016', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 16,
    disciplina: 'Biologia', conteudo: 'bio-1b5', subtopico: 'Herança ligada ao X', dificuldade: 'media',
    textoApoio: `<p>Observe o Heredograma a seguir.</p>`,
    imagem: 'imagens/estudo/pucpr-2026-016.webp',
    legenda: '<small>Disponível em: https://pt.khanacademy.org/science/ap-biology/heredity/non-mendelian-genetics/a/hs-pedigrees-review. Acesso em: 09 fev. 2026.</small>',
    enunciado: `<p>O heredograma apresentado representa a ocorrência de uma doença genética rara presente na porção do cromossomo X sem homologia com o cromossomo Y, em uma família, ao longo de quatro gerações. Os indivíduos afetados estão representados por símbolos preenchidos.</p>
      <p>Considerando exclusivamente as informações do heredograma e admitindo herança monogênica com penetrância completa, a probabilidade de o indivíduo IV-1 gerar uma criança não afetada, caso se case com uma pessoa que tenha o genótipo igual ao I-2, é igual a:</p>`,
    alternativas: [
      { letra: 'A', texto: '0%' },
      { letra: 'B', texto: '12,5%' },
      { letra: 'C', texto: '25%' },
      { letra: 'D', texto: '50%', explicacao: 'Correta! Pais normais com filhos afetados indicam herança recessiva ligada ao X; I-2 é portadora (X<sup>A</sup>X<sup>a</sup>), pois tem o filho II-3 afetado. IV-1 é X<sup>a</sup>Y. Cruzamento X<sup>a</sup>Y × X<sup>A</sup>X<sup>a</sup>: X<sup>A</sup>X<sup>a</sup>, X<sup>a</sup>X<sup>a</sup>, X<sup>A</sup>Y, X<sup>a</sup>Y → 2/4 = 50% não afetados.' },
      { letra: 'E', texto: '75%' },
    ],
    gabarito: 'D',
  },
  {
    id: 'pucpr-2026-017', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 17,
    disciplina: 'Biologia', conteudo: 'bio-2b1', subtopico: 'Proteínas anticongelantes', dificuldade: 'facil',
    enunciado: `<p>A limitação do tempo de viabilidade de órgãos destinados a transplantes representa um grande desafio da medicina moderna. Estudos indicam que proteínas anticongelantes (AFPs), especialmente de origem marinha, aumentam a viabilidade celular por apresentarem propriedades como histerese térmica e inibição da recristalização do gelo.</p>
      <p>Do ponto de vista fisiopatológico, o principal mecanismo pelo qual as AFPs contribuem para a preservação de órgãos humanos é a</p>`,
    alternativas: [
      { letra: 'A', texto: 'manutenção da atividade metabólica celular durante o congelamento, permitindo a produção contínua de energia pelas mitocôndrias.' },
      { letra: 'B', texto: 'modulação direta da resposta imunológica do receptor, reduzindo o risco de rejeição do órgão transplantado.' },
      { letra: 'C', texto: 'preservação da circulação sanguínea residual do órgão durante o armazenamento em temperaturas extremamente baixas.' },
      { letra: 'D', texto: 'indução controlada da morte celular programada, eliminando células danificadas antes do processo de transplante.' },
      { letra: 'E', texto: 'diminuição dos danos celulares causados pela formação e recristalização de cristais de gelo, preservando membranas e organelas.', explicacao: 'Correta! As AFPs se ligam aos cristais de gelo, baixam o ponto de congelamento (histerese térmica) e impedem que os cristais cresçam/recristalizem; assim os cristais não perfuram membranas e organelas, preservando as células do órgão.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'pucpr-2026-018', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 18,
    disciplina: 'Biologia', conteudo: 'bio-3b1', subtopico: 'Fígado e enzimas hepáticas', dificuldade: 'facil',
    textoApoio: `<p>Observe o gráfico a seguir.</p>`,
    imagem: 'imagens/estudo/pucpr-2026-018.webp',
    legenda: 'Observação: tempo em horas.',
    legendaGeral: '<small>CHAMPE, Pamela C. <b>Bioquímica ilustrada</b>. 2. ed. Porto Alegre: Artmed, 1996.</small>',
    enunciado: `<p>O cogumelo Amanita phalloides é responsável por envenenamentos graves, pois produz toxinas que afetam diretamente o fígado. O gráfico apresentado ilustra o padrão de variação da alanina-amino-transferase (ALT) sérica e da bilirrubina plasmática, ao longo do tempo, após a ingestão desse cogumelo. A (ALT) é uma enzima que atua no metabolismo proteico dos hepatócitos.</p>
      <p>A partir da análise do gráfico e dos conhecimentos sobre a função hepática, a elevação acentuada da ALT sérica, observada nas primeiras horas após a ingestão está diretamente relacionada</p>`,
    alternativas: [
      { letra: 'A', texto: 'à intensa lesão dos hepatócitos, com liberação de enzimas intracelulares para a corrente sanguínea.', explicacao: 'Correta! A ALT é uma enzima de dentro dos hepatócitos; quando a toxina destrói essas células, a enzima extravasa para o sangue e sua dosagem sobe (até 20 vezes) antes mesmo do acúmulo de bilirrubina.' },
      { letra: 'B', texto: 'ao aumento da produção de bile pelo fígado, estimulada pela toxina do cogumelo.' },
      { letra: 'C', texto: 'à destruição acelerada de hemácias, elevando indiretamente a concentração de ALT no plasma.' },
      { letra: 'D', texto: 'à redução da filtração renal, que impede a excreção normal da ALT.' },
      { letra: 'E', texto: 'ao acúmulo tardio de bilirrubina conjugada, que estimula a síntese de ALT pelo fígado.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2026-019', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 19,
    disciplina: 'Biologia', conteudo: 'bio-3b5', subtopico: 'Filtração glomerular e hematúria', dificuldade: 'media',
    enunciado: `<p>Um paciente adulto apresenta micro hematúria persistente identificada em exame de urina. Diante do quadro, o médico levanta duas hipóteses principais: uma lesão renal, relacionada ao processo de filtração do sangue, ou uma lesão localizada nos ureteres ou vias urinárias inferiores, ocorrida após a formação da urina. Para auxiliar no diagnóstico diferencial, é solicitado um exame microscópico com análise da morfologia das hemácias, buscando a presença de hemácias dismórficas.</p>
      <p>Com base na fisiologia renal e na interpretação clínica desse exame, o achado que mais indica a origem renal da lesão é</p>`,
    alternativas: [
      { letra: 'A', texto: 'predominância de hemácias íntegras, indicando sangramento recente nas vias urinárias, após a formação da urina.' },
      { letra: 'B', texto: 'predominância de hemácias dismórficas, sugerindo deformação celular durante a passagem pelo glomérulo renal.', explicacao: 'Correta! Hemácias que atravessam a barreira de filtração glomerular lesada e depois passam pelos túbulos (variações de osmolaridade) chegam deformadas (dismórficas); sangramento nas vias urinárias, depois da formação da urina, dá hemácias íntegras.' },
      { letra: 'C', texto: 'presença de hemácias normais associada à elevação de ureia, refletindo comprometimento funcional do sistema urinário.' },
      { letra: 'D', texto: 'presença de hemoglobina livre sem hemácias, associada a alterações na filtração tubular renal.' },
      { letra: 'E', texto: 'ausência de hemácias com discreta proteinúria, indicando lesões microscópicas no epitélio ureteral.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'pucpr-2026-020', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 20,
    disciplina: 'Biologia', conteudo: 'bio-3b2', subtopico: 'Estenose aórtica', dificuldade: 'facil',
    enunciado: `<p>Um homem de 58 anos, com histórico de pressão alta e pouco hábito de atividade física, procura atendimento médico relatando cansaço frequente, falta de ar ao realizar esforços e episódios de tontura. Durante o exame físico, o médico identifica a presença de um sopro cardíaco, ouvido principalmente na região da válvula aórtica, com irradiação para o pescoço. Um exame de imagem mostra que essa válvula apresenta estreitamento, dificultando a passagem do sangue.</p>
      <p>Com base nessas informações e nos conhecimentos sobre o funcionamento do sistema cardiovascular, o problema apresentado pelo paciente está relacionado, principalmente, a</p>`,
    alternativas: [
      { letra: 'A', texto: 'aumento da quantidade de sangue que retorna ao coração após cada batimento, sobrecarregando os átrios.' },
      { letra: 'B', texto: 'diminuição da força de contração do coração, causada pela redução da atividade elétrica cardíaca.' },
      { letra: 'C', texto: 'queda acentuada da pressão arterial, provocada pela diminuição da resistência dos vasos sanguíneos.' },
      { letra: 'D', texto: 'dificuldade na saída do sangue do coração, durante a contração do ventrículo esquerdo, exigindo maior esforço cardíaco.', explicacao: 'Correta! A valva aórtica fica entre o ventrículo esquerdo e a aorta; estreitada (estenose), ela dificulta a ejeção do sangue na sístole ventricular, e o ventrículo esquerdo precisa fazer mais força — daí cansaço, falta de ar e tontura.' },
      { letra: 'E', texto: 'falha na passagem do estímulo nervoso entre as câmaras do coração, alterando o ritmo cardíaco.' },
    ],
    gabarito: 'D',
  },

  // ───────────────────────── QUÍMICA ─────────────────────────
  {
    id: 'pucpr-2026-021', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 21,
    disciplina: 'Química', conteudo: ['qui-3a2', 'qui-3a4'], subtopico: 'Gravimetria', dificuldade: 'media',
    enunciado: `<p>O cálcio presente em uma determinada amostra de 200,00mL de água oriunda de fonte natural foi determinado peta técnica de precipitação com oxalato [ C<sub>2</sub>O<sub>4</sub> ]<sup>2-</sup>. O precipitado após ser filtrado, lavado e calcinado em um cadinho:</p>
      <p>Cadinho vazio = 26,00g<br>
      Cadinho mais amostra calcinada contendo somente CaO = 26,84g</p>
      <p>“ A técnica de calcinação é um processo, por via seca, em que o material é aquecido em altas temperaturas a fim de realizar decomposição, desidratação ou oxidação, removendo compostos voláteis, eliminando água e convertendo minérios em óxidos”.</p>
      <p>Assinale a alternativa que contém a concentração de cálcio na forma de cátion bivalente (Ca<sup>2+</sup>) em [ g(Ca<sup>2+</sup>)/100mL de amostra].</p>`,
    alternativas: [
      { letra: 'A', texto: '0,42g Ca<sup>2+</sup>/100mL de amostra.' },
      { letra: 'B', texto: '0,07g Ca<sup>2+</sup>/100mL de amostra.' },
      { letra: 'C', texto: '0,30g Ca<sup>2+</sup>/100mL de amostra.', explicacao: 'Correta! Massa de CaO = 26,84 − 26,00 = 0,84 g → 0,84/56 = 0,015 mol de CaO = 0,015 mol de Ca<sup>2+</sup> → 0,015 × 40 = 0,60 g em 200 mL, ou seja, 0,30 g por 100 mL.' },
      { letra: 'D', texto: '0,84g Ca<sup>2+</sup>/100mL de amostra.' },
      { letra: 'E', texto: '0,60g Ca<sup>2+</sup>/100mL de amostra.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2026-022', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 22,
    disciplina: 'Química', conteudo: 'qui-4a4', subtopico: 'Constante de basicidade (Kb)', dificuldade: 'media',
    enunciado: `<p>Hidroxilamina é um composto inorgânico de fórmula H<sub>2</sub>NOH, cristalino, instável e higroscópico, quase sempre disponível em solução aquosa. Muito utilizado para preparar oximas, ou como um intermediária na nitrificação biológica.<br>
      Uma solução 2,50.10<sup>-3</sup> mol/L de hidroxilamina tem pH de 9,11. Qual é o valor aproximado da constante básica (Kb) para essa base fraca?</p>
      <p><b>Sabendo que:<br>
      10 <sup>- 9,11</sup> ≅ 7,7.10 <sup>- 10</sup><br>
      10 <sup>- 4,89</sup> ≅ 1,3.10 <sup>- 5</sup></b></p>
      <p>H<sub>2</sub>NOH(aq) + H<sub>2</sub>O (liq) ⇌ H<sub>3</sub>NOH<sup>+</sup> (aq) + OH<sup>-</sup> (aq)</p>`,
    alternativas: [
      { letra: 'A', texto: '3,1.10<sup>-7</sup>' },
      { letra: 'B', texto: '6,8.10<sup>-8</sup>', explicacao: 'Correta! pOH = 14 − 9,11 = 4,89 → [OH<sup>−</sup>] = 1,3.10<sup>−5</sup> mol/L. Kb = [OH<sup>−</sup>]²/[base] = (1,3.10<sup>−5</sup>)² / 2,5.10<sup>−3</sup> = 1,69.10<sup>−10</sup> / 2,5.10<sup>−3</sup> ≈ 6,8.10<sup>−8</sup>.' },
      { letra: 'C', texto: '5,6.10<sup>-5</sup>' },
      { letra: 'D', texto: '2,9.10<sup>-9</sup>' },
      { letra: 'E', texto: '1,7.10<sup>-8</sup>' },
    ],
    gabarito: 'B',
  },
  {
    id: 'pucpr-2026-023', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 23,
    disciplina: 'Química', conteudo: ['qui-4a1', 'qui-3a2'], subtopico: 'Termoquímica e estequiometria', dificuldade: 'media',
    enunciado: `<p>As refeições embaladas do tipo “Heater Meals” aquecem sozinhas, no intervalo de tempo de 10 a 12 min, sem a necessidade de fogo, eletricidade ou micro-ondas, sendo projetadas para situações de emergência, acampamentos e locais sem infraestrutura.<br>
      Utilizando uma tecnologia patenteada de reação química exotérmica, em que o operador precisa apenas colocar água na unidade de aquecimento, para obter uma variação de entalpia de 353 kJ/mol de magnésio.</p>
      <p>__Mg(s) + __H<sub>2</sub>O(liq) ⇌ __Mg(OH)<sub>2</sub>(s) + __H<sub>2</sub>(g)</p>
      <p>Qual deve ser a massa de magnésio necessária para produzir energia suficiente para aquecer 225mL de água (densidade 1g / cm<sup>3</sup> e calor específico 1cal / g.<sup>0</sup>C) de 25<sup>0</sup>C até 100<sup>0</sup>C.<br>
      <b>Dados: 1 cal = 4,18J</b></p>`,
    alternativas: [
      { letra: 'A', texto: '4,8g', explicacao: 'Correta! Q = m·c·ΔT = 225 × 1 × 75 = 16 875 cal × 4,18 ≈ 70 540 J ≈ 70,5 kJ. Mols de Mg = 70,5/353 ≈ 0,20 mol → 0,20 × 24 g/mol = 4,8 g.' },
      { letra: 'B', texto: '5,6g' },
      { letra: 'C', texto: '1,2g' },
      { letra: 'D', texto: '9,6g' },
      { letra: 'E', texto: '2,3g' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2026-024', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 24,
    disciplina: 'Química', conteudo: ['qui-1a1', 'qui-1a2'], subtopico: 'Modelos atômicos e números quânticos', dificuldade: 'media',
    enunciado: `<p>Julgue os itens a seguir.</p>
      <p>I. O número máximo de orbitais que pode(m) ser identificado(s) no conjunto de números quânticos (n=3; l = 0; m = 0) é um.<br>
      II. No modelo atômico proposto por Rutherford, os elétrons descrevem órbitas circulares de raio definido e energia quantizada.<br>
      III. No modelo atômico atual, a região de maior probabilidade de encontrar o elétron é o orbital.<br>
      IV. O primeiro cientista a identificar uma partícula subatômica foi Thomson ao concluir que os raios catódicos continham os elétrons que faziam parte da constituição dos átomos.<br>
      V. No modelo atômico de Bohr, os níveis de energia consecutivos sempre apresentam a mesma diferença de energia.</p>
      <p>Estão <b><u>CORRETOS</u></b></p>`,
    alternativas: [
      { letra: 'A', texto: 'apenas I, II, III e IV.' },
      { letra: 'B', texto: 'apenas I, II e V.' },
      { letra: 'C', texto: 'apenas III, IV e V.' },
      { letra: 'D', texto: 'apenas I, III e IV.', explicacao: 'Correta! I: n = 3, l = 0, m = 0 é um único orbital (3s). III: orbital é a região de maior probabilidade. IV: Thomson identificou o elétron nos raios catódicos. II é falsa (órbitas quantizadas são de Bohr) e V é falsa (os níveis de Bohr ficam cada vez mais próximos em energia).' },
      { letra: 'E', texto: 'apenas II e V.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'pucpr-2026-025', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 25,
    disciplina: 'Química', conteudo: ['qui-2b4', 'qui-2b5'], subtopico: 'Síntese da anilina a partir do tolueno', dificuldade: 'dificil',
    textoApoio: `<p>As reações a seguir propõem uma sequência para obtenção de anilina a partir de tolueno.</p>`,
    imagem: 'imagens/estudo/pucpr-2026-025.webp',
    enunciado: `<p>Sabendo que o composto:</p>
      <p>A – reage com bicarbonato sódio liberando um gás inodoro, incolor e não inflamável.<br>
      B – é um haleto derivado de ácido carboxílico.<br>
      C – é um sólido branco em condições ambiente de fórmula molecular C<sub>7</sub>H<sub>7</sub>NO.</p>
      <p>Assinale a alternativa que apresenta a <b><u>CORRETA</u></b> nomenclatura dos compostos A, B e C.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A →(álcool benzílico); B → (sulfato de benzoíla); C → (sulfanilamida).' },
      { letra: 'B', texto: 'A →(fenol); B → (cloreto de fenila); C → (nitro benzeno).' },
      { letra: 'C', texto: 'A →(aldeído benzoico); B → (cloreto de fenila); C → (benzamida).' },
      { letra: 'D', texto: 'A →(aldeído benzoico); B → (sulfito de fenila); C → (fenilamina).' },
      { letra: 'E', texto: 'A →(ácido benzoico); B → (cloreto de benzoíla); C → (benzamida).', explicacao: 'Correta! KMnO<sub>4</sub> oxida o CH<sub>3</sub> do tolueno a COOH: A = ácido benzoico (libera CO<sub>2</sub> com bicarbonato). O agente clorante (no esquema “SO<sub>2</sub>Cl”; na prática, o cloreto de tionila, SOCl<sub>2</sub>) troca o OH por Cl: B = cloreto de benzoíla (haleto de acila). Com NH<sub>3</sub> forma C = benzamida (C<sub>7</sub>H<sub>7</sub>NO), que pela degradação de Hofmann (Br<sub>2</sub>/OH<sup>−</sup>) dá anilina.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'pucpr-2026-026', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 26,
    disciplina: 'Química', conteudo: 'qui-3a3', subtopico: 'Equação dos gases ideais', dificuldade: 'facil',
    textoApoio: `<p>Leia o texto a seguir.</p>
      <p>Veículos que operam através de células a combustível são classificados como veículos elétricos, pois como os veículos elétricos, à bateria, convergem no ponto em que ambas transformam energia química em energia elétrica muito eficientemente, ambas requerem manutenção mínima, pois não possuem peças móveis. Entretanto, ao contrário das células a combustível, os reagentes da bateria são armazenados internamente e depois de esgotada, necessita ser recarregada ou substituída. Nos veículos elétricos à bateria, são utilizados modelos recarregáveis. Em veículos elétricos a células a combustível, o combustível é armazenado externamente, no tanque de combustível e o ar, obtido na atmosfera. Enquanto o tanque do veículo contiver combustível, as células a combustível produzirão energia na forma de eletricidade e calor. A escolha entre bateria ou células a combustível depende da utilização pretendida.</p>
      <small>Disponível em: https://www.abenge.org.br/cobenge/legado/arquivos/14/artigos/RS-9-16411463034-1119036082861.pdf. Acesso em: 12 fev. 2026. (Adaptado)</small>`,
    enunciado: `<p>Sabendo que uma célula a combustível é classificada como uma célula galvânica, em um sistema que utiliza hidrogênio e oxigênio, acoplado a um motor de um veículo elétrico, operando sem perdas e com um cilindro de gás hidrogênio (H<sub>2</sub>) com comportamento de gás ideal.</p>
      <p>Qual deve ser a pressão para que um tanque de 200 L de capacidade contendo 4kg de hidrogênio, mantido a 27 ºC.</p>
      <p>Dados: H = 1g/mol</p>
      <p>Constante Universal dos gases: R = 0,082 atm.L.mol<sup>-1</sup>.K<sup>-1</sup></p>`,
    alternativas: [
      { letra: 'A', texto: '100 atm' },
      { letra: 'B', texto: '80 atm' },
      { letra: 'C', texto: '246 atm', explicacao: 'Correta! n = 4000 g / 2 g/mol = 2000 mol de H<sub>2</sub>; T = 300 K. P = nRT/V = 2000 × 0,082 × 300 / 200 = 246 atm.' },
      { letra: 'D', texto: '580 atm' },
      { letra: 'E', texto: '125 atm' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2026-027', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 27,
    disciplina: 'Química', conteudo: ['qui-3a2', 'qui-2b2', 'qui-3b3'], subtopico: 'Análise elementar por combustão', dificuldade: 'dificil',
    textoApoio: `<p>Um método muito utilizado para a síntese de um certo hidrocarboneto de cadeia aberta encontra-se parcialmente demonstrado a seguir.</p>`,
    imagem: ['imagens/estudo/pucpr-2026-027-1.webp', 'imagens/estudo/pucpr-2026-027-2.webp'],
    legendaAcima: ['', 'O hidrocarboneto produzido sofreu uma combustão completa em um queimador demonstrado a seguir.'],
    enunciado: `<p>Sabendo que foram produzidos 8,4g do hidrocarboneto e que após a combustão total, no recipiente (A), ocorreu um aumento de massa de 26,4g e no recipiente (B), ocorreu um aumento de 10,8g, é <b><u>CORRETO</u></b> afirmar que:</p>
      <p>I. O hidrocarboneto possui dois carbonos insaturados.<br>
      II. O hidrocarboneto apresenta isomeria geométrica.<br>
      III. O hidrocarboneto apresenta massa molar de 42g/mol.<br>
      IV. O hidrocarboneto apresenta um anel aromático.<br>
      V. O hidrocarboneto, quando reage com HBr em presença de peróxido, forma predominantemente um composto que apresenta isomeria óptica.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Estão corretas apenas I e IV.' },
      { letra: 'B', texto: 'Estão corretas apenas I e II.' },
      { letra: 'C', texto: 'Estão corretas apenas I, II e III.' },
      { letra: 'D', texto: 'Estão corretas apenas I e III.', explicacao: 'Correta! A eliminação de HBr do 2-bromopropano dá propeno. Confirmação: CO<sub>2</sub> (apolar, A) = 26,4/44 = 0,6 mol de C; H<sub>2</sub>O (polar, B) = 10,8/18 = 0,6 mol → 1,2 mol de H; fórmula mínima CH<sub>2</sub>, e 8,4 g = 0,2 mol de C<sub>3</sub>H<sub>6</sub> (42 g/mol). Propeno tem 2 carbonos sp² (I e III certas), não tem isomeria geométrica nem anel, e com HBr/peróxido dá 1-bromopropano, sem carbono quiral.' },
      { letra: 'E', texto: 'Todas estão corretas.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'pucpr-2026-028', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 28,
    disciplina: 'Química', conteudo: ['qui-4b4', 'qui-1a5'], subtopico: 'Balanceamento redox', dificuldade: 'media',
    enunciado: `<p>O dióxido de cloro, ClO<sub>2</sub>, é um gás amarelo, que se condensa em um líquido vermelho escuro a 11<sup>0</sup>C e, diferentemente do dióxido de nitrogênio, não tem nenhuma tendência a se dimerizar.</p>
      <p>A seguir encontra-se uma reação parcialmente balanceada de obtenção desse óxido.</p>
      <p><b>2 HClO<sub>3</sub> + __HCl → __ClO<sub>2</sub> + __Cl<sub>2</sub> + 2 H<sub>2</sub>O</b></p>
      <p>Assinale a alternativa <b><u>CORRETA</u></b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O cloro sofre uma oxidação variando o Nox de (-1) no clorato para (+1) no dióxido de cloro.' },
      { letra: 'B', texto: 'O dióxido de cloro apresenta geometria trigonal plana.' },
      { letra: 'C', texto: 'A reação de dimerização do dióxido de nitrogênio forma N<sub>4</sub>O<sub>2</sub>.' },
      { letra: 'D', texto: 'O cloro gasoso (Cl<sub>2</sub>) formado é classificado como um gás inerte, inodoro e incolor.' },
      { letra: 'E', texto: 'A soma dos menores coeficientes inteiros para balancear a equação é 9.', explicacao: 'Correta! Cl do clorato: +5 → +4 (ClO<sub>2</sub>), ganha 1 e⁻; Cl do HCl: −1 → 0 (Cl<sub>2</sub>), perde 1 e⁻. Equação: 2 HClO<sub>3</sub> + 2 HCl → 2 ClO<sub>2</sub> + 1 Cl<sub>2</sub> + 2 H<sub>2</sub>O; soma = 2 + 2 + 2 + 1 + 2 = 9.' },
    ],
    gabarito: 'E',
  },

  // ───────────────────────── MATEMÁTICA ─────────────────────────
  {
    id: 'pucpr-2026-029', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 29,
    disciplina: 'Matemática', conteudo: 'mat-1a4', subtopico: 'Regra de três composta', dificuldade: 'facil',
    enunciado: `<p>Juntas, trabalhando cinco horas por dia durante quatro dias, seis impressoras industriais de mesmo rendimento conseguem imprimir até novecentas mil páginas.</p>
      <p>Quantas dessas impressoras (no mínimo) serão necessárias para imprimir um milhão, trezentas e cinquenta mil páginas em três dias, trabalhando dez horas por dia?</p>`,
    alternativas: [
      { letra: 'A', texto: '3' },
      { letra: 'B', texto: '4' },
      { letra: 'C', texto: '6', explicacao: 'Correta! 6 impressoras × 5 h × 4 dias = 120 impressora-horas para 900 000 páginas → 7 500 páginas por impressora-hora. 1 350 000 / 7 500 = 180 impressora-horas; em 3 × 10 = 30 horas: 180/30 = 6 impressoras.' },
      { letra: 'D', texto: '8' },
      { letra: 'E', texto: '9' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2026-030', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 30,
    disciplina: 'Matemática', conteudo: 'mat-1a2', subtopico: 'União de três conjuntos', dificuldade: 'facil',
    enunciado: `<p>Em uma campanha de monitoramento de hábitos de saúde, os 200 alunos de uma instituição de ensino foram classificados segundo três critérios binários:</p>
      <ul><li>de atividade física: regular ou insuficiente;</li><li>alimentação: adequada ou inadequada;</li><li>qualidade do sono: boa ou ruim.</li></ul>
      <p>Os dados obtidos indicaram que:</p>
      <ul><li>100 alunos apresentam prática insuficiente de atividade física;</li><li>90 alunos têm alimentação inadequada;</li><li>80 alunos apresentam qualidade de sono ruim;</li><li>40 alunos apresentam, simultaneamente, prática insuficiente de atividade física e alimentação inadequada;</li><li>30 alunos apresentam, simultaneamente, prática insuficiente de atividade física e sono ruim;</li><li>20 alunos apresentam, simultaneamente, alimentação inadequada e sono ruim;</li><li>10 alunos reúnem, ao mesmo tempo, as três condições negativas.</li></ul>
      <p>Com base nessas informações, o número de alunos que apresentam, simultaneamente, prática regular de atividade física, alimentação adequada e boa qualidade do sono é</p>`,
    alternativas: [
      { letra: 'A', texto: '10', explicacao: 'Correta! Alunos com pelo menos uma condição negativa: 100 + 90 + 80 − 40 − 30 − 20 + 10 = 190. Os que não têm nenhuma: 200 − 190 = 10.' },
      { letra: 'B', texto: '20' },
      { letra: 'C', texto: '30' },
      { letra: 'D', texto: '40' },
      { letra: 'E', texto: '50' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2026-031', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 31,
    disciplina: 'Matemática', conteudo: 'mat-1b5', subtopico: 'Sistema linear', dificuldade: 'facil',
    enunciado: `<p>Em um laboratório de imunologia, três tipos de soro, X, Y e Z, são analisados quanto à massa total de reagentes presente em cada unidade.</p>
      <p>Sabe-se que a soma das massas de reagentes contidas em uma unidade de cada soro (1X + 1Y + 1Z) é igual a 150 mg; que a massa total de reagentes em duas unidades do soro X, uma unidade do soro Y e três unidades do soro Z é igual a 350 mg; e que cada unidade do soro Y contém o dobro da massa de reagentes contida em uma unidade do soro X.</p>
      <p>Com base nessas informações, a massa total de reagentes contida em uma unidade do soro Z é de</p>`,
    alternativas: [
      { letra: 'A', texto: '70 mg' },
      { letra: 'B', texto: '80 mg' },
      { letra: 'C', texto: '90 mg', explicacao: 'Correta! Com Y = 2X: 3X + Z = 150 e 4X + 3Z = 350. Da primeira, Z = 150 − 3X; substituindo: 4X + 450 − 9X = 350 ⇒ X = 20, Y = 40 e Z = 90 mg.' },
      { letra: 'D', texto: '100 mg' },
      { letra: 'E', texto: '110 mg' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2026-032', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 32,
    disciplina: 'Matemática', conteudo: 'mat-2a4', subtopico: 'Função exponencial', dificuldade: 'media',
    enunciado: `<p>A massa de uma substância varia de acordo com a função</p>
      <p>M(t) = k · 2<sup>α·t</sup>,</p>
      <p>em que k e α são constantes reais, com k &gt; 0, e M(t) indica a massa da substância no instante t (em horas).</p>
      <p>Se essa substância perde 75% de sua massa a cada três horas, então, o módulo de 6α é igual a:</p>`,
    alternativas: [
      { letra: 'A', texto: '4', explicacao: 'Correta! Perder 75% é ficar com 1/4: M(t + 3)/M(t) = 2<sup>3α</sup> = 1/4 = 2<sup>−2</sup> ⇒ 3α = −2 ⇒ α = −2/3. Logo 6α = −4 e |6α| = 4.' },
      { letra: 'B', texto: '6' },
      { letra: 'C', texto: '2/3' },
      { letra: 'D', texto: '4/3' },
      { letra: 'E', texto: '−4' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2026-033', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 33,
    disciplina: 'Matemática', conteudo: ['mat-3a4', 'mat-1a3'], subtopico: 'Progressão aritmética', dificuldade: 'media',
    enunciado: `<p>Numa sequência numérica com uma quantidade ímpar de termos, 40 é o valor do termo central; 1000 é a soma de todos os termos e 96 é a diferença entre seus dois extremos. Se essa sequência é uma progressão aritmética crescente, então sua razão é um inteiro divisor de:</p>`,
    alternativas: [
      { letra: 'A', texto: '230950246' },
      { letra: 'B', texto: '330950342' },
      { letra: 'C', texto: '430950441' },
      { letra: 'D', texto: '530950590' },
      { letra: 'E', texto: '130950148', explicacao: 'Correta! Numa PA com número ímpar de termos, soma = n × termo central ⇒ 1000 = 40n ⇒ n = 25. a<sub>25</sub> − a<sub>1</sub> = 24r = 96 ⇒ r = 4. Só 130950148 é divisível por 4 (termina em 48, múltiplo de 4).' },
    ],
    gabarito: 'E',
  },
  {
    id: 'pucpr-2026-034', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 34,
    disciplina: 'Matemática', conteudo: 'mat-2a3', subtopico: 'Módulo de função quadrática', dificuldade: 'dificil',
    enunciado: `<p>Considere a função <i>f</i>: ℝ → ℝ, definida por <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 5<i>x</i> + 5, e o número real <i>k</i>.</p>
      <p>Se a equação |<i>f</i>(<i>x</i>) + 1| − <i>k</i> = 0 tem exatamente três soluções reais distintas, então <i>k</i> é igual a:</p>`,
    alternativas: [
      { letra: 'A', texto: '0,125' },
      { letra: 'B', texto: '0,25', explicacao: 'Correta! f(x) + 1 = x² − 5x + 6, parábola com raízes 2 e 3 e vértice em x = 2,5, y = −0,25. No gráfico de |x² − 5x + 6| o vértice vira um “pico” de altura 0,25; a reta y = k corta o gráfico em exatamente 3 pontos só quando passa por esse pico: k = 0,25.' },
      { letra: 'C', texto: '0,5' },
      { letra: 'D', texto: '1' },
      { letra: 'E', texto: '0' },
    ],
    gabarito: 'B',
  },
  {
    id: 'pucpr-2026-035', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 35,
    disciplina: 'Matemática', conteudo: ['mat-3a3', 'mat-3a2'], subtopico: 'Cone inscrito na esfera', dificuldade: 'media',
    enunciado: `<p>Um cone reto, de altura H e volume V, está inscrito numa esfera de raio R. Se H = 3R/2 e x = √(6πR<sup>3</sup>/V), então x é igual a:</p>`,
    alternativas: [
      { letra: 'A', texto: '2' },
      { letra: 'B', texto: '3' },
      { letra: 'C', texto: '4', explicacao: 'Correta! O centro da esfera fica a H − R = R/2 da base do cone; raio da base: r² = R² − (R/2)² = 3R²/4. V = (1/3)·π·(3R²/4)·(3R/2) = 3πR³/8. x = √(6πR³ ÷ 3πR³/8) = √16 = 4.' },
      { letra: 'D', texto: '√6' },
      { letra: 'E', texto: '4√2' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2026-036', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 36,
    disciplina: 'Matemática', conteudo: ['mat-4b1', 'mat-4b2'], subtopico: 'Reta e circunferência', dificuldade: 'facil',
    enunciado: `<p>No plano cartesiano, P e Q são os pontos em que a reta de equação y = x + 1 intersecta a circunferência de equação x<sup>2</sup> + y<sup>2</sup> = 25.<br>
      A soma das ordenadas dos pontos P e Q é:</p>`,
    alternativas: [
      { letra: 'A', texto: '2' },
      { letra: 'B', texto: '7' },
      { letra: 'C', texto: '0' },
      { letra: 'D', texto: '1', explicacao: 'Correta! x² + (x + 1)² = 25 ⇒ 2x² + 2x − 24 = 0 ⇒ x² + x − 12 = 0 ⇒ x = 3 ou x = −4. Ordenadas: y = 4 e y = −3; soma = 1.' },
      { letra: 'E', texto: '−1' },
    ],
    gabarito: 'D',
  },
  {
    id: 'pucpr-2026-037', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 37,
    disciplina: 'Matemática', conteudo: 'mat-3b3', subtopico: 'Probabilidade condicional', dificuldade: 'media',
    enunciado: `<p>Uma a uma, ao acaso e sem reposição, foram retiradas todas as cinco bolas de uma caixa, e a segunda bola retirada era preta.</p>
      <p>Sabendo que três dessas bolas eram brancas e as outras duas eram pretas, qual é a probabilidade de a primeira bola retirada ter sido branca?</p>`,
    alternativas: [
      { letra: 'A', texto: '3/4', explicacao: 'Correta! Sabendo que a 2ª é preta, sobram para a 1ª posição as outras 4 bolas: 3 brancas e 1 preta → 3/4. (Pela fórmula: P(B<sub>1</sub> e P<sub>2</sub>)/P(P<sub>2</sub>) = (3/5 · 2/4)/(2/5) = 3/4.)' },
      { letra: 'B', texto: '2/5' },
      { letra: 'C', texto: '1/2' },
      { letra: 'D', texto: '1/4' },
      { letra: 'E', texto: '3/5' },
    ],
    gabarito: 'A',
  },

  // ───────────────────────── FÍSICA ─────────────────────────
  {
    id: 'pucpr-2026-038', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 38,
    disciplina: 'Física', conteudo: ['fis-4a2', 'fis-2b2'], subtopico: 'Gerador real e efeito Joule', dificuldade: 'facil',
    enunciado: `<p>Um circuito elétrico é composto por uma bateria de força eletromotriz E = 20 V e resistência interna r = 1 Ω, conectada por fios ideais a um resistor R = 4 Ω. Se toda a energia dissipada pelo resistor num intervalo de tempo igual a 10 s fosse utilizada para aquecer 20 g de água (c = 4 J/(g·<sup>o</sup>C), inicialmente a 25 <sup>o</sup>C, a temperatura final da amostra de água seria igual a</p>`,
    alternativas: [
      { letra: 'A', texto: '27 <sup>o</sup>C.' },
      { letra: 'B', texto: '28 <sup>o</sup>C.' },
      { letra: 'C', texto: '30 <sup>o</sup>C.' },
      { letra: 'D', texto: '33 <sup>o</sup>C.', explicacao: 'Correta! i = E/(R + r) = 20/5 = 4 A; potência no resistor P = R·i² = 4 × 16 = 64 W; em 10 s: 640 J. ΔT = Q/(m·c) = 640/(20 × 4) = 8 °C → 25 + 8 = 33 °C.' },
      { letra: 'E', texto: '35 <sup>o</sup>C.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'pucpr-2026-039', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 39,
    disciplina: 'Física', conteudo: ['fis-3a5', 'fis-3a6'], subtopico: 'Campo elétrico uniforme e trabalho', dificuldade: 'media',
    textoApoio: `<p>Considere um capacitor de placas paralelas, distantes 5 cm entre si, conforme mostrado na figura a seguir.</p>`,
    imagem: 'imagens/estudo/pucpr-2026-039.webp',
    enunciado: `<p>A d.d.p. entre as placas é igual a 10 V e na região entre elas há um campo elétrico uniforme. Uma partícula eletrizada com carga q = 2 µC se move a partir do repouso, entre os pontos A, cuja distância até a placa positiva é de 1 cm, e o ponto B, cuja distância até a placa negativa é também de 1 cm, sendo que a única força relevante na situação é a força elétrica a que a partícula fica sujeita. Com base na situação descrita, é <b><u>CORRETO</u></b> afirmar que a variação da energia cinética sofrida pela partícula entre os pontos A e B é de</p>`,
    alternativas: [
      { letra: 'A', texto: '20 µJ.' },
      { letra: 'B', texto: '8 µJ.' },
      { letra: 'C', texto: '16 µJ.' },
      { letra: 'D', texto: '25 µJ.' },
      { letra: 'E', texto: '12 µJ.', explicacao: 'Correta! E = U/d = 10/0,05 = 200 V/m. A distância de A a B é 5 − 1 − 1 = 3 cm, logo U<sub>AB</sub> = 200 × 0,03 = 6 V. Pelo teorema da energia cinética: ΔE<sub>c</sub> = q·U<sub>AB</sub> = 2 µC × 6 V = 12 µJ.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'pucpr-2026-040', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 40,
    disciplina: 'Física', conteudo: ['fis-3b1', 'fis-3b2'], subtopico: 'Leis de Newton, trabalho e energia', dificuldade: 'facil',
    enunciado: `<p>Um corpo de massa m = 2 kg encontra-se em repouso quando passa a atuar sobre ele uma força resultante constante de módulo F = 4 N, que atua durante 5 s. A respeito do descrito, considere as seguintes afirmativas.</p>
      <p>I. No instante em que a força deixa de atuar, a velocidade do corpo possui módulo igual a 36 km/h.<br>
      II. Durante os 5 s de atuação da força, o trabalho realizado por ela sobre o corpo é igual a 200 J.<br>
      III. Durante o intervalo de aplicação da força sobre o corpo, ele se deslocou por 50 m.</p>
      <p>É(são) <b><u>CORRETA(S)</u></b> apenas a(s) afirmativa(s)</p>`,
    alternativas: [
      { letra: 'A', texto: 'I.', explicacao: 'Correta! a = F/m = 2 m/s²; v = 2 × 5 = 10 m/s = 36 km/h (I certa). Deslocamento d = a·t²/2 = 25 m (III errada) e trabalho = F·d = 4 × 25 = 100 J = ΔE<sub>c</sub> = ½·2·10² (II errada).' },
      { letra: 'B', texto: 'II.' },
      { letra: 'C', texto: 'III.' },
      { letra: 'D', texto: 'I e II.' },
      { letra: 'E', texto: 'I e III.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2026-041', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 41,
    disciplina: 'Física', conteudo: ['fis-1a3', 'fis-1a2', 'fis-4b5'], subtopico: 'Fenômenos ondulatórios', dificuldade: 'media',
    enunciado: `<p>A compreensão dos fenômenos ondulatórios e o desenvolvimento de tecnologias que utilizam as propriedades das ondas é de fundamental importância para a sociedade atual. No campo da medicina, por exemplo, instrumentos de diagnóstico como o ultrassom são apenas uma das inúmeras aplicações desse conhecimento. A respeito dos fenômenos ondulatórios, considere as afirmativas a seguir.</p>
      <p>I. O Efeito Doppler ocorre somente com ondas mecânicas, como as ondas sonoras.<br>
      II. Somente ondas transversais podem ser polarizadas.<br>
      III. No espectro eletromagnético, a componente azul da luz visível possui maior frequência que a componente vermelha, mas ambas se propagam no vácuo com a mesma velocidade.<br>
      IV. O experimento de difração de elétrons mostra que essas partículas, sob determinadas condições, podem exibir comportamento ondulatório.</p>
      <p>São <b><u>CORRETAS</u></b> somente as afirmativas</p>`,
    alternativas: [
      { letra: 'A', texto: 'I e III.' },
      { letra: 'B', texto: 'II e IV.' },
      { letra: 'C', texto: 'I, II e III.' },
      { letra: 'D', texto: 'II e III.' },
      { letra: 'E', texto: 'II, III e IV.', explicacao: 'Correta! I é falsa: o efeito Doppler também ocorre com ondas eletromagnéticas (radar, desvio para o vermelho). II: só ondas transversais se polarizam. III: azul tem frequência maior que o vermelho e ambas viajam a c no vácuo. IV: a difração de elétrons comprova a dualidade onda-partícula.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'pucpr-2026-042', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 42,
    disciplina: 'Física', conteudo: 'fis-1b3', subtopico: 'Refração e lei de Snell', dificuldade: 'dificil',
    textoApoio: `<p>Um feixe de luz, proveniente do ar, penetra perpendicularmente em um recipiente que contém um líquido transparente de índice de refração igual a 1,50, e atinge o ponto P, no fundo do recipiente, 3,00 ·10<sup>−9</sup> s após ter penetrado no líquido. Se o feixe for inclinado num ângulo θ em relação à vertical, tal que sen θ = 0,90, o feixe atinge o recipiente num ponto Q, à direita de P, conforme mostrado na figura a seguir.</p>`,
    imagem: 'imagens/estudo/pucpr-2026-042.webp',
    enunciado: `<p>Considerando o índice de refração do ar igual a 1 e a velocidade de propagação da luz neste meio igual a 3,00·10<sup>8</sup> m/s, é <b><u>CORRETO</u></b> afirmar que, na situação em que o raio de luz incide obliquamente na interface ar-líquido, o intervalo de tempo desde o instante em que o feixe de luz penetra no líquido até o instante em que atinge o ponto Q é de</p>`,
    alternativas: [
      { letra: 'A', texto: '4,25·10<sup>−9</sup> s' },
      { letra: 'B', texto: '2,50·10<sup>−10</sup> s' },
      { letra: 'C', texto: '3,75 ·10<sup>−9</sup> s', explicacao: 'Correta! No líquido, v = c/n = 2,0·10<sup>8</sup> m/s, e a profundidade é h = 2,0·10<sup>8</sup> × 3,0·10<sup>−9</sup> = 0,60 m. Snell: 1 × 0,90 = 1,5 × sen r ⇒ sen r = 0,60 e cos r = 0,80. Caminho = h/cos r = 0,75 m; t = 0,75/2,0·10<sup>8</sup> = 3,75·10<sup>−9</sup> s.' },
      { letra: 'D', texto: '4,50·10<sup>−9</sup> s' },
      { letra: 'E', texto: '1,25·10<sup>−10</sup> s' },
    ],
    gabarito: 'C',
  },

  // ───────────────────────── HISTÓRIA ─────────────────────────
  {
    id: 'pucpr-2026-043', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 43,
    disciplina: 'História', conteudo: 'his-2b3', subtopico: 'Guerra da Cisplatina', dificuldade: 'media',
    textoApoio: `<p>Leia o texto a seguir.</p>
      <p>A solução aventada por D. João, a eliminação do risco potencial pela anexação definitiva da Banda Oriental, fracassou em 1828, desistindo o Brasil da anexação e forçando a Argentina a fazer o mesmo. Porém, a política efetiva de ocupação da zona fronteiriça por estancieiros brasileiros criava um agravante de notáveis consequências para o futuro.</p>
      <small>COSTA, Wilma Peres. <b>A Espada de Dâmocles</b>: O Exército, A Guerra do Paraguai e a crise do Império. São Paulo: Hucitec/ editora da Unicamp, 1996, p.41.</small>`,
    enunciado: `<p>De acordo com seus conhecimentos sobre o conflito Cisplatino (1825-1828), assinale a alternativa <b><u>CORRETA</u></b>.</p>
      <p>I. Ao afirmar que a anexação buscava eliminar um “risco potencial”, indica-se que a incorporação da Banda Oriental era percebida como medida preventiva de segurança regional, o que ajuda a explicar sua centralidade na política do Império desde D. João VI até D. Pedro I.<br>
      II. A solução diplomática de 1828 consolidou o controle político indireto do Império sobre a antiga Cisplatina, já que a presença de proprietários brasileiros na região buscou garantir uma hegemonia efetiva apesar da separação.<br>
      III. A mediação inglesa que levou à criação da República Oriental relaciona-se tanto aos interesses comerciais britânicos na região da foz do Rio da Prata quanto à incapacidade militar do Brasil e de Buenos Aires em obter vantagem decisiva no conflito.<br>
      IV. A Guerra da Cisplatina foi dispendiosa e contribuiu para minar a popularidade do imperador (D. Pedro I), que passou a ser visto como autoritário, enquanto o desempenho do Exército era amplamente considerado insatisfatório.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Estão corretas I, III e IV.', explicacao: 'Correta! I, III e IV estão de acordo com o texto e com o processo: anexação vista como segurança regional, mediação britânica (interesse no comércio do Prata e impasse militar) criando o Uruguai, e guerra cara que desgastou D. Pedro I. II é falsa: em 1828 o Uruguai nasceu independente e o Império não consolidou controle político sobre ele; a presença dos estancieiros foi um “agravante” para conflitos futuros.' },
      { letra: 'B', texto: 'Estão corretas I e III.' },
      { letra: 'C', texto: 'Estão corretas I, II e III.' },
      { letra: 'D', texto: 'Estão corretas II, III e IV.' },
      { letra: 'E', texto: 'Estão todas corretas.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2026-044', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 44,
    disciplina: 'História', conteudo: ['his-1a9', 'his-1a8'], subtopico: 'Alta Idade Média e feudalismo', dificuldade: 'media',
    textoApoio: `<p>Leia os textos a seguir.</p>
      <p>Aquele que jura fidelidade ao senhor [feudal] deve ter sempre presente na memória estas seis palavras: incólume, seguro, honesto, útil, fácil e possível [...]</p>
      <small>PEDRERO, Maria Guadalupe. Histórias da Idade Média. São Paulo: Editor Unesp, 2000, p. 94.</small>
      <p>Fato econômico e fato demográfico, a ruralização é, ao mesmo tempo, e em primeiro lugar, um fato social que modela a face da sociedade medieval.</p>
      <small>LE GOFF, Jacques. A civilização do Ocidente medieval: Lisboa: Estampas, 1983, v.1, p.49.</small>`,
    enunciado: `<p>De acordo com seus conhecimentos sobre as mudanças e organização política da Alta Idade Média, assinale a alternativa <b><u>CORRETA</u></b>.</p>
      <p>I. As mudanças ocorridas com o declínio do Império Romano levaram a uma crescente ruralização da sociedade e a mudanças na estrutura social, sobretudo nas regiões que foram dominadas pelos romanos.<br>
      II. A cidadania e o direito, que antes eram garantidos por leis e instituições romanas, foram substituídos pelos laços de fidelidade entre as pessoas, por exemplo, os laços de suserania e vassalagem.<br>
      III. A formação dos mansos representou a emancipação jurídica e econômica das pessoas escravizadas, que passaram a controlar a produção e a comercialização de seus excedentes, a partir das relações de vassalagem.<br>
      IV. As invasões bárbaras e a queda do Império Romano do Ocidente provocaram a expansão das rotas mercantis do mediterrâneo em direção ao interior do continente europeu.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Estão corretas I e III.' },
      { letra: 'B', texto: 'Estão corretas I e II.', explicacao: 'Correta! A crise romana levou à ruralização (I) e as garantias do direito romano deram lugar a laços pessoais de fidelidade, como suserania e vassalagem (II). III é falsa: os mansos eram lotes dos servos, presos à terra e às obrigações senhoriais (vassalagem era relação entre nobres). IV é falsa: houve retração do comércio, não expansão.' },
      { letra: 'C', texto: 'Estão corretas I, II e III.' },
      { letra: 'D', texto: 'Estão corretas II, III e IV.' },
      { letra: 'E', texto: 'Estão todas corretas.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'pucpr-2026-045', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 45,
    disciplina: 'História', conteudo: 'his-4a2', subtopico: 'Revolução Russa de 1905', dificuldade: 'dificil',
    textoApoio: `<p>Observe o texto a seguir.</p>
      <p>A Revolução de 1905 foi, como disse Lenin, uma “revolução burguesa realizada por meios proletários”. “Por meios proletários” talvez seja uma simplificação excessiva, embora o início do recuo do governo se tenha dado devido às greves maciças de trabalhadores na capital e às greves de solidariedade na maioria das cidades industriais do império; embora mais tarde as greves tenham, outra vez, exercido a pressão que propiciou algo parecido a uma constituição em 17 de outubro.</p>
      <small>HOBSBAWM, Eric. <b>A era dos impérios: 1875–1914</b>. 15. ed. Rio de Janeiro: Paz e Terra, 2011, p.452.</small>`,
    enunciado: `<p>De acordo com seus conhecimentos sobre o evento narrado, leia as assertivas a seguir e assinale a alternativa <b><u>CORRETA</u></b>.</p>
      <p>I. A Revolução de 1905 teve um caráter burguês em seus objetivos estruturais, pois a burguesia acreditava que tal movimento levaria à implementação de um sistema parlamentarista aos moldes ocidentais.<br>
      II. Após a revolução de 1905, houve um racha no Partido Operário Social-Democrata Russo que gerou dois grupos: os mencheviques e bolcheviques, que possuíam ideias bem distintas de como a Rússia deveria ser conduzida.<br>
      III. No início da Revolução de 1905, havia certo consenso de que a construção do socialismo ainda não estava na pauta revolucionária imediata, uma vez que a Rússia não estava pronta econômica nem socialmente para o socialismo.<br>
      IV. Um dos resultados da Revolução de 1905 foi a criação da Duma e a criação de uma constituição que, em pouco tempo, foi limitada pelo Czar em um claro retorno à autocracia.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Estão corretas II, III e IV.' },
      { letra: 'B', texto: 'Estão corretas I e III.' },
      { letra: 'C', texto: 'Estão corretas I, III e IV.', explicacao: 'Correta! I, III e IV descrevem bem 1905: objetivos liberais/parlamentares da burguesia, consenso de que o socialismo não era tarefa imediata e o Manifesto de Outubro com a Duma, logo esvaziada pelo czar. II é falsa porque o racha entre mencheviques e bolcheviques ocorreu antes, em 1903 (II Congresso do POSDR).' },
      { letra: 'D', texto: 'Estão corretas II e IV.' },
      { letra: 'E', texto: 'Estão todas corretas.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2026-046', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 46,
    disciplina: 'História', conteudo: ['his-1b2', 'his-1a2'], subtopico: 'Sambaquis', dificuldade: 'facil',
    textoApoio: `<p>Observe a imagem a seguir.</p>`,
    imagem: 'imagens/estudo/pucpr-2026-046.webp',
    legenda: '<small><i>Ilustração Mariana Massarani. Disponível em: https://chc.org.br/artigo/quem-mora-no-sambaqui/ .Acesso em: 16 fev. 2026.</i></small>',
    enunciado: `<p>A imagem é uma ilustração que faz alusão a um povo pré-histórico chamado de sambaquieiros, que foi fundamental para compreender a ocupação do território brasileiro. Sobre os sambaquis, leia as assertivas e assinale a alternativa <b><u>CORRETA</u></b>.</p>
      <p>I. Os sítios de sambaquis preservam restos arqueológicos que permitem estudar aspectos da vida, da alimentação e da organização social dessas populações e são importantes porque constituem um dos registros mais antigos de ocupação humana no litoral do Brasil.<br>
      II. Uma das principais características comuns aos sambaquis no Brasil é o uso funerário, como locais para enterrar e homenagear os mortos.<br>
      III. A presença predominante de utensílios metálicos nos sambaquis indica que essas sociedades já dominavam técnicas de metalurgia avançada, estabelecendo redes comerciais extensas com povos andinos antes da chegada dos europeus.<br>
      IV. Os sambaquis estão concentrados principalmente na região amazônica e no interior do território brasileiro e foram construídos por grupos agrícolas sedentários especializados na produção intensiva de mandioca e milho, o que explica suas construções e costumes.</p>`,
    alternativas: [
      { letra: 'A', texto: 'Estão corretas II, III e IV.' },
      { letra: 'B', texto: 'Estão corretas I e III.' },
      { letra: 'C', texto: 'Estão corretas II e IV.' },
      { letra: 'D', texto: 'Estão corretas I e II.', explicacao: 'Correta! Os sambaquis são montes de conchas, ossos e restos que registram a vida de povos pescadores-coletores do litoral, entre as ocupações mais antigas (I), e muitos foram usados como cemitérios (II). III é falsa (não havia metalurgia) e IV é falsa (ficam no litoral, sobretudo Sul e Sudeste, e não eram de agricultores).' },
      { letra: 'E', texto: 'Estão todas corretas.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'pucpr-2026-047', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 47,
    disciplina: 'História', conteudo: ['his-2b6-2', 'his-3b2'], subtopico: 'Imigração e branqueamento', dificuldade: 'media',
    textoApoio: `<p>Observe as tabelas a seguir.</p>`,
    imagem: ['imagens/estudo/pucpr-2026-047-1.webp', 'imagens/estudo/pucpr-2026-047-2.webp'],
    legendaGeral: '<small>MORAES, Amanda de Lima. <b>Populações negras em São Paulo</b>: usos e apropriações da rua no início do século XX (1900-1930). 2024. Dissertação (Mestrado em Geografia Humana) - Faculdade de Filosofia, Letras e Ciências Humanas, Universidade de São Paulo, São Paulo, 2024. Disponível em: https://www.teses.usp.br/teses/disponiveis/8/8136/tde-08112024-122020/pt-br.php. Acesso em: 15 fev. 2026.</small>',
    enunciado: `<p>De acordo com os dados apresentados sobre a cidade de São Paulo no final do século XIX e seus conhecimentos sobre a política de branqueamento da sociedade brasileira, assinale a alternativa <b><u>CORRETA</u></b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A ampliação da presença estrangeira na capital paulista decorreu da busca por qualificação técnica industrial, desvinculada de concepções racialistas, já que as elites políticas rejeitavam explicações biológicas para o desenvolvimento nacional e defendiam a integração social dos libertos.' },
      { letra: 'B', texto: 'Embora os dados revelem crescimento da população branca, tal fenômeno deve ser compreendido como resultado da abolição e da mobilidade interna de ex-escravizados, não havendo evidências de políticas públicas que associassem imigração europeia a projetos de transformação racial da sociedade.' },
      { letra: 'C', texto: 'O predomínio estrangeiro na década de 1890 expressa sobretudo uma reclassificação estatística promovida pelos recenseadores republicanos, que passaram a considerar brasileiros brancos como estrangeiros para justificar ideologicamente teorias científicas baseadas na miscigenação.' },
      { letra: 'D', texto: 'A manutenção de parcela significativa da população nacional ao longo do período demonstra que, apesar do debate intelectual sobre hierarquias raciais, o Estado brasileiro adotou políticas de distribuição de terras e inserção econômica dos libertos como estratégia central de modernização social.' },
      { letra: 'E', texto: 'O expressivo aumento da população estrangeira evidencia a articulação entre a política de imigração fomentada pelo governo e o projeto de branqueamento defendido por setores das elites, influenciados por teorias pseudocientíficas que associavam progresso à predominância branca.', explicacao: 'Correta! Entre 1872 e 1893 a população branca de São Paulo saltou de 14 mil para 105 mil e os estrangeiros passaram de 8% para mais da metade, fruto da imigração europeia subsidiada pelo governo, ligada ao ideal de branqueamento das elites, apoiado no racismo “científico” da época.' },
    ],
    gabarito: 'E',
  },

  // ───────────────────────── GEOGRAFIA ─────────────────────────
  {
    id: 'pucpr-2026-048', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 48,
    disciplina: 'Geografia', conteudo: ['geo-1u6', 'geo-1u5'], subtopico: 'Jovens “nem-nem” e desigualdades', dificuldade: 'facil',
    enunciado: `<p>Analise a tabela a seguir que apresenta a proporção de jovens de 15 a 29 anos que não estudavam e não estavam ocupados ("nem-nem") no Brasil, em 2023. Os jovens na idade entre 15 e 29 anos representam 21,2 % da população nessa faixa etária. Entre esses jovens, observe a distribuição a seguir.</p>
      <table class="tabela-prova">
        <tr><th>Categoria Demográfica</th><th>Proporção (%)</th></tr>
        <tr><td>Homens Brancos</td><td>11,3%</td></tr>
        <tr><td>Homens Pretos ou Pardos</td><td>23,4%</td></tr>
        <tr><td>Mulheres Brancas</td><td>18,9%</td></tr>
        <tr><td>Mulheres Pretas ou Pardas</td><td>45,2%</td></tr>
      </table>
      <p><small>Fonte: IBGE</small></p>
      <p>Com base nos dados apresentados e nos conhecimentos sobre a estrutura socioeconômica brasileira, assinale a alternativa <b><u>CORRETA</u></b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A redução do índice geral para 21,2% indica que as políticas de inclusão laboral e escolar equalizaram as oportunidades entre diferentes gêneros e etnias.' },
      { letra: 'B', texto: 'O elevado percentual de mulheres pretas e pardas (45,2%) na condição "nem-nem" reflete a intersecção entre o racismo estrutural e a sobrecarga com o trabalho de cuidado não remunerado.', explicacao: 'Correta! As mulheres pretas e pardas somam quase metade dos “nem-nem”: sobre elas pesam ao mesmo tempo o racismo estrutural (menos acesso a escola e emprego) e a desigualdade de gênero, como o trabalho doméstico e o cuidado de filhos e familiares sem remuneração.' },
      { letra: 'C', texto: 'A disparidade entre homens brancos e negros deve-se exclusivamente à maior taxa de evasão escolar voluntária dos jovens brancos para o setor de serviços de alta renda.' },
      { letra: 'D', texto: 'O fenômeno "nem-nem" no Brasil é predominantemente opcional, caracterizando um período de transição vocacional comum entre jovens de baixa renda após o ensino médio.' },
      { letra: 'E', texto: 'A proximidade entre os índices de homens pretos e mulheres brancas comprova que o fator racial foi superado pelo fator de gênero na composição do desemprego jovem atual.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'pucpr-2026-049', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 49,
    disciplina: 'Geografia', conteudo: ['geo-1u4', 'geo-1u2', 'geo-1u3'], subtopico: 'Latitude e Sol da Meia-Noite', dificuldade: 'media',
    enunciado: `<p>Em janeiro de 2025, a inauguração da Estação Científica Internacional 'Aurora Borealis' no arquipélago de Svalbard (Noruega) consolidou o monitoramento estratégico do degelo acelerado do Oceano Glacial Ártico. Localizada aproximadamente na latitude <b>78° N</b>, a estação utiliza sistemas de alta precisão para viabilizar as novas rotas comerciais transpolares, que prometem reduzir em até 40% a distância marítima entre a Europa e a Ásia em comparação às rotas tradicionais.</p>
      <p><small><i>(Fonte: Global Science News).</i></small></p>
      <p>Considerando as coordenadas geográficas e as características cartográficas da região em destaque no texto, assinale a alternativa <b><u>CORRETA</u></b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A velocidade de rotação tangencial em <b>78° N</b> é superior à encontrada na linha do Equador.' },
      { letra: 'B', texto: 'A projeção de Mercator é a ideal para traçar rotas polares por preservar as áreas.' },
      { letra: 'C', texto: 'O fenômeno do \'Sol da Meia-Noite\' ocorre na estação devido à sua posição latitudinal.', explicacao: 'Correta! A 78° N a estação está bem acima do Círculo Polar Ártico (≈ 66,5° N); por causa da inclinação do eixo terrestre, no verão do hemisfério norte o Sol fica dias seguidos sem se pôr (Sol da Meia-Noite).' },
      { letra: 'D', texto: 'A distância entre os meridianos (longitude) aumenta à medida que se aproxima de <b>90° N</b>.' },
      { letra: 'E', texto: 'A antípoda exata da estação (<b>78° N; 15° E</b>) localiza-se nas coordenadas <b>12° S e 75° W</b>.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2026-050', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 50,
    disciplina: 'Geografia', conteudo: ['geo-4u5', 'geo-4u3'], subtopico: 'Minerais críticos e transição energética', dificuldade: 'facil',
    enunciado: `<p>Embora o Brasil detenha cerca de 10% das reservas globais de minerais críticos para a transição energética e seja o maior produtor de nióbio do mundo, o país enfrenta desafios estruturais que vão além da geologia. Relatórios recentes apontam que apenas 27% do território nacional possui mapeamento geológico em escala adequada (1:50.000) para exploração detalhada. Além disso, a dependência global da China no refino de Terras Raras — que detinha 91% da capacidade mundial em 2024 — e as novas políticas de incentivos fiscais dos EUA e da União Europeia pressionam o Brasil a deixar de ser um mero exportador de minério bruto para integrar cadeias de valor mais complexas, sob o risco de perder competitividade na nova ordem energética global.</p>
      <p><small>Revista Exame (Seção ESG/Economia). Publicado em: 25 de setembro de 2024. Disponível em: exame.com/esg/minerais-criticos-brasil. Acesso em: 12 fev. 2026.</small></p>
      <p>Com base no cenário atual dos minerais estratégicos no Brasil e nas dinâmicas geopolíticas globais descritas no texto, assinale a alternativa que descreve <b><u>CORRETAMENTE</u></b> os principais obstáculos e estratégias para o país consolidar seu protagonismo na transição energética.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A principal barreira brasileira é a escassez geológica de minerais como Lítio e Terras Raras, o que obriga o Estado a focar exclusivamente na exportação de Minério de Ferro e Nióbio, sobre os quais o país detém monopólio técnico e de mercado.' },
      { letra: 'B', texto: 'A União Europeia favorece o modelo brasileiro de exportação primária, pois elimina exigências de auditoria ambiental (ESG) para priorizar o suprimento de volume bruto para o bloco europeu.' },
      { letra: 'C', texto: 'O mapeamento geológico do Brasil já atingiu a totalidade do território nacional em escala de detalhe, o que garante segurança jurídica plena para investidores estrangeiros e elimina o risco exploratório no setor de metais não ferrosos.' },
      { letra: 'D', texto: 'O protagonismo brasileiro depende da superação do "gargalo do refino", visto que a concentração da etapa de processamento na China gera vulnerabilidades nas cadeias de suprimento.', explicacao: 'Correta! O texto mostra que o Brasil tem reservas, mas a China concentra 91% do refino de terras raras; para deixar de exportar minério bruto e ganhar protagonismo, o país precisa dominar o processamento/refino, agregando valor e reduzindo a vulnerabilidade das cadeias.' },
      { letra: 'E', texto: 'Devido à urgência da demanda global, o governo brasileiro extinguiu as exigências de licenciamento ambiental (IBAMA) para projetos de minerais estratégicos, visando acelerar a produção de cobre e níquel até o final da década de 2020.' },
    ],
    gabarito: 'D',
  },
  {
    id: 'pucpr-2026-051', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 51,
    disciplina: 'Geografia', conteudo: 'geo-4u4', subtopico: 'Matriz de transportes', dificuldade: 'facil',
    enunciado: `<p>Analise os dados a seguir.</p>
      <table class="tabela-prova">
        <tr><th colspan="3">MATRIZ DE TRANSPORTE DE CARGAS NO BRASIL (2025)</th></tr>
        <tr><th>Modal</th><th>Participação aproximada (%)</th><th>Característica</th></tr>
        <tr><td>Rodoviário</td><td>65%</td><td>37,9% da malha em estado Ótimo ou Bom</td></tr>
        <tr><td>Ferroviário</td><td>20%</td><td>Recorde em carga geral (celulose e grãos)</td></tr>
        <tr><td>Aquaviário</td><td>11%</td><td>Foco em expansão da cabotagem</td></tr>
        <tr><td>Dutoviário</td><td>3%</td><td>Estabilidade no transporte de gás e petróleo</td></tr>
        <tr><td>Aéreo</td><td>1%</td><td>Foco em cargas de alto valor agregado</td></tr>
      </table>
      <p><small>Fonte: Ministério dos Transportes (2026).</small></p>
      <p>Considerando que o custo logístico no Brasil consome entre 12% e 13% do PIB (em contraste com a média de 8% em países desenvolvidos) e observando a distribuição modal apresentada na tabela, a configuração estrutural da infraestrutura nacional revela uma vulnerabilidade socioeconômica caracterizada pela</p>`,
    alternativas: [
      { letra: 'A', texto: 'saturação ferroviária.' },
      { letra: 'B', texto: 'inviabilidade aquaviária.' },
      { letra: 'C', texto: 'eficiência multimodal.' },
      { letra: 'D', texto: 'estagnação dutoviária.' },
      { letra: 'E', texto: 'hegemonia rodoviária.', explicacao: 'Correta! 65% das cargas vão por rodovias — modal caro para longas distâncias e com a maior parte da malha em estado ruim —, o que ajuda a explicar o alto custo logístico brasileiro em relação aos países desenvolvidos.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'pucpr-2026-052', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 52,
    disciplina: 'Geografia', conteudo: ['geo-4u5', 'geo-c3'], subtopico: 'COP 30 e financiamento climático', dificuldade: 'facil',
    enunciado: `<p>A 30ª Conferência do Clima da ONU (COP 30), realizada em Belém, entre os dias 10 e 21 de novembro de 2025, terminou com decisões consideradas insuficientes diante da gravidade da crise climática. Temas centrais como a eliminação dos combustíveis fósseis e o enfrentamento ao desmatamento ficaram de fora dos resultados, enquanto o financiamento climático — elemento crucial para reparação histórica e apoio aos países em desenvolvimento — avançou pouco e segue distante do que seria um compromisso justo, público e acessível. A incapacidade de avançar em temas considerados relevantes mais uma vez foi marcada pela disputa entre os países ricos e os países em desenvolvimento, gerando impasses e dificultando o trabalho da diplomacia brasileira.</p>
      <p><small>Disponível em: &lt;https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2025-11/cop30-acordo-climatico-deixa-de-fora-combustiveis-fosseis&gt;. Acesso em: 12 fev. 2026. (Adaptado)</small></p>
      <p>Com base nas críticas apresentadas, qual aspecto é apontado como um dos principais entraves para uma transição climática equitativa?</p>`,
    alternativas: [
      { letra: 'A', texto: 'A ineficiência da diplomacia brasileira.' },
      { letra: 'B', texto: 'O modelo de financiamento atual.', explicacao: 'Correta! O texto afirma que o financiamento climático, “crucial para reparação histórica e apoio aos países em desenvolvimento”, avançou pouco e está longe de ser “justo, público e acessível” — ou seja, o modelo atual de financiamento é um entrave à transição equitativa.' },
      { letra: 'C', texto: 'A recusa de uso de combustíveis fósseis.' },
      { letra: 'D', texto: 'O descumprimento de prazos anteriores.' },
      { letra: 'E', texto: 'A ausência de metas de recuperação de áreas degradadas.' },
    ],
    gabarito: 'B',
  },

  // ───────────────────────── LÍNGUA INGLESA ─────────────────────────
  {
    id: 'pucpr-2026-055', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 55,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'facil',
        imagem: 'imagens/estudo/pucpr-2026-055.webp',
    legenda: '<small>https://pin.it/KxJPOuD9T . Acesso em: fev/2026.</small>',
    enunciado: `<p>Leia o cartum a seguir e marque a assertiva que apresenta o assunto por ele abordado.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A crítica sobre o uso de inteligência artificial no diagnóstico de doenças simples.' },
      { letra: 'B', texto: 'A popularização dos conhecimentos médicos por meio do uso das redes sociais.', explicacao: 'Correta! O médico diz “Well, if you followed me on Twitter, you’d already KNOW your diagnosis” (“se você me seguisse no Twitter, já saberia seu diagnóstico”), satirizando a divulgação de conhecimento médico pelas redes sociais.' },
      { letra: 'C', texto: 'A relação de confiança entre médico e paciente demonstrada além do consultório.' },
      { letra: 'D', texto: 'A falta de paciência que alguns médicos apresentam ao lidar com seus pacientes.' },
      { letra: 'E', texto: 'A ocupação do tempo médico com pacientes que somente querem um atestado.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'pucpr-2026-056', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 56,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'media',
    textoApoio: `<p>After Creating Spinal Cord Drug, Brazilian Scientist Vows to Stop Being 'Conservative' with Research<br>
      Developed in Brazil, polylaminin has already reversed cases of spinal cord injury in trials</p>
      <p>Brazilian researcher Tatiana Coelho de Sampaio, PhD professor at the Federal University of Rio de Janeiro, who discovered polylaminin, a drug that has proven capable of reversing spinal cord injuries in humans, worked in silence for 25 years alongside a team of biologists to achieve this breakthrough.<br>
      Now, she says she no longer has the right to be conservative and will release the results of her studies and proof of the drug’s effectiveness, which partially or fully reversed cases of paraplegia and quadriplegia in eight volunteers during trials.</p>
      <small>https://www1.folha.uol.com.br/internacional/en/scienceandhealth/2025/09/scientist-who-created-drug-for-spinal-cord-injury-says-she-no-longer-has-the-right-to-be-conservative-when-publishing-research.shtml . Acesso em: fev/2026.</small>`,
    enunciado: `<p>Leia o trecho a seguir e selecione a assertiva que o resume <b><u>ADEQUADAMENTE</u></b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O texto critica a posição política de cientista brasileira, a qual afirma que somente atuará em contextos conservadores.' },
      { letra: 'B', texto: 'O texto denuncia o silenciamento das pesquisas na área de biologia em países da América do Sul, como o Brasil.' },
      { letra: 'C', texto: 'O texto divulga a publicização dos resultados da pesquisa que utiliza polilaminina na reversão de quadros de paraplegia.', explicacao: 'Correta! O texto informa que a pesquisadora “will release the results of her studies and proof of the drug’s effectiveness” — vai tornar públicos os resultados da polilaminina, que reverteu parcial ou totalmente casos de paraplegia e tetraplegia.' },
      { letra: 'D', texto: 'O texto celebra os bons resultados obtidos na pesquisa de brasileira que trouxeram mobilidade completa aos pacientes.' },
      { letra: 'E', texto: 'O texto aborda os aspectos éticos e ambientais, assim como os riscos, da utilização da polilaminina em humanos.' },
    ],
    gabarito: 'C',
  },
  {
    id: 'pucpr-2026-057', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 57,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'media',
    textoApoio: `<p><b>Wellness peptide craze: Why people are injecting drugs 'not for human consumption'</b></p>
      <p>Katie carefully takes a syringe out of its packet. She pricks the top of a small jar of blue liquid and pulls up the plunger. She turns and jabs the needle into her bum cheek and gives the camera a big thumbs up, looking pleased.<br>
      Katie's been injecting GHK-Cu, a copper peptide, for several weeks now and she's confident it's making a difference to her skin. So much so, she says, the stretch marks she developed after having her two children have almost disappeared.<br>
      The only disconcerting thing?<br>
      It clearly says "for research purposes only" on the label wrapped around the jar. This peptide is not suitable for human consumption.</p>
      <small>https://www.bbc.com/news/articles/cdr268m5pxro. Acesso em: fev/2026.</small>`,
    enunciado: `<p>Analise o trecho a seguir e assinale a assertiva <b><u>CORRETA</u></b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'A utilização do depoimento pessoal apresentado reforça que testes de cosméticos não devem ser feitos em humanos.' },
      { letra: 'B', texto: 'A estratégia de marketing utilizada nesse anúncio estimula a aquisição de um produto que revolucionará o mercado.' },
      { letra: 'C', texto: 'O relato pessoal de um familiar que observa a utilização de drogas tem como objetivo prevenir sua perpetuação.' },
      { letra: 'D', texto: 'O texto mistura ficção e aventura para envolver o leitor e criar uma sensação de familiaridade ao abordar o cotidiano.' },
      { letra: 'E', texto: 'Tanto a forma de narração utilizada quanto o assunto abordado objetivam impactar o leitor e incitar sua reflexão.', explicacao: 'Correta! A reportagem abre com uma cena narrada (Katie se injetando e fazendo sinal de positivo) e depois revela o choque: o frasco diz “for research purposes only”, impróprio para humanos. A narração e o tema servem para impactar e fazer o leitor refletir.' },
    ],
    gabarito: 'E',
  },
  {
    id: 'pucpr-2026-058', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 58,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'media',
        imagem: 'imagens/estudo/pucpr-2026-058.webp',
    legenda: '<small>https://www.physiciansweekly.com/post/pickleball-protocol Acesso em: fev/2026.</small>',
    enunciado: `<p>Leia o cartum a seguir e assinale a assertiva que o interpreta <b><u>ADEQUADAMENTE</u></b>.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O médico é um grande fã de esportes e deixa o trabalho motivado para acompanhar as partidas.' },
      { letra: 'B', texto: 'O torneio é de um esporte de impacto, portanto uma oportunidade de trabalho para o médico.', explicacao: 'Correta! A placa diz “ORTHOPEDICS” e a recepcionista explica que o médico foi ao torneio de pickleball “to hand out his business cards” (distribuir cartões de visita): ele vê nos jogadores, sujeitos a lesões, futuros pacientes.' },
      { letra: 'C', texto: 'O uso do verbo frasal "hand out" representa uma analogia com a especialidade do médico.' },
      { letra: 'D', texto: 'A atividade recreativa do médico parece ser vender ingressos para torneios de pickleball.' },
      { letra: 'E', texto: 'A desenvoltura corporal do médico revela seu histórico como atleta em torneios de pickleball.' },
    ],
    gabarito: 'B',
  },
  {
    id: 'pucpr-2026-059', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 59,
    disciplina: 'Inglês', subtopico: 'Interpretação de Texto', dificuldade: 'media',
    textoApoio: `<p>The business of not ageing: Why people are spending $1,300 on longevity treatments</p>
      <p>The growing longevity industry is selling a big aspiration – the ability to slow your biological clock. But as clinics multiply and prices continue to increase, the gap between what science supports and what consumers are actually paying for also raises questions about who has the opportunity to slow ageing and at what cost.<br>
      At Biograph, a longevity clinic with locations in New York City and San Francisco, an assessment day can last up to six hours and include the collection of more than 1,000 data points from more than 30 advanced diagnostics. This includes proprietary MRI and CT scans, a body composition analysis, VO2 max testing and comprehensive bloodwork. Members are welcomed into their own private suite for the day where they can decompress between assessments, review the information and shower afterward. Weeks after the visit, clients receive a personalised health risk profile that synthesises every data point.<br>
      This is just a glimpse of a rapidly expanding category of businesses built on the idea that ageing is something that can be managed, and for a price, slowed down. While the global wellness economy has ballooned in recent years, longevity is emerging as one of its fastest-growing segments.</p>
      <small>https://www.bbc.com/worklife/article/20260211-the-business-of-not-ageing. Acesso em: fev/2026.</small>`,
    enunciado: `<p>Leia o trecho a seguir e selecione as afirmações <b><u>CORRETAS</u></b> sobre ele.</p>
      <p>I. O autor do texto assume uma postura crítica em relação aos tratamentos para longevidade.<br>
      II. O trecho objetiva divulgar uma clínica americana famosa por realizar diagnósticos precisos.<br>
      III. Dentre os exames mencionados estão: exames de imagem, composição corporal e sangue.<br>
      IV. O autor do texto critica a perspectiva mercadológica adotada ao tratar de doenças sérias.<br>
      V. Os tratamentos de longevidade empregados não foram explicitados no trecho em questão.</p>`,
    alternativas: [
      { letra: 'A', texto: 'As assertivas I, III e V estão corretas.', explicacao: 'Correta! I: o autor aponta “the gap between what science supports and what consumers are actually paying for” (postura crítica). III: cita MRI/CT (imagem), body composition e bloodwork. V: o trecho só descreve a avaliação, sem dizer quais tratamentos são feitos. II é falsa (a clínica é um exemplo, não propaganda) e IV é falsa (o texto fala de envelhecimento, não de doenças sérias).' },
      { letra: 'B', texto: 'As assertivas, II, III e IV estão corretas.' },
      { letra: 'C', texto: 'As assertivas I, II e III estão corretas.' },
      { letra: 'D', texto: 'As assertivas III, IV e V estão corretas.' },
      { letra: 'E', texto: 'As assertivas II, IV e V estão corretas.' },
    ],
    gabarito: 'A',
  },
  {
    id: 'pucpr-2026-060', prova: 'PUCPR Medicina 2026/2', vestibular: 'PUCPR', ano: 2026, numeroOriginal: 60,
    disciplina: 'Inglês', subtopico: 'Vocabulário', dificuldade: 'media',
        imagem: 'imagens/estudo/pucpr-2026-060.webp',
    legenda: '<small>https://www.physiciansweekly.com/post/cowboy-psychiatry. Acesso em: fev/2026.</small>',
    enunciado: `<p>Leia o cartum a seguir e assinale a assertiva que identifica, <b><u>ADEQUADAMENTE</u></b>, o fator desencadeador de humor.</p>`,
    alternativas: [
      { letra: 'A', texto: 'O aspecto não verbal desencadeia humor uma vez que caubóis em ambientes terapêuticos causam estranhamento.' },
      { letra: 'B', texto: 'O aspecto imagético é o fator gerador de humor no cartum, pois os personagens parecem bastante emocionados.' },
      { letra: 'C', texto: 'Apenas a interpretação da sentença já é suficiente para causar humor, pois as pessoas não desejam a criminalidade.' },
      { letra: 'D', texto: 'A utilização de letras maiúsculas indica a alteração no tom de voz do terapeuta, aspecto que gera humor no cartum.' },
      { letra: 'E', texto: 'O aspecto linguístico desencadeia humor no cartum devido à ambiguidade do termo "wanted" por se tratar de um caubói.', explicacao: 'Correta! “I reckon I just need to feel WANTED” joga com os dois sentidos de “wanted”: “desejado/querido” (o que se espera numa terapia) e “procurado” pela polícia, como nos cartazes “WANTED” do Velho Oeste — por isso a graça de quem fala ser um caubói fora da lei.' },
    ],
    gabarito: 'E',
  },
);
