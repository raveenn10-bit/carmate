"use client";

import React, { useEffect, useRef, useState } from "react";
import { Users, MapPin, Phone } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const parallaxImgRef = useRef<HTMLImageElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [communityCount, setCommunityCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);

  useEffect(() => {
    // Scroll progress bar
    gsap.to(".scroll-progress", {
      scaleX: 1,
      transformOrigin: "left center",
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    // Hero staggering reveal
    if (heroHeadingRef.current) {
      const letters = heroHeadingRef.current.querySelectorAll('.letter-inner');
      gsap.fromTo(
        letters,
        { y: "100%" },
        {
          y: "0%",
          duration: 1,
          ease: "expo.out",
          stagger: 0.05,
          delay: 0.2
        }
      );
    }
    
    // Tagline and subtitle fade in
    gsap.fromTo(
      ".hero-fade",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.8, ease: "power2.out" }
    );

    // Image wipe reveal & parallax
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.5,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          }
        }
      );
      
      if (parallaxImgRef.current) {
        gsap.fromTo(
          parallaxImgRef.current,
          { x: "-10%" },
          {
            x: "10%",
            ease: "none",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      }
    }

    // Value rows slide in
    const rows = gsap.utils.toArray('.value-row') as HTMLElement[];
    rows.forEach((row, i) => {
      gsap.fromTo(
        row,
        { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          }
        }
      );
    });

    // Stats counter
    ScrollTrigger.create({
      trigger: ".stats-section",
      start: "top 90%",
      once: true,
      onEnter: () => {
        const counts = { community: 0, years: 0 };
        gsap.to(counts, {
          community: 1200,
          years: 5,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            setCommunityCount(Math.floor(counts.community));
            setYearsCount(Math.floor(counts.years));
          }
        });
      }
    });

    // Scroll direction detection for back-to-top
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 400 && currentScroll < lastScroll) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="inline-block overflow-hidden pb-2" style={{ paddingRight: char === ' ' ? '1rem' : '0' }}>
        <span className="letter-inner inline-block relative">{char}</span>
      </span>
    ));
  };

  const values = [
    {
      num: "01",
      title: "Millimeter Precision",
      desc: "Every spoiler mount, body kit seam, and optical projector is aligned with strict tolerances to ensure structural integrity and flawless symmetry.",
    },
    {
      num: "02",
      title: "Electrical Integrity",
      desc: "We prioritize safety above all: all dynamic DRLs, projectors, and ambient suites are installed with dedicated relays, fuses, and heat-shielded harnesses.",
    },
    {
      num: "03",
      title: "Personalized Craftsmanship",
      desc: "No cookie-cutter builds. We consult closely with each car owner to capture their personality through hand-selected materials and tailored finishes.",
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#05070a] text-white overflow-hidden font-sans">
      {/* Top Progress Bar */}
      <div className="scroll-progress fixed top-0 left-0 w-full h-1 bg-[#ea1c24] z-50 origin-left scale-x-0" />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-20 pb-16 px-4 md:px-8">
        <div className="hero-fade text-zinc-400 font-mono text-sm md:text-base tracking-[0.3em] uppercase mb-12">
          — 01 / ABOUT
        </div>
        
        {/* Massive Background Text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-40 mix-blend-overlay">
          <h1 className="text-[20vw] font-black uppercase whitespace-nowrap text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}>
            CARMATE
          </h1>
        </div>

        {/* Foreground Animated Title */}
        <h2 ref={heroHeadingRef} className="relative z-10 text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter text-center leading-[0.9] mb-8">
          {splitText("Bred From Passion.")}
          <br />
          {splitText("Crafted in Galle.")}
        </h2>

        <p className="hero-fade max-w-2xl text-center text-zinc-400 font-light text-base md:text-lg leading-relaxed z-10 mt-6">
          Operating from Makuluwa in Galle, Carmate is a passionate team of automotive styling craftsmen dedicated to transforming ordinary vehicles into extraordinary rolling art.
        </p>
      </section>

      {/* Split Story Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Image */}
          <div className="lg:col-span-7 relative h-[50vh] md:h-[70vh] w-full" ref={imageRef}>
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}>
              <img 
                ref={parallaxImgRef}
                src="/assets/cac-8260-front-lights.jpg" 
                alt="Carmate Workshop"
                className="absolute top-0 left-[-10%] w-[120%] h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#05070a]/80 to-transparent" />
              {/* Diagonal Clip Path Overlay & Accent Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#05070a] to-transparent pointer-events-none" />
              <div className="absolute top-1/4 -right-12 w-24 h-48 bg-[#ea1c24]/80 mix-blend-overlay rotate-45 transform origin-center blur-2xl" />
              <div className="absolute left-0 top-1/4 w-2 h-1/2 bg-[#ea1c24]" />
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-5 space-y-10">
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
              The Carmate <span className="text-[#ea1c24] block mt-2">Philosophy.</span>
            </h3>
            
            <div className="space-y-6 text-zinc-300 font-light text-base md:text-lg leading-relaxed">
              <p>
                Carmate began with a simple belief: a car is never just transportation—it is a canvas for self-expression, personality, and engineering appreciation. What started as bespoke lighting experiments for enthusiasts has grown into Galle’s foremost automotive body shop.
              </p>
              <p>
                Whether it’s a high-downforce carbon GT wing on a Toyota Prius, aggressive custom bumpers on an Aqua, or a 64-color fiber-optic cabin, our team treats every project as if it were our own track machine.
              </p>
            </div>

            {/* Oversized Quote */}
            <blockquote className="border-l-2 border-[#ea1c24] pl-6 py-2 my-10">
              <p className="text-2xl font-light italic text-white/90">
                "We don't just modify cars. We engineer rolling art that commands the streets."
              </p>
            </blockquote>

            <div className="pt-4 flex flex-col sm:flex-row flex-wrap gap-6 font-mono text-xs tracking-wider text-zinc-400 uppercase">
              <div className="flex items-center gap-3">
                <Users className="text-[#ea1c24] shrink-0" size={16} />
                <span>1.2K+ Followers</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-[#ea1c24] shrink-0" size={16} />
                <span>197 Hotel Suniru Lanka, Makuluwa, Galle</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#ea1c24] shrink-0" size={16} />
                <span>+94 77 717 7452</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Bar (Marquee) */}
      <section className="stats-section relative py-12 border-y border-white/10 overflow-hidden bg-[#0a0d14]">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-12 px-6 font-black uppercase text-2xl md:text-4xl tracking-tighter text-zinc-700">
            <span>{communityCount}+ COMMUNITY MEMBERS</span>
            <span className="text-[#ea1c24]">·</span>
            <span>{yearsCount}+ YEARS CRAFTSMANSHIP</span>
            <span className="text-[#ea1c24]">·</span>
            <span>MAKULUWA, GALLE</span>
            <span className="text-[#ea1c24]">·</span>
            <span className="text-white">SOUTHERN CEYLON AUTOMOTIVE ATELIER</span>
            <span className="text-[#ea1c24]">·</span>
          </div>
          {/* Duplicate for infinite loop */}
          <div className="flex items-center gap-12 px-6 font-black uppercase text-2xl md:text-4xl tracking-tighter text-zinc-700" aria-hidden="true">
            <span>{communityCount}+ COMMUNITY MEMBERS</span>
            <span className="text-[#ea1c24]">·</span>
            <span>{yearsCount}+ YEARS CRAFTSMANSHIP</span>
            <span className="text-[#ea1c24]">·</span>
            <span>MAKULUWA, GALLE</span>
            <span className="text-[#ea1c24]">·</span>
            <span className="text-white">SOUTHERN CEYLON AUTOMOTIVE ATELIER</span>
            <span className="text-[#ea1c24]">·</span>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 max-w-6xl mx-auto" ref={valuesRef}>
        <div className="mb-16">
          <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-[#ea1c24] mb-4">Our Build Standards</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Precision in <br/>Every Detail.</h3>
        </div>

        <div className="flex flex-col">
          {values.map((v, i) => (
            <div 
              key={v.num} 
              className="value-row group flex flex-col md:flex-row items-baseline py-12 md:py-16 border-t border-white/10 first:border-none relative"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="md:w-1/3 mb-6 md:mb-0 flex items-baseline gap-6">
                <span className="text-4xl md:text-5xl font-mono text-[#ea1c24]/50 group-hover:text-[#ea1c24] transition-colors duration-300">
                  {v.num}.
                </span>
                <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {v.title}
                </h4>
              </div>
              <div className="md:w-2/3 md:pl-12">
                <p className="text-lg md:text-xl font-light text-zinc-400 leading-relaxed max-w-2xl">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#ea1c24] text-white flex items-center justify-center transition-all duration-500 shadow-[0_0_20px_rgba(234,28,36,0.3)] hover:scale-110 hover:bg-white hover:text-[#ea1c24] ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <span className="text-xl font-black">↑</span>
      </button>

      {/* Marquee Keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}
