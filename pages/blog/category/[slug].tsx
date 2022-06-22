import type { InferGetStaticPropsType } from 'next'
import { PostDetailPage } from 'framework/wordpress/interfaces/post'
import {
  getPostCategoryWpStaticProps,
  getWpStaticPostCategoryPaths,
} from 'framework/wordpress/wp-post-category'
import TemplateBlogCategory from 'templates/BlogCategory'

export const getStaticProps = getPostCategoryWpStaticProps
export const getStaticPaths = getWpStaticPostCategoryPaths

export default function Pages({
  data,
  category,
  categories,
}: InferGetStaticPropsType<PostDetailPage>) {
  if (!data) return null
  return (
    <TemplateBlogCategory
      category={category}
      categories={categories}
      data={{ ...(data as any) }}
    />
  )
}
