/* eslint-disable radix */
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import c from 'classnames'
import getAllPages from '@framework/common/get-all-pages'
import useOrders from '@framework/orders/use-orders'
import { getConfig } from '@framework/api'
import { formatDate } from '@lib/utils'
import useCustomer from '@framework/customer/use-customer'
import uselistOrderProducts from '@framework/orders/order-products/order-products'
import getOrderShippingAddresses from '@framework/orders/order-shipping-addresses/order-shipping-addresses'
import getOrderShipments from '@framework/orders/order-shipments/order-shipments'
import { Layout } from '@components/common'
import AccountHero from '@components/ui/AccountHero/AccountHero'
import Translations from 'constants/translations'
import { useRouter } from 'next/router'
import { SAMPLE_PRODUCT } from '@components/ui/ComponentRenderer/ComponentRenderer'
import OrdersBox from '@components/ui/OrdersBox/OrdersBox'
import AccountLinkGroup from '@components/ui/AccountLinkGroup/AccountLinkGroup'
import AccountBreadcrumbs from '@components/ui/AccountBreadcrumbs/AccountBreadcrumbs'
import Button from '@components/ui/Button/Button'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import CartProduct from '@components/ui/CartProduct/CartProduct'
import fetch from '../../framework/wordpress/wp-client'
import footerQuery from '../../framework/wordpress/queries/acfGlobalOptions/footer'
import headerQuery from '../../framework/wordpress/queries/acfGlobalOptions/header'
import styles from './orders.module.scss'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { pages } = await getAllPages({ config, preview })
  const header = await fetch({ query: headerQuery })
  const footer = await fetch({ query: footerQuery })

  return {
    props: {
      pages,
      header: { ...header?.acfOptionsHeader?.header },
      footer: footer?.acfOptionsFooter?.footer,
    },
  }
}

export default function Profile({
  header,
  footer,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const customerOrders = useOrders()
  const { data } = uselistOrderProducts({ orderId: router.query.id })
  const orderShippingAddresses = getOrderShippingAddresses({
    orderId: router.query.id,
  }).data

  const orderShipmentData = getOrderShipments({ orderId: router.query.id }).data

  const order = customerOrders.data?.find(
    (e) => e.id === parseInt(router.query.id as string)
  )

  const heroHeadline = router.query.id
    ? `Order #${router.query.id}`
    : Translations.ACCOUNT.ORDERS

  return (
    <div className={styles.root}>
      <AccountHero headline={heroHeadline} className="md:mb-175" />
      <div className="container">
        <AccountBreadcrumbs current={Translations.ACCOUNT.ORDERS} />
      </div>
      {data ? (
        <div className="container">
          <div className={styles.placeOrderAgainRow}>
            <Button color="yellow" variant="large" type="default">
              {Translations.ACCOUNT.PLACE_ORDER_AGAIN}
            </Button>
            <ArrowCTA orientation="right" color="blue" href="/account/orders">
              {Translations.ACCOUNT.VIEW_PRINT_INVOICE}
            </ArrowCTA>
          </div>
          <div className={styles.orderBox}>
            <div className={styles.placedColumn}>
              <div className={styles.title}>{Translations.ACCOUNT.PLACED}</div>
              <div>{order?.date_created}</div>
            </div>
            <div className={styles.sentToColumn}>
              <div className={styles.title}>{Translations.ACCOUNT.SENT_TO}</div>
              <div>{false && order?.shipping_addresses.resource}</div>
            </div>
            <div className={styles.paidWithColumn}>
              <div className={styles.title}>
                {Translations.ACCOUNT.PAID_WITH}
              </div>
              <div>{order?.currency_code}</div>
            </div>
            <div className={styles.trackingColumn}>
              <div className={styles.title}>
                {Translations.ACCOUNT.TRACKING}
              </div>
              <div>{order?.shipping_addresses.resource}</div>
            </div>
          </div>
          {data.map((p) => null)}
          <div className="default-grid">
            <div className={styles.summaryContainer}>
              <div className={c(styles.row, styles.title)}>
                {Translations.ACCOUNT.SUMMARY}
              </div>
              <div className={styles.row}>
                {Translations.ACCOUNT.SUBTOTAL}
                <span>order subtotal</span>
              </div>
              <div className={styles.row}>
                {Translations.ACCOUNT.SHIPPING}
                <span>{false && order?.shipping_addresses.resource}</span>
              </div>
              <div className={styles.row}>
                {Translations.ACCOUNT.ESTIMATED_SALES_TAX}
                <span>estimated tax</span>
              </div>
              <div className={c(styles.totalRow, styles.row, styles.title)}>
                {Translations.ACCOUNT.ORDER_TOTAL}
                <span>order total</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* orders page */}
          {customerOrders.data && (
            <div className="container">
              <OrdersBox
                orders={customerOrders.data}
                variant="orders"
                className={styles.ordersBox}
              />
              <AccountLinkGroup
                mobileOnly
                className={styles.accountLinkGroup}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

Profile.Layout = Layout
