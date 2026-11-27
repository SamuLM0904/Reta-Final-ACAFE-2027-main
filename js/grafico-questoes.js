/**
 * grafico-questoes.js — Gráfico de questões feitas (certas × erradas) da tela inicial.
 *
 * - htmlGraficoBarras: barras empilhadas (certas embaixo, erradas em cima, dois tons de âmbar).
 * - vincularDica: a janelinha com a proporção de certas e erradas ao passar o mouse (ou Tab).
 * - abrirGraficoAmpliado: janela com ~70% da tela (fundo desfocado) e o gráfico por
 *   semana (domingo a sábado), por mês (as semanas do mês) ou por ano (os 12 meses), com setas.
 * Os dados vêm da memória de erros e acertos (lerMemoria): { q, ok, t }.
 */

import { icone } from './icones.js';
import { chaveDia, somarDias, diaDaSemana } from './guia-plano.js';

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

/* ================================================================
   Períodos do gráfico ampliado: semana (domingo a sábado), mês (as semanas do mês)
   e ano (os 12 meses). Cada um tem uma referência (o domingo, "AAAA-MM" ou "AAAA")
   e as setas andam de uma em uma.
   ================================================================ */

const DIAS_SEMANA = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
const MESES_EXTENSO = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto',
  'setembro', 'outubro', 'novembro', 'dezembro'];
const LIMITE_SEMANAS = 104, LIMITE_MESES = 24, LIMITE_ANOS = 5;   // até onde dá para voltar

/** Domingo da semana de `chave` ("AAAA-MM-DD"). */
const domingoDa = chave => somarDias(chave, -diaDaSemana(chave));
/** "AAAA-MM" somado de n meses. */
const somarMeses = (am, n) => {
  const [a, m] = am.split('-').map(Number);
  const t = a * 12 + (m - 1) + n;
  return `${Math.floor(t / 12)}-${String((t % 12) + 1).padStart(2, '0')}`;
};
const diasNoMes = am => { const [a, m] = am.split('-').map(Number); return new Date(Date.UTC(a, m, 0)).getUTCDate(); };

/** Conta as respostas por dia ("AAAA-MM-DD" → { n, ok }). */
function contarPorDia(memoria) {
  const mapa = new Map();
  memoria.forEach(m => {
    const d = chaveDia(new Date(m.t));
    const v = mapa.get(d) || { n: 0, ok: 0 };
    v.n++; if (m.ok) v.ok++;
    mapa.set(d, v);
  });
  return mapa;
}
const somar = (porDia, dias) => dias.reduce((s, d) => {
  const v = porDia.get(d);
  if (v) { s.n += v.n; s.ok += v.ok; }
  return s;
}, { n: 0, ok: 0 });

const PERIODOS = {
  semana: {
    nome: 'Semanal',
    unidade: 'por dia',
    atual: hoje => domingoDa(hoje),
    andar: (ref, n) => somarDias(ref, 7 * n),
    limite: (atual, primeiraResposta) => {
      const min = somarDias(atual, -7 * LIMITE_SEMANAS);
      const p = primeiraResposta ? domingoDa(primeiraResposta) : atual;
      return p < min ? min : p;
    },
    rotulo: (ref, atual) => {
      const intervalo = `${diaMes(ref)} a ${diaMes(somarDias(ref, 6))}`;
      return ref === atual ? `Esta semana · ${intervalo}` : `Semana de ${intervalo}`;
    },
    colunas: (porDia, ref) => Array.from({ length: 7 }, (_, i) => {
      const d = somarDias(ref, i);
      return { rotulo: `${DIAS_SEMANA[i]}, ${diaMes(d)}`, curto: `${DIAS_SEMANA[i]} ${diaMes(d)}`, ...somar(porDia, [d]) };
    }),
  },
  mes: {
    nome: 'Mensal',
    unidade: 'por semana',
    atual: hoje => hoje.slice(0, 7),
    andar: (ref, n) => somarMeses(ref, n),
    limite: (atual, primeiraResposta) => {
      const min = somarMeses(atual, -LIMITE_MESES);
      const p = primeiraResposta ? primeiraResposta.slice(0, 7) : atual;
      return p < min ? min : p;
    },
    rotulo: (ref, atual) => {
      const [a, m] = ref.split('-').map(Number);
      return `${ref === atual ? 'Este mês · ' : ''}${MESES_EXTENSO[m - 1]} de ${a}`;
    },
    // as semanas (domingo a sábado) que têm dias neste mês; cada uma conta só os dias do mês
    colunas: (porDia, ref) => {
      const primeiro = `${ref}-01`, ultimo = `${ref}-${String(diasNoMes(ref)).padStart(2, '0')}`;
      const semanas = [];
      for (let dom = domingoDa(primeiro); dom <= ultimo; dom = somarDias(dom, 7)) {
        const dias = Array.from({ length: 7 }, (_, i) => somarDias(dom, i)).filter(d => d >= primeiro && d <= ultimo);
        const n = semanas.length + 1;
        semanas.push({ rotulo: `${n}ª semana · ${diaMes(dias[0])} a ${diaMes(dias.at(-1))}`,
          curto: `${diaMes(dias[0])} a ${diaMes(dias.at(-1))}`, ...somar(porDia, dias) });
      }
      return semanas;
    },
  },
  ano: {
    nome: 'Anual',
    unidade: 'por mês',
    atual: hoje => hoje.slice(0, 4),
    andar: (ref, n) => String(Number(ref) + n),
    limite: (atual, primeiraResposta) => {
      const min = String(Number(atual) - LIMITE_ANOS);
      const p = primeiraResposta ? primeiraResposta.slice(0, 4) : atual;
      return p < min ? min : p;
    },
    rotulo: (ref, atual) => (ref === atual ? `Este ano · ${ref}` : ref),
    colunas: (porDia, ref) => MESES.map((nome, i) => {
      const am = `${ref}-${String(i + 1).padStart(2, '0')}`;
      const dias = Array.from({ length: diasNoMes(am) }, (_, k) => `${am}-${String(k + 1).padStart(2, '0')}`);
      return { rotulo: `${MESES_EXTENSO[i]} de ${ref}`, curto: nome, ...somar(porDia, dias) };
    }),
  },
};

/* ================================================================
   Gráfico ampliado
   ================================================================ */

/**
 * Abre a janela com o gráfico ampliado (~70% da tela, fundo desfocado), com as abas
 * Semanal (domingo a sábado), Mensal (as semanas do mês) e Anual (os 12 meses).
 * As setas trocam a semana, o mês ou o ano. Fecha no X, no Esc ou clicando fora.
 * @param {Object[]} memoria
 */
export function abrirGraficoAmpliado(memoria) {
  const hoje = chaveDia();
  const porDia = contarPorDia(memoria);
  const primeiraResposta = memoria.length ? chaveDia(new Date(Math.min(...memoria.map(m => m.t)))) : null;
  let periodo = 'semana';
  const ref = Object.fromEntries(Object.entries(PERIODOS).map(([id, p]) => [id, p.atual(hoje)]));

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
          ${Object.entries(PERIODOS).map(([id, p]) => `<button type="button" role="tab" class="grafico-ampliado__aba" data-periodo="${id}">${p.nome}</button>`).join('')}
        </div>
        <div class="grafico-ampliado__navegar">
          <button type="button" class="grafico-ampliado__seta" data-andar="-1" aria-label="Anterior">${icone('arrow-left', 18)}</button>
          <span class="grafico-ampliado__semana" id="grafico-ampliado-periodo" aria-live="polite"></span>
          <button type="button" class="grafico-ampliado__seta grafico-ampliado__seta--proxima" data-andar="1" aria-label="Próximo">${icone('arrow-left', 18)}</button>
        </div>
      </div>
      <div class="grafico-ampliado__resumo" id="grafico-ampliado-resumo"></div>
      <figure class="inicio-grafico grafico-ampliado__grafico" id="grafico-ampliado-figura"></figure>
    </div>`;
  document.body.appendChild(janela);

  const figura = janela.querySelector('#grafico-ampliado-figura');
  const resumo = janela.querySelector('#grafico-ampliado-resumo');
  const [anterior, proximo] = janela.querySelectorAll('[data-andar]');

  const desenhar = () => {
    const p = PERIODOS[periodo], atual = p.atual(hoje), r = ref[periodo];
    janela.querySelectorAll('[data-periodo]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.periodo === periodo)));
    janela.querySelector('#grafico-ampliado-periodo').textContent = p.rotulo(r, atual);
    anterior.disabled = r <= p.limite(atual, primeiraResposta);
    proximo.disabled = r >= atual;
    const nomes = { semana: ['Semana anterior', 'Próxima semana'], mes: ['Mês anterior', 'Próximo mês'], ano: ['Ano anterior', 'Próximo ano'] }[periodo];
    anterior.setAttribute('aria-label', nomes[0]);
    proximo.setAttribute('aria-label', nomes[1]);

    const valores = p.colunas(porDia, r);
    const n = valores.reduce((s, v) => s + v.n, 0), ok = valores.reduce((s, v) => s + v.ok, 0);
    resumo.innerHTML = `
      <div class="grafico-ampliado__numero"><span>Feitas</span><strong>${n}</strong></div>
      <div class="grafico-ampliado__numero"><span class="inicio-legenda inicio-legenda--graf-certas">Certas</span><strong>${ok}</strong></div>
      <div class="grafico-ampliado__numero"><span class="inicio-legenda inicio-legenda--graf-erradas">Erradas</span><strong>${n - ok}</strong></div>
      <div class="grafico-ampliado__numero"><span>Acerto</span><strong>${n ? `${pct(ok, n)}%` : '—'}</strong></div>`;
    figura.innerHTML = `
      ${htmlGraficoBarras(valores, { largura: 720, altura: 260, eixo: 'todos', unidade: p.unidade })}
      <div class="inicio-grafico__dica" role="tooltip" hidden></div>
      ${htmlLegenda()}`;
    vincularDica(figura);
  };

  janela.querySelectorAll('[data-periodo]').forEach(b => b.addEventListener('click', () => { periodo = b.dataset.periodo; desenhar(); }));
  janela.querySelectorAll('[data-andar]').forEach(b => b.addEventListener('click', () => {
    ref[periodo] = PERIODOS[periodo].andar(ref[periodo], Number(b.dataset.andar));
    desenhar();
  }));
  janela.querySelector('.grafico-ampliado__fechar').addEventListener('click', () => janela.close());
  janela.addEventListener('click', e => { if (e.target === janela) janela.close(); });   // clique no fundo
  janela.addEventListener('close', () => janela.remove());
  desenhar();
  janela.showModal();
}
