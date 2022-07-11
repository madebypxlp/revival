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
  loading = 'lazy',
  objectFit,
  objectPosition,
}) => {
  const isMobile = useIsMobile()
  const isTablet = useIsMobile(false, 'lg')
  const img = () => {
    if (isMobile && image?.mobileImage) return image.mobileImage
    if (isTablet && image?.tabletImage) return image.tabletImage
    return image.desktopImage
  }
  return (
    <div className={`${styles.root} ${className}`}>
      {layout === 'fill' ? (
        <Image
          className={imgClassName}
          layout="fill"
          loading={loading}
          src={img().sourceUrl}
          objectFit={objectFit}
          objectPosition={objectPosition}
        />
      ) : (
        <Image
          className={imgClassName}
          width={img().mediaDetails.width}
          height={img().mediaDetails.height}
          layout={layout}
          loading={loading}
          src={img().sourceUrl}
        />
      )}
    </div>
  )
}

export default ImageComponent
