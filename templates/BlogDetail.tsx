import { LearningCenterInterface } from 'framework/wordpress/learning-center-query'
import renderBlogDetail from 'repeater/blogDetail'

const BlogDetail = (props: BlogInterface) => {
  const {
    detailPageBlog: { pageBuilder },
  } = props

  return (
    <div>
      {pageBuilder.map((e) => renderBlogDetail(e, props.detailPageBlog))}
    </div>
  )
}
export default BlogDetail
