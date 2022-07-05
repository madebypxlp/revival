import { MediaItem } from '@components/interfaces/Image'
import Link from '@components/interfaces/Link'
import { Category } from './post'

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
  date: string
  contentTypes: {
    nodes: LearningCenterContentType[]
  }
  category: Category
  categories: {
    nodes: Category[]
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
