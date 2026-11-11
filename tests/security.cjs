const assert=require('node:assert/strict');require('../security.js');require('../quote-engine.js');const S=global.PRE_SECURITY,Q=global.PRE_QUOTE;
for(const src of ['javascript:alert(1)','https://evil.test/a.mp4','//evil.test/a.webp','assets/../app.js','assets/%2e%2e/a.mp4','assets/evil.svg\" onload=alert(1)','data:image/svg+xml,x'])assert.equal(S.media(src),false,src);
for(const src of ['assets/videos/pre-bordado.mp4?v=1','assets/images/a.webp'])assert.equal(S.media(src),true,src);
assert.equal(S.clean('a\u0000\u202eb',10),'ab');assert.equal(S.clean('123456',3),'123');
const p={code:'A',name:'Seguro',kind:'shirt',sizes:['M'],colors:['Blanco'],priceTiers:{'1-12':100,'13-50':90,'51+':80}};
const row={code:'A',quantity:1,size:'M',color:'Blanco',chest:0,back:0,name:'<img src=x onerror=alert(1)>',unit:1,total:1,admin:true};
const result=Q.calculate([row],[p]);assert.equal(result.total,10000);assert.equal(result.lines[0].name,'Seguro');assert.equal('admin' in result.lines[0],false);
for(const quantity of [-1,0,1.1,Infinity,100001,'1'])assert.equal(Q.validate({...row,quantity},[p]),false);
console.log('PASS: rutas de medios, controles y límites de texto, campos manipulados y precios recalculados.');
