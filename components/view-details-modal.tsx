"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Sparkles,
  Code2,
  Database,
  Terminal,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  CheckCircle2,
  Award,
  Rocket,
  Flame,
  Check,
  Truck,
  Car,
  ShoppingBag,
  LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

interface ViewDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = "overview" | "skills" | "impact" | "standards";

export default function ViewDetailsModal({
  isOpen,
  onClose,
}: ViewDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const tabs: { id: TabType; label: string; icon: LucideIcon }[] = [
    { id: "overview", label: "Executive Story", icon: Layers },
    { id: "skills", label: "Technical Arsenal", icon: Code2 },
    { id: "impact", label: "Proven Impact", icon: Rocket },
    { id: "standards", label: "The Standard", icon: ShieldCheck },
  ];

  const stats = [
    {
      value: "3+",
      label: "Years Experience",
      detail: "Full-Stack Web Engineering",
      glow: "from-teal-400 to-emerald-400",
    },
    {
      value: "50+",
      label: "Shipped Projects",
      detail: "Production SaaS & Web Apps",
      glow: "from-cyan-400 to-blue-400",
    },
    {
      value: "99+",
      label: "Lighthouse Score",
      detail: "Zero Compromise On Speed",
      glow: "from-emerald-400 to-teal-300",
    },
    {
      value: "100%",
      label: "On-Time Delivery",
      detail: "Clean Architecture & Syncs",
      glow: "from-indigo-400 to-purple-400",
    },
  ];

  const skillCategories = [
    {
      title: "Frontend Architecture",
      icon: Code2,
      color: "from-teal-400 to-cyan-500",
      accent: "text-teal-300 bg-teal-500/10 border-teal-500/20",
      skills: [
        "Next.js 15 (App Router)",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Redux Toolkit",
        "Shadcn UI",
        "Server Actions",
        "Responsive UI/UX",
      ],
    },
    {
      title: "Backend & Cloud DBs",
      icon: Database,
      color: "from-cyan-400 to-blue-500",
      accent: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB (Mongoose)",
        "PostgreSQL",
        "REST APIs",
        "JWT Authentication",
        "RBAC Authorization",
        "Cloudinary CDN",
        "API Query Optimization",
      ],
    },
    {
      title: "AI & Modern Automation",
      icon: Cpu,
      color: "from-emerald-400 to-teal-500",
      accent: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
      skills: [
        "OpenAI / Gemini API Integration",
        "Intelligent Prompt Workflows",
        "Document Parsing Engines",
        "Automated Bulk Excel Processors",
        "Cloud Webhooks & Web Sockets",
      ],
    },
    {
      title: "DevOps & Engineering Tooling",
      icon: Terminal,
      color: "from-indigo-400 to-purple-500",
      accent: "text-indigo-300 bg-indigo-500/10 border-indigo-500/20",
      skills: [
        "Git & GitHub Versioning",
        "Docker Containerization",
        "Vercel CI/CD Deployment",
        "Zod Schema Validation",
        "Postman API Testing",
        "Vite & Webpack",
        "Core Web Vitals Audit",
      ],
    },
  ];

  const caseStudies = [
    {
      title: "ShaplaTrade International",
      subtitle: "China-Bangladesh Cross-Border Logistics Platform",
      icon: Truck,
      color: "from-amber-400 via-orange-500 to-red-500",
      tag: "Enterprise Logistics",
      highlights: [
        "Real-time 9-stage route tracking from Guangzhou to Dhaka hubs",
        "Custom operations console with carton reconciliation and manifests",
        "Automated bulk Excel batch processor for high-volume commercial invoices",
      ],
      tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Route Engine"],
      link: "https://www.shaplatrade.com",
    },
    {
      title: "Alvis Rent a Car",
      subtitle: "Chauffeur Booking & Operations Admin Dashboard",
      icon: Car,
      color: "from-red-400 via-rose-500 to-amber-500",
      tag: "Operations & Fleet",
      highlights: [
        "Live vehicle fleet tracking (12+ cars) and 19+ on-duty chauffeur dispatch",
        "Interactive Google Maps route pricing calculators and automated slips",
        "Executive business analytics pipeline with bilingual (EN/BN) conversion",
      ],
      tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Google Maps"],
      link: "https://alviscarbd.com",
    },
    {
      title: "Plain Stitch",
      subtitle: "Ultra-Fast Headless E-Commerce Experience",
      icon: ShoppingBag,
      color: "from-blue-400 via-indigo-500 to-sky-400",
      tag: "Headless E-Commerce",
      highlights: [
        "Sub-second page transitions decoupling WordPress WooCommerce with Next.js",
        "Dynamic multi-attribute variation galleries and instant cart mutation",
        "SEO-maximized architecture resulting in 98+ mobile Lighthouse score",
      ],
      tech: ["Next.js", "Headless WordPress", "WooCommerce", "TypeScript"],
      link: "https://www.plainstitch.net/",
    },
  ];

  const standards = [
    {
      icon: Zap,
      title: "60fps Fluid Micro-Interactions",
      description:
        "Every button, modal, and drawer is engineered with physics-based spring curves (Framer Motion), specular liquid glass bevels, and zero layout shifts.",
      badge: "UX Excellence",
    },
    {
      icon: ShieldCheck,
      title: "Zero Technical Debt Architecture",
      description:
        "Strict TypeScript typing, modular folder patterns, encapsulated custom hooks, and sanitized database queries that scale without breaking.",
      badge: "Clean Architecture",
    },
    {
      icon: Award,
      title: "Sub-Second Core Web Vitals",
      description:
        "Leveraging Next.js App Router, Server Components, AVIF/WebP image pipelines, and edge font caching to guarantee 95+ Lighthouse performance.",
      badge: "Maximum Speed",
    },
    {
      icon: CheckCircle2,
      title: "Predictable & Transparent Delivery",
      description:
        "Clear Git commits, daily milestones, real-time testing links, and proactive communication. When I commit to a deadline, it gets delivered.",
      badge: "Reliability Guarantee",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
          {/* Backdrop with Deep Frosted Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-2xl"
            onClick={onClose}
          />

          {/* Luxury Apple Vision Pro Liquid Glass Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", stiffness: 360, damping: 28 }}
            className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-slate-950/90 border border-white/15 rounded-3xl sm:rounded-[2.5rem] shadow-[0_25px_80px_rgba(0,0,0,0.95),inset_0_1.5px_2px_rgba(255,255,255,0.25)] overflow-hidden text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Apple Specular Top Rim Highlight */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-30" />

            {/* Ambient Background Gradient Lighting */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Modal Header Bar */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-6 sm:px-10 pt-6 sm:pt-7 pb-4 border-b border-white/10 bg-slate-950/40 backdrop-blur-md">
              <div className="flex items-center gap-3">
                {/* Live Availability Radar Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 text-xs font-extrabold tracking-wider uppercase shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                  </span>
                  <span>Available For Hire</span>
                </div>

                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-teal-400/30 bg-teal-500/10 text-teal-300 text-xs font-bold tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Saddam Hossain</span>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="h-10 w-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-105 cursor-pointer shadow-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Apple Segmented Controller (Tabs) */}
            <div className="relative z-10 px-6 sm:px-10 pt-4 pb-2 border-b border-white/10 bg-slate-950/20">
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer ${
                        isActive
                          ? "text-white"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeModalTabPill"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/25 via-cyan-500/25 to-emerald-500/25 border border-teal-400/50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),_0_0_20px_rgba(20,184,166,0.35)]"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <Icon className={`relative z-10 w-4 h-4 transition-colors ${isActive ? "text-teal-300" : "text-zinc-400 group-hover:text-zinc-200"}`} />
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scrollable Modal Content Body */}
            <div className="relative z-10 flex-1 overflow-y-auto px-6 sm:px-10 py-6 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
              {/* TAB 1: EXECUTIVE STORY */}
              {activeTab === "overview" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-7"
                >
                  {/* Hero Identity Banner */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent border border-white/15 relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 space-y-3 max-w-3xl">
                      <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-teal-300 uppercase font-semibold">
                        ARCHITECT • FULL-STACK ENGINEER • AI BUILDER
                      </p>
                      <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight text-white">
                        Bridging{" "}
                        <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                          World-Class Aesthetics
                        </span>{" "}
                        With Bulletproof Architecture.
                      </h2>
                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans pt-1">
                        I specialize in designing and engineering high-impact digital applications. 
                        Whether building real-time cross-border cargo dispatch engines, scalable SaaS portals, or lightning-fast e-commerce platforms, 
                        my mission is simple: deliver software that outperforms competitors in speed, security, and conversion.
                      </p>

                      <div className="pt-3 flex flex-wrap items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-xs text-zinc-200">
                          <Check className="w-3.5 h-3.5 text-teal-400" /> Next.js 15 & React 19 Expert
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-xs text-zinc-200">
                          <Check className="w-3.5 h-3.5 text-cyan-400" /> Enterprise REST & DB Scaling
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-xs text-zinc-200">
                          <Check className="w-3.5 h-3.5 text-emerald-400" /> AI API Automation
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* High-Impact Bento Stats Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                    {stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl backdrop-blur-xl bg-white/[0.05] border border-white/15 hover:border-teal-400/40 shadow-lg relative overflow-hidden group transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className={`text-3xl sm:text-4xl font-black tracking-tight bg-gradient-to-r ${stat.glow} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white mt-1">
                          {stat.label}
                        </div>
                        <div className="text-[11px] text-zinc-400 mt-0.5 font-medium">
                          {stat.detail}
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>

                  {/* Core Value Proposition Statement */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        <Flame className="w-4 h-4 text-amber-400" />
                        <span>Why Work With Saddam?</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl">
                        You get an experienced engineer who takes full ownership of both frontend perfection and backend integrity. No hand-off friction, no excuses—just exceptional products delivered on schedule.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab("impact")}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-teal-400/40 bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 text-xs font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <span>Explore Case Studies</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: TECHNICAL ARSENAL */}
              {activeTab === "skills" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        Production-Proven Tech Stack
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Modern, scalable technologies battle-tested in commercial applications.
                      </p>
                    </div>
                    <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400">
                      Full-Stack Architecture
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skillCategories.map((category, idx) => (
                      <div
                        key={idx}
                        className="p-5 sm:p-6 rounded-2xl backdrop-blur-xl bg-white/[0.04] border border-white/15 hover:border-teal-400/30 transition-all duration-300 space-y-4 shadow-lg group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`p-2.5 rounded-xl bg-gradient-to-r ${category.color} text-slate-950 font-bold shadow-md group-hover:scale-105 transition-transform duration-300`}>
                              <category.icon className="w-5 h-5" />
                            </div>
                            <h4 className="text-base font-bold text-white">
                              {category.title}
                            </h4>
                          </div>
                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${category.accent}`}>
                            Verified
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {category.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1.5 rounded-xl bg-white/[0.06] border border-white/10 text-xs font-medium text-zinc-200 hover:text-white hover:border-teal-400/50 hover:bg-teal-500/15 transition-all duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* TAB 3: PROVEN IMPACT */}
              {activeTab === "impact" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        Flagship Production Achievements
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Real platforms driving real revenue and mission-critical daily operations.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {caseStudies.map((study, idx) => (
                      <div
                        key={idx}
                        className="p-5 sm:p-6 rounded-2xl backdrop-blur-xl bg-white/[0.04] border border-white/15 hover:border-teal-400/40 transition-all duration-300 space-y-4 shadow-xl group relative overflow-hidden"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className={`p-2.5 rounded-xl bg-gradient-to-r ${study.color} text-slate-950 font-bold shadow-md`}>
                              <study.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                                {study.title}
                              </h4>
                              <p className="text-xs text-zinc-400">
                                {study.subtitle}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/5 border border-white/15 text-zinc-300">
                              {study.tag}
                            </span>
                            <a
                              href={study.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold hover:bg-teal-500/20 transition-all"
                            >
                              <span>Visit Live</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>

                        {/* Bullets */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
                          {study.highlights.map((item, i) => (
                            <div
                              key={i}
                              className="p-3 rounded-xl bg-black/25 border border-white/5 text-xs text-zinc-300 flex items-start gap-2"
                            >
                              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Tag Pills */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-white/5">
                          {study.tech.map((t) => (
                            <span
                              key={t}
                              className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-white/5 text-zinc-400"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* TAB 4: THE STANDARD */}
              {activeTab === "standards" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        The Saddam Hossain Engineering Standard
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        The non-negotiable principles baked into every single line of code.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {standards.map((std, idx) => (
                      <div
                        key={idx}
                        className="p-5 sm:p-6 rounded-2xl backdrop-blur-xl bg-white/[0.04] border border-white/15 hover:border-teal-400/40 transition-all duration-300 space-y-3 shadow-lg group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-300 group-hover:scale-110 transition-transform duration-300">
                            <std.icon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-300">
                            {std.badge}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white">
                          {std.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                          {std.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Quality Seal */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-950/40 via-cyan-950/30 to-slate-900/40 border border-teal-500/20 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-teal-400 shrink-0" />
                    <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                      Every deliverable comes with complete clean documentation, responsive cross-browser testing across Safari/Chrome/Firefox, and 30-day post-launch warranty support.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Modal Bottom Action & Direct Conversion Hub */}
            <div className="relative z-10 px-6 sm:px-10 py-4 sm:py-5 border-t border-white/10 bg-slate-950/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Standalone Apple Liquid Glass Social Pebbles */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
                <span className="text-xs font-semibold text-zinc-400 hidden md:inline">
                  Direct:
                </span>
                <div className="flex items-center gap-2.5">
                  {/* GitHub */}
                  <a
                    href="https://github.com/saddamc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center w-9 h-9 rounded-full backdrop-blur-xl bg-white/[0.08] hover:bg-white/20 border border-white/20 hover:border-white/60 text-white shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.4),_0_2px_8px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/saddam-hossain-09299535/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center w-9 h-9 rounded-full backdrop-blur-xl bg-[#0077b5]/15 hover:bg-[#0077b5]/30 border border-[#0077b5]/40 hover:border-[#0077b5]/80 text-white shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.4),_0_2px_8px_rgba(0,0,0,0.25),_0_0_10px_rgba(0,119,181,0.3)] transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4 text-white hover:text-[#38bdf8] drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]" />
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:saddam13bd@gmail.com"
                    className="relative flex items-center justify-center w-9 h-9 rounded-full backdrop-blur-xl bg-cyan-500/15 hover:bg-cyan-500/30 border border-cyan-400/40 hover:border-cyan-400/80 text-white shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.4),_0_2px_8px_rgba(0,0,0,0.25),_0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label="Email Saddam"
                  >
                    <Mail className="w-4 h-4 text-white hover:text-cyan-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]" />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/8801974544443"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center w-9 h-9 rounded-full backdrop-blur-xl bg-emerald-500/15 hover:bg-emerald-500/30 border border-emerald-400/40 hover:border-emerald-400/80 text-white shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.4),_0_2px_8px_rgba(0,0,0,0.25),_0_0_10px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 text-white hover:text-emerald-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]" />
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    const contactSection = document.getElementById("lets-connect") || document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/15 text-white font-semibold text-xs tracking-wide transition-all duration-300 cursor-pointer shadow-md"
                >
                  Send A Message
                </button>

                <a
                  href="https://wa.me/8801974544443?text=Hi%20Saddam!%20I%20reviewed%20your%20About%20Us%20profile%20and%20would%20love%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-extrabold text-xs tracking-wide shadow-[0_4px_20px_rgba(20,184,166,0.4)] hover:shadow-[0_6px_25px_rgba(20,184,166,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
