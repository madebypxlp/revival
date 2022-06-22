import type { InferGetStaticPropsType } from 'next'
import { PageInterface } from 'framework/wordpress/page-query'
import LearningCenterDetail from 'templates/LearningCenterDetail'
import {
  getLearningCenterDetailPageWpStaticProps,
  getWpStaticLearningCenterDetailPaths,
} from 'framework/wordpress/wp-learning-center'

export const getStaticProps = getLearningCenterDetailPageWpStaticProps

export const getStaticPaths = getWpStaticLearningCenterDetailPaths

export default function Pages({
  learningCenter,
  morePosts,
}: InferGetStaticPropsType<PageInterface>) {
  if (!learningCenter) return null
  return (
    <LearningCenterDetail
      morePosts={morePosts?.nodes as []}
      {...(learningCenter as any)}
    />
  )
}
