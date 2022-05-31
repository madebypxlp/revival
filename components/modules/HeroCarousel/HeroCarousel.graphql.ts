import { ImageComponent } from "@components/fragments/Image"

const HeroCarouselFragment = (t: string) => `
  fragment HeroCarousel on ${t}_HeroCarousel {
    fieldGroupName
    carousel {
      blurb
      buttonLink {
        ...Link
      }
      defaultLink {
        ...Link
      }
      headline
      ${ImageComponent()}
      subline
    }
  }
`
export default HeroCarouselFragment
