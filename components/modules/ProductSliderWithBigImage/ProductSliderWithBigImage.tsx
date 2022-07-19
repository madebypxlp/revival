import React, { FunctionComponent, useState } from 'react'
import ImageComponent from '@components/ui/Image/Image'
import useSearch from '@framework/product/use-search'
import { Swiper, SwiperSlide } from '@components/ui/Swiper/Swiper'
import ProductCard from '@components/ui/ProductCard/ProductCard'
import { useIsMobile } from '@commerce/utils/hooks'
import IProductSliderWithBigImage from './ProductSliderWithBigImage.interface'
import styles from './ProductSliderWithBigImage.module.scss'

const ProductSliderWithBigImageModule: FunctionComponent<{
  module: IProductSliderWithBigImage
}> = ({ module }) => {
  const isMobile = useIsMobile()
  const { products, image } = module

  console.log(module)
  const productIds = products.map((e) => e.productId) || []
  const { data } = useSearch({
    idIn: productIds.join(),
  })

  console.log(data)
  return (
    <div
      className={`${styles.root} container default-grid lg:mb-55 overflow-hidden mb-30`}
    >
      <div className="lg:col-span-3 lg:col-start-3 lg:pr-65 col-span-full mb-20">
        <Swiper
          slidesPerView={isMobile ? 1.3 : 1}
          spaceBetween={20}
          navigation
          pagination={!isMobile}
        >
          {data?.products &&
            data.products.map((p) => (
              <SwiperSlide key={p.id}>
                {/* <ProductCard {...p} /> */}
                Nice
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="col-span-full lg:col-start-6 lg:col-span-5 relative rounded-15 overflow-hidden">
        <ImageComponent
          className="aspect-w-[1.118]"
          layout="responsive"
          image={image}
        />
      </div>
    </div>
  )
}

export default ProductSliderWithBigImageModule
