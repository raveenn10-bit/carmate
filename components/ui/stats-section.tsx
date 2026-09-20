"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Users, Calendar, Sparkles } from "lucide-react";

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      value: 30,
      suffix: "+",
      label: "PROJECTS COMPLETED",
      spec: "Prius 30/50, Aqua & Civic Builds",
      icon: Award,
    },
    {
      value: 50,
      suffix: "+",
      label: "HAPPY CUSTOMERS",
      spec: "Southern Ceylon Atelier",
      icon: Users,
    },
    {
      value: 4,
      suffix: "",
      label: "YEARS EXPERIENCE",
      spec: "Makuluwa Workshop Heritage",
      icon: Calendar,
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const section = sectionRef.current;
    if (!section) return;

    const statNumbers = section.querySelectorAll<HTMLElement>(".gsap-stat-number");
    const accentLine = accentLineRef.current;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      once: true,
      onEnter: () => {
        if (accentLine) {
          accentLine.classList.add("active");
        }

        statNumbers.forEach((numEl, idx) => {
          const target = parseInt(numEl.dataset.target || "0", 10);
          gsap.to(numEl, {
            textContent: target,
            duration: 1.8,
            ease: "power2.out",
            snap: { textContent: 1 },
            delay: idx * 0.15,
            onComplete: () => {
              // Elastic bounce keyframe animation
              const parentCard = numEl.closest(".stat-card");
              if (parentCard) {
                gsap.fromTo(
                  parentCard,
                  { y: 0, scale: 1 },
                  {
                    keyframes: [
                      { y: -18, scale: 1.12, duration: 0.18, ease: "power2.out" },
                      { y: 6, scale: 0.96, duration: 0.12, ease: "power2.in" },
                      { y: -8, scale: 1.06, duration: 0.10, ease: "power2.out" },
                      { y: 0, scale: 1, duration: 0.14, ease: "power2.inOut" },
                    ],
                  }
                );
              }
            },
          });
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-preserve-dark="true"
      className="relative py-20 sm:py-28 bg-[#080c12] border-y border-white/10 overflow-hidden"
      id="stats"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#ea1c24]/[0.035] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ea1c24]/10 border border-[#ea1c24]/30 text-[#ea1c24] text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase mb-4">
            <Sparkles size={13} />
            <span>PROVEN EXCELLENCE // SOUTHERN CEYLON</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight leading-tight mb-3">
            Numbers That Define Us
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Every build that rolls out of our Makuluwa bays reflects meticulous attention to aero tolerance, projector alignment, and baked 2K perfection.
          </p>
        </div>

        {/* Expanding Accent Line */}
        <div ref={accentLineRef} className="stats-accent-line mb-10 sm:mb-14" />

        {/* 3 Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.label}
                className="stat-card relative p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-[#ea1c24]/50 hover:bg-white/[0.05] group text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                {/* Icon Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#ea1c24]/10 border border-[#ea1c24]/20 text-[#ea1c24] mb-4 group-hover:scale-110 group-hover:bg-[#ea1c24] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon size={22} />
                </div>

                {/* Counter Number */}
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-2 flex items-center justify-center font-heading">
                  <span
                    className="gsap-stat-number text-white"
                    data-target={st.value}
                  >
                    0
                  </span>
                  <span className="text-[#ea1c24] ml-1">{st.suffix}</span>
                </div>

                {/* Label */}
                <h3 className="text-xs sm:text-sm font-bold tracking-widest text-zinc-200 uppercase mb-1">
                  {st.label}
                </h3>

                {/* Spec details */}
                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                  {st.spec}
                </p>

                {/* Card hover underglow */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#ea1c24]/0 group-hover:bg-[#ea1c24]/60 blur-sm rounded-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
