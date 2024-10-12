"use client";
import Image from "next/image";
import React from "react";
import ErrorPic from "@/public/error.svg";

const Error = () => {
  return (
    <section className="-mt-[25px]  min-h-screen flex flex-col items-center justify-center">
      <div className="text-4xl text-main mb-10">
        <b>Oups!! Page Not Found</b>
      </div>
      <div>
        <Image className="" width={400} src={ErrorPic} alt="error 404" />
      </div>
    </section>
  );
};

export default Error;
