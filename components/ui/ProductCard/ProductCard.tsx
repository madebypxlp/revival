import React, { FunctionComponent } from 'react'
import c from 'classnames'
import styles from './ProductCard.module.scss'
import IProductCard from './ProductCard.interface'
import ImageComponent from '../Image/Image'
import Button from '../Button/Button'
import Translations from 'constants/translations'
import PrescriptionIcon from '@components/icons/PrescriptionIcon'
import ProductCardImage from '../ProductCardImage/ProductCardImage'

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
    isFavorite,
    showFavoriteIcon,
  } = props

  // todo: move to utils
  const formatPrice = (price: number): string => {
    return '$' + price.toFixed(2)
  }
  return (
    <div className={styles.root}>
      <ProductCardImage
        isNew={isNew}
        isPrescription={isPrescription}
        label={label}
        image={image}
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
          <div className={styles.productPrice}>{formatPrice(price)}</div>

          <div className={styles.productOldPrice}>
            {oldPrice && formatPrice(oldPrice)}
          </div>
        </div>
      </div>
      <Button
        className={styles.addToCartButton}
        color="yellow"
        variant="large"
        type="default"
      >
        {Translations.PRODUCT.ADD_TO_CART}
      </Button>
    </div>
  )
}

export default ProductCard