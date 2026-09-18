"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Magnetic from "./ui/magnetic";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center">
      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Magnetic range={40} strength={0.4}>
              <button
                onClick={scrollToTop}
                className="p-3.5 rounded-full border border-white/10 bg-slate-950/80 backdrop-blur-md text-gray-300 hover:text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5.5 w-5.5 transition-transform duration-300 group-hover:-translate-y-1" />
              </button>
            </Magnetic>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Magnetic range={40} strength={0.4}>
          <a
            href="https://wa.me/8801974544443?text=Hi%20Saddam!%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_4px_24px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
            aria-label="Chat on WhatsApp"
          >
            {/* Pulsing ring background */}
            <div className="absolute inset-0 rounded-full bg-emerald-500 opacity-30 animate-ping pointer-events-none -z-10" />
            
            <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
          </a>
        </Magnetic>
      </motion.div>
    </div>
  );
}
