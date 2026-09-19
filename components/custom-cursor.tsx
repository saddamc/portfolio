"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<"default" | "hover" | "drag" | "view">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isInHero, setIsInHero] = useState(true);

  const cursorRef = useRef<HTMLDivElement>(null);
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

    // 0ms Latency Direct Hardware Cursor Movement (ZERO Spring Lag)
    const handleMouseMove = (e: MouseEvent) => {
      if (!isInsideWindow.current) {
        isInsideWindow.current = true;
        setIsVisible(true);
      }

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

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
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, []);

  // Toggle class on body to hide browser pointer inside Hero Section
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

  if (!isInHero) return null;

  return (
    <>
      {/* Zero-latency Hardware Matte Black Circle Cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform transition-opacity duration-150 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full bg-black transition-transform duration-150 ease-out shadow-[0_2px_10px_rgba(0,0,0,0.35)] ${
            cursorType === "hover"
              ? "w-[36px] h-[36px] scale-110"
              : cursorType === "drag" || cursorType === "view"
              ? "w-[26px] h-[26px] scale-90"
              : "w-[30px] h-[30px] scale-100"
          }`}
        />
      </div>

      {/* Hide native browser cursor inside Hero section only */}
      <style jsx global>{`
        @media (pointer: fine) {
          body.hide-native-cursor,
          body.hide-native-cursor a,
          body.hide-native-cursor button,
          body.hide-native-cursor select,
          body.hide-native-cursor input,
          body.hide-native-cursor textarea,
          body.hide-native-cursor [role="button"],
          body.hide-native-cursor .magnetic,
          body.hide-native-cursor .cursor-pointer {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
