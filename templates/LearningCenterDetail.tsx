import WYSIWYGFragment from '@components/modules/WYSIWYG/WYSIWYG.graphql'
import { LearningCenterInterface } from 'framework/wordpress/learning-center-query'
import renderLearningCenterDetail from 'repeater/learningCenterDetail'

const LearningCenterDetail = (props: LearningCenterInterface) => {
  const {
    detailPageLearningCenter: { pageBuilder },
  } = props

  return (
    <div>
      {pageBuilder.map((e) =>
        renderLearningCenterDetail(e, props.detailPageLearningCenter)
      )}
    </div>
  )
}
export default LearningCenterDetail
