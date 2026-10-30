/**
 * guia-plano.js — Cálculos do Guia de Estudos (sem tela; testável no node).
 *
 * Como o plano é montado:
 *   1. Tempo do dia = horas do aluno (dia útil ou fim de semana) + ajuste daquele dia.
 *      Na véspera da prova, no máximo 2h (revisão leve); no dia da prova, nada.
 *   2. O tempo vira BLOCOS de estudo do tamanho escolhido pelo aluno, com pausas.
 *   3. Uma vez por semana, no fim de semana, entra um simulado completo (5h). Se o dia
 *      não comporta as 5h, o que faltar continua no outro dia do fim de semana.
 *      Se o aluno já fez um simulado na semana, ele não é repetido.
 *   4. Cada bloco recebe uma matéria pela PRIORIDADE dela, que muda conforme o uso:
 *        peso na prova (nº de questões) × dificuldade marcada × desempenho
 *        (taxa de erro recente, com as respostas recentes valendo mais) × tempo sem praticar.
 *      As matérias são distribuídas olhando os blocos dos últimos dias, para que,
 *      somando a semana, cada uma receba a sua fatia.
 *   5. Cada bloco traz o FOCO: os conteúdos (subtópicos) da matéria com mais erros.
 *
 * Fonte do desempenho: a memória de erros e acertos (lerMemoria), que junta os
 * simulados e as questões de estudo.
 */

/* ================================================================
   Matérias da prova (formato ACAFE: 63 questões)
   ================================================================ */

export const MATERIAS = [
  { id: 'portugues',  nome: 'Português',  disciplinas: ['Português'],  peso: 10, modulo: 'portugues' },
  { id: 'literatura', nome: 'Literatura', disciplinas: ['Literatura'], peso: 4,  modulo: 'literatura' },
  { id: 'lingua',     nome: null,         disciplinas: ['Espanhol', 'Inglês'], peso: 7, modulo: null },
  { id: 'matematica', nome: 'Matemática', disciplinas: ['Matemática'], peso: 7,  modulo: 'matematica' },
  { id: 'fisica',     nome: 'Física',     disciplinas: ['Física'],     peso: 7,  modulo: 'fisica' },
  { id: 'quimica',    nome: 'Química',    disciplinas: ['Química'],    peso: 7,  modulo: 'quimica' },
  { id: 'biologia',   nome: 'Biologia',   disciplinas: ['Biologia'],   peso: 7,  modulo: 'biologia' },
  { id: 'historia',   nome: 'História',   disciplinas: ['História'],   peso: 7,  modulo: 'historia' },
  { id: 'geografia',  nome: 'Geografia',  disciplinas: ['Geografia'],  peso: 7,  modulo: 'geografia' },
];

/** Nome da matéria (a língua estrangeira usa o idioma escolhido pelo aluno). */
export const nomeMateria = (materia, perfil) =>
  materia.nome || `Língua Estrangeira (${perfil?.idioma || 'Espanhol'})`;

/** Módulo de questões de estudo da matéria (só existe módulo de Espanhol, não de Inglês). */
export const moduloMateria = (materia, perfil) =>
  materia.modulo || ((perfil?.idioma || 'Espanhol') === 'Espanhol' ? 'espanhol' : null);

/** Matéria de uma disciplina (campo `disciplina` das questões). */
export function materiaDaDisciplina(disciplina) {
  return MATERIAS.find(m => m.disciplinas.includes(disciplina)) || null;
}

export const DURACAO_SIMULADO = 300;          // minutos (prova ACAFE: 5h)
const MEIA_VIDA_DIAS = 14;                     // respostas de 14 dias atrás valem metade
const DIA_MS = 86400000;

/* ================================================================
   Datas (sempre no horário de Brasília, como dia "AAAA-MM-DD")
   ================================================================ */

/** Dia "AAAA-MM-DD" de uma data, no horário de Brasília. */
export const chaveDia = (data = new Date()) =>
  new Date(data).toLocaleDateString('sv-SE', { timeZone: 'America/Sao_Paulo' });

/** Meio-dia (Brasília) do dia, para contas sem problema de fuso. */
const meioDia = chave => new Date(`${chave}T12:00:00-03:00`);

export const somarDias = (chave, n) => chaveDia(meioDia(chave).getTime() + n * DIA_MS);

/** 0 = domingo … 6 = sábado. */
export const diaDaSemana = chave => meioDia(chave).getUTCDay();

export const eFimDeSemana = chave => [0, 6].includes(diaDaSemana(chave));

/** Segunda-feira da semana do dia. */
export const inicioDaSemana = chave => somarDias(chave, -((diaDaSemana(chave) + 6) % 7));

/** Dias entre duas chaves (b − a). */
export const diasEntre = (a, b) => Math.round((meioDia(b) - meioDia(a)) / DIA_MS);

/* ================================================================
   Tempo de cada dia
   ================================================================ */

/**
 * Minutos de estudo previstos para o dia.
 * Ordem: dia da prova (0) → tempo fixado para o dia (ex.: viagem = 0) →
 * horas do perfil (dia útil ou fim de semana) + ajuste do dia. Véspera: no máximo 2h.
 * @param {Object} guia     - { perfil, ajustes: { dia: ±min }, fixos: { dia: min } }
 * @param {string} chave
 * @param {string} diaProva - "AAAA-MM-DD"
 */
export function minutosDoDia(guia, chave, diaProva) {
  if (chave >= diaProva) return 0;
  const { perfil } = guia;
  let minutos;
  if (guia.fixos?.[chave] !== undefined) minutos = guia.fixos[chave];
  else {
    const base = eFimDeSemana(chave) && perfil.fimDeSemanaMais ? perfil.minutosFimDeSemana : perfil.minutosDia;
    minutos = (base || 0) + (guia.ajustes?.[chave] || 0);
  }
  minutos = Math.max(0, minutos);
  if (somarDias(chave, 1) === diaProva) minutos = Math.min(minutos, 120);   // véspera: revisão leve
  return minutos;
}

/* ================================================================
   Desempenho (memória de erros e acertos)
   ================================================================ */

/** Mapa id → questão, juntando os bancos (provas e estudo). */
export function indexarQuestoes(...listas) {
  const indice = new Map();
  listas.flat().forEach(q => indice.set(q.id, q));
  return indice;
}

const novoAcumulador = () => ({ n: 0, acertos: 0, w: 0, wAcertos: 0, ultima: 0, n14: 0, acertos14: 0 });

function acumular(acc, registro, peso, recente) {
  acc.n++; acc.w += peso;
  if (registro.ok) { acc.acertos++; acc.wAcertos += peso; }
  if (recente) { acc.n14++; if (registro.ok) acc.acertos14++; }
  acc.ultima = Math.max(acc.ultima, registro.t);
}

/**
 * Resume a memória por matéria e por conteúdo (subtópico).
 * @returns {{ materias: Object<string, Object>, conteudos: Object<string, Object> }}
 *   conteudos: chave "<materia>|<subtópico>" → acumulador + { materia, subtopico }
 */
export function analisarMemoria(memoria, indice, agora = Date.now()) {
  const materias = {}, conteudos = {};
  for (const r of memoria) {
    const q = indice.get(r.q);
    const materia = q && materiaDaDisciplina(q.disciplina);
    if (!materia) continue;
    const peso = Math.pow(0.5, Math.max(0, agora - r.t) / (MEIA_VIDA_DIAS * DIA_MS));
    const recente = agora - r.t <= 14 * DIA_MS;
    acumular(materias[materia.id] ||= novoAcumulador(), r, peso, recente);
    const sub = (q.subtopico || 'Geral').trim();
    const chave = `${materia.id}|${sub}`;
    acumular(conteudos[chave] ||= { ...novoAcumulador(), materia: materia.id, subtopico: sub }, r, peso, recente);
  }
  return { materias, conteudos };
}

/** Taxa de erro suavizada (começa em 50% sem dados e se ajusta com as respostas). */
export const taxaErro = acc => (acc ? ((acc.w - acc.wAcertos) + 1) / (acc.w + 2) : 0.5);

/* ================================================================
   Prioridade de cada matéria
   ================================================================ */

/**
 * @returns {{ id, materia, prioridade, fatia, fatores: { peso, dificuldade, desempenho, frescor } }[]}
 */
export function calcularPrioridades(perfil, analise, agora = Date.now()) {
  const dificeis = new Set(perfil.dificeis || []);
  const lista = MATERIAS.map(materia => {
    const acc = analise.materias[materia.id];
    const desempenho = 0.6 + 1.6 * taxaErro(acc);                    // 0,6 (acerta tudo) … 2,2 (erra tudo)
    const dificuldade = dificeis.has(materia.id) ? 1.4 : 1;
    const diasSemPraticar = acc ? (agora - acc.ultima) / DIA_MS : 14;
    const frescor = 1 + Math.min(diasSemPraticar, 14) / 28;          // até +50% se está parada
    const prioridade = materia.peso * dificuldade * desempenho * frescor;
    return { id: materia.id, materia, prioridade, fatores: { peso: materia.peso, dificuldade, desempenho, frescor } };
  });
  const total = lista.reduce((s, p) => s + p.prioridade, 0);
  lista.forEach(p => { p.fatia = p.prioridade / total; });
  return lista;
}

/** Conteúdos da matéria com mais erros (pelo menos 1 erro), do pior para o melhor. */
export function conteudosFracos(analise, materiaId) {
  return Object.values(analise.conteudos)
    .filter(c => c.materia === materiaId && c.acertos < c.n)
    .sort((a, b) => taxaErro(b) - taxaErro(a) || b.n - a.n);
}

/* ================================================================
   Simulado semanal
   ================================================================ */

/**
 * Simulado previsto para o dia: { minutos, tipo: 'interno'|'externo', continuacao } ou null.
 *   - Simulado externo marcado na semana (ex.: do cursinho): ocupa o dia marcado e
 *     conta como o simulado da semana.
 *   - Simulado movido pelo aluno (guia.simuladoNoDia[segunda] = dia): vai para o dia escolhido.
 *   - Padrão: sábado; o que não couber no sábado continua no domingo.
 *   - Nada se o aluno já finalizou um simulado na semana, nem na véspera da prova.
 * @param {boolean} feitoNaSemana - já finalizou um simulado do site nesta semana
 */
export function simuladoDoDia(guia, chave, feitoNaSemana, diaProva) {
  const semana = inicioDaSemana(chave);
  const minutosDe = k => minutosDoDia(guia, k, diaProva);
  const externos = guia.simuladosExternos || {};
  const externoNaSemana = Object.keys(externos).find(k => inicioDaSemana(k) === semana);
  if (externoNaSemana) {
    return externoNaSemana === chave
      ? { minutos: Math.min(externos[chave], minutosDe(chave)), tipo: 'externo', continuacao: false }
      : null;
  }
  if (feitoNaSemana || diasEntre(chave, diaProva) <= 1) return null;
  const movido = guia.simuladoNoDia?.[semana];
  if (movido) {
    if (movido !== chave) return null;
    const minutos = Math.min(DURACAO_SIMULADO, minutosDe(chave));
    return minutos > 0 ? { minutos, tipo: 'interno', continuacao: false } : null;
  }
  if (!eFimDeSemana(chave)) return null;
  const sabado = diaDaSemana(chave) === 6 ? chave : somarDias(chave, -1);
  const noSabado = diasEntre(sabado, diaProva) <= 1 ? 0 : Math.min(DURACAO_SIMULADO, minutosDe(sabado));
  const minutos = chave === sabado ? noSabado : Math.min(DURACAO_SIMULADO - noSabado, minutosDe(chave));
  return minutos > 0 ? { minutos, tipo: 'interno', continuacao: chave !== sabado && noSabado > 0 } : null;
}

/* ================================================================
   Plano do dia
   ================================================================ */

/**
 * Divide os minutos de estudo em blocos (sem contar as pausas no tempo de estudo).
 * Blocos cheios do tamanho escolhido; uma sobra de 15 min ou mais vira um bloco menor.
 * @returns {number[]} duração de cada bloco
 */
export function dividirEmBlocos(minutos, estudo, pausa) {
  if (minutos < 15) return [];
  if (minutos <= estudo) return [minutos];
  const blocos = [];
  let resto = minutos;
  while (resto >= estudo) {
    blocos.push(estudo);
    resto -= estudo + pausa;
  }
  if (resto >= 15) blocos.push(resto);
  return blocos;
}

/**
 * Distribui `n` blocos entre as matérias: cada uma deve chegar à sua fatia,
 * contando também os blocos dos últimos dias (historico: id → nº de blocos).
 * Evita a mesma matéria em blocos seguidos e mais de 2 blocos da mesma no dia.
 */
export function distribuirMaterias(n, prioridades, historico = {}) {
  const jaFeitos = Object.values(historico).reduce((s, v) => s + v, 0);
  const total = jaFeitos + n;
  const deficit = Object.fromEntries(prioridades.map(p => [p.id, p.fatia * total - (historico[p.id] || 0)]));
  const noDia = {};
  const escolhidas = [];
  for (let i = 0; i < n; i++) {
    const anterior = escolhidas[i - 1];
    const candidatas = prioridades
      .filter(p => p.id !== anterior && (noDia[p.id] || 0) < 2)
      .sort((a, b) => deficit[b.id] - deficit[a.id] || b.prioridade - a.prioridade);
    const escolha = (candidatas[0] || prioridades.find(p => p.id !== anterior) || prioridades[0]).id;
    escolhidas.push(escolha);
    deficit[escolha] -= 1;
    noDia[escolha] = (noDia[escolha] || 0) + 1;
  }
  return escolhidas;
}

/** O que fazer no bloco, conforme a fase da preparação e o perfil do aluno. */
function atividade({ foco, faseFinal, vespera, cursinho, temQuestoes }) {
  if (vespera) return 'Revisão leve: releia seus resumos e anotações. Nada de conteúdo novo; descanse bem.';
  const praticar = temQuestoes ? 'faça as questões da matéria' : 'faça exercícios';
  if (faseFinal) return foco.length
    ? `Reta final: revise ${foco.length > 1 ? 'esses conteúdos' : 'esse conteúdo'} em resumos e ${praticar}.`
    : `Reta final: revise seus resumos e ${praticar}.`;
  if (foco.length) return `Revise a teoria ${foco.length > 1 ? 'desses conteúdos' : 'desse conteúdo'} e ${praticar} até acertar com segurança.`;
  return cursinho
    ? `Revise a matéria do cursinho e ${praticar}; o guia aprende seus pontos fracos com as suas respostas.`
    : `Estude a teoria e ${praticar}; o guia aprende seus pontos fracos com as suas respostas.`;
}

/**
 * Monta o plano de um dia.
 * @param {Object} p
 * @param {Object}   p.perfil
 * @param {string}   p.chave           - dia
 * @param {number}   p.minutos         - minutos de estudo do dia
 * @param {Object}   [p.simulado]      - de simuladoDoDia (parte do tempo reservada ao simulado)
 * @param {Object[]} p.prioridades     - de calcularPrioridades
 * @param {Object}   p.analise         - de analisarMemoria
 * @param {Object}   p.historico       - blocos por matéria nos últimos dias
 * @param {Set}      p.materiasComQuestoes - ids de matérias com questões de estudo cadastradas
 * @param {string}   p.diaProva
 * @returns {{ chave, minutos, blocos: { tipo: 'simulado'|'externo'|'materia', minutos, materia?, foco?, atividade }[] }}
 */
export function montarDia({ perfil, chave, minutos, simulado = null,
  prioridades, analise, historico = {}, materiasComQuestoes = new Set(), diaProva }) {
  const { estudo, pausa } = perfil.bloco;
  const blocos = [];
  const minutosSimulado = simulado?.minutos || 0;
  if (simulado?.tipo === 'externo') {
    blocos.push({ tipo: 'externo', minutos: minutosSimulado,
      atividade: 'Simulado externo (ex.: do cursinho). Depois, revise as questões que errou.' });
  } else if (minutosSimulado > 0) {
    blocos.push({
      tipo: 'simulado',
      minutos: minutosSimulado,
      atividade: simulado.continuacao
        ? 'Continue o simulado de ontem (ele fica salvo) e finalize para ver o resultado.'
        : minutosSimulado < DURACAO_SIMULADO
          ? 'Comece o simulado completo como no dia da prova; ele fica salvo e você termina depois.'
          : 'Simulado completo, como no dia da prova: 63 questões em até 5 horas, sem consultar nada.',
    });
  }
  const restante = minutos - minutosSimulado - (minutosSimulado > 0 ? pausa : 0);
  const duracoes = dividirEmBlocos(Math.max(0, restante), estudo, pausa);
  const materias = distribuirMaterias(duracoes.length, prioridades, historico);
  const usados = {};    // quantos conteúdos fracos de cada matéria já entraram no dia
  const diasParaProva = diasEntre(chave, diaProva);
  duracoes.forEach((min, i) => {
    const id = materias[i];
    const materia = MATERIAS.find(m => m.id === id);
    const fracos = conteudosFracos(analise, id).map(c => c.subtopico);
    const inicio = usados[id] || 0;
    const foco = fracos.slice(inicio, inicio + 2);
    usados[id] = inicio + foco.length;
    blocos.push({
      tipo: 'materia',
      minutos: min,
      materia: id,
      nome: nomeMateria(materia, perfil),
      foco,
      atividade: atividade({
        foco,
        faseFinal: diasParaProva <= 7,
        vespera: diasParaProva === 1,
        cursinho: perfil.cursinho,
        temQuestoes: materiasComQuestoes.has(id),
      }),
    });
  });
  return { chave, minutos, blocos };
}

/** Blocos de cada matéria em uma lista de planos de dias. */
export function contarBlocos(planos) {
  const contagem = {};
  planos.forEach(p => {
    // blocos incluídos pelo aluno não entram no rodízio: os outros dias não mudam por causa deles
    p?.blocos?.forEach(b => { if (b.tipo === 'materia' && !b.incluido) contagem[b.materia] = (contagem[b.materia] || 0) + 1; });
    // matérias que o aluno tirou ou passou para outro dia contam como feitas: o plano
    // dos dias seguintes não "compensa" por conta própria o que ele decidiu mudar
    p?.removidos?.forEach(m => { contagem[m] = (contagem[m] || 0) + 1; });
  });
  return contagem;
}

/* ================================================================
   Projeção de acertos
   ================================================================ */

/**
 * Estimativa de acertos na prova (de 63), pela taxa de acerto em cada matéria.
 * Só considera matérias com pelo menos `minimo` respostas; as outras ficam de fora.
 * @returns {{ acertos: number, questoesConsideradas: number } | null}
 */
export function projetarAcertos(analise, minimo = 5) {
  let acertos = 0, questoes = 0;
  MATERIAS.forEach(m => {
    const acc = analise.materias[m.id];
    if (!acc || acc.n < minimo) return;
    acertos += m.peso * (acc.wAcertos / acc.w);
    questoes += m.peso;
  });
  return questoes ? { acertos, questoesConsideradas: questoes } : null;
}

/* ================================================================
   Planejamento de vários dias
   ================================================================ */

/**
 * Planeja os dias de `de` até `ate` (inclusive), em sequência: cada dia leva em
 * conta os blocos dos 6 dias anteriores (planos já fixados ou os recém-planejados).
 * Um plano fixado (planosFixos[dia]) é mantido como está.
 * @param {Object} guia
 * @param {Object} ctx - { de, ate, diaProva, prioridades, analise, materiasComQuestoes,
 *                         semanasComSimuladoFeito: Set<segunda>, planosFixos: { dia: plano } }
 * @returns {Object[]} planos dos dias, em ordem
 */
export function planejarPeriodo(guia, ctx) {
  const { de, ate, diaProva, planosFixos = {}, semanasComSimuladoFeito = new Set() } = ctx;
  const planos = {};
  const resultado = [];
  for (let dia = de; dia <= ate; dia = somarDias(dia, 1)) {
    let plano = planosFixos[dia];
    if (!plano) {
      const ultimos = [];
      for (let i = 6; i >= 1; i--) {
        const k = somarDias(dia, -i);
        ultimos.push(planos[k] || planosFixos[k]);
      }
      plano = montarDia({
        perfil: guia.perfil,
        chave: dia,
        minutos: minutosDoDia(guia, dia, diaProva),
        simulado: simuladoDoDia(guia, dia, semanasComSimuladoFeito.has(inicioDaSemana(dia)), diaProva),
        prioridades: ctx.prioridades,
        analise: ctx.analise,
        historico: contarBlocos(ultimos),
        materiasComQuestoes: ctx.materiasComQuestoes,
        diaProva,
      });
      plano = aplicarEdicoes(plano, guia.edicoes?.[dia], guia.perfil);
    }
    planos[dia] = plano;
    resultado.push(plano);
  }
  return resultado;
}

/* ================================================================
   Mudanças pedidas pelo aluno (chat) — aplicar e avaliar
   ================================================================
   Formato de uma mudança:
     { tipo: 'minutos',          dias: [dia...], minutos }   tempo fixo no dia (0 = não vai estudar)
     { tipo: 'ajuste',           dias: [dia...], delta }     estudar mais (+) ou menos (−) que o normal
     { tipo: 'restaurar',        dias: [dia...] }            volta ao tempo normal
     { tipo: 'simulado-externo', dia, minutos }              simulado fora do site (ex.: cursinho)
     { tipo: 'mover-simulado',   para }                      simulado da semana de `para` vai para esse dia
     { tipo: 'materia', dia, op, materia, minutos }          edição de uma matéria num dia:
          op 'tempo' (fica com `minutos` no dia), 'delta' (± `minutos`), 'remover', 'adicionar' (`minutos`)
     { tipo: 'mover-materia', materia, de, para }            tira a matéria de um dia e põe no outro, com o mesmo tempo
                                                              (avaliarMudancas transforma em 'remover' + 'adicionar')
   As edições de matérias ficam em guia.edicoes[dia] e são aplicadas sobre o plano gerado do dia
   (aplicarEdicoes). Só muda o que foi pedido: o resto do dia fica igual.
*/

/** Minutos de uma matéria num plano (soma dos blocos dela). */
export const minutosDaMateria = (plano, materia) =>
  (plano?.blocos || []).filter(b => b.tipo === 'materia' && b.materia === materia).reduce((s, b) => s + b.minutos, 0);

/**
 * Aplica as edições de matérias de um dia sobre o plano (não altera o original).
 * A matéria editada fica num bloco só, com o tempo pedido (sem pausa no meio).
 */
export function aplicarEdicoes(plano, edicoes, perfil) {
  if (!edicoes?.length) return plano;
  const novo = { ...plano, blocos: plano.blocos.map(b => ({ ...b })) };
  const daMateria = (b, materia) => b.tipo === 'materia' && b.materia === materia;
  novo.removidos = [...(plano.removidos || [])];   // matérias tiradas pelo aluno: o rodízio conta como estudadas
  const novoBloco = (materia, minutos) => {
    const m = MATERIAS.find(x => x.id === materia);
    novo.blocos.push({ tipo: 'materia', materia, minutos, nome: nomeMateria(m, perfil), foco: [],
      atividade: 'Bloco incluído por você.', editado: true, incluido: true });
  };
  const definir = (materia, minutos) => {
    const primeiro = novo.blocos.find(b => daMateria(b, materia));
    novo.blocos = novo.blocos.filter(b => !daMateria(b, materia) || (b === primeiro && minutos > 0));
    if (minutos <= 0) return;
    if (primeiro) {
      primeiro.minutos = minutos;
      primeiro.editado = true;
    } else novoBloco(materia, minutos);
  };
  for (const e of edicoes) {
    const atual = minutosDaMateria(novo, e.materia);
    if (e.op === 'tempo') definir(e.materia, e.minutos);
    if (e.op === 'delta') definir(e.materia, atual + e.minutos);
    if (e.op === 'remover') { if (atual) novo.removidos.push(e.materia); definir(e.materia, 0); }
    if (e.op === 'adicionar') novoBloco(e.materia, e.minutos);   // bloco a mais (com pausa entre eles)
  }
  const estudo = novo.blocos.reduce((s, b) => s + b.minutos, 0);
  novo.minutos = estudo + Math.max(0, novo.blocos.length - 1) * (perfil?.bloco?.pausa || 0);
  return novo;
}

const clonar = o => JSON.parse(JSON.stringify(o));

/** Devolve um novo guia com as mudanças aplicadas (não altera o original). */
export function aplicarMudancas(guia, mudancas) {
  const novo = clonar(guia);
  novo.fixos ||= {}; novo.ajustes ||= {}; novo.simuladosExternos ||= {}; novo.simuladoNoDia ||= {};
  for (const m of mudancas) {
    if (m.tipo === 'minutos') m.dias.forEach(d => { novo.fixos[d] = Math.max(0, Math.round(m.minutos)); delete novo.ajustes[d]; });
    if (m.tipo === 'ajuste') m.dias.forEach(d => { novo.ajustes[d] = (novo.ajustes[d] || 0) + Math.round(m.delta); });
    if (m.tipo === 'restaurar') m.dias.forEach(d => { delete novo.fixos[d]; delete novo.ajustes[d]; delete novo.simuladosExternos[d]; });
    if (m.tipo === 'simulado-externo') {
      const semana = inicioDaSemana(m.dia);
      Object.keys(novo.simuladosExternos).forEach(k => { if (inicioDaSemana(k) === semana) delete novo.simuladosExternos[k]; });
      novo.simuladosExternos[m.dia] = Math.round(m.minutos || DURACAO_SIMULADO);
      delete novo.simuladoNoDia[semana];
    }
    if (m.tipo === 'mover-simulado') novo.simuladoNoDia[inicioDaSemana(m.para)] = m.para;
    if (m.tipo === 'materia') {
      novo.edicoes ||= {};
      (novo.edicoes[m.dia] ||= []).push({ op: m.op, materia: m.materia, minutos: m.minutos ?? null });
    }
  }
  return novo;
}

/** Dias citados por uma lista de mudanças. */
export const diasDasMudancas = mudancas =>
  [...new Set(mudancas.flatMap(m => m.dias || [m.dia, m.para, m.de]).filter(Boolean))].sort();

/** "2h30" / "45min" */
export function formatarHoras(min) {
  const h = Math.floor(Math.abs(min) / 60), m = Math.round(Math.abs(min) % 60);
  return h ? `${h}h${m ? String(m).padStart(2, '0') : ''}` : `${m}min`;
}

/** "sáb, 07/11" */
export function dataCurta(chave) {
  const [, mes, dia] = chave.split('-');
  return `${['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'][diaDaSemana(chave)]}, ${dia}/${mes}`;
}

const minutosDeEstudo = planos => planos.reduce((s, p) => s + p.blocos.reduce((t, b) => t + b.minutos, 0), 0);
const simuladosNoPeriodo = planos => {
  const semanas = new Set();
  planos.forEach(p => p.blocos.forEach(b => { if (b.tipo === 'simulado' || b.tipo === 'externo') semanas.add(inicioDaSemana(p.chave)); }));
  return semanas.size;
};

/**
 * Avalia se as mudanças fazem sentido e quais as consequências até a prova.
 * @param {Object}   guia     - guia atual
 * @param {Object[]} mudancas
 * @param {Object}   ctx      - o mesmo de planejarPeriodo, com `hoje` (o período vai de hoje à véspera)
 *                              e `planoHoje` (o plano fixado de hoje, que o aluno está vendo)
 * @returns {{ veredito: 'ok'|'atencao'|'invalida', erros: string[], avisos: string[],
 *             consequencias: string[], compensacao: Object[]|null, guiaNovo: Object }}
 */
export function avaliarMudancas(guia, mudancas, ctx) {
  const { hoje, diaProva } = ctx;
  const erros = [], avisos = [], consequencias = [];
  const vespera = somarDias(diaProva, -1);
  const dias = diasDasMudancas(mudancas);
  const h = formatarHoras;

  if (!mudancas.length) erros.push('Não entendi qual mudança você quer fazer no cronograma.');
  dias.forEach(d => {
    if (d < hoje) erros.push(`${dataCurta(d)} já passou.`);
    else if (d === diaProva) erros.push(`${dataCurta(d)} é o dia da prova: nesse dia não há estudo no cronograma.`);
    else if (d > diaProva) erros.push(`${dataCurta(d)} é depois da prova (${dataCurta(diaProva)}).`);
  });
  mudancas.forEach(m => {
    if (m.tipo === 'minutos' && m.minutos > 16 * 60) erros.push('Mais de 16 horas de estudo em um dia não é realista.');
    if (m.tipo === 'mover-simulado' && m.para === vespera)
      erros.push('Na véspera da prova o guia não marca simulado: o ideal é descansar e revisar de leve.');
  });

  if (erros.length) return { veredito: 'invalida', erros, avisos, consequencias, compensacao: null, guiaNovo: guia, mudancas };

  // Plano de hoje: o que o aluno está vendo (fixado), não um novo
  const fixosAntes = { ...(ctx.planosFixos || {}) };
  if (ctx.planoHoje) fixosAntes[hoje] = ctx.planoHoje;
  const periodo = { ...ctx, planosFixos: fixosAntes, de: hoje, ate: vespera };
  const antes = planejarPeriodo(guia, periodo);
  const planoDe = d => antes.find(p => p.chave === d);
  const nomeDe = id => nomeMateria(MATERIAS.find(m => m.id === id), guia.perfil);

  // Edições de matérias: confere uma a uma sobre uma cópia dos planos e transforma
  // "mover" em "tirar de um dia" + "pôr no outro" com o mesmo tempo
  const resolvidas = [];
  const trabalho = {};
  const planoTrab = d => (trabalho[d] ||= planoDe(d) || { chave: d, blocos: [], minutos: 0 });
  const aplicar = (d, op) => { trabalho[d] = aplicarEdicoes(planoTrab(d), [op], guia.perfil); };
  for (const m of mudancas) {
    if (m.tipo === 'mover-materia') {
      const min = minutosDaMateria(planoTrab(m.de), m.materia);
      if (!min) { erros.push(`${nomeDe(m.materia)} não está no plano de ${dataCurta(m.de)}.`); continue; }
      if (m.de === m.para) { erros.push('O dia de origem e o de destino são o mesmo.'); continue; }
      const tirar = { tipo: 'materia', dia: m.de, op: 'remover', materia: m.materia };
      const por = { tipo: 'materia', dia: m.para, op: 'adicionar', materia: m.materia, minutos: min };
      aplicar(m.de, tirar); aplicar(m.para, por);
      resolvidas.push(tirar, por);
      consequencias.push(`${nomeDe(m.materia)} sai de ${dataCurta(m.de)} e vai para ${dataCurta(m.para)} (${h(min)}).`);
      continue;
    }
    if (m.tipo === 'materia') {
      const op = { ...m };
      const atual = minutosDaMateria(planoTrab(m.dia), m.materia);
      const nome = nomeDe(m.materia);
      if (['delta', 'remover'].includes(m.op) && !atual) {
        erros.push(`${nome} não está no plano de ${dataCurta(m.dia)}.${m.op === 'remover' ? '' : ' Para incluir, peça para "colocar" a matéria nesse dia.'}`);
        continue;
      }
      if (m.op === 'tempo' && !atual) op.op = 'adicionar';   // "quero 1h de física hoje" sem física no dia: entra
      if (m.op === 'adicionar' && !op.minutos) op.minutos = guia.perfil.bloco.estudo;
      const final = op.op === 'tempo' ? op.minutos : op.op === 'remover' ? 0 : atual + op.minutos;
      if (op.op !== 'remover' && final > 0 && final < 10) { erros.push(`${nome} ficaria com só ${h(final)} em ${dataCurta(m.dia)}; o mínimo é 10 minutos.`); continue; }
      if (final > 300) { erros.push(`${nome} ficaria com ${h(final)} seguidas em ${dataCurta(m.dia)}; o máximo por matéria é 5h.`); continue; }
      aplicar(m.dia, op);
      resolvidas.push(op);
      const aviso = `Você marcou ${nome} como difícil, e ela perde tempo de estudo.`;
      if (final < atual && (guia.perfil.dificeis || []).includes(m.materia) && !avisos.includes(aviso)) avisos.push(aviso);
      if (final <= 0) consequencias.push(`${nome} sai de ${dataCurta(m.dia)}${atual ? ` (${h(atual)})` : ''}.`);
      else if (!atual) consequencias.push(`Entra ${nome} em ${dataCurta(m.dia)}: ${h(final)}.`);
      else if (op.op === 'adicionar') consequencias.push(`Mais um bloco de ${nome} em ${dataCurta(m.dia)}: +${h(op.minutos)} (total ${h(final)}).`);
      else consequencias.push(`${nome} em ${dataCurta(m.dia)}: ${h(atual)} → ${h(final)}${final > guia.perfil.bloco.estudo ? ' (num bloco só, sem pausa)' : ''}.`);
      continue;
    }
    resolvidas.push(m);
  }
  Object.entries(trabalho).forEach(([d, p]) => {
    const total = p.blocos.reduce((s, b) => s + b.minutos, 0);
    if (total > 16 * 60) erros.push(`${dataCurta(d)} ficaria com ${h(total)} de estudo; mais de 16 horas não é realista.`);
  });
  const guiaNovo = aplicarMudancas(guia, resolvidas);
  if (erros.length) return { veredito: 'invalida', erros, avisos, consequencias: [], compensacao: null, guiaNovo, mudancas: resolvidas };

  // Depois: hoje continua o plano fixado (com as edições pedidas), a não ser que o tempo do dia mude
  const fixosDepois = { ...(ctx.planosFixos || {}) };
  const tempoDeHojeMuda = resolvidas.some(m => ['minutos', 'ajuste', 'restaurar'].includes(m.tipo) && m.dias.includes(hoje))
    || resolvidas.some(m => m.tipo === 'simulado-externo' && m.dia === hoje);
  let planoHojeDepois = null;
  if (ctx.planoHoje && !tempoDeHojeMuda) {
    const opsHoje = resolvidas.filter(m => m.tipo === 'materia' && m.dia === hoje);
    planoHojeDepois = aplicarEdicoes(ctx.planoHoje, opsHoje, guia.perfil);
    fixosDepois[hoje] = planoHojeDepois;
  }
  const depois = planejarPeriodo(guiaNovo, { ...periodo, planosFixos: fixosDepois });
  const minAntes = minutosDeEstudo(antes), minDepois = minutosDeEstudo(depois);
  const diferenca = minDepois - minAntes;
  const diasRestantes = diasEntre(hoje, diaProva);

  // Tempo
  if (diferenca < 0) {
    const pct = minAntes ? Math.round(-diferenca / minAntes * 100) : 0;
    consequencias.push(`Você deixa de estudar ${h(-diferenca)} até a prova (${pct || 'menos de 1'}% do tempo que resta: de ${h(minAntes)} para ${h(minDepois)}).`);
    if (pct >= 20) avisos.push(`É uma perda grande: faltam ${diasRestantes} dias para a prova e ${pct}% do seu tempo de estudo sairia do plano.`);
    else if (pct >= 8) avisos.push(`Faltam ${diasRestantes} dias para a prova; vale compensar parte desse tempo nos outros dias.`);
  } else if (diferenca > 0) {
    consequencias.push(`Você ganha ${h(diferenca)} de estudo até a prova (de ${h(minAntes)} para ${h(minDepois)}).`);
  }
  if (diferenca < 0 && dias.some(d => diasEntre(d, diaProva) <= 7))
    avisos.push('Parte da mudança cai na última semana antes da prova, a fase de revisão final.');

  // Matérias que perdem ou ganham blocos
  const contAntes = contarBlocos(antes), contDepois = contarBlocos(depois);
  const nome = m => nomeMateria(m, guia.perfil);
  const variacoes = MATERIAS.map(m => ({ m, d: (contDepois[m.id] || 0) - (contAntes[m.id] || 0) })).filter(v => v.d);
  const perdem = variacoes.filter(v => v.d < 0).sort((a, b) => a.d - b.d);
  const ganham = variacoes.filter(v => v.d > 0).sort((a, b) => b.d - a.d);
  const soEdicoesDeMateria = resolvidas.every(m => m.tipo === 'materia');   // já descritas uma a uma acima
  if (perdem.length && !soEdicoesDeMateria) consequencias.push(`Menos blocos de: ${perdem.map(v => `${nome(v.m)} (−${-v.d})`).join(', ')}.`);
  if (ganham.length && !soEdicoesDeMateria) consequencias.push(`Mais blocos de: ${ganham.map(v => `${nome(v.m)} (+${v.d})`).join(', ')}.`);
  const dificeisPerdendo = perdem.filter(v => (guia.perfil.dificeis || []).includes(v.m.id));
  if (dificeisPerdendo.length)
    avisos.push(`Você marcou ${dificeisPerdendo.map(v => nome(v.m)).join(' e ')} como difícil, e ${dificeisPerdendo.length > 1 ? 'elas perdem' : 'ela perde'} tempo de estudo.`);

  // Simulados
  const simAntes = simuladosNoPeriodo(antes), simDepois = simuladosNoPeriodo(depois);
  if (simDepois < simAntes)
    avisos.push(`Você fica com ${simDepois} simulado${simDepois === 1 ? '' : 's'} até a prova (antes eram ${simAntes}). Treinar a prova inteira é importante para o ritmo e o cansaço.`);
  mudancas.forEach(m => {
    if (m.tipo === 'simulado-externo') {
      consequencias.push(`O simulado externo de ${dataCurta(m.dia)} conta como o simulado da semana; o do site não entra nessa semana.`);
      if (minutosDoDia(guiaNovo, m.dia, diaProva) < (m.minutos || DURACAO_SIMULADO))
        avisos.push(`Seu tempo de estudo em ${dataCurta(m.dia)} é menor que a duração do simulado externo; aumente o tempo desse dia.`);
    }
    if (m.tipo === 'mover-simulado') {
      const sim = depois.find(p => p.chave === m.para)?.blocos.find(b => b.tipo === 'simulado');
      if (!sim) avisos.push(`Não há tempo de estudo em ${dataCurta(m.para)} para o simulado; aumente o tempo desse dia.`);
      else {
        consequencias.push(`O simulado da semana vai para ${dataCurta(m.para)}.`);
        if (sim.minutos < DURACAO_SIMULADO)
          avisos.push(`Em ${dataCurta(m.para)} você tem ${h(sim.minutos)}; o simulado (5h) não cabe inteiro e terá de ser terminado depois.`);
      }
      if (diasEntre(m.para, diaProva) <= 3 && m.para !== vespera)
        avisos.push('Um simulado tão perto da prova pode cansar; o ideal é fazer o último até uns 5 dias antes.');
    }
  });

  // Compensação sugerida: repor o tempo perdido nos próximos dias normais (até +1h por dia, no máximo 10 dias)
  let compensacao = null;
  if (diferenca < 0) {
    const candidatos = [];
    for (let d = somarDias(hoje, 1); d < vespera && candidatos.length < 10; d = somarDias(d, 1)) {
      if (dias.includes(d) || guiaNovo.fixos?.[d] !== undefined || minutosDoDia(guiaNovo, d, diaProva) === 0) continue;
      candidatos.push(d);
      if (candidatos.length * 60 >= -diferenca) break;
    }
    if (candidatos.length) {
      const porDia = Math.min(60, Math.ceil(-diferenca / candidatos.length / 15) * 15);
      compensacao = [{ tipo: 'ajuste', dias: candidatos, delta: porDia }];
      consequencias.push(`Sugestão: compensar com +${h(porDia)} em ${candidatos.length} dia${candidatos.length > 1 ? 's' : ''} (${dataCurta(candidatos[0])}${candidatos.length > 1 ? ` a ${dataCurta(candidatos[candidatos.length - 1])}` : ''}).`);
    }
  }

  const avisosUnicos = [...new Set(avisos)];
  return { veredito: avisosUnicos.length ? 'atencao' : 'ok', erros, avisos: avisosUnicos, consequencias, compensacao, guiaNovo,
    mudancas: resolvidas, planoHojeDepois, tempoDeHojeMuda };
}
