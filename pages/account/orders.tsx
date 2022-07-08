import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import c from 'classnames'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import useCustomer from '@framework/customer/use-customer'
import { Layout } from '@components/common'
import fetch from '../../framework/wordpress/wp-client'
import footerQuery from '../../framework/wordpress/queries/acfGlobalOptions/footer'
import headerQuery from '../../framework/wordpress/queries/acfGlobalOptions/header'
import AccountHero from '@components/ui/AccountHero/AccountHero'
import Translations from 'constants/translations'
import styles from './orders.module.scss'
import { useRouter } from 'next/router'
import OrdersBox from '@components/ui/OrdersBox/OrdersBox'

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
  console.log(router.query.id)
  const { data } = useCustomer()

  const order = {
    id: '000000',
    placed: new Date(),
    sentTo: '24 Tesla, Ste 100 Irvine CA, 92618',
    total: 45,
    status: 'Shipped',
  }

  const orders = [order, order, order, order]
  return (
    <div className={styles.root}>
      <AccountHero
        headline={Translations.ACCOUNT.ORDERS}
        className={'mb-70 md:mb-190'}
      />

      <div className={'container'}>
        <OrdersBox orders={orders} variant={'orders'} className={'mb-300'} />
      </div>
    </div>
  )
}

Profile.Layout = Layout
