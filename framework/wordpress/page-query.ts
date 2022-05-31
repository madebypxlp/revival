import Link from '@components/fragments/Link'
import Image from '@components/fragments/Image'
import { fragment as HomeFragment } from '../../templates/Home'
import { fragment as BrandListingFragment } from '../../templates/BrandListing'

export default `
  ${Link}
  ${Image}
  ${HomeFragment}
  ${BrandListingFragment}
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
