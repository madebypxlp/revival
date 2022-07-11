import React, { FunctionComponent } from 'react'
import { PostInterface } from 'framework/wordpress/interfaces/post'
import ArticleTeaser from '@components/ui/ArticleTeaser/ArticleTeaser'
import styles from './MorePosts.module.scss'
import IMoreArticles from '../MoreArticles/MoreArticles.interface'

const MorePostsModule: FunctionComponent<{
  module: IMoreArticles
  data: PostInterface[]
  currentId: string
}> = ({ module, data, currentId }) => {
  const { headline } = module
  const morePosts = data.filter((p) => p.id !== currentId).slice(0, 3)

  return (
    <div className={`${styles.root} container`}>
      <div className="default-grid">
        {headline && (
          <h4 className="mb-40 text-blue col-span-2 md:col-span-8;">
            {headline}
          </h4>
        )}
      </div>

      <div className="default-grid">
        {morePosts.map((p) => (
          <ArticleTeaser
            post={p}
            key={p.id}
            className="col-span-4 mb-40 md:mb-80"
          />
        ))}
      </div>
    </div>
  )
}

export default MorePostsModule
