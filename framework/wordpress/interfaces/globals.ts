import { MediaItem } from '@components/interfaces/Image'
import Link from '@components/interfaces/Link'

export interface ACFGlobalData {
  notFound: {
    data: {
      image: MediaItem
      copy: string
      quickLinks: [
        {
          link: Link
        }
      ]
    }
  }
  globals: {
    stickyHelpBox: string
    newsletterSignUp: {
      headline: string
      subline: string
      buttonLabel: string
      anchor: string
    }
  }
}
