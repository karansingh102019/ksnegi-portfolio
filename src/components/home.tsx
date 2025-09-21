"use client";
import Image from "next/image";
import Link from "next/link";
import { homeskills } from "@/data/data";

export default function HomePage() {
  return (
    <>
      <main
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/banner-background-one.jpg')" }}
      >
        {/* Equal left and right padding */}
        <div className="max-w-7xl mx-auto  sm:px-6  pt-30 pb-16">
          <section className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-8 ">
              {/* Status Badge */}
              <div className="shimmerauto inline-flex items-center gap-2 bg-green-900/20 slide-in-left px-4 py-2 rounded-full border border-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-400">
                  Available for work
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6 w-[600px]">
                <h1
                  className={`slide-in-left text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-[1.1]`}
                >
                  Hi, I'm
                  <span className="block bg-gradient-to-r pb-2 from-red-900 via-red-700 to-red-500 bg-clip-text text-transparent">
                    Karan Singh Negi
                  </span>
                </h1>

                <p className="slide-in-left text-xl lg:text-2xl font-semibold text-gray-600 dark:text-gray-300">
                  UI/UX & Product Designer
                </p>
              </div>

              {/* Description */}
              <p className="slide-in-left text-lg text-gray-400 leading-relaxed max-w-2xl">
                I craft digital experiences that are user-friendly, modern, and
                impactful. Specializing in creating intuitive interfaces that
                solve real problems and delight users.
              </p>

              {/* Key Skills */}
              <div className="slide-in-left flex flex-wrap gap-3 justify-center lg:justify-start">
                {homeskills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="shimmer hover:bg-gradient-to-r from-red-500/10 to-red-700/10 hover:text-red-600 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <Link href="#project">
                  <button
                    className="shimmerauto px-8 py-4 bg-gradient-to-r from-red-900 to-purple-600 rounded-xl hover:from-red-800 hover:to-purple-700 
                  text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg"
                  >
                    View My Work
                  </button>
                </Link>

                <Link href="#contact">
                  <button className="shimmer px-8 py-4 bg-black-900 text-gray-200 hover:text-red-600 font-medium rounded-lg border border-gray-600 hover:bg-gradient-to-r from-red-800/10 to-red-900/30 transition-colors duration-200">
                    Get In Touch
                  </button>
                </Link>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="green" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>kn8610519@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="green" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-shrink-0 group relative cursor-pointer">
              {/* Subtle gradient glow behind image */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-red-500 via-blue-500 to-black-500 opacity-20 blur-2xl group-hover:opacity-40 transition duration-700"></div>

              {/* Image container */}
              <div className="float-continuous relative rounded-2xl overflow-hidden border border-gray-700/50 bg-gray-900/70 shadow-xl group-hover:shadow-2xl group-hover:shadow-red-500/30 transition-all duration-700">
                <Image
                  src="/save.png"
                  alt="Karan Singh Negi - UI/UX Designer"
                  width={500}
                  height={600}
                  className="brightness-75 rounded-2xl object-cover w-[400px] h-[450px] transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                />

                {/* Soft overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Accent border ring */}
              <div className="absolute float-continuous -inset-5 w-[450] h-[490] rounded-2xl border-1 border-red-400/30 opacity-100 group-hover:scale-105 transition-all duration-700"></div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
