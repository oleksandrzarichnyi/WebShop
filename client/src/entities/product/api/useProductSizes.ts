import { useQuery } from '@tanstack/react-query'
import { getProductSizes } from './productsApi'

export const useProductSizes = (id: string) => {
  return useQuery({
    queryKey: ['product-sizes', id],
    queryFn: () => getProductSizes(id),
    enabled: !!id,
  })
}