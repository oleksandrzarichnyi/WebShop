import styles from './ProductCard.module.scss'
import TestImg from '../../shared/assets/images/product-/image.png'

type ProductCartProps = {
  name: string;
  rating: number;
  price: number;
  imageUrl: string;
}

export default function ProductCard({ name, rating, price, imageUrl }: ProductCartProps) {
  return (
    <div className="w-[295px] h-[408px] flex flex-col">
      <div className="w-full h-[298px] rounded-[20px] bg-[#F0EEED] flex items-center mb-[16px] overflow-hidden">
        <img src={imageUrl} className="" alt="image" />
      </div>
      <div className="flex flex-col gap-[8px]">
        <p className={styles['text-bold']}>{name}</p>
        <p>{rating}</p>
        <p className={styles['text-bold']}>{price}$</p>
      </div>
    </div>
  )
}