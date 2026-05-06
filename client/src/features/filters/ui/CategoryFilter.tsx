import { useFiltersStore } from '../model/filtersStore'
import styles from './CategoryFilter.module.scss'

const CATEGORIES = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];

export const CategoryFilter = () => {
  const { filters, setCategory } = useFiltersStore();

  const handleChange = (category: string) => {
    const isSelected = filters.category === category;
    setCategory(isSelected ? null : category);
  }

  return (
    <div className={styles['category-filter']}>
      {CATEGORIES.map((category) => (
        <div
          key={category}
          className={styles['item']}
          onClick={() => handleChange(category)}
        >
          <p className={`${styles['text']} ${filters.category === category ? styles['text--active'] : ''}`}>
            {category}
          </p>
        </div>
      ))}
    </div>
  )
}