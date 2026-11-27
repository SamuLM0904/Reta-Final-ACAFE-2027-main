/**
 * cronometro-questao.js — Tempo que o aluno passa de fato em cada questão.
 *
 * Conta só com a página à vista e focada: pausa quando ele troca de aba, minimiza a janela,
 * vai para outro programa, o computador entra em descanso ou a tela do celular apaga, e volta
 * a contar quando ele volta. NÃO usa "tempo sem mexer o mouse" (uma questão difícil pode
 * pedir vários minutos só pensando).
 *
 * O tempo é guardado na memória de erros e acertos (campo `d`, em segundos) e serve para a
 * classificação da dificuldade das questões. Os cortes de extremos (menos de 10 s ou mais de
 * 3× o tempo estimado para o nível da questão) são aplicados NA HORA DO CÁLCULO
 * (tempoValidoParaDificuldade), para a regra poder mudar sem perder os dados.
 */

const acumulado = new Map();   // id da questão → milissegundos já contados
let atual = null;              // questão na tela
let desde = null;              // desde quando está contando (null = pausado)

const aVista = () => document.visibilityState === 'visible' && document.hasFocus();

function pausar() {
  if (atual && desde !== null) {
    acumulado.set(atual, (acumulado.get(atual) || 0) + (Date.now() - desde));
    desde = null;
  }
}

function retomar() {
  if (atual && desde === null && aVista()) desde = Date.now();
}

if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', () => (document.hidden ? pausar() : retomar()));
  window.addEventListener('blur', pausar);
  window.addEventListener('focus', retomar);
  window.addEventListener('pagehide', pausar);
}

/** Começa (ou continua) a contar o tempo desta questão; a anterior para de contar. */
export function cronometrarQuestao(id) {
  if (id === atual) { retomar(); return; }
  pausar();
  atual = id;
  retomar();
}

/** Tempo contado até agora nesta questão, em milissegundos. */
export function tempoNaQuestao(id) {
  let t = acumulado.get(id) || 0;
  if (id === atual && desde !== null) t += Date.now() - desde;
  return t;
}

/** Para de contar (ao sair da tela de questões). */
export function pararCronometro() {
  pausar();
  atual = null;
}

/* ---------------- Cortes de extremos (usados no cálculo da dificuldade) ---------------- */

/** Minutos estimados por nível (os mesmos do Guia; js/guia-plano.js › MINUTOS_POR_DIFICULDADE). */
const MINUTOS_ESTIMADOS = { 'muito-facil': 2, facil: 2.5, media: 3, dificil: 3.5, 'muito-dificil': 4.5 };
export const TEMPO_MINIMO_S = 10;   // menos que isso: provavelmente chute ou clique sem querer
export const FATOR_MAXIMO = 3;      // mais que 3× o estimado para o nível: provavelmente saiu de perto

/**
 * O tempo de uma resposta entra no cálculo da dificuldade? (A resposta continua valendo para
 * acerto e erro; só o tempo dela fica de fora.)
 * @param {number} segundos
 * @param {string} [dificuldade] - nível atual da questão ('facil', 'media', 'dificil'...)
 */
export function tempoValidoParaDificuldade(segundos, dificuldade = 'media') {
  if (!(segundos >= TEMPO_MINIMO_S)) return false;
  const estimado = (MINUTOS_ESTIMADOS[dificuldade] || MINUTOS_ESTIMADOS.media) * 60;
  return segundos <= estimado * FATOR_MAXIMO;
}
