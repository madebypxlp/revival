import React, { FunctionComponent } from 'react'
import styles from './ProductSliderWithBigImage.module.scss'
import IProductSliderWithBigImage from './ProductSliderWithBigImage.interface'
import { Swiper, SwiperSlide } from '@components/ui/Swiper/Swiper'

const ProductSliderWithBigImageModule: FunctionComponent<{
  module: IProductSliderWithBigImage
}> = ({ module }) => {
  console.log(module)

  const Slide = (
    <SwiperSlide>
      <div className="h-500 border-2">
        <div className="h-330 border-2"></div>
      </div>
    </SwiperSlide>
  )
  return (
    <div
      className={`${styles.root} bg-cream pt-60 pb-80 mb-60 md:mb-80 overflow-hidden`}
    >
      <div className="container">
        <h2 className="typo-h4 text-blue mb-35">Shop The Article</h2>
        <Swiper
          className="overflow-visible"
          slidesPerView={1.2}
          spaceBetween={20}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 2.1,
            },
            1024: {
              slidesPerView: 3.1,
            },
            1440: {
              slidesPerView: 4.1,
            },
          }}
        >
          {Slide}
          {Slide}
          {Slide}
          {Slide}
          {Slide}
        </Swiper>
      </div>
    </div>
  )
}

export default ProductSliderWithBigImageModule
