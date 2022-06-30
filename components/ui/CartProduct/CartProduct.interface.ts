import IProductCard from '../ProductCard/ProductCard.interface'

export default interface ICartProduct {
  product: IProductCard
  showCartControls?: boolean
  variant: 'cart' | 'other'
}
