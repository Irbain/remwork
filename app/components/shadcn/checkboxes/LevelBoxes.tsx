"use client";

import { useAccordionStore } from "@/app/utils/useStore";
import { Checkbox } from "@/components/ui/checkbox";

const levels = [
  { id: "Entry-Level", label: "Entry-Level" },
  { id: "Junior", label: "Junior" },
  { id: "Mid-Level", label: "Mid-Level" },
  { id: "Senior", label: "Senior" },
  { id: "Lead", label: "Lead" },
  { id: "Manager", label: "Manager" },
  { id: "Director", label: "Director" },
  { id: "Executive", label: "Executive" },
  { id: "Consultant", label: "Consultant" },
  { id: "Freelancer/Contractor", label: "Freelancer/Contractor" },
  { id: "Any Level", label: "Any Level" },
];

export function LevelBoxes() {
  const { level, setLevel } = useAccordionStore();

  const handleCheckboxChange = (id: string) => {
    setLevel(
      level.includes(id) ? level.filter((item) => item !== id) : [...level, id]
    );
  };

  return (
    <div className="space-y-2">
      {levels.map((levelItem) => (
        <div key={levelItem.id} className="flex items-center space-x-2">
          <Checkbox
            id={levelItem.id}
            checked={level.includes(levelItem.id)}
            onCheckedChange={() => handleCheckboxChange(levelItem.id)}
          />
          <label
            htmlFor={levelItem.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {levelItem.label}
          </label>
        </div>
      ))}
    </div>
  );
}
