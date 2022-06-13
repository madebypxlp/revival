import type { InferGetStaticPropsType } from 'next'
import { PageInterface } from 'framework/wordpress/page-query'
import ComponentRenderer from '@components/ui/ComponentRenderer/ComponentRenderer'

export default function Pages({}: InferGetStaticPropsType<PageInterface>) {
  return null
}

Pages.Layout = function getLayout() {
  return <ComponentRenderer />
}
