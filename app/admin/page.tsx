"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import GetJobsFromAPI from "./GetJobsFromAPI";
import { PostJobs } from "../components/server/PostJobs";
import { Input } from "@/components/ui/input";

export default function AdminDashboard() {
  const [lastTime, setLastTime] = useState<string | undefined>();
  const [data, setData] = useState(null);

  const handleClick = async () => {
    const updatedJobs = await GetJobsFromAPI();
    setData(updatedJobs);
  };

  useEffect(() => {
    if (data) {
    }
  }, [data]);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Button
        className="mt-4"
        onClick={async () => {
          const result = await PostJobs(data);
          console.log("Post Request result:", result);
        }}
      >
        {" "}
        Post Request{" "}
      </Button>

      <Button
        className="mt-4"
        onClick={() => {
          //delete 177661
          // get id and take mondodb i d to delete
        }}
      >
        Delete
      </Button>
      <Button className="mt-4" variant="secondary">
        Clean
      </Button>
      <div className="flex flex-col items-center">
        <Button
          className="mt-4 max-w-[80px]"
          onClick={() => {
            setLastTime(new Date().toString());
            handleClick(); // Call both functions
          }}
        >
          Fetch API
        </Button>
        {lastTime}
        {data && "done"}
        {/* <div>Data: {JSON.stringify(data)}</div> */}
      </div>
    </div>
  );
}
