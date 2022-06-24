import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import fetch from './wp-client'
import postsByCategoryQuery, {
  getCategoryIdBySlug,
} from './queries/post-type-post/posts-by-category'
import footerQuery from './queries/acfGlobalOptions/footer'
import headerQuery from './queries/acfGlobalOptions/header'
import globalsQuery from './queries/acfGlobalOptions/globals'

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

  const header = await fetch({ query: headerQuery })
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
      header: { ...header?.acfOptionsHeader?.header },
      footer: footer?.footer,
      categories: res?.categories?.nodes,
      category: category?.categories?.nodes[0],
    },
    revalidate: undefined,
  }
}
