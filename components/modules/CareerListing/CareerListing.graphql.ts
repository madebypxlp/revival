const CareerListingFragment = (t: string) => `
  fragment CareerListing_${t} on ${t}_CareerListing {
    fieldGroupName
    headline
    anchor
    link {
      ...Link
    }
    jobs {
      ... on Job {
        title
        postTypeJob {
          description
        }
      }
    }
  }
`
export default CareerListingFragment
