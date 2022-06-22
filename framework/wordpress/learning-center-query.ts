import Link from '@components/interfaces/Link'
import Image from '@components/fragments/Image'
import AuthorRowFragment from '@components/modules/AuthorRow/AuthorRow.graphql'
import InlineImageFragment from '@components/modules/InlineImage/InlineImage.graphql'
import InlineVideoFragment from '@components/modules/InlineVideo/InlineVideo.graphql'
import WYSIWYGFragment from '@components/modules/WYSIWYG/WYSIWYG.graphql'
import MoreArticlesFragment from '@components/modules/MoreArticles/MoreArticles.graphql'
import { MediaItem } from '@components/interfaces/Image'

const TEMPLATE = 'Learning_center_Detailpagelearningcenter_PageBuilder'
export default `
  ${Image}
  ${WYSIWYGFragment(TEMPLATE)}
  ${InlineVideoFragment(TEMPLATE, true)}
  ${AuthorRowFragment(TEMPLATE)}
  ${InlineImageFragment(TEMPLATE, true)}
  ${MoreArticlesFragment(TEMPLATE)}
  query learningCenter($slug: String) {
    morePosts: allLearningCenter(last: 4) {
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

export interface LearningCenterInterface {
  id: string
  title: string
  slug: string
  featuredImage: {
    node: MediaItem
  }
  contentTypes: {
    nodes: [
      {
        id: string
        name: string
      }
    ]
  }
  categories: {
    nodes: [
      {
        id: string
        name: string
      }
    ]
  }
  detailPageLearningCenter: {
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
