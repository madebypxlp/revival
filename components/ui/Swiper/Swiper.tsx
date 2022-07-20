import React, { FunctionComponent, useRef, useState } from 'react'
import c from 'classnames'
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
import ISwiper, { ISwiperSlide } from './Swiper.interface'
import styles from './Swiper.module.scss'

SwiperCore.use([Navigation, Pagination, Keyboard, A11y, Autoplay])

export const Swiper: FunctionComponent<ISwiper> = (props) => {
  const { className, onSwiper, children, hideDisabledNavigation, ...rest } =
    props
  const navPrevRef = useRef<HTMLDivElement>(null)
  const navNextRef = useRef<HTMLDivElement>(null)

  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>()
  const onSwiperHandler = (swiper: SwiperCore) => {
    setSwiperInstance(swiper)
    if (
      props?.navigation === true &&
      (swiper.params.navigation as NavigationOptions)?.prevEl
    ) {
      // @ts-ignore
      swiper.params.navigation.prevEl = navPrevRef.current
      // @ts-ignore
      swiper.params.navigation.nextEl = navNextRef.current
    }
    if (typeof onSwiper === 'function') onSwiper(swiper)
  }

  // general default swiper props
  const defaultProps = {
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
    <div className={c('relative', styles.root)}>
      <PlainSwiper
        className={`${className} ${styles.swiper}`}
        {...mergedProps}
        onInit={onSwiperHandler}
      >
        {children}
      </PlainSwiper>
      {props?.navigation && (
        <div
          className={c(
            'absolute inset-0',
            hideDisabledNavigation && styles.hideDisabledNavigation
          )}
        >
          <div ref={navPrevRef} className="swiper-button-prev">
            <SliderArrowLeft />
          </div>
          <div ref={navNextRef} className="swiper-button-next">
            <SliderArrowLeft className="rotate-180" />
          </div>
        </div>
      )}
    </div>
  )
}

Swiper.displayName = 'DefaultSwiper'

export const SwiperSlide = PlainSwiperSlide
