import styles from './ProductInfo.module.scss'
import { useProduct } from '@/entities/product/api/useProduct'

export default function ProductInfo() {
  const { data: product, isLoading } = useProduct();

  if (isLoading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <>
      <div className="flex gap-[40px]">
        <div className="flex gap-[14px]">
          <div className="flex flex-col gap-[14px]">
            <div className="w-[152px] h-[168px] bg-[#F0EEED] rounded-[20px]"></div>
            <div className="w-[152px] h-[168px] bg-[#F0EEED] rounded-[20px]"></div>
            <div className="w-[152px] h-[168px] bg-[#F0EEED] rounded-[20px]"></div>
          </div>
          <div className="w-[444px] h-[530px] bg-[#F0EEED] rounded-[20px] flex justify-center">
            <img className="max-h-[530px]" src={product.img_url} alt="image" />
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className={styles['title']}>{product.name}</h2>
          <p className={`${styles['text-secondary']} mt-[15px] mb-[15px]`}>
            {product.rating === '0.0' ? 'No rating' : product.rating}
          </p>
          <p className={styles['price']}>{product.price}$</p>
          <p className={`${styles['text-secondary']} mt-[20px]`}>
            {product.description}
          </p>
          <div className={styles['separation-line']}></div>
          <p>size</p>
          <div className={styles['separation-line']}></div>
          <p>addtoc art</p>
        </div>
      </div>
    </>
  )
}