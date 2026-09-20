'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, ShieldCheck, Zap, Code2, Users } from 'lucide-react';
import HeroAbstractVisual from './hero-abstract-visual';

export default function ServicesHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustMetrics = [
    {
      icon: Code2,
      label: '100% Type-Safe Code',
      detail: 'End-to-End TypeScript',
    },
    {
      icon: Zap,
      label: '95+ Lighthouse Score',
      detail: 'Sub-Second Performance',
    },
    {
      icon: ShieldCheck,
      label: 'Zero Vendor Lock-In',
      detail: 'Full Codebase Ownership',
    },
    {
      icon: Users,
      label: 'Direct Senior Builder',
      detail: 'No Agency Middlemen',
    },
  ];

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 px-6 overflow-hidden border-b border-white/[0.06]">
      {/* Background ambient light flare */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left"
          >
            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/[0.1] text-xs font-mono text-zinc-300 mb-6 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              </span>
              <span>AVAILABLE FOR SELECTED PROJECTS</span>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <span className="text-zinc-400 text-[11px] hidden sm:inline">Q3/Q4 CALENDAR OPEN</span>
            </div>

            {/* Eyebrow */}
            <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-cyan-400 uppercase font-semibold mb-3 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-cyan-400/60 inline-block" />
              <span>WHAT I CAN BUILD FOR YOU</span>
            </p>

            {/* Editorial Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
              <span className="sr-only">Services</span>
              <span aria-hidden="true">
                I BUILD <br />
                <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                  DIGITAL PRODUCTS
                </span> <br />
                <span className="text-zinc-400 font-light">THAT WORK.</span>
              </span>
            </h1>

            {/* Positioning Statement */}
            <p className="text-zinc-300/90 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-sans mb-10">
              I design and develop modern web applications, e-commerce platforms, SaaS products, and business systems with a strong focus on performance, usability, and maintainability.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                type="button"
                onClick={() => scrollToSection('final-cta')}
                className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-slate-950 font-bold text-sm transition-all duration-300 hover:bg-cyan-50 hover:shadow-[0_0_35px_rgba(34,211,238,0.4)] active:scale-95 cursor-pointer shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('proof')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/30 text-sm font-semibold transition-all duration-300 active:scale-95 cursor-pointer backdrop-blur-md"
              >
                <span>VIEW PROVEN WORK</span>
                <ArrowDown className="w-4 h-4 text-zinc-400" />
              </button>
            </div>

            {/* Executive Trust Metrics Strip */}
            <div className="pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4">
              {trustMetrics.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center gap-1.5 mb-1">
                    <item.icon className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-xs font-semibold text-white tracking-tight">{item.label}</span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">{item.detail}</span>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Abstract Technology & Architecture Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <HeroAbstractVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
