import React, { FunctionComponent, useState } from 'react'
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

SwiperCore.use([Navigation, Pagination, Keyboard, A11y, Autoplay])

export const Swiper: FunctionComponent<ISwiper> = (props) => {
  const { className, onSwiper, children, ...rest } = props

  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>()
  const onSwiperHandler = (swiper: SwiperCore) => {
    setSwiperInstance(swiper)
    console.log('on swiper')
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
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    }
  }

  if (React.Children.toArray(props.children)?.length <= 1) {
    return <div className={`${className}`}>{children}</div>
  }

  const mergedProps = { ...rest, ...defaultProps }

  return (
    <PlainSwiper className={`${className} ${styles.swiper}`} {...mergedProps}>
      {children}
      {props?.navigation && (
        <>
          <SliderArrowLeft className="swiper-button-prev" />
          <SliderArrowLeft className="swiper-button-next rotate-180" />
        </>
      )}
    </PlainSwiper>
  )
}

Swiper.displayName = 'DefaultSwiper'

export const SwiperSlide = PlainSwiperSlide
