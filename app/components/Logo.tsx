import React from "react";
import { cn } from "@/lib/utils";

const Logo = ({ size = 3 }) => {
  const dynamicSize = size * 6;
  return (
    <div className={cn(`text-${size}xl flex items-center font-semibold`)}>
      <div className="text-[#FACC15]">
        rem<span className="text-black">w</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={dynamicSize}
        height={dynamicSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mt-[1rem] lucide lucide-search-check"
      >
        <path d="m8 11 2 2 4-4" />
        <circle cx="11" cy="11" r="8" className="text-[#FACC15]" />
        <path d="m21 21-4.3-4.3" className="text-[#FACC15]" />
      </svg>
      <div className="">rk</div>
    </div>
  );
};

export default Logo;
