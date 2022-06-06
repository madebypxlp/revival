const ShopByCategoryFragment = (t: string) => `
  fragment ShopByCategory_${t} on ${t}_ShopByCategory {
    fieldGroupName
    headline
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
