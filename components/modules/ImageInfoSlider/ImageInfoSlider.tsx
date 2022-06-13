import React, { FunctionComponent } from 'react'
import styles from './ImageInfoSlider.module.scss'
import IImageInfoSlider from './ImageInfoSlider.interface'
import { Swiper, SwiperSlide } from '@components/ui/Swiper/Swiper'
import ImageComponent from '@components/ui/Image/Image'

const ImageInfoSliderModule: FunctionComponent<{
  module: IImageInfoSlider
}> = ({ module }) => {
  console.log(module)
  return (
    <div className={`${styles.root} container`}>
      <Swiper slidesPerView={2} navigation>
        {module.slides.map((e) => (
          <SwiperSlide>
            <ImageComponent image={e.image} />
            {e.headline}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageInfoSliderModule
