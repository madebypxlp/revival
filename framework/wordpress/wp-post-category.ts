import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import fetch from './wp-client'
import postsByCategoryQuery, {
  getCategoryIdBySlug,
} from './pt-post/posts-by-category'
import footerQuery from './footer'
import globalsQuery from './globals'

export const getAllPostCategories = `
  query getAllPostCategories {
    categories {
      nodes {
        slug
      }
    }
  }
`

export const getWpStaticPostCategoryPaths = async (
  ctx: GetStaticPropsContext
) => {
  const { categories } = await fetch({
    query: getAllPostCategories,
  })
  const res = {
    paths: categories.nodes.map(({ slug }: { slug: string }) => {
      return {
        params: {
          slug,
        },
      }
    }),
    fallback: 'blocking',
  }
  return res
}

export const getPostCategoryWpStaticProps = async (
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<any>> => {
  const category = await fetch({
    query: getCategoryIdBySlug,
    variables: {
      slug: ctx.params?.slug as string,
    },
  })
  const categoryId = category?.categories?.nodes[0]?.categoryId
  let res = undefined
  if (categoryId) {
    res = await fetch({
      query: postsByCategoryQuery,
      variables: {
        categoryId,
      },
    })
  }
  const globalsData = await fetch({
    query: globalsQuery,
  })

  const footer = await fetch({ query: footerQuery })
  if (!res || !res?.posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: res.posts,
      globals: globalsData?.globals,
      footer: footer?.footer,
      categories: res?.categories?.nodes,
      category: category?.categories?.nodes[0],
    },
    revalidate: undefined,
  }
}
