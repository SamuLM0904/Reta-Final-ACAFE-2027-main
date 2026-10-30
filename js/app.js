/**
 * app.js — Roteador por hash e ponto de entrada da aplicação.
 *
 * Rotas suportadas:
 *   #/              → Dashboard (tela inicial)
 *   #/questoes/<id> → Motor de questões do módulo (questões de estudo)
 *   #/simulados     → Simulados com as provas anteriores (montar/continuar/histórico)
 *   #/simulado      → Simulado em andamento
 *   #/simulado/resultado/<n> → Resultado e revisão da tentativa n
 *   #/guia          → Guia de Estudos (cronograma diário + chat de mudanças)
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
import { iniciarSessaoQuestoes }  from './questoes.js';
import { renderizarTelaSimulados, iniciarSimulado, renderizarResultadoSimulado } from './simulado.js';
import { renderizarGuia }         from './guia.js';
import { MODULOS }                from './modulos.js';
import { icone }                  from './icones.js';
import { confirmar } from './confirmar.js';
import { definirAluno }           from './armazenamento.js';
import { renderizarLogin, renderizarCarregando } from './login.js';
import {
  nuvemAtiva, iniciarNuvem, usuarioAtual, usuarioExibido, sair,
  lerDadosAluno, agendarGravacaoAluno, eAdmin, enviarQuestoes,
} from './nuvem.js';

/* ================================================================
   Elementos fixos do layout
   ================================================================ */
const elCabecalho = document.getElementById('cabecalho');
const elApp       = document.getElementById('app');

/* ================================================================
   Cabeçalho persistente
   ================================================================ */

function renderizarCabecalho() {
  const user = usuarioAtual();
  elCabecalho.innerHTML = `
    <header class="cabecalho-site" role="banner">
      <div class="container">
        <a href="#/" class="cabecalho-logo" aria-label="Reta Final ACAFE 2027 — Início">
          <span class="cabecalho-titulo">Reta Final ACAFE 2027</span>
          <span class="cabecalho-subtitulo">Medicina • questões reais das provas anteriores da ACAFE</span>
        </a>
        ${user ? `
          <div class="cabecalho-usuario">
            <span class="cabecalho-usuario__nome" title="Usuário: ${usuarioExibido(user)}">
              ${user.displayName || usuarioExibido(user)}
            </span>
            <button type="button" class="btn btn-secundario btn-pequeno" id="btn-sair">Sair</button>
          </div>` : ''}
      </div>
    </header>
  `;
  elCabecalho.querySelector('#btn-sair')?.addEventListener('click', async () => {
    if (!(await confirmar({
      titulo: 'Sair da sua conta?',
      mensagem: 'Seu progresso fica salvo. Para voltar, é só entrar de novo com seu usuário e senha.',
      textoConfirmar: 'Sair',
    }))) return;
    await sair();
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
    document.title = 'Entrar — Reta Final ACAFE 2027';
    renderizarLogin(elApp);
    return;
  }

  // Rota: administração do banco de questões
  if (hash === '#/admin') {
    document.title = 'Administração — Reta Final ACAFE 2027';
    renderizarAdmin();
    return;
  }

  // Rota: dashboard
  if (hash === '#/' || hash === '') {
    document.title = 'Reta Final ACAFE 2027';
    renderizarDashboard(elApp, todasQuestoes, questoesProvas);
    return;
  }

  // Rota: módulo de questões
  const matchQuestoes = hash.match(/^#\/questoes\/(.+)$/);
  if (matchQuestoes) {
    const idModulo = matchQuestoes[1];
    const modulo   = MODULOS.find(m => m.id === idModulo);

    if (!modulo || modulo.tipo !== 'disciplina') {
      renderizarNaoEncontrado();
      return;
    }

    document.title = `${modulo.titulo} — Reta Final ACAFE 2027`;
    iniciarSessaoQuestoes(elApp, todasQuestoes, modulo);
    return;
  }

  // Rotas: simulados
  if (hash === '#/simulados') {
    document.title = 'Simulados — Reta Final ACAFE 2027';
    renderizarTelaSimulados(elApp, questoesProvas);
    return;
  }
  if (hash === '#/simulado') {
    document.title = 'Simulado em andamento — Reta Final ACAFE 2027';
    iniciarSimulado(elApp, questoesProvas);
    return;
  }
  const matchResultado = hash.match(/^#\/simulado\/resultado\/(\d+)$/);
  if (matchResultado) {
    document.title = 'Resultado do simulado — Reta Final ACAFE 2027';
    if (!renderizarResultadoSimulado(elApp, questoesProvas, Number(matchResultado[1]))) renderizarNaoEncontrado();
    return;
  }

  // Rota: guia de estudos
  if (hash === '#/guia') {
    document.title = 'Guia de Estudos — Reta Final ACAFE 2027';
    renderizarGuia(elApp, questoesProvas, todasQuestoes);
    return;
  }

  // Rota: em breve
  const matchEmBreve = hash.match(/^#\/em-breve\/(.+)$/);
  if (matchEmBreve) {
    const idModulo = matchEmBreve[1];
    const modulo   = MODULOS.find(m => m.id === idModulo);
    const titulo   = modulo ? modulo.titulo : 'Este módulo';

    document.title = `Em breve — Reta Final ACAFE 2027`;
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
  document.title = 'Página não encontrada — Reta Final ACAFE 2027';
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
  // Rola para o topo ao trocar de tela
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

