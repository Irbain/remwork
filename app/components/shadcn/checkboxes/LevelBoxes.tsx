"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const levels = [
  {
    id: "Entry-Level",
    label: "Entry-Level",
  },
  {
    id: "Junior",
    label: "Junior",
  },
  {
    id: "Mid-Level",
    label: "Mid-Level",
  },
  {
    id: "Senior",
    label: "Senior",
  },
  {
    id: "Lead",
    label: "Lead",
  },
  {
    id: "Manager",
    label: "Manager",
  },
  {
    id: "Director",
    label: "Director",
  },
  {
    id: "Executive",
    label: "Executive",
  },
  {
    id: "Consultant",
    label: "Consultant",
  },
  {
    id: "Freelancer/Contractor",
    label: "Freelancer/Contractor",
  },
  {
    id: "Any Level",
    label: "Any Level",
  },
];

export function LevelBoxes() {
  // Explicitly set the type to string[]
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.includes(id)
        ? prevCheckedItems.filter((item) => item !== id)
        : [...prevCheckedItems, id]
    );

    // You can handle the updated checked items here (e.g., send it to an API)
    console.log("Updated checked checkboxes:", checkedItems);
  };

  return (
    <div>
      {levels.map((level) => (
        <div key={level.id} className="flex items-center space-x-2 mb-2 ">
          <Checkbox
            id={level.id}
            onCheckedChange={() => handleCheckboxChange(level.id)}
            className="cursor-pointer select-none"
          />
          <label
            htmlFor={level.id}
            className="cursor-pointer select-none text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {level.label}
          </label>
        </div>
      ))}
    </div>
  );
}
