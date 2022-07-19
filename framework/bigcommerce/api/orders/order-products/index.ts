import isAllowedMethod from '../../utils/is-allowed-method'
import createApiHandler, {
  BigcommerceApiHandler,
  BigcommerceHandler,
} from '../../utils/create-api-handler'
import { BigcommerceApiError } from '../../utils/errors'
import listOrderProducts from './handlers/order-products'
import { OrderProduct } from 'framework/custom-interfaces/order-products'
import getCustomerId from '@framework/customer/get-customer-id'

export type OrderProductsHandler = {
  listOrderProducts: BigcommerceHandler<any, { orderId?: number }>
}

const METHODS = ['GET']

const orderProducts: BigcommerceApiHandler<
  OrderProduct[],
  OrderProductsHandler
> = async (req, res, config, handlers) => {
  if (!isAllowedMethod(req, res, METHODS)) return

  const { cookies } = req
  const customerToken = cookies[config.customerCookie]

  try {
    if (customerToken) {
      const customerId =
        customerToken && (await getCustomerId({ customerToken, config }))

      if (!customerId) {
        // If the customerToken is invalid, then this request is too
        return res.status(404).json({
          data: null,
          errors: [{ message: 'Wishlist not found' }],
        })
      }

      if (req.method === 'GET') {
        const orderId = parseInt(req.query.orderId as string)
        return await handlers.listOrderProducts({
          req,
          res,
          config,
          body: { orderId },
        })
      }
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
  listOrderProducts,
}

export default createApiHandler(orderProducts, handlers, {})
