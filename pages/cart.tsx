import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import useCart from '@framework/cart/use-cart'
import usePrice from '@framework/product/use-price'
import { Layout } from '@components/common'
import { Text } from '@components/ui'
import { Bag, Cross, Check, MapPin, CreditCard } from '@components/icons'
import { CartItem } from '@components/cart'
import Button from '@components/ui/Button/Button'
import fetch from './../framework/wordpress/wp-client'
import footerQuery from './../framework/wordpress/queries/acfGlobalOptions/footer'
import headerQuery from './../framework/wordpress/queries/acfGlobalOptions/header'
import ProductCardGrid from '@components/ui/ProductCardGrid/ProductCardGrid'
import Translations from 'constants/translations'
import CartProduct from '@components/ui/CartProduct/CartProduct'

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
  const error = null
  const success = null
  const { data, isLoading, isEmpty } = useCart()

  console.log(data)
  const { price: subTotal } = usePrice(
    data && {
      amount: Number(data.subtotalPrice),
      currencyCode: data.currency.code,
    }
  )
  const { price: total } = usePrice(
    data && {
      amount: Number(data.totalPrice),
      currencyCode: data.currency.code,
    }
  )

  const headline = isEmpty
    ? Translations.CART.YOUR_CART_IS_EMPTY
    : Translations.CART.YOUR_CART

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
    <div className={'pt-40 md:pt-80'}>
      <div className={'container default-grid'}>
        <div
          className={
            'col-start-1 col-span-2 md:col-start-1 md:col-span-8 text-blue mb-65 md:mb-85'
          }
        >
          <h2>{headline}</h2>
        </div>
        <div className="col-span-2 md:col-span-8">
          {error ? (
            <div className="flex-1 px-4 flex flex-col justify-center items-center">
              <span className="border border-white rounded-full flex items-center justify-center w-16 h-16">
                <Cross width={24} height={24} />
              </span>
              <h2 className="pt-6 text-xl font-light text-center">
                We couldn’t process the purchase. Please check your card
                information and try again.
              </h2>
            </div>
          ) : success ? (
            <div className="flex-1 px-4 flex flex-col justify-center items-center">
              <span className="border border-white rounded-full flex items-center justify-center w-16 h-16">
                <Check />
              </span>
              <h2 className="pt-6 text-xl font-light text-center">
                Thank you for your order.
              </h2>
            </div>
          ) : (
            <div>
              {!isEmpty && (
                <div>
                  {products.slice(0, 2).map((item) => (
                    <CartProduct
                      key={item.id}
                      product={item}
                      variant={'cart'}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="col-span-2 md:col-span-4 bg-[#F3F1E8] rounded-15 px-20 py-60">
          <div
            className={'text-center typo-large-paragraph mb-30'}
          >{`You are $XX away from FREE economy Ground Shipping`}</div>
          <div
            className={'border-b-[1rem] border-white rounded-full mb-30'}
          ></div>
          <div
            className={
              'text-center underline font-bold typo-small-paragraph mb-40'
            }
          >
            {Translations.LEARN_MORE}
          </div>
          <div className={'border-b-[0.1rem] border-[#C4C4C4] mb-40'}></div>

          <div className="flex flex-row justify-between mb-35">
            <h5 className={'font-bold'}>{`${Translations.CART.SUBTOTAL}:`}</h5>
            <span>{subTotal}</span>
          </div>
          <div>
            <Button
              color="yellow"
              variant="large"
              type="default"
              href={isEmpty ? '/' : '/checkout'}
              className={'w-full text-center'}
            >
              {isEmpty
                ? Translations.CART.SHOP_NOW
                : Translations.CART.PROCEED_TO_CHECKOUT}
            </Button>
          </div>
        </div>
      </div>
      <ProductCardGrid
        products={products}
        headline={Translations.YOU_MAY_ALSO_LIKE}
      />
    </div>
  )
}

Cart.Layout = Layout
