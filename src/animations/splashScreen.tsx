"use client";
import React, { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

interface Planet {
  name: string;
  orbit: number;
  size: number;
  speed: number;
  ring?: boolean;
}

interface SplashProps {
  onDone?: () => void;
}

export default function SplashRedSolar({ onDone }: SplashProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const orbitRefs = useRef<(HTMLDivElement | null)[]>([]);

  /** 8 REAL PLANETS */
  const PLANETS = useMemo<Planet[]>(
    () => [
      { name: "mercury", orbit: 70, size: 6, speed: 2.6 },
      { name: "venus", orbit: 95, size: 9, speed: 3.4 },
      { name: "earth", orbit: 120, size: 10, speed: 4.2 },
      { name: "mars", orbit: 145, size: 8, speed: 5.3 },
      { name: "jupiter", orbit: 180, size: 16, speed: 6.8 },
      { name: "saturn", orbit: 215, size: 14, speed: 7.8, ring: true },
      { name: "uranus", orbit: 245, size: 11, speed: 9.2 },
      { name: "neptune", orbit: 275, size: 11, speed: 10.3 },
    ],
    []
  );

  useEffect(() => {
    // Fade-in
    gsap.fromTo(wrapRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 });

    // Orbit rotations
    PLANETS.forEach((planet, i) => {
      const orbit = orbitRefs.current[i];
      if (!orbit) return;

      gsap.to(orbit, {
        rotate: 360,
        duration: planet.speed,
        repeat: -1,
        ease: "none",
      });
    });

    // Fade-out after 2.8s
    const timer = setTimeout(() => {
      gsap.to(wrapRef.current, {
        opacity: 0,
        duration: 0.35,
        onComplete: () => onDone?.(),
      });
    }, 2800);

    return () => clearTimeout(timer);
  }, [onDone, PLANETS]);

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* ⭐ STAR FIELD */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: size,
                height: size,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random(),
                filter: "blur(1px)",
                animation: `twinkle ${1 + Math.random() * 2}s infinite`,
              }}
            />
          );
        })}
      </div>

      {/* 🌞 SUN + PLANETS */}
      <div className="relative w-[650px] h-[650px] flex items-center justify-center">
        {/* SUN */}
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

        {/* PLANET ORBITS */}
        {PLANETS.map((planet, i) => (
          <div
            key={planet.name}
            ref={(el: HTMLDivElement | null) => {
              orbitRefs.current[i] = el;
            }}
            className="absolute flex items-center justify-center"
            style={{
              width: planet.orbit * 2,
              height: planet.orbit * 2,
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "50%",
            }}
          >
            {/* Planet */}
            <div
              className="absolute rounded-full"
              style={{
                width: planet.size,
                height: planet.size,
                right: 0,
                background:
                  planet.name === "earth"
                    ? "radial-gradient(circle, #6fbaff, #0055ff)"
                    : planet.name === "mars"
                    ? "radial-gradient(circle, #ff7040, #cc3000)"
                    : planet.name === "jupiter"
                    ? "radial-gradient(circle, #ffb37a, #c96d2e)"
                    : planet.name === "saturn"
                    ? "radial-gradient(circle, #ffe0b3, #cc9a38)"
                    : planet.name === "uranus"
                    ? "radial-gradient(circle, #8ffaff, #4fc7d5)"
                    : planet.name === "neptune"
                    ? "radial-gradient(circle, #7bb6ff, #365bbb)"
                    : "radial-gradient(circle, #ff9999, #cc0000)",
                boxShadow: "0 0 12px rgba(255,80,80,0.5)",
              }}
            />

            {/* Saturn Ring */}
            {planet.ring && (
              <div
                className="absolute rounded-full"
                style={{
                  width: planet.size * 4,
                  height: planet.size * 1.7,
                  right: -planet.size * 1.5,
                  border: "1px solid rgba(255,220,150,0.5)",
                  transform: "rotate(25deg)",
                }}
              />
            )}
          </div>
        ))}

        {/* TEXT */}
        <div className="absolute bottom-8 text-red-300/70 text-sm tracking-widest">
          Synchronizing Modules…
        </div>
      </div>

      {/* CSS Animations */}
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
