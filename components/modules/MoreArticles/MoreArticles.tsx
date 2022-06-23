import React, { FunctionComponent } from 'react'
import styles from './MoreArticles.module.scss'
import IMoreArticles from './MoreArticles.interface'
import { LearningCenterInterface } from 'framework/wordpress/interfaces/learning-center'

const MoreArticlesModule: FunctionComponent<{
  module: IMoreArticles
  data: LearningCenterInterface[]
  currentId: string
}> = ({ module, data, currentId }) => {
  console.log(module, data, currentId)
  z
  //  TODO: FILTER OUT CURRENT ARTICLE IF IN DATA
  return <div className={`${styles.root} container`}>Morearticles Module</div>
}

export default MoreArticlesModule
