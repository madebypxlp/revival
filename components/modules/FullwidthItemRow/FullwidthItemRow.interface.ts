import { MediaItem } from '@components/interfaces/Image'
import Link from '@components/interfaces/Link'

export default interface IFullwidthItemRow {
  fieldGroupName: string
  backgroundColor: 'red' | 'blue'
  headline: string
  subline: string
  items: [
    {
      label: string
      link: Link
      icon: MediaItem
    }
  ]
}
