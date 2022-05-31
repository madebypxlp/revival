import Image from '@components/interfaces/Image'
import Link from '@components/interfaces/Link'

export default interface IImageWithInfos {
  fieldGroupName: string
  copy: string
  headline: string
  subline: string
  link: Link
  image: Image
  sublineImage: {
    sourceUrl: string
    altText: string
  }
  facts: [
    {
      text: string
      icon: {
        sourceUrl: string
        altText: string
      }
    }
  ]
}
