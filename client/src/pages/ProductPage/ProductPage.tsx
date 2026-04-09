import Header from "../../widgets/Header/Header"
import ProductInfo from "../../widgets/ProductInfo/ProductInfo"

export default function ProductPage() {
  return (
    <>
      <Header />
      <div className="container-default pt-[80px]">
        <ProductInfo />
      </div>
    </>
  )
}
