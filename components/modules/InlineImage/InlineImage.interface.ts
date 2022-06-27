import Image from '@components/interfaces/Image'

export default interface IInlineImage {
  fieldGroupName: string
  alignment: 'left' | 'right'
  image: Image
}
