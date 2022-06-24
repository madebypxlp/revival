import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import fetch from './wp-client'
import pageQuery from './queries/page/page-query'
import globalsQuery from './queries/acfGlobalOptions/globals'
import brandsQuery from './queries/post-type-brands/brands'
import blogQuery from './queries/post-type-post/blog'
import latestLearningCenterPosts from './queries/post-type-learning-center/learning-center-latest'
import footerQuery from './queries/acfGlobalOptions/footer'
import headerQuery from './queries/acfGlobalOptions/header'

export const getAllPagesQuery = /* GraphQL */ `
  query getAllPages {
    pages {
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

export const getWpStaticPaths = async (ctx: GetStaticPropsContext) => {
  const { pages } = await fetch({
    query: getAllPagesQuery,
  })
  const res = {
    paths: pages.edges.map(
      ({ node }: { node: { slug: string; uri: string; id: string } }) => ({
        params: {
          slug: node.uri
            .substring(1)
            .split('/')
            .filter((i) => !!i),
        },
      })
    ),
    fallback: 'blocking',
  }
  return res
}

export const getWpStaticProps = async (
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<any>> => {
  const res = await fetch({
    query: pageQuery,
    variables: {
      uri: (ctx.params?.slug as string[])?.join('/') || '/',
    },
  })

  if (!res || !res.entry || !res.entry?.template) {
    return {
      notFound: true,
    }
  }
  const template = res?.entry?.template?.__typename
  const data = {
    brands: {},
    latestLearningCenterPosts: [],
    blog: [],
    categories: [],
    countries: [],
    states: [],
  }

  const header = await fetch({ query: headerQuery })
  const footer = await fetch({ query: footerQuery })

  if (template === 'Template_AllBrands') {
    const r = await fetch({ query: brandsQuery })
    if (r && r.brands) {
      data.brands = r.brands
    }
  }
  if (template === 'Template_Home') {
    const r = await fetch({
      query: latestLearningCenterPosts,
      variables: { count: 4 },
    })
    if (r && r.latestLearningCenterPosts) {
      data.latestLearningCenterPosts = r.latestLearningCenterPosts
    }
  }

  if (template === 'Template_LearningCenter') {
    const r = await fetch({
      query: latestLearningCenterPosts,
      variables: { count: 8 },
    })
    if (r && r.latestLearningCenterPosts) {
      data.latestLearningCenterPosts = r.latestLearningCenterPosts
      data.categories = r.categories
    }
  }

  if (template === 'Template_Blog') {
    const r = await fetch({ query: blogQuery })
    if (r && r.data) {
      data.blog = r.data
      data.categories = r?.categories?.nodes
    }
  }

  if (template === 'Template_CalendarContest') {
    const r = await fetch({
      url: 'https://restcountries.com/v3.1/all',
      method: 'GET',
    })

    if (r && r) {
      data.countries = r
    }
  }

  return {
    props: {
      header: { ...header?.acfOptionsHeader?.header },
      footer: footer?.acfOptionsFooter?.footer,
      page: {
        ...res.entry,
        ...data,
      },
    },
    revalidate: undefined,
  }
}

export const getWpData = async (
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<any>> => {
  const res = await fetch({
    query: globalsQuery,
  })
  return {
    props: {
      ...res,
    },
    revalidate: undefined,
  }
}
