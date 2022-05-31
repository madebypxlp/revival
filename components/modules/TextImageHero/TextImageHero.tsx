import React, { FunctionComponent } from 'react'
import styles from './TextImageHero.module.scss'
import ITextImageHero from './TextImageHero.interface'

const TextImageHeroModule:FunctionComponent<{ module: ITextImageHero }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Textimagehero Module
    </div>
  )
}

export default TextImageHeroModule
