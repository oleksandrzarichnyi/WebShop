import ProductCard from "../ProductCard/ProductCard"
import { useProducts } from "@/entities/product"
import { SortSelect } from "@/features/sort"
import { Link } from "react-router-dom";

export default function ProductList() {
  const { data: products, isLoading } = useProducts();

  return (
    <div className="flex flex-col gap-[25px] w-[100%]">
      <div className="flex justify-end">
        <SortSelect />
      </div>
      <div className="flex flex-wrap gap-[20px]">
        {isLoading && <p>Loading...</p>}

        {!isLoading && products?.length === 0 && (
          <p>No products match your current filters.</p>
        )}
        
        {products?.map((product: any) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard
              name={product.name}
              rating={product.rating === '0.0' ? 'No rating' : product.rating}
              price={product.price}
              imageUrl={product.img_url}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}