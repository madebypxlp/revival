import { CatalogProduct } from 'framework/custom-interfaces/catalog-product'
import type { Product } from '@commerce/types'

export default interface IProductCardGrid {
  headline?: string
  variant?: 'favorites' | 'shop' | 'cart' | 'default'
  className?: string
  products?: Product[]
}
