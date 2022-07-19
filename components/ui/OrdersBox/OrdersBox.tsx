import React, { FunctionComponent } from 'react'
import c from 'classnames'
import Translations from 'constants/translations'
import { formatDate, formatPrice } from '@lib/utils'
import { ChevronUp } from '@components/icons'
import NextLink from 'next/link'
import { useIsMobile } from '@commerce/utils/hooks'
import IOrdersBox from './OrdersBox.interface'
import styles from './OrdersBox.module.scss'

const OrdersBox: FunctionComponent<IOrdersBox> = (props) => {
  const { orders, variant, className } = props

  const isMobile = useIsMobile()
  console.log(orders)
  return (
    <div
      className={c(
        styles.root,
        className,
        variant && styles[`variant--${variant}`]
      )}
    >
      {isMobile &&
        orders.map((o) => (
          <div
            key={o.id}
            className={c(styles.orderContainer, 'grid grid-cols-2 gap-x-20')}
          >
            <div className={c(styles.orderId)}>
              <div className={styles.title}>
                {Translations.ACCOUNT.ORDER_NUMBER}
              </div>
              <div className={styles.regular}>{o.id}</div>
            </div>
            <div className={c(styles.placed)}>
              <div className={styles.title}>
                <span>{Translations.ACCOUNT.PLACED}</span>
                <NextLink href={`/account/orders?id=${o.id}`}>
                  <ChevronUp />
                </NextLink>
              </div>
              <div className={styles.regular}>{o.date_created} </div>
            </div>
            <div className={c(styles.sentTo)}>
              <div className={styles.title}>{Translations.ACCOUNT.SENT_TO}</div>
              <div className={styles.regular}>
                {o.shipping_addresses.resource}
              </div>
            </div>
            <div className={c(styles.total)}>
              <div className={styles.title}>{Translations.ACCOUNT.TOTAL}</div>
              <div className={styles.regular}>{o.subtotal_inc_tax}</div>
            </div>
            <div className={c(styles.status)}>
              <div className={styles.title}>{Translations.ACCOUNT.STATUS}</div>
              <div className={styles.regular}>{o.status}</div>
            </div>
          </div>
        ))}
      {!isMobile &&
        orders.map((o) => (
          <div
            key={o.id}
            className={c(styles.orderContainer, 'grid grid-cols-11 gap-x-20')}
          >
            <div className={c(styles.title, styles.orderId)}>
              {Translations.ACCOUNT.ORDER_NUMBER}
            </div>
            <div className={c(styles.title, styles.placed)}>
              {Translations.ACCOUNT.PLACED}
            </div>
            <div className={c(styles.title, styles.sentTo)}>
              {Translations.ACCOUNT.SENT_TO}
            </div>
            <div className={c(styles.title, styles.total)}>
              {Translations.ACCOUNT.TOTAL}
            </div>
            <div className={c(styles.title, styles.status)}>
              {Translations.ACCOUNT.STATUS}
            </div>

            <div className={c(styles.regular, styles.orderId)}>{o.id}</div>
            <div className={c(styles.regular, styles.placed)}>
              {o.date_created}
            </div>
            <div className={c(styles.regular, styles.sentTo)}>
              {o.shipping_addresses?.resource}
            </div>
            <div className={c(styles.regular, styles.total)}>
              {o.subtotal_inc_tax}
            </div>
            <div className={c(styles.regular, styles.status)}>
              <span>{o.status}</span>
              <NextLink href={`/account/orders?id=${o.id}`}>
                <ChevronUp />
              </NextLink>
            </div>
          </div>
        ))}
    </div>
  )
}

export default OrdersBox
