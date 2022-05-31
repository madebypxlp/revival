const FullwidthItemRowFragment = (t: string) => `
  fragment FullwidthItemRow on ${t}_FullwidthItemRow {
    fieldGroupName
    backgroundColor
    headline
    subline
    items {
      label
      link {
        ...Link
      }
      icon {
        altText
        sourceUrl
      }
    }
  }
`
export default FullwidthItemRowFragment
