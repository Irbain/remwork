import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface AccordionItemProps {
  question: string;
  answer: string;
}

interface DynamicAccordionProps {
  items: AccordionItemProps[];
}

const Jobs = () => {
  return (
    <div>
      <Header />

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
              <AccordionTrigger>Experience</AccordionTrigger>
              <AccordionContent>Eperience</AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem key={`Location`} value={`Location`}>
              <AccordionTrigger>Field</AccordionTrigger>
              <AccordionContent>Field</AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button className="mt-3 w-4/5 ml-[10%]">Search</Button>
          <Button variant="secondary" className="mt-3 w-4/5 ml-[10%]">
            Clear
          </Button>
        </aside>
        <main className="bg-black w-full h-full">kjn</main>
      </section>
    </div>
  );
};

export default Jobs;

export function Header() {
  return (
    <div className="bg-slate-100 flex flex-col items-center justify-center text-black py-8">
      <h1 className="text-main text-3xl font-bold">
        Make your own path, start the search
      </h1>
      <p className="text-xl">Get latest job that suits you the best!</p>
    </div>
  );
}
