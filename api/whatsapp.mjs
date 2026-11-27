/**
 * api/whatsapp.mjs — Recebedor do WhatsApp das pendências (função do Vercel, endereço /api/whatsapp).
 *
 * Funciona como um "grupo" entre os sócios: quem manda mensagem para o número do sistema
 * tem a pendência guardada na planilha (aba "WhatsApp") e o outro sócio é avisado.
 *
 * Comandos (maiúsculas e acentos não importam):
 *   qualquer texto      → nova pendência
 *   lista               → pendências abertas
 *   feito 12            → marca a nº 12 como feita (e avisa o outro)
 *   reabre 12           → volta a nº 12 para aberta
 *   apaga 12            → remove a nº 12 da lista
 *   ajuda               → mostra os comandos
 *
 * Variáveis de ambiente (Vercel › Settings › Environment Variables; NUNCA no código):
 *   WHATSAPP_TOKEN        chave permanente do usuário do sistema (Meta)
 *   WHATSAPP_PHONE_ID     identificação do número de telefone (Meta)
 *   WHATSAPP_VERIFY       palavra-senha combinada para ligar o webhook (você inventa)
 *   WHATSAPP_APP_SECRET   "chave secreta do app" (Meta › Configurações do app › Básico)
 *   WHATSAPP_PERMITIDOS   quem pode usar: "5547999990000=Samuel,5547988880000=Jefferson"
 *   PLANILHA_URL          endereço /exec da ponte do Google Apps Script
 *   PLANILHA_SENHA        senha da ponte
 *
 * Só os números de WHATSAPP_PERMITIDOS são atendidos; qualquer outro é ignorado em silêncio.
 * A planilha (aba "WhatsApp"): A nº · B data · C quem · D texto · E status · F id da mensagem.
 */

import crypto from 'node:crypto';

export const config = { api: { bodyParser: false } };

const ABA = 'WhatsApp';
const GRAPH = 'https://graph.facebook.com/v21.0';

/* ---------------- utilidades ---------------- */

const semAcento = t => String(t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

function lerCorpo(req) {
  return new Promise((resolve, reject) => {
    const partes = [];
    req.on('data', p => partes.push(p));
    req.on('end', () => resolve(Buffer.concat(partes)));
    req.on('error', reject);
  });
}

/** Confere a assinatura que a Meta coloca em cada chamada (prova que a mensagem veio dela). */
export function assinaturaValida(corpo, cabecalho, segredo) {
  if (!segredo) return false;
  const esperada = 'sha256=' + crypto.createHmac('sha256', segredo).update(corpo).digest('hex');
  const a = Buffer.from(esperada), b = Buffer.from(String(cabecalho || ''));
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

/** "5547999990000=Samuel,5547988880000=Jefferson" → Map(número → nome). */
export function lerPermitidos(texto) {
  const mapa = new Map();
  String(texto || '').split(',').forEach(par => {
    const [numero, nome] = par.split('=').map(x => (x || '').trim());
    if (numero) mapa.set(numero.replace(/\D/g, ''), nome || numero);
  });
  return mapa;
}

/* ---------------- planilha (ponte do Apps Script) ---------------- */

async function ponte(pedido) {
  const r = await fetch(process.env.PLANILHA_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ senha: process.env.PLANILHA_SENHA, ...pedido }),
    redirect: 'follow',
  });
  const dados = await r.json();
  if (dados.erro) throw new Error(dados.erro);
  return dados;
}

/** Linhas da aba (sem o cabeçalho): { linha, n, data, quem, texto, status, id }. */
async function lerPendencias() {
  const { valores } = await ponte({ acao: 'ler', aba: ABA });
  return valores.slice(1).map((v, i) => ({
    linha: i + 2, n: Number(v[0]) || i + 1, data: v[1] || '', quem: v[2] || '', texto: v[3] || '', status: v[4] || 'aberta', id: v[5] || '',
  })).filter(p => p.texto);
}

const agora = () => new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });

/* ---------------- WhatsApp ---------------- */

async function enviar(para, texto) {
  const r = await fetch(`${GRAPH}/${process.env.WHATSAPP_PHONE_ID}/messages`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ messaging_product: 'whatsapp', to: para, type: 'text', text: { body: texto, preview_url: false } }),
  });
  if (!r.ok) console.warn('[whatsapp] falha ao enviar para', para, r.status, await r.text().catch(() => ''));
  return r.ok;
}

const AJUDA = `*Pendências do Sapiens Med*
• escreva qualquer coisa → vira uma pendência
• *lista* → pendências abertas
• *feito 12* → marca a nº 12 como feita
• *reabre 12* → volta a nº 12 para aberta
• *apaga 12* → remove a nº 12`;

const linhaDe = p => `${p.n}. ${p.texto} _(${p.quem}, ${p.data})_`;

function textoDaLista(pendencias) {
  const abertas = pendencias.filter(p => p.status === 'aberta');
  if (!abertas.length) return '✅ Nenhuma pendência aberta.';
  return `*Pendências abertas (${abertas.length})*\n` + abertas.map(linhaDe).join('\n');
}

/**
 * Trata uma mensagem de texto de um sócio.
 * @returns {Promise<{ resposta: string, avisar?: string }>} resposta para quem mandou e
 *   (opcional) o aviso para o outro sócio.
 */
export async function tratarMensagem({ texto, quem, idMensagem }) {
  const bruto = String(texto || '').trim();
  const t = semAcento(bruto);
  if (!t) return { resposta: AJUDA };

  const pendencias = await lerPendencias();
  if (idMensagem && pendencias.some(p => p.id === idMensagem)) return { resposta: null };   // a Meta repetiu a entrega

  if (['ajuda', 'help', '?', 'comandos', 'oi', 'ola'].includes(t)) return { resposta: AJUDA };
  if (['lista', 'listar', 'pendencias', 'abertas'].includes(t)) return { resposta: textoDaLista(pendencias) };

  const m = t.match(/^(feito|feita|pronto|concluido|concluida|reabre|reabrir|apaga|apagar|remove|remover)\s+#?(\d+)$/);
  if (m) {
    const acao = m[1], n = Number(m[2]);
    const p = pendencias.find(x => x.n === n);
    if (!p || p.status === 'apagada') return { resposta: `Não achei a pendência ${n}. Mande *lista* para ver os números.` };
    const novo = /^(feit|pront|conclu)/.test(acao) ? 'feita' : /^reabr/.test(acao) ? 'aberta' : 'apagada';
    await ponte({ acao: 'escrever', aba: ABA, celula: `E${p.linha}`, valores: [[novo]] });
    const verbo = { feita: '✅ feita', aberta: '↩️ reaberta', apagada: '🗑️ apagada' }[novo];
    return { resposta: `Pendência ${n} ${verbo}: ${p.texto}`, avisar: `${quem} marcou a pendência ${n} como ${verbo.replace(/^\S+\s/, '')}: ${p.texto}` };
  }

  // qualquer outro texto: nova pendência
  const n = pendencias.reduce((mx, p) => Math.max(mx, p.n), 0) + 1;
  await ponte({ acao: 'acrescentar', aba: ABA, linha: [String(n), agora(), quem, bruto, 'aberta', idMensagem || ''] });
  return {
    resposta: `📝 Pendência *${n}* anotada: ${bruto}`,
    avisar: `📝 ${quem} anotou a pendência *${n}*: ${bruto}`,
  };
}

/* ---------------- a função do Vercel ---------------- */

export default async function handler(req, res) {
  // 1) A Meta confere o endereço uma vez, ao ligar o webhook
  if (req.method === 'GET') {
    const { 'hub.mode': modo, 'hub.verify_token': senha, 'hub.challenge': desafio } = req.query || {};
    if (modo === 'subscribe' && process.env.WHATSAPP_VERIFY && senha === process.env.WHATSAPP_VERIFY) return res.status(200).send(desafio);
    return res.status(403).send('proibido');
  }
  if (req.method !== 'POST') return res.status(405).send('método não permitido');

  // 2) Mensagens: só aceita o que vem assinado pela Meta
  const corpo = await lerCorpo(req);
  if (!assinaturaValida(corpo, req.headers['x-hub-signature-256'], process.env.WHATSAPP_APP_SECRET)) return res.status(401).send('assinatura inválida');

  try {
    const permitidos = lerPermitidos(process.env.WHATSAPP_PERMITIDOS);
    const evento = JSON.parse(corpo.toString('utf8'));
    const mensagens = (evento.entry || []).flatMap(e => (e.changes || []).flatMap(c => c.value?.messages || []));
    for (const msg of mensagens) {
      const quem = permitidos.get(String(msg.from).replace(/\D/g, ''));
      if (!quem) continue;                                        // número desconhecido: ignora
      if (msg.type !== 'text') { await enviar(msg.from, 'Por enquanto só entendo texto. Mande *ajuda* para ver os comandos.'); continue; }
      const { resposta, avisar } = await tratarMensagem({ texto: msg.text?.body, quem, idMensagem: msg.id });
      if (resposta) await enviar(msg.from, resposta);
      if (avisar) for (const [numero] of permitidos) if (numero !== String(msg.from).replace(/\D/g, '')) await enviar(numero, avisar);
    }
  } catch (e) {
    console.error('[whatsapp] erro:', e);   // mesmo com erro respondemos 200: a Meta reenviaria a mesma mensagem sem parar
  }
  return res.status(200).send('ok');
}
