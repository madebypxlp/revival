import React, { FunctionComponent } from 'react'
import styles from './HeroCarousel.module.scss'
import IHeroCarousel from './HeroCarousel.interface'
import Image from '@components/ui/Image/Image'
import { Swiper, SwiperSlide } from '@components/ui/Swiper/Swiper'
import { useIsMobile } from '@commerce/utils/hooks'

const HeroCarouselModule: FunctionComponent<{ module: IHeroCarousel }> = ({
  module,
}) => {
  const { carousel } = module
  const isMobile = useIsMobile()

  return (
    <div className={`${styles.root}`}>
      {!!carousel?.length && (
        <Swiper pagination autoplay>
          {[...carousel, ...carousel, ...carousel].map((item) => {
            const { headline, subline, blurb, image } = item
            return (
              <SwiperSlide>
                <div className="aspect-w-[376] aspect-h-[677] lg:aspect-w-[1560] lg:aspect-h-[619]">
                  <Image
                    className="!absolute inset-0"
                    imgClassName="object-cover object-right-top"
                    width={isMobile ? 376 : 1560}
                    height={isMobile ? 677 : 619}
                    image={image}
                  />
                  <div className="container py-50 md:flex items-center">
                    <div className="default-grid">
                      {subline && (
                        <span className="col-span-full md:col-span-5 md:col-start-1 mb-5 md:mb-10 typo-eyebrow text-blue">
                          {subline}
                        </span>
                      )}
                      {headline && (
                        <h2 className="col-span-full md:col-span-5 md:col-start-1 mb-10 typo-h1 lg:typo-h2 text-blue">
                          {headline}
                        </h2>
                      )}
                      {blurb && (
                        <h2 className="col-span-full md:col-span-4 md:col-start-1 mb-20 typo-small-paragraph lg:typo-large-paragraph">
                          {blurb}
                        </h2>
                      )}
                    </div>
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
