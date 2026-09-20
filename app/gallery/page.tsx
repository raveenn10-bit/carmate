"use client";

import React, { useEffect, useRef, useState } from "react";
import { ProjectAlbumsSection } from "@/components/ui/project-albums-section";
import { VideoReelsSection } from "@/components/ui/video-reels-section";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TABS = ["ALL BUILDS", "BODY KITS", "LIGHTING", "INTERIORS"];
const TICKER_TEXT = "COMPLETE BUILDS · CUSTOM LIGHTING · AERODYNAMIC BODY KITS · BESPOKE INTERIORS · PAINT PERFECTION · ";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("ALL BUILDS");
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tickerContentRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  
  const chroniclesHeadingRef = useRef<HTMLDivElement>(null);
  const motionHeadingRef = useRef<HTMLDivElement>(null);
  
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Calculate scroll progress for top bar
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? currentScrollY / documentHeight : 0;
      if (progressBarRef.current) {
        gsap.set(progressBarRef.current, { scaleX: progress });
      }

      // Scroll to top button logic: show when scrolled down > 400px AND scrolling up
      if (currentScrollY > 400 && currentScrollY < lastScrollY.current) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero text clip-path reveal
      gsap.fromTo(
        titleRef.current,
        { y: 100, clipPath: "inset(0 0 100% 0)" },
        { y: 0, clipPath: "inset(0 0 0% 0)", duration: 1.5, ease: "power4.out", delay: 0.2 }
      );

      // Filter tabs stagger
      if (tabsRef.current) {
        gsap.fromTo(
          tabsRef.current.children,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.8 }
        );
      }

      // Ticker animation
      if (tickerContentRef.current) {
        gsap.to(tickerContentRef.current, {
          xPercent: -50,
          ease: "none",
          duration: 20,
          repeat: -1,
        });
      }

      // Section Headings Slide in from left
      const headings = [chroniclesHeadingRef.current, motionHeadingRef.current];
      headings.forEach((heading) => {
        if (heading) {
          gsap.fromTo(
            heading,
            { x: -100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 80%",
              }
            }
          );
        }
      });
      
    });

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <main className="bg-[#05070a] min-h-screen text-white relative overflow-hidden font-sans">
      {/* Progress Bar */}
      <div 
        ref={progressBarRef}
        className="fixed top-0 left-0 h-1 bg-[#ea1c24] w-full z-50 origin-left scale-x-0"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-40 pb-20 min-h-[60vh] flex flex-col justify-center border-b border-white/5"
      >
        {/* Background Blur */}
        <div 
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(40px)"
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-8 overflow-hidden">
            <span className="text-[#ea1c24] font-mono text-sm tracking-widest">— 03 / GALLERY</span>
          </div>
          <div className="overflow-hidden pb-4">
            <h1 
              ref={titleRef}
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none"
            >
              Gallery &<br />Builds
            </h1>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="w-full overflow-hidden border-b border-white/5 py-4 bg-[#05070a] relative z-10">
        <div className="flex whitespace-nowrap w-max" ref={tickerContentRef}>
          <div className="text-xs font-mono tracking-[0.2em] text-white/60 uppercase shrink-0 px-4">
            {TICKER_TEXT}
          </div>
          <div className="text-xs font-mono tracking-[0.2em] text-white/60 uppercase shrink-0 px-4">
            {TICKER_TEXT}
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div ref={tabsRef} className="flex flex-wrap gap-8 border-b border-white/10 pb-4">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-medium tracking-widest uppercase transition-colors relative pb-4 -mb-[17px] ${
                activeTab === tab ? "text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ea1c24]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Project Albums Container */}
      <section className="container mx-auto px-6 py-12 relative z-10">
        <div ref={chroniclesHeadingRef} className="mb-12">
          <span className="font-mono text-[#ea1c24] text-xs tracking-widest uppercase block mb-2">
            Project Chronicles
          </span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
            Featured Archives
          </h2>
        </div>
        
        <div className="opacity-95">
          {/* Note: In a real app we'd pass activeTab to this component to filter */}
          <ProjectAlbumsSection />
        </div>
      </section>

      {/* Video Reels Container */}
      <section className="container mx-auto px-6 py-24 relative z-10 border-t border-white/5 mt-12">
        <div ref={motionHeadingRef} className="mb-12">
          <span className="font-mono text-[#ea1c24] text-xs tracking-widest uppercase block mb-2">
            Motion Archive
          </span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
            Workshop Reels
          </h2>
        </div>
        
        <VideoReelsSection />
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-8 w-12 h-12 bg-[#ea1c24] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50 hover:bg-[#ea1c24]/80 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <span className="text-xl leading-none">↑</span>
      </button>
    </main>
  );
}
