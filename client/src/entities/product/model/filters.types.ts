export interface ProductFilters {
  category: string | null
  priceRange: [number, number] | null
  colors: string[]
  sizes: string[]
}

export interface PriceRange {
  min: number
  max: number
}

export const DEFAULT_FILTERS: ProductFilters = {
  category: null,
  priceRange: null,
  colors: [],
  sizes: []
}