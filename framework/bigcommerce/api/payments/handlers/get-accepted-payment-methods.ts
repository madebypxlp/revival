import { BigcommerceApiError } from '../../utils/errors'
import type { PaymentHandler } from '..'
import getCustomerId from '@framework/customer/get-customer-id'

const getAcceptedPaymentMethods: PaymentHandler['getAcceptedPaymentMethods'] =
  async ({ res, config, body: { customerToken, cartdId } }) => {
    let result = { data: {} }

    //  cartdId = checkout_id
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
          `/v3/payments/accepted-payment-methods`
        )
        console.log(result, 'XXX')
      }
    } catch (error) {
      if (error instanceof BigcommerceApiError && error.status === 404) {
      } else {
        throw error
      }
    }

    res.status(200).json({ data: result ?? null })
  }

export default getAcceptedPaymentMethods
