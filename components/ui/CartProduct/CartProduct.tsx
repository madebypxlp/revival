import React, { FunctionComponent } from 'react'
import c from 'classnames'
import { useIsMobile } from '@commerce/utils/hooks'
import PrescriptionIcon from '@components/icons/PrescriptionIcon'
import Translations from 'constants/translations'
import AlertIcon from '@components/icons/AlertIcon'
import { formatPrice } from '@lib/utils'
import Button from '../Button/Button'
import Link from '../Link/Link'
import ProductCardImage from '../ProductCardImage/ProductCardImage'
import ICartProduct from './CartProduct.interface'
import styles from './CartProduct.module.scss'

const CartProduct: FunctionComponent<ICartProduct> = (props) => {
  const {
    product,
    showCartControls,
    variant,
    className,
    quantity,
    showPrescriptionIcon,
    showPrescriptionLabel,
    showPrescriptionExtraInfo,
    showBuyItAgain,
    showAddToCart,
    showPlaceNewOrder,
    rightColumn = 'price',
    shippingRestrictionsMessage,
    vetInfo,
  } = props

  console.log(quantity)

  const isMobile = useIsMobile()

  let rightColumnComponent
  if (rightColumn === 'price') {
    rightColumnComponent = (
      <div
        className={c(
          isMobile && styles.mobilePriceContainer,
          styles.rightColumnContainer
        )}
      >
        <div className={styles.productPrice}>{formatPrice(product.price)}</div>

        <div className={styles.productOldPrice}>
          {product.oldPrice && formatPrice(product.oldPrice)}
        </div>
      </div>
    )
  }
  if (rightColumn === 'edit-details') {
    rightColumnComponent = (
      <div className={styles.rightColumnContainer}>
        <Button color="yellow" variant="large" type="default">
          {Translations.PET_AND_VET.EDIT_DETAILS}
        </Button>
      </div>
    )
  }

  const rootClasses = c(
    styles.root,
    styles[`variant--${variant}`],
    'grid',
    className
  )

  return (
    <div className={rootClasses}>
      <div className={styles.productImageContainer}>
        <ProductCardImage
          isPrescription={showPrescriptionIcon && product.isPrescription}
          imageUrl={product.image.url}
          variant={variant}
        />
      </div>
      {isMobile && rightColumn !== 'empty' && rightColumnComponent}
      <div className={styles.infoContainer}>
        <div className={styles.productNameContainer}>
          <div className={styles.productName}>{product.name}</div>
          <div className={styles.productId}>{product.id}</div>
        </div>
        {!isMobile && rightColumn !== 'empty' && rightColumnComponent}
        {shippingRestrictionsMessage && (
          <div className={styles.alertTextContainer}>
            <AlertIcon />
            <span>{shippingRestrictionsMessage}</span>
          </div>
        )}
        {showPrescriptionLabel && product.isPrescription && (
          <div
            className={c(
              styles.alertTextContainer,
              showPrescriptionExtraInfo && styles.extraInfo
            )}
          >
            <PrescriptionIcon />
            {showPrescriptionExtraInfo ? (
              <span>
                <ul className={styles.prescriptionInfoList}>
                  <li>{Translations.PRESCRIPTIONS.AVAILABILITY}</li>
                  <li>{Translations.PRESCRIPTIONS.RETURNS}</li>
                </ul>
              </span>
            ) : (
              <span>{Translations.PRESCRIPTIONS.PRESCRIPTION_ITEM}</span>
            )}
          </div>
        )}
        {showAddToCart && (
          <div className={styles.addToCartContainer}>
            <Button color="yellow" variant="large" type="default">
              {Translations.PRODUCT.ADD_TO_CART}
            </Button>
          </div>
        )}
        {showBuyItAgain && (
          <div className={styles.buyItAgainContainer}>
            <Button color="yellow" variant="large" type="default">
              {Translations.BUY_ITEM_AGAIN}
            </Button>
          </div>
        )}
        {vetInfo && (
          <div className={styles.vetAndPetInfo}>
            {vetInfo.info.map((v) => (
              <div className={styles.vetAndPetRow} key={v.vet + v.pet}>
                <div
                  className={c(styles.title, styles.vet)}
                >{`${Translations.PET_AND_VET.VET}`}</div>
                <div
                  className={c(styles.title, styles.pet)}
                >{`${Translations.PET_AND_VET.PET}`}</div>
                <div
                  className={c(styles.title, styles.qty)}
                >{`${Translations.PET_AND_VET.QTY}`}</div>
                <div className={styles.vet}>{v.vet}</div>
                <div className={styles.pet}>{v.pet}</div>
                <div className={styles.qty}>{v.quantity}</div>
              </div>
            ))}
          </div>
        )}
        {showCartControls && (
          <>
            <div className={styles.cartProductQuantityControls}>
              <div>
                <div>-</div>
                <div>{quantity}</div>
                <div>+</div>
              </div>
            </div>
            <div className={styles.controlLinksContainer}>
              <Link color="black" href="/">
                Remove
              </Link>
              <Link color="black" href="/">
                Edit
              </Link>
            </div>
          </>
        )}
      </div>
      {vetInfo && (
        <div className={styles.approvalMethodContainer}>
          <span>{`${Translations.PET_AND_VET.APPROVAL_METHOD}: `}</span>
          <div>{vetInfo.approvalMethod}</div>
        </div>
      )}
      {showPlaceNewOrder && (
        <div className={styles.placeNewOrderContainer}>
          <Button color="yellow" variant="large" type="default">
            {Translations.PRODUCT.PLACE_NEW_ORDER}
          </Button>
        </div>
      )}
    </div>
  )
}

export default CartProduct
