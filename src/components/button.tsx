import { LinkButtonProps } from "@/types/types";
import React from "react";

const LinkButton: React.FC<LinkButtonProps> = ({ url, children }) => {
  const handleClick = () => {
    window.location.href = url; // Navigate to link
  };

  return (
    <button
      onClick={handleClick}
      className="w-[200px] h-[72px] shimmer px-8 py-4 bg-gradient-to-r from-red-900 to-purple-600 
                 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 ease-in-out
                 hover:from-red-800 hover:to-purple-700"
    >
      {children}
    </button>
  );
};

export default LinkButton;
