import { ImageComponent } from '@components/fragments/Image'

const AccordionWithImageFragment = (t: string) => `
  fragment AccordionWithImage_${t} on ${t}_AccordionWithImage {
    fieldGroupName
    ${ImageComponent()}
    headline
    subline
    accordion {
      headline
      copy
    }
  }
`
export default AccordionWithImageFragment
