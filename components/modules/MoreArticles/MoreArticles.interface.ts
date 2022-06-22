import { MediaItem } from '@components/interfaces/Image'

export default interface IMoreArticles {
  module: {
    fieldGroupName: string
    headline: string
  }
  data: [
    {
      title: string
      uri: string
      featuredImage: {
        node: MediaItem
      }
    }
  ]
  currentId: string
}
