import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import AccountLinkGroup from '@components/ui/AccountLinkGroup/AccountLinkGroup'
import AccountBreadcrumbs from '@components/ui/AccountBreadcrumbs/AccountBreadcrumbs'
import { SAMPLE_PRODUCT } from '@components/ui/ComponentRenderer/ComponentRenderer'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import useCustomer from '@framework/customer/use-customer'
import { Layout } from '@components/common'
import AccountHero from '@components/ui/AccountHero/AccountHero'
import Translations from 'constants/translations'
import CartProduct from '@components/ui/CartProduct/CartProduct'
import fetch from '../../framework/wordpress/wp-client'
import footerQuery from '../../framework/wordpress/queries/acfGlobalOptions/footer'
import headerQuery from '../../framework/wordpress/queries/acfGlobalOptions/header'
import styles from './buy-again.module.scss'

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

  const products = [
    SAMPLE_PRODUCT,
    SAMPLE_PRODUCT,
    SAMPLE_PRODUCT,
    SAMPLE_PRODUCT,
  ]
  return (
    <div className={styles.root}>
      <AccountHero
        headline={Translations.ACCOUNT.BUY_AGAIN}
        className="md:mb-175"
      />
      <div className="container mb-150">
        <AccountBreadcrumbs current={Translations.ACCOUNT.BUY_AGAIN} />
        <div className="default-grid">
          {products.map((p) => (
            <CartProduct
              key={p.id}
              className="pb-40 light-border-b mb-40"
              product={p}
              currencyCode="USD"
              variant="account"
              showAddToCart
            />
          ))}
        </div>
        <AccountLinkGroup mobileOnly className={styles.accountLinkGroup} />
      </div>
    </div>
  )
}

Profile.Layout = Layout
