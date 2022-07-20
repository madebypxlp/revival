import React, { FunctionComponent, useEffect, useState } from 'react'
import c from 'classnames'
import useRemoveItem from '@framework/cart/use-remove-item'
import useUpdateItem from '@framework/cart/use-update-item'
import getCatalogProduct from '@framework/catalog/products/product'
import { useIsMobile } from '@commerce/utils/hooks'
import PrescriptionIcon from '@components/icons/PrescriptionIcon'
import Translations from 'constants/translations'
import { formatPrice } from '@lib/utils'
import AlertIcon from '@components/icons/AlertIcon'
import Button from '../Button/Button'
import ProductCardImage from '../ProductCardImage/ProductCardImage'
import IOrderProduct from './OrderProduct.interface'
import styles from './OrderProduct.module.scss'
import Dropdown from '../Dropdown/Dropdown'
import LoadingDots from '../LoadingDots/LoadingDots'

const OrderProduct: FunctionComponent<IOrderProduct> = (props) => {
  const {
    orderProduct,
    variant,
    className,
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

  const catalogProduct = getCatalogProduct({
    productId: orderProduct.product_id,
  })

  const isMobile = useIsMobile()
  const [loading, setLoading] = useState(false)

  let rightColumnComponent
  if (rightColumn === 'price') {
    rightColumnComponent = (
      <div
        className={c(
          isMobile && styles.mobilePriceContainer,
          styles.rightColumnContainer
        )}
      >
        <div className={styles.productPrice}>
          {formatPrice(parseFloat(orderProduct.total_ex_tax))}
        </div>
      </div>
    )
  } else if (rightColumn === 'edit-details') {
    rightColumnComponent = (
      <div className={styles.rightColumnContainer}>
        <Button color="yellow" variant="large" type="default">
          {Translations.PET_AND_VET.EDIT_DETAILS}
        </Button>
      </div>
    )
  } else if (rightColumn === 'shipment-options') {
    rightColumnComponent = (
      <div className={styles.rightColumnContainer}>
        <Dropdown
          color="light"
          onChange={(value) => {}}
          placeholder="Shipping Options"
          options={[
            { label: 'Ship Separately', value: 'shipSeparately' },
            { label: '2-Day Shipping', value: 'twoDayShipping' },
            { label: 'Overnight', value: 'overnight' },
          ]}
          className="text-left text-black"
        />
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
      {loading && <LoadingDots portal />}
      <div className={styles.productImageContainer}>
        {orderProduct.variant?.image_url && (
          <ProductCardImage
            isPrescription={showPrescriptionIcon}
            imageUrl={orderProduct.variant.image_url}
            variant={variant}
          />
        )}
      </div>
      {isMobile && rightColumn !== 'empty' && rightColumnComponent}
      <div className={styles.infoContainer}>
        <div className={styles.productNameContainer}>
          <div className={styles.productName}>{orderProduct.name}</div>
          <div className={styles.productId}>#{orderProduct.product_id}</div>
          {orderProduct.variant && (
            <div className={styles.productId}>{orderProduct.name}</div>
          )}
        </div>
        {!isMobile && rightColumn !== 'empty' && rightColumnComponent}
        {shippingRestrictionsMessage && (
          <div className={styles.alertTextContainer}>
            <AlertIcon />
            <span>{shippingRestrictionsMessage}</span>
          </div>
        )}
        {showPrescriptionLabel && true && (
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

export default OrderProduct
