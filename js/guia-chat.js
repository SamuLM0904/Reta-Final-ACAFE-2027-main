/**
 * guia-chat.js — Entende o pedido do aluno no chat do Guia de Estudos.
 *
 * Transforma frases como "vou viajar de sexta a domingo", "dia 14 só consigo 2h",
 * "tenho simulado do cursinho no sábado" ou "passa o simulado para domingo" em
 * MUDANÇAS no formato de guia-plano.js (aplicarMudancas / avaliarMudancas).
 *
 * interpretarPedido(texto, hoje) usa um interpretador local (regras, sem custo).
 * A análise de se a mudança faz sentido e das consequências é sempre do
 * guia-plano.js — o interpretador só traduz o pedido.
 * Para trocar por uma IA, basta outra função que devolva o mesmo formato.
 */

import { somarDias, diaDaSemana, inicioDaSemana, chaveDia, DURACAO_SIMULADO, dataCurta, formatarHoras } from './guia-plano.js';

const semAcento = t => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const DIAS_SEMANA = { domingo: 0, segunda: 1, terca: 2, quarta: 3, quinta: 4, sexta: 5, sabado: 6 };
const MESES = { janeiro: 1, fevereiro: 2, marco: 3, abril: 4, maio: 5, junho: 6, julho: 7, agosto: 8,
  setembro: 9, outubro: 10, novembro: 11, dezembro: 12 };
const NUMEROS = { uma: 1, um: 1, duas: 2, dois: 2, tres: 3, quatro: 4, cinco: 5, seis: 6, sete: 7, oito: 8,
  nove: 9, dez: 10, onze: 11, doze: 12 };

const RE_SEMANA = '(domingo|segunda|terca|quarta|quinta|sexta|sabado)(?:[- ]feira)?';
const RE_DATA = '(\\d{1,2})(?:\\s*\\/\\s*(\\d{1,2})|\\s+de\\s+(janeiro|fevereiro|marco|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro))?';

/** Dia "AAAA-MM-DD" a partir de dia e mês (mês opcional: o próximo dia com esse número). */
function dataDoNumero(hoje, dia, mes) {
  const [ano, mesHoje, diaHoje] = hoje.split('-').map(Number);
  let a = ano, m = mes || mesHoje;
  if (!mes && dia < diaHoje) m++;
  if (mes && (m < mesHoje || (m === mesHoje && dia < diaHoje))) a++;
  if (m > 12) { m = 1; a++; }
  const chave = `${a}-${String(m).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
  return chaveDia(new Date(`${chave}T12:00:00-03:00`)) === chave ? chave : null;   // descarta 31/11 etc.
}

/** Próximo dia da semana (hoje conta; "que vem"/"próximo" pula para a semana seguinte se for hoje). */
function proximoDiaDaSemana(hoje, alvo, proximo = false) {
  let n = (alvo - diaDaSemana(hoje) + 7) % 7;
  if (n === 0 && proximo) n = 7;
  return somarDias(hoje, n);
}

const intervalo = (de, ate) => {
  const dias = [];
  for (let d = de; d <= ate && dias.length < 60; d = somarDias(d, 1)) dias.push(d);
  return dias;
};

/**
 * Encontra as datas citadas no texto, na ordem em que aparecem.
 * @returns {{ dias: string[], alvo: string|null }} alvo = data depois de "para/pra/pro" (mover simulado)
 */
export function encontrarDatas(t, hoje) {
  const achados = [];   // { pos, dias }
  const ocupado = [];
  const livre = (i, f) => !ocupado.some(([a, b]) => i < b && f > a);
  const marcar = (re, fn) => {
    for (const m of t.matchAll(re)) {
      if (!livre(m.index, m.index + m[0].length)) continue;
      const dias = fn(m);
      if (dias?.length) { achados.push({ pos: m.index, dias, texto: m[0] }); ocupado.push([m.index, m.index + m[0].length]); }
    }
  };
  const umaData = (d, mesNum, mesNome) => dataDoNumero(hoje, Number(d), mesNum ? Number(mesNum) : MESES[mesNome]);
  const umDia = (nome, proximo) => proximoDiaDaSemana(hoje, DIAS_SEMANA[nome], proximo);

  // Intervalos de datas: "do dia 7 ao 9", "de 7 a 9 de novembro", "entre 7/11 e 9/11"
  marcar(new RegExp(`(?:do dia|dos dias|de|entre o dia|entre)\\s+${RE_DATA}\\s+(?:ao|a|ate o|ate|e o|e)\\s+(?:dia\\s+)?${RE_DATA}`, 'g'), m => {
    const fim = umaData(m[4], m[5], m[6]);
    const mesFim = m[5] ? Number(m[5]) : MESES[m[6]];
    const ini = umaData(m[1], m[2] || (mesFim && !m[3] ? mesFim : undefined), m[3]);
    return ini && fim && ini <= fim ? intervalo(ini, fim) : null;
  });
  // Intervalos de dias da semana: "de sexta a domingo"
  marcar(new RegExp(`(?:de|da|do|entre)\\s+${RE_SEMANA}\\s+(?:a|ao|ate|e)\\s+(?:o\\s+|a\\s+)?${RE_SEMANA}`, 'g'), m => {
    const ini = umDia(m[1]);
    let fim = proximoDiaDaSemana(ini, DIAS_SEMANA[m[2]]);
    return intervalo(ini, fim);
  });
  marcar(/semana que vem|proxima semana/g, () => {
    const seg = somarDias(inicioDaSemana(hoje), 7);
    return intervalo(seg, somarDias(seg, 6));
  });
  marcar(/(?:esse|este|neste|nesse|no|o|proximo)?\s*(?:fim|final) de semana(?: que vem)?/g, m => {
    const proximo = /proximo|que vem/.test(m[0]);
    const sab = proximoDiaDaSemana(hoje, 6, proximo && diaDaSemana(hoje) === 6);
    return diaDaSemana(hoje) === 0 && !proximo ? [hoje] : [sab, somarDias(sab, 1)];
  });
  marcar(/depois de amanha/g, () => [somarDias(hoje, 2)]);
  marcar(/amanha/g, () => [somarDias(hoje, 1)]);
  marcar(/\bhoje\b/g, () => [hoje]);
  marcar(new RegExp(`(?:(proxim[oa]|ess[ea]|est[ea]|n[oa])\\s+)?${RE_SEMANA}(\\s+que vem)?`, 'g'),
    m => [umDia(m[2], m[1]?.startsWith('proxim') || Boolean(m[3]))]);
  // Datas soltas: "dia 7", "dias 7 e 8", "7/11", "7 de novembro"
  marcar(/dias?\s+(\d{1,2})((?:\s*(?:,|e)\s*\d{1,2})*)(?:\s*\/\s*(\d{1,2})|\s+de\s+([a-z]+))?/g, m => {
    const nums = [m[1], ...(m[2].match(/\d{1,2}/g) || [])];
    return nums.map(n => umaData(n, m[3], MESES[m[4]] ? m[4] : undefined)).filter(Boolean);
  });
  marcar(new RegExp(RE_DATA, 'g'), m => (m[2] || m[3] ? [umaData(m[1], m[2], m[3])].filter(Boolean) : null));

  achados.sort((a, b) => a.pos - b.pos);
  const alvoAchado = achados.find(a => /\b(?:para|pra|pro|p\/)\s*(?:o\s+|a\s+)?(?:dia\s+)?$/.test(t.slice(Math.max(0, a.pos - 14), a.pos)));
  return { dias: [...new Set(achados.flatMap(a => a.dias))], alvo: alvoAchado ? alvoAchado.dias[0] : null };
}

/** Duração citada no texto, em minutos (null se não houver). Ex.: "2h", "1h30", "duas horas", "meia hora", "40 minutos". */
export function encontrarDuracao(t) {
  let m = t.match(/(\d{1,2})\s*h(?:oras?)?\s*(?:e\s*)?(\d{1,2})\s*(?:min(?:utos)?)?\b/);
  if (m && m[2]) return Number(m[1]) * 60 + Number(m[2]);
  m = t.match(/(\d{1,2}(?:[.,]5)?)\s*(?:h\b|hs\b|horas?\b)/);
  if (m) return Math.round(parseFloat(m[1].replace(',', '.')) * 60);
  m = t.match(new RegExp(`\\b(${Object.keys(NUMEROS).join('|')})\\s+horas?\\b(\\s+e\\s+meia)?`));
  if (m) return NUMEROS[m[1]] * 60 + (m[2] ? 30 : 0);
  if (/\bmeia hora\b/.test(t)) return 30;
  m = t.match(/(\d{1,3})\s*min(?:utos)?\b/);
  if (m) return Number(m[1]);
  return null;
}

/**
 * Interpreta o pedido do aluno.
 * @param {string} texto
 * @param {string} hoje - "AAAA-MM-DD"
 * @returns {{ mudancas: Object[], entendido: string[], duvida: string|null }}
 */
export function interpretarPedido(texto, hoje) {
  const t = semAcento(texto).replace(/\s+/g, ' ').trim();
  const { dias, alvo } = encontrarDatas(t, hoje);
  const duracao = encontrarDuracao(t);
  const mudancas = [], entendido = [];
  const lista = ds => ds.map(dataCurta).join(', ');

  const falaSimulado = /simulad/.test(t);
  const externo = falaSimulado && /(cursinho|extern|escola|colegio|outro lugar|fora|presencial|da minha|do meu)/.test(t);
  const mover = falaSimulado && !externo && /(mov|mud|pass|troc|transfer|adiant|adi[ae]|remarc|reagend|fa(zer|co|rei)\s+(o\s+|um\s+|meu\s+)?simulad)/.test(t);
  const restaurar = /(volt\w* ao normal|desfaz|cancel\w* (a|o) (mudanca|ajuste|folga|viagem)|tempo normal|como era antes)/.test(t);
  const folga = /(viaj|viagem|folga|nao (vou|vai) (poder |conseguir |dar pra |dar para )?estudar|sem estudar|nao vou ter tempo|nao (consigo|da pra|da para) estudar|descans|festa|casamento|aniversario|doente|ferias|feriado|consulta|enterro|velorio|formatura|show|praia|passeio|acampa|sitio|chacara|trabalh|plantao|prova d[ao] (escola|colegio)|compromisso|evento|vou sair)/.test(t);
  const limiteForte = /\b(so|somente|apenas|no maximo)\b/.test(t);
  const limite = limiteForte || /\b(consigo|conseguirei|vou estudar|da pra estudar|da para estudar|tenho)\b/.test(t);
  const mais = /\b(a mais|mais|extra|aumentar|aumenta)\b/.test(t);
  const menos = /\b(a menos|menos|diminuir|diminui|reduzir|reduz)\b/.test(t);

  if (!dias.length) {
    return { mudancas, entendido, duvida: 'Não encontrei a data. Diga o dia (ex.: "dia 14", "sábado", "de 7 a 9 de novembro", "fim de semana").' };
  }

  if (externo) {
    const dia = dias[0];
    mudancas.push({ tipo: 'simulado-externo', dia, minutos: duracao || DURACAO_SIMULADO });
    entendido.push(`Simulado externo em ${dataCurta(dia)} (${formatarHoras(duracao || DURACAO_SIMULADO)}).`);
  } else if (mover) {
    const para = alvo || dias[dias.length - 1];
    mudancas.push({ tipo: 'mover-simulado', para });
    entendido.push(`Fazer o simulado da semana em ${dataCurta(para)}.`);
  } else if (restaurar) {
    mudancas.push({ tipo: 'restaurar', dias });
    entendido.push(`Voltar ao tempo normal em ${lista(dias)}.`);
  } else if (duracao !== null && (mais || menos) && !limiteForte) {
    const delta = menos ? -duracao : duracao;
    mudancas.push({ tipo: 'ajuste', dias, delta });
    entendido.push(`Estudar ${formatarHoras(duracao)} ${menos ? 'a menos' : 'a mais'} em ${lista(dias)}.`);
  } else if (duracao !== null && (limite || folga)) {
    mudancas.push({ tipo: 'minutos', dias, minutos: duracao });
    entendido.push(`Estudar só ${formatarHoras(duracao)} em ${lista(dias)}.`);
  } else if (folga) {
    mudancas.push({ tipo: 'minutos', dias, minutos: 0 });
    entendido.push(`Não estudar em ${lista(dias)}.`);
  } else if (duracao !== null) {
    mudancas.push({ tipo: 'minutos', dias, minutos: duracao });
    entendido.push(`Estudar ${formatarHoras(duracao)} em ${lista(dias)}.`);
  } else {
    return { mudancas, entendido, duvida: `Entendi a data (${lista(dias)}), mas não o que muda. Diga, por exemplo: "vou viajar", "só consigo 2h", "1h a mais", "simulado do cursinho" ou "passa o simulado para esse dia".` };
  }
  return { mudancas, entendido, duvida: null };
}
