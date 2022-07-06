import React, { FunctionComponent } from 'react'
import styles from './CartProduct.module.scss'
import c from 'classnames'
import ICartProduct from './CartProduct.interface'
import ProductCardImage from '../ProductCardImage/ProductCardImage'
import Link from '../Link/Link'
import { useIsMobile } from '@commerce/utils/hooks'
import PrescriptionIcon from '@components/icons/PrescriptionIcon'
import Translations from 'constants/translations'
import AlertIcon from '@components/icons/AlertIcon'
import Button from '../Button/Button'

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
    rightColumn = 'price',
    shippingRestrictionsMessage,
    vetInfo,
  } = props

  const formatPrice = (price: number): string => {
    return '$' + price.toFixed(2)
  }

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
          image={product.image}
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
              <div className={styles.vetAndPetRow}>
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
              <Link color={'black'} href={'/'}>
                Remove
              </Link>
              <Link color={'black'} href={'/'}>
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
    </div>
  )
}

export default CartProduct
