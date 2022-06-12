import { ImageComponent } from '@components/fragments/Image'

const ClassicHeroFragment = (t: string) => `
  fragment ClassicHero_${t} on ${t}_ClassicHero {
    fieldGroupName
    copy
    headline
    subline
    ${ImageComponent()}
  }
`
export default ClassicHeroFragment
