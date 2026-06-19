import Button from '@mui/material/Button'
import { useCartStore } from '@/features/cart'
import { useCheckoutStore } from '../model/checkoutStore'
import styles from './Checkout.module.scss'
import { useNavigate } from 'react-router-dom'

export const Payment = () => {
  const { getSubtotal, getTotal, deliveryFee, resetCart } = useCartStore();
  const { isReadyToOrder, reset: resetCheckout } = useCheckoutStore();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    resetCart();
    resetCheckout();
    navigate('/');
  }

  return (
    <div className={`${styles['form-container']} ${styles['form-container--payment']}`}>
      <p className={styles['payment-title']}>Payment</p>
      <div className={styles['payment-row']}>
        <p className={styles['payment-label']}>Subtotal</p>
        <p className={styles['payment-value']}>{getSubtotal()}$</p>
      </div>
      <div className={styles['payment-row']}>
        <p className={styles['payment-label']}>Delivery</p>
        <p className={styles['payment-value']}>{deliveryFee}$</p>
      </div>
      <div className={styles['separation-line']} />
      <div className={styles['payment-row']}>
        <p className={styles['payment-label-bold']}>Total</p>
        <p className={styles['payment-value-bold']}>{getTotal()}$</p>
      </div>
      <div className="flex flex-col gap-[40px] mt-auto">
        <div className="flex flex-col gap-[15px]">
          <p className={styles['payment-label-bold']}>Payment method</p>
          <div className={styles['payment-method']}>
            <input
              type="radio"
              id="cod"
              checked
              readOnly
            />
            <label htmlFor="cod" className={styles['payment-method-label']}>
              Cash on Delivery
            </label>
          </div>
        </div>
        <Button
          variant="contained"
          fullWidth
          disabled={!isReadyToOrder()}
          onClick={handlePlaceOrder}
          sx={{
            backgroundColor: '#000000',
            borderRadius: '62px',
            textTransform: 'none',
            fontSize: '16px',
            fontFamily: 'Satoshi',
            boxShadow: 'none',
            padding: '14px',
            '&:hover': { backgroundColor: '#333333', boxShadow: 'none' },
            '&:active': { boxShadow: 'none' },
          }}
        >
          Place Order
        </Button>
      </div>
    </div>
  )
}