import { BigcommerceApiError } from '../../../utils/errors'
import type { OrderShipmentsHandler } from '..'

// Return all orders for customer
const getOrderShipments: OrderShipmentsHandler['getOrderShipments'] = async ({
  res,
  config,
  body,
}) => {
  let result = {}
  try {
    const { orderId } = body
    if (orderId) {
      result = await config.storeApiFetch(`/v2/orders/${orderId}/shipments`)
    }
  } catch (error) {
    if (error instanceof BigcommerceApiError && error.status === 404) {
    } else {
      throw error
    }
  }
  res.status(200).json({ data: result ?? null })
}

export default getOrderShipments
