const CareerListingFragment = (t: string) => `
  fragment CareerListing_${t} on ${t}_CareerListing {
    fieldGroupName
    headline
    anchor
  }
`
export default CareerListingFragment
