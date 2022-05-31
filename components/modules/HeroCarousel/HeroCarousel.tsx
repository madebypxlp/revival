import React, { FunctionComponent } from 'react'
import styles from './HeroCarousel.module.scss'
import IHeroCarousel from './HeroCarousel.interface'
import Image from '@components/ui/Image/Image'

const HeroCarouselModule: FunctionComponent<{ module: IHeroCarousel }> = ({
  module,
}) => {
  console.log(module)
  return (
    <div className={`${styles.root} container`}>
      Herocarousel Module
      {console.log(module)}
      <Image image={module.carousel[0].image} />
    </div>
  )
}

export default HeroCarouselModule
