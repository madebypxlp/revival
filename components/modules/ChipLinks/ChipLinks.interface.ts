import Link from '@components/interfaces/Link'

export default interface IChipLinks {
  fieldGroupName: string
  headline: string
  fullwidthVariant: boolean
  links: [
    {
      link: Link
      defaultYellow: boolean
    }
  ]
}
