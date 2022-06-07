import Link from '@components/interfaces/Link'
import WYSIWYGFragment from '@components/modules/WYSIWYG/WYSIWYG.graphql'

export default `
  ${WYSIWYGFragment('Learning_center_Detailpagelearningcenter_PageBuilder')}
  query learningCenter($uri: String) {
    entry: learningCenterBy(uri: $uri) {
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
          ...Wysiwyg_${'Learning_center_Detailpagelearningcenter_PageBuilder'}
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
