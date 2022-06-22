const BlogFilterFragment = (t: string) => `
  fragment BlogFilter_${t} on ${t}_BlogFilter {
    fieldGroupName
    featuredCategories {
      id
      name
      slug
    }
    actionCta {
      ...Link
    }
  }
`
export default BlogFilterFragment
