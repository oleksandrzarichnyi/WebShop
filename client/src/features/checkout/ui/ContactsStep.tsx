import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { contactsSchema, type ContactsFormData } from '../model/validation'
import { useCheckoutStore } from '../model/checkoutStore'
import styles from './Checkout.module.scss'

interface Props {
  onSuccess: (data: ContactsFormData) => void
}

export const ContactsStep = ({ onSuccess }: Props) => {
  const { contacts, setContacts } = useCheckoutStore();

  const { register, handleSubmit, formState: { errors } } = useForm<ContactsFormData>({
    resolver: yupResolver(contactsSchema),
    defaultValues: contacts ?? {},
  });

  const handleSuccess = (data: ContactsFormData) => {
    setContacts(data);
    onSuccess(data);
  }

  return (
    <form onSubmit={handleSubmit(handleSuccess)} className={styles['form-container']}>
      <div className={styles['row']}>
        <TextField
          label="First Name"
          fullWidth
          className={styles['text-field']}
          {...register('firstName')}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />
        <TextField
          label="Last Name"
          fullWidth
          className={styles['text-field']}
          {...register('lastName')}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
      </div>
      <TextField
        label="Phone"
        fullWidth
        placeholder="+380XXXXXXXXX"
        className={styles['text-field']}
        {...register('phone')}
        error={!!errors.phone}
        helperText={errors.phone?.message}
      />
      <TextField
        label="Email"
        fullWidth
        className={styles['text-field']}
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        className={styles['btn-submit']}
      >
        Next
      </Button>
    </form>
  )
}