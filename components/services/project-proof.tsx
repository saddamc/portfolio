'use client';

import React from 'react';
import { realProjectsProof, RealProjectProof } from '@/data/services';
import { ExternalLink, ArrowRight, Lock, CheckCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projectImages: Record<string, { src: string; alt: string; metrics: string }> = {
  'shaplatrade': {
    src: '/shapla.png',
    alt: 'ShaplaTrade International logistics freight platform',
    metrics: '9-Stage Route Tracker • Bulk Excel Engine',
  },
  'alvis-car': {
    src: '/alvis.png',
    alt: 'Alvis Rent a Car fleet dispatch operations portal',
    metrics: '12+ Fleet Tracking • Google Maps API',
  },
  'plain-stitch': {
    src: '/plainstitch.png',
    alt: 'Plain Stitch headless fashion e-commerce storefront',
    metrics: 'Headless WooCommerce • Sub-Second Speed',
  },
  'petco-portal': {
    src: '/petco.png',
    alt: 'Pet Adoption & Care SaaS Portal',
    metrics: 'RBAC Auth • Stripe Multi-Currency',
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectProof() {
  return (
    <section id="proof" className="py-24 px-6 border-b border-white/[0.06] relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto text-left">

        {/* Section Header */}
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
              <span>PROVEN PRODUCTION CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              SEE THE WORK
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-sans">
              Real software systems engineered for actual businesses and production users. Here is how my services translate into deployed products.
            </p>
          </motion.div>

          <div className="flex items-center gap-3">
            <Link
              href="/#timeline"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-cyan-400/40 text-xs font-mono text-zinc-300 hover:text-white transition-all"
            >
              <span>VIEW ALL IN HOME TIMELINE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 2x2 Grid of Real Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {realProjectsProof.map((project: RealProjectProof) => {
            const imgData = projectImages[project.id];
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group rounded-3xl border border-white/[0.1] bg-slate-900/40 backdrop-blur-xl overflow-hidden flex flex-col justify-between hover:border-cyan-400/50 hover:bg-slate-900/60 transition-all duration-400 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.12)] relative"
              >
                {/* Project Screenshot — Browser Mockup Frame */}
                {imgData && (
                  <div className="relative w-full overflow-hidden bg-slate-950 border-b border-white/[0.08]">
                    {/* Browser Chrome Bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      </div>

                      {/* Mock URL bar with SSL lock */}
                      <div className="flex-1 max-w-xs mx-4 h-6 rounded-md bg-white/[0.04] border border-white/[0.08] flex items-center px-2.5 gap-1.5 text-zinc-400">
                        <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                        <span className="font-mono text-[10px] text-zinc-300 truncate">
                          {project.liveUrl?.replace('https://', '') ?? 'production.app'}
                        </span>
                      </div>

                      {/* Live Badge */}
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="hidden sm:inline">LIVE</span>
                      </div>
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                      <Image
                        src={imgData.src}
                        alt={imgData.alt}
                        fill
                        className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Vignette fade at bottom */}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-900/90 to-transparent pointer-events-none" />

                      {/* Floating Key Metrics Pill */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-cyan-300 shadow-md">
                          {imgData.metrics}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-8 sm:p-10 flex flex-col flex-1">
                  <div>
                    {/* Meta */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                        {project.serviceCategory}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        {project.role}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-50 transition-colors">
                      {project.name}
                    </h3>

                    {/* Problem Solved */}
                    <p className="text-sm text-zinc-300 leading-relaxed font-sans mb-6">
                      {project.problemSolved}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-8">
                      {project.highlights.map((h, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-zinc-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Technologies & CTA */}
                  <div className="pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white hover:text-cyan-300 transition-colors"
                          aria-label={`Visit ${project.name} live`}
                        >
                          <span>LIVE SITE</span>
                          <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                        </a>
                      )}

                      <Link
                        href={project.internalRoute}
                        className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                      >
                        <span>TIMELINE</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
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
