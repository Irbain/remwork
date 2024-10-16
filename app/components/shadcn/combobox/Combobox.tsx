"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAccordionStore } from "@/app/utils/useStore";

const fields = [
  { value: "Engineering", label: "Software Engineering" },
  { value: "Design", label: "Design & Creative" },
  { value: "Finance", label: "Finance & Legal" },
  { value: "Customer", label: "Customer Success" },
  { value: "Marketing", label: "Marketing & Sales" },
  { value: "Sales", label: "Sales" },
  { value: "Product", label: "Product & Operations" },
  { value: "Copywriting", label: "Copywriting & Content" },
  { value: "Web", label: "Web & App Design" },
  { value: "Business", label: "Business Development" },
  { value: "Data", label: "Data Science" },
  { value: "Human", label: "HR & Recruiting" },
];

export default function Combobox() {
  const [open, setOpen] = React.useState(false);
  const { field, setField } = useAccordionStore(); //TODO fix use state rerendering

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {field
            ? fields.find((f) => f.value === field)?.label
            : "Select a field..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search field..." />
          <CommandList>
            <CommandEmpty>No field found.</CommandEmpty>
            <CommandGroup>
              {fields.map((f) => (
                <CommandItem
                  key={f.value}
                  value={f.value}
                  onSelect={(currentValue) => {
                    setField(currentValue === field ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      field === f.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {f.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
