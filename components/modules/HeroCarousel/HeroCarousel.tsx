import React, { FunctionComponent, useState } from 'react'
import Image from '@components/ui/Image/Image'
import { Swiper, SwiperSlide } from '@components/ui/Swiper/Swiper'
import { useIsMobile } from '@commerce/utils/hooks'
import Button from '@components/ui/Button/Button'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import parse from 'html-react-parser'
import SwiperCore from 'swiper'
import PlayPause from '@components/icons/PlayPause'
import IHeroCarousel from './HeroCarousel.interface'
import styles from './HeroCarousel.module.scss'

const HeroCarouselModule: FunctionComponent<{ module: IHeroCarousel }> = ({
  module,
}) => {
  const { carousel } = module
  const isMobile = useIsMobile()
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>()
  const [swiperAutoplaying, setSwiperAutoplaying] = useState<boolean>(true)

  const toggleSwiper = () => {
    if (!swiperInstance?.autoplay) return false
    return swiperInstance.autoplay.running
      ? swiperInstance.autoplay.stop()
      : swiperInstance.autoplay.start()
  }

  return (
    <div className={`${styles.root} overflow-hidden`}>
      {!!carousel?.length && (
        <Swiper
          pagination
          loop
          autoplay={{ disableOnInteraction: false, delay: 8000 }}
          onSwiper={(s) => setSwiperInstance(s)}
          onAutoplayStop={() => setSwiperAutoplaying(false)}
          onAutoplayStart={() => setSwiperAutoplaying(true)}
        >
          {carousel.map((item) => {
            const { headline, subline, blurb, image, buttonLink, defaultLink } =
              item
            return (
              <SwiperSlide key={headline}>
                <div className="h-full">
                  <Image
                    className="!absolute inset-0"
                    imgClassName="object-cover object-right-bottom lg:object-center md:object-center-bottom"
                    layout="fill"
                    image={image}
                  />
                  <div className="container py-50 md:flex items-center h-full min-h-screen md:min-h-[62rem] relative z-10">
                    <div className="default-grid">
                      {subline && (
                        <span className="col-span-full md:col-span-5 md:col-start-1 mb-5 md:mb-10 typo-eyebrow text-blue">
                          {subline}
                        </span>
                      )}
                      {headline && (
                        <h2 className="col-span-full md:col-span-5 md:col-start-1 mb-10 typo-h1 md:typo-h2 text-blue">
                          {parse(headline)}
                        </h2>
                      )}
                      {blurb && (
                        <h2 className="col-span-full md:col-span-4 md:col-start-1 mb-20 md:mb-10 typo-small-paragraph md:typo-large-paragraph">
                          {blurb}
                        </h2>
                      )}
                      <div className="col-span-full mt-20">
                        {buttonLink?.title && (
                          <Button
                            link={buttonLink}
                            className="mr-30 mb-20"
                            type="default"
                            variant="large"
                            color="yellow"
                          />
                        )}
                        {defaultLink?.title && (
                          <ArrowCTA
                            link={defaultLink}
                            className=""
                            subnav
                            orientation="right"
                            color="blue"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
          <div className="container relative h-0">
            <button className="cursor-pointer" onClick={toggleSwiper}>
              <PlayPause
                state={swiperAutoplaying ? 'pause' : 'play'}
                className="hidden md:block w-50 absolute right-85 bottom-35 z-20 text-blue"
              />
            </button>
          </div>
        </Swiper>
      )}
    </div>
  )
}

export default HeroCarouselModule
