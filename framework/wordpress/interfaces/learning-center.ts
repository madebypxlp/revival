import { MediaItem } from '@components/interfaces/Image'
import Link from '@components/interfaces/Link'

export interface LearningCenterDetailPage {
  data: LearningCenterInterface
  additionalData: {
    nodes: LearningCenterInterface[]
  }
}

export interface LearningCenterInterface {
  id: string
  title: string
  slug: string
  uri: string
  featuredImage: {
    node: MediaItem
  }
  contentTypes: {
    nodes: LearningCenterContentType[]
  }
  categories: {
    nodes: [
      {
        id: string
        name: string
      }
    ]
  }
  detailPageLearningCenter: {
    authorBioCopy: string
    authorName: string
    authorPosition: string
    disclaimer: string
    authorLink: Link
    socialLinks: {
      facebook: string
      linkedin: string
      twitter: string
    }
    pageBuilder: [any]
  }
}

export interface LearningCenterContentType {
  id: string
  slug: string
  name: string
  learningCenterContentType: {
    image: MediaItem
  }
}
