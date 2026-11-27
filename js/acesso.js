/**
 * acesso.js — Planos e o que cada um libera.
 *
 * Toda conta começa no plano GRATUITO. Administradores têm o plano ILIMITADO (acesso a tudo).
 * O plano de cada aluno fica em planos/<usuário> no Firestore, e só administradores podem
 * mudar (firestore.rules). Enquanto não há pagamento, a mudança é manual: o aluno combina
 * com vocês (WhatsApp, Pix) e um administrador troca o plano.
 *
 * As funções que o plano não libera continuam aparecendo no site, com cadeado: ao clicar,
 * abre a janela de planos (abrirJanelaPlanos) com o plano necessário em destaque.
 *
 * Para mudar o que cada plano libera, basta mexer em RECURSOS.
 */

import { icone } from './icones.js';
import { PLANOS, DURACOES, reais } from './planos.js';

/** Planos em ordem; cada um libera tudo o que os anteriores liberam. */
export const NIVEIS = [
  { id: 'gratuito',  nome: 'Gratuito' },
  { id: 'basico',    nome: 'Básico' },
  { id: 'pro',       nome: 'Pro' },
  { id: 'ultra',     nome: 'Ultra' },
  { id: 'ilimitado', nome: 'Ilimitado (administrador)' },
];
const posicao = id => Math.max(0, NIVEIS.findIndex(n => n.id === id));

/** Recurso → plano mínimo e como ele aparece na janela de planos. */
export const RECURSOS = {
  simulados:         { plano: 'basico', nome: 'Os simulados com as provas da ACAFE' },
  historico:         { plano: 'basico', nome: 'O histórico de simulados' },
  'banco-questoes':  { plano: 'basico', nome: 'O banco de questões de outros vestibulares' },
  guia:              { plano: 'pro',    nome: 'O Guia de estudos com cronograma diário' },
  revisao:           { plano: 'pro',    nome: 'A correção de erros' },
  diagnostico:       { plano: 'pro',    nome: 'O diagnóstico de erros' },
  leituras:          { plano: 'ultra',  nome: 'O livro das obras literárias' },
  'simulado-do-dia': { plano: 'ultra',  nome: 'O simulado do dia' },
  'chat-guia':       { plano: 'ultra',  nome: 'O chat do Guia para mudar o cronograma' },
};

let planoAtual = 'ilimitado';   // sem login (modo local, para testes): tudo liberado

/** Define o plano em uso (chamado ao entrar na conta). */
export function definirPlano(id) {
  planoAtual = NIVEIS.some(n => n.id === id) ? id : 'gratuito';
}
export const planoEmUso = () => planoAtual;
export const nomeDoPlano = id => NIVEIS.find(n => n.id === id)?.nome || 'Gratuito';

/** O plano em uso libera este recurso? */
export function temAcesso(recurso) {
  const r = RECURSOS[recurso];
  return !r || posicao(planoAtual) >= posicao(r.plano);
}

/**
 * Libera o recurso ou, se o plano não deixa, abre a janela de planos e devolve false.
 * Use antes de abrir uma função: `if (!liberar('guia')) return;`
 */
export function liberar(recurso) {
  if (temAcesso(recurso)) return true;
  abrirJanelaPlanos(recurso);
  return false;
}

/* ================================================================
   Janela de planos (como a de Configurações: o resto fica desfocado)
   ================================================================ */

/**
 * Abre a janela com os três planos (Básico, Pro e Ultra, nessa ordem). O plano que libera o
 * recurso pedido fica em destaque (um pouco maior e marcado). É uma tela de TESTE: os preços
 * são fictícios e "Contratar" ainda não leva a pagamento.
 * @param {string} [recurso] - id de RECURSOS que o aluno tentou abrir
 */
export function abrirJanelaPlanos(recurso = null) {
  document.querySelector('dialog.janela-planos')?.remove();
  const pedido = RECURSOS[recurso];
  const destaque = pedido?.plano || null;
  let meses = 3;

  const janela = document.createElement('dialog');
  janela.className = 'confirmacao janela-planos';
  janela.setAttribute('aria-labelledby', 'janela-planos-titulo');

  const desenhar = () => {
    const duracao = DURACOES.find(d => d.meses === meses) || DURACOES[1];
    janela.innerHTML = `
      <div class="confirmacao__caixa janela-planos__caixa">
        <div class="janela-planos__topo">
          <div>
            <h2 class="confirmacao__titulo" id="janela-planos-titulo">${pedido ? `Para usar ${pedido.nome.charAt(0).toLowerCase()}${pedido.nome.slice(1)}, você precisa do plano ${nomeDoPlano(destaque)}` : 'Planos'}</h2>
            <p class="janela-planos__sub">Seu plano: <strong>${nomeDoPlano(planoAtual)}</strong>. ${pedido ? 'Veja o que cada plano libera:' : 'Escolha o plano que combina com você:'}</p>
          </div>
          <button type="button" class="configuracoes__fechar" data-fechar aria-label="Fechar">${icone('x', 20)}</button>
        </div>
        <div class="janela-planos__duracoes" role="radiogroup" aria-label="Duração do plano">
          ${DURACOES.map(d => `<button type="button" role="radio" class="grafico-ampliado__aba" data-meses="${d.meses}"
            aria-checked="${d.meses === meses}" aria-selected="${d.meses === meses}">${d.meses === 1 ? '1 mês' : `${d.meses} meses`}</button>`).join('')}
        </div>
        <div class="janela-planos__grade">
          ${PLANOS.map(p => {
            const atual = p.id === planoAtual;
            const ehDestaque = p.id === destaque;
            return `
              <article class="janela-plano${ehDestaque ? ' janela-plano--destaque' : ''}${atual ? ' janela-plano--atual' : ''}">
                ${atual ? '<span class="janela-plano__selo janela-plano__selo--atual">Seu plano</span>' : ''}
                <h3 class="janela-plano__nome">${p.nome}</h3>
                <p class="janela-plano__resumo">${p.resumo}</p>
                <p class="janela-plano__preco"><strong>${reais(duracao.precos[p.id])}</strong> /mês</p>
                <p class="janela-plano__total">${meses === 1 ? 'Cobrado todo mês' : `${reais(duracao.precos[p.id] * meses)} por ${meses} meses`}</p>
                <ul class="janela-plano__recursos">${p.recursos.map(r => `<li>${icone('check', 14)} ${r}</li>`).join('')}</ul>
                <button type="button" class="btn ${ehDestaque ? 'btn-primario' : 'btn-secundario'}" data-contratar="${p.id}" ${atual ? 'disabled' : ''}>
                  ${atual ? 'Plano atual' : `Quero o ${p.nome}`}</button>
              </article>`;
          }).join('')}
        </div>
        <p class="janela-planos__aviso" id="janela-planos-aviso" role="status">Tela de teste: os preços são fictícios e ainda não há pagamento pelo site.</p>
      </div>`;
    janela.querySelector('[data-fechar]').addEventListener('click', () => janela.close());
    janela.querySelectorAll('[data-meses]').forEach(b => b.addEventListener('click', () => { meses = Number(b.dataset.meses); desenhar(); }));
    janela.querySelectorAll('[data-contratar]').forEach(b => b.addEventListener('click', () => {
      const plano = PLANOS.find(x => x.id === b.dataset.contratar);
      janela.querySelector('#janela-planos-aviso').textContent =
        `Em breve: para contratar o ${plano.nome}, você vai falar com a gente pelo WhatsApp, com a mensagem pronta. Por enquanto é só uma tela de teste.`;
    }));
  };

  desenhar();
  document.body.appendChild(janela);
  janela.addEventListener('click', e => { if (e.target === janela) janela.close(); });
  janela.addEventListener('close', () => janela.remove());
  janela.showModal();
}
