const AuthorRowFragment = (t: string) => `
  fragment AuthorRow_${t} on ${t}_AuthorRow {
    fieldGroupName
  }
`
export default AuthorRowFragment
