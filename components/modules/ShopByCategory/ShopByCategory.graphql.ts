const ShopByCategoryFragment = (t: string) => `
  fragment ShopByCategory on ${t}_ShopByCategory {
    fieldGroupName
    categories {
      link {
        ...Link
      }
      image {
        sourceUrl
        altText
      }
    }
  }
`
export default ShopByCategoryFragment
