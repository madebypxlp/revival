import type { InferGetStaticPropsType } from 'next'
import { Layout } from '@components/common'
import { getWpStaticPaths, getWpStaticProps } from 'framework/wordpress/wp'
import TemplateHome from '../templates/Home'
import TemplateBrandListing from '../templates/BrandListing'
import TemplateOurStory from '../templates/OurStory'
import TemplateVaccineExperts from '../templates/VaccineExperts'
import TemplatePrivacyPolicy from 'templates/PrivacyPolicy'
import TemplateContactUs from 'templates/ContactUs'
import TemplateCareers from 'templates/Careers'
import TemplatePawSquad from 'templates/PawSquad'
import TemplateBlog from 'templates/Blog'
import TemplateLearningCenter from 'templates/LearningCenter'
import TemplateAllBrands from 'templates/AllBrands'
import TemplateCalendarContest from 'templates/CalendarContest'
import TemplateCareerApplicationForm from 'templates/CareerApplicationForm'
import { PageInterface } from 'framework/wordpress/interfaces/page'

export const getStaticProps = getWpStaticProps
export const getStaticPaths = getWpStaticPaths

const Templates: { [k: string]: any } = {
  Template_Home: TemplateHome,
  Template_BrandListing: TemplateBrandListing,
  Template_OurStory: TemplateOurStory,
  Template_VaccineExperts: TemplateVaccineExperts,
  Template_PrivacyPolicy: TemplatePrivacyPolicy,
  Template_ContactUs: TemplateContactUs,
  Template_Careers: TemplateCareers,
  Template_PawSquad: TemplatePawSquad,
  Template_Blog: TemplateBlog,
  Template_LearningCenter: TemplateLearningCenter,
  Template_AllBrands: TemplateAllBrands,
  Template_CareerApplicationForm: TemplateCareerApplicationForm,
  Template_CalendarContest: TemplateCalendarContest,
  default: (t: string) => <div>TEMPLATE "{t}" NOT FOUND</div>,
}

export default function Pages({
  page,
  header,
  footer,
  globals,
}: InferGetStaticPropsType<PageInterface>) {
  return null
}

Pages.Layout = function getLayout(page: any) {
  if (page?.pageProps?.page === null) return null
  if (!Templates[page?.pageProps?.page?.template.__typename])
    return Templates['default'](page.pageProps.page.template.__typename)
  return (
    <Layout
      header={page.pageProps.header}
      globals={page.pageProps.globals}
      footer={page.pageProps.footer}
      children={Templates[page.pageProps.page.template.__typename](
        page.pageProps.page
      )}
    />
  )
}
