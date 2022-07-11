import React, { FunctionComponent } from 'react'
import ICustomerReviewSlider from './CustomerReviewSlider.interface'
import { Swiper, SwiperSlide } from '@components/ui/Swiper/Swiper'
import { useIsMobile } from '@commerce/utils/hooks'
import styles from './CustomerReviewSlider.module.scss'

const CustomerReviewSliderModule: FunctionComponent<{
  module: ICustomerReviewSlider
}> = ({ module }) => {
  const { headline, reviews } = module
  const isMobile = useIsMobile()
  const slidesPerView = isMobile ? 1.1 : 2
  const spaceBetweenSlides = isMobile ? 10 : 20
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.headlineContainer}>
          {headline && <span>{headline}</span>}
        </div>
        {reviews && reviews.length > 0 && (
          <Swiper
            centeredSlides
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetweenSlides}
            navigation
            loop
            allowTouchMove={false}
          >
            {reviews.map((r) => (
              <SwiperSlide key={`${r.reviewCopy}-${r.author}`}>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewCopy}>{r.reviewCopy}</div>
                  <div className={styles.reviewAuthor}>{r.author}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  )
}

export default CustomerReviewSliderModule
