import React, { FunctionComponent } from 'react'
import styles from './MorePosts.module.scss'
import IMoreArticles from '../MoreArticles/MoreArticles.interface'
import { PostInterface } from 'framework/wordpress/interfaces/post'
import Image from 'next/image'
import Button from '@components/ui/Button/Button'
import Translations from '../../../constants/translations'

const MorePostsModule: FunctionComponent<{
  module: IMoreArticles
  data: PostInterface[]
  currentId: string
}> = ({ module, data, currentId }) => {
  const { headline } = module
  const morePosts = data.filter((p) => p.id !== currentId).slice(0, 3)
  const postCopy =
    'Grooming your own pets gives you control over the style and cut, and bonding time with your furry friends. A little dog clipper maintenance can go a long way to make the grooming process easier and more comfortable…'

  return (
    <div className={`${styles.root} container default-grid`}>
      <div className={styles.headlineContainer}>
        {headline && <h4>{headline}</h4>}
      </div>
      <div className={styles.postsContainer}>
        {morePosts.map((p) => {
          const categories = p.categories.nodes.map((c) => c.name)
          const tags = p.tags.nodes.map((t) => t.name)
          const classes = categories.concat(tags).join(' • ')
          return (
            <React.Fragment key={p.id}>
              <div className={styles.postFeaturedImage}>
                <Image
                  src={p.featuredImage.node.sourceUrl}
                  layout={'fill'}
                  objectFit={'cover'}
                />
              </div>
              <div className={styles.postClasses}>
                {classes && <span>{classes}</span>}
              </div>
              <div className={styles.postTitle}>
                {p.title && <h5>{p.title}</h5>}
              </div>
              <div className={styles.postCopy}>
                {postCopy && <span>{postCopy}</span>}
              </div>
              <div className={styles.postCTAContainer}>
                <Button
                  color="yellow"
                  variant="large"
                  type="default"
                  href={p.uri}
                >
                  {Translations.READ_MORE}
                </Button>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default MorePostsModule
