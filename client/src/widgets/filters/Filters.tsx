import styles from './Filters.module.scss'
import FiltersIcon from '../../shared/assets/icons/filters-icon.svg'
import { ColorFilter, PriceFilter, CategoryFilter, SizeFilter } from '@/features/filters'
import Button from '@mui/material/Button'
import { useFiltersStore } from '@/features/filters/model/filtersStore'


export default function Filters() {
  const { applyFilters, resetFilters } = useFiltersStore();

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
        <div className="mt-[10px] flex flex-col items-center gap-[15px]">
          <Button
            variant="contained"
            fullWidth
            onClick={applyFilters}
            sx={{
              height: '50px',
              backgroundColor: '#000000',
              borderRadius: '62px',
              textTransform: 'none',
              fontSize: '14px',
              fontFamily: 'Satoshi',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#333333',
                boxShadow: 'none',
              },
              '&:active': {
                boxShadow: 'none'
              }
            }}
          >
            Apply Filters
          </Button>
          <Button
            variant="contained"
            onClick={resetFilters}
            sx={{
              width: '200px',
              backgroundColor: '#D9D9D9',
              color: 'rgba(0, 0, 0, 0.6)',
              borderRadius: '62px',
              textTransform: 'none',
              fontSize: '12px',
              fontFamily: 'Satoshi',
              boxShadow: 'none',
              padding: '6px 20px',
              '&:hover': { backgroundColor: '#C8C8C8', boxShadow: 'none' },
              '&:active': { boxShadow: 'none' },
            }}
          >
            Reset Filters
          </Button>
        </div>
      </div>
    </>
  )
}
