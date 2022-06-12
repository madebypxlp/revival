import { ImageComponent } from '@components/fragments/Image'

const ImageInfoSliderFragment = (t: string) => `
  fragment ImageInfoSlider_${t} on ${t}_ImageInfoSlider {
    fieldGroupName
    headline
    slides {
      copy
      headline
      ${ImageComponent()}
    }
  }
`
export default ImageInfoSliderFragment
