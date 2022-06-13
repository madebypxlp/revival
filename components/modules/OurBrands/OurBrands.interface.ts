import { MediaItem } from '@components/interfaces/Image'
import Link from '@components/interfaces/Link'

export default interface IOurBrands {
  fieldGroupName: string
  rows: [
    {
      headline: string
      link: Link
      brands: [
        {
          brandLogo: MediaItem
          url: string
        }
      ]
    }
  ]
}
