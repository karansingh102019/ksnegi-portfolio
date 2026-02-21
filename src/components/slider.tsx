import { skillsData } from "@/data/data";
import { Skill } from "@/types/types";
import React from "react";
import Marquee from "react-fast-marquee";

const SkillsSection = () => {
  const half = Math.ceil(skillsData.length / 2);
  const firstRow = skillsData.slice(0, half);
  const secondRow = skillsData.slice(half);

  return (
    <section className="px-4 sm:px-6 py-14 sm:py-20 relative bg-black">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl pb-5 font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-900 via-red-700 to-red-500 bg-clip-text text-transparent relative">
          Skills & Technologies
          <div className="animate-pulse absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-gradient-to-r from-red-900 to-red-500 rounded-full" />
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
          The tools and technologies I use to bring ideas to life
        </p>
      </div>

      {/* Both Desktop + Mobile — two rows opposite directions */}
      <div className="flex flex-col gap-4  sm:gap-6 overflow-hidden">
        {/* Row 1 — left to right */}
        <Marquee gradient={false} speed={40} pauseOnHover={true} direction="left" className="py-5">
          {firstRow.map((skill: Skill, index: number) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </Marquee>

        {/* Row 2 — right to left */}
        <Marquee gradient={false} speed={40} pauseOnHover={true} direction="right" className="py-5">
          {secondRow.map((skill: Skill, index: number) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

/* Single card — works on both desktop and mobile */
function SkillCard({ skill }: { skill: Skill }) {
  const IconComponent = skill.icon;
  return (
    <div className="mx-2 sm:mx-4">
      <div className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-gray-800/50 hover:border-red-500 rounded-xl text-center transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-red-900/20 hover:scale-105 hover:-translate-y-2
        /* Mobile */ p-3 min-w-[80px] w-[88px]
        /* Desktop */ sm:p-6 sm:min-w-[160px] sm:w-auto
      ">
        {/* Icon */}
        <div className="relative z-10 mb-2 sm:mb-4">
          <div className={`transition-all duration-500 ${skill.iconColor} group-hover:scale-125 group-hover:rotate-12
            text-3xl sm:text-5xl mb-1 sm:mb-3
          `}>
            <IconComponent className="mx-auto" />
          </div>
          <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${skill.color} opacity-10 transition-opacity duration-300 group-hover:opacity-20`} />
        </div>

        {/* Name */}
        <div className="relative z-10">
          <span className="font-medium text-gray-300 transition-colors duration-300 group-hover:text-red-400
            text-[10px] leading-tight block truncate
            sm:text-sm sm:leading-normal
          ">
            {skill.name}
          </span>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-900 to-red-500 transition-all duration-500 rounded-b-xl w-0 group-hover:w-full" />
        {/* Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
      </div>
    </div>
  );
}

export default SkillsSection;