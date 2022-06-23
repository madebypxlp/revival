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
      <div className="h-330 border-2">
        <div className="h-250 border-2"></div>
      </div>
    </SwiperSlide>
  )
  return (
    <div className={`${styles.root} container default-grid`}>
      <div className="col-span-3 col-start-3 pr-65">
        <Swiper slidesPerView={1} spaceBetween={20} navigation breakpoints={{}}>
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
