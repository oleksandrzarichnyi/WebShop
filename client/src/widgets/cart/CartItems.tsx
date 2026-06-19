import styles from './Cart.module.scss'
import { useCartStore } from '@/features/cart/model/cartStore'
import { IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export const CartItems = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCartStore();

  return (
    <>
      <div className="w-full flex flex-col gap-[25px] mt-[70px]">
        <p className={styles['cart-title']}>YOUR CART</p>
        {cart.items.length === 0 && <p>Your cart is empty</p>}
        {cart.items.length > 0 &&
          <div className={styles['container-cart']}>
            {cart.items.map((item) => (
              <div key={`${item.id}:${item.size}`} className="flex gap-[16px]">
                <div className={styles['img-bg']}>
                  <img src={item.img_url} className="w-full h-auto" alt="product image" />
                </div>
                <div className="flex flex-col gap-[5px] pt-[15px]">
                  <p className={styles['text-bold']}>{item.name}</p>
                  <p className={styles['text-primary']}>
                    Size: <span className={styles['text-secondary']}>{item.size}</span>
                  </p>
                  <p className={styles['item-price']}>{item.price}$</p>
                </div>
                <div className="pt-[5px] pb-[7px] ml-auto flex flex-col justify-between items-end">
                  <IconButton
                    onClick={() => {
                      removeFromCart(item.id, item.size);
                    }}
                  >
                    <Delete sx={{ width: 24, height: 24, color: '#f44336' }} />
                  </IconButton>
                  <div className="w-[116px] h-[40px] px-[10px] bg-[#F0F0F0] rounded-[30px] flex justify-between items-center">
                    <IconButton
                      onClick={() => decreaseQuantity(item.id, item.size)}
                      disabled={item.quantity === 1}
                      sx={{
                        backgroundColor: '#F0F0F0',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        '&:hover': { backgroundColor: '#E0E0E0' },
                      }}
                    >
                      <RemoveIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                    <p className={styles['order-text-primary']}>{item.quantity}</p>
                    <IconButton
                      onClick={() => increaseQuantity(item.id, item.size)}
                      sx={{
                        backgroundColor: '#F0F0F0',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        '&:hover': { backgroundColor: '#E0E0E0' },
                      }}
                    >
                      <AddIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </>
  )
}