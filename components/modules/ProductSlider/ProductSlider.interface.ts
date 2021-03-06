import Link from '@components/interfaces/Link'

export default interface IProductSlider {
  fieldGroupName: string
  headline: string
  link: Link
  products: [
    {
      productId: number
    }
  ]
}
