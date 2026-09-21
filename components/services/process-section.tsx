'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '@/data/services';
import { Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 px-6 border-b border-white/[0.06] bg-slate-950/60 relative scroll-mt-24 sm:scroll-mt-28">
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
            <span>PREDICTABLE DELIVERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            FROM IDEA TO PRODUCTION
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-sans">
            A disciplined, 5-stage engineering lifecycle designed to eliminate guesswork and deliver predictable results.
          </p>
        </motion.div>

        {/* Desktop Connected Flow (Horizontal 5-step grid) */}
        <div className="hidden lg:block relative mb-12">
          {/* Subtle horizontal connecting line passing through node centers */}
          <div className="absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-indigo-500/40 z-0 overflow-hidden">
            {/* Animated Energy Flow */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-5 gap-4 relative z-10"
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.step}
                variants={stepVariants}
                className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-slate-900/60 p-6 backdrop-blur-md hover:border-cyan-400/50 hover:-translate-y-1.5 transition-all duration-300 group shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              >
                <div>
                  {/* Node Pill */}
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-cyan-400/40 flex items-center justify-center font-mono text-sm font-bold text-cyan-400 mb-6 shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_24px_rgba(34,211,238,0.4)] group-hover:border-cyan-300 transition-all duration-300">
                    {step.step}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-cyan-50 transition-colors duration-200">
                    {step.name}
                  </h3>

                  <p className="text-xs text-zinc-300 font-medium mb-3 leading-snug">
                    {step.tagline}
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase font-semibold mb-2">
                    Key Outcomes:
                  </p>
                  <div className="space-y-1.5">
                    {step.deliverables.map((deliv) => (
                      <div key={deliv} className="flex items-center gap-1.5 text-[11px] text-zinc-300">
                        <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile & Tablet Vertical Timeline Layout */}
        <div className="lg:hidden relative pl-8 border-l border-white/[0.1] space-y-8 mb-12">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-cyan-400 font-bold">
                    STEP {step.step}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {step.name}
                  </span>
                </div>

                <p className="text-xs text-zinc-300 font-medium mb-2">
                  {step.tagline}
                </p>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans mb-4">
                  {step.description}
                </p>

                <div className="pt-3 border-t border-white/[0.06]">
                  <p className="text-[10px] font-mono text-zinc-400 uppercase mb-2 font-semibold">
                    Key Outcomes:
                  </p>
                  <div className="space-y-1 text-xs text-zinc-300">
                    {step.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Guarantee Footnote */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <p className="text-xs sm:text-sm text-zinc-300">
              <strong className="text-white">Staging Previews On Every Milestone:</strong> You test each release in an isolated staging environment before production rollout.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 shrink-0">
            <CheckCircle2 className="w-4 h-4" />
            <span>Zero Guesswork Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
}
