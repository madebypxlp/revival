import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import fetch from './wp-client'
import teamQuery from './pt-team/team-query'
import footerQuery from './footer'

export const getAllTeamPagesQuery = /* GraphQL */ `
  query getAllTeamEntries {
    teams {
      edges {
        node {
          id
          slug
          uri
        }
      }
    }
  }
`

export const getWpStaticTeamDetailPaths = async (
  ctx: GetStaticPropsContext
) => {
  const { teams } = await fetch({
    query: getAllTeamPagesQuery,
  })
  const res = {
    paths: teams.edges.map(
      ({ node }: { node: { slug: string; uri: string; id: string } }) => {
        return {
          params: {
            slug: node.uri
              .substring(1)
              .split('/')
              .filter((i) => !!i)[1],
          },
        }
      }
    ),
    fallback: 'blocking',
  }
  return res
}

export const getTeamDetailPageWpStaticProps = async (
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<any>> => {
  const res = await fetch({
    query: teamQuery,
    variables: {
      slug: ctx.params?.slug as string,
    },
  })
  const footer = await fetch({ query: footerQuery })
  if (!res) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      data: res.entry,
      footer: footer?.footer,
    },
    revalidate: undefined,
  }
}
