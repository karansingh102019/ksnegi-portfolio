"use client";
import { TrueFocus } from "@/animations/focusText";
import SplashModernRed from "@/animations/splashScreen";
import { homeskills } from "@/data/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef, useState } from "react";

// Mock data

export default function HomePage() {
  const imageAnim = useRef(null);
  const images = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    // Only apply scroll animation on desktop (1024px and above)
    if (window.innerWidth >= 1024) {
      gsap.to(imageAnim.current, {
        scrollTrigger: {
          trigger: imageAnim.current,
          start: "top 30%",
          end: "bottom 50%",
          scrub: true,
          pin: true,      
        },
      });
    }
  });



  return (
    <>
      <main
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/banner-background-one.jpg')" }}
      >
        {/* Container */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16">
          <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 sm:gap-12 lg:gap-20">
            
            
            <div className="flex-1 text-center lg:text-left max-w-2xl w-full">
              
              {/* LEVEL 1: Status Badge - Smallest visual weight, tertiary information */}
              <div className="shimmerauto inline-flex items-center gap-2 sm:gap-2.5 bg-green-900/20 slide-in-left px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-green-700 mb-6 sm:mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-green-400 tracking-wide">
                  Available for work
                </span>
              </div>

              {/* LEVEL 2: Main Heading - Highest visual weight, primary focus */}
              <div className="space-y-3 sm:space-y-5 mb-6 sm:mb-10">
                <h1 className="slide-in-left text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-[5rem] font-bold text-white/15 leading-[1.1] tracking-tight">
                  {"Hi, I'm"}
                  <span className="block mt-2 sm:mt-3 bg-gradient-to-r pb-2 from-red-900 via-red-700 to-red-500 bg-clip-text text-transparent">
                    Karan Singh Negi
                  </span>
                </h1>
                
                {/* Subheading - Secondary hierarchy */}
                <div className="text-xl xs:text-2xl sm:text-3xl lg:text-[2.5rem] font-semibold text-gray-300 leading-tight">
                  <TrueFocus
                    sentence="UI Developer."
                    manualMode={false}
                    blurAmount={5}
                    borderColor="red"
                    animationDuration={2}
                    pauseBetweenAnimations={1}
                  />
                </div>
              </div>

              {/* LEVEL 3: Description - Supporting text, medium visual weight */}
              <p className="slide-in-left text-base sm:text-lg lg:text-xl text-gray-400 leading-[1.7] sm:leading-[1.8] max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-10 px-2 sm:px-0">
                I craft digital experiences that are user-friendly, modern, and
                impactful. Specializing in creating intuitive interfaces that
                solve real problems and delight users.
              </p>

              {/* LEVEL 4: Skills - Visual interest, grouped elements */}
              <div className="cursor-pointer slide-in-left flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mb-8 sm:mb-12">
                {homeskills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="shimmer hover:bg-gradient-to-r from-red-500/10 to-red-700/10 hover:text-red-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-300 border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* LEVEL 5: Call-to-Actions - High priority actions, balanced button weight */}
              <div className="cursor-pointer flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
                <button
                  className="cursor-pointer shimmerauto w-full sm:min-w-[200px] px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-red-900 to-purple-600 rounded-xl hover:from-red-800 hover:to-purple-700 
                  text-white text-sm sm:text-base font-semibold tracking-wide transition-all duration-300  transform hover:-translate-y-1"
                >
                  View My Work
                </button>

                <button className="cursor-pointer shimmer w-full sm:min-w-[200px] px-8 sm:px-10 py-3 sm:py-4 bg-transparent text-gray-200 hover:text-red-600 text-sm sm:text-base font-medium tracking-wide rounded-xl border-2 border-gray-600 hover:border-red-600 hover:bg-gradient-to-r from-red-800/10 to-red-900/30 transition-all duration-300 transform hover:-translate-y-1">
                  Get In Touch
                </button>
              </div>

              {/* LEVEL 6: Contact Info - Lowest priority, footer-like information */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-6 sm:pt-8 border-t border-gray-800/50">
                <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 hover:text-gray-300 transition-colors duration-200 group">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-green-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="font-medium break-all sm:break-normal">kn8610519@gmail.com</span>
                </div>
                
                <div className="hidden sm:block w-px h-6 bg-gray-700 self-center"></div>
                
                <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 hover:text-gray-300 transition-colors duration-200 group">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-green-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">New Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div
              ref={imageAnim}
              className="flex-shrink-0 group relative cursor-pointer w-full sm:w-auto max-w-[350px] sm:max-w-[400px] lg:max-w-none mx-auto lg:mx-0"
            >
              {/* Subtle gradient glow behind image */}
              <div className="absolute -inset-2 sm:-inset-4 rounded-2xl bg-gradient-to-r from-red-500 via-blue-500 to-black-500 opacity-20 blur-2xl group-hover:opacity-40 transition duration-700"></div>

              {/* Image container */}
              <div className="cursor-pointer float-continuous relative rounded-2xl overflow-hidden border border-gray-700/50 bg-gray-900/70 shadow-xl group-hover:shadow-2xl group-hover:shadow-red-500/30 transition-all duration-700">
                <Image
                  ref={images}
                  width={400}
                  height={450}
                  src="/save.png"
                  alt="Karan Singh Negi - UI/UX Designer"
                  className="brightness-75 rounded-2xl object-cover w-full h-auto aspect-[8/9] sm:w-[350px] sm:h-[394px] lg:w-[400px] lg:h-[450px] transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                />

                {/* Soft overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Accent border ring */}
              <div className="absolute float-continuous -inset-3 sm:-inset-5 rounded-2xl border-1 border-red-400/30 opacity-100 group-hover:scale-105 transition-all duration-700"></div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}