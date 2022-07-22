import React, { FunctionComponent, useState } from 'react'
import c from 'classnames'
import { useRouter } from 'next/router'
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
    label,
    isOurBrand,
    isNew,
    isPrescription,
    isFavorite,
    showFavoriteIcon,
    type = 'default',
  } = props
  const router = useRouter()
  const { openSidebar } = useUI()
  const addItem = useAddItem()
  const [loading, setLoading] = useState(false)

  const {
    name,
    price,
    salePrice,
    retailPrice,
    sku,
    brand,
    variants,
    custom_url,
  } = product

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
    }
  }

  const goToPDP = () => {
    if (custom_url?.url) {
      router.push(`/product/${custom_url.url}`)
    }
  }

  const isCardVariant = type === 'cart' && variants.length > 1
  return (
    <div className={styles.root}>
      {loading && <LoadingDots portal />}
      <ProductCardImage
        isNew={isNew}
        isPrescription={isPrescription}
        label={label}
        images={product.images}
        isOurBrand={
          isOurBrand && brand?.name?.toLowerCase().includes('revival')
        }
        isFavorite={isFavorite}
        showFavoriteIcon={showFavoriteIcon}
      />
      <div className={c(styles.infoContainer, 'my-15 gap-x-15')}>
        <div>
          <div className={styles.productName}>{name}</div>
          <div className={styles.productId}>#{sku}</div>
        </div>
        {!isCardVariant && (
          <div>
            <div className={styles.productPrice}>
              {formatPrice(salePrice || retailPrice || price)}
            </div>
            {salePrice && (
              <div className={styles.productOldPrice}>
                {formatPrice(retailPrice || price)}
              </div>
            )}
          </div>
        )}
      </div>
      <div className={styles.addToCartButtonContainer}>
        <Button
          className={styles.addToCartButton}
          color={isCardVariant ? 'blue' : 'yellow'}
          variant="large"
          type="default"
          outline={isCardVariant}
          onClick={isCardVariant ? goToPDP : addToCart}
        >
          {isCardVariant
            ? Translations.PRODUCT.SEE_OPTIONS
            : Translations.PRODUCT.ADD_TO_CART}
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
