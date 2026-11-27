/**
 * grafico-acessos.js — Gráfico de usuários ativos (só administradores, em Configurações ›
 * Administração › Usuários › "Gráfico de acessos").
 *
 * Mesma janela e o mesmo estilo do gráfico de questões feitas (grafico-questoes.js), com as abas:
 *   - Ao vivo: quantos estão online agora. A linha anda a cada 3 segundos (como um gráfico de
 *     bolsa): reta enquanto o número não muda, desce quando alguém sai, sobe quando alguém entra.
 *     Atualiza sozinho (onSnapshot), sem recarregar a página.
 *   - Diário: quantos usaram em cada hora do dia (0h a 23h), em linha.
 *   - Semanal: quantos usaram em cada dia (domingo a sábado).
 *   - Mensal: quantos usaram em cada dia do mês.
 *   - Anual: quantos usaram em cada mês.
 * Nos períodos, a caixinha "Comparar com o período anterior" sobrepõe a linha do período
 * anterior (tracejada). As setas trocam o dia, a semana, o mês ou o ano.
 * Os dados vêm de presenca, atividade e atividadeMes (ver nuvem.js › Acessos).
 */

import { icone } from './icones.js';
import { somarDias, diaDaSemana } from './guia-plano.js';
import { ouvirPresenca, lerAtividade, chavesDeAtividade, lerUltimas24h, limparAoVivoAntigo, listarUsuarios } from './nuvem.js';
import { baixarRelatorio } from './relatorio-acessos.js';
import { escaparHtml } from './utils.js';

const DIAS_SEMANA = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
const MESES_EXTENSO = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto',
  'setembro', 'outubro', 'novembro', 'dezembro'];
const AO_VIVO_PASSO = 3000;      // a linha ao vivo anda a cada 3 s
const AO_VIVO_PONTOS = 100;      // ~5 minutos na tela
const HORAS = Array.from({ length: 24 }, (_, h) => `h${String(h).padStart(2, '0')}`);

const plural = (n, um, varios) => `${n} ${n === 1 ? um : varios}`;
const diaMes = chave => { const [, m, d] = chave.split('-'); return `${d}/${m}`; };
const domingoDa = chave => somarDias(chave, -diaDaSemana(chave));
const somarMeses = (am, n) => {
  const [a, m] = am.split('-').map(Number);
  const t = a * 12 + (m - 1) + n;
  return `${Math.floor(t / 12)}-${String((t % 12) + 1).padStart(2, '0')}`;
};
const diasNoMes = am => { const [a, m] = am.split('-').map(Number); return new Date(Date.UTC(a, m, 0)).getUTCDate(); };
const uniao = listas => new Set(listas.flat()).size;

/* ================================================================
   Linha
   ================================================================ */

/**
 * SVG de uma ou mais linhas sobrepostas.
 * @param {{ valores: number[], classe: string, nome: string }[]} series - a primeira é a principal
 * @param {string[]} rotulos - um por ponto (o eixo mostra alguns)
 * @param {{ largura?: number, altura?: number, dicas?: string[], marcar?: boolean }} op
 */
export function htmlGraficoLinha(series, rotulos, { largura = 720, altura = 260, dicas = [], marcar = true } = {}) {
  const L = largura, A = altura, esq = 28, base = A - 22, alto = 10;
  const n = rotulos.length;
  const max = Math.max(1, ...series.flatMap(s => s.valores));
  const topo = max <= 5 ? 5 : max <= 10 ? 10 : Math.ceil(max / 10) * 10;
  const x = i => esq + (n <= 1 ? 0 : (i / (n - 1)) * (L - esq - 6));
  const y = v => base - (v / topo) * (base - alto);
  const caminho = vals => vals.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const area = vals => `${caminho(vals)} L${x(vals.length - 1).toFixed(1)},${base} L${x(0).toFixed(1)},${base} Z`;
  const cadaQuanto = Math.max(1, Math.ceil(n / 12));
  const grade = [0, 0.5, 1].map(f => {
    const v = Math.round(topo * f);
    return `<line x1="${esq}" y1="${y(v)}" x2="${L}" y2="${y(v)}" class="${f === 0 ? 'inicio-grafico__base' : 'inicio-grafico__grade'}"/>
      <text x="${esq - 6}" y="${y(v) + 3}" text-anchor="end" class="inicio-grafico__eixo">${v}</text>`;
  }).join('');
  const mostrarRotulo = i => i === n - 1 || (i % cadaQuanto === 0 && n - 1 - i >= cadaQuanto);   // o último não encosta no anterior
  const eixoX = rotulos.map((r, i) => (!mostrarRotulo(i) ? ''
    : `<text x="${x(i)}" y="${A - 4}" text-anchor="${i === 0 ? 'start' : i === n - 1 ? 'end' : 'middle'}" class="inicio-grafico__eixo">${r}</text>`)).join('');
  const linhas = series.map((s, k) => `
    ${k === 0 ? `<path d="${area(s.valores)}" class="acessos__area"/>` : ''}
    <path d="${caminho(s.valores)}" class="acessos__linha ${s.classe}"/>`).join('');
  const pontos = marcar ? series[0].valores.map((v, i) => `
    <g class="acessos__ponto" tabindex="0" role="img" aria-label="${escaparHtml(dicas[i] || `${rotulos[i]}: ${v}`)}">
      <rect x="${x(i) - (L / n) / 2}" y="0" width="${L / n}" height="${A}" fill="transparent"/>
      <circle cx="${x(i)}" cy="${y(v)}" r="3.5"/>
      <title>${escaparHtml(dicas[i] || `${rotulos[i]}: ${v}`)}</title>
    </g>`).join('') : '';
  return `<svg viewBox="0 0 ${L} ${A}" class="inicio-grafico__svg acessos__svg" role="group" aria-label="Usuários ativos">
    ${grade}${linhas}${pontos}${eixoX}</svg>`;
}

/* ================================================================
   Períodos
   ================================================================ */

const PERIODOS = {
  dia: {
    nome: 'Diário',
    atual: hoje => hoje,
    andar: (r, n) => somarDias(r, n),
    anterior: r => somarDias(r, -1),
    rotulo: (r, atual) => (r === atual ? `Hoje · ${diaMes(r)}` : r === somarDias(atual, -1) ? `Ontem · ${diaMes(r)}` : `${DIAS_SEMANA[diaDaSemana(r)]}, ${diaMes(r)}`),
    async ler(r) {
      const doc = (await lerAtividade('atividade', r, r)).get(r) || {};
      return {
        rotulos: HORAS.map(h => `${Number(h.slice(1))}h`),
        valores: HORAS.map(h => (doc[h] || []).length),
        quem: HORAS.map(h => doc[h] || []),
        dicas: HORAS.map(h => `${Number(h.slice(1))}h às ${Number(h.slice(1))}h59: ${plural((doc[h] || []).length, 'usuário', 'usuários')}`),
        total: (doc.usuarios || []).length,
        textoTotal: 'usaram neste dia',
      };
    },
  },
  semana: {
    nome: 'Semanal',
    atual: hoje => domingoDa(hoje),
    andar: (r, n) => somarDias(r, 7 * n),
    anterior: r => somarDias(r, -7),
    rotulo: (r, atual) => `${r === atual ? 'Esta semana · ' : 'Semana de '}${diaMes(r)} a ${diaMes(somarDias(r, 6))}`,
    async ler(r) {
      const dias = Array.from({ length: 7 }, (_, i) => somarDias(r, i));
      const docs = await lerAtividade('atividade', dias[0], dias[6]);
      const listas = dias.map(d => docs.get(d)?.usuarios || []);
      return {
        rotulos: dias.map((d, i) => `${DIAS_SEMANA[i]} ${diaMes(d)}`),
        valores: listas.map(l => l.length),
        quem: listas,
        dicas: dias.map((d, i) => `${DIAS_SEMANA[i]}, ${diaMes(d)}: ${plural(listas[i].length, 'usuário', 'usuários')}`),
        total: uniao(listas),
        textoTotal: 'usaram na semana',
      };
    },
  },
  mes: {
    nome: 'Mensal',
    atual: hoje => hoje.slice(0, 7),
    andar: (r, n) => somarMeses(r, n),
    anterior: r => somarMeses(r, -1),
    rotulo: (r, atual) => { const [a, m] = r.split('-').map(Number); return `${r === atual ? 'Este mês · ' : ''}${MESES_EXTENSO[m - 1]} de ${a}`; },
    async ler(r) {
      const dias = Array.from({ length: diasNoMes(r) }, (_, k) => `${r}-${String(k + 1).padStart(2, '0')}`);
      const [docs, mes] = await Promise.all([lerAtividade('atividade', dias[0], dias.at(-1)), lerAtividade('atividadeMes', r, r)]);
      const listas = dias.map(d => docs.get(d)?.usuarios || []);
      return {
        rotulos: dias.map(d => diaMes(d)),
        valores: listas.map(l => l.length),
        quem: listas,
        dicas: dias.map((d, i) => `${diaMes(d)}: ${plural(listas[i].length, 'usuário', 'usuários')}`),
        total: (mes.get(r)?.usuarios || []).length || uniao(listas),
        textoTotal: 'usaram no mês',
      };
    },
  },
  ano: {
    nome: 'Anual',
    atual: hoje => hoje.slice(0, 4),
    andar: (r, n) => String(Number(r) + n),
    anterior: r => String(Number(r) - 1),
    rotulo: (r, atual) => (r === atual ? `Este ano · ${r}` : r),
    async ler(r) {
      const meses = MESES.map((_, i) => `${r}-${String(i + 1).padStart(2, '0')}`);
      const docs = await lerAtividade('atividadeMes', meses[0], meses[11]);
      const listas = meses.map(m => docs.get(m)?.usuarios || []);
      return {
        rotulos: MESES,
        valores: listas.map(l => l.length),
        quem: listas,
        dicas: meses.map((m, i) => `${MESES_EXTENSO[i]}: ${plural(listas[i].length, 'usuário', 'usuários')}`),
        total: uniao(listas),
        textoTotal: 'usaram no ano',
      };
    },
  },
};

/* ================================================================
   Janela
   ================================================================ */

const VISTAS_AO_VIVO = {
  '5min': { nome: '5 min', titulo: 'Ao vivo · últimos 5 minutos' },
  '1h': { nome: '1 hora', titulo: 'Última hora (minuto a minuto)' },
  '24h': { nome: '24 horas', titulo: 'Últimas 24 horas (de 5 em 5 minutos)' },
};

/** Abre a janela do gráfico de acessos (só administradores). */
export function abrirGraficoAcessos() {
  const hoje = chavesDeAtividade().dia;
  let aba = 'vivo';
  let vista = '5min';
  let comparar = false;
  const ref = Object.fromEntries(Object.entries(PERIODOS).map(([id, p]) => [id, p.atual(hoje)]));
  let online = [];
  const nomes = new Map();   // usuário → nome completo
  const amostras = [];       // linha ao vivo: { t, n }
  let pico = 0;
  let ultimoPeriodo = null;  // o que está na tela (para o relatório)
  let cache24h = null;       // { em, minutos }

  const janela = document.createElement('dialog');
  janela.className = 'grafico-ampliado acessos';
  janela.setAttribute('aria-labelledby', 'acessos-titulo');
  janela.innerHTML = `
    <div class="grafico-ampliado__caixa">
      <header class="grafico-ampliado__topo">
        <h2 class="grafico-ampliado__titulo" id="acessos-titulo">Usuários ativos</h2>
        <div class="acessos__topo-acoes">
          <button type="button" class="btn btn-secundario btn-pequeno" id="acessos-relatorio" title="Baixar um relatório deste gráfico">${icone('file-text', 16)} Relatório</button>
          <button type="button" class="grafico-ampliado__fechar" aria-label="Fechar">${icone('x', 20)}</button>
        </div>
      </header>
      <div class="acessos__agora" aria-live="polite">
        <span class="acessos__bolinha" aria-hidden="true"></span>
        <strong id="acessos-online">—</strong> <span id="acessos-online-texto">online agora</span>
        <button type="button" class="login-link" id="acessos-ver-quem" aria-expanded="false">ver quem</button>
      </div>
      <ul class="acessos__quem" id="acessos-quem" hidden></ul>
      <div class="grafico-ampliado__barra">
        <div class="grafico-ampliado__abas" role="tablist" aria-label="Período">
          <button type="button" role="tab" class="grafico-ampliado__aba" data-aba="vivo">Ao vivo</button>
          ${Object.entries(PERIODOS).map(([id, p]) => `<button type="button" role="tab" class="grafico-ampliado__aba" data-aba="${id}">${p.nome}</button>`).join('')}
        </div>
        <div class="acessos__vistas" id="acessos-vistas" role="group" aria-label="Quanto tempo mostrar">
          ${Object.entries(VISTAS_AO_VIVO).map(([id, v]) => `<button type="button" class="acessos__vista" data-vista="${id}">${v.nome}</button>`).join('')}
        </div>
        <div class="grafico-ampliado__navegar" id="acessos-navegar">
          <button type="button" class="grafico-ampliado__seta" data-andar="-1" aria-label="Anterior">${icone('arrow-left', 18)}</button>
          <span class="grafico-ampliado__semana" id="acessos-periodo" aria-live="polite"></span>
          <button type="button" class="grafico-ampliado__seta grafico-ampliado__seta--proxima" data-andar="1" aria-label="Próximo">${icone('arrow-left', 18)}</button>
        </div>
      </div>
      <div class="grafico-ampliado__resumo" id="acessos-resumo"></div>
      <figure class="inicio-grafico grafico-ampliado__grafico" id="acessos-figura"></figure>
      <div class="acessos__rodape">
        <label class="acessos__comparar" id="acessos-comparar-rotulo"><input type="checkbox" id="acessos-comparar"> Comparar com o período anterior</label>
        <p class="acessos__legenda" id="acessos-legenda"></p>
      </div>
      <p class="acessos__aviso" id="acessos-aviso"></p>
    </div>`;
  document.body.appendChild(janela);

  const $ = s => janela.querySelector(s);
  const figura = $('#acessos-figura'), resumo = $('#acessos-resumo');
  const [anterior, proximo] = janela.querySelectorAll('[data-andar]');
  const aviso = texto => { $('#acessos-aviso').textContent = texto || ''; };
  const erroTexto = e => (e?.code === 'permission-denied' ? 'publique o firestore.rules novo no Console do Firebase.' : escaparHtml(e?.message || ''));

  // nomes completos (para "ver quem" e o relatório) e limpeza do ao vivo com mais de 24 h
  listarUsuarios().then(lst => { lst.forEach(c => nomes.set(c.usuario, c.nome)); desenharQuem(); }).catch(() => {});
  limparAoVivoAntigo().catch(() => {});

  // ---- online agora (tempo real) ----
  const desenharQuem = () => {
    $('#acessos-online').textContent = online.length;
    $('#acessos-online-texto').textContent = online.length === 1 ? 'usuário online agora' : 'usuários online agora';
    $('#acessos-quem').innerHTML = online.length
      ? [...online].sort((a, b) => a.usuario.localeCompare(b.usuario)).map(o => `<li><strong>${escaparHtml(nomes.get(o.usuario) || o.usuario)}</strong> <span class="usuarios__usuario">${escaparHtml(o.usuario)}</span></li>`).join('')
      : '<li class="usuarios__fraco">Ninguém online agora.</li>';
  };
  const pararPresenca = ouvirPresenca(lista => { online = lista; desenharQuem(); });
  $('#acessos-ver-quem').addEventListener('click', e => {
    const lista = $('#acessos-quem');
    lista.hidden = !lista.hidden;
    e.target.setAttribute('aria-expanded', String(!lista.hidden));
    e.target.textContent = lista.hidden ? 'ver quem' : 'esconder';
  });

  // ---- ao vivo: uma amostra a cada 3 s ----
  const hora = t => new Date(t).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const horaMin = t => new Date(t).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  const amostrar = () => {
    amostras.push({ t: Date.now(), n: online.length });
    if (amostras.length > AO_VIVO_PONTOS) amostras.shift();
    pico = Math.max(pico, online.length);
    if (aba === 'vivo' && vista === '5min') desenharVivo();
  };

  /** As últimas 24 h do banco (guarda por 1 minuto para não ler de novo a cada clique). */
  const ler24h = async () => {
    if (!cache24h || Date.now() - cache24h.em > 60000) cache24h = { em: Date.now(), minutos: await lerUltimas24h() };
    return cache24h.minutos;
  };

  const desenharVivo = async () => {
    janela.querySelectorAll('[data-vista]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.vista === vista)));
    if (vista === '5min') {
      const pontos = amostras.length >= 2 ? amostras : [{ t: Date.now() - AO_VIVO_PASSO, n: online.length }, ...amostras];
      resumo.innerHTML = `
        <div class="grafico-ampliado__numero"><span>Agora</span><strong>${online.length}</strong></div>
        <div class="grafico-ampliado__numero"><span>Pico desde que abriu</span><strong>${pico}</strong></div>
        <div class="grafico-ampliado__numero"><span>Acompanhando há</span><strong>${Math.max(0, Math.round((Date.now() - (amostras[0]?.t || Date.now())) / 60000))} min</strong></div>`;
      figura.innerHTML = htmlGraficoLinha(
        [{ valores: pontos.map(a => a.n), classe: 'acessos__linha--principal', nome: 'Online' }],
        pontos.map(a => hora(a.t)), { marcar: false });
      $('#acessos-legenda').innerHTML = '<span class="acessos__chave acessos__chave--principal"></span> online · a linha anda a cada 3 segundos';
      return;
    }
    const minha = vista;
    figura.innerHTML = '<p class="configuracoes__info">Carregando...</p>';
    try {
      const todos = await ler24h();
      if (aba !== 'vivo' || vista !== minha) return;
      const minutos = vista === '1h' ? todos.slice(-60) : todos;
      const passo = vista === '1h' ? 1 : 5;
      const blocos = [];
      for (let i = 0; i < minutos.length; i += passo) {
        const b = minutos.slice(i, i + passo);
        blocos.push({ t: b[0].t, n: Math.max(...b.map(m => m.online)), entraram: new Set(b.flatMap(m => m.entraram)).size });
      }
      const picoM = minutos.reduce((a, b) => (b.online > a.online ? b : a), minutos[0] || { online: 0, t: 0 });
      const diferentes = new Set(minutos.flatMap(m => m.quem)).size;
      resumo.innerHTML = `
        <div class="grafico-ampliado__numero"><span>Usuários diferentes</span><strong>${diferentes}</strong></div>
        <div class="grafico-ampliado__numero"><span>Pico</span><strong>${picoM.online}${picoM.online ? ` · ${horaMin(picoM.t)}` : ''}</strong></div>
        <div class="grafico-ampliado__numero"><span>Agora</span><strong>${online.length}</strong></div>`;
      figura.innerHTML = htmlGraficoLinha(
        [{ valores: blocos.map(b => b.n), classe: 'acessos__linha--principal', nome: 'Online' }],
        blocos.map(b => horaMin(b.t)),
        { marcar: vista === '1h', dicas: blocos.map(b => `${horaMin(b.t)}: ${plural(b.n, 'online', 'online')}${b.entraram ? ` · ${b.entraram} entrou(aram)` : ''}`) });
      $('#acessos-legenda').innerHTML = `<span class="acessos__chave acessos__chave--principal"></span> ${VISTAS_AO_VIVO[vista].titulo}`;
    } catch (e) {
      figura.innerHTML = `<p class="configuracoes__info">Não foi possível ler o ao vivo: ${erroTexto(e)}</p>`;
    }
  };
  amostrar();
  const relogio = setInterval(amostrar, AO_VIVO_PASSO);

  // ---- períodos ----
  let pedido = 0;
  const desenharPeriodo = async () => {
    const p = PERIODOS[aba], atual = p.atual(hoje), r = ref[aba];
    $('#acessos-periodo').textContent = p.rotulo(r, atual);
    proximo.disabled = r >= atual;
    const meu = ++pedido;
    figura.innerHTML = '<p class="configuracoes__info">Carregando...</p>';
    try {
      const [dados, antes] = await Promise.all([p.ler(r), comparar ? p.ler(p.anterior(r)) : null]);
      if (meu !== pedido) return;   // trocou de aba ou de período no meio
      ultimoPeriodo = { aba, r, titulo: p.rotulo(r, atual), dados };
      const picoP = Math.max(...dados.valores);
      const ondePico = dados.valores.indexOf(picoP);
      resumo.innerHTML = `
        <div class="grafico-ampliado__numero"><span>Usuários diferentes</span><strong>${dados.total}</strong></div>
        <div class="grafico-ampliado__numero"><span>Pico</span><strong>${picoP ? `${picoP} · ${dados.rotulos[ondePico]}` : '—'}</strong></div>
        ${antes ? `<div class="grafico-ampliado__numero"><span>Período anterior</span><strong>${antes.total}</strong></div>` : ''}`;
      const series = [{ valores: dados.valores, classe: 'acessos__linha--principal', nome: p.rotulo(r, atual) }];
      if (antes) series.push({ valores: dados.valores.map((_, i) => antes.valores[i] ?? 0), classe: 'acessos__linha--anterior', nome: 'Período anterior' });
      figura.innerHTML = htmlGraficoLinha(series, dados.rotulos, { dicas: dados.dicas.map((d, i) => (antes ? `${d} (antes: ${antes.valores[i] ?? 0})` : d)) });
      $('#acessos-legenda').innerHTML = `<span class="acessos__chave acessos__chave--principal"></span> ${dados.textoTotal}${antes ? ' · <span class="acessos__chave acessos__chave--anterior"></span> período anterior' : ''}`;
    } catch (e) {
      if (meu !== pedido) return;
      ultimoPeriodo = null;
      figura.innerHTML = `<p class="configuracoes__info">Não foi possível ler os acessos: ${erroTexto(e)}</p>`;
    }
  };

  const desenhar = () => {
    janela.querySelectorAll('[data-aba]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.aba === aba)));
    const vivo = aba === 'vivo';
    $('#acessos-navegar').hidden = vivo;
    $('#acessos-vistas').hidden = !vivo;
    $('#acessos-comparar-rotulo').hidden = vivo;
    aviso(vivo ? 'O ao vivo fica guardado por 24 horas. Para guardar mais que isso, baixe o relatório.' : '');
    if (vivo) desenharVivo(); else desenharPeriodo();
  };

  // ---- relatório ----
  const comNomes = lista => lista.map(u => (nomes.get(u) ? `${nomes.get(u)} (${u})` : u));
  $('#acessos-relatorio').addEventListener('click', async ev => {
    const btn = ev.currentTarget;
    btn.disabled = true;
    aviso('Montando o relatório...');
    try {
      const agora = new Date();
      const carimbo = `${chavesDeAtividade(agora).dia}_${String(agora.getHours()).padStart(2, '0')}h${String(agora.getMinutes()).padStart(2, '0')}`;
      if (aba === 'vivo') {
        const minutos = (await ler24h()).map(m => ({ ...m, quem: comNomes(m.quem), entraram: comNomes(m.entraram), sairam: comNomes(m.sairam) }));
        baixarRelatorio({
          titulo: 'Acessos · últimas 24 horas',
          subtitulo: `Usuários online minuto a minuto, de ${minutos[0] ? new Date(minutos[0].t).toLocaleString('pt-BR') : '—'} até ${agora.toLocaleString('pt-BR')}.`,
          nomeArquivo: `acessos-24h_${carimbo}.html`,
          minutos,
        });
      } else {
        if (!ultimoPeriodo) throw new Error('espere o gráfico carregar.');
        const { dados, titulo } = ultimoPeriodo;
        // no Diário de hoje ou de ontem, junta o minuto a minuto que ainda está guardado
        let minutos;
        if (aba === 'dia') {
          const [a, m, d] = ultimoPeriodo.r.split('-').map(Number);
          const ini = new Date(a, m - 1, d).getTime(), fim = ini + 24 * 3600 * 1000;
          minutos = (await ler24h()).filter(x => x.t >= ini && x.t < fim)
            .map(x => ({ ...x, quem: comNomes(x.quem), entraram: comNomes(x.entraram), sairam: comNomes(x.sairam) }));
        }
        baixarRelatorio({
          titulo: `Acessos · ${PERIODOS[aba].nome} · ${titulo}`,
          subtitulo: `${dados.total} usuário(s) diferente(s) ${dados.textoTotal}.${minutos?.length ? ' Inclui o minuto a minuto das horas que ainda estão guardadas (últimas 24 h).' : ''}`,
          nomeArquivo: `acessos-${aba}_${ultimoPeriodo.r}_${carimbo}.html`,
          periodo: { ...dados, quem: dados.quem.map(comNomes) },
          minutos,
        });
      }
      aviso('Relatório baixado. Abra o arquivo no navegador; dentro dele há o botão para baixar a planilha (CSV).');
    } catch (e) {
      aviso('Não foi possível montar o relatório: ' + (e?.code === 'permission-denied' ? 'publique o firestore.rules novo no Console do Firebase.' : (e?.message || '')));
    } finally { btn.disabled = false; }
  });

  janela.querySelectorAll('[data-aba]').forEach(b => b.addEventListener('click', () => { aba = b.dataset.aba; desenhar(); }));
  janela.querySelectorAll('[data-vista]').forEach(b => b.addEventListener('click', () => { vista = b.dataset.vista; desenharVivo(); }));
  janela.querySelectorAll('[data-andar]').forEach(b => b.addEventListener('click', () => {
    ref[aba] = PERIODOS[aba].andar(ref[aba], Number(b.dataset.andar));
    desenhar();
  }));
  $('#acessos-comparar').addEventListener('change', e => { comparar = e.target.checked; desenhar(); });
  $('.grafico-ampliado__fechar').addEventListener('click', () => janela.close());
  janela.addEventListener('click', e => { if (e.target === janela) janela.close(); });
  janela.addEventListener('close', () => { pararPresenca(); clearInterval(relogio); janela.remove(); });
  desenhar();
  janela.showModal();
}
