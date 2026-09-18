"use client";

import Navbar from "@/components/navbar";
import ContactSection from "@/components/sections/contact-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Check,
  HelpCircle,
  ArrowRight,
  Shield,
  Zap,
  Maximize2,
  TrendingUp,
} from "lucide-react";

export default function PricingPage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const plans = [
    {
      name: "Starter",
      price: "$299",
      description: "Modern responsive website for startups and personal brands.",
      color: "from-amber-400 to-orange-500",
      features: [
        "Responsive design",
        "Next.js frontend",
        "Basic SEO setup",
        "Contact form integration",
        "Deployment included",
      ],
    },
    {
      name: "Professional",
      price: "$999",
      popular: true,
      description: "Advanced full-stack platform for businesses and scaling brands.",
      color: "from-purple-500 to-indigo-600",
      features: [
        "Full-stack development",
        "Authentication system",
        "Dashboard & CMS",
        "API integrations",
        "Performance optimization",
        "Advanced animations",
      ],
    },
    {
      name: "Enterprise AI",
      price: "Custom",
      description: "Custom AI systems, GPT integrations, and enterprise automation.",
      color: "from-cyan-400 to-emerald-500",
      features: [
        "Custom GPT systems",
        "AI automation workflows",
        "Vector database setup",
        "Cloud infrastructure",
        "Dedicated architecture",
        "Priority support",
      ],
    },
  ];

  const trustHighlights = [
    { icon: Zap, title: "Fast Delivery", desc: "Rapid deployment sprints without cutting corners." },
    { icon: Shield, title: "Modern Architecture", desc: "Clean Next.js, React, and serverless technology." },
    { icon: Maximize2, title: "SEO Optimized", desc: "Built with high Lighthouse performance and meta tag guidelines." },
    { icon: TrendingUp, title: "Scalable Infrastructure", desc: "Easily grow your platform with modular database designs." },
  ];

  const faqs = [
    {
      question: "What is the typical project delivery time?",
      answer: "Starter projects are generally deployed in 5-10 business days. Professional custom web apps average 3-4 weeks, while Enterprise AI integrations depend on system complexity.",
    },
    {
      question: "Are post-launch revisions included?",
      answer: "Yes! Every pricing package includes 14 days of complimentary post-launch support and bug warranties. Extra feature revisions can be added modularly.",
    },
    {
      question: "Is hosting and domain setup included?",
      answer: "Absolutely. I configure complete deployment pipelines using Vercel, Netlify, or AWS, and link your custom business domains with secure SSL configurations.",
    },
    {
      question: "Can AI models be integrated into existing code?",
      answer: "Yes, I can design modular Custom GPT widgets, LangChain search systems, or LLM automation layers that plug seamlessly into your pre-existing systems.",
    },
    {
      question: "What are the accepted payment methods?",
      answer: "I accept secure card payments, standard bank transfers, Wise transfers, and popular cryptocurrency portals. Projects are typically billed on a 50% start / 50% launch structure.",
    },
  ];

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-slate-950 text-white font-sans selection:bg-purple-500/30 relative overflow-hidden"
    >
      <Navbar />

      {/* Premium Mouse Follow Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(168,85,247,0.12), transparent 80%)`,
        }}
      />

      {/* Premium Background System */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />
      </div>

      {/* Pricing Package Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Typography */}
          <div className="text-center mb-20">
            <Badge className="bg-purple-500/10 border border-purple-500/30 text-purple-400 mb-6 px-4.5 py-1 text-xs uppercase tracking-widest font-mono">
              Pricing Strategy
            </Badge>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Transparent Pricing Plans<br />
              <span className="gradient-text holographic font-black">Built For Startups & Brands</span>
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
              World-class Next.js design systems, full-stack backends, and AI pipelines engineered for premium conversions.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-28">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex"
              >
                <Card className={`relative overflow-hidden rounded-3xl border ${
                  plan.popular ? 'border-purple-500/50 shadow-[0_0_40px_rgba(139,92,246,0.2)]' : 'border-white/10'
                } bg-white/[0.03] backdrop-blur-xl flex flex-col justify-between w-full relative group`}>
                  
                  {/* Spotlight Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

                  {/* Top Accent Gradient strip */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${plan.color} opacity-60`} />

                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-5 right-5 z-10">
                      <Badge className="bg-purple-500 text-white font-bold tracking-widest uppercase text-[10px] px-3.5 py-1 shadow-lg">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-8 sm:p-10 flex-1 flex flex-col justify-between relative z-10">
                    <div>
                      {/* Name & Title */}
                      <div className="mb-6">
                        <h3 className={`text-2xl font-extrabold tracking-tight mb-2 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                          {plan.name}
                        </h3>
                        <p className="text-zinc-400 text-xs sm:text-sm font-sans">{plan.description}</p>
                      </div>

                      {/* Pricing Tag */}
                      <div className="mb-8">
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
                            {plan.price}
                          </span>
                          {plan.price !== "Custom" && (
                            <span className="text-zinc-500 text-sm font-semibold">/project</span>
                          )}
                        </div>
                      </div>

                      {/* Bullet Specs */}
                      <div className="space-y-4 mb-8">
                        {plan.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-3">
                            <span className={`p-0.5 rounded-full bg-gradient-to-br ${plan.color} text-black mt-1 shrink-0`}>
                              <Check className="w-3.5 h-3.5" />
                            </span>
                            <span className="text-zinc-300 text-sm leading-relaxed text-left font-sans">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* WhatsApp CTA Action Button */}
                    <a
                      href={`https://wa.me/8801974544443?text=${encodeURIComponent(`Hi Saddam! I'm interested in the ${plan.name} package.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-4"
                    >
                      <Button className={`w-full rounded-2xl py-6 font-bold transition-all duration-300 ${
                        plan.popular
                          ? `bg-gradient-to-r ${plan.color} text-white hover:opacity-95 shadow-lg`
                          : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                      } flex items-center justify-center gap-2 group/btn`}>
                        Start Project
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Section Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />

          {/* Trust Banner Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <Badge className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-4 px-4.5 py-1 text-xs uppercase tracking-widest font-mono">
                My Core Standards
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Engineered For <span className="gradient-text holographic font-black">High-Performance</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {trustHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.title} 
                    className="p-6 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-xl text-left hover:border-white/10 transition-colors duration-300"
                  >
                    <span className="p-3.5 rounded-2xl bg-white/5 text-purple-400 inline-block mb-4">
                      <Icon className="w-5 h-5" />
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed font-sans">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Proven Process Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <Badge className="bg-purple-500/10 border border-purple-500/30 text-purple-400 mb-4 px-4.5 py-1 text-xs uppercase tracking-widest font-mono">
                Project Roadmap
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Proven Development <span className="gradient-text holographic font-black">Process</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                { step: "01", name: "Discovery", desc: "Gathering structural requirements, target audiences, and project planning parameters." },
                { step: "02", name: "UI Design", desc: "Crafting beautiful high-fidelity dashboard wireframes and color guides." },
                { step: "03", name: "Development", desc: "Programming responsive frontend routes, APIs, and AI integrations." },
                { step: "04", name: "Launch", desc: "Rigorous performance optimization checks, secure deployments, and code handovers." },
              ].map((item) => (
                <div 
                  key={item.step} 
                  className="relative group p-8 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-xl hover:border-purple-500/30 transition-all duration-500 text-left"
                >
                  <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 blur-2xl rounded-full group-hover:from-purple-500/10 transition-all" />
                  <span className="text-5xl font-black bg-gradient-to-br from-purple-500/20 to-cyan-400/20 bg-clip-text text-transparent font-mono mb-6 block">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Structured FAQ Section */}
          <div className="max-w-4xl mx-auto text-left relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-4 px-4.5 py-1 text-xs uppercase tracking-widest font-mono">
                FAQs
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Frequently Asked <span className="gradient-text holographic font-black">Questions</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-slate-900/20 backdrop-blur-md border border-zinc-800/60 p-6 sm:p-8 rounded-3xl hover:border-zinc-700/60 transition-colors duration-300"
                >
                  <div className="flex gap-3.5 items-start">
                    <HelpCircle className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white text-base sm:text-lg mb-3">
                        {faq.question}
                      </h4>
                      <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Global Interactive Connect Form */}
      <ContactSection />
    </div>
  );
}