import React, { FunctionComponent } from 'react'
import { Swiper, SwiperSlide } from '@components/ui/Swiper/Swiper'
import ImageComponent from '@components/ui/Image/Image'
import { useIsMobile } from '@commerce/utils/hooks'
import IImageInfoSlider from './ImageInfoSlider.interface'
import styles from './ImageInfoSlider.module.scss'

const ImageInfoSliderModule: FunctionComponent<{
  module: IImageInfoSlider
}> = ({ module }) => {
  const { slides, headline } = module

  const isMobile = useIsMobile()
  const slidesPerView = isMobile ? 1 : 3
  return (
    <div className={`${styles.root}`}>
      <div className="container">
        <div className="default-grid">
          <div className={styles.headlineContainer}>
            {headline && <h4>{headline}</h4>}
          </div>
        </div>
        <Swiper
          slidesPerView={slidesPerView}
          navigation
          className={styles.swiper}
        >
          {slides.map((e) => (
            <SwiperSlide key={e.headline}>
              <div className={styles.slideContainer}>
                <div className={styles.slideImage}>
                  <ImageComponent
                    layout="fill"
                    className="aspect-1 rounded-full overflow-hidden bg-white"
                    image={e.image}
                  />
                </div>
                <div className={styles.slideHeadlineContainer}>
                  {e.headline && <h5>{e.headline}</h5>}
                </div>
                <div className={styles.slideCopyContainer}>
                  {e.copy && <span>{e.copy}</span>}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ImageInfoSliderModule
