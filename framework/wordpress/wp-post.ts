import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import fetch from './wp-client'
import footerQuery from './queries/acfGlobalOptions/footer'
import headerQuery from './queries/acfGlobalOptions/header'
import globalsQuery from './queries/acfGlobalOptions/globals'
import postDetailQuery from './queries/post-type-post/post-query'

export const getAllPostDetailPagesQuery = `
  query getAllPostDetailPagesQuery {
    posts {
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

export const getWpStaticPostDetailPaths = async (
  ctx: GetStaticPropsContext
) => {
  const { posts } = await fetch({
    query: getAllPostDetailPagesQuery,
  })
  const res = {
    paths: posts.edges.map(
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

export const getPostDetailPageWpStaticProps = async (
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<any>> => {
  const res = await fetch({
    query: postDetailQuery,
    variables: {
      slug: ctx.params?.slug as string,
    },
  })

  const header = await fetch({ query: headerQuery })
  const footer = await fetch({ query: footerQuery })
  const globals = await fetch({ query: globalsQuery })

  if (!res) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      header: { ...header?.acfOptionsHeader?.header },
      data: res.entry,
      footer: footer?.acfOptionsFooter?.footer,
      globals: globals?.globals,
      additionalData: res.additionalData,
    },
    revalidate: undefined,
  }
}
