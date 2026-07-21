import { create } from "zustand";

export const useFilterStore = create((set) => ({
    
    period: "this_month",   // today | this_week | this_month
    region: "nationwide",   // nationwide | regionalwide | citywide

    setPeriod: (period) => set({ period }),
    setRegion: (region) => set({ region }),

    // section 2
    category: "fmc", // fmc | mbb | fbb
    movement: "sample", // sample/connectionType

    setCategory: (category) => set({category}),
    setMovement: (movement) => set({movement}),
}));