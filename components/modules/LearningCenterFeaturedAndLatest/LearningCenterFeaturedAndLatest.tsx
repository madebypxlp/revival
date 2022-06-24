import React, { FunctionComponent } from 'react'
import styles from './LearningCenterFeaturedAndLatest.module.scss'
import ILearningCenterFeaturedAndLatest from './LearningCenterFeaturedAndLatest.interface'
import { LearningCenterInterface } from 'framework/wordpress/interfaces/learning-center'
import { Category } from 'framework/wordpress/interfaces/post'

const LearningCenterFeaturedAndLatestModule: FunctionComponent<{
  module: ILearningCenterFeaturedAndLatest
  latestPosts: LearningCenterInterface[]
  categories: Category[]
}> = ({ module, latestPosts }) => {
  console.log(module, latestPosts)
  return (
    <div className={`${styles.root} container`}>
      Learningcenterfeaturedandlatest Module
    </div>
  )
}

export default LearningCenterFeaturedAndLatestModule
