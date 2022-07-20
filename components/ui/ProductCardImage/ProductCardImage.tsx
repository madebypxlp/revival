import React, { FunctionComponent } from 'react'
import c from 'classnames'
import Translations from 'constants/translations'
import Image from 'next/image'
import PrescriptionIcon from '@components/icons/PrescriptionIcon'
import { Heart } from '@components/icons'
import styles from './ProductCardImage.module.scss'
import IProductCardImage from './ProductCardImage.interface'
import Button from '../Button/Button'

const ProductCardImage: FunctionComponent<IProductCardImage> = (props) => {
  const {
    isNew,
    isPrescription,
    isOurBrand,
    label,
    imageUrl,
    variant,
    isFavorite,
    showFavoriteIcon,
  } = props

  return (
    <div className={c(styles.root, variant && styles[`variant--${variant}`])}>
      <div className={styles.imageContainer}>
        <div className="h-full relative">
          {imageUrl && (
            <Image src={imageUrl} alt="" layout="fill" objectFit="contain" />
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className={styles.row}>
          <div className={styles.newButtonContainer}>
            {!showFavoriteIcon && isNew && (
              <Button outline color="blue" variant="small" type="default">
                {Translations.PRODUCT.NEW}
              </Button>
            )}
          </div>
          <div className={styles.prescriptionIconContainer}>
            {showFavoriteIcon && (
              <Heart selected={isFavorite} onClick={(event: any) => {}} />
            )}
            {!showFavoriteIcon && isPrescription && <PrescriptionIcon />}
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          {isOurBrand && !showFavoriteIcon && (
            <Button
              color="blue"
              variant="small"
              type="default"
              className={c(styles.productLabel)}
            >
              {Translations.PRODUCT.OUR_BRANDS}
            </Button>
          )}
          {label && !showFavoriteIcon && (
            <Button
              color="red"
              variant="small"
              type="default"
              className={c(styles.productLabel)}
            >
              {label}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCardImage
