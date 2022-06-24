import type { InferGetStaticPropsType } from 'next'
import { PostDetailPage } from 'framework/wordpress/interfaces/post'
import { Layout } from '@components/common'
import {
  getLearningCenterCategoryWpStaticProps,
  getWpStaticLearningCenterCategoryPaths,
} from 'framework/wordpress/wp-learning-center-category'
import LearningCenterFilterModule from '@components/modules/LearningCenterFilter/LearningCenterFilter'

export const getStaticProps = getLearningCenterCategoryWpStaticProps
export const getStaticPaths = getWpStaticLearningCenterCategoryPaths

export default function Pages({
  posts,
  header,
  footer,
  categories,
  contentTypes,
}: InferGetStaticPropsType<PostDetailPage>) {
  if (!posts) return null

  const filterData = {
    posts,
    categories,
    contentTypes,
  }
  return (
    <Layout header={header} footer={footer}>
      <LearningCenterFilterModule {...filterData} />
    </Layout>
  )
}
