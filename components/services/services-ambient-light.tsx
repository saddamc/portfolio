'use client';

import React, { useEffect, useRef } from 'react';

export default function ServicesAmbientLight() {
  const lightRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -1000, y: -1000 });
  const targetRef = useRef({ x: -1000, y: -1000 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only run on devices with fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const handlePointerMove = (e: PointerEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (posRef.current.x === -1000) {
        posRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const updatePosition = () => {
      if (lightRef.current) {
        // Smooth lerp for buttery lag-free following
        const dx = targetRef.current.x - posRef.current.x;
        const dy = targetRef.current.y - posRef.current.y;
        posRef.current.x += dx * 0.15;
        posRef.current.y += dy * 0.15;

        lightRef.current.style.background = `radial-gradient(750px at ${posRef.current.x.toFixed(1)}px ${posRef.current.y.toFixed(1)}px, rgba(34,211,238,0.06), transparent 80%)`;
      }
      animFrameId.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    animFrameId.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  return (
    <div
      ref={lightRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 opacity-70 hidden md:block"
    />
  );
}
