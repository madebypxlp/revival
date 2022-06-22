import React, { FunctionComponent } from 'react'
import styles from './MorePosts.module.scss'
import IMoreArticles from '../MoreArticles/MoreArticles.interface'
import { PostInterface } from 'framework/wordpress/interfaces/post'

const MorePostsModule: FunctionComponent<{
  module: IMoreArticles
  data: PostInterface[]
  currentId: string
}> = ({ module, data, currentId }) => {
  console.log(module, data, currentId)

  //  TODO: FILTER OUT CURRENT ARTICLE IF IN DATA
  return <div className={`${styles.root} container`}>MorePostsModule</div>
}

export default MorePostsModule
