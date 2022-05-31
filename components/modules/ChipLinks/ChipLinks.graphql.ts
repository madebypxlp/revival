const ChipLinksFragment = (t: string) => `
  fragment ChipLinks on ${t}_ChipLinks {
    fieldGroupName
    headline
    links {
      link {
        ...Link
      }
      defaultYellow
    }
  }
`
export default ChipLinksFragment
