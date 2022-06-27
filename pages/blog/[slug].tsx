import type { InferGetStaticPropsType } from 'next'
import { PostDetailPage } from 'framework/wordpress/interfaces/post'
import BlogDetail from 'templates/BlogDetail'
import {
  getPostDetailPageWpStaticProps,
  getWpStaticPostDetailPaths,
} from 'framework/wordpress/wp-post'
import { Layout } from '@components/common'

export const getStaticProps = getPostDetailPageWpStaticProps
export const getStaticPaths = getWpStaticPostDetailPaths

export default function Pages({
  data,
  header,
  additionalData,
  footer,
}: InferGetStaticPropsType<PostDetailPage>) {
  if (!data) return null

  return (
    <Layout header={header} footer={footer}>
      <BlogDetail additionalData={additionalData} data={{ ...(data as any) }} />
    </Layout>
  )
}
