import Link from '@components/fragments/Link'
import Image from '@components/fragments/Image'
import { fragment as HomeFragment } from '../../templates/Home'

// ${AssetFragment}
export default `
  ${Link}
  ${Image}
  ${HomeFragment}
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
