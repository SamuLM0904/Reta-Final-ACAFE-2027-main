# print-imagem.py — Faz um "print" da imagem real de uma questão no PDF e salva como WebP.
#
# Nunca redesenha nada: detecta as imagens (raster) da página, recorta justo no
# contorno delas (sem o texto em volta) e captura na resolução nativa da imagem.
# Se a imagem for pequena, amplia com Lanczos e aplica um leve aumento de nitidez —
# apenas sobre os pixels originais.
#
# Requer: python -m pip install pymupdf pillow
# uso: python ferramentas/print-imagem.py "Provas/2026 - Inverno.pdf" <pagina> <saida.webp> [x0,y0,x1,y1]
#   A área opcional (em pontos do PDF; página A4 = 595 x 842) serve para escolher
#   quais imagens da página entram, quando há mais de uma questão na página.
#   Todas as imagens dentro dessa área são unidas num único print (ex.: Figura 1 e Figura 2).
import io, sys, pymupdf
from PIL import Image, ImageFilter

LADO_MINIMO = 1600   # se o maior lado ficar abaixo disso, amplia (até 3x)

pdf, pagina, saida = sys.argv[1], int(sys.argv[2]), sys.argv[3]
area = pymupdf.Rect(*map(float, sys.argv[4].split(','))) if len(sys.argv) > 4 else None

pag = pymupdf.open(pdf)[pagina - 1]
imagens = [i for i in pag.get_image_info()
           if i['bbox'][2] - i['bbox'][0] > 30 and (area is None or pymupdf.Rect(i['bbox']).intersects(area))]
if not imagens:
    sys.exit('Nenhuma imagem encontrada nessa página/área.')

# Recorte justo: união dos contornos das imagens
rect = pymupdf.Rect(imagens[0]['bbox'])
for i in imagens[1:]:
    rect |= pymupdf.Rect(i['bbox'])

# Resolução nativa: a maior densidade de pixels entre as imagens (sem reamostrar para baixo)
dpi = max(i['width'] / (i['bbox'][2] - i['bbox'][0]) * 72 for i in imagens)
pix = pag.get_pixmap(dpi=round(dpi), clip=rect)
img = Image.frombytes('RGB', (pix.width, pix.height), pix.samples)

# Melhoria de qualidade (apenas sobre os pixels originais)
fator = min(3.0, LADO_MINIMO / max(img.size))
if fator > 1.05:
    img = img.resize((round(img.width * fator), round(img.height * fator)), Image.LANCZOS)
    img = img.filter(ImageFilter.UnsharpMask(radius=1.6, percent=70, threshold=2))

# WebP: com perda (fotos) ou sem perda (desenhos); fica o menor arquivo
melhor = None
for nome, kw in (('com perda', dict(quality=92, method=6)), ('sem perda', dict(lossless=True, quality=100, method=6))):
    buf = io.BytesIO(); img.save(buf, 'WEBP', **kw)
    if melhor is None or buf.tell() < melhor[1].tell():
        melhor = (nome, buf)
open(saida, 'wb').write(melhor[1].getvalue())
print(f'{saida}: {len(imagens)} imagem(ns), nativa {round(dpi)} dpi, ampliada {max(fator, 1):.1f}x -> '
      f'{img.width}x{img.height}, {melhor[0]}, {melhor[1].tell() // 1024} KB')
