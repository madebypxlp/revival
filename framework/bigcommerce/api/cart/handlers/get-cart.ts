import type { BigcommerceCart } from '../../../types'
import { BigcommerceApiError } from '../../utils/errors'
import getCartCookie from '../../utils/get-cart-cookie'
import type { CartHandlers } from '..'
import { CatalogProduct } from 'framework/custom-interfaces/catalog-product'
import { Product } from '@commerce/types'
import { normalizePrimaryImage } from '@framework/lib/normalize'

// Return current cart info
const getCart: CartHandlers['getCart'] = async ({
  res,
  body: { cartId },
  config,
}) => {
  let result: { data?: BigcommerceCart } = {}

  if (cartId) {
    try {
      result = await config.storeApiFetch(
        `/v3/carts/${cartId}?include=line_items.physical_items.options`
      )

      if (result.data) {
        const products = (await Promise.all(
          result.data.line_items.physical_items.map((e) => {
            const pid = e.product_id
            return config.storeApiFetch(`/v3/catalog/products/${pid}`)
          })
        )) as [{ data: CatalogProduct }]

        const relatedProducts = products
          .map((e) => e.data.related_products)
          .flat()
          .filter((e) => e > -1)

        const finalData = (await Promise.all(
          relatedProducts.map((e) => {
            return config.storeApiFetch(
              `/v3/catalog/products/${e}?include=primary_image, variants`
            )
          })
        )) as [{ data: CatalogProduct }]

        const relatedProductSet = finalData
          .map((e) => e.data)
          .map((p) => normalizePrimaryImage(p))

        if (result.data) {
          result.data.relatedProducts = relatedProductSet
        }
      }
    } catch (error) {
      console.log(error)
      if (error instanceof BigcommerceApiError && error.status === 404) {
        // Remove the cookie if it exists but the cart wasn't found
        //  res.setHeader('Set-Cookie', getCartCookie(config.cartCookie))
      } else {
        throw error
      }
    }
  }
  res.status(200).json({ data: result.data ?? null })
}

export default getCart
