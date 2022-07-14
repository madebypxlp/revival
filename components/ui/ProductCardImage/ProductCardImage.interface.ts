import Image from '@components/interfaces/Image'

export default interface IProductCardImage {
  imageUrl: string
  isNew?: boolean
  isPrescription?: boolean
  isOurBrand?: boolean
  label?: string
  variant?: 'cart' | 'checkout' | 'sidebar' | 'account'
  isFavorite?: boolean
  showFavoriteIcon?: boolean
}
