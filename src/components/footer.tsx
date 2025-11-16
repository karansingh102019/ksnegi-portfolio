import DecryptedText from "@/animations/text";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <section className="bg-black px-4 py-25 pb-10 border-t border-gray-800 relative">
      
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-20 w-64 h-64 bg-red-900 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-40 w-80 h-80 bg-red-700 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-medium mb-8 relative">
              <DecryptedText
                text="Let's Work Together"
                animateOn="view"
                revealDirection="center"
                className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                sequential={true}
                speed={100}
              />
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full animate-pulse"></div>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {"Ready to bring your ideas to life? I'd love to hear about your"}
              project and discuss how we can create something
              <span className="text-red-400 font-medium"> amazing </span>
              together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href={"#contact"}>
              <button
                className="w-[180px] h-[70px] text-xl shimmer px-8 py-4 bg-gradient-to-r from-red-900 to-purple-600 rounded-xl hover:from-red-800 hover:to-purple-700 text-white 
            font-semibold transition-all duration-300 ease-in-out 
            shadow-lg hover:scale-110"
              >
                Get In Touch
              </button>
            </Link>
          </div>

          {/* v-Line */}
          <div className="mt-16 flex justify-center">
            <div className="w-px h-16 bg-gradient-to-b from-red-500 to-transparent animate-pulse"></div>
          </div>
        </div>
      
    </section>
  );
};
