import type { InferGetServerSidePropsType, InferGetStaticPropsType } from 'next'
import { PostDetailPage } from 'framework/wordpress/interfaces/post'
import { Layout } from '@components/common'
import LearningCenterFilterModule from '@components/modules/LearningCenterFilter/LearningCenterFilter'
import { getLearningCenterCategoryWpServerSideProps } from 'framework/wordpress/wp-learning-center-category'
import LightHeroModule from '@components/modules/LightHero/LightHero'
import { LearningCenterCategoryPage } from 'framework/wordpress/interfaces/learning-center'
import BlogFilterBar from '@components/modules/BlogFilter/BlogFilterBar'
import Translations from 'constants/translations'

export const getServerSideProps = getLearningCenterCategoryWpServerSideProps

export default function Pages({
  posts,
  header,
  footer,
  activeCategory,
  categories,
  contentTypes,
}: LearningCenterCategoryPage) {
  if (!posts) return null

  const filterData = {
    posts: posts.nodes,
    totalPosts: posts.pageInfo.offsetPagination.total,
    activeCategory,
    categories,
    contentTypes,
  }

  const featuredCategories = categories
    .filter(({ slug }) => slug !== activeCategory?.slug)
    .slice(0, 5)

  return (
    <Layout header={header} footer={footer}>
      <LightHeroModule
        module={{
          fieldGroupName: 'lightHero',
          headline: activeCategory && activeCategory?.name,
          subline: activeCategory && activeCategory?.description,
        }}
      />
      <BlogFilterBar
        categories={featuredCategories}
        searchInputPlaceholder={Translations.SEARCH_LEARNING_CENTER}
      />
      <LearningCenterFilterModule {...filterData} />
    </Layout>
  )
}
