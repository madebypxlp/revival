import { ImageComponent } from "@components/fragments/Image"

const ImageWithInfosFragment = (t: string) => `
  fragment ImageWithInfos on ${t}_ImageWithInfos {
    fieldGroupName
    copy
    headline
    subline
    link {
      ...Link
    }
    ${ImageComponent()}
    sublineImage {
      sourceUrl
      altText
    }
    facts {
      text
      icon {
        sourceUrl
        altText
      }
    }
  }
`
export default ImageWithInfosFragment
