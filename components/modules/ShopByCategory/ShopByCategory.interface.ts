import Link from '@components/interfaces/Link'

export default interface IShopByCategory {
  fieldGroupName: string
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
