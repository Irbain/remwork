"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Test from "./Testing";

export default function AdminDashboard() {
  const [lastTime, setLastTime] = useState<string | undefined>();
  const [data, setData] = useState(null);

  const handleClick = async () => {
    const updatedJobs = await Test();
    setData(updatedJobs);
  };

  // useEffect to log `data` after it updates
  useEffect(() => {
    if (data) {
      console.log("this is the final result", data);
    }
  }, [data]);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Button className="mt-4"> Post Request </Button>
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
        {data && <div>Data: {JSON.stringify(data)}</div>}
      </div>
    </div>
  );
}
