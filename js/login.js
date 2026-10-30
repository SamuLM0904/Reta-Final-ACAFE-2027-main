/**
 * login.js — Tela de entrada (só aparece com o banco de dados Firebase ativo).
 *
 * O aluno entra com um usuário — e-mail OU nome e sobrenome
 * ("João da Silva" → usuário "joao_silva") — e uma senha.
 */

import { entrar, criarConta, redefinirSenha, normalizarUsuario } from './nuvem.js';

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
              ? 'Use seu e-mail ou seu nome e sobrenome. Seu progresso fica salvo na sua conta.'
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
              <span>Usuário</span>
              <input type="text" name="usuario" autocomplete="username" required
                placeholder="E-mail ou nome e sobrenome" autocapitalize="none" spellcheck="false">
              <small class="login-campo__dica" id="login-previa">Ex.: maria@email.com ou Maria Souza (vira maria_souza)</small>
            </label>
            <label class="login-campo">
              <span>Senha</span>
              <input type="password" name="senha" autocomplete="${criar ? 'new-password' : 'current-password'}" required minlength="6">
            </label>
            ${criar ? `
              <label class="login-campo">
                <span>Confirmar senha</span>
                <input type="password" name="confirmacao" autocomplete="new-password" required minlength="6">
              </label>` : ''}

            <p class="login-erro" id="login-erro" role="alert"></p>

            <button type="submit" class="btn btn-primario login-enviar" id="login-enviar">
              ${criar ? 'Criar conta' : 'Entrar'}
            </button>
            ${criar ? '' : `<button type="button" class="login-link" id="login-esqueci">Esqueci minha senha</button>`}
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

    // Mostra como o usuário vai ficar
    const atualizarPrevia = () => {
      const u = normalizarUsuario(campoU.value);
      previa.textContent = !campoU.value.trim()
        ? 'Ex.: maria@email.com ou Maria Souza (vira maria_souza)'
        : u ? `Seu usuário: ${u}` : 'Digite um e-mail ou pelo menos nome e sobrenome.';
    };
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

      botao.disabled = true;
      botao.textContent = 'Aguarde...';
      try {
        if (criar) await criarConta(usuario, senha, form.elements.nome.value.trim());
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
      try {
        await redefinirSenha(campoU.value);
        erroEl.textContent = 'Enviamos um e-mail para redefinir sua senha.';
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

