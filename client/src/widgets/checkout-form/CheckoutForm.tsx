import { useState } from 'react'
import { ContactsStep } from '@/features/checkout/ui/ContactsStep'
import { DeliveryStep } from '@/features/checkout/ui/DeliveryStep'
import { Payment } from '@/features/checkout/ui/Payment'
import type { ContactsFormData } from '@/features/checkout/model/validation'
import styles from './CheckoutForm.module.scss'
import { useCheckoutStore } from '@/features/checkout/model/checkoutStore'

export const CheckoutForm = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [contactsValid, setContactsValid] = useState(false);
  const { resetDelivery } = useCheckoutStore();

  const handleContactsSuccess = (_data: ContactsFormData) => {
    setContactsValid(true);
    setStep(2);
  }

  return (
    <div className="flex w-[100%] gap-[30px]">
      <div className={styles['container']}>
        <div className={styles['steps']}>
          <span
            className={step === 1 ? styles['step--active'] : styles['step--done']}
            onClick={() => {
              setStep(1);
              resetDelivery();
            }}
          >
            1. Contacts
          </span>
          <span
            className={step === 2 ? styles['step--active'] : contactsValid ? styles['step--done'] : styles['step']}
            onClick={() => contactsValid && setStep(2)}
          >
            2. Delivery
          </span>
        </div>
        {step === 1
          ? <ContactsStep onSuccess={handleContactsSuccess} />
          : <DeliveryStep onBack={() => setStep(1)} />
        }
      </div>
      <Payment />
    </div>
  )
}