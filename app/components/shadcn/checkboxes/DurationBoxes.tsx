"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

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
      {elements.map((element) => (
        <div key={element.id} className="flex items-center space-x-2 mb-2 ">
          <Checkbox
            id={element.id}
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
