import Image from '@components/interfaces/Image'
import Link from '@components/interfaces/Link'

export default interface ITextImage {
  fieldGroupName: string
  rows: [
    {
      buttonLink: Link
      classicLink: Link
      flipOrientation: boolean
      copy: string
      headline: string
      subline: string
      image: Image
    }
  ]
}
