"use client";

import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();

  const pathname = usePathname();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string, href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setActiveSection(id);
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
    const sections = ['home', 'about', 'timeline', 'contact'];
    
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
    { name: 'Pricing', href: '/pricing', id: 'pricing' },
    { name: 'Projects', href: '/#timeline', id: 'timeline' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ];

  const forceLight = activeSection === 'home' && !scrolled;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        
        {/* Brand/Logo Capsule */}
        <Link href="/#home" onClick={(e) => {
          if (pathname === '/') {
            e.preventDefault();
            const element = document.getElementById('home');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection('home');
          }
        }} className="flex items-center">
          <div className={`group flex items-center gap-2.5 rounded-full px-4 py-2 transition-all duration-500 cursor-pointer ${
            scrolled 
              ? 'glass-strong shadow-md' 
              : (forceLight ? 'border border-white/10 bg-white/5 backdrop-blur-md' : 'glass')
          }`}>
            <div className="relative inline-flex h-7 w-7 items-center justify-center">
              <svg
                className="h-6.5 w-6.5 text-cyan-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
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
            <span className={`text-sm font-semibold tracking-tight font-sans transition-colors duration-500 ${
              forceLight ? 'text-white' : 'text-foreground'
            }`}>saddam.dev</span>
          </div>
        </Link>

        {/* Center Desktop Navigation Capsule */}
        <nav className={`hidden items-center gap-1 rounded-full px-2 py-2 md:flex transition-all duration-500 ${
          scrolled 
            ? 'glass-strong shadow-md' 
            : (forceLight ? 'border border-white/10 bg-white/5 backdrop-blur-md' : 'glass')
        }`}>
          {navItems.map((item) => {
            const isActive = (item.href.startsWith('/#') && activeSection === item.id) || pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.id, item.href)}
                className={`group relative rounded-full px-4 py-1.5 text-sm transition-colors duration-300 ${
                  isActive 
                    ? (forceLight ? 'text-white font-medium' : 'text-foreground font-medium') 
                    : (forceLight ? 'text-white/60 hover:text-white' : 'text-muted-foreground hover:text-foreground')
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Smooth pill background hover & active state */}
                <span className={`absolute inset-0 -z-0 rounded-full transition-all duration-300 ${
                  isActive 
                    ? (forceLight ? 'bg-white/10 opacity-100 scale-100' : 'bg-foreground/10 dark:bg-white/10 opacity-100 scale-100') 
                    : (forceLight ? 'bg-white/5 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100' : 'bg-foreground/5 dark:bg-white/5 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100')
                }`} />
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button & Theme Toggle Container */}
        <div className="flex items-center gap-3">
          {/* Light/Dark Theme Switch Capsule */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`rounded-full p-2.5 transition-all duration-500 ${
              scrolled 
                ? 'glass-strong shadow-sm' 
                : (forceLight ? 'border border-white/10 bg-white/5 backdrop-blur-md' : 'glass')
            }`}
            aria-label="Toggle Theme"
          >
            {mounted ? (
              theme === 'dark' ? (
                <Sun className={`h-4 w-4 transition-all duration-500 ${forceLight ? 'text-white' : 'text-foreground'}`} />
              ) : (
                <Moon className={`h-4 w-4 transition-all duration-500 ${forceLight ? 'text-white' : 'text-foreground'}`} />
              )
            ) : (
              <Moon className={`h-4 w-4 ${forceLight ? 'text-white' : 'text-foreground'}`} />
            )}
          </button>

          {/* Let's Talk CTA button */}
          <Link
            href="/#contact"
            onClick={(e) => handleScrollTo(e, 'lets-connect', '/#contact')}
            className="group relative hidden overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_10px_35px_-10px_rgba(139,92,246,0.6)] md:inline-flex items-center justify-center border border-purple-400/20"
          >
            <span className="relative z-10 transition-colors duration-300">Let's talk</span>
          </Link>

          {/* Mobile Hamburger menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 md:hidden ${
              scrolled 
                ? 'glass-strong shadow-sm' 
                : (forceLight ? 'border border-white/10 bg-white/5 backdrop-blur-md' : 'glass')
            }`}
            aria-label="Toggle Menu"
          >
            <div className="flex h-3 w-5 flex-col justify-between items-center">
              <span className={`h-0.5 w-full transition-all duration-300 origin-center ${
                forceLight ? 'bg-white' : 'bg-foreground'
              } ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`h-0.5 w-full transition-all duration-300 ${
                forceLight ? 'bg-white' : 'bg-foreground'
              } ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
              <span className={`h-0.5 w-full transition-all duration-300 origin-center ${
                forceLight ? 'bg-white' : 'bg-foreground'
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
                const isActive = (item.href.startsWith('/#') && activeSection === item.id) || pathname === item.href;
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
              
              {/* Mobile CTA */}
              <Link
                href="/#contact"
                onClick={(e) => {
                  setIsOpen(false);
                  handleScrollTo(e, 'lets-connect', '/#contact');
                }}
                className="mt-2 w-full text-center rounded-2xl bg-foreground py-3 text-sm font-bold text-background hover:bg-foreground/90 transition-all duration-300"
              >
                Let's talk
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}