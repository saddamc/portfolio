"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<"default" | "hover" | "drag" | "view">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const [isPressed, setIsPressed] = useState(false);

  // Exact hardware pointer container (0ms latency precision point)
  const dotRef = useRef<HTMLDivElement>(null);
  // Smooth fluid trailing frosted glass ring container
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const isInsideWindow = useRef(false);

  useEffect(() => {
    // Detect touch devices and disable custom cursor
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const checkHeroSection = () => {
      const inHero = window.scrollY < window.innerHeight - 80;
      setIsInHero((prev) => (prev !== inHero ? inHero : prev));
    };

    checkHeroSection();

    let rafId = 0;

    // Smooth fluid follower loop for the glass ring (60-144fps GPU lerp)
    const renderFollower = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.22;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.22;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId = requestAnimationFrame(renderFollower);
    };

    rafId = requestAnimationFrame(renderFollower);

    // 0ms Instantaneous Hardware tracking for the central precision point
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isInsideWindow.current) {
        isInsideWindow.current = true;
        ringPos.current.x = e.clientX;
        ringPos.current.y = e.clientY;
        setIsVisible(true);
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const handleScroll = () => {
      checkHeroSection();
    };

    const handleResize = () => {
      checkHeroSection();
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable = target.closest(
        "a, button, [role='button'], select, input, textarea, .magnetic, .cursor-pointer"
      );
      const isDraggableElement = target.closest(".cursor-grab, .active\\:cursor-grabbing");
      const isCardElement = target.closest(".journey-card, .skill-card-wrapper, [data-cursor='view']");

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
      isInsideWindow.current = false;
      setIsVisible(false);
    };

    const handleMouseEnterWindow = (e: MouseEvent) => {
      isInsideWindow.current = true;
      setIsVisible(true);
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      ringPos.current.x = e.clientX;
      ringPos.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      e.preventDefault();
    };

    window.addEventListener("dragstart", handleDragStart);
    document.addEventListener("dragstart", handleDragStart);
    window.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("selectstart", handleSelectStart);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("dragstart", handleDragStart);
      window.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("selectstart", handleSelectStart);

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, []);

  // Toggle class on html and body to universally hide browser pointer inside Hero Section
  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    if (isInHero && isVisible) {
      document.documentElement.classList.add("hide-native-cursor");
      document.body.classList.add("hide-native-cursor");
    } else {
      document.documentElement.classList.remove("hide-native-cursor");
      document.body.classList.remove("hide-native-cursor");
    }

    return () => {
      document.documentElement.classList.remove("hide-native-cursor");
      document.body.classList.remove("hide-native-cursor");
    };
  }, [isInHero, isVisible]);

  if (!isInHero) return null;

  return (
    <>
      {/* 1. Fluid Aura Ring (Organic Follower - Pure GPU transform, NO backdrop-blur to prevent Skia compositor tile drops) */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform transition-opacity duration-200 select-none ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 ease-out select-none ${
            isPressed
              ? "w-7 h-7 scale-90 border-teal-400 bg-teal-400/25"
              : cursorType === "hover"
              ? "w-11 h-11 border-teal-400/90 bg-teal-400/20 scale-110"
              : cursorType === "drag" || cursorType === "view"
              ? "w-10 h-10 border-cyan-400/80 bg-cyan-400/15 scale-105"
              : "w-8 h-8 border-teal-400/40 bg-teal-400/5 scale-100"
          }`}
        />
      </div>

      {/* 2. Zero-Latency Luminous Precision Dot (Instant Click Center) */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform transition-opacity duration-150 select-none ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150 ease-out select-none ${
            isPressed
              ? "w-2 h-2 scale-75 bg-teal-200 shadow-[0_0_12px_#2dd4bf]"
              : cursorType === "hover"
              ? "w-2 h-2 scale-125 bg-cyan-200 shadow-[0_0_14px_#22d3ee]"
              : "w-1.5 h-1.5 bg-teal-300 dark:bg-cyan-300 shadow-[0_0_8px_#14b8a6]"
          }`}
        />
      </div>
    </>
  );
}
