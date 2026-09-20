'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clientBenefits } from '@/data/services';
import { Shield, Zap, Layers, Lock, MessageSquare, Terminal, CheckCircle2, Sparkles, XCircle } from 'lucide-react';

const benefitIcons = [Layers, Zap, Terminal, Lock, MessageSquare, Shield];

const benefitVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const comparisons = [
  {
    criterion: 'Engineering Point of Contact',
    withMe: 'Direct communication with Saddam (Senior Full-Stack)',
    agency: 'Non-technical account managers & broken communication',
  },
  {
    criterion: 'Code Quality & Ownership',
    withMe: '100% clean TypeScript repo ownership, zero vendor lock-in',
    agency: 'Proprietary CMS plugins, hidden fees, locked codebases',
  },
  {
    criterion: 'Performance Standard',
    withMe: '95+ Google Lighthouse scores, sub-second TTFB',
    agency: 'Bloated page templates and sluggish page transitions',
  },
  {
    criterion: 'Delivery Cadence',
    withMe: 'Staging preview updates every 3 to 5 days',
    agency: 'Endless status meetings with delayed rollout cycles',
  },
];

export default function ClientBenefits() {
  return (
    <section className="py-24 px-6 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header & 6 Engineering Guarantees */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">

          {/* Left Column: Strong Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 text-left sticky top-28"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Sparkles className="w-3 h-3" />
              <span>THE ENGINEERING STANDARD</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              MORE THAN <br />
              <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                JUST CODE.
              </span>
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-sans mb-8">
              "I don't just write code. I build useful digital products engineered for real human use and predictable business growth."
            </p>

            <div className="p-6 rounded-2xl border border-white/[0.08] bg-slate-900/50 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <h4 className="text-xs font-mono tracking-wider text-cyan-400 uppercase font-semibold mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>My Core Engineering Standard</span>
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                Every line of code is structured so that you own the intellectual property, understand the deployment, and have a solid technical foundation that never traps you with vendor lock-in.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 6 Concrete Engineering Benefits */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ staggerChildren: 0.08 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left"
          >
            {clientBenefits.map((benefit, idx) => {
              const IconComp = benefitIcons[idx] || Layers;
              return (
                <motion.div
                  key={benefit.title}
                  variants={benefitVariants}
                  className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-6 flex flex-col justify-between hover:border-cyan-400/40 hover:-translate-y-1.5 transition-all duration-300 group shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/40 group-hover:scale-105 transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                      <IconComp className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-cyan-50 transition-colors duration-200">
                      {benefit.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans mb-4">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.04] text-[11px] font-mono text-zinc-400">
                    <span className="text-cyan-400 font-bold mr-1.5">✓</span>
                    {benefit.proof}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* High-Converting Comparison Table: Direct Senior Builder vs Agency */}
        <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.08] bg-slate-900/30 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] text-left">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold block mb-2">
              WHY CHOOSE A DEDICATED SENIOR ENGINEER
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Working With Me vs. Traditional Agencies
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/[0.08] text-xs font-mono uppercase text-zinc-400">
                  <th className="pb-4 font-semibold w-1/3">Core Dimension</th>
                  <th className="pb-4 font-semibold text-cyan-300 w-1/3">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      With Saddam Hossain
                    </span>
                  </th>
                  <th className="pb-4 font-semibold text-zinc-400 w-1/3">Typical Agency Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04] text-xs sm:text-sm">
                {comparisons.map((row) => (
                  <tr key={row.criterion} className="hover:bg-white/[0.01] transition-colors">
                    <td className="py-4 font-semibold text-white">{row.criterion}</td>
                    <td className="py-4 text-cyan-100 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{row.withMe}</span>
                    </td>
                    <td className="py-4 text-zinc-400">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                        <span>{row.agency}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
