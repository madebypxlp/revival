import React, { FunctionComponent } from 'react'
import styles from './ProductSliderWithBigImage.module.scss'
import IProductSliderWithBigImage from './ProductSliderWithBigImage.interface'
import Image from 'next/image'
import { Swiper, SwiperSlide } from '@components/ui/Swiper/Swiper'

const ProductSliderWithBigImageModule: FunctionComponent<{
  module: IProductSliderWithBigImage
}> = ({ module }) => {
  // placeholder
  const ProductPlaceholder = (
    <SwiperSlide>
      <div className="h-330 border-2">
        <div className="border-greyscale-4 h-250 border-2 rounded-15"></div>
      </div>
    </SwiperSlide>
  )

  return (
    <div
      className={`${styles.root} container default-grid md:mb-55 overflow-hidden mb-30`}
    >
      <div className="md:col-span-3 md:col-start-3 md:pr-65 col-span-full mb-20">
        <Swiper slidesPerView={1} spaceBetween={20} navigation>
          {ProductPlaceholder}
          {ProductPlaceholder}
          {ProductPlaceholder}
          {ProductPlaceholder}
          {ProductPlaceholder}
        </Swiper>
      </div>

      <div className="col-span-full md:col-start-6 md:col-span-5 relative rounded-15 overflow-hidden aspect-w-[1.118] aspect-h-1">
        <Image
          className="bg-blue-default "
          layout="fill"
          src="/card.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default ProductSliderWithBigImageModule
