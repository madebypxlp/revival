import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Heart } from '@components/icons'
import { Layout } from '@components/common'
import { Text, Container } from '@components/ui'
import { getConfig } from '@framework/api'
import { useCustomer } from '@framework/customer'
import { WishlistCard } from '@components/wishlist'
import useWishlist from '@framework/wishlist/use-wishlist'
import getAllPages from '@framework/common/get-all-pages'
import fetch from './../../framework/wordpress/wp-client'
import footerQuery from './../../framework/wordpress/queries/acfGlobalOptions/footer'
import headerQuery from './../../framework/wordpress/queries/acfGlobalOptions/header'
import styles from './favorites.module.scss'
import AccountHero from '@components/ui/AccountHero/AccountHero'
import Translations from 'constants/translations'
import ProductCardGrid from '@components/ui/ProductCardGrid/ProductCardGrid'

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
  // @ts-ignore Shopify - Fix this types
  const { data, isLoading, isEmpty } = useWishlist({ includeProducts: true })

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
    isFavorite: true,
    label: 'STAFF PICK',
    headline: 'Get her healthy first',
  }

  const products = [
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
  ]

  return (
    <div className={styles.root}>
      <AccountHero
        headline={Translations.ACCOUNT.MY_FAVORITES}
        className={'mb-70'}
      />
      <ProductCardGrid
        variant={'favorites'}
        products={products}
        className={'mb-200'}
      ></ProductCardGrid>
    </div>
  )
}

Wishlist.Layout = Layout
