import { useState} from 'react'
import { useForm, Controller} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useQuery } from '@tanstack/react-query'
import { deliverySchema, type DeliveryFormData } from '../model/validation'
import { useCheckoutStore } from '../model/checkoutStore'
import { searchCities, searchWarehouses } from '@/shared/api/novaPoshtaApi'
import styles from './Checkout.module.scss'
import CheckIcon from '@mui/icons-material/Check'

interface Props {
  onBack: () => void
}

export const DeliveryStep = ({ onBack }: Props) => {
  const { setDelivery, isReadyToOrder, resetDelivery } = useCheckoutStore();
  const [cityQuery, setCityQuery] = useState('');
  const [selectedCityRef, setSelectedCityRef] = useState<string | null>(null);
  const [warehouseQuery, setWarehouseQuery] = useState('');

  const { data: cities = [] } = useQuery({
    queryKey: ['cities', cityQuery],
    queryFn: () => searchCities(cityQuery),
    enabled: cityQuery.length > 1,
  });

  const { data: warehouses = [] } = useQuery({
    queryKey: ['warehouses', selectedCityRef, warehouseQuery],
    queryFn: () => searchWarehouses(selectedCityRef!, warehouseQuery),
    enabled: !!selectedCityRef,
  });

  const { control, handleSubmit, formState: { errors } } = useForm<DeliveryFormData>({
    resolver: yupResolver(deliverySchema),
  });

  return (
    <form 
      onSubmit={handleSubmit(setDelivery)} 
      className={`${styles['form-container']} ${styles['form-container--delivery']}`}
    >
      <Controller
        name="city"
        control={control}
        render={({ field }) => (
          <Autocomplete
            options={cities ?? []}
            getOptionLabel={(option: any) => option.Description}
            filterOptions={(x) => x}
            popupIcon={null}
            onInputChange={(_, value) => setCityQuery(value)}
            onChange={(_, value: any) => {
              field.onChange(value?.Description ?? '')
              setSelectedCityRef(value?.Ref ?? null)
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="City"
                className={styles['text-field']}
                error={!!errors.city}
                helperText={errors.city?.message}
              />
            )}
          />
        )}
      />
      <Controller
        name="warehouse"
        control={control}
        render={({ field }) => (
          <Autocomplete
            options={warehouses}
            getOptionLabel={(option: any) => option.Description}
            filterOptions={(x) => x}
            disabled={!selectedCityRef}
            popupIcon={null}
            onInputChange={(_, value) => setWarehouseQuery(value)}
            onChange={(_, value: any) => {
              field.onChange(value?.Description ?? '')
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Nova Poshta Department"
                className={styles['text-field']}
                error={!!errors.warehouse}
                helperText={errors.warehouse?.message}
              />
            )}
          />
        )}
      />
      <div className={styles['row']}>
        <Button
          variant="outlined"
          fullWidth
          onClick={() => {
            onBack();
            resetDelivery();
          }}
          className={styles['btn-back']}
        >
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className={styles['btn-submit']}
        >
          {isReadyToOrder() ? <CheckIcon/> : 'Continue'}
        </Button>
      </div>
    </form>
  )
}