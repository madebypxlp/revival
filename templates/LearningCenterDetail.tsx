import BlogLearningCenterHero from '@components/ui/BlogLearningCenterHero/BlogLearningCenterHero'
import StickyHelpBox from '@components/ui/StickyHelpBox/StickyHelpBox'
import { LearningCenterDetailPage } from 'framework/wordpress/interfaces/learning-center'
import renderLearningCenterDetail from 'repeater/learning-center'

const LearningCenterDetail = (props: LearningCenterDetailPage) => {
  const {
    data: {
      detailPageLearningCenter: { pageBuilder },
    },
    globals,
  } = props

  return (
    <div>
      <BlogLearningCenterHero {...props.data} />
      <div className="relative">
        {pageBuilder.map((e) => renderLearningCenterDetail(e, props))}
        <StickyHelpBox globals={globals} />
      </div>
    </div>
  )
}
export default LearningCenterDetail
