import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useEffect, useState } from 'react'
import c from 'classnames'
import { Product } from '@commerce/types'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import useCart from '@framework/cart/use-cart'
import usePrice from '@framework/product/use-price'
import { Layout } from '@components/common'
import LoadingDots from '@components/ui/LoadingDots/LoadingDots'
import { Cross, Check } from '@components/icons'
import Button from '@components/ui/Button/Button'
import ProductCardGrid from '@components/ui/ProductCardGrid/ProductCardGrid'
import Translations from 'constants/translations'
import CartProduct from '@components/ui/CartProduct/CartProduct'
import { useIsMobile } from '@commerce/utils/hooks'
import headerQuery from '../framework/wordpress/queries/acfGlobalOptions/header'
import footerQuery from '../framework/wordpress/queries/acfGlobalOptions/footer'
import fetch from '../framework/wordpress/wp-client'
import styles from '../styles/pages/cart.module.scss'

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

export default function Cart({
  header,
  footer,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data, isLoading, isEmpty } = useCart()
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const isMobile = useIsMobile()

  const { price: total } = usePrice(
    data && {
      amount: Number(data.totalPrice),
      currencyCode: data.currency.code,
    }
  )

  useEffect(() => {
    if (data?.relatedProducts) {
      setRelatedProducts(data.relatedProducts)
    }
  }, [data])

  return (
    <div className={styles.root}>
      {isLoading && <LoadingDots portal />}
      <div className="container default-grid">
        <div className="col-start-1 col-span-2 md:col-start-1 md:col-span-8 text-blue mb-65 md:mb-85">
          <h2>
            {isEmpty
              ? Translations.CART.YOUR_CART_IS_EMPTY
              : Translations.CART.YOUR_CART}
          </h2>
        </div>
        <div className="col-span-2 md:col-span-8">
          <div>
            {!isEmpty &&
              data?.lineItems.map((item) => (
                <div className={styles.cartProductContainer} key={item.id}>
                  <CartProduct
                    product={item}
                    variant="cart"
                    currencyCode={data.currency.code}
                    showCartControls
                  />
                </div>
              ))}
          </div>
        </div>
        {!isEmpty && (
          <div className={c(styles.informationBox, 'col-span-2 md:col-span-4')}>
            {!isMobile && (
              <div>
                <div className="text-center typo-large-paragraph mb-30">
                  You are $XX away from FREE economy Ground Shipping
                </div>
                <div className="border-b-[1rem] border-white rounded-full mb-30" />
                <div
                  className={c(styles.learnMoreText, 'typo-small-paragraph')}
                >
                  {Translations.LEARN_MORE}
                </div>
                <div className="border-b-[0.1rem] border-[#C4C4C4] mb-40" />
              </div>
            )}

            <div className={c(styles.subtotalContainer, 'typo-h5')}>
              <h5 className="font-bold">{`${Translations.CART.SUBTOTAL}:`}</h5>
              <span className="md:typo-large-paragraph">{total}</span>
            </div>
            <div>
              <Button
                color="yellow"
                variant="large"
                type="default"
                href={isEmpty ? '/' : '/checkout'}
                className="w-full text-center"
              >
                {isEmpty
                  ? Translations.CART.SHOP_NOW
                  : Translations.CART.PROCEED_TO_CHECKOUT}
              </Button>
            </div>
          </div>
        )}
      </div>
      {relatedProducts && relatedProducts.length > 0 && (
        <ProductCardGrid
          products={relatedProducts}
          headline={Translations.YOU_MAY_ALSO_LIKE}
          variant="cart"
        />
      )}
    </div>
  )
}

Cart.Layout = Layout
