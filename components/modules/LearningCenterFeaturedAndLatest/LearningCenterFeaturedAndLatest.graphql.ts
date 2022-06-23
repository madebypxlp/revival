const LearningCenterFeaturedAndLatestFragment = (t: string) => `
  fragment LearningCenterFeaturedAndLatest_${t} on ${t}_LearningCenterFeaturedAndLatest {
    fieldGroupName
    latestStoriesHeadline
    featuredStoriesHeadline
    featuredArticles {
      article {
        ... on Learning_center {
          id
          title
          uri
          contentTypes {
            nodes {
              id
              slug
              name
              learningCenterContentType {
                image {
                  ...Image
                }
              }
            }
          }
          categories {
            nodes {
              uri
              name
            }
          }
          featuredImage {
            node {
              ...Image
            }
          }
        }
      }
    }
  }
`
export default LearningCenterFeaturedAndLatestFragment
