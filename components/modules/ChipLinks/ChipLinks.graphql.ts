const ChipLinksFragment = (t: string) => `
  fragment ChipLinks_${t} on ${t}_ChipLinks {
    fieldGroupName
    headline
    links {
      link {
        ...Link
      }
      defaultYellow
    }
    fullwidthVariant
  }
`
export default ChipLinksFragment
