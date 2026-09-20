"use client";

import { useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Register plugins
    gsap.registerPlugin(ScrollTrigger, CustomEase);

    // Create signature Carmate custom ease curve
    try {
      CustomEase.create("carmate", "M0,0 C0.625,0.05 0,1 1,1");
    } catch {
      // Ease might already be registered
    }

    document.documentElement.classList.add("motion-ready");

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
      infinite: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    if (prefersReducedMotion) {
      return () => {
        gsap.ticker.remove(updateTicker);
        lenis.destroy();
      };
    }

    // Helper: Split text into masked characters for luxury automotive typography roll
    function splitTextToChars(el: HTMLElement): HTMLElement[] {
      if (el.dataset.motionSplit) return [];
      el.dataset.motionSplit = "true";

      const originalText = el.textContent || "";
      el.setAttribute("aria-label", originalText);

      const chars: HTMLElement[] = [];
      const words = originalText.trim().split(/\s+/);
      el.innerHTML = "";

      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement("span");
        wordSpan.className = "motion-word";
        wordSpan.setAttribute("aria-hidden", "true");

        for (const letter of word) {
          const mask = document.createElement("span");
          mask.className = "motion-mask";

          const charSpan = document.createElement("span");
          charSpan.className = "motion-char";
          charSpan.textContent = letter;

          mask.appendChild(charSpan);
          wordSpan.appendChild(mask);
          chars.push(charSpan);
        }

        el.appendChild(wordSpan);

        // Add space between words
        if (wordIndex < words.length - 1) {
          el.appendChild(document.createTextNode(" "));
        }
      });

      return chars;
    }

    // Context for easy cleanup on route change
    const ctx = gsap.context(() => {
      // 1. Text Character Split Stagger Entrance
      const splitHeadings = document.querySelectorAll<HTMLElement>(".gsap-split-heading");
      splitHeadings.forEach((el) => {
        const chars = splitTextToChars(el);
        if (chars.length > 0) {
          gsap.fromTo(
            chars,
            { yPercent: 110 },
            {
              yPercent: 0,
              duration: 0.8,
              stagger: 0.016,
              ease: "carmate",
              scrollTrigger: {
                trigger: el,
                start: "top 82%",
                once: true,
              },
            }
          );
        }
      });

      // 2. ScrollTrigger Fade-In-Fade-Out (Bidirectional viewport entrance/exit)
      const fadeInOutElements = document.querySelectorAll<HTMLElement>(".gsap-fade-in-out");
      fadeInOutElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "carmate",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              end: "bottom 12%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      // 3. ScrollTrigger Fade-Up entrance
      const fadeUpElements = document.querySelectorAll<HTMLElement>(".gsap-fade-up");
      fadeUpElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "carmate",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      // 4. ScrollTrigger Fade-In entrance
      const fadeInElements = document.querySelectorAll<HTMLElement>(".gsap-fade-in");
      fadeInElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.85,
            ease: "carmate",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      // 5. Staggered Container Items
      const staggerContainers = document.querySelectorAll<HTMLElement>(".gsap-stagger");
      staggerContainers.forEach((container) => {
        const items = Array.from(container.children);
        gsap.fromTo(
          items,
          { opacity: 0, y: 35, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: "carmate",
            scrollTrigger: {
              trigger: container,
              start: "top 82%",
              once: true,
            },
          }
        );
      });

      // 6. Image Clip-Path Reveal + Parallax Scale
      const clipReveals = document.querySelectorAll<HTMLElement>(".gsap-clip-reveal");
      clipReveals.forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(16% 16% 16% 16%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "carmate",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );

        const img = el.querySelector("img");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.14 },
            {
              scale: 1,
              duration: 1.2,
              ease: "carmate",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
              },
            }
          );
        }
      });

      // 7. Stats Counter Animation & Accent Line Expansion
      const statsBar = document.querySelector<HTMLElement>(".stats-bar-section");
      if (statsBar) {
        const accentLine = statsBar.querySelector<HTMLElement>(".stats-accent-line");
        const statNumbers = statsBar.querySelectorAll<HTMLElement>(".gsap-stat-number");

        ScrollTrigger.create({
          trigger: statsBar,
          start: "top 82%",
          once: true,
          onEnter: () => {
            if (accentLine) {
              accentLine.classList.add("active");
            }

            statNumbers.forEach((numEl) => {
              const target = parseInt(numEl.dataset.target || "0", 10);
              gsap.to(numEl, {
                textContent: target,
                duration: 2.2,
                ease: "power2.out",
                snap: { textContent: 1 },
              });
            });
          },
        });
      }

      // 8. Testimonials Infinite Dual-Direction GSAP Marquee
      const marqueeRow1 = document.querySelector<HTMLElement>(".gsap-marquee-1");
      const marqueeRow2 = document.querySelector<HTMLElement>(".gsap-marquee-2");

      if (marqueeRow1 && marqueeRow2) {
        // Row 1: Left continuous movement
        const r1Cards = Array.from(marqueeRow1.children) as HTMLElement[];
        if (r1Cards.length > 0) {
          const totalWidth1 = (r1Cards.length / 2) * (r1Cards[0].offsetWidth + 20);
          gsap.set(marqueeRow1, { x: 0 });
          gsap.to(marqueeRow1, {
            x: -totalWidth1,
            duration: 38,
            ease: "none",
            repeat: -1,
            modifiers: {
              x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth1),
            },
          });
        }

        // Row 2: Right continuous movement
        const r2Cards = Array.from(marqueeRow2.children) as HTMLElement[];
        if (r2Cards.length > 0) {
          const totalWidth2 = (r2Cards.length / 2) * (r2Cards[0].offsetWidth + 20);
          gsap.set(marqueeRow2, { x: -totalWidth2 });
          gsap.to(marqueeRow2, {
            x: 0,
            duration: 44,
            ease: "none",
            repeat: -1,
            modifiers: {
              x: gsap.utils.unitize((x) => (parseFloat(x) % totalWidth2) - totalWidth2),
            },
          });
        }
      }
    });

    // Refresh ScrollTrigger after DOM has settled
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(timeout);
      ctx.revert();
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}
