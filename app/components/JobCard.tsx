"use client";
import { Button } from "@/components/ui/button";
import { Clock, Heart, MapPin, Send } from "lucide-react";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";
import Image from "next/image";
import he from "he";
import alternativeLogo from "@/public/companylogo.jpg";

interface Props {
  title: string;
  location: string;
  description: string;
  link: string;
  company: string;
  logo: string;
  date: string;
}

const JobCard = ({
  title,
  company,
  location,
  description,
  link,
  date,
}: Props) => {
  const data1 = dayjs(Date.now());

  // Use the original date string directly
  const formattedDate = dayjs(date); // This will parse the date correctly
  const diffInDays = data1.diff(formattedDate, "day"); // Calculate the difference in days

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "..."; // Add ellipsis
    }
    return description;
  };

  return (
    <div className="hover:shadow-lg w-ful border-b-[1px] border-gray-100">
      <div className="flex justify-around w-full px-[1rem] py-[1rem] ">
        {/* Picture */}
        <div className=" basis-1/6">
          <div className="w-4/5">
            {" "}
            <Image
              src={alternativeLogo} // <a href="https://www.freepik.com/free-vector/logo-with-blue-geometric-bars_1064693.htm#fromView=search&page=1&position=18&uuid=1f2da520-2101-48f5-b645-9f72c9eaafd2">Image by rocketpixel on Freepik</a>
              alt={`${company} logo`}
              width={70}
              height={70}
            />
          </div>
        </div>
        {/* Content */}
        <div className="basis-4/5">
          <h2>{title}</h2>
          <p className="text-gray-500">
            via <span className="text-main">{company}</span>
            <span className="inline-flex items-center">
              <MapPin
                color="gray"
                size={15}
                strokeWidth={1.5}
                className="ml-3 mr-1"
              />{" "}
              {location}
            </span>
            <br />
            {truncateDescription(he.decode(description), 180)} <br />
            <Link
              className="text-main"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More..
            </Link>
          </p>
        </div>
        {/* Actions */}
        <div className="flex basis-1/4 flex-col items-center">
          <Button
            onClick={() => {
              window.open(link, "_blank");
            }}
            className="w-full"
          >
            {" "}
            <Send size={15} className="mr-[5px]" /> Apply Now
          </Button>
          <div className="my-[6%] cursor-pointer p-2 border-gray-200 border-[1px] rounded-full hover:shadow-xl">
            <Heart fill="#EE2E2E" strokeWidth={0} />
          </div>
          <span className="inline-flex items-center">
            <Clock size={15} strokeWidth={1.5} color="gray" />
            <div className="ml-2 text-[0.8rem] text-gray-500">
              {" "}
              {diffInDays === 0 ? "Today" : diffInDays + " days ago"}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
