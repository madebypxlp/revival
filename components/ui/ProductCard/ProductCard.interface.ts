import Image from '@components/interfaces/Image'

export default interface IProductCard {
  id: string
  image: Image
  isNew?: boolean
  isPrescription?: boolean
  isOurBrand?: boolean
  label?: string
  name: string
  price: number
  oldPrice?: number
}
