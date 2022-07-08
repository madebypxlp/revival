import Image, { MediaItem } from '@components/interfaces/Image'

export default `
  query Brands {
    brands(last: 1000) {
      nodes {
        title
      }
    }
  }
`

export interface Brand {
  title: string
  uri: string
  featuredImage: {
    node: MediaItem
  }
}
