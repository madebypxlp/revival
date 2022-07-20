import { BigcommerceApiError } from '../../utils/errors'
import getCartCookie from '../../utils/get-cart-cookie'
import type { CheckoutHandlers } from '..'
import { CheckoutOrder } from 'framework/custom-interfaces/checkout'

const getCheckout: CheckoutHandlers['getCheckout'] = async ({
  res,
  body: { cartId },
  config,
}) => {
  let result: { data?: CheckoutOrder } = {}
  if (cartId) {
    try {
      result = await config.storeApiFetch(`/v3/checkouts/${cartId}`)
    } catch (error) {
      console.log(error)
      if (error instanceof BigcommerceApiError && error.status === 404) {
        // Remove the cookie if it exists but the cart wasn't found
      } else {
        throw error
      }
    }
  }
  res.status(200).json({ data: result.data ?? null })
}

export default getCheckout
