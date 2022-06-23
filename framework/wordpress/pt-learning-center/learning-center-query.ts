import Image from '@components/fragments/Image'
import AuthorRowFragment from '@components/modules/AuthorRow/AuthorRow.graphql'
import InlineImageFragment from '@components/modules/InlineImage/InlineImage.graphql'
import InlineVideoFragment from '@components/modules/InlineVideo/InlineVideo.graphql'
import WYSIWYGFragment from '@components/modules/WYSIWYG/WYSIWYG.graphql'
import MoreArticlesFragment from '@components/modules/MoreArticles/MoreArticles.graphql'
import NewsletterSignUpFragment from '@components/modules/NewsletterSignUp/NewsletterSignUp.graphql'
import ProductSliderWithBigImageFragment from '@components/modules/ProductSliderWithBigImage/ProductSliderWithBigImage.graphql'

const TEMPLATE = 'Learning_center_Detailpagelearningcenter_PageBuilder'
export default `
  ${Image}
  ${WYSIWYGFragment(TEMPLATE)}
  ${InlineVideoFragment(TEMPLATE, true)}
  ${AuthorRowFragment(TEMPLATE)}
  ${InlineImageFragment(TEMPLATE, true)}
  ${MoreArticlesFragment(TEMPLATE)}
  ${NewsletterSignUpFragment(TEMPLATE, true)}
  ${ProductSliderWithBigImageFragment(TEMPLATE)}
  query learningCenter($slug: String) {
    additionalData: allLearningCenter(last: 5) {
      nodes {
        title
        featuredImage {
          node {
            ...Image
          }
        }
      }
    }
    entry: learningCenterBy(slug: $slug) {
      id
      title
      slug
      uri
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
      contentTypes {
        nodes {
          id
          name
        }
      }
      detailPageLearningCenter {
        pageBuilder {
          ...Wysiwyg_${TEMPLATE}
          ...InlineVideo_${TEMPLATE}
          ...AuthorRow_${TEMPLATE}
          ...InlineImage_${TEMPLATE}
          ...MoreArticles_${TEMPLATE}
          ...NewsletterSignUp_${TEMPLATE}
          ...ProductSliderWithBigImage_${TEMPLATE}
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
