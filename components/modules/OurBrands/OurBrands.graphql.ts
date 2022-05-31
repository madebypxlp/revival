const OurBrandsFragment = (t: string) => `
  fragment OurBrands on ${t}_OurBrands {
    fieldGroupName
    rows {
      headline
      link {
        ...Link
      }
      brands {
        brandLogo {
          sourceUrl
          altText
        }
        url
      }
    }
  }
`
export default OurBrandsFragment
