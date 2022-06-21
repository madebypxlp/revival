import AuthorRowModule from '@components/modules/AuthorRow/AuthorRow'
import InlineImageModule from '@components/modules/InlineImage/InlineImage'
import InlineVideoModule from '@components/modules/InlineVideo/InlineVideo'
import WYSIWYGModule from '@components/modules/WYSIWYG/WYSIWYG'

const renderLearningCenterDetail = (
  layout: any,
  detailPageLearningCenter: any
) => {
  console.log(layout)
  switch (layout.fieldGroupName) {
    case 'Learning_center_Detailpagelearningcenter_PageBuilder_Wysiwyg':
      return <WYSIWYGModule {...layout} />
    case 'Learning_center_Detailpagelearningcenter_PageBuilder_InlineVideo':
      return <InlineVideoModule module={layout.inlineVideo} />
    case 'Learning_center_Detailpagelearningcenter_PageBuilder_AuthorRow':
      return <AuthorRowModule module={detailPageLearningCenter} />
    case 'Learning_center_Detailpagelearningcenter_PageBuilder_InlineImage':
      return <InlineImageModule module={layout.inlineImage} />
    default:
      return `${layout.fieldGroupName} not found`
  }
}

export default renderLearningCenterDetail
