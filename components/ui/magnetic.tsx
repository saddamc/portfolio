"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

interface MagneticProps {
  children: React.ReactElement;
  range?: number;
  strength?: number;
  className?: string;
}

export default function Magnetic({
  children,
  range = 60,
  strength = 0.35,
  className = "inline-block",
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < range) {
      // Pull element toward the cursor by factor of strength
      setPosition({
        x: distanceX * strength,
        y: distanceY * strength,
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 120, damping: 12, mass: 0.1 }}
      className={className}
    >
      {React.cloneElement(children, {
        className: `${children.props.className || ""} select-none`,
      })}
    </motion.div>
  );
}
