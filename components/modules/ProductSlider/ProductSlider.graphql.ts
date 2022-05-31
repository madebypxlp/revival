const ProductSliderFragment = (t: string) => `
  fragment ProductSlider_${t} on ${t}_ProductSlider {
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
