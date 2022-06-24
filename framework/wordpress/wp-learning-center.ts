import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import fetch from './wp-client'
import footerQuery from './queries/acfGlobalOptions/footer'
import headerQuery from './queries/acfGlobalOptions/header'
import learningCenterQuery from './queries/post-type-learning-center/learning-center-query'

export const getAllLearningCenterDetailPagesQuery = `
  query getAllLearningCenterDetailPagesQuery {
    allLearningCenter {
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

export const getWpStaticLearningCenterDetailPaths = async (
  ctx: GetStaticPropsContext
) => {
  const { allLearningCenter } = await fetch({
    query: getAllLearningCenterDetailPagesQuery,
  })
  const res = {
    paths: allLearningCenter.edges.map(
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

export const getLearningCenterDetailPageWpStaticProps = async (
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<any>> => {
  const res = await fetch({
    query: learningCenterQuery,
    variables: {
      slug: ctx.params?.slug as string,
    },
  })
  const header = await fetch({ query: headerQuery })
  const footer = await fetch({ query: footerQuery })
  if (!res) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      data: res.entry,
      header: { ...header?.acfOptionsHeader?.header },
      footer: footer?.footer,
      additionalData: res.additionalData,
    },
    revalidate: undefined,
  }
}
