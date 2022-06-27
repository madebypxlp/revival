const BlogFilterFragment = (t: string) => `
  fragment BlogFilter_${t} on ${t}_BlogFilter {
    fieldGroupName
    actionCta {
      ...Link
    }
  }
`
export default BlogFilterFragment
