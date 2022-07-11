import React, { FunctionComponent } from 'react'
import styles from './ProductSlider.module.scss'
import IProductSlider from './ProductSlider.interface'
import { Swiper, SwiperSlide } from '@components/ui/Swiper/Swiper'
import ProductCard from '@components/ui/ProductCard/ProductCard'
import { useIsMobile } from '@commerce/utils/hooks'

const ProductSliderModule: FunctionComponent<{ module: IProductSlider }> = ({
  module,
}) => {
  const isMobile = useIsMobile()
  const product = {
    id: '#80122-795-431',
    price: 25,
    image: {
      desktopImage: {
        sourceUrl:
          'https://revival-wp.weareenvoy.net/app/uploads/2022/06/parker-coffman-pr6Blqs0yWA-unsplash-1.png',
        altText: '',
        mediaDetails: {
          width: 0,
          height: 0,
        },
      },
      tabletImage: null,
      mobileImage: {
        sourceUrl:
          'https://revival-wp.weareenvoy.net/app/uploads/2022/06/parker-coffman-pr6Blqs0yWA-unsplash-1.png',
        altText: '',
        mediaDetails: {
          width: 0,
          height: 0,
        },
      },
    },
    name: "Doc Roy's Derma Coat Plus",
    oldPrice: 35,
    isNew: true,
    isPrescription: true,
    isOurBrand: true,
    isFavorite: false,
    label: 'STAFF PICK',
    headline: 'Get her healthy first',
  }
  const products = [product, product, product, product, product, product]

  return (
    <div
      className={`${styles.root} bg-cream pt-60 pb-80 mb-60 md:mb-80 overflow-hidden`}
    >
      <div className="container">
        <h2 className="typo-h4 text-blue mb-35">Shop The Article</h2>
        <Swiper
          className="overflow-visible"
          slidesPerView={isMobile ? 1.3 : 2.1}
          spaceBetween={20}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 2.1,
            },
            1024: {
              slidesPerView: 3.1,
            },
            1440: {
              slidesPerView: 4.1,
            },
          }}
        >
          {products.map((p, index) => {
            return (
              <SwiperSlide key={p.id}>
                <ProductCard {...p} key={index} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default ProductSliderModule
