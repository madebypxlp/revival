import {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next'
import fetch from './wp-client'
import footerQuery from './queries/acfGlobalOptions/footer'
import headerQuery from './queries/acfGlobalOptions/header'
import globalsQuery from './queries/acfGlobalOptions/globals'
import learningCenterByCategory, {
  getLcCategoryIdBySlug,
} from './queries/post-type-learning-center/learning-center-by-category'
import { getBlogSlugAndPage } from '@lib/utils'

export const getAllPostCategories = `
  query getAllPostCategories {
    categories: lcCategories {
      nodes {
        slug
      }
    }
  }
`

const postsPerPage = 6

export const getLearningCenterCategoryWpServerSideProps = async (
  ctx: GetServerSidePropsContext
): Promise<GetStaticPropsResult<any>> => {
  const slugAndPage = getBlogSlugAndPage(ctx.params?.slug)
  const page: number = slugAndPage.page || 1
  const size = postsPerPage
  const offset = (page - 1) * size

  const category = await fetch({
    query: getLcCategoryIdBySlug,
    variables: {
      slug: slugAndPage.slug,
    },
  })

  const categorySlugs = [
    slugAndPage.slug,
    ...(Array.isArray(ctx.query?.categories)
      ? ctx.query?.categories
      : [ctx.query?.categories]),
  ].filter((v) => !!v) as string[]

  const contentTypeSlugs = (
    Array.isArray(ctx.query?.types) ? ctx.query?.types : [ctx.query?.types]
  ).filter((v) => !!v) as string[]

  let res = undefined
  res = await fetch({
    query: learningCenterByCategory(categorySlugs, contentTypeSlugs),
    variables: {
      size,
      offset,
    },
  })
  const globalsData = await fetch({
    query: globalsQuery,
  })

  const header = await fetch({ query: headerQuery })
  const footer = await fetch({ query: footerQuery })

  if (!res || !res?.data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts: res.data,
      globals: globalsData?.globals,
      header: { ...header?.acfOptionsHeader?.header },
      footer: footer?.acfOptionsFooter?.footer,
      activeCategory: category?.categories?.nodes[0],
      categories: res?.categories?.nodes,
      contentTypes: res?.contentTypes?.nodes,
    },
    // revalidate: undefined,
  }
}
