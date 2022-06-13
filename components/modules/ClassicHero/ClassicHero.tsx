import React, { FunctionComponent } from 'react'
import styles from './ClassicHero.module.scss'
import IClassicHero from './ClassicHero.interface'

const ClassicHeroModule:FunctionComponent<{ module: IClassicHero }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Classichero Module
    </div>
  )
}

export default ClassicHeroModule
