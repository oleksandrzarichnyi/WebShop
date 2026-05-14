import { create } from 'zustand'
import { type ProductFilters, DEFAULT_FILTERS } from '../../../entities/product'

interface FiltersStore {
  filters: ProductFilters
  pendingFilters: ProductFilters
  toggleCategory: (category: string) => void
  setPriceRange: (range: [number, number] | null) => void
  toggleColor: (color: string) => void
  toggleSize: (size: string) => void
  applyFilters: () => void
  resetFilters: () => void
}

export const useFiltersStore = create<FiltersStore>((set) => ({
  filters: DEFAULT_FILTERS,
  pendingFilters: DEFAULT_FILTERS,

  toggleCategory: (category) =>
    set((state) => {
      const categories = state.pendingFilters.categories.includes(category)
        ? state.pendingFilters.categories.filter((c) => c !== category)
        : [...state.pendingFilters.categories, category]
      return { pendingFilters: { ...state.pendingFilters, categories } }
    }),

  setPriceRange: (priceRange) =>
    set((state) => ({ pendingFilters: { ...state.pendingFilters, priceRange } })),

  toggleColor: (color) =>
    set((state) => {
      const colors = state.pendingFilters.colors.includes(color)
        ? state.pendingFilters.colors.filter((c) => c !== color)
        : [...state.pendingFilters.colors, color]
      return { pendingFilters: { ...state.pendingFilters, colors } }
    }),

  toggleSize: (size) =>
    set((state) => {
      const sizes = state.pendingFilters.sizes.includes(size)
        ? state.pendingFilters.sizes.filter((s) => s !== size)
        : [...state.pendingFilters.sizes, size]
      return { pendingFilters: { ...state.pendingFilters, sizes } }
    }),

  applyFilters: () =>
    set((state) => ({ filters: state.pendingFilters })),

  resetFilters: () =>
    set({ filters: DEFAULT_FILTERS, pendingFilters: DEFAULT_FILTERS }),
}))