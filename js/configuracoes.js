/**
 * configuracoes.js — Painel de configurações (botão de engrenagem no cabeçalho).
 *
 * Por enquanto tem:
 *   - Aparência: botão de sol/lua que troca o tema (ver js/tema.js) — aparece mesmo sem login;
 *   - Dados da conta (nome completo e usuário) e "Trocar senha" (todos). A senha não pode
 *     ser exibida: o Firebase guarda só uma versão embaralhada dela.
 *   - Sair da conta (todos);
 *   - Resetar a memória de erros e acertos de um aluno — SÓ para administradores.
 *     A seção nem aparece para quem não é admin, e o banco de dados também só
 *     permite a operação para administradores (firestore.rules → admin()).
 *     Quem é administrador é definido na coleção `admins` do Firestore, que só
 *     pode ser alterada pelo Console do Firebase (veja o README).
 */

import { planoEmUso, nomeDoPlano, abrirJanelaPlanos } from './acesso.js';
import { icone } from './icones.js';
import { confirmar } from './confirmar.js';
import { escaparHtml } from './utils.js';
import { resetarMemoriaLocal } from './armazenamento.js';
import { htmlBotaoTema, vincularBotoesTema, htmlTemaAutomatico, vincularTemaAutomatico } from './tema.js';
import {
  eAdmin, adicionarAdministrador, removerAdministrador,
  resetarMemoriaDoAluno, lerMemoriasAlunos, gravarDadosDeTeste, usuarioAtual,
  listarUsuarios, recalcularUsuarios, definirPlanoDoAluno, usuarioExibido, sair, trocarSenha,
  redefinirSenha, temEmailReal, cadastrarEmailRecuperacao, alterarNome, alterarUsuario,
} from './nuvem.js';

/** Botão pequeno de lápis (sem borda) para alterar um dado da conta. */
const botaoEditar = (campo, rotulo, extra = '') =>
  `<button type="button" class="configuracoes__editar" data-editar="${campo}" aria-label="Alterar ${rotulo}" title="Alterar ${rotulo}" ${extra}>${icone('pencil', 16)}</button>`;

/** Abre o painel de configurações. */
export async function abrirConfiguracoes() {
  const user = usuarioAtual();
  const dialogo = document.createElement('dialog');
  dialogo.className = 'confirmacao configuracoes';
  dialogo.setAttribute('aria-labelledby', 'configuracoes-titulo');
  dialogo.innerHTML = `
    <div class="confirmacao__caixa configuracoes__caixa">
      <div class="configuracoes__topo">
        <h2 class="confirmacao__titulo" id="configuracoes-titulo">${icone('settings', 20)} Configurações</h2>
        <button type="button" class="configuracoes__fechar" data-fechar aria-label="Fechar">${icone('x', 20)}</button>
      </div>

      <div class="configuracoes__abas" role="tablist" aria-label="Partes das configurações">
        <button type="button" role="tab" class="configuracoes__aba" data-aba-config="aparencia" aria-selected="true">Aparência</button>
        ${user ? `<button type="button" role="tab" class="configuracoes__aba" data-aba-config="conta" aria-selected="false">Conta</button>
        <button type="button" role="tab" class="configuracoes__aba configuracoes__aba--admin" data-aba-config="admin" aria-selected="false" hidden>${icone('lock', 14)} Administração</button>` : ''}
      </div>

      <section class="configuracoes__secao" aria-label="Aparência" data-painel-config="aparencia">
        <h3 class="configuracoes__subtitulo">Aparência</h3>
        <div class="configuracoes__linha">
          ${htmlBotaoTema({ texto: true })}
        </div>
        ${htmlTemaAutomatico()}
      </section>

      ${user ? `
      <section class="configuracoes__secao" aria-label="Conta" data-painel-config="conta" hidden>
        <h3 class="configuracoes__subtitulo">Conta</h3>
        <dl class="configuracoes__dados">
          <dt>Plano</dt>
          <dd><span class="configuracoes__valor configuracoes__plano">${escaparHtml(nomeDoPlano(planoEmUso()))}</span>
            <button type="button" class="login-link" id="config-ver-planos">Ver planos</button></dd>
          <dt>Nome completo</dt>
          <dd data-campo="nome"><span class="configuracoes__valor">${escaparHtml(user?.displayName || '—')}</span>${botaoEditar('nome', 'o nome completo')}</dd>
          <dt>Usuário</dt>
          <dd data-campo="usuario"><span class="configuracoes__valor">${escaparHtml(usuarioExibido(user))}</span>${botaoEditar('usuario', 'o nome de usuário')}</dd>
          <dt>E-mail de recuperação</dt>
          <dd><span class="configuracoes__valor">${temEmailReal(user) ? escaparHtml(user.email)
            : '<span class="configuracoes__sem-email">não cadastrado</span>'}</span>${botaoEditar('email', 'o e-mail de recuperação', 'id="config-trocar-email" aria-expanded="false" aria-controls="config-form-email"')}</dd>
        </dl>
        ${temEmailReal(user) ? '' : `<p class="login-aviso">Sem e-mail de recuperação, <strong>se você esquecer a senha ou o usuário não conseguirá recuperá-los sozinho</strong>: só o administrador poderá ajudar. Clique no ✏️ ao lado do e-mail para cadastrar.</p>`}
        <div class="configuracoes__linha">
          <button type="button" class="btn btn-perigo-contorno" id="config-trocar-senha" aria-expanded="false" aria-controls="config-form-senha">Trocar senha</button>
          <button type="button" class="btn btn-secundario" id="config-sair">${icone('log-out', 18)} Sair da conta</button>
        </div>
        <form class="configuracoes__senha" id="config-form-senha" hidden novalidate>
          <label class="login-campo">Senha atual
            ${htmlCampoSenha('atual', 'current-password', 'atual')}</label>
          <button type="button" class="login-link configuracoes__esqueci" id="config-esqueci">Esqueci a senha</button>
          <p class="configuracoes__info" id="config-esqueci-msg" role="status" hidden></p>
          <label class="login-campo">Nova senha
            ${htmlCampoSenha('nova', 'new-password', 'nova')}
            <span class="login-campo__dica">Pelo menos 6 caracteres.</span></label>
          <label class="login-campo">Repita a nova senha
            ${htmlCampoSenha('repetir', 'new-password', 'nova')}</label>
          <p class="login-erro" id="config-senha-erro" role="alert" hidden></p>
          <div class="configuracoes__linha">
            <button type="submit" class="btn btn-primario">Salvar nova senha</button>
            <button type="button" class="btn btn-secundario" id="config-senha-cancelar">Cancelar</button>
          </div>
        </form>
        <form class="configuracoes__senha" id="config-form-email" hidden novalidate>
          <label class="login-campo">${temEmailReal(user) ? 'Novo e-mail de recuperação' : 'E-mail de recuperação'}
            <input type="email" name="email" autocomplete="email" placeholder="seu@email.com" autocapitalize="none" spellcheck="false" required></label>
          <label class="login-campo">Sua senha atual
            ${htmlCampoSenha('senhaEmail', 'current-password', 'senhaEmail')}</label>
          <p class="login-campo__dica">Vamos enviar um link de confirmação para o e-mail. Ele só passa a valer depois que você clicar no link.
            Você continua entrando com o seu usuário.</p>
          <p class="login-erro" id="config-email-erro" role="alert" hidden></p>
          <div class="configuracoes__linha">
            <button type="submit" class="btn btn-primario">Enviar link de confirmação</button>
            <button type="button" class="btn btn-secundario" id="config-email-cancelar">Cancelar</button>
          </div>
        </form>
        <p class="configuracoes__info" id="config-senha-status" role="status"></p>
      </section>

      <div id="config-admin" data-painel-config="admin" hidden><p class="configuracoes__info">Verificando permissões...</p></div>` : ''}
    </div>`;
  document.body.appendChild(dialogo);
  dialogo.addEventListener('close', () => dialogo.remove());
  dialogo.addEventListener('click', (e) => {
    if (e.target === dialogo || e.target.closest('[data-fechar]')) dialogo.close();
  });
  dialogo.showModal();

  vincularBotoesTema(dialogo);
  vincularTemaAutomatico(dialogo);
  // abas: Aparência (abre nela), Conta e, para administradores, Administração
  dialogo.querySelectorAll('[data-aba-config]').forEach(aba => aba.addEventListener('click', () => {
    dialogo.querySelectorAll('[data-aba-config]').forEach(a => a.setAttribute('aria-selected', String(a === aba)));
    dialogo.querySelectorAll('[data-painel-config]').forEach(p => { p.hidden = p.dataset.painelConfig !== aba.dataset.abaConfig; });
    dialogo.classList.toggle('configuracoes--larga', aba.dataset.abaConfig === 'admin');   // a tabela de usuários precisa de largura
  }));
  if (!user) return;   // sem login (modo local): só a aparência

  dialogo.querySelector('#config-ver-planos').addEventListener('click', () => { dialogo.close(); abrirJanelaPlanos(); });

  dialogo.querySelector('#config-sair').addEventListener('click', async () => {
    if (!(await confirmar({
      titulo: 'Sair da sua conta?',
      mensagem: 'Seu progresso fica salvo. Para voltar, é só entrar de novo com seu usuário e senha.',
      textoConfirmar: 'Sair',
    }))) return;
    dialogo.close();
    await sair();
  });

  vincularTrocaDeSenha(dialogo);
  vincularEmailRecuperacao(dialogo);
  vincularEdicaoInline(dialogo);

  const area = dialogo.querySelector('#config-admin');
  if (!(await eAdmin())) { area.remove(); return; }
  area.closest('dialog')?.querySelector('[data-aba-config="admin"]')?.removeAttribute('hidden');
  renderizarAreaAdmin(area);
}

/** Aba Administração: a tabela de Usuários (com todas as ações) e a conferência da dificuldade. */
function renderizarAreaAdmin(area) {
  area.innerHTML = `
    <section class="configuracoes__secao configuracoes__secao--admin" aria-label="Usuários">
      <div class="usuarios__topo">
        <h3 class="configuracoes__subtitulo">Usuários</h3>
        <button type="button" class="btn btn-secundario btn-pequeno" id="usuarios-grafico">${icone('bar-chart', 16)} Gráfico de acessos</button>
      </div>
      <div class="usuarios__resumo" id="usuarios-resumo">Carregando os usuários...</div>
      <div class="usuarios__controles">
        <input type="search" id="usuarios-busca" class="guia-texto" placeholder="Buscar por usuário, nome ou e-mail" aria-label="Buscar usuário">
        <select id="usuarios-filtro" class="tema-auto__hora" aria-label="Filtrar">
          <option value="">Todos</option>
          <option value="admin">Administradores</option>
          <option value="gratuito">Gratuito</option><option value="basico">Básico</option>
          <option value="pro">Pro</option><option value="ultra">Ultra</option>
          <option value="ativos">Ativos nos últimos 7 dias</option>
          <option value="parados">Sem acessar há 30+ dias</option>
        </select>
        <select id="usuarios-ordem" class="tema-auto__hora" aria-label="Ordenar">
          <option value="usuario">Ordenar: usuário</option>
          <option value="nome">Ordenar: nome</option>
          <option value="acesso">Ordenar: último acesso</option>
          <option value="respostas">Ordenar: mais questões</option>
          <option value="criado">Ordenar: conta mais nova</option>
        </select>
      </div>
      <div class="usuarios__lista" id="usuarios-lista" role="table" aria-label="Usuários"></div>
      <div class="usuarios__mais" id="usuarios-mais"></div>
      <p class="configuracoes__info" id="usuarios-status" role="status"></p>
      <details class="usuarios__manutencao">
        <summary>Manutenção</summary>
        <p class="configuracoes__info">Os números de cada aluno se atualizam sozinhos quando ele usa o site.
          <strong>Recalcular</strong> lê o histórico completo de todos os alunos e atualiza os números de quem ainda não entrou
          desde a mudança; também cria o registro de plano que faltar. Use só de vez em quando (com muitos alunos, gasta leituras do Firebase).</p>
        <button type="button" class="btn btn-secundario" id="usuarios-recalcular">Recalcular os números de todos</button>
      </details>
    </section>

    <section class="configuracoes__secao configuracoes__secao--admin" aria-label="Dificuldade das questões">
      <h3 class="configuracoes__subtitulo">Dificuldade das questões</h3>
      <p class="configuracoes__info">Compara a dificuldade marcada em cada questão com o quanto os alunos acertam
        (só a primeira resposta de cada aluno; questões com pelo menos 5 alunos). Esperado: Fácil
        acima de 70% de acerto, Média de 40% a 70%, Difícil abaixo de 40%.</p>
      <div class="configuracoes__linha">
        <button type="button" class="btn btn-secundario" id="config-dificuldade">Conferir dificuldade</button>
        <a href="#/planos" class="btn btn-secundario" id="config-planos">Ver tela de planos (teste)</a>
      </div>
      <div class="configuracoes__info" id="config-dificuldade-saida" role="status"></div>
    </section>`;

  vincularUsuarios(area);
  area.querySelector('#usuarios-grafico').addEventListener('click', async () => {
    const { abrirGraficoAcessos } = await import('./grafico-acessos.js');
    abrirGraficoAcessos();
  });
  area.querySelector('#config-planos').addEventListener('click', () => area.closest('dialog')?.close?.());
  area.querySelector('#config-dificuldade').addEventListener('click', async () => {
    const saida = area.querySelector('#config-dificuldade-saida');
    saida.textContent = 'Lendo as respostas dos alunos...';
    try {
      saida.innerHTML = htmlConferenciaDificuldade(await lerMemoriasAlunos());
    } catch (e) {
      saida.textContent = 'Erro: ' + (e.code === 'permission-denied' ? 'sem permissão de administrador.' : e.message);
    }
  });
}

/**
 * Campo de senha com o botão de olho dentro.
 * @param {string} nome    - name do input
 * @param {string} auto    - autocomplete
 * @param {string} grupo   - campos do mesmo grupo mostram/escondem juntos
 */
function htmlCampoSenha(nome, auto, grupo) {
  return `
    <span class="campo-senha">
      <input type="password" name="${nome}" autocomplete="${auto}" data-grupo="${grupo}" required>
      <button type="button" class="campo-senha__olho" data-olho="${grupo}" aria-pressed="false"
        aria-label="Mostrar senha" title="Mostrar senha">${icone('eye', 18)}</button>
    </span>`;
}

/** Fecha o formulário de senha ou de e-mail, se estiver aberto (como o botão Cancelar dele). */
function fecharFormulario(dialogo, qual) {
  const form = dialogo.querySelector(`#config-form-${qual}`);
  if (form && !form.hidden) dialogo.querySelector(`#config-${qual}-cancelar`).click();
}

/** Formulário "Trocar senha": confirma a senha atual e grava a nova. */
function vincularTrocaDeSenha(dialogo) {
  const botao = dialogo.querySelector('#config-trocar-senha');
  const form = dialogo.querySelector('#config-form-senha');
  const erro = dialogo.querySelector('#config-senha-erro');
  const status = dialogo.querySelector('#config-senha-status');
  const abrir = (sim) => {
    form.hidden = !sim;
    botao.setAttribute('aria-expanded', String(sim));
    erro.hidden = true;
    if (sim) { status.textContent = ''; form.atual.focus(); return; }
    form.reset();
    msgEsqueci.hidden = true;
    ['atual', 'nova'].forEach(g => mostrarSenha(g, false));   // ao fechar, volta a esconder
  };
  botao.addEventListener('click', () => {
    if (form.hidden) fecharFormulario(dialogo, 'email');   // só um formulário aberto por vez
    abrir(form.hidden);
  });

  // Esqueci a senha: só quem cadastrou um e-mail recebe o link de redefinição
  const msgEsqueci = dialogo.querySelector('#config-esqueci-msg');
  dialogo.querySelector('#config-esqueci').addEventListener('click', async () => {
    msgEsqueci.hidden = false;
    const user = usuarioAtual();
    if (!temEmailReal(user)) {
      msgEsqueci.className = 'login-erro';
      msgEsqueci.textContent = 'Sua conta não tem e-mail de recuperação, então não é possível recuperar a senha por e-mail. '
        + 'Se você lembra a senha atual, troque-a aqui; se não lembra, peça ajuda ao administrador. '
        + 'Para não passar por isso, cadastre um e-mail de recuperação.';
      return;
    }
    msgEsqueci.className = 'configuracoes__info';
    msgEsqueci.textContent = 'Enviando...';
    try {
      const destino = await redefinirSenha(usuarioExibido(user));
      msgEsqueci.textContent = `Enviamos um link para ${destino} para você criar uma nova senha. Confira também a caixa de spam.`;
    } catch (e) {
      msgEsqueci.className = 'login-erro';
      msgEsqueci.textContent = e.message;
    }
  });
  dialogo.querySelector('#config-senha-cancelar').addEventListener('click', () => abrir(false));

  // Olho dentro do campo: mostra/esconde a senha. O olho da senha atual vale só para ela;
  // os da nova senha valem para os dois campos de nova senha (grupo "nova").
  function mostrarSenha(grupo, mostrar) {
    form.querySelectorAll(`[data-grupo="${grupo}"]`).forEach(c => { c.type = mostrar ? 'text' : 'password'; });
    form.querySelectorAll(`[data-olho="${grupo}"]`).forEach(b => {
      b.setAttribute('aria-pressed', String(mostrar));
      b.setAttribute('aria-label', mostrar ? 'Esconder senha' : 'Mostrar senha');
      b.title = b.getAttribute('aria-label');
      b.innerHTML = icone(mostrar ? 'eye-off' : 'eye', 18);
    });
  }
  form.querySelectorAll('[data-olho]').forEach(btn => btn.addEventListener('click', () =>
    mostrarSenha(btn.dataset.olho, btn.getAttribute('aria-pressed') !== 'true')));

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const atual = form.atual.value, nova = form.nova.value, repetir = form.repetir.value;
    const problema = !atual ? 'Digite a sua senha atual.'
      : nova.length < 6 ? 'A nova senha precisa ter pelo menos 6 caracteres.'
      : nova !== repetir ? 'As duas novas senhas não são iguais.'
      : nova === atual ? 'A nova senha precisa ser diferente da atual.'
      : null;
    if (problema) { erro.textContent = problema; erro.hidden = false; return; }
    const enviar = form.querySelector('[type="submit"]');
    enviar.disabled = true;
    erro.hidden = true;
    try {
      await trocarSenha(atual, nova);
      abrir(false);
      status.textContent = 'Senha trocada! Use a nova senha da próxima vez que entrar.';
    } catch (err) {
      erro.textContent = err.message;
      erro.hidden = false;
    } finally {
      enviar.disabled = false;
    }
  });
}

/** Formulário do e-mail de recuperação: confirma a senha e envia o link de confirmação. */
function vincularEmailRecuperacao(dialogo) {
  const botao = dialogo.querySelector('#config-trocar-email');
  const form = dialogo.querySelector('#config-form-email');
  const erro = dialogo.querySelector('#config-email-erro');
  const status = dialogo.querySelector('#config-senha-status');
  const olho = form.querySelector('[data-olho]');
  const abrir = (sim) => {
    form.hidden = !sim;
    botao.setAttribute('aria-expanded', String(sim));
    erro.hidden = true;
    if (sim) { status.textContent = ''; form.email.focus(); return; }
    form.reset();
    if (olho.getAttribute('aria-pressed') === 'true') olho.click();
  };
  botao.addEventListener('click', () => {
    if (form.hidden) fecharFormulario(dialogo, 'senha');   // só um formulário aberto por vez
    abrir(form.hidden);
  });
  dialogo.querySelector('#config-email-cancelar').addEventListener('click', () => abrir(false));
  olho.addEventListener('click', () => {
    const mostrar = olho.getAttribute('aria-pressed') !== 'true';
    form.senhaEmail.type = mostrar ? 'text' : 'password';
    olho.setAttribute('aria-pressed', String(mostrar));
    olho.setAttribute('aria-label', mostrar ? 'Esconder senha' : 'Mostrar senha');
    olho.title = olho.getAttribute('aria-label');
    olho.innerHTML = icone(mostrar ? 'eye-off' : 'eye', 18);
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    if (!form.senhaEmail.value) { erro.textContent = 'Digite a sua senha atual.'; erro.hidden = false; return; }
    const enviar = form.querySelector('[type="submit"]');
    enviar.disabled = true;
    erro.hidden = true;
    try {
      await cadastrarEmailRecuperacao(form.senhaEmail.value, email);
      abrir(false);
      status.textContent = `Enviamos um link de confirmação para ${email}. Clique nele para ativar o e-mail de recuperação; `
        + 'depois disso, pode ser preciso entrar de novo (com o seu usuário e a mesma senha).';
    } catch (err) {
      erro.textContent = err.message;
      erro.hidden = false;
    } finally {
      enviar.disabled = false;
    }
  });
}

/**
 * Lápis do nome completo e do usuário: troca o valor por um campo de texto com
 * Salvar/Cancelar, no próprio lugar.
 */
function vincularEdicaoInline(dialogo) {
  const status = dialogo.querySelector('#config-senha-status');
  dialogo.querySelectorAll('[data-editar="nome"], [data-editar="usuario"]').forEach(lapis => lapis.addEventListener('click', () => {
    const campo = lapis.dataset.editar;
    const dd = lapis.closest('dd');
    if (dd.querySelector('form')) return;
    fecharFormulario(dialogo, 'senha');
    fecharFormulario(dialogo, 'email');
    const valorEl = dd.querySelector('.configuracoes__valor');
    const atual = campo === 'nome' ? (usuarioAtual()?.displayName || '') : usuarioExibido(usuarioAtual());
    valorEl.hidden = true;
    lapis.hidden = true;
    dd.insertAdjacentHTML('beforeend', `
      <form class="configuracoes__inline" novalidate>
        <input type="text" class="guia-texto" value="${escaparHtml(atual)}" aria-label="${campo === 'nome' ? 'Nome completo' : 'Novo usuário'}"
          ${campo === 'usuario' ? 'autocapitalize="none" spellcheck="false"' : 'autocomplete="name"'}>
        <button type="submit" class="btn btn-primario btn-pequeno">Salvar</button>
        <button type="button" class="btn btn-secundario btn-pequeno" data-cancelar>Cancelar</button>
        ${campo === 'usuario' ? '<small class="login-campo__dica">Você passará a entrar com o novo usuário (a senha não muda).</small>' : ''}
        <p class="login-erro" hidden></p>
      </form>`);
    const form = dd.querySelector('form');
    const input = form.querySelector('input');
    const erro = form.querySelector('.login-erro');
    const fechar = () => { form.remove(); valorEl.hidden = false; lapis.hidden = false; };
    input.focus();
    input.select();
    form.querySelector('[data-cancelar]').addEventListener('click', fechar);
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const salvar = form.querySelector('[type="submit"]');
      salvar.disabled = true;
      erro.hidden = true;
      try {
        if (campo === 'nome') {
          const nome = await alterarNome(input.value);
          valorEl.textContent = nome;
          const noCabecalho = document.querySelector('.menu-site__usuario');
          if (noCabecalho) noCabecalho.textContent = nome;
          fechar();
          status.textContent = 'Nome alterado.';
        } else {
          const novo = await alterarUsuario(input.value);
          await confirmar({
            titulo: 'Usuário alterado!',
            mensagem: `Agora você entra com o usuário <strong>${escaparHtml(novo)}</strong> (a senha continua a mesma). A página será recarregada.`,
            textoConfirmar: 'OK', textoCancelar: 'Fechar',
          });
          location.reload();
        }
      } catch (err) {
        erro.textContent = err.message;
        erro.hidden = false;
        salvar.disabled = false;
      }
    });
  }));
}

/* ================================================================
   Conferência da dificuldade com as respostas reais
   ================================================================ */

const MIN_RESPOSTAS = 5;
const FAIXAS = { facil: [0.7, 1.01], media: [0.4, 0.7], dificil: [0, 0.4] };
const NOMES_DIF = { facil: 'Fácil', media: 'Média', dificil: 'Difícil' };
const sugerir = taxa => (taxa >= 0.7 ? 'facil' : taxa >= 0.4 ? 'media' : 'dificil');

/** Tabela das questões cuja taxa de acerto não bate com a dificuldade marcada. */
function htmlConferenciaDificuldade(alunos) {
  const questoes = new Map([...(globalThis.QUESTOES_PROVAS || []), ...(globalThis.QUESTOES || [])].map(q => [q.id, q]));
  const porQuestao = new Map();   // id → { n, acertos }
  let comRespostas = 0;
  alunos.forEach(({ memoria }) => {
    const vistas = new Set();
    if (memoria.length) comRespostas++;
    [...memoria].sort((a, b) => a.t - b.t).forEach(m => {
      if (vistas.has(m.q)) return;   // só a primeira resposta do aluno
      vistas.add(m.q);
      const r = porQuestao.get(m.q) || { n: 0, acertos: 0 };
      r.n++; if (m.ok) r.acertos++;
      porQuestao.set(m.q, r);
    });
  });
  const avaliadas = [...porQuestao].filter(([id, r]) => r.n >= MIN_RESPOSTAS && FAIXAS[questoes.get(id)?.dificuldade]);
  const fora = avaliadas.map(([id, r]) => ({ id, q: questoes.get(id), taxa: r.acertos / r.n, n: r.n }))
    .filter(x => { const [min, max] = FAIXAS[x.q.dificuldade]; return x.taxa < min || x.taxa >= max; })
    .sort((a, b) => a.id.localeCompare(b.id));
  const resumo = `${comRespostas} aluno(s) com respostas · ${avaliadas.length} questão(ões) com ${MIN_RESPOSTAS}+ alunos · ${fora.length} fora da faixa.`;
  if (!avaliadas.length) return `<p>${resumo}</p><p>Ainda há poucas respostas para conferir. Tente de novo quando mais alunos tiverem respondido.</p>`;
  if (!fora.length) return `<p>${resumo}</p><p>Todas as dificuldades batem com as respostas dos alunos.</p>`;
  return `<p>${resumo}</p>
    <div class="configuracoes__tabela"><table>
      <thead><tr><th>Questão</th><th>Marcada</th><th>Acerto</th><th>Alunos</th><th>Sugerida</th></tr></thead>
      <tbody>${fora.map(x => `<tr><td>${escaparHtml(x.id)}</td><td>${NOMES_DIF[x.q.dificuldade]}</td>
        <td>${Math.round(x.taxa * 100)}%</td><td>${x.n}</td><td>${NOMES_DIF[sugerir(x.taxa)]}</td></tr>`).join('')}</tbody>
    </table></div>
    <p>Me mande esta lista (print) para eu ajustar as questões.</p>`;
}

/* ================================================================
   Usuários (só administradores)
   Uma linha por conta: nome, usuário, e-mail, plano (troca ali mesmo), questões feitas e
   acerto, simulados, último acesso e data da conta. Em "Ações": tornar ou tirar
   administrador, resetar a memória e gravar dados de teste.
   Lê só os documentos pequenos (resumos, planos, admins): com centenas de alunos continua
   leve. Mostra 40 por vez ("Mostrar mais"). No computador, as colunas cabem na largura;
   no celular, cada usuário vira um cartão.
   ================================================================ */

const NOMES_PLANOS = { gratuito: 'Gratuito', basico: 'Básico', pro: 'Pro', ultra: 'Ultra' };
const POR_PAGINA = 40;
const DIA = 24 * 60 * 60 * 1000;

const numero = n => (n == null ? '—' : n.toLocaleString('pt-BR'));
const dataCurta = t => (t ? new Date(t).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' }) : '—');
function quandoFoi(t) {
  if (!t) return '—';
  const dias = Math.floor((Date.now() - t) / DIA);
  if (dias <= 0) return 'hoje';
  if (dias === 1) return 'ontem';
  if (dias < 30) return `há ${dias} dias`;
  return dataCurta(t);
}

function vincularUsuarios(area) {
  const resumo = area.querySelector('#usuarios-resumo');
  const lista = area.querySelector('#usuarios-lista');
  const mais = area.querySelector('#usuarios-mais');
  const busca = area.querySelector('#usuarios-busca');
  const filtro = area.querySelector('#usuarios-filtro');
  const ordem = area.querySelector('#usuarios-ordem');
  const status = area.querySelector('#usuarios-status');
  const eu = usuarioExibido(usuarioAtual());
  let contas = [];
  let limite = POR_PAGINA;
  let aberto = null;   // usuário com o painel de ações aberto

  const erroFirebase = e => (e.code === 'permission-denied'
    ? 'sem permissão (publique o firestore.rules novo no Console do Firebase).' : e.message);

  const visiveis = () => {
    const termo = busca.value.trim().toLowerCase();
    const f = filtro.value;
    const agora = Date.now();
    const lst = contas.filter(c => (!termo || [c.usuario, c.nome, c.email].some(v => (v || '').toLowerCase().includes(termo)))
      && (!f
        || (f === 'admin' && c.admin)
        || (f === 'ativos' && c.ultimoAcesso && agora - c.ultimoAcesso < 7 * DIA)
        || (f === 'parados' && (!c.ultimoAcesso || agora - c.ultimoAcesso >= 30 * DIA))
        || (NOMES_PLANOS[f] && !c.admin && c.plano === f)));
    const por = {
      usuario: (a, b) => a.usuario.localeCompare(b.usuario),
      nome: (a, b) => (a.nome || a.usuario).localeCompare(b.nome || b.usuario, 'pt-BR'),
      acesso: (a, b) => (b.ultimoAcesso || 0) - (a.ultimoAcesso || 0),
      respostas: (a, b) => (b.respostas || 0) - (a.respostas || 0),
      criado: (a, b) => (b.criadoEm || 0) - (a.criadoEm || 0),
    }[ordem.value];
    return lst.sort(por);
  };

  const htmlLinha = c => {
    const acerto = c.respostas ? `${Math.round((c.acertos / c.respostas) * 100)}%` : '';
    const proprio = c.usuario === eu;
    return `
      <div class="usuarios__linha${aberto === c.usuario ? ' usuarios__linha--aberta' : ''}" role="row" data-usuario="${escaparHtml(c.usuario)}">
        <div class="usuarios__celula usuarios__quem" role="cell">
          <strong>${escaparHtml(c.nome || '—')}</strong>
          <span class="usuarios__usuario">${escaparHtml(c.usuario)}${c.admin ? ' <span class="contas-planos__admin">admin</span>' : ''}${proprio ? ' <span class="usuarios__voce">você</span>' : ''}</span>
        </div>
        <div class="usuarios__celula usuarios__email" role="cell" data-rotulo="E-mail" title="${escaparHtml(c.email || '')}">${c.email ? escaparHtml(c.email) : '<span class="usuarios__fraco">sem e-mail</span>'}</div>
        <div class="usuarios__celula" role="cell" data-rotulo="Plano">${c.admin ? '<span class="usuarios__ilimitado">Ilimitado</span>'
          : `<select class="tema-auto__hora usuarios__plano" data-plano-de="${escaparHtml(c.usuario)}" aria-label="Plano de ${escaparHtml(c.usuario)}">
              ${Object.entries(NOMES_PLANOS).map(([id, nome]) => `<option value="${id}"${id === c.plano ? ' selected' : ''}>${nome}</option>`).join('')}
            </select>`}</div>
        <div class="usuarios__celula usuarios__num" role="cell" data-rotulo="Questões">${numero(c.respostas)}${acerto ? ` <span class="usuarios__fraco">· ${acerto}</span>` : ''}</div>
        <div class="usuarios__celula usuarios__num" role="cell" data-rotulo="Simulados">${numero(c.simulados)}</div>
        <div class="usuarios__celula" role="cell" data-rotulo="Último acesso">${quandoFoi(c.ultimoAcesso)}</div>
        <div class="usuarios__celula" role="cell" data-rotulo="Conta criada">${dataCurta(c.criadoEm)}</div>
        <div class="usuarios__celula usuarios__acoes-celula" role="cell">
          <button type="button" class="btn btn-secundario btn-pequeno" data-acoes="${escaparHtml(c.usuario)}" aria-expanded="${aberto === c.usuario}">Ações</button>
        </div>
        ${aberto === c.usuario ? `
        <div class="usuarios__painel">
          ${c.admin
            ? (proprio ? '<span class="usuarios__fraco">Você não pode tirar o seu próprio acesso de administrador.</span>'
              : `<button type="button" class="btn btn-perigo-contorno btn-pequeno" data-acao="tirar-admin">Tirar administrador</button>`)
            : `<button type="button" class="btn btn-secundario btn-pequeno" data-acao="dar-admin">Tornar administrador</button>`}
          <button type="button" class="btn btn-perigo-contorno btn-pequeno" data-acao="resetar">Resetar memória</button>
          <button type="button" class="btn btn-secundario btn-pequeno" data-acao="teste">Gerar 1 ano de dados de teste</button>
          ${c.planoAlteradoPor ? `<span class="usuarios__fraco">Plano mudado por ${escaparHtml(c.planoAlteradoPor)} em ${dataCurta(c.planoAlteradoEm)}</span>` : ''}
        </div>` : ''}
      </div>`;
  };

  const desenhar = () => {
    const contar = id => contas.filter(c => c.plano === id && !c.admin).length;
    const ativos = contas.filter(c => c.ultimoAcesso && Date.now() - c.ultimoAcesso < 7 * DIA).length;
    resumo.innerHTML = `<strong>${contas.length}</strong> contas · <strong>${ativos}</strong> ativas nos últimos 7 dias · ${contas.filter(c => c.admin).length} admin · `
      + Object.entries(NOMES_PLANOS).map(([id, nome]) => `${nome}: <strong>${contar(id)}</strong>`).join(' · ');
    const lst = visiveis();
    const pagina = lst.slice(0, limite);
    lista.innerHTML = lst.length ? `
      <div class="usuarios__linha usuarios__cabecalho" role="row">
        <div role="columnheader">Nome / usuário</div><div role="columnheader">E-mail</div><div role="columnheader">Plano</div>
        <div role="columnheader">Questões · acerto</div><div role="columnheader">Simulados</div>
        <div role="columnheader">Último acesso</div><div role="columnheader">Conta criada</div><div role="columnheader"></div>
      </div>
      ${pagina.map(htmlLinha).join('')}` : '<p class="configuracoes__info">Nenhum usuário encontrado.</p>';
    mais.innerHTML = lst.length > limite
      ? `<button type="button" class="btn btn-secundario btn-pequeno" id="usuarios-mostrar-mais">Mostrar mais (${lst.length - limite} restantes)</button>`
      : (lst.length ? `<span class="usuarios__fraco">${lst.length} usuário(s)</span>` : '');
  };

  const carregar = async () => {
    try {
      contas = await listarUsuarios();
      desenhar();
    } catch (e) {
      resumo.textContent = 'Não foi possível listar os usuários: ' + erroFirebase(e);
    }
  };

  busca.addEventListener('input', () => { limite = POR_PAGINA; desenhar(); });
  filtro.addEventListener('change', () => { limite = POR_PAGINA; desenhar(); });
  ordem.addEventListener('change', desenhar);
  mais.addEventListener('click', e => { if (e.target.closest('#usuarios-mostrar-mais')) { limite += POR_PAGINA; desenhar(); } });

  // trocar o plano
  lista.addEventListener('change', async e => {
    const sel = e.target.closest('[data-plano-de]');
    if (!sel) return;
    const c = contas.find(x => x.usuario === sel.dataset.planoDe);
    const anterior = c.plano;
    if (!(await confirmar({
      titulo: `Mudar o plano de ${escaparHtml(c.usuario)}?`,
      mensagem: `De <strong>${NOMES_PLANOS[anterior] || anterior}</strong> para <strong>${NOMES_PLANOS[sel.value]}</strong>. A conta passa a ter acesso ao novo plano na próxima vez que abrir o site.`,
      textoConfirmar: 'Mudar o plano',
    }))) { sel.value = anterior; return; }
    sel.disabled = true;
    try {
      await definirPlanoDoAluno(c.usuario, sel.value, c.nome || '');
      Object.assign(c, { plano: sel.value, planoAlteradoPor: eu, planoAlteradoEm: Date.now() });
      status.textContent = `Plano de ${c.usuario} mudado para ${NOMES_PLANOS[sel.value]}.`;
      desenhar();
    } catch (erro) {
      sel.value = anterior; sel.disabled = false;
      status.textContent = 'Erro: ' + erroFirebase(erro);
    }
  });

  // abrir/fechar as ações e executar cada uma
  lista.addEventListener('click', async e => {
    const btnAcoes = e.target.closest('[data-acoes]');
    if (btnAcoes) { aberto = aberto === btnAcoes.dataset.acoes ? null : btnAcoes.dataset.acoes; desenhar(); return; }
    const btn = e.target.closest('[data-acao]');
    if (!btn) return;
    const c = contas.find(x => x.usuario === btn.closest('[data-usuario]').dataset.usuario);
    const nome = escaparHtml(c.usuario);
    const acao = btn.dataset.acao;
    try {
      if (acao === 'dar-admin') {
        if (!(await confirmar({
          titulo: `Tornar ${nome} administrador?`,
          mensagem: 'Administradores têm acesso a tudo (Ilimitado), veem todos os usuários, mudam planos e podem apagar o progresso dos alunos.',
          textoConfirmar: 'Tornar administrador',
        }))) return;
        btn.disabled = true;
        await adicionarAdministrador(c.usuario);
        status.textContent = `${c.usuario} agora é administrador.`;
        await carregar();
      } else if (acao === 'tirar-admin') {
        if (!(await confirmar({
          titulo: `Tirar ${nome} da administração?`,
          mensagem: `A conta continua existindo e volta para o plano <strong>${NOMES_PLANOS[c.plano] || 'Gratuito'}</strong>.`,
          textoConfirmar: 'Tirar administrador', perigo: true,
        }))) return;
        btn.disabled = true;
        await removerAdministrador(c.adminUid);
        status.textContent = `${c.usuario} agora é um usuário comum.`;
        await carregar();
      } else if (acao === 'resetar') {
        if (!(await confirmar({
          titulo: `Resetar a memória de ${nome}?`,
          mensagem: 'Tudo o que esse aluno fez será apagado: questões respondidas, simulados, erros e acertos e o Guia de Estudos. A conta e o plano continuam.',
          textoConfirmar: 'Continuar', perigo: true,
        }))) return;
        if (!(await confirmar({
          titulo: 'Tem certeza? Não dá para desfazer.',
          mensagem: `Confirme para apagar <strong>definitivamente</strong> todo o progresso de <strong>${nome}</strong>.`,
          textoConfirmar: 'Apagar a memória', perigo: true,
        }))) return;
        btn.disabled = true;
        status.textContent = 'Apagando...';
        const r = await resetarMemoriaDoAluno(c.usuario);
        if (r.usuario === eu) resetarMemoriaLocal(r.resetEm);
        Object.assign(c, { respostas: 0, acertos: 0, simulados: 0 });
        status.textContent = `Progresso de ${r.usuario} zerado (${r.apagadas} registros). Se o aluno estiver com o site aberto, a página dele recomeça sozinha.`;
        desenhar();
      } else if (acao === 'teste') {
        if (!(await confirmar({
          titulo: `Gravar dados de teste em ${nome}?`,
          mensagem: `As questões feitas, os simulados e os erros e acertos de <strong>${nome}</strong> serão <strong>substituídos</strong> por um ano simulado de uso. Use só em contas de teste. Não dá para desfazer.`,
          textoConfirmar: 'Gravar dados de teste', perigo: true,
        }))) return;
        btn.disabled = true;
        status.textContent = 'Gerando e gravando...';
        const { gerarAnoDeTeste } = await import('./dados-teste.js');
        const dados = gerarAnoDeTeste(window.QUESTOES_PROVAS || [], window.QUESTOES || []);
        const r = await gravarDadosDeTeste(c.usuario, dados);
        Object.assign(c, { respostas: dados.memoria.length, acertos: dados.memoria.filter(m => m.ok).length, simulados: dados.simulado.tentativas.length });
        status.textContent = `Pronto: ${dados.memoria.length} respostas e ${dados.simulado.tentativas.length} simulados gravados em ${r.usuario}.`
          + (r.usuario === eu ? ' A página vai recarregar.' : ' Se a conta estiver aberta em outro lugar, a página dela recarrega sozinha.');
        desenhar();
      }
    } catch (erro) {
      btn.disabled = false;
      status.textContent = 'Erro: ' + erroFirebase(erro);
    }
  });

  area.querySelector('#usuarios-recalcular').addEventListener('click', async ev => {
    if (!(await confirmar({
      titulo: 'Recalcular os números de todos?',
      mensagem: `Vai ler o histórico completo de ${contas.length || 'todas as'} contas. Não apaga nem muda nada do aluno, só atualiza os números desta lista.`,
      textoConfirmar: 'Recalcular',
    }))) return;
    ev.target.disabled = true;
    status.textContent = 'Recalculando...';
    try {
      const r = await recalcularUsuarios();
      status.textContent = `Pronto: ${r.resumos} conta(s) atualizada(s)${r.planos ? ` e ${r.planos} registro(s) de plano criado(s)` : ''}.`;
      await carregar();
    } catch (erro) {
      status.textContent = 'Erro: ' + erroFirebase(erro);
    } finally { ev.target.disabled = false; }
  });

  carregar();
}
