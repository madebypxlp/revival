import React, { FunctionComponent } from 'react'
import styles from './ArticleTeaserSmall.module.scss'
import IArticleTeaserSmall from './ArticleTeaserSmall.interface'
import ArrowCTA from '../ArrowCTA/ArrowCTA'
import c from 'classnames'
import Translations from 'constants/translations'
import Image from 'next/image'

const ArticleTeaserSmall: FunctionComponent<IArticleTeaserSmall> = (props) => {
  const { article, variant } = props
  const copy =
    'Grooming your own pets gives you control over the style and cut, and bonding time with your furry friends. A little dog clipper maintenance can go a long way to make the grooming process easier and more comfortable…'

  return (
    <div
      className={c(
        styles.root,
        styles['variant-' + variant],
        'article-teaser-small'
      )}
    >
      <div className={styles.leftColumnContainer}>
        <h4 className="typo-h6 text-blue mb-10">{article.title}</h4>
        <p className="typo-small-paragraph mb-10">{copy}</p>
        <ArrowCTA href={article.uri} orientation="right" color="blue">
          {Translations.LEARN_MORE}
        </ArrowCTA>
      </div>

      <div className={styles.imageContainer}>
        <Image
          className="rounded-15"
          width="217"
          height="140"
          src={article.featuredImage.node.sourceUrl}
          alt={article.featuredImage.node.altText}
        />
      </div>
    </div>
  )
}

export default ArticleTeaserSmall
