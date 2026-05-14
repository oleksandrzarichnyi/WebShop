import { useFiltersStore } from '../model/filtersStore'
import styles from './SizeFilter.module.scss'

const SIZES = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large']

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