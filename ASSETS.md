# Recursos de la revisión de diseño

Las imágenes de referencia no acreditan que exista un video final ni sustituyen la aprobación comercial de cada variante.

## Conservadas
- `assets/images/filipina-hero.webp`: portada aprobada previamente, sin cambios en esta revisión.
- `assets/brand/pre-logo.png`: original oficial, conservado como referencia.

## Adaptadas con generación de imágenes integrada
- `assets/brand/pre-logo-transparent.png`: extracción del fondo negro del original, solicitando preservar letras PRE azules en degradado, Uniformes en naranja, agujas, costuras y registro; transparencia alfa real. Se optimizó tamaño para web.
- `assets/products/FI001MC-G.webp`: adaptación de la foto frontal real, solo filipina blanca en torso invisible, cuello mao, dos filas de botones blancos, mangas cortas y confección fiel. Fondo gris claro, relieve realista, sin logotipo.
- `assets/products/CZ001MC.webp`: adaptación de Cazadora azul marino en estudio recuperada, solo prenda sobre torso invisible; preservar una fila de botones oscuros y dos bolsillos con tapa. Frente, fondo gris claro y textura realista.
- `assets/products/PL001.webp`: adaptación del polo marino de la referencia anterior; solo prenda sobre torso invisible, respetar cuello, botonadura, mangas, costuras y textura Dry-Fit.
- `assets/products/PB001.webp`: extraer solo pantalón básico negro frontal de la referencia de tres vistas, conservar pretina con trabillas, botón/bragueta, bolsillos y corte recto; sin cuerpo ni calzado.
- `assets/products/PPU001.webp`: extraer solo pantalón negro frontal con pretina elástica y jareta, conservar bolsillos/corte recto; sin polo, cuerpo o calzado.

## Fotografías de ambientación generadas como referencia provisional
- `assets/images/rack.webp`: prendas en perchas a la derecha, pared marfil libre a la izquierda; marino/blanco/naranja/beige, sin personas ni texto.
- `assets/images/embroidery.webp`: acercamiento a máquina de bordado sobre tela marino con costura naranja; mecanismo a la izquierda y tela desenfocada a la derecha, sin texto.
- `assets/images/fabrics.webp`: telas dobladas marino/gris/naranja a la derecha y fondo marfil a la izquierda.
- `assets/images/sewing.webp`: prensatelas y aguja cosiendo una línea blanca sobre tela marino, sin personas ni texto.

## Fotos recuperadas
`asset-sources.json` conserva URLs del catálogo anterior. Son fotos temporales mientras se homogeneizan las prendas y se completan las vistas aprobadas. La lista publicada de rutas se controla con `site-config.js`; referencias ambiguas se dejan sin imagen en lugar de asociar otra prenda. El cargo frontal usa la recreación recuperada del proyecto.

No se han adquirido créditos ni suscripciones de video en esta revisión.

## Playeras cuello redondo: corrección con fotos reales
Base de reconstrucción: IMG_9996.jpeg (azul vivo) y IMG_9989.jpeg (detalle de banda, tejido y confección); tonos de referencia IMG_9994.jpeg (azul claro), IMG_9993.jpeg (azul rey), IMG_9991.jpeg (rojo), IMG_9990.jpeg (fucsia) e IMG_9989.jpeg (coral).
Prompt base: reproducir fielmente la playera real de manga larga, cuello redondo de banda plana de la misma tela, micro-malla fina, hombro ligeramente caído, cuerpo recto, bastillas simples y mangas sin puño elástico. Frente completo sobre torso invisible, fondo gris claro, relieve natural, sin logos, botones, bolsillos, personas ni interfaz de la foto.
Prompt de variantes: conservar geometría, cuello, textura, iluminación, composición y confección de la base; cambiar solo color según cada fotografía real, y para manga corta reducir solo el largo de las mangas manteniendo su bastilla. Blanco, negro y marino se aplican únicamente a manga corta según indicación expresa.
Diez archivos web en `assets/products/cuello-redondo/`: seis `ml-*` y cuatro `mc-*`. Herramienta integrada de generación/edición de imágenes; no video ni créditos de Higgsfield. Pendientes de revisión visual de Emilio.

## Continuación del catálogo — 8 noviembre

La recuperación se contrastó con `DESIGN.md`, el respaldo de 7 noviembre y el HEAD `b7ea26d`. No se trasladaron decisiones de otros proyectos. Las rutas anteriores permanecen para trazabilidad; la selección vigente la controla `site-config.js`.

- Reparado `assets/products/cuello-redondo/mc-negro.webp`: el archivo previo tenía cero bytes. Se recreó el negro desde el frontal marino, manteniendo cuello, confección, microtextura y composición.
- `assets/products/studio/`: 17 adaptaciones nuevas de fotografías/referencias existentes y un frontal cargo recuperado. Prendas completas sobre torso invisible, sin rostros, logotipos o ropa ajena; sombras suaves, relieve y fondo de estudio claro. Incluye las tres blusas, dos camisas, tres filipinas, cazadora larga, conjunto médico, bata, mandiles, gorro, gorra, rash y short. No se modificó la portada ni los tres destacados aprobados.
- Frontal del cargo: reutilizado de «Pantalón cargo gris en estudio.png» del respaldo, sin rediseño. Solo conversión/optimización WebP.
- `assets/products/textiles/`: las once fotografías originales de las galerías de mantelería y tapicería, conservadas como referencias reales y optimizadas. `textile-sources.json` guarda sus URL y correspondencias. Mantelería muestra muestras de textura recuperadas, no se presentan como fotografías nuevas de trabajos terminados.
- Los originales que tenían personas se conservaron en sus rutas anteriores; el catálogo deja de depender de acercamientos CSS que cortaban prendas.
- La fuente del rash muestra blanco, mientras el inventario heredado solo ofrece Rojo Guardavidas. El pantalón pijama de referencia es negro y la ficha heredada ofrece marino. Se conservan las especificaciones históricas sin inventar disponibilidad: la ficha aclara el color de referencia cuando difiere del solicitado.

Método de adaptación: herramienta integrada de edición de imágenes. Instrucción común: extraer exclusivamente la prenda de la referencia; preservar corte, cuello, largo de manga, tela, color, botonadura, bolsillos y bastillas; eliminar personas, prendas ajenas y utilería; fondo gris claro y volumen de torso invisible; una vista frontal completa, sin textos ni marcas. Excepciones: gorro/gorra solos sin dummy; mandil corto solo frente; short sin bolsillos por indicación expresa; rash sin estampado. Las vistas adicionales utilizan solamente ángulos presentes en referencias recuperadas.

Todas las recreaciones de esta continuación quedan integradas para revisión visual de Emilio. La integración no acredita aprobación comercial final. No se generaron videos ni se adquirieron créditos/suscripciones.

Vistas adicionales de esta continuación: `CZ001MC-Lateral/Espalda.webp`, `CZ001ML-Lateral/Espalda.webp`, `PC001G-Lateral/Espalda.webp` y `GG001-Espalda.webp`, todas en `assets/products/studio/`. Se extrajeron individualmente de paneles/vistas presentes en el respaldo; sin personas ni prendas ajenas. La cazadora conserva respiradero posterior y el cargo sus bolsillos. El perfil largo se corrigió para mantener la misma dirección de la referencia. No se añadieron vistas a playeras ni mandil corto. La gorra solo muestra los dos ángulos que se pudieron recuperar con referencia suficiente.

## Video real de bordado PRE
Archivo PRE.mp4 adjuntado por el usuario. Se conserva Full HD vertical 1080×1920, convertido de HEVC a H.264 para compatibilidad web. Fragmento 00:01–00:09 (8 segundos), sin audio y con faststart; elimina el cierre del original. Poster extraído del mismo clip. Archivos en assets/videos/pre-bordado*. No se generó material sintético.

## Videos sociales reales — 8 noviembre 2026
Material adjuntado por el usuario, sin generación de imágenes o video:
- PRE.14oct.R.mp4 → pre-corporativo.mp4: presentación de uniformes corporativos, prendas y tejidos. Título: Uniformes que hablan de tu empresa.
- PRE.30oct.R.mp4 → pre-calzado.mp4: calzado y comodidad en el trabajo. Título: Comodidad en cada paso.
- PRE.20oct.R.mp4 → pre-cocina.mp4: filipina, mandil, pantalón, calzado y personalización de prendas de cocina. Título: Tu equipo de cocina, de pies a cabeza.
- PRE.31.Ago.R.mov → pre-salud.mp4: uniformes para personal de salud y personalización. Título: Uniformes para quienes cuidan de todos.
Se revisaron fotogramas a lo largo de cada clip para asignar los títulos. Se mantienen duración, encuadre Full HD vertical y audio; conversión a H.264/AAC con faststart para web. Posters extraídos a los 0.5 s, sin crear material sintético. Archivos en assets/videos/.
Pendientes de transferencia: PRE.30sep.R.mp4 y PRE.6Oct.R.mp4 superaron el límite de descarga de 32 MiB del ejecutor. No se publicaron tarjetas vacías ni sustitutos para estos dos clips. Solicitar copias menores de 32 MiB o enlaces directos de descarga para completar los seis.

## Video de portada del catálogo — 8 noviembre 2026
WhatsApp Video 2026-11-08 at 10.21.21 PM.mp4, adjuntado por el usuario: camisas, prendas y detalles textiles. Original vertical 576×1024, duración aproximada 9.23 s. Se conserva el clip completo y se reescala con Lanczos a 1080×1920, reducción de ruido leve y nitidez moderada. El reescalado no recupera detalle nativo Full HD. H.264 a 30 fps, faststart y sin pista de audio. Poster extraído del clip. Archivos pre-catalogo.mp4 y pre-catalogo-poster.webp en assets/videos/. Sin generación de contenido sintético.

La misma versión pre-catalogo.mp4 se reutiliza en Quiénes somos: encuadre vertical íntegro (contain) sobre fondo marino en una portada alta, para evitar ampliación y recorte excesivos. No se vuelve a recomprimir ni se atribuye detalle Full HD nativo al reescalado.

## Foto real de bordado de gorra — 8 noviembre 2026
Imagen 1-Foto-1.jpg adjuntada por el usuario, 1280×776. Copiada sin edición ni recompresión como assets/images/bordado-gorra-pre.jpg. Reemplaza la foto anterior del bloque de proceso en Quiénes somos. Se retira la foto de costura del bloque de historia para conservar únicamente el video y esta fotografía en el contenido de la página, según indicación del usuario. La fotografía muestra su encuadre completo.

## Foto provisional del catálogo — 8 noviembre 2026
1-Foto-1.jpg enviada por el usuario, 1280×640, cinco prendas en un perchero. Copiada sin recompresión a assets/images/catalogo-prendas-pre.jpg. Sustituye el video en la portada de Catálogo, a su tamaño original de 340/260 px (escritorio/celular). Difuminado de 2 px y sombreado mediante CSS, sin alterar el original. El video de Quiénes somos permanece.
