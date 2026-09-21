'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Mail, Copy, Check, Sparkles, Clock, Globe } from 'lucide-react';
import Link from 'next/link';

export default function FinalCta() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('saddam13bd@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = 'mailto:saddam13bd@gmail.com';
    }
  };

  return (
    <section id="final-cta" className="py-28 px-6 relative overflow-hidden bg-slate-950 text-center scroll-mt-24 sm:scroll-mt-28">
      {/* Subtle ambient lighting flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto relative z-10"
      >

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-white/[0.1] text-xs font-mono text-zinc-300 mb-6 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>START A PROJECT CONVERSATION</span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          HAVE AN IDEA? <br />
          <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
            LET'S BUILD IT TOGETHER.
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="text-zinc-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-sans mb-10"
        >
          Tell me what you're trying to build, improve, or automate. I will review your requirements and reply with initial architectural recommendations and a clear roadmap.
        </motion.p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <motion.a
            href="https://wa.me/8801974544443?text=Hi%20Saddam!%20I%20have%20an%20idea%20for%20a%20project%20I'd%20like%20to%20discuss."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-slate-950 font-bold text-sm transition-all duration-300 hover:bg-cyan-50 hover:shadow-[0_0_35px_rgba(34,211,238,0.4)] active:scale-95 cursor-pointer shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>DISCUSS ON WHATSAPP</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.button
            type="button"
            onClick={handleCopyEmail}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/20 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/30 text-sm font-semibold transition-all duration-300 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">saddam13bd@gmail.com copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-zinc-400" />
                <span>COPY EMAIL</span>
              </>
            )}
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.46 }}
          >
            <Link
              href="/#timeline"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-transparent text-zinc-400 hover:text-white text-sm font-semibold transition-colors"
            >
              <span>VIEW TIMELINE</span>
            </Link>
          </motion.div>
        </div>

        {/* Live Availability & Timezone Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="inline-flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-400 bg-white/[0.02] px-4 py-2 rounded-full border border-white/[0.06]"
        >
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for Q3/Q4 Engagements</span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-zinc-500" />
            <span>Response within 2-4 hours</span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-zinc-500" />
            <span>Dhaka (GMT+6) • Global Remote</span>
          </span>
        </motion.div>

      </motion.div>
    </section>
  );
}
