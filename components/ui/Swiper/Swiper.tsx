import React, { FunctionComponent, useRef, useState } from 'react'
import styles from './Swiper.module.scss'
import ISwiper, { ISwiperSlide } from './Swiper.interface'
import {
  Swiper as PlainSwiper,
  SwiperSlide as PlainSwiperSlide,
} from 'swiper/react'
import SwiperCore, {
  Navigation,
  Pagination,
  Keyboard,
  A11y,
  Autoplay,
  SwiperOptions,
} from 'swiper'
import SliderArrowLeft from '@components/icons/SliderArrowLeft'
import { NavigationOptions } from 'swiper/types/components/navigation'

SwiperCore.use([Navigation, Pagination, Keyboard, A11y, Autoplay])

export const Swiper: FunctionComponent<ISwiper> = (props) => {
  const { className, onSwiper, children, ...rest } = props
  const navPrevRef = useRef<SVGSVGElement>(null)
  const navNextRef = useRef<SVGSVGElement>(null)

  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>()
  const onSwiperHandler = (swiper: SwiperCore) => {
    setSwiperInstance(swiper)
    console.log('onSwiper', navPrevRef.current)
    if (
      props?.navigation === true &&
      (swiper.params.navigation as NavigationOptions)?.prevEl
    ) {
      // @ts-expect-error
      swiper.params.navigation.prevEl = navPrevRef.current
      // @ts-expect-error
      swiper.params.navigation.nextEl = navNextRef.current
    }
    if (typeof onSwiper === 'function') onSwiper(swiper)
  }

  // general default swiper props
  let defaultProps = {
    a11y: true,
    keyboard: true,
  } as SwiperOptions

  // augment default pagination props
  if (props?.pagination === true) {
    defaultProps.pagination = {
      type: 'bullets',
      clickable: true,
      bulletActiveClass: styles.bulletActive ?? 'swiper-bullet-active',
    }
  }

  // augment default autoplay props
  if (props?.autoplay === true) {
    defaultProps.autoplay = { delay: 10000 }
  }

  // augment default navigation props
  if (props?.navigation === true) {
    defaultProps.navigation = {
      prevEl: navPrevRef.current as any,
      nextEl: navNextRef.current as any,
    }
  }

  if (React.Children.toArray(props.children)?.length <= 1) {
    return <div className={`${className}`}>{children}</div>
  }

  const mergedProps = { ...rest, ...defaultProps }

  return (
    <div className="relative">
      <PlainSwiper
        className={`${className} ${styles.swiper}`}
        {...mergedProps}
        onInit={onSwiperHandler}
      >
        {children}
      </PlainSwiper>
      {props?.navigation && (
        <div className="absolute inset-0">
          <SliderArrowLeft ref={navPrevRef} className="swiper-button-prev" />
          <SliderArrowLeft
            ref={navNextRef}
            className="swiper-button-next rotate-180"
          />
        </div>
      )}
    </div>
  )
}

Swiper.displayName = 'DefaultSwiper'

export const SwiperSlide = PlainSwiperSlide
