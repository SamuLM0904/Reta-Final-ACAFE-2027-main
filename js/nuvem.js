/**
 * nuvem.js — Integração com o Firebase (login + banco de dados Firestore).
 *
 * Só é ativada quando js/firebase-config.js tem a configuração do projeto;
 * sem ela, o site funciona no modo local (localStorage) como antes.
 *
 * Estrutura no Firestore:
 *   alunos/{uid}      → dados de cada aluno: { perfil, respostas, simulado, atualizadoEm }
 *                       (o mesmo objeto salvo no navegador por armazenamento.js)
 *   questoes/{id}     → banco de questões: cada questão + { banco: 'provas' | 'estudo', ordem }
 *   admins/{uid}      → existe = esse usuário pode enviar questões ao banco
 *
 * Login: o aluno usa um e-mail OU nome e sobrenome. Com nome, o usuário vira
 * "primeironome_sobrenome" e é guardado no Firebase como o e-mail interno
 * "primeironome_sobrenome@alunos.retafinal.app".
 */

import { FIREBASE_CONFIG } from './firebase-config.js';

const SDK = 'https://www.gstatic.com/firebasejs/10.12.2';
const DOMINIO_ALUNOS = 'alunos.retafinal.app';

let fb = null;          // módulos do SDK + instâncias (carregados sob demanda)
let usuario = null;     // usuário logado (Firebase User) ou null

/** O banco de dados está configurado? */
export const nuvemAtiva = () => Boolean(FIREBASE_CONFIG);

/** Usuário logado, ou null. */
export const usuarioAtual = () => usuario;

/* ================================================================
   Nome de usuário
   ================================================================ */

/**
 * Converte o que o aluno digitou em nome de usuário.
 * "João da Silva" → "joao_silva"; e-mails ficam como estão (em minúsculas).
 * @param {string} texto
 * @returns {string} usuário, ou '' se não der para formar um
 */
export function normalizarUsuario(texto) {
  const t = (texto || '').trim().toLowerCase();
  if (t.includes('@')) return t;
  const palavras = t.normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z\s_-]/g, ' ').split(/[\s_-]+/).filter(Boolean);
  if (palavras.length === 1 && t.includes('_')) return palavras[0];
  if (palavras.length < 2) return '';
  return `${palavras[0]}_${palavras[palavras.length - 1]}`;
}

/** E-mail usado no Firebase para um usuário. */
const emailDoUsuario = u => (u.includes('@') ? u : `${u}@${DOMINIO_ALUNOS}`);

/** Nome de usuário exibido a partir do e-mail do Firebase. */
export const usuarioExibido = user =>
  user?.email?.endsWith('@' + DOMINIO_ALUNOS) ? user.email.split('@')[0] : user?.email || '';

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
    fb.a.onAuthStateChanged(fb.auth, user => {
      usuario = user;
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
  'auth/email-already-in-use': 'Esse usuário já existe. Se for outra pessoa com o mesmo nome, cadastre-se com seu e-mail.',
  'auth/weak-password': 'A senha precisa ter pelo menos 6 caracteres.',
  'auth/invalid-email': 'Usuário inválido.',
  'auth/too-many-requests': 'Muitas tentativas. Aguarde alguns minutos e tente de novo.',
  'auth/network-request-failed': 'Sem conexão com a internet.',
};
const traduzirErro = e => new Error(MENSAGENS[e?.code] || 'Não foi possível concluir. Tente novamente.');

/** Entra com usuário (e-mail ou nome e sobrenome) e senha. */
export async function entrar(textoUsuario, senha) {
  const u = normalizarUsuario(textoUsuario);
  if (!u) throw new Error('Digite seu e-mail ou seu nome e sobrenome.');
  try {
    await fb.a.signInWithEmailAndPassword(fb.auth, emailDoUsuario(u), senha);
  } catch (e) { throw traduzirErro(e); }
}

/**
 * Cria a conta do aluno e o documento alunos/{uid} com o perfil.
 * @param {string} textoUsuario - e-mail ou nome completo
 * @param {string} senha
 * @param {string} nome         - nome para exibição
 */
export async function criarConta(textoUsuario, senha, nome) {
  const u = normalizarUsuario(textoUsuario);
  if (!u) throw new Error('Digite seu e-mail ou seu nome e sobrenome.');
  try {
    const { user } = await fb.a.createUserWithEmailAndPassword(fb.auth, emailDoUsuario(u), senha);
    if (nome) await fb.a.updateProfile(user, { displayName: nome });
    await fb.f.setDoc(fb.f.doc(fb.db, 'alunos', user.uid), {
      perfil: { usuario: u, nome: nome || '', criadoEm: new Date().toISOString() },
    }, { merge: true });
  } catch (e) { throw traduzirErro(e); }
}

/** Envia o e-mail de redefinição de senha (só funciona para quem usa e-mail). */
export async function redefinirSenha(textoUsuario) {
  const u = normalizarUsuario(textoUsuario);
  if (!u.includes('@')) throw new Error('A redefinição por e-mail só funciona para quem se cadastrou com e-mail. Peça ao administrador para redefinir sua senha.');
  try { await fb.a.sendPasswordResetEmail(fb.auth, u); } catch (e) { throw traduzirErro(e); }
}

export async function sair() {
  await fb.a.signOut(fb.auth);
}

/* ================================================================
   Dados do aluno
   ================================================================ */

/** Lê alunos/{uid}. @returns {Promise<Object|null>} */
export async function lerDadosAluno() {
  if (!usuario) return null;
  const snap = await fb.f.getDoc(fb.f.doc(fb.db, 'alunos', usuario.uid));
  return snap.exists() ? snap.data() : null;
}

let pendente = null, temporizador = null;

/**
 * Grava alunos/{uid}, agrupando gravações seguidas (no máximo uma a cada 2 s).
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
  return fb.f.setDoc(fb.f.doc(fb.db, 'alunos', usuario.uid), dados, { merge: true })
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

/** O usuário logado é administrador (pode enviar questões)? */
export async function eAdmin() {
  if (!usuario || !fb) return false;
  try {
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
