import { useFiltersStore } from '../model/filtersStore'
import { SizeButton } from '@/shared/ui';

const SIZES = [
  { label: 'X-Small', value: 'XS' },
  { label: 'Small', value: 'S' },
  { label: 'Medium', value: 'M' },
  { label: 'Large', value: 'L' },
  { label: 'X-Large', value: 'XL' },
  { label: 'XX-Large', value: 'XXL' },
];

export const SizeFilter = () => {
  const { pendingFilters, toggleSize } = useFiltersStore()

  return (
    <div className="flex flex-wrap gap-[10px]">
      {SIZES.map(({ label, value }) => (
        <SizeButton
          key={value}
          label={label}
          isActive={pendingFilters.sizes.includes(value)}
          isAvailable={true}
          onClick={() => toggleSize(value)}
        />
      ))}
    </div>
  )
}