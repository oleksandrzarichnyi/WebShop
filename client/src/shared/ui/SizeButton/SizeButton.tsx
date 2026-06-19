import styles from './SizeButton.module.scss'

interface SizeButtonProps {
  label: string
  isActive: boolean
  isAvailable: boolean
  onClick: () => void
}

export const SizeButton = ({ label, isActive, onClick, isAvailable }: SizeButtonProps) => (
  <button
    className={`
      ${styles['btn']} 
      ${isActive ? styles['btn--active'] : ''} 
      ${!isAvailable ? styles['btn--disabled'] : ''}`
    }
    onClick={isAvailable ? onClick : undefined}
  >
    {label}
  </button>
)