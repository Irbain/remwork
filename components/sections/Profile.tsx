import { currentUser } from "@/lib/auth";
import Image from "next/image";
import React from "react";

const Profile = async () => {
  const user = await currentUser();

  return (
    <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
      <div className="flex w-full items-center justify-center">
        <Image
          width={100}
          height={100}
          src={user?.image as string}
          className=" flex self-center rounded-full"
          alt="Profile picture"
        />
      </div>
      <h2 className="text-center text-2xl font-semibold mt-3">{user?.name}</h2>
      <p className="text-center text-gray-600 mt-1">Software Engineer</p>
      <p className="text-center text-gray-600 mt-1">{user?.email}</p>
      <div className="flex justify-center mt-5">
        <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
          Twitter
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
          LinkedIn
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
          GitHub
        </a>
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-semibold">Bio </h3>
        <p className="text-gray-600 mt-2">
          John is a software engineer with over 10 years of experience in
          developing web and mobile applications. He is skilled in JavaScript,
          React, and Node.js.
        </p>
      </div>
    </div>
  );
};

export default Profile;
