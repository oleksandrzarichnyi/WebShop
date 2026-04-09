import styles from './ProductInfo.module.scss'

export default function ProductInfo() {
  return (
    <>
      <div className="flex gap-[40px]">
        <div className="flex gap-[14px]">
          <div className="flex flex-col gap-[14px]">
            <div className="w-[152px] h-[168px] bg-[#F0EEED] rounded-[20px]"></div>
            <div className="w-[152px] h-[168px] bg-[#F0EEED] rounded-[20px]"></div>
            <div className="w-[152px] h-[168px] bg-[#F0EEED] rounded-[20px]"></div>
          </div>
          <div className="w-[444px] h-[530px] bg-[#F0EEED] rounded-[20px]"></div>
        </div>
        <div className="flex flex-col">
          <h2 className={styles['title']}>PRODUCT</h2>
          <p className={`${styles['text-secondary']} mt-[15px] mb-[15px]`}>*RATING*</p>
          <p className={styles['price']}>200$</p>
          <p className={`${styles['text-secondary']} mt-[20px]`}>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
          <div className={styles['separation-line']}></div>
          <p>size</p>
          <div className={styles['separation-line']}></div>
          <p>addtoc art</p>
        </div>
      </div>
    </>
  )
}