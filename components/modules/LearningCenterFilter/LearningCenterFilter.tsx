import React, { FunctionComponent } from 'react'
import styles from './LearningCenterFilter.module.scss'
import { useRouter } from 'next/router'
import { Category } from 'framework/wordpress/interfaces/post'
import { LearningCenterInterface } from 'framework/wordpress/interfaces/learning-center'

const LearningCenterFilterModule: FunctionComponent<{
  categories: Category[]
  contentTypes: Category[]
  posts: LearningCenterInterface[]
  activeCategory?: Category
}> = ({ categories, contentTypes, posts, activeCategory }) => {
  console.log(categories, contentTypes, posts, activeCategory)
  return (
    <div className={`${styles.root} container`}>
      Learningcenterfilter Module
    </div>
  )
}

export default LearningCenterFilterModule
