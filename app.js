'use strict';
const $=(s,p=document)=>p.querySelector(s), $$=(s,p=document)=>[...p.querySelectorAll(s)];
const config=window.PRE_CONFIG||{},products=window.PRE_PRODUCTS||[];
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const reduce=matchMedia('(prefers-reduced-motion:reduce)');
const safeMedia=s=>typeof s==='string'&&s&&!s.startsWith('//')&&(/^https:\/\//.test(s)||/^(assets\/|\.\/assets\/)/.test(s));
const whatsapp=message=>`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`;
const iconPath={shirt:'M8 3 3 6l3 5 2-1v11h8V10l2 1 3-5-5-3M8 3a4 4 0 0 0 8 0M8 18h8',cap:'M3 14a9 9 0 0 1 18 0M3 14h18l2 4H9l-6-4',shoe:'M3 12V5h5l2 7 7 2 4 2v4H3z',pants:'M7 3h10l2 18h-6l-1-12-1 12H5zM7 6h10',apron:'M8 3h8v6l5 12H3L8 9zM9 13h6v4H9z',layers:'m12 2 10 5-10 5L2 7zm-10 10 10 5 10-5M2 17l10 5 10-5'};
function icon(n){return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${iconPath[n]||iconPath.shirt}"/></svg>`;}
function placeholder(p){return `<div class="product-placeholder">${icon(p.kind)}<span>Imagen próximamente</span></div>`;}
function defaultView(p){return Object.keys(config.productImages?.[p.code]||{})[0]||'Frente';}
function defaultColor(p){return p.colors.find(c=>norm(c)===norm(config.productImageColors?.[p.code]||''))||p.colors[0];}
function validColor(p,color){return p.colors.find(c=>norm(c)===norm(color))||defaultColor(p);}
function productVisual(p,view=defaultView(p),color,thumbnail=false){
 const variants=config.productColorImages?.[p.code];
 const chosen=color||defaultColor(p);
 const src=config.productGalleries?.[p.code]?.[chosen]?.[view]||(variants&&view==='Frente'?(variants[chosen]||config.productImages?.[p.code]?.[view]):config.productImages?.[p.code]?.[view]);
 return safeMedia(src)?`<img src="${esc(src)}" srcset="${esc(src.includes('/catalog-20261108/')?src.replace(/\.webp$/,'-thumb.webp'):src)} 480w, ${esc(src)} 1200w" sizes="${thumbnail?'76px':'(max-width:720px) 90vw, 540px'}" data-catalog-image data-kind="${esc(p.kind)}" alt="${esc(p.name)}${variants?', color '+esc(chosen):''}, ${esc(view.toLowerCase())}" loading="lazy" decoding="async">`:placeholder(p);
}
// A failed file gets a deliberate fallback, never a broken-image icon.
document.addEventListener('error',event=>{const img=event.target;if(img instanceof HTMLImageElement&&img.hasAttribute('data-catalog-image'))img.outerHTML=placeholder({kind:img.dataset.kind});},true);
const colorHex={'Kaki':'#b7a58b','Gris Oxford':'#62656b','Gris Perla':'#d1d1ce','Blanco Médico':'#fff','Blanco Clínico':'#fff','Blanco Hospitalario':'#fff','Azul Cielo':'#b9d6eb','Azul Marino':'#111d39','Marino':'#111d39','Gris':'#80858b','Rojo vino':'#722434','Azul':'#3f648b','Verde Jade':'#087e79','Azul Rey':'#162aab','Cuadritos':'#ddd','Azul vivo':'#078dc7','Azul claro':'#bccbdd','Azul rey':'#162aab','Azul marino':'#111d39','Blanco':'#fff','Negro':'#151515','Rojo':'#c91d32','Fucsia':'#ce0658','Coral':'#f05b60'};
function colorButtons(p,chosen=defaultColor(p)){return `<div class="color-preview"><p>Color: <strong data-preview-color>${esc(chosen)}</strong></p><div class="color-buttons" aria-label="Colores de ${esc(p.name)}">${p.colors.map((c,i)=>`<button type="button" data-product-color="${esc(c)}" aria-label="Ver color ${esc(c)}" aria-pressed="${c===chosen}" style="--swatch:${colorHex[c]||'#aaa'}"><span></span></button>`).join('')}</div></div>`;}

function openDialog(d){if(!d.open)d.showModal();document.body.style.overflow='hidden';}
$$('dialog').forEach(d=>{
 $('.dialog-close',d)?.addEventListener('click',()=>d.close());
 d.addEventListener('click',event=>{if(event.target===d){const r=d.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)d.close();}});
 d.addEventListener('close',()=>{if(!$$('dialog[open]').length)document.body.style.overflow='';});
});
const legacy={catalogo:'catalogo.html',nosotros:'quienes-somos.html',contacto:'contacto.html'};
if(document.body.dataset.view==='inicio'&&legacy[location.hash.slice(1)])location.replace(legacy[location.hash.slice(1)]);
$('.menu-toggle')?.addEventListener('click',()=>{const b=$('.menu-toggle'),on=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',String(on));b.setAttribute('aria-label',on?'Cerrar menú':'Abrir menú');$('#site-nav').classList.toggle('is-open',on);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('#site-nav').classList.remove('is-open');$('.menu-toggle')?.setAttribute('aria-expanded','false');}});
// Un solo mensaje de cabecera a la vez.
const messages=['Envíos a todo México','Uniformes para tu equipo','Envío gratis en pedidos arriba de $1,000 MXN'];let messageIndex=0;
if(!reduce.matches)setInterval(()=>{if(document.hidden)return;const el=$('[data-announcement]');el.classList.add('is-fading');setTimeout(()=>{messageIndex=(messageIndex+1)%messages.length;el.textContent=messages[messageIndex];$('.announcement .icon').toggleAttribute('hidden',messageIndex!==0);el.classList.remove('is-fading');},350);},3800);
// Catálogo: información breve en tarjetas; ficha completa al abrir.
const grid=$('#catalog-grid');let activeFilter='todos';
function matchesCategory(p,c){if(c==='todos')return true;if(c==='corporativo')return p.category==='ejecutivo';if(c==='restaurante'&&p.code==='PL001')return true;if(c==='servicios')return ['GG001','MP001','MC001','PL001','PL002MC','PL001ML'].includes(p.code);return p.category===c;}
function sourceClass(p){return config.sourceModelCodes?.includes(p.code)?'source-model':'';}
function renderCatalog(){if(!grid)return;const q=norm($('#catalog-search').value.trim()),color=$('#color-filter').value,size=$('#size-filter').value;
 let visible=products.filter(p=>matchesCategory(p,activeFilter)&&norm([p.name,p.code,p.material,p.description].join(' ')).includes(q)&&(color==='todos'||p.colors.some(c=>norm(c)===norm(color)))&&(size==='todos'||p.sizes.includes(size)));
 if($('#catalog-sort').value==='nombre')visible.sort((a,b)=>a.name.localeCompare(b.name,'es'));
 grid.innerHTML=visible.map((p,i)=>`<article class="catalog-card" style="--delay:${Math.min(i,8)*30}ms"><button class="catalog-visual ${sourceClass(p)}" data-product="${esc(p.code)}" aria-label="Ver detalles de ${esc(p.name)}">${productVisual(p,defaultView(p),color==='todos'?undefined:validColor(p,color))}</button><div class="catalog-info"><h2>${esc(p.name)}</h2><button class="inline-link" data-product="${esc(p.code)}">Ver detalles</button></div></article>`).join('');
 $('#catalog-count').textContent=`${visible.length} ${visible.length===1?'producto':'productos'}`;$('.empty-state').hidden=!!visible.length;
 $$('[data-product]',grid).forEach(b=>b.addEventListener('click',()=>openProduct(b.dataset.product,color==='todos'?undefined:color)));
}
function setFilter(c){activeFilter=c;$('#category-filter').value=c;$$('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===c)));renderCatalog();}
function openProduct(code,requestedColor){
 const p=products.find(p=>p.code===code);if(!p)return;
 const host=$('[data-product-content]');
 let selectedColor=validColor(p,requestedColor),currentView=defaultView(p);
 const views=Object.entries(config.productImages?.[code]||{}).filter(([,src])=>safeMedia(src)).map(([view])=>view);
 if(!views.length)views.push('Frente');
 host.innerHTML=`<div class="product-detail-grid"><div class="product-gallery"><div class="detail-image ${sourceClass(p)}">${productVisual(p,currentView,selectedColor)}</div><p class="photo-note" data-photo-note hidden></p>${colorButtons(p,selectedColor)}<div class="view-buttons" aria-label="Vistas del producto">${views.length>1?views.map(v=>`<button type="button" data-view="${esc(v)}" aria-pressed="${v===currentView}">${productVisual(p,v,selectedColor,true)}<span>${esc(v)}</span></button>`).join(''):''}</div></div><form id="product-options"><h2 id="product-title">${esc(p.name)}</h2><p>${esc(p.description)}</p><p><strong>Material:</strong> ${esc(p.material)}</p><ul class="detail-features">${p.features.filter(Boolean).map(f=>`<li>${esc(f)}</li>`).join('')}</ul><div class="product-options"><label>Talla<select name="talla">${p.sizes.map(s=>`<option>${esc(s)}</option>`).join('')}</select></label><label>Cantidad<input name="cantidad" type="number" min="1" max="100000" step="1" value="1" required></label><label hidden>Color<select name="color">${p.colors.map(c=>`<option${c===selectedColor?' selected':''}>${esc(c)}</option>`).join('')}</select></label></div><button class="button detail-add" type="submit">Solicitar cotización</button><p class="form-hint">Confirmamos contigo disponibilidad, bordado y envío.</p></form></div>`;
 const colorSelect=$('#product-options select[name="color"]');
 function updatePhoto(){
  $('.detail-image',host).innerHTML=productVisual(p,currentView,selectedColor);
  const shown=config.productGalleries?.[code]?.[selectedColor]||config.productColorImages?.[code]?.[selectedColor]?selectedColor:config.productImageColors?.[code];
  $$('[data-view]',host).forEach(b=>{b.innerHTML=productVisual(p,b.dataset.view,selectedColor,true)+`<span>${esc(b.dataset.view)}</span>`;b.setAttribute('aria-pressed',String(b.dataset.view===currentView));});
  const note=$('[data-photo-note]',host);note.hidden=!shown||norm(shown)===norm(selectedColor);
  note.textContent=shown?`Imagen de referencia en ${shown.toLowerCase()}. Confirmamos el color solicitado al cotizar.`:'';
 }
 function chooseColor(color){
  if(!p.colors.includes(color))return;selectedColor=color;colorSelect.value=color;currentView=defaultView(p);
  const label=$('[data-preview-color]',host);if(label)label.textContent=color;
  $$('[data-product-color]',host).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.productColor===color)));updatePhoto();
 }
 $$('[data-view]',host).forEach(b=>b.addEventListener('click',()=>{currentView=b.dataset.view;$$('[data-view]',host).forEach(t=>t.setAttribute('aria-pressed',String(t===b)));updatePhoto();}));
 colorSelect.addEventListener('change',()=>chooseColor(colorSelect.value));
 $$('[data-product-color]',host).forEach(b=>b.addEventListener('click',()=>chooseColor(b.dataset.productColor)));
 const addToQuote=window.PRE_CART.mount(p,()=>selectedColor);
 $('#product-options').addEventListener('submit',addToQuote);
 updatePhoto();$('#product-dialog').setAttribute('aria-labelledby','product-title');openDialog($('#product-dialog'));
}
if(grid){
 const colors=[...new Map(products.flatMap(p=>p.colors).filter(c=>!['No especificados','Según proyecto'].includes(c)).map(c=>[norm(c),c])).values()].sort((a,b)=>a.localeCompare(b,'es'));const sizes=[...new Set(products.flatMap(p=>p.sizes))];
 for(const [selector,values] of [['#color-filter',colors],['#size-filter',sizes]])for(const v of values){const option=document.createElement('option');option.value=v;option.textContent=v;$(selector).append(option);}
 $('#catalog-search').addEventListener('input',renderCatalog);$('#category-filter').addEventListener('change',e=>setFilter(e.target.value));['#color-filter','#size-filter','#catalog-sort'].forEach(s=>$(s).addEventListener('change',renderCatalog));
 $$('[data-filter]').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));$('[data-clear-search]').addEventListener('click',()=>{$('#catalog-search').value='';$('#color-filter').value='todos';$('#size-filter').value='todos';$('#catalog-sort').value='relevancia';setFilter('todos');});
 const params=new URLSearchParams(location.search),cat=params.get('categoria');setFilter($$('[data-filter]').some(b=>b.dataset.filter===cat)?cat:'todos');if(params.has('producto'))openProduct(params.get('producto'),params.get('color'));
}
// Ciclo infinito de cinco etapas, una nueva cada dos segundos.
const steps=$$('[data-step]');
if(steps.length){let step=0,timer,inView=false;function activate(n){step=n;steps.forEach((b,i)=>{b.setAttribute('aria-pressed',String(i===n));b.closest('li').classList.toggle('is-active',i===n);});if(matchMedia('(max-width:720px)').matches){const track=$('.process'),el=steps[n].closest('li');track.scrollTo({left:Math.max(0,el.offsetLeft-track.clientWidth/2+el.offsetWidth/2),behavior:reduce.matches?'auto':'smooth'});}}
 function sync(){clearInterval(timer);if(inView&&!reduce.matches&&!document.hidden)timer=setInterval(()=>activate((step+1)%steps.length),2000);}
 steps.forEach((b,i)=>b.addEventListener('click',()=>{activate(i);sync();}));new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;sync();},{threshold:.2}).observe($('#proceso'));reduce.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);
}
// Videos reales: reproducción inline en bucle, sin sonido inicial y con control de audio.
function attachLoop(parent,item,cls=''){if(!safeMedia(item?.src))return;const v=document.createElement('video');v.className=cls;v.src=item.src;v.muted=true;v.autoplay=!reduce.matches;v.loop=true;v.playsInline=true;v.preload='metadata';v.setAttribute('aria-label',item.title||'Video de Uniformes PRE');if(safeMedia(item.poster))v.poster=item.poster;
 const sound=document.createElement('button');sound.className='sound-toggle';sound.type='button';sound.textContent='Activar sonido';sound.setAttribute('aria-pressed','false');sound.addEventListener('click',()=>{v.muted=!v.muted;sound.textContent=v.muted?'Activar sonido':'Silenciar';sound.setAttribute('aria-pressed',String(!v.muted));v.play().catch(()=>{});});
 if(reduce.matches)v.controls=true;parent.prepend(v);parent.append(sound);parent.classList.add('has-video');v.addEventListener('error',()=>{v.remove();sound.remove();parent.classList.remove('has-video');});
 if(!reduce.matches)new IntersectionObserver(entries=>{if(entries[0].isIntersecting)v.play().catch(()=>{v.controls=true;});else v.pause();},{threshold:.15}).observe(parent);
}
$$('[data-video]').forEach(el=>attachLoop(el,config.videos?.[el.dataset.video]));
// Decorative background: the delivered clip has no audio track or closing fade.
const embroidery=$('[data-embroidery]');
if(embroidery&&safeMedia(config.videos?.bordado?.src)){
 const v=document.createElement('video');
 v.className='embroidery-background';v.src=config.videos.bordado.src;
 v.autoplay=true;v.loop=true;v.muted=true;v.defaultMuted=true;v.playsInline=true;
 v.preload='auto';v.controls=false;v.disablePictureInPicture=true;v.disableRemotePlayback=true;
 v.setAttribute('muted','');v.setAttribute('playsinline','');v.setAttribute('aria-hidden','true');v.tabIndex=-1;
 v.poster=config.videos.bordado.poster;
 embroidery.prepend(v);
 v.addEventListener('playing',()=>embroidery.classList.add('has-video'));
 v.addEventListener('error',()=>{v.remove();embroidery.classList.remove('has-video');});
 // Retry autoplay when returning to the tab; browser power-saving may suspend it.
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)v.play().catch(()=>{});});
 v.play().catch(()=>{});
}
const hero=$('.hero');if(hero){const mobile=matchMedia('(max-width:720px)');let v;function syncHero(){const src=mobile.matches?config.hero?.mobileVideo:config.hero?.desktopVideo;if(reduce.matches||!safeMedia(src)){v?.remove();v=null;return;}if(!v){v=document.createElement('video');v.className='hero-image';v.muted=true;v.autoplay=true;v.loop=true;v.playsInline=true;v.setAttribute('aria-hidden','true');hero.insertBefore(v,$('.hero-shade'));v.addEventListener('error',()=>{v.remove();v=null;});}if(v.getAttribute('src')!==src)v.src=src;v.play().catch(()=>{});}syncHero();mobile.addEventListener('change',syncHero);reduce.addEventListener('change',syncHero);}
const contactForm=$('#contact-form');
if(contactForm){const params=new URLSearchParams(location.search),p=products.find(p=>p.code===params.get('producto'));
 if(p){const qty=Number(params.get('cantidad'));const lines=[`Me gustaría cotizar: ${p.name} (${p.code}).`];if(Number.isSafeInteger(qty)&&qty>0&&qty<=100000)lines.push(`Cantidad: ${qty}`);for(const [key,values,label] of [['talla',p.sizes,'Talla'],['color',p.colors,'Color']])if(values.includes(params.get(key)))lines.push(`${label}: ${params.get(key)}`);contactForm.mensaje.value=lines.join('\n');}
 else if(params.get('servicio')==='bordado')contactForm.mensaje.value='Me gustaría solicitar información sobre bordado para mis uniformes.';
 contactForm.addEventListener('submit',ev=>{ev.preventDefault();const f=new FormData(ev.currentTarget);const message=`Hola Uniformes PRE.\nNombre: ${String(f.get('nombre')).trim()}\nCorreo: ${String(f.get('correo')).trim()||'No indicado'}\nTeléfono: ${String(f.get('telefono')).trim()||'No indicado'}\n\n${String(f.get('mensaje')).trim()}`;const a=$('#contact-whatsapp');a.href=whatsapp(message);a.hidden=false;$('#contact-status').textContent='Tu mensaje está preparado. Revísalo y envíalo desde WhatsApp.';a.click();});
}
$$('[data-legal]').forEach(b=>b.addEventListener('click',()=>{const host=$('[data-legal-content]');host.replaceChildren();const h=document.createElement('h2');h.textContent=b.textContent;const p=document.createElement('p');p.textContent=config.legal?.[b.dataset.legal]||'El texto definitivo de esta sección está pendiente de revisión. Para consultar condiciones de tu pedido, comunícate con Uniformes PRE.';host.append(h,p);openDialog($('#legal-dialog'));}));
// Ayuda discreta después de la portada; se puede ocultar durante la sesión.
const help=$('.help-widget');let dismissed=false;try{dismissed=sessionStorage.getItem('pre_help_dismissed')==='yes';}catch{}
function helpScroll(){if(!help||dismissed)return;const boundary=hero?hero.offsetTop+hero.offsetHeight:420;help.hidden=scrollY<boundary;}
window.addEventListener('scroll',helpScroll,{passive:true});$('.help-dismiss')?.addEventListener('click',()=>{dismissed=true;help.hidden=true;try{sessionStorage.setItem('pre_help_dismissed','yes');}catch{}});
