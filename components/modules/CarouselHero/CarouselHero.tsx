import React, { FunctionComponent } from 'react'
import styles from './CarouselHero.module.scss'
import ICarouselHero from './CarouselHero.interface'

const CarouselHeroModule:FunctionComponent<{ module: ICarouselHero }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Carouselhero Module
    </div>
  )
}

export default CarouselHeroModule
