import { create } from 'zustand'

interface JobStore {
  selectedVendor: Vendor | null
  setVendor: (v: Vendor) => void
}

export const useJobStore = create<JobStore>((set) => ({
  selectedVendor: null,
  setVendor: (v) => set({ selectedVendor: v }),
}))
