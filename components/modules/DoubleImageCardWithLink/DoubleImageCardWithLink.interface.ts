import Image from '@components/interfaces/Image'
import Link from '@components/interfaces/Link'

export default interface IDoubleImageCardWithLink {
  fieldGroupName: string
  cards: [
    {
      headline: string
      image: Image
      link: Link
    }
  ]
}
