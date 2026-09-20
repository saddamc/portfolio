'use client';

import SkillCard from '@/components/skill-card';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Zap, Sparkles, Layers, Gauge, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const skills = [
  {
    icon: Code,
    name: 'Frontend Development',
    description: 'Crafting responsive, high-speed, and pixel-perfect web interfaces with modern component architecture.',
    tags: ['React', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Database,
    name: 'Backend Development',
    description: 'Engineering resilient, scalable server architectures, secure RESTful APIs, and efficient database models.',
    tags: ['Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'REST APIs'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    name: 'MERN Stack Developer',
    description: 'Delivering end-to-end full-stack applications with seamless frontend, backend, and database integration.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Next.js'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Brain,
    name: 'Problem Solving',
    description: 'Diagnosing complex system bugs, optimizing bottlenecks, and architecting elegant algorithmic solutions.',
    tags: ['System Architecture', 'Performance', 'Clean Code', 'Debugging'],
    color: 'from-orange-500 to-red-500'
  }
];

const approachPillars = [
  {
    icon: Layers,
    title: 'Clean Architecture',
    tagline: 'Modular & Maintainable',
    description: 'Writing type-safe, modular, and DRY codebases with reusable component systems designed to scale effortlessly without technical debt.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Gauge,
    title: 'Performance First',
    tagline: 'Sub-Second Speed',
    description: 'Engineering for 95+ Core Web Vitals with optimized bundles, server components, smart caching, and zero layout shift.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Sparkles,
    title: 'User Delight',
    tagline: 'Intuitive & Accessible',
    description: 'Translating complex workflows into intuitive, fluid interfaces with smooth 60fps micro-interactions and WCAG accessibility standards.',
    color: 'from-purple-500 to-pink-500'
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Subtle Gradient Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(120,119,198,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Who I Am & What I Do</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight text-foreground">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Me</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
            I'm a passionate full-stack developer dedicated to crafting modern, high-performance web applications.
            I love turning complex engineering challenges into simple, elegant, and intuitive digital solutions.
          </p>
        </motion.div>

        {/* 4 Skill Cards with directional stagger + 360-degree hover glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-40px' }}
              className="skill-card-wrapper"
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>

        {/* Interactive "My Approach" Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="aboutMe-card p-8 md:p-12 relative overflow-hidden">
            {/* Ambient inner background glows */}
            <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Approach Header */}
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Engineering Philosophy</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">
                  My Development Approach
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  I believe writing clean code is only the foundation. Delivering resilient, high-speed,
                  and human-centered software is the standard I hold for every build.
                </p>
              </div>

              {/* 3 Interactive Pillars with stagger scale+fade entrance + 360-degree hover glow */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {approachPillars.map((pillar, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 24, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="approach-pillar p-6 flex flex-col group cursor-pointer relative overflow-hidden"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={cn(
                        "w-11 h-11 rounded-xl flex items-center justify-center p-[1.5px] bg-gradient-to-br shadow-sm transition-transform duration-300 group-hover:scale-110",
                        pillar.color
                      )}>
                        <div className="w-full h-full rounded-[10px] bg-card flex items-center justify-center transition-colors group-hover:bg-transparent">
                          <pillar.icon className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-muted-foreground/80 block">
                          {pillar.tagline}
                        </span>
                        <h4 className="text-base font-bold text-foreground">
                          {pillar.title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mt-1">
                      {pillar.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}