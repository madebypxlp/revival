import type { InferGetServerSidePropsType, InferGetStaticPropsType } from 'next'
import { PostDetailPage } from 'framework/wordpress/interfaces/post'
import { Layout } from '@components/common'
import LearningCenterFilterModule from '@components/modules/LearningCenterFilter/LearningCenterFilter'
import { getLearningCenterCategoryWpServerSideProps } from 'framework/wordpress/wp-learning-center-category'
import LightHeroModule from '@components/modules/LightHero/LightHero'
import { LearningCenterDetailPage } from 'framework/wordpress/interfaces/learning-center'

export const getServerSideProps = getLearningCenterCategoryWpServerSideProps

export default function Pages({
  data,
  posts,
  header,
  footer,
  category,
  categories,
  contentTypes,
}: InferGetServerSidePropsType<LearningCenterDetailPage>) {
  if (!posts) return null

  const filterData = {
    posts,
    category,
    categories,
    contentTypes,
  }
  return (
    <Layout header={header} footer={footer}>
      <LightHeroModule
        module={{
          fieldGroupName: 'lightHero',
          headline: category && category?.name,
          subline: category && category?.description,
        }}
      />
      <LearningCenterFilterModule {...filterData} />
    </Layout>
  )
}
