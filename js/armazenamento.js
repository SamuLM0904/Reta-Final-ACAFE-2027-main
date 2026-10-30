/**
 * armazenamento.js — Camada de acesso ao localStorage.
 *
 * Todas as operações de leitura/gravação passam por aqui,
 * mantendo o resto do código livre de detalhes de serialização.
 *
 * Estrutura salva:
 *   {
 *     respostas: {
 *       "<id-da-questao>": {
 *         respondida: true,
 *         acertou: true | false,
 *         alternativaSelecionada: "C"
 *       }
 *     },
 *     simulado: {
 *       atual: { idioma, ids: ["<id>", ...], respostas: { "<id>": "C" }, tempoMs, indice, criadoEm } | null,
 *       tentativas: [ { data, idioma, ids, respostas, acertos, total, tempoMs } ]
 *     },
 *     memoria: [   // MEMÓRIA DE ERROS E ACERTOS — só muda quando o aluno marca uma resposta
 *       { q: "<id>", a: "C", ok: true, t: 1730000000000, o: "estudo" | "simulado", s: "<id do simulado>" }
 *     ],
 *     memoriaResetadaEm: 1730000000000,  // ms — quando o administrador zerou a memória (ver definirAluno)
 *     guia: {      // GUIA DE ESTUDOS (ver guia.js)
 *       perfil:  { minutosDia, fimDeSemanaMais, minutosFimDeSemana, bloco: { estudo, pausa },
 *                  dificeis: ["fisica", ...], idioma, meta, provasAnteriores, cursinho, atualizadoEm },
 *       ajustes: { "AAAA-MM-DD": ±minutos },     // "hoje vou estudar mais/menos"
 *       planos:  { "AAAA-MM-DD": { base, minutos, blocos: [...] } }   // plano fixado de cada dia
 *     },
 *     atualizadoEm: 1730000000000   // ms — usado para sincronizar com a nuvem
 *   }
 *
 * Com o banco de dados (Firebase) ativo, cada aluno tem a sua própria cópia
 * local (chave "acafe2027:<uid>"), e toda gravação é enviada também para
 * alunos/{uid} no Firestore (ver definirAluno e nuvem.js).
 */

const CHAVE_BASE = 'acafe2027';
let chave = CHAVE_BASE;       // muda para "acafe2027:<uid>" quando um aluno entra
let aoGravar = null;          // envia para a nuvem (definido por definirAluno)

const vazio = () => ({ respostas: {}, simulado: { atual: null, tentativas: [] }, memoria: [] });

/**
 * Lê o objeto raiz do storage.
 * @returns {{ respostas: Object, simulado: Object }}
 */
function lerTudo() {
  try {
    const raw   = localStorage.getItem(chave);
    const dados = raw ? JSON.parse(raw) : {};
    return { ...vazio(), ...dados };
  } catch {
      return vazio();
  }
}

/**
 * Grava o objeto raiz no storage (e na nuvem, se houver aluno logado).
 * @param {Object} dados
 */
function gravarTudo(dados) {
  dados.atualizadoEm = Date.now();
  try {
    localStorage.setItem(chave, JSON.stringify(dados));
  } catch (e) {
    console.warn('[Armazenamento] Não foi possível salvar:', e);
  }
  aoGravar?.(dados);
}

/* ================================================================
   Aluno logado (banco de dados na nuvem)
   ================================================================ */

/**
 * Passa a usar os dados de um aluno: escolhe a versão mais recente entre a
 * cópia local e a da nuvem, e envia as próximas gravações para a nuvem.
 * Na primeira entrada, os dados que já existiam neste navegador (modo local)
 * são levados para a conta do aluno.
 * @param {string|null} uid           - null = volta ao modo local
 * @param {Object|null} dadosNuvem    - conteúdo de alunos/{uid}, ou null
 * @param {(dados: Object) => void} [enviar] - grava na nuvem
 */
export function definirAluno(uid, dadosNuvem = null, enviar = null) {
  chave = uid ? `${CHAVE_BASE}:${uid}` : CHAVE_BASE;
  aoGravar = null;
  if (!uid) return;

  let local = localStorage.getItem(chave) ? lerTudo() : null;
  if (!local && localStorage.getItem(CHAVE_BASE)) {
    // primeira entrada neste navegador: o progresso feito sem login passa para
    // esta conta (só para ela — a cópia sem login é guardada à parte como backup)
    try { local = JSON.parse(localStorage.getItem(CHAVE_BASE)); } catch { local = null; }
    localStorage.setItem(`${CHAVE_BASE}:backup-sem-login`, localStorage.getItem(CHAVE_BASE));
    localStorage.removeItem(CHAVE_BASE);
  }

  const nuvem = dadosNuvem && (dadosNuvem.respostas || dadosNuvem.simulado) ? dadosNuvem : null;
  let usarLocal = local && (!nuvem || (local.atualizadoEm || 0) > (nuvem.atualizadoEm || 0));
  const dados = { ...vazio(), ...(dadosNuvem || {}), ...(usarLocal ? local : nuvem || {}) };

  // O administrador zerou a memória pela nuvem depois da última vez que este navegador
  // soube disso: descarta daqui as marcações anteriores ao reset (senão elas voltariam).
  const resetEm = dadosNuvem?.memoriaResetadaEm || 0;
  if (usarLocal && resetEm > (local.memoriaResetadaEm || 0)) {
    dados.memoria = (dados.memoria || []).filter(m => m.t > resetEm);
    dados.memoriaResetadaEm = resetEm;
  }
  try { localStorage.setItem(chave, JSON.stringify(dados)); } catch { /* ignora */ }

  aoGravar = enviar;
  if (usarLocal) enviar?.(dados);   // a nuvem estava desatualizada: envia
}

/**
 * Retorna todas as respostas gravadas.
 * @returns {Object} mapa id → { respondida, acertou, alternativaSelecionada }
 */
export function lerRespostas() {
  return lerTudo().respostas;
}

/**
 * Salva a resposta de uma questão.
 * @param {string} idQuestao
 * @param {{ acertou: boolean, alternativaSelecionada: string }} resposta
 */
export function salvarResposta(idQuestao, resposta) {
  const dados = lerTudo();
  dados.respostas[idQuestao] = {
    respondida: true,
    acertou: resposta.acertou,
    alternativaSelecionada: resposta.alternativaSelecionada,
  };
  gravarTudo(dados);
}

/**
 * Apaga as respostas de uma lista de ids de questões.
 * Usado em "Refazer só as que errei".
 * @param {string[]} ids
 */
export function apagarRespostas(ids) {
  const dados = lerTudo();
  ids.forEach(id => delete dados.respostas[id]);
  gravarTudo(dados);
}

/**
 * Apaga TODAS as respostas de um módulo (slug de disciplina).
 * Recebe a lista completa de questões para filtrar pelos ids corretos.
 * @param {Object[]} questoesDoModulo
 */
export function recomecarModulo(questoesDoModulo) {
  const ids = questoesDoModulo.map(q => q.id);
  apagarRespostas(ids);
}

/**
 * Retorna estatísticas rápidas para um conjunto de questões.
 * @param {Object[]} questoes
 * @returns {{ total: number, respondidas: number, acertos: number }}
 */
export function estatisticasModulo(questoes) {
  const respostas = lerRespostas();
  let respondidas = 0;
  let acertos = 0;
  questoes.forEach(q => {
    const r = respostas[q.id];
    if (r && r.respondida) {
      respondidas++;
      if (r.acertou) acertos++;
    }
  });
  return { total: questoes.length, respondidas, acertos };
}

/* ================================================================
   Simulado (gerado a partir das provas anteriores) — guardado à parte
   das respostas dos módulos de estudo.
   ================================================================ */

/**
 * Lê o simulado em andamento (ou null) e o histórico de tentativas.
 * @returns {{ atual: Object|null, tentativas: Object[] }}
 */
export function lerSimulado() {
  const s = lerTudo().simulado || {};
  return { atual: s.atual || null, tentativas: s.tentativas || [] };
}

/**
 * Grava o simulado em andamento (questões sorteadas, respostas, tempo e posição).
 * Passe null para descartá-lo.
 * @param {Object|null} atual
 */
export function salvarSimuladoAtual(atual) {
  const dados = lerTudo();
  dados.simulado = { ...lerSimulado(), atual };
  gravarTudo(dados);
}

/**
 * Descarta o simulado em andamento e apaga da memória de erros e acertos
 * tudo o que foi marcado nele.
 */
export function descartarSimuladoAtual() {
  const dados = lerTudo();
  const atual = dados.simulado?.atual;
  if (atual) {
    const id = idDoSimulado(atual);
    dados.memoria = (dados.memoria || []).filter(m => m.s !== id);
  }
  dados.simulado = { ...lerSimulado(), atual: null };
  gravarTudo(dados);
}

/** Identificador de um simulado (simulados antigos não tinham id: usa a data de criação). */
export const idDoSimulado = simulado => simulado.id || simulado.criadoEm;

/**
 * Registra uma tentativa finalizada e encerra o simulado em andamento.
 * @param {{ data: string, idioma: string, ids: string[], respostas: Object, acertos: number, total: number, tempoMs: number }} tentativa
 */
export function registrarTentativaSimulado(tentativa) {
  const dados = lerTudo();
  dados.simulado = { atual: null, tentativas: [...lerSimulado().tentativas, tentativa] };
  gravarTudo(dados);
}

/* ================================================================
   Memória de erros e acertos
   Só é alterada quando o aluno MARCA uma resposta (e quando um simulado
   em andamento é descartado). Navegar, pular, "Recomeçar" ou "Refazer"
   não mexem nela. É a base da análise de desempenho do aluno.
   ================================================================ */

/**
 * Lê a memória de erros e acertos.
 * @returns {{ q: string, a: string, ok: boolean, t: number, o: string, s?: string }[]}
 */
export function lerMemoria() {
  return lerTudo().memoria || [];
}

/**
 * Registra uma resposta marcada.
 * No simulado, a marcação substitui a anterior da mesma questão no mesmo
 * simulado (o aluno pode trocar de alternativa); no estudo, cada conferência
 * é um novo registro.
 * @param {{ questaoId: string, letra: string, acertou: boolean, origem: 'estudo'|'simulado', simuladoId?: string }} r
 */
export function registrarNaMemoria({ questaoId, letra, acertou, origem, simuladoId }) {
  const dados = lerTudo();
  let memoria = dados.memoria || [];
  if (origem === 'simulado') memoria = memoria.filter(m => !(m.s === simuladoId && m.q === questaoId));
  const registro = { q: questaoId, a: letra, ok: acertou, t: Date.now(), o: origem };
  if (simuladoId) registro.s = simuladoId;
  dados.memoria = [...memoria, registro];
  gravarTudo(dados);
}

/**
 * Remove da memória a marcação de uma questão num simulado (o aluno desmarcou).
 * @param {string} simuladoId
 * @param {string} questaoId
 */
export function removerDaMemoria(simuladoId, questaoId) {
  const dados = lerTudo();
  dados.memoria = (dados.memoria || []).filter(m => !(m.s === simuladoId && m.q === questaoId));
  gravarTudo(dados);
}

/**
 * Zera a memória de erros e acertos neste navegador (usado quando o administrador
 * reseta a memória da própria conta; a dos outros alunos é zerada na nuvem).
 * @param {number} resetEm - momento do reset (ms)
 */
export function resetarMemoriaLocal(resetEm = Date.now()) {
  const dados = lerTudo();
  dados.memoria = [];
  dados.memoriaResetadaEm = resetEm;
  gravarTudo(dados);
}

/* ================================================================
   Guia de estudos
   ================================================================ */

/** Dados do guia (perfil, ajustes e planos), ou null se o aluno ainda não respondeu. */
export function lerGuia() {
  return lerTudo().guia || null;
}

/** Grava os dados do guia (objeto completo). */
export function salvarGuia(guia) {
  const dados = lerTudo();
  dados.guia = guia;
  gravarTudo(dados);
}
