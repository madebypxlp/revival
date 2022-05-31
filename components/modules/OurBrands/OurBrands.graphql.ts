const OurBrandsFragment = (t: string) => `
  fragment OurBrands_${t} on ${t}_OurBrands {
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
