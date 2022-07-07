import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import useCustomer from '@framework/customer/use-customer'
import { Layout } from '@components/common'
import fetch from '../../framework/wordpress/wp-client'
import footerQuery from '../../framework/wordpress/queries/acfGlobalOptions/footer'
import headerQuery from '../../framework/wordpress/queries/acfGlobalOptions/header'
import styles from './index.module.scss'
import Translations from 'constants/translations'
import AccountHero from '@components/ui/AccountHero/AccountHero'
import OrdersBox from '@components/ui/OrdersBox/OrdersBox'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'

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
  const { data } = useCustomer()
  console.log(data)

  const order = {
    id: '000000',
    placed: new Date(),
    sentTo: '24 Tesla, Ste 100 Irvine CA, 92618',
    total: 45,
    status: 'Shipped',
  }

  const orders = [order, order, order, order]

  const username = 'Marie'
  const headlineText = `${Translations.ACCOUNT.WELCOME_BACK}, ${username}`
  return (
    <div className={styles.root}>
      <AccountHero headline={headlineText} className={'mb-155'} />
      <div className={'container default-grid'}>
        <div className={'col-span-2 md:col-span-9'}>
          <div className={styles.headerContainer}>
            <h5>{Translations.ACCOUNT.RECENT_ORDERS}</h5>
            <ArrowCTA orientation="right" color="blue" href="/account/orders">
              {Translations.ACCOUNT.VIEW_ALL_ORDERS}
            </ArrowCTA>
          </div>
          <OrdersBox orders={orders} variant={'account'}></OrdersBox>
        </div>
        <div className={'col-span-2 md:col-start-11'}></div>
      </div>
    </div>
  )
}

Profile.Layout = Layout
