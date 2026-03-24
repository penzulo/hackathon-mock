import { create } from "zustand";
import type { CalcInputs, EstimateResult, SpecGrade } from "../types";

const defaultInputs: CalcInputs = {
	location: "",
	builtUpArea: null,
	floors: null,
	specGrade: null,
};

interface CalculatorStore {
	inputs: CalcInputs;
	result: EstimateResult | null;
	isLoading: boolean;
	error: string | null;

	setLocation: (location: string) => void;
	setBuiltUpArea: (area: number | null) => void;
	setFloors: (floors: number | null) => void;
	setSpecGrade: (grade: SpecGrade | null) => void;
	setResult: (result: EstimateResult) => void;
	setLoading: (loading: boolean) => void;
	setError: (error: string | null) => void;
	reset: () => void;

	// Derived — whether all required inputs are filled
	isReady: () => boolean;
}

export const useCalculatorStore = create<CalculatorStore>((set, get) => ({
	inputs: defaultInputs,
	result: null,
	isLoading: false,
	error: null,

	setLocation: (location) =>
		set((s) => ({ inputs: { ...s.inputs, location } })),
	setBuiltUpArea: (builtUpArea) =>
		set((s) => ({ inputs: { ...s.inputs, builtUpArea } })),
	setFloors: (floors) => set((s) => ({ inputs: { ...s.inputs, floors } })),
	setSpecGrade: (specGrade) =>
		set((s) => ({ inputs: { ...s.inputs, specGrade } })),

	setResult: (result) => set({ result, isLoading: false, error: null }),
	setLoading: (isLoading) => set({ isLoading }),
	setError: (error) => set({ error, isLoading: false }),

	reset: () =>
		set({ inputs: defaultInputs, result: null, isLoading: false, error: null }),

	isReady: () => {
		const { location, builtUpArea, floors, specGrade } = get().inputs;
		return !!(location && builtUpArea && floors && specGrade);
	},
}));
