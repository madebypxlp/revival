import { ImageComponent } from '@components/fragments/Image'

const ClassicHeroFragment = (t: string, flexible: boolean = false) => `
  fragment ClassicHero_${t} on ${t}_ClassicHero {
    fieldGroupName
    ${flexible ? `classicHero {` : ''}
    copy
    headline
    subline
    ${ImageComponent()}
    ${flexible ? `}` : ''}
  }
`
export default ClassicHeroFragment
