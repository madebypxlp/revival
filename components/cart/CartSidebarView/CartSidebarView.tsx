import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import styles from './CartSidebarView.module.scss'
import { useUI } from '@components/ui/context'
import { Bag, Cross, Check } from '@components/icons'
import useCart from '@framework/cart/use-cart'
import usePrice from '@framework/product/use-price'
import CartProduct from '@components/ui/CartProduct/CartProduct'

const CartSidebarView: FC = () => {
  const { closeSidebar } = useUI()
  const { data, isLoading, isEmpty } = useCart()

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
  const handleClose = () => closeSidebar()

  const error = null
  const success = null

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
      tabletImage: {
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
    isFavorite: false,
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
    <div
      className={cn(styles.root, {
        [styles.empty]: error || success || isLoading || isEmpty,
      })}
    >
      {isLoading || isEmpty ? (
        <div className="flex-1 px-4 flex flex-col justify-center items-center">
          <span className="border border-dashed border-primary rounded-full flex items-center justify-center w-16 h-16 p-10  ">
            <Bag className="absolute" />
          </span>
          <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
            Your cart is empty
          </h2>
        </div>
      ) : error ? (
        <div className="flex-1 px-4 flex flex-col justify-center items-center">
          <span className="border border-white rounded-full flex items-center justify-center w-16 h-16">
            <Cross width={24} height={24} />
          </span>
          <h2 className="pt-6 text-xl font-light text-center">
            We couldn’t process the purchase. Please check your card information
            and try again.
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
        <>
          <div>
            <Link href="/cart">
              <h5 className={styles.headline} onClick={handleClose}>
                {`Your Cart (${products.length})`}
              </h5>
            </Link>
            <div className={styles.productsContainer}>
              {products.map((item) => (
                <CartProduct
                  key={item.id}
                  product={item}
                  variant={'sidebar'}
                  quantity={2}
                  showCartControls
                />
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 px-4  py-5 sm:px-5">
            <div className="border-t ">
              <ul className="py-5">
                <li className="flex justify-between py-1">
                  <span>Subtotal</span>
                  <span>{subTotal}</span>
                </li>
                <li className="flex justify-between py-1">
                  <span>Taxes</span>
                  <span>Calculated at checkout</span>
                </li>
                <li className="flex justify-between py-1">
                  <span>Estimated Shipping</span>
                  <span className="font-bold tracking-wide">FREE</span>
                </li>
              </ul>
              <div className="flex justify-between border-t  py-5 font-bold mb-10">
                <span>Total</span>
                <span>{total}</span>
              </div>
            </div>
            {/*
            <Button href="/checkout" Component="a" width="100%">
              Proceed to Checkout
            </Button>
              */}
          </div>
        </>
      )}
    </div>
  )
}

export default CartSidebarView
