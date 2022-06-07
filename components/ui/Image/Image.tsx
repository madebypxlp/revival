import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import IImage from './Image.interface'
import styles from './Image.module.scss'
import { useIsMobile } from '@commerce/utils/hooks'

const ImageComponent: FunctionComponent<IImage> = ({
  image,
  className = '',
  width = undefined,
  height = undefined,
}) => {
  const isMobile = useIsMobile()

  return (
    <div className={`${styles.root}`}>
      {isMobile && image.mobileImage ? (
        <Image
          className={className}
          width={width || image.mobileImage.mediaDetails.width}
          height={height || image.mobileImage.mediaDetails.height}
          layout="responsive"
          src={image.mobileImage.sourceUrl}
        />
      ) : (
        <Image
          className={className}
          width={width || image.desktopImage.mediaDetails.width}
          height={height || image.desktopImage.mediaDetails.height}
          layout="responsive"
          src={image.desktopImage.sourceUrl}
        />
      )}
    </div>
  )
}

export default ImageComponent
