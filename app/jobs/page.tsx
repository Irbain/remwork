"use client";

import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import JobsHeader from "../components/sections/jobsHeader";
import JobCard from "../components/JobCard";
import { PaginationDemo } from "../components/shadcn/pagination/Pagination";
import Combobox from "../components/shadcn/combobox/Combobox";
import { getJobs } from "../components/server/GetJobs";
import { RotateCcw, Search } from "lucide-react";
import { DurationBoxes } from "../components/shadcn/checkboxes/DurationBoxes";
import { LevelBoxes } from "../components/shadcn/checkboxes/LevelBoxes";
import LocationCombo from "../components/shadcn/combobox/LocationCombo";

interface Job {
  id: number;
  jobTitle: string;
  companyName: string;
  jobGeo: string;
  jobExcerpt: string;
  url: string;
  companyLogo: string;
  pubDate: string;
}

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const fetchedJobs = await getJobs();
      if (!fetchedJobs || fetchedJobs.length === 0) {
        console.error(`Data is missing or empty: ${fetchedJobs}`);
      } else {
        setJobs(fetchedJobs);
      }
      setLoading(false);
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <JobsHeader />
      <section className="h-full w-full flex px-[10%]">
        <aside className="w-1/3 h-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem key={`Location`} value={`Location`}>
              <AccordionTrigger>Location</AccordionTrigger>
              <AccordionContent>
                <LocationCombo />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem key={`Level`} value={`Level`}>
              <AccordionTrigger>Level</AccordionTrigger>
              <AccordionContent>
                <LevelBoxes />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem key={`Field`} value={`Field`}>
              <AccordionTrigger>Field</AccordionTrigger>
              <AccordionContent>
                <Combobox />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem key={`Duration`} value={`Duration`}>
              <AccordionTrigger>Duration</AccordionTrigger>
              <AccordionContent>
                <DurationBoxes />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button type="submit" className="mt-3 w-4/5">
            <Search size={15} className="mr-[5px]" /> Search
          </Button>
          <Button variant="secondary" className="mt-3 w-4/5">
            <RotateCcw size={15} className="mr-[5px]" /> Clear
          </Button>
        </aside>
        <main className="w-full h-full">
          {jobs.length > 0 ? (
            jobs.map((job: Job) => (
              <JobCard
                key={job.id}
                title={job.jobTitle}
                company={job.companyName}
                location={job.jobGeo}
                description={job.jobExcerpt}
                link={job.url}
                logo={job.companyLogo}
                date={job.pubDate}
              />
            ))
          ) : (
            <p>No jobs available</p>
          )}

          <PaginationDemo />
        </main>
      </section>
    </>
  );
}
