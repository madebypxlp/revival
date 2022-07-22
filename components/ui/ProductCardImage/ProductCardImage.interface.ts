import { ProductImage } from '@commerce/types'

export default interface IProductCardImage {
  images: ProductImage[]
  isNew?: boolean
  isPrescription?: boolean
  isOurBrand?: boolean
  label?: string
  variant?: 'cart' | 'checkout' | 'sidebar' | 'account'
  isFavorite?: boolean
  showFavoriteIcon?: boolean
}
