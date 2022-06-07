import type { InferGetStaticPropsType } from 'next'
import { Layout } from '@components/common'
import { getWpStaticPaths, getWpStaticProps } from 'framework/wordpress/wp'
import TemplateHome from '../templates/Home'
import TemplateBrandListing from '../templates/BrandListing'
import TemplateOurStory from '../templates/OurStory'
import TemplateVaccineExperts from '../templates/VaccineExperts'
import { PageInterface } from 'framework/wordpress/page-query'

export const getStaticProps = getWpStaticProps

export const getStaticPaths = getWpStaticPaths

const Templates: { [k: string]: any } = {
  Template_Home: TemplateHome,
  Template_BrandListing: TemplateBrandListing,
  Template_OurStory: TemplateOurStory,
  Template_VaccineExperts: TemplateVaccineExperts,
  default: (t: string) => <div>TEMPLATE "{t}" NOT FOUND</div>,
}

export default function Pages({
  page,
}: InferGetStaticPropsType<PageInterface>) {
  return null
}

Pages.Layout = function getLayout(page: any) {
  if (!Templates[page?.pageProps?.page?.template.__typename])
    return Templates['default'](page.pageProps.page.template.__typename)
  return (
    <Layout
      children={Templates[page.pageProps.page.template.__typename](
        page.pageProps.page
      )}
    />
  )
}
