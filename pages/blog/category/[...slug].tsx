import type { InferGetServerSidePropsType, InferGetStaticPropsType } from 'next'
import { PostDetailPage } from 'framework/wordpress/interfaces/post'
import {
  getPostCategoryWpStaticProps,
  getWpStaticPostCategoryPaths,
} from 'framework/wordpress/wp-post-category'
import TemplateBlogCategory from 'templates/BlogCategory'
import { Layout } from '@components/common'

export const getStaticProps = getPostCategoryWpStaticProps
export const getStaticPaths = getWpStaticPostCategoryPaths

export default function Pages({
  data,
  totalPosts,
  category,
  categories,
  footer,
  header,
  globals,
}: InferGetServerSidePropsType<PostDetailPage>) {
  if (!data) return null
  return (
    <Layout header={header} footer={footer}>
      <TemplateBlogCategory
        category={category}
        globals={globals}
        totalPosts={totalPosts}
        categories={categories}
        data={{ ...(data as any) }}
      />
    </Layout>
  )
}
