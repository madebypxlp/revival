import React, { FunctionComponent } from 'react'
import c from 'classnames'
import Image from 'next/image'
import Button from '@components/ui/Button/Button'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import { useIsMobile } from '@commerce/utils/hooks'
import Translations from 'constants/translations'
import IResourceGrid from './ResourceGrid.interface'
import styles from './ResourceGrid.module.scss'

const ResourceGridModule: FunctionComponent<{ module: IResourceGrid }> = ({
  module,
}) => {
  const { headline, link, featuredResource, latestLearningCenterPosts } = module

  const isMobile = useIsMobile()

  // receive 4 posts, have to render the first 3 which are different from the featuredResource
  const renderedPosts = latestLearningCenterPosts.nodes
    .filter((p) => p.id !== featuredResource.id)
    .slice(0, 3)

  return (
    <div className={c(styles.root, { [styles.mobile]: isMobile })}>
      <div className={styles.headlineContainer}>
        {headline && <h4>{headline}</h4>}
      </div>
      {link && (
        <ArrowCTA
          className={styles.allResourcesLink}
          orientation="right"
          color="blue"
          href={link.url}
        >
          {link.title}
        </ArrowCTA>
      )}
      <div className={styles.resourcesContainer}>
        <div className={styles.featuredResource}>
          <Image
            className={styles.featuredImage}
            layout="fill"
            objectFit="cover"
            alt={featuredResource.featuredImage.node.altText}
            src={featuredResource.featuredImage.node.sourceUrl}
          />
          <div>
            <h3>{featuredResource.title}</h3>
            <Button
              color="yellow"
              variant="small"
              type="default"
              href={featuredResource.uri}
            >
              {Translations.READ_MORE}
            </Button>
          </div>
        </div>
        {renderedPosts.map((post) => (
          <div key={post.id} className={styles.postContainer}>
            <div className={styles.postLeftText}>
              <h5>{post.title}</h5>
              <ArrowCTA
                orientation="right"
                color={`${isMobile ? 'black' : 'blue'}`}
                href={post.uri}
              >
                {Translations.READ_MORE}
              </ArrowCTA>
            </div>
            <div className={styles.postImageContainer}>
              <Image
                layout="fill"
                objectFit="cover"
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResourceGridModule
