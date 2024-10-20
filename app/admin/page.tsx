"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import GetJobsFromAPI from "./GetJobsFromAPI";
import { PostJobs } from "../components/server/PostJobs";
import { useSession } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { getJobs } from "../components/server/GetJobs";
import { DeleteJobById } from "../components/server/DeleteJob";

interface Job {
  id: number;
  jobId: number;
  // Add any other properties that a job might have.
}

export default function AdminDashboard() {
  const [lastTime, setLastTime] = useState<string | undefined>();
  const [data, setData] = useState<[]>([]);
  const { data: session } = useSession();
  const [jobs, setJobs] = useState<[]>([]);
  const [toDelete, setToDelete] = useState<unknown>();
  const [extractedId, setExtractedId] = useState<string | number>();

  const handleClick = async () => {
    const updatedJobs = await GetJobsFromAPI();
    setData(updatedJobs);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDelete(event.target.value);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      const fetchedJobs = await getJobs();
      if (!fetchedJobs || fetchedJobs.length === 0) {
        console.error(`Data is missing or empty: ${fetchedJobs}`);
      } else {
        setJobs(fetchedJobs);
      }
    };
    fetchJobs();
  }, []); // Vulernable error after posting data without refreshing

  useEffect(() => {
    if (data) {
    }
  }, [data]);

  const extractJobId = (jobs: Job[]) => {
    const job = jobs.find((job) => job.jobId === parseInt(toDelete as string));
    if (job !== undefined) {
      setExtractedId(job.id);
    } else {
      // Handle the case where no job is found, if needed
      console.error("Job not found");
    }
  };

  return (
    <div>
      {session?.user?.email === "contact@irbaine.com" ||
      "amine011eminos@gmail.com" ? (
        <div>
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

            <div className="flex justify-center mt-4">
              <Input
                className="max-w-[140px] mr-6 "
                type="text"
                placeholder="id to delete"
                onChange={handleInputChange}
              />
              <Button
                className=""
                onClick={() => {
                  //delete 177661

                  // get id and take mondodb i d to delete
                  extractJobId(jobs);
                  DeleteJobById(extractedId);
                }}
              >
                Delete
              </Button>
            </div>
            <Button className="mt-4" variant="secondary">
              Clean
            </Button>
            <div className="flex flex-col items-center">
              <Button
                className="mt-4 max-w-[150px]"
                onClick={() => {
                  setLastTime(new Date().toString());
                  handleClick(); // Call both functions
                }}
              >
                Fetch Jobicy API
              </Button>
              {lastTime}
              {data && "done"}
              {/* <div>Data: {JSON.stringify(data)}</div> */}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
