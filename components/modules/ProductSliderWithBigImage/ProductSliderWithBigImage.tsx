import React, { FunctionComponent, useState } from 'react'
import styles from './ProductSliderWithBigImage.module.scss'
import IProductSliderWithBigImage from './ProductSliderWithBigImage.interface'
import Image from 'next/image'
import { Swiper, SwiperSlide } from '@components/ui/Swiper/Swiper'
import ProductCard from '@components/ui/ProductCard/ProductCard'
import { useIsMobile } from '@commerce/utils/hooks'

const ProductSliderWithBigImageModule: FunctionComponent<{
  module: IProductSliderWithBigImage
}> = ({ module }) => {
  const isMobile = useIsMobile()

  // placeholder///////////

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
  /////////////////

  return (
    <div
      className={`${styles.root} container default-grid lg:mb-55 overflow-hidden mb-30`}
    >
      <div className="lg:col-span-3 lg:col-start-3 lg:pr-65 col-span-full mb-20">
        <Swiper
          slidesPerView={isMobile ? 1.3 : 1}
          spaceBetween={20}
          navigation
          pagination={isMobile ? false : true}
        >
          {products.map((p, index) => {
            return (
              <SwiperSlide>
                <ProductCard {...p} key={index} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      <div className="col-span-full lg:col-start-6 lg:col-span-5 relative rounded-15 overflow-hidden aspect-w-[1.118] aspect-h-1">
        <Image
          className="bg-blue-default "
          layout="fill"
          src="/card.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default ProductSliderWithBigImageModule
