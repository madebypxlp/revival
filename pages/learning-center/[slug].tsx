import type { InferGetStaticPropsType } from 'next'
import { Layout } from '@components/common'
import {
  getLearningCenterDetailPageWpStaticProps,
  getWpStaticLearningCenterDetailPaths,
  getWpStaticPaths,
  getWpStaticProps,
} from 'framework/wordpress/wp'
import { PageInterface } from 'framework/wordpress/page-query'
import LearningCenterDetail from 'templates/LearningCenterDetail'

export const getStaticProps = getLearningCenterDetailPageWpStaticProps

export const getStaticPaths = getWpStaticLearningCenterDetailPaths

export default function Pages({
  learningCenter,
}: InferGetStaticPropsType<PageInterface>) {
  if (!learningCenter) return null
  return <LearningCenterDetail {...(learningCenter as any)} />
}
