"use client";
import Link from "next/link";
import React, { useState } from "react";
import { navLinks } from "@/data/data";
import { IoClose, IoReorderThreeOutline } from "react-icons/io5";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed px-4 sm:px-6 top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl bg-black/20 border-b-[0.5px] border-white/10 ">
      <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="transition-all duration-300 group-hover:scale-105 drop-shadow-lg group-hover:drop-shadow-xl">
              <svg width="150" height="100" viewBox="0 0 330 120" fill="none">
                <g transform="scale(0.8) translate(10, 15)">
                  <path
                    d="M40 100 L40 20 L70 20 L70 70 L110 20 L150 20 L150 100 L120 100 L120 50 L85 100 L40 100 Z"
                    stroke="#cf0116"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>

                <text
                  x="140"
                  y="95"
                  fontFamily="Inter, Poppins, sans-serif"
                  fontSize="60"
                  fontWeight="600"
                  fill="#cf0116"
                  letterSpacing="4"
                >
                  EXUS
                </text>
              </svg>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <ul className="flex items-center space-x-4 lg:space-x-8">
              {navLinks.map((items) => (
                <li key={items.href}>
                  <Link
                    href={items.href}
                    className="relative px-3 lg:px-4 py-2 text-sm lg:text-md font-medium text-gray-500 transition-all duration-300 group hover:text-red-600"
                  >
                    <span className="relative z-10">{items.label}</span>
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/10 to-red-700/10 opacity-0 group-hover:opacity-100  transition-opacity duration-300"></span>
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 transition-all duration-300  group-hover:w-full group-hover:left-0 rounded-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Action Button */}
            <Link href="#contact" className="group">
              <button
                className=" cursor-pointer animate-pulse px-6 lg:px-8 py-2.5 lg:py-3 text-sm font-semibold text-white bg-gradient-to-r from-red-900 to-purple-600 rounded-xl hover:from-red-800 hover:to-purple-700 
             transform hover:scale-105 
             transition-all duration-300 
             shadow-lg hover:shadow-2xl"
              >
                {"Let's Talk"}
              </button>
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleMenu}
              className="p-2.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <IoClose size={24} />
              ) : (
                <IoReorderThreeOutline size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`md:hidden fixed top-16 sm:top-18 right-0 h-[calc(100vh-4rem)] sm:h-[calc(100vh-4.5rem)] w-[85vw] sm:w-72 transform transition-all duration-500 ease-in-out z-40 
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="h-full p-4 sm:p-6 flex flex-col justify-start space-y-4 sm:space-y-6 bg-black border-t border-l border-red-800 rounded-md overflow-y-auto">
            {/* Mobile Menu links */}
            <div className="space-y-3 sm:space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className={` relative block px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium text-gray-300 transition-all border-b-2 border-gray-800 duration-300 group hover:text-red-600  `}
                >
                  {link.label}
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/10 to-red-700/10 opacity-0 group-hover:opacity-100  transition-opacity duration-300"></span>
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 transition-all duration-300  group-hover:w-full group-hover:left-0 rounded-full"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Contact Button */}
            <div className="mt-auto pt-4 sm:pt-6 border-t border-gray-800">
              <Link href="#contact" className="group">
                <button
                  onClick={toggleMenu}
                  className=" cursor-pointer w-full animate-pulse px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-semibold text-white bg-gradient-to-r from-red-900 to-purple-600 rounded-xl hover:from-red-800 hover:to-purple-700 
             transform hover:scale-105 
             transition-all duration-300 
             shadow-lg hover:shadow-2xl"
                >
                  {"Let's Talk"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
