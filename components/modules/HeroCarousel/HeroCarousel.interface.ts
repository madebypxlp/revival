import Image from '@components/interfaces/Image'
import Link from '@components/interfaces/Link'

export default interface IHeroCarousel {
  fieldGroupName: string
  carousel: [
    {
      headline: string
      subline: string
      blurb: string
      buttonLink: Link
      defaultLink: Link
      image: Image
    }
  ]
}
