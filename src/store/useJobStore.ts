import { create } from "zustand";
import type { Project, Vendor } from "@/types";

interface JobStore {
	// Single job flow
	selectedVendor: Vendor | null;
	setVendor: (v: Vendor) => void;
	clearVendor: () => void;

	// Project flow
	selectedProject: Project | null;
	setProject: (p: Project) => void;
	completedTrades: string[];
	markTradeDone: (tradeId: string) => void;
	resetProject: () => void;
}

export const useJobStore = create<JobStore>((set) => ({
	selectedVendor: null,
	setVendor: (v) => set({ selectedVendor: v }),
	clearVendor: () => set({ selectedVendor: null }),

	selectedProject: null,
	setProject: (p) => set({ selectedProject: p }),
	completedTrades: [],
	markTradeDone: (tradeId) =>
		set((s) => ({
			completedTrades: s.completedTrades.includes(tradeId)
				? s.completedTrades
				: [...s.completedTrades, tradeId],
		})),
	resetProject: () => set({ selectedProject: null, completedTrades: [] }),
}));
