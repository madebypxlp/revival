const ResourceGridFragment = (t: string) => `
  fragment ResourceGrid_${t} on ${t}_ResourceGrid {
    fieldGroupName
    headline
    link {
      ...Link
    }
    featuredResource {
      ... on Learning_center {
        id
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        title
      }
    }
  }
`
export default ResourceGridFragment
