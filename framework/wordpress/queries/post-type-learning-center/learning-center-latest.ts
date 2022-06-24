export default `
query Data ($count: Int) {
  categories: lcCategories(last: 100) {
    nodes {
      name
      uri
      postTypeLearningCenterCategory {
        featured
      }
    }
  }
  latestLearningCenterPosts: allLearningCenter(
    last: $count
    where: {orderby: {field: DATE, order: DESC}}
  ) {
    nodes {
      id
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      title
      uri
    }
  }
}
`
