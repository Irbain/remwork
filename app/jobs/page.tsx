"use client";

import { useEffect, useState } from "react";

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
import { Loader2, RotateCcw, Search } from "lucide-react";
import { DurationBoxes } from "../components/shadcn/checkboxes/DurationBoxes";
import { LevelBoxes } from "../components/shadcn/checkboxes/LevelBoxes";
import LocationCombo from "../components/shadcn/combobox/LocationCombo";
import { Card, CardContent } from "@/components/ui/card";
import { useAccordionStore } from "../utils/useStore";
import NotFound from "@/public/undraw_not_foundd.svg";
import Image from "next/image";

interface Job {
  id: number;
  jobTitle: string;
  companyName: string;
  jobGeo: string;
  jobExcerpt: string;
  url: string;
  companyLogo: string;
  pubDate: string;
  jobType: string[];
  jobLevel: string; // Adding jobType to support duration filtering
}

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const { location, level, field, duration, clearAll } = useAccordionStore();

  useEffect(() => {
    const fetchJobs = async () => {
      const fetchedJobs = await getJobs();
      if (!fetchedJobs || fetchedJobs.length === 0) {
        console.error(`Data is missing or empty: ${fetchedJobs}`);
      } else {
        setJobs(fetchedJobs);
        setFilteredJobs(fetchedJobs); // Initially show all jobs
      }
      setLoading(false);
    };
    fetchJobs();
    console.log(jobs, "here is jobs");
  }, []);

  // Filter jobs based on Zustand store preferences
  const handleFilter = () => {
    const filtered = jobs.filter((job) => {
      const matchesLocation = location ? job.jobGeo === location : true;
      const matchesField = field
        ? job.jobTitle.toLowerCase().includes(field.toLowerCase())
        : true;
      const matchesDuration = duration.length
        ? job.jobType.some((type) => duration.includes(type))
        : true;

      // Level Filter (jobLevel)
      const matchesLevel = level.length ? level.includes(job.jobLevel) : true;

      return matchesLocation && matchesField && matchesDuration && matchesLevel;
    });
    setFilteredJobs(filtered);
  };

  // Clear all filters
  const handleClear = () => {
    clearAll(); // Reset Zustand store
    setFilteredJobs(jobs); // Reset job listing to initial state
  };

  if (loading) {
    return (
      <Card className="w-full flex justify-center items-center max-w-md mx-auto mt-8">
        <CardContent className="flex flex-col items-center justify-center h-40">
          <Loader2 className="h-8 w-8 animate-spin text-main" />
          <p className="mt-4 text-sm text-muted-foreground">Loading jobs...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <JobsHeader />
      <section className="h-full w-full flex flex-col sm:flex-row px-[3%] sm:px-[10%] ">
        <aside className="w-full sm:w-1/3 h-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem key="Location" value="Location">
              <AccordionTrigger>Location</AccordionTrigger>
              <AccordionContent>
                <LocationCombo />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem key="Level" value="Level">
              <AccordionTrigger>Level</AccordionTrigger>
              <AccordionContent>
                <LevelBoxes />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem key="Field" value="Field">
              <AccordionTrigger>Field</AccordionTrigger>
              <AccordionContent>
                <Combobox />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem key="Duration" value="Duration">
              <AccordionTrigger>Duration</AccordionTrigger>
              <AccordionContent>
                <DurationBoxes />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button type="button" className=" mt-3 w-4/5" onClick={handleFilter}>
            <Search size={15} className="mr-[5px]" /> Search
          </Button>
          <Button
            variant="secondary"
            className=" mt-3 w-4/5"
            onClick={handleClear}
          >
            <RotateCcw size={15} className="mr-[5px]" /> Clear
          </Button>
        </aside>
        <main className="w-full h-full">
          <div className="text-gray text-start pl-[6%] mt-4">
            <b>{filteredJobs ? filteredJobs.length + " Jobs Found" : ""}</b>
          </div>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job: Job) => (
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
            <div className="w-full h-full flex flex-col items-center justify-center m-[10%]">
              <h1 className="text-2xl mb-5 ">
                <b>No Jobs Found</b>{" "}
              </h1>

              <Image
                width={300}
                height={300}
                src={NotFound}
                alt="no job found"
              />
            </div>
          )}

          <PaginationDemo />
        </main>
      </section>
    </>
  );
}
