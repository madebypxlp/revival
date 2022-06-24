import React, { FunctionComponent } from 'react'
import styles from './LearningCenterFeaturedAndLatest.module.scss'
import ILearningCenterFeaturedAndLatest from './LearningCenterFeaturedAndLatest.interface'
import { LearningCenterInterface } from 'framework/wordpress/interfaces/learning-center'
import { Category } from 'framework/wordpress/interfaces/post'
import ArticleTeaser from '@components/ui/ArticleTeaser/ArticleTeaser'
import { useIsMobile } from '@commerce/utils/hooks'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import Translations from 'constants/translations'

const LearningCenterFeaturedAndLatestModule: FunctionComponent<{
  module: ILearningCenterFeaturedAndLatest
  latestPosts: LearningCenterInterface[]
  categories: Category[]
}> = ({ module, latestPosts, categories }) => {
  console.log(module, latestPosts)

  const { featuredArticles, featuredStoriesHeadline, latestStoriesHeadline } =
    module
  const featuredIds = featuredArticles.map((a) => a.article.id)

  const isMobile = useIsMobile()

  const latestPostsCount = isMobile ? 3 : 5
  const renderedLatestPosts = latestPosts
    .filter((p) => !featuredIds.includes(p.id))
    .slice(0, latestPostsCount)

  const otherFeaturedArticles = featuredArticles.slice(1, 3)
  // hardcoded article preview copy, need to replace when data is available
  const copy =
    'Grooming your own pets gives you control over the style and cut, and bonding time with your furry friends. A little dog...'
  return (
    <div className={`${styles.root} container`}>
      <div className="default-grid">
        {featuredStoriesHeadline && (
          <div className={styles.featuredStoriesHeadline}>
            <h4>{featuredStoriesHeadline}</h4>
          </div>
        )}
        <div className={styles.mainFeaturedArticleContainer}>
          <ArticleTeaser
            className="mt-40 pb-45 light-border-b"
            post={module.featuredArticles[0].article}
            textSize="large"
          />
        </div>
        {otherFeaturedArticles.map((a) => {
          return (
            <div key={a.article.id} className={styles.otherFeaturedArticle}>
              <div className={styles.postTitle}>{a.article.title}</div>
              <div className={styles.postCopy}>{copy}</div>
              <ArrowCTA orientation="right" color="blue" href={a.article.uri}>
                {Translations.LEARN_MORE}
              </ArrowCTA>
            </div>
          )
        })}
        <div className={styles.latestStoriesContainer}>
          {latestStoriesHeadline && (
            <div className={styles.latestStoriesHeadline}>
              <h4>{latestStoriesHeadline}</h4>
            </div>
          )}
          {renderedLatestPosts.map((p) => {
            return (
              <div key={p.id} className={styles.latestPost}>
                <div className={styles.postTitle}>{p.title}</div>
                <div className={styles.postCopy}>{copy}</div>
                <ArrowCTA orientation="right" color="blue" href={p.uri}>
                  {Translations.LEARN_MORE}
                </ArrowCTA>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LearningCenterFeaturedAndLatestModule
