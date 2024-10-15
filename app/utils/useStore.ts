// useStore.ts
import { create } from "zustand";

interface CheckboxStore {
  checkedItems: string[];
  toggleCheckbox: (id: string) => void;
}

const useStore = create<CheckboxStore>((set) => ({
  checkedItems: [],
  toggleCheckbox: (id: string) =>
    set((state) => {
      const newCheckedItems = state.checkedItems.includes(id)
        ? state.checkedItems.filter((item) => item !== id)
        : [...state.checkedItems, id];

      return { checkedItems: newCheckedItems };
    }),
}));

export default useStore;
