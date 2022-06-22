import type { InferGetStaticPropsType } from 'next'
import { PostDetailPage } from 'framework/wordpress/interfaces/post'
import BlogDetail from 'templates/BlogDetail'
import {
  getPostDetailPageWpStaticProps,
  getWpStaticPostDetailPaths,
} from 'framework/wordpress/wp-post'

export const getStaticProps = getPostDetailPageWpStaticProps
export const getStaticPaths = getWpStaticPostDetailPaths

export default function Pages({
  data,
  additionalData,
}: InferGetStaticPropsType<PostDetailPage>) {
  if (!data) return null

  return (
    <BlogDetail additionalData={additionalData} data={{ ...(data as any) }} />
  )
}
