export default `
query Data {
  categories {
    nodes {
      categoryId
      name
      uri
    }
  }
  data: posts(last: 7, where: {orderby: {field: DATE, order: DESC}}) {
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
      categories {
        nodes {
          name
        }
      }
      tags {
        nodes {
          name
        }
      }
    }
  }
}
`
