const InlineTextFragment = (t: string, flexible: boolean = false) => `
  fragment InlineText_${t} on ${t}_InlineText {
    fieldGroupName
    ${flexible ? `inlineText {` : ''}
    backgroundPawImage
    headline
    text
    headlineColor
    link {
      ...Link
    }
    ${flexible ? `}` : ''}
  }
`
export default InlineTextFragment
