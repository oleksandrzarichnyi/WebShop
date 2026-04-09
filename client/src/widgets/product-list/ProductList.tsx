import ProductCard from "../ProductCard/ProductCard"

export default function ProductList() {
  return (
    <>
      <div className="flex flex-col gap-[25px]">
        <div className="flex gap-[15px]">
          <p className="">Casual</p>
        </div>
        <ProductCard />
      </div>
    </>
  )
}