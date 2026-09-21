"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import ViewDetailsModal from "../view-details-modal";
import ButterflyField from "../butterfly-field";
import TypewriterText from "../typewriter-text";
import { useTheme } from "next-themes";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const heroRef = useRef<HTMLElement>(null);
  const bgParallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isNightMode = mounted ? (resolvedTheme === "dark" || theme === "dark") : false;

  // First-load typewriter effect for "SADDAM" and "HOSSAIN"
  const [typedFirst, setTypedFirst] = useState("");
  const [typedLast, setTypedLast] = useState("");
  const [isTypingFirst, setIsTypingFirst] = useState(true);
  const [isTypingLast, setIsTypingLast] = useState(false);

  useEffect(() => {
    const firstName = "SADDAM";
    const lastName = "HOSSAIN";
    let indexFirst = 0;
    let indexLast = 0;
    let cancelled = false;

    // Type first name
    const timerFirst = setInterval(() => {
      if (cancelled) return;
      indexFirst++;
      setTypedFirst(firstName.slice(0, indexFirst));
      if (indexFirst >= firstName.length) {
        clearInterval(timerFirst);
        setIsTypingFirst(false);
        setIsTypingLast(true);
        // Slight natural pause before typing last name
        setTimeout(() => {
          if (cancelled) return;
          const timerLast = setInterval(() => {
            if (cancelled) return;
            indexLast++;
            setTypedLast(lastName.slice(0, indexLast));
            if (indexLast >= lastName.length) {
              clearInterval(timerLast);
              setIsTypingLast(false);
            }
          }, 70);
        }, 120);
      }
    }, 70);

    return () => {
      cancelled = true;
      clearInterval(timerFirst);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Subtle natural mouse parallax (max 4px movement) with ZERO React re-renders
  useEffect(() => {
    if (isMobile) return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReducedMotion) return;

    let rafId = 0;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!bgParallaxRef.current) return;
        const { innerWidth, innerHeight } = window;
        const xOffset = ((e.clientX / innerWidth) - 0.5) * -6;
        const yOffset = ((e.clientY / innerHeight) - 0.5) * -6;
        bgParallaxRef.current.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0) scale(1.04)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden py-20 lg:py-0 select-none"
    >
      {/* CLEAN MEADOW BACKGROUND (DAY & NIGHT) WITH SUBTLE PARALLAX */}
      <div
        ref={bgParallaxRef}
        className="absolute inset-0 z-0 pointer-events-none transition-transform duration-500 ease-out will-change-transform scale-105"
        style={{
          transform: "translate3d(0px, 0px, 0) scale(1.04)",
        }}
      >
        {/* Daytime Sunlit Spring Garden */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            isNightMode ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src="/images/hero-spring-garden-v2.webp"
            alt="Sunlit spring garden with cherry blossoms, mountain lake, and wildflowers"
            fill
            priority
            quality={95}
            draggable={false}
            className="object-cover object-center select-none pointer-events-none"
            sizes="100vw"
          />
        </div>

        {/* Nighttime Enchanted Moonlit Garden */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            isNightMode ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="/images/hero-spring-garden-night-v2.webp"
            alt="Enchanted moonlit spring garden with starry sky, full moon, and cherry blossoms"
            fill
            priority
            quality={95}
            draggable={false}
            className="object-cover object-center select-none pointer-events-none"
            sizes="100vw"
          />
        </div>
      </div>

      {/* NATURAL ATMOSPHERIC LIGHTING & READABILITY OVERLAYS */}
      {/* 1. Top fade for crisp navbar readability without darkening canopy */}
      <div
        className={`absolute inset-x-0 top-0 h-28 z-[1] pointer-events-none transition-colors duration-700 ${
          isNightMode
            ? "bg-gradient-to-b from-slate-950/75 via-slate-950/35 to-transparent"
            : "bg-gradient-to-b from-slate-950/50 via-slate-950/20 to-transparent"
        }`}
      />

      {/* 2. Balanced left readability vignette — keeps text ultra-crisp while letting the scenery shine */}
      <div
        className={`absolute inset-0 z-[2] pointer-events-none transition-all duration-700 ${
          isNightMode
            ? "bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent sm:w-[65%] lg:w-[55%]"
            : "bg-gradient-to-r from-slate-950/70 via-slate-950/35 to-transparent sm:w-[60%] lg:w-[50%]"
        }`}
      />

      {/* INTERACTIVE PHYSICS BUTTERFLY SIMULATION */}
      <ButterflyField isNightMode={isNightMode} />

      {/* HERO MAIN CONTENT CONTAINER */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center min-h-[88vh] pt-24 pb-14 sm:py-0">
        <div className="max-w-2xl text-left">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-400/40 bg-slate-950/75 backdrop-blur-md mb-4 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-teal-300">
              HI THERE! 👋 WELCOME TO MY UNIVERSE
            </span>
          </motion.div>

          {/* Intro label */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base font-mono tracking-[0.25em] text-zinc-200 uppercase mb-1.5 font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
          >
            I&apos;M
          </motion.p>

          {/* Main Name Heading with First-Time Typewriter & Instant SEO Visibility */}
          <motion.h1
            aria-label="Saddam Hossain"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98] text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.9)] select-none mb-3 min-h-[1.98em]"
          >
            <span className="sr-only">Saddam Hossain</span>
            <span aria-hidden="true">{typedFirst}</span>
            {isTypingFirst && (
              <span className="text-teal-400 font-normal ml-1 animate-pulse" aria-hidden="true">|</span>
            )}
            <br aria-hidden="true" />
            <span aria-hidden="true" className="bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(6,182,212,0.6)]">
              {typedLast}
            </span>
            {isTypingLast && (
              <span className="text-cyan-400 font-normal ml-1 animate-pulse" aria-hidden="true">|</span>
            )}
          </motion.h1>

          {/* Subtitle with Continuous Loop Typewriter & Instant SEO Visibility */}
          <motion.h2
            aria-label="Full-Stack Web Developer, React, Next.js, Node.js and TypeScript"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl lg:text-2xl font-extrabold tracking-[0.12em] uppercase text-emerald-300 drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] mb-8 min-h-[1.6em] flex items-center"
          >
            <span className="sr-only">Full-Stack Web Developer, React, Next.js, Node.js and TypeScript</span>
            <TypewriterText
              texts={[
                "FULL-STACK WEB DEVELOPER",
                "REACT & NEXT.JS EXPERT",
                "NODE.JS & TYPESCRIPT",
                "BUSINESS SYSTEM ARCHITECT",
              ]}
              speed={70}
              deleteSpeed={35}
              delay={2200}
              cursorClassName="text-emerald-400"
            />
          </motion.h2>

          {/* CTA Buttons & Social Dock */}
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            {/* Primary Button: VIEW MY WORK */}
            <button
              type="button"
              onClick={() => {
                const section = document.getElementById("timeline");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-extrabold text-sm tracking-wide shadow-[0_8px_25px_rgba(20,184,166,0.4)] hover:shadow-[0_12px_32px_rgba(20,184,166,0.6),_0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer overflow-hidden"
            >
              {/* Specular Liquid Light Sheen Sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />
              <span className="relative z-10">VIEW MY WORK</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Secondary Button: ABOUT US — Apple Translucent Liquid Glass */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center gap-2.5 px-7 py-4 rounded-full backdrop-blur-xl bg-white/[0.08] hover:bg-white/[0.16] text-white font-bold text-sm tracking-wide border border-white/25 hover:border-cyan-400/60 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.4),_0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[inset_0_2px_3px_rgba(255,255,255,0.7),_0_0_24px_rgba(34,211,238,0.4),_0_8px_28px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer overflow-hidden"
            >
              {/* Apple Specular Bevel */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none" />
              {/* Specular Liquid Light Sheen Sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
              <Users className="relative z-10 w-4 h-4 text-cyan-300 group-hover:scale-110 group-hover:text-cyan-200 transition-all duration-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
              <span className="relative z-10">ABOUT US</span>
            </button>
          </motion.div>

          {/* SOCIAL ICONS DOCK UNDER CTA BUTTONS — Standalone Floating Apple Liquid Glass Pebbles */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="flex items-center gap-3.5 sm:gap-4 pt-6 sm:pt-7"
          >
            {/* GitHub */}
            <div className="relative group/btn flex items-center justify-center">
              <a
                href="https://github.com/saddamc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full backdrop-blur-xl bg-white/[0.08] hover:bg-white/20 border border-white/25 hover:border-white/70 text-white shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.45),_0_4px_16px_rgba(0,0,0,0.25),_0_0_14px_rgba(255,255,255,0.12)] hover:shadow-[inset_0_2px_3px_rgba(255,255,255,0.8),_0_0_24px_rgba(255,255,255,0.5),_0_8px_20px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:scale-110 active:scale-95 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/25 via-transparent to-black/10 pointer-events-none" />
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />
                <Github className="relative z-10 w-5 h-5 sm:w-5.5 sm:h-5.5 text-white transition-all duration-300 group-hover/btn:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]" />
              </a>
              {/* Floating Tooltip Above Icon */}
              <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-slate-950/95 backdrop-blur-md border border-white/20 text-[11px] font-semibold tracking-wider text-white pointer-events-none opacity-0 group-hover/btn:opacity-100 translate-y-1 group-hover/btn:translate-y-0 transition-all duration-200 shadow-2xl whitespace-nowrap z-50">
                GitHub
              </div>
            </div>

            {/* LinkedIn */}
            <div className="relative group/btn flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/saddam-hossain-09299535/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full backdrop-blur-xl bg-[#0077b5]/15 hover:bg-[#0077b5]/30 border border-[#0077b5]/40 hover:border-[#0077b5]/90 text-white shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.45),_0_4px_16px_rgba(0,0,0,0.25),_0_0_16px_rgba(0,119,181,0.3)] hover:shadow-[inset_0_2px_3px_rgba(255,255,255,0.7),_0_0_26px_rgba(0,119,181,0.7),_0_8px_20px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:scale-110 active:scale-95 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/25 via-transparent to-black/10 pointer-events-none" />
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />
                <Linkedin className="relative z-10 w-5 h-5 sm:w-5.5 sm:h-5.5 text-white group-hover/btn:text-[#38bdf8] transition-all duration-300 group-hover/btn:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]" />
              </a>
              {/* Floating Tooltip Above Icon */}
              <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-slate-950/95 backdrop-blur-md border border-white/20 text-[11px] font-semibold tracking-wider text-white pointer-events-none opacity-0 group-hover/btn:opacity-100 translate-y-1 group-hover/btn:translate-y-0 transition-all duration-200 shadow-2xl whitespace-nowrap z-50">
                LinkedIn
              </div>
            </div>

            {/* Email */}
            <div className="relative group/btn flex items-center justify-center">
              <a
                href="mailto:saddam13bd@gmail.com"
                aria-label="Send Email"
                className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full backdrop-blur-xl bg-cyan-500/15 hover:bg-cyan-500/30 border border-cyan-400/40 hover:border-cyan-400/90 text-white shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.45),_0_4px_16px_rgba(0,0,0,0.25),_0_0_16px_rgba(6,182,212,0.3)] hover:shadow-[inset_0_2px_3px_rgba(255,255,255,0.7),_0_0_26px_rgba(6,182,212,0.7),_0_8px_20px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:scale-110 active:scale-95 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/25 via-transparent to-black/10 pointer-events-none" />
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />
                <Mail className="relative z-10 w-5 h-5 sm:w-5.5 sm:h-5.5 text-white group-hover/btn:text-cyan-300 transition-all duration-300 group-hover/btn:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]" />
              </a>
              {/* Floating Tooltip Above Icon */}
              <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-slate-950/95 backdrop-blur-md border border-white/20 text-[11px] font-semibold tracking-wider text-white pointer-events-none opacity-0 group-hover/btn:opacity-100 translate-y-1 group-hover/btn:translate-y-0 transition-all duration-200 shadow-2xl whitespace-nowrap z-50">
                Email
              </div>
            </div>

            {/* WhatsApp */}
            <div className="relative group/btn flex items-center justify-center">
              <a
                href="https://wa.me/8801974544443"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full backdrop-blur-xl bg-emerald-500/15 hover:bg-emerald-500/30 border border-emerald-400/40 hover:border-emerald-400/90 text-white shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.45),_0_4px_16px_rgba(0,0,0,0.25),_0_0_16px_rgba(16,185,129,0.3)] hover:shadow-[inset_0_2px_3px_rgba(255,255,255,0.7),_0_0_26px_rgba(16,185,129,0.7),_0_8px_20px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:scale-110 active:scale-95 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/25 via-transparent to-black/10 pointer-events-none" />
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />
                <MessageCircle className="relative z-10 w-5 h-5 sm:w-5.5 sm:h-5.5 text-white group-hover/btn:text-emerald-300 transition-all duration-300 group-hover/btn:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]" />
              </a>
              {/* Floating Tooltip Above Icon */}
              <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-slate-950/95 backdrop-blur-md border border-white/20 text-[11px] font-semibold tracking-wider text-white pointer-events-none opacity-0 group-hover/btn:opacity-100 translate-y-1 group-hover/btn:translate-y-0 transition-all duration-200 shadow-2xl whitespace-nowrap z-50">
                WhatsApp
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* View Details / CV Modal */}
      <ViewDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}