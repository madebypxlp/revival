import React, { FunctionComponent } from 'react'
import c from 'classnames'
import styles from './LightHero.module.scss'
import ILightHero from './LightHero.interface'

const LightHeroModule: FunctionComponent<{ module: ILightHero }> = ({
  module,
}) => {
  const { headline, subline, className } = module
  return (
    <div className={c(styles.root, className)}>
      <div className="container default-grid">
        <div className={c(styles.headlineContainer)}>
          {headline && <span>{headline}</span>}
        </div>
        <div className={c(styles.sublineContainer)}>
          {subline && <span>{subline}</span>}
        </div>
      </div>
    </div>
  )
}

export default LightHeroModule
