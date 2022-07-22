import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import useCustomer from '@framework/customer/use-customer'
import { Layout } from '@components/common'
import AccountHero from '@components/ui/AccountHero/AccountHero'
import Translations from 'constants/translations'
import { SAMPLE_PRODUCT } from '@components/ui/ComponentRenderer/ComponentRenderer'
import CartProduct from '@components/ui/CartProduct/CartProduct'
import AccountBreadcrumbs from '@components/ui/AccountBreadcrumbs/AccountBreadcrumbs'
import AccountLinkGroup from '@components/ui/AccountLinkGroup/AccountLinkGroup'
import fetch from '../../framework/wordpress/wp-client'
import footerQuery from '../../framework/wordpress/queries/acfGlobalOptions/footer'
import headerQuery from '../../framework/wordpress/queries/acfGlobalOptions/header'
import styles from '../../styles/pages/account/prescriptions.module.scss'

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

  const petAndVetInfo = {
    approvalMethod: 'We have authorization from your vet.',
    info: [
      {
        vet: 'Arbor Animal Hospital - Irvive',
        pet: 'Ellie',
        quantity: 2,
      },
    ],
  }
  const products = [
    SAMPLE_PRODUCT,
    SAMPLE_PRODUCT,
    SAMPLE_PRODUCT,
    SAMPLE_PRODUCT,
  ]

  return (
    <div className={styles.root}>
      <AccountHero
        headline={Translations.ACCOUNT.PRESCRIPTIONS}
        className="md:mb-190"
      />
      <div className="container mb-200">
        <AccountBreadcrumbs current={Translations.ACCOUNT.PRESCRIPTIONS} />
        <div className="default-grid mb-85">
          {products.map((p) => (
            <CartProduct
              key={p.id}
              className="pb-40 light-border-b mb-40"
              product={p}
              currencyCode="USD"
              variant="account"
              showPrescriptionIcon
              showPlaceNewOrder
              vetInfo={petAndVetInfo}
            />
          ))}
        </div>
        <AccountLinkGroup mobileOnly />
      </div>
    </div>
  )
}

Profile.Layout = Layout
