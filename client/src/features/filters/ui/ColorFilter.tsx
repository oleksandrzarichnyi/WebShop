
import { useFiltersStore } from '../model/filtersStore'
import CheckIcon from '@/shared/assets/icons/check-icon.svg'
import styles from './ColorFilter.module.scss'

const COLORS = [
  { id: 'black', hex: '#000000', border: '#000000' },
  { id: 'red', hex: '#FF0000', border: '#cc0000' },
  { id: 'white', hex: '#FFFFFF', border: '#cccccc', darkCheck: true },
  { id: 'blue', hex: '#0000FF', border: '#0000cc' },
]

export const ColorFilter = () => {
  const { pendingFilters, toggleColor } = useFiltersStore()

  return (
    <div className={styles['color-filter']}>
      {COLORS.map((color) => {
        const isSelected = pendingFilters.colors.includes(color.id)

        return (
          <div
            key={color.id}
            className={styles['circle']}
            style={{
              backgroundColor: color.hex,
              border: `2px solid ${color.border}`,
            }}
            onClick={() => toggleColor(color.id)}
          >
            {isSelected && (
              <img 
                src={CheckIcon} 
                alt="selected" 
                className={`${styles['check']} ${color?.darkCheck ? styles['check--dark'] : '' }`} 
              />
            )}
          </div>
        )
      })}
    </div>
  )
}