"use client";
import ScrollStack, { ScrollStackItem } from "@/animations/cards";
import { projects } from "@/data/data";
import Image from "next/image";

function ProjectsPage() {
  return (
    <div className="relative bg-black text-white border-t border-red-800  lg:h-[1600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="text-center mb-8 sm:mb-12 lg:mb-2">
          <div className="relative inline-block mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-4 sm:pb-6 font-bold bg-gradient-to-r from-red-900 via-red-700 to-red-500 bg-clip-text text-transparent">
              My Projects
            </h1>
            <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-gradient-to-r from-red-900 to-red-500 rounded-full animate-pulse"></div>
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
        <ScrollStack
          itemDistance={60}
          itemScale={0.04}
          itemStackDistance={40}
          baseScale={0.9}
          useWindowScroll={true}
          className="-mt-[30px] sm:-mt-[40px] lg:-mt-[60px]"
        >
          {projects.map((project) => (
            <ScrollStackItem
              key={project.id}
              itemClassName="bg-neutral-900 border border-gray-800 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10 xl:gap-16 p-4 sm:p-6">
                {/* Left - Image */}
                <div className="w-full md:w-1/2 md:sticky md:top-32 flex justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={600}
                    className="rounded-xl sm:rounded-2xl object-cover border border-gray-700 shadow-[0_0_40px_rgba(255,0,0,0.15)] transition-transform duration-500 hover:scale-[1.02] w-full max-w-md"
                  />
                </div>

                {/* Right - Content */}
                <div className="w-full md:w-1/2 px-2 sm:px-4 lg:px-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 sm:px-3 py-1 bg-red-600/20 text-red-400 text-xs sm:text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 sm:gap-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300 text-sm sm:text-base font-medium transition-colors duration-300"
                    >
                      View Project
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white text-sm sm:text-base font-medium transition-colors duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </div>
  );
}

export default ProjectsPage;