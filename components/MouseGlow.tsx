"use client";
import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -999, y: -999 });
  const glow = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const ctx = canvas.getContext("2d")!;
    let raf: number;
    let t = 0;

    const lerp = (a: number, b: number, f: number) => a + (b - a) * f;

    const draw = () => {
      t += 0.018;

      glow.current.x = lerp(glow.current.x, mouse.current.x, 0.05);
      glow.current.y = lerp(glow.current.y, mouse.current.y, 0.05);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Distorted blob: 4 offset ellipses with different phases
      const blobs = [
        { dx: Math.sin(t * 1.1) * 38,  dy: Math.cos(t * 0.9) * 30,  rx: 310, ry: 260, a: 0.012 },
        { dx: Math.cos(t * 0.7) * 50,  dy: Math.sin(t * 1.3) * 42,  rx: 260, ry: 300, a: 0.01 },
        { dx: Math.sin(t * 1.5) * 28,  dy: Math.cos(t * 1.1) * 55,  rx: 280, ry: 240, a: 0.009 },
        { dx: Math.cos(t * 0.5) * 60,  dy: Math.sin(t * 0.8) * 35,  rx: 220, ry: 280, a: 0.008 },
      ];

      for (const b of blobs) {
        const cx = glow.current.x + b.dx;
        const cy = glow.current.y + b.dy;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(1, b.ry / b.rx); // make it elliptical
        ctx.translate(-cx, -cy);

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, b.rx);
        grad.addColorStop(0,   `rgba(200, 35, 12, ${b.a})`);
        grad.addColorStop(0.45,`rgba(140, 18, 6,  ${b.a * 0.5})`);
        grad.addColorStop(1,   "transparent");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, b.rx, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
    />
  );
}
