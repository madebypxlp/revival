import Link from '@components/interfaces/Link'
import AuthorRowFragment from '@components/modules/AuthorRow/AuthorRow.graphql'
import InlineVideoFragment from '@components/modules/InlineVideo/InlineVideo.graphql'
import WYSIWYGFragment from '@components/modules/WYSIWYG/WYSIWYG.graphql'

const TEMPLATE = 'Learning_center_Detailpagelearningcenter_PageBuilder'
export default `
  ${WYSIWYGFragment(TEMPLATE)}
  ${InlineVideoFragment(TEMPLATE, true)}
  ${AuthorRowFragment(TEMPLATE)}
  query learningCenter($slug: String) {
    entry: learningCenterBy(slug: $slug) {
      id
      title
      slug
      uri
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
