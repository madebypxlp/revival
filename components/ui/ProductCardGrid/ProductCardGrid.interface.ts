import { CatalogProduct } from 'framework/custom-interfaces/catalog-product'

export default interface IProductCardGrid {
  headline?: string
  variant?: 'favorites'
  className?: string
  products: CatalogProduct[]
}
