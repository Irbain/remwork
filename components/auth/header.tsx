import React from "react";
import Logo from "../Logo";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div
      className="w-full flex flex-col gap-y-4 p-4 items-center justify-center
    
    
    "
    >
      <Logo size={4} />
      <h1 className="text-black text-1xl font-semibold tracking-tight">
        {label}
      </h1>
    </div>
  );
};
