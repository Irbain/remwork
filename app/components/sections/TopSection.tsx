"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";
import JobHunt from "@/public/job_hunt.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TopSection() {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-b from-[#FACC15]/10 to-background max-h-screen flex flex-col ">
      <main className="flex justify-around container mx-auto px-4 py-12 ">
        <div className="w-full flex-col self-center p-10">
          <h1 className="text-5xl font-bold mb-6">
            Find Your Dream Remote Job
          </h1>
          <p className="text-xl mb-8">
            Connect with top companies hiring remote talent worldwide. Work from
            anywhere, anytime.
          </p>
          <div className="flex space-x-4 mb-8">
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Search jobs..."
                className="pl-10 pr-4 py-2 w-full border-[#FACC15]"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FACC15]"
                size={20}
              />
            </div>
            <Button
              onClick={() => {
                router.push("/jobs");
              }}
              className="bg-[#FACC15] text-black hover:bg-[#FACC15]/90"
            >
              Search
            </Button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Image width={400} src={JobHunt} alt="find remote jobs" />
        </div>
      </main>
    </div>
  );
}
