const ShopByCategoryFragment = (t: string) => `
  fragment ShopByCategory on ${t}_ShopByCategory {
    fieldGroupName
  }
`
export default ShopByCategoryFragment
