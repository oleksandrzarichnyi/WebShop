import styles from './Filters.module.scss'
import FiltersIcon from '../../shared/assets/icons/filters-icon.svg'

export default function Filters() {
  return (
    <>
      <div className={styles['filters-container']}>
        <div className="flex justify-between items-center">
          <h2 className={styles['title']}>Filters</h2>
          <img src={FiltersIcon} alt="" />
        </div>
        <div className={styles['separation-line']}></div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex justify-between">
            <p className={styles['text']}>T-shirts</p>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between">
            <p className={styles['text']}>Shorts</p>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between">
            <p className={styles['text']}>Shirts</p>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between">
            <p className={styles['text']}>Hoodie</p>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between">
            <p className={styles['text']}>Jeans</p>
            <input type="checkbox" />
          </div>
        </div>
        <div className={styles['separation-line']}></div>
        <p className={styles['title']}>Price</p>
        <div className={styles['separation-line']}></div>
        <p className={styles['title']}>Colors</p>
        <div className={styles['separation-line']}></div>
        <p className={styles['title']}>Size</p>
        <div className={styles['separation-line']}></div>
        <div className="flex flex-col gap-[20px]">
          <p className={styles['title']}>Dress style</p>
          <div className="flex justify-between">
            <p className={styles['text']}>Casual</p>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between">
            <p className={styles['text']}>Formal</p>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between">
            <p className={styles['text']}>Party</p>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between">
            <p className={styles['text']}>Gym</p>
            <input type="checkbox" />
          </div>
        </div>
        <div className={styles['separation-line']}></div>
      </div>
    </>
  )
}
