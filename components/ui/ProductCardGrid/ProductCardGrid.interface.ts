import { Product, ProductVariant } from '@commerce/types'
import IProductCard from '../ProductCard/ProductCard.interface'

export default interface IProductCardGrid {
  headline?: string
  variant?: 'favorites'
  className?: string
  products: ProductVariant[]
}
