import { MediaItem } from '@components/interfaces/Image'
import Link from '@components/interfaces/Link'

export interface PostDetailPage {
  data: PostInterface
  additionalData: {
    nodes: PostInterface[]
  }
}

export interface PostInterface {
  id: string
  title: string
  slug: string
  uri: string
  featuredImage: {
    node: MediaItem
  }
  contentTypes: {
    nodes: Category[]
  }
  categories: {
    nodes: Category[]
  }
  tags: {
    nodes: Category[]
  }
  detailPagePost: {
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

export interface Category {
  id: string
  name: string
  description: string
}
