"use client";

import { useEffect, useRef, useState } from "react";

type ButterflySpecies = "monarch" | "blue_morpho";

type ButterflyState = {
  id: number;
  species: ButterflySpecies;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  bankAngle: number;
  pitchAngle: number;
  bobY: number;
  size: number;
  maxSpeed: number;
  fearRadius: number;
  curve: number;
  phase: number;
  state: "wander" | "aware" | "flee" | "perched" | "landing" | "takeoff";
  blur: number;
  // Intermittent flight cadence: flutter bursts & glides
  isGliding: boolean;
  glideTimer: number;
  flutterTimer: number;
  flapPhase: number;
  flapSpeed: number;
  wanderAngle: number;
  // Smooth Flee Commitment (eliminates cursor proximity jitter/lag)
  fleeTimer: number;
  fleeAngle: number;
  // Flower Perching Dynamics ("in flower set fly top in flower")
  perchTimer: number;
  flightTimer: number;
  targetFlowerIndex: number;
  baskTimer: number;
  takeoffTimer: number;
  canPerch: boolean;
  cruiseDirX: 1 | -1;
  turnCooldown: number;
};

type BlossomPetal = {
  x: number;
  y: number;
  baseVx: number;
  baseVy: number;
  size: number;
  angle: number;
  vAngle: number;
  flipAngle: number;
  vFlip: number;
  swayPhase: number;
  vSway: number;
  opacity: number;
  hueColor: string;
};

type Firefly = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  pulsePhase: number;
  pulseSpeed: number;
  wanderAngle: number;
  color: string;
  glowColor: string;
};

// Prominent flower perch coordinates in the sunlit spring garden scenery
const FLOWER_PERCHES = [
  { x: 62.6, y: 79.3, angle: 32, name: "White Chamomile Daisy" },  // Prominent white daisy floret in lower foreground
  { x: 75.9, y: 62.6, angle: 18, name: "Pink Cosmos Blossom" },    // Large, sunny pink bloom in mid-right
  { x: 77.2, y: 71.5, angle: -24, name: "Crimson Wildflower" },    // Vibrant magenta blossom
  { x: 81.5, y: 14.5, angle: 55, name: "Cherry Blossom Cluster" }, // Blooming sakura canopy at top right
  { x: 64.9, y: 75.3, angle: -15, name: "Upper Chamomile Daisy" }, // Second white daisy in meadow
];

const INITIAL_BUTTERFLIES: ButterflyState[] = [
  {
    // Butterfly 0: Foreground Hero Monarch — cruises open sunny sky between heading & sakura canopy
    id: 0,
    species: "monarch",
    x: 48,
    y: 28,
    vx: 0.85,
    vy: -0.1,
    rotation: 72,
    bankAngle: 0,
    pitchAngle: 0,
    bobY: 0,
    size: 1.05,
    maxSpeed: 2.2,
    fearRadius: 240,
    curve: 1,
    phase: 0,
    state: "wander",
    blur: 0,
    isGliding: false,
    glideTimer: 0,
    flutterTimer: 1.5,
    flapPhase: 0,
    flapSpeed: 0.17,
    wanderAngle: -0.12,
    fleeTimer: 0,
    fleeAngle: 0,
    perchTimer: 0,
    flightTimer: 999999, // Always flying in hero view
    targetFlowerIndex: 1,
    baskTimer: 0,
    takeoffTimer: 0,
    canPerch: false,
    cruiseDirX: 1,
    turnCooldown: 16,
  },
  {
    // Butterfly 1: Electric Blue Morpho — dedicated flyer, iridescent cyan/sapphire wings in mid-right
    id: 1,
    species: "blue_morpho",
    x: 68,
    y: 44,
    vx: -0.75,
    vy: -0.12,
    rotation: -75,
    bankAngle: 0,
    pitchAngle: 0,
    bobY: 0,
    size: 0.98,
    maxSpeed: 2.0,
    fearRadius: 220,
    curve: -1,
    phase: 1.4,
    state: "wander",
    blur: 0,
    isGliding: false,
    glideTimer: 0,
    flutterTimer: 1.7,
    flapPhase: 1.4,
    flapSpeed: 0.18,
    wanderAngle: Math.PI - 0.15,
    fleeTimer: 0,
    fleeAngle: 0,
    perchTimer: 0,
    flightTimer: 999999, // Always flying in hero view
    targetFlowerIndex: 2,
    baskTimer: 0,
    takeoffTimer: 0,
    canPerch: false,
    cruiseDirX: -1,
    turnCooldown: 18,
  },
  {
    // Butterfly 2: Garden Daisy Percher — STARTS DIRECTLY PERCHED on top of the prominent White Chamomile Daisy!
    id: 2,
    species: "monarch",
    x: 62.6,
    y: 79.3,
    vx: 0,
    vy: 0,
    rotation: 32,
    bankAngle: 0,
    pitchAngle: 0,
    bobY: 0,
    size: 0.94,
    maxSpeed: 1.8,
    fearRadius: 180,
    curve: 1,
    phase: 2.6,
    state: "perched", // Sitting on top of the daisy floret on page load!
    blur: 0,
    isGliding: false,
    glideTimer: 0,
    flutterTimer: 1.6,
    flapPhase: 2.6,
    flapSpeed: 0.18,
    wanderAngle: 2.4,
    fleeTimer: 0,
    fleeAngle: 0,
    perchTimer: 8.5, // sits and basks for 8.5s then takes off (or instantly on cursor touch!)
    flightTimer: 14,
    targetFlowerIndex: 0, // White Chamomile Daisy
    baskTimer: 0,
    takeoffTimer: 0,
    canPerch: true,
    cruiseDirX: -1,
    turnCooldown: 15,
  },
  {
    // Butterfly 3: Full-Field Wildflower Flitter — Azure Blue Morpho hovering across left & right (prominently sized)
    id: 3,
    species: "blue_morpho",
    x: 22,
    y: 56,
    vx: 0.65,
    vy: -0.18,
    rotation: 58,
    bankAngle: 0,
    pitchAngle: 0,
    bobY: 0,
    size: 0.90, // Increased size to be prominent & perfect
    maxSpeed: 1.8,
    fearRadius: 160,
    curve: -1,
    phase: 3.8,
    state: "wander",
    blur: 0, // Razor sharp, no blur
    isGliding: false,
    glideTimer: 0,
    flutterTimer: 1.4,
    flapPhase: 3.8,
    flapSpeed: 0.19,
    wanderAngle: -0.2,
    fleeTimer: 0,
    fleeAngle: 0,
    perchTimer: 0,
    flightTimer: 18,
    targetFlowerIndex: 1, // Pink Cosmos
    baskTimer: 0,
    takeoffTimer: 0,
    canPerch: true,
    cruiseDirX: 1,
    turnCooldown: 14,
  },
  {
    // Butterfly 4: High Canopy Monarch — delicate flutter near cherry blossoms & open sky (prominently sized)
    id: 4,
    species: "monarch",
    x: 82,
    y: 20,
    vx: -0.55,
    vy: -0.12,
    rotation: -68,
    bankAngle: 0,
    pitchAngle: 0,
    bobY: 0,
    size: 0.86, // Increased size matching 3rd image reference!
    maxSpeed: 1.7,
    fearRadius: 150,
    curve: 1,
    phase: 5.1,
    state: "wander",
    blur: 0, // Razor sharp, no blur
    isGliding: false,
    glideTimer: 0,
    flutterTimer: 1.2,
    flapPhase: 5.1,
    flapSpeed: 0.2,
    wanderAngle: Math.PI - 0.18,
    fleeTimer: 0,
    fleeAngle: 0,
    perchTimer: 0,
    flightTimer: 24,
    targetFlowerIndex: 3, // Cherry Blossom Cluster
    baskTimer: 0,
    takeoffTimer: 0,
    canPerch: true,
    cruiseDirX: -1,
    turnCooldown: 17,
  },
];

export default function ButterflyField({ isNightMode = false }: { isNightMode?: boolean }) {
  const [isMounted, setIsMounted] = useState(false);
  const isNightRef = useRef(isNightMode);

  useEffect(() => {
    isNightRef.current = isNightMode;
  }, [isNightMode]);

  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const unitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const leftWingRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightWingRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Canvas for micro golden / cyan pollen trails and gentle falling petals
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailParticles = useRef<
    { x: number; y: number; alpha: number; size: number; color: string }[]
  >([]);
  const petalsRef = useRef<BlossomPetal[]>([]);
  const firefliesRef = useRef<Firefly[]>([]);
  const fireflyAlphaRef = useRef(isNightMode ? 1 : 0);

  const mouseRef = useRef({
    x: -2000,
    y: -2000,
    vx: 0,
    vy: 0,
    lastX: -2000,
    lastY: -2000,
    isOver: false,
  });

  const butterfliesRef = useRef<ButterflyState[]>(
    structuredClone(INITIAL_BUTTERFLIES)
  );

  useEffect(() => {
    setIsMounted(true);
    const container = containerRef.current;
    if (!container) return;

    if (
      !butterfliesRef.current ||
      butterfliesRef.current.length !== INITIAL_BUTTERFLIES.length ||
      butterfliesRef.current[0]?.id === undefined ||
      butterfliesRef.current[0]?.fleeTimer === undefined ||
      butterfliesRef.current[0]?.cruiseDirX === undefined
    ) {
      butterfliesRef.current = structuredClone(INITIAL_BUTTERFLIES);
    }

    const butterflies = butterfliesRef.current;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrame = 0;
    let lastTime = performance.now();

    // Canvas setup
    const canvas = canvasRef.current;
    let ctx: CanvasRenderingContext2D | null = null;
    let width = container.clientWidth;
    let height = container.clientHeight;

    let containerLeft = 0;
    let containerTop = 0;

    let isInitialized = false;

    const updateBounds = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      containerLeft = rect.left;
      containerTop = rect.top;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }

      // Convert initial percentages to absolute pixel coordinates ONCE ONLY!
      if (!isInitialized && width > 0 && height > 0) {
        butterflies.forEach((b) => {
          b.x = (b.x / 100) * width;
          b.y = (b.y / 100) * height;
        });
        isInitialized = true;
      }
    };

    if (canvas) {
      ctx = canvas.getContext("2d");
      updateBounds();
      window.addEventListener("resize", updateBounds, { passive: true });
      window.addEventListener("scroll", updateBounds, { passive: true });
    } else {
      updateBounds();
      window.addEventListener("resize", updateBounds, { passive: true });
    }

    // Initialize 16 gentle falling blossom petals that float gracefully DOWN
    const petalColors = [
      "rgba(255, 182, 193,", // Delicate sakura pink
      "rgba(255, 192, 203,", // Classic cherry pink
      "rgba(254, 205, 211,", // Soft blush rose
      "rgba(253, 164, 175,", // Vibrant blossom petal
    ];

    petalsRef.current = Array.from({ length: 16 }, () => ({
      x: Math.random() * (width || 1200),
      y: Math.random() * (height || 800),
      baseVx: -(Math.random() * 0.35 + 0.15), // natural gentle breeze leftward
      baseVy: Math.random() * 0.45 + 0.65,    // steady graceful downward descent ("flower down")
      size: Math.random() * 4.2 + 3.8,
      angle: Math.random() * Math.PI * 2,
      vAngle: (Math.random() - 0.5) * 0.015,
      flipAngle: Math.random() * Math.PI * 2,
      vFlip: Math.random() * 0.025 + 0.015,
      swayPhase: Math.random() * Math.PI * 2,
      vSway: Math.random() * 0.02 + 0.01,
      opacity: Math.random() * 0.35 + 0.5,
      hueColor: petalColors[Math.floor(Math.random() * petalColors.length)],
    }));

    // Initialize 24 living nocturnal fireflies scattered naturally over flowers & mid-air
    firefliesRef.current = Array.from({ length: 24 }, () => ({
      x: Math.random() * (width || 1200),
      y: (Math.random() * 0.6 + 0.35) * (height || 800),
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.2 - 0.05,
      size: Math.random() * 1.2 + 1.8,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.03 + 0.02,
      wanderAngle: Math.random() * Math.PI * 2,
      color: Math.random() < 0.85 ? "rgba(235, 255, 130," : "rgba(120, 245, 210,",
      glowColor: Math.random() < 0.85 ? "#bef264" : "#5eead4",
    }));

    const handlePointerMove = (event: PointerEvent) => {
      if (isTouch || prefersReducedMotion) return;
      const x = event.clientX - containerLeft;
      const y = event.clientY - containerTop;

      const mouse = mouseRef.current;
      mouse.vx = x - mouse.lastX;
      mouse.vy = y - mouse.lastY;
      mouse.lastX = x;
      mouse.lastY = y;
      mouse.x = x;
      mouse.y = y;
      mouse.isOver = true;
    };

    const handlePointerLeave = () => {
      mouseRef.current.isOver = false;
      mouseRef.current.x = -2000;
      mouseRef.current.y = -2000;
      mouseRef.current.vx = 0;
      mouseRef.current.vy = 0;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave);

    const animate = (time: number) => {
      const deltaMs = Math.min(time - lastTime, 40);
      const dt = deltaMs / 16.67;
      const dtSec = deltaMs / 1000;
      lastTime = time;

      if (width === 0 || height === 0) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      const mouse = mouseRef.current;
      const mouseSpeed = Math.hypot(mouse.vx, mouse.vy);

      // Anticipate cursor momentum
      const predictedMouseX = mouse.x + mouse.vx * 10;
      const predictedMouseY = mouse.y + mouse.vy * 10;

      /*
       * ------------------------------------------------------------------
       * 1. LIVING BUTTERFLY LIFECYCLE: 5 BUTTERFLIES, PERCHING, FLIGHT
       * ------------------------------------------------------------------
       */
      butterflies.forEach((butterfly, index) => {
        const wrapper = wrapperRefs.current[index];
        const unit = unitRefs.current[index];
        const leftWing = leftWingRefs.current[index];
        const rightWing = rightWingRefs.current[index];
        if (!wrapper || !unit || !leftWing || !rightWing) return;


        const dx = butterfly.x - predictedMouseX;
        const dy = butterfly.y - predictedMouseY;
        const distance = Math.hypot(dx, dy);

        const currentThreatRadius = butterfly.fearRadius + Math.min(mouseSpeed * 15, 120);
        const isCursorThreat = !isTouch && !prefersReducedMotion && mouse.isOver && distance < currentThreatRadius;
        const isFleeing = isCursorThreat && distance < currentThreatRadius * 0.52;

        let wingAngle = 18;

        /*
         * ==================================================================
         * STATE A: PERCHED ("in flower set") — SITTING ON FLOWER & BASKING
         * ==================================================================
         */
        if (butterfly.state === "perched") {
          const flower = FLOWER_PERCHES[butterfly.targetFlowerIndex % FLOWER_PERCHES.length];
          // Lock anchor to flower petal disc
          butterfly.x = (flower.x / 100) * width;
          butterfly.y = (flower.y / 100) * height;
          butterfly.vx = 0;
          butterfly.vy = 0;
          butterfly.bobY = 0;
          butterfly.pitchAngle = 0;
          butterfly.bankAngle = 0;
          butterfly.rotation = flower.angle;

          // Organic basking rhythm: wings slowly open wide to absorb sun, fold to 44°, pause, and repeat
          butterfly.baskTimer += dtSec;
          const baskOscillation = (Math.sin(butterfly.baskTimer * 1.3 + butterfly.phase) + 1) * 0.5;
          const easeBask = Math.pow(baskOscillation, 1.8);
          wingAngle = easeBask * 38 + 6; // from flat basking 6° to folded 44°

          // Subtle wing twitch every ~3.8 seconds
          const twitch = Math.sin(butterfly.baskTimer * 1.6);
          if (twitch > 0.94) {
            wingAngle += Math.sin(butterfly.baskTimer * 24) * 10;
          }

          // Cursor Reaction while perched: INSTANT STARTLED TAKEOFF!
          if (!isTouch && !prefersReducedMotion && mouse.isOver && distance < 165) {
            butterfly.state = "takeoff";
            butterfly.takeoffTimer = 0.85; // 0.85s of rapid upward thrust
            butterfly.flightTimer = Math.random() * 8 + 14; // fly for 14-22s
            const launchAngle = Math.atan2(dy, dx); // launch away from cursor!
            butterfly.vx = Math.cos(launchAngle) * 2.8;
            butterfly.vy = Math.sin(launchAngle) * 2.8 - 1.8; // explosive upward lift!
            butterfly.flapPhase = 0;
          } else {
            // Natural perch timer countdown
            butterfly.perchTimer -= dtSec;
            if (butterfly.perchTimer <= 0) {
              // Time to take off and fly around! ("fly top in flower")
              butterfly.state = "takeoff";
              butterfly.takeoffTimer = 0.95;
              butterfly.flightTimer = Math.random() * 8 + 13; // fly for 13-21s
              const launchAngle = (butterfly.rotation - 90) * (Math.PI / 180) + (Math.random() - 0.5) * 0.4;
              butterfly.vx = Math.cos(launchAngle) * 1.4;
              butterfly.vy = -2.3; // ascend smoothly up into the sky!
              butterfly.flapPhase = 0;
            }
          }
        }

        /*
         * ==================================================================
         * STATE B: TAKEOFF — LAUNCHING FROM FLOWER INTO AIR
         * ==================================================================
         */
        else if (butterfly.state === "takeoff") {
          butterfly.flapSpeed = 0.38;
          butterfly.flapPhase += butterfly.flapSpeed * dt;

          const flapSin = Math.sin(butterfly.flapPhase);
          wingAngle = ((flapSin + 1) * 0.5) * 76 - 8;
          butterfly.bobY = -Math.cos(butterfly.flapPhase) * 5.4;
          butterfly.pitchAngle = -8.0; // nose-up attitude during climb

          // Continuous upward propulsion during takeoff burst
          butterfly.vy -= 0.08 * dt;
          butterfly.x += butterfly.vx * dt;
          butterfly.y += butterfly.vy * dt;

          // Align heading with climb trajectory (+90° orientation fix)
          const targetHeading = Math.atan2(butterfly.vy, butterfly.vx) * (180 / Math.PI) + 90;
          let headingDiff = targetHeading - butterfly.rotation;
          headingDiff = ((headingDiff + 180) % 360) - 180;
          butterfly.rotation += headingDiff * 0.16 * dt;

          butterfly.takeoffTimer -= dtSec;
          if (butterfly.takeoffTimer <= 0) {
            butterfly.state = "wander";
            butterfly.wanderAngle = Math.atan2(butterfly.vy, butterfly.vx);
            butterfly.cruiseDirX = butterfly.vx >= 0 ? 1 : -1;
            butterfly.turnCooldown = Math.random() * 8 + 14;
          }
        }

        /*
         * ==================================================================
         * STATE C: LANDING — APPROACHING FLOWER TO PERCH
         * ==================================================================
         */
        else if (butterfly.state === "landing") {
          const flower = FLOWER_PERCHES[butterfly.targetFlowerIndex % FLOWER_PERCHES.length];
          const tx = (flower.x / 100) * width;
          const ty = (flower.y / 100) * height;

          const fdx = tx - butterfly.x;
          const fdy = ty - butterfly.y;
          const fDist = Math.hypot(fdx, fdy);

          // If threatened by mouse, abort landing and flee!
          if (isCursorThreat) {
            butterfly.state = "flee";
            butterfly.fleeTimer = 0.8;
            butterfly.fleeAngle = Math.atan2(dy, dx);
          } else {
            // Smooth guidance to flower: slows down as it gets near
            const approachAngle = Math.atan2(fdy, fdx);
            const approachSpeed = Math.max(0.45, Math.min(2.2, fDist * 0.038));
            const targetVx = Math.cos(approachAngle) * approachSpeed;
            const targetVy = Math.sin(approachAngle) * approachSpeed;

            butterfly.vx += (targetVx - butterfly.vx) * 0.09 * dt;
            butterfly.vy += (targetVy - butterfly.vy) * 0.09 * dt;

            butterfly.x += butterfly.vx * dt;
            butterfly.y += butterfly.vy * dt;

            // Flap gently while descending onto flower
            butterfly.flapSpeed = 0.22;
            butterfly.flapPhase += butterfly.flapSpeed * dt;
            const flapSin = Math.sin(butterfly.flapPhase);
            wingAngle = ((flapSin + 1) * 0.5) * 62 - 4;
            butterfly.bobY = -Math.cos(butterfly.flapPhase) * 2.4;

            // Heading smoothly aligns towards flower angle as it approaches touchdown
            const flightAngle = Math.atan2(butterfly.vy, butterfly.vx) * (180 / Math.PI) + 90;
            const alignProgress = Math.min(1, Math.max(0, (70 - fDist) / 70));
            const targetHeading = flightAngle * (1 - alignProgress) + flower.angle * alignProgress;
            let headingDiff = targetHeading - butterfly.rotation;
            headingDiff = ((headingDiff + 180) % 360) - 180;
            butterfly.rotation += headingDiff * 0.14 * dt;

            // TOUCHDOWN: Touch down cleanly on the flower petal disc!
            if (fDist < 14) {
              butterfly.state = "perched";
              butterfly.x = tx;
              butterfly.y = ty;
              butterfly.vx = 0;
              butterfly.vy = 0;
              butterfly.bobY = 0;
              butterfly.pitchAngle = 0;
              butterfly.bankAngle = 0;
              butterfly.rotation = flower.angle;
              butterfly.perchTimer = Math.random() * 5 + 8; // sit on flower for 8-13 seconds
              butterfly.baskTimer = 0;
            }
          }
        }

        /*
         * ==================================================================
         * STATE D: ACTIVE FLIGHT — WANDER, AWARE & FLEE
         * ==================================================================
         */
        else {
          // Check threat state with smooth escape commitment (NO jitter or lag)
          if (isFleeing) {
            butterfly.state = "flee";
            butterfly.isGliding = false;
            butterfly.flutterTimer = 1.2;
            butterfly.flapSpeed = 0.38;

            // If not already in an active flee burst, commit to escape vector
            if (butterfly.fleeTimer <= 0) {
              butterfly.fleeTimer = 0.8; // Commit to smooth 0.8s burst
              butterfly.fleeAngle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.35;
            }
          } else if (isCursorThreat && butterfly.fleeTimer <= 0) {
            butterfly.state = "aware";
            butterfly.isGliding = false;
            butterfly.flapSpeed = 0.26;
          } else if (butterfly.fleeTimer <= 0) {
            butterfly.state = "wander";
            // Flutter-glide rhythm
            if (butterfly.isGliding) {
              butterfly.glideTimer -= dtSec;
              if (butterfly.glideTimer <= 0) {
                butterfly.isGliding = false;
                butterfly.flutterTimer = Math.random() * 1.5 + 1.2;
              }
            } else {
              butterfly.flutterTimer -= dtSec;
              butterfly.flapSpeed = 0.17;
              if (butterfly.flutterTimer <= 0) {
                butterfly.isGliding = true;
                butterfly.glideTimer = Math.random() * 0.5 + 0.35;
              }
            }

            // Periodic flower visitation for perching species
            if (butterfly.canPerch) {
              butterfly.flightTimer -= dtSec;
              if (butterfly.flightTimer <= 0) {
                butterfly.targetFlowerIndex = (butterfly.targetFlowerIndex + 1 + Math.floor(Math.random() * 2)) % FLOWER_PERCHES.length;
                butterfly.state = "landing";
              }
            }
          }

          // Advance flap phase
          if (!butterfly.isGliding) {
            butterfly.flapPhase += butterfly.flapSpeed * dt;
          }

          // Compute 3D wing fold, lift bob & pitch
          if (!butterfly.isGliding) {
            const flapSin = Math.sin(butterfly.flapPhase);
            const fold = (flapSin + 1) * 0.5;
            wingAngle = fold * 74 - 8;
            butterfly.bobY = -Math.cos(butterfly.flapPhase) * (butterfly.state === "flee" ? 5.6 : 3.8);
            butterfly.pitchAngle = -Math.sin(butterfly.flapPhase) * (butterfly.state === "flee" ? 5.5 : 3.2);
          } else {
            wingAngle = 18;
            butterfly.bobY *= 0.9;
            butterfly.pitchAngle = butterfly.pitchAngle * 0.9 + 1.2 * 0.1;
          }

          /*
           * ----------------------------------------------------------------
           * STEERING FORCES (SMOOTH FLEE & CRUISE WANDER)
           * ----------------------------------------------------------------
           */
          if (butterfly.fleeTimer > 0) {
            // Committed smooth escape along fleeAngle (completely eliminates lag/jitter)
            butterfly.fleeTimer -= dtSec;
            const escapeSpeed = butterfly.maxSpeed * 1.85;
            const targetVx = Math.cos(butterfly.fleeAngle) * escapeSpeed;
            const targetVy = Math.sin(butterfly.fleeAngle) * escapeSpeed;

            butterfly.vx += (targetVx - butterfly.vx) * 0.12 * dt;
            butterfly.vy += (targetVy - butterfly.vy) * 0.12 * dt;
            if (butterfly.fleeTimer <= 0) {
              butterfly.cruiseDirX = butterfly.vx >= 0 ? 1 : -1;
              butterfly.wanderAngle = Math.atan2(butterfly.vy, butterfly.vx);
              butterfly.turnCooldown = Math.random() * 8 + 14;
            }
          } else if (isCursorThreat) {
            // Smooth steering away from cursor
            const safeDist = Math.max(distance, 0.001);
            const nx = dx / safeDist;
            const ny = dy / safeDist;
            const turnAngle = Math.atan2(ny, nx);
            let dAngle = turnAngle - butterfly.wanderAngle;
            dAngle = ((dAngle + Math.PI) % (Math.PI * 2)) - Math.PI;
            butterfly.wanderAngle += dAngle * 0.1 * dt;

            const targetVx = Math.cos(butterfly.wanderAngle) * (butterfly.maxSpeed * 1.4);
            const targetVy = Math.sin(butterfly.wanderAngle) * (butterfly.maxSpeed * 1.4);
            butterfly.vx += (targetVx - butterfly.vx) * 0.08 * dt;
            butterfly.vy += (targetVy - butterfly.vy) * 0.08 * dt;
          } else {
            // Natural mixed flight: Dominant Horizontal Left/Right traverse with authentic Bottom-to-Top ascending flutter lift
            butterfly.turnCooldown = (butterfly.turnCooldown ?? 15) - dtSec;
            if (butterfly.turnCooldown <= 0) {
              butterfly.cruiseDirX = butterfly.cruiseDirX === 1 ? -1 : 1;
              butterfly.turnCooldown = Math.random() * 8 + 14;
            }

            const dirX = butterfly.cruiseDirX ?? (butterfly.vx >= 0 ? 1 : -1);

            // Upward lift bias: butterflies naturally rise from bottom flowers (y > 55%) towards mid/top canopy
            const heightRatio = butterfly.y / Math.max(height, 1);
            const upwardBias = heightRatio > 0.55 ? -0.36 * Math.min(1, (heightRatio - 0.55) / 0.35) : -0.08;

            // Wing flutter lift: active downstrokes produce upward lift impulses (-vy)
            const flapLift = !butterfly.isGliding ? -0.22 * Math.max(0, Math.sin(butterfly.flapPhase)) : 0.14;

            // Gentle altitude undulating wave (natural graceful flight path)
            const altitudeWave = Math.sin(time * 0.0015 + butterfly.phase) * 0.22;

            // Target pitch angle combining horizontal traverse with bottom-to-top ascent
            const targetPitch = upwardBias + altitudeWave;
            const targetAngle = dirX === 1 ? targetPitch : Math.PI - targetPitch;

            // Rate-limited heading adjustment towards horizontal/ascent cruise
            let dAngle = targetAngle - butterfly.wanderAngle;
            dAngle = ((dAngle + Math.PI) % (Math.PI * 2)) - Math.PI;
            butterfly.wanderAngle += dAngle * 0.065 * dt;

            // Cruising velocities: horizontal traversal is primary & majestic
            const cruiseSpeed = butterfly.isGliding ? butterfly.maxSpeed * 0.88 : butterfly.maxSpeed;
            const targetVx = Math.cos(butterfly.wanderAngle) * cruiseSpeed;
            const targetVy = Math.sin(butterfly.wanderAngle) * cruiseSpeed + flapLift;

            butterfly.vx += (targetVx - butterfly.vx) * 0.06 * dt;
            butterfly.vy += (targetVy - butterfly.vy) * 0.06 * dt;
          }

          /*
           * ==================================================================
           * FULL-SCREEN BOUNDARY & CORNER ANTI-TRAP GUIDANCE
           * ==================================================================
           * 1. Allows butterflies to freely roam the ENTIRE screen (left & right)
           * 2. Deflects cleanly away from the fixed WhatsApp button at bottom-right
           * 3. Prevents top/bottom corner stalling or heading spin loops
           */

          // WhatsApp Button Avoidance Bubble (bottom-right corner ~ 150px)
          const waDist = Math.hypot(butterfly.x - (width - 45), butterfly.y - (height - 45));
          if (waDist < 150) {
            const pushAngle = Math.atan2(height * 0.5 - butterfly.y, width * 0.55 - butterfly.x);
            let dAngle = pushAngle - butterfly.wanderAngle;
            dAngle = ((dAngle + Math.PI) % (Math.PI * 2)) - Math.PI;
            butterfly.wanderAngle += dAngle * 0.22 * dt;
            butterfly.vx += Math.cos(pushAngle) * 0.45 * dt;
            butterfly.vy += Math.sin(pushAngle) * 0.45 * dt;
          }

          /*
           * ===================================================================
           * ORGANIC BOUNDARY SOFT-STEERING (PREVENTS LEFT-EDGE VANISHING / STUCK)
           * ===================================================================
           * 1. Generous 160px soft-buffer on left edge to gracefully bank rightward
           * 2. Smoothly aligns wanderAngle towards open screen center
           * 3. Wing-safe cushion so wings are never cut off by overflow-hidden
           */
          const padLeft = 160;
          const padRight = 140;
          const padTop = 110;
          const padBottom = 130;

          // Left border aerodynamic curve (turns smoothly rightward into meadow)
          if (butterfly.x < padLeft) {
            const tLeft = (padLeft - butterfly.x) / padLeft;
            const targetRight = (Math.sin(butterfly.phase + butterfly.x * 0.05) * 0.35); // -20° to +20° rightward
            let dAngle = targetRight - butterfly.wanderAngle;
            dAngle = ((dAngle + Math.PI) % (Math.PI * 2)) - Math.PI;
            butterfly.wanderAngle += dAngle * (0.16 + tLeft * 0.25) * dt;
            butterfly.vx += tLeft * 0.42 * dt;
            if (butterfly.vx < 0) {
              butterfly.vx *= (1 - 0.15 * tLeft * dt);
            }
            butterfly.cruiseDirX = 1;
            butterfly.turnCooldown = Math.random() * 8 + 14;
          } else if (butterfly.x > width - padRight) {
            const tRight = (butterfly.x - (width - padRight)) / padRight;
            const targetLeft = Math.PI + (Math.sin(butterfly.phase + butterfly.x * 0.05) * 0.35);
            let dAngle = targetLeft - butterfly.wanderAngle;
            dAngle = ((dAngle + Math.PI) % (Math.PI * 2)) - Math.PI;
            butterfly.wanderAngle += dAngle * (0.16 + tRight * 0.25) * dt;
            butterfly.vx -= tRight * 0.42 * dt;
            if (butterfly.vx > 0) {
              butterfly.vx *= (1 - 0.15 * tRight * dt);
            }
            butterfly.cruiseDirX = -1;
            butterfly.turnCooldown = Math.random() * 8 + 14;
          }

          // Vertical boundary curves: bottom meadow gently lifts upward (bottom-to-top)
          if (butterfly.y < padTop) {
            const tTop = (padTop - butterfly.y) / padTop;
            const targetDown = Math.PI * 0.5 + (Math.random() - 0.5) * 0.3;
            let dAngle = targetDown - butterfly.wanderAngle;
            dAngle = ((dAngle + Math.PI) % (Math.PI * 2)) - Math.PI;
            butterfly.wanderAngle += dAngle * (0.14 + tTop * 0.2) * dt;
            butterfly.vy += tTop * 0.35 * dt;
            if (butterfly.vy < 0) butterfly.vy *= (1 - 0.12 * tTop * dt);
          } else if (butterfly.y > height - padBottom) {
            const tBottom = (butterfly.y - (height - padBottom)) / padBottom;
            const targetUp = -Math.PI * 0.5 + (Math.random() - 0.5) * 0.3;
            let dAngle = targetUp - butterfly.wanderAngle;
            dAngle = ((dAngle + Math.PI) % (Math.PI * 2)) - Math.PI;
            butterfly.wanderAngle += dAngle * (0.16 + tBottom * 0.25) * dt;
            butterfly.vy -= tBottom * 0.45 * dt; // Strong bottom-to-top lift from ground flowers!
            if (butterfly.vy > 0) butterfly.vy *= (1 - 0.15 * tBottom * dt);
          }

          // Guarantee continuous aerodynamic forward momentum (never stall into near-zero speed)
          const currentSpeed = Math.hypot(butterfly.vx, butterfly.vy);
          const minFlightSpeed = butterfly.maxSpeed * 0.6;
          if (currentSpeed < minFlightSpeed && butterfly.state === "wander") {
            butterfly.vx += Math.cos(butterfly.wanderAngle) * (minFlightSpeed - currentSpeed) * 0.12 * dt;
            butterfly.vy += Math.sin(butterfly.wanderAngle) * (minFlightSpeed - currentSpeed) * 0.12 * dt;
          }

          // Speed limit enforcement
          const maxLimit = butterfly.fleeTimer > 0 || isFleeing ? butterfly.maxSpeed * 2.2 : butterfly.maxSpeed * 1.25;
          const newSpeed = Math.hypot(butterfly.vx, butterfly.vy);
          if (newSpeed > maxLimit) {
            butterfly.vx = (butterfly.vx / newSpeed) * maxLimit;
            butterfly.vy = (butterfly.vy / newSpeed) * maxLimit;
          }

          butterfly.x += butterfly.vx * dt;
          butterfly.y += butterfly.vy * dt;

          // Safe wing-cushion clamping (never slices wings or vanishes into the left line)
          const minMarginX = Math.max(75, butterfly.size * 65);
          const minMarginY = Math.max(55, butterfly.size * 55);

          if (butterfly.x < minMarginX) {
            butterfly.x = minMarginX;
            if (butterfly.vx < 0) butterfly.vx = Math.abs(butterfly.vx) * 0.6 + 0.3;
            butterfly.wanderAngle = (Math.random() - 0.5) * 0.6; // decisively face into meadow
          } else if (butterfly.x > width - minMarginX) {
            butterfly.x = width - minMarginX;
            if (butterfly.vx > 0) butterfly.vx = -Math.abs(butterfly.vx) * 0.6 - 0.3;
            butterfly.wanderAngle = Math.PI + (Math.random() - 0.5) * 0.6;
          }

          if (butterfly.y < minMarginY) {
            butterfly.y = minMarginY;
            if (butterfly.vy < 0) butterfly.vy = Math.abs(butterfly.vy) * 0.6 + 0.3;
            butterfly.wanderAngle = Math.PI * 0.5 + (Math.random() - 0.5) * 0.6;
          } else if (butterfly.y > height - minMarginY) {
            butterfly.y = height - minMarginY;
            if (butterfly.vy > 0) butterfly.vy = -Math.abs(butterfly.vy) * 0.6 - 0.3;
            butterfly.wanderAngle = -Math.PI * 0.5 + (Math.random() - 0.5) * 0.6;
          }

          // Heading & Banking: natural rate-limited turning (eliminates corner spin loops)
          if (newSpeed > 0.25) {
            const targetHeading = Math.atan2(butterfly.vy, butterfly.vx) * (180 / Math.PI) + 90;
            let headingDiff = targetHeading - butterfly.rotation;
            headingDiff = ((headingDiff + 180) % 360) - 180;
            const maxTurn = 14 * dt;
            const turnAmount = Math.max(-maxTurn, Math.min(maxTurn, headingDiff * 0.12 * dt));
            butterfly.rotation += turnAmount;

            const targetBank = Math.max(-28, Math.min(28, headingDiff * 1.1));
            butterfly.bankAngle += (targetBank - butterfly.bankAngle) * 0.12 * dt;
          }
        }

        // Apply 3D wing transform & sunlight/moonlight illumination
        const foldNormalized = Math.max(0, Math.min(1, (wingAngle + 8) / 74));
        const lighting = 1 - foldNormalized * 0.18;
        const isNight = isNightRef.current;
        const isPerched = butterfly.state === "perched";
        const isBlue = butterfly.species === "blue_morpho";

        // Day vs Night Mode Bioluminescent Moonlight Aura & Shadows
        let shadowFilter: string;
        if (isNight) {
          const glowColor = isBlue ? "rgba(56, 189, 248, 0.75)" : "rgba(251, 191, 36, 0.75)";
          shadowFilter = isPerched
            ? `drop-shadow(0 0 10px ${glowColor}) drop-shadow(0 2px 4px rgba(0,0,0,0.85)) brightness(1.15)`
            : `drop-shadow(0 0 16px ${glowColor}) drop-shadow(0 4px 12px rgba(0,0,0,0.75)) brightness(1.2)`;
        } else {
          shadowFilter = isPerched
            ? `drop-shadow(0 3px 6px rgba(35, 18, 8, 0.45)) brightness(${lighting})`
            : `drop-shadow(0 8px 18px rgba(0, 0, 0, 0.32)) brightness(${lighting})`;
        }

        leftWing.style.transform = `rotateY(${wingAngle}deg) rotateZ(${wingAngle * 0.03}deg)`;
        leftWing.style.filter = shadowFilter;

        rightWing.style.transform = `rotateY(${-wingAngle}deg) rotateZ(${-wingAngle * 0.03}deg)`;
        rightWing.style.filter = shadowFilter;

        // Apply 60fps DOM Transforms
        wrapper.style.transform = `translate3d(${butterfly.x}px, ${butterfly.y + butterfly.bobY}px, 0) translate(-50%, -50%) rotate(${butterfly.rotation}deg) scale(${butterfly.size})`;
        unit.style.transform = `rotateY(${butterfly.bankAngle}deg) rotateX(${butterfly.pitchAngle}deg)`;

        // Emit delicate micro shimmer dust behind active hero flyers
        const currentSpd = Math.hypot(butterfly.vx, butterfly.vy);
        if (
          (index === 0 || index === 1) &&
          butterfly.state !== "perched" &&
          (currentSpd > 1.3 || butterfly.fleeTimer > 0) &&
          Math.random() < 0.28 &&
          trailParticles.current.length < 25
        ) {
          const rad = (butterfly.rotation - 90) * (Math.PI / 180);
          trailParticles.current.push({
            x: butterfly.x - Math.cos(rad) * 20 + (Math.random() - 0.5) * 4,
            y: butterfly.y + butterfly.bobY - Math.sin(rad) * 20 + (Math.random() - 0.5) * 4,
            alpha: 0.38,
            size: Math.random() * 1.2 + 0.6, // delicate micro-sparkle, never clunky balls
            color: butterfly.species === "blue_morpho"
              ? "rgba(125, 211, 252,"
              : "rgba(253, 224, 71,",
          });
        }
      });

      /*
       * ------------------------------------------------------------------
       * 2. CANVAS RENDERING: POLLEN & PEACEFUL FALLING SAKURA BLOSSOMS
       * ------------------------------------------------------------------
       */
      if (ctx && canvas) {
        const context = ctx;
        const isNight = isNightRef.current;
        context.clearRect(0, 0, width, height);

        // 1. Delicate Pollen Dust Trails (Fades quickly, never lingers as dots)
        for (let i = trailParticles.current.length - 1; i >= 0; i--) {
          const p = trailParticles.current[i];
          p.alpha -= 0.035 * dt; // fast, graceful fade
          p.y += 0.08 * dt;
          if (p.alpha <= 0) {
            trailParticles.current.splice(i, 1);
          } else {
            context.beginPath();
            context.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            context.fillStyle = `${p.color} ${p.alpha})`;
            context.fill();
          }
        }

        // 2. Peaceful Falling Cherry Blossom Petals (Always float DOWN gracefully)
        petalsRef.current.forEach((petal) => {
          petal.swayPhase += petal.vSway * dt;
          petal.flipAngle += petal.vFlip * dt;
          petal.angle += petal.vAngle * dt;

          // Gentle horizontal breeze oscillation
          const naturalSway = Math.sin(petal.swayPhase) * 0.38;
          petal.x += (petal.baseVx + naturalSway) * dt;

          // Steady downward descent ("flower down") — NEVER flies upward!
          petal.y += petal.baseVy * dt;

          // Soft cursor air disturbance: petals gently drift sideways, NEVER launch upward
          if (mouse.isOver) {
            const mdx = petal.x - mouse.x;
            const mdy = petal.y - mouse.y;
            const mDist = Math.hypot(mdx, mdy);
            if (mDist < 85 && mDist > 0) {
              const proximity = 1 - mDist / 85;
              // Soft horizontal deflection only
              petal.x += (mdx > 0 ? 0.35 : -0.35) * proximity * dt;
              petal.vFlip += 0.012 * proximity; // slightly quicker tumble
            }
          }

          // Wrap edges smoothly
          if (petal.y > height + 25) {
            petal.y = -20;
            petal.x = Math.random() * width * 0.75 + width * 0.25;
          }
          if (petal.x < -30) {
            petal.x = width + 20;
            petal.y = Math.random() * height * 0.6;
          }

          // Render authentic 3D tumbling petal with sakura notch cleft
          context.save();
          context.translate(petal.x, petal.y);
          context.rotate(petal.angle);
          context.scale(1, Math.sin(petal.flipAngle)); // 3D tumble flip

          const w = petal.size * 1.5;
          const h = petal.size * 0.88;

          context.beginPath();
          context.moveTo(-w * 0.75, 0); // stem base
          context.bezierCurveTo(-w * 0.4, -h, w * 0.5, -h * 0.95, w * 0.72, -h * 0.32);
          context.bezierCurveTo(w * 0.55, -h * 0.08, w * 0.55, h * 0.08, w * 0.72, h * 0.32); // cleft notch
          context.bezierCurveTo(w * 0.5, h * 0.95, -w * 0.4, h, -w * 0.75, 0);
          context.closePath();

          context.fillStyle = `${petal.hueColor} ${petal.opacity})`;
          context.fill();

          context.restore();
        });

        // 3. Dedicated Living Night Fireflies (Smoothly active only in Night Mode)
        const targetFireflyAlpha = isNight ? 1 : 0;
        fireflyAlphaRef.current += (targetFireflyAlpha - fireflyAlphaRef.current) * 0.08 * dt;

        if (fireflyAlphaRef.current > 0.01) {
          const globalFfAlpha = fireflyAlphaRef.current;
          firefliesRef.current.forEach((ff) => {
            // Organic pulsing rhythm (breathing glow)
            ff.pulsePhase += ff.pulseSpeed * dt;
            const rawPulse = Math.sin(ff.pulsePhase);
            const pulseIntensity = Math.pow(Math.max(0, rawPulse), 2.2);

            // Gentle wandering & hovering drift
            ff.wanderAngle += (Math.random() - 0.5) * 0.16 * dt;
            const speed = 0.3 + Math.sin(ff.pulsePhase * 0.5) * 0.12;
            ff.vx += (Math.cos(ff.wanderAngle) * speed - ff.vx) * 0.05 * dt;
            ff.vy += (Math.sin(ff.wanderAngle) * speed - 0.05 - ff.vy) * 0.05 * dt;

            // Interactive cursor disturbance
            if (mouse.isOver) {
              const fdx = ff.x - mouse.x;
              const fdy = ff.y - mouse.y;
              const fDist = Math.hypot(fdx, fdy);
              if (fDist < 100 && fDist > 0) {
                const repel = (1 - fDist / 100) * 0.75;
                ff.x += (fdx / fDist) * repel * dt;
                ff.y += (fdy / fDist) * repel * dt;
              }
            }

            ff.x += ff.vx * dt;
            ff.y += ff.vy * dt;

            // Wrap edges
            if (ff.x < -20) ff.x = width + 15;
            if (ff.x > width + 20) ff.x = -15;
            if (ff.y < height * 0.2) {
              ff.y = height + 10;
              ff.x = Math.random() * width;
            }
            if (ff.y > height + 25) {
              ff.y = height * 0.35;
            }

            const currentBrightness = Math.max(0.06, pulseIntensity) * globalFfAlpha;
            if (currentBrightness < 0.02) return;

            const r = ff.size;

            // Soft radial ambient aura
            context.save();
            const glowRadius = r * 5.2;
            const grad = context.createRadialGradient(ff.x, ff.y, 0, ff.x, ff.y, glowRadius);
            grad.addColorStop(0, `${ff.color} ${0.5 * currentBrightness})`);
            grad.addColorStop(0.4, `${ff.color} ${0.18 * currentBrightness})`);
            grad.addColorStop(1, `${ff.color} 0)`);
            context.fillStyle = grad;
            context.beginPath();
            context.arc(ff.x, ff.y, glowRadius, 0, Math.PI * 2);
            context.fill();

            // Inner bright core
            context.beginPath();
            context.arc(ff.x, ff.y, r * 0.85, 0, Math.PI * 2);
            context.fillStyle = `rgba(255, 255, 255, ${0.9 * currentBrightness})`;
            context.shadowColor = ff.glowColor;
            context.shadowBlur = 8;
            context.fill();
            context.restore();
          });
        }
      }

      mouse.vx *= 0.88;
      mouse.vy *= 0.88;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden z-[35] butterfly-container select-none"
      aria-hidden="true"
    >
      {/* Canvas for pollen particles and peaceful falling sakura blossom petals */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
      />

      {butterfliesRef.current.map((butterfly, index) => {
        const isBlue = butterfly.species === "blue_morpho";
        const leftWingImg = isBlue
          ? "/images/butterfly-blue-wing-left.webp"
          : "/images/butterfly-wing-left.webp";
        const rightWingImg = isBlue
          ? "/images/butterfly-blue-wing-right.webp"
          : "/images/butterfly-wing-right.webp";
        const bodyImg = isBlue
          ? "/images/butterfly-blue-body.webp"
          : "/images/butterfly-body.webp";

        return (
          <div
            key={`butterfly-unit-${butterfly.id ?? index}`}
            ref={(el) => {
              wrapperRefs.current[index] = el;
            }}
            style={{
              filter: butterfly.blur > 0 ? `blur(${butterfly.blur}px)` : "none",
              opacity: isMounted ? 1 : 0,
              transform: `translate3d(${butterfly.x}vw, ${butterfly.y}vh, 0) translate(-50%, -50%) rotate(${butterfly.rotation}deg) scale(${butterfly.size})`,
              transition: isMounted ? "none" : "opacity 0.4s ease-out",
            }}
            className="absolute left-0 top-0 will-change-transform pointer-events-none"
          >
            {/* 3D Attitude Container (Roll / Bank & Pitch) */}
            <div
              ref={(el) => {
                unitRefs.current[index] = el;
              }}
              className={`relative pointer-events-none select-none ${
                index === 0
                  ? "w-18 sm:w-22 md:w-26"
                  : index === 1
                  ? "w-16 sm:w-20 md:w-24"
                  : index === 2
                  ? "w-15 sm:w-18 md:w-22"
                  : index === 3
                  ? "w-14 sm:w-17 md:w-20"
                  : "w-14 sm:w-16 md:w-19"
              }`}
              style={{
                aspectRatio: "956 / 625",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Left Wing (hinges at 100% 50% along central body axis) */}
              <div
                ref={(el) => {
                  leftWingRefs.current[index] = el;
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "50.42%",
                  height: "100%",
                  transformOrigin: "100% 50%",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={leftWingImg}
                  alt=""
                  draggable={false}
                  className="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]"
                />
              </div>

              {/* Right Wing (hinges at 0% 50% along central body axis) */}
              <div
                ref={(el) => {
                  rightWingRefs.current[index] = el;
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: "49.58%",
                  width: "50.42%",
                  height: "100%",
                  transformOrigin: "0% 50%",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={rightWingImg}
                  alt=""
                  draggable={false}
                  className="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]"
                />
              </div>

              {/* Center Body with Head, Antennae, Thorax, and Abdomen (Stable Anchor) */}
              <div
                className="absolute pointer-events-none select-none z-10"
                style={{
                  left: "46.02%",
                  top: "25.6%",
                  width: "7.95%",
                  height: "61.76%",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={bodyImg}
                  alt=""
                  draggable={false}
                  className="w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
