import { ImageComponent } from "@components/fragments/Image"

const TextImageFragment = (t: string) => `
  fragment TextImage on ${t}_TextImage {
    fieldGroupName
    rows {
      buttonLink {
        ...Link
      }
      classicLink {
        ...Link
      }
      copy
      flipOrientation
      headline
      subline
      ${ImageComponent()}
    }
  }
`
export default TextImageFragment
