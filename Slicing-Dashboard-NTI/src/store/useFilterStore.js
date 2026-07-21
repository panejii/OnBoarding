import { create } from "zustand";

export const useFilterStore = create((set) => ({
  period: "this_month",   // today | this_week | this_month
  region: "nationwide",   // nationwide | regionalwide | citywide
  setPeriod: (period) => set({ period }),
  setRegion: (region) => set({ region }),
}));