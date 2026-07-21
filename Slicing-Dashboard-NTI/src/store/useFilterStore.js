import { create } from "zustand";

export const useFilterStore = create((set) => ({
    
    period: "this_month",   // today | this_week | this_month
    region: "nationwide",   // nationwide | regionalwide | citywide

    source: "meta",

    setPeriod: (period) => set({ period }),
    setRegion: (region) => set({ region }),

    setSource: (source) => set({ source }),

    // section 2
    category: "fmc", // fmc | mbb | fbb
    movement: "sample", // sample/connectionType

    setCategory: (category) => set({category}),
    setMovement: (movement) => set({movement}),
}));