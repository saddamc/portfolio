"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import ViewDetailsModal from "../view-details-modal";
import Magnetic from "../ui/magnetic";
import ButterflyField from "../butterfly-field";
import TypewriterText from "../typewriter-text";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const bgParallaxRef = useRef<HTMLDivElement>(null);

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

  const socialLinks = [
    { icon: Github, href: "https://github.com/saddamc", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/saddam-hossain-09299535/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:sadddam13bd@gmail.com", label: "Email" },
    {
      icon: MessageCircle,
      href: "https://wa.me/8801974544443?text=Hi%20Saddam!%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect.",
      label: "WhatsApp",
    },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden py-20 lg:py-0"
    >
      {/* CLEAN MEADOW BACKGROUND WITH SUBTLE PARALLAX */}
      <div
        ref={bgParallaxRef}
        className="absolute inset-0 z-0 pointer-events-none transition-transform duration-500 ease-out will-change-transform scale-105"
        style={{
          transform: "translate3d(0px, 0px, 0) scale(1.04)",
        }}
      >
        <Image
          src="/images/hero-spring-garden-v2.webp"
          alt="Sunlit spring garden with cherry blossoms, mountain lake, and wildflowers"
          fill
          priority
          quality={95}
          className="object-cover object-center select-none"
          sizes="100vw"
        />
      </div>

      {/* NATURAL ATMOSPHERIC LIGHTING & READABILITY OVERLAYS */}
      {/* 1. Subtle top fade for crisp navbar readability without darkening canopy */}
      <div className="absolute inset-x-0 top-0 h-28 z-[1] pointer-events-none bg-gradient-to-b from-slate-950/50 via-slate-950/20 to-transparent" />

      {/* 2. Balanced left readability vignette — keeps text ultra-crisp while letting the meadow shine */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-r from-slate-950/70 via-slate-950/35 to-transparent sm:w-[60%] lg:w-[50%]" />

      {/* INTERACTIVE PHYSICS BUTTERFLY SIMULATION */}
      <ButterflyField />

      {/* FLOATING VERTICAL SOCIAL SIDEBAR ON RIGHT */}
      <div className="absolute right-4 lg:right-8 top-[32%] sm:top-[35%] z-40 hidden lg:flex flex-col gap-3.5 p-2.5 rounded-2xl shadow-2xl border border-white/10 bg-slate-950/40 backdrop-blur-xl">
        {socialLinks.map((social, index) => (
          <Magnetic key={social.label} range={45} strength={0.3}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-3 text-zinc-300 hover:text-white rounded-full transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
              <div
                className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  index === 0
                    ? "shadow-[0_0_15px_#8b5cf6]"
                    : index === 1
                    ? "shadow-[0_0_15px_#06b6d4]"
                    : index === 2
                    ? "shadow-[0_0_15px_#ec4899]"
                    : "shadow-[0_0_15px_#10b981]"
                }`}
              />
              <span className="absolute right-14 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md text-[10px] tracking-wider uppercase font-bold text-white bg-slate-950/90 border border-slate-700/60 backdrop-blur-md opacity-0 scale-90 translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                {social.label}
              </span>
            </a>
          </Magnetic>
        ))}
      </div>

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

          {/* Main Name Heading with First-Time Typewriter */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98] text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.9)] select-none mb-3 min-h-[1.98em]"
          >
            <span>{typedFirst}</span>
            {isTypingFirst && (
              <span className="text-teal-400 font-normal ml-1 animate-pulse" aria-hidden="true">|</span>
            )}
            <br />
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(6,182,212,0.6)]">
              {typedLast}
            </span>
            {isTypingLast && (
              <span className="text-cyan-400 font-normal ml-1 animate-pulse" aria-hidden="true">|</span>
            )}
          </motion.h1>

          {/* Subtitle with Continuous Loop Typewriter */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl lg:text-2xl font-extrabold tracking-[0.12em] uppercase text-emerald-300 drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] mb-8 min-h-[1.6em] flex items-center"
          >
            <TypewriterText
              texts={[
                "FULL-STACK WEB DEVELOPER",
                "NEXT.JS & REACT ARCHITECT",
                "MERN STACK EXPERT",
                "AI SOLUTIONS ENGINEER",
              ]}
              speed={70}
              deleteSpeed={35}
              delay={2200}
              cursorClassName="text-emerald-400"
            />
          </motion.h2>

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
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-extrabold text-sm tracking-wide shadow-[0_8px_25px_rgba(20,184,166,0.4)] hover:shadow-[0_12px_32px_rgba(20,184,166,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>VIEW MY WORK</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Secondary Button: DOWNLOAD CV */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-slate-950/50 hover:bg-slate-900/80 text-white font-bold text-sm tracking-wide border border-white/20 hover:border-teal-400/50 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Download className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
              <span>DOWNLOAD CV</span>
            </button>
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