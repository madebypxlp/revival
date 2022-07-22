import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import cn from 'classnames'
import { Layout } from '@components/common'
import { useIsMobile } from '@commerce/utils/hooks'
import getAllProducts from '@framework/product/get-all-products'
import getSiteInfo from '@framework/common/get-site-info'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import Translations from 'constants/translations'
import ProductCardGrid from '@components/ui/ProductCardGrid/ProductCardGrid'
import LightHeroModule from '@components/modules/LightHero/LightHero'
import globalsQuery from 'framework/wordpress/queries/acfGlobalOptions/globals'
import { ACFGlobalData } from 'framework/wordpress/interfaces/globals'
import Input from '@components/ui/Input/Input'
import { useState } from 'react'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import BreadCrumbs from '@components/ui/BreadCrumbs/BreadCrumbs'
import Button from '@components/ui/Button/Button'
import Link from '@components/ui/Link/Link'
import headerQuery from '../framework/wordpress/queries/acfGlobalOptions/header'
import styles from './shop.module.scss'
import fetch from '../framework/wordpress/wp-client'
import footerQuery from '../framework/wordpress/queries/acfGlobalOptions/footer'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig()
  const { pages } = await getAllPages({ config, preview })
  const header = await fetch({ query: headerQuery })
  const footer = await fetch({ query: footerQuery })
  const globalsData = await fetch({ query: globalsQuery })

  const { products } = await getAllProducts({
    variables: { first: 12 },
    config,
    preview,
  })

  const { categories } = await getSiteInfo({ config, preview })
  return {
    props: {
      pages,
      header: { ...header?.acfOptionsHeader?.header },
      footer: footer?.acfOptionsFooter?.footer,
      globals: globalsData?.globals as ACFGlobalData,
      products,
      categories,
    },
  }
}

export default function Orders({
  header,
  footer,
  globals,
  products,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    globals: { shop },
  } = globals

  const [mobileCategoriesVisible, setMobileCategoriesVisible] = useState(false)

  const defaultCategories: boolean[] = categories.map((c) => false)
  const [selectedCategories, setSelectedCategories] =
    useState(defaultCategories)

  const handleCategoryChange = (checked: boolean | string, index: number) => {
    selectedCategories[index] = checked === true
    setSelectedCategories(selectedCategories.slice())
  }

  const handleClearAllBtnClick = (event: any) => {
    event.preventDefault()
    setSelectedCategories(categories.map((c) => false))
  }

  const handleFilterByClick = (event: Event) => {
    setMobileCategoriesVisible(!mobileCategoriesVisible)
    event.preventDefault()
  }

  const breadcrumbs = [
    { label: 'HOME', href: '/' },
    { label: 'DOG SUPPLIES', href: '/' },
    { label: 'LOREM IPSUM', href: '/' },
  ]

  const isMobile = useIsMobile()

  return (
    <div className={styles.root}>
      {shop && (
        <LightHeroModule
          module={{
            headline: shop.shopPageHeroTitle,
            subline: shop.shopPageHeroDescription,
          }}
        />
      )}
      <BreadCrumbs breadcrumbs={breadcrumbs} className="container py-50" />
      <div className={cn(styles.mainContainer, 'container default-grid')}>
        <div className={styles.filtersContainer}>
          {!isMobile && (
            <div className={styles.filterHeader}>
              {Translations.SHOP.FILTER_BY_CATEGORIES}
            </div>
          )}
          <div
            className={cn(
              styles.categoriesContainer,
              isMobile && 'accordion',
              isMobile && mobileCategoriesVisible && 'visible'
            )}
          >
            <div>
              {categories.map((cat, index) => (
                <Input
                  className={styles.checkbox}
                  type="checkbox"
                  key={cat.name}
                  label={cat.name}
                  checked={selectedCategories[index]}
                  square
                  onChange={(v) => handleCategoryChange(v, index)}
                />
              ))}
            </div>
          </div>
          {!isMobile && (
            <Link
              color="blue"
              href="/"
              onClick={(e) => handleClearAllBtnClick(e)}
              className="mb-80"
            >
              {Translations.SHOP.CLEAR_ALL}
            </Link>
          )}
        </div>
        <div className={styles.gridHeader}>
          {isMobile && (
            <ArrowCTA
              orientation="right"
              color="blue"
              href="#"
              onClick={(event: Event) => handleFilterByClick(event)}
            >
              {Translations.SHOP.FILTER_BY}
            </ArrowCTA>
          )}
          {!isMobile && (
            <div
              className={styles.productCount}
            >{`${products.length} ${Translations.SHOP.PRODUCTS}`}</div>
          )}
          <ArrowCTA orientation="right" color="blue" href="#">
            {Translations.SHOP.SORT_BY}
          </ArrowCTA>
        </div>
        <div className={styles.gridColumnContainer}>
          <ProductCardGrid products={products} variant="shop" />
          <div className={styles.loadMoreButtonContainer}>
            <Button color="yellow" variant="large" type="default">
              {Translations.SHOP.LOAD_MORE}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

Orders.Layout = Layout
