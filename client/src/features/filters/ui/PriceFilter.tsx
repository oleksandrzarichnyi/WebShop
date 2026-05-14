import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useFiltersStore } from '../model/filtersStore'
import styles from './PriceFilter.module.scss'

const MIN_PRICE = 0;
const MAX_PRICE = 100;

export const PriceFilter = () => {
  const { pendingFilters, setPriceRange } = useFiltersStore();

  const range = pendingFilters.priceRange ?? [MIN_PRICE, MAX_PRICE];

  const handleChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setPriceRange([value[0], value[1]])
    }
  };

  return (
    <div className={styles['price-filter']}>
      <div className={styles['labels']}>
        <span className={styles['value']}>${range[0]}</span>
        <span className={styles['value']}>${range[1]}</span>
      </div>
      <Slider
        range
        min={MIN_PRICE}
        max={MAX_PRICE}
        value={range}
        onChange={handleChange}
      />
    </div>
  )
}