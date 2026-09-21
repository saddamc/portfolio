'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { services, ServiceItem } from '@/data/services';
import { Check, ArrowRight, MessageCircle, Clock, Sparkles, Code, ShoppingCart, Layers, Briefcase, Server, Wrench } from 'lucide-react';

const serviceIcons: Record<string, React.ElementType> = {
  'full-stack': Code,
  'ecommerce': ShoppingCart,
  'saas': Layers,
  'business-apps': Briefcase,
  'api-backend': Server,
  'maintenance': Wrench,
};

const serviceShortNames: Record<string, string> = {
  'full-stack': 'Full-Stack',
  'ecommerce': 'E-Commerce',
  'saas': 'SaaS',
  'business-apps': 'Business Apps',
  'api-backend': 'APIs & Backend',
  'maintenance': 'Maintenance',
};

const serviceTimelines: Record<string, string> = {
  'full-stack': '3–6 Weeks',
  'ecommerce': '2–4 Weeks',
  'saas': '4–8 Weeks',
  'business-apps': '3–5 Weeks',
  'api-backend': '1–3 Weeks',
  'maintenance': 'Flexible / Sprint-based',
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const blockVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

export default function ServiceDetails() {
  const handleScrollTo = (anchorId: string) => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="service-details" className="py-24 px-6 border-b border-white/[0.06] relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto text-left">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Sparkles className="w-3 h-3" />
              <span>DETAILED SPECIFICATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Structured deliverables for every service.
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-sans">
              Transparent breakdown of what gets engineered, what is included out of the box, and who each service is built for.
            </p>
          </motion.div>

          {/* Quick Jump Anchors */}
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => handleScrollTo(s.anchorId)}
                className="px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-cyan-400/40 text-[11px] font-mono text-zinc-400 hover:text-white transition-all cursor-pointer"
              >
                {s.number}. {serviceShortNames[s.id] || s.title}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Service Blocks */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="space-y-12"
        >
          {services.map((service: ServiceItem) => {
            const IconComp = serviceIcons[service.id] || Code;
            const timeline = serviceTimelines[service.id] || '2–4 Weeks';

            return (
              <motion.div
                key={service.id}
                variants={blockVariants}
                id={service.anchorId}
                className="scroll-mt-28 rounded-3xl border border-white/[0.1] bg-slate-900/40 backdrop-blur-xl p-8 sm:p-10 lg:p-12 hover:border-cyan-400/40 transition-all duration-300 group shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] relative overflow-hidden"
              >
                {/* Top Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Header: Number, Title, Positioning */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-white/[0.08]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                      <IconComp className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="inline-block font-mono text-xs text-cyan-400 tracking-widest font-semibold">
                          SERVICE {service.number}
                        </span>
                        <span className="text-zinc-600">•</span>
                        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-white/[0.03] px-2.5 py-0.5 rounded-full border border-white/[0.06]">
                          <Clock className="w-3 h-3 text-cyan-400" />
                          <span>Typical Delivery: {timeline}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-50 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-zinc-300 text-base max-w-3xl leading-relaxed font-sans">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/8801974544443?text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white text-white hover:text-slate-950 text-xs font-mono font-bold transition-all duration-300 cursor-pointer group/btn shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
                  >
                    <MessageCircle className="w-4 h-4 text-cyan-400 group-hover/btn:text-slate-950 transition-colors" />
                    <span>INQUIRE ABOUT THIS</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* 3-Column Structured Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">

                  {/* Column 1: What I Build */}
                  <div className="md:col-span-4">
                    <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-sm bg-cyan-400" />
                      <span>What I Build</span>
                    </h4>
                    <ul className="space-y-3">
                      {service.whatIBuild.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: What Is Included */}
                  <div className="md:col-span-5">
                    <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-sm bg-emerald-400" />
                      <span>What Is Included</span>
                    </h4>
                    <ul className="space-y-3">
                      {service.included.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Ideal For & Tech */}
                  <div className="md:col-span-3 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold mb-3">
                        Ideal For
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans mb-6">
                        {service.idealFor}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold mb-2">
                        Core Technology
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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
