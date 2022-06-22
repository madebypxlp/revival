const InlineVideoFragment = (t: string, flexible: boolean = false) => `
  fragment InlineVideo_${t} on ${t}_InlineVideo {
    fieldGroupName
    ${flexible ? `inlineVideo {` : ''}
    title
    youtubeId
    ${flexible ? `}` : ''}
  }
`
export default InlineVideoFragment
