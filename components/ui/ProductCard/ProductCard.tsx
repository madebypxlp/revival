import React, { FunctionComponent } from 'react'
import c from 'classnames'
import styles from './ProductCard.module.scss'
import IProductCard from './ProductCard.interface'
import ImageComponent from '../Image/Image'
import Button from '../Button/Button'
import Translations from 'constants/translations'
import PrescriptionIcon from '@components/icons/PrescriptionIcon'

const ProductCard: FunctionComponent<IProductCard> = (props) => {
  const {
    isOurBrand,
    label,
    image,
    name,
    id,
    price,
    oldPrice,
    isNew,
    isPrescription,
  } = props

  // todo: move to utils
  const formatPrice = (price: number): string => {
    return '$' + price.toFixed(2)
  }
  return (
    <div className={styles.root}>
      <div className={styles.imageTopSquare}>
        <div className={styles.imageContainer}>
          <ImageComponent image={image} layout={'fill'} objectFit={'contain'} />
        </div>
        <div className={'flex flex-col justify-between h-full'}>
          <div className={styles.row}>
            <div className={styles.newButtonContainer}>
              {isNew && (
                <Button outline color="blue" variant="small" type="default">
                  {Translations.PRODUCT.NEW}
                </Button>
              )}
            </div>
            <div className={styles.prescriptionIconContainer}>
              {isPrescription && <PrescriptionIcon />}
            </div>
          </div>
          <div className={'flex flex-col items-start gap-5'}>
            {isOurBrand && (
              <Button
                color="blue"
                variant="small"
                type="default"
                className={c(styles.productLabel)}
              >
                {Translations.PRODUCT.OUR_BRANDS}
              </Button>
            )}
            {label && (
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
      <div className={c(styles.row, 'mb-15 gap-x-15')}>
        <div>
          <div className={styles.productName}>{name}</div>
          <div className={styles.productId}>{id}</div>
        </div>
        <div>
          <div className={styles.productPrice}>{formatPrice(price)}</div>

          <div className={styles.productOldPrice}>
            {oldPrice && formatPrice(oldPrice)}
          </div>
        </div>
      </div>
      <Button color="yellow" variant="large" type="default">
        {Translations.PRODUCT.ADD_TO_CART}
      </Button>
    </div>
  )
}

export default ProductCard
