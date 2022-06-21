const NewsletterSignUpFragment = (t: string) => `
  fragment NewsletterSignUp_${t} on ${t}_NewsletterSignUp {
    fieldGroupName
    anchor
    buttonLabel
    headline
    subline
  }
`
export default NewsletterSignUpFragment
