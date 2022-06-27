import React, { FunctionComponent } from 'react'
import styles from './LearningCenterFeaturedAndLatest.module.scss'
import ILearningCenterFeaturedAndLatest from './LearningCenterFeaturedAndLatest.interface'
import { LearningCenterInterface } from 'framework/wordpress/interfaces/learning-center'
import { Category } from 'framework/wordpress/interfaces/post'
import ArticleTeaser from '@components/ui/ArticleTeaser/ArticleTeaser'
import { useIsMobile } from '@commerce/utils/hooks'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import Translations from 'constants/translations'
import BlogFilterBar from '../BlogFilter/BlogFilterBar'
import Image from 'next/image'
import ArticleTeaserSmall from '@components/ui/ArticleTeaserSmall/ArticleTeaserSmall'

const LearningCenterFeaturedAndLatestModule: FunctionComponent<{
  module: ILearningCenterFeaturedAndLatest
  latestPosts: LearningCenterInterface[]
  categories: Category[]
}> = ({ module, latestPosts, categories }) => {
  const navCategories = categories.filter(
    (c) => c.postTypeLearningCenterCategory?.featured
  )
  const { featuredArticles, featuredStoriesHeadline, latestStoriesHeadline } =
    module
  const featuredIds = featuredArticles.map((a) => a.article.id)

  const isMobile = useIsMobile()

  const latestPostsCount = isMobile ? 3 : 5
  const renderedLatestPosts = latestPosts
    .filter((p) => !featuredIds.includes(p.id))
    .slice(0, latestPostsCount)

  const otherFeaturedArticles = featuredArticles.slice(1, 3)

  const articleTeaserFontSize = isMobile ? 'medium' : 'large'
  return (
    <div className={`${styles.root}`}>
      <BlogFilterBar
        categories={navCategories}
        searchInputPlaceholder={Translations.SEARCH_LEARNING_CENTER}
        variant="learning-center"
      />
      <div className="default-grid container">
        {featuredStoriesHeadline && (
          <div className={styles.featuredStoriesHeadline}>
            <h4>{featuredStoriesHeadline}</h4>
          </div>
        )}
        <div className={styles.mainFeaturedArticleContainer}>
          <ArticleTeaser
            className="mt-40 pb-65 md:pb-45 md:light-border-b"
            post={module.featuredArticles[0].article}
            textSize={articleTeaserFontSize}
          />
        </div>
        <div className={styles.otherFeaturedArticlesContainer}>
          {otherFeaturedArticles.map(({ article }) => {
            return (
              <ArticleTeaserSmall
                article={article}
                variant={'learning-center'}
              />
            )
          })}
        </div>
        <div className={styles.latestStoriesContainer}>
          {latestStoriesHeadline && (
            <div className={styles.latestStoriesHeadline}>
              <h4>{latestStoriesHeadline}</h4>
            </div>
          )}
          {renderedLatestPosts.map((p) => {
            return <ArticleTeaserSmall article={p} variant={'no-image'} />
          })}
        </div>
      </div>
    </div>
  )
}

export default LearningCenterFeaturedAndLatestModule
