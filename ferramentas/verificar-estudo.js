// verificar-estudo.js — Confere um arquivo de questões de estudo (dados/estudo/*.js).
//
// uso: node ferramentas/verificar-estudo.js dados/estudo/enem-2025-d1.js [gabarito.json]
//   gabarito.json (opcional): { "91": "C", "92": "A", ... } com o gabarito oficial pelo
//   número original; para provas com Inglês/Espanhol nos mesmos números, use as chaves
//   "ing-1", "esp-1" etc.
// Confere: ids únicos (também contra os outros arquivos de dados/estudo/), campos obrigatórios,
// disciplina válida, conteudo existente em dados/conteudos.js, gabarito entre as alternativas,
// explicação só na correta (começando com "Correta!"), imagens existentes e o gabarito oficial.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const raiz = path.join(__dirname, '..');
const [arquivo, arqGabarito] = process.argv.slice(2);
if (!arquivo) { console.error('uso: node ferramentas/verificar-estudo.js <arquivo> [gabarito.json]'); process.exit(2); }

function carregar(arquivos) {
  const ctx = { QUESTOES: [], CONTEUDOS: [] };
  vm.createContext(ctx);
  for (const a of arquivos) vm.runInContext(fs.readFileSync(a, 'utf8').replace(/^\s*var\s+(QUESTOES|CONTEUDOS)\s*=\s*\[/m, '$1 = ['), ctx, { filename: a });
  return ctx;
}

const { CONTEUDOS } = carregar([path.join(raiz, 'dados/conteudos.js')]);
const capitulos = new Set(CONTEUDOS.map(c => c.id));
const { QUESTOES } = carregar([path.resolve(arquivo)]);
const outros = fs.readdirSync(path.join(raiz, 'dados/estudo'))
  .filter(f => f.endsWith('.js') && path.resolve(raiz, 'dados/estudo', f) !== path.resolve(arquivo))
  .map(f => path.join(raiz, 'dados/estudo', f));
const idsOutros = new Set(outros.length ? carregar(outros).QUESTOES.map(q => q.id) : []);

const DISCIPLINAS = ['Português', 'Literatura', 'Espanhol', 'Inglês', 'Matemática', 'Física', 'Química', 'Biologia', 'História', 'Geografia'];
const PREFIXO = { Português: 'por-', Matemática: 'mat-', Física: 'fis-', Química: 'qui-', Biologia: 'bio-', História: 'his-', Geografia: 'geo-' };
// Literatura e línguas não têm capítulo no material: o conteúdo é um destes subtópicos
const SUBTOPICOS = {
  Literatura: ['Interpretação de Texto Literário', 'Escolas Literárias', 'Gêneros Literários'],
  Inglês: ['Interpretação de Texto', 'Vocabulário', 'Gramática'],
  Espanhol: ['Interpretación de Textos', 'Vocabulario', 'Gramática'],
};
const erros = [];
const vistos = new Set();
const err = (q, msg) => erros.push(`${q?.id || '?'}: ${msg}`);

for (const q of QUESTOES) {
  for (const campo of ['id', 'prova', 'vestibular', 'ano', 'disciplina', 'numeroOriginal', 'enunciado', 'alternativas', 'gabarito', 'dificuldade']) {
    if (q[campo] === undefined || q[campo] === null || q[campo] === '') err(q, `falta o campo ${campo}`);
  }
  if (vistos.has(q.id)) err(q, 'id repetido no arquivo');
  if (idsOutros.has(q.id)) err(q, 'id já existe em outro arquivo de dados/estudo');
  vistos.add(q.id);
  if (!DISCIPLINAS.includes(q.disciplina)) err(q, `disciplina inválida: ${q.disciplina}`);
  if (!['facil', 'media', 'dificil'].includes(q.dificuldade)) err(q, `dificuldade inválida: ${q.dificuldade}`);
  const conts = [].concat(q.conteudo || []);
  const semCapitulo = ['Literatura', 'Espanhol', 'Inglês'].includes(q.disciplina);
  if (!conts.length && !(semCapitulo && q.subtopico)) err(q, 'sem conteudo (capítulo)');
  conts.forEach(c => {
    if (!capitulos.has(c)) err(q, `conteudo inexistente: ${c}`);
    else if (PREFIXO[q.disciplina] && !c.startsWith(PREFIXO[q.disciplina])) err(q, `conteudo ${c} é de outra matéria (${q.disciplina})`);
  });
  if (semCapitulo && !(SUBTOPICOS[q.disciplina] || []).includes(q.subtopico)) err(q, `subtopico fora da lista de ${q.disciplina}: ${q.subtopico}`);
  const alts = q.alternativas || [];
  if (alts.length < 4 || alts.length > 5) err(q, `${alts.length} alternativas`);
  alts.forEach((a, i) => {
    if (a.letra !== 'ABCDE'[i]) err(q, `letra fora de ordem: ${a.letra}`);
    if (!a.texto && !a.imagem) err(q, `alternativa ${a.letra} sem texto`);
    if (a.letra === q.gabarito) {
      if (!a.explicacao || !a.explicacao.startsWith('Correta!')) err(q, 'a correta precisa de explicacao começando com "Correta!"');
    } else if (a.explicacao) err(q, `explicação na alternativa errada ${a.letra}`);
  });
  if (!alts.some(a => a.letra === q.gabarito)) err(q, `gabarito ${q.gabarito} não está nas alternativas`);
  [].concat(q.imagem || []).forEach(img => { if (!fs.existsSync(path.join(raiz, img))) err(q, `imagem não existe: ${img}`); });
  if (/undefined/.test(q.enunciado + (q.textoApoio || ''))) err(q, 'texto com "undefined"');
}

if (arqGabarito) {
  const oficial = JSON.parse(fs.readFileSync(arqGabarito, 'utf8'));
  for (const q of QUESTOES) {
    const lingua = q.disciplina === 'Inglês' ? 'ing-' : q.disciplina === 'Espanhol' ? 'esp-' : '';
    const g = oficial[lingua + q.numeroOriginal] ?? oficial[String(q.numeroOriginal)];
    if (!g) err(q, `número ${lingua}${q.numeroOriginal} não está no gabarito oficial`);
    else if (g !== q.gabarito) err(q, `gabarito ${q.gabarito} ≠ oficial ${g}`);
  }
}

const porDisc = {};
QUESTOES.forEach(q => { porDisc[q.disciplina] = (porDisc[q.disciplina] || 0) + 1; });
console.log(`${QUESTOES.length} questões:`, porDisc);
if (erros.length) { console.log(`${erros.length} problema(s):\n` + erros.join('\n')); process.exit(1); }
console.log('OK');
