import Image from '@components/interfaces/Image'
import Link from '@components/interfaces/Link'

export default interface ICarouselHero {
  fieldGroupName: string
  copy: string
  headline: string
  subline: string
  link: Link
  images: [
    {
      image: Image
    }
  ]
}
