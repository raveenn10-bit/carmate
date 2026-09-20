const $=s=>document.querySelector(s);const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const menu=$('#navigation'),toggle=$('#menu-toggle');toggle.onclick=()=>{menu.showModal();toggle.setAttribute('aria-expanded','true')};menu.querySelector('.close').onclick=()=>menu.close();menu.onclose=()=>toggle.setAttribute('aria-expanded','false');menu.querySelectorAll('a').forEach(a=>a.onclick=()=>menu.close());
const stories={spirit:['The Carmate spirit','Our inspiration is simple: cars with character. The kind of design that invites a second look. The feel of a beautifully considered interior. The connection between a driver and the road.','This concept celebrates that shared automotive passion through a selection of Spyker imagery. Carmate’s own history, collection, and client stories can take their place as the brand develops.'],design:['A new chapter in automotive design','A distinctive silhouette is only the beginning. Look closer and a car reveals its character through materials, proportions, and the smallest details.','The Spyker pictured here brings sculptural bodywork and rich metal finishes together in a striking expression of automotive craftsmanship.'],racing:['A passion born on the racing circuit','Motorsport gives automotive design a singular purpose. Every curve, material, and mechanical decision becomes part of a shared pursuit.','This journal takes inspiration from the people and machines that turn that pursuit into something unforgettable.'],craft:['Shared vision. Exceptional possibilities.','Extraordinary cars are the work of people: designers, engineers, craftspeople, and the drivers who make them part of their lives.','Carmate celebrates that connection and the enthusiasm that brings automotive communities together.'],privacy:['Privacy policy','This is a Carmate website concept. The signup form does not transmit or store your email address. A live subscription provider and Carmate’s approved privacy policy must be connected before registrations open.','The heading font loads from third-party services, which may receive standard connection information such as your IP address.'],cookies:['Cookie policy','This concept does not set analytics or advertising cookies. An external font service is used to display the reference media.'],terms:['Terms and conditions','This page is a visual concept for Carmate. Images show Spyker vehicles and do not represent Carmate inventory, pricing, partnerships, or manufacturing history. Vehicle availability and company details are not yet provided.']};
document.querySelectorAll('[data-story]').forEach(b=>b.onclick=()=>{const [title,...body]=stories[b.dataset.story];$('#story-title').textContent=title;$('#story-body').replaceChildren(...body.map(t=>{let p=document.createElement('p');p.textContent=t;return p}));$('#story-dialog').showModal()});$('#story-dialog .close').onclick=()=>$('#story-dialog').close();$('#all-stories').onclick=()=>{document.querySelector('[data-story="design"]').click()};
$('#signup').onsubmit=e=>{e.preventDefault();const message='Hello Carmate, I would like to discuss: '+$('#vehicle').value.trim();window.open('https://wa.me/'+window.CARMATE_CONTACT.whatsapp+'?text='+encodeURIComponent(message),'_blank','noopener');$('#signup-message').textContent='Your enquiry is ready in WhatsApp. Review it there before sending.'};const yr=$('#year');if(yr)yr.textContent=new Date().getFullYear();

const hero=$('#hero-video');if(hero&&reduced)hero.style.animation='none';
const motionToggle=$('.motion-toggle');if(motionToggle&&hero)motionToggle.onclick=()=>{const paused=hero.style.animationPlayState==='paused';hero.style.animationPlayState=paused?'running':'paused';motionToggle.textContent=paused?'Ⅱ':'▶';motionToggle.setAttribute('aria-label',paused?'Pause background animation':'Play background animation')};
const shots=['assets/carmate-project-2.jpg','assets/carmate-project-1.jpg','assets/carmate-project-3.jpg','assets/image-18.webp','assets/image-1.webp'];let sequence=null,shot=0;$('#play-film').onclick=()=>{const playing=!!sequence;if(playing){clearInterval(sequence);sequence=null;$('#play-film').textContent='▶';$('#play-film').setAttribute('aria-label','Play automotive visual sequence');$('.film-caption').hidden=true}else{$('#play-film').textContent='Ⅱ';$('#play-film').setAttribute('aria-label','Pause automotive visual sequence');$('.film-caption').hidden=false;sequence=setInterval(()=>{shot=(shot+1)%shots.length;$('#feature-film').src=shots[shot]},2800)}};

// ===== COMPARISON SLIDER =====
(function(){
  const viewer=$('#comp-viewer'),before=$('#comp-before'),divider=$('#comp-divider');
  if(!viewer||!before||!divider)return;
  let dragging=false;
  function update(e){
    const rect=viewer.getBoundingClientRect();
    const clientX=e.touches?e.touches[0].clientX:e.clientX;
    let pct=((clientX-rect.left)/rect.width)*100;
    pct=Math.max(2,Math.min(98,pct));
    before.style.clipPath='inset(0 '+(100-pct)+'% 0 0)';
    divider.style.left=pct+'%';
  }
  viewer.addEventListener('pointerdown',e=>{dragging=true;viewer.setPointerCapture(e.pointerId);update(e)});
  viewer.addEventListener('pointermove',e=>{if(dragging)update(e)});
  viewer.addEventListener('pointerup',()=>dragging=false);
  viewer.addEventListener('pointercancel',()=>dragging=false);
  // Touch support
  viewer.addEventListener('touchstart',e=>{dragging=true;update(e)},{passive:true});
  viewer.addEventListener('touchmove',e=>{if(dragging){e.preventDefault();update(e)}},{passive:false});
  viewer.addEventListener('touchend',()=>dragging=false);
})();
