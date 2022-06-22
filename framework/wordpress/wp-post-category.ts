import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import fetch from './wp-client'
import postsByCategoryQuery, {
  getCategoryIdBySlug,
} from './pt-post/posts-by-category'

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
  const test = await fetch({
    query: getCategoryIdBySlug,
    variables: {
      slug: ctx.params?.slug as string,
    },
  })
  const categoryId = test?.categories.nodes[0]?.categoryId
  const res = await fetch({
    query: postsByCategoryQuery,
    variables: {
      categoryId,
    },
  })

  if (!res || !res?.posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: res.posts,
    },
    revalidate: undefined,
  }
}
