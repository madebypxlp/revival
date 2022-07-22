import { useHook, useSWRHook } from '../../utils/use-hook'
import { SWRFetcher } from '../../utils/default-fetcher'
import type { HookFetcherFn, SWRHook } from '../../utils/types'
import type { Provider } from '../..'
import { CatalogProduct as CatalogProductInterface } from 'framework/custom-interfaces/catalog-product'

export type CatalogProduct<
  H extends SWRHook<any, any, any> = SWRHook<any | null, { productId?: number }>
> = ReturnType<H['useHook']>

export const fetcher: HookFetcherFn<CatalogProductInterface | null, any> =
  SWRFetcher

const fn = (provider: Provider) => provider.catalog?.getCatalogProduct!

const getCatalogProduct: CatalogProduct = (input) => {
  const hook = useHook(fn)
  return useSWRHook({ fetcher, ...hook })(input)
}

export default getCatalogProduct
