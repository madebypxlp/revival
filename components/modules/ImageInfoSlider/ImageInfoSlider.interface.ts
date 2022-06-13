import Image from '@components/interfaces/Image'

export default interface IImageInfoSlider {
  fieldGroupName: string
  headline: string
  slides: [
    {
      copy: string
      headline: string
      image: Image
    }
  ]
}
