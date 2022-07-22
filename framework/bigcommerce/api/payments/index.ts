import isAllowedMethod from '../utils/is-allowed-method'
import createApiHandler, {
  BigcommerceApiHandler,
  BigcommerceHandler,
} from '../utils/create-api-handler'
import { BigcommerceApiError } from '../utils/errors'
import getAcceptedPaymentMethods from './handlers/get-accepted-payment-methods'

export type PaymentHandler = {
  getAcceptedPaymentMethods: BigcommerceHandler<
    any,
    { customerToken?: string; cartdId?: string }
  >
}

const METHODS = ['GET']

const paymentsApi: BigcommerceApiHandler<any, PaymentHandler> = async (
  req,
  res,
  config,
  handlers
) => {
  if (!isAllowedMethod(req, res, METHODS)) return

  const { cookies } = req
  const customerToken = cookies[config.customerCookie]
  const cartId = cookies[config.cartCookie]

  try {
    if (req.method === 'GET') {
      const body = {
        customerToken,
        cartId,
      }
      return await handlers.getAcceptedPaymentMethods({
        req,
        res,
        config,
        body,
      })
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

export const handlers = {
  getAcceptedPaymentMethods,
}

export default createApiHandler(paymentsApi, handlers, {})
