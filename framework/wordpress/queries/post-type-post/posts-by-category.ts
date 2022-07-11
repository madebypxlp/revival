import Image from '@components/fragments/Image'

export default `
  ${Image}
  query PostsByCategory($categoryId: Int, $size: Int!, $offset: Int!) {
    categories {
      nodes {
        categoryId
        name
        uri
      }
    }
    posts(
      where: {
        categoryId: $categoryId,
        orderby: {field: DATE, order: DESC}
        offsetPagination: { size: $size, offset: $offset }
      },
    ) {
      nodes {
        id
        slug
        uri
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
      }
      pageInfo {
        offsetPagination {
          # Get the total node count in the connection. Using this
          # field activates total calculations which will make your
          # queries slower. Use with caution.
          total
        }
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
