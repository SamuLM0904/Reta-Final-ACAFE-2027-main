/**
 * nuvem.js — Integração com o Firebase (login + banco de dados Firestore).
 *
 * Só é ativada quando js/firebase-config.js tem a configuração do projeto;
 * sem ela, o site funciona no modo local (localStorage) como antes.
 *
 * LOGIN: o aluno se cadastra e entra só com USUÁRIO e SENHA. O e-mail é opcional
 * e serve apenas para recuperar a senha ("Esqueci a senha").
 *   - O Firebase exige que cada conta tenha um identificador no formato de e-mail.
 *     Com e-mail de recuperação, esse identificador é o próprio e-mail do aluno.
 *     Sem e-mail, é um identificador interno ("usuario@alunos.retafinal.app"),
 *     invisível, que nunca recebe mensagens.
 *   - A coleção `usuarios` liga o nome de usuário à conta, para o login ser sempre
 *     pelo usuário.
 *
 * Estrutura no Firestore (os documentos de alunos usam o NOME DE USUÁRIO, ex.: "joao_silva",
 * para ficarem fáceis de achar no Console):
 *   usuarios/{usuario} → { uid, email, temEmail, emailPendente? } — usuário → conta (lido antes do login)
 *   contas/{uid}       → { usuario } — conta → usuário (só o dono lê)
 *   emails/{email}     → { usuario, uid } — índice para "Esqueci meu usuário" (só e-mails de recuperação)
 *   alunos/{usuario}   → dados de cada aluno: { perfil, respostas, simulado, memoria, guia, atualizadoEm }
 *                        (o mesmo objeto salvo no navegador por armazenamento.js)
 *   questoes/{id}      → banco de questões: cada questão + { banco: 'provas' | 'estudo', ordem }
 *   admins/{uid}       → administradores (ID = UID da conta); primeiro admin pelo Console
 */

import { FIREBASE_CONFIG } from './firebase-config.js';

const SDK = 'https://www.gstatic.com/firebasejs/10.12.2';
const DOMINIO_ALUNOS = 'alunos.retafinal.app';

let fb = null;          // módulos do SDK + instâncias (carregados sob demanda)
let usuario = null;     // usuário logado (Firebase User) ou null
let nomeUsuario = '';   // nome de usuário do aluno logado (ex.: "joao_silva")
let cadastro = null;    // { usuario, pronto: Promise } enquanto uma conta está sendo criada
let nomeDoPerfil = null; // nome digitado ao criar a conta (alunos/{usuario}.perfil.nome)

/** O banco de dados está configurado? */
export const nuvemAtiva = () => Boolean(FIREBASE_CONFIG);

/** Usuário logado, ou null. */
export const usuarioAtual = () => usuario;

/* ================================================================
   Nome de usuário
   ================================================================ */

/**
 * Converte o que o aluno digitou em nome de usuário (minúsculas, sem acento).
 * "João da Silva" → "joao_silva"; "teste_acafe" → "teste_acafe"; "maria2" → "maria2".
 * @param {string} texto
 * @returns {string} usuário, ou '' se não der para formar um (curto demais ou com "@")
 */
export function normalizarUsuario(texto) {
  const t = (texto || '').trim().toLowerCase();
  if (t.includes('@')) return '';
  const limpo = t.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9\s_.-]/g, ' ');
  const palavras = limpo.split(/\s+/).filter(Boolean);
  if (!palavras.length) return '';
  const u = palavras.length === 1 ? palavras[0] : `${palavras[0]}_${palavras[palavras.length - 1]}`;
  return u.length >= 3 ? u : '';
}

/** Identificador interno de quem não cadastrou e-mail (nunca recebe mensagens). */
const emailInterno = u => `${u}@${DOMINIO_ALUNOS}`;

/** Nome de usuário do aluno logado ("joao_silva"). */
export const usuarioExibido = user => {
  if (!user) return '';
  if (user === usuario && nomeUsuario) return nomeUsuario;
  return user.email?.endsWith('@' + DOMINIO_ALUNOS) ? user.email.split('@')[0] : user.email || '';
};

/** A conta tem e-mail de recuperação (pode usar "Esqueci a senha")? */
export const temEmailReal = user => Boolean(user?.email) && !user.email.endsWith('@' + DOMINIO_ALUNOS);

/** Documento do aluno logado: alunos/{usuario}. */
const docAluno = () => fb.f.doc(fb.db, 'alunos', usuarioExibido(usuario));
const docUsuario = u => fb.f.doc(fb.db, 'usuarios', u);
const docEmail = email => fb.f.doc(fb.db, 'emails', email);

/** Atualiza o índice e-mail → usuário (para "Esqueci meu usuário"). */
async function indexarEmail(u, user, emailAntigo = null) {
  if (emailAntigo && emailAntigo !== user.email && !emailAntigo.endsWith('@' + DOMINIO_ALUNOS)) {
    await fb.f.deleteDoc(docEmail(emailAntigo)).catch(() => {});
  }
  if (temEmailReal(user)) await fb.f.setDoc(docEmail(user.email), { usuario: u, uid: user.uid });
}

/**
 * Descobre o nome de usuário da conta que acabou de entrar e mantém a coleção
 * `usuarios` em dia (contas antigas, sem registro, e e-mail de recuperação confirmado).
 */
async function resolverNomeUsuario(user) {
  if (cadastro) { const c = cadastro; await c.pronto.catch(() => {}); return c.usuario; }
  let u = '';
  try {
    const conta = await fb.f.getDoc(fb.f.doc(fb.db, 'contas', user.uid));
    if (conta.exists()) u = conta.data().usuario;
  } catch { /* sem conexão: usa a dedução abaixo */ }
  if (!u) u = user.email?.endsWith('@' + DOMINIO_ALUNOS) ? user.email.split('@')[0] : user.email || '';
  try {
    const reg = await fb.f.getDoc(docUsuario(u));
    const dados = reg.exists() ? reg.data() : null;
    if (!dados) {
      // conta antiga (criada antes da coleção `usuarios`): registra agora
      await fb.f.setDoc(docUsuario(u), { uid: user.uid, email: user.email, temEmail: temEmailReal(user) });
      await fb.f.setDoc(fb.f.doc(fb.db, 'contas', user.uid), { usuario: u });
      await indexarEmail(u, user);
    } else if (dados.uid === user.uid && dados.email !== user.email) {
      // o aluno confirmou um e-mail de recuperação novo: atualiza o registro e o índice
      await fb.f.setDoc(docUsuario(u), { uid: user.uid, email: user.email, temEmail: temEmailReal(user) });
      await indexarEmail(u, user, dados.email);
    }
  } catch (e) { console.warn('[Nuvem] Não foi possível atualizar o registro do usuário:', e); }
  return u;
}

/* ================================================================
   Inicialização
   ================================================================ */

/**
 * Carrega o SDK e espera o Firebase informar se há alguém logado.
 * @param {(user: Object|null) => void} aoMudarUsuario - chamado a cada entrada/saída
 */
export async function iniciarNuvem(aoMudarUsuario) {
  if (!nuvemAtiva()) return;
  const [app, auth, fs] = await Promise.all([
    import(`${SDK}/firebase-app.js`),
    import(`${SDK}/firebase-auth.js`),
    import(`${SDK}/firebase-firestore.js`),
  ]);
  const aplicativo = app.initializeApp(FIREBASE_CONFIG);
  fb = {
    auth: auth.getAuth(aplicativo),
    // Cache local do próprio Firestore: menos leituras e funciona offline
    db: fs.initializeFirestore(aplicativo, { localCache: fs.persistentLocalCache() }),
    a: auth,
    f: fs,
  };
  await new Promise(resolver => {
    let primeiraVez = true;
    fb.a.onAuthStateChanged(fb.auth, async user => {
      if (!user || user.uid !== usuario?.uid) nomeDoPerfil = cadastro ? nomeDoPerfil : null;   // outra conta: esquece o nome
      usuario = user;
      nomeUsuario = user ? await resolverNomeUsuario(user) : '';
      aoMudarUsuario(user);
      if (primeiraVez) { primeiraVez = false; resolver(); }
    });
  });
}

/* ================================================================
   Conta
   ================================================================ */

const MENSAGENS = {
  'auth/invalid-credential': 'Usuário ou senha incorretos.',
  'auth/wrong-password': 'Usuário ou senha incorretos.',
  'auth/user-not-found': 'Usuário não encontrado.',
  'auth/email-already-in-use': 'Já existe uma conta com esse e-mail (ou com esse usuário). Use outro.',
  'auth/weak-password': 'A senha precisa ter pelo menos 6 caracteres.',
  'auth/invalid-email': 'E-mail inválido.',
  'auth/too-many-requests': 'Muitas tentativas. Aguarde alguns minutos e tente de novo.',
  'auth/network-request-failed': 'Sem conexão com a internet.',
  'auth/requires-recent-login': 'Por segurança, saia e entre de novo antes de fazer isso.',
};
const traduzirErro = e => new Error(MENSAGENS[e?.code] || 'Não foi possível concluir. Tente novamente.');
const credencialErrada = e => ['auth/invalid-credential', 'auth/wrong-password', 'auth/user-not-found'].includes(e?.code);

/** Lê o registro usuarios/{usuario} (antes do login). @returns {Promise<Object|null>} */
async function lerRegistro(u) {
  const snap = await fb.f.getDoc(docUsuario(u));
  return snap.exists() ? snap.data() : null;
}

/** Entra com usuário e senha. */
export async function entrar(textoUsuario, senha) {
  const texto = (textoUsuario || '').trim().toLowerCase();
  // contas antigas que usaram o e-mail como usuário continuam entrando com ele
  const u = texto.includes('@') ? texto : normalizarUsuario(texto);
  if (!u) throw new Error('Digite o seu usuário.');
  let registro = null;
  try { registro = await lerRegistro(u); } catch { /* sem registro: tenta como conta antiga */ }
  const tentativas = [registro?.email || (u.includes('@') ? u : emailInterno(u))];
  if (registro?.emailPendente) tentativas.push(registro.emailPendente);   // e-mail de recuperação recém-confirmado
  for (let i = 0; i < tentativas.length; i++) {
    try { await fb.a.signInWithEmailAndPassword(fb.auth, tentativas[i], senha); return; } catch (e) {
      if (i === tentativas.length - 1 || !credencialErrada(e)) throw traduzirErro(e);
    }
  }
}

/**
 * Cria a conta: usuário + senha (+ e-mail de recuperação opcional) e os documentos
 * usuarios/{usuario}, contas/{uid} e alunos/{usuario}.
 * @param {string} textoUsuario
 * @param {string} senha
 * @param {string} nome              - nome completo (exibição)
 * @param {string} [emailRecuperacao] - opcional; sem ele, a senha não pode ser recuperada por e-mail
 */
export async function criarConta(textoUsuario, senha, nome, emailRecuperacao = '') {
  const u = normalizarUsuario(textoUsuario);
  if (!u) throw new Error('Escolha um usuário com pelo menos 3 letras (sem "@").');
  const email = emailRecuperacao.trim().toLowerCase();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('O e-mail de recuperação não parece válido.');
  if (await lerRegistro(u).catch(() => null)) throw new Error(`O usuário "${u}" já existe. Escolha outro.`);

  let terminar, falhar;
  cadastro = { usuario: u, pronto: new Promise((ok, erro) => { terminar = ok; falhar = erro; }) };
  nomeDoPerfil = nome || null;   // já vale para a primeira tela, antes de o perfil ser gravado
  try {
    const { user } = await fb.a.createUserWithEmailAndPassword(fb.auth, email || emailInterno(u), senha);
    if (nome) await fb.a.updateProfile(user, { displayName: nome });
    await fb.f.setDoc(docUsuario(u), { uid: user.uid, email: user.email, temEmail: Boolean(email) });
    await fb.f.setDoc(fb.f.doc(fb.db, 'contas', user.uid), { usuario: u });
    await indexarEmail(u, user);
    await fb.f.setDoc(fb.f.doc(fb.db, 'alunos', u), {
      perfil: { usuario: u, nome: nome || '', criadoEm: new Date().toISOString() },
    }, { merge: true });
    nomeUsuario = u;
    terminar();
  } catch (e) {
    falhar(e);
    throw e.code ? traduzirErro(e) : e;
  } finally {
    setTimeout(() => { cadastro = null; }, 0);
  }
}

/**
 * Envia o link de redefinição de senha para o e-mail de recuperação do usuário.
 * Contas sem e-mail de recuperação não podem recuperar a senha por e-mail.
 * @param {string} textoUsuario
 */
export async function redefinirSenha(textoUsuario) {
  const texto = (textoUsuario || '').trim().toLowerCase();
  if (texto.includes('@')) {
    // pelo e-mail de recuperação
    if (!(await fb.f.getDoc(docEmail(texto)).catch(() => null))?.exists()) {
      throw new Error('Não há conta com esse e-mail de recuperação.');
    }
    try { await fb.a.sendPasswordResetEmail(fb.auth, texto); } catch (e) { throw traduzirErro(e); }
    return texto;
  }
  const u = normalizarUsuario(texto);
  if (!u) throw new Error('Digite o seu usuário ou e-mail para recuperar a senha.');
  const registro = await lerRegistro(u).catch(() => null);
  if (!registro?.temEmail) {
    throw new Error('Essa conta não tem e-mail de recuperação, então a senha não pode ser recuperada por e-mail. Peça ajuda ao administrador.');
  }
  try { await fb.a.sendPasswordResetEmail(fb.auth, registro.email); } catch (e) { throw traduzirErro(e); }
  return registro.email.replace(/^(.).*(@.*)$/, '$1•••$2');   // e-mail parcialmente escondido, para a mensagem
}

/** Confirma a senha atual do aluno logado (o Firebase exige um login recente para mudanças na conta). */
async function confirmarSenhaAtual(senhaAtual) {
  try {
    await fb.a.reauthenticateWithCredential(usuario, fb.a.EmailAuthProvider.credential(usuario.email, senhaAtual));
  } catch (e) {
    if (credencialErrada(e)) throw new Error('A senha atual está incorreta.');
    throw traduzirErro(e);
  }
}

/**
 * Troca a senha do aluno logado (confirma a senha atual antes).
 * @param {string} senhaAtual
 * @param {string} novaSenha
 */
export async function trocarSenha(senhaAtual, novaSenha) {
  if (!usuario) throw new Error('Entre na sua conta para trocar a senha.');
  await confirmarSenhaAtual(senhaAtual);
  try { await fb.a.updatePassword(usuario, novaSenha); } catch (e) { throw traduzirErro(e); }
}

/**
 * Cadastra (ou troca) o e-mail de recuperação. O Firebase envia um link de confirmação
 * para o e-mail novo; a troca só vale depois que o aluno clica nele.
 * @param {string} senhaAtual
 * @param {string} novoEmail
 */
export async function cadastrarEmailRecuperacao(senhaAtual, novoEmail) {
  if (!usuario) throw new Error('Entre na sua conta primeiro.');
  const email = (novoEmail || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Digite um e-mail válido.');
  if (email === usuario.email) throw new Error('Esse já é o seu e-mail de recuperação.');
  await confirmarSenhaAtual(senhaAtual);
  try { await fb.a.verifyBeforeUpdateEmail(usuario, email); } catch (e) { throw traduzirErro(e); }
  // guarda o e-mail pendente: depois da confirmação, o login pelo usuário passa a usá-lo
  await fb.f.setDoc(docUsuario(usuarioExibido(usuario)), { emailPendente: email }, { merge: true });
}

/**
 * "Esqueci meu usuário": devolve o usuário ligado a um e-mail de recuperação.
 * @param {string} email
 * @returns {Promise<string>}
 */
export async function recuperarUsuario(email) {
  const e = (email || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) throw new Error('Digite o seu e-mail de recuperação.');
  const snap = await fb.f.getDoc(docEmail(e)).catch(() => null);
  if (!snap?.exists()) throw new Error('Não há conta com esse e-mail de recuperação. Sem e-mail cadastrado, só o administrador pode ajudar.');
  return snap.data().usuario;
}

/** Altera o nome completo do aluno logado. */
export async function alterarNome(nome) {
  const n = (nome || '').trim().replace(/\s+/g, ' ');
  if (n.length < 2) throw new Error('Digite o seu nome completo.');
  try {
    await fb.a.updateProfile(usuario, { displayName: n });
    await fb.f.setDoc(docAluno(), { perfil: { nome: n } }, { merge: true });
    nomeDoPerfil = n;
  } catch (e) { throw e.code ? traduzirErro(e) : e; }
  return n;
}

/**
 * Altera o nome de usuário do aluno logado: cria o registro novo, copia os dados
 * do aluno para alunos/{novo} e apaga os do usuário antigo. A senha e o e-mail não mudam.
 * @param {string} textoNovo
 * @returns {Promise<string>} o usuário novo
 */
export async function alterarUsuario(textoNovo) {
  const novo = normalizarUsuario(textoNovo);
  const antigo = usuarioExibido(usuario);
  if (!novo) throw new Error('Escolha um usuário com pelo menos 3 letras (sem "@").');
  if (novo === antigo) throw new Error('Esse já é o seu usuário.');
  if (await lerRegistro(novo).catch(() => null)) throw new Error(`O usuário "${novo}" já existe. Escolha outro.`);
  try {
    const dados = (await fb.f.getDoc(docAluno())).data() || {};
    const registroAntigo = await lerRegistro(antigo).catch(() => null);
    await fb.f.setDoc(docUsuario(novo), { uid: usuario.uid, email: usuario.email, temEmail: temEmailReal(usuario) });
    await fb.f.setDoc(fb.f.doc(fb.db, 'alunos', novo), { ...dados, perfil: { ...(dados.perfil || {}), usuario: novo } });
    await fb.f.setDoc(fb.f.doc(fb.db, 'contas', usuario.uid), { usuario: novo });
    await indexarEmail(novo, usuario);
    await fb.f.deleteDoc(fb.f.doc(fb.db, 'alunos', antigo));
    if (registroAntigo?.uid === usuario.uid) await fb.f.deleteDoc(docUsuario(antigo));
    nomeUsuario = novo;
  } catch (e) {
    console.warn('[Nuvem] Falha ao trocar o usuário:', e);
    throw new Error('Não foi possível trocar o usuário agora. Tente de novo.');
  }
  return novo;
}

export async function sair() {
  await fb.a.signOut(fb.auth);
}

/* ================================================================
   Dados do aluno
   ================================================================ */

/** Lê alunos/{usuario}. @returns {Promise<Object|null>} */
export async function lerDadosAluno() {
  if (!usuario) return null;
  const snap = await fb.f.getDoc(docAluno());
  const dados = snap.exists() ? snap.data() : null;
  nomeDoPerfil = dados?.perfil?.nome || nomeDoPerfil;
  atualizarResumo(dados || {}, true);
  iniciarPresenca();
  return dados;
}


/**
 * Nome completo do aluno, como ele digitou ao criar a conta (ou ao trocar o nome em
 * Configurações). Usa o perfil salvo no banco e, se ainda não houver, o nome da conta.
 * @returns {string|null}
 */
export function nomeDoAluno() {
  if (!usuario) return null;
  return (nomeDoPerfil || usuario.displayName || '').trim() || null;
}

/**
 * Avisa quando um administrador zerar o progresso deste aluno com o site aberto
 * (sem isso, a próxima gravação devolveria os dados antigos para a nuvem).
 * @param {number} conhecido - memoriaResetadaEm que este navegador já conhece
 * @param {(resetEm: number) => void} aoResetar
 */
export function ouvirReset(conhecido, aoResetar) {
  if (!usuario || !fb) return;
  fb.f.onSnapshot(docAluno(), snap => {
    const resetEm = snap.data()?.memoriaResetadaEm || 0;
    if (resetEm > conhecido) { conhecido = resetEm; pendente = null; clearTimeout(temporizador); aoResetar(resetEm); }
  }, () => { /* sem permissão ou offline: ignora */ });
}

let pendente = null, temporizador = null;

/**
 * Grava alunos/{usuario}, agrupando gravações seguidas (no máximo uma a cada 2 s).
 * @param {Object} dados - objeto completo do aluno (respostas, simulado, ...)
 */
export function agendarGravacaoAluno(dados) {
  if (!usuario || !fb) return;
  pendente = dados;
  clearTimeout(temporizador);
  temporizador = setTimeout(gravarAgora, 2000);
}

/** Grava imediatamente o que estiver pendente (ex.: ao fechar a aba). */
export function gravarAgora() {
  clearTimeout(temporizador);
  if (!pendente || !usuario || !fb) return Promise.resolve();
  const dados = pendente; pendente = null;
  atualizarResumo(dados);
  return fb.f.setDoc(docAluno(), dados, { merge: true })
    .catch(e => console.warn('[Nuvem] Falha ao salvar (vai tentar de novo na próxima alteração):', e));
}

window.addEventListener('pagehide', () => { gravarAgora(); });

/* ================================================================
   Banco de questões
   ================================================================ */

/**
 * Lê o banco de questões do Firestore.
 * @returns {Promise<{ estudo: Object[], provas: Object[] } | null>} null se o banco estiver vazio
 */
export async function lerQuestoes() {
  if (!fb) return null;
  const snap = await fb.f.getDocs(fb.f.collection(fb.db, 'questoes'));
  if (snap.empty) return null;
  const todas = snap.docs.map(d => d.data()).sort((a, b) => (a.ordem ?? 0) - (b.ordem ?? 0));
  const limpar = ({ banco, ordem, ...q }) => q;
  return {
    estudo: todas.filter(q => q.banco === 'estudo').map(limpar),
    provas: todas.filter(q => q.banco === 'provas').map(limpar),
  };
}

/** O usuário logado é administrador? (existe admins/{UID da conta}) */
/**
 * Plano da conta em uso: 'ilimitado' para administradores; senão o de planos/<usuário>
 * ('gratuito' se não houver registro). Só administradores podem mudar (firestore.rules).
 * @returns {Promise<string>}
 */
export async function lerPlanoDaConta() {
  if (!usuario || !fb) return 'gratuito';
  const u = usuarioExibido(usuario);
  const ref = fb.f.doc(fb.db, 'planos', u);
  const admin = await eAdmin();
  try {
    const snap = await fb.f.getDoc(ref);
    if (!snap.exists()) {
      // primeiro acesso: a conta cria o próprio registro, como gratuito (visível no Console)
      await fb.f.setDoc(ref, { usuario: u, nome: usuario.displayName || '', plano: 'gratuito', admin: false, atualizadoEm: Date.now() });
      if (admin) await fb.f.setDoc(ref, { admin: true, atualizadoEm: Date.now() }, { merge: true });
    } else if (admin && snap.data().admin !== true) {
      await fb.f.setDoc(ref, { admin: true, atualizadoEm: Date.now() }, { merge: true });
    }
    if (admin) return 'ilimitado';
    return (snap.exists() && snap.data().plano) || 'gratuito';
  } catch {
    return admin ? 'ilimitado' : 'gratuito';
  }
}

/* ---------------- Contas e planos (só administradores) ---------------- */

/** Troca o plano de uma conta (só administradores). */
export async function definirPlanoDoAluno(textoUsuario, plano, nome = '') {
  const u = normalizarUsuario(textoUsuario) || (textoUsuario || '').trim().toLowerCase();
  if (!['gratuito', 'basico', 'pro', 'ultra'].includes(plano)) throw new Error('Plano inválido.');
  await fb.f.setDoc(fb.f.doc(fb.db, 'planos', u), {
    usuario: u, nome, plano, atualizadoEm: Date.now(), alteradoPor: usuarioExibido(usuario),
  }, { merge: true });
  return u;
}

export async function eAdmin() {
  if (!usuario || !fb) return false;
  try {
    // Administrador = existe admins/{UID da conta} (mesma regra do firestore.rules)
    return (await fb.f.getDoc(fb.f.doc(fb.db, 'admins', usuario.uid))).exists();
  } catch { return false; }
}

/**
 * Envia (cria ou atualiza) as questões dos arquivos de dados para o Firestore.
 * @param {Object[]} estudo - window.QUESTOES dos arquivos
 * @param {Object[]} provas - window.QUESTOES_PROVAS dos arquivos
 * @returns {Promise<number>} quantidade enviada
 */
export async function enviarQuestoes(estudo, provas) {
  const itens = [
    ...estudo.map((q, i) => ({ ...q, banco: 'estudo', ordem: i })),
    ...provas.map((q, i) => ({ ...q, banco: 'provas', ordem: i })),
  ];
  // O Firestore aceita no máximo 500 gravações por lote
  for (let i = 0; i < itens.length; i += 450) {
    const lote = fb.f.writeBatch(fb.db);
    itens.slice(i, i + 450).forEach(q => lote.set(fb.f.doc(fb.db, 'questoes', q.id), q));
    await lote.commit();
  }
  return itens.length;
}

/* ================================================================
   Administração de alunos (Guia de Estudos)
   ================================================================ */

/** Promove uma conta existente identificada pelo nome de usuário. */
export async function adicionarAdministrador(textoUsuario) {
  const u = normalizarUsuario(textoUsuario);
  if (!u) throw new Error('Digite um nome de usuário válido, sem e-mail.');
  const conta = await fb.f.getDoc(docUsuario(u));
  if (!conta.exists() || !conta.data().uid) throw new Error(`Conta "${u}" não encontrada.`);

  const uid = conta.data().uid;
  const ref = fb.f.doc(fb.db, 'admins', uid);
  if ((await fb.f.getDoc(ref)).exists()) throw new Error(`"${u}" já é administrador.`);
  await fb.f.setDoc(ref, {
    uid,
    usuario: u,
    funcao: 'admin',
    adicionadoEm: Date.now(),
  });
  return u;
}

/** Remove um administrador, sem permitir que a conta remova o próprio acesso. */
export async function removerAdministrador(uid) {
  if (!usuario || uid === usuario.uid) throw new Error('Não é possível remover o próprio acesso de administrador.');
  await fb.f.deleteDoc(fb.f.doc(fb.db, 'admins', uid));
}

/**
 * Memórias de erros e acertos de todos os alunos (só administradores podem).
 * @returns {Promise<{ usuario: string, memoria: Object[] }[]>}
 */
export async function lerMemoriasAlunos() {
  const snap = await fb.f.getDocs(fb.f.collection(fb.db, 'alunos'));
  return snap.docs.map(d => ({ usuario: d.id, memoria: d.data().memoria || [] }));
}

/**
 * Grava dados de teste (js/dados-teste.js) na conta de um aluno (só administradores podem):
 * substitui questões feitas, simulados e memória. O Guia e o perfil ficam como estão.
 * Grava também um `memoriaResetadaEm` novo: os navegadores dessa conta descartam a cópia
 * local e passam a usar estes dados (o mesmo caminho do reset; ver ouvirReset).
 * @param {string} textoUsuario
 * @param {{ respostas: Object, simulado: Object, memoria: Object[] }} dados
 * @returns {Promise<{ usuario: string, resetEm: number }>}
 */
export async function gravarDadosDeTeste(textoUsuario, dados) {
  const u = normalizarUsuario(textoUsuario) || (textoUsuario || '').trim().toLowerCase();
  const ref = fb.f.doc(fb.db, 'alunos', u);
  const snap = await fb.f.getDoc(ref);
  if (!snap.exists()) throw new Error(`Aluno "${u}" não encontrado.`);
  const agora = Date.now();
  await fb.f.updateDoc(ref, {
    respostas: dados.respostas, simulado: dados.simulado, memoria: dados.memoria,
    memoriaResetadaEm: agora, atualizadoEm: agora,
  });
  return { usuario: u, resetEm: agora };
}

/**
 * Zera o progresso de um aluno (só administradores podem): questões respondidas, simulados,
 * memória de erros e acertos e o Guia de Estudos. A conta (perfil, nome, login) fica.
 * Grava também `memoriaResetadaEm`, para que a cópia no navegador do aluno seja
 * descartada (ver armazenamento.js e ouvirReset).
 * @param {string} textoUsuario - nome de usuário (ou e-mail / nome e sobrenome)
 * @returns {Promise<{ usuario: string, apagadas: number, resetEm: number }>}
 */
export async function resetarMemoriaDoAluno(textoUsuario) {
  const u = normalizarUsuario(textoUsuario) || (textoUsuario || '').trim().toLowerCase();
  const ref = fb.f.doc(fb.db, 'alunos', u);
  const snap = await fb.f.getDoc(ref);
  if (!snap.exists()) throw new Error(`Aluno "${u}" não encontrado.`);
  const resetEm = Date.now();
  await fb.f.updateDoc(ref, {
    respostas: {}, simulado: { atual: null, tentativas: [] }, memoria: [], guia: null,
    memoriaResetadaEm: resetEm, atualizadoEm: resetEm,
  });
  return { usuario: u, apagadas: (snap.data().memoria || []).length, resetEm };
}

/* ================================================================
   Resumo de cada conta: resumos/{usuario}
   Um documento pequeno com os números do aluno (questões, acertos, simulados, último
   acesso, e-mail), gravado pelo próprio aluno ao entrar e, no máximo, a cada 10 minutos
   de uso. É o que a lista de Usuários da Administração lê: assim ela não precisa baixar o
   histórico inteiro de cada aluno (que pode ter milhares de respostas).
   ================================================================ */

let ultimoResumo = 0;
const INTERVALO_RESUMO = 10 * 60 * 1000;

/** Os números que vão no resumo, a partir dos dados completos do aluno. */
function numerosDoResumo(dados) {
  const memoria = Array.isArray(dados.memoria) ? dados.memoria : [];
  const tentativas = dados.simulado?.tentativas || [];
  return {
    respostas: memoria.length,
    acertos: memoria.filter(m => m.ok).length,
    simulados: tentativas.length,
    ultimaResposta: memoria.length ? memoria[memoria.length - 1].t || null : null,
  };
}

function atualizarResumo(dados, forcar = false) {
  if (!usuario || !fb) return;
  const agora = Date.now();
  if (!forcar && agora - ultimoResumo < INTERVALO_RESUMO) return;
  ultimoResumo = agora;
  const u = usuarioExibido(usuario);
  fb.f.setDoc(fb.f.doc(fb.db, 'resumos', u), {
    usuario: u,
    uid: usuario.uid,
    nome: dados.perfil?.nome || usuario.displayName || '',
    email: temEmailReal(usuario) ? usuario.email : '',
    criadoEm: Date.parse(usuario.metadata?.creationTime || '') || null,
    ultimoAcesso: agora,
    ...numerosDoResumo(dados),
  }, { merge: true }).catch(() => { /* regras antigas ou offline: tenta de novo depois */ });
}

/* ---------------- Usuários (só administradores) ---------------- */

/**
 * Todas as contas, com plano, admin e os números do resumo. Lê só três coleções de
 * documentos pequenos (resumos, planos e admins), então continua rápido com centenas de alunos.
 * @returns {Promise<Object[]>}
 */
export async function listarUsuarios() {
  const [resumos, planos, admins] = await Promise.all([
    fb.f.getDocs(fb.f.collection(fb.db, 'resumos')),
    fb.f.getDocs(fb.f.collection(fb.db, 'planos')),
    fb.f.getDocs(fb.f.collection(fb.db, 'admins')),
  ]);
  const contas = new Map();
  const pegar = u => { if (!contas.has(u)) contas.set(u, { usuario: u }); return contas.get(u); };
  planos.docs.forEach(d => { const p = d.data(); Object.assign(pegar(d.id), { plano: p.plano, nome: p.nome || '', planoAlteradoEm: p.atualizadoEm || null, planoAlteradoPor: p.alteradoPor || null, temPlano: true }); });
  resumos.docs.forEach(d => { const r = d.data(); const c = pegar(d.id); Object.assign(c, { ...r, nome: r.nome || c.nome || '', temResumo: true }); });
  const adminPorUsuario = new Map(admins.docs.map(d => [d.data().usuario || d.id, d.id]));
  adminPorUsuario.forEach((uid, u) => { const c = pegar(u); c.uid ||= uid; });
  return [...contas.values()].map(c => ({
    nome: '', email: '', plano: 'gratuito', respostas: null, acertos: null, simulados: null, ultimoAcesso: null, criadoEm: null,
    ...c,
    admin: adminPorUsuario.has(c.usuario),
    adminUid: adminPorUsuario.get(c.usuario) || null,
  })).sort((a, b) => a.usuario.localeCompare(b.usuario));
}

/**
 * Manutenção (só administradores): lê os dados completos de todos os alunos uma vez e
 * cria ou atualiza o resumo e o registro de plano de cada um. Serve para as contas que ainda
 * não entraram desde que os resumos existem. Lê tudo: use de vez em quando, não todo dia.
 * @returns {Promise<{ resumos: number, planos: number }>}
 */
export async function recalcularUsuarios() {
  const [alunos, planos] = await Promise.all([
    fb.f.getDocs(fb.f.collection(fb.db, 'alunos')),
    fb.f.getDocs(fb.f.collection(fb.db, 'planos')),
  ]);
  const comPlano = new Set(planos.docs.map(d => d.id));
  let nResumos = 0, nPlanos = 0;
  for (const d of alunos.docs) {
    const u = d.id, dados = d.data();
    const reg = await fb.f.getDoc(docUsuario(u)).catch(() => null);
    const r = reg?.exists() ? reg.data() : {};
    await fb.f.setDoc(fb.f.doc(fb.db, 'resumos', u), {
      usuario: u, nome: dados.perfil?.nome || '',
      ...(r.uid ? { uid: r.uid } : {}),
      ...(r.temEmail && r.email ? { email: r.email } : {}),
      ...numerosDoResumo(dados),
    }, { merge: true });
    nResumos++;
    if (!comPlano.has(u)) {
      await fb.f.setDoc(fb.f.doc(fb.db, 'planos', u), { usuario: u, nome: dados.perfil?.nome || '', plano: 'gratuito', admin: false, atualizadoEm: Date.now(), alteradoPor: usuarioExibido(usuario) });
      nPlanos++;
    }
  }
  return { resumos: nResumos, planos: nPlanos };
}

/* ================================================================
   Acessos: quem está online agora e o histórico de uso
   - presenca/{usuario} → { usuario, nome, t }: o site do aluno "dá sinal" a cada 2 minutos
     enquanto a página está à vista, e zera o t ao esconder ou fechar a aba. Online = sinal
     nos últimos 5 minutos.
   - atividade/{AAAA-MM-DD} → { usuarios: [...], h00..h23: [...] }: quem usou no dia e em
     cada hora. Cada aluno grava no máximo uma vez por hora (arrayUnion, sem repetir nome).
   - atividadeMes/{AAAA-MM} → { usuarios: [...] }: quem usou no mês (uma vez por dia).
   Custo baixo: ~30 gravações por aluno por dia de uso. Só administradores leem.
   ================================================================ */

export const SINAL_PRESENCA = 2 * 60 * 1000;
export const ONLINE_ATE = 5 * 60 * 1000;
let presencaIniciada = false;
let ultimaHoraGravada = '', ultimoDiaGravado = '';

const doisDig = n => String(n).padStart(2, '0');
/** "AAAA-MM-DD" e a hora "hHH" no horário do aparelho. */
export function chavesDeAtividade(data = new Date()) {
  const dia = `${data.getFullYear()}-${doisDig(data.getMonth() + 1)}-${doisDig(data.getDate())}`;
  return { dia, mes: dia.slice(0, 7), hora: `h${doisDig(data.getHours())}` };
}

function darSinal() {
  if (!usuario || !fb || document.hidden) return;
  const u = usuarioExibido(usuario);
  const nome = nomeDoPerfil || usuario.displayName || '';
  fb.f.setDoc(fb.f.doc(fb.db, 'presenca', u), { usuario: u, nome, t: Date.now() }).catch(() => {});
  const { dia, mes, hora } = chavesDeAtividade();
  if (`${dia}${hora}` !== ultimaHoraGravada) {
    ultimaHoraGravada = `${dia}${hora}`;
    fb.f.setDoc(fb.f.doc(fb.db, 'atividade', dia), { usuarios: fb.f.arrayUnion(u), [hora]: fb.f.arrayUnion(u) }, { merge: true }).catch(() => { ultimaHoraGravada = ''; });
  }
  if (dia !== ultimoDiaGravado) {
    ultimoDiaGravado = dia;
    fb.f.setDoc(fb.f.doc(fb.db, 'atividadeMes', mes), { usuarios: fb.f.arrayUnion(u) }, { merge: true }).catch(() => { ultimoDiaGravado = ''; });
  }
}

function sairDaPresenca() {
  if (!usuario || !fb) return;
  fb.f.setDoc(fb.f.doc(fb.db, 'presenca', usuarioExibido(usuario)), { t: 0 }, { merge: true }).catch(() => {});
}

function iniciarPresenca() {
  if (presencaIniciada || !usuario || !fb) return;
  presencaIniciada = true;
  darSinal();
  setInterval(darSinal, SINAL_PRESENCA);
  document.addEventListener('visibilitychange', () => (document.hidden ? sairDaPresenca() : darSinal()));
  window.addEventListener('pagehide', sairDaPresenca);
}

/**
 * Acompanha em tempo real quem está online (só administradores).
 * @param {(online: { usuario, nome, t }[]) => void} aoMudar - chamado a cada mudança
 * @returns {() => void} função que para de acompanhar
 */
export function ouvirPresenca(aoMudar) {
  let docs = [];
  const avisar = () => { const agora = Date.now(); aoMudar(docs.filter(d => d.t && agora - d.t < ONLINE_ATE)); };
  const parar = fb.f.onSnapshot(fb.f.collection(fb.db, 'presenca'), snap => { docs = snap.docs.map(d => d.data()); avisar(); }, () => {});
  const relogio = setInterval(avisar, 15000);   // quem parou de dar sinal sai da lista sozinho
  return () => { parar(); clearInterval(relogio); };
}

/** Documentos de atividade entre duas chaves (inclusive), de 'atividade' ou 'atividadeMes'. */
export async function lerAtividade(colecao, de, ate) {
  const q = fb.f.query(fb.f.collection(fb.db, colecao),
    fb.f.where(fb.f.documentId(), '>=', de), fb.f.where(fb.f.documentId(), '<=', ate));
  const snap = await fb.f.getDocs(q);
  return new Map(snap.docs.map(d => [d.id, d.data()]));
}
