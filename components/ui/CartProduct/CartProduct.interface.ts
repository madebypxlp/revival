import { LineItem, ProductVariant } from '@commerce/types'
import IProductCard from '../ProductCard/ProductCard.interface'

export interface IVetInfo {
  vet: string
  pet: string
  quantity: number
}

export default interface ICartProduct {
  product: LineItem
  variant: 'cart' | 'sidebar' | 'checkout' | 'account'
  className?: string
  showCartControls?: boolean
  showPrescriptionIcon?: boolean
  showPrescriptionLabel?: boolean
  showPrescriptionExtraInfo?: boolean
  showBuyItAgain?: boolean
  showAddToCart?: boolean
  showPlaceNewOrder?: boolean
  rightColumn?: 'price' | 'empty' | 'edit-details'
  shippingRestrictionsMessage?: string
  currencyCode: string
  vetInfo?: {
    approvalMethod: string
    info: IVetInfo[]
  }
}
