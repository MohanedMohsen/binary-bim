'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useI18n } from '@/lib/i18n';

interface NodeData {
  id: number;
  label: string;
  sublabel: string;
  chaosX: number; // Normalized 0..1
  chaosY: number; // Normalized 0..1
  targetX: number; // Normalized 0..1
  targetY: number; // Normalized 0..1
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isPrimary: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  sourceNode: number;
  targetNode: number;
  t: number; // 0..1 progress along connection
  speed: number;
  size: number;
  alpha: number;
}

interface BinaryColumn {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  wordIndex: number;
  wordTimer: number;
  wordActive: boolean;
  wordAlpha: number;
  targetWord: string;
}

const CONCEPTS = ['WORKFLOW', 'AUTOMATION', 'DATA', 'BIM'];

export function BinaryWorkflowVisualization() {
  const { t, locale } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Status indicator state
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [statusText, setStatusText] = useState<string>('INPUT DISPERSION');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Mouse interaction refs
  const mouseRef = useRef<{ x: number; y: number; active: boolean; targetX: number; targetY: number }>({
    x: -9999,
    y: -9999,
    active: false,
    targetX: -9999,
    targetY: -9999,
  });

  const prefersReducedMotionRef = useRef<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotionRef.current = mediaQuery.matches;
    const handleChange = () => {
      prefersReducedMotionRef.current = mediaQuery.matches;
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !canvasRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseRef.current.targetX = x;
    mouseRef.current.targetY = y;
    mouseRef.current.active = true;

    // Calculate subtle 3D tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -3; // max 3deg
    const tiltY = ((x - centerX) / centerX) * 3;
    setTilt({ x: tiltX, y: tiltY });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    mouseRef.current.active = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseRef.current.active = false;
    mouseRef.current.targetX = -9999;
    mouseRef.current.targetY = -9999;
    setTilt({ x: 0, y: 0 });
  }, []);

  // Main Canvas Animation Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;

    // Observe intersection so we don't render when scrolled away
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    // Responsive sizing
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height || 260;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    resize();
    const resizeObserver = new ResizeObserver(() => resize());
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    // Define Nodes (6 conceptual + 6 satellites)
    const rawNodes: NodeData[] = [
      // 0: Input (Left)
      { id: 0, label: 'INPUT', sublabel: 'DESIGN DATA', chaosX: 0.14, chaosY: 0.25, targetX: 0.15, targetY: 0.35, x: 0, y: 0, vx: 0.2, vy: -0.15, radius: 4.5, isPrimary: true },
      // 1: Data (Upper Left)
      { id: 1, label: 'DATA', sublabel: 'BIM PARAMS', chaosX: 0.28, chaosY: 0.75, targetX: 0.22, targetY: 0.65, x: 0, y: 0, vx: -0.18, vy: 0.12, radius: 4.2, isPrimary: true },
      // 2: Processing (Center Left)
      { id: 2, label: 'PROCESSING', sublabel: 'REVIT ENGINE', chaosX: 0.42, chaosY: 0.22, targetX: 0.36, targetY: 0.5, x: 0, y: 0, vx: 0.12, vy: 0.2, radius: 5, isPrimary: true },
      // 3: Automation (Center Right)
      { id: 3, label: 'AUTOMATION', sublabel: 'FINISH LAYERS', chaosX: 0.68, chaosY: 0.78, targetX: 0.64, targetY: 0.5, x: 0, y: 0, vx: -0.14, vy: -0.18, radius: 5, isPrimary: true },
      // 4: Workflow (Upper Right)
      { id: 4, label: 'WORKFLOW', sublabel: 'ROOM MAPPER', chaosX: 0.84, chaosY: 0.28, targetX: 0.78, targetY: 0.35, x: 0, y: 0, vx: 0.16, vy: 0.14, radius: 4.2, isPrimary: true },
      // 5: Output (Right)
      { id: 5, label: 'OUTPUT', sublabel: 'COORDINATED', chaosX: 0.72, chaosY: 0.68, targetX: 0.85, targetY: 0.65, x: 0, y: 0, vx: -0.15, vy: -0.12, radius: 4.5, isPrimary: true },

      // Satellite Workers
      { id: 6, label: '', sublabel: '', chaosX: 0.22, chaosY: 0.45, targetX: 0.12, targetY: 0.5, x: 0, y: 0, vx: 0.1, vy: -0.1, radius: 2.2, isPrimary: false },
      { id: 7, label: '', sublabel: '', chaosX: 0.35, chaosY: 0.60, targetX: 0.28, targetY: 0.3, x: 0, y: 0, vx: -0.12, vy: 0.14, radius: 2.2, isPrimary: false },
      { id: 8, label: '', sublabel: '', chaosX: 0.58, chaosY: 0.24, targetX: 0.46, targetY: 0.28, x: 0, y: 0, vx: 0.15, vy: -0.1, radius: 2.5, isPrimary: false },
      { id: 9, label: '', sublabel: '', chaosX: 0.52, chaosY: 0.78, targetX: 0.54, targetY: 0.72, x: 0, y: 0, vx: -0.1, vy: -0.12, radius: 2.2, isPrimary: false },
      { id: 10, label: '', sublabel: '', chaosX: 0.78, chaosY: 0.45, targetX: 0.72, targetY: 0.7, x: 0, y: 0, vx: 0.12, vy: 0.15, radius: 2.2, isPrimary: false },
      { id: 11, label: '', sublabel: '', chaosX: 0.88, chaosY: 0.72, targetX: 0.88, targetY: 0.5, x: 0, y: 0, vx: -0.14, vy: -0.1, radius: 2.5, isPrimary: false },
    ];

    // Connections between nodes [sourceId, targetId]
    const connections: [number, number][] = [
      [0, 1], [0, 6], [1, 7], [6, 2], [7, 2], [1, 2],
      [2, 8], [2, 9], // feeding center core
      [8, 3], [9, 3], [3, 4], [3, 10], [4, 5], [10, 5], [4, 11], [5, 11]
    ];

    // Flow particles along connections
    const particleCount = 28;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const connIndex = i % connections.length;
      particles.push({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        sourceNode: connections[connIndex][0],
        targetNode: connections[connIndex][1],
        t: Math.random(),
        speed: 0.0035 + Math.random() * 0.004,
        size: 1.5 + Math.random() * 1.5,
        alpha: 0.3 + Math.random() * 0.7,
      });
    }

    // Binary background matrix layer
    const columnCount = 10;
    const binaryColumns: BinaryColumn[] = [];
    for (let i = 0; i < columnCount; i++) {
      const chars: string[] = [];
      for (let j = 0; j < 16; j++) {
        chars.push(Math.random() > 0.5 ? '1' : '0');
      }
      binaryColumns.push({
        x: (i + 0.5) / columnCount,
        y: Math.random(),
        speed: 0.0003 + Math.random() * 0.0004,
        chars,
        wordIndex: i % CONCEPTS.length,
        wordTimer: Math.random() * 400,
        wordActive: false,
        wordAlpha: 0,
        targetWord: CONCEPTS[i % CONCEPTS.length],
      });
    }

    // Smooth easing helper
    const smoothStep = (x: number): number => {
      const clamped = Math.max(0, Math.min(1, x));
      return clamped * clamped * (3 - 2 * clamped);
    };

    // Cycle length: 16 seconds
    const CYCLE_DURATION = 16000;
    let startTime = performance.now();

    // Pulses radiating from central core
    const corePulses: { r: number; maxR: number; alpha: number }[] = [];

    // Tracking loop
    let lastTime = performance.now();

    const render = (now: number) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Mouse smoothing
      const m = mouseRef.current;
      if (m.active) {
        m.x += (m.targetX - m.x) * 0.1;
        m.y += (m.targetY - m.y) * 0.1;
      } else {
        m.x = -9999;
        m.y = -9999;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Check prefers-reduced-motion
      const isReduced = prefersReducedMotionRef.current;

      // Calculate Cycle Progress (0..1)
      const elapsed = (now - startTime) % CYCLE_DURATION;
      const progress = isReduced ? 0.8 : elapsed / CYCLE_DURATION;

      // 5-STEP CYCLE LOGIC:
      // Step 1: Chaos / Manual Work (0.00 - 0.22)
      // Step 2: Connection (0.22 - 0.46)
      // Step 3: Processing (0.46 - 0.72)
      // Step 4: Automation (0.72 - 0.90)
      // Step 5: Loop Transition (0.90 - 1.00)
      let step = 1;
      let orgFactor = 0; // 0 = complete chaos, 1 = perfectly structured
      let lineAlphaBase = 0.08;
      let coreActivation = 0.2;
      let status = '01 // MANUAL REDUNDANCY';

      if (progress < 0.22) {
        step = 1;
        orgFactor = 0;
        lineAlphaBase = 0.06;
        coreActivation = 0.25;
        status = '01 // MANUAL REDUNDANCY';
      } else if (progress < 0.46) {
        step = 2;
        const p = (progress - 0.22) / 0.24;
        orgFactor = smoothStep(p * 0.5);
        lineAlphaBase = 0.06 + smoothStep(p) * 0.24;
        coreActivation = 0.25 + smoothStep(p) * 0.35;
        status = '02 // NEURAL LINKING';
      } else if (progress < 0.72) {
        step = 3;
        const p = (progress - 0.46) / 0.26;
        orgFactor = 0.5 + smoothStep(p) * 0.5;
        lineAlphaBase = 0.3 + smoothStep(p) * 0.2;
        coreActivation = 0.6 + Math.sin(p * Math.PI * 4) * 0.25;
        status = '03 // ENGINE PROCESSING';

        // Spawn pulse wave from core
        if (Math.random() < 0.04 && corePulses.length < 3) {
          corePulses.push({ r: 24, maxR: Math.min(width, height) * 0.45, alpha: 0.6 });
        }
      } else if (progress < 0.90) {
        step = 4;
        orgFactor = 1.0;
        lineAlphaBase = 0.45;
        coreActivation = 0.85;
        status = '04 // WORKFLOW OPTIMIZED';
      } else {
        step = 5;
        const p = (progress - 0.90) / 0.10;
        orgFactor = 1.0 - smoothStep(p);
        lineAlphaBase = 0.45 - smoothStep(p) * 0.38;
        coreActivation = 0.85 - smoothStep(p) * 0.6;
        status = '05 // AUTO RECALIBRATING';
      }

      // Update React UI state cleanly
      if (step !== currentStep) {
        setCurrentStep(step);
        setStatusText(status);
      }

      // Center Core Coordinates
      const cx = width / 2;
      const cy = height / 2;

      // -------------------------------------------------------------
      // LAYER 1: Subtle Binary Data Matrix Background
      // -------------------------------------------------------------
      ctx.font = '9px monospace';
      binaryColumns.forEach((col, idx) => {
        col.y = (col.y + col.speed) % 1;
        col.wordTimer += dt * 30;

        // Transition word logic
        if (col.wordTimer > 180 && !col.wordActive && Math.random() < 0.005) {
          col.wordActive = true;
          col.wordAlpha = 0;
        }

        if (col.wordActive) {
          col.wordAlpha = Math.min(col.wordAlpha + dt * 1.5, 0.45);
          if (col.wordTimer > 320) {
            col.wordAlpha = Math.max(col.wordAlpha - dt * 1.5, 0);
            if (col.wordAlpha <= 0) {
              col.wordActive = false;
              col.wordTimer = 0;
            }
          }
        }

        const colX = col.x * width;
        const startY = (col.y * height) % height;

        // Render binary stream
        for (let j = 0; j < col.chars.length; j++) {
          const charY = (startY + j * 16) % height;
          ctx.fillStyle = 'rgba(148, 163, 184, 0.04)';
          ctx.fillText(col.chars[j], colX, charY);
        }

        // Render transitioned word if active
        if (col.wordActive && col.wordAlpha > 0.01) {
          ctx.save();
          ctx.fillStyle = `rgba(34, 211, 238, ${col.wordAlpha})`;
          ctx.font = '600 10px monospace';
          ctx.letterSpacing = '2px';
          const wy = (startY + 4 * 16) % height;
          ctx.fillText(col.targetWord, colX - 10, wy);
          ctx.restore();
        }
      });

      // -------------------------------------------------------------
      // LAYER 2: Central Binary BIM Ambient Core Glow & Pulses
      // -------------------------------------------------------------
      // Calculate mouse proximity to center
      const distMouseToCenter = Math.hypot(m.x - cx, m.y - cy);
      const mouseCoreBoost = m.active && distMouseToCenter < 160 ? (1 - distMouseToCenter / 160) * 0.45 : 0;
      const totalCoreGlow = Math.min(coreActivation + mouseCoreBoost, 1.2);

      // Core Radial Aura
      const coreAura = ctx.createRadialGradient(cx, cy, 10, cx, cy, 95);
      coreAura.addColorStop(0, `rgba(6, 182, 212, ${0.18 * totalCoreGlow})`);
      coreAura.addColorStop(0.4, `rgba(37, 99, 235, ${0.10 * totalCoreGlow})`);
      coreAura.addColorStop(1, 'rgba(11, 17, 32, 0)');
      ctx.fillStyle = coreAura;
      ctx.beginPath();
      ctx.arc(cx, cy, 95, 0, Math.PI * 2);
      ctx.fill();

      // Render expanding pulse waves
      for (let i = corePulses.length - 1; i >= 0; i--) {
        const pulse = corePulses[i];
        pulse.r += dt * 60;
        pulse.alpha = Math.max(0, pulse.alpha - dt * 0.5);

        ctx.strokeStyle = `rgba(34, 211, 238, ${pulse.alpha * 0.35})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, pulse.r, 0, Math.PI * 2);
        ctx.stroke();

        if (pulse.r >= pulse.maxR || pulse.alpha <= 0) {
          corePulses.splice(i, 1);
        }
      }

      // -------------------------------------------------------------
      // LAYER 3: Calculate Node Positions (Interpolate Chaos <-> Structured)
      // -------------------------------------------------------------
      rawNodes.forEach((node) => {
        // Chaos drift
        if (!isReduced) {
          node.chaosX += node.vx * dt * 0.02;
          node.chaosY += node.vy * dt * 0.02;
          if (node.chaosX < 0.08 || node.chaosX > 0.92) node.vx *= -1;
          if (node.chaosY < 0.12 || node.chaosY > 0.88) node.vy *= -1;
        }

        const baseChaosX = node.chaosX * width;
        const baseChaosY = node.chaosY * height;
        const baseTargetX = node.targetX * width;
        const baseTargetY = node.targetY * height;

        // Linear interpolation by orgFactor
        let targetPosX = baseChaosX + (baseTargetX - baseChaosX) * orgFactor;
        let targetPosY = baseChaosY + (baseTargetY - baseChaosY) * orgFactor;

        // Mouse elastic repulsion / attraction on nodes
        if (m.active) {
          const dmx = m.x - targetPosX;
          const dmy = m.y - targetPosY;
          const distM = Math.hypot(dmx, dmy);
          if (distM < 110 && distM > 0) {
            const force = (1 - distM / 110) * 16;
            targetPosX -= (dmx / distM) * force;
            targetPosY -= (dmy / distM) * force;
          }
        }

        // Smooth node position
        node.x += (targetPosX - node.x) * 0.15;
        node.y += (targetPosY - node.y) * 0.15;
      });

      // -------------------------------------------------------------
      // LAYER 4: Connection Network Lines
      // -------------------------------------------------------------
      connections.forEach(([sId, tId]) => {
        const s = rawNodes[sId];
        const t = rawNodes[tId];
        if (!s || !t) return;

        // Proximity of mouse to this line segment
        let lineBoost = 0;
        if (m.active) {
          const ldx = t.x - s.x;
          const ldy = t.y - s.y;
          const lenSq = ldx * ldx + ldy * ldy;
          if (lenSq > 0) {
            const u = Math.max(0, Math.min(1, ((m.x - s.x) * ldx + (m.y - s.y) * ldy) / lenSq));
            const projX = s.x + u * ldx;
            const projY = s.y + u * ldy;
            const distLine = Math.hypot(m.x - projX, m.y - projY);
            if (distLine < 50) {
              lineBoost = (1 - distLine / 50) * 0.45;
            }
          }
        }

        const finalLineAlpha = Math.min(lineAlphaBase + lineBoost, 0.85);

        // Draw line with subtle cyan gradient
        const lineGrad = ctx.createLinearGradient(s.x, s.y, t.x, t.y);
        lineGrad.addColorStop(0, `rgba(6, 182, 212, ${finalLineAlpha * 0.7})`);
        lineGrad.addColorStop(0.5, `rgba(56, 189, 248, ${finalLineAlpha})`);
        lineGrad.addColorStop(1, `rgba(37, 99, 235, ${finalLineAlpha * 0.7})`);

        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = lineBoost > 0 ? 1.5 : 0.85;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(t.x, t.y);
        ctx.stroke();
      });

      // -------------------------------------------------------------
      // LAYER 5: Data Flow Particles
      // -------------------------------------------------------------
      if (!isReduced) {
        particles.forEach((p) => {
          const s = rawNodes[p.sourceNode];
          const t = rawNodes[p.targetNode];
          if (!s || !t) return;

          // Increase particle speed during processing & automation
          const speedMultiplier = step === 3 ? 1.8 : step === 4 ? 1.4 : 1.0;
          p.t = (p.t + p.speed * speedMultiplier) % 1;

          // Position along segment
          let px = s.x + (t.x - s.x) * p.t;
          let py = s.y + (t.y - s.y) * p.t;

          // Mouse gravitational pull on nearby particles
          if (m.active) {
            const dx = m.x - px;
            const dy = m.y - py;
            const dist = Math.hypot(dx, dy);
            if (dist < 120 && dist > 0) {
              const pull = (1 - dist / 120) * 14;
              px += (dx / dist) * pull;
              py += (dy / dist) * pull;
            }
          }

          p.x = px;
          p.y = py;

          // Draw particle
          const particleGlow = ctx.createRadialGradient(px, py, 0, px, py, p.size * 2.5);
          particleGlow.addColorStop(0, `rgba(255, 255, 255, ${p.alpha})`);
          particleGlow.addColorStop(0.4, `rgba(34, 211, 238, ${p.alpha * 0.8})`);
          particleGlow.addColorStop(1, 'rgba(6, 182, 212, 0)');

          ctx.fillStyle = particleGlow;
          ctx.beginPath();
          ctx.arc(px, py, p.size * 2, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // -------------------------------------------------------------
      // LAYER 6: Render Network Nodes
      // -------------------------------------------------------------
      rawNodes.forEach((node) => {
        const isHoverNode = m.active && Math.hypot(m.x - node.x, m.y - node.y) < 32;

        // Outer glow
        const nodeGlow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3.5);
        nodeGlow.addColorStop(0, `rgba(34, 211, 238, ${isHoverNode ? 0.9 : 0.6})`);
        nodeGlow.addColorStop(0.5, `rgba(6, 182, 212, ${isHoverNode ? 0.5 : 0.25})`);
        nodeGlow.addColorStop(1, 'rgba(11, 17, 32, 0)');
        ctx.fillStyle = nodeGlow;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Node center circle
        ctx.fillStyle = isHoverNode ? '#FFFFFF' : '#38BDF8';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Thin outer ring
        ctx.strokeStyle = `rgba(255, 255, 255, ${isHoverNode ? 0.8 : 0.3})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 3, 0, Math.PI * 2);
        ctx.stroke();

        // Node Label (Visible during structured steps or hover)
        if (node.isPrimary && (orgFactor > 0.45 || isHoverNode)) {
          const labelAlpha = Math.min((orgFactor - 0.4) * 2, 1);
          ctx.save();
          ctx.font = '600 8.5px monospace';
          ctx.letterSpacing = '1px';
          ctx.fillStyle = `rgba(241, 245, 249, ${isHoverNode ? 1 : labelAlpha * 0.85})`;
          ctx.textAlign = 'center';
          ctx.fillText(node.label, node.x, node.y - node.radius - 8);

          // Sublabel on hover or in full automation step
          if (isHoverNode || orgFactor > 0.85) {
            ctx.font = '500 7px monospace';
            ctx.fillStyle = `rgba(148, 163, 184, ${isHoverNode ? 0.9 : labelAlpha * 0.6})`;
            ctx.fillText(node.sublabel, node.x, node.y + node.radius + 12);
          }
          ctx.restore();
        }
      });

      // -------------------------------------------------------------
      // LAYER 7: Central "BINARY BIM" Automation Engine Element
      // -------------------------------------------------------------
      ctx.save();
      // Slow rotation for technical reticle
      const reticleAngle = (now / 1000) * 0.15;

      // Outer rotating reticle ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(reticleAngle);
      ctx.strokeStyle = `rgba(34, 211, 238, ${0.25 * totalCoreGlow})`;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.arc(0, 0, 36, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Counter-rotating technical brackets
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-reticleAngle * 0.75);
      ctx.strokeStyle = `rgba(56, 189, 248, ${0.4 * totalCoreGlow})`;
      ctx.lineWidth = 1.25;
      ctx.setLineDash([10, 30]);
      ctx.beginPath();
      ctx.arc(0, 0, 42, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Inner Solid Backdrop Disc
      const discGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 32);
      discGrad.addColorStop(0, '#111D38');
      discGrad.addColorStop(0.7, '#0B1120');
      discGrad.addColorStop(1, '#0B1120');
      ctx.fillStyle = discGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 30, 0, Math.PI * 2);
      ctx.fill();

      // Disc Border
      ctx.strokeStyle = `rgba(34, 211, 238, ${0.45 * totalCoreGlow})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, 30, 0, Math.PI * 2);
      ctx.stroke();

      // Center Typography: BINARY BIM
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // "BINARY"
      ctx.font = '700 9px system-ui, -apple-system, sans-serif';
      ctx.letterSpacing = '2px';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText('BINARY', cx + 1, cy - 5);

      // "BIM"
      ctx.font = '800 9.5px system-ui, -apple-system, sans-serif';
      ctx.letterSpacing = '2.5px';
      ctx.fillStyle = '#38BDF8';
      ctx.fillText('BIM', cx + 1, cy + 6);

      ctx.restore();

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, [currentStep]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.18s cubic-bezier(0.2, 0, 0.2, 1)',
      }}
      className="relative flex flex-col w-full bg-transparent overflow-hidden select-none"
    >
      {/* Main Interactive Canvas Area (Compact Height, Seamless Background) */}
      <div className="relative h-[210px] sm:h-[230px] lg:h-[240px] w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 block h-full w-full cursor-crosshair touch-none"
        />
      </div>
    </div>
  );
}
