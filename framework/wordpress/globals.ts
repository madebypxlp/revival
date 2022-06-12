import Link from '@components/fragments/Link'
//  import Image from '@components/fragments/Image'
import LinkInterface from '@components/interfaces/Link'

export default `
  ${Link}
  query Data {
  notFound: acfOptionsNotFoundPage {
    data: globalSettingsNotFoundPage {
      copy
      quickLinks {
        link {
          ...Link
        }
      }
    }
  }
}
`

export interface ACFGlobalData {
  notFound: {
    data: {
      copy: string
      quickLinks: [
        {
          link: LinkInterface
        }
      ]
    }
  }
}
