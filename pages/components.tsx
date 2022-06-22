import type { InferGetStaticPropsType } from 'next'
import ComponentRenderer from '@components/ui/ComponentRenderer/ComponentRenderer'
import { PageInterface } from 'framework/wordpress/interfaces/page'

export default function Pages({}: InferGetStaticPropsType<PageInterface>) {
  return null
}

Pages.Layout = function getLayout() {
  return <ComponentRenderer />
}
