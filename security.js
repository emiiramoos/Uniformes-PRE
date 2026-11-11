/* Local browser safeguards; no backend authentication or trusted pricing boundary. */
(function(root){
'use strict';
const limits={name:100,company:120,city:100,postal:5,notes:1000,nombre:100,correo:150,telefono:30,mensaje:2000};
function clean(value,max=2000){return String(value??'').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f\u202a-\u202e\u2066-\u2069]/g,'').trim().slice(0,max);}
function readForm(form){
 if(!form.reportValidity())return null;
 const data={};
 for(const [name,max] of Object.entries(limits)){
  const field=form.elements.namedItem(name);if(!field)continue;
  const value=clean(field.value,max),raw=String(field.value).trim();
  const invalid=raw.length>max||(field.required&&!value)||(name==='postal'&&!/^\d{5}$/.test(value));
  field.setCustomValidity(invalid?'Revisa este dato y su longitud.':'');
  field.oninput=()=>field.setCustomValidity('');
  if(invalid){field.reportValidity();return null;}data[name]=value;
 }
 return data;
}
function media(src){
 if(typeof src!=='string'||src.length>500||/[\\\s<>"'\u0000-\u001f]/.test(src)||!/^\.?(?:\/)?assets\//.test(src))return false;
 try{const path=decodeURIComponent(src.split('?')[0]).replace(/^\.\//,'');if(path.split('/').some(x=>x==='..'||x==='.'))return false;
 return /\.(webp|png|jpe?g|svg|mp4)$/i.test(path);
 }catch{return false;}
}
root.PRE_SECURITY={clean,readForm,media};
})(typeof window==='undefined'?globalThis:window);
