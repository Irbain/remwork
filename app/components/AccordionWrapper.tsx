import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionItemProps {
  question: string;
  answer: string;
}

interface DynamicAccordionProps {
  items: AccordionItemProps[];
}

function DynamicAccordion({ items }: DynamicAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={`item-${index + 1}`} value={`item-${index + 1}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

interface AccordionWrapperProps {
  qone?: string;
  aone?: string;
  qtwo?: string;
  atwo?: string;
  qthree?: string;
  athree?: string;
  // Add more as needed
}

export default function AccordionWrapper({
  qone,
  aone,
  qtwo,
  atwo,
  qthree,
  athree,
}: AccordionWrapperProps) {
  const items = [
    { question: qone, answer: aone },
    { question: qtwo, answer: atwo },
    { question: qthree, answer: athree },
  ].filter((item) => item.question && item.answer);

  return <DynamicAccordion items={items} />;
}
