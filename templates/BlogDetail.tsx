import BlogLearningCenterHero from '@components/ui/BlogLearningCenterHero/BlogLearningCenterHero'
import StickyHelpBox from '@components/ui/StickyHelpBox/StickyHelpBox'
import { PostDetailPage } from 'framework/wordpress/interfaces/post'
import renderBlogDetail from 'repeater/blog-detail'

const BlogDetail = (props: PostDetailPage) => {
  const {
    data: {
      detailPagePost: { pageBuilder },
    },
    globals,
  } = props

  return (
    <div>
      <BlogLearningCenterHero {...props.data} />
      <div className="relative">
        {pageBuilder.map((e: any) => renderBlogDetail(e, props))}
        <StickyHelpBox globals={globals} />
      </div>
    </div>
  )
}
export default BlogDetail
