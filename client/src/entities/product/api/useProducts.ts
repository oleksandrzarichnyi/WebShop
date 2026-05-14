import { useQuery } from "@tanstack/react-query"
import { useFiltersStore } from "@/features/filters/model/filtersStore"
import { getProducts } from "./productsApi" 

export const useProducts = () => {
  const { filters } = useFiltersStore();

  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => getProducts(filters),
  });
}