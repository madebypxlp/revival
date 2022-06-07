import Image from '@components/interfaces/Image'

export default interface IAccordionWithImage {
  image: Image
  subline: string
  headline: string
  accordion: [
    {
      headline: string
      copy: string
    }
  ]
}
