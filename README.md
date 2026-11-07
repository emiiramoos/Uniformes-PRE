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
