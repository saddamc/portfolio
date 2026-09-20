'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { serviceFitMatrix, ServiceFitItem } from '@/data/services';
import { ArrowRight, Sparkles, HelpCircle, MessageCircle } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function ServiceFit() {
  const handleScrollTo = (anchorId: string) => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 border-b border-white/[0.06] bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto text-left">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3 h-3" />
            <span>PRACTICAL DECISION GUIDE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            WHICH SERVICE FITS YOUR PROJECT?
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-sans">
            Instead of artificial pricing packages, here is a direct guide to help you find the right architectural fit for your goal.
          </p>
        </motion.div>

        {/* Comparison Routing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {serviceFitMatrix.map((item: ServiceFitItem, idx: number) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              onClick={() => handleScrollTo(item.anchorId)}
              className="group rounded-2xl border border-white/[0.08] bg-slate-900/40 p-7 flex flex-col justify-between hover:border-cyan-400/50 hover:bg-slate-900/70 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5),0_0_24px_rgba(34,211,238,0.12)] transition-all duration-300 cursor-pointer relative overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
              {/* Left accent bar on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <span className="block text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-2 font-semibold">
                  IF YOUR GOAL IS:
                </span>
                <p className="text-base font-bold text-white mb-5 leading-snug">
                  "{item.need}"
                </p>

                <div className="pt-4 border-t border-white/[0.06] mb-4">
                  <span className="block text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1 font-semibold">
                    RECOMMENDED ARCHITECTURE →
                  </span>
                  <span className="text-base font-bold text-cyan-100 group-hover:text-cyan-300 transition-colors">
                    {item.recommendedService}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {item.reason}
                </p>
              </div>

              <div className="pt-5 border-t border-white/[0.06] mt-5 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                  View Specifications
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Still Not Sure CTA Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900/60 to-cyan-950/20 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <p className="text-sm font-bold text-white">Not sure which service fits your exact problem?</p>
              <p className="text-xs text-zinc-400">Describe your concept in 2 sentences on WhatsApp and I will suggest the right stack.</p>
            </div>
          </div>
          <a
            href="https://wa.me/8801974544443?text=Hi%20Saddam!%20I%20have%20a%20project%20idea%20and%20need%20advice%20on%20the%20right%20architecture."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-400 text-slate-950 font-mono font-bold text-xs hover:bg-cyan-300 transition-colors shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>ASK FOR ARCHITECTURE ADVICE</span>
          </a>
        </div>

      </div>
    </section>
  );
}
