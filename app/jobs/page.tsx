import React from "react";
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
import { getJobs } from "../components/_server/GetJobs";
import { RotateCcw, Search } from "lucide-react";
import { DurationBoxes } from "../components/shadcn/checkboxes/DurationBoxes";
import { LevelBoxes } from "../components/shadcn/checkboxes/LevelBoxes";

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

export default async function Jobs() {
  const jobs = await getJobs();
  if (!jobs) {
    console.error(`Data is missing or empty: ${jobs}`);
  }

  return (
    <>
      <JobsHeader />
      <section className="h-full w-full flex px-[10%]">
        <aside className="w-1/3   h-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem key={`Location`} value={`Location`}>
              <AccordionTrigger>Location</AccordionTrigger>
              <AccordionContent>Location</AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem key={`Location`} value={`Location`}>
              <AccordionTrigger>Level</AccordionTrigger>
              <AccordionContent>
                <LevelBoxes />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem key={`Location`} value={`Location`}>
              <AccordionTrigger>Field</AccordionTrigger>
              <AccordionContent>
                <Combobox />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem key={`Location`} value={`Location`}>
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
        <main className=" w-full h-full">
          {jobs.map((job: Job) => (
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
          ))}

          <PaginationDemo />
        </main>
      </section>
    </>
  );
}
