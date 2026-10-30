// Servidor HTTP local simples para o Reta Final ACAFE 2027
const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORTA = 3000;
const RAIZ  = __dirname;

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
};

http.createServer((req, res) => {
  const urlLimpa = req.url.split('?')[0];
  const arquivo  = path.join(RAIZ, urlLimpa === '/' ? 'index.html' : urlLimpa);

  if (!fs.existsSync(arquivo) || fs.statSync(arquivo).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Arquivo não encontrado: ' + urlLimpa);
    return;
  }

  const ext  = path.extname(arquivo);
  const tipo = TIPOS[ext] || 'text/plain';
  res.writeHead(200, { 'Content-Type': tipo });
  res.end(fs.readFileSync(arquivo));

}).listen(PORTA, () => {
  console.log('');
  console.log('  ✅ Servidor rodando!');
  console.log('  👉 Abra no navegador: http://localhost:' + PORTA);
  console.log('');
  console.log('  Para parar: pressione Ctrl + C');
  console.log('');
});

