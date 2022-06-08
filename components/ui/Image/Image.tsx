import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { IImage } from './Image.interface'
import styles from './Image.module.scss'
import { useIsMobile } from '@commerce/utils/hooks'

const ImageComponent: FunctionComponent<IImage> = ({
  image,
  className = '',
  imgClassName = '',
  width = undefined,
  height = undefined,
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
      <Image
        className={imgClassName}
        width={
          layout === 'fill' ? undefined : width || img().mediaDetails.width
        }
        height={
          layout === 'fill' ? undefined : height || img().mediaDetails.height
        }
        layout={layout}
        src={img().sourceUrl}
      />
    </div>
  )
}

export default ImageComponent
