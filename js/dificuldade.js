/**
 * dificuldade.js — Etiqueta de dificuldade das questões, depois de respondidas.
 *
 * Um botão geral "Mostrar dificuldade" (embaixo da resposta, no banco de questões, na
 * correção de erros e na revisão do simulado) liga ou desliga, para todas as questões, uma
 * etiqueta com o nível da questão. A escolha fica guardada neste navegador.
 *
 * Por enquanto o nível é a classificação inicial (marcada à mão). Quando houver respostas
 * suficientes, ele virá do cálculo coletivo (taxa de acerto, tempo relativo e motivo dos
 * erros; ver PENDENCIAS.md).
 *
 * SÓ PARA ADMINISTRADORES: a etiqueta mostra também por quantos alunos a questão foi feita
 * (para ter noção de quão confiável é a dificuldade). Os dados técnicos não aparecem para
 * os alunos; o banco também só deixa administradores lerem os dados de todos (firestore.rules).
 */

import { icone } from './icones.js';
import { eAdmin, lerMemoriasAlunos } from './nuvem.js';

const CHAVE = 'acafe2027:mostrar-dificuldade';
const NOMES = { 'muito-facil': 'Muito fácil', facil: 'Fácil', media: 'Médio', dificil: 'Difícil', 'muito-dificil': 'Muito difícil' };

const ligado = () => { try { return localStorage.getItem(CHAVE) === '1'; } catch { return false; } };
const aplicarEstado = (sim = ligado()) => {
  if (sim) document.documentElement.dataset.mostrarDificuldade = '';
  else delete document.documentElement.dataset.mostrarDificuldade;
};
if (typeof document !== 'undefined') aplicarEstado();

/** HTML do botão geral e da etiqueta da questão (vai na área da resposta). */
export function htmlDificuldade(questao) {
  const nivel = NOMES[questao.dificuldade] || 'Médio';
  return `
    <div class="dificuldade" data-dificuldade-questao="${questao.id}">
      <button type="button" class="dificuldade__botao" data-alternar-dificuldade aria-pressed="${ligado()}">
        ${icone('bar-chart', 14)}<span>${ligado() ? 'Ocultar dificuldade' : 'Mostrar dificuldade'}</span>
      </button>
      <span class="dificuldade__etiqueta dificuldade__etiqueta--${questao.dificuldade || 'media'}">
        ${nivel} <span class="dificuldade__origem">· classificação inicial</span>
        <span class="dificuldade__admin" data-alunos-questao hidden></span>
      </span>
    </div>`;
}

/** Liga o botão e, para administradores, preenche por quantos alunos a questão foi feita. */
export function vincularDificuldade(raiz) {
  raiz.querySelectorAll('[data-alternar-dificuldade]').forEach(btn => btn.addEventListener('click', () => {
    const sim = !ligado();
    try { localStorage.setItem(CHAVE, sim ? '1' : '0'); } catch { /* ignora */ }
    aplicarEstado(sim);
    document.querySelectorAll('[data-alternar-dificuldade]').forEach(b => {
      b.setAttribute('aria-pressed', String(sim));
      b.querySelector('span').textContent = sim ? 'Ocultar dificuldade' : 'Mostrar dificuldade';
    });
  }));
  preencherAlunosPorQuestao(raiz);
}

/* ---------------- Só administradores: por quantos alunos cada questão foi feita ---------------- */

let contagem = null;   // Promise<Map<id da questão, nº de alunos>> (lida uma vez por visita)

function contarAlunos() {
  contagem ||= lerMemoriasAlunos().then(alunos => {
    const porQuestao = new Map();
    alunos.forEach(({ memoria }) => new Set(memoria.map(m => m.q)).forEach(q => porQuestao.set(q, (porQuestao.get(q) || 0) + 1)));
    return porQuestao;
  }).catch(() => null);
  return contagem;
}

async function preencherAlunosPorQuestao(raiz) {
  const caixas = [...raiz.querySelectorAll('[data-dificuldade-questao]')];
  if (!caixas.length) return;
  let admin = false;
  try { admin = await eAdmin(); } catch { admin = false; }
  if (!admin) return;
  const porQuestao = await contarAlunos();
  if (!porQuestao) return;
  caixas.forEach(caixa => {
    const n = porQuestao.get(caixa.dataset.dificuldadeQuestao) || 0;
    const el = caixa.querySelector('[data-alunos-questao]');
    el.textContent = `· feita por ${n} ${n === 1 ? 'aluno' : 'alunos'} (só administradores veem)`;
    el.hidden = false;
  });
}
