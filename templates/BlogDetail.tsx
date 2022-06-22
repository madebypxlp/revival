import { PostDetailPage } from 'framework/wordpress/interfaces/post'
import renderBlogDetail from 'repeater/blog-detail'

const BlogDetail = (props: PostDetailPage) => {
  const {
    data: {
      detailPagePost: { pageBuilder },
    },
  } = props

  return <div>{pageBuilder.map((e: any) => renderBlogDetail(e, props))}</div>
}
export default BlogDetail
