const MoreArticlesFragment = (t: string) => `
  fragment MoreArticles_${t} on ${t}_MoreArticles {
    fieldGroupName
    headline
  }
`
export default MoreArticlesFragment
