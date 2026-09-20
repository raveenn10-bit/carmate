"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MapPin, MessageCircle, ArrowUp, Plus, Minus, Check, Map, Clock } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPage() {
  const [vehicle, setVehicle] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const scrollTopRef = useRef<HTMLButtonElement>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const serviceOptions = [
    "Custom Body Kit & Front Lip",
    "Carbon GT Wing & Spoilers",
    "Bi-LED Projector Retrofit",
    "Dynamic Flowing DRLs",
    "Bespoke Leather Interior",
    "64-Color Ambient Lighting",
    "Auto-Folding Mirrors",
    "Paint Correction & Blackout",
  ];

  const faqs = [
    {
      q: "Where is the Carmate workshop located?",
      a: "Our workshop is located at 197, Hotel Suniru Lanka, Makuluwa, Galle 80000, Sri Lanka. You can visit us for in-person evaluations.",
    },
    {
      q: "How long does a typical body kit or lighting installation take?",
      a: "Lighting and DRL upgrades typically take 1–2 days. Complete body kits with paint matching and custom GT wings take between 3–5 working days.",
    },
    {
      q: "Do you offer consultations in Sinhala?",
      a: "Yes! Our team provides full consultations in both Sinhala (සිංහල) and English.",
    },
    {
      q: "Can I bring my own body kit or parts for installation?",
      a: "Yes, we provide professional fitment, alignment, and wiring services for customer-supplied parts as well as our own curated builds.",
    },
  ];

  const toggleService = (svc: string) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const svcs = selectedServices.length > 0 ? selectedServices.join(", ") : "General Consultation";
    const msg = `Hello Carmate!\nI would like to inquire about a vehicle modification.\n\nVehicle: ${vehicle || "Not specified"}\nServices Interested: ${svcs}\nNotes/Ideas: ${notes || "None"}\n\nCould you provide compatibility and pricing details?`;
    window.open(`https://wa.me/94777177452?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const toggleFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  // Setup GSAP Animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Progress Bar
      gsap.to(progressBarRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });

      // Hero animations
      if (heroRef.current) {
        const leftContent = heroRef.current.querySelector(".hero-left");
        const rightContent = heroRef.current.querySelector(".hero-right");

        gsap.fromTo(
          leftContent,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.2 }
        );
        gsap.fromTo(
          rightContent,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.4 }
        );
      }

      // Form staggering
      if (formRef.current) {
        const formElements = formRef.current.querySelectorAll(".form-element");
        gsap.fromTo(
          formElements,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Info Cards staggering
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".info-card");
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // FAQ GSAP animation
  useEffect(() => {
    faqs.forEach((_, index) => {
      const answerWrapper = faqRefs.current[index]?.querySelector(".faq-answer");
      const icon = faqRefs.current[index]?.querySelector(".faq-icon");

      if (answerWrapper) {
        if (activeFaq === index) {
          gsap.to(answerWrapper, { height: "auto", opacity: 1, duration: 0.4, ease: "power3.out" });
          if (icon) gsap.to(icon, { rotation: 180, duration: 0.4, ease: "power3.out" });
        } else {
          gsap.to(answerWrapper, { height: 0, opacity: 0, duration: 0.4, ease: "power3.inOut" });
          if (icon) gsap.to(icon, { rotation: 0, duration: 0.4, ease: "power3.inOut" });
        }
      }
    });
  }, [activeFaq, faqs]);

  // Scroll to Top Logic
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 400 && currentScrollY < lastScrollY) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showScrollTop && scrollTopRef.current) {
      gsap.to(scrollTopRef.current, { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" });
    } else if (scrollTopRef.current) {
      gsap.to(scrollTopRef.current, { autoAlpha: 0, y: 20, duration: 0.3, ease: "power2.in" });
    }
  }, [showScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-white selection:bg-[#ea1c24] selection:text-white pb-24 relative font-sans overflow-hidden">
      {/* Top Progress Bar */}
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 h-1 bg-[#ea1c24] w-full z-50 origin-left scale-x-0"
      ></div>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="hero-left flex flex-col items-start space-y-8">
            <span className="text-xs font-bold tracking-[0.3em] text-zinc-500 uppercase flex items-center gap-4">
              <span className="w-8 h-px bg-[#ea1c24]"></span>
              04 / Contact
            </span>
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#ea1c24]">
              <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
                Contact &amp; <br />
                <span className="text-zinc-600">Quotes</span>
              </h1>
            </div>
            <p className="text-sm sm:text-base text-zinc-400 max-w-md leading-relaxed">
              Experience precision engineering. Connect with our bespoke modification workshop to transform your vision into reality.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-[#ea1c24] group-hover:border-[#ea1c24] transition-all duration-500">
                  <Phone className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Direct Line</div>
                  <a href="tel:+94777177452" className="text-base font-semibold hover:text-[#ea1c24] transition-colors">+94 77 717 7452</a>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-[#ea1c24] group-hover:border-[#ea1c24] transition-all duration-500">
                  <Mail className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Email Concierge</div>
                  <a href="mailto:info@carmate.lk" className="text-base font-semibold hover:text-[#ea1c24] transition-colors">info@carmate.lk</a>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-[#ea1c24] group-hover:border-[#ea1c24] transition-all duration-500">
                  <MapPin className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Workshop</div>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=197%20Hotel%20Suniru%20Lanka%20Makuluwa%20Galle%20Sri%20Lanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold hover:text-[#ea1c24] transition-colors"
                  >
                    197 Makuluwa, Galle 80000, LK
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="hero-right relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/5 bg-[#090d14] group">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ea1c24]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border border-[#ea1c24]/30 animate-ping absolute -inset-12"></div>
                <div className="w-32 h-32 rounded-full border border-[#ea1c24]/20 animate-ping absolute -inset-12 delay-300"></div>
                <div className="w-16 h-16 rounded-full bg-[#ea1c24]/10 border border-[#ea1c24] flex items-center justify-center relative z-10 backdrop-blur-md shadow-[0_0_30px_rgba(234,28,36,0.3)]">
                  <MapPin className="w-8 h-8 text-[#ea1c24]" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs font-bold text-[#ea1c24] uppercase tracking-widest mb-1">Destination</div>
                  <div className="font-semibold text-lg">Carmate Workshop</div>
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=197%20Hotel%20Suniru%20Lanka%20Makuluwa%20Galle%20Sri%20Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#ea1c24] hover:text-white transition-colors duration-300"
                >
                  <ArrowUp className="w-5 h-5 rotate-45" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Form Side */}
          <div ref={formRef} className="lg:col-span-7 space-y-12">
            <div className="form-element bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea1c24]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold uppercase tracking-wider mb-2">Build Your Quote</h2>
                <p className="text-zinc-400 text-sm">Select options to construct a bespoke inquiry for our engineering team.</p>
              </div>

              <form onSubmit={handleSendWhatsApp} className="space-y-10 relative z-10">
                
                {/* Vehicle Input */}
                <div className="form-element relative group">
                  <input
                    type="text"
                    id="vehicle"
                    required
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="block w-full bg-transparent border-0 border-b-2 border-white/20 py-4 px-0 text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-[#ea1c24] peer transition-colors text-lg"
                    placeholder="Vehicle Model & Year"
                  />
                  <label
                    htmlFor="vehicle"
                    className="absolute left-0 -top-4 text-xs font-bold uppercase tracking-widest text-[#ea1c24] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#ea1c24]"
                  >
                    Vehicle Model & Year
                  </label>
                </div>

                {/* Services Selection */}
                <div className="form-element">
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">
                    Bespoke Services
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {serviceOptions.map((svc) => {
                      const isSelected = selectedServices.includes(svc);
                      return (
                        <button
                          type="button"
                          key={svc}
                          onClick={() => toggleService(svc)}
                          className={`relative overflow-hidden px-5 py-3 rounded-full border text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                            isSelected
                              ? "bg-[#ea1c24]/10 border-[#ea1c24] text-white shadow-[0_0_15px_rgba(234,28,36,0.2)]"
                              : "bg-transparent border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
                          }`}
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            {isSelected && <Check size={14} className="text-[#ea1c24]" />}
                            {svc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Notes Input */}
                <div className="form-element relative group">
                  <textarea
                    id="notes"
                    rows={1}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="block w-full bg-transparent border-0 border-b-2 border-white/20 py-4 px-0 text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-[#ea1c24] peer transition-colors resize-none overflow-hidden min-h-[50px] text-lg"
                    placeholder="Vision & Requirements"
                  ></textarea>
                  <label
                    htmlFor="notes"
                    className="absolute left-0 -top-4 text-xs font-bold uppercase tracking-widest text-[#ea1c24] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#ea1c24]"
                  >
                    Vision & Requirements
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="form-element w-full bg-[#111] hover:bg-[#ea1c24] text-white py-5 rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 flex justify-center items-center gap-4 group border border-white/10 hover:border-[#ea1c24] shadow-xl hover:shadow-[0_0_30px_rgba(234,28,36,0.4)]"
                >
                  <span>Send to Carmate Workshop</span>
                  <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Info Cards Side */}
          <div ref={cardsRef} className="lg:col-span-5 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8 pl-4 border-l-2 border-[#ea1c24]">
              Workshop Intel
            </h3>

            {/* Location Card */}
            <div className="info-card bg-[#090d14] border-y border-r border-white/5 border-l-2 border-l-[#ea1c24] p-6 hover:bg-[#0c121c] transition-colors flex items-start gap-6 group">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#ea1c24]/10 transition-colors">
                <MapPin className="text-[#ea1c24]" size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-2">Coordinates</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  197, Hotel Suniru Lanka, Makuluwa,<br/> Galle 80000, Sri Lanka
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=197%20Hotel%20Suniru%20Lanka%20Makuluwa%20Galle%20Sri%20Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2 hover:text-[#ea1c24] transition-colors w-max"
                >
                  <Map size={14} /> Open Maps
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="info-card bg-[#090d14] border-y border-r border-white/5 border-l-2 border-l-[#ea1c24] p-6 hover:bg-[#0c121c] transition-colors flex items-start gap-6 group">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#ea1c24]/10 transition-colors">
                <Clock className="text-[#ea1c24]" size={20} />
              </div>
              <div className="w-full">
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Operating Hours</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-zinc-400">Mon - Fri</span>
                    <span className="font-medium text-white">8:30 AM - 6:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-zinc-400">Saturday</span>
                    <span className="font-medium text-white">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Sunday</span>
                    <span className="font-medium text-[#ea1c24]">By Appointment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="info-card bg-[#090d14] border-y border-r border-white/5 border-l-2 border-l-[#ea1c24] p-6 hover:bg-[#0c121c] transition-colors flex items-start gap-6 group">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#ea1c24]/10 transition-colors">
                <Phone className="text-[#ea1c24]" size={20} />
              </div>
              <div className="w-full">
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Comms</h4>
                <div className="space-y-4">
                  <a href="tel:+94777177452" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group/link">
                    <Phone size={14} className="group-hover/link:text-[#ea1c24] transition-colors" />
                    <span className="text-sm tracking-wide">+94 77 717 7452</span>
                  </a>
                  <a href="mailto:info@carmate.lk" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group/link">
                    <Mail size={14} className="group-hover/link:text-[#ea1c24] transition-colors" />
                    <span className="text-sm tracking-wide">info@carmate.lk</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 sm:px-12 max-w-4xl mx-auto py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter mb-4">
            Intelligence
          </h2>
          <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Frequently Asked Questions</p>
        </div>

        <div className="space-y-2 border-t border-white/10 pt-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => {
                faqRefs.current[index] = el;
              }}
              className="border-b border-white/10"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <h3 className="text-base sm:text-lg font-bold pr-8 group-hover:text-[#ea1c24] transition-colors">
                  {faq.q}
                </h3>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 faq-icon group-hover:border-[#ea1c24] transition-colors">
                  <Plus className="w-4 h-4 text-white" />
                </div>
              </button>
              <div className="faq-answer h-0 overflow-hidden opacity-0">
                <p className="pb-8 text-zinc-400 text-sm leading-relaxed max-w-3xl">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scroll to Top */}
      <button
        ref={scrollTopRef}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#ea1c24] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(234,28,36,0.4)] hover:bg-white hover:text-[#ea1c24] transition-colors duration-300 z-50 opacity-0 invisible"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}
