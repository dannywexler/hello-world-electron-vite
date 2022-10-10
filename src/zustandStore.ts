import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface ValStore {
  count: number
  increaseBy: (amount: number) => void
}

export const useStore = create<ValStore>()(
  devtools(
    persist((set) => ({
      count: 0,
      increaseBy: (amount) => set(
        (state) => ({ count: state.count + amount })),
    }))
  )
)
