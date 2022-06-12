import Image, { MediaItem } from '@components/interfaces/Image'
import Link from '@components/interfaces/Link'

export default interface IImageWithInfos {
  fieldGroupName: string
  copy: string
  headline: string
  subline: string
  link: Link
  image: Image
  sublineImage: MediaItem
  facts: [
    {
      text: string
      icon: MediaItem
    }
  ]
}
