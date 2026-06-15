import { create } from 'zustand'
import type { Cart, CartItem } from '@/entities/cart'
import { DEFAULT_CART } from '@/entities/cart'

interface СartStore {
  cart: Cart
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number, size: string) => void
  increaseQuantity: (id: number, size: string) => void
  decreaseQuantity: (id: number, size: string) => void
}

export const useCartStore = create<СartStore>((set) => ({
  cart: DEFAULT_CART,

  addToCart: (item) =>
    set((state) => ({
      cart: { items: [...state.cart.items, item] }
    })),

  removeFromCart: (id, size) =>
    set((state) => ({
      cart: {
        items: state.cart.items.filter(i => !(i.id === id && i.size === size))
      }
    })),

  increaseQuantity: (id, size) => 
    set((state) => ({
      cart: {
        items: state.cart.items.map((i) => 
          i.id === id && i.size === size
            ? { ...i, quantity: i.quantity + 1 } 
            : i
        ),
      }
    })),

  decreaseQuantity: (id, size) => 
    set((state) => ({
      cart: {
        items: state.cart.items.map((i) => 
          i.id === id && i.size === size
            ? { ...i, quantity: Math.max(1, i.quantity - 1) }
            : i
        )
      }
    })),
}))