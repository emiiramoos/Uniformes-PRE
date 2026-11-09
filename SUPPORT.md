# Carrito y asistente PRE

Implementación autorizada por el propietario el 8 de noviembre de 2026.

## Carrito

- Icono y contador de prendas en la cabecera de las cuatro páginas. No hay botón flotante de cotización.
- Al agregar una selección se conserva en `pre-quote-v1` en localStorage y se vuelve al catálogo; el carrito se abre desde el icono o el aviso de confirmación.
- Cantidad, talla, color y bordados de pecho/espalda por partida. Conserva las tarifas y la agregación por mayoreo existentes.
- Envío nacional: $150; gratis desde exactamente $1,000 de prendas y bordados. Con precios pendientes no se promete un total definitivo; el envío queda pendiente si aún no puede determinarse el umbral.
- Ponchado: $350 por logotipo si hace falta. Se informa expresamente como no incluido en el estimado; se confirma con PRE, porque el carrito no recopila logotipos ni su número.
- Solicitar cotización requiere nombre, ciudad y código postal; empresa y comentarios son opcionales. Abre WhatsApp 529989370850 con datos, partidas, resumen, envío y comentarios separados. El visitante revisa y envía; la web no manda mensajes por sí sola ni cobra.

## Asistente

`support-data.js` contiene las respuestas confirmadas y el reconocimiento local de frases/palabras, sin IA externa ni backend. `support-chat.js` implementa la interfaz y el enlace a WhatsApp con la consulta original.

- Catálogo desde una pieza, sin mínimo. Bordado sin mínimo, también en prendas del cliente. Pecho y espalda pueden combinarse incluso en pocas prendas.
- Confección desde cero: mínimo de 25 piezas combinando tallas; materiales, colores y acabados se acuerdan; 50% de anticipo. Entrega según dificultad y cantidad.
- Catálogo listo para enviar: 3–4 días hábiles estimados. No se afirma un punto de inicio del plazo que el propietario no haya precisado. Paqueterías: Estafeta y DHL; todo México.
- Tiempo de bordado según cantidad y urgencia; sublimado según proyecto y full print: confirmar por WhatsApp.
- Ponchado $350 por logotipo. Creación de logotipos disponible, sin precio automático.
- Transferencias, depósitos, efectivo, crédito/débito y links de Mercado Pago. Sí factura; precios con IVA incluido.
- Guías de talla, existencias, colores y políticas de cambio: consultar por WhatsApp. No se garantiza stock; cuello redondo corto/largo puede variar.
- Hora de Cancún: local lunes–sábado 10:00–18:00; atención lunes–viernes 8:00–17:00. Se pueden dejar mensajes fuera de horario. Recogida en el local disponible.
- Consultas desconocidas: respuesta de incertidumbre y botón a WhatsApp. No se inventan políticas ni plazos.
- Avisos: cuatro textos, primer aviso a los 20 segundos y los siguientes a intervalos de un minuto; duran 10 segundos, no abren el chat solos y se detienen cuando el visitante abre el chat o los descarta. El descarte persiste en la sesión. Se aplazan mientras haya un diálogo modal o pestaña oculta.
- Palpitación sutil; respeta movimiento reducido. Emojis solo dentro de los mensajes de chat, no en los avisos ni en el resto de la interfaz.

## Proceso y validación

Proceso de cinco etapas cada 1.2 segundos, solo visible y con respeto a movimiento reducido, como antes.

Pruebas: `node tests/quote-engine.cjs` y `node tests/support-data.cjs`. Revisión en Chromium del flujo catálogo→varios productos→carrito→URL WhatsApp interceptada (sin envío real), edición y persistencia, bordados en ambas posiciones, envío y datos del cliente. Chat: preguntas, texto libre, enlace de consulta desconocida, texto HTML tratado como texto, avisos, descarte, movimiento reducido y pantallas de 320/390 px. No equivale a una prueba en iPhone físico.

## Encabezado y ubicación
El usuario pidió un robot 3D en el encabezado del chat abierto y el título Uniformes Express; el icono exterior sigue igual. La pregunta de ubicación aparece en las primeras opciones e incluye Cancún, dirección MEGA Soriana López Portillo Local 7 SM 92, horario local y envíos a todo México por Estafeta y DHL.
