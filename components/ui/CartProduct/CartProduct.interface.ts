import IProductCard from '../ProductCard/ProductCard.interface'

export default interface ICartProduct {
  product: IProductCard
  quantity: number
  showCartControls?: boolean
  variant: 'cart' | 'sidebar'
}
