import React, { FunctionComponent } from 'react'
import ImageComponent from '@components/ui/Image/Image'
import parse from 'html-react-parser'
import styles from './ClassicHero.module.scss'
import IClassicHero from './ClassicHero.interface'

const ClassicHeroModule: FunctionComponent<{ module: IClassicHero }> = ({
  module,
}) => {
  const { subline, headline, copy, image } = module
  return (
    <div className={`${styles.root}`}>
      <div className={styles.backgroundContainer}>
        <ImageComponent
          className="h-full"
          image={image}
          imgClassName="object-cover object-right-bottom lg:object-right"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="container default-grid">
        <div className={styles.sublineContainer}>
          {subline && <span>{subline}</span>}
        </div>
        <div className={styles.headlineContainer}>
          {headline && (
            <h2 className={styles.headline}>
              {parse(headline.replace('®', '<span class="trademark">®</span>'))}
            </h2>
          )}
        </div>
        <div className={styles.copyContainer}>
          {copy && <span>{copy}</span>}
        </div>
      </div>
    </div>
  )
}

export default ClassicHeroModule
