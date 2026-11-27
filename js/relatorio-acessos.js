/**
 * relatorio-acessos.js — Relatório de acessos para baixar (só administradores).
 *
 * Gera UM arquivo .html que abre em qualquer navegador, mesmo sem internet, e funciona
 * como um painelzinho: números do período, gráfico, tabela e o botão "Baixar planilha
 * (CSV)" (abre no Excel, no Google Planilhas ou no Power BI).
 *
 * Dois tipos de dados (um relatório pode ter os dois):
 *   - minutos: o ao vivo minuto a minuto (só existe para as últimas 24 horas). No relatório
 *     dá para escolher ver de 1 em 1, 5 em 5, 15 em 15, 30 em 30 ou 60 em 60 minutos, e ele
 *     aponta as subidas bruscas (muita gente entrando de uma vez, como num ataque de robôs).
 *   - periodo: as colunas do Diário (horas), Semanal (dias), Mensal (dias) ou Anual (meses),
 *     com quantos usuários diferentes e quem foram.
 */

const esc = t => String(t ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/**
 * Monta e baixa o relatório.
 * @param {{ titulo: string, subtitulo: string, nomeArquivo: string,
 *   minutos?: { t: number, online: number, quem: string[], entraram: string[], sairam: string[] }[],
 *   periodo?: { rotulos: string[], valores: number[], quem: string[][], total: number, textoTotal: string } }} r
 */
export function baixarRelatorio(r) {
  const dados = {
    titulo: r.titulo,
    subtitulo: r.subtitulo,
    geradoEm: Date.now(),
    minutos: (r.minutos || []).map(m => [m.t, m.online, m.entraram, m.sairam, m.quem]),
    periodo: r.periodo ? { rotulos: r.periodo.rotulos, valores: r.periodo.valores, quem: r.periodo.quem, total: r.periodo.total, textoTotal: r.periodo.textoTotal } : null,
  };
  const html = montarHtml(dados);
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = r.nomeArquivo;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

/* O relatório é uma página independente: estilo e código vão dentro dele. */
function montarHtml(dados) {
  const json = JSON.stringify(dados).replace(/</g, '\\u003c');
  return `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(dados.titulo)}</title>
<style>
  :root { --fundo:#0d1117; --card:#161b22; --borda:#2a313c; --texto:#e6edf3; --fraco:#8b949e; --ouro:#f2b13e; --verde:#3fb950; --vermelho:#f85149; }
  @media (prefers-color-scheme: light) { :root { --fundo:#f6f7f9; --card:#fff; --borda:#d8dee4; --texto:#1f2328; --fraco:#59636e; --ouro:#b7791f; --verde:#1a7f37; --vermelho:#cf222e; } }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--fundo); color: var(--texto); font: 14px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; }
  main { max-width: 1200px; margin: 0 auto; padding: 24px 16px 48px; display: flex; flex-direction: column; gap: 18px; }
  h1 { margin: 0; font-size: 1.5rem; } h2 { margin: 0 0 10px; font-size: 1.1rem; }
  .sub { color: var(--fraco); margin: 2px 0 0; }
  .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 10px; }
  .card { background: var(--card); border: 1px solid var(--borda); border-radius: 12px; padding: 12px 14px; }
  .card span { display: block; color: var(--fraco); font-size: 12px; } .card strong { font-size: 1.35rem; font-variant-numeric: tabular-nums; }
  .card small { color: var(--fraco); }
  section { background: var(--card); border: 1px solid var(--borda); border-radius: 14px; padding: 16px; }
  .barra { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-bottom: 10px; }
  button, select { font: inherit; color: var(--texto); background: var(--fundo); border: 1px solid var(--borda); border-radius: 999px; padding: 6px 14px; cursor: pointer; }
  button[aria-pressed="true"] { background: var(--ouro); color: #111; border-color: var(--ouro); font-weight: 600; }
  svg { width: 100%; height: auto; display: block; }
  .grade { stroke: var(--borda); stroke-dasharray: 2 3; } .eixo { fill: var(--fraco); font-size: 10px; font-family: ui-monospace, monospace; }
  .linha { fill: none; stroke: var(--ouro); stroke-width: 2; stroke-linejoin: round; } .area { fill: var(--ouro); opacity: .12; }
  .entrou { fill: var(--verde); opacity: .75; } .saiu { fill: var(--vermelho); opacity: .6; }
  .legenda { display: flex; flex-wrap: wrap; gap: 14px; color: var(--fraco); font-size: 12px; margin-top: 6px; }
  .legenda i { display: inline-block; width: 12px; height: 12px; border-radius: 3px; vertical-align: -2px; margin-right: 4px; }
  .tabela { max-height: 520px; overflow: auto; border: 1px solid var(--borda); border-radius: 10px; }
  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  th, td { text-align: left; padding: 7px 10px; border-bottom: 1px solid var(--borda); vertical-align: top; }
  th { position: sticky; top: 0; background: var(--card); color: var(--fraco); font-weight: 600; }
  td.n { font-variant-numeric: tabular-nums; white-space: nowrap; }
  td.nomes { color: var(--fraco); font-size: 12px; }
  .alerta { border-color: var(--vermelho); } .alerta h2 { color: var(--vermelho); }
  .ok { color: var(--verde); }
  .rodape { color: var(--fraco); font-size: 12px; text-align: center; }
  @media print { button, select { display: none; } .tabela { max-height: none; } }
</style></head>
<body><main>
  <header><h1 id="titulo"></h1><p class="sub" id="sub"></p></header>
  <div id="conteudo"></div>
  <p class="rodape" id="rodape"></p>
</main>
<script>
const D = ${json};
const $ = s => document.querySelector(s);
const esc = t => String(t ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pad = n => String(n).padStart(2, '0');
const hora = t => { const d = new Date(t); return pad(d.getHours()) + ':' + pad(d.getMinutes()); };
const dataHora = t => { const d = new Date(t); return pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + ' ' + hora(t); };
$('#titulo').textContent = D.titulo;
$('#sub').textContent = D.subtitulo;
$('#rodape').textContent = 'Relatório gerado em ' + new Date(D.geradoEm).toLocaleString('pt-BR') + ' · Sapiens Med';

function svgLinha(valores, rotulos, extras) {
  const L = 1100, A = 300, esq = 34, base = A - 26, alto = 12, n = valores.length;
  const max = Math.max(1, ...valores, ...(extras ? extras.flatMap(e => e.valores) : []));
  const topo = max <= 5 ? 5 : max <= 10 ? 10 : Math.ceil(max / 10) * 10;
  const x = i => esq + (n <= 1 ? 0 : i / (n - 1) * (L - esq - 8));
  const y = v => base - v / topo * (base - alto);
  let s = '';
  [0, .5, 1].forEach(f => { const v = Math.round(topo * f); s += '<line class="grade" x1="' + esq + '" x2="' + L + '" y1="' + y(v) + '" y2="' + y(v) + '"/><text class="eixo" x="' + (esq - 6) + '" y="' + (y(v) + 3) + '" text-anchor="end">' + v + '</text>'; });
  const larg = Math.max(1.5, (L - esq) / Math.max(n, 1) * 0.35);
  (extras || []).forEach((e, k) => e.valores.forEach((v, i) => { if (!v) return; const h = v / topo * (base - alto); s += '<rect class="' + e.classe + '" x="' + (x(i) + (k ? 0 : -larg)) + '" y="' + (base - h) + '" width="' + larg + '" height="' + h + '"><title>' + esc(rotulos[i] + ': ' + v + ' ' + e.nome) + '</title></rect>'; }));
  const d = valores.map((v, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ',' + y(v).toFixed(1)).join(' ');
  if (n) s += '<path class="area" d="' + d + ' L' + x(n - 1) + ',' + base + ' L' + x(0) + ',' + base + ' Z"/><path class="linha" d="' + d + '"/>';
  const cada = Math.max(1, Math.ceil(n / 14));
  rotulos.forEach((r, i) => { if (i === n - 1 || (i % cada === 0 && n - 1 - i >= cada)) s += '<text class="eixo" x="' + x(i) + '" y="' + (A - 6) + '" text-anchor="' + (i === 0 ? 'start' : i === n - 1 ? 'end' : 'middle') + '">' + esc(r) + '</text>'; });
  return '<svg viewBox="0 0 ' + L + ' ' + A + '" role="img">' + s + '</svg>';
}

function baixarCsv(nome, linhas) {
  const csv = '\\ufeff' + linhas.map(l => l.map(c => '"' + String(c ?? '').replace(/"/g, '""') + '"').join(';')).join('\\r\\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  a.download = nome; a.click();
}

let html = '';

/* ---------- minuto a minuto (ao vivo das últimas 24 h) ---------- */
const M = D.minutos.map(([t, online, entraram, sairam, quem]) => ({ t, online, entraram, sairam, quem }));
if (M.length) {
  const todos = new Set(M.flatMap(m => m.quem));
  const pico = M.reduce((a, b) => (b.online > a.online ? b : a), M[0]);
  const media = M.reduce((s, m) => s + m.online, 0) / M.length;
  const variacao5 = M.map((m, i) => ({ t: m.t, d: m.online - (M[Math.max(0, i - 5)].online) }));
  const subida = variacao5.reduce((a, b) => (b.d > a.d ? b : a), variacao5[0]);
  const queda = variacao5.reduce((a, b) => (b.d < a.d ? b : a), variacao5[0]);
  // subidas bruscas: em 5 minutos entrou pelo menos 5 pessoas e 3x a média de online
  const limite = Math.max(5, Math.ceil(media * 3));
  const janelas = [];
  for (let i = 0; i < M.length; i += 5) {
    const bloco = M.slice(i, i + 5);
    const entraram = [...new Set(bloco.flatMap(m => m.entraram))];
    if (entraram.length >= limite) janelas.push({ t: bloco[0].t, entraram, max: Math.max(...bloco.map(m => m.online)) });
  }
  html += '<div class="cards">'
    + '<div class="card"><span>Usuários diferentes</span><strong>' + todos.size + '</strong><small> no período</small></div>'
    + '<div class="card"><span>Pico de online</span><strong>' + pico.online + '</strong><small> às ' + dataHora(pico.t) + '</small></div>'
    + '<div class="card"><span>Média de online</span><strong>' + media.toFixed(1).replace('.', ',') + '</strong></div>'
    + '<div class="card"><span>Maior subida em 5 min</span><strong>+' + Math.max(0, subida.d) + '</strong><small> até ' + dataHora(subida.t) + '</small></div>'
    + '<div class="card"><span>Maior queda em 5 min</span><strong>' + Math.min(0, queda.d) + '</strong><small> até ' + dataHora(queda.t) + '</small></div>'
    + '</div>';
  html += janelas.length
    ? '<section class="alerta"><h2>⚠ Entradas fora do normal</h2><p>Intervalos de 5 minutos em que entraram ' + limite + ' ou mais usuários de uma vez (3× a média). Pode ser um evento normal (uma aula, um aviso no grupo) ou acesso automático (robôs).</p><div class="tabela"><table><thead><tr><th>Início</th><th>Entraram</th><th>Máx. online</th><th>Quem</th></tr></thead><tbody>'
      + janelas.map(j => '<tr><td class="n">' + dataHora(j.t) + '</td><td class="n">' + j.entraram.length + '</td><td class="n">' + j.max + '</td><td class="nomes">' + esc(j.entraram.join(', ')) + '</td></tr>').join('') + '</tbody></table></div></section>'
    : '<section><h2 class="ok">✓ Nenhuma entrada fora do normal</h2><p>Nenhum intervalo de 5 minutos com ' + limite + ' ou mais entradas de uma vez.</p></section>';
  html += '<section><h2>Online ao longo do tempo</h2><div class="barra" id="intervalos">'
    + [1, 5, 15, 30, 60].map(n => '<button type="button" data-min="' + n + '" aria-pressed="' + (n === 5) + '">' + (n === 60 ? '1 hora' : n + ' min') + '</button>').join('')
    + '<button type="button" id="csv-min">Baixar planilha (CSV)</button></div><div id="graf-min"></div>'
    + '<p class="legenda"><span><i style="background:var(--ouro)"></i>máximo online no intervalo</span><span><i style="background:var(--verde)"></i>entraram</span><span><i style="background:var(--vermelho)"></i>saíram</span></p>'
    + '<div class="tabela" id="tab-min"></div></section>';
}

/* ---------- período (Diário, Semanal, Mensal, Anual) ---------- */
const P = D.periodo;
if (P) {
  const pico = Math.max(...P.valores);
  html += '<div class="cards">'
    + '<div class="card"><span>Usuários diferentes</span><strong>' + P.total + '</strong><small> ' + esc(P.textoTotal) + '</small></div>'
    + '<div class="card"><span>Pico</span><strong>' + pico + '</strong><small> ' + (pico ? esc(P.rotulos[P.valores.indexOf(pico)]) : '') + '</small></div>'
    + '<div class="card"><span>Média por coluna</span><strong>' + (P.valores.reduce((a, b) => a + b, 0) / Math.max(1, P.valores.length)).toFixed(1).replace('.', ',') + '</strong></div>'
    + '</div>';
  html += '<section><h2>Usuários ativos</h2><div class="barra"><button type="button" id="csv-per">Baixar planilha (CSV)</button></div>'
    + svgLinha(P.valores, P.rotulos)
    + '<div class="tabela"><table><thead><tr><th>Quando</th><th>Usuários</th><th>Quem</th></tr></thead><tbody>'
    + P.rotulos.map((r, i) => '<tr><td>' + esc(r) + '</td><td class="n">' + P.valores[i] + '</td><td class="nomes">' + esc((P.quem[i] || []).join(', ')) + '</td></tr>').join('')
    + '</tbody></table></div></section>';
}
if (!M.length && !P) html = '<section><p>Sem dados neste período.</p></section>';
$('#conteudo').innerHTML = html;

if (M.length) {
  const desenharMin = passo => {
    const blocos = [];
    for (let i = 0; i < M.length; i += passo) {
      const b = M.slice(i, i + passo);
      blocos.push({ t: b[0].t, max: Math.max(...b.map(m => m.online)), media: b.reduce((s, m) => s + m.online, 0) / b.length,
        entraram: [...new Set(b.flatMap(m => m.entraram))], sairam: [...new Set(b.flatMap(m => m.sairam))] });
    }
    const rot = blocos.map(b => hora(b.t));
    $('#graf-min').innerHTML = svgLinha(blocos.map(b => b.max), rot, [
      { valores: blocos.map(b => b.entraram.length), classe: 'entrou', nome: 'entraram' },
      { valores: blocos.map(b => b.sairam.length), classe: 'saiu', nome: 'saíram' }]);
    $('#tab-min').innerHTML = '<table><thead><tr><th>Início</th><th>Máx. online</th><th>Média</th><th>Entraram</th><th>Saíram</th></tr></thead><tbody>'
      + blocos.slice().reverse().map(b => '<tr><td class="n">' + dataHora(b.t) + '</td><td class="n">' + b.max + '</td><td class="n">' + b.media.toFixed(1).replace('.', ',') + '</td><td class="nomes">'
        + (b.entraram.length ? b.entraram.length + ': ' + esc(b.entraram.join(', ')) : '—') + '</td><td class="nomes">' + (b.sairam.length ? b.sairam.length + ': ' + esc(b.sairam.join(', ')) : '—') + '</td></tr>').join('')
      + '</tbody></table>';
  };
  document.querySelectorAll('[data-min]').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('[data-min]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    desenharMin(Number(b.dataset.min));
  }));
  desenharMin(5);
  $('#csv-min').addEventListener('click', () => baixarCsv('acessos-minuto-a-minuto.csv',
    [['data_hora', 'online', 'entraram', 'sairam', 'quem_entrou', 'quem_saiu', 'quem_estava']].concat(
      M.map(m => [new Date(m.t).toLocaleString('pt-BR'), m.online, m.entraram.length, m.sairam.length, m.entraram.join(', '), m.sairam.join(', '), m.quem.join(', ')]))));
}
if (P) {
  $('#csv-per').addEventListener('click', () => baixarCsv('acessos-periodo.csv',
    [['quando', 'usuarios', 'quem']].concat(P.rotulos.map((r, i) => [r, P.valores[i], (P.quem[i] || []).join(', ')]))));
}
</script>
</body></html>`;
}
