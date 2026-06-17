import { create } from 'zustand'
import type { ContactsFormData, DeliveryFormData } from './validation'

interface CheckoutStore {
  contacts: ContactsFormData | null
  delivery: DeliveryFormData | null
  setContacts: (data: ContactsFormData) => void
  setDelivery: (data: DeliveryFormData) => void
  reset: () => void
  resetDelivery: () => void
  isReadyToOrder: () => boolean
}

export const useCheckoutStore = create<CheckoutStore>((set, get) => ({
  contacts: null,
  delivery: null, 
  setContacts: (contacts) => set({ contacts }),
  setDelivery: (delivery) => set({ delivery }),
  reset: () => set({ contacts: null, delivery: null }),
  resetDelivery: () => set({ delivery: null }),
  isReadyToOrder: () => !!get().contacts && !!get().delivery,
}))