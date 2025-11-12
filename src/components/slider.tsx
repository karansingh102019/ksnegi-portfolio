import { skillsData } from '@/data/data';
import { Skill } from '@/types/types';
import React from 'react';
import Marquee from 'react-fast-marquee';

const SkillsSection = () => {
  return (
    <section className="px-6 py-20 relative bg-black">
      
        <div className="text-center mb-20">
          <h2 className="text-4xl pb-5 md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-900 via-red-700 to-red-500 bg-clip-text text-transparent relative">
            Skills & Technologies
            <div className="animate-pulse absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-red-900 to-red-500 rounded-full"></div>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="overflow-hidden">
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="py-8"
          >
            {skillsData.map((skill: Skill, index: number) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="mx-4"
                >
                  <div
                    className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-gray-800/50 hover:border-red-500 rounded-xl p-6 text-center transition-all duration-500 overflow-hidden min-w-[200px] hover:shadow-2xl hover:shadow-red-900/20 hover:scale-115 hover:-translate-y-3"
                  >
                    <div className="relative z-10 mb-4">
                      <div
                        className={`text-5xl mb-3 transition-all duration-500 ${skill.iconColor} group-hover:scale-125 group-hover:rotate-12`}
                      >
                        <IconComponent className="mx-auto" />
                      </div>
                      <div
                        className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${skill.color} opacity-10 transition-opacity duration-300 group-hover:opacity-20`}
                      />
                    </div>

                    <div className="relative z-10">
                      <span className="font-medium text-gray-300 transition-colors duration-300 group-hover:text-red-400">
                        {skill.name}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-900 to-red-500 transition-all duration-500 rounded-b-xl w-0 group-hover:w-full" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
      
    </section>
  );
};

export default SkillsSection;