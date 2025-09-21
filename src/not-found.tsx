"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-orange-400/35 via-pink-500/35 to-purple-600/35">
      <div className="w-[650px]  p-12  bg-black/15 backdrop-blur-xl border-2 border-white/50 text-white rounded-3xl shadow-2xl flex flex-col justify-center items-center space-y-8">
        
        <h1 className="text-9xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
          404
        </h1>
        <h2 className="text-3xl font-bold tracking-wide">
          Page Not Found 
        </h2>
        <p className="text-lg text-gray-200 text-center ">
          Dude, <span className="font-semibold text-white">I think you are lost.</span>{" "}  
          Let’s get you back on track! 
        </p>

        <Link
          href="/"
          className=" px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-600 rounded-xl shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-400 font-semibold"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
