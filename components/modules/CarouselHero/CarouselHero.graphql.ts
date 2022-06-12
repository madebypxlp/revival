import { ImageComponent } from '@components/fragments/Image'

const CarouselHeroFragment = (t: string) => `
  fragment CarouselHero_${t} on ${t}_CarouselHero {
    fieldGroupName
    copy
    headline
    subline
    link {
      ...Link
    }
    images {
      ${ImageComponent()}
    }
  }
`
export default CarouselHeroFragment
