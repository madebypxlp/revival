import React, { FunctionComponent } from 'react'
import styles from './HeroCarousel.module.scss'
import IHeroCarousel from './HeroCarousel.interface'
import Image from '@components/ui/Image/Image'
import { Swiper, SwiperSlide } from '@components/ui/Swiper/Swiper'
// import { Swiper, SwiperSlide } from 'swiper/react'

const HeroCarouselModule: FunctionComponent<{ module: IHeroCarousel }> = ({
  module,
}) => {
  const { carousel } = module
  return (
    <div className={`${styles.root}`}>
      {!!carousel?.length && (
        <Swiper pagination>
          {[...carousel, ...carousel, ...carousel].map((item) => {
            return (
              <SwiperSlide className="relative">
                <Image className="absolute inset-0" image={item.image} />
                <div className="container">{item.headline}</div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      )}
    </div>
  )
}

export default HeroCarouselModule
