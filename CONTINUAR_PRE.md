# Continuidad de Uniformes PRE — 8 de noviembre de 2026

Repositorio: https://github.com/emiiramoos/Uniformes-PRE, rama main.
Página publicada comprobada: https://emiiramoos.github.io/Uniformes-PRE/catalogo.html.
Se continúa este proyecto; no crear otro repositorio ni un sitio paralelo.

## Qué leer
1. DESIGN.md: instrucciones visuales vigentes.
2. ASSETS.md: qué se recuperó, qué se recreó y excepciones.
3. site-config.js: rutas realmente integradas, colores de referencia y videos pendientes.
4. catalog-reference.json: reglas específicas de playeras.
5. README.md: estado y validaciones.

## Reglas que deben preservarse
- Marino, blanco, naranja, fondos alternados y tipografía limpia.
- No sobrelíneas pequeñas encima de encabezados.
- Portada filipina aprobada; solo tres destacados: filipina, cazadora, polo.
- Logo oficial solo en página, nunca sobre prendas.
- Prendas completas, sin rostro, coherentes en estudio y fieles a confección.
- Frente primero. Vistas separadas únicamente desde referencias existentes.
- Playeras corta/larga separadas: una frontal por color, azul primero, misma confección.
- Cazadora no lleva doble botonadura de filipina; separar manga corta/larga.
- Gorros/gorras solos; mandil corto solo frente; short sin bolsillos.
- Mantelería y tapicería con fotografías reales recuperadas.
- Excluir camisola de mantenimiento; sin carrito.
- Tarjetas: nombre y Ver detalles. Material, talla y color dentro de ficha.
- Cinco pasos horizontales animados, sin numeración ni pausa visible.
- No compras de créditos/suscripciones ni generación de video de pago.

## Estado de esta continuación
- Imágenes principales en las 33 fichas: 31 productos y dos categorías textiles.
- Playera negra vacía reparada; diez colores de playeras operativos.
- Prendas de referencia adaptadas a estudio, sin recortes CSS de cuerpos completos.
- Once fotografías originales en galerías de textiles, procedencia en textile-sources.json.
- Color filtrado conservado al abrir ficha y pasar a Contacto con talla/cantidad.
- Colores de imagen y cotización diferenciados cuando la foto disponible es de otro tono.
- Fichas y tarjetas inspeccionadas en navegador y marco móvil de 390 px.
- Nuevas recreaciones integradas para revisión; integración no significa aprobación.

## Pendientes reales
Revisión visual de recreaciones, otras variantes de color y vistas todavía sin referencia suficiente; videos reales de bordado/redes y portada aplazada; foto definitiva del banner; historia y legales finales; validación comercial de composición/precios y discrepancias heredadas (rash foto blanco/ficha rojo, pijama foto negro/ficha marino). No inventar reseñas, tarifas, disponibilidad ni años de historia. El formulario prepara WhatsApp; no envía solo ni calcula importe final.

Vistas recuperadas integradas: cazadoras marino corta/larga y cargo gris con Frente/Lateral/Espalda; gorra con frontal y ángulo trasero. No se añadieron vistas no referenciadas. Verificadas 57 rutas de imágenes decodificables y cambio a espalda del cargo en navegador.

## Integración aprobada de imágenes — 8 noviembre
96 originales aprobados se integran en `assets/products/catalog-20261108/`, WebP grande y miniatura. `productGalleries` agrupa color y vista; círculos sincronizan foto, miniaturas y cotización. Pijamas lisas blanco primero, negro y marino; diseños de franjas y vivos separados por confección, colores dentro de su ficha. Cazadoras en hotelería, excluidas de gastronomía; polo también visible en gastronomía. Destacado de cazadora manga larga. Hotel con tres estrellas azules de trazo fino. Contactos preservados.
Validación: sintaxis JS, resolución de todas las vistas y colores, reglas de categorías y frontales únicos; 192 WebP decodificables. Adaptación CSS móvil/escritorio sin recorte de prenda, pendiente comprobación visual en navegador en esta ejecución.

## Cotizador — 8 noviembre
Cotizador sin pago, con carrito local y salida a WhatsApp vigente (529989370850). Sin mínimo de prendas ni bordados, por indicación expresa de Emilio. Tarifas originales 1–12, 13–50 y 51+; seis era mínimo de bordado del original, no precio de mayoreo. Motor `quote-engine.js` calcula en centavos, agrupa cantidad por código de producto (tallas/colores suman), y bordados globales por ubicación (pecho y espalda separados). Cada partida permite cantidades parciales de bordado, entre cero y la cantidad de prendas. Tarifas pecho 45/38/33; espalda 80/72/65. IVA incluido: subtotal = total/1.16. Envío se confirma aparte.
Precios relacionados por código exacto; PM-FRANJAS y PM-VIVOS toman la tarifa de la familia PM001-S, misma pijama médica unisex del origen. Textiles sin tarifa: importe por confirmar, sin inventar precio y sin incluirlo en el total parcial. No se trasladaron las categorías, fotos ni las descripciones de confección antiguas.
Pruebas: `node tests/quote-engine.cjs`. WhatsApp no envía automáticamente: el cliente revisa y pulsa Enviar. Carrito se conserva en localStorage y valida los datos recuperados.
Verificación en navegador público: 13 polos y 13 bordados de pecho = $3,484; IVA $480.55 y subtotal $3,003.45. Reducir a 1 recalcula a $285 con un bordado. Recarga conserva carrito. El botón de WhatsApp se probó, pero la política del navegador de prueba impidió abrir el protocolo externo de la aplicación. Enlace HTTPS wa.me y contenido codificado validados por pruebas del motor; apertura final en teléfono pendiente. No se envió ningún mensaje. Cabecera Cotizar abre el carrito en todas las páginas.

## Ajuste de experiencia y Conoce PRE
Cantidades de prendas y bordados con botones −/+ y valor de solo lectura, tanto en ficha como carrito. Precio unitario de pecho/espalda visible al lado del control; desglose cantidad × tarifa y total. Tarifas y explicación del mayoreo desplegables. Disminuir prendas ajusta bordados al máximo permitido. Se conserva el motor y las reglas comerciales anteriores.
Conoce PRE sustituye el nombre de Quiénes somos en todas las páginas, conservando URL. Historia, servicios, asesoría, proceso y preparación de archivos desde fuentes documentadas en reference-data/conoce-pre-20261108/FUENTES.md. No alterar contactos ni incorporar mínimos antiguos de la web original.

## Correcciones móvil, iconos y verificación de descuentos
X en barra independiente del área desplazable de ficha/carrito, sin position:sticky ni float que la acerquen a +. El contenido interior es el único que se desplaza. Cierre por fondo exterior conservado. Historia intacta; servicios/proceso con diez símbolos del sistema existente. WhatsApp vectorial de Simple Icons en contacto; su fuente es https://github.com/simple-icons/simple-icons/blob/develop/icons/whatsapp.svg. Pie sin párrafo bajo el logo.
Reproducido 7 filipinas solas = $580 c/u; 6 en carrito + 7 nuevas = 13, $550 c/u. No era un umbral en siete: agrupación por modelo ya prevista. La ficha ahora explica la suma y el rango junto al precio cuando hay unidades del mismo producto en carrito. Pruebas de todos los productos a cantidades 1–52 y bordados 0–52: rangos exclusivamente 1–12,13–50,51+.

## Símbolos más legibles
Redibujados headset (diadema curva, orejeras y micrófono separado), shirt (cuello y mangas claros) y sew (silueta de máquina, volante, aguja y base) en el sistema SVG común. Se aplican a todas las páginas generadas; el fallback de playera de app.js también actualizado. Trazos 1.4 y detalles naranja. No se cambian precios: verificados mayoreos de pecho 45/38/33 y espalda 80/72/65, conteos independientes en rangos 1–12,13–50,51+.

## Reseñas Google
Carrusel infinito tras los destacados y antes de bordado. Tres reseñas originales positivas de cinco estrellas verificadas en Google Maps (tienda MEGA Soriana López Portillo): Daniela Martinez Archundia, Elizabeth Jarillo, Juan Manuel Diaz. Extractos, nombres y estrellas reales; enlace a ficha Google. No se muestra media global de cinco estrellas ni se inventan más clientes. Datos en reference-data/google-reviews/reviews.json. Duplicación técnica del carrusel oculta a lectores de pantalla e inerte; respeta movimiento reducido y se pausa al enfocar/hover para leer. Encabezado único, sin subtítulo.
