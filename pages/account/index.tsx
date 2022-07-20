import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import useOrders from '@framework/orders/use-orders'
import uselistOrderProducts from '@framework/orders/order-products/order-products'
import useCustomer from '@framework/customer/use-customer'
import { Layout } from '@components/common'
import Translations from 'constants/translations'
import AccountHero from '@components/ui/AccountHero/AccountHero'
import OrdersBox from '@components/ui/OrdersBox/OrdersBox'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import NextLink from 'next/link'
import { ChevronUp } from '@components/icons'
import AuthModal from '@components/ui/AuthModal/AuthModal'
import { useEffect } from 'react'
import { useUI } from '@components/ui'
import AccountLinkGroup from '@components/ui/AccountLinkGroup/AccountLinkGroup'
import styles from './index.module.scss'
import headerQuery from '../../framework/wordpress/queries/acfGlobalOptions/header'
import footerQuery from '../../framework/wordpress/queries/acfGlobalOptions/footer'
import fetch from '../../framework/wordpress/wp-client'

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
  const { data = null, isLoading, error } = useCustomer()
  const router = useRouter()
  const THE_REAL_ORDERS = useOrders()

  const { setModalView, openModal, closeModal } = useUI()

  useEffect(() => {
    if (error || (!isLoading && data === null)) {
      openModal()
      setModalView('LOGIN_VIEW')
    } else {
      closeModal()
    }
  }, [data, isLoading, error])

  const accountInfo = {
    username: data?.firstName,
    name: `${data?.firstName} ${data?.lastName}`,
    email: data?.email,
    password: '••••••••',
    giftCardBalance: data?.storeCredit[0]?.value,
  }

  const headlineText = `${Translations.ACCOUNT.WELCOME_BACK}, ${accountInfo.username}`

  //  pick the first one
  const customerAddress = data?.addresses ? data.addresses[0] : undefined
  return (
    <div className={styles.root}>
      <AuthModal onClose={() => router.push('/')} />
      {data !== null ? (
        <>
          <AccountHero headline={headlineText} className="mb-65 md:mb-155" />
          <div className="container default-grid mb-70">
            <div className="col-span-2 md:col-span-9">
              <div className={styles.headerContainer}>
                <h5>{Translations.ACCOUNT.RECENT_ORDERS}</h5>
                <ArrowCTA
                  orientation="right"
                  color="blue"
                  href="/account/orders"
                >
                  {Translations.ACCOUNT.VIEW_ALL_ORDERS}
                </ArrowCTA>
              </div>
              <OrdersBox orders={[]} variant="account" className="mb-85" />
              <AccountLinkGroup />
            </div>

            <div className={styles.settingsColumn}>
              <div className={styles.infoGroup}>
                <div className="typo-eyebrow">
                  {Translations.ACCOUNT.SETTINGS}
                </div>
              </div>
              <div className={styles.infoGroup}>
                <NextLink href="/account/settings">
                  <a className={styles.title}>
                    {Translations.ACCOUNT.YOUR_PROFILE}
                    <ChevronUp className={styles.rightChevron} />
                  </a>
                </NextLink>
                <div>{accountInfo.name}</div>
                <div>{accountInfo.email}</div>
                {false && (
                  <div>{`${Translations.ACCOUNT.PASSWORD} ${accountInfo.password}`}</div>
                )}
              </div>
              {customerAddress && (
                <div className={styles.infoGroup}>
                  <NextLink href="/account/settings">
                    <a className={styles.title}>
                      {Translations.ACCOUNT.SHIPPING_ADDRESS}
                      <ChevronUp className={styles.rightChevron} />
                    </a>
                  </NextLink>
                  <div>
                    {customerAddress.first_name} {customerAddress.last_name}
                  </div>
                  <div>{customerAddress.address1}</div>
                  <div>{`${customerAddress.city}, ${customerAddress.state_or_province} ${customerAddress.postal_code}`}</div>
                  {customerAddress.phone && (
                    <div>{`${Translations.ACCOUNT.PHONE}: ${customerAddress.phone}`}</div>
                  )}
                </div>
              )}
              {false && (
                <div className={styles.infoGroup}>
                  <NextLink href="/account/settings">
                    <a className={styles.title}>
                      {Translations.ACCOUNT.PAYMENT_METHOD}
                      <ChevronUp className={styles.rightChevron} />
                    </a>
                  </NextLink>
                  <div>{paymentMethod.name}</div>
                  <div>{`${Translations.ACCOUNT.EXPIRE} ${paymentMethod.expiration}`}</div>
                  <div>${paymentMethod.name}</div>
                </div>
              )}
              {false && (
                <div className={styles.infoGroup}>
                  <NextLink href="#">
                    <div className={styles.title}>
                      {Translations.ACCOUNT.GIFT_CARD}
                      <ChevronUp className={styles.rightChevron} />
                    </div>
                  </NextLink>
                  <div>{paymentMethod.name}</div>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className={styles.empty} />
      )}
    </div>
  )
}

Profile.Layout = Layout
