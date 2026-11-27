/**
 * app.js — Roteador por hash e ponto de entrada da aplicação.
 *
 * Rotas suportadas:
 *   #/              → Dashboard (tela inicial)
 *   #/questoes/<id> → Motor de questões do módulo (questões de estudo)
 *   #/simulados     → Simulados com as provas anteriores (montar/continuar/histórico)
 *   #/simulado      → Simulado em andamento
 *   #/simulado/resultado/<n> → Resultado e revisão da tentativa n
 *   #/simulados/feitas → Questões feitas nos simulados aleatórios, por prova de origem
 *   #/guia          → Guia de Estudos (cronograma diário + chat de mudanças)
 *   #/planos        → Planos (tela TEMPORÁRIA, preços fictícios, sem pagamento)
 *   #/em-breve/<id> → Tela "Em breve"
 *   #/admin         → Enviar as questões dos arquivos para o banco (só administradores)
 *
 * Com o banco de dados (Firebase) configurado em js/firebase-config.js, o aluno
 * precisa entrar (login) e seus dados ficam na nuvem. As questões vêm sempre dos
 * arquivos de dados/ (a cópia no Firestore não é lida). Sem configuração, tudo
 * funciona no modo local, como antes.
 *
 * Os dados são carregados via <script> no HTML (sem `export`, para
 * compatibilidade com abertura direta do arquivo — sem servidor):
 *   window.QUESTOES        → dados/questoes.js          (estudo por matéria)
 *   window.QUESTOES_PROVAS → dados/provas-anteriores.js (só nos simulados)
 */

import { renderizarDashboard }    from './dashboard.js';
import { iniciarSessaoQuestoes, renderizarConteudosModulo } from './questoes.js';
import { renderizarTelaSimulados, iniciarSimulado, renderizarResultadoSimulado, renderizarQuestoesFeitas } from './simulado.js';
import { renderizarGuia }         from './guia.js';
import { renderizarRevisao }      from './revisao.js';
import { MODULOS }                from './modulos.js';
import { icone }                  from './icones.js';
import { abrirConfiguracoes }     from './configuracoes.js';
import { renderizarPlanos }       from './planos.js';
import { htmlContagemCompacta, iniciarContagemCompacta } from './contagem.js';
import { definirAluno, resetarMemoriaLocal, resetConhecido } from './armazenamento.js';
import { renderizarLogin, renderizarCarregando } from './login.js';
import {
  nuvemAtiva, iniciarNuvem, usuarioAtual, usuarioExibido,
  lerDadosAluno, agendarGravacaoAluno, eAdmin, enviarQuestoes, ouvirReset,
} from './nuvem.js';

/* ================================================================
   Elementos fixos do layout
   ================================================================ */
const elCabecalho = document.getElementById('cabecalho');
const elApp       = document.getElementById('app');

/* ================================================================
   Cabeçalho persistente
   ================================================================ */

/** Logo: círculo com traçado de batimento (ECG); a cor vem de currentColor. */
const htmlLogo = (tamanho = 36) => `
  <svg class="logo-ecg" width="${tamanho}" height="${tamanho}" viewBox="0 0 56 56" aria-hidden="true">
    <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" stroke-width="3"/>
    <path d="M10 30 H20 L24 19 L30 39 L34 27 H46" fill="none" stroke="currentColor"
          stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

/** Links do menu (as rotas continuam as mesmas). `ativo` diz quais hashes acendem o link. */
const LINKS_MENU = [
  { href: '#/',        nome: 'Início',            ativo: h => h === '#/' || h === '' || h.startsWith('#/questoes/') },
  { href: '#/guia',    nome: 'Guia de estudos',   ativo: h => h === '#/guia' },
  { href: '#/simulados', nome: 'Simulados',       ativo: h => h.startsWith('#/simulado') },
  { href: '#/revisao', nome: 'Correção de erros', ativo: h => h === '#/revisao' },
  { href: '#/em-breve/leituras-obrigatorias', nome: 'Leituras obrigatórias', ativo: h => h === '#/em-breve/leituras-obrigatorias' },
];

/**
 * Menu do site: lateral fixo no desktop (≥ 1024 px) e barra superior com botão de menu
 * no celular. Logo, links das rotas, Configurações e, no rodapé, a contagem para a prova.
 */
function renderizarCabecalho() {
  const user = usuarioAtual();
  elCabecalho.innerHTML = `
    <header class="menu-site" role="banner">
      <div class="menu-site__barra">
        <a href="#/" class="menu-site__logo" aria-label="Sapiens Med — Início">
          ${htmlLogo(36)}
          <span class="menu-site__marca">
            <span class="cabecalho-titulo">SAPIENS MED</span>
            <span class="cabecalho-subtitulo">ACAFE 2027 · Medicina</span>
          </span>
        </a>
        <button type="button" class="menu-site__abrir" id="btn-menu" aria-expanded="false" aria-controls="menu-navegacao"
          aria-label="Abrir menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>
          </svg>
        </button>
      </div>
      <div class="menu-site__painel" id="menu-navegacao">
        <nav class="menu-site__nav" aria-label="Navegação principal">
          ${LINKS_MENU.map(l => `<a href="${l.href}" class="menu-site__link" data-menu-link>${l.nome}</a>`).join('')}
          <button type="button" class="menu-site__link" id="btn-config">Configurações</button>
        </nav>
        <div class="menu-site__rodape">
          ${user ? `<p class="menu-site__usuario" title="Usuário: ${usuarioExibido(user)}">${user.displayName || usuarioExibido(user)}</p>` : ''}
          ${htmlContagemCompacta()}
        </div>
      </div>
    </header>
  `;
  const btnMenu = elCabecalho.querySelector('#btn-menu');
  const fecharMenu = () => { elCabecalho.classList.remove('menu-aberto'); btnMenu.setAttribute('aria-expanded', 'false'); btnMenu.setAttribute('aria-label', 'Abrir menu'); };
  btnMenu.addEventListener('click', () => {
    const aberto = elCabecalho.classList.toggle('menu-aberto');
    btnMenu.setAttribute('aria-expanded', String(aberto));
    btnMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });
  elCabecalho.querySelectorAll('[data-menu-link]').forEach(a => a.addEventListener('click', fecharMenu));
  elCabecalho.querySelector('#btn-config').addEventListener('click', () => { fecharMenu(); abrirConfiguracoes(); });
  iniciarContagemCompacta(elCabecalho);
  marcarLinkAtivo();
}

/** Acende no menu o link da tela atual. */
function marcarLinkAtivo() {
  const hash = window.location.hash || '#/';
  elCabecalho.querySelectorAll('[data-menu-link]').forEach((a, i) => {
    if (LINKS_MENU[i].ativo(hash)) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
}

/* ================================================================
   Roteador
   ================================================================ */

/**
 * Interpreta o hash atual e renderiza a tela correspondente.
 */
function roteador() {
  // Garante que as questões já foram carregadas pelo <script> no HTML
  const todasQuestoes  = window.QUESTOES || [];          // estudo por matéria
  const questoesProvas = window.QUESTOES_PROVAS || [];   // provas anteriores (simulados)

  const hash = window.location.hash || '#/';

  // Limpa o conteúdo anterior
  elApp.innerHTML = '';

  // Com o banco de dados ativo, é preciso entrar
  if (nuvemAtiva() && !usuarioAtual()) {
    document.title = 'Entrar — Sapiens Med';
    renderizarLogin(elApp);
    return;
  }

  // Rota: administração do banco de questões
  if (hash === '#/admin') {
    document.title = 'Administração — Sapiens Med';
    renderizarAdmin();
    return;
  }

  // Rota: dashboard
  if (hash === '#/' || hash === '') {
    document.title = 'Sapiens Med';
    renderizarDashboard(elApp, todasQuestoes, questoesProvas);
    return;
  }

  // Rota: módulo de questões (lista de conteúdos) e conteúdo escolhido (#/questoes/<módulo>/<conteúdo>)
  const matchQuestoes = hash.match(/^#\/questoes\/([^/]+)(?:\/(.+))?$/);
  if (matchQuestoes) {
    const idModulo = matchQuestoes[1];
    const modulo   = MODULOS.find(m => m.id === idModulo);

    if (!modulo || modulo.tipo !== 'disciplina') {
      renderizarNaoEncontrado();
      return;
    }

    document.title = `${modulo.titulo} — Sapiens Med`;
    if (matchQuestoes[2]) iniciarSessaoQuestoes(elApp, todasQuestoes, { ...modulo, conteudo: decodeURIComponent(matchQuestoes[2]) });
    else renderizarConteudosModulo(elApp, todasQuestoes, modulo);
    return;
  }

  // Rotas: simulados
  if (hash === '#/simulados') {
    document.title = 'Simulados — Sapiens Med';
    renderizarTelaSimulados(elApp, questoesProvas);
    return;
  }
  if (hash === '#/simulados/feitas') {
    document.title = 'Questões feitas nos simulados — Sapiens Med';
    renderizarQuestoesFeitas(elApp, questoesProvas);
    return;
  }
  if (hash === '#/simulado') {
    document.title = 'Simulado em andamento — Sapiens Med';
    iniciarSimulado(elApp, questoesProvas);
    return;
  }
  const matchResultado = hash.match(/^#\/simulado\/resultado\/(\d+)$/);
  if (matchResultado) {
    document.title = 'Resultado do simulado — Sapiens Med';
    if (!renderizarResultadoSimulado(elApp, questoesProvas, Number(matchResultado[1]))) renderizarNaoEncontrado();
    return;
  }

  // Rota: correção de erros (bloco do guia)
  if (hash === '#/revisao') {
    document.title = 'Correção de erros — Sapiens Med';
    renderizarRevisao(elApp, questoesProvas, todasQuestoes);
    return;
  }

  // Rota: guia de estudos
  if (hash === '#/guia') {
    document.title = 'Guia de Estudos — Sapiens Med';
    renderizarGuia(elApp, questoesProvas, todasQuestoes);
    return;
  }

  // Rota: planos (temporária)
  if (hash === '#/planos') {
    document.title = 'Planos — Sapiens Med';
    renderizarPlanos(elApp);
    return;
  }

  // Rota: em breve
  const matchEmBreve = hash.match(/^#\/em-breve\/(.+)$/);
  if (matchEmBreve) {
    const idModulo = matchEmBreve[1];
    const modulo   = MODULOS.find(m => m.id === idModulo);
    const titulo   = modulo ? modulo.titulo : 'Este módulo';

    document.title = `Em breve — Sapiens Med`;
    renderizarEmBreve(titulo);
    return;
  }

  // Rota não encontrada
  renderizarNaoEncontrado();
}

/* ================================================================
   Tela "Em breve"
   ================================================================ */

function renderizarEmBreve(titulo) {
  elApp.innerHTML = `
    <main class="tela-em-breve" role="main" aria-label="${titulo} — Em breve">
      <div class="tela-em-breve__icone">
        ${icone('clock', 64)}
      </div>
      <h1 class="tela-em-breve__titulo">${titulo}</h1>
      <p class="tela-em-breve__texto">
        Este módulo está sendo preparado com muito cuidado
        e estará disponível em breve. Volte logo!
      </p>
      <a href="#/" class="btn btn-primario">
        ${icone('arrow-left', 18)} Voltar ao início
      </a>
    </main>
  `;
}

/* ================================================================
   Tela de administração (enviar questões para o banco)
   ================================================================ */

async function renderizarAdmin() {
  if (!nuvemAtiva()) {
    elApp.innerHTML = `
      <main class="tela-em-breve" role="main">
        <h1 class="tela-em-breve__titulo">Banco de dados desligado</h1>
        <p class="tela-em-breve__texto">Configure o Firebase em js/firebase-config.js (veja o README).</p>
        <a href="#/" class="btn btn-primario">${icone('arrow-left', 18)} Voltar ao início</a>
      </main>`;
    return;
  }
  renderizarCarregando(elApp, 'Verificando permissão...');
  const admin = await eAdmin();
  const arquivo = window.QUESTOES_ARQUIVOS;
  elApp.innerHTML = `
    <main class="tela-em-breve" role="main">
      <h1 class="tela-em-breve__titulo">Banco de questões</h1>
      ${admin ? `
        <p class="tela-em-breve__texto">
          Envia para o Firestore as questões dos arquivos de dados
          (${arquivo.provas.length} de provas anteriores e ${arquivo.estudo.length} de estudo).
          Questões já existentes são atualizadas.
        </p>
        <button type="button" class="btn btn-primario" id="btn-enviar-questoes">Enviar questões para o banco</button>
        <p class="tela-em-breve__texto" id="admin-status" role="status"></p>` : `
        <p class="tela-em-breve__texto">Sua conta não é de administrador.</p>`}
      <a href="#/" class="btn btn-secundario">${icone('arrow-left', 18)} Voltar ao início</a>
    </main>`;
  elApp.querySelector('#btn-enviar-questoes')?.addEventListener('click', async (e) => {
    const status = elApp.querySelector('#admin-status');
    e.target.disabled = true;
    status.textContent = 'Enviando...';
    try {
      const n = await enviarQuestoes(arquivo.estudo, arquivo.provas);
      status.textContent = `${n} questões enviadas. Recarregue a página para usá-las.`;
    } catch (err) {
      status.textContent = 'Erro ao enviar: ' + err.message;
      e.target.disabled = false;
    }
  });
}

/* ================================================================
   Tela 404
   ================================================================ */

function renderizarNaoEncontrado() {
  document.title = 'Página não encontrada — Sapiens Med';
  elApp.innerHTML = `
    <main class="tela-em-breve" role="main">
      <div class="tela-em-breve__icone">
        ${icone('alert-circle', 64)}
      </div>
      <h1 class="tela-em-breve__titulo">Página não encontrada</h1>
      <p class="tela-em-breve__texto">
        O endereço acessado não existe. Volte ao início e tente novamente.
      </p>
      <a href="#/" class="btn btn-primario">
        ${icone('arrow-left', 18)} Voltar ao início
      </a>
    </main>
  `;
}

/* ================================================================
   Inicialização
   ================================================================ */

// Guarda as questões dos arquivos de dados (reserva quando o banco estiver vazio)
window.QUESTOES_ARQUIVOS = { estudo: window.QUESTOES || [], provas: window.QUESTOES_PROVAS || [] };

/**
 * Chamado sempre que um aluno entra ou sai: carrega os dados dele
 * (e o banco de questões) e redesenha a tela.
 */
async function aoMudarUsuario(user) {
  if (!user) {
    definirAluno(null);
    renderizarCabecalho();
    roteador();
    return;
  }
  renderizarCarregando(elApp, 'Carregando seus dados...');
  let dados = null;
  try { dados = await lerDadosAluno(); } catch (e) { console.warn('[Nuvem] Usando a cópia local:', e); }
  definirAluno(user.uid, dados, agendarGravacaoAluno);
  // se um administrador zerar esta conta com o site aberto, zera aqui também e recomeça
  ouvirReset(resetConhecido(), (resetEm) => { resetarMemoriaLocal(resetEm); location.reload(); });

  // As questões vêm SEMPRE dos arquivos de dados/ (decisão de 30/10/2026): a cópia no
  // Firestore (#/admin) não é lida, para nunca ficar desatualizada em relação aos arquivos.

  renderizarCabecalho();
  roteador();
}

// Renderiza o cabeçalho e a rota inicial
renderizarCabecalho();
if (nuvemAtiva()) {
  renderizarCarregando(elApp, 'Conectando...');
  iniciarNuvem(aoMudarUsuario).catch(e => {
    console.error('[Nuvem] Falha ao iniciar o Firebase:', e);
    elApp.innerHTML = `
      <main class="tela-em-breve" role="main">
        <h1 class="tela-em-breve__titulo">Não foi possível conectar</h1>
        <p class="tela-em-breve__texto">Verifique sua conexão com a internet e recarregue a página.</p>
      </main>`;
  });
} else {
  roteador();
}

// Escuta mudanças de hash (navegação)
window.addEventListener('hashchange', () => {
  roteador();
  marcarLinkAtivo();
  // Rola para o topo ao trocar de tela
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

