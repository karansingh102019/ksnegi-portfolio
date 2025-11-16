"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SplashRedSolar({ onDone }: { onDone?: () => void }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const orbitRefs = useRef<HTMLDivElement[]>([]);

  /** 8 REAL PLANETS */
  const PLANETS = [
    { name: "mercury", orbit: 70, size: 6, speed: 2.6 },
    { name: "venus", orbit: 95, size: 9, speed: 3.4 },
    { name: "earth", orbit: 120, size: 10, speed: 4.2 },
    { name: "mars", orbit: 145, size: 8, speed: 5.3 },
    { name: "jupiter", orbit: 180, size: 16, speed: 6.8 },
    { name: "saturn", orbit: 215, size: 14, speed: 7.8, ring: true },
    { name: "uranus", orbit: 245, size: 11, speed: 9.2 },
    { name: "neptune", orbit: 275, size: 11, speed: 10.3 },
  ];

  useEffect(() => {
    /** Fade in */
    gsap.fromTo(wrapRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 });

    /** Rotate each orbit group */
    PLANETS.forEach((p, i) => {
      gsap.to(orbitRefs.current[i], {
        rotate: 360,
        duration: p.speed,
        repeat: -1,
        ease: "none",
      });
    });

    /** Fade out after animation */
    setTimeout(() => {
      gsap.to(wrapRef.current, {
        opacity: 0,
        duration: 0.35,
        onComplete: () => onDone?.(),
      });
    }, 2800);
  }, []);

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random(),
              filter: "blur(1px)",
              animation: `twinkle ${1 + Math.random() * 2}s infinite`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative w-[650px] h-[650px] flex items-center justify-center">
        <div
          className="absolute rounded-full"
          style={{
            width: 90,
            height: 90,
            background: "radial-gradient(circle, #ff3030, #d60000)",
            boxShadow: "0 0 70px #ff2020, 0 0 150px #ff0000",
            zIndex: 50,
          }}
        />

        {PLANETS.map((p, i) => (
          <div
            key={i}
            ref={(el) => (orbitRefs.current[i] = el!)}
            className="absolute flex items-center justify-center"
            style={{
              width: p.orbit * 2,
              height: p.orbit * 2,
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "50%",
            }}
          >
            {/* Planet */}
            <div
              className="absolute rounded-full"
              style={{
                width: p.size,
                height: p.size,
                right: 0,
                background:
                  p.name === "earth"
                    ? "radial-gradient(circle, #6fbaff, #0055ff)"
                    : p.name === "mars"
                    ? "radial-gradient(circle, #ff7040, #cc3000)"
                    : p.name === "jupiter"
                    ? "radial-gradient(circle, #ffb37a, #c96d2e)"
                    : p.name === "saturn"
                    ? "radial-gradient(circle, #ffe0b3, #cc9a38)"
                    : p.name === "uranus"
                    ? "radial-gradient(circle, #8ffaff, #4fc7d5)"
                    : p.name === "neptune"
                    ? "radial-gradient(circle, #7bb6ff, #365bbb)"
                    : "radial-gradient(circle, #ff9999, #cc0000)",
                boxShadow: "0 0 12px rgba(255,80,80,0.5)",
              }}
            ></div>

            {/* Saturn Rings */}
            {p.ring && (
              <div
                className="absolute rounded-full"
                style={{
                  width: p.size * 4,
                  height: p.size * 1.7,
                  right: -p.size * 1.5,
                  border: "1px solid rgba(255,220,150,0.5)",
                  transform: "rotate(25deg)",
                }}
              ></div>
            )}
          </div>
        ))}

        <div className="absolute bottom-8 text-red-300/70 text-sm tracking-widest">
          Synchronizing Modules…
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.1; }
          50% { opacity: 1; }
          100% { opacity: 0.1; }
        }
      `}</style>
    </div>
  );
}
