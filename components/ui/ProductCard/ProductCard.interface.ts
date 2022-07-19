import { Product, ProductVariant } from '@commerce/types'
import { CatalogProduct } from 'framework/custom-interfaces/catalog-product'

export default interface IProductCard extends CatalogProduct {
  isNew?: boolean
  isPrescription?: boolean
  isOurBrand?: boolean
  label?: string
  //  name?: string
  //  oldPrice?: number
  isFavorite?: boolean // up to this parameter, it should be all part of a 'product' interface,
  // but I am leaving that for refactoring until we have the ecommerce in place
  showFavoriteIcon?: boolean
}
