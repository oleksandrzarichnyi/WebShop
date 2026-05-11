import styles from './Filters.module.scss'
import FiltersIcon from '../../shared/assets/icons/filters-icon.svg'
import { ColorFilter, PriceFilter, CategoryFilter, SizeFilter } from '@/features/filters'

export default function Filters() {
  return (
    <>
      <div className={styles['filters-container']}>
        <div className="flex justify-between items-center">
          <h2 className={styles['title']}>Filters</h2>
          <img src={FiltersIcon} alt="" />
        </div>
        <div className={styles['separation-line']}></div>
        <CategoryFilter />
        <div className={styles['separation-line']}></div>
        <p className={styles['title']}>Price</p>
        <PriceFilter />
        <div className={styles['separation-line']}></div>
        <p className={styles['title']}>Colors</p>
        <ColorFilter />
        <div className={styles['separation-line']}></div>
        <p className={styles['title']}>Size</p>
        <SizeFilter />
      </div>
    </>
  )
}
