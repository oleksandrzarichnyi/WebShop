import { create } from 'zustand'
import type { Cart, CartItem } from '@/entities/cart'
import { DEFAULT_CART } from '@/entities/cart'

const DELIVERY_FEE = 15;
interface CartStore {
  cart: Cart
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number, size: string) => void
  increaseQuantity: (id: number, size: string) => void
  decreaseQuantity: (id: number, size: string) => void
  resetCart: () => void
  getSubtotal: () => number
  getTotal: () => number
  deliveryFee: number
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: DEFAULT_CART,
  deliveryFee: DELIVERY_FEE,

  getSubtotal: () =>
    get().cart.items.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0),

  getTotal: () => get().getSubtotal() + DELIVERY_FEE,

  addToCart: (item) =>
    set((state) => {
      const exists = state.cart.items.find(
        (i) => i.id === item.id && i.size === item.size
      )
      if (exists) {
        return {
          cart: {
            items: state.cart.items.map((i) =>
              i.id === item.id && i.size === item.size
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
          },
        }
      }
      return { cart: { items: [...state.cart.items, item] } }
    }),

  removeFromCart: (id, size) =>
    set((state) => ({
      cart: {
        items: state.cart.items.filter(
          (i) => !(i.id === id && i.size === size)
        ),
      },
    })),

  increaseQuantity: (id, size) =>
    set((state) => ({
      cart: {
        items: state.cart.items.map((i) =>
          i.id === id && i.size === size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      },
    })),

  decreaseQuantity: (id, size) =>
    set((state) => ({
      cart: {
        items: state.cart.items.map((i) =>
          i.id === id && i.size === size
            ? { ...i, quantity: Math.max(1, i.quantity - 1) }
            : i
        ),
      },
    })),

  resetCart: () => set({ cart: DEFAULT_CART }),
}))