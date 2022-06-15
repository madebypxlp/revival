import React, { FunctionComponent } from 'react'
import c from 'classnames'
import styles from './LightHero.module.scss'
import ILightHero from './LightHero.interface'

const LightHeroModule: FunctionComponent<{ module: ILightHero }> = ({
  module,
}) => {
  const { headline, subline } = module
  return (
    <div className={`${styles.root} container`}>
      <div className={c(styles.headline)}>{headline}</div>
      <div className={c(styles.subline)}>{subline}</div>
    </div>
  )
}

export default LightHeroModule
