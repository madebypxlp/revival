import Link from '@components/interfaces/Link'

export default interface IBlogFilter {
  fieldGroupName: string
  featuredCategories: {
    id: string
    name: string
    slug: string
  }
  actionCta: Link
}
