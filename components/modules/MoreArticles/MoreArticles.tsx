import React, { FunctionComponent } from 'react'
import styles from './MoreArticles.module.scss'
import IMoreArticles from './MoreArticles.interface'

const MoreArticlesModule: FunctionComponent<{
  module: IMoreArticles
  data: []
}> = ({ module, data }) => {
  console.log(module, data)
  return <div className={`${styles.root} container`}>Morearticles Module</div>
}

export default MoreArticlesModule
