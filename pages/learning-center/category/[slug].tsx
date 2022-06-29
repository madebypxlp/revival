import type { InferGetServerSidePropsType, InferGetStaticPropsType } from 'next'
import { PostDetailPage } from 'framework/wordpress/interfaces/post'
import { Layout } from '@components/common'
import LearningCenterFilterModule from '@components/modules/LearningCenterFilter/LearningCenterFilter'
import { getLearningCenterCategoryWpServerSideProps } from 'framework/wordpress/wp-learning-center-category'

export const getServerSideProps = getLearningCenterCategoryWpServerSideProps

export default function Pages({
  posts,
  header,
  footer,
  categories,
  contentTypes,
}: InferGetServerSidePropsType<PostDetailPage>) {
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
