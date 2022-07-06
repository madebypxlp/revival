const ProductSliderFragment = (t: string, flexible: boolean = false) => `
  fragment ProductSlider_${t} on ${t}_ProductSlider {
    fieldGroupName
    ${flexible ? 'productSlider {' : ''}
    headline
    link {
     ...Link
    }
    products {
      productId
    }
    ${flexible ? '}' : ''}
  }
`
export default ProductSliderFragment
