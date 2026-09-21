'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Globe, Server, Shield, Zap } from 'lucide-react';

export default function HeroAbstractVisual() {
  const floatingCards = [
    {
      icon: Globe,
      title: 'Next.js 15 App Router',
      tag: 'Edge SSR • 99 Lighthouse',
      color: 'text-cyan-400',
      bgGlow: 'from-cyan-500/10',
      position: 'top-3 left-2 sm:top-6 sm:-left-6',
      animDelay: 0,
    },
    {
      icon: Server,
      title: 'Type-Safe Node APIs',
      tag: 'REST & Webhooks',
      color: 'text-blue-400',
      bgGlow: 'from-blue-500/10',
      position: 'top-1/3 right-2 sm:-right-8',
      animDelay: 0.8,
    },
    {
      icon: Database,
      title: 'PostgreSQL & MongoDB',
      tag: 'Prisma ORM • ACID Safe',
      color: 'text-emerald-400',
      bgGlow: 'from-emerald-500/10',
      position: 'bottom-4 left-2 sm:bottom-8 sm:-left-4',
      animDelay: 1.6,
    },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square select-none">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-radial-gradient from-cyan-500/15 via-blue-500/5 to-transparent blur-3xl opacity-80 pointer-events-none" />

      {/* Main architectural SVG canvas */}
      <svg
        className="w-full h-full pointer-events-none"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lineGlowCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="branchGradient" x1="0%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
          </linearGradient>

          <radialGradient id="nodeRadial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>

          <pattern id="archGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-white/[0.04] dark:text-white/[0.06]"
            />
          </pattern>
        </defs>

        {/* Coordinate grid frame */}
        <rect width="500" height="500" fill="url(#archGrid)" />
        <rect
          x="30"
          y="30"
          width="440"
          height="440"
          rx="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-white/[0.08]"
        />

        {/* Corner alignment crosshairs */}
        <path d="M 25 30 L 35 30 M 30 25 L 30 35" stroke="rgba(34,211,238,0.5)" strokeWidth="1" />
        <path d="M 465 30 L 475 30 M 470 25 L 470 35" stroke="rgba(34,211,238,0.5)" strokeWidth="1" />
        <path d="M 25 470 L 35 470 M 30 465 L 30 475" stroke="rgba(34,211,238,0.5)" strokeWidth="1" />
        <path d="M 465 470 L 475 470 M 470 465 L 470 475" stroke="rgba(34,211,238,0.5)" strokeWidth="1" />

        {/* Structural architectural isometric planes */}
        <motion.path
          d="M 80 180 L 220 100 L 360 160 L 220 240 Z"
          fill="rgba(34,211,238,0.02)"
          stroke="currentColor"
          strokeWidth="1"
          className="text-white/10"
          initial={{ pathLength: 0.8, opacity: 0.5 }}
          animate={{ pathLength: [0.8, 1, 0.8], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.path
          d="M 140 280 L 280 200 L 420 260 L 280 340 Z"
          fill="rgba(59,130,246,0.02)"
          stroke="currentColor"
          strokeWidth="1"
          className="text-white/10"
          initial={{ pathLength: 0.9, opacity: 0.4 }}
          animate={{ pathLength: [0.9, 1, 0.9], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* Flowing primary energy pipeline */}
        <motion.path
          d="M 80 380 C 140 380, 180 280, 240 250 C 300 220, 340 160, 420 140"
          fill="none"
          stroke="url(#lineGlowCyan)"
          strokeWidth="2.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        />

        {/* Milestone Node 1: DISCOVER */}
        <g transform="translate(80, 380)">
          <circle r="14" fill="url(#nodeRadial)" />
          <circle r="4" fill="#22d3ee" />
          <circle r="8" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
          <text x="-12" y="24" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="monospace" letterSpacing="0.1em">
            01.SCOPE
          </text>
        </g>

        {/* Milestone Node 2: ARCH */}
        <g transform="translate(240, 250)">
          <circle r="16" fill="url(#nodeRadial)" opacity="0.8" />
          <circle r="4" fill="#38bdf8" />
          <circle r="9" fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.6" />
          <text x="-12" y="-14" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="monospace" letterSpacing="0.1em">
            02.ARCH
          </text>
        </g>

        {/* Milestone Node 3: CODE */}
        <g transform="translate(330, 190)">
          <circle r="12" fill="url(#nodeRadial)" opacity="0.7" />
          <circle r="3.5" fill="#60a5fa" />
          <circle r="7" fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.5" />
          <text x="14" y="4" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="monospace" letterSpacing="0.1em">
            03.BUILD
          </text>
        </g>

        {/* Milestone Node 4: DEPLOY */}
        <g transform="translate(420, 140)">
          <motion.circle
            r="18"
            fill="url(#nodeRadial)"
            animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <circle r="5" fill="#ffffff" />
          <circle r="10" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
          <text x="-18" y="-16" fill="#22d3ee" fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="0.1em">
            04.DEPLOY
          </text>
        </g>

        {/* Pulse spark moving along the line */}
        <motion.circle
          r="3.5"
          fill="#ffffff"
          filter="drop-shadow(0 0 8px #22d3ee)"
          animate={{
            cx: [80, 160, 240, 330, 420],
            cy: [380, 320, 250, 190, 140],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      {/* Floating Interactive Architecture Node Cards */}
      {floatingCards.map((card, idx) => (
        <motion.div
          key={idx}
          animate={{
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: card.animDelay,
          }}
          className={`absolute ${card.position} z-20 flex items-center gap-2.5 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-white/[0.12] bg-slate-900/90 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-cyan-400/40 transition-colors pointer-events-auto max-w-[220px] sm:max-w-none`}
        >
          <div className={`p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] ${card.color}`}>
            <card.icon className="w-4 h-4" />
          </div>
          <div className="text-left">
            <span className="block text-xs font-bold text-white tracking-tight">{card.title}</span>
            <span className="block text-[10px] font-mono text-zinc-400">{card.tag}</span>
          </div>
        </motion.div>
      ))}

      {/* Central Health Status Tag */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-slate-950/90 border border-emerald-500/30 text-[11px] font-mono text-emerald-400 flex items-center gap-2 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)] z-10 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>SYSTEM ARCHITECTURE • ACTIVE</span>
      </div>
    </div>
  );
}
