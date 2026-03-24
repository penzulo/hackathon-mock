import { create } from 'zustand'

interface CalcInputs {
  location: string
  builtUpArea: number | null
  floors: number | null
  specGrade: 'economy' | 'standard' | 'premium' | null
}

interface CalculatorStore {
  inputs: CalcInputs
  setField: <K extends keyof CalcInputs>(key: K, val: CalcInputs[K]) => void
  reset: () => void
}
