/**
 * dados-teste.js — Gera um ANO SIMULADO de uso do site para uma conta de teste
 * (Configurações › Administração › "Gerar 1 ano de dados de teste").
 *
 * Só para testes: substitui as questões feitas, os simulados e a memória de erros e
 * acertos da conta escolhida. O Guia de Estudos e o perfil (nome, login) não mudam.
 *
 * Como o ano é montado (sempre igual para a mesma data, sem sorteio diferente a cada vez):
 *   - 365 dias até ontem; estuda em ~55% dos dias no começo e ~85% no fim;
 *   - 8 a 30 questões do banco de questões por dia de estudo;
 *   - o acerto sobe de ~45% para ~75% ao longo do ano, com matérias mais fortes e mais fracas;
 *   - um simulado a cada ~14 dias (Mini → Terço → Metade → Completo conforme o ano avança);
 *   - parte das questões erradas é refeita na correção de erros (acerta mais);
 *   - parte dos erros dos simulados tem o motivo marcado (conteúdo, atenção, interpretação).
 * O total fica abaixo do limite de tamanho de um documento do Firestore (1 MB).
 */

const DIA = 86400000;
const MOTIVOS = ['conteudo', 'atencao', 'interpretacao'];
// matérias mais fortes (+) e mais fracas (−) do aluno de teste
const AJUSTE = { 'Biologia': 0.07, 'Português': 0.05, 'Literatura': 0.04, 'História': 0.02, 'Geografia': 0.01,
  'Química': -0.03, 'Espanhol': 0.06, 'Inglês': 0.03, 'Física': -0.07, 'Matemática': -0.09 };

/** Números pseudoaleatórios a partir de uma semente (o mesmo ano sempre que a semente for igual). */
function sorteador(semente) {
  let s = semente >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

/**
 * @param {Object[]} questoesProvas - provas da ACAFE (simulados)
 * @param {Object[]} questoesEstudo - banco de questões (outros vestibulares)
 * @param {{ idioma?: 'Espanhol'|'Inglês', agora?: number }} [opcoes]
 * @returns {{ respostas: Object, simulado: Object, memoria: Object[], atualizadoEm: number }}
 */
export function gerarAnoDeTeste(questoesProvas, questoesEstudo, { idioma = 'Espanhol', agora = Date.now() } = {}) {
  const r = sorteador(Math.floor(agora / DIA));
  const escolher = lista => lista[Math.floor(r() * lista.length)];
  const outroIdioma = idioma === 'Espanhol' ? 'Inglês' : 'Espanhol';
  const estudo = questoesEstudo.filter(q => q.gabarito && q.disciplina !== outroIdioma);
  const provas = questoesProvas.filter(q => q.gabarito && q.disciplina !== outroIdioma);

  const letraErrada = q => {
    const letras = (q.alternativas || []).map(a => a.letra).filter(l => l !== q.gabarito);
    return letras.length ? escolher(letras) : 'A';
  };
  const chanceDeAcertar = (q, progresso) =>
    Math.min(0.95, Math.max(0.15, 0.45 + 0.30 * progresso + (AJUSTE[q.disciplina] || 0) + (r() - 0.5) * 0.1));

  const memoria = [];
  const respostas = {};
  const tentativas = [];
  const erradas = [];   // { q, t } para a correção de erros

  const inicio = agora - 365 * DIA;
  for (let d = 0; d < 365; d++) {
    const progresso = d / 364;
    const dia = inicio + d * DIA;
    if (r() > 0.55 + 0.30 * progresso) continue;   // dia sem estudo

    // Banco de questões
    const n = 8 + Math.floor(r() * 23);
    let hora = dia + (14 + Math.floor(r() * 7)) * 3600000;   // começa entre 14h e 20h
    for (let i = 0; i < n; i++) {
      const q = escolher(estudo);
      const ok = r() < chanceDeAcertar(q, progresso);
      const letra = ok ? q.gabarito : letraErrada(q);
      hora += (60 + Math.floor(r() * 180)) * 1000;
      memoria.push({ q: q.id, a: letra, ok, t: hora, o: 'estudo' });
      respostas[q.id] = { respondida: true, acertou: ok, alternativaSelecionada: letra };
      if (!ok) erradas.push({ q, t: hora });
    }

    // Correção de erros: refaz algumas questões erradas há pelo menos 1 dia
    if (r() < 0.5) {
      const devidas = erradas.filter(e => e.t < dia - DIA).slice(0, 4);
      devidas.forEach(e => {
        const ok = r() < chanceDeAcertar(e.q, progresso) + 0.15;
        const letra = ok ? e.q.gabarito : letraErrada(e.q);
        hora += 120000;
        memoria.push({ q: e.q.id, a: letra, ok, t: hora, o: 'revisao' });
        respostas[e.q.id] = { respondida: true, acertou: ok, alternativaSelecionada: letra };
        erradas.splice(erradas.indexOf(e), 1);
      });
    }

    // Simulado a cada ~14 dias
    if (d % 14 === 13) {
      const tamanho = progresso < 0.3 ? ['mini', 14] : progresso < 0.55 ? ['terco', 21] : progresso < 0.8 ? ['metade', 31] : ['completo', 63];
      const ids = [], marcadas = {}, motivos = {};
      const usadas = new Set();
      while (ids.length < tamanho[1] && usadas.size < provas.length) {
        const q = escolher(provas);
        if (usadas.has(q.id)) continue;
        usadas.add(q.id);
        ids.push(q.id);
      }
      const criadoEm = dia + 9 * 3600000;
      let acertos = 0;
      ids.forEach((id, i) => {
        const q = provas.find(x => x.id === id);
        const ok = r() < chanceDeAcertar(q, progresso) - 0.03;
        const letra = ok ? q.gabarito : letraErrada(q);
        marcadas[id] = letra;
        if (ok) acertos++;
        const registro = { q: id, a: letra, ok, t: criadoEm + (i + 1) * 280000, o: 'simulado', s: criadoEm };
        if (!ok && r() < 0.6) { registro.m = escolher(MOTIVOS); motivos[id] = registro.m; }
        memoria.push(registro);
        if (!ok) erradas.push({ q, t: registro.t });
      });
      tentativas.push({
        id: criadoEm, modo: 'aleatorio', tamanho: tamanho[0],
        data: new Date(criadoEm + ids.length * 280000).toISOString(),
        idioma, ids, respostas: marcadas, acertos, total: ids.length,
        tempoMs: Math.round(ids.length * 280000 * (0.85 + r() * 0.3)),
        ...(Object.keys(motivos).length ? { motivos } : {}),
      });
    }
  }

  memoria.sort((a, b) => a.t - b.t);
  return { respostas, simulado: { atual: null, tentativas }, memoria, atualizadoEm: agora };
}
