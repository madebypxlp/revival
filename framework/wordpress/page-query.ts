import { fragment as HomeFragment } from '../../templates/Home'

// ${AssetFragment}
export default `
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
