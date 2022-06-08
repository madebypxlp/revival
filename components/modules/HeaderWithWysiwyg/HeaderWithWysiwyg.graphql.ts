const HeaderWithWysiwygFragment = (t: string) => `
  fragment HeaderWithWysiwyg_${t} on ${t}_HeaderWithWysiwyg {
    fieldGroupName
    headline
    subline
    link {
      ...Link
    }
    wysiwyg
  }
`
export default HeaderWithWysiwygFragment
