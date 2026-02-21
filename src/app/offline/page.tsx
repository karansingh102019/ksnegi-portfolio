"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function OfflinePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);
  const [dots, setDots] = useState([true, false, false]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animated signal dots
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i = (i + 1) % 4;
      setDots([i > 0, i > 1, i > 2]);
    }, 500);
    return () => clearInterval(t);
  }, []);

  // Canvas — broken wave / signal lines
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let time = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const drawBrokenWave = (
      yBase: number,
      amplitude: number,
      freq: number,
      speed: number,
      opacity: number,
      breakChance: number
    ) => {
      ctx.beginPath();
      let drawing = true;
      for (let x = 0; x <= w; x += 2) {
        // randomly break the line to simulate signal loss
        if (Math.random() < breakChance) drawing = !drawing;
        const y =
          yBase + Math.sin((x / w) * freq * Math.PI * 2 + time * speed) * amplitude;
        if (drawing) {
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        } else {
          ctx.moveTo(x, y);
        }
      }
      ctx.strokeStyle = `rgba(220, 38, 38, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      time += 0.012;

      drawBrokenWave(h * 0.3, 18, 3, 0.6, 0.07, 0.008);
      drawBrokenWave(h * 0.4, 12, 5, 0.9, 0.05, 0.012);
      drawBrokenWave(h * 0.5, 22, 2, 0.4, 0.08, 0.006);
      drawBrokenWave(h * 0.6, 10, 6, 1.1, 0.04, 0.015);
      drawBrokenWave(h * 0.7, 16, 4, 0.7, 0.06, 0.01);

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleRetry = () => window.location.reload();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-60" />

      {/* Center glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(185,28,28,0.12) 0%, rgba(220,38,38,0.04) 50%, transparent 70%)",
          }}
        />
      </div>

      {/* Top / bottom border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent z-10" />
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
        {/* WiFi / signal icon */}
        <div className="relative mb-8">
          {/* Outer ring pulse */}
          <div
            className="absolute inset-0 rounded-full border border-red-600/20"
            style={{ animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite" }}
          />
          <div className="w-24 h-24 rounded-full border border-red-800/40 bg-red-950/20 flex items-center justify-center backdrop-blur-sm">
            {/* Broken wifi SVG */}
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {/* Arc 1 — outer, broken */}
              <path
                strokeLinecap="round"
                strokeDasharray="4 3"
                d="M1.5 8.5C5 5 9.3 3 12 3s7 2 10.5 5.5"
                className="opacity-30"
              />
              {/* Arc 2 — mid */}
              <path
                strokeLinecap="round"
                d="M5 12c1.9-1.9 4.1-3 7-3s5.1 1.1 7 3"
              />
              {/* Arc 3 — inner */}
              <path
                strokeLinecap="round"
                d="M8.5 15.5c.9-.9 2.1-1.5 3.5-1.5s2.6.6 3.5 1.5"
                className="opacity-60"
              />
              {/* Center dot */}
              <circle cx="12" cy="19" r="1" fill="currentColor" />
              {/* X slash across */}
              <line
                x1="3"
                y1="3"
                x2="21"
                y2="21"
                strokeWidth={1.5}
                strokeLinecap="round"
                className="text-red-600"
              />
            </svg>
          </div>
        </div>

        {/* Signal bars */}
        <div className="flex items-end gap-1.5 mb-8">
          {[1, 2, 3].map((bar, i) => (
            <div
              key={i}
              className="rounded-sm transition-all duration-300"
              style={{
                width: "6px",
                height: `${10 + i * 6}px`,
                backgroundColor: dots[i]
                  ? "rgba(220,38,38,0.8)"
                  : "rgba(255,255,255,0.1)",
                boxShadow: dots[i]
                  ? "0 0 8px rgba(220,38,38,0.5)"
                  : "none",
              }}
            />
          ))}
          <span className="text-xs font-mono text-white/30 ml-2 tracking-widest">
            NO SIGNAL
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-3 leading-none"
          style={{
            background:
              "linear-gradient(135deg, #7f1d1d 0%, #dc2626 50%, #ef4444 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 30px rgba(220,38,38,0.3))",
          }}
        >
         {` You're Offline`}
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-red-600" />
          <span className="text-xs font-mono tracking-[0.3em] text-red-500/60 uppercase">
            Connection Lost
          </span>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-red-600" />
        </div>

        {/* Message */}
        <p className="text-gray-400 text-base sm:text-lg max-w-sm leading-relaxed mb-10">
          Seems like your internet connection is lost. Check your network and{" "}
          <span className="text-red-400 font-medium">try again</span>.
        </p>

        {/* Retry button */}
        <button
          onClick={handleRetry}
          className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_24px_rgba(220,38,38,0.35)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] overflow-hidden mb-4"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-white/10 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          <svg
            className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Try Again
        </button>

        {/* Bottom nav */}
        <div
          className="flex items-center gap-6 mt-10 text-xs text-white/20 font-mono tracking-widest"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 800ms ease 600ms",
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

      <style>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.4; }
          70%, 100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </div>
  );
}