import AuthorRowModule from '@components/modules/AuthorRow/AuthorRow'
import InlineImageModule from '@components/modules/InlineImage/InlineImage'
import InlineVideoModule from '@components/modules/InlineVideo/InlineVideo'
import MoreArticlesModule from '@components/modules/MoreArticles/MoreArticles'
import NewsletterSignUpModule from '@components/modules/NewsletterSignUp/NewsletterSignUp'
import WYSIWYGModule from '@components/modules/WYSIWYG/WYSIWYG'
import { LearningCenterDetailPage } from 'framework/wordpress/interfaces/learning-center'

const renderLearningCenterDetail = (
  layout: any,
  props: LearningCenterDetailPage
) => {
  const {
    data: { detailPageLearningCenter },
    additionalData,
  } = props
  switch (layout.fieldGroupName) {
    case 'Learning_center_Detailpagelearningcenter_PageBuilder_Wysiwyg':
      return <WYSIWYGModule key="WYSIWYGModule" {...layout} />
    case 'Learning_center_Detailpagelearningcenter_PageBuilder_InlineVideo':
      return (
        <InlineVideoModule
          key="InlineVideoModule"
          module={layout.inlineVideo}
        />
      )
    case 'Learning_center_Detailpagelearningcenter_PageBuilder_AuthorRow':
      return (
        <AuthorRowModule
          key="AuthorRowModule"
          module={detailPageLearningCenter}
        />
      )
    case 'Learning_center_Detailpagelearningcenter_PageBuilder_InlineImage':
      return (
        <InlineImageModule
          key="InlineImageModule"
          module={layout.inlineImage}
        />
      )
    case 'Learning_center_Detailpagelearningcenter_PageBuilder_MoreArticles':
      return (
        <MoreArticlesModule
          key="MoreArticlesModule"
          data={additionalData?.nodes}
          currentId={props.data.id}
          module={layout}
        />
      )
    case 'Learning_center_Detailpagelearningcenter_PageBuilder_NewsletterSignUp':
      return (
        <NewsletterSignUpModule
          key="NewsletterSignUpModule"
          module={layout.newsletterSignUp}
        />
      )
    default:
      return `${layout.fieldGroupName} not found`
  }
}

export default renderLearningCenterDetail
