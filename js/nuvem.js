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
 *   admins/{uid}       → administradores (ID = UID da conta): { usuario, nome, funcao } — só pelo Console
 */

import { FIREBASE_CONFIG } from './firebase-config.js';

const SDK = 'https://www.gstatic.com/firebasejs/10.12.2';
const DOMINIO_ALUNOS = 'alunos.retafinal.app';

let fb = null;          // módulos do SDK + instâncias (carregados sob demanda)
let usuario = null;     // usuário logado (Firebase User) ou null
let nomeUsuario = '';   // nome de usuário do aluno logado (ex.: "joao_silva")
let cadastro = null;    // { usuario, pronto: Promise } enquanto uma conta está sendo criada

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
  return snap.exists() ? snap.data() : null;
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

/**
 * Lista os alunos cadastrados (só administradores podem).
 * @returns {Promise<{ usuario: string, nome: string, respostas: number }[]>}
 */
export async function listarAlunos() {
  const snap = await fb.f.getDocs(fb.f.collection(fb.db, 'alunos'));
  return snap.docs
    .map(d => ({ usuario: d.id, nome: d.data().perfil?.nome || '', respostas: (d.data().memoria || []).length }))
    .sort((a, b) => a.usuario.localeCompare(b.usuario));
}

/**
 * Zera a memória de erros e acertos de um aluno (só administradores podem).
 * Grava também `memoriaResetadaEm`, para que a cópia no navegador do aluno
 * descarte as marcações antigas quando ele entrar de novo (ver armazenamento.js).
 * @param {string} textoUsuario - nome de usuário (ou e-mail / nome e sobrenome)
 * @returns {Promise<{ usuario: string, apagadas: number, resetEm: number }>}
 */
export async function resetarMemoriaDoAluno(textoUsuario) {
  const u = normalizarUsuario(textoUsuario) || (textoUsuario || '').trim().toLowerCase();
  const ref = fb.f.doc(fb.db, 'alunos', u);
  const snap = await fb.f.getDoc(ref);
  if (!snap.exists()) throw new Error(`Aluno "${u}" não encontrado.`);
  const resetEm = Date.now();
  await fb.f.updateDoc(ref, { memoria: [], memoriaResetadaEm: resetEm, atualizadoEm: resetEm });
  return { usuario: u, apagadas: (snap.data().memoria || []).length, resetEm };
}
