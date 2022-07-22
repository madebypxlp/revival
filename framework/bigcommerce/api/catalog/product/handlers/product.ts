import { BigcommerceApiError } from '../../../utils/errors'
import type { CatalogProductHandler } from '..'

// Return all orders for customer
const getCatalogProduct: CatalogProductHandler['getCatalogProduct'] = async ({
  res,
  config,
  body,
}) => {
  let result = { data: {} }
  try {
    const { productId } = body
    if (productId) {
      result = await config.storeApiFetch(`/v3/catalog/products/${productId}`)
    }
  } catch (error) {
    if (error instanceof BigcommerceApiError && error.status === 404) {
    } else {
      throw error
    }
  }
  res.status(200).json({ data: result.data ?? null })
}

export default getCatalogProduct
