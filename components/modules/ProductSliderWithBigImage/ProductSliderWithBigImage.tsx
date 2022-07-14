import React, { FunctionComponent, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from '@components/ui/Swiper/Swiper'
import ProductCard from '@components/ui/ProductCard/ProductCard'
import { SAMPLE_PRODUCT } from '@components/ui/ComponentRenderer/ComponentRenderer'
import { useIsMobile } from '@commerce/utils/hooks'
import IProductSliderWithBigImage from './ProductSliderWithBigImage.interface'

import styles from './ProductSliderWithBigImage.module.scss'

const ProductSliderWithBigImageModule: FunctionComponent<{
  module: IProductSliderWithBigImage
}> = ({ module }) => {
  const isMobile = useIsMobile()
  const products = [
    SAMPLE_PRODUCT,
    SAMPLE_PRODUCT,
    SAMPLE_PRODUCT,
    SAMPLE_PRODUCT,
    SAMPLE_PRODUCT,
    SAMPLE_PRODUCT,
  ]

  return (
    <div
      className={`${styles.root} container default-grid lg:mb-55 overflow-hidden mb-30`}
    >
      <div className="lg:col-span-3 lg:col-start-3 lg:pr-65 col-span-full mb-20">
        <Swiper
          slidesPerView={isMobile ? 1.3 : 1}
          spaceBetween={20}
          navigation
          pagination={!isMobile}
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>{/* <ProductCard {...p} /> */}</SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="col-span-full lg:col-start-6 lg:col-span-5 relative rounded-15 overflow-hidden aspect-w-[1.118] aspect-h-1">
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
