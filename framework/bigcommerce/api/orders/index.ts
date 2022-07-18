import isAllowedMethod from '../utils/is-allowed-method'
import createApiHandler, {
  BigcommerceApiHandler,
  BigcommerceHandler,
} from '../utils/create-api-handler'
import { BigcommerceApiError } from '../utils/errors'
import getOrders from './handlers/get-orders'

export type OrdersHandler = {
  getOrders: BigcommerceHandler<any, { customerToken?: string }>
}

const METHODS = ['GET']

// TODO: a complete implementation should have schema validation for `req.body`
const ordersApi: BigcommerceApiHandler<any, OrdersHandler> = async (
  req,
  res,
  config,
  handlers
) => {
  if (!isAllowedMethod(req, res, METHODS)) return

  const { cookies } = req
  const customerToken = cookies[config.customerCookie]

  try {
    if (req.method === 'GET') {
      const body = {
        customerToken,
      }
      return await handlers.getOrders({ req, res, config, body })
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
  getOrders,
}

export default createApiHandler(ordersApi, handlers, {})
