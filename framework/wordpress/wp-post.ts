import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import fetch from './wp-client'
import footerQuery from './footer'
import postDetailQuery from './pt-post/post-query'

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
      additionalData: res.additionalData,
    },
    revalidate: undefined,
  }
}