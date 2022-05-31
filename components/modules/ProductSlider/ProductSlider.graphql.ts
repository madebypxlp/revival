const ProductSliderFragment = (t: string) => `
  fragment ProductSlider on ${t}_ProductSlider {
    fieldGroupName
    headline
    link {
     ...Link
    }
    products {
      productId
    }
  }
`
export default ProductSliderFragment
