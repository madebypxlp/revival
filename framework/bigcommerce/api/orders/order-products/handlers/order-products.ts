import { BigcommerceApiError } from '../../../utils/errors'
import type { OrderProductsHandler } from '..'
import { OrderProduct } from 'framework/custom-interfaces/order-products'
import { ProductVariant } from '@commerce/types'
import { CatalogProductVariant } from 'framework/custom-interfaces/catalog-product-variant'
import { CatalogProductImages } from 'framework/custom-interfaces/catalog-product-images'

// Return all orders for customer
const listOrderProducts: OrderProductsHandler['listOrderProducts'] = async ({
  res,
  config,
  body,
}) => {
  let products: OrderProduct[] = []
  try {
    const { orderId } = body
    if (orderId) {
      products = await config.storeApiFetch(`/v2/orders/${orderId}/products`)
      if (products) {
        const variantData = (await Promise.all(
          products.map((e) => {
            return config.storeApiFetch(
              `/v3/catalog/products/${e.product_id}/variants/${e.variant_id}`
            )
          })
        )) as [{ data: CatalogProductVariant }]

        variantData
          .filter((e) => !!e)
          .forEach((element) => {
            const { data } = element
            if (data) {
              const { product_id } = data
              const parentProduct = products.find(
                (e) => e.product_id === product_id
              )
              if (parentProduct) {
                parentProduct.variant = element.data
              }
            }
          })

        const productImages = (await Promise.all(
          products.map((e) => {
            return config.storeApiFetch(
              `/v3/catalog/products/${e.product_id}/images`
            )
          })
        )) as [{ data: CatalogProductImages[] }]
      }
    }
  } catch (error) {
    if (error instanceof BigcommerceApiError && error.status === 404) {
    } else {
      throw error
    }
  }
  res.status(200).json({ data: products ?? null })
}

export default listOrderProducts
