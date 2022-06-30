import React, { FunctionComponent } from 'react'
import styles from './ArticleTeaser.module.scss'
import IArticleTeaser from './ArticleTeaser.interface'
import cn from 'classnames'

import Image from 'next/image'
import Button from '@components/ui/Button/Button'
import Translations from '../../../constants/translations'
import { Category } from 'framework/wordpress/interfaces/post'
import { LearningCenterContentType } from 'framework/wordpress/interfaces/learning-center'
import GradientOverlay from '../GradientOverlay/GradientOverlay'

const ArticleTeaser: FunctionComponent<IArticleTeaser> = (props) => {
  const {
    post,
    className,
    buttonLabel,
    variant = 'default',
    textSize = 'default',
    ...rest
  } = props
  const { featuredImage, title, uri } = post

  // TODO: add copy field to post type
  const copy =
    'Grooming your own pets gives you control over the style and cut, and bonding time with your furry friends. A little dog clipper maintenance can go a long way to make the grooming process easier and more comfortable…'

  // runtime checks to make sure categories or tags
  // exist on the passed in post object
  const categories =
    'categories' in post
      ? (post.categories.nodes as Category[])
          .filter((cat) => !['Uncategorized'].includes(cat.name))
          .map((c) => c.name)
      : []
  // prettier-ignore
  const tags = 'tags' in post
    ? post.tags.nodes.map((t) => t.name)
    : []
  const terms = categories.concat(tags).join(' • ')

  const contentTypes =
    'contentTypes' in post
      ? (post.contentTypes.nodes as LearningCenterContentType[])
      : []

  return (
    <div
      className={cn(
        styles.root,
        className,
        styles['variant-' + variant],
        styles['text-' + textSize],
        !!contentTypes?.length && styles.hasContentTypes
      )}
      {...rest}
    >
      <div className={styles.featuredImage}>
        {featuredImage?.node?.sourceUrl && (
          <GradientOverlay>
            <Image
              src={featuredImage.node.sourceUrl}
              layout={'fill'}
              objectFit={'cover'}
            />
          </GradientOverlay>
        )}
        {!!contentTypes?.length && (
          <div className={styles.contentTypes}>
            {contentTypes.map((ct) => {
              if (!ct?.learningCenterContentType?.image?.sourceUrl) return null
              return (
                <span key={ct.learningCenterContentType.image.sourceUrl}>
                  <Image
                    src={ct.learningCenterContentType.image.sourceUrl}
                    width={116}
                    height={116}
                  />
                </span>
              )
            })}
          </div>
        )}
      </div>
      <div className={styles.content}>
        {variant === 'featured' && (
          <span className={styles.eyebrow}>{Translations.LATEST_POST}</span>
        )}
        {terms && <div className={styles.terms}>{terms}</div>}
        {title && <h5 className={styles.title}>{title}</h5>}
        {copy && <div className={styles.copy}>{copy}</div>}
        <div className={styles.cta}>
          <Button color="yellow" variant="large" type="default" href={uri}>
            {buttonLabel || Translations.READ_MORE}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ArticleTeaser
