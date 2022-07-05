import Image from '@components/fragments/Image'

export default `
  ${Image}
  query LearningCenterByCategory($categoryId: Int, $size: Int!, $offset: Int!) {
    categories: lcCategories(last: 100) {
      nodes {
        id
        name
        uri
      }
    }
    contentTypes(last: 100) {
      nodes {
        id
        name
        uri
      }
    }
  
    data: allLearningCenter(
      first: 6
      where: {
        lcCategoryId: $categoryId,
        orderby: {field: DATE, order: DESC}
        offsetPagination: { size: $size, offset: $offset }
      }
    ) {
      nodes {
        id
        featuredImage {
          node {
            ...Image
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

export const getLcCategoryIdBySlug = `
  query getCategoryIdBySlug($slug: [String]) {
    categories: lcCategories(where: {slug: $slug}) {
      nodes {
        lcCategoryId
        name
        description
      }
    }
  }
`
