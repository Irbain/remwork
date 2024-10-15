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

const fields = [
  {
    value: "Software Engineering",
    label: "Software Engineering",
  },
  {
    value: "Design & Creative",
    label: "Design & Creative",
  },
  {
    value: "Finance & Legal",
    label: "Finance & Legal",
  },
  {
    value: "Customer Success",
    label: "Customer Success",
  },
  {
    value: "Marketing & Sales",
    label: "Marketing & Sales",
  },
  {
    value: "Sales",
    label: "Sales",
  },
  {
    value: "Product & Operations",
    label: "Product & Operations",
  },
  {
    value: "Copywriting & Content",
    label: "Copywriting & Content",
  },
  {
    value: "Web & App Design",
    label: "Web & App Design",
  },
  {
    value: "Business Development",
    label: "Business Development",
  },
  {
    value: "Data Science",
    label: "Data Science",
  },
  {
    value: "HR & Recruiting",
    label: "HR & Recruiting",
  },
];

export default function Combobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  console.log(value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? fields.find((field) => field.value === value)?.label
            : "Select a field..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No filed found.</CommandEmpty>
            <CommandGroup>
              {fields.map((field) => (
                <CommandItem
                  key={field.value}
                  value={field.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === field.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {field.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
