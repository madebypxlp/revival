import React, { FunctionComponent, useState } from 'react'
import c from 'classnames'
import Translations from 'constants/translations'
import { formatPrice } from '@lib/utils'
import { useAddItem } from '@framework/cart'
import styles from './ProductCard.module.scss'
import IProductCard from './ProductCard.interface'
import Button from '../Button/Button'
import ProductCardImage from '../ProductCardImage/ProductCardImage'
import { useUI } from '../context'
import LoadingDots from '../LoadingDots/LoadingDots'

const ProductCard: FunctionComponent<IProductCard> = (props) => {
  const {
    product,
    //  custom fields
    isOurBrand,
    label,
    isNew,
    isPrescription,
    isFavorite,
    showFavoriteIcon,
  } = props
  const { openSidebar } = useUI()
  const addItem = useAddItem()
  const [loading, setLoading] = useState(false)

  const { name, prices, price, sku } = product

  const defaultPrice = prices?.price?.value || price.value
  const retailPrice = prices?.retailPrice?.value
  const salePrice = prices?.salePrice?.value

  const addToCart = async () => {
    setLoading(true)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(product.variants[0].id),
      })
      setLoading(false)
      openSidebar()
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }
  return (
    <div className={styles.root}>
      {loading && <LoadingDots portal />}
      <ProductCardImage
        isNew={isNew}
        isPrescription={isPrescription}
        label={label}
        images={product.images}
        isOurBrand={isOurBrand}
        isFavorite={isFavorite}
        showFavoriteIcon={showFavoriteIcon}
      />
      <div className={c(styles.infoContainer, 'my-15 gap-x-15')}>
        <div>
          <div className={styles.productName}>{name}</div>
          <div className={styles.productId}>#{sku}</div>
        </div>
        <div>
          <div className={styles.productPrice}>
            {formatPrice(salePrice || defaultPrice)}
          </div>
          {salePrice && (
            <div className={styles.productOldPrice}>
              {formatPrice(retailPrice || defaultPrice)}
            </div>
          )}
        </div>
      </div>
      <div className={styles.addToCartButtonContainer}>
        <Button
          className={styles.addToCartButton}
          color="yellow"
          variant="large"
          type="default"
          onClick={addToCart}
        >
          {Translations.PRODUCT.ADD_TO_CART}
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
