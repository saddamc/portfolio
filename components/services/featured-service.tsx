'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Cpu, Code2, Activity, Database, Sparkles } from 'lucide-react';

const benefits = [
  {
    title: 'Modular, Type-Safe Architecture',
    desc: 'End-to-end TypeScript from database models to client state, preventing runtime bugs and simplifying long-term maintenance.',
  },
  {
    title: 'Sub-Second Page Transitions & Core Vitals',
    desc: 'Server-side rendering, intelligent caching, and clean CSS ensure instant loads and 95+ Google Lighthouse scores.',
  },
  {
    title: 'Enterprise Authentication & Role Access',
    desc: 'Multi-tenant schemas, secure session tokens, and granular permission guards designed to protect sensitive client data.',
  },
  {
    title: '100% Repository & Code Ownership',
    desc: 'Clean Git history, environment configuration documentation, and complete handoff with zero proprietary lock-in.',
  },
];

const statsData = [
  { label: 'Active Modules', val: '14', change: 'All Verified' },
  { label: 'Avg Latency', val: '38ms', change: 'Edge Cached' },
  { label: 'DB Query Time', val: '1.1ms', change: 'Indexed' },
];

const pipelinesData = [
  { name: 'Next.js 15 App Router & SSR', type: 'Frontend Engine', status: 'Healthy', color: 'text-emerald-400 bg-emerald-500/10' },
  { name: 'Type-Safe REST & Webhook Handlers', type: 'API Architecture', status: 'Active', color: 'text-cyan-400 bg-cyan-500/10' },
  { name: 'PostgreSQL / Prisma Connection Pool', type: 'Database Layer', status: 'Synced', color: 'text-purple-400 bg-purple-500/10' },
  { name: 'Granular Role (RBAC) Permission Guards', type: 'Security Gate', status: 'Enforced', color: 'text-emerald-400 bg-emerald-500/10' },
];

const sampleCode = `// Production Type-Safe Server Action
export async function createOrder(data: OrderInput) {
  const session = await authGuard(Role.OPERATOR);
  const validated = OrderSchema.parse(data);

  const result = await db.order.create({
    data: {
      ...validated,
      assignedTo: session.userId,
      status: "DISPATCH_READY",
      auditTrail: { create: { event: "CREATED" } }
    }
  });

  revalidatePath("/dashboard/orders");
  return { success: true, trackingNumber: result.id };
}`;

export default function FeaturedService() {
  const [activeTab, setActiveTab] = useState<'pipelines' | 'code' | 'vitals'>('pipelines');

  return (
    <section className="py-24 px-6 border-b border-white/[0.06] bg-slate-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-40 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: Architectural Philosophy & Value */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>FLAGSHIP CORE SERVICE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Full-Stack Web Development
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-sans mb-8">
              A complete, unified approach to modern product engineering. I build end-to-end platforms where the frontend interface, backend business logic, database models, and deployment infrastructure work together harmoniously.
            </p>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3.5"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-cyan-300 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">{benefit.title}</h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="https://wa.me/8801974544443?text=Hi%20Saddam!%20I'd%20like%20to%20discuss%20a%20Full-Stack%20Web%20Development%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-950 font-bold text-sm transition-all duration-300 hover:bg-cyan-50 hover:shadow-[0_0_28px_rgba(34,211,238,0.35)] active:scale-95 cursor-pointer shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
            >
              <span>INQUIRE ABOUT FULL-STACK</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right Column: Abstract Product UI Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl sm:rounded-3xl border border-white/[0.12] bg-slate-900/80 backdrop-blur-xl p-5 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.15)] overflow-hidden text-left">

              {/* Window Controls Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
                  <span className="ml-3 font-mono text-xs text-zinc-400">core-platform.production.app</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Uptime 99.98%</span>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="flex items-center gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setActiveTab('pipelines')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                    activeTab === 'pipelines'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                      : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-transparent'
                  }`}
                >
                  Architecture
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('code')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                    activeTab === 'code'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                      : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-transparent'
                  }`}
                >
                  Type-Safe Code
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('vitals')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                    activeTab === 'vitals'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                      : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-transparent'
                  }`}
                >
                  Vitals & Health
                </button>
              </div>

              {/* Mock Dashboard Grid */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {statsData.map((stat) => (
                  <div key={stat.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                      {stat.label}
                    </span>
                    <span className="block text-xl font-bold font-mono text-white mb-0.5">
                      {stat.val}
                    </span>
                    <span className="block text-[10px] font-mono text-cyan-400 font-semibold">
                      {stat.change}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tab Content Display */}
              <div className="rounded-xl border border-white/[0.08] bg-black/40 overflow-hidden mb-4 min-h-[190px] flex flex-col justify-center">
                {activeTab === 'pipelines' && (
                  <div className="divide-y divide-white/[0.04] text-xs font-mono">
                    {pipelinesData.map((row) => (
                      <div key={row.name} className="px-4 py-3 flex items-center justify-between">
                        <div>
                          <span className="block text-zinc-200 font-semibold">{row.name}</span>
                          <span className="block text-[10px] text-zinc-400">{row.type}</span>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border border-white/10 ${row.color}`}>
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'code' && (
                  <div className="p-4 font-mono text-[11px] leading-relaxed text-zinc-300 overflow-x-auto">
                    <pre className="text-cyan-300/90 whitespace-pre-wrap">{sampleCode}</pre>
                  </div>
                )}

                {activeTab === 'vitals' && (
                  <div className="p-5 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">First Contentful Paint (FCP)</span>
                      <span className="text-emerald-400 font-bold">0.4s (Pass)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Largest Contentful Paint (LCP)</span>
                      <span className="text-emerald-400 font-bold">0.8s (Pass)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Cumulative Layout Shift (CLS)</span>
                      <span className="text-emerald-400 font-bold">0.00 (Zero Shift)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Edge Cache Hit Ratio</span>
                      <span className="text-cyan-400 font-bold">99.4%</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Illustrative Architecture Notice */}
              <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-zinc-400">
                <span>PRODUCTION ARCHITECTURE SPECIFICATION</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  STABLE
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
