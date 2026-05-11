export interface ProductFilters {
  categories: string[]
  priceRange: [number, number] | null
  colors: string[]
  sizes: string[]
}

export interface PriceRange {
  min: number
  max: number
}

export const DEFAULT_FILTERS: ProductFilters = {
  categories: [],
  priceRange: null,
  colors: [],
  sizes: []
}