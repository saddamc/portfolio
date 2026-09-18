"use client";

import Navbar from "@/components/navbar";
import ContactSection from "@/components/sections/contact-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Code,
  Cpu,
  Share2,
  Smartphone,
  Laptop,
  Check,
  Layers,
} from "lucide-react";

export default function ServicesPage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const services = [
    {
      id: "fullstack",
      title: "Full-Stack Web Apps",
      badge: "Performance & Growth",
      icon: Code,
      color: "from-amber-400 to-orange-500",
      description: "Scalable, lightning-fast platforms engineered for growth, conversions, and modern user experiences.",
      specs: [
        "Headless CMS integration (Sanity, Strapi)",
        "Stripe Multi-Currency Payment Gateways",
        "Responsive, cross-device optimized interface",
        "State management with Redux Toolkit / Zustand",
        "SEO architecture targeting global keywords",
      ],
      whatsappMsg: "Hi Saddam! I am interested in building a Full-Stack Web Application with you.",
    },
    {
      id: "ai",
      title: "Custom GPT & AI Automation",
      badge: "Emerging Tech / LLMs",
      icon: Cpu,
      color: "from-purple-500 to-indigo-600",
      description: "Intelligent AI models and workflow automations engineered to supercharge your business intelligence.",
      specs: [
        "Private document Vector Databases (Pinecone, pgvector)",
        "LangChain & LlamaIndex AI workflow agents",
        "Bespoke chat widgets trained on custom dataset",
        "Automated voice transcription & image analysis",
        "API connectors for Claude, ChatGPT, and DeepSeek",
      ],
      whatsappMsg: "Hi Saddam! I'm interested in building a Custom GPT / AI integration for my business.",
    },
    {
      id: "social",
      title: "Social Media Automation Engines",
      badge: "Growth Marketing Tools",
      icon: Share2,
      color: "from-cyan-400 to-emerald-500",
      description: "Programmatic social content systems that auto-publish, capture high-quality leads, and scale authority.",
      specs: [
        "Automated programmatic posting APIs",
        "Real-time social engagement tracker charts",
        "Custom content generation pipeline interfaces",
        "Audience segment analytics dashboards",
        "Lead capture sheets and auto-replies setup",
      ],
      whatsappMsg: "Hi Saddam! I want to set up an automated Social Media Sourced growth engine.",
    },
    {
      id: "mobile",
      title: "Hybrid Mobile Applications",
      badge: "Cross-Platform Apps",
      icon: Smartphone,
      color: "from-pink-500 to-fuchsia-600",
      description: "Sleek, high-performance hybrid iOS and Android applications built for outstanding 60FPS mobile interactions.",
      specs: [
        "Single codebase deployment for iOS & Android",
        "Smooth native animations and gestures",
        "Offline caching & localized SQL storage",
        "Push notification campaigns with Firebase",
        "App Store & Google Play publishing setup",
      ],
      whatsappMsg: "Hi Saddam! I would love to build a premium Mobile Application with you.",
    },
    {
      id: "uiux",
      title: "UI/UX & Interactive Design Systems",
      badge: "Premium Design",
      icon: Laptop,
      color: "from-blue-500 to-cyan-600",
      description: "Cinematic design systems featuring custom typography, dark mode tokens, and fluid wireframe assets.",
      specs: [
        "High-fidelity responsive UI prototyping",
        "Reusable, structured design token systems",
        "Curated, custom color system configurations",
        "Micro-animations & transitions mapping",
        "Cross-platform design consistency checks",
      ],
      whatsappMsg: "Hi Saddam! I need interactive UI/UX design & layout systems for my platform.",
    },
    {
      id: "devops",
      title: "Enterprise Cloud & DevOps Solutions",
      badge: "DevOps & Cloud Systems",
      icon: Layers,
      color: "from-emerald-400 to-teal-500",
      description: "High-availability cloud setups, secure container clusters, and automated continuous deployment pipelines.",
      specs: [
        "Automated CI/CD build pipelines (GitHub Actions)",
        "Serverless deploy models (Vercel, AWS Amplify)",
        "Dockerized environments & Kubernetes clusters",
        "Encrypted database clusters & SSL certificates",
        "Global edge caching and DNS routing setups",
      ],
      whatsappMsg: "Hi Saddam! I'm looking for modern DevOps, CI/CD, or Cloud setup support.",
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

      {/* Hero Header Section */}
      <section className="relative pt-36 pb-12 px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-purple-500/10 border border-purple-500/30 text-purple-400 mb-6 px-4.5 py-1 text-xs uppercase tracking-widest font-mono">
              Expertise & Services
            </Badge>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Building Digital Experiences<br />
              <span className="gradient-text holographic font-black">That Feel Ahead Of Their Time</span>
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
              Elite digital product engineering structured for high-performance scale, immersive design layouts, and seamless artificial intelligence workflows.
            </p>
          </motion.div>

          {/* Floating Tech Stack Pills */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16 max-w-2xl mx-auto"
          >
            {["Next.js", "TypeScript", "AI Solutions", "MongoDB", "AWS DevOps", "OpenAI"].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs sm:text-sm text-zinc-300 backdrop-blur-xl font-mono"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Section Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

          {/* Animated Number Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {[
              { number: "25+", label: "Projects Completed" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "10+", label: "Technologies" },
              { number: "24/7", label: "Support" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl flex flex-col items-center justify-center text-center hover:border-purple-500/20 transition-all duration-300 group"
              >
                <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent mb-2 font-mono group-hover:scale-105 transition-transform duration-300">
                  {item.number}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-sans font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Grid Layout for Services Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-20">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  whileHover={{
                    y: -10,
                    rotateX: 4,
                    rotateY: -4,
                    scale: 1.02,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  className="flex cursor-pointer"
                >
                  <Card className="bg-slate-900/30 backdrop-blur-xl border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-500 rounded-3xl overflow-hidden flex flex-col justify-between w-full relative group">
                    {/* Spotlight Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

                    {/* Top Accent Gradient strip */}
                    <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${service.color} opacity-60`} />

                    <CardContent className="p-8 sm:p-10 flex-1 flex flex-col justify-between relative z-10">
                      <div>
                        {/* Title Row */}
                        <div className="flex items-start justify-between mb-6">
                          <span className={`p-3 rounded-2xl bg-gradient-to-br ${service.color} text-black shrink-0 shadow-lg`}>
                            <Icon className="w-6 h-6" />
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-mono">
                            {service.badge}
                          </span>
                        </div>

                        <h3 className="text-xl font-extrabold text-white mb-4 text-left tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed text-left mb-6 font-sans">
                          {service.description}
                        </p>

                        {/* Bullet Spec Checklist */}
                        <div className="space-y-3.5 mb-8">
                          {service.specs.map((spec) => (
                            <div key={spec} className="flex items-start gap-2.5">
                              <span className={`p-0.5 rounded-full bg-gradient-to-br ${service.color} text-black mt-1 shrink-0`}>
                                <Check className="w-3 h-3" />
                              </span>
                              <span className="text-zinc-300 text-xs sm:text-sm text-left leading-relaxed font-sans">
                                {spec}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Direct WhatsApp Call to Action */}
                      <a
                        href={`https://wa.me/8801974544443?text=${encodeURIComponent(service.whatsappMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-4"
                      >
                        <Button className="relative overflow-hidden rounded-2xl border border-white/10 bg-white text-black hover:scale-[1.02] transition-all duration-300 font-bold w-full py-6 group/btn text-sm">
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            Inquire Now
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </span>
                          {/* Premium Shine Effect */}
                          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Proven Process Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-purple-500/10 border border-purple-500/30 text-purple-400 mb-4 px-4.5 py-1 text-xs uppercase tracking-widest font-mono">
              How We Work
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Proven <span className="gradient-text holographic font-black">Process</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              { step: "01", name: "Discovery", desc: "Deep diving into your business objectives, target audience, and engineering needs." },
              { step: "02", name: "Planning", desc: "Architecting the visual wireframes, design system tokens, and tech stack blueprint." },
              { step: "03", name: "Development", desc: "Writing pixel-perfect Next.js routes, integrating AI models, and optimizing pipelines." },
              { step: "04", name: "Launch", desc: "Rigorous performance audits, automated DevOps deployments, and seamless transfer." },
            ].map((item, index) => (
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
      </section>

      {/* Embedded Connect Form Box */}
      <ContactSection />
    </div>
  );
}