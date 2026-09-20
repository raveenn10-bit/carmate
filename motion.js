/* Reference motion: 0.8s text, 0.9s media, 18ms letters, 72% viewport trigger.
   Image files can be replaced in media.js without changing these animations. */
(() => {
  if (!window.gsap || !window.ScrollTrigger || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  gsap.registerPlugin(ScrollTrigger, CustomEase);
  CustomEase.create('carmate', 'M0,0 C0.625,0.05 0,1 1,1');
  document.documentElement.classList.add('motion-ready');
  const lenis = window.Lenis ? new Lenis({ lerp: .125, anchors: true, syncTouch: false, prevent: el => !!el.closest('dialog') }) : null;
  if (lenis) { lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0); }
  window.carmateScroll = lenis;
  function split(el) {
    const label = el.textContent; el.setAttribute('aria-label', label);
    const nodes = [...el.childNodes]; let chars = [];
    for (const node of nodes) {
      if (node.nodeName === 'BR') continue;
      if (node.nodeType !== Node.TEXT_NODE) continue;
      const fragment = document.createDocumentFragment();
      for (const word of node.textContent.split(/(\s+)/)) {
        if (/^\s+$/.test(word)) { fragment.append(document.createTextNode(word)); continue; }
        const wrap = document.createElement('span'); wrap.className = 'motion-word'; wrap.setAttribute('aria-hidden', 'true');
        for (const letter of word) { const mask = document.createElement('span'); mask.className = 'motion-mask'; const c = document.createElement('span'); c.className = 'motion-char'; c.textContent = letter; mask.append(c); wrap.append(mask); chars.push(c); }
        fragment.append(wrap);
      }
      node.replaceWith(fragment);
    }
    return chars;
  }
  document.querySelectorAll('h1,.passion h2,.film h2,.heritage h2').forEach(el => {
    const chars = split(el); const isHero = el.tagName === 'H1';
    gsap.fromTo(chars, { yPercent: 110 }, { yPercent: 0, duration: .8, stagger: .018, ease: 'carmate', delay: isHero ? .55 : 0, ...(isHero ? {} : { scrollTrigger: { trigger: el, start: 'top 72%', once: true } }) });
  });
  document.querySelectorAll('.intro>p,.detail figcaption,.film-heading p,.heritage-center>p,.news>h2,.news article>p,.article-title,.newsletter-copy>p,.newsletter-copy h2,.contact-actions,.footer-nav').forEach(el => {
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: .8, ease: 'carmate', scrollTrigger: { trigger: el, start: 'top 72%', once: true } });
  });
  document.querySelectorAll('.detail').forEach((el, i) => {
    const media = el.querySelector('img,video'); if (!media) return;
    const frame = document.createElement('div'); frame.className = 'media-frame'; media.before(frame); frame.append(media);
    const shift = document.createElement('div'); shift.className = 'media-inner'; media.before(shift); shift.append(media);
    gsap.fromTo(frame, { clipPath: 'inset(20% 20% 20% 20%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: .9, ease: 'carmate', scrollTrigger: { trigger: el, start: 'top 100%', once: true } });
    gsap.fromTo(media, { scale: 1.1 }, { scale: 1, duration: .9, ease: 'carmate', scrollTrigger: { trigger: el, start: 'top 100%', once: true } });
    gsap.fromTo(shift, { yPercent: -8 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: el, start: 'top 100%', end: 'bottom top', scrub: true } });
    const offsets = [[24,-52],[56,-96],[-28,44]];
    gsap.matchMedia().add('(min-width: 1024px)', () => { gsap.fromTo(el, { y: offsets[i][0] }, { y: offsets[i][1], ease: 'none', scrollTrigger: { trigger: el, start: 'top 100%', end: 'bottom top', scrub: true } }); });
  });
  document.querySelectorAll('.image-button').forEach(el => { gsap.fromTo(el,{clipPath:'inset(20% 20%)'},{clipPath:'inset(0% 0%)',duration:.9,ease:'carmate',scrollTrigger:{trigger:el,start:'top 72%',once:true}}); });
  // ===== 250-FRAME SCROLL-LOCKED HERO CANVAS SCRUBBER =====
  const heroCanvas = document.getElementById('hero-scrub-canvas');
  const heroSection = document.querySelector('.hero-scrub-section');
  if (heroCanvas && heroSection) {
    const ctx = heroCanvas.getContext('2d', { alpha: false });
    const frameCount = 250;
    const frames = new Array(frameCount);
    let currentFrameIndex = 0;

    const heroCopy = document.getElementById('hero-copy');
    const heroTagline = document.getElementById('hero-tagline');
    const heroHint = document.getElementById('hero-hint');
    const heroProgress = document.getElementById('hero-progress');

    function getFrameUrl(index) {
      const pad = String(index + 1).padStart(3, '0');
      return `assets/frames/ezgif-frame-${pad}.jpg`;
    }

    function renderFrame(index) {
      if (!ctx) return;
      let img = frames[index];
      // If requested frame isn't ready, find nearest loaded frame
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let offset = 1; offset < frameCount; offset++) {
          const prev = frames[index - offset];
          if (prev && prev.complete && prev.naturalWidth > 0) {
            img = prev;
            break;
          }
          const next = frames[index + offset];
          if (next && next.complete && next.naturalWidth > 0) {
            img = next;
            break;
          }
        }
      }
      if (!img || !img.complete || img.naturalWidth === 0) {
        img = frames[0];
      }

      if (img && img.complete && img.naturalWidth > 0) {
        const cw = heroCanvas.width;
        const ch = heroCanvas.height;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;
        const hRatio = cw / iw;
        const vRatio = ch / ih;
        const ratio = Math.max(hRatio, vRatio);
        const centerShiftX = (cw - iw * ratio) / 2;
        const centerShiftY = (ch - ih * ratio) / 2;

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, iw, ih, centerShiftX, centerShiftY, iw * ratio, ih * ratio);
      }
    }

    // High-DPI buffer scaling: ensures canvas buffer matches actual screen physical pixels
    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = heroSection.getBoundingClientRect();
      const targetW = Math.round(rect.width * dpr);
      const targetH = Math.round(rect.height * dpr);
      if (heroCanvas.width !== targetW || heroCanvas.height !== targetH) {
        heroCanvas.width = targetW;
        heroCanvas.height = targetH;
      }
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
      }
      renderFrame(currentFrameIndex);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Preload frames with async decoding
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.decoding = 'async';
      img.src = getFrameUrl(i);
      img.onload = () => {
        if (i === 0 || i === currentFrameIndex) {
          renderFrame(currentFrameIndex);
        }
      };
      frames[i] = img;
    }

    // GSAP tween interpolation with momentum scrub
    const frameObj = { frame: 0 };
    gsap.to(frameObj, {
      frame: frameCount - 1,
      ease: 'none',
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: () => '+=' + Math.max(4500, Math.round(window.innerHeight * 4.5)),
        pin: true,
        scrub: 0.65, // Butter-smooth momentum scrub that responds swiftly
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;

          // Smooth blur & fade for initial headline
          const tTitle = 1 - Math.min(1, Math.max(0, p / 0.28));
          if (heroCopy) {
            heroCopy.style.opacity = tTitle;
            heroCopy.style.transform = `translate(-50%, calc(-50% + ${(1 - tTitle) * -35}px)) scale(${0.96 + tTitle * 0.04})`;
            heroCopy.style.filter = `blur(${(1 - tTitle) * 12}px)`;
            heroCopy.style.pointerEvents = tTitle < 0.1 ? 'none' : 'auto';
          }

          // Hide scroll hint once user begins scrolling
          if (heroHint) {
            heroHint.style.opacity = p > 0.02 ? '0' : '1';
          }

          // Smooth reveal of tagline at the end of the transformation
          if (heroTagline) {
            const tTag = Math.min(1, Math.max(0, (p - 0.70) / 0.25));
            heroTagline.style.opacity = tTag;
            heroTagline.style.transform = `translate(-50%, calc(-50% + ${(1 - tTag) * 24}px)) scale(${0.97 + tTag * 0.03})`;
            heroTagline.style.filter = `blur(${(1 - tTag) * 10}px)`;
            heroTagline.style.pointerEvents = tTag > 0.5 ? 'auto' : 'none';
          }

          // Racing red progress bar
          if (heroProgress) {
            heroProgress.style.transform = `scaleX(${p})`;
          }
        }
      },
      onUpdate: () => {
        const targetIndex = Math.round(frameObj.frame);
        if (targetIndex !== currentFrameIndex && targetIndex >= 0 && targetIndex < frameCount) {
          currentFrameIndex = targetIndex;
          renderFrame(targetIndex);
        }
      }
    });
  }
  document.querySelectorAll('.floating').forEach(el=>{const wrapper=document.createElement('div');wrapper.className=el.className+' floating-mouse';el.before(wrapper);el.className='';wrapper.append(el)});
  gsap.matchMedia().add({desktop:'(min-width:1024px)',mobile:'(max-width:1023px)'}, ctx => {
    const desktop=ctx.conditions.desktop; const items=[...document.querySelectorAll('.floating')]; const widths=items.map(e=>e.offsetWidth),min=Math.min(...widths),max=Math.max(...widths);
    items.forEach((el,i)=>{
      const mouse=el,img=el.querySelector('img');
      gsap.fromTo(img,{scale:.85,opacity:0},{scale:1,opacity:1,duration:.9,delay:i*.08,ease:'carmate',scrollTrigger:{trigger:'.heritage',start:'top 72%',once:true}});
      const speed=(desktop?140:48)+(max===min?1:(widths[i]-min)/(max-min))*(desktop?180:62);
      gsap.fromTo(mouse,{y:.45*speed},{y:-speed,ease:'none',scrollTrigger:{trigger:'.heritage',start:'top bottom',end:'bottom top',scrub:.55,invalidateOnRefresh:true}});
      if(matchMedia('(pointer:fine)').matches){const xTo=gsap.quickTo(img,'x',{duration:.85,ease:'power3.out'}),yTo=gsap.quickTo(img,'y',{duration:.85,ease:'power3.out'});const move=e=>{xTo((e.clientX/innerWidth-.5)*28*(.6+i*.15));yTo((e.clientY/innerHeight-.5)*28*(.6+i*.15))};window.addEventListener('pointermove',move,{passive:true});ctx.add(()=>()=>window.removeEventListener('pointermove',move));}
    });
    const d=desktop?72:28;gsap.fromTo('.heritage-center',{y:.35*d},{y:-d,ease:'none',scrollTrigger:{trigger:'.heritage',start:'top bottom',end:'bottom top',scrub:.55}});
  });
  document.querySelectorAll('.button').forEach(button=>{
    const label=button.textContent;const first=document.createElement('span'),second=document.createElement('span');first.className='button-label';second.className='button-label button-label-copy';first.textContent=second.textContent=label;second.setAttribute('aria-hidden','true');button.replaceChildren(first,second);
    const a=split(first),b=split(second);gsap.set(b,{yPercent:110});const tl=gsap.timeline({paused:true}).to(a,{yPercent:-110,duration:.32,stagger:.006,ease:'carmate'},0).to(b,{yPercent:0,duration:.32,stagger:.006,ease:'carmate'},.12);button.addEventListener('pointerenter',()=>tl.play());button.addEventListener('pointerleave',()=>tl.reverse());button.addEventListener('focus',()=>tl.play());button.addEventListener('blur',()=>tl.reverse());
    gsap.fromTo(button,{clipPath:'inset(0 50%)'},{clipPath:'inset(0 0%)',duration:.7,ease:'carmate',scrollTrigger:{trigger:button,start:'top 72%',once:true}});
  });
  const nav=document.querySelector('#navigation'),open=document.querySelector('#menu-toggle');
  open.onclick=()=>{nav.showModal();open.setAttribute('aria-expanded','true');lenis?.stop();gsap.fromTo(nav,{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0 0 0% 0)',duration:.8,ease:'carmate'});gsap.fromTo(nav.querySelectorAll('nav a'),{y:45,opacity:0},{y:0,opacity:1,duration:.8,stagger:.08,delay:.15,ease:'carmate'})};
  nav.addEventListener('close',()=>lenis?.start());
  document.fonts.ready.then(()=>ScrollTrigger.refresh());window.addEventListener('load',()=>ScrollTrigger.refresh());

  // ===== STATS COUNTER ANIMATION =====
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    const accentLine = statsBar.querySelector('.stats-accent-line');
    const statNumbers = statsBar.querySelectorAll('.stat-number');
    ScrollTrigger.create({
      trigger: statsBar,
      start: 'top 72%',
      once: true,
      onEnter: () => {
        if (accentLine) accentLine.classList.add('active');
        statNumbers.forEach(el => {
          const target = parseInt(el.dataset.target, 10);
          gsap.to(el, {
            textContent: target,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: { trigger: el, start: 'top 85%', once: true }
          });
        });
      }
    });
    gsap.fromTo(statsBar.querySelectorAll('.stat-item'), { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: .8, stagger: .12, ease: 'carmate',
      scrollTrigger: { trigger: statsBar, start: 'top 72%', once: true }
    });
  }

  // ===== SERVICES HORIZONTAL SCROLL =====
  gsap.matchMedia().add('(min-width: 769px)', () => {
    const scrollSection = document.querySelector('.services-scroll');
    const track = document.querySelector('.scroll-track');
    if (!scrollSection || !track) return;
    const cards = track.querySelectorAll('.scroll-card');
    const totalScroll = (cards.length - 1) * 100;

    gsap.to(track, {
      xPercent: -totalScroll / cards.length * (cards.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: scrollSection,
        pin: true,
        scrub: 0.8,
        end: () => '+=' + (scrollSection.offsetWidth * (cards.length - 1)),
        invalidateOnRefresh: true
      }
    });

    // Clip-path reveal + parallax on each card image
    cards.forEach((card, i) => {
      const img = card.querySelector('.scroll-card-img img');
      const text = card.querySelector('.scroll-card-text');
      if (img) {
        gsap.fromTo(img, { scale: 1.15 }, {
          scale: 1, ease: 'none',
          scrollTrigger: { trigger: scrollSection, start: 'top top', end: () => '+=' + (scrollSection.offsetWidth * (cards.length - 1)), scrub: true }
        });
      }
      if (text && i > 0) {
        gsap.fromTo(text.children, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: .6, stagger: .08, ease: 'carmate',
          scrollTrigger: {
            trigger: scrollSection,
            start: () => (i / cards.length * 100) + '% top',
            end: () => ((i + 0.5) / cards.length * 100) + '% top',
            scrub: true
          }
        });
      }
    });
  });

  // ===== COMPARISON SECTION ANIMATIONS =====
  const compSection = document.querySelector('.comparison');
  if (compSection) {
    const compHeader = compSection.querySelector('.comparison-header h2');
    if (compHeader) {
      const compChars = split(compHeader);
      gsap.fromTo(compChars, { yPercent: 110 }, {
        yPercent: 0, duration: .8, stagger: .018, ease: 'carmate',
        scrollTrigger: { trigger: compHeader, start: 'top 72%', once: true }
      });
    }
    gsap.fromTo('.comparison-viewer', { clipPath: 'inset(15% 15%)' }, {
      clipPath: 'inset(0% 0%)', duration: 1, ease: 'carmate',
      scrollTrigger: { trigger: '.comparison-viewer', start: 'top 80%', once: true }
    });
    gsap.fromTo('.comparison-header .eyebrow', { opacity: 0 }, {
      opacity: 1, duration: .8, ease: 'carmate',
      scrollTrigger: { trigger: compSection, start: 'top 72%', once: true }
    });
  }

  // ===== TESTIMONIALS SECTION ANIMATIONS =====
  const testimonialsSection = document.querySelector('.testimonials');
  if (testimonialsSection) {
    const testHeader = testimonialsSection.querySelector('.testimonials-header h2');
    if (testHeader) {
      const testChars = split(testHeader);
      gsap.fromTo(testChars, { yPercent: 110 }, {
        yPercent: 0, duration: .8, stagger: .018, ease: 'carmate',
        scrollTrigger: { trigger: testHeader, start: 'top 72%', once: true }
      });
    }
    gsap.fromTo('.testimonials-header .eyebrow', { opacity: 0 }, {
      opacity: 1, duration: .8, ease: 'carmate',
      scrollTrigger: { trigger: testimonialsSection, start: 'top 72%', once: true }
    });

    // Infinite marquee
    document.querySelectorAll('.marquee-row').forEach((row, i) => {
      const cards = row.querySelectorAll('.testimonial-card');
      const totalWidth = (cards.length / 2) * (380 + 20); // half = original set
      const direction = i === 0 ? -1 : 1;
      gsap.set(row, { x: direction === 1 ? -totalWidth : 0 });
      gsap.to(row, {
        x: direction * -totalWidth,
        duration: 35 + i * 8,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => {
            return parseFloat(x) % totalWidth;
          })
        }
      });
    });
  }

})();
