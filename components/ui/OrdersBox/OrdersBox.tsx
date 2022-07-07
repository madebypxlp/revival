import React, { FunctionComponent } from 'react'
import styles from './OrdersBox.module.scss'
import c from 'classnames'
import IOrdersBox from './OrdersBox.interface'
import Translations from 'constants/translations'
import { formatDate, formatPrice } from '@lib/utils'

const OrdersBox: FunctionComponent<IOrdersBox> = (props) => {
  const { orders, variant } = props
  return (
    <div className={c(styles.root, variant && `variant--${variant}`)}>
      {orders.map((o) => (
        <div
          key={o.id}
          className={c(
            styles.orderContainer,
            'grid grid-cols-2 md:grid-cols-11 gap-x-20'
          )}
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
            {formatDate(o.placed)}
          </div>
          <div className={c(styles.regular, styles.sentTo)}>{o.sentTo}</div>
          <div className={c(styles.regular, styles.total)}>
            {formatPrice(o.total)}
          </div>
          <div className={c(styles.regular, styles.status)}>{o.status}</div>
        </div>
      ))}
    </div>
  )
}

export default OrdersBox
