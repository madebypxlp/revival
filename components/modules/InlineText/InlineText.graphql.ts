const InlineTextFragment = (t: string) => `
  fragment InlineText_${t} on ${t}_InlineText {
    fieldGroupName
    backgroundPawImage
    headline
    text
    headlineColor
    link {
      ...Link
    }
  }
`
export default InlineTextFragment
