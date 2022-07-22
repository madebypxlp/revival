import { useHook, useSWRHook } from '../utils/use-hook'
import { SWRFetcher } from '../utils/default-fetcher'
import type { HookFetcherFn, SWRHook } from '../utils/types'
import type { Provider } from '..'
import { Order } from 'framework/custom-interfaces/order'

export type UseOrders<
  H extends SWRHook<any, any, any> = SWRHook<
    any | null,
    { customerId?: number; includeProducts: boolean },
    { isEmpty?: boolean }
  >
> = ReturnType<H['useHook']>

export const fetcher: HookFetcherFn<[Order] | null, any> = SWRFetcher

const fn = (provider: Provider) => provider.orders?.useOrders!

const useOrders: UseOrders = (input) => {
  const hook = useHook(fn)
  return useSWRHook({ fetcher, ...hook })(input)
}

export default useOrders
