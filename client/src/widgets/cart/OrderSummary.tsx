import styles from './Cart.module.scss'
import { useCartStore } from '@/features/cart/model/cartStore'
import { Button } from '@mui/material'

export const OrderSummary = () => {
  const { cart } = useCartStore();

  const subtotal = cart.items.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
  const total = subtotal + 15;

  return (
    <>
      <div className={styles['container-order']}>
        <p className={styles['order-text-bold']}>Order Summary</p>
        <div className="flex flex-col gap-[20px]">
          <div className="flex justify-between">
            <p className={styles['order-text-secondary']}>Subtotal</p>
            <p className={styles['order-text-primary']}>{subtotal}$</p>
          </div>
          <div className="flex justify-between">
            <p className={styles['order-text-secondary']}>Delivery Fee</p>
            <p className={styles['order-text-primary']}>15$</p>
          </div>
          <div className="flex justify-between mt-[40px]">
            <p className={styles['order-text-primary']}>{cart.items.length !== 0 && 'Total'}</p>
            <p className={styles['order-text-primary']}>{cart.items.length > 0 ? `${total}$` : ''}</p>
          </div>
        </div>
        <Button
          variant="contained"
          fullWidth
          disabled={cart.items.length === 0}
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
          Go To Checkout
        </Button>
      </div>
    </>
  )
}