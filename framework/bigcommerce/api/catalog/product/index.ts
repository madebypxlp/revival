import isAllowedMethod from '../../utils/is-allowed-method'
import createApiHandler, {
  BigcommerceApiHandler,
  BigcommerceHandler,
} from '../../utils/create-api-handler'
import { BigcommerceApiError } from '../../utils/errors'
import getCatalogProduct from './handlers/product'
import getCustomerId from '@framework/customer/get-customer-id'
import product from 'pages/api/bigcommerce/catalog/products/product'

export type CatalogProductHandler = {
  getCatalogProduct: BigcommerceHandler<any, { productId?: number }>
}

const METHODS = ['GET']

const catalogProduct: BigcommerceApiHandler<
  any,
  CatalogProductHandler
> = async (req, res, config, handlers) => {
  if (!isAllowedMethod(req, res, METHODS)) return

  const { cookies } = req
  const customerToken = cookies[config.customerCookie]

  try {
    if (customerToken) {
      const customerId =
        customerToken && (await getCustomerId({ customerToken, config }))

      if (!customerId) {
        // If the customerToken is invalid, then this request is too
        return res.status(404).json({
          data: null,
          errors: [{ message: 'Wishlist not found' }],
        })
      }

      if (req.method === 'GET') {
        const productId = parseInt(req.query.productId as string)
        console.log(productId)
        return await handlers.getCatalogProduct({
          req,
          res,
          config,
          body: { productId },
        })
      }
    }
  } catch (error) {
    console.error(error)

    const message =
      error instanceof BigcommerceApiError
        ? 'An unexpected error ocurred with the Bigcommerce API'
        : 'An unexpected error ocurred'

    res.status(500).json({ data: null, errors: [{ message }] })
  }
}

export const handlers = {
  getCatalogProduct,
}

export default createApiHandler(catalogProduct, handlers, {})
