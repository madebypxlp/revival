import type { InferGetStaticPropsType } from 'next'
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
  category,
  categories,
  footer,
  globals,
}: InferGetStaticPropsType<PostDetailPage>) {
  if (!data) return null
  return (
    <Layout footer={footer}>
      <TemplateBlogCategory
        category={category}
        globals={globals}
        categories={categories}
        data={{ ...(data as any) }}
      />
    </Layout>
  )
}
