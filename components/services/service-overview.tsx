'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services, ServiceItem } from '@/data/services';
import ServiceCard from './service-card';
import { Sparkles, Layers } from 'lucide-react';

const filterCategories = [
  { id: 'all', label: 'All Services (6)' },
  { id: 'full-stack', label: 'Full-Stack' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'saas', label: 'SaaS' },
  { id: 'business-apps', label: 'Business Apps' },
  { id: 'api-backend', label: 'APIs & Backend' },
  { id: 'maintenance', label: 'Maintenance' },
];

export default function ServiceOverview() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleExplore = (anchorId: string) => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter((s) => s.id === activeCategory);

  return (
    <section id="services-overview" className="py-24 px-6 border-b border-white/[0.06] relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Sparkles className="w-3 h-3" />
              <span>CORE ARCHITECTURAL OFFERINGS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              From idea to production-ready product.
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-sans">
              Clear, reliable software engineering built to solve tangible business problems, without unnecessary complexity.
            </p>
          </motion.div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Click any card to inspect full deliverables & scope</span>
          </div>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto scrollbar-none">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-cyan-400 text-slate-950 font-bold shadow-[0_0_18px_rgba(34,211,238,0.35)]'
                  : 'bg-white/[0.03] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
          {activeCategory !== 'all' && (
            <button
              onClick={() => setActiveCategory('all')}
              className="px-3 py-1.5 rounded-full text-[11px] font-mono text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 bg-cyan-500/10 transition-colors cursor-pointer"
            >
              ✕ Reset to All (6)
            </button>
          )}
        </div>

        {/* 6 Editorial Service Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <ServiceCard service={service} onExplore={handleExplore} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
