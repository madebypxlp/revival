import React, { FunctionComponent } from 'react'
import ImageComponent from '@components/ui/Image/Image'
import styles from './ClassicHero.module.scss'
import IClassicHero from './ClassicHero.interface'

const ClassicHeroModule: FunctionComponent<{ module: IClassicHero }> = ({
  module,
}) => {
  const { subline, headline, copy, image } = module
  return (
    <div className={`${styles.root}`}>
      <div className={styles.backgroundContainer}>
        <ImageComponent className="h-full" image={image} layout="fill" />
      </div>
      <div className="container default-grid">
        <div className={styles.sublineContainer}>
          {subline && <span>{subline}</span>}
        </div>
        <div className={styles.headlineContainer}>
          {headline && <h2>{headline}</h2>}
        </div>
        <div className={styles.copyContainer}>
          {copy && <span>{copy}</span>}
        </div>
      </div>
    </div>
  )
}

export default ClassicHeroModule
