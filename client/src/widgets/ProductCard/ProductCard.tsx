import styles from './ProductCard.module.scss'
import TestImg from '../../shared/assets/images/product-/image.png'

export default function ProductCard(){
  return (
    <div className="w-[295px] h-[408px] flex flex-col">
      <div className="w-full h-[298px] rounded-[20px] bg-[#F0EEED] flex items-center mb-[16px]">
        <img src={TestImg} alt="image" />
      </div>
      <p className={styles['text-bold']}>Gradient Graphic T-shirt</p>
      <p>*RATING*</p>
      <p className={styles['text-bold']}>145$</p>
    </div>
  )
}