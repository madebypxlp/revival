export default `
query Data ($count: Int) {
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
