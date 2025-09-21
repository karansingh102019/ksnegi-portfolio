import { projects } from "@/data/data";
import Image from "next/image";

function ProjectsPage() {
  return (
    <div className="min-h-screen relative bg-black text-white border-t border-red-800 ">
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <h1 className="text-5xl pb-6 md:text-6xl font-bold bg-gradient-to-r from-red-900 via-red-700 to-red-500 bg-clip-text text-transparent">
              My Projects
            </h1>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-red-900 to-red-500 rounded-full animate-pulse"></div>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-transparent rounded-xl border border-gray-800 overflow-hidden  hover:border-red-500 transition-all duration-300 hover:shadow-lg"
            >
              {/* Project Image */}
              <div className="shimmer h-44 bg-gray-800 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <Image
                    src={project.image}
                    alt="Karan Singh Negi - UI/UX Designer"
                    width={500}
                    height={700}
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-red-600/20 text-red-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors duration-300"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
