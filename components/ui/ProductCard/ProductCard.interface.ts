import { Product } from '@commerce/types'

interface CustomProductProperies {
  isNew?: boolean
  isPrescription?: boolean
  isOurBrand?: boolean
  label?: string
  isFavorite?: boolean // up to this parameter, it should be all part of a 'product' interface,
  showFavoriteIcon?: boolean
}
export default interface IProductCard extends CustomProductProperies {
  product: Product
}
