'use client';

import React from 'react';
import { ArrowRight, Code, ShoppingCart, Layers, Briefcase, Server, Wrench, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '@/data/services';

interface ServiceCardProps {
  service: ServiceItem;
  onExplore: (anchorId: string) => void;
}

const serviceIcons: Record<string, React.ElementType> = {
  'full-stack': Code,
  'ecommerce': ShoppingCart,
  'saas': Layers,
  'business-apps': Briefcase,
  'api-backend': Server,
  'maintenance': Wrench,
};

export default function ServiceCard({ service, onExplore }: ServiceCardProps) {
  const IconComponent = serviceIcons[service.id] || Code;

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`View full specifications and deliverables for ${service.title}`}
      onClick={() => onExplore(service.anchorId)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onExplore(service.anchorId);
        }
      }}
      className="group relative rounded-2xl border border-white/[0.08] bg-slate-900/40 backdrop-blur-xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900/75 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(34,211,238,0.12),inset_0_1px_0_0_rgba(255,255,255,0.18)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] cursor-pointer text-left overflow-hidden h-full focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
    >
      {/* Top radiant accent line that reveals on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Ambient hover light wash */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

      <div className="relative z-10">
        {/* Card Header: Number + Abstract Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-zinc-400 group-hover:text-cyan-400 transition-colors duration-200 tracking-wider">
              SERVICE {service.number}
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-[10px] font-mono text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded-full border border-white/[0.06]">
              {service.included.length} INCLUDED
            </span>
          </div>

          <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-300 group-hover:text-cyan-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 group-hover:scale-110 group-hover:rotate-[-3deg] transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
            <IconComponent className="w-5 h-5 stroke-[1.8] transition-transform duration-300" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-50 transition-colors duration-200">
          {service.title}
        </h3>

        {/* 2-3 Line Description */}
        <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-6">
          {service.shortDesc}
        </p>

        {/* Best For Section */}
        <div className="mb-6 pt-4 border-t border-white/[0.06]">
          <p className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase mb-2.5 font-semibold">
            Best for:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {service.bestFor.map((item) => (
              <span
                key={item}
                className="text-xs px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-zinc-300 font-sans group-hover:border-white/[0.12] transition-colors duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer: Tags + Small CTA */}
      <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-zinc-400">
          {service.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-zinc-400">
              #{tech}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200 shrink-0 ml-2">
          <span>VIEW SCOPE</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
        </span>
      </div>
    </article>
  );
}
