import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import IImage from './Image.interface'
import styles from './Image.module.scss'

const ImageComponent: FunctionComponent<IImage> = ({ image }) => {
  return (
    <div className={`${styles.root}`}>
      <Image layout="fill" src={image.desktopImage.sourceUrl} />
    </div>
  )
}

export default ImageComponent
