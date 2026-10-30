/**
 * login.js — Tela de entrada (só aparece com o banco de dados Firebase ativo).
 *
 * O aluno se cadastra com USUÁRIO e SENHA ("João da Silva" → usuário "joao_silva") e entra com o
 * usuário ou com o e-mail de recuperação, se tiver cadastrado um.
 * O e-mail é opcional e serve apenas para recuperar a senha; quem não cadastra é avisado
 * de que, se esquecer a senha, não poderá recuperá-la sozinho.
 */

import { entrar, criarConta, redefinirSenha, recuperarUsuario, normalizarUsuario } from './nuvem.js';
import { confirmar } from './confirmar.js';

const AVISO_SEM_EMAIL = 'Sem e-mail de recuperação, <strong>se você esquecer a senha não conseguirá recuperá-la sozinho</strong>: '
  + 'só o administrador poderá ajudar. Você pode cadastrar o e-mail depois, em Configurações (⚙️).';

/**
 * @param {HTMLElement} container
 */
export function renderizarLogin(container) {
  let modo = 'entrar';   // 'entrar' | 'criar'

  function desenhar() {
    const criar = modo === 'criar';
    container.innerHTML = `
      <div class="tela-login">
        <section class="login-card" aria-label="${criar ? 'Criar conta' : 'Entrar'}">
          <h2 class="login-card__titulo">${criar ? 'Criar conta' : 'Entrar'}</h2>
          <p class="login-card__texto">
            ${criar
              ? 'Escolha um usuário e uma senha. Seu progresso fica salvo na sua conta.'
              : 'Entre para continuar de onde parou, em qualquer computador ou celular.'}
          </p>

          <div class="login-abas" role="tablist">
            <button type="button" role="tab" class="login-aba${criar ? '' : ' login-aba--ativa'}" data-modo="entrar" aria-selected="${!criar}">Entrar</button>
            <button type="button" role="tab" class="login-aba${criar ? ' login-aba--ativa' : ''}" data-modo="criar" aria-selected="${criar}">Criar conta</button>
          </div>

          <form class="login-form" id="login-form" novalidate>
            ${criar ? `
              <label class="login-campo">
                <span>Nome completo</span>
                <input type="text" name="nome" autocomplete="name" placeholder="Ex.: João da Silva">
              </label>` : ''}
            <label class="login-campo">
              <span>${criar ? 'Usuário' : 'Usuário ou e-mail'}</span>
              <input type="text" name="usuario" autocomplete="username" required
                placeholder="${criar ? 'Ex.: maria_souza' : 'Seu usuário ou e-mail de recuperação'}" autocapitalize="none" spellcheck="false">
              <small class="login-campo__dica" id="login-previa">${criar ? 'Sugerido a partir do seu nome; você pode mudar.' : ''}</small>
            </label>
            <label class="login-campo">
              <span>Senha</span>
              <input type="password" name="senha" autocomplete="${criar ? 'new-password' : 'current-password'}" required minlength="6">
            </label>
            ${criar ? `
              <label class="login-campo">
                <span>Confirmar senha</span>
                <input type="password" name="confirmacao" autocomplete="new-password" required minlength="6">
              </label>
              <label class="login-campo">
                <span>E-mail de recuperação <em class="login-opcional">(opcional)</em></span>
                <input type="email" name="email" autocomplete="email" placeholder="seu@email.com" autocapitalize="none" spellcheck="false">
                <small class="login-campo__dica">Usado só para recuperar a senha se você esquecê-la. Você entra sempre com o usuário.</small>
              </label>
              <p class="login-aviso" id="login-aviso-email">${AVISO_SEM_EMAIL}</p>` : ''}

            <p class="login-erro" id="login-erro" role="alert"></p>

            <button type="submit" class="btn btn-primario login-enviar" id="login-enviar">
              ${criar ? 'Criar conta' : 'Entrar'}
            </button>
            ${criar ? '' : `
              <div class="login-links">
                <button type="button" class="login-link" id="login-esqueci">Esqueci minha senha</button>
                <button type="button" class="login-link" id="login-esqueci-usuario">Esqueci meu usuário</button>
              </div>`}
          </form>
        </section>
      </div>
    `;

    const form    = container.querySelector('#login-form');
    const erroEl  = container.querySelector('#login-erro');
    const previa  = container.querySelector('#login-previa');
    const botao   = container.querySelector('#login-enviar');
    const campoU  = form.elements.usuario;

    container.querySelectorAll('.login-aba').forEach(aba =>
      aba.addEventListener('click', () => { modo = aba.dataset.modo; desenhar(); }));

    // Mostra como o usuário vai ficar (no cadastro)
    const atualizarPrevia = () => {
      if (!criar) return;
      const u = normalizarUsuario(campoU.value);
      previa.textContent = !campoU.value.trim()
        ? 'Sugerido a partir do seu nome; você pode mudar.'
        : campoU.value.includes('@') ? 'O usuário não pode ter "@" (o e-mail vai no campo de recuperação).'
        : u ? `Seu usuário: ${u}` : 'Use pelo menos 3 letras.';
    };
    // Aviso de "sem e-mail" visível enquanto o campo de e-mail estiver vazio
    const avisoEmail = container.querySelector('#login-aviso-email');
    form.elements.email?.addEventListener('input', () => { avisoEmail.hidden = Boolean(form.elements.email.value.trim()); });
    campoU.addEventListener('input', atualizarPrevia);
    form.elements.nome?.addEventListener('input', () => {
      if (!campoU.dataset.editado) { campoU.value = form.elements.nome.value; atualizarPrevia(); }
    });
    campoU.addEventListener('input', () => { campoU.dataset.editado = '1'; });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      erroEl.textContent = '';
      const usuario = campoU.value;
      const senha   = form.elements.senha.value;
      if (senha.length < 6) { erroEl.textContent = 'A senha precisa ter pelo menos 6 caracteres.'; return; }
      if (criar && senha !== form.elements.confirmacao.value) { erroEl.textContent = 'As senhas não conferem.'; return; }

      const email = criar ? form.elements.email.value.trim() : '';
      if (criar && !email && !(await confirmar({
        titulo: 'Criar a conta sem e-mail de recuperação?',
        mensagem: AVISO_SEM_EMAIL,
        textoConfirmar: 'Criar sem e-mail',
        textoCancelar: 'Voltar e cadastrar e-mail',
        perigo: true,
      }))) { form.elements.email.focus(); return; }

      botao.disabled = true;
      botao.textContent = 'Aguarde...';
      try {
        if (criar) await criarConta(usuario, senha, form.elements.nome.value.trim(), email);
        else       await entrar(usuario, senha);
        // a troca de tela acontece quando o Firebase avisa que o aluno entrou (app.js)
      } catch (err) {
        erroEl.textContent = err.message;
        botao.disabled = false;
        botao.textContent = criar ? 'Criar conta' : 'Entrar';
      }
    });

    container.querySelector('#login-esqueci')?.addEventListener('click', async () => {
      erroEl.textContent = '';
      if (!campoU.value.trim()) { erroEl.textContent = 'Digite o seu usuário ou e-mail e clique de novo em "Esqueci minha senha".'; campoU.focus(); return; }
      try {
        const destino = await redefinirSenha(campoU.value);
        erroEl.textContent = `Enviamos um link para ${destino} para você criar uma nova senha. Confira também o spam.`;
      } catch (err) {
        erroEl.textContent = err.message;
      }
    });

    // Esqueci meu usuário: mostra o usuário ligado ao e-mail de recuperação
    container.querySelector('#login-esqueci-usuario')?.addEventListener('click', async () => {
      erroEl.textContent = '';
      const email = campoU.value.trim();
      if (!email.includes('@')) {
        erroEl.textContent = 'Digite o seu e-mail de recuperação no campo acima e clique de novo em "Esqueci meu usuário".';
        campoU.focus();
        return;
      }
      try {
        const u = await recuperarUsuario(email);
        erroEl.innerHTML = `Seu usuário é <strong>${u}</strong>. Você também pode entrar direto com o seu e-mail.`;
      } catch (err) {
        erroEl.textContent = err.message;
      }
    });

    campoU.focus();
  }

  desenhar();
}

/** Tela simples de "carregando" enquanto o Firebase inicia. */
export function renderizarCarregando(container, texto = 'Carregando...') {
  container.innerHTML = `
    <div class="tela-login">
      <div class="login-carregando" aria-busy="true">
        <div class="spinner"></div>
        <p>${texto}</p>
      </div>
    </div>
  `;
}

