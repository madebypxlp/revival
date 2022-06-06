import React, { FunctionComponent } from 'react'
import styles from './HeroCarousel.module.scss'
import IHeroCarousel from './HeroCarousel.interface'
import Image from '@components/ui/Image/Image'
import Tag from '@components/ui/Tag/Tag'

const HeroCarouselModule: FunctionComponent<{ module: IHeroCarousel }> = ({
  module,
}) => {
  console.log(module)
  return (
    <div className={`${styles.root} container`}>
      <h1>Herocarousel Module</h1>
      <Tag label="Hello World" variant="blue-filled" />
      <Tag label="Hello World" variant="blue-outline" />
      <Tag label="Hello World" variant="red-filled" />
      <Image image={module.carousel[0].image} />
    </div>
  )
}

export default HeroCarouselModule
