export default interface IProductCard {
  name: string
  id: string | number
  price: number
  oldPrice?: number
  imageURL: string
  isNew?: boolean
  isPrescription?: boolean
  isOurBrand?: boolean
  label?: string
  isFavorite?: boolean // up to this parameter, it should be all part of a 'product' interface,
  showFavoriteIcon?: boolean
}
