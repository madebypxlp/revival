import type { InferGetStaticPropsType } from 'next'
import { getWpStaticPaths, getWpStaticProps } from 'framework/wordpress/wp'
import { PageInterface } from 'framework/wordpress/page-query'
import ComponentRenderer from '@components/ui/ComponentRenderer/ComponentRenderer'

export const getStaticProps = getWpStaticProps

export const getStaticPaths = getWpStaticPaths

export default function Pages({
  page,
}: InferGetStaticPropsType<PageInterface>) {
  return null
}

Pages.Layout = function getLayout(page: any) {
  return <ComponentRenderer />
}
