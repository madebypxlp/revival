const NewsletterSignUpFragment = (t: string, flexible: boolean = false) => `
  fragment NewsletterSignUp_${t} on ${t}_NewsletterSignUp {
    fieldGroupName
    ${flexible && `newsletterSignUp {`}
    anchor
    buttonLabel
    headline
    subline
    ${flexible && `}`}
  }
`
export default NewsletterSignUpFragment
