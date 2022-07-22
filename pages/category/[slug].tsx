import type { InferGetStaticPropsType } from 'next'
import TeamDetail from 'templates/TeamDetail'
import {
  getTeamDetailPageWpStaticProps,
  getWpStaticTeamDetailPaths,
} from 'framework/wordpress/wp-team'
import { PageInterface } from 'framework/wordpress/interfaces/page'
import { Layout } from '@components/common'
import {
  getBcCategoryStaticPaths,
  getBcCategoryStaticProps,
} from 'framework/wordpress/bc-category'

export const getStaticProps = getBcCategoryStaticProps

export const getStaticPaths = getBcCategoryStaticPaths

export default function Pages({
  entityId,
  header,
  footer,
}: InferGetStaticPropsType<PageInterface>) {
  if (!entityId) return null
  return <Layout header={header} footer={footer}></Layout>
}
