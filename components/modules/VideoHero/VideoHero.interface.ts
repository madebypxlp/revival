import Image from '@components/interfaces/Image'

export default interface IVideoHero {
  fieldGroupName: string
  image: Image
  logo: {
    sourceUrl: string
    altText: string
  }
  videoName: string
  vimeoId: string
}
