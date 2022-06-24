import Link from '@components/fragments/Link'
//  import Image from '@components/fragments/Image'
import LinkInterface from '@components/interfaces/Link'

export default `
  ${Link}
  query Data {
  globals: globalSettings {
    globals {
      newsletterSignUp {
        headline
        subline
        buttonLabel
        anchor
      }
    }
  }
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
