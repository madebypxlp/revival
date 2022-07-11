import { GetStaticProps, GetStaticPaths, GetStaticPathsResult } from 'next'
import { getBlogSlugAndPage } from '@lib/utils'
import { ParsedUrlQuery } from 'querystring'
import fetch from './wp-client'
import postsByCategoryQuery, {
  getCategoryIdBySlug,
} from './queries/post-type-post/posts-by-category'
import footerQuery from './queries/acfGlobalOptions/footer'
import headerQuery from './queries/acfGlobalOptions/header'
import globalsQuery from './queries/acfGlobalOptions/globals'
import { Category } from './interfaces/post'

export const getAllPostCategories = `
  query getAllPostCategories {
    categories {
      nodes {
        slug
        count
      }
    }
  }
`

const postsPerPage = 9

export const getWpStaticPostCategoryPaths: GetStaticPaths = async (ctx) => {
  const { categories } = (await fetch({
    query: getAllPostCategories,
  })) as { categories: { nodes: Category[] } }

  const paginatedPaths = categories.nodes.reduce((prev, { slug, count }) => {
    // single category
    prev.push({ params: { slug: [slug] } })
    for (let i = 2; i <= Math.ceil(count / postsPerPage); i++) {
      // single category pages
      prev.push({ params: { slug: [slug, `page-${i}`] } })
    }
    return prev
  }, [] as GetStaticPathsResult['paths'])

  // console.log(
  //   'blog paths:',
  //   paginatedPaths.map((p: any) => p?.params?.slug)
  // )

  const res = {
    paths: paginatedPaths,
    fallback: 'blocking' as const,
  }
  return res
}

export const getPostCategoryWpStaticProps: GetStaticProps = async (ctx) => {
  const slug: string = Array.isArray(ctx.params?.slug)
    ? ctx.params?.slug[0] || ''
    : ctx.params?.slug || ''
  const { page } = getBlogSlugAndPage(ctx.params?.slug)
  const size = postsPerPage
  const offset = (page - 1) * size

  const category = await fetch({
    query: getCategoryIdBySlug,
    variables: { slug },
  })
  const categoryId = category?.categories?.nodes[0]?.categoryId
  let res
  if (categoryId) {
    res = await fetch({
      query: postsByCategoryQuery,
      variables: { categoryId, size, offset },
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
      totalPosts: res.posts.pageInfo.offsetPagination.total,
      globals: globalsData?.globals,
      header: { ...header?.acfOptionsHeader?.header },
      footer: footer?.acfOptionsFooter?.footer,
      categories: res?.categories?.nodes,
      category: category?.categories?.nodes[0],
    },
    revalidate: undefined,
  }
}
