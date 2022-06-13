import { ImageComponent } from '@components/fragments/Image'

const TextImageHeroFragment = (t: string) => `
  fragment TextImageHero_${t} on ${t}_TextImageHero {
    fieldGroupName
    copy
    headline
    subline
    ${ImageComponent()}
  }
`
export default TextImageHeroFragment
