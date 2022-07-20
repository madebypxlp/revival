import { useHook, useSWRHook } from '../utils/use-hook'
import { SWRFetcher } from '../utils/default-fetcher'
import type { HookFetcherFn, SWRHook } from '../utils/types'
import type { Provider } from '..'
import { PaymentMethod } from 'framework/custom-interfaces/payment-method'

export type PaymentMethods<
  H extends SWRHook<any, any, any> = SWRHook<any | null, {}>
> = ReturnType<H['useHook']>

export const fetcher: HookFetcherFn<PaymentMethod[] | null, any> = SWRFetcher

const fn = (provider: Provider) => provider.payments?.getAcceptedPaymentMethods!

const getAcceptedPaymentMethods: PaymentMethods = () => {
  const hook = useHook(fn)
  return useSWRHook({ fetcher, ...hook })()
}

export default getAcceptedPaymentMethods
