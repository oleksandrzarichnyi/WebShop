import Checkbox from '@mui/material/Checkbox'
import { useFiltersStore } from '../model/filtersStore'
import styles from './CategoryFilter.module.scss'

const CATEGORIES = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans']

export const CategoryFilter = () => {
  const { pendingFilters, toggleCategory } = useFiltersStore()

  return (
    <div className={styles['category-filter']}>
      {CATEGORIES.map((category) => {
        const isSelected = pendingFilters.categories.includes(category)

        return (
          <div
            key={category}
            className={styles['item']}
            onClick={() => toggleCategory(category)}
          >
            <p className={`${styles['text']}`}>
              {category}
            </p>
            <Checkbox
              checked={isSelected}
              onChange={() => toggleCategory(category)}
              onClick={(e) => e.stopPropagation()}
              sx={{
                color: 'rgba(0, 0, 0, 0.3)',
                '&.Mui-checked': {
                  color: '#000000',
                },
                padding: 0,
              }}
            />
          </div>
        )
      })}
    </div>
  )
}