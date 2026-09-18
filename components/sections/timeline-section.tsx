"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, ArrowUpRight } from "lucide-react";
import { useState, useRef } from "react";

export default function TimelineSection() {
  const projects = [
    {
      id: "cabro",
      title: "Cabro Car Rental",
      subtitle: "(Car Rental Booking)",
      description:
        "A premium luxury and sports car rental booking web application. Features a gorgeous interactive glassmorphic dashboard, real-time car availability tracking, dynamic rental calculators, and checkout options.",
      image: "/cabro.png",
      tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
      liveUrl: "https://cabro.vercel.app/",
      githubUrl: "https://github.com/saddamc/cabro",
      color: "from-amber-400 to-orange-500",
      year: "2024",
      category: "Web App",
    },
    {
      id: "my-crypto-portfolio",
      title: "My Crypto Portfolio",
      subtitle: "(Crypto DeFi Analytics)",
      description:
        "An advanced cryptocurrency portfolio tracking and analytics dashboard. Implements real-time asset tracking, glowing interactive trend charts, dynamic balance calculations, and multi-currency performance sheets.",
      image: "/crypto.png",
      tech: ["React", "TypeScript", "Recharts", "Coingecko API", "TailwindCSS"],
      liveUrl: "https://mycryptoportfolio.vercel.app/",
      githubUrl: "https://github.com/saddamc/my-crypto-portfolio",
      color: "from-purple-500 to-indigo-600",
      year: "2024",
      category: "Web App",
    },
    {
      id: "ecoverabd",
      title: "EcoveraBD Website",
      subtitle: "(Apparel Sourcing Platform)",
      description:
        "A professional Sourcing and apparel platform built with Next.js and TypeScript. Featuring global SEO optimizations, streamlined business profile showcases, and sleek responsive page designs.",
      image: "https://res.cloudinary.com/drtzgyetn/image/upload/v1758044860/EcoveraBD_uh0kk0.png",
      tech: ["Next.js", "TypeScript", "React", "TailwindCSS", "Framer Motion"],
      liveUrl: "https://ecoverabd.com",
      githubUrl: "https://github.com/saddamc",
      color: "from-green-400 to-blue-500",
      year: "2025",
      category: "Next.js",
    },
    {
      id: "net-bazer-sports",
      title: "NetBazer Sports",
      subtitle: "(E-Commerce & Retail)",
      description:
        "A premium sports gear e-commerce platform and dashboard. Designed with stylized dynamic catalog layouts, smooth interactive shopping carts, order checkouts, and custom product sales analytics panels.",
      image: "/sports.png",
      tech: ["Next.js", "Redux Toolkit", "Node.js", "MongoDB", "TailwindCSS"],
      liveUrl: "https://net-bazer.vercel.app/",
      githubUrl: "https://github.com/saddamc/net-bazer-sports",
      color: "from-cyan-400 to-emerald-500",
      year: "2024",
      category: "E-Commerce",
    },
    {
      id: "ecommerce-platform",
      title: "Dashboard / SaaS App",
      subtitle: "(SaaS Analytics Portal)",
      description:
        "A modern web application featuring Firebase user authentication, custom dashboard analytics, calendar planning tables, and full checkout payment integration.",
      image: "https://res.cloudinary.com/drtzgyetn/image/upload/v1757156003/Petco_unkdw6.jpg",
      tech: ["React", "Node.js", "MongoDB", "Stripe Payment", "Firebase"],
      liveUrl: "https://assignment-pets.web.app",
      githubUrl: "https://github.com/saddamc/Assignment-12-client-pets",
      color: "from-fuchsia-400 to-pink-500",
      year: "2023",
      category: "MERN Stack",
    },
    {
      id: "best-machinery",
      title: "Fareetex Machinery",
      subtitle: "(Industrial Garment Machinery Importer)",
      description:
        "A premium B2B industrial garments machinery sourcing and catalog platform. Features multi-category filtering, an interactive machinery technical showroom, and dynamic commercial inquiry tools.",
      image: "/Machine.png",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Shadcn UI"],
      liveUrl: "https://bestmachinery.vercel.app",
      githubUrl: "https://github.com/saddamc",
      color: "from-emerald-400 to-teal-500",
      year: "2026",
      category: "Next.js",
    },
    {
      id: "task-management",
      title: "Book Catalog Portal",
      subtitle: "(EdTech Platform)",
      description:
        "A comprehensive cataloging interface built using Redux Toolkit for complex state management, React Hook Form for validations, and React Router for robust client routing.",
      image: "https://res.cloudinary.com/drtzgyetn/image/upload/v1757168029/Book_ocb8rn.jpg",
      tech: ["React", "TypeScript", "Redux", "TailwindCSS", "Zod"],
      liveUrl: "https://book-4-woad.vercel.app/books",
      githubUrl: "https://github.com/saddamc/book-frontend-4",
      color: "from-blue-400 to-cyan-500",
      year: "2023",
      category: "Frontend",
    },
  ];

  return (
    <section id="timeline" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Latest <span className="gradient-text holographic">Works</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Symmetrical Center Vertical Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-zinc-300 dark:bg-zinc-800/80 opacity-60 rounded-full" />

          {/* Timeline Items */}
          <div className="space-y-40">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Center Node & Symmetrical Connector Arms (Desktop Only) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block w-[120px] h-[20px]">
                  
                  {/* Left horizontal line segment for mockup on left */}
                  {index % 2 === 0 && (
                    <div className={`absolute right-1/2 mr-[10px] top-1/2 -translate-y-1/2 w-[48px] h-[2px] bg-gradient-to-l ${project.color} opacity-40`} />
                  )}
                  
                  {/* Circle dot node */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 bg-background z-30 cursor-pointer flex items-center justify-center shadow-md"
                    style={{ borderColor: index % 2 === 0 ? "rgb(239, 68, 68)" : "rgb(168, 85, 247)" }}
                    whileHover={{ scale: 1.35 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${project.color}`} />
                  </motion.div>

                  {/* Right horizontal line segment for mockup on right */}
                  {index % 2 !== 0 && (
                    <div className={`absolute left-1/2 ml-[10px] top-1/2 -translate-y-1/2 w-[48px] h-[2px] bg-gradient-to-r ${project.color} opacity-40`} />
                  )}
                </div>

                {/* Symmetrical Grid with inward alignment */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                  
                  {/* Mockup Column (Always first on mobile, alternating on desktop) */}
                  <div
                    className={`order-1 flex justify-center w-full ${
                      index % 2 === 0 ? "lg:order-1 lg:justify-end" : "lg:order-2 lg:justify-start"
                    }`}
                  >
                    <div className="w-full max-w-2xl relative">
                      <FullLaptopMockup project={project} priority={index < 2} />
                    </div>
                  </div>

                  {/* Floating Description Details (Aligned inward towards the timeline) */}
                  <div
                    className={`order-2 flex justify-center w-full ${
                      index % 2 === 0 ? "lg:order-2 lg:justify-start lg:pl-12" : "lg:order-1 lg:justify-end lg:pr-12"
                    }`}
                  >
                    <motion.div className="space-y-6 w-full max-w-xl">
                      
                      {/* Subtitled Header */}
                      <div className="space-y-2">
                        <h3 className={`text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <span className={`block text-lg font-bold tracking-wide bg-gradient-to-r ${project.color} bg-clip-text text-transparent opacity-80`}>
                            {project.subtitle}
                          </span>
                        )}
                      </div>

                      {/* Borderless Description text */}
                      <p className="text-muted-foreground text-[16px] md:text-[17px] font-sans leading-relaxed">
                        {project.description}
                      </p>

                      {/* Hashtag Tech Badges */}
                      <div className="flex flex-wrap gap-2.5">
                        {project.tech.map((tech: string) => (
                          <span
                            key={tech}
                            className="bg-zinc-100/5 dark:bg-white/5 border border-zinc-200/10 dark:border-white/5 rounded-full px-3.5 py-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400 transition-colors hover:border-zinc-200/20"
                          >
                            #{tech.toLowerCase()}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-4 pt-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-[#FACC15] hover:bg-[#EAB308] text-black font-bold rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(250,204,21,0.25)] hover:shadow-[0_4px_20px_rgba(250,204,21,0.45)] group/btn text-sm w-fit"
                        >
                          Live Site
                          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                        </a>
                        
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 border border-zinc-300 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 font-semibold rounded-full transition-all duration-300 text-sm group/git"
                          >
                            GitHub
                            <svg className="w-4 h-4 fill-current group-hover/git:rotate-12 transition-transform duration-300" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FullLaptopMockup({ project, priority = false }: { project: any; priority?: boolean }) {
  const [translateY, setTranslateY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = () => {
    if (containerRef.current && imageRef.current) {
      const containerHeight = containerRef.current.clientHeight;
      const imageHeight = imageRef.current.clientHeight;
      if (imageHeight > containerHeight) {
        setTranslateY(containerHeight - imageHeight);
      }
    }
  };

  const handleMouseLeave = () => {
    setTranslateY(0);
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.015,
      }}
      className="relative z-10 group perspective-1000"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block relative max-w-2xl mx-auto">
        {/* MacBook Display Screen Frame */}
        <div className="relative bg-zinc-950 rounded-t-[20px] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
          {/* Inner Black Screen Bezel */}
          <div className="bg-black rounded-xl p-[5px] relative overflow-hidden">
            {/* Screen Content Bezel ratio */}
            <div 
              ref={containerRef}
              className="relative overflow-hidden rounded-lg bg-zinc-950 aspect-[16/10]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 z-10 pointer-events-none`}
              />
              
              {/* Scrolling long screenshot image container */}
              <div className="absolute inset-0 top-7 overflow-hidden">
                <Image
                  ref={imageRef}
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={1200}
                  style={{
                    transform: `translateY(${translateY}px)`,
                    transition: "transform 4s cubic-bezier(0.43, 0.13, 0.23, 0.96)"
                  }}
                  className="w-full h-auto absolute top-0 left-0 object-cover"
                  unoptimized
                  loading={priority ? "eager" : "lazy"}
                  priority={priority}
                />
              </div>



              {/* Browser Header Bar */}
              <div className="absolute top-0 left-0 right-0 h-7 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center px-4 z-30">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <div className="flex-1 mx-4 truncate text-center">
                  <span className="text-[9px] text-zinc-500 dark:text-zinc-400 bg-white dark:bg-zinc-950 rounded px-3 py-0.5 border border-zinc-200 dark:border-zinc-800 inline-block truncate max-w-[200px]">
                    {project.liveUrl}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Keyboard Base Bar representing the MacBook base */}
        <div className="bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 rounded-b-2xl h-[12px] relative shadow-xl border-t border-zinc-600" />
        {/* Trackpad indentation notch */}
        <div className="bg-zinc-950/80 rounded-b-[4px] h-[3px] mx-auto w-[92%]" />

        {/* Dynamic Glow Glow Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-700 -z-10 scale-105`}
        />

        {/* Reflection */}
        <div className="absolute -bottom-10 left-0 right-0 h-10 bg-gradient-to-b from-white/5 to-transparent transform scale-y-[-1] opacity-15 blur-sm" />

        {/* Shadow */}
        <div className="absolute -bottom-6 left-4 right-4 h-4 bg-black/40 rounded-full blur-lg" />
      </a>
    </motion.div>
  );
}
