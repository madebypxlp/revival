import Link from '@components/fragments/Link'
import Image from '@components/fragments/Image'
import { fragment as HomeFragment } from '../../templates/Home'
import { fragment as BrandListingFragment } from '../../templates/BrandListing'
import { fragment as OurStoryFragment } from '../../templates/OurStory'
import { fragment as VaccineExpertsFragment } from '../../templates/VaccineExperts'

export default `
  ${Link}
  ${Image}
  ${HomeFragment}
  ${BrandListingFragment}
  ${OurStoryFragment}
  ${VaccineExpertsFragment}
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
