import BlogLearningCenterHero from '@components/ui/BlogLearningCenterHero/BlogLearningCenterHero'
import { LearningCenterDetailPage } from 'framework/wordpress/interfaces/learning-center'
import renderLearningCenterDetail from 'repeater/learning-center'

const LearningCenterDetail = (props: LearningCenterDetailPage) => {
  const {
    data: {
      detailPageLearningCenter: { pageBuilder },
    },
  } = props

  return (
    <div>
      <BlogLearningCenterHero {...props.data} />
      {pageBuilder.map((e) => renderLearningCenterDetail(e, props))}
    </div>
  )
}
export default LearningCenterDetail
