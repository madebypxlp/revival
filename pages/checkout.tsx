import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Layout } from '@components/common'
import { useCart } from '@framework/cart'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import getCheckout from '@framework/checkout/get-checkout'
import ShippingForm from '@components/ui/ShippingForm/ShippingForm'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import fetch from '../framework/wordpress/wp-client'
import footerQuery from '../framework/wordpress/queries/acfGlobalOptions/footer'
import headerQuery from '../framework/wordpress/queries/acfGlobalOptions/header'

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

export default function Orders({
  header,
  footer,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const cart = useCart()

  const checkoutData = getCheckout()

  const shippingInfo = {
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    phoneNumber: '',
    comments: '',
    onSubmit: (data: any) => {
      console.log(data)
    },
  }

  useEffect(() => {
    if (cart.error || (!cart.isLoading && !cart.data)) {
      router.push('/')
    }
  }, [cart])

  const goAndcreateOrder = () => {
    checkoutData.revalidate()
  }

  console.log(checkoutData.data)

  return (
    <div className="container py-80">
      <div className="default-grid">
        <button onClick={goAndcreateOrder}>CREATE ORDER</button>
        <div className="col-span-full md:col-span-8">
          <h2 className="typo-h2 mb-125 text-blue">1.Shipping</h2>
          <ShippingForm {...shippingInfo} />
          <h2 className="typo-h2 mb-125 text-blue">2. Payment</h2>
        </div>
      </div>
    </div>
  )
}

Orders.Layout = Layout
