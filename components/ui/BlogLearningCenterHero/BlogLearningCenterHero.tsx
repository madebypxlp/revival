import React, { FunctionComponent } from 'react'
import styles from './BlogLearningCenterHero.module.scss'
import IBlogLearningCenterHero from './BlogLearningCenterHero.interface'
import { LearningCenterInterface } from 'framework/wordpress/interfaces/learning-center'
import { PostInterface } from 'framework/wordpress/interfaces/post'

const BlogLearningCenterHero: FunctionComponent<
  LearningCenterInterface | PostInterface
> = (props) => {
  console.log(props)
  return <div className={`${styles.root}`}>Bloglearningcenterhero</div>
}

export default BlogLearningCenterHero
