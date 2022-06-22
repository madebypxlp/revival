import type { InferGetStaticPropsType } from 'next'
import LearningCenterDetail from 'templates/LearningCenterDetail'
import {
  getLearningCenterDetailPageWpStaticProps,
  getWpStaticLearningCenterDetailPaths,
} from 'framework/wordpress/wp-learning-center'
import { LearningCenterDetailPage } from 'framework/wordpress/interfaces/learning-center'
import { Layout } from '@components/common'

export const getStaticProps = getLearningCenterDetailPageWpStaticProps
export const getStaticPaths = getWpStaticLearningCenterDetailPaths

export default function Pages({
  data,
  additionalData,
  footer,
}: InferGetStaticPropsType<LearningCenterDetailPage>) {
  if (!data) return null

  return (
    <Layout footer={footer}>
      <LearningCenterDetail
        additionalData={additionalData}
        data={{ ...(data as any) }}
      />
    </Layout>
  )
}
