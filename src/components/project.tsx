"use client";
import { useState, useEffect, useCallback } from "react";
import { projects } from "@/data/data";
import Image from "next/image";

function ProjectsPage() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const autoPlayInterval = 2000;

  const goTo = useCallback(
    (index: number) => {
      if (transitioning || index === active) return;
      setPrev(active);
      setTransitioning(true);
      setProgress(0);
      setTimeout(() => {
        setActive(index);
        setPrev(null);
        setTransitioning(false);
      }, 700);
    },
    [active, transitioning],
  );

  const next = useCallback(
    () => goTo((active + 1) % projects.length),
    [active, goTo],
  );

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, autoPlayInterval);
    return () => clearInterval(t);
  }, [next, paused]);

  // Progress bar
  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const step = 100 / (autoPlayInterval / 50);
    const t = setInterval(
      () => setProgress((p) => Math.min(p + step, 100)),
      50,
    );
    return () => clearInterval(t);
  }, [active, paused]);

  // Keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")
        goTo((active - 1 + projects.length) % projects.length);
      if (e.key === "ArrowRight") goTo((active + 1) % projects.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, goTo]);

  const project = projects[active];
  const prevProject = prev !== null ? projects[prev] : null;

  return (
    <div className="relative bg-black text-white border-t border-red-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* ── Header ── */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-10">
          <div className="relative inline-block mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-4 sm:pb-6 font-bold bg-gradient-to-r from-red-900 via-red-700 to-red-500 bg-clip-text text-transparent">
              My Projects
            </h1>
            <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-gradient-to-r from-red-900 to-red-500 rounded-full animate-pulse" />
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Explore my collection of projects that showcase my passion for
            creating
            <span className="text-red-400 font-medium">
              {" "}
              innovative solutions{" "}
            </span>
            and
            <span className="text-red-400 font-medium">
              {" "}
              exceptional user experiences
            </span>
            .
          </p>
        </div>

        {/* ── Carousel ── */}
        <div className="relative max-w-5xl mx-auto ">
          {/* Card */}
          <div className="relative w-full rounded-xl overflow-hidden shadow-[0_0_12px_rgba(255,0,0,0.6)]"
            style={{ aspectRatio: "16/9", minHeight: "360px" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Outgoing image */}
            {prevProject && (
              <div
                className="absolute inset-0 z-10"
                style={{
                  opacity: transitioning ? 0 : 1,
                  transition: "opacity 700ms ease",
                }}
              >
                <Image
                  src={prevProject.image}
                  alt={prevProject.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Active image */}
            <div
              className="absolute inset-0 z-20"
              style={{
                opacity: transitioning ? 0 : 1,
                transition: "opacity 700ms ease",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Overlays */}
            <div className="absolute inset-0 z-30 bg-gradient-to-t from-black/90 via-black/40 to-black/10 pointer-events-none" />
            <div className="absolute inset-0 z-30 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-32 z-30 bg-gradient-to-t from-red-950/40 to-transparent pointer-events-none" />

            {/* Counter */}
            <div className="absolute top-5 right-50/100 z-40 font-mono text-medium text-white tracking-[0.2em]">
              {String(active + 1).padStart(2, "0")}
              <span className="text-white mx-1">/</span>
              {String(projects.length).padStart(2, "0")}
            </div>

            {/* Pause badge */}
            {paused && (
              <div className="absolute top-5 left-5 z-40 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-sm">
                <span className="w-1 h-3 bg-white/60 rounded-sm inline-block" />
                <span className="w-1 h-3 bg-white/60 rounded-sm inline-block" />
                <span className="text-[10px] text-white/50 ml-1 tracking-widest font-mono">
                  PAUSED
                </span>
              </div>
            )}

            {/* Overlay content */}
            <div
              className="absolute bottom-0 left-0 right-0 z-40 p-6 sm:p-10 lg:p-12"
              style={{
                opacity: transitioning ? 0 : 1,
                transform: transitioning ? "translateY(12px)" : "translateY(0)",
                transition:
                  "opacity 500ms ease 200ms, transform 500ms ease 200ms",
              }}
            >
              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 text-[11px] font-medium rounded-full border border-red-500/40 bg-red-500/15 text-red-400 tracking-wide backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-2 drop-shadow-lg max-w-2xl">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300/80 text-sm sm:text-base leading-relaxed max-w-xl mb-5 line-clamp-2">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-all duration-200 shadow-[0_0_24px_rgba(220,38,38,0.4)] hover:shadow-[0_0_32px_rgba(220,38,38,0.6)]"
                >
                  View Project
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 7l-10 10M7 7h10v10"
                    />
                  </svg>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-sm font-medium transition-all duration-200 backdrop-blur-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* Arrow buttons */}
            <button
              onClick={() =>
                goTo((active - 1 + projects.length) % projects.length)
              }
              aria-label="Previous project"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-black/40 border border-white/10 hover:bg-black/70 hover:border-red-500/40 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 backdrop-blur-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => goTo((active + 1) % projects.length)}
              aria-label="Next project"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-black/40 border border-white/10 hover:bg-black/70 hover:border-red-500/40 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 backdrop-blur-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className="relative flex items-center justify-center h-5"
              >
                {i === active ? (
                  <span className="relative block w-12 h-[3px] rounded-full bg-white/15 overflow-hidden">
                    <span
                      className="absolute left-0 top-0 h-full bg-red-500 rounded-full"
                      style={{
                        width: `${progress}%`,
                        transition: "width 50ms linear",
                      }}
                    />
                  </span>
                ) : (
                  <span className="block w-2 h-[3px] rounded-full bg-white/25 hover:bg-white/50 transition-colors duration-200" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
