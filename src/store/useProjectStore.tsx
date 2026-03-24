import { create } from "zustand";

interface ProjectStore {
	completedTrades: string[];
	markTradeDone: (tradeId: string) => void;
	resetProject: () => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
	completedTrades: [],
	markTradeDone: (tradeId) =>
		set((state) => ({
			completedTrades: state.completedTrades.includes(tradeId)
				? state.completedTrades
				: [...state.completedTrades, tradeId],
		})),
	resetProject: () => set({ completedTrades: [] }),
}));
