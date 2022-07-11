import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Layout } from '@components/common'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import fetch from './../framework/wordpress/wp-client'
import footerQuery from './../framework/wordpress/queries/acfGlobalOptions/footer'
import headerQuery from './../framework/wordpress/queries/acfGlobalOptions/header'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { pages } = await getAllPages({ config, preview })
  const header = await fetch({ query: headerQuery })
  const footer = await fetch({ query: footerQuery })
  return {
    props: {
      pages,
      header: { ...header?.acfOptionsHeader?.header },
      footer: footer?.acfOptionsFooter?.footer,
    },
  }
}

export default function Orders({
  header,
  footer,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>Update Shipmnets</div>
}

Orders.Layout = Layout
