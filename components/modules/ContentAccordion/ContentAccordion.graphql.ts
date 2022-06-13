const ContentAccordionFragment = (t: string) => `
  fragment ContentAccordion_${t} on ${t}_ContentAccordion {
    fieldGroupName
    headline
    accordion {
      copy
      headline
    }
  }
`
export default ContentAccordionFragment
