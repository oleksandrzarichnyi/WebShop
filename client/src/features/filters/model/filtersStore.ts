import { create } from 'zustand'
import { type ProductFilters, DEFAULT_FILTERS } from '../../../entities/product'

interface FiltersStore {
  filters: ProductFilters
  setCategory: (category: string | null) => void
  setPriceRange: (range: [number, number] | null) => void
  toggleColor: (color: string) => void
  toggleSize: (size: string) => void
  resetFilters: () => void
}

export const useFiltersStore = create<FiltersStore>((set) => ({
  filters: DEFAULT_FILTERS,

  setCategory: (category) =>
    set((state) => ({ filters: { ...state.filters, category } })),

  setPriceRange: (priceRange) => 
    set((state) => ({ filters: { ...state.filters, priceRange } })),

  toggleColor: (color) => 
    set((state) => {
      const colors = state.filters.colors.includes(color)
        ? state.filters.colors.filter((c) => c !== color)
        : [...state.filters.colors, color]
      return { filters: { ...state.filters, colors } }
    }),

  toggleSize: (size) => 
    set((state) => {
      const sizes = state.filters.sizes.includes(size)
        ? state.filters.sizes.filter((s) => s !== size)
        : [...state.filters.sizes, size]
      return { filters: { ...state.filters, sizes } }
    }),

    resetFilters: () => set({ filters: DEFAULT_FILTERS }),
}))