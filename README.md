# Uniformes PRE

Rediseño en curso, HTML/CSS/JavaScript sin dependencias de compilación.

## Avance 7 noviembre 2026
- Páginas independientes: `index.html`, `catalogo.html`, `quienes-somos.html`, `contacto.html`.
- Portada con la última imagen aprobada: filipina blanca, dos filas de botones blancos, ángulo oblicuo, gotas y pequeño chorrito, fondo oscuro. Video aplazado para el final; no se ha generado ni comprado ningún crédito/suscripción.
- Paleta marino/blanco/naranja y fondos alternados; Poppins aproxima el diseño aprobado de los mockups, pendiente de validación visual exacta.
- Tres destacados: filipina, cazadora y polo Dry-Fit.
- Proceso de cinco pasos animado con CSS/JS, selección manual y pausa. Solo avanza cuando es visible; respeta movimiento reducido. No requiere Higgsfield, API ni créditos.
- Bordado con espacio de video vertical de esquinas redondeadas; tres espacios adicionales para prendas, confección y marca. Instagram @uniformespre y Facebook uniformespree recuperados de la referencia.
- Catálogo con 31 productos recuperados (se excluye camisola de mantenimiento) y dos categorías textiles. Búsqueda, filtros, fichas y solicitud con cantidades/talla/color, guardada localmente.
- Playeras corta/larga separadas, solo frente por color; mandil corto solo frente; gorra sin dummy con tres vistas. Los demás marcadores identifican cada vista pendiente sin inventar imágenes.
- Contacto conserva distribución de formulario, tarjeta azul de respuesta express y ubicación. Formulario prepara el mensaje en WhatsApp para revisión/envío por el visitante; no simula envío por correo ni tiene backend.
- Contactos extraídos de la referencia del sitio original: ventas 998 937 0850, ventas@uniformespre.com, MEGA Soriana López Portillo Local 7, SM 92, Cancún. Confirmar vigencia con PRE.

## Material necesario
1. Video real de bordado: MP4, preferentemente vertical 9:16, 1080×1920; puede ser material existente, sin regeneración IA. Seleccionar fragmento y portada cuando se reciba.
2. Tres clips para los espacios de prendas, confección y marca. Orientación vertical preferida, sin obligación de publicar todos.
3. Fotografías de catálogo aprobadas y vistas separadas. No reemplazar las referencias con un diseño inventado. Mantelería y tapicería conservarán fotos reales.
4. Texto y fotografías reales de historia; no se inventaron reseñas ni cifras.
5. Reglas/precios definitivos por volumen y bordado, y textos legales revisados antes de publicación comercial.

## Integrar videos y fotografías
`site-config.js` reúne las rutas de los cuatro videos y la portada. Dejar `src` vacío mantiene el marcador; al establecer una ruta local `assets/...` o HTTPS y opcionalmente `poster`, abre un reproductor con controles. La portada admite videos independientes para escritorio/celular; conserva la imagen de respaldo y no reproduce con movimiento reducido. No se incrusta un iframe de Instagram para evitar dependencias/cookies de reproducción.

`productImages` usa código y vista (Frente/Lateral/Espalda); solo añadir recursos aprobados. El catálogo permanece fiel a las instrucciones de variantes de color guardadas en `catalog-reference.json`.

## Archivos y verificación
`build.py` regenera las cuatro páginas con cabecera/pie compartidos; requiere Python 3 solo al editar plantillas. Para servir los HTML ya generados no se necesita Python ni compilación. `catalog-data.js` contiene las fichas extraídas del inventario de referencia del 6 noviembre. No publica precios sin confirmar, ni calcula importes ficticios.

Validación realizada: sintaxis JS, referencias locales, navegación y búsqueda, ficha de playera con única vista frontal, cantidades y resumen WhatsApp, pausa/selección del proceso, diálogo de video pendiente, menú móvil y vista a 390 px mediante iframe. La adaptación móvil se inspeccionó en navegador de escritorio con ancho de marco reducido; no equivale a prueba en iPhone físico. No se enviaron mensajes ni se hicieron compras. No se configuró alojamiento público nuevo.

## Pendientes
Fotos/videos definitivos, selección final de orden del catálogo, revisión comercial de fichas, legales, cotizador con tarifas, despliegue público y QA en dispositivos físicos. El asistente de ayuda actual es un aviso de contacto, no un chatbot IA.

## Revisión de diseño — 8 noviembre 2026
Las indicaciones de esta fecha sustituyen las descripciones visuales del avance anterior. El contrato actualizado está en `DESIGN.md`.
- Se quitaron todas las sobrelíneas y el texto secundario de portada.
- Logo oficial con transparencia alfa, sin el rectángulo negro.
- Tres destacados con imágenes adaptadas de referencias, volumen realista, cinta Best seller y luz lateral naranja.
- Bordado pasa de tarjeta vertical a franja completa, preparada para video horizontal.
- Cinco etapas, sin números ni pausa visible; ciclo de 2 segundos. Respeta la preferencia de movimiento reducido del dispositivo.
- Sin carrito ni guardado de selección: la ficha lleva a Contacto con producto, cantidad, talla y color preparados.
- Catálogo con portada centrada, filtros de categoría/color/talla y orden alfabético, transiciones y tarjetas solo con nombre y Ver detalles sin flechas.
- Quiénes somos y Contacto siguen las referencias recibidas; las fotografías de taller/rack/telas son referencias visuales generadas, sustituibles por material real.
- Se recuperaron fotos del sitio original; las no adaptadas son referencias temporales, no aprobación de acabado final. No se inventan vistas laterales o traseras ausentes.
- Videos sociales preparados para autoplay inline, loop, silencio inicial y botón para activar sonido. No hay videos reales cargados todavía. Las referencias estáticas dicen Video próximamente.
- Cabecera alterna tres anuncios, incluido el envío gratis por arriba de $1,000 MXN indicado por Emilio.
- Verificación: sintaxis JS, rutas/archivos, revisión de escritorio y marco móvil de 390 px, búsqueda de polo y flujo ficha→contacto con 12 unidades/M/Marino.

### Videos tras esta revisión
Bordado: MP4 horizontal, ideal 1920×1080 o mayor, 8–15 segundos, dejar el lado derecho con poco detalle para texto. La banda recorta sin deformar.
Redes: tres MP4 verticales, ideal 1080×1920, 8–20 segundos cada uno, material real de prendas, confección y marca. Tienen loop y audio opcional.
Portada: conserva los campos para video horizontal y vertical. Higgsfield y compra de créditos siguen aplazados; no se ha comprado nada.
Al integrar `src` en `site-config.js`, los videos se reproducen dentro de su sección; la explicación anterior sobre abrirlos en un diálogo ya no aplica.

## Corrección de playeras cuello redondo — 8 noviembre
- Se sustituyen las fotos de referencia anteriores por diez recreaciones hechas desde las seis fotos reales de Emilio: cuatro de manga corta y seis de manga larga.
- Misma base de prenda, banda de cuello, tejido microperforado, corte recto y bastillas; únicamente cambian largo de manga y color.
- Manga corta: azul claro, azul marino, blanco y negro. Manga larga: azul vivo, azul claro, azul rey, rojo, fucsia y coral. Azul primero en ambos productos. Nombres de tonos de manga larga son descriptivos.
- Una sola frontal por color, sin vistas laterales ni traseras. Selector de color y círculos cambian la imagen; el color escogido también llega a la consulta en Contacto.
- `site-config.js` contiene `productColorImages` por código y color, con archivos en `assets/products/cuello-redondo/`.
- Se retiran de estas dos fichas las afirmaciones heredadas de protección solar UPF, puño anatómico y cárdigan acanalado; no constan en la referencia real. La composición/gramaje exactos siguen sin deducirse de fotografías. El inventario histórico se conserva como fuente aparte.
- Las recreaciones están integradas para revisión visual de Emilio; no se presentan como aprobación final ni como fotografías originales de producto.

Validación de la corrección: prueba DOM con las dos fichas, los diez colores, cambio desde círculos y selector, sincronía con FormData de cotización, filtro Fucsia y limpieza. Archivos de imagen y sintaxis verificados. La comprobación visual de la página actualizada en navegador quedó bloqueada por falta de respuesta de esa sesión; las imágenes nuevas sí fueron inspeccionadas antes de integrarlas.

## Continuación del catálogo — 8 noviembre

El catálogo cuenta con imagen principal en sus 33 fichas (31 productos y dos categorías textiles). Se homogeneizaron las prendas de referencia sobre torso invisible, se recuperó el frontal del cargo y se integraron once fotografías originales a las galerías de textiles. Se reparó la variante negra de playera manga corta que estaba vacía. La procedencia, excepciones y diferencias de color frente al inventario heredado están documentadas en `ASSETS.md`.

La ficha conserva el color del filtro al abrir, sincroniza selector/círculos/imagen y pasa color, talla y cantidad a Contacto. Cuando solo existe una foto de referencia en otro color, la ficha lo indica y conserva la selección de cotización. Las imágenes fallidas tienen un respaldo visual controlado. Tarjetas con nombre y Ver detalles, sin códigos o materiales; el código queda únicamente en la consulta preparada para PRE.

Validación: decodificación de todas las imágenes configuradas, ausencia de archivos vacíos o faltantes, sintaxis JS y flujo en navegador de búsqueda cuello redondo → filtro Negro → ficha Negro → 12 unidades/M → Contacto. Comprobación móvil en marco de 390 px, sin desbordamiento horizontal. Es una revisión en navegador de escritorio a ancho móvil, no una prueba en iPhone físico.

Pendientes generales: revisión visual de las recreaciones y variantes restantes; videos reales de bordado/redes, animación de portada aplazada; fotografía definitiva de banner; historia y legales finales; validación comercial de fichas/precios y diferencias de color. El flujo actual prepara la consulta; no calcula un precio final ni envía mensajes automáticamente.

Las cazadoras marino corta/larga y el cargo gris tienen Frente/Lateral/Espalda individuales; la gorra suma su ángulo trasero recuperado. No se usaron trípticos como imagen de tarjeta ni se agregaron vistas a las playeras.

## Videos en Conoce más de Uniformes PRE
Cuatro clips reales integrados con Full HD vertical, bucle y silencio inicial. Cada tarjeta contiene Instagram y Facebook; ya no hay enlaces sueltos dentro de esa sección. El pie usa un sombreado gradual sin blur ni bloque separado, para mantener visible el video detrás del título y los controles. Las cuatro tarjetas forman una fila horizontal, con corporativo y calzado al centro, flechas en escritorio y deslizamiento en celular. Pausa manual persistente al desplazarse; audio activado por el visitante y exclusivo entre tarjetas para evitar superposiciones. Dos clips adicionales quedaron pendientes por el límite de transferencia de 32 MiB, documentados en ASSETS.md.

## Portada del catálogo con video
Integra el clip real de prendas enviado por Emilio, con sombra suave y título centrado. Altura de 400–460 px en escritorio y 340 px en celular. Bucle automático, sin controles ni pista de audio. Reescalado a 1080×1920 desde 576×1024, con limpieza y nitidez moderadas; no es detalle Full HD nativo. Poster del propio clip como respaldo si no puede reproducirse.
Validación: reproducción y reinicio real del bucle en Chromium, silencio y ausencia de controles, escritorio/celular sin desbordamiento, búsqueda de polo y respaldo visual al fallar el video.

## Portada de Quiénes somos con video
Reutiliza el video de prendas reescalado a 1080×1920, sin nueva compresión. Título Quiénes somos, sin la bajada anterior. Portada alta y encuadre vertical completo mediante contain, con fondo marino a los lados y sombra suave. Bucle silencioso sin controles. La portada de Catálogo se conserva por indicación del usuario.

## Foto provisional de portada del catálogo
La última indicación sustituye el video del catálogo por catalogo-prendas-pre.jpg, enviado por el usuario. Altura original de 340 px en escritorio y 260 px en celular, difuminado suave y sombreado. El video permanece exclusivamente en Quiénes somos.

## Ajuste de portada de Quiénes somos a pantalla
El último ajuste sustituye contain por cover para llenar todo el ancho sin franjas laterales. Se permite recorte superior/inferior. El alto de la portada usa el viewport pequeño (svh) menos la cabecera y los anuncios, medidos con ResizeObserver para adaptarse a celular y computadora. Se conserva título, bucle, silencio y ausencia de controles.

## Carrito en cabecera y asistente de preguntas frecuentes
El carrito acumula varias prendas y bordados y abre WhatsApp con una solicitud estructurada al terminar. Contador en la cabecera; se retira el flotante de cotización. Envío $150, gratis desde $1,000; el total es estimado y el ponchado se confirma aparte si se requiere. Asistente local con preguntas frecuentes confirmadas, texto libre por palabras clave, avisos discretos y derivación a WhatsApp. Condiciones y validación en SUPPORT.md. El proceso avanza cada 1.2 segundos.

## Redistribución de Inicio, Catálogo y Contacto
Inicio muestra el video de prendas en bucle sin audio ni controles, con la frase propuesta Tu equipo. Tu identidad. y tipografía Manrope. Se ofrece reescalado a 4K vertical en escritorio y 1080p en celular; no se recupera detalle inexistente en el original. La filipina pasa al catálogo; el perchero pasa a Contacto con el texto centrado solicitado. Quiénes somos usa provisionalmente un fotograma estático. El asistente tiene un avatar 3D en el encabezado Uniformes Express y una respuesta de ubicación ampliada con envíos nacionales.

## Últimos acabados
Inicio: Profesionales en cada detalle, cursiva sans serif blanca/naranja, sin CTA. Cambio de opacidad al desplazarse por las cuatro páginas, sin deslizamiento y con contenido visible sin JavaScript o con movimiento reducido. Catálogo con menor difuminado. Nueva compresión del video de inicio en escritorio; el detalle sigue limitado por el original. Quiénes somos recibe el nuevo clip horizontal de bordado en bucle silencioso, sin controles. Contacto: Estamos para ayudarte. Encabezado del asistente corregido a Uniformes PRE, conservando el robot 3D.


## Portada bordada y rendimiento — 9 noviembre 2026

La portada usa la frase cursiva bordada entregada por Emilio, exportada a WebP transparente con variantes de 2048 y 960 px. Sustituye al texto anterior y mantiene el encabezado accesible mediante alt.

Los originales de video se conservan; la web utiliza copias H.264 con faststart. Inicio: 2,357,392 bytes en escritorio (antes 28,795,862) y 875,360 en celular (antes 4,159,716). Bordado y reels usan copias a 720 px de ancho; Conoce PRE, 1280 px. Las pistas de audio de los reels se conservan.

Un par de IntersectionObserver compartidos carga medios al acercarse (200 px), reproduce solamente los visibles y los pausa al salir o al ocultarse la pestaña. La pausa elegida por el visitante persiste. Movimiento reducido y ahorro de datos mantienen las imágenes de portada, con reproducción manual disponible en los reels. Las apariciones duran 550 ms con opacidad y desplazamiento de 12 px y se ejecutan una vez. Sin JavaScript el contenido sigue visible. Catálogo con tamaños de imagen acordes a las tarjetas y búsqueda con espera de 120 ms.

Validación local con Chromium: pantallas 1440×1000 y 390×844 (DPR 2), cuatro páginas, carga inicial de un solo video, bucles, pausa fuera de pantalla, pausa manual persistente, sonido, filtros y vistas del catálogo; sin errores JS ni recursos locales HTTP fallidos. WebP verificados y frase con canal alfa; scripts y motor de cotización verificados. Revisiones visuales de ambas portadas realizadas. No se afirma una puntuación Lighthouse ni una mejora medida de Core Web Vitals.

## Continuidad de videos y aparición sutil — 9 noviembre 2026

Aparición única de 650 ms con elevación de 10 px. El carrusel aparece como bloque completo para que las tarjetas laterales no queden transparentes al deslizarlo; el foco del teclado revela su bloque inmediatamente. Se conservan las alternativas sin JavaScript y con movimiento reducido.

Los videos de Conoce más y bordado anticipan su carga a 650 px, con precarga automática de las copias web. Un error temporal conserva reproductor y controles: dos reintentos de la copia web y un tercero con el original compatible, con esperas de 1/2/4 segundos. Se vigila el progreso de reproducción para recuperar bloqueos de más de 10 segundos, siempre respetando pausa manual, visibilidad, ahorro de datos y movimiento reducido. Si se agotan los intentos, las tarjetas conservan poster y botón Reintentar. Recursos versionados para evitar copias incompletas en caché.

Conoce PRE conserva los 60 fps del video original de bordado, frente a los 30 fps de la copia web anterior: H.264, 1280×854, sin audio, faststart, fotograma clave cada segundo, 2,330,522 bytes frente a 8,527,796 del original conservado. No se modifica ningún archivo ni configuración de la portada de Inicio.

Validación: decodificación completa del nuevo MP4 y metadatos faststart; reproducción y bucle reales de los cuatro reels y ambos bordados en Chrome, escritorio 1440×900 y marco móvil 390×844; cuatro páginas sin desbordamiento y todos sus bloques revelados; pausa persistente, sonido exclusivo y reproducción manual con movimiento reducido. Fallos de red transitorios y persistentes simulados verifican recuperación, respaldo y conservación de controles. Sin errores JavaScript. Pruebas existentes de cotización y asistente aprobadas. Las condiciones de red y las restricciones de reproducción del dispositivo siguen influyendo en la carga.

## Bordados por prenda — 9 noviembre 2026

Pecho y espalda son cantidades por prenda, editables directamente o con −/+. No se limitan al número de prendas ni se recortan al reducirlo. Se multiplican por las prendas de cada partida y se suman en todo el carrito por ubicación para aplicar las tarifas existentes. Ejemplo: 10 prendas × 2 pecho = 20 a $38; 10 × 6 espalda = 60 a $65. El mayoreo de prendas sigue agrupado por modelo y es independiente del bordado. Ficha, carrito y WhatsApp muestran cantidades por prenda, multiplicaciones, importes y tarifas.

Persistencia en pre-quote-v2. Los antiguos totales de pre-quote-v1 se convierten en hasta tres partidas por línea para conservar cantidades y bordados parciales sin multiplicarlos de nuevo; el original guardado se conserva. Se admiten 600 partidas para representar las 200 antiguas en el peor caso. Las validaciones protegen la precisión de importes enteros en centavos. El asistente y las explicaciones del cotizador reflejan la nueva regla. El selector de animación del proceso se limita a su sección para no confundirlo con los contadores al abrir una ficha desde su URL.

Pruebas: quote-engine.cjs, quote-embroidery.cjs y support-data.cjs; umbrales exactos, agregación entre modelos/tallas/colores, pecho/espalda independientes, cantidades mayores que las prendas, reducción sin recorte, migración de todos los bordados parciales entre 1–12 prendas y 200 partidas antiguas, IVA, envío y WhatsApp. Navegador: entrada directa, ficha/carrito, persistencia tras recarga, datos de contacto conservados y URL WhatsApp interceptada sin enviar; 1440 px y 390 px, sin desbordamiento.


## Integración de imágenes aprobadas — 9 noviembre 2026

Se integran quince propuestas aprobadas en assets/products/catalog-20261109/, con miniaturas WebP; mandil negro actual conservado. Mandil: negro/kaki/blanco; camisas corta/larga: blanco/azul cielo con bolsillo en chaflán; gorro: negro/blanco según las fotos del propietario; pantalón pijama: solo negro en sus tres vistas. Las filipinas Dry-Fit corta y 3/4 reciben exclusivamente las cuatro espaldas aprobadas, con descripción/características del panel superior transpirable sin listón. No cambian sus frentes/laterales ni las repelentes. Resto del catálogo, precios, tallas y cotizador conservados. Se versionan datos/configuración/JS para renovar caché.

Verificación de alcance por comparación con el commit anterior: demás productos y configuración intactos; colores y galerías sincronizados; quince imágenes nuevas y miniaturas existentes. Pruebas de cotización, bordados y asistente aprobadas. Comprobación en Chrome de las siete fichas, cada color/vista, selección de kaki y negro que llega al carrito y diseño móvil de 390 px, sin errores JS.
