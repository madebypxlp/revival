import { OrderProduct } from 'framework/custom-interfaces/order-products'

export interface IVetInfo {
  vet: string
  pet: string
  quantity: number
}

export default interface IOrderProduct {
  orderProduct: OrderProduct
  variant: 'cart' | 'sidebar' | 'checkout' | 'account'
  className?: string
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
