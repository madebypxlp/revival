const BrandListFragment = (t: string) => `
  fragment BrandList_${t} on ${t}_BrandList {
    fieldGroupName
  }
`
export default BrandListFragment
