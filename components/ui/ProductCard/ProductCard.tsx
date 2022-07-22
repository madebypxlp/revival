import React, { FunctionComponent } from 'react'
import c from 'classnames'
import Translations from 'constants/translations'
import { formatPrice } from '@lib/utils'
import styles from './ProductCard.module.scss'
import IProductCard from './ProductCard.interface'
import Button from '../Button/Button'
import ProductCardImage from '../ProductCardImage/ProductCardImage'

const ProductCard: FunctionComponent<IProductCard> = (props) => {
  const {
    isOurBrand,
    label,
    name,
    id,
    price,
    oldPrice,
    isNew,
    isPrescription,
    isFavorite,
    showFavoriteIcon,
    imageURL,
  } = props

  return (
    <div className={styles.root}>
      <ProductCardImage
        isNew={isNew}
        isPrescription={isPrescription}
        label={label}
        imageUrl={imageURL}
        isOurBrand={isOurBrand}
        isFavorite={isFavorite}
        showFavoriteIcon={showFavoriteIcon}
      />
      <div className={c(styles.infoContainer, 'my-15 gap-x-15')}>
        <div>
          <div className={styles.productName}>{name}</div>
          <div className={styles.productId}>{id}</div>
        </div>
        <div>
          <div className={styles.productPrice}>
            {price && formatPrice(price)}
          </div>

          <div className={styles.productOldPrice}>
            {oldPrice && formatPrice(oldPrice)}
          </div>
        </div>
      </div>
      <div className={styles.addToCartButtonContainer}>
        <Button
          className={styles.addToCartButton}
          color="yellow"
          variant="large"
          type="default"
        >
          {Translations.PRODUCT.ADD_TO_CART}
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
