export default `
query Data {
  latestLearningCenterPosts: allLearningCenter(
    last: 4
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
    }
  }
}

`
