import { MediaItem } from '@components/interfaces/Image'
import Link from '@components/interfaces/Link'

interface ResourceItem {
  id: string
  featuredImage: {
    node: MediaItem
  }
  title: string
  uri: string
}

export default interface IResourceGrid {
  fieldGroupName: string
  headline: string
  link: Link
  featuredResource: ResourceItem
  latestLearningCenterPosts: {
    nodes: [ResourceItem]
  }
}
