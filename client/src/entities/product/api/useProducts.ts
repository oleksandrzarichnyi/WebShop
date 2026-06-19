import { useQuery } from "@tanstack/react-query"
import { useFiltersStore } from "@/features/filters/model/filtersStore"
import { getProducts } from "./productsApi" 
import { useSortStore } from "@/features/sort"

export const useProducts = () => {
  const { filters } = useFiltersStore();
  const { sortOrder } = useSortStore();

  return useQuery({
    queryKey: ['products', filters, sortOrder],
    queryFn: () => getProducts(filters, sortOrder),
  })
}