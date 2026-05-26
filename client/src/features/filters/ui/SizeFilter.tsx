import { useFiltersStore } from '../model/filtersStore'
import styles from './SizeFilter.module.scss'

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

export const SizeFilter = () => {
  const { pendingFilters, toggleSize } = useFiltersStore()

  return (
    <div className={styles['size-filter']}>
      {SIZES.map((size) => {
        const isSelected = pendingFilters.sizes.includes(size)

        return (
          <button
            key={size}
            className={`${styles['btn']} ${isSelected ? styles['btn--active'] : ''}`}
            onClick={() => toggleSize(size)}
          >
            {size}
          </button>
        )
      })}
    </div>
  )
}