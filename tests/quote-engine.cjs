const assert=require('node:assert/strict');global.window={};require('../quote-engine.js');require('../catalog-data.js');const Q=window.PRE_QUOTE,P=window.PRE_PRODUCTS;
function row(code='PL001',quantity=1,chest=0,back=0){const p=P.find(p=>p.code===code);return {code,quantity,chest,back,size:p.sizes[0],color:p.colors[0]};}
for(const [q,cost,ch,back] of [[1,240,45,80],[6,240,45,80],[12,240,45,80],[13,230,38,72],[50,230,38,72],[51,220,33,65]]){const x=Q.calculate([row('PL001',q,q,q)],P);assert.equal(x.total,q*(cost+ch+back)*100);assert.equal(x.iva+x.subtotal,x.total);}
let rows=[row('PL001',6,6),{...row('PL001',7,7),size:P.find(p=>p.code==='PL001').sizes[1],color:'Negro'}];let x=Q.calculate(rows,P);assert.equal(x.lines[0].unit,23000);assert.equal(x.lines[1].chestRate,3800);
x=Q.calculate([rows[0]],P);assert.equal(x.lines[0].unit,24000);assert.equal(x.lines[0].chestRate,4500);
x=Q.calculate([row('PL001',6,6),row('CZ001MC',7,7)],P);assert.equal(x.lines[0].unit,24000);assert.equal(x.lines[0].chestRate,3800);assert.equal(x.lines[1].unit,65000);
x=Q.calculate([row('PL001',20,12,13)],P);assert.equal(x.lines[0].chestRate,4500);assert.equal(x.lines[0].backRate,7200);assert.equal(x.embroidery,12*4500+13*7200);
assert.equal(Q.calculate([row('ALINA',1)],P).total,84000);assert.equal(Q.calculate([],P).total,0);assert(Q.calculate([row('MANTELERIA')],P).pending);
for(const bad of [null,{},row('PL001',0),row('PL001',1.5),row('PL001',2,3),row('ALINA',1,1),{...row(),color:'inventado'},{...row(),quantity:Infinity}])assert(!Q.validate(bad,P));
assert.throws(()=>Q.calculate([row('PL001',-1)],P));
const quote=Q.calculate(rows,P),text=Q.message(quote,{name:'Ana & José',notes:'Bordar A&B'});assert(text.includes('Ana & José'));assert(text.includes('Talla:'));assert(text.includes('Bordado pecho: 6'));assert(text.includes(Q.money(quote.total)));assert.equal(decodeURIComponent(encodeURIComponent(text)),text);
const reference=require('../reference-data/oficialpre-20261108/materiales-precios.json');for(const p of P.filter(p=>p.priceTiers)){const ref=reference.products.find(r=>r.code===p.priceSource);assert.deepEqual(p.priceTiers,ref.price_tiers_mxn,p.code);}
assert.deepEqual(Q.calculate(JSON.parse(JSON.stringify(rows)),P),quote);console.log('PASS: tarifas, 1/6/12/13/50/51, agregación, reducción, bordados parciales, IVA, validación, persistencia y WhatsApp.');
// Todas las tarifas: no hay cambios en 6/7 ni en 12; descuentos exactamente en 13 y 51.
for(const p of P.filter(p=>p.priceTiers))for(let n=1;n<=52;n++){
 const x=Q.calculate([row(p.code,n)],P),range=n>=51?'51+':n>=13?'13-50':'1-12';assert.equal(x.lines[0].unit,Math.round(p.priceTiers[range]*100),p.code+' cantidad '+n);
}
for(let n=0;n<=52;n++){
 const x=Q.calculate([row('PL001',52,n,n)],P),range=n>=51?'51+':n>=13?'13-50':'1-12';assert.equal(x.lines[0].chestRate,{'1-12':4500,'13-50':3800,'51+':3300}[range]);assert.equal(x.lines[0].backRate,{'1-12':8000,'13-50':7200,'51+':6500}[range]);
}
assert.equal(Q.calculate([row('FI003-AF',7)],P).lines[0].unit,58000);
assert.equal(Q.calculate([row('FI003-AF',6),row('FI003-AF',7)],P).lines[1].unit,55000);
console.log('PASS: 33 productos × cantidades 1–52, bordados 0–52 y reproducción 6 en carrito + 7 nuevas.');
