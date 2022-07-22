import { useMemo } from 'react'
import { SWRHook } from '@commerce/utils/types'
import getCatalogProduct, {
  CatalogProduct,
} from '@commerce/catalog/products/product'
import { CatalogProduct as CatalogProductInterface } from 'framework/custom-interfaces/catalog-product'

export default getCatalogProduct as CatalogProduct<typeof handler>

export const handler: SWRHook<
  CatalogProductInterface | null,
  any,
  { productId?: number } & any
> = {
  fetchOptions: {
    url: '/api/bigcommerce/catalog/products/product',
    method: 'GET',
  },
  async fetcher({ input: { productId }, options, fetch }) {
    if (!productId) return null
    // Use a dummy base as we only care about the relative path
    const url = new URL(options.url!, 'http://a')
    url.searchParams.set('productId', productId)
    return fetch({
      url: url.pathname + url.search,
      method: options.method,
    })
  },
  useHook:
    ({ useData }) =>
    (input) => {
      const response = useData({
        input: { productId: input.productId },
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
                return response.data
              },
              enumerable: true,
            },
          }),
        [response]
      )
    },
}
