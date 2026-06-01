import { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useSearchStore } from '@/features/search'
import { searchProducts } from '@/entities/product/api/productsApi'
import SearchIcon from '@mui/icons-material/Search'

export const SearchInput = () => {
  const navigate = useNavigate();
  const { query, setQuery, clearQuery } = useSearchStore();
  const [open, setOpen] = useState(false);

  const { data: suggestions = [], isLoading } = useQuery({
    queryKey: ['search', query],
    queryFn: () => searchProducts(query),
    enabled: query.length > 1,
  })

  const handleSelect = (_: any, product: any) => {
    if (!product) return;
    navigate(`/product/${product.id}`);
    clearQuery();
  }

  return (
    <Autocomplete
      open={open && query.length > 1}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      options={suggestions}
      getOptionLabel={(option: any) => option.name}
      loading={isLoading}
      onChange={handleSelect}
      inputValue={query}
      onInputChange={(_, value) => setQuery(value)}
      filterOptions={(x) => x}
      popupIcon={null}
      sx={{ width: '400px' }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search for products..."
          size="medium"
          slotProps={{
            ...params.slotProps,
            input: {
              ...params.slotProps.input,
              startAdornment: (
                <>
                  <SearchIcon sx={{ color: 'rgba(0,0,0,0.4)' }} />
                  {params.slotProps.input.startAdornment}
                </>
              ),
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '62px',
              backgroundColor: '#F0F0F0',
              fontFamily: 'Satoshi',
              fontSize: '16px',
              '& fieldset': { border: 'none' },
              '&:hover fieldset': { border: 'none' },
              '&.Mui-focused fieldset': { border: 'none' },
            },
          }}
        />
      )}
      renderOption={(props, option: any) => (
        <li {...props} key={option.id}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src={option.img_url}
              alt={option.name}
              style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 8 }}
            />
            <div>
              <p style={{ margin: 0, fontSize: 14, fontFamily: 'Satoshi' }}>{option.name}</p>
              <p style={{ margin: 0, fontSize: 12, color: 'rgba(0,0,0,0.5)' }}>{option.price}$</p>
            </div>
          </div>
        </li>
      )}
    />
  )
}