import Link from '@components/fragments/Link'
import Image from '@components/fragments/Image'
import { fragment as HomeFragment } from '../../templates/Home'
import { fragment as BrandListingFragment } from '../../templates/BrandListing'
import { fragment as OurStoryFragment } from '../../templates/OurStory'
import { fragment as VaccineExpertsFragment } from '../../templates/VaccineExperts'
import { fragment as PrivacyPolicyFragment } from '../../templates/PrivacyPolicy'
import { fragment as ContactUsFragment } from '../../templates/ContactUs'
import { fragment as CareersFragment } from '../../templates/Careers'

export default `
  ${Link}
  ${Image}
  ${HomeFragment}
  ${BrandListingFragment}
  ${OurStoryFragment}
  ${VaccineExpertsFragment}
  ${PrivacyPolicyFragment}
  ${ContactUsFragment}
  ${CareersFragment}
  query page($uri: String) {
    entry: pageBy(uri: $uri) {
      id
      title
      slug
      uri
      template {
        __typename
        ... on Template_Home {
          ...TemplateHome
        }
        ... on Template_BrandListing {
          ...TemplateBrandListing
        }
        ... on Template_OurStory {
          ...TemplateOurStory
        }
        ... on Template_VaccineExperts {
          ...TemplateVaccineExperts
        }
        ... on Template_PrivacyPolicy {
          ...TemplatePrivacyPolicy
        }
        ... on Template_ContactUs {
          ...TemplateContactUs
        }
        ...on Template_Careers {
          ...TemplateCareers
        }
      }
    }
  }
`

export interface PageInterface {
  id: string
  title: string
  slug: string
  template: any
}
