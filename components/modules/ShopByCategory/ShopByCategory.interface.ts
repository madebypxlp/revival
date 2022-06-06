import Link from '@components/interfaces/Link'

export default interface IShopByCategory {
  fieldGroupName: string
  headline: string
  categories: [
    {
      link: Link
      image: {
        sourceUrl: string
        altText: string
      }
    }
  ]
}
