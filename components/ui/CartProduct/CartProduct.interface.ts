import IProductCard from '../ProductCard/ProductCard.interface'

export interface IVetInfo {
  vet: string
  pet: string
  quantity: number
}

export default interface ICartProduct {
  product: IProductCard
  quantity: number
  variant: 'cart' | 'sidebar' | 'checkout' | 'account'
  className?: string
  showCartControls?: boolean
  showPrescriptionIcon?: boolean
  showPrescriptionLabel?: boolean
  showPrescriptionExtraInfo?: boolean
  rightColumn?: 'price' | 'empty' | 'edit-details'
  shippingRestrictionsMessage?: string
  vetInfo?: {
    approvalMethod: string
    info: IVetInfo[]
  }
}