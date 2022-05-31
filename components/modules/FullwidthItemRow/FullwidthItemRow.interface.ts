import Link from '@components/interfaces/Link'

export default interface IFullwidthItemRow {
  fieldGroupName: string
  backgroundColor: string
  headline: string
  subline: string
  items: {
    label: string
    link: Link
    icon: {
      altText: string
      sourceUrl: string
    }
  }
}
