import { BigcommerceApiError } from '../../utils/errors'
import type { OrdersHandler } from '..'
import getCustomerId from '@framework/customer/get-customer-id'

// Return all orders for customer
const getOrders: OrdersHandler['getOrders'] = async ({
  res,
  config,
  body: { customerToken },
}) => {
  let result = { data: {} }
  try {
    const customerId =
      customerToken && (await getCustomerId({ customerToken, config }))

    if (!customerId) {
      // If the customerToken is invalid, then this request is too
      return res.status(404).json({
        data: null,
        errors: [{ message: 'Orders not found' }],
      })
    }

    if (customerId) {
      result = await config.storeApiFetch(
        `/v2/orders?customer_id=${customerId}`
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

export default getOrders
