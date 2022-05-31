import type { InferGetStaticPropsType } from 'next'
import { Layout } from '@components/common'
import { getWpStaticPaths, getWpStaticProps } from 'framework/wordpress/wp'
import TemplateHome from '../templates/Home'
import { PageInterface } from 'framework/wordpress/page-query'

export const getStaticProps = getWpStaticProps

export const getStaticPaths = getWpStaticPaths

const Templates: { [k: string]: any } = {
  Template_Home: TemplateHome,
  default: (t: string) => <div>TEMPLATE "{t}" NOT FOUND</div>,
}

export default function Pages({
  page,
}: InferGetStaticPropsType<PageInterface>) {
  return null
}

Pages.Layout = function getLayout(page: any) {
  if (!Templates[page.pageProps.page.template.__typename])
    return Templates['default'](page.pageProps.page.template.__typename)
  return (
    <Layout
      children={Templates[page.pageProps.page.template.__typename](
        page.pageProps.page
      )}
    />
  )
}
