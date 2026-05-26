import { create } from 'zustand'

export type SortOrder = 'price_asc' | 'price_desc' | null

interface SortStore {
  sortOrder: SortOrder
  setSortOrder: (order: SortOrder) => void
}

export const useSortStore = create<SortStore>((set) => ({
  sortOrder: null,
  setSortOrder: (sortOrder) => set({ sortOrder }),
}))