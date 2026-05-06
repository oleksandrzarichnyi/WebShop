import ProductCard from "../ProductCard/ProductCard"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../shared/api/productsApi";

export default function ProductList() {
  const { data: productsData = [] } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  console.log(productsData);

  return (
    <>
      <div className="flex flex-col gap-[25px]">
        <div className="flex gap-[15px]">
          <p className="">Casual</p>
        </div>
        <div className="flex flex-wrap gap-[20px]">
          {productsData.map((product: any) => {
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