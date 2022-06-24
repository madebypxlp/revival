import Image from '@components/fragments/Image'

export default `
  ${Image}
  query PostsByCategory($categoryId: Int) {
    categories {
      nodes {
        categoryId
        name
        uri
      }
    }
    posts(where: {categoryId: $categoryId}, last: 1000) {
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
