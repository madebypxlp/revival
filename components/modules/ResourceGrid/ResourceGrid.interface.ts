import { MediaItem } from '@components/interfaces/Image'
import Link from '@components/interfaces/Link'

export default interface IResourceGrid {
  fieldGroupName: string
  headline: string
  link: Link
  featuredResource: {
    id: string
    featuredImage: {
      node: MediaItem
    }
    title: string
  }
}
