import { LineItem } from '@commerce/types'
import { OrderProduct } from 'framework/custom-interfaces/order-products'

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
  rightColumn?: 'price' | 'empty' | 'edit-details' | 'shipment-options'
  shippingRestrictionsMessage?: string
  currencyCode: string
  vetInfo?: {
    approvalMethod: string
    info: IVetInfo[]
  }
}
