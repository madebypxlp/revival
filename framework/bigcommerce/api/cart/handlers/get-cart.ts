import type { BigcommerceCart } from '../../../types'
import { BigcommerceApiError } from '../../utils/errors'
import getCartCookie from '../../utils/get-cart-cookie'
import type { CartHandlers } from '..'
import { CatalogProduct } from 'framework/custom-interfaces/catalog-product'

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
      result.data?.line_items.physical_items.forEach(async (e) => {
        const pid = e.product_id
        const productData = (await config.storeApiFetch(
          `/v3/catalog/products/${pid}`
        )) as { data: CatalogProduct }
        if (productData && productData?.data) {
          const product = productData.data as CatalogProduct
          const r = product.related_products
          r.forEach(async (item) => {
            const rData = await config.storeApiFetch(
              `/v3/catalog/products/${item}`
            )
            console.log('FEINI', rData)
          })
        }
      })
    } catch (error) {
      if (error instanceof BigcommerceApiError && error.status === 404) {
        // Remove the cookie if it exists but the cart wasn't found
        res.setHeader('Set-Cookie', getCartCookie(config.cartCookie))
      } else {
        throw error
      }
    }
  }

  res.status(200).json({ data: result.data ?? null })
}

export default getCart
