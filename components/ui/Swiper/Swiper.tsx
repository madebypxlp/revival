import React, { FunctionComponent } from 'react'
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
  SwiperOptions,
} from 'swiper'

SwiperCore.use([Navigation, Pagination, Keyboard, A11y])

export const Swiper: FunctionComponent<ISwiper> = (props) => {
  const { className } = props

  let defaultProps = {
    a11y: true,
    keyboard: true,
  } as SwiperOptions

  if (props?.pagination === true) {
    defaultProps.pagination = {
      type: 'bullets',
      clickable: true,
      // bulletClass: styles.bullet + 'swiper-b' ?? 'swiper-bullet',
      bulletActiveClass: styles.bulletActive ?? 'swiper-bullet-active',
    }
  }

  // if (props?.navigation === true) {
  //   defaultProps.navigation = { enabled: true }
  // }

  const mergedProps = { ...props, ...defaultProps }
  return (
    <PlainSwiper className={`${className} ${styles.swiper}`} {...mergedProps} />
  )
}

Swiper.displayName = 'DefaultSwiper'

export const SwiperSlide = PlainSwiperSlide
