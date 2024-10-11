"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "../Logo";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex justify-center items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Logo />
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/jobs"
                className="border-transparent text-black hover:border-[#FACC15] hover:text-[#FACC15] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              >
                Jobs
              </Link>
              <Link
                href="/about"
                className="border-transparent text-black hover:border-[#FACC15] hover:text-[#FACC15] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              >
                About us
              </Link>
              <Link
                href="/contact"
                className="border-transparent text-black hover:border-[#FACC15] hover:text-[#FACC15] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              >
                Contact us
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button
              onClick={() => router.push("/login")}
              variant="outline"
              className="mr-2 rounded-none border-black text-black hover:border-[#FACC15] hover:bg-whaite hover:text-[#FACC15]"
            >
              Log in
            </Button>
            <Button
              onClick={() => router.push("/signup")}
              className="rounded-none bg-[#FACC15] text-white hover:bg-[#E3B714]"
            >
              Sign up
            </Button>
          </div>
          <div className="flex items-center sm:hidden">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-[#FACC15] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FACC15]"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
