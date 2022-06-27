import { MediaItem } from '@components/interfaces/Image'
import Link from '@components/interfaces/Link'

export interface AcfOptionsFooter {
  nav: [
    {
      primaryHeadline: string
      primaryElementLink: Link
      items: [
        {
          highlight: boolean
          link: Link
        }
      ]
    }
  ]
  social: {
    facebook: string
    instagram: string
    youtube: string
  }
  newsletter: {
    copy: string
    headline: string
    note: string
  }
  logo: MediaItem
  copyright: {
    links: [
      {
        link: Link
      }
    ]
    text: string
  }
  actions: {
    headline: string
    copy: string
    actions: [
      {
        link: Link
        icon: MediaItem
      }
    ]
  }
}
