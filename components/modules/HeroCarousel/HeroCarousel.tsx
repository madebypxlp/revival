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
        <Swiper pagination autoplay>
          {[...carousel, ...carousel, ...carousel].map((item) => {
            return (
              <SwiperSlide>
                <div className="aspect-w-[1560] aspect-h-[619]">
                  <Image
                    className="!absolute inset-0"
                    imgClassName="object-cover object-right-top"
                    width={1560}
                    height={619}
                    image={item.image}
                  />
                  <div className="container flex flex-row items-center">
                    {item.headline}
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      )}
    </div>
  )
}

export default HeroCarouselModule
