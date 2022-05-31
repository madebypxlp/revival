import React, { FunctionComponent } from 'react'
import styles from './ImageWithInfos.module.scss'
import IImageWithInfos from './ImageWithInfos.interface'

const ImageWithInfosModule:FunctionComponent<{ module: IImageWithInfos }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Imagewithinfos Module
      {console.log(module)}
    </div>
  )
}

export default ImageWithInfosModule
