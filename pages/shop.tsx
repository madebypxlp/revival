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

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { pages } = await getAllPages({ config, preview })
  const header = await fetch({ query: headerQuery })
  const footer = await fetch({ query: footerQuery })
  const globalsData = await fetch({ query: globalsQuery })
  return {
    props: {
      pages,
      header: { ...header?.acfOptionsHeader?.header },
      footer: footer?.acfOptionsFooter?.footer,
      globals: globalsData?.globals as ACFGlobalData,
    },
  }
}

export default function Orders({
  header,
  footer,
  globals,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    globals: { shop },
  } = globals
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
    </div>
  )
}

Orders.Layout = Layout
