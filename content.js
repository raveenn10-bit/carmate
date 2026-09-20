// Carmate business content from official Facebook page and verified business details.
Object.assign(stories, {
  spirit: [
    'About Carmate Modifications',
    'At Carmate we\'re passionate about transforming cars into personalized masterpieces! Whether you\'re looking to enhance performance, elevate style, or customize your ride to reflect your unique taste, we\'ve got you covered.',
    'We are an Automotive Body Shop located at 197, Hotel Suniru Lanka, Makuluwa, Galle 80000, Sri Lanka. Our team provides consultations in both English and Sinhala.',
    'Join our community of over 1,200 followers on Facebook, call 077 717 7452, or chat directly with us on WhatsApp to discuss your vehicle project and get a quote.'
  ],
  design: [
    'Custom Body Kits & Styling',
    'Transform the profile and stance of your vehicle with custom front and rear bumpers, aerodynamic body kits, side skirts, rear spoilers, and alloy styling.',
    'Every vehicle is different. Send us your vehicle model and photos on WhatsApp (077 717 7452) so we can discuss suitable designs, fitment, and pricing.'
  ],
  racing: [
    'Lighting Upgrades & DRL',
    'Make your ride stand out day and night with custom daytime running lights (DRL), fog lamps, projector headlight upgrades, signal lamps, and dynamic body lighting.',
    'Contact Carmate on 077 717 7452 to explore compatibility, styling options, and professional installation at our Galle workshop.'
  ],
  craft: [
    'Finishing Touches & Interior',
    'Elevate every corner of your vehicle with auto-folding mirror systems, nickel/chrome door-handle and rear details, custom seat sets, 3D carpets, interior ambient lighting, and precision touch-up paint.',
    'Tell us your vision—we ensure every detail matches your individual style and comfort.'
  ],
  privacy: [
    'Privacy Policy',
    'This website does not collect enquiries in a database or use tracking cookies. The enquiry form connects directly to WhatsApp, allowing you to review and send your message securely.',
    'WhatsApp, Facebook, Google Maps, and external font providers operate under their own privacy policies.'
  ],
  cookies: [
    'Cookies Policy',
    'This website does not set analytics or advertising cookies. External services such as fonts, maps, and WhatsApp operate per standard web protocols.'
  ],
  terms: [
    'Website Information',
    'Carmate Modifications provides vehicle modification and body shop services in Galle, Sri Lanka. Compatibility, pricing, material availability, and scheduling are confirmed directly with Carmate via WhatsApp or phone.'
  ]
});

$('#all-stories').onclick=()=>{
  const title=$('#story-title'),body=$('#story-body');
  title.textContent='Carmate Services & Customization';
  body.replaceChildren();
  for(const key of ['design','racing','craft']){
    const item=document.createElement('button');
    item.className='service-link';
    item.textContent=stories[key][0]+' ↗';
    item.onclick=()=>{
      title.textContent=stories[key][0];
      body.replaceChildren(...stories[key].slice(1).map(t=>{const p=document.createElement('p');p.textContent=t;return p}));
    };
    body.append(item);
  }
  $('#story-dialog').showModal();
};

const mediaMap={
  '#hero-video':'hero',
  '.grill img':'detailGrill',
  '.rear img':'detailRear',
  '.switch img':'detailFinish',
  '#feature-film':'filmPoster',
  '.heritage-center>img':'aboutMain',
  '.h1':'about1',
  '.h2':'about2',
  '.h3':'about3',
  '.h4':'about4',
  '.h5':'about5',
  '.h6':'about6',
  '.news article:nth-child(1) img':'project1',
  '.news article:nth-child(2) img':'project2',
  '.news article:nth-child(3) img':'project3',
  '.newsletter>img':'contact'
};

Object.entries(mediaMap).forEach(([selector,key])=>{
  const el=$(selector);
  if(el&&CARMATE_MEDIA[key]){
    el.src=CARMATE_MEDIA[key];
    el.dataset.media=key;
  }
});

Object.entries({
  '#hero-video':'heroVideo',
  '.grill img':'detailGrillVideo',
  '.rear img':'detailRearVideo',
  '.switch img':'detailFinishVideo',
  '#feature-film':'filmVideo'
}).forEach(([selector,key])=>{
  const source=CARMATE_MEDIA[key];
  const old=$(selector);
  if(!source||!old)return;
  const video=document.createElement('video');
  video.id=old.id;
  video.className=old.className;
  video.poster=old.src;
  video.src=source;
  video.playsInline=true;
  video.preload='metadata';
  video.setAttribute('aria-label',old.alt);
  if(key!=='filmVideo'){
    video.muted=true;
    video.loop=true;
    video.autoplay=!reduced;
    const io=new IntersectionObserver(es=>es.forEach(e=>{
      if(e.isIntersecting&&!reduced)video.play().catch(()=>{});
      else video.pause();
    }),{threshold:.1});
    io.observe(video);
  }
  old.replaceWith(video);
  if(key==='heroVideo'){
    $('.motion-toggle').onclick=()=>{
      if(video.paused){
        video.play().catch(()=>{});
        $('.motion-toggle').textContent='Ⅱ';
      }else{
        video.pause();
        $('.motion-toggle').textContent='▶';
      }
    };
  }
  if(key==='filmVideo'){
    $('#play-film').onclick=()=>{
      video.controls=true;
      video.play().then(()=>{$('#play-film').hidden=true}).catch(()=>{$('.video-error').hidden=false});
    };
    video.onended=()=>$('#play-film').hidden=false;
  }
});

// The preview sequence always follows the selected photo set.
shots.splice(0,shots.length,CARMATE_MEDIA.filmPoster,CARMATE_MEDIA.detailGrill,CARMATE_MEDIA.detailRear,CARMATE_MEDIA.detailFinish,CARMATE_MEDIA.project1);

if(CARMATE_MEDIA.logo){
  document.querySelectorAll('.wordmark').forEach(el=>{
    const img=document.createElement('img');
    img.src=CARMATE_MEDIA.logo;
    img.alt=window.CARMATE_CONTACT?.name || 'Carmate Modifications';
    img.style.cssText='width:170px;max-height:55px;object-fit:contain;vertical-align:middle;';
    el.replaceChildren(img);
  });
  const footerMark=document.querySelector('.footer-mark');
  if(footerMark){
    footerMark.style.transform='none';
  }
}

const fSvc = document.querySelector('#footer-services-btn');
if (fSvc) {
  fSvc.onclick = () => {
    const allStories = document.querySelector('#all-stories');
    if (allStories) allStories.click();
  };
}

