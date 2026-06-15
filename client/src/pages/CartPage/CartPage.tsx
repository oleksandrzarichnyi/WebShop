import Header from '@/widgets/Header/Header'
import { CartItems } from '@/widgets/cart/CartItems'
import { OrderSummary } from '@/widgets/cart/OrderSummary'

export default function CartPage() {
  return (
    <>
      <Header />
      <div className="container-default flex justify-between">
        <CartItems />
        <OrderSummary />
      </div>
    </>
  )
}