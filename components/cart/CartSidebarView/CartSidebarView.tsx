/* eslint-disable no-nested-ternary */
import { FC, useEffect } from 'react'
import cn from 'classnames'
import { useRouter } from 'next/router'
import Translations from 'constants/translations'
import { useUI } from '@components/ui/context'
import { Bag, Cross, Check } from '@components/icons'
import useCart from '@framework/cart/use-cart'
import usePrice from '@framework/product/use-price'
import CartProduct from '@components/ui/CartProduct/CartProduct'
import Button from '@components/ui/Button/Button'
import styles from './CartSidebarView.module.scss'

const CartSidebarView: FC = () => {
  const router = useRouter()
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

  const error = null
  const success = null
  const products = data?.lineItems || []

  return (
    <div className={cn(styles.root)}>
      {isLoading || isEmpty ? (
        <div className="flex-1 px-4 flex flex-col justify-center items-center">
          <span className="border border-dashed border-primary rounded-full flex items-center justify-center w-16 h-16 p-10 mb-15">
            <Bag className="absolute" />
          </span>
          <h2 className="typo-h4 text-center text-blue-default">
            {Translations.CART.YOUR_CART_IS_EMPTY}
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
          <h5 role="none" className={styles.headline} onClick={closeSidebar}>
            {`Your Cart (${products.length})`}
          </h5>

          <div className={cn(styles.productsColumn, 'custom-scrollbar')}>
            <div className={cn(styles.productsContainer)}>
              {data &&
                products.map((item) => (
                  <CartProduct
                    key={item.id}
                    product={item}
                    variant="sidebar"
                    showCartControls
                    currencyCode={data.currency.code}
                  />
                ))}
            </div>
          </div>

          <div>
            <div className={styles.subtotalContainer}>
              <h5>{Translations.CART.SUBTOTAL}:</h5>
              <h5>{subTotal}</h5>
            </div>
            <Button
              color="yellow"
              variant="large"
              type="default"
              className="w-full"
              onClick={() => {
                closeSidebar()()
                router.push('/cart')
              }}
            >
              {Translations.CART.PROCEED_TO_CHECKOUT}
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

export default CartSidebarView
