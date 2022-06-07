const WYSIWYGFragment = (t: string) => `
  fragment Wysiwyg_${t} on ${t}_Wysiwyg {
    fieldGroupName
    text
  }
`
export default WYSIWYGFragment
