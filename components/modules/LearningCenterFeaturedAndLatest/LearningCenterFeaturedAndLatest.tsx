import React, { FunctionComponent } from 'react'
import styles from './LearningCenterFeaturedAndLatest.module.scss'
import ILearningCenterFeaturedAndLatest from './LearningCenterFeaturedAndLatest.interface'
import { LearningCenterInterface } from 'framework/wordpress/interfaces/learning-center'D
import { Category } from 'framework/wordpress/interfaces/post'

import ArticleTeaser from '@components/ui/ArticleTeaser/ArticleTeaser'

const LearningCenterFeaturedAndLatestModule: FunctionComponent<{
  module: ILearningCenterFeaturedAndLatest
  latestPosts: LearningCenterInterface[]
  categories: Category[]
}> = ({ module, latestPosts }) => {
  console.log(module, latestPosts)
  return (
    <div className={`${styles.root} container`}>
      Learningcenterfeaturedandlatest Module
      <div className="default-grid">
        <div className="col-span-6">
          <ArticleTeaser
            className="my-40"
            post={module.featuredArticles[0].article}
            textSize="large"
          />
        </div>
      </div>
    </div>
  )
}

export default LearningCenterFeaturedAndLatestModule
