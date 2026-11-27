/**
 * ia-config.js — Chave do Gemini (Google AI Studio) para o chat do Guia de Estudos.
 *
 * chave: null = sem IA (o chat usa só o interpretador por regras, de graça).
 *
 * A chave fica visível no código do site. Para ninguém usar a sua chave em outro lugar,
 * restrinja-a no Google Cloud Console (APIs e serviços › Credenciais › a chave):
 *   - "Restrições de aplicativo": Sites (referenciadores HTTP) → o endereço do site
 *     (ex.: https://reta-final.vercel.app/*) e http://localhost:3000/*
 *   - "Restrições de API": só "Generative Language API".
 * No plano gratuito, se o limite acabar, o chat volta sozinho para as regras.
 */
export const GEMINI = {
  chave: null,
  modelo: 'gemini-flash-latest',
};
