"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import ViewDetailsModal from "../view-details-modal";
import Magnetic from "../ui/magnetic";

const DynamicTypewriterText = dynamic(
  () => import("@/components/typewriter-text"),
  {
    ssr: false,
  }
);

const DynamicParticleBackground = dynamic(
  () => import("@/components/particle-background"),
  {
    ssr: false,
  }
);

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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

  // Letter Reveal Animation Config
  const firstName = "SADDAM";
  const lastName = "HOSSAIN";

  const titleContainer = {
    animate: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.04,
      },
    },
  } as any;

  const letterAnimation = {
    initial: { y: 60, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 0.7 },
    },
  } as any;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 lg:py-0"
    >
      {/* Dynamic Swirling Custom 2D Physics Attraction Field */}
      <DynamicParticleBackground />


      {/* Ambient background glow blobs removed per user request */}

      {/* Floating Vertical Social Sidebar on Right Side (Top-Middle Position) - Only for Hero Section */}
      <div className="absolute right-6 top-[28%] sm:top-[30%] z-40 flex flex-col gap-4 p-3 rounded-2xl glass-dark shadow-2xl border border-white/5 bg-black/20 backdrop-blur-md">
        {socialLinks.map((social, index) => (
          <Magnetic key={social.label} range={50} strength={0.35}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-3.5 text-gray-400 hover:text-white rounded-full transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-1 focus:ring-offset-black/50"
              aria-label={social.label}
            >
              <social.icon className="h-5.5 w-5.5" />
              
              {/* Specialized neon border shadow on hover */}
              <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                index === 0 ? "shadow-[0_0_15px_#8b5cf6]" :
                index === 1 ? "shadow-[0_0_15px_#06b6d4]" :
                index === 2 ? "shadow-[0_0_15px_#ec4899]" :
                "shadow-[0_0_15px_#10b981]"
              }`} />

              {/* Dynamic slide-out micro-tooltip */}
              <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-[10px] tracking-wider uppercase font-bold text-white bg-slate-950 border border-slate-700/50 backdrop-blur-md opacity-0 scale-90 translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                {social.label}
              </span>
            </a>
          </Magnetic>
        ))}
      </div>

      {/* Main Grid Responsive Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col justify-center min-h-[85vh] lg:min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center w-full">
          
          {/* Left Column: Greeting, Main Headline, Subtitle, CTA buttons (order-2 on mobile) */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
            
            <motion.p 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm tracking-[0.2em] font-semibold text-teal-400 uppercase mb-4"
            >
              Hi there!👋 Welcome to my universe
            </motion.p>
            
            {/* SADDAM HOSSAIN Headline Reveal Animation */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 relative tracking-tight leading-none select-none">
              <span className="text-gray-400 font-sans block text-xl sm:text-2xl font-light uppercase tracking-[0.25em] mb-3">
                I'm
              </span>
              <motion.span 
                variants={titleContainer}
                initial="initial"
                animate="animate"
                className="flex flex-wrap justify-center lg:justify-start gap-x-3 sm:gap-x-4 overflow-hidden"
              >
                <span className="flex">
                  {firstName.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={letterAnimation}
                      className="inline-block text-gray-100 hover:text-teal-400 hover:scale-110 hover:-translate-y-2.5 transition-all duration-200 cursor-default font-sans"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
                <span className="flex bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                  {lastName.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={letterAnimation}
                      className="inline-block hover:scale-110 hover:-translate-y-2.5 transition-all duration-200 cursor-default font-sans"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </motion.span>
            </h1>

            {/* Subtitle typewriter - Styled elegantly in serif italic */}
            <div className="text-lg sm:text-2xl lg:text-3xl font-serif italic text-teal-400/90 mb-8 min-h-[40px] select-none">
              <DynamicTypewriterText
                texts={[
                  "MERN Stack Developer",
                  "Frontend Web Developer",
                  "Full Stack Web Developer",
                  "React.js Developer"
                ]}
              />
            </div>

            {/* Action Buttons: About Me and View Work side-by-side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center mb-8 relative z-30"
            >
              {/* Unique 'About Me' Button */}
              <Magnetic range={50} strength={0.3}>
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-950/40 text-white rounded-full font-bold tracking-wide transition-all duration-500 overflow-hidden border border-white/10 hover:border-teal-400/50 shadow-[0_4px_20px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-teal-400/50"
                >
                  {/* Neon animated gradient fill behind */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-cyan-500/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Dynamic scrolling light/shimmer border effect */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-600 rounded-full opacity-20 group-hover:opacity-100 blur-[2px] group-hover:blur-[4px] transition-all duration-500 -z-10" />

                  {/* Button inner text */}
                  <span className="relative bg-gradient-to-r from-white via-white to-teal-200 bg-clip-text text-transparent group-hover:from-white group-hover:to-teal-300 transition-all duration-300">
                    About Me
                  </span>
                  
                  {/* Icon */}
                  <span className="relative flex items-center justify-center w-5 h-5 rounded-full bg-white/10 text-teal-400 group-hover:bg-teal-400 group-hover:text-black transition-all duration-300">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                </motion.button>
              </Magnetic>

              {/* Unique 'View Work' Button */}
              <Magnetic range={50} strength={0.3}>
                <motion.button
                  onClick={() => {
                    const section = document.getElementById("timeline");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-gray-300 hover:text-white rounded-full font-bold tracking-wide transition-all duration-500 border border-white/5 hover:border-cyan-500/50 hover:bg-white/[0.02] focus:outline-none focus:ring-2 focus:ring-cyan-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
                >
                  {/* Neon laser bottom sweep */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:w-[70%] transition-all duration-500" />
                  
                  {/* Subtle hover backlight glow */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:blur-[8px] bg-cyan-500/5 transition-all duration-500 -z-10" />

                  <span>View Work</span>
                  
                  <span className="relative flex items-center justify-center transform group-hover:translate-y-0.5 transition-transform duration-300 text-cyan-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
                    </svg>
                  </span>
                </motion.button>
              </Magnetic>
            </motion.div>

          </div>

          {/* Right Column: Elegant Profile Card container (order-1 on mobile) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end items-center relative z-20">
            <motion.div
              className="relative cursor-grab active:cursor-grabbing
                         w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -15, 0, 15, 0],
                x: [0, 8, 0, -8, 0],
              }}
              transition={{ 
                opacity: { duration: 1.2, ease: "easeOut" },
                scale: { duration: 1.2, ease: "easeOut" },
                y: { 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  repeatType: "loop"
                },
                x: { 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  repeatType: "loop"
                }
              }}
              drag
              dragMomentum={false}
              dragElastic={0.1}
              dragConstraints={{ top: -40, left: -40, right: 40, bottom: 40 }}
              whileDrag={{ 
                scale: 1.04,
                rotate: 2,
                zIndex: 50
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative w-full h-full group" data-cursor="drag">
                
                {/* Rotating curved taglines */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '28s' }}>
                  {["Web-Developer", "MERN Stack", "Full Stack", "React.js"].map((text, index) => (
                    <div key={index} className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 200 200">
                        <defs>
                          <path id={`desktop-circle-${index}`} d="M 100, 100 m -88, 0 a 88,88 0 1,1 176,0 a 88,88 0 1,1 -176,0" />
                        </defs>
                        <text className="text-[9px] sm:text-[10px] font-semibold tracking-wider fill-gray-500/60 uppercase" textAnchor="middle">
                          <textPath href={`#desktop-circle-${index}`} startOffset={`${12.5 + (index * 25)}%`}>
                            • {text} •
                          </textPath>
                        </text>
                      </svg>
                    </div>
                  ))}
                </div>

                {/* Profile image round frame */}
                <div className="absolute inset-5 rounded-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-teal-500/40">
                  <div className="relative w-full h-full">
                    <Image
                      src="https://res.cloudinary.com/drtzgyetn/image/upload/v1758052259/profile_edhnbc.png"
                      alt="Saddam Hossain Profile"
                      fill
                      className="object-cover pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
                      priority
                      sizes="(max-width: 768px) 192px, (max-width: 1024px) 208px, 224px"
                      draggable={false}
                    />
                  </div>
                </div>
                
                {/* Conic glowing border accent */}
                <div 
                  className="absolute inset-3 rounded-full pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-300"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, rgba(20,184,166,0.4), transparent, rgba(99,102,241,0.4), transparent)',
                    animation: 'spin 8s linear infinite'
                  }}
                />
                
                {/* Soft Ambient Shadow Glow */}
                <div className="absolute inset-0 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300 blur-2xl z-[-1] bg-gradient-to-r from-teal-500 to-indigo-500" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      


      {/* View Details Modal */}
      <ViewDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}