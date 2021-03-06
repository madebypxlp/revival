import Image from '@components/interfaces/Image'
import Link from '@components/interfaces/Link'

export default interface IProductCategoryContentTabs {
  fieldGroupName: string
  tabs: [
    {
      copy: string
      headline: string
      image: Image
      link: Link
      primaryName: string
      productCarousel: [
        {
          headline: string
          productId: string
        }
      ]
    }
  ]
}
