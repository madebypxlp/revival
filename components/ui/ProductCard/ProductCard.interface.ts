import { Product } from '@commerce/types'

export default interface IProductCard {
  product: Product
  isNew?: boolean
  isPrescription?: boolean
  isOurBrand?: boolean
  label?: string
  isFavorite?: boolean // up to this parameter, it should be all part of a 'product' interface,
  showFavoriteIcon?: boolean
}
