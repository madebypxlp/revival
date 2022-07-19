import { useHook, useSWRHook } from '../utils/use-hook'
import { SWRFetcher } from '../utils/default-fetcher'
import type { HookFetcherFn, SWRHook } from '../utils/types'
import type { Provider } from '..'
import { Order } from 'framework/custom-interfaces/order'

export type OrderShippingAddresses<
  H extends SWRHook<any, any, any> = SWRHook<any | null, { orderId?: number }>
> = ReturnType<H['useHook']>

export const fetcher: HookFetcherFn<[Order] | null, any> = SWRFetcher

const fn = (provider: Provider) => provider.orders?.getOrderShippingAddresses!

const getOrderShippingAddresses: OrderShippingAddresses = (input) => {
  const hook = useHook(fn)
  return useSWRHook({ fetcher, ...hook })(input)
}

export default getOrderShippingAddresses
