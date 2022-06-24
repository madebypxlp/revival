import BlogLearningCenterHero from '@components/ui/BlogLearningCenterHero/BlogLearningCenterHero'
import { PostDetailPage } from 'framework/wordpress/interfaces/post'
import renderBlogDetail from 'repeater/blog-detail'

const BlogDetail = (props: PostDetailPage) => {
  const {
    data: {
      detailPagePost: { pageBuilder },
    },
  } = props

  return (
    <div>
      <BlogLearningCenterHero {...props.data} />
      {pageBuilder.map((e: any) => renderBlogDetail(e, props))}
    </div>
  )
}
export default BlogDetail
