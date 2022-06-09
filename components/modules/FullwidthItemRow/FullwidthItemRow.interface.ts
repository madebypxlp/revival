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
      icon: {
        altText: string
        sourceUrl: string
      }
    }
  ]
}
