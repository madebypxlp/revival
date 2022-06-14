import Link from '@components/interfaces/Link'

export default interface IInlineText {
  fieldGroupName: string
  backgroundPawImage: boolean
  headline: string
  text: string
  headlineColor: 'red' | 'blue'
  link: Link
}
