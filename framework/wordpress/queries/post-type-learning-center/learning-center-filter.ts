export default `
query LearningCenterFilter {
  categories: lcCategories(last: 100) {
    nodes {
      id
      slug
      name
      uri
    }
  }
  contentTypes(last: 100) {
    nodes {
      id
      slug
      name
      uri
    }
  }

  data: allLearningCenter(
    last: 1000
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
      categories: lcCategories {
        nodes {
          name
          uri
        }
      }
    }
  }
}
`
