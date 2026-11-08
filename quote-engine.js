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
 const garments=lines.reduce((a,l)=>a+(l.garments||0),0),embroidery=lines.reduce((a,l)=>a+l.embroidery,0),total=garments+embroidery,pending=lines.some(l=>l.total===null),subtotal=Math.round(total/1.16);return {lines,garments,embroidery,total,subtotal,iva:total-subtotal,pending,chest,back};
}
const money=c=>new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(c/100);
function message(quote,info={}){return ['Hola, me gustaría solicitar esta cotización de Uniformes PRE.',info.name?'Nombre: '+info.name:'',info.company?'Empresa: '+info.company:'',...quote.lines.map((l,i)=>`${i+1}. ${l.name} (${l.code})\nCantidad: ${l.quantity} | Talla: ${l.size} | Color: ${l.color}\nPrenda: ${l.unit===null?'Por confirmar':money(l.unit)+' c/u'} | Rango: ${l.range}\nBordado pecho: ${l.chest} × ${money(l.chestRate)}; espalda: ${l.back} × ${money(l.backRate)}\nImporte: ${l.total===null?'Por confirmar':money(l.total)}`),`Prendas calculadas: ${money(quote.garments)}`,`Bordados: ${money(quote.embroidery)}`,`Subtotal sin IVA: ${money(quote.subtotal)}`,`IVA (16%): ${money(quote.iva)}`,`${quote.pending?'Total parcial estimado':'Total estimado'}: ${money(quote.total)} MXN (IVA incluido)`,quote.pending?'Hay productos con precio pendiente de confirmar.':'', 'Envío y disponibilidad por confirmar.',info.notes?'Notas: '+info.notes:''].filter(Boolean).join('\n\n');}
root.PRE_QUOTE={calculate,validate,tier,money,message};
})(typeof window==='undefined'?globalThis:window);
