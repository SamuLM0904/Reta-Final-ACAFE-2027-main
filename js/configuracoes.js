/**
 * configuracoes.js — Painel de configurações (botão de engrenagem no cabeçalho).
 *
 * Por enquanto tem:
 *   - Dados da conta (nome completo e usuário) e "Trocar senha" (todos). A senha não pode
 *     ser exibida: o Firebase guarda só uma versão embaralhada dela.
 *   - Sair da conta (todos);
 *   - Resetar a memória de erros e acertos de um aluno — SÓ para administradores.
 *     A seção nem aparece para quem não é admin, e o banco de dados também só
 *     permite a operação para administradores (firestore.rules → admin()).
 *     Quem é administrador é definido na coleção `admins` do Firestore, que só
 *     pode ser alterada pelo Console do Firebase (veja o README).
 */

import { icone } from './icones.js';
import { confirmar } from './confirmar.js';
import { escaparHtml } from './utils.js';
import { resetarMemoriaLocal } from './armazenamento.js';
import {
  eAdmin, listarAlunos, resetarMemoriaDoAluno, usuarioAtual, usuarioExibido, sair, trocarSenha,
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

      <section class="configuracoes__secao" aria-label="Conta">
        <h3 class="configuracoes__subtitulo">Conta</h3>
        <dl class="configuracoes__dados">
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

      <div id="config-admin"><p class="configuracoes__info">Verificando permissões...</p></div>
    </div>`;
  document.body.appendChild(dialogo);
  dialogo.addEventListener('close', () => dialogo.remove());
  dialogo.addEventListener('click', (e) => {
    if (e.target === dialogo || e.target.closest('[data-fechar]')) dialogo.close();
  });
  dialogo.showModal();

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
  renderizarAreaAdmin(area);
}

/** Seção de administração: resetar a memória de erros e acertos de um aluno. */
function renderizarAreaAdmin(area) {
  area.innerHTML = `
    <section class="configuracoes__secao configuracoes__secao--admin" aria-label="Administração">
      <h3 class="configuracoes__subtitulo">Administração</h3>
      <p class="configuracoes__info"><strong>Resetar a memória de um aluno</strong><br>
        Apaga os erros e acertos registrados do aluno (simulados e questões de estudo), que o Guia de Estudos
        usa para montar o cronograma. O histórico de simulados não é apagado. Não dá para desfazer.</p>
      <div class="configuracoes__linha">
        <input type="text" id="config-usuario" class="guia-texto" list="config-lista-alunos"
          placeholder="usuário do aluno (ex.: joao_silva)" autocomplete="off" aria-label="Usuário do aluno">
        <datalist id="config-lista-alunos"></datalist>
        <button type="button" class="btn btn-primario btn-perigo" id="config-resetar">Resetar memória</button>
      </div>
      <p class="configuracoes__info" id="config-status" role="status"></p>
    </section>`;

  const status = area.querySelector('#config-status');
  listarAlunos()
    .then(alunos => {
      area.querySelector('#config-lista-alunos').innerHTML = alunos.map(a =>
        `<option value="${escaparHtml(a.usuario)}">${escaparHtml(a.nome || a.usuario)} — ${a.respostas} respostas</option>`).join('');
    })
    .catch(() => {
      status.textContent = 'Não foi possível listar os alunos: publique as regras novas (firestore.rules) no Console do Firebase.';
    });

  area.querySelector('#config-resetar').addEventListener('click', async () => {
    const usuario = area.querySelector('#config-usuario').value.trim();
    if (!usuario) { status.textContent = 'Digite o usuário do aluno.'; return; }
    const nome = escaparHtml(usuario);
    if (!(await confirmar({
      titulo: `Resetar a memória de ${nome}?`,
      mensagem: 'Todos os erros e acertos registrados desse aluno serão apagados. O guia dele volta a começar do zero.',
      textoConfirmar: 'Continuar', perigo: true,
    }))) return;
    if (!(await confirmar({
      titulo: 'Tem certeza? Não dá para desfazer.',
      mensagem: `Confirme para apagar <strong>definitivamente</strong> a memória de erros e acertos de <strong>${nome}</strong>.`,
      textoConfirmar: 'Apagar a memória', perigo: true,
    }))) return;
    status.textContent = 'Apagando...';
    try {
      const r = await resetarMemoriaDoAluno(usuario);
      if (r.usuario === usuarioExibido(usuarioAtual())) resetarMemoriaLocal(r.resetEm);   // resetou a própria conta
      status.textContent = `Memória de ${r.usuario} apagada (${r.apagadas} registros). Se o aluno estiver com o site aberto, ele precisa recarregar a página.`;
    } catch (e) {
      status.textContent = 'Erro: ' + (e.code === 'permission-denied'
        ? 'sem permissão. Confira se a sua conta está na coleção admins e se as regras novas foram publicadas.'
        : e.message);
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
          const noCabecalho = document.querySelector('.cabecalho-usuario__nome');
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
