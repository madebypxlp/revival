import { ImageComponent } from '@components/fragments/Image'

const InlineImageFragment = (t: string, flexible: boolean = false) => `
  fragment InlineImage_${t} on ${t}_InlineImage {
    fieldGroupName
    ${flexible ? `inlineImage {` : ''}
    alignment
    ${ImageComponent()}
    ${flexible ? `}` : ''}
  }
`
export default InlineImageFragment
