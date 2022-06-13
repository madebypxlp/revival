import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { IImage } from './Image.interface'
import styles from './Image.module.scss'
import { useIsMobile } from '@commerce/utils/hooks'

const ImageComponent: FunctionComponent<IImage> = ({
  image,
  className = '',
  imgClassName = '',
  layout = 'responsive',
}) => {
  const isMobile = useIsMobile()
  const img = () => {
    return isMobile && image.mobileImage
      ? image.mobileImage
      : image.desktopImage
  }
  return (
    <div className={`${styles.root} ${className}`}>
      {layout === 'fill' ? (
        <Image className={imgClassName} layout="fill" src={img().sourceUrl} />
      ) : (
        <Image
          className={imgClassName}
          width={img().mediaDetails.width}
          height={img().mediaDetails.height}
          layout={layout}
          src={img().sourceUrl}
        />
      )}
    </div>
  )
}

export default ImageComponent
