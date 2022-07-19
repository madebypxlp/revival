import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Heart } from '@components/icons'
import { Layout } from '@components/common'
import AccountBreadcrumbs from '@components/ui/AccountBreadcrumbs/AccountBreadcrumbs'
import AccountLinkGroup from '@components/ui/AccountLinkGroup/AccountLinkGroup'
import { SAMPLE_PRODUCT } from '@components/ui/ComponentRenderer/ComponentRenderer'
import { getConfig } from '@framework/api'
import { useCustomer } from '@framework/customer'
import useWishlist from '@framework/wishlist/use-wishlist'
import getAllPages from '@framework/common/get-all-pages'
import AccountHero from '@components/ui/AccountHero/AccountHero'
import Translations from 'constants/translations'
import ProductCardGrid from '@components/ui/ProductCardGrid/ProductCardGrid'
import fetch from '../../framework/wordpress/wp-client'
import footerQuery from '../../framework/wordpress/queries/acfGlobalOptions/footer'
import headerQuery from '../../framework/wordpress/queries/acfGlobalOptions/header'
import styles from './favorites.module.scss'
import { WishlistCard } from '@components/wishlist'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  // Disabling page if Feature is not available
  if (!process.env.COMMERCE_WISHLIST_ENABLED) {
    return {
      notFound: true,
    }
  }

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

export default function Wishlist({
  header,
  footer,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data: customer } = useCustomer()
  const { data, isLoading, isEmpty } = useWishlist({ includeProducts: true })

  return (
    <div className={styles.root}>
      <AccountHero
        headline={Translations.ACCOUNT.MY_FAVORITES}
        className="md:mb-70"
      />
      <div className="container">
        <AccountBreadcrumbs current={Translations.ACCOUNT.MY_FAVORITES} />
      </div>
      {data?.items
        ? 'WE MIGHT NEED A NEW INTERFACE HERE'
        : 'No Items in Wishlist'}

      <div className="container">
        <AccountLinkGroup mobileOnly className="mb-250" />
      </div>
    </div>
  )
}

Wishlist.Layout = Layout
