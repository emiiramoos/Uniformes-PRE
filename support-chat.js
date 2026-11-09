'use strict';
(()=>{
 const knowledge=window.PRE_SUPPORT;if(!knowledge)return;
 const svg=(path)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${path}"/></svg>`;
 const chatIcon=svg('M21 11a9 9 0 0 1-13 8l-6 3 2-6A9 9 0 1 1 21 11zM7 10h10M7 14h6');
 const closeIcon=svg('m6 6 12 12M6 18 18 6');
 const shell=document.createElement('div');shell.className='pre-assistant';
 shell.innerHTML=`<div class="assistant-hint" hidden><button type="button" class="hint-open"></button><button type="button" class="hint-dismiss" aria-label="Ocultar sugerencias">${closeIcon}</button></div><button type="button" class="assistant-launch" aria-label="Abrir asistente de Uniformes PRE" aria-expanded="false" aria-controls="pre-chat">${chatIcon}</button><section class="assistant-panel" id="pre-chat" role="dialog" aria-labelledby="pre-chat-title" hidden><header class="assistant-header"><span class="assistant-mark"><img src="assets/brand/asistente-robot-3d.webp" width="52" height="52" alt=""></span><h2 id="pre-chat-title">Uniformes Express</h2><button type="button" class="assistant-close" aria-label="Cerrar chat">${closeIcon}</button></header><div class="assistant-body"><div class="assistant-messages" role="log" aria-live="polite" aria-relevant="additions" aria-label="Conversación"></div><div class="assistant-questions" aria-label="Preguntas frecuentes"></div></div><a class="assistant-contact" target="_blank" rel="noopener noreferrer">Hablar con PRE por WhatsApp ${svg('M7 17 17 7M7 7h10v10')}</a><form class="assistant-form"><label class="sr-only" for="assistant-question">Tu pregunta</label><input id="assistant-question" maxlength="500" autocomplete="off" placeholder="Escribe tu pregunta…" required><button type="submit" aria-label="Enviar pregunta">${svg('m3 3 19 9-19 9 4-9-4-9zm4 9h15')}</button></form></section>`;
 document.body.append(shell);
 const find=s=>shell.querySelector(s),panel=find('.assistant-panel'),launcher=find('.assistant-launch'),body=find('.assistant-body'),log=find('.assistant-messages'),questions=find('.assistant-questions'),input=find('input'),hint=find('.assistant-hint'),hintOpen=find('.hint-open');
 let initialized=false,lastQuestion='',hintTimer,hideTimer,hintIndex=0,quiet=false;
 try{quiet=sessionStorage.getItem('pre-assistant-quiet')==='yes';hintIndex=Number(sessionStorage.getItem('pre-assistant-hint-index')||0);}catch{}
 const wa=text=>`https://wa.me/${window.PRE_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
 function contactText(question){return 'Hola, equipo de Uniformes PRE. Vengo del asistente de su página y me gustaría recibir asesoría.'+(question?'\n\n*MI CONSULTA*\n'+question:'')+'\n\n¿Me pueden ayudar, por favor?';}
 function updateContact(){find('.assistant-contact').href=wa(contactText(lastQuestion));}
 function scrollEnd(){requestAnimationFrame(()=>body.scrollTo({top:Math.max(0,log.getBoundingClientRect().bottom-body.getBoundingClientRect().bottom+body.scrollTop),behavior:'instant'}));}
 function message(text,who,contact=false){
  const bubble=document.createElement('div');bubble.className='assistant-message '+who;
  const content=document.createElement('p');content.textContent=text;bubble.append(content);
  if(contact){const link=document.createElement('a');link.className='assistant-wa';link.textContent='Consultar por WhatsApp';link.href=wa(contactText(lastQuestion));link.target='_blank';link.rel='noopener noreferrer';bubble.append(link);}
  log.append(bubble);while(log.children.length>40)log.firstElementChild.remove();scrollEnd();
 }
 function ask(text,id){lastQuestion=text;message(text,'visitor');const answer=id?knowledge.entries.find(e=>e.id===id):knowledge.answer(text);message(answer.answer,'reply',answer.contact);updateContact();}
 const primary=['quote','shipping-cost','delivery','custom','embroidery','pickup','payments'];let expanded=false;
 function drawQuestions(){questions.replaceChildren();const ids=expanded?knowledge.entries.filter(e=>!['hello','thanks'].includes(e.id)).map(e=>e.id):primary;
  ids.forEach(id=>{const entry=knowledge.entries.find(e=>e.id===id),button=document.createElement('button');button.type='button';button.textContent=entry.label;button.onclick=()=>ask(entry.label,id);questions.append(button);});
  const more=document.createElement('button');more.type='button';more.className='assistant-more';more.textContent=expanded?'Ver menos preguntas':'Ver más preguntas';more.onclick=()=>{expanded=!expanded;drawQuestions();};questions.append(more);
 }
 new ResizeObserver(()=>{if(!panel.hidden)scrollEnd();}).observe(body);
 function close(){panel.hidden=true;launcher.setAttribute('aria-expanded','false');launcher.classList.remove('is-open');launcher.focus({preventScroll:true});}
 function open(){panel.hidden=false;launcher.setAttribute('aria-expanded','true');launcher.classList.add('is-open');hint.hidden=true;clearTimeout(hintTimer);clearTimeout(hideTimer);if(!initialized){initialized=true;message('¡Hola! Soy el asistente de Uniformes PRE. ¿En qué puedo ayudarte? 👋','reply');drawQuestions();}find('.assistant-close').focus({preventScroll:true});}
 launcher.onclick=()=>panel.hidden?open():close();find('.assistant-close').onclick=close;
 panel.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();close();}});
 find('form').onsubmit=event=>{event.preventDefault();const text=input.value.trim();if(!text)return;input.value='';ask(text);input.focus({preventScroll:true});};
 const hints=[{text:'¿Buscas uniformes para tu equipo? Te ayudo a empezar.',id:'quote'},{text:'¿Tienes dudas sobre envíos o tiempos de entrega?',id:'delivery'},{text:'¿Quieres personalizar tus prendas? Pregúntame por bordado o sublimado.',id:'embroidery'},{text:'¿Tienes una idea y quieres cotizarla? Podemos ayudarte a confeccionarla.',id:'custom'}];
 hintOpen.onclick=()=>{const item=hints[Math.max(0,hintIndex-1)];open();ask(knowledge.entries.find(e=>e.id===item.id).label,item.id);};
 find('.hint-dismiss').onclick=()=>{quiet=true;hint.hidden=true;clearTimeout(hintTimer);clearTimeout(hideTimer);try{sessionStorage.setItem('pre-assistant-quiet','yes');}catch{}};
 function showHint(){if(quiet||hintIndex>=hints.length||!panel.hidden)return;if(document.hidden||document.querySelector('dialog[open]')){hintTimer=setTimeout(showHint,15000);return;}
  hintOpen.textContent=hints[hintIndex++].text;hint.hidden=false;try{sessionStorage.setItem('pre-assistant-hint-index',String(hintIndex));}catch{}
  hideTimer=setTimeout(()=>hint.hidden=true,10000);hintTimer=setTimeout(showHint,60000);
 }
 updateContact();if(!quiet&&hintIndex<hints.length)hintTimer=setTimeout(showHint,20000);
})();
