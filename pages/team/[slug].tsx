import type { InferGetStaticPropsType } from 'next'
import { PageInterface } from 'framework/wordpress/page-query'
import TeamDetail from 'templates/TeamDetail'
import {
  getTeamDetailPageWpStaticProps,
  getWpStaticTeamDetailPaths,
} from 'framework/wordpress/wp-team'

export const getStaticProps = getTeamDetailPageWpStaticProps

export const getStaticPaths = getWpStaticTeamDetailPaths

export default function Pages({
  data,
}: InferGetStaticPropsType<PageInterface>) {
  if (!data) return null
  return <TeamDetail {...(data as any)} />
}
