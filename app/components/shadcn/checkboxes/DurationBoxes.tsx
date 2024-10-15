"use client";

import { useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useAccordionStore } from "@/app/utils/useStore";

const elements = [
  {
    id: "contract",
    label: "Contract",
  },
  {
    id: "full-time",
    label: "Full Time",
  },
  {
    id: "part-time",
    label: "Part Time",
  },
  {
    id: "internship",
    label: "Internship",
  },
];

export function DurationBoxes() {
  const { duration, setDuration } = useAccordionStore();

  const handleCheckboxChange = (id: string) => {
    setDuration(
      duration.includes(id)
        ? duration.filter((item) => item !== id)
        : [...duration, id]
    );
  };

  useEffect(() => {
    console.log("Updated checked checkboxes:", duration);
  }, [duration]);

  return (
    <div>
      {elements.map((element) => (
        <div key={element.id} className="flex items-center space-x-2 mb-2">
          <Checkbox
            id={element.id}
            checked={duration.includes(element.id)}
            onCheckedChange={() => handleCheckboxChange(element.id)}
            className="cursor-pointer select-none"
          />
          <label
            htmlFor={element.id}
            className="cursor-pointer select-none text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {element.label}
          </label>
        </div>
      ))}
    </div>
  );
}
