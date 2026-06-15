export interface CartItem {
  id: number
  name: string
  price: number
  img_url: string
  size: string
  quantity: number
}

export interface Cart {
  items: CartItem[]
}

export const DEFAULT_CART: Cart = {
  items: []
}