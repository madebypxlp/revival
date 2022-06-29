import Image from '@components/fragments/Image'

export default `
  ${Image}
  query PostsByCategory($categoryId: Int, $afterId: String) {
    categories {
      nodes {
        categoryId
        name
        uri
      }
    }
    posts(
      where: { categoryId: $categoryId, orderby: {field: DATE, order: DESC} },
      first: 9
      after: $afterId
    ) {
      nodes {
        id
        slug
        uri
        title
        title
        featuredImage {
          node {
            ...Image
          }
        }
        categories {
          nodes {
            id
            name
          }
        }
        tags {
          nodes {
            id
            name
          }
        }
      }
    }
    postCursors: posts(
      where: { categoryId: $categoryId, orderby: {field: DATE, order: DESC} },
      first: 10000,
    ) {
      edges {
        cursor
      }
    }
  }
`

export const getCategoryIdBySlug = `
query getCategoryIdBySlug($slug: [String]) {
  categories(where: {slug: $slug}) {
    nodes {
      categoryId
      name
      description
    }
  }
}
`
