import { MediaItem } from '@components/interfaces/Image'

export default `
query Data {
  data: posts(last: 7, where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      id
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      title
      uri
      categories {
        nodes {
          name
        }
      }
      tags {
        nodes {
          name
        }
      }
    }
  }
}
`

export interface BlogPostInterface {
  id: string
  title: string
  uri: string
  featuredImage: {
    node: MediaItem
  }
  tags: {
    nodes: [
      {
        name: string
      }
    ]
  }
  categories: {
    nodes: [
      {
        name: string
      }
    ]
  }
}
