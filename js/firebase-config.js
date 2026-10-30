/**
 * firebase-config.js — Configuração do projeto Firebase.
 *
 * Enquanto FIREBASE_CONFIG for null, o site funciona só no modo local
 * (dados salvos apenas neste navegador, sem login).
 *
 * Para ligar o banco de dados: crie o projeto no Firebase (passo a passo no
 * README.md, seção "Banco de dados (Firebase)") e cole aqui o objeto
 * `firebaseConfig` do app web, por exemplo:
 *
 * export const FIREBASE_CONFIG = {
 *   apiKey: "AIza...",
 *   authDomain: "reta-final-acafe.firebaseapp.com",
 *   projectId: "reta-final-acafe",
 *   storageBucket: "reta-final-acafe.appspot.com",
 *   messagingSenderId: "123456789",
 *   appId: "1:123456789:web:abc123",
 * };
 *
 * Essas chaves não são secretas (identificam o projeto); a proteção dos dados
 * é feita pelas regras em firestore.rules.
 */
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyB6IAsjfOIS2wApjgn-hfkE_GuFHL8infQ",
  authDomain: "acafe-2027.firebaseapp.com",
  projectId: "acafe-2027",
  storageBucket: "acafe-2027.firebasestorage.app",
  messagingSenderId: "963722075296",
  appId: "1:963722075296:web:14cfe6a6b1195b8f7bfdc5",
  measurementId: "G-HJGE81WSKK",
};
