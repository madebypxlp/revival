import React, { FunctionComponent } from 'react'
import styles from './CartProduct.module.scss'
import c from 'classnames'
import ICartProduct from './CartProduct.interface'
import ProductCardImage from '../ProductCardImage/ProductCardImage'

const CartProduct: FunctionComponent<ICartProduct> = (props) => {
  const { product, showCartControls, variant } = props

  const formatPrice = (price: number): string => {
    return '$' + price.toFixed(2)
  }
  return (
    <div
      className={c(
        styles.root,
        styles[`variant--${variant}`],
        'grid grid-cols-8 gap-x-20'
      )}
    >
      <div className={styles.productImageContainer}>
        <ProductCardImage image={product.image} variant={'cart'} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.row}>
          <div>
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productId}>{product.id}</div>
          </div>
          <div>
            <div className={styles.productPrice}>
              {formatPrice(product.price)}
            </div>

            <div className={styles.productOldPrice}>
              {product.oldPrice && formatPrice(product.oldPrice)}
            </div>
          </div>
        </div>
        {showCartControls && (
          <div className={styles.row}>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartProduct
