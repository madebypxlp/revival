import Image from '@components/interfaces/Image'

export default interface IProductCardImage {
  image: Image
  isNew?: boolean
  isPrescription?: boolean
  isOurBrand?: boolean
  label?: string
  variant?: 'cart'
}
