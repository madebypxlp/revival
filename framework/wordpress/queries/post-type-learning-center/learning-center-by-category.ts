import Image from '@components/fragments/Image'

export const query = (
  categorySlugs?: string[],
  contentTypeSlugs?: string[]
) => `
  ${Image}
  query LearningCenterByCategory($size: Int!, $offset: Int!) {
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
      where: {
        orderby: {field: DATE, order: DESC}
        offsetPagination: { size: $size, offset: $offset }
        taxQuery: {
          relation: AND,
          taxArray: [
            ${
              !!categorySlugs?.length
                ? `
              {
                taxonomy: LCCATEGORY,
                field: SLUG
                operator: IN,
                terms: ${JSON.stringify(categorySlugs)},
              },
            `
                : ''
            }
            ${
              !!contentTypeSlugs?.length
                ? `
              {
                taxonomy: CONTENT_TYPE,
                field: SLUG
                operator: IN,
                terms: ${JSON.stringify(contentTypeSlugs)},
              },
            `
                : ''
            }
          ]
        }
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

export const getLcCategoryIdBySlug = `
  query getCategoryIdBySlug($slug: [String]) {
    categories: lcCategories(where: {slug: $slug}) {
      nodes {
        lcCategoryId
        name
        slug
        description
      }
    }
  }
`

export default query
