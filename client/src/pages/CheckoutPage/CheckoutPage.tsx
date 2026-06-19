import Header from '@/widgets/Header/Header'
import { CheckoutForm } from '@/widgets/checkout-form/CheckoutForm'

export const CheckoutPage = () => {
  return (
    <>
      <Header />
      <div className="container-default pt-[70px] flex">
        <CheckoutForm />
      </div>
    </>
  )
}