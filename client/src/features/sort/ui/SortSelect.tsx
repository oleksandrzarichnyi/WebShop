import Select, { type SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useSortStore, type SortOrder } from '@/features/sort'
import styles from './SortSelect.module.scss'

export const SortSelect = () => {
  const { sortOrder, setSortOrder } = useSortStore()

  const handleChange = (e: SelectChangeEvent) => {
    setSortOrder(e.target.value as SortOrder)
  }

  return (
    <Select
      value={sortOrder ?? ''}
      onChange={handleChange}
      displayEmpty
      className={styles['select']}
      sx={{
        borderRadius: '8px',
        fontSize: '14px',
        fontFamily: 'Satoshi',
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'rgba(0, 0, 0, 0.3)',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: 'rgba(0, 0, 0, 0.3)',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'rgba(0, 0, 0, 0.3)',
          borderWidth: '1px',
        },
      }}
    >
      <MenuItem value="">No sorting</MenuItem>
      <MenuItem value="price_asc">Price: Low to High</MenuItem>
      <MenuItem value="price_desc">Price: High to Low</MenuItem>
    </Select>
  )
}