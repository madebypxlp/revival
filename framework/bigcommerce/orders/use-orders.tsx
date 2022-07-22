import { useMemo } from 'react'
import { SWRHook } from '@commerce/utils/types'
import useCustomer from '../customer/use-customer'
import useOrders, { UseOrders } from '@commerce/orders/use-orders'
import { Order } from 'framework/custom-interfaces/order'

export default useOrders as UseOrders<typeof handler>

export const handler: SWRHook<
  Order[] | null,
  any,
  { customerId?: number } & any,
  { isEmpty?: boolean }
> = {
  fetchOptions: {
    url: '/api/bigcommerce/orders/orders',
    method: 'GET',
  },
  async fetcher({ input: { customerId }, options, fetch }) {
    if (!customerId) return null
    // Use a dummy base as we only care about the relative path
    const url = new URL(options.url!, 'http://a')
    url.searchParams.set('customer_id', customerId)
    return fetch({
      url: url.pathname + url.search,
      method: options.method,
    })
  },
  useHook:
    ({ useData }) =>
    (input) => {
      const { data: customer } = useCustomer()
      const response = useData({
        input: [['customerId', customer?.entityId]],
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
