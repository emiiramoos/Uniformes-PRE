# Seguridad de Uniformes PRE

Revisión: 11 de noviembre de 2026. Sitio público estático en GitHub Pages, sin backend, cuentas, base de datos, API propia, subida de archivos ni cobro en línea. WhatsApp recibe la solicitud cuando el visitante decide continuar; los importes del navegador son estimaciones y PRE confirma el pedido.

| Punto solicitado | Aplicación real |
| --- | --- |
| 1. Ocultar API keys | No se usan claves de API privadas en el sitio. Revisión de patrones conocidos de credenciales. Nuevas exclusiones Git para .env, certificados y archivos de credenciales. |
| 2. Eliminar secretos de Git | Revisados 44 commits y 313 blobs de texto del historial accesible, sin coincidencias de los patrones comprobados. No se reescribió el historial: no hubo una credencial identificada que purgar. Una búsqueda por patrones no garantiza detectar todos los secretos posibles. |
| 3. Clave pública de base de datos | No aplica: no existe base de datos. |
| 4. RLS | No aplica: no hay tablas ni usuarios de base de datos. |
| 5. Cifrar información sensible | HTTPS y HSTS existentes verificados. Datos de contacto no se persisten por el sitio en localStorage; solo partidas de cotización. No se implementó un cifrado ficticio con claves públicas en JavaScript. |
| 6. Autenticación | No aplica al catálogo público. No se creó un login que impida a los clientes consultar productos. |
| 7. Acceso a registros | No hay registros privados alojados por esta web. Las partidas solo se guardan en el navegador del visitante. |
| 8. Manipulación de campos | Recuperación de carrito con validación de producto/talla/color/cantidades y proyección a campos permitidos. Se descartan precios, totales, nombres y propiedades extra almacenados. Se recalculan precios desde catálogo; edición de cantidades limitada a quantity/chest/back. Esto no convierte el navegador en una fuente de precios confiable: PRE debe confirmar el importe. |
| 9. Cookies de sesión | No hay sesión de usuario ni cookie de autenticación propia que configurar. |
| 10. Hash de contraseñas | No hay contraseñas ni autenticación propia. |
| 11. Rate limiting | No hay endpoint propio. No se añadió un contador de JavaScript presentado como protección de servidor. Para un backend futuro se requiere un control en el servidor o proxy. |
| 12. Antibot | No hay envío a un servidor propio; el formulario prepara WhatsApp. CSP bloquea conexiones AJAX no permitidas, pero no es una protección antibot ni evita scraping. WAF/CAPTCHA requieren una capa adicional de infraestructura y un propósito concreto. |
| 13. Consultas parametrizadas | No hay consultas SQL ni motor de base de datos. |
| 14. Validar entradas | Validación HTML y JavaScript antes de preparar contacto/cotización: límites, campos obligatorios, CP de cinco dígitos y eliminación de controles invisibles. Validación de parámetros de producto y cantidades existente conservada. |
| 15. Sanitizar contenido | Se conservan escapes HTML y textContent en contenido del visitante; CSP impide JavaScript inline y eval. Medios limitados a rutas locales assets, extensiones permitidas y sin traversal ni esquemas externos. |
| 16. Restringir archivos | No se aceptan archivos del cliente. Solo se cargan los medios locales permitidos por la política y validador de rutas. |
| 17. Respuestas mínimas | No hay API propia ni respuestas de registros privados. El catálogo y sus precios son públicos por diseño. |
| 18. Cabeceras de seguridad | CSP entregada mediante meta en las cuatro páginas: recursos por lista permitida, scripts propios, sin plugins/objetos, sin base externa, sin envío nativo de formularios, sin AJAX externo. Referrer no-referrer, también en Maps. No se simularon cabeceras HTTP mediante archivos _headers que GitHub Pages no procesa. |
| 19. Forzar HTTPS | Verificado HTTP → HTTPS y Strict-Transport-Security del alojamiento. upgrade-insecure-requests en CSP para recursos. |
| 20. Dependencias | Inventario revisado: JS propio sin dependencias npm de producción ni lockfiles; build.py usa biblioteca estándar. Fuentes externas limitadas a Google Fonts por CSP. No hay un paquete de producción que auditar con npm audit; no se informa un escaneo CVE inexistente. |

## Política y límites del alojamiento

CSP se coloca inmediatamente después del charset, antes de recursos. `script-src 'self'` no permite scripts inline ni eval; `connect-src 'none'` bloquea fetch/XHR/WebSocket. Google Fonts y el iframe de Maps son las excepciones explícitas necesarias. Los enlaces de WhatsApp conservan navegación normal y no envían mensajes automáticamente.

Los estilos inline siguen permitidos porque se utilizan para las muestras de color y los efectos visuales; los scripts inline siguen prohibidos. `form-action 'none'` bloquea el envío HTML nativo: los formularios se procesan con JavaScript y no publican datos en la URL de la página si JS falla.

GitHub Pages administra las cabeceras HTTP. La política meta no implementa `frame-ancestors`, X-Frame-Options, X-Content-Type-Options ni Permissions-Policy. No se declara protección contra clickjacking completa. Para administrarlas se necesita un alojamiento o proxy que admita esas cabeceras. No se cambió de proveedor ni se añadieron servicios de pago.

## Verificación

- `node tests/security.cjs`: rutas maliciosas, controles invisibles, longitudes, campos extra, precios falsificados y cantidades inválidas.
- Pruebas del motor de cotización y bordados existentes.
- Chromium a 1440 y 390 px: cuatro páginas, reproducción, galería, asistente, carrito recuperado manipulado, formulario demasiado largo; comprobación de bloqueo de script inyectado y conexión externa por CSP.
- No se enviaron mensajes ni pedidos durante las pruebas.

## Fuentes técnicas

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors
- https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
