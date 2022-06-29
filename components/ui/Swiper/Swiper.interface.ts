import { Swiper, SwiperSlide } from 'swiper/react'

export default interface ISwiper extends Swiper {
  variant?: string
  hideDisabledNavigation?: boolean
}

export interface ISwiperSlide extends SwiperSlide {}
