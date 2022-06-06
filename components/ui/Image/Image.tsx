import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import IImage from './Image.interface'
import styles from './Image.module.scss'
import { useIsMobile } from '@commerce/utils/hooks'

const ImageComponent: FunctionComponent<IImage> = ({ image }) => {
  const isMobile = useIsMobile()
  return (
    <div className={`${styles.root}`}>
      {isMobile && image.mobileImage ? (
        <Image
          width={image.mobileImage.mediaDetails.width}
          height={image.mobileImage.mediaDetails.height}
          layout="responsive"
          src={image.mobileImage.sourceUrl}
        />
      ) : (
        <Image
          width={image.desktopImage.mediaDetails.width}
          height={image.desktopImage.mediaDetails.height}
          layout="responsive"
          src={image.desktopImage.sourceUrl}
        />
      )}
    </div>
  )
}

export default ImageComponent
