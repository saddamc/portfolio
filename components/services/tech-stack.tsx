'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { techGroups } from '@/data/services';
import { Code2, Server, Database, Cloud, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

const groupIcons: Record<string, React.ElementType> = {
  'Frontend Engineering': Code2,
  'Backend & APIs': Server,
  'Database Architecture': Database,
  'Infrastructure & Cloud': Cloud,
  'Integrations & Services': Zap,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-6 border-b border-white/[0.06] bg-slate-950/40 relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto text-left">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Sparkles className="w-3 h-3" />
              <span>STACK & INFRASTRUCTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              BUILT WITH THE RIGHT TECHNOLOGY
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-sans">
              Only modern, battle-tested technologies that I actively use in production projects. Grouped by their purpose in the stack.
            </p>
          </motion.div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>100% PRODUCTION TESTED</span>
          </div>
        </div>

        {/* Purpose-Grouped Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {techGroups.map((group) => {
            const IconComp = groupIcons[group.category] || Code2;
            return (
              <motion.div
                key={group.category}
                variants={cardVariants}
                className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-7 flex flex-col justify-between hover:border-cyan-400/40 hover:-translate-y-1.5 transition-all duration-300 group shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform duration-300">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-50 transition-colors duration-200">
                        {group.category}
                      </h3>
                      <p className="text-[11px] text-zinc-400 font-sans">
                        {group.purpose}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-zinc-300 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/[0.08] hover:shadow-[0_0_12px_rgba(34,211,238,0.15)] transition-all duration-200 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
