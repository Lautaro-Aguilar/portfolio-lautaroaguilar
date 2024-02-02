import { create } from "zustand";
import { SectionName } from "@/lib/types";

type ActiveSectionStore = {
  activeSection: SectionName;
  setActiveSection: (section: SectionName) => void;
  timeOfLastClick: number;
  setTimeOfLastClick: (time: number) => void;
};

export const useActiveSectionStore = create<ActiveSectionStore>((set) => ({
  activeSection: "Home",
  setActiveSection: (section: SectionName) => set({ activeSection: section }),
  timeOfLastClick: 0,
  setTimeOfLastClick: (time: number) => set({ timeOfLastClick: time }),
}));
