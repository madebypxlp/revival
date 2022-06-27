import type { InferGetStaticPropsType } from 'next'
import TeamDetail from 'templates/TeamDetail'
import {
  getTeamDetailPageWpStaticProps,
  getWpStaticTeamDetailPaths,
} from 'framework/wordpress/wp-team'
import { PageInterface } from 'framework/wordpress/interfaces/page'
import { Layout } from '@components/common'

export const getStaticProps = getTeamDetailPageWpStaticProps

export const getStaticPaths = getWpStaticTeamDetailPaths

export default function Pages({
  data,
  header,
  footer,
}: InferGetStaticPropsType<PageInterface>) {
  if (!data) return null
  return (
    <Layout header={header} footer={footer}>
      <TeamDetail {...(data as any)} />
    </Layout>
  )
}
