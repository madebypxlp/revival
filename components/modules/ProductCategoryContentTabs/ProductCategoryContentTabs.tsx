import React, { FunctionComponent, useState } from 'react'
import c from 'classnames'
import styles from './ProductCategoryContentTabs.module.scss'
import IProductCategoryContentTabs from './ProductCategoryContentTabs.interface'
import ImageComponent from '@components/ui/Image/Image'
import Button from '@components/ui/Button/Button'
import { Swiper, SwiperSlide } from '@components/ui/Swiper/Swiper'
import ProductCard from '@components/ui/ProductCard/ProductCard'
import { useIsMobile } from '@commerce/utils/hooks'

const ProductCategoryContentTabsModule: FunctionComponent<{
  module: IProductCategoryContentTabs
}> = ({ module }) => {
  console.log(module)
  const { tabs } = module

  const [selectedTab, setSelectedTab] = useState(0)

  const product = {
    id: '#80122-795-431',
    price: 25,
    image: tabs[0].image,
    name: "Doc Roy's Derma Coat Plus",
    oldPrice: 35,
    isNew: true,
    isPrescription: false,
    isOurBrand: true,
    label: 'STAFF PICK',
  }

  const products = [product, product, product, product, product, product]
  const isMobile = useIsMobile()
  const slidesPerView = isMobile ? 1.2 : 4
  return (
    <div className={styles.root}>
      <div className={'container overflow-hidden'}>
        <div className={styles.tabButtonsContainer}>
          {tabs &&
            tabs.map((t, index) => {
              const selected = index === selectedTab
              return (
                <div key={t.primaryName} className={styles.tabButtonContainer}>
                  <ImageComponent layout="fill" image={t.image} />
                  <Button
                    className={c({ [styles.selected]: selected })}
                    outline={!selected}
                    color="blue"
                    variant="large"
                    type="default"
                    onClick={() => {
                      setSelectedTab(index)
                    }}
                  >
                    {t.primaryName}
                  </Button>
                </div>
              )
            })}
        </div>
        {tabs &&
          tabs.map((t, index) => {
            return (
              <div
                key={t.primaryName}
                className={c(
                  styles.tabContainer,
                  index === selectedTab && styles.selected
                )}
              >
                <div className={c(styles.swiperContainer)}>
                  <Swiper
                    className="overflow-visible"
                    slidesPerView={slidesPerView}
                    spaceBetween={18}
                    navigation
                  >
                    {products.map((p) => {
                      return (
                        <SwiperSlide>
                          <ProductCard {...p} />
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                </div>
                <div className={'default-grid'}>
                  <div className={styles.tabLeftColumn}>
                    <div className={styles.primaryImageContainer}>
                      <ImageComponent
                        image={t.primaryImageImage}
                        layout={'fill'}
                      />
                    </div>
                  </div>
                  <div className={styles.tabRightColumn}>
                    <div className={styles.headlineContainer}>
                      <h4>{t.headline}</h4>
                    </div>
                    <div className={styles.copyContainer}>{t.copy}</div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ProductCategoryContentTabsModule
