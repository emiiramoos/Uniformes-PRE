'use strict';
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];
const config = window.PRE_CONFIG;
const products = window.PRE_PRODUCTS || [];
const esc = v => String(v ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const iconPath = {shirt:'m8 3-6 4 3 5 3-2v11h8V10l3 2 3-5-6-4-4 3z',cap:'M3 14a9 9 0 0 1 18 0M3 14h18l2 4H9l-6-4',shoe:'M3 12V5h5l2 7 7 2 4 2v4H3z',pants:'M7 3h10l2 18h-6l-1-12-1 12H5zM7 6h10',apron:'M8 3h8v6l5 12H3L8 9zM9 13h6v4H9z',layers:'m12 2 10 5-10 5L2 7zm-10 10 10 5 10-5M2 17l10 5 10-5',arrow:'M4 12h16m-6-6 6 6-6 6',close:'m6 6 12 12M6 18 18 6'};
function icon(n){return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${iconPath[n]||iconPath.shirt}"/></svg>`;}
function placeholder(p,label='Imagen por integrar'){return `<div class="product-placeholder">${icon(p.kind)}<span>${esc(label)}</span></div>`;}
function safeMedia(src){return typeof src==='string' && src && !src.startsWith('//') && (/^https:\/\//.test(src)||/^(assets\/|\.\/assets\/)/.test(src));}
function productVisual(p,view='Frente'){
 const src=config.productImages?.[p.code]?.[view];
 return safeMedia(src)?`<img src="${esc(src)}" alt="${esc(p.name)}, vista ${esc(view.toLowerCase())}" loading="lazy">`:placeholder(p,`${view} · imagen por integrar`);
}
let toastTimeout;
function toast(message){const el=$('.toast');el.textContent=message;el.classList.add('visible');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.classList.remove('visible'),3000);}
function openDialog(dialog){if(!dialog.open)dialog.showModal();document.body.style.overflow='hidden';}
$$('dialog').forEach(d=>{
 $('.dialog-close',d)?.addEventListener('click',()=>d.close());
 d.addEventListener('click',event=>{if(event.target===d){const r=d.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)d.close();}});
 d.addEventListener('close',()=>{if(!$$('dialog[open]').length)document.body.style.overflow='';$$('video',d).forEach(v=>v.pause());});
});
// Navegación móvil y compatibilidad con los enlaces anteriores del repositorio.
const legacy={catalogo:'catalogo.html',nosotros:'quienes-somos.html',contacto:'contacto.html'};
if(document.body.dataset.view==='inicio' && legacy[location.hash.slice(1)])location.replace(legacy[location.hash.slice(1)]);
$('.menu-toggle')?.addEventListener('click',()=>{const toggle=$('.menu-toggle');const expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!expanded));$('#site-nav').classList.toggle('is-open',!expanded);toggle.setAttribute('aria-label',expanded?'Abrir menú':'Cerrar menú');});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('#site-nav').classList.remove('is-open');$('.menu-toggle')?.setAttribute('aria-expanded','false');}});
// Almacenamiento local: únicamente la selección de prendas, sin datos del formulario.
let cart=[];
try{const saved=JSON.parse(localStorage.getItem('pre_quote_v2')||'[]');if(Array.isArray(saved))cart=saved.filter(x=>x&&products.some(p=>p.code===x.code)&&Number.isSafeInteger(x.qty)&&x.qty>0&&x.qty<=100000&&typeof x.size==='string'&&typeof x.color==='string').slice(0,100);}catch{}
function persist(){try{localStorage.setItem('pre_quote_v2',JSON.stringify(cart));}catch{}$$('[data-quote-count]').forEach(el=>el.textContent=cart.reduce((n,x)=>n+x.qty,0));}
function summary(){return 'Hola Uniformes PRE, me gustaría solicitar una cotización:\n\n'+cart.map((x,i)=>{const p=products.find(p=>p.code===x.code);return `${i+1}. ${p.name} (${p.code})\nCantidad: ${x.qty} | Talla: ${x.size} | Color: ${x.color}`;}).join('\n\n')+'\n\nPor favor confirmar precios por volumen, bordado, disponibilidad y envío.';}
function whatsapp(message){return `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`;}
function renderQuote(){const box=$('[data-quote-items]');box.innerHTML=cart.length?cart.map((x,i)=>{const p=products.find(p=>p.code===x.code);return `<div class="quote-row"><div><strong>${esc(p.name)}</strong><small>${esc(x.size)} · ${esc(x.color)}</small></div><input data-qty="${i}" type="number" min="1" max="100000" step="1" value="${x.qty}" aria-label="Cantidad de ${esc(p.name)}"><button data-remove="${i}" aria-label="Quitar ${esc(p.name)}">${icon('close')}</button></div>`;}).join(''):'<p class="quote-empty">Aún no agregas prendas. Explora el catálogo para empezar.</p>';
 const send=$('[data-quote-send]');send.hidden=!cart.length;send.href=whatsapp(summary());$('[data-quote-copy]').hidden=!cart.length;$('[data-quote-status]').textContent='';
 $$('[data-remove]',box).forEach(b=>b.addEventListener('click',()=>{cart.splice(Number(b.dataset.remove),1);persist();renderQuote();}));
 $$('[data-qty]',box).forEach(input=>input.addEventListener('change',()=>{const n=Number(input.value);if(!Number.isSafeInteger(n)||n<1||n>100000){input.value=cart[Number(input.dataset.qty)].qty;return;}cart[Number(input.dataset.qty)].qty=n;persist();send.href=whatsapp(summary());}));
}
$$('.quote-toggle').forEach(b=>b.addEventListener('click',()=>{renderQuote();openDialog($('#quote-dialog'));}));
$('[data-quote-copy]')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(summary());$('[data-quote-status]').textContent='Solicitud copiada.';}catch{$('[data-quote-status]').textContent='Puedes continuar por WhatsApp para revisar la solicitud.';}});
persist();
// Catálogo: datos recuperados, sin inventar fotos, precios finales ni vistas.
const grid=$('#catalog-grid');let activeFilter='todos';
function matchesCategory(p,c){if(c==='todos')return true;if(c==='corporativo')return p.category==='ejecutivo';if(c==='servicios')return ['GG001','MP001','MC001','PL001','PL002MC','PL001ML'].includes(p.code);return p.category===c;}
function renderCatalog(){if(!grid)return;const q=norm($('#catalog-search').value.trim());const visible=products.filter(p=>matchesCategory(p,activeFilter)&&norm([p.name,p.code,p.material,p.description].join(' ')).includes(q));grid.innerHTML=visible.map(p=>`<article class="catalog-card"><button class="catalog-visual" data-product="${esc(p.code)}" aria-label="Ver detalles de ${esc(p.name)}">${productVisual(p)}</button><div class="catalog-info"><small>${esc(p.code)}</small><h2>${esc(p.name)}</h2><p>${esc(p.material.length>85?p.material.slice(0,82)+'…':p.material)}</p><button class="inline-link" data-product="${esc(p.code)}">Ver detalles ${icon('arrow')}</button></div></article>`).join('');$('#catalog-count').textContent=`${visible.length} ${visible.length===1?'opción':'opciones'}`;$('.empty-state').hidden=!!visible.length;bindProducts(grid);}
function setFilter(c){activeFilter=c;$$('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===c)));renderCatalog();}
function bindProducts(parent){$$('[data-product]',parent).forEach(b=>b.addEventListener('click',()=>openProduct(b.dataset.product)));}
function openProduct(code){const p=products.find(x=>x.code===code);if(!p)return;const host=$('[data-product-content]');host.innerHTML=`<div class="product-detail-grid"><div><div class="detail-image">${productVisual(p)}</div><div class="view-buttons" aria-label="Vistas del producto">${p.views.map((v,i)=>`<button data-view="${esc(v)}" aria-pressed="${i===0}">${esc(v)}</button>`).join('')}</div><p class="form-hint">Las imágenes finales se integrarán respetando el diseño real de esta prenda.</p></div><form id="product-options"><small>${esc(p.code)}</small><h2>${esc(p.name)}</h2><p>${esc(p.description)}</p><p><strong>Material:</strong> ${esc(p.material)}</p><ul class="detail-features">${p.features.filter(Boolean).map(f=>`<li>${esc(f)}</li>`).join('')}</ul><div class="product-options"><label>Talla<select name="talla">${p.sizes.map(s=>`<option>${esc(s)}</option>`).join('')}</select></label><label>Cantidad<input name="cantidad" type="number" min="1" max="100000" step="1" required value="1"></label><label>Color<select name="color">${p.colors.map(c=>`<option>${esc(c)}</option>`).join('')}</select></label></div><button class="button detail-add" type="submit">Agregar a mi solicitud ${icon('arrow')}</button><p class="form-hint">Precios y disponibilidad sujetos a confirmación de PRE.</p></form></div>`;
 $$('[data-view]',host).forEach(b=>b.addEventListener('click',()=>{$$('.view-buttons button',host).forEach(t=>t.setAttribute('aria-pressed',String(t===b)));$('.detail-image',host).innerHTML=productVisual(p,b.dataset.view);}));
 $('#product-options').addEventListener('submit',ev=>{ev.preventDefault();const f=new FormData(ev.currentTarget);const qty=Number(f.get('cantidad'));if(!Number.isSafeInteger(qty)||qty<1||qty>100000)return;const size=String(f.get('talla')),color=String(f.get('color'));const old=cart.find(x=>x.code===code&&x.size===size&&x.color===color);if(old){if(old.qty+qty>100000){toast('La cantidad máxima por selección es 100,000.');return;}old.qty+=qty;}else cart.push({code,qty,size,color});persist();$('#product-dialog').close();toast('Prenda agregada a tu solicitud.');});openDialog($('#product-dialog'));
}
if(grid){$('#catalog-search').addEventListener('input',renderCatalog);$$('[data-filter]').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));$('[data-clear-search]').addEventListener('click',()=>{$('#catalog-search').value='';setFilter('todos');});const params=new URLSearchParams(location.search);const cat=params.get('categoria');setFilter($$('[data-filter]').some(b=>b.dataset.filter===cat)?cat:'todos');if(params.has('producto'))openProduct(params.get('producto'));}
// Animación del proceso: CSS y JavaScript, sin servicios ni créditos.
const stepButtons=$$('[data-step]');
if(stepButtons.length){let step=0,timer=null,inView=false,manualPause=false;const reduce=matchMedia('(prefers-reduced-motion: reduce)');const pause=$('.process-pause');
 function activate(n){step=n;stepButtons.forEach((b,i)=>{b.setAttribute('aria-pressed',String(i===n));b.closest('li').classList.toggle('is-active',i===n);});$('.process-progress span').style.width=`${(n+1)*20}%`;}
 function sync(){clearInterval(timer);timer=null;if(inView&&!manualPause&&!reduce.matches&&!document.hidden)timer=setInterval(()=>activate((step+1)%5),3200);}
 pause.addEventListener('click',()=>{manualPause=!manualPause;pause.setAttribute('aria-pressed',String(manualPause));pause.textContent=manualPause?'Reanudar animación':'Pausar animación';sync();});
 stepButtons.forEach((b,i)=>b.addEventListener('click',()=>{activate(i);sync();}));
 const observer=new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;sync();},{threshold:.2});observer.observe($('#proceso'));reduce.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);
 if(reduce.matches){pause.hidden=true;}
}
// Los huecos de video no simulan una reproducción; muestran claramente que falta el material.
$$('[data-video]').forEach(b=>{const item=config.videos[b.dataset.video];if(safeMedia(item?.src)){$('.video-status',b).textContent='Ver video';$('.video-center>span:last-child',b).textContent='Reproducir';if(safeMedia(item.poster)){b.style.backgroundImage=`linear-gradient(0deg,#06142ce6,transparent),url("${item.poster.replaceAll('"','%22')}")`;b.style.backgroundSize='cover';}}
 b.addEventListener('click',()=>{const host=$('[data-media-content]');host.replaceChildren();if(safeMedia(item?.src)){const video=document.createElement('video');video.src=item.src;video.controls=true;video.playsInline=true;video.preload='metadata';if(safeMedia(item.poster))video.poster=item.poster;host.append(video);}const title=document.createElement('h2');title.textContent=item.title;host.append(title);if(!safeMedia(item?.src)){const p=document.createElement('p');p.textContent='Este espacio está reservado para el video real de PRE. Próximamente integraremos el material.';const a=document.createElement('a');a.className='inline-link';a.href=config.instagram;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Ver @uniformespre en Instagram';host.append(p,a);}openDialog($('#media-dialog'));});
});
// Preparación del video de portada para cuando se reciba. La fotografía permanece como respaldo.
const hero=$('.hero');if(hero){const mobile=matchMedia('(max-width:720px)');const reduced=matchMedia('(prefers-reduced-motion:reduce)');let video;function heroVideo(){const src=mobile.matches?config.hero.mobileVideo:config.hero.desktopVideo;if(reduced.matches||!safeMedia(src)){video?.remove();video=null;return;}if(!video){video=document.createElement('video');video.className='hero-image';video.muted=true;video.autoplay=true;video.loop=true;video.playsInline=true;video.setAttribute('aria-hidden','true');video.poster=config.hero.poster;video.addEventListener('error',()=>{video?.remove();video=null;});hero.insertBefore(video,$('.hero-shade'));}if(video.getAttribute('src')!==src)video.src=src;video.play().catch(()=>{});}heroVideo();mobile.addEventListener('change',heroVideo);reduced.addEventListener('change',heroVideo);}
// Contacto no envía silenciosamente: el visitante revisa y envía en WhatsApp.
$('#contact-form')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const message=`Hola Uniformes PRE.\nNombre: ${String(f.get('nombre')).trim()}\nCorreo: ${String(f.get('correo')).trim()||'No indicado'}\nTeléfono: ${String(f.get('telefono')).trim()||'No indicado'}\n\n${String(f.get('mensaje')).trim()}`;const a=$('#contact-whatsapp');a.href=whatsapp(message);a.hidden=false;$('#contact-status').textContent='Tu mensaje está preparado. Revísalo y envíalo desde WhatsApp.';a.click();});
if($('#contact-form')&&new URLSearchParams(location.search).get('servicio')==='bordado')$('#contact-form textarea').value='Me gustaría solicitar información sobre bordado para mis uniformes.';
// Aviso discreto una vez pasada la portada. Se puede cerrar durante la sesión.
const help=$('.help-widget');let dismissed=false;try{dismissed=sessionStorage.getItem('pre_help_dismissed')==='yes';}catch{}
function helpScroll(){if(dismissed)return;const boundary=hero?hero.offsetTop+hero.offsetHeight:420;help.hidden=scrollY<boundary;}
window.addEventListener('scroll',helpScroll,{passive:true});$('.help-dismiss')?.addEventListener('click',()=>{dismissed=true;help.hidden=true;try{sessionStorage.setItem('pre_help_dismissed','yes');}catch{}});
$$('[data-legal]').forEach(b=>b.addEventListener('click',()=>{const host=$('[data-legal-content]');host.replaceChildren();const h=document.createElement('h2');h.textContent=b.textContent;const p=document.createElement('p');p.textContent=config.legal[b.dataset.legal]||'El texto definitivo de esta sección está pendiente de revisión. Para consultar condiciones de tu pedido, comunícate con Uniformes PRE.';host.append(h,p);openDialog($('#legal-dialog'));}));
