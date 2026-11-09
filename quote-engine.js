/* Importes en centavos; bordados por prenda, descuentos por ubicación. */
(function(root){
'use strict';
const MAX_LINES=600;
const integer=(v,min=0,max=Number.MAX_SAFE_INTEGER)=>Number.isSafeInteger(v)&&v>=min&&v<=max;
const tier=q=>q>=51?'51+':q>=13?'13-50':'1-12';
function validate(row,products){if(!row||typeof row!=='object')return false;const p=products.find(p=>p.code===row.code);return !!p&&integer(row.quantity,1,100000)&&integer(row.chest)&&integer(row.back)&&integer(row.quantity*(row.chest*4500+row.back*8000)+(p.priceTiers?Math.round(Math.max(...Object.values(p.priceTiers))*100)*row.quantity:0))&&p.sizes.includes(row.size)&&p.colors.includes(row.color)&&(!row.chest&&!row.back||!['shoe','pants','cap','layers'].includes(p.kind));}
// Version 1 stored totals for selected garments. Split partial embroidery into
// up to three lines so adopting per-garment quantities preserves the old order.
function migrateLegacy(rows,products){
 if(!Array.isArray(rows))return [];
 return rows.slice(0,200).flatMap(r=>{
  if(!r||!validate({...r,chest:0,back:0},products)||!integer(r.chest,0,r.quantity)||!integer(r.back,0,r.quantity)||((r.chest||r.back)&&['shoe','pants','cap','layers'].includes(products.find(p=>p.code===r.code).kind)))return [];
  const cuts=[...new Set([0,r.chest,r.back,r.quantity])].sort((a,b)=>a-b);
  return cuts.slice(1).map((end,i)=>({...r,quantity:end-cuts[i],chest:Number(end<=r.chest),back:Number(end<=r.back)}));
 });
}
function checked(value){if(!integer(value))throw Error('La cantidad es demasiado grande para calcular el importe con precisión.');return value;}
function calculate(rows,products){
 if(rows.length>MAX_LINES||rows.some(r=>!validate(r,products)))throw Error('Revisa cantidades, tallas, colores y bordados.');
 const groups={};let chest=0,back=0;for(const r of rows){groups[r.code]=(groups[r.code]||0)+r.quantity;chest=checked(chest+r.quantity*r.chest);back=checked(back+r.quantity*r.back);}
 const chestRate=({ '1-12':4500,'13-50':3800,'51+':3300})[tier(chest)],backRate=({'1-12':8000,'13-50':7200,'51+':6500})[tier(back)];
 const lines=rows.map(r=>{const p=products.find(p=>p.code===r.code),rate=p.priceTiers?.[tier(groups[r.code])];const unit=rate===undefined?null:Math.round(rate*100),garments=unit===null?null:unit*r.quantity,chestCount=r.quantity*r.chest,backCount=r.quantity*r.back,embroidery=checked(chestCount*chestRate+backCount*backRate);return {...r,name:p.name,unit,garments,chestCount,backCount,chestRate,backRate,embroidery,total:garments===null?null:checked(garments+embroidery),range:tier(groups[r.code])};});
 const garments=checked(lines.reduce((a,l)=>a+(l.garments||0),0)),embroidery=checked(lines.reduce((a,l)=>a+l.embroidery,0)),total=checked(garments+embroidery),pending=lines.some(l=>l.total===null),subtotal=Math.round(total/1.16);return {lines,garments,embroidery,total,subtotal,iva:total-subtotal,pending,chest,back,chestRange:tier(chest),backRange:tier(back),shipping:!lines.length?0:total>=100000?0:pending?null:15000};
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
 ...quote.lines.map((l,i)=>`*${i+1}. ${l.name}*\nCódigo: ${l.code}\nCantidad: ${l.quantity}\nTalla: ${l.size} · Color: ${l.color}\nPrenda: ${l.unit===null?'Precio por confirmar':money(l.unit)+' c/u'}\nBordado pecho: ${l.chest} por prenda × ${l.quantity} ${l.quantity===1?'prenda':'prendas'} = ${l.chestCount} bordados${l.chest?' × '+money(l.chestRate)+' = '+money(l.chestCount*l.chestRate):''}\nBordado espalda: ${l.back} por prenda × ${l.quantity} ${l.quantity===1?'prenda':'prendas'} = ${l.backCount} bordados${l.back?' × '+money(l.backRate)+' = '+money(l.backCount*l.backRate):''}\nImporte: ${l.total===null?'Por confirmar':money(l.total)}`),
 '*RESUMEN*\n'+[
 'Total de prendas: '+quote.lines.reduce((n,l)=>n+l.quantity,0),
 'Prendas: '+money(quote.garments),
 'Bordados: '+money(quote.embroidery),
 'Total de bordados: '+quote.chest+' pecho · '+quote.back+' espalda',
 'Envío: '+(shipping===null?'Por confirmar':shipping===0?'Gratis':money(shipping)),
 (quote.pending?'Total parcial estimado: ':'Total estimado: ')+(grand===null?money(quote.total)+' + envío por confirmar':money(grand))+' MXN',
 'Precios con IVA incluido.'].join('\n'),
 quote.pending?'Hay productos pendientes de precio; no están incluidos en el importe parcial.':'',
 quote.chest||quote.back?'Ponchado: $350 por logotipo, si se requiere. No incluido en este estimado; por confirmar con PRE.':'',
 info.notes?'*COMENTARIOS*\n'+info.notes:'',
 '¿Me ayudan a confirmar disponibilidad, importe final y fecha de entrega? Muchas gracias.'
 ].filter(Boolean).join('\n\n');
}
root.PRE_QUOTE={calculate,validate,migrateLegacy,MAX_LINES,tier,money,message};
})(typeof window==='undefined'?globalThis:window);
