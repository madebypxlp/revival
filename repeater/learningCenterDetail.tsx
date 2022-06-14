import InlineVideoModule from '@components/modules/InlineVideo/InlineVideo'
import WYSIWYGModule from '@components/modules/WYSIWYG/WYSIWYG'

const renderLearningCenterDetail = (layout: any) => {
  console.log(layout)
  switch (layout.fieldGroupName) {
    case 'Learning_center_Detailpagelearningcenter_PageBuilder_Wysiwyg':
      return <WYSIWYGModule {...layout} />
    case 'Learning_center_Detailpagelearningcenter_PageBuilder_InlineVideo':
      return <InlineVideoModule module={layout.inlineVideo} />
    default:
      return `${layout.fieldGroupName} not found`
  }
}

export default renderLearningCenterDetail
