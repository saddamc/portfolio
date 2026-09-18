"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<"default" | "hover" | "drag" | "view">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isInHero, setIsInHero] = useState(true);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    // Detect touch devices and disable custom cursor
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check if viewport scroll is less than the screen height (Hero Section)
      setIsInHero(window.scrollY < window.innerHeight - 80);
    };

    const handleScroll = () => {
      // Recheck boundary position on scrolling
      setIsInHero(window.scrollY < window.innerHeight - 80);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable = 
        target.closest("a") || 
        target.closest("button") || 
        target.closest(".magnetic") || 
        target.closest("[role='button']") ||
        window.getComputedStyle(target).cursor === "pointer";

      const isDraggableElement = target.closest(".cursor-grab") || target.closest(".active\\:cursor-grabbing");
      const isCardElement = target.closest(".journey-card") || target.closest(".skill-card-wrapper") || target.closest("[data-cursor='view']");

      if (isDraggableElement) {
        setCursorType("drag");
      } else if (isCardElement) {
        setCursorType("view");
      } else if (isClickable) {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, [mouseX, mouseY]);

  // Toggle class on body to conditionally hide browser pointer only in Hero Section
  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    if (isInHero && isVisible) {
      document.body.classList.add("hide-native-cursor");
    } else {
      document.body.classList.remove("hide-native-cursor");
    }

    return () => {
      document.body.classList.remove("hide-native-cursor");
    };
  }, [isInHero, isVisible]);

  if (!isVisible || !isInHero) return null;

  const dotVariants = {
    default: {
      scale: 1,
      backgroundColor: "#000000",
    },
    hover: {
      scale: 1.25,
      backgroundColor: "#000000",
    },
    drag: {
      scale: 0.85,
      backgroundColor: "#000000",
    },
    view: {
      scale: 0.85,
      backgroundColor: "#000000",
    }
  };

  return (
    <>
      {/* 1. Pure Matte Black Circle Cursor (30px diameter rounded black circle, no border) */}
      <motion.div
        className="fixed top-0 left-0 w-[30px] h-[30px] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        variants={dotVariants}
        animate={cursorType}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Hide native browser cursor inside Hero section only */}
      <style jsx global>{`
        @media (pointer: fine) {
          body.hide-native-cursor,
          body.hide-native-cursor a,
          body.hide-native-cursor button,
          body.hide-native-cursor select,
          body.hide-native-cursor input,
          body.hide-native-cursor textarea,
          body.hide-native-cursor [role='button'],
          body.hide-native-cursor .magnetic,
          body.hide-native-cursor .cursor-pointer {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
