"use client";

import React, { useEffect, useRef } from "react";

interface PhysicsBody {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  mass: number;
  friction: number;
  color: string;
  type: "stone" | "flake";
  subType?: "core" | "trail"; // "core" = small snappy dots, "trail" = large elegant polygons
  isCircle?: boolean; // Half of stones will be perfect circles like in the screenshot
  vertices?: { x: number; y: number }[];
  angle?: number;
  angularVelocity?: number;
  rotationSpeed?: number;
  opacity: number;
  depth: number; // 0 = bg, 1 = mid, 2 = fg (cinematic blur bokeh)
  
  // Base anchor coordinate positions
  ox?: number;
  oy?: number;
  driftSpeed?: number;
  driftOffset?: number;
  driftAmpX?: number;
  driftAmpY?: number;

  // Custom orbit controls for freeze state
  orbitRadius?: number;
  orbitSpeed?: number;
  orbitAngle?: number;
}

interface FogCloud {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  angle: number;
  speed: number;
  baseOpacity: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  
  // Smooth interactive tracker coordinates
  const attractorRef = useRef({ x: 0, y: 0 });

  // Parallax offsets
  const parallaxX = useRef(0);
  const parallaxY = useRef(0);

  // Time tracker for sway curves
  const timeRef = useRef(0);

  // Idle Timer & Interactive State variables
  const lastMouseMoveRef = useRef(Date.now());
  const interactiveState = useRef(1.0); // 1 = cursor moving/interactive, 0 = cursor stopped/snowing

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    
    // Scale slightly by 1.06 to allow comfortable parallax margins
    let width = window.innerWidth * 1.06;
    let height = window.innerHeight * 1.06;

    attractorRef.current = { x: width / 2, y: height / 2 };
    mouseRef.current = { x: width / 2, y: height / 2, active: false };
    prevMouseRef.current = { x: width / 2, y: height / 2 };
    lastMousePosRef.current = { x: width / 2, y: height / 2 };

    const resizeCanvas = () => {
      width = window.innerWidth * 1.06;
      height = window.innerHeight * 1.06;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const canvasX = e.clientX - rect.left;
      const canvasY = e.clientY - rect.top;

      prevMouseRef.current.x = mouseRef.current.x;
      prevMouseRef.current.y = mouseRef.current.y;
      mouseRef.current.x = canvasX;
      mouseRef.current.y = canvasY;
      mouseRef.current.active = true;
      lastMouseMoveRef.current = Date.now();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        const canvasX = touchX - rect.left;
        const canvasY = touchY - rect.top;

        prevMouseRef.current.x = mouseRef.current.x;
        prevMouseRef.current.y = mouseRef.current.y;
        mouseRef.current.x = canvasX;
        mouseRef.current.y = canvasY;
        mouseRef.current.active = true;
        lastMouseMoveRef.current = Date.now();
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleMouseEnter = () => {
      mouseRef.current.active = true;
      lastMouseMoveRef.current = Date.now();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const createPolygonVertices = (sides: number, radius: number) => {
      const vertices = [];
      for (let i = 0; i < sides; i++) {
        const angle = (i * 2 * Math.PI) / sides;
        const noise = 0.9 + Math.random() * 0.2;
        vertices.push({
          x: Math.cos(angle) * radius * noise,
          y: Math.sin(angle) * radius * noise,
        });
      }
      return vertices;
    };

    // Spawning a tuned dual-tier swarming system:
    // - 80 Stones divided into 50 snappy Core Dots (high spring, high friction)
    //   and 30 elegant Trail Polygons (lower spring, high inertia, slow gliding)
    // - 30 snowflake crystals (winter atmosphere)
    const bodies: PhysicsBody[] = [];

    // Spawning swarming elements (50 core dots, 30 trail polygons)
    for (let i = 0; i < 80; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;

      if (i < 50) {
        // --- 1. Snappy Inner Core Dots (circles, 2px - 3.8px) ---
        const size = Math.random() * 1.8 + 2.0;
        const mass = size * 0.4;
        const friction = 0.06; // High friction base
        const color = "rgba(45, 55, 72, 0.85)";

        bodies.push({
          x,
          y,
          ox: x,
          oy: y,
          vx: 0,
          vy: 0,
          size,
          mass,
          friction,
          color,
          type: "stone",
          subType: "core",
          isCircle: true,
          opacity: Math.random() * 0.25 + 0.65,
          depth: 1,
          driftSpeed: 0.0005 + Math.random() * 0.0005,
          driftOffset: Math.random() * Math.PI * 2,
          driftAmpX: 10 + Math.random() * 5,
          driftAmpY: 8 + Math.random() * 4,
          orbitRadius: 18 + Math.random() * 25, // Compact orbit near cursor edge
          orbitSpeed: (0.006 + Math.random() * 0.012) * (Math.random() > 0.5 ? 1 : -1),
          orbitAngle: Math.random() * Math.PI * 2,
        });
      } else {
        // --- 2. Slower Outer Trail Polygons (12px - 24px) ---
        const size = Math.random() * 12 + 12;
        const mass = size * 1.5;
        const friction = 0.05; // Increased friction to damp big elements faster (moves slower!)
        const isCircle = Math.random() > 0.6; // 40% circles, 60% flat polygons
        const color = Math.random() > 0.5 ? "rgba(22, 22, 26, 0.94)" : "rgba(38, 38, 44, 0.72)";
        const sides = Math.floor(Math.random() * 4) + 3; // Triangles, Squares, Pentagons, Hexagons

        bodies.push({
          x,
          y,
          ox: x,
          oy: y,
          vx: 0,
          vy: 0,
          size,
          mass,
          friction,
          color,
          type: "stone",
          subType: "trail",
          isCircle,
          vertices: isCircle ? undefined : createPolygonVertices(sides, size),
          angle: Math.random() * Math.PI * 2,
          angularVelocity: 0,
          rotationSpeed: (0.0002 + Math.random() * 0.0003) * (Math.random() > 0.5 ? 1 : -1),
          opacity: Math.random() * 0.2 + 0.6,
          depth: size > 20 ? 2 : 1,
          driftSpeed: 0.0003 + Math.random() * 0.0004,
          driftOffset: Math.random() * Math.PI * 2,
          driftAmpX: 18 + Math.random() * 10,
          driftAmpY: 12 + Math.random() * 8,
          orbitRadius: 35 + Math.random() * 45, // Wider orbit trails
          orbitSpeed: (0.004 + Math.random() * 0.008) * (Math.random() > 0.5 ? 1 : -1),
          orbitAngle: Math.random() * Math.PI * 2,
        });
      }
    }

    // Spawning 30 Ambient Flakes (Drifting Snow)
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const randSize = Math.random();
      const size = 1.0 + Math.pow(randSize, 3) * 3.0;
      const depth = size > 2.8 ? 2 : size > 1.6 ? 1 : 0;
      
      bodies.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size,
        mass: size * 0.38,
        friction: 0.012,
        color: "rgba(255, 255, 255, 0.85)", 
        type: "flake",
        opacity: Math.random() * 0.3 + 0.5,
        depth,
        angle: Math.random() * Math.PI * 2,
      });
    }

    // Fog cloud elements for breathing mist
    const fogClouds: FogCloud[] = [
      { x: width * 0.25, y: height * 0.25, vx: 0.06, vy: -0.02, radius: width * 0.35, angle: 0, speed: 0.0002, baseOpacity: 0.01 },
      { x: width * 0.75, y: height * 0.75, vx: -0.05, vy: 0.03, radius: width * 0.4, angle: Math.PI / 4, speed: 0.00015, baseOpacity: 0.012 },
    ];

    // Main 60fps Loop
    const animate = () => {
      timeRef.current += 1;
      ctx.clearRect(0, 0, width, height);

      // --- MOUSE IDLE & INTERACTIVE CALCULATOR ---
      const now = Date.now();
      const timeSinceLastMove = now - lastMouseMoveRef.current;
      const isIdle = timeSinceLastMove > 400; // Mouse has stopped moving

      // Smooth state interpolation (1 = active/fluid moving, 0 = cursor stopped/gathering/snowing)
      const targetState = isIdle ? 0.0 : 1.0;
      interactiveState.current += (targetState - interactiveState.current) * 0.055;

      const idleFactor = 1.0 - interactiveState.current;

      // Smooth camera parallax shifts
      const targetParallaxX = mouseRef.current.active
        ? (mouseRef.current.x - width / 2) * -0.02
        : 0;
      const targetParallaxY = mouseRef.current.active
        ? (mouseRef.current.y - height / 2) * -0.02
        : 0;

      parallaxX.current += (targetParallaxX - parallaxX.current) * 0.05;
      parallaxY.current += (targetParallaxY - parallaxY.current) * 0.05;

      canvas.style.transform = `translate3d(${parallaxX.current}px, ${parallaxY.current}px, 0)`;

      // Render breathing mist clouds
      fogClouds.forEach((cloud) => {
        cloud.x += cloud.vx;
        cloud.y += cloud.vy;
        cloud.angle += cloud.speed;

        if (cloud.x < -cloud.radius) cloud.x = width + cloud.radius;
        if (cloud.x > width + cloud.radius) cloud.x = -cloud.radius;
        if (cloud.y < -cloud.radius) cloud.y = height + cloud.radius;
        if (cloud.y > height + cloud.radius) cloud.y = -cloud.radius;

        const breathingOpacity = cloud.baseOpacity + Math.sin(cloud.angle) * 0.0025;

        ctx.save();
        const fogGlow = ctx.createRadialGradient(
          cloud.x,
          cloud.y,
          0,
          cloud.x,
          cloud.y,
          cloud.radius
        );
        fogGlow.addColorStop(0, `rgba(255, 255, 255, ${breathingOpacity})`);
        fogGlow.addColorStop(0.5, `rgba(255, 255, 255, ${breathingOpacity * 0.45})`);
        fogGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = fogGlow;
        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, cloud.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Update & Render Physics Bodies
      bodies.forEach((body) => {
        if (body.type === "stone") {
          // ==========================================
          // 1. STONES (polygons/circles): DUAL-TIER SWARM
          // ==========================================
          
          // Smooth base drift anchor
          const driftSpeed = body.driftSpeed || 0.001;
          const driftOffset = body.driftOffset || 0;
          const driftAmpX = body.driftAmpX || 15;
          const driftAmpY = body.driftAmpY || 10;

          const baseDriftX = Math.sin(timeRef.current * driftSpeed + driftOffset) * driftAmpX;
          const baseDriftY = Math.cos(timeRef.current * driftSpeed + driftOffset) * driftAmpY;

          const homeX = (body.ox || body.x) + baseDriftX;
          const homeY = (body.oy || body.y) + baseDriftY;

          // Pull body home slightly if mouse is completely inactive
          if (!mouseRef.current.active) {
            const hdx = homeX - body.x;
            const hdy = homeY - body.y;
            body.vx += hdx * 0.001;
            body.vy += hdy * 0.001;
          }

          // --- RESPONSIVE SWARMING PHYSICS ---
          if (mouseRef.current.active) {
            const mdx = body.x - mouseRef.current.x;
            const mdy = body.y - mouseRef.current.y;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            
            const nx = mdx / (mdist || 1);
            const ny = mdy / (mdist || 1);

            // Hookean spring attraction constants
            // REDUCED: extremely slow and gentle swarming glide!
            const springK = body.subType === "core" 
              ? 0.02 
              : 0.001 + (0.002 / (body.mass || 1));

            // Dynamic Distance-Adaptive Friction: Smooth slow drag
            if (mdist < 75) {
              body.friction = body.subType === "core" ? 0.085 : 0.075;
            } else {
              body.friction = body.subType === "core" ? 0.035 : 0.05;
            }

            // Capped Hookean spring force to avoid physical overshoot explosion!
            // Capped extremely low to keep their movement majestic and slow
            const maxAttractForce = body.subType === "core" ? 0.6 : 0.25;
            let forceX = -mdx * springK;
            let forceY = -mdy * springK;
            
            const forceDist = Math.sqrt(forceX * forceX + forceY * forceY);
            if (forceDist > maxAttractForce) {
              forceX = (forceX / forceDist) * maxAttractForce;
              forceY = (forceY / forceDist) * maxAttractForce;
            }

            body.vx += forceX;
            body.vy += forceY;

            // Fluid wake drag when cursor is actively moving (creates trailing vortex)
            const moveWeight = interactiveState.current;
            if (moveWeight > 0.05) {
              const mouseVx = mouseRef.current.x - prevMouseRef.current.x;
              const mouseVy = mouseRef.current.y - prevMouseRef.current.y;
              const wakeFactor = body.subType === "trail" ? 0.12 : 0.06;
              body.vx += mouseVx * wakeFactor * moveWeight;
              body.vy += mouseVy * wakeFactor * moveWeight;
            }

            // EXCLUSION VOID BARRIER: Crisp boundary collision projection
            const voidBarrier = 17 + body.size; 
            if (mdist < voidBarrier) {
              const overlap = voidBarrier - mdist;
              body.x += nx * overlap * 0.95;
              body.y += ny * overlap * 0.95;

              // Reflect velocity vector away from center boundary
              const dot = body.vx * nx + body.vy * ny;
              if (dot < 0) {
                body.vx -= nx * dot * 1.5;
                body.vy -= ny * dot * 1.5;
              }
            }
          }

          // Viscous Zero-G damping (dynamic friction values)
          body.vx *= 1 - body.friction;
          body.vy *= 1 - body.friction;

          // Clamp maximum speed strictly: Core is slow (8px/frame), Polygons are very slow (4px/frame!)
          const speed = Math.sqrt(body.vx * body.vx + body.vy * body.vy);
          const maxSpeed = body.subType === "core" ? 8 : 4;
          if (speed > maxSpeed) {
            body.vx = (body.vx / speed) * maxSpeed;
            body.vy = (body.vy / speed) * maxSpeed;
          }

          body.x += body.vx;
          body.y += body.vy;

          if (body.angle !== undefined) {
            body.angle += (body.rotationSpeed || 0.0003) + (body.angularVelocity || 0);
            if (body.angularVelocity !== undefined) {
              body.angularVelocity *= 0.94;
            }
          }

          // Containment boundaries
          const limit = body.size;
          if (body.x < -limit) { body.x = -limit; body.vx *= -0.5; }
          if (body.x > width + limit) { body.x = width + limit; body.vx *= -0.5; }
          if (body.y < -limit) { body.y = -limit; body.vy *= -0.5; }
          if (body.y > height + limit) { body.y = height + limit; body.vy *= -0.5; }

        } else {
          // ==========================================
          // 2. SNOWFLAKES: DYNAMIC WINDSWEPT SNOWFALL
          // ==========================================
          let baseTargetVy = 0.3;
          let windFreq = 0.006;
          let windAmp = 0.16;

          if (body.depth === 2) {
            baseTargetVy = 0.22;
            windFreq = 0.004;
            windAmp = 0.22;
          } else if (body.depth === 1) {
            baseTargetVy = 0.32;
            windFreq = 0.006;
            windAmp = 0.14;
          } else {
            baseTargetVy = 0.42;
            windFreq = 0.008;
            windAmp = 0.08;
          }

          const windVx = Math.sin((timeRef.current * windFreq) + (body.y * 0.002)) * windAmp;

          // Snow gravity pull active when cursor stops (idleFactor maps 0 to 1)
          const snowForceMultiplier = 0.9 * idleFactor; 
          const targetVy = baseTargetVy + snowForceMultiplier;

          // Pull forces
          body.vx += (windVx - body.vx) * 0.08;
          body.vy += (targetVy - body.vy) * 0.08;

          body.vx *= 1 - body.friction;
          body.vy *= 1 - body.friction;

          body.x += body.vx;
          body.y += body.vy;

          // Wrap-around
          const pad = body.size * 2.5;
          if (body.x < -pad) body.x = width + pad;
          if (body.x > width + pad) body.x = -pad;
          
          if (body.y > height + pad) {
            body.y = -pad;
            body.x = Math.random() * width;
            body.vx = (Math.random() - 0.5) * 1.0;
            body.vy = targetVy;
          }
        }
      });

      // Rigid body separation pass (packs elements tightly together)
      for (let pass = 0; pass < 1; pass++) {
        for (let i = 0; i < bodies.length; i++) {
          const bA = bodies[i];
          for (let j = i + 1; j < bodies.length; j++) {
            const bB = bodies[j];

            if (pass === 1 && (bA.type !== "stone" || bB.type !== "stone")) {
              continue;
            }

            const dx = bB.x - bA.x;
            const dy = bB.y - bA.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            const rA = bA.size;
            const rB = bB.size;
            
            // Tight packing overlap spacing
            const spacePad = (bA.type === "stone" && bB.type === "stone") 
              ? (bA.subType === "core" || bB.subType === "core" ? -1.0 : -3.5)
              : 0;
            const minDist = rA + rB + spacePad;

            if (dist < minDist) {
              const overlap = minDist - dist;
              const nx = dx / (dist || 1);
              const ny = dy / (dist || 1);

              const totalMass = bA.mass + bB.mass;
              const pushA = overlap * (bB.mass / totalMass);
              const pushB = overlap * (bA.mass / totalMass);

              bA.x -= nx * pushA;
              bA.y -= ny * pushA;
              bB.x += nx * pushB;
              bB.y += ny * pushB;

              if (pass === 0) {
                const rvx = bB.vx - bA.vx;
                const rvy = bB.vy - bA.vy;
                const velNormal = rvx * nx + rvy * ny;

                if (velNormal < 0) {
                  const impulse = -1.35 * velNormal / (1 / bA.mass + 1 / bB.mass);
                  bA.vx -= (impulse / bA.mass) * nx;
                  bA.vy -= (impulse / bA.mass) * ny;
                  bB.vx += (impulse / bB.mass) * nx;
                  bB.vy += (impulse / bB.mass) * ny;
                }
              }
            }
          }
        }
      }

      // --- RENDER STAGE ---
      bodies.forEach((body) => {
        ctx.save();

        if (body.type === "stone") {
          // Render swarming carbon elements
          ctx.translate(body.x, body.y);
          ctx.rotate(body.angle || 0);

          if (body.size > 14) {
            ctx.shadowBlur = 8;
            ctx.shadowColor = "rgba(0, 0, 0, 0.5)"; // Soft carbon dropshadow
          }

          if (body.isCircle) {
            // Render Flat 2D Slate Circle
            ctx.beginPath();
            ctx.arc(0, 0, body.size, 0, Math.PI * 2);
            ctx.closePath();

            const circleGrad = ctx.createLinearGradient(-body.size, -body.size, body.size, body.size);
            if (body.subType === "core") {
              circleGrad.addColorStop(0, "rgba(74, 85, 104, 0.92)"); // Slate blue core dot
              circleGrad.addColorStop(1, "rgba(45, 55, 72, 0.85)");
            } else {
              circleGrad.addColorStop(0, "rgba(22, 22, 26, 0.94)"); // Matte carbon polygon
              circleGrad.addColorStop(1, "rgba(42, 42, 50, 0.72)");
            }

            ctx.fillStyle = circleGrad;
            ctx.globalAlpha = body.opacity;
            ctx.fill();

            // Refined border line
            ctx.strokeStyle = body.subType === "core" ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.07)";
            ctx.lineWidth = 0.85;
            ctx.stroke();
          } else if (body.vertices) {
            // Render Flat 2D Polygon (Square, Pentagon, Hexagon, Triangle)
            ctx.beginPath();
            ctx.moveTo(body.vertices[0].x, body.vertices[0].y);
            for (let j = 1; j < body.vertices.length; j++) {
              ctx.lineTo(body.vertices[j].x, body.vertices[j].y);
            }
            ctx.closePath();
            
            const polyGrad = ctx.createLinearGradient(-body.size, -body.size, body.size, body.size);
            polyGrad.addColorStop(0, "rgba(20, 20, 24, 0.94)");
            polyGrad.addColorStop(1, "rgba(40, 40, 48, 0.7)");

            ctx.fillStyle = polyGrad;
            ctx.globalAlpha = body.opacity;
            ctx.fill();

            ctx.strokeStyle = "rgba(255, 255, 255, 0.07)";
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }

        } else if (body.type === "flake") {
          // Render falling snowflakes
          ctx.globalAlpha = body.opacity;

          if (body.depth === 2) {
            // Foreground blur radial bokeh layers
            const radBlur = ctx.createRadialGradient(body.x, body.y, 0, body.x, body.y, body.size * 2.2);
            radBlur.addColorStop(0, "rgba(255, 255, 255, 0.35)");
            radBlur.addColorStop(0.4, "rgba(255, 255, 255, 0.14)");
            radBlur.addColorStop(1, "rgba(255, 255, 255, 0)");
            
            ctx.fillStyle = radBlur;
            ctx.beginPath();
            ctx.arc(body.x, body.y, body.size * 2.2, 0, Math.PI * 2);
            ctx.fill();
          } else if (body.depth === 1) {
            // Sharp midground snowflakes
            ctx.beginPath();
            ctx.arc(body.x, body.y, body.size, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 255, 255, 0.9)"; 
            ctx.fill();
          } else {
            // Distant background snowflakes
            ctx.shadowBlur = 3;
            ctx.shadowColor = "rgba(255, 255, 255, 0.25)";
            ctx.beginPath();
            ctx.arc(body.x, body.y, body.size, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(230, 240, 255, 0.75)";
            ctx.fill();
          }
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Deep premium dark indigo/midnight gradient background */}
      <div 
        className="absolute inset-0 z-[-4]" 
        style={{
          background: "radial-gradient(circle at 50% 30%, #0e112d 0%, #05060b 100%)"
        }}
      />
      
      {/* Subtle elegant colorful highlight glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.04)_0%,rgba(7,7,8,0)_80%)] z-[-3]" />
      
      {/* 2D Physics Attraction Field Drawing canvas */}
      <canvas
        ref={canvasRef}
        className="absolute w-[106vw] h-[106vh] pointer-events-none transition-transform duration-75 ease-out"
        style={{ zIndex: -2, top: "-3vh", left: "-3vw" }}
      />
    </>
  );
}