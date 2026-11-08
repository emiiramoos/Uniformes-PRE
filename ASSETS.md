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
