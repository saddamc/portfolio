'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Search, Sparkles, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Ported and enhanced project data from Latest Works
const projects = [
  {
    id: 'shapla-trade',
    title: 'ShaplaTrade International',
    subtitle: 'China-Bangladesh Cargo & Freight Courier',
    category: 'Full Stack',
    description:
      'An enterprise cross-border logistics and freight forwarding platform operating the Guangzhou to Dhaka trade corridor. Features real-time air/sea shipment route tracking with 9-stage milestone progress, shipment-wise management consoles with carton reconciliation, an executive operations dashboard with visual lifecycle pipelines, automated bulk Excel rate/weight batch processors with issue validation, and commercial invoicing.',
    image: '/shapla.png',
    tech: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Route Tracking', 'Shipment Console', 'Excel Engine', 'Air & Sea Cargo'],
    liveUrl: 'https://www.shaplatrade.com',
  },
  {
    id: 'alvis-car-rental',
    title: 'Alvis Rent a Car',
    subtitle: 'Car Rental, Dispatch & Admin Dashboard',
    category: 'Full Stack',
    description:
      'A full-featured car rental & chauffeur booking platform with an executive Admin Operations Panel. Features live fleet tracking (12+ vehicles), driver dispatch readiness (19+ on-duty drivers), booking pipeline & conversion analytics, interactive Google Maps route calculators, automated airport slips, and bilingual support (EN/BN).',
    image: '/alvis.png',
    tech: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Admin Dashboard', 'Fleet Dispatch', 'Google Maps'],
    liveUrl: 'https://alviscarbd.com',
  },
  {
    id: 'plain-stitch',
    title: 'Plain Stitch',
    subtitle: 'Headless WordPress E-Commerce',
    category: 'Full Stack',
    description:
      'A high-speed headless fashion e-commerce platform built with Next.js and WordPress REST API. Features dynamic category filtering, interactive product variant galleries, instant cart management, and seamless order checkouts.',
    image: '/plainstitch.png',
    tech: ['Next.js', 'Headless WordPress', 'WooCommerce', 'TypeScript', 'TailwindCSS'],
    liveUrl: 'https://www.plainstitch.net/',
  },
  {
    id: 'fareetex-international',
    title: 'Fareetex International',
    subtitle: 'Industrial Garment Machinery Importer',
    category: 'Full Stack',
    description:
      'A premium B2B industrial garments machinery sourcing and catalog platform. Features multi-category filtering, an interactive machinery technical showroom, and dynamic commercial inquiry tools.',
    image: '/Machine.png',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Shadcn UI'],
    liveUrl: 'https://fareetexinternational.com',
  },
  {
    id: 'petco-platform',
    title: 'Dashboard / SaaS App',
    subtitle: 'Pet Adoption & SaaS Portal',
    category: 'Full Stack',
    description:
      'A full-featured pet adoption and animal care platform with Firebase authentication, interactive adoption campaign dashboards, foster workflows, and secure Stripe payment integration.',
    image: '/petco.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe Payment', 'Firebase'],
    liveUrl: 'https://assignment-pets.web.app',
  },
  {
    id: 'my-crypto-portfolio',
    title: 'My Crypto Portfolio',
    subtitle: 'Crypto News & Live Market Platform',
    category: 'Full Stack',
    description:
      'A modern cryptocurrency news and live market tracking platform. Features real-time coin price updates (Bitcoin, Ethereum, BNB), instant asset search modals, breaking editorial feeds, and in-depth article readers.',
    image: '/crypto.png',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'CoinGecko API', 'Redux'],
    liveUrl: 'https://mycryptoportfolio.vercel.app/',
  },
  {
    id: 'harigurus',
    title: 'Harigurus',
    subtitle: 'Event Booking',
    category: 'Full Stack',
    description:
      'HariGurus is a one-stop-shop for Hindu religious, customs, and traditional requirements. Designed and built the complete full-stack website from scratch.',
    image: 'https://images.unsplash.com/photo-1515165562835-c202d9a8c861?auto=format&fit=crop&w=1200&q=80',
    tech: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'Swiper.js', 'CSS', 'JavaScript'],
    liveUrl: 'https://www.harigurus.com/',
  },
  {
    id: 'eazygrad',
    title: 'EazyGrad',
    subtitle: 'EdTech Startup',
    category: 'Full Stack',
    description:
      'Led development to revamp the startup website into a highly responsive, modern, and interactive experience. Crafted new features and core user-journey flows.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Swiper.js', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://eazygrad.com/',
  },
  {
    id: 'web-dev-english',
    title: 'Web Dev English',
    subtitle: 'Coaching & Consulting',
    category: 'WordPress',
    description:
      'US-based English Coach consulting website engineered to attract and guide tech professionals, showcasing improved layout and responsive design.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tech: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://webdevenglish.com/',
  },
  {
    id: 'money-arjan-solutions',
    title: 'Money Arjan Solutions',
    subtitle: 'Software Agency',
    category: 'Frontend',
    description:
      'Designed and coded the official agency site from scratch with Figma concepts, implementing a contact form integrated with Netlify.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tech: ['HTML', 'CSS', 'Bootstrap', 'Netlify', 'Figma'],
    liveUrl: 'https://money-arjan.netlify.app/',
  },
  {
    id: 'pioneer-digital',
    title: 'Pioneer Digital',
    subtitle: 'Digital Marketing Agency',
    category: 'Frontend',
    description:
      'Created a dynamic, beautiful corporate website for a marketing agency, focusing on micro-interactions, responsive sizing, and interactive components.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tech: ['JavaScript', 'Bootstrap', 'CSS', 'Sass', 'HTML', 'Figma'],
    liveUrl: 'https://digi-drive.netlify.app/',
  },
  {
    id: 'track-my-expense',
    title: 'Track My Expense',
    subtitle: 'Finance WebApp',
    category: 'Full Stack',
    description:
      'A personal finance monthly expense tracking WebApp. Fully equipped with modern secure session management, responsive charts, and robust backend logic.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Passport', 'EJS', 'CSS', 'REST API'],
    liveUrl: 'https://www.createios.in/',
  },
  {
    id: 'currency-converter',
    title: 'Currency Converter',
    subtitle: 'Productivity Tool',
    category: 'Frontend',
    description:
      'A sleek currency converter application displaying real-time exchange rates, offering currency exchange math, custom graphs, and history logs.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tech: ['React.js', 'JavaScript', 'CSS', 'AJAX', 'Fetch API', 'Figma'],
    liveUrl: 'https://currency-converter-by-anurag.netlify.app/',
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'WordPress'];

export default function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering Logic
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden py-24 px-6 md:px-12 lg:px-24">
      {/* Background ambient lighting blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-muted/65 border border-border/80 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide text-primary"
          >
            <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
            <span>Interactive Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100"
          >
            <span className="sr-only">Projects</span>
            <span aria-hidden="true">My Created <span className="gradient-text">Works</span></span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Explore my collection of software applications, frontend developments, and full-stack solutions.
          </motion.p>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-card/40 border border-border/80 p-4 rounded-3xl backdrop-blur-md">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <div className="flex bg-muted/80 p-1.5 rounded-2xl border border-border/50">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-xl transition-colors select-none",
                      isActive ? "text-gray-900 dark:text-gray-100" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryIndicator"
                        className="absolute inset-0 bg-background border border-border shadow-sm rounded-xl"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-muted-foreground" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search project or technology..."
              className="w-full pl-9 pr-4 py-2.5 text-sm rounded-2xl bg-muted/80 border border-border/60 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all outline-none text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative"
              >
                {/* Floating particle/glow behind the card on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

                <Card className="glass card-hover h-full flex flex-col overflow-hidden border border-white/10 dark:border-white/5 rounded-[2rem]">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Project Image Container */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Ambient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                      {/* Pill Badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">
                          {project.category}
                        </span>
                      </div>

                      {/* Small Live indicator */}
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-green-500/90 text-white text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-0.5 rounded-full border border-green-400/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        <span>Live</span>
                      </div>

                      <div className="absolute bottom-4 left-6 right-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-bold mb-1">
                          {project.subtitle}
                        </p>
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>

                        {/* Technology tags */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-muted/90 border border-border/80 text-muted-foreground select-none"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Link Section */}
                      <div className="pt-6 border-t border-border/50 mt-6">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-all duration-300 group/link"
                        >
                          <span>Visit Live Website</span>
                          <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 bg-muted/30 border border-dashed border-border/60 rounded-3xl mt-8"
          >
            <Filter className="w-12 h-12 text-muted-foreground/60 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-foreground">No projects found</h4>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto mt-2">
              Try adjusting your category filter or keyword search to discover other projects.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
