import Image from '@components/interfaces/Image'

export default interface IProductCard {
  id: string
  image: Image
  isNew?: boolean
  isPrescription?: boolean
  isOurBrand?: boolean
  label?: string
  name: string
  price: number
  oldPrice?: number
  isFavorite: boolean // up to this parameter, it should be all part of a 'product' interface,
  // but I am leaving that for refactoring until we have the ecommerce in place
  showFavoriteIcon?: boolean
}
