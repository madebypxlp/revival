import { useHook, useSWRHook } from '../utils/use-hook'
import { SWRFetcher } from '../utils/default-fetcher'
import type { HookFetcherFn, SWRHook } from '../utils/types'
import type { Provider } from '..'
import { CheckoutOrder } from 'framework/custom-interfaces/checkout'

export type CheckoutHook<
  H extends SWRHook<any, any, any> = SWRHook<CheckoutOrder | null, {}>
> = ReturnType<H['useHook']>

export const fetcher: HookFetcherFn<any | null, any> = SWRFetcher

const fn = (provider: Provider) => provider.checkout?.getCheckout!

const getCheckout: CheckoutHook = () => {
  const hook = useHook(fn)
  return useSWRHook({ fetcher, ...hook })()
}

export default getCheckout
