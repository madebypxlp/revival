import Image from '@components/interfaces/Image'

export default interface IProductSliderWithBigImage {
  fieldGroupName: string
  products: [
    {
      productId: string
    }
  ]
  image: Image
}
