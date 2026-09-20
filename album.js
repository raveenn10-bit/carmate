/**
 * Carmate Modifications — Project Albums & 9:16 Video Reels Controller
 */
(() => {
  const ALBUMS = [
  {
    "id": "black-beast",
    "name": "Project Black Beast",
    "vehicle": "Toyota Prius 30 / 50 Custom Blackout",
    "tagline": "Stealth Aerodynamic Silhouette & Custom Smoked Styling",
    "category": "Full Custom Project",
    "cover": "assets/carmate-project-3.jpg",
    "specs": [
      "Custom Smoke Windscreen",
      "Aggressive Front Lip",
      "Custom Rear Diffuser",
      "Gloss Black Mirrors",
      "Smoked Tail Lamps",
      "Carmate Badge"
    ],
    "photos": [
      "assets/Project Black Beast/575198610_122167108766392102_5425594792100099991_n.jpg",
      "assets/Project Black Beast/576310151_122167108238392102_1470618799282135184_n.jpg",
      "assets/Project Black Beast/576384968_122167108928392102_415136640813699918_n.jpg",
      "assets/Project Black Beast/577441242_122167108814392102_7985599878288693874_n.jpg",
      "assets/Project Black Beast/577565894_122167108352392102_2128952320475898719_n.jpg",
      "assets/Project Black Beast/577565933_122167108718392102_8600154666109647363_n.jpg",
      "assets/Project Black Beast/577569319_122167109270392102_1358431506469750484_n.jpg",
      "assets/Project Black Beast/577570172_122167108892392102_1405132609480210607_n.jpg",
      "assets/Project Black Beast/577592916_122167109006392102_5206592081125537167_n.jpg",
      "assets/Project Black Beast/577605662_122167109198392102_9051984673457243914_n.jpg",
      "assets/Project Black Beast/577612353_122167107950392102_4576836140741423597_n.jpg",
      "assets/Project Black Beast/577639690_122167108178392102_5011922889980751347_n.jpg",
      "assets/Project Black Beast/577657665_122167108004392102_7266368517082764837_n.jpg",
      "assets/Project Black Beast/577660454_122167108406392102_2226714056173054693_n.jpg",
      "assets/Project Black Beast/577748978_122167108544392102_8243788311298673722_n.jpg",
      "assets/Project Black Beast/577970821_122167108496392102_6810587380079385246_n.jpg",
      "assets/Project Black Beast/578225779_122167108964392102_2423608494062485661_n.jpg",
      "assets/Project Black Beast/578260758_122167109108392102_8966697411758168694_n.jpg",
      "assets/Project Black Beast/579038688_122167108118392102_3982370368871276814_n.jpg"
    ]
  },
  {
    "id": "red-phantom",
    "name": "Project Red Phantom",
    "vehicle": "Toyota Prius SP KV-5354",
    "tagline": "Multi-Color App-Controlled RGB Projector DRLs & Low Stance",
    "category": "Lighting & Aero Engineering",
    "cover": "assets/carmate-project-2.jpg",
    "specs": [
      "Bi-LED RGB Projectors",
      "Dynamic Flowing DRLs",
      "Crimson Red Finish",
      "Aero Side Splitters",
      "Custom Mesh Grille"
    ],
    "photos": [
      "assets/Project 2/571486225_122166675122392102_2231467071253684191_n.jpg",
      "assets/Project 2/571495932_122166675218392102_8921034117263850570_n.jpg",
      "assets/Project 2/572135829_122166675680392102_4100242337022606299_n.jpg",
      "assets/Project 2/573316666_122166675074392102_818176753089136041_n.jpg",
      "assets/Project 2/573328714_122166675002392102_4975995818029870928_n.jpg",
      "assets/Project 2/573628064_122166675284392102_5714244683744529827_n.jpg",
      "assets/Project 2/574001812_122166675794392102_6067924469609213364_n.jpg",
      "assets/Project 2/574071455_122166675470392102_5093503090682801247_n.jpg",
      "assets/Project 2/574575623_122166675728392102_6631909145168793479_n.jpg"
    ]
  },
  {
    "id": "silver-aero",
    "name": "Project Silver Aero GT",
    "vehicle": "Toyota Prius CAC 8260 Track Spec",
    "tagline": "High-Downforce Carbon GT Wing & Dual-Tone Rear Diffuser",
    "category": "Aero Dynamics & Track Styling",
    "cover": "assets/carmate-project-1.jpg",
    "specs": [
      "High-Mount Carbon GT Wing",
      "Dual-Tone Rear Diffuser",
      "Vertical LED Strobe Bars",
      "Lowered Sports Profile",
      "Aerodynamic Canards"
    ],
    "photos": [
      "assets/carmate-project-1.jpg",
      "assets/Project 3/imgi_119_527690535_122158954778392102_442284961957292888_n.jpeg",
      "assets/Project 3/imgi_120_528355231_122158955510392102_8416041898958416131_n.jpeg",
      "assets/Project 3/imgi_121_528352844_122158955390392102_7056083923390975658_n.jpeg",
      "assets/Project 3/imgi_122_527630126_122158955240392102_8296586242788187289_n.jpeg",
      "assets/Project 3/imgi_123_527600793_122158954700392102_2621677716485758811_n.jpeg",
      "assets/Project 3/imgi_124_528733912_122158955228392102_5433200020706439040_n.jpeg",
      "assets/Project 3/imgi_125_527510854_122158955072392102_2961248554029620471_n.jpeg",
      "assets/Project 3/imgi_126_527892523_122158955078392102_2077570744299414851_n.jpeg",
      "assets/Project 3/imgi_127_527792133_122158955036392102_7746687790611541521_n.jpeg",
      "assets/Project 3/imgi_128_528014594_122158955024392102_8760841723468827870_n.jpeg",
      "assets/Project 3/imgi_129_527510876_122158954826392102_1976168002021677208_n.jpeg"
    ]
  },
  {
    "id": "interior-cockpit",
    "name": "Carmate Bespoke Interior",
    "vehicle": "Custom Cockpit & Ambient Suite",
    "tagline": "Handcrafted Leather Upholstery & 64-Color Fiber-Optic Cabin",
    "category": "Interior Architecture",
    "cover": "assets/interior/imgi_71_606076893_122172084434392102_6626188684078899595_n.jpeg",
    "specs": [
      "Diamond-Stitched Leather",
      "Contrast Red Racing Stitching",
      "64-Color Fiber-Optic Suite",
      "Custom Steering Wrap",
      "Acoustic Console"
    ],
    "photos": [
      "assets/interior/imgi_71_606076893_122172084434392102_6626188684078899595_n.jpeg",
      "assets/interior/imgi_72_605800834_122172084422392102_8691872000032147499_n.jpeg",
      "assets/interior/imgi_73_607434925_122172084404392102_4924260268224591223_n.jpeg",
      "assets/interior/imgi_74_605821572_122172084392392102_7152044387832013969_n.jpeg",
      "assets/interior/imgi_75_607940414_122172084362392102_2241940099454201476_n.jpeg",
      "assets/interior/imgi_76_605965364_122172084368392102_3798246045763110391_n.jpeg",
      "assets/interior/imgi_77_606486706_122172084326392102_4180440084634328168_n.jpeg",
      "assets/interior/imgi_78_605545038_122172084338392102_6857178356754122529_n.jpeg"
    ]
  }
];
  window.CARMATE_ALBUMS = ALBUMS;

  let activeAlbum = null;
  let activePhotoIndex = 0;

  const modal = document.getElementById('album-modal');
  const modalImg = document.getElementById('lightbox-img');
  const modalTitle = document.getElementById('lightbox-title');
  const modalCounter = document.getElementById('lightbox-counter');
  const modalBadge = document.getElementById('lightbox-badge');
  const modalWa = document.getElementById('lightbox-wa');
  const modalClose = document.getElementById('lightbox-close');
  const modalPrev = document.getElementById('lightbox-prev');
  const modalNext = document.getElementById('lightbox-next');
  const modalThumbs = document.getElementById('lightbox-thumbs');

  function openAlbum(albumId, photoIndex) {
    const alb = ALBUMS.find(a => a.id === albumId);
    if (!alb || !modal) return;
    activeAlbum = alb;
    activePhotoIndex = Math.max(0, Math.min(alb.photos.length - 1, photoIndex || 0));

    renderLightbox();
    modal.showModal();
    document.body.style.overflow = 'hidden';
  }

  function closeAlbum() {
    if (!modal) return;
    modal.close();
    document.body.style.overflow = '';
  }

  function updateLightboxPhoto(idx) {
    if (!activeAlbum) return;
    activePhotoIndex = (idx + activeAlbum.photos.length) % activeAlbum.photos.length;

    if (modalImg) {
      modalImg.style.opacity = '0';
      modalImg.style.transform = 'scale(0.97)';
      setTimeout(() => {
        modalImg.src = activeAlbum.photos[activePhotoIndex];
        modalImg.style.opacity = '1';
        modalImg.style.transform = 'scale(1)';
      }, 120);
    }

    if (modalCounter) {
      modalCounter.textContent = 'Photo ' + (activePhotoIndex + 1) + ' of ' + activeAlbum.photos.length;
    }

    if (modalThumbs) {
      const thumbs = modalThumbs.querySelectorAll('.lightbox-thumb');
      thumbs.forEach((t, i) => {
        if (i === activePhotoIndex) {
          t.classList.add('active');
          t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          t.classList.remove('active');
        }
      });
    }
  }

  function renderLightbox() {
    if (!activeAlbum) return;
    if (modalTitle) modalTitle.textContent = activeAlbum.name;
    if (modalBadge) modalBadge.textContent = activeAlbum.category;
    if (modalWa) {
      const text = encodeURIComponent('Hello Carmate! I am inquiring about ' + activeAlbum.name + ' (' + activeAlbum.vehicle + '). Could you give me more details and pricing?');
      modalWa.href = 'https://wa.me/94777177452?text=' + text;
    }

    if (modalThumbs) {
      modalThumbs.innerHTML = '';
      activeAlbum.photos.forEach((src, idx) => {
        const thumb = document.createElement('button');
        thumb.className = 'lightbox-thumb' + (idx === activePhotoIndex ? ' active' : '');
        thumb.setAttribute('aria-label', 'View photo ' + (idx + 1));
        thumb.innerHTML = '<img src="' + src + '" alt="Thumbnail ' + (idx + 1) + '" loading="lazy">';
        thumb.onclick = () => updateLightboxPhoto(idx);
        modalThumbs.appendChild(thumb);
      });
    }

    updateLightboxPhoto(activePhotoIndex);
  }

  if (modalClose) modalClose.onclick = closeAlbum;
  if (modalPrev) modalPrev.onclick = () => updateLightboxPhoto(activePhotoIndex - 1);
  if (modalNext) modalNext.onclick = () => updateLightboxPhoto(activePhotoIndex + 1);

  if (modal) {
    modal.addEventListener('click', (e) => {
      const shell = modal.querySelector('.lightbox-shell');
      if (shell && !shell.contains(e.target)) {
        closeAlbum();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (!modal || !modal.open) return;
    if (e.key === 'ArrowLeft') updateLightboxPhoto(activePhotoIndex - 1);
    if (e.key === 'ArrowRight') updateLightboxPhoto(activePhotoIndex + 1);
    if (e.key === 'Escape') closeAlbum();
  });

  let touchStartX = 0;
  if (modal) {
    modal.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    modal.addEventListener('touchend', (e) => {
      const diffX = e.changedTouches[0].clientX - touchStartX;
      if (diffX > 45) updateLightboxPhoto(activePhotoIndex - 1);
      if (diffX < -45) updateLightboxPhoto(activePhotoIndex + 1);
    }, { passive: true });
  }

  function setupAlbumTriggers() {
    document.querySelectorAll('[data-album-open]').forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        const albId = btn.getAttribute('data-album-open');
        const pIdx = parseInt(btn.getAttribute('data-photo-index') || '0', 10);
        openAlbum(albId, pIdx);
      };
    });

    const tabs = document.querySelectorAll('.album-tab-btn');
    const cards = document.querySelectorAll('.album-card');
    tabs.forEach(tab => {
      tab.onclick = () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.getAttribute('data-album-filter');

        cards.forEach(card => {
          const id = card.getAttribute('data-album-id');
          if (filter === 'all' || filter === id) {
            card.style.display = '';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      };
    });
  }

  function setupReels() {
    const cards = document.querySelectorAll('.reel-card');
    if (!cards.length) return;

    cards.forEach(card => {
      const video = card.querySelector('.reel-video');
      const playBtn = card.querySelector('.reel-play-btn');
      const soundBtn = card.querySelector('.reel-sound-btn');
      const progressFill = card.querySelector('.reel-progress-fill');
      const wrapper = card.querySelector('.reel-video-wrapper');

      if (!video) return;

      function togglePlay() {
        if (video.paused) {
          document.querySelectorAll('.reel-video').forEach(v => {
            if (v !== video && !v.paused) {
              v.pause();
              const c = v.closest('.reel-card');
              if (c) c.classList.remove('playing');
            }
          });
          video.play().catch(() => {});
          card.classList.add('playing');
        } else {
          video.pause();
          card.classList.remove('playing');
        }
      }

      function toggleSound(e) {
        if (e) e.stopPropagation();
        video.muted = !video.muted;
        if (video.muted) {
          card.classList.remove('unmuted');
        } else {
          card.classList.add('unmuted');
        }
      }

      if (wrapper) {
        wrapper.onclick = (e) => {
          if (e.target.closest('.reel-sound-btn')) return;
          togglePlay();
        };
      }

      if (playBtn) {
        playBtn.onclick = (e) => {
          e.stopPropagation();
          togglePlay();
        };
      }

      if (soundBtn) {
        soundBtn.onclick = toggleSound;
      }

      video.addEventListener('timeupdate', () => {
        if (progressFill && video.duration) {
          const pct = (video.currentTime / video.duration) * 100;
          progressFill.style.width = pct + '%';
        }
      });

      video.addEventListener('ended', () => {
        card.classList.remove('playing');
        if (progressFill) progressFill.style.width = '0%';
      });
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const video = entry.target.querySelector('.reel-video');
          if (video && !entry.isIntersecting && !video.paused) {
            video.pause();
            entry.target.classList.remove('playing');
          }
        });
      }, { threshold: 0.3 });

      cards.forEach(c => observer.observe(c));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupAlbumTriggers();
      setupReels();
    });
  } else {
    setupAlbumTriggers();
    setupReels();
  }
})();
