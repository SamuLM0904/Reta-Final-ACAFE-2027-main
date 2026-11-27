/**
 * grafico-questoes.js — Gráfico de questões feitas (certas × erradas) da tela inicial.
 *
 * - htmlGraficoBarras: barras empilhadas (certas embaixo, erradas em cima, dois tons de âmbar).
 * - vincularDica: a janelinha com a proporção de certas e erradas ao passar o mouse (ou Tab).
 * - abrirGraficoAmpliado: janela com ~70% da tela (fundo desfocado) e o gráfico por
 *   semana (uma por vez, com setas) ou por mês.
 * Os dados vêm da memória de erros e acertos (lerMemoria): { q, ok, t }.
 */

import { icone } from './icones.js';
import { chaveDia, somarDias, inicioDaSemana } from './guia-plano.js';

const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
const plural = (n, um, varios) => `${n} ${n === 1 ? um : varios}`;
const pct = (n, total) => (total ? Math.round((n / total) * 100) : 0);

/* ================================================================
   Barras
   ================================================================ */

/**
 * SVG das barras empilhadas.
 * @param {{ rotulo: string, curto?: string, n: number, ok: number }[]} valores - um item por coluna
 * @param {{ largura?: number, altura?: number, eixo?: 'pontas'|'todos', unidade?: string }} opcoes
 *   eixo: 'pontas' = só o primeiro e o último rótulo embaixo; 'todos' = um por coluna
 */
export function htmlGraficoBarras(valores, { largura = 280, altura = 104, eixo = 'pontas', unidade = 'por dia', ultimo = null } = {}) {
  const L = largura, A = altura, base = A - 16, alto = 8;
  const max = Math.max(...valores.map(v => v.n), 1);
  const passo = max <= 10 ? 5 : max <= 50 ? 10 : max <= 200 ? 50 : 100;
  const topo = Math.max(5, Math.ceil(max / passo) * passo);
  const larg = L / valores.length;
  const barra = Math.max(4, Math.min(larg - 4, larg * 0.72, 48));   // no máximo 48: barras de 7 dias não viram blocos
  const raio = Math.min(4, barra / 2);
  const altura0 = base - alto;

  const topoArredondado = (x, y0, y) => `M${x},${y0} V${y + raio} Q${x},${y} ${x + raio},${y} H${x + barra - raio} Q${x + barra},${y} ${x + barra},${y + raio} V${y0} Z`;
  const reto = (x, y0, y) => `M${x},${y0} V${y} H${x + barra} V${y0} Z`;

  const colunas = valores.map((v, i) => {
    const h = v.n ? Math.max(4, (v.n / topo) * altura0) : 0;
    const x = i * larg + (larg - barra) / 2, y = base - h;
    const erradas = v.n - v.ok;
    const yCertas = base - (v.n ? h * (v.ok / v.n) : 0);
    const partes = !h ? ''
      : !erradas ? `<path class="inicio-grafico__certas" d="${topoArredondado(x, base, y)}"/>`
      : !v.ok ? `<path class="inicio-grafico__erradas" d="${topoArredondado(x, base, y)}"/>`
      : `<path class="inicio-grafico__certas" d="${reto(x, base, yCertas)}"/><path class="inicio-grafico__erradas" d="${topoArredondado(x, yCertas, y)}"/>`;
    const descricao = `${v.rotulo}: ${plural(v.n, 'questão', 'questões')}${v.n ? ` (${plural(v.ok, 'certa', 'certas')}, ${plural(erradas, 'errada', 'erradas')})` : ''}`;
    return `<g class="inicio-grafico__coluna" tabindex="0" role="img" aria-label="${descricao}"
      data-rotulo="${v.rotulo}" data-n="${v.n}" data-ok="${v.ok}">
      <rect x="${i * larg}" y="0" width="${larg}" height="${A}" fill="transparent"/>${partes}</g>`;
  }).join('');

  const rotulos = eixo === 'todos'
    ? valores.map((v, i) => `<text x="${i * larg + larg / 2}" y="${A - 2}" text-anchor="middle" class="inicio-grafico__eixo">${v.curto ?? v.rotulo}</text>`).join('')
    : `<text x="0" y="${A - 2}" class="inicio-grafico__eixo">${valores[0].curto ?? valores[0].rotulo}</text>
       <text x="${L}" y="${A - 2}" text-anchor="end" class="inicio-grafico__eixo">${ultimo ?? valores.at(-1).curto ?? valores.at(-1).rotulo}</text>`;

  return `
    <svg viewBox="0 0 ${L} ${A}" class="inicio-grafico__svg" role="group" aria-label="Questões feitas: certas e erradas">
      <line x1="0" y1="${alto}" x2="${L}" y2="${alto}" class="inicio-grafico__grade"/>
      <text x="0" y="${alto - 3}" class="inicio-grafico__eixo">${topo} ${unidade}</text>
      <line x1="0" y1="${alto + altura0 / 2}" x2="${L}" y2="${alto + altura0 / 2}" class="inicio-grafico__grade inicio-grafico__grade--meio"/>
      <line x1="0" y1="${base}" x2="${L}" y2="${base}" class="inicio-grafico__base"/>
      ${colunas}
      ${rotulos}
    </svg>`;
}

/** Legenda das duas cores (certas / erradas). */
export const htmlLegenda = () => `
  <p class="inicio-grafico__legenda" aria-hidden="true">
    <span class="inicio-legenda inicio-legenda--graf-certas">certas</span>
    <span class="inicio-legenda inicio-legenda--graf-erradas">erradas</span>
  </p>`;

/* ================================================================
   Janelinha (mouse ou teclado)
   ================================================================ */

/**
 * Liga a janelinha às barras de `figura` (o elemento que contém o SVG e o .inicio-grafico__dica).
 * Some ao tirar o mouse da barra ou do gráfico; pelo teclado, aparece ao focar com Tab.
 */
export function vincularDica(figura) {
  const dica = figura.querySelector('.inicio-grafico__dica');
  const svg = figura.querySelector('svg');
  if (!dica || !svg) return;
  let atual = null;

  const mostrar = coluna => {
    atual = coluna;
    const n = Number(coluna.dataset.n), ok = Number(coluna.dataset.ok), erradas = n - ok;
    dica.innerHTML = n
      ? `<p class="inicio-grafico__dica-titulo">${coluna.dataset.rotulo} · ${plural(n, 'questão', 'questões')}</p>
         <p class="inicio-grafico__dica-linha"><span class="inicio-legenda inicio-legenda--graf-certas">certas</span>
           <span class="inicio-grafico__dica-num">${ok} · ${pct(ok, n)}%</span></p>
         <p class="inicio-grafico__dica-linha"><span class="inicio-legenda inicio-legenda--graf-erradas">erradas</span>
           <span class="inicio-grafico__dica-num">${erradas} · ${pct(erradas, n)}%</span></p>
         <span class="inicio-grafico__dica-barra" aria-hidden="true">
           <span class="inicio-grafico__dica-certas" style="width: ${pct(ok, n)}%"></span><span class="inicio-grafico__dica-erradas" style="width: ${100 - pct(ok, n)}%"></span>
         </span>`
      : `<p class="inicio-grafico__dica-titulo">${coluna.dataset.rotulo}</p><p class="inicio-grafico__dica-linha">Nenhuma questão</p>`;
    dica.hidden = false;
    // sempre acima da barra, centralizada nela (pode passar por cima do título; nunca cobre as barras)
    const f = figura.getBoundingClientRect(), c = coluna.getBoundingClientRect();
    const largura = dica.offsetWidth, altura = dica.offsetHeight;
    const topos = [...coluna.querySelectorAll('path')].map(p => p.getBoundingClientRect().top);
    const barraTopo = topos.length ? Math.min(...topos) : svg.getBoundingClientRect().bottom - 16;
    dica.style.left = `${Math.max(0, Math.min(c.left - f.left + c.width / 2 - largura / 2, f.width - largura))}px`;
    dica.style.top = `${barraTopo - f.top - altura - 8}px`;
  };
  const esconder = coluna => { if (!coluna || coluna === atual) { dica.hidden = true; atual = null; } };

  svg.querySelectorAll('.inicio-grafico__coluna').forEach(coluna => {
    coluna.addEventListener('pointerenter', () => mostrar(coluna));
    coluna.addEventListener('pointerleave', () => esconder(coluna));
    // pelo teclado (Tab) mostra; o foco do clique do mouse não deixa a janela presa
    coluna.addEventListener('focus', () => { if (coluna.matches(':focus-visible')) mostrar(coluna); });
    coluna.addEventListener('blur', () => esconder(coluna));
    coluna.addEventListener('keydown', e => { if (e.key === 'Escape') esconder(); });
  });
  svg.addEventListener('pointerleave', () => esconder());
}

/* ================================================================
   Dados por período
   ================================================================ */

const diaMes = chave => { const [, m, d] = chave.split('-'); return `${d}/${m}`; };

/** Questões dos últimos `dias` dias, uma coluna por dia. */
export function porDia(memoria, dias = 14) {
  const hoje = chaveDia();
  const chaves = Array.from({ length: dias }, (_, i) => somarDias(hoje, i - dias + 1));
  const mapa = new Map(chaves.map(c => [c, { rotulo: diaMes(c), n: 0, ok: 0 }]));
  memoria.forEach(m => { const v = mapa.get(chaveDia(new Date(m.t))); if (v) { v.n++; if (m.ok) v.ok++; } });
  return chaves.map(c => mapa.get(c));
}

const DIAS_SEMANA = ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom'];

/** Uma semana (segunda a domingo), uma coluna por dia. `inicio` = segunda-feira "AAAA-MM-DD". */
function diasDaSemana(memoria, inicio) {
  const chaves = Array.from({ length: 7 }, (_, i) => somarDias(inicio, i));
  const mapa = new Map(chaves.map((c, i) => [c, { rotulo: `${DIAS_SEMANA[i]}, ${diaMes(c)}`, curto: `${DIAS_SEMANA[i]} ${diaMes(c)}`, n: 0, ok: 0 }]));
  memoria.forEach(m => { const v = mapa.get(chaveDia(new Date(m.t))); if (v) { v.n++; if (m.ok) v.ok++; } });
  return chaves.map(c => mapa.get(c));
}

/** Últimos 12 meses, uma coluna por mês. */
function porMes(memoria) {
  const [a, m] = chaveDia().split('-').map(Number);
  const chaves = Array.from({ length: 12 }, (_, i) => {
    const total = a * 12 + (m - 1) - (11 - i);
    return `${Math.floor(total / 12)}-${String((total % 12) + 1).padStart(2, '0')}`;
  });
  const mapa = new Map(chaves.map(c => {
    const [ano, mes] = c.split('-').map(Number);
    return [c, { rotulo: `${MESES[mes - 1]}/${ano}`, curto: mes === 1 || c === chaves[0] ? `${MESES[mes - 1]}/${String(ano).slice(2)}` : MESES[mes - 1], n: 0, ok: 0 }];
  }));
  memoria.forEach(x => { const v = mapa.get(chaveDia(new Date(x.t)).slice(0, 7)); if (v) { v.n++; if (x.ok) v.ok++; } });
  return chaves.map(c => mapa.get(c));
}

const SEMANAS_ATRAS = 52;   // até quantas semanas dá para voltar

/* ================================================================
   Gráfico ampliado
   ================================================================ */

/**
 * Abre a janela com o gráfico ampliado (~70% da tela, fundo desfocado):
 *   - Semanal: os 7 dias de uma semana, com setas para ir às semanas anteriores e voltar;
 *   - Mensal: os últimos 12 meses.
 * Fecha no X, no Esc ou clicando fora.
 * @param {Object[]} memoria
 */
export function abrirGraficoAmpliado(memoria) {
  const semanaAtual = inicioDaSemana(chaveDia());
  // a semana mais antiga a que dá para voltar: a primeira com respostas (no máximo 52 semanas atrás)
  const maisAntiga = memoria.length ? inicioDaSemana(chaveDia(new Date(Math.min(...memoria.map(m => m.t))))) : semanaAtual;
  const limite = somarDias(semanaAtual, -7 * SEMANAS_ATRAS);
  const primeira = maisAntiga < limite ? limite : maisAntiga;
  let periodo = 'semana', semana = semanaAtual;

  const janela = document.createElement('dialog');
  janela.className = 'grafico-ampliado';
  janela.setAttribute('aria-labelledby', 'grafico-ampliado-titulo');
  janela.innerHTML = `
    <div class="grafico-ampliado__caixa">
      <header class="grafico-ampliado__topo">
        <h2 class="grafico-ampliado__titulo" id="grafico-ampliado-titulo">Questões feitas</h2>
        <button type="button" class="grafico-ampliado__fechar" aria-label="Fechar">${icone('x', 20)}</button>
      </header>
      <div class="grafico-ampliado__barra">
        <div class="grafico-ampliado__abas" role="tablist" aria-label="Período">
          <button type="button" role="tab" class="grafico-ampliado__aba" data-periodo="semana">Semanal</button>
          <button type="button" role="tab" class="grafico-ampliado__aba" data-periodo="mes">Mensal</button>
        </div>
        <div class="grafico-ampliado__navegar" id="grafico-ampliado-navegar">
          <button type="button" class="grafico-ampliado__seta" data-semana="-1" aria-label="Semana anterior">${icone('arrow-left', 18)}</button>
          <span class="grafico-ampliado__semana" id="grafico-ampliado-semana" aria-live="polite"></span>
          <button type="button" class="grafico-ampliado__seta grafico-ampliado__seta--proxima" data-semana="1" aria-label="Próxima semana">${icone('arrow-left', 18)}</button>
        </div>
      </div>
      <div class="grafico-ampliado__resumo" id="grafico-ampliado-resumo"></div>
      <figure class="inicio-grafico grafico-ampliado__grafico" id="grafico-ampliado-figura"></figure>
    </div>`;
  document.body.appendChild(janela);

  const figura = janela.querySelector('#grafico-ampliado-figura');
  const resumo = janela.querySelector('#grafico-ampliado-resumo');
  const navegar = janela.querySelector('#grafico-ampliado-navegar');
  const [anterior, proxima] = navegar.querySelectorAll('[data-semana]');

  const desenhar = () => {
    janela.querySelectorAll('[data-periodo]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.periodo === periodo)));
    const semanal = periodo === 'semana';
    navegar.hidden = !semanal;
    let valores, titulo, unidade;
    if (semanal) {
      valores = diasDaSemana(memoria, semana);
      const intervalo = `${diaMes(semana)} a ${diaMes(somarDias(semana, 6))}`;
      const estaSemana = semana === semanaAtual;
      titulo = estaSemana ? `Esta semana (${intervalo})` : `Semana de ${intervalo}`;
      janela.querySelector('#grafico-ampliado-semana').textContent = estaSemana ? 'Esta semana' : intervalo;
      anterior.disabled = semana <= primeira;
      proxima.disabled = estaSemana;
      unidade = 'por dia';
    } else {
      valores = porMes(memoria);
      titulo = 'Últimos 12 meses';
      unidade = 'por mês';
    }
    const n = valores.reduce((s, v) => s + v.n, 0), ok = valores.reduce((s, v) => s + v.ok, 0);
    resumo.innerHTML = `
      <div class="grafico-ampliado__numero"><span>Feitas</span><strong>${n}</strong></div>
      <div class="grafico-ampliado__numero"><span class="inicio-legenda inicio-legenda--graf-certas">Certas</span><strong>${ok}</strong></div>
      <div class="grafico-ampliado__numero"><span class="inicio-legenda inicio-legenda--graf-erradas">Erradas</span><strong>${n - ok}</strong></div>
      <div class="grafico-ampliado__numero"><span>Acerto</span><strong>${n ? `${pct(ok, n)}%` : '—'}</strong></div>`;
    figura.innerHTML = `
      <figcaption class="inicio-grafico__titulo">${titulo}</figcaption>
      ${htmlGraficoBarras(valores, { largura: 720, altura: 260, eixo: 'todos', unidade })}
      <div class="inicio-grafico__dica" role="tooltip" hidden></div>
      ${htmlLegenda()}`;
    vincularDica(figura);
  };

  janela.querySelectorAll('[data-periodo]').forEach(b => b.addEventListener('click', () => { periodo = b.dataset.periodo; desenhar(); }));
  navegar.querySelectorAll('[data-semana]').forEach(b => b.addEventListener('click', () => {
    semana = somarDias(semana, 7 * Number(b.dataset.semana));
    desenhar();
  }));
  janela.querySelector('.grafico-ampliado__fechar').addEventListener('click', () => janela.close());
  janela.addEventListener('click', e => { if (e.target === janela) janela.close(); });   // clique no fundo
  janela.addEventListener('close', () => janela.remove());
  desenhar();
  janela.showModal();
}
