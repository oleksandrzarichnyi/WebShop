import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getProductById } from './productsApi'

export const useProduct = () => {
  const { id } = useParams();

  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id!),
    enabled: !!id,
  });
}