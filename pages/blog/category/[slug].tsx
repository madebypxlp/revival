import type { InferGetStaticPropsType } from 'next'
import { PostDetailPage } from 'framework/wordpress/interfaces/post'
import BlogDetail from 'templates/BlogDetail'
import {
  getPostDetailPageWpStaticProps,
  getWpStaticPostDetailPaths,
} from 'framework/wordpress/wp-post'
import {
  getPostCategoryWpStaticProps,
  getWpStaticPostCategoryPaths,
} from 'framework/wordpress/wp-post-category'

export const getStaticProps = getPostCategoryWpStaticProps
export const getStaticPaths = getWpStaticPostCategoryPaths

export default function Pages({
  data,
}: InferGetStaticPropsType<PostDetailPage>) {
  if (!data) return null
  console.log(data)
  return <div>Hello</div>
}
