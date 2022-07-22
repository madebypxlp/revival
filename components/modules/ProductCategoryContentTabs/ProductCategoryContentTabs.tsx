import React, { FunctionComponent, useEffect, useState } from 'react'
import c from 'classnames'
import ImageComponent from '@components/ui/Image/Image'
import Button from '@components/ui/Button/Button'
import useSearch from '@framework/product/use-search'
import { Swiper, SwiperSlide } from '@components/ui/Swiper/Swiper'
import ProductCard from '@components/ui/ProductCard/ProductCard'
import { useIsMobile } from '@commerce/utils/hooks'
import Translations from 'constants/translations'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import IProductCategoryContentTabs from './ProductCategoryContentTabs.interface'
import styles from './ProductCategoryContentTabs.module.scss'

const ProductCategoryContentTabsModule: FunctionComponent<{
  module: IProductCategoryContentTabs
}> = ({ module }) => {
  const { tabs } = module

  const [selectedTab, setSelectedTab] = useState(0)

  const productIds = tabs
    .map((t) => t.productCarousel.map((p) => p.productId))
    .flat()
  const products = useSearch({
    idIn: productIds.join(),
  }).data

  const isMobile = useIsMobile()
  const slidesPerView = isMobile ? 1.2 : 4

  console.log(tabs)
  console.log(productIds)
  console.log(products)
  return (
    <div className={styles.root}>
      <div className={styles.background} />
      <div className="container">
        <div className={styles.tabButtonsContainer}>
          {isMobile && (
            <div className={styles.mobileTabImageContainer}>
              {tabs &&
                tabs.map((t, index) => {
                  const selected = index === selectedTab
                  return (
                    <ImageComponent
                      key={t.image?.desktopImage?.sourceUrl}
                      className={c(styles.mobileTabImage, {
                        [styles.selected]: selected,
                      })}
                      layout="fill"
                      objectFit="contain"
                      image={t.image}
                    />
                  )
                })}
            </div>
          )}
          {tabs &&
            tabs.map((t, index) => {
              const selected = index === selectedTab
              return (
                <div key={t.primaryName} className={styles.tabButtonContainer}>
                  {!isMobile && (
                    <ImageComponent
                      layout="fill"
                      objectFit="contain"
                      image={t.image}
                    />
                  )}
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
        <div className={styles.tabsContainer}>
          {tabs &&
            tabs.map((t, index) => (
              <div
                key={t.primaryName}
                className={c(
                  styles.tabContainer,
                  index === selectedTab && styles.selected
                )}
              >
                <div className={c(styles.swiperContainer)}>
                  <Swiper
                    hideDisabledNavigation
                    className="overflow-visible"
                    slidesPerView={slidesPerView}
                    spaceBetween={18}
                    navigation
                  >
                    {products &&
                      t.productCarousel.map((pc, pIndex) => {
                        const product = products.products?.find(
                          (p: any) => p.id === pc.productId
                        )
                        if (product) {
                          return (
                            <SwiperSlide key={product.id + pc.headline}>
                              <div className={styles.cardHeader}>
                                <div className={styles.cardHeaderNumber}>
                                  {pIndex + 1}
                                </div>
                                <h5>{pc.headline}</h5>
                              </div>
                              <ProductCard product={product} />
                            </SwiperSlide>
                          )
                        }
                        return <div key={pc.headline} />
                      })}
                  </Swiper>
                </div>
                <div className="default-grid relative">
                  <div className={styles.tabLeftColumn}>
                    <div className={styles.smallCircle} />
                    <div className={styles.primaryImageContainer}>
                      <ImageComponent
                        image={t.primaryImageImage}
                        layout="fill"
                        objectFit="cover"
                      />
                      {t.link && (
                        <ArrowCTA
                          orientation="right"
                          color="blue"
                          href={t.link.url}
                          className={styles.arrowCTA}
                        >
                          {Translations.WATCH_VIDEO}
                        </ArrowCTA>
                      )}
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
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProductCategoryContentTabsModule
