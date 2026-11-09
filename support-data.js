/* Respuestas comerciales confirmadas por PRE. Sin servicios externos. */
(function(root){
'use strict';
const entries=[
{id:'shipping-cost',label:'¿Cuánto cuesta el envío?',answer:'📦 El envío cuesta $150 a cualquier parte de México. Desde $1,000 de compra es gratis.',patterns:['cuanto cuesta el envio','costo de envio','precio del envio','envio gratis','envios gratis','150','mil pesos','1000','cobran envio','cobran el envio'],words:['envio','costo','gratis']},
{id:'delivery',label:'¿Cuánto tarda la entrega?',answer:'Las prendas de catálogo listas para enviar llegan en un plazo estimado de 3 a 4 días hábiles. Los pedidos con bordado o confección tienen otro tiempo, según cantidad y proyecto; te lo confirmamos por WhatsApp.',patterns:['cuanto tarda','cuanto demora','cuando llega','tiempo de entrega','dias habiles','plazo','urgente','urgencia','rapido'],contact:true},
{id:'shipping',label:'¿A dónde envían?',answer:'¡A toda la República Mexicana! 📦 Enviamos por Estafeta y DHL.',patterns:['a donde envian','hacen envios','envian a','estafeta','dhl','republica','todo mexico','a mi ciudad','paqueteria','envio','envios']},
{id:'custom',label:'¿Pueden confeccionar mi diseño?',answer:'¡Sí! Podemos confeccionar una prenda desde cero a partir de tu idea o muestra, desde 25 piezas. Puedes combinar tallas y definir materiales, colores y acabados. El plazo depende de la cantidad y dificultad; se pide 50% de anticipo. Envíanos tu idea para cotizarla. ✨',patterns:['desde cero','confeccion','confeccionar','a medida','mi diseno','mi idea','tengo una idea','tengo una muestra','mi muestra','100%','100 por ciento','25 piezas','hecho a mi','fabrican','fabricar','hacer este producto'],contact:true},
{id:'minimum',label:'¿Hay pedido mínimo o mayoreo?',answer:'Vendemos prendas de catálogo desde una pieza, sin compra mínima. El carrito aplica automáticamente las tarifas de mayoreo. Para bordar tampoco hay mínimo; la confección desde cero sí requiere al menos 25 piezas.',patterns:['minimo','minima','mayoreo','descuento','volumen','una pieza','1 pieza','pocas piezas','seis prendas','6 polos','6 piezas']},
{id:'quote',label:'¿Cómo solicito una cotización?',answer:'Para prendas de catálogo, elige talla, color y cantidad y pulsa “Agregar al carrito”. Puedes reunir varios productos; al terminar, abre el carrito y pulsa “Solicitar cotización”. Para una idea o prenda desde cero, envíanos tu muestra por WhatsApp: el mínimo es de 25 piezas.',patterns:['cotizar','cotizacion','cotizo','presupuesto','carrito','como compro','comprar','pedido']},
{id:'punch',label:'¿Cuánto cuesta el ponchado?',answer:'El ponchado para preparar el bordado cuesta $350 por logotipo. Si necesitas crear un logo, también podemos ayudarte; ese servicio se cotiza según tu proyecto. Envíanos tu archivo para revisarlo.',patterns:['ponchado','ponchar','digitalizar','crear un logo','crear logo','disenar logo','logotipo','logotipos','logo','logos','archivo'],contact:true},
{id:'own-garments',label:'¿Puedo llevar mis prendas para bordar?',answer:'Sí, podemos bordar prendas que tú nos lleves, sin cantidad mínima. Revisamos contigo el material, el diseño y la ubicación para confirmar que el trabajo sea viable.',patterns:['mis prendas','llevar mis','llevo mis','llevar ropa','llevo ropa','ropa propia','prendas propias','prendas que llevo','yo llevo'],contact:true},
{id:'embroidery-both',label:'¿Pueden bordar pecho y espalda?',answer:'¡Sí! Puedes pedir bordado en pecho y espalda, incluso en pocas piezas de catálogo. En el carrito eliges cuántas prendas llevan cada ubicación; también puedes bordar solo algunas.',patterns:['pecho','espalda','ambos lados','dos lados','dos bordados','ubicacion']},
{id:'embroidery-time',label:'¿Cuánto tarda un bordado?',answer:'El tiempo de bordado depende de la cantidad de prendas y de tu urgencia. Compártenos cuántas piezas son, el diseño y para cuándo las necesitas; te confirmamos un plazo por WhatsApp.',patterns:['tiempo de bordado','tarda el bordado','tarda bordar','demora bordado'],contact:true},
{id:'embroidery',label:'¿Hay mínimo para bordar?',answer:'No hay mínimo de piezas para bordar. Puedes personalizar prendas del catálogo o llevar las tuyas. Para confirmar costo y tiempo, revisamos cantidad, diseño y ubicación. La confección desde cero requiere un mínimo de 25 piezas. 🧵',patterns:['bordado','bordar','bordados','personalizar','personalizacion','personalizado','personalizados','personalizadas'],contact:true},
{id:'sublimation',label:'¿Cómo cotizo un sublimado?',answer:'El costo y plazo dependen del proyecto y del tipo de sublimado, por ejemplo, si es full print. Envíanos tu idea, cantidad y fecha deseada por WhatsApp; con gusto te damos una respuesta precisa.',patterns:['sublimado','sublimar','sublimacion','full print','fullprint','estampado'],contact:true},
{id:'deposit',label:'¿Piden anticipo?',answer:'Sí: los pedidos de confección desde cero requieren un anticipo del 50%. Para otras compras, confirmamos contigo las condiciones de pago antes de continuar.',patterns:['anticipo','adelanto','50%','50 por ciento','mitad']},
{id:'payments',label:'¿Qué formas de pago aceptan?',answer:'Aceptamos transferencia, depósito, efectivo, tarjetas de crédito y débito, y links de pago por Mercado Pago. Te compartimos los datos o el enlace por WhatsApp. 💳',patterns:['pago','pagar','pagos','transferencia','deposito','efectivo','tarjeta','credito','debito','mercado pago','link de pago'],contact:true},
{id:'invoice',label:'¿Facturan? ¿Incluye IVA?',answer:'Sí, facturamos y nuestros precios incluyen IVA. Al solicitar tu cotización, coméntanos que necesitas factura para coordinar tus datos fiscales.',patterns:['factura','facturan','facturar','facturacion','iva','fiscal','factur']},
{id:'sizes',label:'¿Cómo elijo mi talla?',answer:'Podemos compartirte nuestras guías de tallas por WhatsApp y ayudarte a elegir. También puedes enviarnos las tallas que ya necesitas.',patterns:['talla','tallas','medidas','guia','tamaño'],contact:true},
{id:'availability',label:'¿Hay existencias y colores?',answer:'Te confirmamos existencias y colores por WhatsApp antes de cerrar tu pedido. Habitualmente contamos con la mayoría de prendas; las playeras de cuello redondo, de manga corta y larga, pueden tener disponibilidad variable.',patterns:['existencia','existencias','disponible','disponibilidad','stock','color','colores','cuello redondo','manga corta','manga larga'],contact:true},
{id:'returns',label:'¿Puedo hacer un cambio de talla?',answer:'Sí contamos con políticas de cambios. Las condiciones dependen de la prenda, su personalización y el caso. Solicítalas por WhatsApp antes de confirmar tu pedido; con gusto las revisamos contigo.',patterns:['cambio','cambios','devolucion','devolver','garantia','reembolso'],contact:true},
{id:'hours',label:'¿Qué horarios tienen?',answer:'🕒 Hora de Cancún: el local abre de lunes a sábado, de 10:00 a 18:00. Atención al cliente: lunes a viernes, de 8:00 a 17:00. Puedes dejarnos un mensaje fuera de horario y te responderemos lo antes posible.',patterns:['horario','horarios','hora','abren','cierran','atienden','sabado','domingo']},
{id:'pickup',label:'¿Puedo recoger en el local?',answer:'Sí, puedes recoger tu pedido en nuestro local de Cancún: MEGA Soriana López Portillo, Local 7, SM 92. Abrimos de lunes a sábado, de 10:00 a 18:00, hora de Cancún. Coordina tu entrega con nosotros.',patterns:['recoger','recoge','recoleccion','local','ubicacion','direccion','tienda','donde estan','cancun','visitar'],contact:true},
{id:'hello',label:'Hola',answer:'¡Hola! Soy el asistente de Uniformes PRE. ¿Te ayudo con catálogo, envíos o personalización? 👋',patterns:['hola','buenas','buenos dias','buenas tardes','buenas noches','ayuda']},
{id:'thanks',label:'Gracias',answer:'¡Con gusto! Aquí estoy si necesitas algo más. 😊',patterns:['gracias','muchas gracias','perfecto','excelente']}
];
const normalize=t=>String(t).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9%]+/g,' ').trim();
function answer(text){
 const n=normalize(text),has=re=>re.test(n);
 // Resolve questions with overlapping topics before the general keyword matcher.
 let special;
 if(has(/(?:desde cero|confecci|fabric|a medida|mi diseno|mi muestra|una muestra|una idea|100%|25 piezas)/))special='custom';
 else if(has(/sublim|full print|fullprint/))special='sublimation';
 else if(has(/ponchado|ponchar|crear.*logo|digitaliz/))special='punch';
 else if(has(/envio|envios|envian|entrega/)&&has(/cost|cuanto vale|precio|gratis|150|1000/))special='shipping-cost';
 else if(has(/bord/)&&has(/llevo|llevar|propia|mis prendas/))special='own-garments';
 else if(has(/bord/)&&has(/tard|tiempo|demor|urg/))special='embroidery-time';
 else if(has(/cambi|devol/))special='returns';
 else if(has(/tard|demor|plazo|cuando.*lleg|cuantos dias/))special='delivery';
 else if(has(/horario|a que hora|abiert|abren|atienden|domingo/))special='hours';
 else if(has(/factur|\biva\b/))special='invoice';
 if(special)return entries.find(e=>e.id===special);
 const padded=' '+n+' ';
 const scored=entries.map(e=>({entry:e,score:Math.max(0,...e.patterns.map(pattern=>padded.includes(' '+normalize(pattern)+' ')?normalize(pattern).split(' ').length*10+normalize(pattern).length/100:0))})).sort((a,b)=>b.score-a.score);
 return scored[0].score?scored[0].entry:{id:'unknown',answer:'No tengo ese dato confirmado. Para darte una respuesta precisa, te ayudo a consultarlo con nuestro equipo. 💬',contact:true};
}
root.PRE_SUPPORT={entries,answer,normalize};
})(typeof window==='undefined'?globalThis:window);
