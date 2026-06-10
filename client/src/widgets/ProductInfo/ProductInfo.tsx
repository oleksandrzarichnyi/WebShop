import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '@/entities/product/api/useProduct'
import { useProductSizes } from '@/entities/product/api/useProductSizes'
import { SizeButton } from '@/shared/ui'
import Button from '@mui/material/Button'
import styles from './ProductInfo.module.scss'

const ALL_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function ProductInfo() {
  const { id } = useParams();
  const { data: product, isLoading } = useProduct();
  const { data: sizes = [] } = useProductSizes(id!)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  if (isLoading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <>
      <div className="flex gap-[40px]">
        <div className="w-[444px] h-[530px] bg-[#F0EEED] rounded-[20px] flex justify-center">
          <img className="max-h-[530px]" src={product.img_url} alt="image" />
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
          <div className="flex flex-col gap-[16px]">
            <p className={styles['text-secondary']}>Choose Size</p>
            <div className="flex gap-[12px]">
              {ALL_SIZES.map((size) => (
                <SizeButton
                  key={size}
                  label={size}
                  isActive={selectedSize === size}
                  isAvailable={sizes.includes(size)}
                  onClick={() => setSelectedSize(size)}
                />
              ))}
            </div>
          </div>
          <div className={styles['separation-line']}></div>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#000000',
              borderRadius: '62px',
              textTransform: 'none',
              fontSize: '16px',
              fontFamily: 'Satoshi',
              boxShadow: 'none',
              padding: '14px',
              '&:hover': { backgroundColor: '#333333', boxShadow: 'none' },
              '&:active': { boxShadow: 'none' },
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  )
}