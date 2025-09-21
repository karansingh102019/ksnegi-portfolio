"use client";
import Image from "next/image";
import { skills, experiences, achievements } from "@/data/data"; 
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div className="min-h-screen bg-[#060606] text-white ">
      <section
        id="about"
        className={`px-4 py-20 md:py-32 border-t border-red-800 relative overflow-hidden ${
          animate ? "slide-in-right" : ""
        }`}
      >
        <div className="max-w-7xl px-6 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-900 via-red-700 to-red-500 bg-clip-text text-transparent leading-tight relative">
                  About Me
                  <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-red-900 to-red-500 rounded-full"></div>
                </h1>
              </div>
              <div className="relative overflow-hidden">
                <p className="text-xl md:text-2xl text-gray-300 mb-8 relative z-10">
                  I'm a passionate UI developer who transforms
                  <span className="text-red-400 font-medium"> ideas </span>
                  into
                  <span className="text-red-400 font-medium">
                    {" "}
                    digital experiences
                  </span>
                  .
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/10 to-transparent translate-x-[-100%] animate-shimmer"></div>
              </div>
              <div className="space-y-6">
                <div className="group relative p-6 rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm hover:border-red-800/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-transparent to-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                    With over 1 years of experience in UI development, I
                    specialize in creating modern, scalable, and user-friendly
                    applications. My journey began with a curiosity for how
                    websites work, and it has evolved into a passion for
                    crafting digital solutions that make a difference.
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-900 to-red-500 group-hover:w-full transition-all duration-500"></div>
                </div>

                <div className="group relative p-6 rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm hover:border-red-800/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-transparent to-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                    I believe in clean code, elegant design, and seamless user
                    experiences. Every project is an opportunity to learn
                    something new and push the boundaries of what's possible.
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-900 to-red-500 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="float-continuous relative">
                  <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-gray-700 rounded-2xl overflow-hidden flex items-center justify-center relative group-hover:border-red-800/50 transition-all duration-500">
                    <div className="text-gray-500 text-lg group-hover:text-red-400 transition-colors duration-500">
                      <Image
                        src="/Gemini.png"
                        alt="Karan Singh Negi - UI/UX Designer"
                        width={500}
                        height={600}
                        className="  brightness-75 rounded-2xl object-cover w-[400px] h-[450px] transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                      />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-red-600 rounded-2xl float-continuous group-hover:border-red-400 group-hover:rotate-12 transition-all duration-500"></div>
                  <div className="absolute -top-6 -right-8 w-24 h-24 border-4 border-red-600/70 rounded-2xl float-continuous group-hover:border-red-400/70 group-hover:-rotate-6 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 border-t border-b border-red-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-transparent to-red-900/5 animate-shimmer"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group relative">
                {/* Background card */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-xl border border-gray-800/50 group-hover:border-red-800/50 transition-all duration-500 backdrop-blur-sm"></div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors duration-300 relative">
                    {achievement.number}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-red-500 group-hover:w-8 transition-all duration-500"></div>
                  </div>
                  <div className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
                    {achievement.label}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-red-900/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section className="px-4 py-20 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl pb-5 md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-900 via-red-700 to-red-500 bg-clip-text text-transparent relative">
              Skills & Technologies
              <div className=" animate-pulse absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-red-900 to-red-500 rounded-full"></div>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group shimmer relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-gray-800/50 rounded-xl p-6 text-center hover:border-red-500 hover:shadow-2xl hover:shadow-red-900/20 transition-all duration-500 overflow-hidden"
              >
                {/* Content */}
                <div className="relative z-10">
                  <span className="font-medium text-gray-300 group-hover:text-red-400 transition-colors duration-300">
                    {skill}
                  </span>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-900 to-red-500 group-hover:w-full transition-all duration-500 rounded-b-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section className="px-4 py-20 border-t border-red-800 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-900 via-red-700 to-red-500 bg-clip-text text-transparent mb-6">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-900 to-red-500 mx-auto animate-pulse rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              A journey through innovation, creativity, and technical excellence
            </p>
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Content Card */}
                <div className="ml-16 p-8 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm group-hover:border-red-800/50 group-hover:shadow-2xl group-hover:shadow-red-900/20 transition-all duration-500">
                  {/* Year Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-900/20 border border-red-800/30 text-red-400 text-sm font-medium mb-4 group-hover:bg-red-800/30 group-hover:text-red-300 transition-all duration-300">
                    {exp.year}
                  </div>

                  {/* Role */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-200 mb-2 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-red-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {exp.role}
                  </h3>

                  {/* Company */}
                  <div className="flex items-center text-gray-300 font-medium mb-4 group-hover:text-red-300 transition-colors duration-300">
                    {exp.company}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-300">
                    {exp.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-900 to-red-500 group-hover:w-full transition-all duration-500 rounded-b-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
