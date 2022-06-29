import {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next'
import fetch from './wp-client'
import footerQuery from './queries/acfGlobalOptions/footer'
import headerQuery from './queries/acfGlobalOptions/header'
import globalsQuery from './queries/acfGlobalOptions/globals'
import learningCenterQuery from './queries/post-type-learning-center/learning-center-filter'

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
  /*
  const category = await fetch({
    query: getCategoryIdBySlug,
    variables: {
      slug: ctx.params?.slug as string,
    },
  })
  const categoryId = category?.categories?.nodes[0]?.categoryId
  */
  let res = undefined
  if (true) {
    res = await fetch({
      query: learningCenterQuery,
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
      categories: res?.categories?.nodes,
      contentTypes: res?.contentTypes?.nodes,
    },
    revalidate: undefined,
  }
}
