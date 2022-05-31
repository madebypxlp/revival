import Link from '@components/interfaces/Link'

export default interface IChipLinks {
  fieldGroupName: string
  headline: string
  links: [
    {
      link: Link
      defaultYellow: boolean
    }
  ]
}
