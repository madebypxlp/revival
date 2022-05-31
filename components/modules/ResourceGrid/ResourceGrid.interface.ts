import Link from '@components/interfaces/Link'

export default interface IResourceGrid {
  fieldGroupName: string
  headline: string
  link: Link
  featuredResource: {
    id: string
    featuredImage: {
      node: {
        sourceUrl: string
        altText: string
      }
    }
    title: string
  }
}
