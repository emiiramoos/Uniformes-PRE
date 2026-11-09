const assert=require('node:assert/strict');
global.window={};require('../quote-engine.js');require('../catalog-data.js');
const Q=window.PRE_QUOTE,P=window.PRE_PRODUCTS;
function row(quantity=1,chest=0,back=0,code='PL001'){const p=P.find(p=>p.code===code);return {code,quantity,chest,back,size:p.sizes[0],color:p.colors[0]};}

// Multiplied embroidery counts select tiers independently of garment volume.
for(const [garments,per,total,rate] of [[6,2,12,4500],[1,13,13,3800],[7,2,14,3800],[25,2,50,3800],[1,51,51,3300],[26,2,52,3300]]){
 const x=Q.calculate([row(garments,per)],P);
 assert.equal(x.chest,total);assert.equal(x.lines[0].chestCount,total);
 assert.equal(x.lines[0].chestRate,rate);assert.equal(x.embroidery,total*rate);
}
let x=Q.calculate([row(10,2,6)],P);
assert.equal(x.chest,20);assert.equal(x.back,60);
assert.equal(x.lines[0].chestRate,3800);assert.equal(x.lines[0].backRate,6500);
assert.equal(x.embroidery,20*3800+60*6500);assert.equal(x.lines[0].unit,24000);
assert(Q.validate(row(1,100001,100002),P));
x=Q.calculate([row(1,100001,100002)],P);
assert.equal(x.embroidery,100001*3300+100002*6500);
x=Q.calculate([row(2,3,4)],P);assert.equal(x.chest,6);assert.equal(x.back,8);
x=Q.calculate([row(1,3,4)],P);assert.equal(x.chest,3);assert.equal(x.back,4);
x=Q.calculate([row(3,2,1),row(7,1,7,'CZ001MC')],P);
assert.equal(x.chest,13);assert.equal(x.back,52);
assert.equal(x.lines[0].chestRate,3800);assert.equal(x.lines[1].backRate,6500);
assert.equal(x.lines[0].unit,24000);assert.equal(x.lines[1].unit,65000);
console.log('PASS: bordados por prenda sin tope por prendas; multiplicación, rangos 12/13/50/51 y ubicaciones independientes.');

for(const bad of [row(1,-1),row(1,1.5),row(1,0,Infinity),row(1,Number.MAX_SAFE_INTEGER)])assert(!Q.validate(bad,P));
const huge=row(1,1e12);assert(Q.validate(huge,P));
assert.throws(()=>Q.calculate(Array(3).fill(huge),P),/precisión/);
const message=Q.message(Q.calculate([row(10,2,6)],P));
assert(message.includes('2 por prenda × 10 prendas = 20 bordados × $38.00 = $760.00'));
assert(message.includes('6 por prenda × 10 prendas = 60 bordados × $65.00 = $3,900.00'));
assert(message.includes('Total de bordados: 20 pecho · 60 espalda'));
console.log('PASS: precisión monetaria, validación y multiplicaciones explícitas en WhatsApp.');

// Old saved totals must not be multiplied a second time when the site updates.
for(let n=1;n<=12;n++)for(let chest=0;chest<=n;chest++)for(let back=0;back<=n;back++){
 const old=row(n,chest,back),migrated=Q.migrateLegacy([old],P),quote=Q.calculate(migrated,P);
 assert.equal(migrated.reduce((sum,r)=>sum+r.quantity,0),n);
 assert.equal(quote.chest,chest);assert.equal(quote.back,back);
 assert(migrated.length<=3);assert(migrated.every(r=>r.size===old.size&&r.color===old.color));
}
const old=Array.from({length:200},()=>row(6,2,4));
const migrated=Q.migrateLegacy(old,P);assert.equal(migrated.length,600);
x=Q.calculate(migrated,P);assert.equal(x.chest,400);assert.equal(x.back,800);assert.equal(x.garments,1200*22000);
assert.deepEqual(Q.migrateLegacy([null,{},row(2,3),row(1,1,0,'ALINA')],P),[]);
assert.deepEqual(Q.migrateLegacy(null,P),[]);
assert.deepEqual(Q.calculate(JSON.parse(JSON.stringify(migrated)),P),x);
console.log('PASS: migración conserva cantidades y bordados parciales, hasta 200 partidas antiguas, y persistencia nueva.');
