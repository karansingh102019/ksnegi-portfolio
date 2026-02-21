"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animated particle grid
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    // Particles
    const COLS = Math.floor(w / 48);
    const ROWS = Math.floor(h / 48);
    type Particle = { x: number; y: number; ox: number; oy: number; t: number; speed: number; opacity: number };
    const particles: Particle[] = [];

    for (let i = 0; i < COLS; i++) {
      for (let j = 0; j < ROWS; j++) {
        particles.push({
          x: (i / COLS) * w + 24,
          y: (j / ROWS) * h + 24,
          ox: (i / COLS) * w + 24,
          oy: (j / ROWS) * h + 24,
          t: Math.random() * Math.PI * 2,
          speed: 0.003 + Math.random() * 0.004,
          opacity: 0.03 + Math.random() * 0.08,
        });
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.t += p.speed;
        p.x = p.ox + Math.sin(p.t * 1.3) * 6;
        p.y = p.oy + Math.cos(p.t) * 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connecting lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 55) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(220, 38, 38, ${0.04 * (1 - dist / 55)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Radial red glow center */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(185,28,28,0.15) 0%, rgba(220,38,38,0.05) 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent z-10" />
      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-900 to-transparent z-10" />

      {/* Main content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 800ms ease, transform 800ms ease",
        }}
      >
        {/* Glitch 404 */}
        <div className="relative mb-4 select-none">
          <span
            className="block text-[10rem] sm:text-[14rem] lg:text-[18rem] font-black leading-none tracking-tighter"
            style={{
              background: "linear-gradient(135deg, #7f1d1d 0%, #dc2626 50%, #ef4444 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 40px rgba(220,38,38,0.4))",
            }}
          >
            404
          </span>

          {/* Glitch layers */}
          <span
            className="absolute inset-0 block text-[10rem] sm:text-[14rem] lg:text-[18rem] font-black leading-none tracking-tighter text-red-500/10"
            style={{
              animation: "glitch1 3.5s infinite",
              clipPath: "polygon(0 20%, 100% 20%, 100% 40%, 0 40%)",
            }}
          >
            404
          </span>
          <span
            className="absolute inset-0 block text-[10rem] sm:text-[14rem] lg:text-[18rem] font-black leading-none tracking-tighter text-red-800/10"
            style={{
              animation: "glitch2 4s infinite",
              clipPath: "polygon(0 60%, 100% 60%, 100% 75%, 0 75%)",
            }}
          >
            404
          </span>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-red-600" />
          <span className="text-xs font-mono tracking-[0.3em] text-red-500/70 uppercase">
            Page Not Found
          </span>
          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-red-600" />
        </div>

        {/* Message */}
        <p
          className="text-gray-400 text-base sm:text-lg max-w-md leading-relaxed mb-10"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 800ms ease 300ms",
          }}
        >
         {` Looks like this page got lost in the void. Let's get you back to
          something`}{" "}
          <span className="text-red-400 font-medium">real</span>.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 800ms ease 500ms",
          }}
        >
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_24px_rgba(220,38,38,0.35)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-white/10 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>

          <Link
            href="/#project"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-red-500/30 text-white/80 hover:text-white text-sm font-medium transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h8" />
            </svg>
            View Projects
          </Link>
        </div>

        {/* Bottom nav hints */}
        <div
          className="flex items-center gap-6 mt-16 text-xs text-white/20 font-mono tracking-widest"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 800ms ease 700ms",
          }}
        >
          {["Home", "About", "Projects", "Contact"].map((item, i) => (
            <Link
              key={i}
              href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
              className="hover:text-red-400 transition-colors duration-200 uppercase"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Glitch keyframes */}
      <style>{`
        @keyframes glitch1 {
          0%, 90%, 100% { transform: translate(0); opacity: 0; }
          92% { transform: translate(-4px, 1px); opacity: 1; }
          94% { transform: translate(4px, -1px); opacity: 1; }
          96% { transform: translate(-2px, 2px); opacity: 1; }
          98% { transform: translate(0); opacity: 0; }
        }
        @keyframes glitch2 {
          0%, 85%, 100% { transform: translate(0); opacity: 0; }
          87% { transform: translate(3px, -2px); opacity: 1; }
          89% { transform: translate(-3px, 1px); opacity: 1; }
          91% { transform: translate(1px, -1px); opacity: 1; }
          93% { transform: translate(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
}