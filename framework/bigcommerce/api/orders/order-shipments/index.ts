import isAllowedMethod from '../../utils/is-allowed-method'
import createApiHandler, {
  BigcommerceApiHandler,
  BigcommerceHandler,
} from '../../utils/create-api-handler'
import { BigcommerceApiError } from '../../utils/errors'
import getOrderShipments from './handlers/order-shipments'
import { OrderShippingAddress } from 'framework/custom-interfaces/order-shipping-address'
import getCustomerId from '@framework/customer/get-customer-id'
import { OrderShipment } from 'framework/custom-interfaces/order-shipment'

export type OrderShipmentsHandler = {
  getOrderShipments: BigcommerceHandler<
    any,
    { orderId?: number; customerToken?: string }
  >
}

const METHODS = ['GET']

const orderShipments: BigcommerceApiHandler<
  OrderShipment[],
  OrderShipmentsHandler
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
        return await handlers.getOrderShipments({
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
  getOrderShipments,
}

export default createApiHandler(orderShipments, handlers, {})
