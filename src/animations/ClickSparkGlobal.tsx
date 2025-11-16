"use client";

import { useEffect } from "react";

export default function LightningSparkRed() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const sparkCount = 10;
      const duration = 600;

      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement("div");

        // ⚡ RED Lightning SVG
        spark.innerHTML = `
          <svg width="22" height="40" viewBox="0 0 24 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 0L0 28H10L6 48L24 16H14L14 0Z"/>
          </svg>
        `;

        // Fixed Red Neon Color
        const color = "#ff2a2a";

        // Base Style
        spark.style.position = "fixed";
        spark.style.left = `${e.clientX}px`;
        spark.style.top = `${e.clientY}px`;
        spark.style.color = color;
        spark.style.pointerEvents = "none";
        spark.style.zIndex = "999999";

        // RED Neon Glow
        spark.style.filter = `
          drop-shadow(0 0 6px ${color})
          drop-shadow(0 0 12px ${color})
          drop-shadow(0 0 18px ${color})
        `;

        // Random rotation
        const rotation = Math.random() * 360;

        // Random explosion angle + distance
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 45 + 25;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        spark.animate(
          [
            {
              transform: `translate(0,0) rotate(${rotation}deg) scale(1)`,
              opacity: 1,
            },
            {
              transform: `translate(${x}px, ${y}px) rotate(${rotation + 90}deg) scale(0.3)`,
              opacity: 0,
            },
          ],
          {
            duration,
            easing: "cubic-bezier(0.1, 0.4, 0.4, 1)",
          }
        );

        document.body.appendChild(spark);

        setTimeout(() => spark.remove(), duration);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return null;
}
