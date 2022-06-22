import React, { FunctionComponent } from 'react'
import styles from './MoreArticles.module.scss'
import IMoreArticles from './MoreArticles.interface'
import { LearningCenterInterface } from 'framework/wordpress/interfaces/learning-center'
import { PostInterface } from 'framework/wordpress/interfaces/post'

const MoreArticlesModule: FunctionComponent<{
  module: IMoreArticles
  data: LearningCenterInterface[] | PostInterface[]
  currentId: string
}> = ({ module, data, currentId }) => {
  console.log(module, data, currentId)

  //  TODO: FILTER OUT CURRENT ARTICLE IF IN DATA
  return <div className={`${styles.root} container`}>Morearticles Module</div>
}

export default MoreArticlesModule
