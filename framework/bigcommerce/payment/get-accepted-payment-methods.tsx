import { useMemo } from 'react'
import { SWRHook } from '@commerce/utils/types'
import getAcceptedPaymentMethods, {
  PaymentMethods,
} from '@commerce/payment/get-accepted-payment-methods'
import { PaymentMethod } from 'framework/custom-interfaces/payment-method'

export default getAcceptedPaymentMethods as PaymentMethods<typeof handler>

export const handler: SWRHook<
  PaymentMethod[] | null,
  any,
  { productId?: number } & any
> = {
  fetchOptions: {
    url: '/api/bigcommerce/payment/accepted-payment-methods',
    method: 'GET',
  },
  async fetcher({ options, fetch }) {
    // Use a dummy base as we only care about the relative path
    const url = new URL(options.url!, 'http://a')
    return fetch({
      url: url.pathname + url.search,
      method: options.method,
    })
  },
  useHook:
    ({ useData }) =>
    (input) => {
      const response = useData({
        swrOptions: {
          revalidateOnFocus: false,
          ...input?.swrOptions,
        },
      })
      return useMemo(
        () =>
          Object.create(response, {
            isEmpty: {
              get() {
                return response
              },
              enumerable: true,
            },
          }),
        [response]
      )
    },
}
