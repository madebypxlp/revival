import Image from '@components/fragments/Image'
import AuthorRowFragment from '@components/modules/AuthorRow/AuthorRow.graphql'
import InlineImageFragment from '@components/modules/InlineImage/InlineImage.graphql'
import InlineVideoFragment from '@components/modules/InlineVideo/InlineVideo.graphql'
import WYSIWYGFragment from '@components/modules/WYSIWYG/WYSIWYG.graphql'
import MoreArticlesFragment from '@components/modules/MoreArticles/MoreArticles.graphql'
import NewsletterSignUpFragment from '@components/modules/NewsletterSignUp/NewsletterSignUp.graphql'

const TEMPLATE = 'Post_Detailpagepost_PageBuilder'

export default `
  ${Image}
  ${WYSIWYGFragment(TEMPLATE)}
  ${InlineImageFragment(TEMPLATE, true)}
  ${InlineVideoFragment(TEMPLATE, true)}
  ${AuthorRowFragment(TEMPLATE)}
  ${MoreArticlesFragment(TEMPLATE)}
  ${NewsletterSignUpFragment(TEMPLATE, true)}
  query post($slug: String) {
    additionalData: posts(last: 4) {
      nodes {
        title
        id
        uri
        slug
        featuredImage {
          node {
            ...Image
          }
        }
        categories {
          nodes {
            id
            name
          }
        }
        tags {
          nodes {
            id
            name
          }
        }
      }
    }
    entry: postBy(slug: $slug) {
      id
      title
      slug
      uri
      date
      featuredImage {
        node {
          ...Image
        }
      }
      categories {
        nodes {
          id
          name
        }
      }

      detailPagePost {
        pageBuilder {
          ...Wysiwyg_${TEMPLATE}
          ...InlineImage_${TEMPLATE}
          ...InlineVideo_${TEMPLATE}
          ...AuthorRow_${TEMPLATE}
          ...MoreArticles_${TEMPLATE}
          ...NewsletterSignUp_${TEMPLATE}
        }
        authorBioCopy
        authorName
        authorPosition
        disclaimer
        authorLink {
          target
          title
          url
        }
        socialLinks {
          facebook
          linkedin
          twitter
        }
      }
    }
  }
`
