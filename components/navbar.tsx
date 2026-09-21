"use client";

import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, ArrowUpRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Magnetic from '@/components/ui/magnetic';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, resolvedTheme, setTheme } = useTheme();

  const pathname = usePathname();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string, href: string) => {
    const targetId = (id === 'contact' || id === 'lets-connect') ? 'lets-connect' : id;
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setActiveSection(targetId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll Spy to track active section
  useEffect(() => {
    const sections = ['home', 'about', 'timeline', 'lets-connect'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -55% 0px', // Adjusted to trigger accurately when scrolling
      threshold: 0.15,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Fallback for top of page
    const handleScrollSpyFallback = () => {
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };
    window.addEventListener('scroll', handleScrollSpyFallback);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollSpyFallback);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/#home', id: 'home' },
    { name: 'Services', href: '/services', id: 'services' },
    { name: 'Projects', href: '/#timeline', id: 'timeline' },
    { name: 'Contact', href: '/#lets-connect', id: 'lets-connect' },
  ];

  const isServicesPage = pathname === '/services';
  const isHomeHero = (pathname === '/' || pathname === '') && !scrolled;
  const isDarkCanvas = isServicesPage || isHomeHero || (mounted ? (resolvedTheme === 'dark' || theme === 'dark') : false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        
        {/* Brand/Logo Capsule */}
        <Link
          href="/#home"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              const element = document.getElementById('home');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
              setActiveSection('home');
            }
          }}
          className="flex items-center"
          aria-label="Saddam Hossain Home"
        >
          <div
            className={`group flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 cursor-pointer ${
              scrolled
                ? (isDarkCanvas 
                    ? 'border border-white/15 bg-slate-950/70 backdrop-blur-xl shadow-md hover:border-cyan-400/50' 
                    : 'glass-strong shadow-md hover:border-cyan-400/50')
                : (isDarkCanvas
                    ? 'border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/25 hover:bg-white/10'
                    : 'glass hover:border-cyan-400/50')
            }`}
          >
            <svg
              className="h-5.5 w-5.5 text-cyan-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8.5 4h7a4 4 0 0 1 0 8h-7a4 4 0 0 0 0 8h7" />
            </svg>
          </div>
        </Link>

        {/* Center Desktop Navigation Capsule */}
        <nav className={`hidden items-center gap-1 rounded-full px-2 py-2 md:flex transition-all duration-500 ${
          scrolled 
            ? (isDarkCanvas 
                ? 'border border-white/15 bg-slate-950/70 backdrop-blur-xl shadow-lg' 
                : 'glass-strong shadow-md')
            : (isDarkCanvas ? 'border border-white/10 bg-white/5 backdrop-blur-md' : 'glass')
        }`}>
          {navItems.map((item) => {
            const isActive = (pathname === '/' && item.href.startsWith('/#') && activeSection === item.id) || pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.id, item.href)}
                className={`group relative rounded-full px-4 py-1.5 text-sm transition-colors duration-300 ${
                  isActive 
                    ? (isDarkCanvas ? 'text-white font-medium' : 'text-foreground font-medium') 
                    : (isDarkCanvas ? 'text-white/70 hover:text-white' : 'text-muted-foreground hover:text-foreground')
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Smooth pill background hover & active state */}
                <span className={`absolute inset-0 -z-0 rounded-full transition-all duration-300 ${
                  isActive 
                    ? (isDarkCanvas ? 'bg-white/15 opacity-100 scale-100' : 'bg-foreground/10 opacity-100 scale-100') 
                    : (isDarkCanvas ? 'bg-white/10 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100' : 'bg-foreground/5 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100')
                }`} />
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button Container */}
        <div className="flex items-center gap-3">
          {/* Desktop Theme Toggle Pill */}
          <button
            onClick={() => setTheme((resolvedTheme || theme) === 'dark' ? 'light' : 'dark')}
            className={`hidden md:flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
              isDarkCanvas
                ? 'border border-white/15 bg-white/10 text-white hover:bg-white/20 hover:border-white/30'
                : 'border border-slate-900/15 bg-slate-900/5 text-slate-800 hover:bg-slate-900/10 hover:border-slate-900/25'
            }`}
            aria-label="Toggle theme"
            title={mounted && (resolvedTheme || theme) === 'dark' ? 'Switch to Light theme' : 'Switch to Dark theme'}
          >
            {mounted ? (
              (resolvedTheme || theme) === 'dark' ? (
                <Sun className="h-4 w-4 text-amber-400 hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="h-4 w-4 text-cyan-600 hover:-rotate-12 transition-transform duration-300" />
              )
            ) : (
              <Sun className="h-4 w-4 text-amber-500 opacity-60" />
            )}
          </button>

          {/* Let's Talk CTA button — Apple Translucent "Water Droplet" Glass + Magnetic Physics */}
          <Magnetic range={45} strength={0.25} className="hidden md:inline-block">
            <Link
              href="/#lets-connect"
              onClick={(e) => handleScrollTo(e, 'lets-connect', '/#lets-connect')}
              className={`lets-talk-btn group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full backdrop-blur-xl transition-all duration-300 ease-out hover:scale-105 active:scale-95 cursor-pointer overflow-hidden ${
                isDarkCanvas ? 'lets-talk-btn-dark' : ''
              }`}
              aria-label="Let's talk - Scroll to contact"
            >
              {/* Apple Specular Curved Glass Bevel Overlay */}
              <div className={`absolute inset-0 rounded-full pointer-events-none ${
                isDarkCanvas
                  ? 'bg-gradient-to-b from-white/25 via-transparent to-black/20'
                  : 'bg-gradient-to-b from-white/50 via-transparent to-black/5'
              }`} />

              {/* Specular Liquid Light Sheen Sweep */}
              <div className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none ${
                isDarkCanvas
                  ? 'bg-gradient-to-r from-transparent via-white/35 to-transparent'
                  : 'bg-gradient-to-r from-transparent via-slate-900/10 to-transparent'
              }`} />

              {/* Cyan Live Status Radar Beacon */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
              </span>

              {/* Button Text */}
              <span className="cta-label relative z-10 text-sm tracking-wide">
                Let's talk
              </span>

              {/* Micro-Arrow Icon */}
              <ArrowUpRight className="cta-arrow relative z-10 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Magnetic>

          {/* Mobile Hamburger menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 md:hidden ${
              scrolled 
                ? (isDarkCanvas 
                    ? 'border border-white/15 bg-slate-950/70 backdrop-blur-xl shadow-md' 
                    : 'glass-strong shadow-sm')
                : (isDarkCanvas ? 'border border-white/10 bg-white/5 backdrop-blur-md' : 'glass')
            }`}
            aria-label="Toggle Menu"
          >
            <div className="flex h-3 w-5 flex-col justify-between items-center">
              <span className={`h-0.5 w-full transition-all duration-300 origin-center ${
                isDarkCanvas ? 'bg-white' : 'bg-foreground'
              } ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`h-0.5 w-full transition-all duration-300 ${
                isDarkCanvas ? 'bg-white' : 'bg-foreground'
              } ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
              <span className={`h-0.5 w-full transition-all duration-300 origin-center ${
                isDarkCanvas ? 'bg-white' : 'bg-foreground'
              } ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Glass Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="mx-auto max-w-7xl px-6 md:hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -12 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="mt-4 rounded-3xl p-4 glass-strong border border-border/40 shadow-xl flex flex-col gap-2.5"
            >
              {navItems.map((item) => {
                const isActive = (pathname === '/' && item.href.startsWith('/#') && activeSection === item.id) || pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      setIsOpen(false);
                      handleScrollTo(e, item.id, item.href);
                    }}
                    className={`px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-foreground/10 dark:bg-white/10 text-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              
              {/* Mobile Theme Toggle */}
              <button
                onClick={() => setTheme((resolvedTheme || theme) === 'dark' ? 'light' : 'dark')}
                className="flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-foreground/5 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer"
              >
                <span>Theme</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs capitalize text-muted-foreground">
                    {mounted ? ((resolvedTheme || theme) === 'dark' ? 'Dark' : 'Light') : 'Light'}
                  </span>
                  {mounted && (resolvedTheme || theme) === 'dark' ? (
                    <Sun className="h-4 w-4 text-amber-400" />
                  ) : (
                    <Moon className="h-4 w-4 text-cyan-500" />
                  )}
                </div>
              </button>

              {/* Mobile CTA */}
              <div className="mt-2">
                <Link
                  href="/#lets-connect"
                  onClick={(e) => {
                    setIsOpen(false);
                    handleScrollTo(e, 'lets-connect', '/#lets-connect');
                  }}
                  className={`lets-talk-btn group relative w-full flex items-center justify-center gap-2.5 rounded-2xl backdrop-blur-xl py-3 px-4 text-sm font-semibold active:scale-95 transition-all duration-300 overflow-hidden ${
                    isDarkCanvas ? 'lets-talk-btn-dark' : ''
                  }`}
                  aria-label="Let's talk - Scroll to contact"
                >
                  <div className={`absolute inset-0 rounded-2xl pointer-events-none ${
                    isDarkCanvas
                      ? 'bg-gradient-to-b from-white/20 via-transparent to-black/20'
                      : 'bg-gradient-to-b from-white/50 via-transparent to-black/5'
                  }`} />
                  
                  {/* Cyan Live Status Radar Beacon */}
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                  </span>

                  <span className="cta-label relative z-10 text-sm tracking-wide">
                    Let's talk
                  </span>
                  <ArrowUpRight className="cta-arrow relative z-10 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}