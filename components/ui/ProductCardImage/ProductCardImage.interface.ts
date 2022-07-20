import { Image } from '@commerce/types'

export default interface IProductCardImage {
  image: Image
  isNew?: boolean
  isPrescription?: boolean
  isOurBrand?: boolean
  label?: string
  variant?: 'cart' | 'checkout' | 'sidebar' | 'account'
  isFavorite?: boolean
  showFavoriteIcon?: boolean
}
