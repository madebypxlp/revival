import { useMemo } from 'react'
import { SWRHook } from '@commerce/utils/types'
import { OrderProduct } from 'framework/custom-interfaces/order-products'
import getCheckout, { CheckoutHook } from '@commerce/checkout/get-checkout'
import { CheckoutOrder } from 'framework/custom-interfaces/checkout'

export default getCheckout as CheckoutHook<typeof handler>

export const handler: SWRHook<CheckoutOrder | null, any, {} & any> = {
  fetchOptions: {
    url: '/api/bigcommerce/checkout',
    method: 'GET',
  },
  async fetcher({ options, fetch }) {
    const url = new URL(options.url!, 'http://a')
    return fetch({
      url: url.pathname,
      method: options.method,
    })
  },
  useHook:
    ({ useData }) =>
    () => {
      const response = useData({
        swrOptions: {
          revalidateOnFocus: false,
          refreshInterval: 2000,
        },
      })
      return useMemo(
        () =>
          Object.create(response, {
            isEmpty: {
              get() {
                return response.data
              },
              enumerable: true,
            },
          }),
        [response]
      )
    },
}
