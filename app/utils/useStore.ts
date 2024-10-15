import { create } from "zustand";

type AccordionState = {
  location: string;
  level: string[];
  field: string;
  duration: string[];
  setLocation: (location: string) => void;
  setLevel: (level: string[]) => void;
  setField: (field: string) => void;
  setDuration: (duration: string[]) => void;
  clearAll: () => void;
};

export const useAccordionStore = create<AccordionState>((set) => ({
  location: "",
  level: [],
  field: "",
  duration: [],
  setLocation: (location) => set({ location }),
  setLevel: (level) => set({ level }),
  setField: (field) => set({ field }),
  setDuration: (duration) => set({ duration }),
  clearAll: () => set({ location: "", level: [], field: "", duration: [] }),
}));
