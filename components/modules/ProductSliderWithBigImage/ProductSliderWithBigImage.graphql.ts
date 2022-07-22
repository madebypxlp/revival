import { ImageComponent } from '@components/fragments/Image'

const ProductSliderWithBigImageFragment = (t: string) => `
  fragment ProductSliderWithBigImage_${t} on ${t}_ProductSliderWithBigImage {
    fieldGroupName
    productSliderWithBigImage {
      products {
        productId
      }
      ${ImageComponent()}
    }
  }
`
export default ProductSliderWithBigImageFragment
