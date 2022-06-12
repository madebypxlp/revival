import React, { FunctionComponent } from 'react'
import styles from './LightHero.module.scss'
import ILightHero from './LightHero.interface'

const LightHeroModule: FunctionComponent<{ module: ILightHero }> = ({
  module,
}) => {
  console.log(module)
  return <div className={`${styles.root} container`}>Lighthero Module</div>
}

export default LightHeroModule
