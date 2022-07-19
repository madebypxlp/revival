import { MediaItem } from '@components/interfaces/Image'
import Link from '@components/interfaces/Link'
import { AcfOptionsFooter } from './footer'
import { ACFGlobalData } from './globals'
import { AcfOptionsHeader } from './header'
import { Category } from './post'

export interface LearningCenterCategoryPage {
  posts: {
    nodes: LearningCenterInterface[]
    pageInfo: { offsetPagination: { total: number } }
  }
  header: AcfOptionsHeader
  footer: AcfOptionsFooter
  activeCategory: Category
  categories: Category[]
  contentTypes: Category[]
}

export interface LearningCenterDetailPage {
  data: LearningCenterInterface
  additionalData: {
    nodes: LearningCenterInterface[]
  }
  globals: ACFGlobalData
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
