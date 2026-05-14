import ProductCard from "../ProductCard/ProductCard"
import { useProducts } from "@/entities/product"

export default function ProductList() {
  const { data: products, isLoading } = useProducts();

  return (
    <>
      <div className="flex flex-col gap-[25px]">
        <div className="flex gap-[15px]">
          <p className="">Casual</p>
        </div>
        <div className="flex flex-wrap gap-[20px]">
          {isLoading && <p>Loading...</p>}
          {products?.map((product: any) => {
            return (
              <ProductCard 
                key={product.id} 
                name={product.name} 
                rating={product.rating === '0.0' ? 'No rating' : product.rating} 
                price={product.price} 
                imageUrl={product.img_url} 
              />
            )
          })}
        </div>
      </div>
    </>
  )
}