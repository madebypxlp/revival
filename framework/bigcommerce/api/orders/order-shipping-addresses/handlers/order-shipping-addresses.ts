import { BigcommerceApiError } from '../../../utils/errors'
import type { OrderShippingAddressesHandler } from '..'

// Return all orders for customer
const getOrderShippingAddresses: OrderShippingAddressesHandler['getOrderShippingAddresses'] =
  async ({ res, config, body }) => {
    let result = {}
    try {
      const { orderId } = body
      if (orderId) {
        result = await config.storeApiFetch(
          `/v2/orders/${orderId}/shipping_addresses`
        )
      }
    } catch (error) {
      if (error instanceof BigcommerceApiError && error.status === 404) {
      } else {
        throw error
      }
    }
    res.status(200).json({ data: result ?? null })
  }

export default getOrderShippingAddresses
