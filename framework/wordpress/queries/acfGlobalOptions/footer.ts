import Image from '@components/fragments/Image'
import Link from '@components/fragments/Link'

export default `
${Link}
${Image}
query Footer {
  acfOptionsFooter {
    footer {
      nav:footerItems {
        primaryHeadline
        primaryElementLink {
          ...Link
        }
        items {
          highlight
          link {
            ...Link
          }
        }
      }
      social:footerSocialLinks {
        facebook
        instagram
        youtube
      }
      newsletter:footerNewsletter {
        copy
        headline
        note
      }
      logo:footerLogo {
        ...Image
      }
      copyright:footerCopyright {
        links {
          link {
            ...Link
          }
        }
        text
      }
      actions:footerActionRow {
        copy
        headline
        actions {
          link {
            ...Link
          }
          icon {
            ...Image
          }
        }
      }
    }
  }
}
`
