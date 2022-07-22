import isAllowedMethod from '../utils/is-allowed-method'
import createApiHandler, {
  BigcommerceApiHandler,
  BigcommerceHandler,
} from '../utils/create-api-handler'
import { BigcommerceApiError } from '../utils/errors'
import getCheckout from './handlers/get-checkout'
import { CheckoutOrder } from 'framework/custom-interfaces/checkout'

export type CheckoutHandlers = {
  getCheckout: BigcommerceHandler<CheckoutOrder, any>
}

const METHODS = ['GET']

// TODO: a complete implementation should have schema validation for `req.body`
const checkoutApi: BigcommerceApiHandler<any, CheckoutHandlers> = async (
  req,
  res,
  config,
  handlers
) => {
  if (!isAllowedMethod(req, res, METHODS)) return

  const { cookies } = req
  const cartId = cookies[config.cartCookie]

  try {
    // Return current cart info
    if (req.method === 'GET') {
      const body = { cartId }
      return await handlers.getCheckout({ req, res, config, body })
    }
  } catch (error) {
    console.error(error)

    const message =
      error instanceof BigcommerceApiError
        ? 'An unexpected error ocurred with the Bigcommerce API'
        : 'An unexpected error ocurred'

    res.status(500).json({ data: null, errors: [{ message }] })
  }
}

export const handlers = { getCheckout }

export default createApiHandler(checkoutApi, handlers, {})
