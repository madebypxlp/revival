import Link from '@components/interfaces/Link'

export interface ACFGlobalData {
  notFound: {
    data: {
      copy: string
      quickLinks: [
        {
          link: Link
        }
      ]
    }
  }
  globals: {
    newsletterSignUp: {
      headline: string
      subline: string
      buttonLabel: string
      anchor: string
    }
  }
}
