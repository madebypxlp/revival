import { useMemo } from 'react'
import { SWRHook } from '@commerce/utils/types'
import getOrderShippingAddresses, {
  OrderShippingAddresses,
} from '@commerce/orders/get-order-shipping-addresses'
import { OrderShippingAddress } from 'framework/custom-interfaces/order-shipping-address'

export default getOrderShippingAddresses as OrderShippingAddresses<
  typeof handler
>

export const handler: SWRHook<
  OrderShippingAddress[] | null,
  any,
  { orderId?: number } & any
> = {
  fetchOptions: {
    url: '/api/bigcommerce/orders/order-shipping-addresses',
    method: 'GET',
  },
  async fetcher({ input: { orderId }, options, fetch }) {
    if (!orderId) return null
    // Use a dummy base as we only care about the relative path
    const url = new URL(options.url!, 'http://a')
    url.searchParams.set('orderId', orderId)
    return fetch({
      url: url.pathname + url.search,
      method: options.method,
    })
  },
  useHook:
    ({ useData }) =>
    (input) => {
      const response = useData({
        input: { orderId: input.orderId },
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
                return (response.data?.length || 0) <= 0
              },
              enumerable: true,
            },
          }),
        [response]
      )
    },
}
