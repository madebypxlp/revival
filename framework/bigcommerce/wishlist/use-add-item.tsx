import { useCallback } from 'react'
import type { MutationHook } from '@commerce/utils/types'
import { CommerceError } from '@commerce/utils/errors'
import useAddItem, { UseAddItem } from '@commerce/wishlist/use-add-item'
import type { ItemBody, AddItemBody } from '../api/wishlist'
import useCustomer from '../customer/use-customer'
import useWishlist from './use-wishlist'

export default useAddItem as UseAddItem<typeof handler>

export const handler: MutationHook<any, {}, ItemBody, AddItemBody> = {
  fetchOptions: {
    url: '/api/bigcommerce/wishlist',
    method: 'POST',
  },
  useHook:
    ({ fetch }) =>
    () => {
      const { data: customer } = useCustomer()
      const { revalidate } = useWishlist()

      return useCallback(
        async (item) => {
          if (!customer) {
            // A signed customer is required in order to have a wishlist
            throw new CommerceError({
              message: 'Signed customer not found',
            })
          }

          // TODO: add validations before doing the fetch
          const data = await fetch({ input: { item } })
          await revalidate()
          return data
        },
        [fetch, revalidate, customer]
      )
    },
}
