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

export const getAllPostCategories = `
  query getAllPostCategories {
    categories: lcCategories {
      nodes {
        slug
      }
    }
  }
`

export const getLearningCenterCategoryWpServerSideProps = async (
  ctx: GetServerSidePropsContext
): Promise<GetStaticPropsResult<any>> => {
  const category = await fetch({
    query: getLcCategoryIdBySlug,
    variables: {
      slug: ctx.params?.slug as string,
    },
  })
  const categoryId = category?.categories?.nodes[0]?.lcCategoryId
  let res = undefined
  if (true) {
    res = await fetch({
      query: learningCenterByCategory,
      variables: {
        id: categoryId,
      },
    })
  }
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
      category: category?.categories?.nodes[0],
      categories: res?.categories?.nodes,
      contentTypes: res?.contentTypes?.nodes,
    },
    // revalidate: undefined,
  }
}
