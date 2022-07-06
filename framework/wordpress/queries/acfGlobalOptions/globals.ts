import Image from '@components/fragments/Image'
import Link from '@components/fragments/Link'

export default `
  ${Link}
  ${Image}
  query Data {
  globals: globalSettings {
    globals {
      newsletterSignUp {
        headline
        subline
        buttonLabel
        anchor
      }
      stickyHelpBox
    }
  }
  notFound: acfOptionsNotFoundPage {
    data: globalSettingsNotFoundPage {
      copy
      image {
        ...Image
      }
      quickLinks {
        link {
          ...Link
        }
      }
    }
  }
}
`
