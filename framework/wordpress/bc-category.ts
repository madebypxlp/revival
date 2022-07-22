import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import fetch from './wp-client'
import teamQuery from './queries/post-type-team/team-query'
import footerQuery from './queries/acfGlobalOptions/footer'
import headerQuery from './queries/acfGlobalOptions/header'

export const getBcCategoryTree = /* GraphQL */ `
  query CategoryTree3LevelsDeep {
    site {
      categoryTree {
        ...CategoryFields
        children {
          ...CategoryFields
          children {
            ...CategoryFields
          }
        }
      }
    }
  }

  fragment CategoryFields on CategoryTreeItem {
    name
    path
    entityId
  }
`

export const getBcCategoryStaticPaths = async (
  ctx: GetStaticPropsContext
) => {
  const { teams } = await fetch({
    query: getBcCategoryTree,
  })
  const res = {
    paths: teams.edges.map(
      ({ node }: { node: { slug: string; uri: string; id: string } }) => {
        return {
          params: {
            slug: 'GET THE CATEGORY PATH'
          },
        }
      }
    ),
    fallback: 'blocking',
  }
  return res
}

export const getBcCategoryStaticProps = async (
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<any>> => {

  const getBcCategoryTree = await fetch({
    query: teamQuery,
    variables: {
      slug: ctx.params?.slug as string,
    },
  })

  //  FIND ENTITIY ID BY slug = ctx.params?.slug

  const header = await fetch({ query: headerQuery })
  const footer = await fetch({ query: footerQuery })

  if (!res) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      header: { ...header?.acfOptionsHeader?.header },
      data: { entityId }
      footer: footer?.acfOptionsFooter?.footer,
    },
    revalidate: undefined,
  }
}
