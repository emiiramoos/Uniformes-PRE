/* Importes en centavos; descuentos por modelo y bordados por ubicación. */
(function(root){
'use strict';
const integer=(v,min=0,max=100000)=>Number.isSafeInteger(v)&&v>=min&&v<=max;
const tier=q=>q>=51?'51+':q>=13?'13-50':'1-12';
function validate(row,products){if(!row||typeof row!=='object')return false;const p=products.find(p=>p.code===row.code);return !!p&&integer(row.quantity,1)&&integer(row.chest)&&integer(row.back)&&row.chest<=row.quantity&&row.back<=row.quantity&&p.sizes.includes(row.size)&&p.colors.includes(row.color)&&(!row.chest&&!row.back||!['shoe','pants','cap','layers'].includes(p.kind));}
function calculate(rows,products){
 if(rows.length>200||rows.some(r=>!validate(r,products)))throw Error('Revisa cantidades, tallas, colores y bordados.');
 const groups={};let chest=0,back=0;for(const r of rows){groups[r.code]=(groups[r.code]||0)+r.quantity;chest+=r.chest;back+=r.back;}
 const chestRate=({ '1-12':4500,'13-50':3800,'51+':3300})[tier(chest)],backRate=({'1-12':8000,'13-50':7200,'51+':6500})[tier(back)];
 const lines=rows.map(r=>{const p=products.find(p=>p.code===r.code),rate=p.priceTiers?.[tier(groups[r.code])];const unit=rate===undefined?null:Math.round(rate*100),garments=unit===null?null:unit*r.quantity,embroidery=r.chest*chestRate+r.back*backRate;return {...r,name:p.name,unit,garments,chestRate,backRate,embroidery,total:garments===null?null:garments+embroidery,range:tier(groups[r.code])};});
 const garments=lines.reduce((a,l)=>a+(l.garments||0),0),embroidery=lines.reduce((a,l)=>a+l.embroidery,0),total=garments+embroidery,pending=lines.some(l=>l.total===null),subtotal=Math.round(total/1.16);return {lines,garments,embroidery,total,subtotal,iva:total-subtotal,pending,chest,back,shipping:!lines.length?0:total>=100000?0:pending?null:15000};
}
const money=c=>new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(c/100);
function message(quote,info={}){
 const shipping=quote.shipping,grand=shipping===null?null:quote.total+shipping;
 return [
 'Hola, equipo de Uniformes PRE. Me gustaría solicitar una cotización.',
 '*DATOS DE CONTACTO*\n'+[
 'Nombre: '+(info.name||'No indicado'),
 info.company?'Empresa: '+info.company:'',
 'Ciudad: '+(info.city||'No indicada'),
 'Código postal: '+(info.postal||'No indicado')].filter(Boolean).join('\n'),
 '*DETALLE DEL PEDIDO*',
 ...quote.lines.map((l,i)=>`*${i+1}. ${l.name}*\nCódigo: ${l.code}\nCantidad: ${l.quantity}\nTalla: ${l.size} · Color: ${l.color}\nPrenda: ${l.unit===null?'Precio por confirmar':money(l.unit)+' c/u'}\nBordado pecho: ${l.chest}${l.chest?' × '+money(l.chestRate):''}\nBordado espalda: ${l.back}${l.back?' × '+money(l.backRate):''}\nImporte: ${l.total===null?'Por confirmar':money(l.total)}`),
 '*RESUMEN*\n'+[
 'Total de prendas: '+quote.lines.reduce((n,l)=>n+l.quantity,0),
 'Prendas: '+money(quote.garments),
 'Bordados: '+money(quote.embroidery),
 'Envío: '+(shipping===null?'Por confirmar':shipping===0?'Gratis':money(shipping)),
 (quote.pending?'Total parcial estimado: ':'Total estimado: ')+(grand===null?money(quote.total)+' + envío por confirmar':money(grand))+' MXN',
 'Precios con IVA incluido.'].join('\n'),
 quote.pending?'Hay productos pendientes de precio; no están incluidos en el importe parcial.':'',
 quote.chest||quote.back?'Ponchado: $350 por logotipo, si se requiere. No incluido en este estimado; por confirmar con PRE.':'',
 info.notes?'*COMENTARIOS*\n'+info.notes:'',
 '¿Me ayudan a confirmar disponibilidad, importe final y fecha de entrega? Muchas gracias.'
 ].filter(Boolean).join('\n\n');
}
root.PRE_QUOTE={calculate,validate,tier,money,message};
})(typeof window==='undefined'?globalThis:window);
