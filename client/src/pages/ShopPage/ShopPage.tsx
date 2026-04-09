import { Link } from "react-router-dom"
import Header from "../../widgets/Header/Header"
import Filters from "../../widgets/filters/Filters"
import ProductList from "../../widgets/product-list/ProductList"

export default function ShopPage() {
  return (
    <>
      <Header />
      <div className="container-default flex gap-[20px]">
        <Filters />
        <ProductList />
      </div>
    </>
  )
}
