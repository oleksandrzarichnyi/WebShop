import Header from "../../widgets/Header/Header"
import Filters from "../../widgets/filters/Filters"
import ProductList from "../../widgets/product-list/ProductList"

export default function CatalogPage() {
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
