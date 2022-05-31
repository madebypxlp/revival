import React, { FunctionComponent } from 'react'
import styles from './VideoHero.module.scss'
import IVideoHero from './VideoHero.interface'

const VideoHeroModule:FunctionComponent<{ module: IVideoHero }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Videohero Module
    </div>
  )
}

export default VideoHeroModule
