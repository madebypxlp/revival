import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import c from 'classnames'
import { getConfig } from '@framework/api'
import { formatPrice } from '@commerce/product/use-price'
import getAllPages from '@framework/common/get-all-pages'
import useCustomer from '@framework/customer/use-customer'
import { Layout } from '@components/common'
import AccountHero from '@components/ui/AccountHero/AccountHero'
import Translations from 'constants/translations'
import { useRouter } from 'next/router'
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

  const { data } = useCustomer()

  const orderId = router.query.id

  const product = {
    id: '#80122-795-431',
    price: 25,
    image: {
      desktopImage: {
        sourceUrl:
          'https://revival-wp.weareenvoy.net/app/uploads/2022/06/parker-coffman-pr6Blqs0yWA-unsplash-1.png',
        altText: '',
        mediaDetails: {
          width: 0,
          height: 0,
        },
      },
      tabletImage: null,
      mobileImage: {
        sourceUrl:
          'https://revival-wp.weareenvoy.net/app/uploads/2022/06/parker-coffman-pr6Blqs0yWA-unsplash-1.png',
        altText: '',
        mediaDetails: {
          width: 0,
          height: 0,
        },
      },
    },
    name: "Doc Roy's Derma Coat Plus",
    oldPrice: 35,
    isNew: true,
    isPrescription: true,
    isOurBrand: true,
    isFavorite: false,
    label: 'STAFF PICK',
    headline: 'Get her healthy first',
  }

  const order = {
    id: '000000',
    placed: new Date(),
    sentTo: '24 Tesla, Ste 100 Irvine CA, 92618',
    total: 45,
    status: 'Shipped',
    paidWith: 'Amex **** 3009 Expire: 5/2022 Jane Doe',
    tracking: '#XXXXXXXXXXXXXXXXXXXXXX',
    products: [product, product],
    summary: {
      subtotal: 175.99,
      shipping: 'FREE',
      estimatedTax: 7.99,
      total: 182.59,
    },
  }

  const orders = [order, order, order, order]
  const heroHeadline = orderId
    ? `Order #${order.id}`
    : Translations.ACCOUNT.ORDERS

  return (
    <div className={styles.root}>
      <AccountHero headline={heroHeadline} className="md:mb-175" />
      <div className="container">
        <AccountBreadcrumbs current={Translations.ACCOUNT.ORDERS} />
      </div>
      {orderId ? (
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
              <div>{formatDate(order.placed)}</div>
            </div>
            <div className={styles.sentToColumn}>
              <div className={styles.title}>{Translations.ACCOUNT.SENT_TO}</div>
              <div>{order.sentTo}</div>
            </div>
            <div className={styles.paidWithColumn}>
              <div className={styles.title}>
                {Translations.ACCOUNT.PAID_WITH}
              </div>
              <div>{order.paidWith}</div>
            </div>
            <div className={styles.trackingColumn}>
              <div className={styles.title}>
                {Translations.ACCOUNT.TRACKING}
              </div>
              <div>{order.tracking}</div>
            </div>
          </div>
          {order.products.map((p) => (
            <CartProduct
              key={product.id}
              className={styles.product}
              product={product}
              quantity={3}
              variant="account"
              showBuyItAgain
            />
          ))}
          <div className="default-grid">
            <div className={styles.summaryContainer}>
              <div className={c(styles.row, styles.title)}>
                {Translations.ACCOUNT.SUMMARY}
              </div>
              <div className={styles.row}>
                {Translations.ACCOUNT.SUBTOTAL}
                <span>{formatPrice(order.summary.subtotal)}</span>
              </div>
              <div className={styles.row}>
                {Translations.ACCOUNT.SHIPPING}
                <span>{order.summary.shipping}</span>
              </div>
              <div className={styles.row}>
                {Translations.ACCOUNT.ESTIMATED_SALES_TAX}
                <span>{formatPrice(order.summary.estimatedTax)}</span>
              </div>
              <div className={c(styles.totalRow, styles.row, styles.title)}>
                {Translations.ACCOUNT.ORDER_TOTAL}
                <span>{formatPrice(order.summary.total)}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* orders page */}
          <div className="container">
            <OrdersBox
              orders={orders}
              variant="orders"
              className={styles.ordersBox}
            />
            <AccountLinkGroup mobileOnly className={styles.accountLinkGroup} />
          </div>
        </div>
      )}
    </div>
  )
}

Profile.Layout = Layout
