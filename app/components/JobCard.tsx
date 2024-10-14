import { Button } from "@/components/ui/button";
import { Clock, Heart, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";

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
  const diffInDays = data1.diff(date, "day");

  return (
    <div className="hover:shadow-lg w-ful border-b-[1px] border-gray-100">
      <div className="flex justify-around w-full px-[1rem] py-[1rem] ">
        {/* Picture */}
        <div className=" basis-1/6">
          <div className="w-4/5 bg-black"> dd</div>
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
            {description} <br />
            <Link className="text-main" href={link}>
              Read More..
            </Link>
          </p>
        </div>
        {/* Actions */}
        <div className="flex basis-1/4 flex-col items-center">
          <Button className="w-full">Apply Now</Button>
          <div className="my-[6%] cursor-pointer p-2 border-gray-200 border-[1px] rounded-full hover:shadow-xl">
            <Heart fill="#EE2E2E" strokeWidth={0} />
          </div>
          <span className="inline-flex items-center">
            <Clock size={15} strokeWidth={1.5} color="gray" />
            <div className="ml-2 text-[0.8rem] text-gray-500">
              {" "}
              {diffInDays} ago
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
