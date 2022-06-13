import React, { FunctionComponent } from 'react'
import styles from './VideoGrid.module.scss'
import IVideoGrid from './VideoGrid.interface'

const VideoGridModule:FunctionComponent<{ module: IVideoGrid }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Videogrid Module
    </div>
  )
}

export default VideoGridModule
