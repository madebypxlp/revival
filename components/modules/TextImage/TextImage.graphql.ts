const TextImageFragment = (t: string) => `
  fragment TextImage on ${t}_TextImage {
    fieldGroupName
  }
`
export default TextImageFragment
