import React, { FunctionComponent } from 'react'
import styles from './CartProduct.module.scss'
import c from 'classnames'
import ICartProduct from './CartProduct.interface'
import ProductCardImage from '../ProductCardImage/ProductCardImage'
import Link from '../Link/Link'
import { Minus, Plus } from '@components/icons'
import { useIsMobile } from '@commerce/utils/hooks'

const CartProduct: FunctionComponent<ICartProduct> = (props) => {
  const { product, showCartControls, variant, quantity } = props
  const formatPrice = (price: number): string => {
    return '$' + price.toFixed(2)
  }

  const isMobile = useIsMobile()
  return (
    <div className={c(styles.root, styles[`variant--${variant}`], 'grid')}>
      <div className={styles.productImageContainer}>
        <ProductCardImage image={product.image} variant={'cart'} />
      </div>
      {isMobile && (
        <div className={styles.mobilePriceContainer}>
          <div className={styles.productPrice}>
            {formatPrice(product.price)}
          </div>

          <div className={styles.productOldPrice}>
            {product.oldPrice && formatPrice(product.oldPrice)}
          </div>
        </div>
      )}
      <div className={styles.infoContainer}>
        <div className={styles.row}>
          <div>
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productId}>{product.id}</div>
          </div>
          {!isMobile && (
            <div>
              <div className={styles.productPrice}>
                {formatPrice(product.price)}
              </div>

              <div className={styles.productOldPrice}>
                {product.oldPrice && formatPrice(product.oldPrice)}
              </div>
            </div>
          )}
        </div>
        {showCartControls && (
          <div className={c(styles.row, 'items-center')}>
            <div>
              <div className={styles.cartProductQuantityControls}>
                <div>-</div>
                <div>{quantity}</div>
                <div>+</div>
              </div>
            </div>
            <div className={styles.controlLinksContainer}>
              <Link color={'black'} href={'/'}>
                Remove
              </Link>
              <Link color={'black'} href={'/'}>
                Edit
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartProduct
