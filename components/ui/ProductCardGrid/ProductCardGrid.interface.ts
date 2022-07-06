import { Product } from '@commerce/types'
import IProductCard from '../ProductCard/ProductCard.interface'

export default interface IProductCardGrid {
  headline: string
  products: IProductCard[]
}
