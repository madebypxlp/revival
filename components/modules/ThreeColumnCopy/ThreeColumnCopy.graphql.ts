const ThreeColumnCopyFragment = (t: string) => `
  fragment ThreeColumnCopy_${t} on ${t}_ThreeColumnCopy {
    fieldGroupName
    backgroundColor
    headline
    subline
    columns {
      copy
    }
  }
`
export default ThreeColumnCopyFragment
