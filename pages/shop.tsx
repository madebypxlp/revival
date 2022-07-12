import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Layout } from '@components/common'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import LightHeroModule from '@components/modules/LightHero/LightHero'
import globalsQuery from 'framework/wordpress/queries/acfGlobalOptions/globals'
import { ACFGlobalData } from 'framework/wordpress/interfaces/globals'
import fetch from '../framework/wordpress/wp-client'
import footerQuery from '../framework/wordpress/queries/acfGlobalOptions/footer'
import headerQuery from '../framework/wordpress/queries/acfGlobalOptions/header'
import getAllProducts from '@framework/product/get-all-products'
import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import getSiteInfo from '@framework/common/get-site-info'

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

  console.log(products)
  return (
    <div>
      {shop && (
        <LightHeroModule
          module={{
            headline: shop.shopPageHeroTitle,
            subline: shop.shopPageHeroDescription,
          }}
        />
      )}
      <HomeAllProductsGrid products={products} categories={categories} />
    </div>
  )
}

Orders.Layout = Layout
