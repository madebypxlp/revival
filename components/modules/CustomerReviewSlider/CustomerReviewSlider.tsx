import React, { FunctionComponent } from 'react'
import c from 'classnames'
import styles from './CustomerReviewSlider.module.scss'
import ICustomerReviewSlider from './CustomerReviewSlider.interface'
import { Swiper, SwiperSlide } from '@components/ui/Swiper/Swiper'

const CustomerReviewSliderModule: FunctionComponent<{
  module: ICustomerReviewSlider
}> = ({ module }) => {
  console.log(module)
  const { headline, reviews } = module

  return (
    <div className={`${styles.root}`}>
      <div className={c(styles.headlineContainer)}>
        {headline && <span>{headline}</span>}
      </div>
      {reviews && reviews.length > 0 && (
        <Swiper
          centeredSlides
          centerInsufficientSlides
          slidesPerView={2}
          navigation
          loop
        >
          {reviews.map((r) => (
            <SwiperSlide>
              <div className={c(styles.reviewCard)}>
                <div>{r.reviewCopy}</div>
                <div>{r.author}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}

export default CustomerReviewSliderModule
