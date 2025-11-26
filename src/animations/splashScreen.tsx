"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

// Coding Symbols
const codingSymbols = [
  "< />",
  "{ }",
  "( )",
  "[ ]",
  "</>",
  "<div>",
  "</div>",
  "<script>",
  "<head>",
  "<meta>",
  "<link>",
  "<span>",
  "<p>",
];

// Tech Logo Names
const techIcons = [
  "react",
  "next",
  "js",
  "ts",
  "git",
  "github",
  "docker",
  "html",
  "css",
  "tailwind",
  "node",
  "vite",
  "figma",
  "firebase",
  "mongo",
  "aws",
  "npm",
  "hooks",
  "gsap",
  "mysql",
  "photoshop",
  "",
];

export default function PortfolioLoader({ onDone }: { onDone?: () => void }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(wrapRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 });

    tl.fromTo(
      "#logo-stroke",
      { strokeDasharray: 800, strokeDashoffset: 800 },
      { strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut" }
    );

    tl.fromTo(
      logoRef.current,
      { scale: 0.85, opacity: 0.6 },
      { scale: 1, opacity: 1, duration: 0.8 },
      "-=1.0"
    );

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.4"
    );

    tl.to(wrapRef.current, {
      opacity: 0,
      duration: 0.6,
      delay: 0.8,
      onComplete: () => onDone?.(),
    });
  }, [onDone]);

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999] overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,20,120,0.15),transparent_70%)]" />

      {/* Soft Grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Main Logo */}
      <div
        ref={logoRef}
        className="relative flex flex-col items-center select-none"
      >
        <svg
          width="230"
          height="230"
          viewBox="0 0 200 200"
          fill="none"
          className="mb-4"
        >
          <path
            id="logo-stroke"
            d="M40 150 L40 60 L70 60 L70 110 L110 60 L150 60 L150 150 L120 150 L120 100 L85 150 L40 150 Z"
            stroke="#cf0116"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div
          ref={textRef}
          className="text-pink-300/80 tracking-[0.25em] uppercase text-medium font-semibold"
        >
          UI-Developer
        </div>
      </div>

      {/* Floating Tags + Logos */}
      {Array.from({ length: 45 }).map((_, i) => {
        const item =
          i % 2 === 0
            ? codingSymbols[Math.floor(Math.random() * codingSymbols.length)]
            : techIcons[Math.floor(Math.random() * techIcons.length)];

        const isText = typeof item === "string" && item.length <= 6;

        return (
          <div
            key={i}
            className="absolute font-mono drop-shadow select-none"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `floatTag ${4 + Math.random() * 3}s linear infinite`,
              color: "#7e1921",
              fontSize: "20px",
            }}
          >
            {isText ? item : <span>{getLogo(item)}</span>}
          </div>
        );
      })}

      <style>{`
        @keyframes floatTag {
          0% { transform: translateY(0px) scale(1); opacity: 0.35; }
          50% { opacity: 0.85; }
          100% { transform: translateY(-60px) scale(1.12); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* SVG ICONS  (20px, color #7e1921) */
function getLogo(name: string) {
  const color = "#7e1921";

  switch (name) {
    case "react":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="2" fill={color} />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke={color} />
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke={color} />
        </svg>
      );

    case "next":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 3L21 21" stroke={color} />
          <path d="M3 3H12V21H3V3Z" stroke={color} />
        </svg>
      );

    case "js":
      return (
        <svg width="20" height="20">
          <circle cx="10" cy="10" r="8" stroke={color} fill="transparent" />
        </svg>
      );

    case "ts":
      return (
        <svg width="20" height="20">
          <rect width="18" height="18" stroke={color} fill="transparent" />
        </svg>
      );

    case "git":
      return (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path d="M3 12L12 3L21 12L12 21L3 12Z" stroke={color} />
        </svg>
      );

    case "github":
      return (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" stroke={color} />
        </svg>
      );

    case "docker":
      return (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <rect x="3" y="10" width="18" height="8" stroke={color} />
        </svg>
      );

    case "html":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <polygon
            points="4,3 20,3 18,21 12,23 6,21"
            stroke={color}
            fill="none"
          />
        </svg>
      );

    case "css":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <polygon
            points="4,3 20,3 18,21 12,23 6,21"
            stroke={color}
            fill="none"
          />
        </svg>
      );

    case "tailwind":
      return (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path
            d="M3 12C4 8 7 6 10 8C13 10 16 10 18 7"
            stroke={color}
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );

    case "node":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24">
          <polygon
            points="12,2 21,7 21,17 12,22 3,17 3,7"
            stroke={color}
            fill="none"
          />
        </svg>
      );

    case "vite":
      return (
        <svg width="20" height="20">
          <polygon
            points="10,2 18,8 14,22 6,22 2,8"
            stroke={color}
            fill="none"
          />
        </svg>
      );

    case "figma":
      return (
        <svg width="20" height="20">
          <circle cx="10" cy="4" r="3" stroke={color} fill="none" />
          <circle cx="10" cy="10" r="3" stroke={color} fill="none" />
        </svg>
      );

    case "firebase":
      return (
        <svg width="20" height="20">
          <polygon points="6,18 12,3 18,18" stroke={color} fill="none" />
        </svg>
      );

    case "mongo":
      return (
        <svg width="20" height="20">
          <path
            d="M10 2C4 12 10 18 10 18C10 18 16 12 10 2Z"
            stroke={color}
            fill="none"
          />
        </svg>
      );

    default:
      return null;
  }
}
