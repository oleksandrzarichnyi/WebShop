import type { ProductFilters } from "@/entities/product";
import type { SortOrder } from "@/features/sort";

const BASE_URL = 'http://localhost:3001';

export async function getProducts(filters: ProductFilters, sortOrder: SortOrder, query: string = '') {
  const params = new URLSearchParams();

  if (filters.categories.length > 0) {
    params.set('categories', filters.categories.join(','));
  }

  if (filters.priceRange) {
    params.set('priceMin', String(filters.priceRange[0]));
    params.set('priceMax', String(filters.priceRange[1]));
  }

  if (filters.colors.length > 0) {
    params.set('colors', filters.colors.join(','));
  }

  if (filters.sizes.length > 0) {
    params.set('sizes', filters.sizes.join(','));
  }

  if (sortOrder) {
    params.set('sortOrder', sortOrder);
  }

  if (query) {
    params.set('query', query);
  }

  const res = await fetch(`${BASE_URL}/products?${params.toString()}`);
  return res.json();
}

export async function getProductById(id: string) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
}

export async function searchProducts(query: string) {
  const params = new URLSearchParams();
  params.set('query', query);
  const res = await fetch(`${BASE_URL}/products?${params.toString()}`);
  return res.json();
}