import React, { FunctionComponent } from 'react'
import { Swiper, SwiperSlide } from '@components/ui/Swiper/Swiper'
import useSearch from '@framework/product/use-search'
import ProductCard from '@components/ui/ProductCard/ProductCard'
import { useIsMobile } from '@commerce/utils/hooks'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import IProductSlider from './ProductSlider.interface'
import styles from './ProductSlider.module.scss'

const ProductSliderModule: FunctionComponent<{ module: IProductSlider }> = ({
  module,
}) => {
  const { link, products } = module
  const isMobile = useIsMobile()

  const productIds = products.map((e) => e.productId) || []
  const { data } = useSearch({
    idIn: productIds.join(),
  })

  return (
    <div
      className={`${styles.root} bg-cream pt-60 pb-80 mb-60 md:mb-80 overflow-hidden`}
    >
      <div className="container">
        <div className="w-full mb-35 flex flex-col md:flex-row md:justify-between md:items-center">
          <h2 className="typo-h4 text-blue mb-10 md:mb-0">Shop The Article</h2>
          <ArrowCTA
            link={link}
            className="max-w-min whitespace-nowrap"
            subnav
            orientation="right"
            color="blue"
          />
        </div>
        <Swiper
          className="overflow-visible"
          slidesPerView={isMobile ? 1.3 : 2.1}
          spaceBetween={20}
          navigation
          watchOverflow
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
          {data?.products &&
            data.products.map((p) => (
              <SwiperSlide key={p.id}>
                <ProductCard product={p} isNew isPrescription />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ProductSliderModule
