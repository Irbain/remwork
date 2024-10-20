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
  const [duplicated, setDuplicated] = useState<[]>([]);
  // Called from Jobicy API
  const FetchFromJobicy = async () => {
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
        setJobs(fetchedJobs); // GET api/job
        detectDuplication(fetchedJobs);
      }
    };
    fetchJobs();
  }, []); // Vulernable error after posting data without refreshing

  useEffect(() => {
    if (data) {
    }
  }, [data]);

  const detectDuplication = (jobs: Job[]): void => {
    // Step 1: Find jobIds that are null or duplicated
    const jobIdCount: { [key: string]: number } = jobs.reduce((acc, job) => {
      const { jobId } = job;
      if (jobId !== null) {
        acc[jobId] = (acc[jobId] || 0) + 1;
      }
      return acc;
    }, {} as { [key: string]: number });

    // Step 2: Collect the ids where jobId is duplicated or null

    const duplicateOrNullIds: number[] | undefined = jobs
      .filter((job) => job.jobId === null || jobIdCount[job.jobId!] > 1)
      .map((job) => job.id);

    // @ts-expect-error bellow
    setDuplicated(duplicateOrNullIds);
    console.log(duplicateOrNullIds, "duplicated");
  };

  const extractJobId = (jobs: Job[]) => {
    const job = jobs.find((job) => job.jobId === parseInt(toDelete as string));
    if (job !== undefined) {
      setExtractedId(job.id);
    } else {
      // Handle the case where no job is found, if needed
      console.error("Job not found");
    }
  };

  const deleteDuplicated = (data: []) => {
    data.forEach((id: string | number) => {
      DeleteJobById(id);
      console.log(id, " deleted");
    });
  };

  return (
    <div>
      {session?.user?.email === "contact@irbaine.com" ||
      "amine011eminos@gmail.com" ? (
        <div>
          <div className="h-screen flex flex-col justify-center items-center">
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
                  extractJobId(jobs);
                  DeleteJobById(extractedId);
                }}
              >
                Delete
              </Button>
            </div>
            <Button
              className="mt-4"
              variant="secondary"
              onClick={() => {
                deleteDuplicated(duplicated);
              }}
            >
              Clean
            </Button>
            <div className="flex flex-col items-center">
              <Button
                className="mt-4 max-w-[150px]"
                onClick={() => {
                  setLastTime(new Date().toString());
                  FetchFromJobicy(); // Call both functions
                }}
              >
                Fetch Jobicy API
              </Button>
              {lastTime}
              {/* <div>Data: {JSON.stringify(data)}</div> */}
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
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
